"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";
const STARTER_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/692e34bda611824d7675e7f0";
const PRO_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/69cc6409c6a0e600f4d06bd2";
const GROWTH_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/692e3647d8c1a8022cff08f1";

type Lang = "en" | "es";
type Currency = "USD" | "COP" | "MXN";

// Approximate rates — USD is the billing currency
const RATES: Record<Currency, number> = { USD: 1, COP: 4200, MXN: 17.5 };
const CURRENCY_LABELS: Record<Currency, string> = {
  USD: "🇺🇸 USD",
  COP: "🇨🇴 COP",
  MXN: "🇲🇽 MXN",
};

/** Round to a "clean" number based on magnitude — no ugly decimals or long strings */
function roundNicely(n: number): number {
  if (n >= 1_000_000) return Math.round(n / 100_000) * 100_000; // 2,087,400 → 2,100,000
  if (n >=    50_000) return Math.round(n /   5_000) *   5_000; // 69,947 → 70,000
  if (n >=     5_000) return Math.round(n /     500) *     500; // 17,447 → 17,500
  if (n >=       500) return Math.round(n /      50) *      50; // 847 → 850
  return Math.round(n / 10) * 10;
}

function toLocal(n: number, currency: Currency): string {
  const rounded = roundNicely(n);
  if (currency === "COP") return rounded.toLocaleString("es-CO");
  return rounded.toLocaleString("es-MX");
}

function formatPrice(usd: number | null, currency: Currency): string {
  if (usd === null) return "Custom";
  if (currency === "USD") return `$${usd.toLocaleString("en-US")}`;
  return `$${toLocal(usd * RATES[currency], currency)}`;
}

function formatSetup(usd: number | null, currency: Currency, label: string, from = false): string {
  if (usd === null) return label;
  const pre = from ? "from " : "";
  if (currency === "USD") return `+ ${pre}$${usd.toLocaleString("en-US")} one-time setup`;
  return `+ ${pre}$${toLocal(usd * RATES[currency], currency)} ${currency} cuota de implementación única`;
}

interface Plan {
  tier: string;
  tagline: string;
  priceUSD: number | null;
  setupUSD: number | null;
  setupLabel: string;
  setupFrom?: boolean;
  priceSub: string;
  ideal: string;
  featured: boolean;
  badge?: string;
  guarantee: string;
  cta: string;
  ctaHref: string;
  features: Array<string | { section: string }>;
}

type Billing = "monthly" | "annual";

const ANNUAL_DISCOUNT = 0.25;

function getDisplayPrice(usd: number | null, billing: Billing): number | null {
  if (usd === null) return null;
  if (billing === "annual") return Math.round(usd * (1 - ANNUAL_DISCOUNT));
  return usd;
}

const PREVIEW_COUNT = 5; // items shown before "see more"

