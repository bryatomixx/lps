"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import SectionReveal from "./SectionReveal";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";
import SpotlightCard from "./SpotlightCard";

type Lang = "en" | "es";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";
const PAYMENT_URL =
  "https://link.latinprimesystems.com/payment-link/692e34bda611824d7675e7f0";

// ─── Translations ────────────────────────────────────────────────────────────
const T = {
  en: {
    // Hero
    heroKicker: "Starter AI System · $497/mo + $2,497 one-time setup",
    heroH1Part1: "Your First Real",
    heroH1Gradient: "Business System.",
    heroH1Shiny: "Live in 7–14 Days.",
    heroDesc:
      "The Starter plan is your foundation — CRM built for your business, automations handling follow-up, and a website capturing leads. Everything a solo operator needs to stop losing work and start growing without hiring.",
    heroStats: [
      { val: "$497", label: "per month" },
      { val: "7–14", label: "days to live" },
      { val: "90-Day", label: "ROI Guarantee" },
      { val: "$2,497", label: "one-time setup" },
    ],
    heroCtaPrimary: "Get My Starter System →",
    heroCtaSecondary: "Book a Free Strategy Call",
    heroGuarantee: "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost",

    // Situations
    situationsLabel: "Is This Plan For You?",
    situationsTitlePart1: "You're in the Right Place If",
    situationsTitleShiny: "You Recognize Yourself.",
    situationsDesc: "Scroll down to go through each one. If any sound familiar, this plan was designed for you.",
    situationsScrollHint: "↓ keep scrolling",
    situations: [
      {
        icon: "🧠",
        title: "Everything lives in your head — or on paper",
        desc: "Your 'CRM' is a mental list, a notepad, or a pile of sticky notes. You remember most leads — but not all of them, and not always at the right time.",
      },
      {
        icon: "📵",
        title: "You've missed calls and lost the job to whoever picked up",
        desc: "Someone called, you were busy, they called the next number. You never got a chance to compete. That job went somewhere else — and you didn't even know it was available.",
      },
      {
        icon: "🔁",
        title: "You follow up manually — when you remember",
        desc: "After a quote or inquiry you mean to follow up in 2 days. Sometimes you do. Often it slips. You've lost deals not because the price was wrong, but because you went quiet.",
      },
      {
        icon: "📅",
        title: "Scheduling is a back-and-forth text conversation",
        desc: "\"Does Tuesday work?\" \"Not Tuesday, how about Thursday?\" Every booking costs 10 minutes of your day. Multiply that by 20 clients.",
      },
      {
        icon: "💬",
        title: "You answer the same 5 questions every single day",
        desc: "\"What are your prices?\", \"Are you available this week?\" You respond personally to every one. It takes time you don't have.",
      },
      {
        icon: "🏗️",
        title: "You are the system — and when you stop, it all stops",
        desc: "There's no automation. No pipeline. No follow-up sequence. If you're not actively working the phone, the leads dry up. Growth requires more of you.",
      },
    ],

    // Cost section
    costLabel: "The Real Cost",
    costTitlePart1: "What the Status Quo Is",
    costTitleGradient: "Costing You Every Month.",
    costDesc: "The numbers below aren't worst-case scenarios. They're conservative estimates for a service business doing $8K–$15K/month. Most owners lose more without realizing it.",
    costCards: [
      {
        icon: "📵",
        suffix: " missed calls/wk",
        label: "That's 12/month — at $400 avg job value",
        loss: "$4,800",
        lossLabel: "in potential revenue lost per month",
        note: "If you convert even 30% of callbacks, that's $1,440 you're leaving on the table every single month.",
      },
      {
        icon: "🔕",
        suffix: "%",
        label: "of leads that don't get a follow-up within 24hrs",
        loss: "5× less",
        lossLabel: "likely to convert vs. leads followed up in 5 minutes",
        note: "Speed-to-lead is the #1 conversion driver. Automated follow-up fires in seconds — yours fires when you remember.",
      },
      {
        icon: "⏱️",
        suffix: " hrs/wk",
        label: "spent on manual follow-up, scheduling, and reminders",
        loss: "400+ hrs",
        lossLabel: "per year doing tasks automation handles in seconds",
        note: "At $50/hr opportunity cost, that's $20,000/year in time you're spending on repetitive tasks instead of revenue-generating work.",
      },
    ],
    costSummaryKicker: "The math is simple",
    costSummaryTitle: "One recovered job pays for the entire month.",
    costSummaryDesc: "At $497/month, you need to recover one $500 job — or stop losing one follow-up — and the system has already paid for itself. Everything after that is profit.",
    costSummaryPerMonth: "per month",
    costSummaryVs: "vs. $4,800+ left on the table",

    // Features
    featuresLabel: "What You Get",
    featuresTitlePart1: "Every Feature,",
    featuresTitleShiny: "What It Actually Solves.",
    featuresDesc: "These aren't features in a list. Each one was put here because real business owners were losing real money without it. Here's exactly what each piece does and what it replaces.",
    featuresReplaces: "Replaces:",
    sectionWebsite: "Website",
    sectionCRM: "CRM & Pipeline",
    sectionAutomations: "Automations",
    sectionAutomationsTag: "This is where the ROI lives",
    sectionSupport: "Support",
    websiteFeatures: [
      { icon: "🖥️", tag: "Web", title: "1-Page Website or Landing Page", does: "A professionally designed page that presents your business, captures leads directly into your CRM, and loads fast on mobile. No third-party form tools. No manual copy-paste.", solves: "Having no website, a broken one, or a Facebook page as your homepage" },
      { icon: "🔒", tag: "Hosting", title: "Hosting & Maintenance Included", does: "We host and maintain your site every month. Zero extra invoices from GoDaddy, Wix, or Squarespace. Updates handled by us — you focus on your business, not your website.", solves: "Paying $30–$80/mo for hosting tools you don't know how to use" },
    ],
    crmFeatures: [
      { icon: "📋", tag: "CRM", title: "CRM Fully Built for Your Business", does: "Custom contacts, tags, pipeline stages, and fields configured for how you actually work — from first inquiry to paid invoice. Built from scratch on your account. Not a template.", solves: "Spreadsheets, sticky notes, phone contacts, and \"I'll remember it\" as your CRM" },
      { icon: "🔀", tag: "Pipeline", title: "Lead Pipeline — Custom Stages", does: "A visual sales pipeline showing every lead, where they are, and what the next action is. You never forget where a deal stands or who needs a call.", solves: "Losing track of where every prospect is in your sales process" },
      { icon: "📥", tag: "Contacts", title: "Contact Import & Organization", does: "All your existing contacts migrated, tagged, and structured on day one. Your past clients, warm leads, and cold list — organized and ready for automations to run.", solves: "A phone book or spreadsheet that doesn't connect to anything" },
      { icon: "📝", tag: "Lead Capture", title: "Lead Capture Forms", does: "Forms on your website and landing pages that push new leads directly into your CRM — tagged, assigned, and triggering automations instantly. No copy-paste, no data loss.", solves: "Manually entering leads from Facebook, referrals, and your contact form into a spreadsheet" },
      { icon: "📲", tag: "Inbox", title: "Unified Social Media Inbox", does: "Instagram DMs and Facebook messages consolidated in one dashboard. No more switching apps. Respond faster. Capture leads that message you on social without losing them.", solves: "Missing DMs because you have 3 apps open and only one of them has notifications" },
    ],
    automationFeatures: [
      { icon: "⏱️", tag: "Missed Call", title: "Missed Call Text-Back", does: "The moment you miss a call, an SMS fires in under 30 seconds. \"Hey, I just missed your call — I'll call you back shortly. Is there anything I can help you with?\" They stay warm. They don't call the next number.", solves: "Losing the job to whoever picked up next because you were on a job" },
      { icon: "📩", tag: "SMS Sequence", title: "New Lead SMS Follow-Up (3-Step)", does: "The second someone enters your pipeline — from a form, a DM, a call — 3 automated texts go out over 3 days. Friendly, professional, and branded to you. Replies land directly in your inbox.", solves: "Forgetting to follow up, or doing it too late when the lead went cold" },
      { icon: "📧", tag: "Email Sequence", title: "New Lead Email Follow-Up", does: "An automated welcome email + follow-up sequence goes out the moment a new lead enters. Presents your services, builds trust, and prompts action — all without you writing a single word after setup.", solves: "Sending the same \"thanks for reaching out\" email manually 12 times a week" },
      { icon: "🔔", tag: "Appointments", title: "Appointment Confirmation & Reminder", does: "Every booked appointment gets an instant confirmation and a reminder 24 hours before. Clients show up. If they can't, they reschedule — before you waste a drive.", solves: "No-shows you didn't know about until you arrived, costing you 2 hours and a job slot" },
      { icon: "👻", tag: "No-Show", title: "No-Show Follow-Up Sequence", does: "If a client misses an appointment, an automated re-engagement goes out within the hour. \"We missed you today — let's get you rescheduled.\" You recover the slot without a single call.", solves: "Losing a booking forever just because someone forgot to show up" },
      { icon: "💬", tag: "Social DMs", title: "Social Media Auto-Reply", does: "When someone DMs you on Instagram or Facebook after hours (or while you're busy), an automated reply captures their interest, answers basic questions, and collects their contact info — so you never lose a lead to silence.", solves: "DMs sitting for 12 hours while the lead found someone who responded in 5 minutes" },
      { icon: "📆", tag: "Booking", title: "Online Booking Link", does: "Clients pick a time from your live calendar and book themselves — no back-and-forth, no phone tag. You get a notification. The appointment is on your calendar. Done.", solves: "10–15 text exchanges to schedule one appointment that could take 30 seconds" },
    ],
    supportFeatures: [
      { icon: "🎓", tag: "Onboarding", title: "Onboarding & Training Session", does: "A live walkthrough of your entire system — what each automation does, how to use your CRM, how to view your pipeline, and how to add new contacts. You leave knowing exactly how everything works.", solves: "Paying for software you never fully figured out" },
      { icon: "📞", tag: "Strategy", title: "Monthly Strategy Call", does: "Every month, we review your numbers — leads captured, automations triggered, appointments booked, no-show rate. We adjust what's not working and build on what is. You never drift without direction.", solves: "Flying blind with no idea if your systems are actually performing" },
      { icon: "💬", tag: "Support", title: "Email & Chat Support — 48h", does: "Questions, adjustments, or something's not working? We respond in 48 hours. You're not on your own after launch — we're part of your team.", solves: "Getting locked out of your tools with no one to call" },
    ],

    // Value
    valueLabel: "The Value Breakdown",
    valueTitlePart1: "What",
    valueTitlePart2: "Actually Buys.",
    valueDesc: "Every component of the Starter plan has a standalone market value. Here's what you'd pay if you had to piece this together yourself.",
    diyTitle: "If You Built This Yourself",
    valueBars: [
      { label: "Website (design + build)", value: 1500, color: "var(--blue)" },
      { label: "Website hosting (monthly)", value: 80, color: "var(--blue-bright)" },
      { label: "CRM setup (GoHighLevel)", value: 500, color: "var(--blue)" },
      { label: "Lead capture + pipeline config", value: 300, color: "var(--blue-bright)" },
      { label: "Automation builds (7 flows)", value: 1400, color: "var(--gold)" },
      { label: "Social inbox setup", value: 200, color: "var(--gold)" },
      { label: "Booking system integration", value: 150, color: "var(--blue)" },
      { label: "Monthly strategy call (consultant)", value: 250, color: "var(--blue-bright)" },
      { label: "Ongoing maintenance + support", value: 400, color: "var(--gold)" },
    ],
    valueTotalLabel: "Total market value",
    valueTotalSuffix: "/setup + mo",
    lpsKicker: "With LPS Starter",
    lpsPriceSub: "/month · all-in",
    lpsBlurb: "Everything listed above — built, configured, and running — plus a dedicated team managing and optimizing it monthly.",
    lpsChecklist: [
      "Everything built and configured by us",
      "All 7 automations active from day one",
      "Monthly strategy calls included",
      "Hosting, maintenance, and support included",
      "No separate tools to manage or invoice",
      "90-Day ROI Guarantee",
    ],
    lpsSavings: "You save $4,283+ in year one",
    lpsPaymentPlan: "Need a payment plan? Email us at",

    // Timeline
    timelineLabel: "What Happens Next",
    timelineTitlePart1: "From Strategy Call to",
    timelineTitleShiny: "Live System in 7–14 Days.",
    timelineDesc: "You don't need to do any of the technical work. We handle the build, the configuration, and the testing. You give us access and we deliver a fully working system.",
    timelineStepLabel: "Step",
    timelineSteps: [
      { step: "01", icon: "📞", title: "Free Strategy Call", time: "Day 1", desc: "We map your business, your current tools, and your biggest pain points. You leave with a clear plan of what we're building and why." },
      { step: "02", icon: "⚙️", title: "We Build Everything", time: "Days 2–10", desc: "CRM configuration, automations, website build, forms, pipelines, and social inbox setup. You get progress updates. You don't touch anything." },
      { step: "03", icon: "🧪", title: "Testing & Walkthrough", time: "Days 10–12", desc: "Every automation is tested end-to-end. We run through your system with you live. You understand exactly what each piece does and how to use it." },
      { step: "04", icon: "🚀", title: "You Go Live", time: "Days 12–14", desc: "Your system is active. Leads start getting followed up automatically. Calls get text-backs. Appointments get confirmed. Your business runs whether you're working or not." },
    ],

    // Final CTA
    finalKicker: "$497/mo · $2,497 one-time setup · 90-Day ROI Guarantee",
    finalH1Part1: "Stop Running Your Business.",
    finalH1Gradient: "Start Growing It.",
    finalDesc: "The Starter system is live in 7–14 days. One recovered lead pays for the first month. Everything after that is upside.",
    finalCtaPrimary: "Get My Starter System →",
    finalCtaSecondary: "Book a Free Strategy Call",
    finalGuarantee: "🛡️ 90-Day ROI Guarantee · No long-term contracts · Cancel anytime · Setup fee paid once",
  },
  es: {
    heroKicker: "Sistema Starter de IA · $497/mes + $2,497 implementación única",
    heroH1Part1: "Tu Primer Sistema Real",
    heroH1Gradient: "para tu Negocio.",
    heroH1Shiny: "En vivo en 7–14 Días.",
    heroDesc:
      "El plan Starter es tu base — CRM hecho para tu negocio, automatizaciones que dan seguimiento solas y un sitio web que captura prospectos. Todo lo que un operador independiente necesita para dejar de perder trabajo y empezar a crecer sin contratar.",
    heroStats: [
      { val: "$497", label: "al mes" },
      { val: "7–14", label: "días en vivo" },
      { val: "90 días", label: "Garantía ROI" },
      { val: "$2,497", label: "implementación única" },
    ],
    heroCtaPrimary: "Obtener Mi Sistema Starter →",
    heroCtaSecondary: "Agenda una Llamada Estratégica Gratis",
    heroGuarantee: "🛡️ Garantía ROI 90 días — resultados medibles o seguimos trabajando sin costo extra",

    situationsLabel: "¿Este plan es para ti?",
    situationsTitlePart1: "Estás en el lugar correcto si",
    situationsTitleShiny: "te reconoces en esto.",
    situationsDesc: "Avanza por cada situación. Si alguna te suena familiar, este plan se diseñó para ti.",
    situationsScrollHint: "↓ sigue bajando",
    situations: [
      {
        icon: "🧠",
        title: "Todo vive en tu cabeza — o en papel",
        desc: "Tu 'CRM' es una lista mental, una libreta o un montón de notas. Te acuerdas de la mayoría de los prospectos — pero no de todos, y no siempre a tiempo.",
      },
      {
        icon: "📵",
        title: "Pierdes llamadas y el trabajo se va con quien contestó primero",
        desc: "Alguien llamó, estabas ocupado, llamaron al siguiente número. Nunca tuviste oportunidad de competir. Ese trabajo se fue a otro lado — y ni te enteraste de que existía.",
      },
      {
        icon: "🔁",
        title: "Das seguimiento manualmente — cuando te acuerdas",
        desc: "Después de una cotización o consulta piensas dar seguimiento en 2 días. A veces lo haces. Muchas veces se te olvida. Has perdido cierres no por el precio, sino porque te quedaste callado.",
      },
      {
        icon: "📅",
        title: "Agendar es un ping-pong de mensajes",
        desc: "\"¿Te queda el martes?\" \"El martes no, ¿qué tal jueves?\" Cada cita te cuesta 10 minutos del día. Multiplícalo por 20 clientes.",
      },
      {
        icon: "💬",
        title: "Respondes las mismas 5 preguntas todos los días",
        desc: "\"¿Cuánto cobras?\", \"¿Tienes disponibilidad esta semana?\" Las contestas una por una. Te quita tiempo que no tienes.",
      },
      {
        icon: "🏗️",
        title: "Tú eres el sistema — y cuando paras, todo para",
        desc: "No hay automatización. No hay pipeline. No hay secuencia de seguimiento. Si no estás trabajando el teléfono, los prospectos se secan. Crecer requiere más de ti.",
      },
    ],

    costLabel: "El Costo Real",
    costTitlePart1: "Lo que el Status Quo te",
    costTitleGradient: "está costando cada mes.",
    costDesc: "Los números de abajo no son escenarios catastróficos. Son estimaciones conservadoras para un negocio de servicio facturando $8K–$15K/mes. La mayoría pierde más sin darse cuenta.",
    costCards: [
      {
        icon: "📵",
        suffix: " llamadas perdidas/sem",
        label: "Son 12/mes — a $400 de valor promedio por trabajo",
        loss: "$4,800",
        lossLabel: "en ingresos potenciales perdidos cada mes",
        note: "Si conviertes solo el 30% de las re-llamadas, son $1,440 que dejas en la mesa cada mes.",
      },
      {
        icon: "🔕",
        suffix: "%",
        label: "de prospectos sin seguimiento dentro de 24hrs",
        loss: "5× menos",
        lossLabel: "probable que cierren vs. prospectos contactados en 5 minutos",
        note: "La velocidad de respuesta es el #1 motor de conversión. La automatización dispara en segundos — tú disparas cuando te acuerdas.",
      },
      {
        icon: "⏱️",
        suffix: " hrs/sem",
        label: "en seguimiento manual, agendar y recordatorios",
        loss: "400+ hrs",
        lossLabel: "al año en tareas que la automatización resuelve en segundos",
        note: "A $50/hr de costo de oportunidad, son $20,000/año en tiempo gastado en tareas repetitivas en vez de generar ingresos.",
      },
    ],
    costSummaryKicker: "La cuenta es simple",
    costSummaryTitle: "Un trabajo recuperado paga el mes entero.",
    costSummaryDesc: "A $497/mes, solo necesitas recuperar un trabajo de $500 — o dejar de perder un seguimiento — y el sistema ya se pagó solo. Todo lo demás es ganancia.",
    costSummaryPerMonth: "al mes",
    costSummaryVs: "vs. $4,800+ que dejas en la mesa",

    featuresLabel: "Qué Recibes",
    featuresTitlePart1: "Cada Función,",
    featuresTitleShiny: "Lo que Realmente Resuelve.",
    featuresDesc: "No son funciones en una lista. Cada una está aquí porque dueños de negocio reales perdían dinero real sin ella. Aquí ves exactamente qué hace cada pieza y qué reemplaza.",
    featuresReplaces: "Reemplaza:",
    sectionWebsite: "Sitio Web",
    sectionCRM: "CRM y Pipeline",
    sectionAutomations: "Automatizaciones",
    sectionAutomationsTag: "Aquí es donde vive el ROI",
    sectionSupport: "Soporte",
    websiteFeatures: [
      { icon: "🖥️", tag: "Web", title: "Sitio Web de 1 Página o Landing", does: "Una página diseñada profesionalmente que presenta tu negocio, captura prospectos directo a tu CRM y carga rápido en móvil. Sin formularios externos. Sin copia-pega manual.", solves: "No tener sitio web, tener uno roto, o usar tu Facebook como página principal" },
      { icon: "🔒", tag: "Hosting", title: "Hosting y Mantenimiento Incluidos", does: "Hospedamos y mantenemos tu sitio cada mes. Cero facturas extra de GoDaddy, Wix o Squarespace. Las actualizaciones las hacemos nosotros — tú te enfocas en tu negocio, no en tu web.", solves: "Pagar $30–$80/mes por herramientas de hosting que no sabes usar" },
    ],
    crmFeatures: [
      { icon: "📋", tag: "CRM", title: "CRM Construido para Tu Negocio", does: "Contactos, etiquetas, etapas del pipeline y campos personalizados configurados para cómo realmente trabajas — desde primera consulta hasta factura pagada. Hecho desde cero en tu cuenta. No una plantilla.", solves: "Hojas de cálculo, notas, contactos del teléfono y \"yo me acuerdo\" como tu CRM" },
      { icon: "🔀", tag: "Pipeline", title: "Pipeline de Prospectos — Etapas Personalizadas", does: "Un pipeline visual de ventas que muestra cada prospecto, en qué etapa está y cuál es la siguiente acción. Nunca olvidas dónde está un deal ni a quién toca llamar.", solves: "Perder el rastro de cada prospecto en tu proceso de ventas" },
      { icon: "📥", tag: "Contactos", title: "Importación y Organización de Contactos", does: "Todos tus contactos existentes migrados, etiquetados y estructurados desde el día uno. Tus clientes pasados, prospectos tibios y lista fría — organizados y listos para que las automatizaciones corran.", solves: "Una agenda telefónica o hoja de cálculo que no se conecta a nada" },
      { icon: "📝", tag: "Captura", title: "Formularios de Captura de Prospectos", does: "Formularios en tu sitio web y landings que envían nuevos prospectos directo a tu CRM — etiquetados, asignados y disparando automatizaciones al instante. Sin copia-pega, sin pérdida de datos.", solves: "Capturar leads de Facebook, referidos y tu formulario manualmente a una hoja de cálculo" },
      { icon: "📲", tag: "Bandeja", title: "Bandeja Unificada de Redes Sociales", does: "DMs de Instagram y mensajes de Facebook consolidados en un solo dashboard. Sin cambiar de app. Respondes más rápido. Capturas prospectos que te escriben en social sin perderlos.", solves: "Perder DMs porque tienes 3 apps abiertas y solo una con notificaciones" },
    ],
    automationFeatures: [
      { icon: "⏱️", tag: "Llamada Perdida", title: "SMS Automático a Llamada Perdida", does: "En el momento en que pierdes una llamada, un SMS sale en menos de 30 segundos. \"Hola, acabo de perder tu llamada — te marco en un momento. ¿En qué te puedo ayudar?\" Se quedan tibios. No llaman al siguiente.", solves: "Perder el trabajo con quien contestó primero porque estabas ocupado" },
      { icon: "📩", tag: "Secuencia SMS", title: "Seguimiento SMS para Nuevos Leads (3 pasos)", does: "En el segundo en que alguien entra a tu pipeline — desde un formulario, un DM, una llamada — 3 mensajes automatizados salen durante 3 días. Amigables, profesionales y con tu marca. Las respuestas llegan directo a tu inbox.", solves: "Olvidar dar seguimiento, o hacerlo tarde cuando el lead ya se enfrió" },
      { icon: "📧", tag: "Secuencia Email", title: "Seguimiento por Email para Nuevos Leads", does: "Un email de bienvenida automatizado + secuencia de seguimiento sale en el momento en que entra un nuevo lead. Presenta tus servicios, genera confianza y empuja a la acción — todo sin que escribas una palabra después del setup.", solves: "Mandar el mismo email de \"gracias por contactarnos\" manualmente 12 veces a la semana" },
      { icon: "🔔", tag: "Citas", title: "Confirmación y Recordatorio de Citas", does: "Cada cita agendada recibe confirmación instantánea y un recordatorio 24 horas antes. Los clientes llegan. Si no pueden, reprograman — antes de que pierdas un viaje.", solves: "No-shows que descubres al llegar, perdiendo 2 horas y un slot de trabajo" },
      { icon: "👻", tag: "No-Show", title: "Secuencia de Seguimiento por No-Show", does: "Si un cliente falta a su cita, una reactivación automática sale dentro de la hora. \"Te extrañamos hoy — vamos a reagendarte.\" Recuperas el slot sin hacer una sola llamada.", solves: "Perder una reservación para siempre solo porque alguien olvidó presentarse" },
      { icon: "💬", tag: "DMs Sociales", title: "Respuesta Automática en Redes Sociales", does: "Cuando alguien te escribe por Instagram o Facebook fuera de horario (o estando ocupado), una respuesta automática captura su interés, contesta preguntas básicas y recoge sus datos — para que nunca pierdas un lead por silencio.", solves: "DMs sin contestar 12 horas mientras el lead encontró a alguien que respondió en 5 minutos" },
      { icon: "📆", tag: "Agendamiento", title: "Link de Agendamiento Online", does: "Los clientes eligen un horario de tu calendario en vivo y se agendan solos — sin ping-pong, sin perseguirse por teléfono. Tú recibes notificación. La cita queda en tu calendario. Listo.", solves: "10–15 mensajes de ida y vuelta para agendar una cita que podía tomar 30 segundos" },
    ],
    supportFeatures: [
      { icon: "🎓", tag: "Onboarding", title: "Sesión de Onboarding y Capacitación", does: "Un recorrido en vivo de tu sistema completo — qué hace cada automatización, cómo usar tu CRM, cómo ver tu pipeline y cómo agregar nuevos contactos. Te quedas sabiendo exactamente cómo funciona todo.", solves: "Pagar por software que nunca terminaste de entender" },
      { icon: "📞", tag: "Estrategia", title: "Llamada Estratégica Mensual", does: "Cada mes revisamos tus números — leads capturados, automatizaciones disparadas, citas agendadas, tasa de no-shows. Ajustamos lo que no funciona y reforzamos lo que sí. Nunca avanzas sin dirección.", solves: "Volar a ciegas sin saber si tus sistemas realmente están performando" },
      { icon: "💬", tag: "Soporte", title: "Soporte por Email y Chat — 48h", does: "¿Preguntas, ajustes, algo no funciona? Respondemos en 48 horas. No te quedas solo después del lanzamiento — somos parte de tu equipo.", solves: "Quedarte bloqueado de tus herramientas sin nadie a quien llamar" },
    ],

    valueLabel: "El Desglose del Valor",
    valueTitlePart1: "Lo que",
    valueTitlePart2: "realmente compra.",
    valueDesc: "Cada componente del plan Starter tiene un valor de mercado por separado. Aquí ves lo que pagarías si tuvieras que armar todo esto por tu cuenta.",
    diyTitle: "Si lo Construyeras tú Mismo",
    valueBars: [
      { label: "Sitio web (diseño + construcción)", value: 1500, color: "var(--blue)" },
      { label: "Hosting de sitio web (mensual)", value: 80, color: "var(--blue-bright)" },
      { label: "Configuración CRM (GoHighLevel)", value: 500, color: "var(--blue)" },
      { label: "Captura de leads + pipeline", value: 300, color: "var(--blue-bright)" },
      { label: "Construcción de automatizaciones (7 flujos)", value: 1400, color: "var(--gold)" },
      { label: "Setup de bandeja social", value: 200, color: "var(--gold)" },
      { label: "Integración de sistema de booking", value: 150, color: "var(--blue)" },
      { label: "Llamada estratégica mensual (consultor)", value: 250, color: "var(--blue-bright)" },
      { label: "Mantenimiento y soporte continuo", value: 400, color: "var(--gold)" },
    ],
    valueTotalLabel: "Valor de mercado total",
    valueTotalSuffix: "/setup + mes",
    lpsKicker: "Con LPS Starter",
    lpsPriceSub: "/mes · todo incluido",
    lpsBlurb: "Todo lo de arriba — construido, configurado y corriendo — más un equipo dedicado gestionándolo y optimizándolo cada mes.",
    lpsChecklist: [
      "Todo construido y configurado por nosotros",
      "Las 7 automatizaciones activas desde el día uno",
      "Llamadas estratégicas mensuales incluidas",
      "Hosting, mantenimiento y soporte incluidos",
      "Sin herramientas separadas que gestionar o pagar",
      "Garantía ROI 90 días",
    ],
    lpsSavings: "Ahorras $4,283+ en el primer año",
    lpsPaymentPlan: "¿Necesitas plan de pagos? Escríbenos a",

    timelineLabel: "Qué Sigue",
    timelineTitlePart1: "De la Llamada Estratégica a",
    timelineTitleShiny: "Sistema en Vivo en 7–14 Días.",
    timelineDesc: "No tienes que hacer nada del trabajo técnico. Nosotros nos encargamos de la construcción, la configuración y las pruebas. Tú nos das acceso y entregamos un sistema funcionando.",
    timelineStepLabel: "Paso",
    timelineSteps: [
      { step: "01", icon: "📞", title: "Llamada Estratégica Gratis", time: "Día 1", desc: "Mapeamos tu negocio, tus herramientas actuales y tus mayores dolores. Te vas con un plan claro de qué construimos y por qué." },
      { step: "02", icon: "⚙️", title: "Construimos Todo", time: "Días 2–10", desc: "Configuración del CRM, automatizaciones, sitio web, formularios, pipelines y bandeja social. Recibes actualizaciones de progreso. No tocas nada." },
      { step: "03", icon: "🧪", title: "Pruebas y Recorrido", time: "Días 10–12", desc: "Cada automatización se prueba de extremo a extremo. Recorremos tu sistema contigo en vivo. Entiendes exactamente qué hace cada pieza y cómo usarla." },
      { step: "04", icon: "🚀", title: "Sales en Vivo", time: "Días 12–14", desc: "Tu sistema está activo. Los leads empiezan a recibir seguimiento automático. Las llamadas reciben SMS-back. Las citas se confirman. Tu negocio opera trabajes o no." },
    ],

    finalKicker: "$497/mes · $2,497 implementación única · Garantía ROI 90 días",
    finalH1Part1: "Deja de Operar Tu Negocio.",
    finalH1Gradient: "Empieza a Escalarlo.",
    finalDesc: "El sistema Starter está en vivo en 7–14 días. Un lead recuperado paga el primer mes. Todo lo demás es ganancia.",
    finalCtaPrimary: "Obtener Mi Sistema Starter →",
    finalCtaSecondary: "Agenda una Llamada Estratégica Gratis",
    finalGuarantee: "🛡️ Garantía ROI 90 días · Sin contratos · Cancela cuando quieras · Setup se paga una sola vez",
  },
} as const;

