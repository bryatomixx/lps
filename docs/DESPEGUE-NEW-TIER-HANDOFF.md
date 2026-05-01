# Despegue — New Entry Tier (Handoff para Alex)

**Estado:** nuevo tier · separado de PR 1 (rename) · típicamente PR 2 o PR posterior
**Aprobado por:** Carlos · 2026-05-01
**Preview visual:** [`docs/previews/pricing-comparison-preview.html`](previews/pricing-comparison-preview.html) — sección al final del archivo

---

## Contexto

Latino operadores que apenas arrancan ($0–$80K revenue/año) NO pueden con Núcleo a $497/mo + $1,497 setup. Pero tampoco tiene sentido mandarlos a HighLevel directo a $97/mo — Carlos pasó por eso años atrás y la observación es:

> *"El latino no sabe bregar con GHL y lo cancela rápido."*

Un tier de plataforma sin soporte tiene churn de 25–40% en los primeros 90 días en el segmento Hispanic SMB. CAC nunca se recupera.

**Solución:** crear un tier de entrada con suficiente soporte para que el operador aprenda sin cancelarse — pero no tan caro que cannibalice Núcleo.

---

## Specs del tier Despegue

### Pricing
- **Mensualidad:** $297/mo USD
- **Setup:** $0 — sin friction de entrada
- **Compromiso:** mes a mes (default) — *Carlos puede preferir mínimo 3 meses para reducir churn temprano · pendiente confirmar*
- **Anual prepago:** 25% off (mismo modelo que los otros tiers) → $2,673/año

### Lo que incluye
- Acceso a la plataforma LPS (sub-cuenta HighLevel branded LPS)
- **1 sesión de onboarding bilingüe en vivo** (mes 1 · 90 min · 1-on-1)
- **1 automatización pre-configurada** (lead nuevo → respuesta inmediata, set up por LPS team)
- **Office hours grupales mensuales** (1 hora · varios clientes simultáneos · en español)
- Soporte email/chat bilingüe (cola compartida · respuesta &lt;24h hábiles)
- Docs y video tutoriales en español
- CRM básico, formularios, automatizaciones que el cliente arme self-service

### Lo que NO incluye (importante para diferenciar de Núcleo)
- Voice agent
- Chatbot
- Specialist asignado 1-on-1
- Call mensual de optimización 1-on-1
- Custom build / configuración hecha para el cliente
- Garantía de 30 días de lanzamiento (esa es de Núcleo+)
- SLA mensual de respuesta &lt;4h hábiles

### Path de upgrade a Núcleo
Cuando un cliente Despegue quiera crecer:

> *"Tu plataforma ya está corriendo con tu data, contactos, y la automatización configurada. Para subir a Núcleo, solo expandimos lo que ya tienes — agregamos voice agent, chatbot, specialist asignado y la call 1-on-1 mensual. **El setup de $1,497 que cobramos a clientes nuevos a ti no aplica** — el sistema ya está configurado por ti durante tu tiempo en Despegue."*

Implicación técnica: cuando el cliente Despegue upgrade a Núcleo, NO se ejecuta el flujo de payment de setup ($1,497). Solo se cambia el plan al mensual de $497 y se inicia la entrega de specialist + voice agent + chatbot.

---

## Posicionamiento en el sitio

**NO es 5ta columna en la comparativa de tiers.** Carlos rechazó esto explícitamente — "no overwhelming de ofertas".

**Sí va en sección separada** debajo del ladder principal. Estructura visual final:

```
┌──────────────────────────────────────────────────────────┐
│  Section header: "Enterprise Infrastructure at Every     │
│  Budget"                                                 │
└──────────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────┐
│  4-tier comparison: Núcleo / Pulso / Órbita / Constelación │
└──────────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────┐
│  Disclaimer: "All plans include free strategy call..."   │
└──────────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────┐
│  Divider sutil                                           │
└──────────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────┐
│  Intro: "¿Recién empezando? Empieza con Despegue"        │
└──────────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────┐
│  Despegue banner — horizontal navy panel + CTA dorado   │
│  · Visualmente distinto de las 4 cards verticales        │
│  · Mismo branding (navy + gold, mismo design system)    │
└──────────────────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────────────────┐
│  Pie en italic: "Despegue es nuestra puerta de entrada... │
│   cuando estés listo, Núcleo te espera sin pagar setup"  │
└──────────────────────────────────────────────────────────┘
```

Ver [`docs/previews/pricing-comparison-preview.html`](previews/pricing-comparison-preview.html) para diseño visual exacto. La sección Despegue está al final del archivo.

---

## Implementación técnica

### 1. Nueva ruta `/despegue` y `/es/despegue`

Crear:
- `latin-prime-v2/app/despegue/page.tsx`
- `latin-prime-v2/app/es/despegue/page.tsx`

Página dedicada similar al patrón de `/starter` (que se está renombrando a `/nucleo` en PR 1). Carlos no ha priorizado una página dedicada de Despegue — primero sale en pricing comparison. Página dedicada puede ser PR posterior.