export default function Pricing({ lang = "en" }: { lang?: Lang }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [billing, setBilling] = useState<Billing>("monthly");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const t = {
    en: {
      // Divider
      dividerLabel: "Monthly Plans — Full Implementation",
      // Section header
      sectionLabel: "Investment",
      sectionTitle1: "Enterprise Infrastructure",
      sectionTitle2: "at Every Budget",
      sectionDesc:
        "Choose the level that fits where your business is today — and upgrade as you grow. Every plan includes setup, configuration, and ongoing support.",
      // Billing toggle
      billingMonthly: "Monthly",
      billingAnnual: "Annual",
      billingBadge: "SAVE 25%",
      annualNote: "Annual pricing shown · billed as one yearly payment",
      billedAnnually: "✓ Billed annually · 25% saved",
      // Currency toggle
      currencyLabel: "Currency:",
      currencyApprox: "≈ Approximate · USD is the billing currency",
      // Feature expand/collapse
      showLess: "↑ Show less",
      moreFeatures: (n: number) => `+ ${n} more features`,
      // Footer disclaimer
      disclaimer:
        "All plans include a free strategy call before you commit. No long-term contracts — cancel anytime. Setup fee is paid once at the start — it covers full system build, configuration, and launch.",
      // CTA logic
      ctaEnterprise: "Request Proposal",
      ctaAnnualBook: "Book My Strategy Call →",
      monthlyCTA: {
        Starter:    "Get My Starter System →",
        Pro:        "Get My Pro System →",
        Growth:     "Get My AI Stack →",
        Enterprise: "Request Proposal",
      } as Record<string, string>,
      ctaFallback: "Get Started →",
      // Add-ons section
      addOnsLabel: "Optional Upgrades",
      addOnsTitle1: "Add AI Capabilities to",
      addOnsTitle2: "Any Plan",
      addOnsDesc:
        "Not ready for Growth? Add individual AI capabilities to your Starter or Pro plan — and upgrade to the full stack whenever you're ready.",
      addOnOneTimeLabel: "One-time setup",
      addOnMonthlyLabel: "Monthly",
      addOnFootnote:
        "Add-ons are included by default in the Growth plan. Ask about bundling during your strategy call.",
      addOns: [
        {
          icon: "🎙️",
          name: "Voice AI Agent",
          desc: "An AI that answers your inbound calls, qualifies leads, and books appointments — automatically, around the clock.",
          setup: 1497,
          monthly: 497,
          available: "Available for Starter & Pro",
          highlight: true,
        },
        {
          icon: "🔊",
          name: "Voice Cloning",
          desc: "Your AI agent speaks in your own voice — cloned and branded. Every call sounds like you, even when you're not there.",
          setup: 497,
          monthly: 197,
          available: "Available for Starter & Pro",
          highlight: false,
        },
        {
          icon: "🎬",
          name: "AI Video Avatar",
          desc: "A digital version of you for personalized video messages, follow-ups, and automated outreach that feels human.",
          setup: 997,
          monthly: 297,
          available: "Available for Pro plan only",
          highlight: false,
        },
      ],
      // Strategic Services section
      strategicLabel: "Strategic Services",
      strategicTitle1: "Start with Strategy",
      strategicTitle2: "Before You Commit",
      strategicDesc:
        "Not every business should jump straight into implementation. If you need clarity first, LPS offers strategic engagements to identify the right systems, automations, and AI opportunities before building anything.",
      // Card 1 — AI Growth Strategy Session
      card1Tag: "Strategic Engagement",
      card1Title: "AI Growth Strategy Session",
      card1Desc:
        "A focused strategic session designed to help you identify where AI, automation, CRM, and smarter systems can create the biggest impact in your business right now.",
      card1Items: [
        "60–90 minute strategy session",
        "Review of lead flow, follow-up, bottlenecks, and current systems",
        "Identification of quick wins and best-fit opportunities",
        "Clear recommendation on which LPS plan or next step makes the most sense",
      ],
      card1Ideal:
        "Best for: Small businesses, service providers, and operators who want expert direction before committing to a larger build.",
      card1Price: "From $297",
      card1PriceSub: "one-time",
      card1CTA: "Book Strategy Session",
      // Card 2 — AI Business Audit
      card2Tag: "Deep Diagnostic",
      card2Title: "AI Business Audit",
      card2Desc:
        "A deeper diagnostic engagement for businesses that already have leads, tools, teams, or workflows in place but need a clear roadmap for improvement, automation, and AI implementation.",
      card2Items: [
        "In-depth review of sales process, lead handling, follow-up, CRM, and automation",
        "Identification of inefficiencies, missed opportunities, and system gaps",
        "Strategic recommendations prioritized by impact",
        "Roadmap for implementation through LPS",
      ],
      card2Ideal:
        "Best for: Clinics, agencies, established businesses, and teams with more complex operations or multi-step sales processes.",
      card2Price: "From $750",
      card2PriceSub: "one-time",
      card2CTA: "Request an Audit",
      // Bridge block
      bridgeTitle: "Ready for Execution?",
      bridgeDesc:
        "Once the strategy is clear, LPS can build and manage the implementation through your selected Pro, Growth, or Enterprise engagement.",
      bridgeCTA: "Book a Free Call",
      // Plans
      plans: [
        {
          tier: "Starter",
          tagline:
            "Your business organized, automated, and capturing every lead — without hiring anyone new.",
          setupLabel: "+ $2,497 one-time setup",
          priceSub: "/mo",
          ideal: "Best for: Solo operators and small teams running their business without a real system.",
          badge: undefined as string | undefined,
          guarantee:
            "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost.",
          cta: "Book Your Free Strategy Call",
          features: [
            { section: "── WEBSITE ──" },
            "1-page website or landing page — professionally designed, built, and connected to your CRM",
            "Website hosting & maintenance — included every month, no extra cost",
            { section: "── CRM & PIPELINE ──" },
            "CRM fully built for your business — contacts, tags, custom fields, and pipeline stages configured from day one",
            "Lead pipeline setup — custom stages from first contact to closed deal",
            "Contact import & organization — all your existing contacts loaded and structured",
            "Lead capture forms — connected directly to your CRM, no manual entry",
            "Unified social media inbox — Instagram & Facebook DMs managed in one place",
            { section: "── AUTOMATIONS ──" },
            "Missed call text-back — automatic SMS sent in under 30 seconds when you don't answer",
            "New lead SMS follow-up sequence — 3-step automated texts the moment someone enters your pipeline",
            "New lead email follow-up sequence — automated welcome + follow-up emails",
            "Appointment confirmation & reminder — automatic messages before every booking",
            "No-show follow-up — automatic re-engagement if a client misses their appointment",
            "Social media auto-reply — responds to DMs and captures contact info when you're unavailable",
            "Online booking link — clients schedule directly to your calendar, zero back-and-forth",
            { section: "── SUPPORT ──" },
            "Onboarding & training session — full walkthrough of your system",
            "Monthly strategy call — review performance and adjust",
            "Email & chat support — 48h response",
          ] as Array<string | { section: string }>,
        },
        {
          tier: "Pro",
          tagline:
            "Your full operation on autopilot — leads, sales, reputation, and a professional website. All connected.",
          setupLabel: "+ $3,997 one-time setup",
          priceSub: "/mo",
          ideal: "Best for: Growing businesses ready to replace manual processes with automated systems.",
          badge: "Best Value",
          guarantee:
            "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost.",
          cta: "Book Your Free Strategy Call",
          features: [
            "Everything in Starter, plus:",
            { section: "── WEBSITE ──" },
            "Full website — all the pages your business needs, custom designed, built, and connected to your CRM. Live in 7 days",
            "Website hosting & maintenance — included every month, no extra cost",
            "AI chatbot on your website — captures leads, answers FAQs, and books appointments automatically",
            { section: "── ADVANCED AUTOMATIONS ──" },
            "Internal workflow automations — task assignments, status updates, and process handoffs between your team",
            "Re-engagement campaign — automatically reaches out to cold or inactive leads",
            "Proposal follow-up — automatic nudge sent if a quote or proposal goes unanswered",
            "Invoice & payment reminders — automated follow-up on unpaid or overdue invoices",
            "Multi-channel follow-up sequences — SMS, email, and social DMs coordinated in one flow",
            { section: "── SALES & REPUTATION ──" },
            "AI lead scoring — automatically ranks your leads so you focus on the hottest ones first",
            "Full sales pipeline — visual deal tracking from first contact to signed contract",
            "Automated review requests — every client gets a review prompt after their service",
            "Negative review alert — get notified immediately if a bad review is left anywhere",
            { section: "── REPORTING & SUPPORT ──" },
            "Monthly performance report — leads, bookings, conversions, and automation activity",
            "Bi-weekly strategy calls",
            "Priority support — 24h response",
          ] as Array<string | { section: string }>,
        },
        {
          tier: "Growth",
          tagline:
            "Your system fully managed — AI voice, custom integrations, and a dedicated team optimizing everything for you.",
          setupLabel: "+ $5,997 one-time setup",
          priceSub: "/mo",
          ideal: "Best for: Businesses ready to hand off system management entirely and connect any tool they use.",
          badge: "Most Popular",
          guarantee:
            "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost.",
          cta: "Book Your Free Strategy Call",
          features: [
            "Everything in Pro, plus:",
            { section: "── AI VOICE ──" },
            "AI voice agent — answers inbound calls, qualifies leads, and books appointments automatically",
            "Call transcripts & summaries — every call automatically logged, summarized, and saved to the CRM",
            { section: "── ADVANCED INTEGRATIONS ──" },
            "Custom automations with n8n, webhooks & API connections — any tool, any platform, fully integrated",
            { section: "── COMMAND CENTER ──" },
            "Essential Dashboard — live KPIs: revenue, appointments, follow-ups, show rate & no-shows — plus any custom metric your operation tracks, all on one screen branded to your business",
            { section: "── DEDICATED MANAGEMENT ──" },
            "Dedicated Success Manager — a real person assigned to your account, managing and optimizing your system weekly",
            "12 dedicated monthly hours — support, optimization & adjustments on your active infrastructure",
            "15 monthly optimization touches — CRM, funnels & active automations",
            "4 monthly mid-level adjustments on existing infrastructure",
            "1 monthly strategy session",
            "Same-day priority support",
            "Quarterly full system audit & upgrade",
            "New builds, complex integrations & special projects quoted separately — unused hours do not roll over",
          ] as Array<string | { section: string }>,
        },
        {
          tier: "Enterprise",
          tagline:
            "Your infrastructure, built from scratch. No templates. No defaults. Everything scoped and priced for your specific operation.",
          setupLabel: "",
          priceSub: "",
          ideal: "For operations that have outgrown standard packages — agencies, franchises, multi-location brands, and businesses that need something no plan can offer out of the box.",
          badge: undefined as string | undefined,
          guarantee:
            "🛡️ Custom SLA & documented performance guarantees — in writing.",
          cta: "Request Proposal",
          features: [
            "Nothing here is default — every engagement is scoped, designed, and built around what you actually need.",
            { section: "── PLATFORM & TECHNOLOGY ──" },
            "Custom platform selection — GHL, a fully custom-built platform, or a hybrid. We use what's right for your operation, not what's convenient",
            "Custom software development — web apps, internal tools, branded client portals, proprietary systems",
            "System integration infrastructure — we map your tech stack and connect what's technically possible through available APIs, webhooks, and supported integrations",
            { section: "── COMMAND CENTER ──" },
            "Full Command Center — unlimited KPIs, data sources, role-based views, and white-label dashboards for your clients or leadership team",
            { section: "── TEAM & SUPPORT ──" },
            "Dedicated development hours every month — ongoing builds, custom automations, and continuous updates",
            "Executive Strategy Director assigned to your account",
            "Dedicated priority support channel — direct access to your team, not a ticket queue",
            "Monthly executive business review with documented results",
          ] as Array<string | { section: string }>,
        },
      ],
    },

    es: {
      // Divider
      dividerLabel: "Planes Mensuales — Implementación Completa",
      // Section header
      sectionLabel: "Inversión",
      sectionTitle1: "Infraestructura Enterprise",
      sectionTitle2: "para Cada Presupuesto",
      sectionDesc:
        "Elige el nivel que se adapta a donde está tu negocio hoy — y escala cuando estés listo. Cada plan incluye configuración, implementación y soporte continuo.",
      // Billing toggle
      billingMonthly: "Mensual",
      billingAnnual: "Anual",
      billingBadge: "AHORRA 25%",
      annualNote: "Precio anual mostrado · cobrado como un solo pago al año",
      billedAnnually: "✓ Facturación anual · 25% de ahorro",
      // Currency toggle
      currencyLabel: "Moneda:",
      currencyApprox: "≈ Aproximado · USD es la moneda de cobro",
      // Feature expand/collapse
      showLess: "↑ Ver menos",
      moreFeatures: (n: number) => `+ ${n} características más`,
      // Footer disclaimer
      disclaimer:
        "Todos los planes incluyen una llamada estratégica gratuita antes de comprometerte. Sin contratos a largo plazo — cancela cuando quieras. La cuota de implementación se paga una sola vez al inicio — cubre la construcción completa del sistema, configuración y lanzamiento.",
      // CTA logic
      ctaEnterprise: "Solicitar Propuesta",
      ctaAnnualBook: "Agendar Mi Llamada Estratégica →",
      monthlyCTA: {
        Starter:    "Obtener Mi Sistema Starter →",
        Pro:        "Obtener Mi Sistema Pro →",
        Growth:     "Obtener Mi Stack de AI →",
        Enterprise: "Solicitar Propuesta",
      } as Record<string, string>,
      ctaFallback: "Comenzar →",
      // Add-ons section
      addOnsLabel: "Mejoras Opcionales",
      addOnsTitle1: "Agrega Capacidades de AI a",
      addOnsTitle2: "Cualquier Plan",
      addOnsDesc:
        "¿No estás listo para Growth? Agrega capacidades individuales de AI a tu plan Starter o Pro — y actualiza al stack completo cuando estés listo.",
      addOnOneTimeLabel: "Implementación única",
      addOnMonthlyLabel: "Mensual",
      addOnFootnote:
        "Los add-ons están incluidos por defecto en el plan Growth. Pregunta por paquetes combinados durante tu llamada estratégica.",
      addOns: [
        {
          icon: "🎙️",
          name: "Voice AI Agent",
          desc: "Un AI que responde tus llamadas entrantes, califica prospectos y agenda citas — de forma automática, las 24 horas.",
          setup: 1497,
          monthly: 497,
          available: "Disponible para Starter & Pro",
          highlight: true,
        },
        {
          icon: "🔊",
          name: "Voice Cloning",
          desc: "Tu agente AI habla con tu propia voz — clonada y personalizada. Cada llamada suena como tú, incluso cuando no estás disponible.",
          setup: 497,
          monthly: 197,
          available: "Disponible para Starter & Pro",
          highlight: false,
        },
        {
          icon: "🎬",
          name: "AI Video Avatar",
          desc: "Una versión digital de ti para mensajes de video personalizados, seguimientos y outreach automatizado que se siente humano.",
          setup: 997,
          monthly: 297,
          available: "Disponible solo para el plan Pro",
          highlight: false,
        },
      ],
      // Strategic Services section
      strategicLabel: "Servicios Estratégicos",
      strategicTitle1: "Empieza con Estrategia",
      strategicTitle2: "Antes de Comprometerte",
      strategicDesc:
        "No todo negocio debería saltar directo a la implementación. Si primero necesitas claridad, LPS ofrece sesiones estratégicas para identificar los sistemas, automatizaciones y oportunidades de AI correctas antes de construir cualquier cosa.",
      // Card 1
      card1Tag: "Sesión Estratégica",
      card1Title: "Sesión de Estrategia de Crecimiento con AI",
      card1Desc:
        "Una sesión estratégica enfocada para identificar dónde AI, automatización, CRM y sistemas más inteligentes pueden generar el mayor impacto en tu negocio ahora mismo.",
      card1Items: [
        "Sesión estratégica de 60–90 minutos",
        "Revisión del flujo de prospectos, seguimiento, cuellos de botella y sistemas actuales",
        "Identificación de victorias rápidas y oportunidades de mayor impacto",
        "Recomendación clara sobre qué plan LPS o siguiente paso tiene más sentido",
      ],
      card1Ideal:
        "Ideal para: Pequeños negocios, proveedores de servicios y operadores que quieren dirección experta antes de comprometerse con un proyecto mayor.",
      card1Price: "Desde $297",
      card1PriceSub: "pago único",
      card1CTA: "Agendar Sesión Estratégica",
      // Card 2
      card2Tag: "Diagnóstico Profundo",
      card2Title: "Auditoría de Negocio con AI",
      card2Desc:
        "Un diagnóstico más profundo para negocios que ya tienen prospectos, herramientas, equipos o flujos de trabajo en funcionamiento, pero necesitan un plan claro de mejora, automatización e implementación de AI.",
      card2Items: [
        "Revisión profunda del proceso de ventas, manejo de prospectos, seguimiento, CRM y automatización",
        "Identificación de ineficiencias, oportunidades perdidas y brechas en los sistemas",
        "Recomendaciones estratégicas priorizadas por impacto",
        "Hoja de ruta para implementación con LPS",
      ],
      card2Ideal:
        "Ideal para: Clínicas, agencias, negocios establecidos y equipos con operaciones más complejas o procesos de ventas de múltiples pasos.",
      card2Price: "Desde $750",
      card2PriceSub: "pago único",
      card2CTA: "Solicitar una Auditoría",
      // Bridge block
      bridgeTitle: "¿Listo para la Ejecución?",
      bridgeDesc:
        "Una vez que la estrategia es clara, LPS puede construir y gestionar la implementación a través de tu plan Pro, Growth o Enterprise seleccionado.",
      bridgeCTA: "Agendar una Llamada Gratuita",
      // Plans
      plans: [
        {
          tier: "Starter",
          tagline:
            "Tu negocio organizado, automatizado y capturando cada prospecto — sin contratar a nadie nuevo.",
          setupLabel: "+ $2,497 implementación única",
          priceSub: "/mes",
          ideal: "Ideal para: Operadores independientes y equipos pequeños que gestionan su negocio sin un sistema real.",
          badge: undefined as string | undefined,
          guarantee:
            "🛡️ Garantía de ROI 90 días — resultados medibles o seguimos trabajando sin costo adicional.",
          cta: "Agenda Tu Llamada Estratégica Gratuita",
          features: [
            { section: "── SITIO WEB ──" },
            "Sitio web de 1 página o landing page — diseñado profesionalmente, construido y conectado a tu CRM",
            "Hosting y mantenimiento del sitio web — incluido cada mes, sin costo adicional",
            { section: "── CRM & PIPELINE ──" },
            "CRM completamente configurado para tu negocio — contactos, etiquetas, campos personalizados y etapas del pipeline desde el día uno",
            "Configuración del pipeline de prospectos — etapas personalizadas desde el primer contacto hasta el cierre",
            "Importación y organización de contactos — todos tus contactos existentes cargados y estructurados",
            "Formularios de captura de prospectos — conectados directamente a tu CRM, sin entrada manual",
            "Bandeja de entrada unificada de redes sociales — DMs de Instagram & Facebook gestionados en un solo lugar",
            { section: "── AUTOMATIZACIONES ──" },
            "Respuesta automática por SMS a llamadas perdidas — SMS automático enviado en menos de 30 segundos cuando no contestas",
            "Secuencia de SMS de seguimiento a nuevos prospectos — 3 mensajes automatizados en el momento en que alguien entra a tu pipeline",
            "Secuencia de email de seguimiento a nuevos prospectos — emails de bienvenida + seguimiento automatizados",
            "Confirmación y recordatorio de citas — mensajes automáticos antes de cada reservación",
            "Seguimiento por no-show — reactivación automática si un cliente falta a su cita",
            "Respuesta automática en redes sociales — responde DMs y captura información de contacto cuando no estás disponible",
            "Enlace de reservación en línea — los clientes se agendan directo en tu calendario, sin ir y venir",
            { section: "── SOPORTE ──" },
            "Sesión de onboarding y capacitación — recorrido completo de tu sistema",
            "Llamada estratégica mensual — revisión de rendimiento y ajustes",
            "Soporte por email y chat — respuesta en 48h",
          ] as Array<string | { section: string }>,
        },
        {
          tier: "Pro",
          tagline:
            "Tu operación completa en piloto automático — prospectos, ventas, reputación y un sitio web profesional. Todo conectado.",
          setupLabel: "+ $3,997 implementación única",
          priceSub: "/mes",
          ideal: "Ideal para: Negocios en crecimiento listos para reemplazar procesos manuales con sistemas automatizados.",
          badge: "Mejor Valor",
          guarantee:
            "🛡️ Garantía de ROI 90 días — resultados medibles o seguimos trabajando sin costo adicional.",
          cta: "Agenda Tu Llamada Estratégica Gratuita",
          features: [
            "Todo lo de Starter, más:",
            { section: "── SITIO WEB ──" },
            "Sitio web completo — todas las páginas que necesita tu negocio, diseño personalizado, construido y conectado a tu CRM. En vivo en 7 días",
            "Hosting y mantenimiento del sitio web — incluido cada mes, sin costo adicional",
            "Chatbot de AI en tu sitio web — captura prospectos, responde preguntas frecuentes y agenda citas automáticamente",
            { section: "── AUTOMATIZACIONES AVANZADAS ──" },
            "Automatizaciones de flujo de trabajo interno — asignación de tareas, actualizaciones de estado y transferencias de procesos entre tu equipo",
            "Campaña de reactivación — contacta automáticamente a prospectos fríos o inactivos",
            "Seguimiento de propuestas — recordatorio automático si una cotización o propuesta queda sin respuesta",
            "Recordatorios de facturas y pagos — seguimiento automatizado de facturas sin pagar o vencidas",
            "Secuencias de seguimiento multicanal — SMS, email y DMs coordinados en un solo flujo",
            { section: "── VENTAS & REPUTACIÓN ──" },
            "Calificación de prospectos con AI — clasifica automáticamente tus prospectos para que te enfoques primero en los más calientes",
            "Pipeline de ventas completo — seguimiento visual de deals desde el primer contacto hasta el contrato firmado",
            "Solicitudes de reseñas automatizadas — cada cliente recibe una invitación a reseñar tras su servicio",
            "Alerta de reseña negativa — notificación inmediata si se deja una mala reseña en cualquier plataforma",
            { section: "── REPORTES & SOPORTE ──" },
            "Reporte mensual de rendimiento — prospectos, reservaciones, conversiones y actividad de automatizaciones",
            "Llamadas estratégicas quincenales",
            "Soporte prioritario — respuesta en 24h",
          ] as Array<string | { section: string }>,
        },
        {
          tier: "Growth",
          tagline:
            "Tu sistema completamente gestionado — voz con AI, integraciones personalizadas y un equipo dedicado optimizando todo.",
          setupLabel: "+ $5,997 implementación única",
          priceSub: "/mes",
          ideal: "Ideal para: Negocios listos para delegar la gestión del sistema y conectar cualquier herramienta que usen.",
          badge: "Más Popular",
          guarantee:
            "🛡️ Garantía de ROI 90 días — resultados medibles o seguimos trabajando sin costo adicional.",
          cta: "Agenda Tu Llamada Estratégica Gratuita",
          features: [
            "Todo lo de Pro, más:",
            { section: "── AI VOICE ──" },
            "Agente de voz con AI — responde llamadas entrantes, califica prospectos y agenda citas automáticamente",
            "Transcripciones y resúmenes de llamadas — cada llamada registrada, resumida y guardada en el CRM automáticamente",
            { section: "── INTEGRACIONES AVANZADAS ──" },
            "Automatizaciones personalizadas con n8n, webhooks y conexiones API — cualquier herramienta, cualquier plataforma, totalmente integrada",
            { section: "── COMMAND CENTER ──" },
            "Dashboard Esencial — KPIs en tiempo real: ingresos, citas, seguimientos, tasa de asistencia y no-shows — más cualquier métrica personalizada que tu operación necesite, en una sola pantalla con tu marca",
            { section: "── GESTIÓN DEDICADA ──" },
            "Success Manager dedicado — una persona real asignada a tu cuenta, gestionando y optimizando tu sistema semanalmente",
            "12 horas mensuales dedicadas — soporte, optimización y ajustes sobre tu infraestructura activa",
            "15 ajustes de optimización mensual — CRM, funnels y automatizaciones activas",
            "4 ajustes medianos mensuales sobre la infraestructura existente",
            "1 sesión estratégica mensual",
            "Soporte prioritario el mismo día",
            "Auditoría y actualización completa del sistema cada trimestre",
            "Nuevos desarrollos, integraciones complejas y proyectos especiales se cotizan por separado — las horas no utilizadas no se acumulan",
          ] as Array<string | { section: string }>,
        },
        {
          tier: "Enterprise",
          tagline:
            "Tu infraestructura, construida desde cero. Sin plantillas. Sin defaults. Todo cotizado y diseñado para tu operación específica.",
          setupLabel: "",
          priceSub: "",
          ideal: "Para operaciones que han superado lo que cualquier plan estándar puede ofrecer. Si lo que necesitas no cabe en un paquete, aquí es donde hablamos.",
          badge: undefined as string | undefined,
          guarantee:
            "🛡️ SLA personalizado y garantías de rendimiento documentadas — por escrito.",
          cta: "Solicitar Propuesta",
          features: [
            "Nada aquí es por defecto — cada engagement se cotiza, diseña y construye alrededor de lo que realmente necesitas.",
            { section: "── PLATAFORMA Y TECNOLOGÍA ──" },
            "Selección de plataforma personalizada — GHL, una plataforma completamente propia, o un híbrido. Usamos lo que es correcto para tu operación, no lo que es conveniente",
            "Desarrollo de software personalizado — apps web, herramientas internas, portales de clientes con tu marca, sistemas propietarios",
            "Infraestructura de integración de sistemas — mapeamos tu stack tecnológico y conectamos lo que es técnicamente posible a través de APIs disponibles, webhooks e integraciones soportadas",
            { section: "── COMMAND CENTER ──" },
            "Command Center Completo — KPIs ilimitados, fuentes de datos, vistas por rol y dashboards white-label para tus clientes o equipo de liderazgo",
            { section: "── EQUIPO Y SOPORTE ──" },
            "Horas de desarrollo dedicadas cada mes — construcciones continuas, automatizaciones personalizadas y actualizaciones",
            "Director Ejecutivo de Estrategia asignado a tu cuenta",
            "Canal de soporte prioritario dedicado — acceso directo a tu equipo, no una fila de tickets",
            "Revisión ejecutiva mensual del negocio con resultados documentados",
          ] as Array<string | { section: string }>,
        },
      ],
    },
  }[lang ?? "en"];

  // Static plan data (prices, hrefs, featured flags) stays here; only text comes from t
  const plansMeta = [
    { priceUSD: 497,  setupUSD: 2497, featured: false, ctaHref: STARTER_PAYMENT, setupFrom: false },
    { priceUSD: 997,  setupUSD: 3997, featured: false, ctaHref: PRO_PAYMENT,     setupFrom: false },
    { priceUSD: 1797, setupUSD: 5997, featured: true,  ctaHref: GROWTH_PAYMENT,  setupFrom: false },
    { priceUSD: null, setupUSD: 8997, featured: false, ctaHref: BOOKING_URL,     setupFrom: true  },
  ];

  const plans: Plan[] = t.plans.map((p, i) => ({
    tier:       p.tier,
    tagline:    p.tagline,
    priceUSD:   plansMeta[i].priceUSD,
    setupUSD:   plansMeta[i].setupUSD,
    setupLabel: p.setupLabel,
    setupFrom:  plansMeta[i].setupFrom,
    priceSub:   p.priceSub,
    ideal:      p.ideal,
    featured:   plansMeta[i].featured,
    badge:      p.badge,
    guarantee:  p.guarantee,
    cta:        p.cta,
    ctaHref:    plansMeta[i].ctaHref,
    features:   p.features,
  }));

  return (
    <section
      id="pricing"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">

        {/* ── Divider ──────────────────────────────────────── */}
        <SectionReveal delay={0.05}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 48 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, var(--border2))" }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-dim)",
              whiteSpace: "nowrap",
            }}>
              {t.dividerLabel}
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--border2), transparent)" }} />
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="slabel">{t.sectionLabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            <SplitText text={t.sectionTitle1} delay={0.05} />{" "}
            <ShinyText text={t.sectionTitle2} speed={4} />
          </h2>
          <p className="section-desc">
            {t.sectionDesc}
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32, marginBottom: 4 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(15,34,64,0.05)",
                borderRadius: 100,
                padding: 4,
                gap: 0,
                position: "relative",
              }}
            >
              <button
                onClick={() => setBilling("monthly")}
                style={{
                  background: billing === "monthly" ? "#FFFFFF" : "transparent",
                  border: "none",
                  borderRadius: 100,
                  color: billing === "monthly" ? "var(--text)" : "var(--text-muted)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: billing === "monthly" ? 700 : 500,
                  padding: "8px 22px",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  boxShadow: billing === "monthly" ? "0 2px 8px rgba(15,34,64,0.1)" : "none",
                }}
              >
                {t.billingMonthly}
              </button>
              <button
                onClick={() => setBilling("annual")}
                style={{
                  background: billing === "annual" ? "#FFFFFF" : "transparent",
                  border: "none",
                  borderRadius: 100,
                  color: billing === "annual" ? "var(--text)" : "var(--text-muted)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: billing === "annual" ? 700 : 500,
                  padding: "8px 22px",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  boxShadow: billing === "annual" ? "0 2px 8px rgba(15,34,64,0.1)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {t.billingAnnual}
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--blue), var(--gold))",
                    color: "white",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 100,
                  }}
                >
                  {t.billingBadge}
                </span>
              </button>
            </div>
          </div>
          {billing === "annual" && (
            <p
              style={{
                textAlign: "center",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.08em",
                color: "var(--text-dim)",
                marginBottom: 0,
              }}
            >
              {t.annualNote}
            </p>
          )}

          {/* Currency toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>
              {t.currencyLabel}
            </span>
            <div style={{ display: "flex", border: "1px solid var(--border2)", borderRadius: 6, overflow: "hidden" }}>
              {(["USD", "COP", "MXN"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  style={{
                    background: currency === c ? "#D4A53A" : "transparent",
                    border: "none",
                    borderRight: c !== "MXN" ? "1px solid var(--border2)" : "none",
                    color: currency === c ? "white" : "var(--text-muted)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    padding: "7px 16px",
                    cursor: "pointer",
                    transition: "background 0.2s, color 0.2s",
                    fontWeight: currency === c ? 700 : 400,
                  }}
                >
                  {CURRENCY_LABELS[c]}
                </button>
              ))}
            </div>
            {currency !== "USD" && (
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.57rem", letterSpacing: "0.06em", color: "var(--text-dim)" }}>
                {t.currencyApprox}
              </span>
            )}
          </div>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <SectionReveal key={i} delay={i * 0.13} variant="scale">
              <div
                style={plan.featured ? {
                  background: "#FFFFFF",
                  border: "2px solid var(--blue)",
                  borderRadius: 12,
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: "0 8px 32px rgba(26,92,168,0.12)",
                } : {
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: "0 2px 8px rgba(15,34,64,0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.featured ? "var(--blue)" : "rgba(26,92,168,0.35)";
                  el.style.boxShadow = "0 8px 40px rgba(26,92,168,0.15)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.featured ? "var(--blue)" : "var(--border)";
                  el.style.boxShadow = plan.featured ? "0 8px 32px rgba(26,92,168,0.12)" : "0 2px 8px rgba(15,34,64,0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top gradient bar */}
                {plan.featured ? (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: "linear-gradient(90deg, #D4A53A, #E8BE4A)",
                      boxShadow: "none",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, transparent, var(--border2), transparent)",
                    }}
                  />
                )}

                {plan.badge && (
                  <div
                    style={{
                      display: "inline-block",
                      background: plan.featured ? "var(--blue-dim)" : "rgba(212,165,58,0.1)",
                      color: plan.featured ? "var(--blue)" : "var(--gold)",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      fontWeight: 600,
                      marginBottom: 16,
                      boxShadow: "none",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    marginBottom: 8,
                  }}
                >
                  <GradientText
                    text={plan.tier}
                    speed={plan.featured ? 3 : 6}
                    from={plan.featured ? "#D4A53A" : "#1A5CA8"}
                    mid={plan.featured ? "#F0D080" : "#D4A53A"}
                    to={plan.featured ? "#2B7FE0" : "#2B7FE0"}
                  />
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    marginBottom: 24,
                    minHeight: 60,
                  }}
                >
                  {plan.tagline}
                </p>

                <motion.div
                  key={`price-${billing}-${plan.tier}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18 }}
                >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: plan.priceUSD && currency !== "USD" ? "2rem" : "2.6rem",
                      color: plan.featured ? "var(--blue)" : "var(--text)",
                      letterSpacing: "-0.03em",
                      transition: "font-size 0.2s",
                    }}
                  >
                    {formatPrice(getDisplayPrice(plan.priceUSD, billing), currency)}
                  </span>
                  {plan.priceSub && (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      {plan.priceSub}
                      {currency !== "USD" && <span style={{ fontSize: "0.7rem", marginLeft: 4 }}>{currency}</span>}
                    </span>
                  )}
                  {billing === "annual" && plan.priceUSD && (
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        color: "var(--text-dim)",
                        textDecoration: "line-through",
                        marginLeft: 6,
                        alignSelf: "center",
                      }}
                    >
                      {formatPrice(plan.priceUSD, currency)}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                    color: "var(--text-dim)",
                    marginBottom: billing === "annual" && plan.priceUSD ? 2 : 6,
                  }}
                >
                  {formatSetup(plan.setupUSD, currency, plan.setupLabel, plan.setupFrom)}
                </div>
                {billing === "annual" && plan.priceUSD && (
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      color: "var(--blue)",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    {t.billedAnnually}
                  </div>
                )}
                </motion.div>

                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    marginBottom: 28,
                    paddingBottom: 24,
                    borderBottom: "1px solid var(--border)",
                    lineHeight: 1.6,
                  }}
                >
                  {plan.ideal}
                </div>

                {/* Feature list — collapsible */}
                {(() => {
                  const isExpanded = expanded[i] ?? false;
                  const preview = plan.features.slice(0, PREVIEW_COUNT);
                  const hidden = plan.features.slice(PREVIEW_COUNT);
                  const hiddenFeatureCount = hidden.filter(
                    (f) => typeof f === "string"
                  ).length;

                  return (
                    <>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          marginBottom: 0,
                          flex: 1,
                        }}
                      >
                        {preview.map((feat, j) => (
                          <FeatureItem key={j} feat={feat} featured={plan.featured} />
                        ))}

                        {/* Expanded features */}
                        {isExpanded &&
                          hidden.map((feat, j) => (
                            <FeatureItem
                              key={`h${j}`}
                              feat={feat}
                              featured={plan.featured}
                            />
                          ))}
                      </ul>

                      {/* See more / collapse toggle */}
                      {hidden.length > 0 && (
                        <button
                          onClick={() =>
                            setExpanded((prev) => ({
                              ...prev,
                              [i]: !isExpanded,
                            }))
                          }
                          style={{
                            marginTop: 14,
                            background: "none",
                            border: `1px solid ${plan.featured ? "rgba(26,92,168,0.25)" : "var(--border2)"}`,
                            borderRadius: 6,
                            color: plan.featured ? "var(--blue)" : "var(--text-dim)",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.68rem",
                            letterSpacing: "0.08em",
                            padding: "8px 14px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "center",
                            transition: "all 0.2s",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
                            (e.currentTarget as HTMLElement).style.color = "var(--blue)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = plan.featured
                              ? "rgba(26,92,168,0.25)"
                              : "var(--border2)";
                            (e.currentTarget as HTMLElement).style.color = plan.featured
                              ? "var(--blue)"
                              : "var(--text-dim)";
                          }}
                        >
                          {isExpanded
                            ? t.showLess
                            : t.moreFeatures(hiddenFeatureCount)}
                        </button>
                      )}
                    </>
                  );
                })()}

                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    color: "var(--text-dim)",
                    marginTop: 16,
                    marginBottom: 24,
                    lineHeight: 1.6,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {plan.guarantee}
                </div>

                <motion.div
                  key={`btn-${billing}-${plan.tier}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18, delay: 0.04 }}
                >
                {(() => {
                  const isEnterprise = plan.tier === "Enterprise";
                  const isPro        = plan.tier === "Pro";
                  const isGrowth     = plan.tier === "Growth";

                  // Annual → always book a call (except Enterprise stays same)
                  const href    = !isEnterprise && billing === "annual" ? BOOKING_URL : plan.ctaHref;
                  const ctaText = isEnterprise
                    ? t.ctaEnterprise
                    : billing === "annual"
                    ? t.ctaAnnualBook
                    : t.monthlyCTA[plan.tier] ?? t.ctaFallback;

                  if (isEnterprise) {
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pricing-btn-gradient"
                        style={{
                          display: "block",
                          textAlign: "center",
                          padding: "14px 24px",
                          borderRadius: 8,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          textDecoration: "none",
                          transition: "transform 0.2s, box-shadow 0.2s",
                          marginTop: "auto",
                          boxShadow: "0 4px 20px rgba(26,92,168,0.3)",
                          color: "white",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = "translateY(-2px)";
                          el.style.boxShadow = "0 8px 28px rgba(212,165,58,0.45)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = "translateY(0)";
                          el.style.boxShadow = "0 4px 20px rgba(26,92,168,0.3)";
                        }}
                      >
                        {ctaText}
                      </a>
                    );
                  }

                  const bg      = isPro ? "#D4A53A" : isGrowth ? "#0D1B2A" : "#1A5CA8";
                  const bgHover = isPro ? "#C49A30" : isGrowth ? "#132238" : "#154d8f";
                  const txtColor = isPro ? "#0D1B2A" : "white";
                  const shadow   = isPro
                    ? "0 4px 16px rgba(212,165,58,0.45)"
                    : isGrowth
                    ? "0 4px 16px rgba(13,27,42,0.35)"
                    : "0 4px 16px rgba(26,92,168,0.25)";

                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "14px 24px",
                        background: bg,
                        border: "none",
                        color: txtColor,
                        borderRadius: 8,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        transition: "all 0.25s",
                        marginTop: "auto",
                        boxShadow: shadow,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = bgHover;
                        el.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = bg;
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {ctaText}
                    </a>
                  );
                })()}
                </motion.div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              color: "var(--text-dim)",
              textAlign: "center",
              marginTop: 36,
              lineHeight: 1.7,
            }}
          >
            {t.disclaimer}
          </p>
        </SectionReveal>

        {/* AI Add-Ons */}
        <SectionReveal delay={0.15}>
          <div
            style={{
              marginTop: 80,
              paddingTop: 64,
              borderTop: "1px solid var(--border)",
            }}
          >
            <div style={{ marginBottom: 40 }}>
              <div className="slabel">{t.addOnsLabel}</div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  letterSpacing: "-0.025em",
                  marginBottom: 12,
                }}
              >
                <SplitText text={t.addOnsTitle1} delay={0.05} />{" "}
                <ShinyText text={t.addOnsTitle2} speed={3.2} />
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540 }}>
                {t.addOnsDesc}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {t.addOns.map((addon, i) => (
                <div
                  key={i}
                  style={{
                    background: addon.highlight ? "var(--navy)" : "#FFFFFF",
                    border: addon.highlight ? "1px solid rgba(212,165,58,0.3)" : "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    boxShadow: addon.highlight ? "0 8px 32px rgba(13,27,42,0.15)" : "0 2px 8px rgba(15,34,64,0.04)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = addon.highlight
                      ? "0 12px 40px rgba(13,27,42,0.25)"
                      : "0 8px 32px rgba(15,34,64,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = addon.highlight
                      ? "0 8px 32px rgba(13,27,42,0.15)"
                      : "0 2px 8px rgba(15,34,64,0.04)";
                  }}
                >
                  {addon.highlight && (
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--gold), var(--gold-bright))" }} />
                  )}
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{addon.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: addon.highlight ? "#FFFFFF" : "var(--text)",
                      marginBottom: 10,
                    }}
                  >
                    {addon.name}
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: addon.highlight ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: 24,
                      flexGrow: 1,
                    }}
                  >
                    {addon.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      marginBottom: 16,
                      paddingTop: 16,
                      borderTop: `1px solid ${addon.highlight ? "rgba(255,255,255,0.12)" : "var(--border)"}`,
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: addon.highlight ? "rgba(255,255,255,0.45)" : "var(--text-dim)", textTransform: "uppercase", marginBottom: 4 }}>{t.addOnOneTimeLabel}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: addon.highlight ? "var(--gold)" : "var(--text)", letterSpacing: "-0.02em" }}>${addon.setup.toLocaleString("en-US")}</div>
                    </div>
                    <div style={{ width: 1, background: addon.highlight ? "rgba(255,255,255,0.12)" : "var(--border)" }} />
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: addon.highlight ? "rgba(255,255,255,0.45)" : "var(--text-dim)", textTransform: "uppercase", marginBottom: 4 }}>{t.addOnMonthlyLabel}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: addon.highlight ? "#FFFFFF" : "var(--text)", letterSpacing: "-0.02em" }}>${addon.monthly}<span style={{ fontSize: "0.75rem", fontWeight: 500, color: addon.highlight ? "rgba(255,255,255,0.5)" : "var(--text-dim)" }}>/mo</span></div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      color: addon.highlight ? "var(--gold)" : "var(--text-dim)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: addon.highlight ? "var(--gold)" : "var(--text-dim)", flexShrink: 0, display: "inline-block" }} />
                    {addon.available}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.63rem",
                letterSpacing: "0.06em",
                color: "var(--text-dim)",
                textAlign: "center",
                marginTop: 24,
                lineHeight: 1.7,
              }}
            >
              {t.addOnFootnote}
            </p>
          </div>
        </SectionReveal>

        {/* ── Strategic Services ───────────────────────────── */}
        <SectionReveal delay={0.1}>
          <div
            style={{
              marginTop: 80,
              paddingTop: 64,
              borderTop: "1px solid var(--border)",
            }}
          >
            {/* Header */}
            <div style={{ marginBottom: 48 }}>
              <div className="slabel">{t.strategicLabel}</div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  letterSpacing: "-0.025em",
                  marginBottom: 16,
                  color: "var(--text)",
                }}
              >
                {t.strategicTitle1}{" "}
                <ShinyText text={t.strategicTitle2} speed={3.5} />
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 600 }}>
                {t.strategicDesc}
              </p>
            </div>

            {/* Two Strategic Cards */}
            <div
              className="strategic-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 20,
                marginBottom: 28,
              }}
            >
              {/* Card 1 — AI Growth Strategy Session */}
              <div
                style={{
                  background: "var(--navy)",
                  border: "1px solid rgba(212,165,58,0.2)",
                  borderLeft: "3px solid var(--gold)",
                  borderRadius: 12,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                  boxShadow: "0 4px 24px rgba(13,27,42,0.18)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(212,165,58,0.5)";
                  el.style.boxShadow = "0 8px 40px rgba(212,165,58,0.15)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(212,165,58,0.2)";
                  el.style.borderLeftColor = "var(--gold)";
                  el.style.boxShadow = "0 4px 24px rgba(13,27,42,0.18)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Ambient glow */}
                <div style={{
                  position: "absolute", top: 0, right: 0, width: "50%", height: "50%",
                  background: "radial-gradient(circle at 80% 20%, rgba(212,165,58,0.08) 0%, transparent 65%)",
                  pointerEvents: "none",
                }} />

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                  {t.card1Tag}
                </div>

                <h4 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: 14,
                }}>
                  {t.card1Title}
                </h4>

                <p style={{
                  fontSize: "0.875rem",
                  color: "rgba(203,213,225,0.85)",
                  lineHeight: 1.72,
                  marginBottom: 24,
                  flexGrow: 1,
                }}>
                  {t.card1Desc}
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {t.card1Items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.83rem", color: "rgba(203,213,225,0.75)", lineHeight: 1.6, listStyle: "none" }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.06em",
                  color: "rgba(212,165,58,0.7)",
                  marginBottom: 24,
                  lineHeight: 1.6,
                }}>
                  {t.card1Ideal}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.2rem",
                    color: "var(--gold)",
                    letterSpacing: "-0.03em",
                  }}>{t.card1Price}</span>
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{t.card1PriceSub}</span>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 24px",
                    background: "transparent",
                    border: "1px solid rgba(212,165,58,0.5)",
                    borderRadius: 8,
                    color: "var(--gold)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    textDecoration: "none",
                    transition: "all 0.22s",
                    marginTop: "auto",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(212,165,58,0.12)";
                    el.style.borderColor = "var(--gold)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.borderColor = "rgba(212,165,58,0.5)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {t.card1CTA}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Card 2 — AI Business Audit */}
              <div
                style={{
                  background: "var(--navy)",
                  border: "1px solid rgba(26,92,168,0.25)",
                  borderLeft: "3px solid var(--blue)",
                  borderRadius: 12,
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                  boxShadow: "0 4px 24px rgba(13,27,42,0.18)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,92,168,0.5)";
                  el.style.boxShadow = "0 8px 40px rgba(26,92,168,0.15)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,92,168,0.25)";
                  el.style.borderLeftColor = "var(--blue)";
                  el.style.boxShadow = "0 4px 24px rgba(13,27,42,0.18)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Ambient glow */}
                <div style={{
                  position: "absolute", top: 0, right: 0, width: "50%", height: "50%",
                  background: "radial-gradient(circle at 80% 20%, rgba(26,92,168,0.1) 0%, transparent 65%)",
                  pointerEvents: "none",
                }} />

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--blue-bright)",
                  fontWeight: 600,
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--blue-bright)", flexShrink: 0 }} />
                  {t.card2Tag}
                </div>

                <h4 style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.35rem",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                  marginBottom: 14,
                }}>
                  {t.card2Title}
                </h4>

                <p style={{
                  fontSize: "0.875rem",
                  color: "rgba(203,213,225,0.85)",
                  lineHeight: 1.72,
                  marginBottom: 24,
                  flexGrow: 1,
                }}>
                  {t.card2Desc}
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  {t.card2Items.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.83rem", color: "rgba(203,213,225,0.75)", lineHeight: 1.6, listStyle: "none" }}>
                      <span style={{ color: "var(--blue-bright)", flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.06em",
                  color: "rgba(43,127,224,0.7)",
                  marginBottom: 24,
                  lineHeight: 1.6,
                }}>
                  {t.card2Ideal}
                </div>

                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.2rem",
                    color: "#FFFFFF",
                    letterSpacing: "-0.03em",
                  }}>{t.card2Price}</span>
                  <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)" }}>{t.card2PriceSub}</span>
                </div>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "13px 24px",
                    background: "transparent",
                    border: "1px solid rgba(26,92,168,0.5)",
                    borderRadius: 8,
                    color: "var(--blue-bright)",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    textDecoration: "none",
                    transition: "all 0.22s",
                    marginTop: "auto",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(26,92,168,0.12)";
                    el.style.borderColor = "var(--blue-bright)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.borderColor = "rgba(26,92,168,0.5)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {t.card2CTA}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bridge block — Ready for Execution */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "28px 36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
              }}
              className="strategic-bridge"
            >
              <div>
                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text)",
                  marginBottom: 6,
                }}>
                  {t.bridgeTitle}
                </div>
                <div style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: 560,
                }}>
                  {t.bridgeDesc}
                </div>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 22px",
                  background: "transparent",
                  border: "1px solid var(--gold)",
                  borderRadius: 8,
                  color: "var(--gold)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "rgba(212,165,58,0.1)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.transform = "translateY(0)";
                }}
              >
                {t.bridgeCTA}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .strategic-grid { grid-template-columns: 1fr !important; }
          .strategic-bridge { flex-direction: column !important; align-items: flex-start !important; }
          .strategy-grid { grid-template-columns: 1fr !important; }
          .bridge-block { flex-direction: column !important; align-items: flex-start !important; }
        }
        .pricing-btn-gradient {
          background-image: linear-gradient(90deg, #1A5CA8 0%, #D4A53A 35%, #2B7FE0 65%, #1A5CA8 100%);
          background-size: 200% 100%;
          animation: gradient-drift 3s linear infinite;
        }
        .pricing-btn-gradient:hover {
          animation-duration: 1.5s;
        }
      `}</style>
    </section>
  );
}

function FeatureItem({ feat, featured }: { feat: string | { section: string }; featured: boolean }) {
  if (typeof feat === "object") {
    return (
      <li
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          padding: "12px 0 4px",
          marginTop: 4,
          listStyle: "none",
          fontWeight: 500,
        }}
      >
        {feat.section}
      </li>
    );
  }
  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        fontSize: "0.83rem",
        color: "var(--text-muted)",
        lineHeight: 1.6,
        listStyle: "none",
      }}
    >
      <span style={{ color: "#D4A53A", flexShrink: 0, marginTop: 2 }}>✓</span>
      {feat}
    </li>
  );
}