// ─── Animated counter ────────────────────────────────────────────────────────
function Counter({ to, prefix = "", suffix = "", decimals = 0, locale = "en-US" }: {
  to: number; prefix?: string; suffix?: string; decimals?: number; locale?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const inc = to / (duration / step);
    const timer = setInterval(() => {
      start += inc;
      if (start >= to) { setVal(to); clearInterval(timer); }
      else setVal(start);
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}{decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString(locale)}{suffix}
    </span>
  );
}

// ─── Value bar ────────────────────────────────────────────────────────────────
function ValueBar({ label, value, max, color = "var(--blue)", locale = "en-US" }: {
  label: string; value: number; max: number; color?: string; locale?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const pct = (value / max) * 100;

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, fontSize: "0.83rem", color: "var(--text-muted)" }}>{label}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)" }}>
          ${value.toLocaleString(locale)}
        </span>
      </div>
      <div style={{ height: 8, background: "var(--surface2)", borderRadius: 4, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ height: "100%", borderRadius: 4, background: color }}
        />
      </div>
    </div>
  );
}

// ─── Feature card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, does, solves, tag, replacesLabel }: {
  icon: string; title: string; does: string; solves: string; tag: string; replacesLabel: string;
}) {
  return (
    <SpotlightCard
      spotlightColor="rgba(26,127,212,0.1)"
      style={{
        background: "#FFFFFF",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
        boxShadow: "0 2px 8px rgba(15,34,64,0.04)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(26,92,168,0.3)";
        el.style.boxShadow = "0 6px 28px rgba(26,92,168,0.1)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "0 2px 8px rgba(15,34,64,0.04)";
        el.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: "1.8rem", lineHeight: 1 }}>{icon}</div>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.55rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--gold)",
          background: "rgba(212,165,58,0.08)",
          padding: "4px 10px",
          borderRadius: 4,
          fontWeight: 600,
          flexShrink: 0,
        }}>{tag}</span>
      </div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>{title}</div>
      <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 16, flexGrow: 1 }}>{does}</p>
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        paddingTop: 14,
        borderTop: "1px solid var(--border)",
      }}>
        <span style={{ color: "var(--green)", fontSize: "0.75rem", flexShrink: 0, marginTop: 1 }}>✓</span>
        <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.55, fontStyle: "italic" }}>{replacesLabel} {solves}</span>
      </div>
    </SpotlightCard>
  );
}

