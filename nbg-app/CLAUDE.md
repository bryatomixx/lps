@AGENTS.md

# NBG Latino App — Agent Handoff

## ¿Qué es esto?

PWA (Progressive Web App) para agentes de seguros de **NBG Latino (National Brokers Group)**. Es un hub centralizado con 29 herramientas, recursos de capacitación, y canales de soporte — todo en una app que los agentes instalan desde un QR code o link, sin necesidad de App Store ni Play Store.

**Branding:** Azul marino `#060e1f` + dorado `#C9A84C`  
**Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Vitest + RTL  
**Deploy:** Vercel (pendiente — ver abajo)

---

## Estado actual: Tasks 1–12 completas, Task 13 pendiente

| Task | Estado | Descripción |
|---|---|---|
| 1 — Scaffold | ✅ | Next.js 16.2.3 + Vitest configurados |
| 2 — Data layer | ✅ | 29 items, 7 categorías, tipos TypeScript |
| 3 — Estilos + Layout | ✅ | CSS vars de marca, manifest.json, layout PWA |
| 4 — Headers | ✅ | AppHeader, BackHeader con tests |
| 5 — Home components | ✅ | BulletinBanner, CategoryGrid con tests |
| 6 — Home page | ✅ | `app/page.tsx` ensamblado |
| 7 — Category page | ✅ | `app/categoria/[slug]/page.tsx` + ItemList con tests |
| 8 — WebView + PDF | ✅ | WebViewRenderer, PdfRenderer |
| 9 — Link renderers | ✅ | LinkRenderer, LinkListRenderer |
| 10 — Support Ticket | ✅ | SupportTicketRenderer con form + tests |
| 11 — Item page | ✅ | `app/item/[slug]/page.tsx` → delega al renderer correcto |
| 12 — Build verify | ✅ | 20/20 tests, 40 páginas estáticas, build limpio |
| **13 — Deploy Vercel** | **⏳ PENDIENTE** | Ver instrucciones abajo |

### Tests actuales
```bash
npm test   # → 20/20 passing
npm run build  # → 40 static pages, 0 errors
```

---

## Estructura de archivos

```
nbg-app/
├── app/
│   ├── layout.tsx                  # PWA meta, theme color, manifest link
│   ├── page.tsx                    # Home: header + bulletin + grid de categorías
│   ├── globals.css                 # CSS variables de marca
│   ├── categoria/[slug]/page.tsx   # Lista de items por categoría
│   └── item/[slug]/page.tsx        # Delega al renderer según item.type
├── components/
│   ├── layout/
│   │   ├── AppHeader.tsx           # Header de home (NBG LATINO + avatar)
│   │   └── BackHeader.tsx         # Header de sub-páginas (← volver)
│   ├── home/
│   │   ├── BulletinBanner.tsx     # Banner dorado con boletín activo
│   │   └── CategoryGrid.tsx       # Grid 3 columnas con las 7 categorías
│   ├── category/
│   │   └── ItemList.tsx           # Lista de items dentro de una categoría
│   └── renderers/
│       ├── WebViewRenderer.tsx    # iframe para sitios embebidos
│       ├── PdfRenderer.tsx        # Visor de PDF + botón descargar
│       ├── LinkRenderer.tsx       # Link externo o mailto:
│       ├── LinkListRenderer.tsx   # Lista de múltiples links
│       └── SupportTicketRenderer.tsx  # Formulario de soporte (placeholder submit)
├── data/
│   ├── types.ts                   # ContentType, Category, Item, etc.
│   ├── categories.ts              # 7 categorías con slug, icon, color
│   ├── items.ts                   # 29 items con type, url, categorySlug
│   ├── bulletins.json             # Boletines activos (editar aquí para actualizar)
│   └── leaderboard.json          # Datos del ranking (editar aquí para actualizar)
├── public/
│   ├── manifest.json              # PWA manifest
│   ├── icons/icon-192.png        # ⚠️ Placeholder — reemplazar con logo real
│   ├── icons/icon-512.png        # ⚠️ Placeholder — reemplazar con logo real
│   └── pdfs/                     # Carpeta para PDFs de NBG (vacía — agregar archivos)
└── __tests__/
    ├── data.test.ts               # Integridad de datos (8 tests)
    ├── AppHeader.test.tsx         # (2 tests)
    ├── CategoryGrid.test.tsx      # (4 tests)
    ├── ItemList.test.tsx          # (3 tests)
    └── SupportTicketRenderer.test.tsx  # (3 tests)
```

---

## Task 13: Deploy a Vercel (pendiente)

### Opción A — Vercel CLI
```bash
cd nbg-app
npx vercel --prod
```
Cuando pregunte el root directory: `.` (ya estás en nbg-app)

### Opción B — GitHub + Vercel dashboard
1. Mergear `feat/nbg-app` a `main`:
   ```bash
   cd "C:/Users/ADMIN/New Project"
   git merge feat/nbg-app
   git push origin main
   ```
2. Ir a https://vercel.com/new → importar el repo
3. Configurar **Root Directory** como `nbg-app`
4. Deploy

### Después del deploy
- Generar un QR code con la URL de Vercel
- Compartir con agentes via Telegram o email
- Para instalar en iPhone: Safari → Compartir → Agregar a Inicio
- Para instalar en Android: Chrome → Menú → Agregar a pantalla de inicio

---

## Cosas pendientes para completar el producto

### Urgente antes de lanzar
- [ ] **Reemplazar iconos placeholder** — `public/icons/icon-192.png` y `icon-512.png` con el logo real de NBG Latino en PNG sobre fondo `#060e1f`
- [ ] **Support Ticket** — en `components/renderers/SupportTicketRenderer.tsx` línea 54, reemplazar `console.log(...)` con la acción real (email API, CRM endpoint, etc.)

### Contenido que NBG debe proveer
- [ ] **PDFs** — subir archivos a `public/pdfs/`: `fast-start-guide.pdf`, `carrier-list.pdf`
- [ ] **Links reales de carriers** — actualizar `data/items.ts` los items con `url: 'https://www.nationalbrokersgroup.com'` (son placeholders)
- [ ] **Link real de CRM+** — actualizar slug `crm-plus` con la URL real
- [ ] **Link real del Apparel Site** — actualizar slug `apparel`
- [ ] **Link real de Quick Quote** — actualizar slug `quick-quote`
- [ ] **Leaderboard real** — editar `data/leaderboard.json` con datos reales
- [ ] **Boletines** — editar `data/bulletins.json` para actualizar el mensaje activo

### Mejoras futuras (fuera de scope v1)
- Admin dashboard para editar contenido sin tocar código
- Push notifications
- Autenticación de agentes
- Analytics de uso

---

## Cómo actualizar contenido

Todo el contenido es estático (archivos). Para actualizar:

1. **Cambiar boletín activo:** editar `data/bulletins.json` → `git push` → Vercel auto-deploya
2. **Cambiar leaderboard:** editar `data/leaderboard.json` → `git push`
3. **Agregar/quitar items:** editar `data/items.ts` → `git push`
4. **Agregar PDFs:** copiar archivo a `public/pdfs/` → `git push`

---

## Contexto del branch

- Branch de trabajo: `feat/nbg-app`
- Worktree: `C:/Users/ADMIN/.config/superpowers/worktrees/New-Project/feat-nbg-app/`
- Repo principal: `C:/Users/ADMIN/New Project/`
- Spec de diseño: `docs/superpowers/specs/2026-04-07-nbg-app-design.md`
- Plan de implementación: `docs/superpowers/plans/2026-04-07-nbg-app.md`
