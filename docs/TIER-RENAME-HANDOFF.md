# Tier Rename — Handoff para Alex

**Branch:** `feat/tier-rename-nucleo-pulso-orbita-constelacion`
**PR:** parte 1 de 3 (rename only · no content/cupo changes en este PR)
**Aprobado por:** Carlos · 2026-05-01

---

## Contexto

Estamos rebrandeando los 4 tiers de pricing de Latin Prime Systems con nomenclatura consistente y bajando setup fees al benchmark de mercado verificado (1×–3× la mensualidad).

| Antes | Después | Mensual | Setup antes | Setup después |
|---|---|---|---|---|
| Starter | **Núcleo** | $497 | $2,497 | **$1,497** |
| Pro | **Pulso** | $997 | $3,997 | **$1,997** |
| Growth | **Órbita** | $1,797 | $5,997 | **$2,997** |
| Enterprise | **Constelación** | Custom | $8,997+ | $8,997+ *(sin cambio en este PR)* |

Las mensualidades **no cambian**. Solo cambian: nombres de tiers, setup fees de los primeros 3, y rutas asociadas.

**Founding 50 NO va.** Carlos rechazó cualquier promo de "early adopter" — comunica startup buscando clientes, contrario al posicionamiento enterprise.

**Constelación pricing:** se mantiene visible "from $8,997" en este PR. Decisión de cambiar a "Custom — contact sales" puro queda para PR posterior.

---

## Lo que ya está hecho (commit `e222dbc`)

✅ `latin-prime-v2/components/Pricing.tsx` — completamente renombrado (EN + ES)
- Tiers renombrados en `plans` arrays
- `setupLabel` actualizados a nuevos montos
- `monthlyCTA` keys actualizados
- Constantes payment link renombradas (`STARTER_PAYMENT` → `NUCLEO_PAYMENT`, etc.)
- Variables `priceUSD`/`setupUSD` actualizadas
- Comparaciones JSX `plan.tier === "X"` actualizadas
- Rutas `viewDetails` actualizadas (`/starter` → `/nucleo`)

---

## Lo que falta (21 archivos)

### Componentes — `latin-prime-v2/components/`

| Archivo | Acción |
|---|---|
| `Nav.tsx` | Renombrar links del menú a tiers nuevos |
| `Footer.tsx` | Mismo |
| `FAQ.tsx` y `es/FAQ.tsx` | Renombrar referencias en preguntas/respuestas |
| `StarterPage.tsx` | **Renombrar archivo a `NucleoPage.tsx`** + actualizar contenido |
| `Solutions.tsx` | Renombrar tier mentions |
| `ROICalculator.tsx` | Renombrar tier opciones del calculator |
| `InternalDiagnostic.tsx` | Renombrar tier recommendations |
| `AutomationQuiz.tsx` | Renombrar tier results |
| `PlanGuide.tsx` y `es/PlanGuide.tsx` | Renombrar plan comparisons |
| `es/Pricing.tsx` | **Verificar si existe versión separada** o si es solo `Pricing.tsx` con `lang` prop. Si existe separado, aplicar mismos cambios que `Pricing.tsx`. |

### Páginas — `latin-prime-v2/app/`

| Archivo | Acción |
|---|---|
| `layout.tsx` | Verificar metadata/title con tier names |
| `es/layout.tsx` | Mismo |
| `starter/page.tsx` | **Renombrar carpeta a `nucleo/`** + actualizar metadata title/description |
| `es/starter/page.tsx` | Mismo (`es/nucleo/`) |
| `dashboards/page.tsx` | Renombrar tier mentions |
| `dashboards/t.ts` | Renombrar tier mentions en strings |
| `dashboards/DashboardsContent.tsx` | Renombrar tier mentions |

### Lib

| Archivo | Acción |
|---|---|
| `lib/niches.ts` | Verificar referencias a tiers en niche FAQs (cuidado: contiene "Aesthetics Pro" y "Housecall Pro" que son **third-party brands**, NO tocar) |

---

## Patrón de búsqueda y reemplazo (por seguridad)

### Reemplazos seguros (bulk OK)

```
"Starter"      → "Núcleo"
"Growth"       → "Órbita"
"Enterprise"   → "Constelación"
"Pro:"         → "Pulso:"     (object key con dos puntos)
'"Pro"'        → '"Pulso"'    (string con comillas)
"Núcleo & Pro" → "Núcleo & Pulso"
"plan Pro"     → "plan Pulso" (en plain text)
```

### Reemplazos riesgosos (NO hacer bulk, requiere edit por contexto)

- **`Pro` en plain text** — puede matchear:
  - "Aesthetics Pro" (brand third-party · `lib/niches.ts:764`)
  - "Housecall Pro" (brand third-party · `lib/niches.ts:941`)
  - "Proposal" (palabra normal)
  - "Professional" (palabra normal)
  - "Process" (palabra normal)
  - "Profundo" (palabra normal en español · ej. "Diagnóstico Profundo")

