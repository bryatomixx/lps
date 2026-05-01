"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";
import SpotlightCard from "./SpotlightCard";

type Lang = "en" | "es";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const T = {
  en: {
    heroKicker: "Custom AI Infrastructure · Quoted to your operation",
    heroH1Part1: "Whatever Your Business Needs.",
    heroH1Gradient: "We Build It.",
    heroH1Shiny: "Custom. End to End.",
    heroDesc:
      "When standard plans don't fit, we design and build the infrastructure around your exact operation. Custom dashboards, online academies, internal tools, deep API integrations, AI workflows — anything you can describe, we can build. AI-assisted engineering means weeks instead of months.",
    heroStats: [
      { val: "Custom", label: "scope · custom price" },
      { val: "Any", label: "platform · any API" },
      { val: "Weeks", label: "to delivery" },
      { val: "100%", label: "yours · documented" },
    ],
    heroCtaPrimary: "Request Custom Proposal",
    heroCtaSecondary: "Book a Discovery Call",
    heroNote: "🛡️ Documented SLA · custom guarantees in writing",

    capabilitiesLabel: "What We Can Build",
    capabilitiesTitlePart1: "If a Modern Stack Can Build It,",
    capabilitiesTitleShiny: "We Can Build It For You.",
    capabilitiesDesc:
      "These are the categories of work we ship most often. None of them are templates — every engagement is scoped, designed, and built around your exact business.",
    capabilities: [
      {
        icon: "📊",
        title: "Custom Dashboards & Command Centers",
        desc: "Real-time operational visibility tailored to your KPIs. Pull from any data source, expose any metric, and let any team see exactly what they need — with role-based views and white-label options for your clients.",
      },
      {
        icon: "🎓",
        title: "Online Academies & Course Platforms",
        desc: "Branded learning systems for your team or your customers — lessons, quizzes, progress tracking, certificates, drip schedules, payments, and a full admin to manage cohorts and content.",
      },
      {
        icon: "🔗",
        title: "Deep API Integrations",
        desc: "Connect any tool to any tool. REST, GraphQL, webhooks, OAuth, file drops — we move data between platforms that were never designed to talk to each other and make them feel like one system.",
      },
      {
        icon: "⚙️",
        title: "Custom CRM Workflows",
        desc: "GoHighLevel, HubSpot, Salesforce, or a fully custom CRM. We build pipelines, automations, lead routing, and reporting that match how your team actually works — not how the tool wants you to work.",
      },
      {
        icon: "🛠️",
        title: "Internal Admin Tools",
        desc: "The boring back-office software your team needs but no off-the-shelf product solves: dispatch, scheduling, inventory, payroll prep, document workflows, multi-step approvals.",
      },
      {
        icon: "🚪",
        title: "Branded Client Portals",
        desc: "A login experience your clients use to upload documents, see status, sign agreements, pay invoices, and self-serve — all branded to your business, none of the SaaS clutter.",
      },
      {
        icon: "📱",
        title: "Custom Web & Mobile Apps",
        desc: "If your operation needs an app — web, mobile, or both — we build it. Modern stack, fast UX, real-time sync, secure auth, and an admin panel that actually makes sense.",
      },
      {
        icon: "🎙️",
        title: "Voice Agents Trained on Your Business",
        desc: "AI voice agents that know your services, your pricing, your edge cases, and your tone. Not a demo voice — a real agent ingested with your scripts, FAQs, and routing logic.",
      },
      {
        icon: "📄",
        title: "Document Generation & Automation",
        desc: "Quotes, proposals, contracts, invoices, reports — generated automatically from form input or CRM data, branded with your template, signed via DocuSign or e-sign of your choice.",
      },
      {
        icon: "🔁",
        title: "Data Pipelines & ETL",
        desc: "Move data between systems on a schedule or in real time. Cleanse, transform, deduplicate, enrich. Land it in BigQuery, Postgres, Sheets, or wherever your reporting lives.",
      },
      {
        icon: "🧠",
        title: "AI Workflows (RAG, Embeddings, Agents)",
        desc: "Chatbots trained on your knowledge base, semantic search, document analysis, autonomous agents that take action — built with Claude, GPT, or open-source models on your infrastructure.",
      },
      {
        icon: "🏢",
        title: "Multi-Location & Franchise Systems",
        desc: "Centralized operations across many locations. Per-location dashboards, role-based access, brand consistency tools, and aggregated reporting that rolls up to HQ — without losing what makes each location unique.",
      },
    ],

    processLabel: "How We Work",
    processTitlePart1: "From Idea to Live System,",
    processTitleShiny: "Without the Agency Theater.",
    processDesc:
      "No bloated proposals. No 8-month timelines. We get on a call, scope the work, build it, ship it, and document it. Most engagements move from kickoff to live in 4–10 weeks.",
    processSteps: [
      {
        n: "01",
        icon: "🎯",
        title: "Discovery & Scope",
        desc: "We map your operation: data, tools, team, workflows, edge cases. We tell you what's worth building, what's worth integrating, and what's not worth it at all. You leave with a fixed scope and a quote.",
      },
      {
        n: "02",
        icon: "✏️",
        title: "Architecture & Design",
        desc: "We design the system end-to-end before we write code: data model, integrations map, UX flows, role permissions, deployment plan. You approve before we build.",
      },
      {
        n: "03",
        icon: "🏗️",
        title: "Build & Integrate",
        desc: "We build in tight loops, ship working pieces weekly, and demo every step. AI-assisted engineering compresses what used to take months into weeks. You see progress every Friday.",
      },
      {
        n: "04",
        icon: "🚀",
        title: "Deliver, Train, Maintain",
        desc: "Live walkthrough. Documentation. Team training. SLA on uptime and response times. Optional retainer for new builds and continuous optimization.",
      },
    ],

    techLabel: "The Stack We Use",
    techTitlePart1: "Modern Tools,",
    techTitleShiny: "Yours to Keep.",
    techDesc:
      "Everything we build is yours. Code in your repo, data in your accounts, infrastructure under your control. We don't lock you in.",
    techGroups: [
      {
        label: "Frontend & UI",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
      },
      {
        label: "Backend & APIs",
        items: ["Node.js", "Python", "FastAPI", "Hono", "tRPC", "GraphQL"],
      },
      {
        label: "Data & Storage",
        items: ["PostgreSQL", "Supabase", "Redis", "BigQuery", "S3", "Airtable"],
      },
      {
        label: "AI & Voice",
        items: ["Claude API", "OpenAI", "ElevenLabs", "VAPI", "RAG / Embeddings"],
      },
      {
        label: "Automation & Integration",
        items: ["n8n", "Make", "Zapier", "Webhooks", "OAuth", "Any REST / GraphQL API"],
      },
      {
        label: "Infrastructure",
        items: ["Vercel", "Cloudflare", "AWS", "GitHub Actions", "Sentry"],
      },
    ],

    industriesLabel: "Built For",
    industriesTitlePart1: "Industry-Agnostic.",
    industriesTitleShiny: "Operation-Specific.",
    industriesDesc:
      "We've built for businesses across every category. The common thread isn't industry — it's operations that have outgrown what off-the-shelf software can do.",
    industries: [
      "Multi-location franchises",
      "Healthcare & dental networks",
      "Real estate brokerages",
      "Insurance agencies (mid-large)",
      "Education & training companies",
      "Legal & accounting firms",
      "Manufacturing & distribution",
      "E-commerce operations",
      "Coaching & consulting",
      "Marketing agencies",
      "Logistics & fleet operators",
      "Anything else — we'll tell you honestly if it's a fit",
    ],

    pricingLabel: "Pricing Model",
    pricingTitle: "Custom Scope. Custom Quote. In Writing.",
    pricingDesc:
      "Every Custom engagement is scoped from the discovery call. We send you a fixed-price proposal with deliverables, timeline, and a documented SLA. No surprise invoices.",
    pricingPoints: [
      "One-time build fee + optional monthly retainer for support and continuous improvement.",
      "Most engagements run $5,000 – $50,000+ depending on scope. Some go higher.",
      "Fixed-price proposal in writing before any work starts.",
      "Documented SLA on uptime and response times.",
      "All code, data, and infrastructure stay in your accounts. You own everything.",
    ],

    finalKicker: "Custom · Quoted · Documented · Yours",
    finalH1Part1: "Stop Trying to Force Your Business",
    finalH1Gradient: "into Someone Else's Software.",
    finalDesc:
      "Tell us what you actually need. We'll tell you what it takes to build it, what it costs, and how long it'll take. No fluff.",
    finalCtaPrimary: "Request Custom Proposal",
    finalCtaSecondary: "Book a Discovery Call",
    finalGuarantee: "🛡️ Documented SLA · Custom guarantees in writing · You own everything we build",
  },
  es: {
    heroKicker: "Infraestructura de IA a la Medida · Cotizada a tu operación",
    heroH1Part1: "Lo que tu Negocio Necesite.",
    heroH1Gradient: "Lo Construimos.",
    heroH1Shiny: "A la Medida. De Punta a Punta.",
    heroDesc:
      "Cuando los planes estándar no se ajustan, diseñamos y construimos la infraestructura alrededor de tu operación exacta. Dashboards a la medida, academias online, herramientas internas, integraciones API profundas, flujos de IA — lo que puedas describir, lo podemos construir. Ingeniería asistida por IA significa semanas en vez de meses.",
    heroStats: [
      { val: "A la medida", label: "alcance · precio personalizado" },
      { val: "Cualquier", label: "plataforma · cualquier API" },
      { val: "Semanas", label: "para entrega" },
      { val: "100%", label: "tuyo · documentado" },
    ],
    heroCtaPrimary: "Solicitar Propuesta Personalizada",
    heroCtaSecondary: "Agendar Llamada de Diagnóstico",
    heroNote: "🛡️ SLA documentado · garantías personalizadas por escrito",

    capabilitiesLabel: "Qué Podemos Construir",
    capabilitiesTitlePart1: "Si un Stack Moderno lo Puede Construir,",
    capabilitiesTitleShiny: "Lo Construimos para Ti.",
    capabilitiesDesc:
      "Estas son las categorías de trabajo que más entregamos. Ninguna es una plantilla — cada engagement se cotiza, diseña y construye alrededor de tu negocio exacto.",
    capabilities: [
      {
        icon: "📊",
        title: "Dashboards y Command Centers a la Medida",
        desc: "Visibilidad operativa en tiempo real ajustada a tus KPIs. Jala datos de cualquier fuente, expón cualquier métrica y deja que cada equipo vea exactamente lo que necesita — con vistas por rol y white-label para tus clientes.",
      },
      {
        icon: "🎓",
        title: "Academias Online y Plataformas de Cursos",
        desc: "Sistemas de aprendizaje con tu marca para tu equipo o tus clientes — lecciones, quizzes, seguimiento de progreso, certificados, drip schedules, pagos y un admin completo para gestionar grupos y contenido.",
      },
      {
        icon: "🔗",
        title: "Integraciones API Profundas",
        desc: "Conecta cualquier herramienta con cualquier herramienta. REST, GraphQL, webhooks, OAuth, drop de archivos — movemos datos entre plataformas que nunca fueron diseñadas para hablarse y hacemos que se sientan como un solo sistema.",
      },
      {
        icon: "⚙️",
        title: "Flujos de CRM Personalizados",
        desc: "GoHighLevel, HubSpot, Salesforce o un CRM completamente a la medida. Construimos pipelines, automatizaciones, ruteo de leads y reportes que se ajustan a cómo realmente trabaja tu equipo — no a cómo la herramienta quiere que trabajes.",
      },
      {
        icon: "🛠️",
        title: "Herramientas Internas de Administración",
        desc: "El software de back-office aburrido que tu equipo necesita pero ningún producto comercial resuelve: despacho, agendamiento, inventario, prep de nómina, flujos de documentos, aprobaciones multi-paso.",
      },
      {
        icon: "🚪",
        title: "Portales de Cliente con tu Marca",
        desc: "Una experiencia de login que tus clientes usan para subir documentos, ver status, firmar acuerdos, pagar facturas y autoservirse — todo con tu marca, sin el ruido de los SaaS.",
      },
      {
        icon: "📱",
        title: "Apps Web y Móviles a la Medida",
        desc: "Si tu operación necesita una app — web, móvil o ambas — la construimos. Stack moderno, UX rápido, sincronización en tiempo real, auth segura y un panel admin que de verdad tiene sentido.",
      },
      {
        icon: "🎙️",
        title: "Agentes de Voz Entrenados en tu Negocio",
        desc: "Agentes de voz IA que saben tus servicios, tus precios, tus casos especiales y tu tono. No una voz demo — un agente real entrenado con tus scripts, FAQs y lógica de ruteo.",
      },
      {
        icon: "📄",
        title: "Generación y Automatización de Documentos",
        desc: "Cotizaciones, propuestas, contratos, facturas, reportes — generados automáticamente desde un formulario o datos del CRM, con tu plantilla y firmados con DocuSign o el e-sign de tu preferencia.",
      },
      {
        icon: "🔁",
        title: "Pipelines de Datos y ETL",
        desc: "Mueve datos entre sistemas en horario o en tiempo real. Limpia, transforma, deduplica, enriquece. Aterrízalo en BigQuery, Postgres, Sheets o donde viva tu reporting.",
      },
      {
        icon: "🧠",
        title: "Flujos de IA (RAG, Embeddings, Agentes)",
        desc: "Chatbots entrenados en tu base de conocimiento, búsqueda semántica, análisis de documentos, agentes autónomos que toman acción — construidos con Claude, GPT o modelos open-source en tu infraestructura.",
      },
      {
        icon: "🏢",
        title: "Sistemas Multi-Ubicación y Franquicias",
        desc: "Operaciones centralizadas para muchas ubicaciones. Dashboards por ubicación, acceso por rol, herramientas de consistencia de marca y reportes agregados que suben al HQ — sin perder lo que hace única a cada ubicación.",
      },
    ],

    processLabel: "Cómo Trabajamos",
    processTitlePart1: "De la Idea al Sistema en Vivo,",
    processTitleShiny: "Sin el Teatro de Agencia.",
    processDesc:
      "Sin propuestas infladas. Sin timelines de 8 meses. Tomamos una llamada, cotizamos el trabajo, lo construimos, lo lanzamos y lo documentamos. La mayoría de los engagements van de kickoff a vivo en 4–10 semanas.",
    processSteps: [
      {
        n: "01",
        icon: "🎯",
        title: "Diagnóstico y Alcance",
        desc: "Mapeamos tu operación: datos, herramientas, equipo, flujos, casos especiales. Te decimos qué vale la pena construir, qué vale la pena integrar y qué no vale la pena del todo. Te vas con un alcance fijo y una cotización.",
      },
      {
        n: "02",
        icon: "✏️",
        title: "Arquitectura y Diseño",
        desc: "Diseñamos el sistema de punta a punta antes de escribir código: modelo de datos, mapa de integraciones, flujos de UX, permisos por rol, plan de deploy. Tú apruebas antes de construir.",
      },
      {
        n: "03",
        icon: "🏗️",
        title: "Construcción e Integración",
        desc: "Construimos en ciclos cortos, entregamos piezas funcionando cada semana y demostramos cada paso. La ingeniería asistida por IA comprime en semanas lo que antes tomaba meses. Ves progreso cada viernes.",
      },
      {
        n: "04",
        icon: "🚀",
        title: "Entrega, Capacitación, Mantenimiento",
        desc: "Recorrido en vivo. Documentación. Capacitación al equipo. SLA sobre uptime y tiempos de respuesta. Retainer opcional para nuevas construcciones y optimización continua.",
      },
    ],

    techLabel: "El Stack que Usamos",
    techTitlePart1: "Herramientas Modernas,",
    techTitleShiny: "Tuyas para Quedarte.",
    techDesc:
      "Todo lo que construimos es tuyo. Código en tu repo, datos en tus cuentas, infraestructura bajo tu control. No te encerramos.",
    techGroups: [
      {
        label: "Frontend y UI",
        items: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
      },
      {
        label: "Backend y APIs",
        items: ["Node.js", "Python", "FastAPI", "Hono", "tRPC", "GraphQL"],
      },
      {
        label: "Datos y Storage",
        items: ["PostgreSQL", "Supabase", "Redis", "BigQuery", "S3", "Airtable"],
      },
      {
        label: "IA y Voz",
        items: ["Claude API", "OpenAI", "ElevenLabs", "VAPI", "RAG / Embeddings"],
      },
      {
        label: "Automatización e Integración",
        items: ["n8n", "Make", "Zapier", "Webhooks", "OAuth", "Cualquier API REST / GraphQL"],
      },
      {
        label: "Infraestructura",
        items: ["Vercel", "Cloudflare", "AWS", "GitHub Actions", "Sentry"],
      },
    ],

    industriesLabel: "Construido Para",
    industriesTitlePart1: "Agnóstico de Industria.",
    industriesTitleShiny: "Específico a tu Operación.",
    industriesDesc:
      "Hemos construido para negocios en todas las categorías. El hilo común no es la industria — son operaciones que han superado lo que el software comercial puede hacer.",
    industries: [
      "Franquicias multi-ubicación",
      "Redes de salud y odontología",
      "Brokerages de bienes raíces",
      "Agencias de seguros (medianas-grandes)",
      "Empresas de educación y capacitación",
      "Despachos legales y contables",
      "Manufactura y distribución",
      "Operaciones de e-commerce",
      "Coaching y consultoría",
      "Agencias de marketing",
      "Logística y operadores de flotas",
      "Cualquier otra cosa — te decimos honestamente si encaja",
    ],

    pricingLabel: "Modelo de Precios",
    pricingTitle: "Alcance Personalizado. Cotización Personalizada. Por Escrito.",
    pricingDesc:
      "Cada engagement Custom se cotiza desde la llamada de diagnóstico. Te enviamos una propuesta de precio fijo con entregables, timeline y SLA documentado. Sin facturas sorpresa.",
    pricingPoints: [
      "Tarifa única de construcción + retainer mensual opcional para soporte y mejora continua.",
      "La mayoría de los engagements van de $5,000 a $50,000+ según el alcance. Algunos son más altos.",
      "Propuesta de precio fijo por escrito antes de empezar a trabajar.",
      "SLA documentado sobre uptime y tiempos de respuesta.",
      "Todo el código, datos e infraestructura quedan en tus cuentas. Tú eres dueño de todo.",
    ],

    finalKicker: "A la medida · Cotizado · Documentado · Tuyo",
    finalH1Part1: "Deja de Forzar tu Negocio",
    finalH1Gradient: "al Software de Alguien Más.",
    finalDesc:
      "Cuéntanos lo que realmente necesitas. Te decimos qué se necesita para construirlo, cuánto cuesta y cuánto se va a tardar. Sin rodeos.",
    finalCtaPrimary: "Solicitar Propuesta Personalizada",
    finalCtaSecondary: "Agendar Llamada de Diagnóstico",
    finalGuarantee: "🛡️ SLA documentado · Garantías personalizadas por escrito · Tú eres dueño de todo",
  },
} as const;

