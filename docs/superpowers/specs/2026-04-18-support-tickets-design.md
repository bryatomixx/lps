# Support Ticket System — Design Spec

**Date:** 2026-04-18  
**Project:** `support-tickets/` — standalone Next.js app, deployed to Vercel, embedded as iframe in GHL custom menus.

---

## Overview

A support ticket system that allows GHL accounts (both client accounts and internal agency accounts) to submit support requests, track their status, and give the internal team a global dashboard to manage all tickets across all accounts. Data is stored in Airtable, with n8n as the middleware for all reads and writes.

---

## Architecture

### Identity & Access

GHL passes `account_id` and `role` as URL query parameters when loading the iframe. No separate authentication system. The app trusts these values to determine what the user can see and do.

- `role=client` — sees only their own tickets
- `role=internal` — sees their own tickets + has access to the global dashboard

### Data Flow

**Writing a ticket:**
```
App → POST /api/tickets → n8n webhook (payload includes account_id + ticket fields) → Airtable
```

**Reading tickets:**
```
App → GET /api/tickets/list?account_id=XXX → n8n webhook → Airtable filtered by account_id → JSON
```

**Internal dashboard (all accounts):**
```
App → GET /api/tickets/list (no account_id filter or account_id=all) → n8n → Airtable all records → JSON
```

### Account Name Mapping

`account_id` values are mapped to human-readable account names inside n8n workflows. No mapping table in the app or Airtable.

---

## Data Model — Ticket Fields

| Field | Set By | Notes |
|-------|--------|-------|
| `ticket_id` | n8n (auto) | Unique identifier |
| `account_id` | GHL param | Identifies the account |
| `titulo` | Client/Internal | What needs to be done |
| `descripcion` | Client/Internal | Detail of the request |
| `fecha_deseada` | Client/Internal | Desired delivery date |
| `fecha_comprometida` | Internal team | Confirmed delivery date |
| `prioridad` | Client/Internal | Alta / Media / Baja |
| `estado` | System | Abierto → En Progreso → Completado |
| `asignado_a` | Internal team | Who takes the ticket |
| `fecha_creacion` | n8n (auto) | Creation timestamp |
| `fecha_cierre` | n8n (auto) | Set when marked Completado |
| `notas_internas` | Internal team | Not visible to clients |

---

## Views & Pages

### Client View (`role=client`)

**`/` — New Ticket Form**
- Fields: título, descripción, fecha deseada, prioridad (Alta/Media/Baja)
- On submit: POST to `/api/tickets`, show confirmation message ("Tu ticket fue enviado, te contactaremos pronto")

**`/tickets` — My Ticket History**
- Lists all tickets for the current `account_id`
- Shows: título, estado (badge), prioridad, fecha deseada, fecha comprometida (if set)
- Read-only for clients

### Internal View (`role=internal`)

**`/` — New Ticket Form**
- Same as client form. To open a ticket on behalf of a client account, the internal team opens the iframe from within that client's GHL account — the `account_id` is passed automatically.

**`/tickets` — Account Ticket History**
- Same as client view but for the internal account's own tickets

**`/dashboard` — Global Dashboard** *(only accessible with `role=internal`)*
- Metrics cards: total abiertos, en progreso, completados, vencidos
- Top accounts by open ticket count
- Table of all tickets with filters by estado, prioridad, account
- Tickets sin asignar (highlighted)
- Tickets vencidos (fecha comprometida already passed)
- Average close time per account
- Click on any ticket → detail panel to: change estado, assign to team member, set fecha comprometida, add notas internas

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui (tables, forms, badges, dialogs)
- **Data fetching:** Native fetch to n8n webhooks via server-side API routes
- **Deploy:** Vercel — independent project, fixed URL used in GHL iframe config

---

## Project Structure

```
support-tickets/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    → new ticket form
│   ├── tickets/page.tsx            → account ticket history
│   ├── dashboard/page.tsx          → global dashboard (internal only)
│   └── api/
│       ├── tickets/route.ts        → POST → n8n write webhook
│       ├── tickets/list/route.ts   → GET → n8n read webhook
│       └── tickets/[id]/route.ts  → PATCH → n8n update webhook
├── components/
│   ├── TicketForm.tsx
│   ├── TicketList.tsx
│   ├── TicketCard.tsx
│   └── dashboard/
│       ├── AccountsTable.tsx
│       ├── MetricsCards.tsx
│       └── TicketDetail.tsx
└── lib/
    └── n8n.ts                      → webhook URL constants + fetch helpers
```

---

## n8n Webhook Endpoints (to be configured)

| Action | Method | Trigger from App |
|--------|--------|-----------------|
| Create ticket | POST | `/api/tickets` → n8n write webhook |
| List tickets by account | GET | `/api/tickets/list?account_id=XXX` → n8n read webhook |
| Update ticket | PATCH | `/api/tickets/[id]` → n8n update webhook |

---

## Out of Scope (MVP)

- Email/SMS notifications (n8n handles any notification logic externally)
- File attachments on tickets
- Comments/thread on tickets
- Separate login system
- Mobile app