- **Variables JS internas** como `isPro`, `STARTER_LABEL` — no es necesario renombrarlas (son identificadores internos, funcionan igual). Renombrarlas es opcional para legibilidad.

### Setup amounts a reemplazar

```
"$2,497 one-time setup"      → "$1,497 one-time setup"
"$3,997 one-time setup"      → "$1,997 one-time setup"
"$5,997 one-time setup"      → "$2,997 one-time setup"
"$2,497 implementación única" → "$1,497 implementación única"
"$3,997 implementación única" → "$1,997 implementación única"
"$5,997 implementación única" → "$2,997 implementación única"
```

### Rutas

```
/starter      → /nucleo       (renombrar carpetas: app/starter/ → app/nucleo/)
/es/starter   → /es/nucleo    (renombrar carpetas: app/es/starter/ → app/es/nucleo/)
```

Para renombrar carpetas usar `git mv` para preservar historia:

```bash
git mv latin-prime-v2/app/starter latin-prime-v2/app/nucleo
git mv latin-prime-v2/app/es/starter latin-prime-v2/app/es/nucleo
```

---

## Lo que NO está en este PR (siguientes PRs)

**PR 2 — Update content + cupos:**
- Actualizar features lists en cada plan con cupos verificados
- Voice agent: 200 / 500 / 700 min/mes (vs cupos vacíos hoy)
- Chatbot: 1,000 / 2,500 / 6,000 conv/mes
- Usuarios CRM: 2 / 5 / 15
- Automatizaciones: 3 nombradas (Núcleo) / ilimitadas (Pulso+)
- Call cadence: mensual / quincenal / quincenal+trimestral

**PR 3 — Constelación enterprise:**
- Discovery form en lugar de pricing card
- Testimonio NBG Latino (logo en `/public/`, quote autorizado por Marco Conde)
- Stack comparison vs Salesforce/HubSpot Enterprise
- Bilingual CSM como diferenciador
- Página dedicada en `app/constelacion/` (y `app/es/constelacion/`)

Carlos tiene los 4 landings de referencia como HTML standalone en `~/Desktop/Latin Pirme Systems/`:
- `nucleo-landing-es.html`
- `pulso-landing-es.html`
- `orbita-landing-es.html`
- `constelacion-landing-es.html`

---

## Validación / smoke test antes de mergear

```bash
# Dependencias
npm install

# Build verificación
npm run build

# Dev local
npm run dev
```

Verificar manualmente en `http://localhost:3000`:
- [ ] Pricing comparison cards muestran "Núcleo / Pulso / Órbita / Constelación"
- [ ] Setup fees muestran "+$1,497 / +$1,997 / +$2,997 / from $8,997" en USD
- [ ] Currency switcher (USD/COP/MXN) sigue funcionando
- [ ] Annual/monthly toggle funciona
- [ ] CTA buttons llevan a payment links correctos
- [ ] Link "See full Núcleo details →" lleva a `/nucleo` (no 404)
- [ ] Versión `/es/` muestra mismos tiers en español

---

## Edge cases conocidos

1. **Variables internas con accents** — al usar replace_all, algunos JS identifiers internos quedaron con caracteres especiales (ej. `ctaConstelación`, `isÓrbita`). TypeScript los acepta pero son inusuales de leer. Renombrarlos a ASCII (`ctaCustom`, `isFeatured`) es opcional.

2. **`StarterPage` component** — renombrarlo a `NucleoPage` requiere también actualizar import en `app/starter/page.tsx`. Ese archivo se va a mover a `app/nucleo/page.tsx` así que es buen momento de hacer ambos cambios juntos.

3. **`lib/niches.ts`** contiene FAQs por industria que mencionan tiers. Buscar `Starter|Pro|Growth|Enterprise` con cuidado — pueden ser tiers o brands third-party (Aesthetics Pro, Housecall Pro). Solo cambiar los que son tiers de LPS.

4. **`STARTER_DETAIL_HREF` y similares** — si existe alguna constante similar fuera de `Pricing.tsx`, renombrarla por consistencia. Buscar con `grep -r "STARTER_\|GROWTH_\|ENTERPRISE_" --include="*.tsx" --include="*.ts"`.

---

## Preguntas abiertas para Carlos

- **Constelación setup pricing** — ¿lo dejamos en "from $8,997" o lo cambiamos a "Custom — contact sales" sin floor visible? (decisión separada de este PR)
- **Routes nuevas** — ¿queremos redirects de `/starter` → `/nucleo` para no romper SEO existente? Si sí, agregar en `next.config.ts`.
- **Sitemap** — actualizar `app/sitemap.ts` con nuevas rutas.

---

**Cuando termines tu parte:** convierte este PR de draft a "Ready for review" y notifica a Carlos. Si encuentras edge cases que esta doc no cubrió, agrégalos a la sección "Edge cases" antes de mergear para futuros refactors.