const STEP_COLORS = ["var(--blue)", "var(--gold)", "var(--blue-bright)", "var(--green)"];

export default function CustomPage({ lang = "en" }: { lang?: Lang }) {
  const t = T[lang];

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
          position: "absolute", top: "5%", right: "3%",
          width: "55vw", height: "55vw", maxWidth: 700, maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,165,58,0.12) 0%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
          animation: "glow-pulse 6s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "5%", left: "3%",
          width: "40vw", height: "40vw", maxWidth: 500, maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,127,212,0.1) 0%, transparent 70%)",
          filter: "blur(50px)", pointerEvents: "none",
          animation: "glow-pulse 8s ease-in-out infinite 1s",
        }} />

        <div className="section-inner" style={{ position: "relative", zIndex: 1, paddingTop: 60, paddingBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(212,165,58,0.1)", border: "1px solid rgba(212,165,58,0.4)",
              padding: "7px 16px", marginBottom: 32,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, boxShadow: "0 0 8px var(--gold)" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              {t.heroKicker}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", lineHeight: 1.03, letterSpacing: "-0.035em", marginBottom: 28, maxWidth: 900 }}
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
            style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 640, marginBottom: 44 }}
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
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.2rem", color: "var(--text)", letterSpacing: "-0.02em" }}>{s.val}</div>
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
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "16px 34px",
                background: "var(--orange)", color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                textDecoration: "none", borderRadius: 4, transition: "all 0.25s",
                boxShadow: "0 4px 16px rgba(13,27,42,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--orange-hover)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(212,165,58,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--orange)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(13,27,42,0.2)";
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
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--gold)", marginTop: 16 }}
          >
            {t.heroNote}
          </motion.p>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(transparent, var(--bg))", pointerEvents: "none" }} />
      </section>

      <div className="gdiv" />

      {/* ── CAPABILITIES ─────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--surface)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.capabilitiesLabel}</div>
            <h2 className="section-title">
              {t.capabilitiesTitlePart1}{" "}
              <ShinyText text={t.capabilitiesTitleShiny} speed={3.8} fromColor="#1A5CA8" toColor="#D4A53A" />
            </h2>
            <p className="section-desc">{t.capabilitiesDesc}</p>
          </SectionReveal>

          <div className="cap-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
            marginTop: 40,
          }}>
            {t.capabilities.map((cap, i) => (
              <SectionReveal key={i} delay={(i % 4) * 0.08}>
                <SpotlightCard
                  spotlightColor="rgba(26,127,212,0.1)"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "26px 24px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                    boxShadow: "0 2px 8px rgba(15,34,64,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(212,165,58,0.4)";
                    el.style.boxShadow = "0 6px 28px rgba(212,165,58,0.12)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.boxShadow = "0 2px 8px rgba(15,34,64,0.04)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: "1.7rem", marginBottom: 14, lineHeight: 1 }}>{cap.icon}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}>{cap.title}</div>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                    {cap.desc}
                  </p>
                </SpotlightCard>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--bg)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.processLabel}</div>
            <h2 className="section-title">
              {t.processTitlePart1}{" "}
              <ShinyText text={t.processTitleShiny} speed={3.5} fromColor="#1A5CA8" toColor="#D4A53A" />
            </h2>
            <p className="section-desc">{t.processDesc}</p>
          </SectionReveal>

          <div className="proc-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 40,
          }}>
            {t.processSteps.map((step, i) => {
              const color = STEP_COLORS[i];
              return (
                <SectionReveal key={i} delay={i * 0.13}>
                  <div style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--border)",
                    borderTop: `2px solid ${color}`,
                    borderRadius: 10,
                    padding: "26px 22px",
                    height: "100%",
                  }}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 16,
                    }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: "var(--bg)",
                        border: `2px solid ${color}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.2rem", flexShrink: 0,
                        boxShadow: `0 0 20px ${color}33`,
                      }}>
                        {step.icon}
                      </div>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: color,
                        fontWeight: 700,
                      }}>
                        — {step.n}
                      </div>
                    </div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text)",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}>{step.title}</div>
                    <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                      {step.desc}
                    </p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--surface)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.techLabel}</div>
            <h2 className="section-title">
              {t.techTitlePart1}{" "}
              <ShinyText text={t.techTitleShiny} speed={3.5} fromColor="#1A5CA8" toColor="#D4A53A" />
            </h2>
            <p className="section-desc">{t.techDesc}</p>
          </SectionReveal>

          <div className="tech-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            marginTop: 40,
          }}>
            {t.techGroups.map((group, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <div style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "22px 20px",
                  height: "100%",
                }}>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 700,
                    marginBottom: 14,
                  }}>{group.label}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {group.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.78rem",
                          color: "var(--text)",
                          background: "var(--surface)",
                          border: "1px solid var(--border2)",
                          padding: "5px 12px",
                          borderRadius: 6,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--bg)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.industriesLabel}</div>
            <h2 className="section-title">
              {t.industriesTitlePart1}{" "}
              <ShinyText text={t.industriesTitleShiny} speed={3.5} fromColor="#1A5CA8" toColor="#D4A53A" />
            </h2>
            <p className="section-desc">{t.industriesDesc}</p>
          </SectionReveal>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
            marginTop: 36,
          }}>
            {t.industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderLeft: "3px solid var(--gold)",
                  borderRadius: 8,
                  padding: "14px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: "0.88rem",
                  color: "var(--text)",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>◆</span>
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="gdiv" />

      {/* ── PRICING MODEL ────────────────────────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--surface)" }}>
        <div className="section-inner" style={{ maxWidth: 920 }}>
          <SectionReveal>
            <div className="slabel">{t.pricingLabel}</div>
            <h2 className="section-title">
              <GradientText text={t.pricingTitle} speed={5} from="#1A5CA8" mid="#D4A53A" to="#2B7FE0" style={{ fontWeight: 800 }} />
            </h2>
            <p className="section-desc">{t.pricingDesc}</p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div style={{
              background: "var(--navy)",
              border: "1px solid rgba(212,165,58,0.25)",
              borderRadius: 14,
              padding: "36px 36px 32px",
              marginTop: 32,
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(circle at 90% 10%, rgba(212,165,58,0.06) 0%, transparent 60%)",
                pointerEvents: "none",
              }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, position: "relative" }}>
                {t.pricingPoints.map((point, i) => (
                  <li key={i} style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    paddingBottom: 14,
                    marginBottom: 14,
                    borderBottom: i < t.pricingPoints.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "rgba(212,165,58,0.15)",
                      border: "1px solid rgba(212,165,58,0.4)",
                      color: "var(--gold)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      marginTop: 2,
                    }}>✓</span>
                    <span style={{
                      fontSize: "0.95rem",
                      color: "rgba(203,213,225,0.85)",
                      lineHeight: 1.7,
                    }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
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
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(212,165,58,0.1)", border: "1px solid rgba(212,165,58,0.3)",
              padding: "7px 18px", marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)" }}>
                {t.finalKicker}
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              marginBottom: 20,
              maxWidth: 800,
              marginLeft: "auto",
              marginRight: "auto",
            }}>
              {t.finalH1Part1}<br />
              <GradientText text={t.finalH1Gradient} speed={4} from="#D4A53A" mid="#E8BE4A" to="#2B7FE0" style={{ fontWeight: 800 }} />
            </h2>

            <p style={{
              fontSize: "1rem",
              color: "rgba(203,213,225,0.75)",
              lineHeight: 1.75,
              maxWidth: 560,
              margin: "0 auto 48px",
              fontWeight: 300,
            }}>
              {t.finalDesc}
            </p>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
              <a
                href={BOOKING_URL}
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

            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
            }}>
              {t.finalGuarantee}
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