// ─── Situation card ───────────────────────────────────────────────────────────
const SITUATION_COLORS = ["#1A7FD4", "#D4A53A", "#E03B3B", "#1A5CA8", "#D4A53A", "#2B7FE0"];

function SituationCard({ icon, title, desc, index }: {
  icon: string; title: string; desc: string; index: number;
}) {
  const color = SITUATION_COLORS[index % SITUATION_COLORS.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(145deg, #0D1B2A 0%, #0F2035 100%)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderTop: `3px solid ${color}`,
        borderRadius: 20,
        padding: "44px 40px 40px",
        width: "clamp(300px, 42vw, 520px)",
        minHeight: 300,
        flexShrink: 0,
        cursor: "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transformOrigin: "center center",
        overflow: "hidden",
        boxShadow: `0 24px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04)`,
      }}
    >
      <div style={{
        position: "absolute",
        top: -10,
        right: 20,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 900,
        fontSize: "9rem",
        lineHeight: 1,
        color: color,
        opacity: 0.07,
        letterSpacing: "-0.05em",
        pointerEvents: "none",
        userSelect: "none",
      }}>
        {num}
      </div>

      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "60%", height: "60%",
        background: `radial-gradient(circle at 80% 10%, ${color}22 0%, transparent 65%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        top: 28,
        left: 36,
        fontSize: "2.6rem",
        lineHeight: 1,
        opacity: 0.9,
      }}>
        {icon}
      </div>

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.55rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: color,
        fontWeight: 600,
        marginBottom: 12,
        opacity: 0.85,
      }}>
        — {num}
      </div>

      <div style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        fontSize: "1.1rem",
        color: "#FFFFFF",
        marginBottom: 14,
        lineHeight: 1.3,
      }}>
        {title}
      </div>

      <p style={{
        fontSize: "0.85rem",
        color: "rgba(203,213,225,0.65)",
        lineHeight: 1.75,
        margin: 0,
      }}>
        {desc}
      </p>
    </div>
  );
}

function HorizontalSituations({ lang }: { lang: Lang }) {
  const t = T[lang];
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(460);

  useEffect(() => {
    const update = () => {
      setCardWidth(Math.min(window.innerWidth * 0.42, 500));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const GAP = 24;
  const TOTAL_SHIFT = (t.situations.length - 1) * (cardWidth + GAP);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -TOTAL_SHIFT]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.round(v * (t.situations.length - 1)));
  });

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${t.situations.length * 100}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "var(--surface)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 clamp(24px, 4vw, 80px)",
        }}
      >
        <div style={{ marginBottom: 40, flexShrink: 0 }}>
          <div className="slabel">{t.situationsLabel}</div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)", marginBottom: 12 }}>
            {t.situationsTitlePart1}{" "}
            <ShinyText text={t.situationsTitleShiny} speed={4} fromColor="#1A5CA8" toColor="#D4A53A" />
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 500, margin: 0, fontWeight: 400 }}>
            {t.situationsDesc}
          </p>
        </div>

        <div style={{ overflow: "hidden", flexShrink: 0 }}>
          <motion.div style={{ display: "flex", gap: GAP, x }}>
            {t.situations.map((item, i) => (
              <SituationCard key={i} {...item} index={i} />
            ))}
          </motion.div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32, flexShrink: 0 }}>
          <div style={{ display: "flex", gap: 8 }}>
            {t.situations.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === activeIndex ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === activeIndex ? "var(--gold)" : "var(--border2)",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.12em",
            color: "var(--text-dim)",
          }}>
            {activeIndex + 1} / {t.situations.length}
          </span>
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.1em",
            color: "var(--text-dim)",
            marginLeft: "auto",
          }}>
            {t.situationsScrollHint}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function StarterPage({ lang = "en" }: { lang?: Lang }) {
  const t = T[lang];
  const numberLocale = lang === "es" ? "es-MX" : "en-US";

  const costMetrics = [3, 60, 8];

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: 80,
          background: "var(--bg)",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(26,127,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(26,127,212,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px", pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }} />
        <div style={{
          position: "absolute", top: "5%", left: "3%",
          width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,127,212,0.12) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
          animation: "glow-pulse 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", right: "3%",
          width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,58,0.09) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
          animation: "glow-pulse 8s ease-in-out infinite 1s",
        }} />

        <div className="section-inner" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(26,127,212,0.1)", border: "1px solid rgba(26,127,212,0.35)", padding: "7px 16px", marginBottom: 32 }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", flexShrink: 0, animation: "dot-pulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              {t.heroKicker}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", lineHeight: 1.03, letterSpacing: "-0.035em", marginBottom: 28, maxWidth: 800 }}
          >
            {t.heroH1Part1}{" "}
            <GradientText text={t.heroH1Gradient} speed={5} from="#1A5CA8" mid="#D4A53A" to="#2B7FE0" style={{ fontWeight: 800 }} />
            <br />
            <ShinyText text={t.heroH1Shiny} speed={3.5} fromColor="#2B7FE0" toColor="#D4A53A" style={{ "--st-style": "normal" } as React.CSSProperties} />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: 44, fontWeight: 400 }}
          >
            {t.heroDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 48 }}
          >
            {t.heroStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border2)",
                  padding: "12px 20px",
                  borderRadius: 8,
                  textAlign: "center",
                }}
              >
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "var(--text)", letterSpacing: "-0.02em" }}>{s.val}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--text-dim)", textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.75 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 34px",
                background: "var(--orange)", color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                textDecoration: "none", borderRadius: 4, transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--orange-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(212,165,58,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--orange)";
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              {t.heroCtaPrimary}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "15px 28px",
                background: "transparent", color: "var(--text)",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem",
                textDecoration: "none", border: "1px solid var(--border2)", borderRadius: 4, transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,92,168,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
              }}
            >
              {t.heroCtaSecondary}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.57rem", letterSpacing: "0.08em", color: "var(--text-dim)", marginTop: 14 }}
          >
            {t.heroGuarantee}
          </motion.p>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(transparent, var(--bg))", pointerEvents: "none" }} />
      </section>

      <div className="gdiv" />

      <HorizontalSituations lang={lang} />

      <div className="gdiv" />

      {/* ── COST OF DOING NOTHING ────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--bg)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.costLabel}</div>
            <h2 className="section-title">
              {t.costTitlePart1}{" "}
              <GradientText text={t.costTitleGradient} speed={5} from="#1A5CA8" mid="#D4A53A" to="#2B7FE0" style={{ fontWeight: 800 }} />
            </h2>
            <p className="section-desc">{t.costDesc}</p>
          </SectionReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 64 }}>
            {t.costCards.map((item, i) => {
              const color = ["#E03B3B", "#D4A53A", "#1A5CA8"][i];
              return (
                <SectionReveal key={i} delay={i * 0.12} variant="scale">
                  <div style={{
                    background: "var(--navy)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderTop: `3px solid ${color}`,
                    borderRadius: 12,
                    padding: "32px 28px",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute", top: 0, right: 0, width: "45%", height: "45%",
                      background: `radial-gradient(circle at 80% 20%, ${color}14 0%, transparent 65%)`,
                      pointerEvents: "none",
                    }} />
                    <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{item.icon}</div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      color: "#FFFFFF",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>
                      <Counter to={costMetrics[i]} suffix={item.suffix} locale={numberLocale} />
                    </div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.45)", marginBottom: 20, lineHeight: 1.5 }}>
                      {item.label}
                    </div>
                    <div style={{ paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.6rem", color: color, marginBottom: 4, letterSpacing: "-0.02em" }}>{item.loss}</div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 16 }}>{item.lossLabel}</div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(203,213,225,0.7)", lineHeight: 1.65, fontStyle: "italic" }}>{item.note}</div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          <SectionReveal delay={0.2}>
            <div style={{
              background: "var(--navy)",
              border: "1px solid rgba(212,165,58,0.25)",
              borderRadius: 12,
              padding: "36px 40px",
              display: "flex",
              alignItems: "center",
              gap: 40,
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 15% 50%, rgba(212,165,58,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>{t.costSummaryKicker}</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#FFFFFF", lineHeight: 1.2, marginBottom: 12 }}>
                  {t.costSummaryTitle}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(203,213,225,0.75)", lineHeight: 1.7 }}>
                  {t.costSummaryDesc}
                </p>
              </div>
              <div style={{ textAlign: "center", flexShrink: 0 }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "3rem", color: "var(--gold)", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  <Counter to={497} prefix="$" locale={numberLocale} />
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: 6 }}>{t.costSummaryPerMonth}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--gold)", marginTop: 4 }}>{t.costSummaryVs}</div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── FEATURES DEEP DIVE ───────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--surface)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.featuresLabel}</div>
            <h2 className="section-title">
              {t.featuresTitlePart1}{" "}
              <ShinyText text={t.featuresTitleShiny} speed={3.8} fromColor="#1A5CA8" toColor="#D4A53A" />
            </h2>
            <p className="section-desc">{t.featuresDesc}</p>
          </SectionReveal>

          {/* WEBSITE */}
          <SectionReveal delay={0.05}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
              paddingBottom: 14, borderBottom: "1px solid var(--border2)",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(26,92,168,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🌐</div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", fontWeight: 600 }}>{t.sectionWebsite}</span>
            </div>
          </SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
            {t.websiteFeatures.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <FeatureCard {...f} replacesLabel={t.featuresReplaces} />
              </SectionReveal>
            ))}
          </div>

          {/* CRM */}
          <SectionReveal delay={0.05}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
              paddingBottom: 14, borderBottom: "1px solid var(--border2)",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(26,92,168,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🗂️</div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", fontWeight: 600 }}>{t.sectionCRM}</span>
            </div>
          </SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 48 }} className="crm-grid">
            {t.crmFeatures.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.09}>
                <FeatureCard {...f} replacesLabel={t.featuresReplaces} />
              </SectionReveal>
            ))}
          </div>

          {/* AUTOMATIONS */}
          <SectionReveal delay={0.05}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
              paddingBottom: 14, borderBottom: "1px solid var(--border2)",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(212,165,58,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>⚡</div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600 }}>{t.sectionAutomations}</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", color: "var(--text-dim)", background: "var(--gold-dim)", padding: "3px 10px", borderRadius: 4 }}>{t.sectionAutomationsTag}</span>
            </div>
          </SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 48 }}>
            {t.automationFeatures.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <FeatureCard {...f} replacesLabel={t.featuresReplaces} />
              </SectionReveal>
            ))}
          </div>

          {/* SUPPORT */}
          <SectionReveal delay={0.05}>
            <div style={{
              display: "flex", alignItems: "center", gap: 12, marginBottom: 20,
              paddingBottom: 14, borderBottom: "1px solid var(--border2)",
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(21,128,61,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🛎️</div>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--green)", fontWeight: 600 }}>{t.sectionSupport}</span>
            </div>
          </SectionReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {t.supportFeatures.map((f, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <FeatureCard {...f} replacesLabel={t.featuresReplaces} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── VALUE BREAKDOWN ──────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--bg)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.valueLabel}</div>
            <h2 className="section-title">
              {t.valueTitlePart1}{" "}
              <GradientText text="$497" speed={4} from="#D4A53A" mid="#E8BE4A" to="#1A5CA8" style={{ fontWeight: 800 }} />{" "}
              {t.valueTitlePart2}
            </h2>
            <p className="section-desc">{t.valueDesc}</p>
          </SectionReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 40, alignItems: "start" }}>
            <SectionReveal variant="left">
              <div style={{ background: "#FFFFFF", border: "1px solid var(--border)", borderRadius: 12, padding: "36px 32px" }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 28 }}>
                  {t.diyTitle}
                </div>
                {t.valueBars.map((bar, i) => (
                  <ValueBar key={i} {...bar} max={6000} locale={numberLocale} />
                ))}

                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "2px solid var(--border2)", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)" }}>{t.valueTotalLabel}</span>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
                    <Counter to={4780} prefix="$" locale={numberLocale} />
                    <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--text-dim)" }}>{t.valueTotalSuffix}</span>
                  </span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal variant="right">
              <div style={{ background: "var(--navy)", border: "1px solid rgba(212,165,58,0.25)", borderRadius: 12, padding: "36px 32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 80% 20%, rgba(212,165,58,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />

                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>{t.lpsKicker}</div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "3.2rem", color: "#FFFFFF", letterSpacing: "-0.035em", lineHeight: 1 }}>$497</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{t.lpsPriceSub}</div>
                </div>

                <div style={{ fontSize: "0.85rem", color: "rgba(203,213,225,0.7)", lineHeight: 1.7, marginBottom: 28 }}>
                  {t.lpsBlurb}
                </div>

                {t.lpsChecklist.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2, fontSize: "0.8rem" }}>✓</span>
                    <span style={{ fontSize: "0.83rem", color: "rgba(203,213,225,0.8)", lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}

                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "rgba(212,165,58,0.1)", border: "1px solid rgba(212,165,58,0.3)",
                    padding: "10px 18px", borderRadius: 8,
                  }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--gold)", fontWeight: 600 }}>
                      {t.lpsSavings}
                    </span>
                  </div>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", marginTop: 14, lineHeight: 1.6 }}>
                    {t.lpsPaymentPlan}{" "}
                    <a href="mailto:contacto@latinprimesystems.com" style={{ color: "rgba(212,165,58,0.6)", textDecoration: "none", borderBottom: "1px solid rgba(212,165,58,0.2)" }}>
                      contacto@latinprimesystems.com
                    </a>
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── TIMELINE ─────────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--surface)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.timelineLabel}</div>
            <h2 className="section-title">
              {t.timelineTitlePart1}{" "}
              <ShinyText text={t.timelineTitleShiny} speed={3.5} fromColor="#1A5CA8" toColor="#D4A53A" />
            </h2>
            <p className="section-desc">{t.timelineDesc}</p>
          </SectionReveal>

          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              top: 36, left: "calc(16.67% - 1px)",
              width: "66.67%", height: 2,
              background: "linear-gradient(90deg, var(--blue), var(--gold))",
              display: "none",
            }} className="timeline-line" />

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, position: "relative" }}>
              {t.timelineSteps.map((step, i) => {
                const color = ["var(--blue)", "var(--gold)", "var(--blue-bright)", "var(--green)"][i];
                return (
                  <SectionReveal key={i} delay={i * 0.13}>
                    <div style={{ position: "relative", padding: "0 12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                        <div style={{
                          width: 52, height: 52, borderRadius: "50%",
                          background: "var(--bg)",
                          border: `2px solid ${color}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "1.4rem", flexShrink: 0,
                          boxShadow: `0 0 20px ${color}33`,
                          zIndex: 1, position: "relative",
                        }}>
                          {step.icon}
                        </div>
                        <div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.14em", textTransform: "uppercase", color: color, fontWeight: 700 }}>{step.time}</div>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.06em", color: "var(--text-dim)", fontWeight: 600 }}>{t.timelineStepLabel} {step.step}</div>
                        </div>
                      </div>
                      <div style={{
                        background: "#FFFFFF",
                        border: "1px solid var(--border)",
                        borderTop: `2px solid ${color}`,
                        borderRadius: 10,
                        padding: "24px 20px",
                      }}>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: 10 }}>{step.title}</div>
                        <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{step.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(26,127,212,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: "20%", left: "10%",
          width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,127,212,0.2) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
          animation: "glow-pulse 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: "30vw", height: "30vw", maxWidth: 400, maxHeight: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,58,0.15) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
        }} />

        <div className="section-inner" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <SectionReveal>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(212,165,58,0.1)", border: "1px solid rgba(212,165,58,0.3)", padding: "7px 18px", marginBottom: 32 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>
                {t.finalKicker}
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#FFFFFF", marginBottom: 20, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
              {t.finalH1Part1}<br />
              <GradientText text={t.finalH1Gradient} speed={4} from="#D4A53A" mid="#E8BE4A" to="#2B7FE0" style={{ fontWeight: 800 }} />
            </h2>

            <p style={{ fontSize: "1rem", color: "rgba(203,213,225,0.75)", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 48px", fontWeight: 300 }}>
              {t.finalDesc}
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "17px 40px",
                  background: "var(--gold)", color: "var(--navy)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.98rem",
                  textDecoration: "none", borderRadius: 4,
                  boxShadow: "0 6px 28px rgba(212,165,58,0.4)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(212,165,58,0.6)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(212,165,58,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {t.finalCtaPrimary}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "16px 32px",
                  background: "transparent", color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.92rem",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 4,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {t.finalCtaSecondary}
              </a>
            </div>

            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
              {t.finalGuarantee}
            </p>
          </SectionReveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none !important; }
          .crm-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) {
          .crm-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .situations-scroll { scrollbar-width: none; cursor: grab; }
        .situations-scroll:active { cursor: grabbing; }
        .situations-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </>
  );
}