**Decisión sugerida:** crear página dedicada mínima (hero + features + CTA) para que el SEO funcione. No tiene que ser tan rica como las páginas de Núcleo/Pulso/Órbita/Constelación.

### 2. Componente nuevo en Pricing.tsx

Después de los 4 tiers actuales, agregar una sección con un componente nuevo `DespegueSection`. Visual:

- Horizontal navy panel (gradiente `#0E1A2E` → `#162842`)
- Borde dorado sutil
- 3 columnas: brand+price | features | CTA
- Mobile: stack vertical

Ver CSS y HTML exactos en `docs/previews/pricing-comparison-preview.html` líneas 163–211 (CSS) y la sección que empieza con `<div class="despegue-section">` (HTML).

### 3. Datos del tier en Pricing.tsx

Agregar a `t.en.despegue` y `t.es.despegue`:

```typescript
despegue: {
  tier: "Despegue",
  outcome: "El primer impulso — plataforma con onboarding bilingüe y soporte grupal mensual.",
  tagline: "Cuando crezcas, gradúas a Núcleo sin pagar setup.",
  priceUSD: 297,
  setupUSD: 0,
  features: [
    "Acceso a la plataforma LPS (CRM, automatizaciones básicas, formularios)",
    "1 sesión de onboarding bilingüe en vivo (mes 1 · 90 min · 1-on-1)",
    "1 automatización pre-configurada (lead nuevo → respuesta inmediata)",
    "Office hours grupales mensuales · 1 hora · en español",
    "Soporte email/chat bilingüe (cola compartida · respuesta <24h hábiles)",
    "Docs y video tutoriales en español",
  ],
  notIncluded: "Sin voice agent · sin chatbot · sin specialist asignado · sin call 1-on-1",
  cta: "Empezar con Despegue →",
  ctaHref: DESPEGUE_PAYMENT,
  upgradeNote: "¿Listo para más? Núcleo $497/mo →",
}
```

### 4. Payment link constant

Carlos creará el payment link en HighLevel para Despegue. Variable a agregar en `Pricing.tsx`:

```typescript
const DESPEGUE_PAYMENT = "https://link.latinprimesystems.com/payment-link/[ID]";
```

(Carlos te pasa el ID cuando lo cree)

### 5. Footer / Nav

- Footer: agregar link a "Despegue" en lista de planes
- Nav: NO agregar a navegación principal (el lugar es dentro de pricing comparison, no como item de menú propio). Pero sí agregar redirect en `/precios` o `/pricing` para que ancle a la sección Despegue si quiere alguien linkear directamente: `/pricing#despegue`.

### 6. Sitemap

Agregar `/despegue` y `/es/despegue` a `app/sitemap.ts`.

---

## Preguntas operacionales abiertas (para confirmar con Carlos antes de mergear)

1. **Office hours grupales mensuales** — 1 hora con varios clientes simultáneos. ¿Operativamente factible cuando hay 50+ clientes Despegue? ¿Quién lo da (Carlos, specialist, externo)?

2. **Onboarding 1-on-1 de 90 min** — ¿factible delivery a escala? Si no, alternativa: video grabado bilingüe de 60 min + Q&A grupal en la primera office hour.

3. **Compromiso mínimo de 3 meses** — Carlos no confirmó si lo agregamos para reducir churn temprano. Default actual: mes a mes. Cambiar después si se ve churn alto.

4. **Path de upgrade sin setup** — Carlos aprobó el mensaje de venta. Implementación técnica: el flujo de upgrade NO ejecuta el payment de $1,497 setup de Núcleo. Confirmar con backend que esto es viable en HighLevel.

5. **Página dedicada `/despegue`** — ¿priority alta, o solo banner en pricing por ahora?

---

## Validación / smoke test

```bash
npm install
npm run build
npm run dev
```

Verificar en `http://localhost:3000`:
- [ ] Comparativa principal de 4 tiers (Núcleo/Pulso/Órbita/Constelación) sin alterar
- [ ] Banner Despegue aparece debajo de la comparativa, después del disclaimer
- [ ] Mismo branding (navy + gold) que el resto del site
- [ ] CTA "Empezar con Despegue" lleva al payment link correcto
- [ ] Mobile: el banner Despegue stackea correctamente (3 columnas → vertical)
- [ ] Versión `/es/` muestra texto en español
- [ ] Currency switcher funciona (Despegue $297 USD = ~$1,247,000 COP / ~$5,200 MXN aprox)

---

## Lo que NO está en este handoff

- Páginas dedicadas de los otros 3 tiers nuevos (`/pulso`, `/orbita`, `/constelacion`) — eso es PR 2 separado, ver `docs/previews/` para los HTMLs de referencia
- Cupos finales en cada tier (voice 200/500/700, chatbot 1k/2.5k/6k, users 2/5/15) — eso es PR 2/3
- LATAM pricing strategy específico para COP/MXN/SVC — pendiente decisión de Carlos

---

**Cuando termines:** convierte el PR de draft a "Ready for review" y notifica a Carlos.
