# NBG Latino App — Design Spec
**Date:** 2026-04-07
**Type:** PWA (Progressive Web App)
**Project:** National Brokers Group — Internal Agent Hub

---

## Overview

A mobile PWA that serves as a centralized hub for NBG Latino insurance agents. All 30 tools, resources, training materials, and support channels are accessible from a single app — without App Store or Play Store distribution.

Agents install it by scanning a QR code or opening a link (e.g., shared via Telegram). It appears on their home screen and behaves like a native app.

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | Matches existing projects, PWA-ready |
| Styling | Tailwind CSS | Matches existing projects |
| Deployment | Vercel | Free tier, instant deploys |
| PWA | next-pwa or built-in Next.js manifest | Home screen install, splash screen, offline cache |

---

## Visual Design

| Token | Value |
|---|---|
| Background | `#060e1f` |
| Card surface | `#0d1f45` |
| Gold accent | `#C9A84C` |
| Primary text | `#FFFFFF` |
| Secondary text | `#94a3b8` |
| Border subtle | `#1a2f5e` |
| Border gold | `#C9A84C55` |

**Typography:** System font stack (`-apple-system, 'Segoe UI', sans-serif`)
**Brand:** "NBG" in white italic bold + "LATINO" in gold spaced caps

---

## Navigation Structure

```
/ (Home)
  └── Header: NBG Latino logo + agent greeting
  └── Bulletin banner (latest active bulletin)
  └── 7-category icon grid

/categoria/[slug]
  └── Back arrow + category title
  └── Scrollable list of items in that category

/item/[slug]
  └── Renders based on content type (see below)
```

No authentication. All routes are publicly accessible.

---

## Categories & Items

### 1. 🏆 Dashboard (`/categoria/dashboard`)
| Item | Type |
|---|---|
| Leaderboard | Static image/data display (sourced from `/public/data/leaderboard.json`) |
| Important Bulletins | Image / text display |

### 2. 🎓 Capacitación (`/categoria/capacitacion`)
| Item | Type |
|---|---|
| XCEL Pre-Licensing Course | PDF + Link |
| Pre-Licensing Center | External link (Google Drive) |
| Fast Start Guide | PDF (checklist) |
| NBG University | PDF + Link (NBGLiveTraining.com) |
| NBG Training Calendar | PDF + Link (NBGTraining.com) |
| NBG Join a Training | External link (NBGTraining.com) |
| Carrier Training Sites | Link list |

### 3. 💼 Ventas (`/categoria/ventas`)
| Item | Type |
|---|---|
| Submit Your New Sale | WebView (policysubmit.com) |
| Quick Quote & Health Underwriting | External link (insurance toolkits) |
| NBG Annuity Support | WebView (nbgannuity.com) |
| NBG Carrier Electronic Application Sites | Link list |

### 4. 🛠 CRM & Tech (`/categoria/crm-tech`)
| Item | Type |
|---|---|
| CRM+ | External link (sign up / log in / support) |
| NBG Technology Package | External link (MyAdvisor Cloud) |

### 5. 👥 Equipo (`/categoria/equipo`)
| Item | Type |
|---|---|
| Add a New Recruit | WebView (nbghire.com) |
| NBG 7th Level Qualification | WebView (nbg7thlevel.com) |
| NBG Manager Levels | Image + external link (promotion submit) |
| NBG Compensation Protection | WebView (nbgcomp.com) |

### 6. 📁 Recursos (`/categoria/recursos`)
| Item | Type |
|---|---|
| NBG Carrier List | PDF |
| NBG Events | Image gallery |
| NBG Google Drive | External link |
| Apparel Site | External link |
| Join Telegram Chat | External link |

### 7. 🎫 Soporte (`/categoria/soporte`)
| Item | Type |
|---|---|
| Policy Conservation | Email link (Policyconservation@NationalBrokersGroup.com) |
| Case Management | Email link (Casemanagement@NationalBrokersGroup.com) |
| Debt Management | Email link (DebtManagement@NationalBrokersGroup.com) |
| Contact Us | Email link (Support@NationalBrokersGroup.com) |
| Support Ticket | In-app form → **[PLACEHOLDER: destination TBD]** |

---

## Content Types

### WebView
- Full-screen iframe or webview component
- Back button in header to return to category
- Sites: policysubmit.com, nbgannuity.com, nbg7thlevel.com, nbghire.com, nbgcomp.com

### External Link
- Opens in device browser (`target="_blank"`)
- No special handling needed

### PDF Viewer
- Rendered inline using browser's native PDF support or `<iframe>`
- PDFs stored in `/public/pdfs/` or linked from existing Google Drive

### Email Link
- `mailto:` link — opens device's default email app with pre-filled address

### In-App Form (Support Ticket)
- Fields: Agent name, email, topic (dropdown), description (textarea)
- Submit action: **[PLACEHOLDER — email address or CRM API endpoint TBD]**
- Success state: confirmation message shown in app

---

## PWA Configuration

- `manifest.json`: name "NBG Latino", short_name "NBG", background `#060e1f`, theme `#060e1f`, display `standalone`
- App icon: NBG Latino logo on dark navy background (192x192, 512x512)
- Splash screen: NBG Latino branding centered on `#060e1f`
- Service worker: cache-first for static assets, network-first for dynamic content

---

## Data & Content Management

**Static content (v1):** All links, PDFs, and images are hardcoded in the codebase. Updates require a code deploy (Vercel auto-deploys on git push — fast enough for internal use).

**Dynamic content (v1):** Leaderboard and Bulletins are managed via static JSON files in `/public/data/` — updated by editing files and pushing to git.

No CMS or database required for v1.

---

## Out of Scope (v1)

- User authentication / agent profiles
- Push notifications
- Admin dashboard for content management
- Analytics
- Multi-language support
