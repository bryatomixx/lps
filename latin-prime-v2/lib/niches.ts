export interface FlowNode {
  id: string;
  icon: string;
  label: string;
  sublabel: string;
  type: "trigger" | "process" | "action" | "output";
}

export interface UseCase {
  title: string;
  titleEs: string;
  desc: string;
  descEs: string;
  flow: FlowNode[];
  flowEs: FlowNode[];
}

export interface BeforeAfterPair {
  before: string;
  beforeEs: string;
  after: string;
  afterEs: string;
}

export interface FaqItem {
  q: string;
  qEs: string;
  a: string;
  aEs: string;
}

export interface TechStackItem {
  name: string;
  desc: string;
  descEs: string;
}

export interface FeaturedQuote {
  name: string;
  role: string;
  roleEs: string;
  quote: string;
  quoteEs: string;
  metric: string;
  metricEs: string;
  photo?: string;
  initials: string;
}

export interface NicheData {
  slug: string;
  icon: string;
  name: string;
  nameEs: string;
  img: string;
  heroTitle: string;
  heroTitleEs: string;
  heroSub: string;
  heroSubEs: string;
  problem: string;
  problemEs: string;
  automationTitle: string;
  automationTitleEs: string;
  flowEN: FlowNode[];
  flowES: FlowNode[];
  items: string[];
  itemsEs: string[];
  stats: { value: string; label: string; labelEs: string }[];
  metaTitle: string;
  metaDesc: string;
  metaTitleEs: string;
  metaDescEs: string;
  keywords: string[];
  keywordsEs: string[];
  // ── ROUND-5 enhanced fields (optional during rollout) ──────────────────────
  useCases?: UseCase[];
  beforeAfter?: BeforeAfterPair[];
  faq?: FaqItem[];
  techStack?: TechStackItem[];
  featuredQuote?: FeaturedQuote;
}

export const niches: NicheData[] = [
  {
    slug: "insurance",
    icon: "🛡️",
    name: "Insurance Agencies",
    nameEs: "Agencias de Seguros",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae21e91f63b1.png",
    heroTitle: "AI Automation for Insurance Agencies",
    heroTitleEs: "Automatización IA para Agencias de Seguros",
    heroSub:
      "Stop losing policies to slow follow-up. Our AI voice agent qualifies leads 24/7, books appointments automatically, and sends renewal reminders — so you close more policies without more staff.",
    heroSubEs:
      "Deja de perder pólizas por seguimiento lento. Nuestro agente de voz IA califica prospectos las 24 horas, agenda citas automáticamente y envía recordatorios de renovación — para que cierres más pólizas sin más personal.",
    problem:
      "Insurance agents lose 60–70% of leads simply because no one followed up fast enough. Leads go cold, renewals slip through the cracks, and your best prospects end up with a competitor who just picked up the phone first.",
    problemEs:
      "Los agentes de seguros pierden entre el 60 y 70% de sus prospectos simplemente porque nadie hizo el seguimiento con suficiente rapidez. Los leads se enfrían, las renovaciones se escapan y tus mejores prospectos terminan con un competidor que simplemente levantó el teléfono primero.",
    automationTitle: "Your #1 Automation: Lead-to-Policy Pipeline",
    automationTitleEs: "Tu Automatización #1: Pipeline de Prospecto a Póliza",
    flowEN: [
      { id: "1", icon: "📱", label: "New Lead", sublabel: "Phone, web, or SMS", type: "trigger" },
      { id: "2", icon: "🤖", label: "AI Qualifies", sublabel: "Voice agent 24/7", type: "process" },
      { id: "3", icon: "📋", label: "CRM Updated", sublabel: "Lead scored & tagged", type: "action" },
      { id: "4", icon: "📲", label: "Auto Follow-up", sublabel: "SMS + email + WhatsApp", type: "action" },
      { id: "5", icon: "✅", label: "Policy Closed", sublabel: "Renewal auto-scheduled", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "📱", label: "Nuevo Lead", sublabel: "Teléfono, web o SMS", type: "trigger" },
      { id: "2", icon: "🤖", label: "IA Califica", sublabel: "Agente de voz 24/7", type: "process" },
      { id: "3", icon: "📋", label: "CRM Actualizado", sublabel: "Lead puntuado y etiquetado", type: "action" },
      { id: "4", icon: "📲", label: "Seguimiento Auto", sublabel: "SMS + email + WhatsApp", type: "action" },
      { id: "5", icon: "✅", label: "Póliza Cerrada", sublabel: "Renovación programada", type: "output" },
    ],
    items: [
      "AI voice agent qualifies leads & books appointments 24/7",
      "Automated renewal reminders via SMS, email & WhatsApp",
      "Referral request sequence after every closed policy",
      "CRM pipeline with hot lead alerts & automatic follow-up",
      "Re-engagement campaign for dormant leads (30/60/90 days)",
      "Multi-channel follow-up: call → SMS → email → voicemail drop",
    ],
    itemsEs: [
      "Agente de voz IA califica prospectos y agenda citas las 24 horas",
      "Recordatorios de renovación automatizados por SMS, correo y WhatsApp",
      "Secuencia de referidos enviada después de cada póliza cerrada",
      "Pipeline CRM con alertas de prospectos calientes y seguimiento automático",
      "Campaña de reactivación para prospectos inactivos (30/60/90 días)",
      "Seguimiento multicanal: llamada → SMS → correo → mensaje de voz",
    ],
    stats: [
      { value: "2 min", label: "Average lead response time", labelEs: "Tiempo promedio de respuesta" },
      { value: "60%", label: "More policies closed", labelEs: "Más pólizas cerradas" },
      { value: "24/7", label: "AI answers every call", labelEs: "IA contesta cada llamada" },
    ],
    metaTitle: "AI Automation for Insurance Agencies | Latin Prime Systems",
    metaDesc:
      "AI voice agents, automated follow-up, and CRM pipelines purpose-built for insurance agencies. Never miss a lead. Close more policies. 90-Day ROI Guarantee.",
    metaTitleEs: "Automatización IA para Agencias de Seguros | Latin Prime Systems",
    metaDescEs:
      "Agentes de voz IA, seguimiento automatizado y pipelines CRM diseñados para agencias de seguros. Nunca pierdas un prospecto. Cierra más pólizas. Garantía ROI 90 días.",
    keywords: [
      "AI automation for insurance agencies",
      "insurance agency CRM automation",
      "AI voice agent insurance",
      "lead follow-up automation insurance",
      "insurance renewal reminders automation",
      "GoHighLevel insurance agency",
    ],
    keywordsEs: [
      "automatización IA agencias de seguros",
      "CRM para seguros automatización",
      "agente de voz IA seguros",
      "seguimiento automatizado seguros",
      "recordatorios renovación seguros",
    ],
    useCases: [
      {
        title: "Renewal Reminder Pipeline",
        titleEs: "Pipeline de Renovaciones Automáticas",
        desc: "60–90 days before each policy renewal, the system fires a multi-channel sequence (email + SMS + WhatsApp) and books a renewal call automatically when the client engages.",
        descEs: "60–90 días antes de cada renovación, el sistema dispara una secuencia multicanal (email + SMS + WhatsApp) y agenda la llamada de renovación automáticamente cuando el cliente engancha.",
        flow: [
          { id: "r1", icon: "📅", label: "Renewal Due", sublabel: "60 days out", type: "trigger" },
          { id: "r2", icon: "📲", label: "Multi-Channel Reminder", sublabel: "Email + SMS + WhatsApp", type: "action" },
          { id: "r3", icon: "🤖", label: "AI Books Call", sublabel: "When client replies", type: "process" },
          { id: "r4", icon: "✅", label: "Policy Renewed", sublabel: "CRM auto-updated", type: "output" },
        ],
        flowEs: [
          { id: "r1", icon: "📅", label: "Renovación Próxima", sublabel: "A 60 días", type: "trigger" },
          { id: "r2", icon: "📲", label: "Recordatorio Multicanal", sublabel: "Email + SMS + WhatsApp", type: "action" },
          { id: "r3", icon: "🤖", label: "IA Agenda Llamada", sublabel: "Cuando responde", type: "process" },
          { id: "r4", icon: "✅", label: "Póliza Renovada", sublabel: "CRM actualizado", type: "output" },
        ],
      },
      {
        title: "Referral Generation After Closed Policy",
        titleEs: "Generación de Referidos Post-Cierre",
        desc: "Every closed policy triggers a thank-you sequence + a personalized referral request 7, 30, and 90 days later. Tracked, attributed, and rewarded automatically.",
        descEs: "Cada póliza cerrada dispara una secuencia de agradecimiento + solicitud personalizada de referidos a los 7, 30 y 90 días. Rastreado, atribuido y recompensado automáticamente.",
        flow: [
          { id: "f1", icon: "🎉", label: "Policy Closed", sublabel: "Trigger fires", type: "trigger" },
          { id: "f2", icon: "💌", label: "Thank-You Email", sublabel: "Day 1", type: "action" },
          { id: "f3", icon: "🤝", label: "Referral Ask", sublabel: "Day 7 / 30 / 90", type: "action" },
          { id: "f4", icon: "📊", label: "Tracked + Rewarded", sublabel: "Auto attribution", type: "output" },
        ],
        flowEs: [
          { id: "f1", icon: "🎉", label: "Póliza Cerrada", sublabel: "Trigger activa", type: "trigger" },
          { id: "f2", icon: "💌", label: "Email de Gracias", sublabel: "Día 1", type: "action" },
          { id: "f3", icon: "🤝", label: "Pedido de Referido", sublabel: "Día 7 / 30 / 90", type: "action" },
          { id: "f4", icon: "📊", label: "Trackeado + Premiado", sublabel: "Atribución automática", type: "output" },
        ],
      },
      {
        title: "Dormant Lead Re-Engagement",
        titleEs: "Reactivación de Leads Dormidos",
        desc: "Leads inactive for 30/60/90 days enter an AI-driven re-engagement campaign that personalizes the message based on what they originally inquired about.",
        descEs: "Leads inactivos por 30/60/90 días entran en una campaña de reactivación con IA que personaliza el mensaje según lo que originalmente preguntaron.",
        flow: [
          { id: "d1", icon: "💤", label: "Lead Dormant", sublabel: "30+ days idle", type: "trigger" },
          { id: "d2", icon: "🧠", label: "AI Personalizes", sublabel: "Based on original interest", type: "process" },
          { id: "d3", icon: "📤", label: "Outreach Sent", sublabel: "SMS or call drop", type: "action" },
          { id: "d4", icon: "🔥", label: "Lead Reactivated", sublabel: "Routed to agent", type: "output" },
        ],
        flowEs: [
          { id: "d1", icon: "💤", label: "Lead Dormido", sublabel: "30+ días inactivo", type: "trigger" },
          { id: "d2", icon: "🧠", label: "IA Personaliza", sublabel: "Según interés original", type: "process" },
          { id: "d3", icon: "📤", label: "Outreach Enviado", sublabel: "SMS o voicemail drop", type: "action" },
          { id: "d4", icon: "🔥", label: "Lead Reactivado", sublabel: "Ruteado al agente", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "Leads from Zillow / web / referrals sit unanswered for hours", beforeEs: "Leads de Zillow / web / referidos sin respuesta por horas", after: "Every lead gets a response in under 2 minutes, 24/7", afterEs: "Cada lead recibe respuesta en menos de 2 minutos, 24/7" },
      { before: "Renewals slip through the cracks; clients leave for the next agency that calls", beforeEs: "Las renovaciones se escapan; los clientes se van con la próxima agencia que llama", after: "Renewals tracked 60–90 days out with auto multi-channel reminders", afterEs: "Renovaciones rastreadas 60–90 días antes con recordatorios multicanal automáticos" },
      { before: "Referrals only happen when you remember to ask, which is rarely", beforeEs: "Los referidos solo pasan cuando te acuerdas de pedir, casi nunca", after: "Every closed policy triggers a referral ask sequence", afterEs: "Cada póliza cerrada dispara una secuencia de pedido de referidos" },
      { before: "Dormant leads stay dormant — and eventually buy from someone else", beforeEs: "Los leads dormidos siguen dormidos — y eventualmente compran a alguien más", after: "Re-engagement AI brings dormant leads back into your pipeline monthly", afterEs: "Reactivación con IA trae leads dormidos de vuelta a tu pipeline cada mes" },
    ],
    faq: [
      {
        q: "Will the AI voice agent comply with insurance regulations?",
        qEs: "¿El agente de voz IA cumple con las regulaciones de seguros?",
        a: "Yes. The AI is configured to disclose it's an AI when asked, follows TCPA-compliant calling windows, and never quotes premiums or binds coverage. It qualifies and books — your licensed agent closes.",
        aEs: "Sí. La IA está configurada para revelar que es una IA cuando se le pregunta, cumple con ventanas de llamada TCPA y nunca cotiza primas ni vincula coberturas. Califica y agenda — tu agente con licencia cierra.",
      },
      {
        q: "Does this integrate with my AMS (AMS360, EZLynx, AgencyZoom, NowCerts)?",
        qEs: "¿Se integra con mi AMS (AMS360, EZLynx, AgencyZoom, NowCerts)?",
        a: "If your AMS exposes an API or webhooks (most do), yes. We sync new leads, policy data, and renewal dates two-way so your AMS stays the source of truth. Custom integrations included on Growth and Custom plans.",
        aEs: "Si tu AMS expone una API o webhooks (la mayoría sí), sí. Sincronizamos nuevos leads, datos de póliza y fechas de renovación de dos vías para que tu AMS siga siendo la fuente de verdad. Integraciones custom incluidas en planes Growth y Custom.",
      },
      {
        q: "Can the system handle commercial and personal lines differently?",
        qEs: "¿El sistema maneja líneas comerciales y personales de forma distinta?",
        a: "Yes. Separate pipelines, separate qualification scripts, separate follow-up sequences, separate dashboards. We can also segment by carrier, line of business, or geography.",
        aEs: "Sí. Pipelines separados, scripts de calificación separados, secuencias de seguimiento separadas, dashboards separados. También podemos segmentar por carrier, línea de negocio o geografía.",
      },
      {
        q: "What about Spanish-speaking clients?",
        qEs: "¿Y los clientes hispanohablantes?",
        a: "The voice agent and all sequences run bilingually out of the box. Lead language is detected automatically (or set on capture) and the entire pipeline switches accordingly — at no extra cost.",
        aEs: "El agente de voz y todas las secuencias corren bilingües desde el día uno. El idioma del lead se detecta automáticamente (o se setea al capturarlo) y todo el pipeline se cambia — sin costo adicional.",
      },
      {
        q: "How long until I see results?",
        qEs: "¿Cuánto tarda en mostrar resultados?",
        a: "Lead response time drops to under 2 minutes from day one. Pipeline visibility is immediate. Close-rate lift typically shows in 30–60 days. If you don't see measurable ROI by day 90, we keep working at no extra cost.",
        aEs: "El tiempo de respuesta a leads baja a menos de 2 minutos desde el día uno. La visibilidad del pipeline es inmediata. La mejora en tasa de cierre típicamente aparece en 30–60 días. Si no ves ROI medible al día 90, seguimos trabajando sin costo adicional.",
      },
    ],
    techStack: [
      { name: "GoHighLevel", desc: "CRM + automation backbone for the entire pipeline", descEs: "CRM + columna de automatización para todo el pipeline" },
      { name: "VAPI + ElevenLabs", desc: "AI voice agent that qualifies and books — natural-sounding, bilingual", descEs: "Agente de voz IA que califica y agenda — voz natural, bilingüe" },
      { name: "Twilio (SMS / WhatsApp)", desc: "Multi-channel messaging at scale, TCPA-aware", descEs: "Mensajería multicanal a escala, compatible con TCPA" },
      { name: "AMS360 / EZLynx / AgencyZoom", desc: "Two-way sync with your existing AMS via API or webhooks", descEs: "Sincronización de dos vías con tu AMS existente vía API o webhooks" },
      { name: "Calendly / Native scheduler", desc: "Real-time appointment booking from any channel", descEs: "Agendamiento de citas en tiempo real desde cualquier canal" },
      { name: "Custom Insurance Dashboard", desc: "Live pipeline by line of business, carrier, and producer", descEs: "Pipeline en vivo por línea de negocio, carrier y productor" },
    ],
    featuredQuote: {
      name: "Jesús Martínez",
      role: "Insurance Agency Owner",
      roleEs: "Dueño de Agencia de Seguros",
      quote: "Since we set up the AI voice agent, we haven't missed a single lead. Our close rate went up 40% in the first two months.",
      quoteEs: "Desde que pusimos el agente de voz IA, no hemos perdido ni un solo lead. Nuestra tasa de cierre subió 40% en los primeros dos meses.",
      metric: "+40% close rate",
      metricEs: "+40% tasa de cierre",
      photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4c63078883d9c5ac7d06.jpeg",
      initials: "JM",
    },
  },
  {
    slug: "real-estate",
    icon: "🏠",
    name: "Real Estate Agents & Brokers",
    nameEs: "Agentes y Corredores de Bienes Raíces",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae642e1f63b2.png",
    heroTitle: "AI Automation for Real Estate Agents",
    heroTitleEs: "Automatización IA para Agentes de Bienes Raíces",
    heroSub:
      "90% of real estate leads never close — not because they weren't interested, but because no one followed up consistently. Our system responds in under 2 minutes and nurtures every lead for up to 12 months automatically.",
    heroSubEs:
      "El 90% de los prospectos de bienes raíces nunca cierran — no porque no estuvieran interesados, sino porque nadie hizo el seguimiento con consistencia. Nuestro sistema responde en menos de 2 minutos y nutre cada prospecto hasta 12 meses automáticamente.",
    problem:
      "The average lead goes cold in 5 minutes if you don't respond. You're showing properties, driving clients around, negotiating deals — you can't also be glued to your phone. Leads come in from Zillow, your website, Instagram, referrals — and 9 out of 10 go nowhere because the follow-up was slow or inconsistent.",
    problemEs:
      "Un prospecto promedio se enfría en 5 minutos si no respondes. Estás mostrando propiedades, transportando clientes, negociando contratos — no puedes también estar pegado al teléfono. Los leads llegan de Zillow, tu sitio web, Instagram, referidos — y 9 de cada 10 no van a ningún lado porque el seguimiento fue lento o inconsistente.",
    automationTitle: "Your #1 Automation: Instant Lead Response & Nurture",
    automationTitleEs: "Tu Automatización #1: Respuesta Instantánea y Nurturing",
    flowEN: [
      { id: "1", icon: "🏡", label: "Lead Captured", sublabel: "Zillow, web, ads, referral", type: "trigger" },
      { id: "2", icon: "⚡", label: "Instant SMS", sublabel: "Response in < 2 minutes", type: "action" },
      { id: "3", icon: "🤖", label: "AI Qualifies", sublabel: "Budget, timeline, intent", type: "process" },
      { id: "4", icon: "📅", label: "Showing Booked", sublabel: "Auto-synced to calendar", type: "action" },
      { id: "5", icon: "🔄", label: "Nurture Sequence", sublabel: "6–12 month follow-up", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "🏡", label: "Lead Capturado", sublabel: "Zillow, web, anuncios, referidos", type: "trigger" },
      { id: "2", icon: "⚡", label: "SMS Instantáneo", sublabel: "Respuesta en < 2 minutos", type: "action" },
      { id: "3", icon: "🤖", label: "IA Califica", sublabel: "Presupuesto, tiempo, intención", type: "process" },
      { id: "4", icon: "📅", label: "Visita Agendada", sublabel: "Sincronizado al calendario", type: "action" },
      { id: "5", icon: "🔄", label: "Secuencia Nurture", sublabel: "Seguimiento 6–12 meses", type: "output" },
    ],
    items: [
      "Instant SMS/email response to new leads — under 2 minutes",
      "AI agent qualifies buyer intent, budget & timeline automatically",
      "Showing scheduler connected to your calendar — zero friction",
      "Long-term nurture for leads not ready yet (6–12 month sequence)",
      "Automatic follow-up after every open house",
      "CRM with full buyer & seller pipelines",
    ],
    itemsEs: [
      "Respuesta inmediata por SMS/correo a nuevos prospectos — en menos de 2 minutos",
      "Agente IA califica intención de compra, presupuesto y tiempos automáticamente",
      "Programador de visitas conectado a tu calendario — sin fricción",
      "Nurturing a largo plazo para prospectos que aún no están listos (secuencia de 6–12 meses)",
      "Seguimiento automático después de cada open house",
      "CRM con pipelines completos para compradores y vendedores",
    ],
    stats: [
      { value: "< 2 min", label: "Lead response time", labelEs: "Tiempo de respuesta" },
      { value: "12 mo", label: "Automated nurture", labelEs: "Nurturing automatizado" },
      { value: "90%", label: "Leads that need follow-up", labelEs: "Leads que necesitan seguimiento" },
    ],
    metaTitle: "AI Automation for Real Estate Agents | Latin Prime Systems",
    metaDesc:
      "Respond to leads in under 2 minutes, qualify buyers automatically, and nurture prospects for 12 months without lifting a finger. Done-for-you real estate automation.",
    metaTitleEs: "Automatización IA para Bienes Raíces | Latin Prime Systems",
    metaDescEs:
      "Responde a leads en menos de 2 minutos, califica compradores automáticamente y nutre prospectos 12 meses sin mover un dedo. Automatización lista para ti.",
    keywords: [
      "AI automation for real estate agents",
      "real estate CRM automation",
      "lead follow-up automation real estate",
      "real estate AI voice agent",
      "automated lead nurture real estate",
      "GoHighLevel real estate",
    ],
    keywordsEs: [
      "automatización IA bienes raíces",
      "CRM para agentes inmobiliarios",
      "seguimiento automatizado bienes raíces",
      "agente de voz IA bienes raíces",
      "nurturing prospectos inmobiliarios",
    ],
    useCases: [
      {
        title: "Open House Follow-Up Sequence",
        titleEs: "Secuencia Post Open House",
        desc: "Every visitor who signs in at an open house enters an automatic follow-up the same evening: thank-you, additional listings matched to their criteria, and a CTA to schedule a private showing.",
        descEs: "Cada visitante que se registra en un open house entra en un seguimiento automático esa misma noche: agradecimiento, listings adicionales según sus criterios y CTA para agendar una visita privada.",
        flow: [
          { id: "o1", icon: "🚪", label: "Open House Sign-In", sublabel: "Form / QR code", type: "trigger" },
          { id: "o2", icon: "🌙", label: "Same-Night Email", sublabel: "Thank-you + matches", type: "action" },
          { id: "o3", icon: "🤖", label: "AI Qualifies Reply", sublabel: "Buyer intent + timeline", type: "process" },
          { id: "o4", icon: "📅", label: "Private Showing", sublabel: "Booked to calendar", type: "output" },
        ],
        flowEs: [
          { id: "o1", icon: "🚪", label: "Registro Open House", sublabel: "Formulario / QR", type: "trigger" },
          { id: "o2", icon: "🌙", label: "Email esa Noche", sublabel: "Gracias + matches", type: "action" },
          { id: "o3", icon: "🤖", label: "IA Califica Respuesta", sublabel: "Intención + tiempos", type: "process" },
          { id: "o4", icon: "📅", label: "Visita Privada", sublabel: "Agendada al calendario", type: "output" },
        ],
      },
      {
        title: "Long-Term Buyer Nurture (6–12 months)",
        titleEs: "Nurture de Comprador a Largo Plazo (6–12 meses)",
        desc: "Buyers who say 'maybe in 6 months' get a low-touch monthly nurture with new listings matching their criteria, market updates, and a smart re-qualification ping every quarter.",
        descEs: "Compradores que dicen 'tal vez en 6 meses' reciben un nurture mensual ligero con nuevos listings según criterios, updates de mercado y un ping de re-calificación cada trimestre.",
        flow: [
          { id: "n1", icon: "📝", label: "Buyer Tagged 'Long-Term'", sublabel: "From qualification", type: "trigger" },
          { id: "n2", icon: "📰", label: "Monthly Listing Digest", sublabel: "Matched to criteria", type: "action" },
          { id: "n3", icon: "🤖", label: "Quarterly AI Re-Qualify", sublabel: "Still in market?", type: "process" },
          { id: "n4", icon: "🔥", label: "Routed Back to Hot", sublabel: "When ready to buy", type: "output" },
        ],
        flowEs: [
          { id: "n1", icon: "📝", label: "Comprador 'Largo Plazo'", sublabel: "Desde calificación", type: "trigger" },
          { id: "n2", icon: "📰", label: "Digest Mensual", sublabel: "Listings que matchean", type: "action" },
          { id: "n3", icon: "🤖", label: "IA Re-Califica Trimestre", sublabel: "¿Sigue en mercado?", type: "process" },
          { id: "n4", icon: "🔥", label: "Vuelve a Lead Caliente", sublabel: "Cuando está listo", type: "output" },
        ],
      },
      {
        title: "Listing Inquiry Auto-Response",
        titleEs: "Respuesta Automática a Inquiries de Listings",
        desc: "Inquiries from Zillow, Realtor.com, your IDX site or social ads get a personalized reply in under 60 seconds with property details and a calendar link to schedule.",
        descEs: "Inquiries de Zillow, Realtor.com, tu sitio IDX o anuncios sociales reciben respuesta personalizada en menos de 60 segundos con detalles de la propiedad y link de calendario.",
        flow: [
          { id: "l1", icon: "💬", label: "Listing Inquiry", sublabel: "Zillow / IDX / ads", type: "trigger" },
          { id: "l2", icon: "⚡", label: "Instant SMS + Email", sublabel: "Under 60 seconds", type: "action" },
          { id: "l3", icon: "🤖", label: "AI Answers Questions", sublabel: "Property details, schools", type: "process" },
          { id: "l4", icon: "📅", label: "Showing Booked", sublabel: "Or routed to agent", type: "output" },
        ],
        flowEs: [
          { id: "l1", icon: "💬", label: "Inquiry de Listing", sublabel: "Zillow / IDX / anuncios", type: "trigger" },
          { id: "l2", icon: "⚡", label: "SMS + Email Instantáneo", sublabel: "Menos de 60 segundos", type: "action" },
          { id: "l3", icon: "🤖", label: "IA Contesta Preguntas", sublabel: "Detalles, escuelas", type: "process" },
          { id: "l4", icon: "📅", label: "Visita Agendada", sublabel: "O ruteado al agente", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "You miss leads while showing properties or driving clients", beforeEs: "Pierdes leads mientras muestras propiedades o transportas clientes", after: "Every lead gets an instant personalized reply, even when you're with a client", afterEs: "Cada lead recibe respuesta personalizada al instante, incluso cuando estás con un cliente" },
      { before: "Long-term buyers go silent and you forget to follow up", beforeEs: "Compradores de largo plazo se enmudecen y se te olvida hacer seguimiento", after: "Monthly nurture keeps every long-term buyer warm for 6–12 months", afterEs: "Nurture mensual mantiene caliente a cada comprador de largo plazo por 6–12 meses" },
      { before: "Open house visitors disappear after sign-in", beforeEs: "Visitantes de open house desaparecen después del registro", after: "Same-night follow-up with matching listings + booking link", afterEs: "Seguimiento esa misma noche con listings que matchean + link de agendamiento" },
      { before: "Your CRM is a spreadsheet — pipeline lives in your head", beforeEs: "Tu CRM es una hoja de cálculo — el pipeline vive en tu cabeza", after: "Visual buyer + seller pipelines with hot lead alerts, automatic", afterEs: "Pipelines visuales de compradores + vendedores con alertas de leads calientes" },
    ],
    faq: [
      {
        q: "Does this work with my IDX site / Zillow / Follow Up Boss / KvCORE?",
        qEs: "¿Funciona con mi IDX / Zillow / Follow Up Boss / KvCORE?",
        a: "Yes. We integrate with major real estate lead sources and CRMs via webhooks or native API. Lead capture from Zillow, Realtor.com, IDX, Facebook lead ads, and your website all flow into one pipeline.",
        aEs: "Sí. Integramos con las principales fuentes de leads y CRMs inmobiliarios vía webhooks o API nativa. Captura de leads de Zillow, Realtor.com, IDX, Facebook lead ads y tu sitio web fluyen a un solo pipeline.",
      },
      {
        q: "Can the AI handle bilingual buyers (English + Spanish)?",
        qEs: "¿La IA maneja compradores bilingües (inglés + español)?",
        a: "Yes. Inbound lead language is detected and the AI responds in that language across SMS, email, and voice. Bilingual capability is included at no extra cost — ideal for U.S. Hispanic markets and Latin American clients.",
        aEs: "Sí. El idioma del lead entrante se detecta y la IA responde en ese idioma por SMS, email y voz. Capacidad bilingüe incluida sin costo adicional — ideal para mercados hispanos en EE.UU. y clientes latinoamericanos.",
      },
      {
        q: "Will the AI voice agent handle showing requests directly?",
        qEs: "¿El agente de voz IA maneja directamente las solicitudes de visita?",
        a: "Yes. It can qualify the buyer (budget, timeline, financing pre-approval), confirm the property is still available, and book the showing into your calendar — without you touching a thing.",
        aEs: "Sí. Puede calificar al comprador (presupuesto, tiempos, pre-aprobación de financiamiento), confirmar que la propiedad sigue disponible y agendar la visita en tu calendario — sin que tú toques nada.",
      },
      {
        q: "What about MLS rules and IDX compliance?",
        qEs: "¿Qué hay de las reglas MLS y compliance IDX?",
        a: "All client-facing content respects your MLS's display rules. We don't republish protected data — we route inquiries to you with proper attribution and compliant disclosures already in place.",
        aEs: "Todo el contenido cliente respeta las reglas de display de tu MLS. No re-publicamos datos protegidos — ruteamos inquiries con la atribución correcta y los disclaimers ya configurados.",
      },
      {
        q: "Do I need a separate CRM, or does this replace it?",
        qEs: "¿Necesito un CRM separado, o esto lo reemplaza?",
        a: "It can do either. Most agents use our setup as their primary CRM (built on GoHighLevel, fully owned by you). If you're already on Follow Up Boss or KvCORE, we sync with it instead.",
        aEs: "Puede hacer cualquiera de las dos. La mayoría de agentes usan nuestro setup como CRM primario (construido sobre GoHighLevel, totalmente tuyo). Si ya estás en Follow Up Boss o KvCORE, sincronizamos con eso.",
      },
    ],
    techStack: [
      { name: "GoHighLevel / Follow Up Boss", desc: "CRM with full buyer + seller pipelines and automation", descEs: "CRM con pipelines completos de compradores + vendedores y automatización" },
      { name: "Zillow / Realtor.com / IDX", desc: "Lead capture from major portals into one inbox", descEs: "Captura de leads de portales principales a un solo inbox" },
      { name: "VAPI Voice Agent", desc: "Qualifies buyer intent, books showings, handles FAQs", descEs: "Califica intención del comprador, agenda visitas, maneja FAQs" },
      { name: "WhatsApp Business API", desc: "The dominant channel for LATAM real estate communication", descEs: "El canal dominante para comunicación inmobiliaria en LATAM" },
      { name: "Calendly / Acuity", desc: "Real-time showing scheduler synced to your calendar", descEs: "Agendador de visitas en tiempo real sincronizado con tu calendario" },
      { name: "Custom Real Estate Dashboard", desc: "Live pipeline, lead source attribution, conversion by listing", descEs: "Pipeline en vivo, atribución por fuente de lead, conversión por listing" },
    ],
  },
  {
    slug: "dental",
    icon: "🦷",
    name: "Dental & Healthcare",
    nameEs: "Dental y Salud",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2f3d78f630c1a9f7e.png",
    heroTitle: "AI Automation for Dental & Healthcare Practices",
    heroTitleEs: "Automatización IA para Consultorios Dentales y de Salud",
    heroSub:
      "Every missed call is a patient who went to the next clinic on the list. Our AI answers 24/7, books appointments, reduces no-shows by 60%, and automatically recalls patients who haven't been in 6 months.",
    heroSubEs:
      "Cada llamada sin respuesta es un paciente que fue a la siguiente clínica de la lista. Nuestra IA responde las 24 horas, agenda citas, reduce inasistencias un 60% y reactiva automáticamente a pacientes que no han venido en 6 meses.",
    problem:
      "Your front desk can only handle so many calls. After hours, on weekends, during lunch — every unanswered call is lost revenue. No-shows cost practices thousands per month. Patients who haven't been in don't come back unless someone reaches out first.",
    problemEs:
      "Tu recepcionista solo puede atender cierta cantidad de llamadas. Fuera de horario, fines de semana, durante el almuerzo — cada llamada sin respuesta es ingreso perdido. Las inasistencias cuestan miles al mes. Los pacientes que no han venido no regresan a menos que alguien los contacte primero.",
    automationTitle: "Your #1 Automation: 24/7 Appointment Engine",
    automationTitleEs: "Tu Automatización #1: Motor de Citas 24/7",
    flowEN: [
      { id: "1", icon: "📞", label: "Patient Contacts", sublabel: "Call, web form, or text", type: "trigger" },
      { id: "2", icon: "🤖", label: "AI Books 24/7", sublabel: "No receptionist needed", type: "process" },
      { id: "3", icon: "🔔", label: "Reminders Sent", sublabel: "SMS + email sequence", type: "action" },
      { id: "4", icon: "🦷", label: "Visit Complete", sublabel: "No-shows cut by 60%", type: "action" },
      { id: "5", icon: "⭐", label: "Review + Recall", sublabel: "Google review & 6mo recall", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "📞", label: "Paciente Contacta", sublabel: "Llamada, web o mensaje", type: "trigger" },
      { id: "2", icon: "🤖", label: "IA Agenda 24/7", sublabel: "Sin recepcionista", type: "process" },
      { id: "3", icon: "🔔", label: "Recordatorios", sublabel: "Secuencia SMS + correo", type: "action" },
      { id: "4", icon: "🦷", label: "Visita Completa", sublabel: "Inasistencias -60%", type: "action" },
      { id: "5", icon: "⭐", label: "Reseña + Recall", sublabel: "Google + recall 6 meses", type: "output" },
    ],
    items: [
      "24/7 appointment booking — no receptionist needed after hours",
      "Automated reminders that cut no-shows by up to 60%",
      "Recall campaigns for patients who haven't come in 6+ months",
      "Google review requests sent after every appointment",
      "New patient intake form — automated and connected to your system",
      "Insurance verification follow-up automation",
    ],
    itemsEs: [
      "Agendamiento de citas 24/7 — sin recepcionista fuera de horario",
      "Recordatorios automatizados que reducen inasistencias hasta un 60%",
      "Campañas de reactivación para pacientes que no han venido en 6+ meses",
      "Solicitudes de reseñas en Google enviadas después de cada cita",
      "Formulario de ingreso para nuevos pacientes — automatizado y conectado a tu sistema",
      "Automatización de seguimiento para verificación de seguros",
    ],
    stats: [
      { value: "60%", label: "Fewer no-shows", labelEs: "Menos inasistencias" },
      { value: "24/7", label: "Appointment booking", labelEs: "Agendamiento de citas" },
      { value: "6 mo", label: "Automatic patient recall", labelEs: "Recall automático de pacientes" },
    ],
    metaTitle: "AI Automation for Dental Practices | Latin Prime Systems",
    metaDesc:
      "AI appointment booking, automated reminders that cut no-shows 60%, and patient recall campaigns for dental and healthcare practices. Done-for-you setup.",
    metaTitleEs: "Automatización IA para Consultorios Dentales | Latin Prime Systems",
    metaDescEs:
      "Agendamiento IA, recordatorios automáticos que reducen inasistencias 60%, y campañas de recall para consultorios dentales y de salud. Listo para ti.",
    keywords: [
      "AI automation for dental practices",
      "dental appointment automation",
      "reduce no-shows dental",
      "patient recall automation dental",
      "dental practice CRM",
      "healthcare AI automation",
    ],
    keywordsEs: [
      "automatización IA consultorios dentales",
      "agendamiento automático dental",
      "reducir inasistencias dental",
      "recall de pacientes dental",
      "CRM consultorio médico",
    ],
    useCases: [
      {
        title: "No-Show Reduction Sequence",
        titleEs: "Secuencia para Reducir No-Shows",
        desc: "Every appointment fires a 7-day, 24-hour, and 2-hour reminder across SMS, email and WhatsApp — with one-tap reschedule. Reduces no-shows by up to 60%.",
        descEs: "Cada cita dispara recordatorios a 7 días, 24 horas y 2 horas por SMS, email y WhatsApp — con re-agendamiento de un clic. Reduce no-shows hasta 60%.",
        flow: [
          { id: "ns1", icon: "📅", label: "Appointment Booked", sublabel: "Trigger fires", type: "trigger" },
          { id: "ns2", icon: "📲", label: "Multi-Touch Reminders", sublabel: "7d / 24h / 2h", type: "action" },
          { id: "ns3", icon: "🔄", label: "One-Tap Reschedule", sublabel: "If can't make it", type: "process" },
          { id: "ns4", icon: "✅", label: "Patient Shows Up", sublabel: "Or slot recovered", type: "output" },
        ],
        flowEs: [
          { id: "ns1", icon: "📅", label: "Cita Agendada", sublabel: "Trigger activa", type: "trigger" },
          { id: "ns2", icon: "📲", label: "Recordatorios Múltiples", sublabel: "7d / 24h / 2h", type: "action" },
          { id: "ns3", icon: "🔄", label: "Re-Agendar 1 Clic", sublabel: "Si no puede", type: "process" },
          { id: "ns4", icon: "✅", label: "Paciente Llega", sublabel: "O slot recuperado", type: "output" },
        ],
      },
      {
        title: "Recall Campaign for Inactive Patients",
        titleEs: "Campaña de Recall a Pacientes Inactivos",
        desc: "Patients who haven't been in for 6+ months get a personalized recall sequence. Tracks who's overdue for cleanings, exams, or follow-up procedures and routes hot replies to your front desk.",
        descEs: "Pacientes que no vienen hace 6+ meses reciben una secuencia personalizada de recall. Rastrea quién está atrasado en limpieza, exámenes o procedimientos de seguimiento y rutea respuestas a recepción.",
        flow: [
          { id: "rc1", icon: "⏰", label: "6+ Months Inactive", sublabel: "Auto-detected", type: "trigger" },
          { id: "rc2", icon: "📤", label: "Personalized Recall", sublabel: "Based on last visit", type: "action" },
          { id: "rc3", icon: "🤖", label: "AI Books Slot", sublabel: "When patient replies", type: "process" },
          { id: "rc4", icon: "🦷", label: "Patient Re-Activated", sublabel: "Production recovered", type: "output" },
        ],
        flowEs: [
          { id: "rc1", icon: "⏰", label: "6+ Meses Inactivo", sublabel: "Auto-detectado", type: "trigger" },
          { id: "rc2", icon: "📤", label: "Recall Personalizado", sublabel: "Según última visita", type: "action" },
          { id: "rc3", icon: "🤖", label: "IA Agenda Slot", sublabel: "Cuando responde", type: "process" },
          { id: "rc4", icon: "🦷", label: "Paciente Reactivado", sublabel: "Producción recuperada", type: "output" },
        ],
      },
      {
        title: "Review Request After Every Appointment",
        titleEs: "Solicitud de Reseña Después de Cada Cita",
        desc: "1 hour after appointment completion, patient gets an automated review request via SMS routing them to Google. If sentiment is negative, ticket goes to the practice manager first — protecting your online reputation.",
        descEs: "1 hora después de completar la cita, el paciente recibe solicitud automática de reseña por SMS hacia Google. Si el sentimiento es negativo, va al manager primero — protegiendo tu reputación online.",
        flow: [
          { id: "rv1", icon: "✅", label: "Visit Completed", sublabel: "Trigger fires", type: "trigger" },
          { id: "rv2", icon: "💬", label: "SMS Review Ask", sublabel: "1 hour after", type: "action" },
          { id: "rv3", icon: "🧠", label: "AI Sentiment Check", sublabel: "Positive vs negative", type: "process" },
          { id: "rv4", icon: "⭐", label: "Google Review", sublabel: "Or routed to manager", type: "output" },
        ],
        flowEs: [
          { id: "rv1", icon: "✅", label: "Visita Completada", sublabel: "Trigger activa", type: "trigger" },
          { id: "rv2", icon: "💬", label: "SMS Pidiendo Reseña", sublabel: "1 hora después", type: "action" },
          { id: "rv3", icon: "🧠", label: "IA Revisa Sentimiento", sublabel: "Positivo vs negativo", type: "process" },
          { id: "rv4", icon: "⭐", label: "Reseña en Google", sublabel: "O al manager", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "10–20% no-show rate is killing daily production", beforeEs: "Tasa de no-show de 10–20% mata la producción diaria", after: "No-shows down to 4–6% with multi-touch reminder sequences", afterEs: "No-shows bajan a 4–6% con recordatorios multi-touch" },
      { before: "Patients vanish after one cleaning, never come back", beforeEs: "Pacientes desaparecen después de una limpieza, nunca vuelven", after: "Recall campaigns reactivate dormant patients automatically", afterEs: "Campañas de recall reactivan pacientes dormidos automáticamente" },
      { before: "After-hours calls go to voicemail, lead is gone by morning", beforeEs: "Llamadas fuera de horario van a voicemail, el lead se fue para la mañana", after: "AI receptionist answers 24/7, qualifies, books, follows up", afterEs: "Recepcionista IA contesta 24/7, califica, agenda, da seguimiento" },
      { before: "Front desk forgets to ask for Google reviews", beforeEs: "Recepción se olvida de pedir reseñas en Google", after: "Every completed visit triggers an automatic review request", afterEs: "Cada visita completada dispara solicitud automática de reseña" },
    ],
    faq: [
      {
        q: "Is this HIPAA-compliant?",
        qEs: "¿Esto cumple con HIPAA?",
        a: "Yes. Patient communications use HIPAA-compliant messaging providers, data is encrypted in transit and at rest, and we sign a Business Associate Agreement (BAA) with every healthcare practice we work with.",
        aEs: "Sí. Las comunicaciones con pacientes usan proveedores de mensajería compatibles con HIPAA, los datos se encriptan en tránsito y en reposo, y firmamos un Business Associate Agreement (BAA) con cada práctica de salud con la que trabajamos.",
      },
      {
        q: "Does this integrate with Dentrix, Open Dental, Eaglesoft, Adit, or Weave?",
        qEs: "¿Se integra con Dentrix, Open Dental, Eaglesoft, Adit o Weave?",
        a: "Yes — via direct API where available, or via supported sync layers. We pull appointment data, patient records, and treatment history (with proper authorization) so the automation knows exactly when to trigger.",
        aEs: "Sí — vía API directa cuando está disponible, o por capas de sincronización soportadas. Jalamos datos de citas, registros de pacientes y historial de tratamiento (con autorización adecuada) para que la automatización sepa exactamente cuándo dispararse.",
      },
      {
        q: "Can the AI handle insurance verification?",
        qEs: "¿La IA puede manejar verificación de seguros?",
        a: "Partial. The AI can pre-collect insurance details from the patient and follow up automatically if information is missing. Actual carrier verification still happens via your office staff or your existing verification platform.",
        aEs: "Parcial. La IA puede pre-recolectar detalles del seguro del paciente y dar seguimiento automático si falta información. La verificación real con el carrier sigue pasando por tu staff o tu plataforma de verificación actual.",
      },
      {
        q: "What about Spanish-speaking patients?",
        qEs: "¿Y los pacientes hispanohablantes?",
        a: "Every reminder, recall, and AI reception flow is fully bilingual. Patient language preference is stored on capture and the system speaks to each patient in their preferred language — no extra cost.",
        aEs: "Cada recordatorio, recall y flujo de recepción IA es completamente bilingüe. La preferencia de idioma del paciente se guarda al capturarlo y el sistema le habla en su idioma — sin costo adicional.",
      },
      {
        q: "What if a patient replies to a reminder needing to reschedule?",
        qEs: "¿Y si un paciente responde a un recordatorio pidiendo re-agendar?",
        a: "The AI handles it. It offers available slots in real time from your calendar, confirms the new appointment, sends a confirmation, and updates your practice management software automatically.",
        aEs: "La IA lo maneja. Ofrece slots disponibles en tiempo real desde tu calendario, confirma la nueva cita, envía confirmación y actualiza tu software de gestión automáticamente.",
      },
    ],
    techStack: [
      { name: "Dentrix / Open Dental / Eaglesoft", desc: "Two-way sync with your existing PMS", descEs: "Sincronización de dos vías con tu PMS existente" },
      { name: "GoHighLevel (HIPAA-tier)", desc: "Patient CRM, recall campaigns, automation engine", descEs: "CRM de pacientes, campañas de recall, motor de automatización" },
      { name: "Twilio HIPAA / Encrypted SMS", desc: "Compliant patient messaging at scale", descEs: "Mensajería compatible con regulaciones a escala" },
      { name: "VAPI Voice Agent (HIPAA-aware)", desc: "After-hours patient triage and booking", descEs: "Triaje y agendamiento de pacientes fuera de horario" },
      { name: "Google Reviews API", desc: "Routes positive sentiment to Google, negative to manager", descEs: "Rutea sentimiento positivo a Google, negativo al manager" },
      { name: "Custom Practice Dashboard", desc: "Live: production, no-show rate, recall pipeline, reviews", descEs: "En vivo: producción, tasa de no-show, pipeline de recall, reseñas" },
    ],
  },
  {
    slug: "med-spa",
    icon: "💆",
    name: "Med Spas & Aesthetics",
    nameEs: "Med Spas y Estética",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eaee28e1f63b3.png",
    heroTitle: "AI Automation for Med Spas & Aesthetics",
    heroTitleEs: "Automatización IA para Med Spas y Centros de Estética",
    heroSub:
      "The money in aesthetics is in the rebooking — not the first visit. Our automation ensures every client gets a rebooking reminder, upsell offer, birthday promotion, and review request without you or your staff doing anything.",
    heroSubEs:
      "El dinero en estética está en la reagendación, no en la primera visita. Nuestra automatización garantiza que cada cliente reciba un recordatorio de reagendación, oferta de venta adicional, promoción de cumpleaños y solicitud de reseña sin que tú ni tu personal hagan nada.",
    problem:
      "Most med spa clients visit once and never come back — not because they didn't love it, but because no one followed up. Your staff is busy with treatments. No one has time to send rebooking texts, birthday deals, or upsell messages at the right moment.",
    problemEs:
      "La mayoría de los clientes de med spa visitan una vez y nunca regresan — no porque no les haya gustado, sino porque nadie hizo el seguimiento. Tu personal está ocupado con los tratamientos. Nadie tiene tiempo de enviar mensajes de reagendación, ofertas de cumpleaños o mensajes de venta adicional en el momento correcto.",
    automationTitle: "Your #1 Automation: Rebooking & Retention Machine",
    automationTitleEs: "Tu Automatización #1: Máquina de Reagendación y Retención",
    flowEN: [
      { id: "1", icon: "💆", label: "Treatment Done", sublabel: "Visit logged in CRM", type: "trigger" },
      { id: "2", icon: "📲", label: "Rebooking SMS", sublabel: "Sent 3–4 weeks later", type: "action" },
      { id: "3", icon: "💎", label: "Upsell Offer", sublabel: "Complementary services", type: "action" },
      { id: "4", icon: "🎂", label: "Birthday Promo", sublabel: "Auto on their birthday", type: "action" },
      { id: "5", icon: "⭐", label: "Review Collected", sublabel: "Google + Yelp on autopilot", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "💆", label: "Tratamiento Listo", sublabel: "Visita registrada en CRM", type: "trigger" },
      { id: "2", icon: "📲", label: "SMS Reagendación", sublabel: "Enviado 3–4 semanas después", type: "action" },
      { id: "3", icon: "💎", label: "Oferta Adicional", sublabel: "Servicios complementarios", type: "action" },
      { id: "4", icon: "🎂", label: "Promo Cumpleaños", sublabel: "Auto en su cumpleaños", type: "action" },
      { id: "5", icon: "⭐", label: "Reseña Recibida", sublabel: "Google + Yelp autopiloto", type: "output" },
    ],
    items: [
      "Automated rebooking sequence after every treatment",
      "Upsell sequences for complementary services",
      "Birthday & seasonal promotions sent automatically",
      "VIP client segmentation and personalized outreach",
      "Abandoned booking recovery — follow up within minutes",
      "Review funnel on Google & Yelp on autopilot",
    ],
    itemsEs: [
      "Secuencia de reagendación automatizada después de cada tratamiento",
      "Secuencias de venta cruzada para servicios complementarios",
      "Promociones de cumpleaños y temporada enviadas automáticamente",
      "Segmentación de clientes VIP y comunicación personalizada",
      "Recuperación de reservaciones abandonadas — seguimiento en minutos",
      "Embudo de reseñas en Google y Yelp en piloto automático",
    ],
    stats: [
      { value: "3–4 wk", label: "Auto rebooking trigger", labelEs: "Trigger de reagendación" },
      { value: "VIP", label: "Auto client segmentation", labelEs: "Segmentación automática" },
      { value: "100%", label: "Clients get follow-up", labelEs: "Clientes con seguimiento" },
    ],
    metaTitle: "AI Automation for Med Spas & Aesthetics | Latin Prime Systems",
    metaDesc:
      "Automated rebooking, upsell sequences, birthday promotions, and review funnels for med spas and aesthetics businesses. Never lose a client to silence.",
    metaTitleEs: "Automatización IA para Med Spas y Estética | Latin Prime Systems",
    metaDescEs:
      "Reagendación automatizada, ventas adicionales, promociones de cumpleaños y embudos de reseñas para med spas y centros estéticos. Nunca pierdas un cliente por silencio.",
    keywords: [
      "AI automation for med spas",
      "med spa rebooking automation",
      "aesthetics CRM automation",
      "med spa client retention",
      "automated upsell med spa",
      "med spa review automation",
    ],
    keywordsEs: [
      "automatización IA med spa",
      "reagendación automática estética",
      "CRM med spa automatización",
      "retención clientes med spa",
      "ventas adicionales automatizadas",
    ],
    useCases: [
      {
        title: "Rebooking After Treatment",
        titleEs: "Re-agendamiento Post Tratamiento",
        desc: "Each treatment type has its own optimal rebooking window (Botox 12 weeks, fillers 6 months, facials 4 weeks). The system tracks who's due and triggers personalized rebooking offers — automatically.",
        descEs: "Cada tratamiento tiene su ventana óptima de re-agendamiento (Botox 12 semanas, rellenos 6 meses, faciales 4 semanas). El sistema rastrea quién toca y dispara ofertas personalizadas — automáticamente.",
        flow: [
          { id: "rb1", icon: "💉", label: "Treatment Done", sublabel: "Trigger fires", type: "trigger" },
          { id: "rb2", icon: "⏳", label: "Wait Optimal Window", sublabel: "By treatment type", type: "process" },
          { id: "rb3", icon: "💌", label: "Personalized Offer", sublabel: "SMS + email", type: "action" },
          { id: "rb4", icon: "📅", label: "Rebooked", sublabel: "Calendar slot held", type: "output" },
        ],
        flowEs: [
          { id: "rb1", icon: "💉", label: "Tratamiento Hecho", sublabel: "Trigger activa", type: "trigger" },
          { id: "rb2", icon: "⏳", label: "Espera Ventana Óptima", sublabel: "Por tipo de tratamiento", type: "process" },
          { id: "rb3", icon: "💌", label: "Oferta Personalizada", sublabel: "SMS + email", type: "action" },
          { id: "rb4", icon: "📅", label: "Re-agendado", sublabel: "Slot reservado", type: "output" },
        ],
      },
      {
        title: "Pre & Post Treatment Care Sequence",
        titleEs: "Secuencia Pre y Post Cuidado",
        desc: "Before each treatment: prep instructions, what to avoid, what to bring. After each treatment: aftercare guide, photo upload reminder, satisfaction check. Reduces support load and improves outcomes.",
        descEs: "Antes de cada tratamiento: instrucciones de preparación, qué evitar, qué traer. Después: guía de cuidados, recordatorio de subir foto, check de satisfacción. Reduce carga de soporte y mejora resultados.",
        flow: [
          { id: "pp1", icon: "📋", label: "Pre-Treatment", sublabel: "48h before", type: "trigger" },
          { id: "pp2", icon: "📝", label: "Prep Instructions", sublabel: "SMS + email", type: "action" },
          { id: "pp3", icon: "🩹", label: "Post-Care Guide", sublabel: "Same day after", type: "action" },
          { id: "pp4", icon: "❤️", label: "Satisfaction Check", sublabel: "Day 7 follow-up", type: "output" },
        ],
        flowEs: [
          { id: "pp1", icon: "📋", label: "Pre-Tratamiento", sublabel: "48h antes", type: "trigger" },
          { id: "pp2", icon: "📝", label: "Instrucciones Prep", sublabel: "SMS + email", type: "action" },
          { id: "pp3", icon: "🩹", label: "Guía Post-Cuidado", sublabel: "Mismo día después", type: "action" },
          { id: "pp4", icon: "❤️", label: "Check Satisfacción", sublabel: "Seguimiento día 7", type: "output" },
        ],
      },
      {
        title: "Membership / Package Renewal",
        titleEs: "Renovación de Membresías / Paquetes",
        desc: "Members nearing the end of their package or renewal date get personalized offers based on what they've already booked. Auto-charge on file when they accept; no friction.",
        descEs: "Miembros cerca del fin de paquete o renovación reciben ofertas personalizadas según lo que ya han agendado. Auto-cargo a tarjeta cuando aceptan; sin fricción.",
        flow: [
          { id: "m1", icon: "📦", label: "Package Ending", sublabel: "30 days out", type: "trigger" },
          { id: "m2", icon: "🎯", label: "Personalized Offer", sublabel: "Based on history", type: "action" },
          { id: "m3", icon: "👆", label: "One-Tap Renew", sublabel: "Card on file", type: "process" },
          { id: "m4", icon: "💳", label: "Renewed", sublabel: "Membership extended", type: "output" },
        ],
        flowEs: [
          { id: "m1", icon: "📦", label: "Paquete Termina", sublabel: "A 30 días", type: "trigger" },
          { id: "m2", icon: "🎯", label: "Oferta Personalizada", sublabel: "Según historial", type: "action" },
          { id: "m3", icon: "👆", label: "Renovar 1 Clic", sublabel: "Tarjeta guardada", type: "process" },
          { id: "m4", icon: "💳", label: "Renovado", sublabel: "Membresía extendida", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "First-time clients book once and never come back", beforeEs: "Clientes nuevos reservan una vez y nunca vuelven", after: "Treatment-specific rebooking sequences keep clients on cycle", afterEs: "Secuencias por tipo de tratamiento mantienen al cliente en ciclo" },
      { before: "Memberships and packages expire silently with no renewal", beforeEs: "Membresías y paquetes vencen en silencio sin renovación", after: "Auto-renewal offers fire 30 days before expiration", afterEs: "Ofertas de auto-renovación disparan 30 días antes del vencimiento" },
      { before: "Front desk spends hours sending pre-care and post-care info", beforeEs: "Recepción gasta horas mandando info pre y post cuidado", after: "Pre + post care sequences run on autopilot per treatment", afterEs: "Secuencias de pre + post cuidado corren en piloto automático por tratamiento" },
      { before: "Reviews trickle in only when staff remembers to ask", beforeEs: "Reseñas llegan solo cuando staff se acuerda de pedir", after: "Every visit triggers a review request; sentiment routed", afterEs: "Cada visita dispara solicitud de reseña; sentimiento ruteado" },
    ],
    faq: [
      {
        q: "Does this integrate with Boulevard, Aesthetics Pro, Mindbody, or Square Appointments?",
        qEs: "¿Se integra con Boulevard, Aesthetics Pro, Mindbody o Square Appointments?",
        a: "Yes. We sync appointments, client records, package usage, and treatment history via API. The automation layer reads from your booking system so reminders fire on the right day for the right person.",
        aEs: "Sí. Sincronizamos citas, registros de clientes, uso de paquetes e historial de tratamientos vía API. La capa de automatización lee tu sistema de booking para que recordatorios disparen el día correcto a la persona correcta.",
      },
      {
        q: "Can it manage before/after photo workflows?",
        qEs: "¿Puede manejar el flujo de fotos antes/después?",
        a: "Yes. Automated post-treatment messages prompt clients to upload progress photos via a private secure link. Photos route to a private gallery only your team can see — never published without consent.",
        aEs: "Sí. Mensajes automatizados post-tratamiento invitan al cliente a subir fotos de progreso vía link privado. Las fotos van a una galería privada que solo tu equipo ve — nunca se publican sin consentimiento.",
      },
      {
        q: "How does it handle treatment-specific marketing rules (Botox, fillers, weight loss)?",
        qEs: "¿Cómo maneja las reglas de marketing por tipo de tratamiento (Botox, rellenos, pérdida de peso)?",
        a: "Our messaging templates are reviewed for compliance with FDA and platform-specific marketing rules (especially for prescription-only treatments). You can customize and approve every template before launch.",
        aEs: "Nuestras plantillas de mensajería se revisan para cumplir reglas FDA y de plataformas (especialmente para tratamientos solo con receta). Puedes personalizar y aprobar cada plantilla antes del lanzamiento.",
      },
      {
        q: "What about lead capture from Instagram and TikTok?",
        qEs: "¿Y la captura de leads desde Instagram y TikTok?",
        a: "DMs, story replies, and ad lead forms from Instagram and TikTok flow into one inbox. AI replies in seconds, qualifies the inquiry (treatment of interest, budget, timeline) and books a consult.",
        aEs: "DMs, respuestas a stories y formularios de lead ads de Instagram y TikTok fluyen a un inbox único. La IA responde en segundos, califica (tratamiento de interés, presupuesto, tiempos) y agenda una consulta.",
      },
      {
        q: "Can clients pay deposits or full treatments through the system?",
        qEs: "¿Los clientes pueden pagar depósitos o tratamientos completos por el sistema?",
        a: "Yes. We integrate with Stripe and Square for deposits, package purchases, and recurring memberships — directly from the booking flow or follow-up message.",
        aEs: "Sí. Integramos con Stripe y Square para depósitos, compras de paquetes y membresías recurrentes — directamente desde el flujo de booking o mensaje de seguimiento.",
      },
    ],
    techStack: [
      { name: "Boulevard / Aesthetics Pro / Mindbody", desc: "Two-way sync with your booking system", descEs: "Sincronización con tu sistema de booking" },
      { name: "GoHighLevel + WhatsApp", desc: "CRM and bilingual client comms", descEs: "CRM y comunicación bilingüe con clientes" },
      { name: "Stripe / Square", desc: "Deposits, package purchases, recurring memberships", descEs: "Depósitos, compras de paquetes, membresías recurrentes" },
      { name: "Instagram + TikTok DM API", desc: "Capture leads from social and reply in seconds", descEs: "Captura leads desde redes sociales y responde en segundos" },
      { name: "Private Photo Gallery", desc: "Secure before/after upload, consent-based publishing", descEs: "Subida segura antes/después, publicación con consentimiento" },
      { name: "Custom Med Spa Dashboard", desc: "Live: rebooking rate, package utilization, member retention", descEs: "En vivo: tasa de re-agendamiento, uso de paquetes, retención de miembros" },
    ],
  },
  {
    slug: "contractors",
    icon: "🔧",
    name: "Contractors & Home Services",
    nameEs: "Contratistas y Servicios del Hogar",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2c2389c1a78536c6c.png",
    heroTitle: "AI Automation for Contractors & Home Services",
    heroTitleEs: "Automatización IA para Contratistas y Servicios del Hogar",
    heroSub:
      "You're on a job site. You miss calls. Those missed calls are your competitors' new clients. Our AI texts back every missed call within seconds, books estimates, and follows up on every quote automatically.",
    heroSubEs:
      "Estás en obra. Pierdes llamadas. Esas llamadas perdidas son los nuevos clientes de tu competencia. Nuestra IA responde por mensaje a cada llamada perdida en segundos, agenda presupuestos y hace seguimiento a cada cotización automáticamente.",
    problem:
      "The home services business runs on speed. The first contractor to respond wins the job — period. Every missed call, every unanswered form, every quote that never gets followed up is money walking out the door. And you can't respond to everything when you're on a ladder.",
    problemEs:
      "El negocio de servicios del hogar funciona por velocidad. El primer contratista que responde se lleva el trabajo, sin excepciones. Cada llamada perdida, cada formulario sin respuesta, cada cotización sin seguimiento es dinero que se va por la puerta. Y no puedes responder a todo cuando estás en andamios.",
    automationTitle: "Your #1 Automation: Missed Call → Booked Job",
    automationTitleEs: "Tu Automatización #1: Llamada Perdida → Trabajo Agendado",
    flowEN: [
      { id: "1", icon: "📵", label: "Missed Call", sublabel: "You're on a job site", type: "trigger" },
      { id: "2", icon: "💬", label: "AI Text-back", sublabel: "SMS within seconds", type: "action" },
      { id: "3", icon: "🤖", label: "Lead Qualified", sublabel: "Budget + job type captured", type: "process" },
      { id: "4", icon: "📄", label: "Quote Sent", sublabel: "Follow-up ×3 automated", type: "action" },
      { id: "5", icon: "🔨", label: "Job Won + Review", sublabel: "Referral automation starts", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "📵", label: "Llamada Perdida", sublabel: "Estás en la obra", type: "trigger" },
      { id: "2", icon: "💬", label: "SMS Automático", sublabel: "Mensaje en segundos", type: "action" },
      { id: "3", icon: "🤖", label: "Lead Calificado", sublabel: "Presupuesto + tipo de trabajo", type: "process" },
      { id: "4", icon: "📄", label: "Cotización Enviada", sublabel: "Seguimiento ×3 automático", type: "action" },
      { id: "5", icon: "🔨", label: "Trabajo + Reseña", sublabel: "Automatización de referidos", type: "output" },
    ],
    items: [
      "Missed call text-back — every missed call gets an immediate SMS",
      "AI voice agent answers inbound calls and books estimates",
      "Automated quote follow-up — stops leads from going cold",
      "Job completion → review request sequence",
      "Seasonal service reminders to past clients",
      "Referral incentive automation",
    ],
    itemsEs: [
      "Respuesta por SMS a llamadas perdidas — cada llamada recibe un mensaje inmediato",
      "Agente de voz IA contesta llamadas entrantes y agenda presupuestos",
      "Seguimiento automatizado de cotizaciones — evita que los prospectos se enfríen",
      "Secuencia de solicitud de reseña al finalizar cada trabajo",
      "Recordatorios de servicios estacionales a clientes anteriores",
      "Automatización de programa de referidos",
    ],
    stats: [
      { value: "< 30s", label: "Missed call response", labelEs: "Respuesta a llamada perdida" },
      { value: "3×", label: "Auto quote follow-ups", labelEs: "Seguimientos de cotización" },
      { value: "0", label: "Leads fall through the cracks", labelEs: "Leads que se pierden" },
    ],
    metaTitle: "AI Automation for Contractors & Home Services | Latin Prime Systems",
    metaDesc:
      "Never lose a job to a missed call again. AI text-back, automated quote follow-up, and review campaigns for contractors and home services businesses.",
    metaTitleEs: "Automatización IA para Contratistas y Servicios del Hogar | Latin Prime Systems",
    metaDescEs:
      "Nunca pierdas un trabajo por una llamada perdida. SMS automático, seguimiento de cotizaciones y campañas de reseñas para contratistas y servicios del hogar.",
    keywords: [
      "AI automation for contractors",
      "home services lead follow-up automation",
      "missed call text-back contractors",
      "contractor CRM automation",
      "quote follow-up automation",
      "home services AI",
    ],
    keywordsEs: [
      "automatización IA contratistas",
      "seguimiento leads servicios del hogar",
      "respuesta SMS llamada perdida",
      "CRM contratistas automatización",
      "seguimiento cotizaciones automático",
    ],
    useCases: [
      {
        title: "Quote Follow-Up Sequence",
        titleEs: "Seguimiento Automático de Cotizaciones",
        desc: "Every quote sent triggers an automatic follow-up at day 2, day 5, and day 10. Most contractors quote and forget — winning the job often comes down to who follows up while the lead is still warm.",
        descEs: "Cada cotización enviada dispara seguimiento automático al día 2, 5 y 10. La mayoría cotiza y olvida — ganar el trabajo muchas veces depende de quién hace seguimiento mientras el lead sigue caliente.",
        flow: [
          { id: "qf1", icon: "📄", label: "Quote Sent", sublabel: "Trigger fires", type: "trigger" },
          { id: "qf2", icon: "📲", label: "Follow-Up D2", sublabel: "SMS check-in", type: "action" },
          { id: "qf3", icon: "📲", label: "Follow-Up D5 + D10", sublabel: "Email + WhatsApp", type: "action" },
          { id: "qf4", icon: "🔨", label: "Job Closed", sublabel: "Or moved to nurture", type: "output" },
        ],
        flowEs: [
          { id: "qf1", icon: "📄", label: "Cotización Enviada", sublabel: "Trigger activa", type: "trigger" },
          { id: "qf2", icon: "📲", label: "Seguimiento D2", sublabel: "SMS check-in", type: "action" },
          { id: "qf3", icon: "📲", label: "Seguimiento D5 + D10", sublabel: "Email + WhatsApp", type: "action" },
          { id: "qf4", icon: "🔨", label: "Trabajo Cerrado", sublabel: "O pasa a nurture", type: "output" },
        ],
      },
      {
        title: "Service Reminder for Recurring Clients",
        titleEs: "Recordatorio de Servicio para Clientes Recurrentes",
        desc: "HVAC tune-ups, gutter cleanings, pest control treatments — every recurring service triggers a reminder 30 days before due, with one-tap booking. Recurring revenue without a single phone call.",
        descEs: "Mantenimientos HVAC, limpieza de canaletas, control de plagas — cada servicio recurrente dispara recordatorio 30 días antes, con agendamiento de un clic. Ingresos recurrentes sin una sola llamada.",
        flow: [
          { id: "sr1", icon: "🗓️", label: "Service Due", sublabel: "30 days out", type: "trigger" },
          { id: "sr2", icon: "📲", label: "Reminder Sent", sublabel: "SMS + email + WhatsApp", type: "action" },
          { id: "sr3", icon: "👆", label: "One-Tap Booking", sublabel: "Calendar slot picked", type: "process" },
          { id: "sr4", icon: "💵", label: "Recurring Job Won", sublabel: "Auto-invoiced", type: "output" },
        ],
        flowEs: [
          { id: "sr1", icon: "🗓️", label: "Servicio Próximo", sublabel: "A 30 días", type: "trigger" },
          { id: "sr2", icon: "📲", label: "Recordatorio Enviado", sublabel: "SMS + email + WhatsApp", type: "action" },
          { id: "sr3", icon: "👆", label: "Agendar 1 Clic", sublabel: "Slot del calendario", type: "process" },
          { id: "sr4", icon: "💵", label: "Trabajo Recurrente", sublabel: "Auto-facturado", type: "output" },
        ],
      },
      {
        title: "Review + Referral Loop After Every Job",
        titleEs: "Loop de Reseña + Referidos Después de Cada Trabajo",
        desc: "Job completion fires a review request 24h later (Google + Facebook). 30 days after, a referral ask with a tracked link. Reviews compound. Referrals multiply.",
        descEs: "Completar el trabajo dispara solicitud de reseña 24h después (Google + Facebook). A los 30 días, pedido de referidos con link rastreado. Las reseñas se acumulan. Los referidos se multiplican.",
        flow: [
          { id: "rl1", icon: "🏁", label: "Job Done", sublabel: "Trigger fires", type: "trigger" },
          { id: "rl2", icon: "⭐", label: "Review Ask", sublabel: "24h later, Google + FB", type: "action" },
          { id: "rl3", icon: "🤝", label: "Referral Ask", sublabel: "Day 30, tracked link", type: "action" },
          { id: "rl4", icon: "📈", label: "Reputation + New Leads", sublabel: "Compounding", type: "output" },
        ],
        flowEs: [
          { id: "rl1", icon: "🏁", label: "Trabajo Hecho", sublabel: "Trigger activa", type: "trigger" },
          { id: "rl2", icon: "⭐", label: "Pedido de Reseña", sublabel: "24h después, Google + FB", type: "action" },
          { id: "rl3", icon: "🤝", label: "Pedido de Referido", sublabel: "Día 30, link rastreado", type: "action" },
          { id: "rl4", icon: "📈", label: "Reputación + Leads", sublabel: "Compuestos", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "You miss calls on the job and lose the work to whoever called next", beforeEs: "Pierdes llamadas en obra y el trabajo se va con el que llamó después", after: "Every missed call gets an SMS within 30 seconds — the lead stays warm", afterEs: "Cada llamada perdida recibe SMS en 30 segundos — el lead se queda caliente" },
      { before: "Quotes go out and you never follow up — most close to silence", beforeEs: "Las cotizaciones salen y nunca haces seguimiento — la mayoría cierra en silencio", after: "Quote follow-up sequence runs automatically at D2, D5, D10", afterEs: "Secuencia de seguimiento corre automáticamente en D2, D5, D10" },
      { before: "Recurring services depend on you remembering to call", beforeEs: "Los servicios recurrentes dependen de que te acuerdes de llamar", after: "Service reminders fire 30 days out with one-tap rebooking", afterEs: "Recordatorios disparan a 30 días con re-agendamiento de un clic" },
      { before: "Reviews and referrals only happen when you remember to ask", beforeEs: "Reseñas y referidos solo pasan cuando te acuerdas de pedir", after: "Every completed job triggers review + referral sequences automatically", afterEs: "Cada trabajo completado dispara secuencias de reseña + referidos" },
    ],
    faq: [
      {
        q: "Does this work with my existing CRM (ServiceTitan, JobNimbus, Housecall Pro, Jobber)?",
        qEs: "¿Funciona con mi CRM existente (ServiceTitan, JobNimbus, Housecall Pro, Jobber)?",
        a: "Yes. We integrate with the major field service CRMs via API or webhooks, so jobs, customers, and dispatches stay in sync. The automation layer sits on top of your existing system.",
        aEs: "Sí. Integramos con los principales CRMs de field service vía API o webhooks, para que trabajos, clientes y despachos se mantengan en sync. La capa de automatización va encima de tu sistema existente.",
      },
      {
        q: "What if my crew doesn't use software, only paper?",
        qEs: "¿Qué pasa si mi equipo no usa software, solo papel?",
        a: "We can start with just you and the front office. Your crew keeps doing what they do — we automate the customer-facing side: lead capture, quote follow-up, scheduling, reminders, reviews. Adoption is zero-effort for the team in the field.",
        aEs: "Podemos empezar contigo y la oficina. Tu equipo sigue haciendo lo suyo — automatizamos el lado del cliente: captura de leads, seguimiento de cotizaciones, agendamiento, recordatorios, reseñas. Adopción zero-esfuerzo para el equipo en obra.",
      },
      {
        q: "Can the AI handle estimate scheduling without my involvement?",
        qEs: "¿La IA puede manejar el agendamiento de estimados sin mi intervención?",
        a: "Yes. The AI qualifies the lead (job type, scope, urgency, budget range), confirms availability, books the estimate into your calendar, and sends address + prep instructions automatically.",
        aEs: "Sí. La IA califica el lead (tipo de trabajo, alcance, urgencia, rango de presupuesto), confirma disponibilidad, agenda el estimado en tu calendario y manda dirección + instrucciones automáticamente.",
      },
      {
        q: "Will it integrate with my route / dispatch tool?",
        qEs: "¿Se integra con mi herramienta de rutas / despacho?",
        a: "Yes — most route optimization and dispatch tools (RoadWarrior, OptimoRoute, Workiz) expose APIs we can connect. Your scheduled jobs flow into your route automatically.",
        aEs: "Sí — la mayoría de herramientas de optimización y despacho (RoadWarrior, OptimoRoute, Workiz) tienen APIs que podemos conectar. Tus trabajos agendados fluyen a tu ruta automáticamente.",
      },
      {
        q: "How does it handle Spanish-speaking customers?",
        qEs: "¿Cómo maneja clientes hispanohablantes?",
        a: "Bilingual from day one. The system detects customer language preference and responds in their language across SMS, email, voice, and WhatsApp. Critical for the U.S. Hispanic and Latin American markets.",
        aEs: "Bilingüe desde el día uno. El sistema detecta el idioma del cliente y responde en ese idioma por SMS, email, voz y WhatsApp. Crítico para mercados hispanos en EE.UU. y Latinoamérica.",
      },
    ],
    techStack: [
      { name: "ServiceTitan / JobNimbus / Housecall Pro", desc: "Two-way sync with your field service CRM", descEs: "Sincronización con tu CRM de field service" },
      { name: "GoHighLevel", desc: "Lead inbox, automation engine, customer comms", descEs: "Inbox de leads, motor de automatización, comunicación con clientes" },
      { name: "Twilio (SMS)", desc: "Missed-call text-back in under 30 seconds", descEs: "Respuesta SMS a llamada perdida en menos de 30 segundos" },
      { name: "WhatsApp Business API", desc: "Dominant channel for customer comms in LATAM and U.S. Hispanic markets", descEs: "Canal dominante para comunicación con clientes en LATAM y mercado hispano" },
      { name: "VAPI Voice Agent", desc: "Answers calls when you can't, qualifies, books estimates", descEs: "Contesta llamadas cuando no puedes, califica, agenda estimados" },
      { name: "Custom Contractor Dashboard", desc: "Live: jobs in pipeline, quote-to-close rate, recurring service slots", descEs: "En vivo: trabajos en pipeline, tasa cotización-a-cierre, slots de servicio recurrente" },
    ],
    featuredQuote: {
      name: "Pedro Rivera",
      role: "CabinetWorkx — Contractor",
      roleEs: "CabinetWorkx — Contratista",
      quote: "I'm always on job sites. With the missed-call text-back, every missed call gets a response in seconds. I've recovered deals I would have completely lost before.",
      quoteEs: "Siempre estoy en obra. Con el SMS automático a llamadas perdidas, cada llamada perdida recibe respuesta en segundos. He recuperado trabajos que antes habría perdido por completo.",
      metric: "Never miss a lead",
      metricEs: "Cero leads perdidos",
      photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4cbe8bbf4a4527df2ec0.jpeg",
      initials: "PR",
    },
  },
  {
    slug: "tax-accounting",
    icon: "📊",
    name: "Tax & Accounting Firms",
    nameEs: "Despachos Fiscales y Contables",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28cb259174841bf11.png",
    heroTitle: "AI Automation for Tax & Accounting Firms",
    heroTitleEs: "Automatización IA para Despachos Fiscales y Contables",
    heroSub:
      "Document collection. Deadline reminders. Client follow-up. New client onboarding. All of it can run on autopilot — so your team focuses on the work, not the chasing.",
    heroSubEs:
      "Recopilación de documentos. Recordatorios de fechas límite. Seguimiento a clientes. Incorporación de nuevos clientes. Todo puede correr en piloto automático — para que tu equipo se enfoque en el trabajo, no en perseguir clientes.",
    problem:
      "Tax season is a time war. You're chasing clients for documents, reminding them about deadlines, onboarding new clients while doing the actual tax work — all at the same time. It's not a skills problem. It's a systems problem.",
    problemEs:
      "La temporada fiscal es una guerra contra el tiempo. Estás persiguiendo clientes por documentos, recordándoles fechas límite, incorporando nuevos clientes mientras haces el trabajo fiscal real — todo al mismo tiempo. No es un problema de habilidades. Es un problema de sistemas.",
    automationTitle: "Your #1 Automation: Client Document Pipeline",
    automationTitleEs: "Tu Automatización #1: Pipeline de Documentos de Clientes",
    flowEN: [
      { id: "1", icon: "🤝", label: "New Client", sublabel: "Referral, web, or ads", type: "trigger" },
      { id: "2", icon: "📋", label: "Intake Automated", sublabel: "Forms + data collection", type: "action" },
      { id: "3", icon: "📁", label: "Docs Collected", sublabel: "Reminder sequence until done", type: "process" },
      { id: "4", icon: "✅", label: "Work Delivered", sublabel: "Deadline auto-tracked", type: "action" },
      { id: "5", icon: "💼", label: "Upsell + Referral", sublabel: "Year-round relationship", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "🤝", label: "Nuevo Cliente", sublabel: "Referido, web o anuncios", type: "trigger" },
      { id: "2", icon: "📋", label: "Intake Automático", sublabel: "Formularios + datos", type: "action" },
      { id: "3", icon: "📁", label: "Docs Recopilados", sublabel: "Recordatorios hasta completar", type: "process" },
      { id: "4", icon: "✅", label: "Trabajo Entregado", sublabel: "Fechas límite rastreadas", type: "action" },
      { id: "5", icon: "💼", label: "Upsell + Referidos", sublabel: "Relación todo el año", type: "output" },
    ],
    items: [
      "Document collection sequences — automated reminders until complete",
      "Tax season intake — fully automated new client onboarding",
      "Deadline reminder campaigns for quarterly & annual filings",
      "Upsell sequences for bookkeeping, payroll, and advisory services",
      "Year-round client check-ins that keep relationships warm",
      "Referral campaigns targeting current satisfied clients",
    ],
    itemsEs: [
      "Secuencias de recopilación de documentos — recordatorios automáticos hasta completar",
      "Incorporación de nuevos clientes en temporada fiscal — completamente automatizada",
      "Campañas de recordatorio de fechas límite para declaraciones trimestrales y anuales",
      "Secuencias de venta adicional para contabilidad, nómina y servicios de asesoría",
      "Seguimiento anual a clientes que mantiene las relaciones activas",
      "Campañas de referidos dirigidas a clientes actuales satisfechos",
    ],
    stats: [
      { value: "100%", label: "Clients auto-reminded for docs", labelEs: "Clientes recordados automáticamente" },
      { value: "0", label: "Missed deadlines", labelEs: "Fechas límite perdidas" },
      { value: "Year-round", label: "Automated client nurture", labelEs: "Nurturing automatizado" },
    ],
    metaTitle: "AI Automation for Tax & Accounting Firms | Latin Prime Systems",
    metaDesc:
      "Automated document collection, deadline reminders, client onboarding, and upsell sequences for tax and accounting firms. Stop chasing. Start scaling.",
    metaTitleEs: "Automatización IA para Despachos Fiscales | Latin Prime Systems",
    metaDescEs:
      "Recopilación automática de documentos, recordatorios de fechas límite, incorporación de clientes y secuencias de venta adicional para despachos fiscales y contables.",
    keywords: [
      "AI automation for accounting firms",
      "tax firm document collection automation",
      "CRM for accountants",
      "tax season client follow-up",
      "accounting firm automation",
      "client onboarding automation accounting",
    ],
    keywordsEs: [
      "automatización IA despachos fiscales",
      "recopilación documentos automática contabilidad",
      "CRM para contadores",
      "seguimiento clientes temporada fiscal",
      "automatización firmas contables",
    ],
    useCases: [
      {
        title: "Document Collection Pipeline",
        titleEs: "Pipeline de Recolección de Documentos",
        desc: "Each client gets an automated checklist of documents needed (W-2s, 1099s, K-1s, deductions). The system follows up every 3 days for missing items and routes the file to your CPA only when complete.",
        descEs: "Cada cliente recibe lista automática de documentos necesarios (W-2, 1099, comprobantes, deducciones). El sistema da seguimiento cada 3 días por lo que falta y rutea el expediente al contador solo cuando está completo.",
        flow: [
          { id: "dc1", icon: "📋", label: "Client Onboarded", sublabel: "Trigger fires", type: "trigger" },
          { id: "dc2", icon: "📤", label: "Document Checklist", sublabel: "Personalized list", type: "action" },
          { id: "dc3", icon: "🔄", label: "3-Day Follow-Up", sublabel: "Until complete", type: "process" },
          { id: "dc4", icon: "✅", label: "File Ready for CPA", sublabel: "All docs in", type: "output" },
        ],
        flowEs: [
          { id: "dc1", icon: "📋", label: "Cliente Onboarded", sublabel: "Trigger activa", type: "trigger" },
          { id: "dc2", icon: "📤", label: "Checklist Documentos", sublabel: "Lista personalizada", type: "action" },
          { id: "dc3", icon: "🔄", label: "Seguimiento c/3 Días", sublabel: "Hasta completar", type: "process" },
          { id: "dc4", icon: "✅", label: "Expediente Listo", sublabel: "Todo completo", type: "output" },
        ],
      },
      {
        title: "Tax Deadline Reminder Series",
        titleEs: "Serie de Recordatorios de Vencimientos",
        desc: "Country-specific tax calendars built in (U.S., Colombia, Mexico). Every client gets reminders 60, 30, and 7 days before their relevant deadline — IVA, retenciones, ICA, federal estimated, payroll, etc.",
        descEs: "Calendarios tributarios por país integrados (EE.UU., Colombia, México). Cada cliente recibe recordatorios 60, 30 y 7 días antes de su vencimiento relevante — IVA, retenciones, ICA, federal estimated, nómina, etc.",
        flow: [
          { id: "td1", icon: "🗓️", label: "Deadline Detected", sublabel: "From tax calendar", type: "trigger" },
          { id: "td2", icon: "📲", label: "60-Day Heads-Up", sublabel: "Email + SMS", type: "action" },
          { id: "td3", icon: "⚠️", label: "30 + 7 Day Reminders", sublabel: "Escalating urgency", type: "action" },
          { id: "td4", icon: "📑", label: "Filed on Time", sublabel: "Penalty avoided", type: "output" },
        ],
        flowEs: [
          { id: "td1", icon: "🗓️", label: "Vencimiento Detectado", sublabel: "Del calendario", type: "trigger" },
          { id: "td2", icon: "📲", label: "Aviso a 60 Días", sublabel: "Email + SMS", type: "action" },
          { id: "td3", icon: "⚠️", label: "Recordatorios 30 + 7", sublabel: "Urgencia escalada", type: "action" },
          { id: "td4", icon: "📑", label: "Presentado a Tiempo", sublabel: "Multa evitada", type: "output" },
        ],
      },
      {
        title: "Engagement Letter & Payment Workflow",
        titleEs: "Carta Compromiso y Flujo de Pago",
        desc: "New clients receive engagement letter via e-sign. Once signed, deposit invoice fires automatically. Payment received → onboarding flow starts. Zero manual back-and-forth.",
        descEs: "Clientes nuevos reciben carta compromiso vía firma electrónica. Una vez firmada, factura de depósito sale automática. Pago recibido → empieza onboarding. Cero ida y vuelta manual.",
        flow: [
          { id: "el1", icon: "📨", label: "Engagement Letter", sublabel: "Sent for e-sign", type: "trigger" },
          { id: "el2", icon: "✍️", label: "Signed", sublabel: "DocuSign / similar", type: "process" },
          { id: "el3", icon: "💳", label: "Deposit Invoice", sublabel: "Auto-sent", type: "action" },
          { id: "el4", icon: "🚀", label: "Onboarding Starts", sublabel: "Document checklist fires", type: "output" },
        ],
        flowEs: [
          { id: "el1", icon: "📨", label: "Carta Compromiso", sublabel: "Enviada para firma", type: "trigger" },
          { id: "el2", icon: "✍️", label: "Firmada", sublabel: "DocuSign / similar", type: "process" },
          { id: "el3", icon: "💳", label: "Factura Depósito", sublabel: "Auto-enviada", type: "action" },
          { id: "el4", icon: "🚀", label: "Onboarding Inicia", sublabel: "Checklist arranca", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "Tax season is chaos — chasing documents one client at a time", beforeEs: "La temporada de taxes es un caos — persiguiendo documentos cliente por cliente", after: "Document collection runs on autopilot with personalized checklists per client", afterEs: "Recolección de documentos corre en piloto con checklist personalizado por cliente" },
      { before: "Deadlines slip; clients miss filings; penalties accumulate", beforeEs: "Vencimientos se escapan; clientes no presentan a tiempo; multas se acumulan", after: "Country-specific reminder series ensures every client files on time", afterEs: "Serie de recordatorios por país asegura presentación a tiempo" },
      { before: "Onboarding new clients takes weeks of email back-and-forth", beforeEs: "Onboarding de clientes nuevos toma semanas de email", after: "E-sign engagement letter + auto-invoicing closes onboarding in days", afterEs: "Carta compromiso e-sign + auto-facturación cierra onboarding en días" },
      { before: "You handle 80 clients and feel maxed out", beforeEs: "Manejas 80 clientes y te sientes al límite", after: "You handle 30% more with the same team — without dropping quality", afterEs: "Manejas 30% más con el mismo equipo — sin bajar calidad" },
    ],
    faq: [
      {
        q: "Does this integrate with QuickBooks, Xero, or country-specific tools (ContaPaq, SAT/CFDI, Siigo)?",
        qEs: "¿Se integra con QuickBooks, Xero o herramientas locales (ContaPaq, SAT/CFDI, Siigo)?",
        a: "Yes. Direct sync where APIs exist (QuickBooks, Xero, Siigo), and supported integrations for Mexican CFDI/SAT and Colombian tax obligations. Custom plan covers any additional platform.",
        aEs: "Sí. Sync directo donde existe API (QuickBooks, Xero, Siigo), e integraciones soportadas para CFDI/SAT mexicano y obligaciones tributarias colombianas. El plan Custom cubre cualquier plataforma adicional.",
      },
      {
        q: "How is client document security handled?",
        qEs: "¿Cómo se maneja la seguridad de documentos del cliente?",
        a: "All document uploads use encrypted portals (TLS 1.3 in transit, AES-256 at rest). Access is permission-based per client. We sign NDAs and confidentiality agreements with every accounting client.",
        aEs: "Todas las subidas usan portales encriptados (TLS 1.3 en tránsito, AES-256 en reposo). El acceso es por permisos por cliente. Firmamos NDAs y acuerdos de confidencialidad con cada cliente contable.",
      },
      {
        q: "Can the system handle Colombian tax calendar (DIAN, ICA, retenciones)?",
        qEs: "¿El sistema maneja calendario tributario colombiano (DIAN, ICA, retenciones)?",
        a: "Yes — purpose-built for it. We've already deployed this for accounting firms in Colombia. The reminder engine knows the DIAN calendar by company size (gran contribuyente, persona jurídica, persona natural) and ICA by municipality.",
        aEs: "Sí — construido específicamente para eso. Ya lo hemos desplegado para firmas contables en Colombia. El motor de recordatorios conoce el calendario DIAN por tamaño de empresa (gran contribuyente, persona jurídica, persona natural) e ICA por municipio.",
      },
      {
        q: "What about Mexican fiscal obligations (IVA, ISR, nómina)?",
        qEs: "¿Y obligaciones fiscales mexicanas (IVA, ISR, nómina)?",
        a: "Same approach: SAT calendar built in, reminders by régimen (RESICO, persona moral, persona física con actividad empresarial). CFDI integration handles invoice issuance and verification.",
        aEs: "Mismo enfoque: calendario SAT integrado, recordatorios por régimen (RESICO, persona moral, persona física con actividad empresarial). Integración CFDI maneja emisión y verificación de facturas.",
      },
      {
        q: "Can clients sign engagement letters and pay through the system?",
        qEs: "¿Los clientes pueden firmar cartas compromiso y pagar por el sistema?",
        a: "Yes. Engagement letters are sent via DocuSign or similar e-sign platforms. Once signed, the deposit invoice fires automatically through Stripe, Square, or your local payment provider.",
        aEs: "Sí. Las cartas compromiso se envían vía DocuSign u otras plataformas e-sign. Una vez firmadas, la factura de depósito sale automática por Stripe, Square o tu proveedor de pagos local.",
      },
    ],
    techStack: [
      { name: "QuickBooks / Xero / Siigo", desc: "Sync client books with the automation layer", descEs: "Sincroniza libros del cliente con la capa de automatización" },
      { name: "DIAN (CO) / SAT-CFDI (MX)", desc: "Country-specific tax calendar reminders + invoice verification", descEs: "Recordatorios de calendario tributario por país + verificación de facturas" },
      { name: "DocuSign / Dropbox Sign", desc: "Engagement letters and document e-signing", descEs: "Cartas compromiso y firma electrónica de documentos" },
      { name: "TaxDome / Karbon", desc: "Two-way sync with practice management platforms", descEs: "Sincronización con plataformas de gestión de práctica" },
      { name: "Stripe / Square / PayU (LATAM)", desc: "Deposit invoices and recurring payments", descEs: "Facturas de depósito y pagos recurrentes" },
      { name: "Custom Tax Firm Dashboard", desc: "Live: documents pending, deadlines this week, billings outstanding", descEs: "En vivo: documentos pendientes, vencimientos esta semana, cobros pendientes" },
    ],
    featuredQuote: {
      name: "Berta Viloria",
      role: "Accountant & Tax Advisor",
      roleEs: "Contadora y Asesora Tributaria",
      quote: "Tax season used to be chaos. Now document collection, client reminders, and follow-ups all happen automatically. I handled 30% more clients this year with the same staff.",
      quoteEs: "La temporada de taxes era un caos. Ahora la recolección de documentos, recordatorios y seguimientos se hacen solos. Atendí 30% más clientes este año con el mismo equipo.",
      metric: "+30% clients served",
      metricEs: "+30% clientes atendidos",
      photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4c9fe91800719e64f8d4.jpeg",
      initials: "BV",
    },
  },
  {
    slug: "restaurants",
    icon: "🍽️",
    name: "Restaurants & Local Business",
    nameEs: "Restaurantes y Negocios Locales",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d27fc07c048f9b8b54.png",
    heroTitle: "AI Automation for Restaurants & Local Business",
    heroTitleEs: "Automatización IA para Restaurantes y Negocios Locales",
    heroSub:
      "You compete on Google reviews and repeat visits. Both can be driven by automation. Our system requests reviews after every visit, builds a loyalty SMS list, and wins back customers who haven't returned in 30 days.",
    heroSubEs:
      "Compites en reseñas de Google y visitas recurrentes. Ambas pueden impulsarse con automatización. Nuestro sistema solicita reseñas después de cada visita, crea una lista de lealtad por SMS y recupera clientes que no han regresado en 30 días.",
    problem:
      "Your best customers come in, love the experience, and then you never hear from them again. Not because they didn't like it — but because no one invited them back. Meanwhile, you're one bad Google review away from losing foot traffic. Your competitors are using SMS lists and review automation. Are you?",
    problemEs:
      "Tus mejores clientes entran, disfrutan la experiencia y luego nunca más los ves. No porque no les haya gustado — sino porque nadie los invitó a regresar. Mientras tanto, una reseña negativa en Google puede costarte tráfico. Tus competidores ya usan listas de SMS y automatización de reseñas. ¿Y tú?",
    automationTitle: "Your #1 Automation: Visit → Review → Return",
    automationTitleEs: "Tu Automatización #1: Visita → Reseña → Regreso",
    flowEN: [
      { id: "1", icon: "🍽️", label: "Customer Visits", sublabel: "Dine-in, order, or delivery", type: "trigger" },
      { id: "2", icon: "⭐", label: "Review Request", sublabel: "SMS within 30 minutes", type: "action" },
      { id: "3", icon: "🎁", label: "Loyalty Points", sublabel: "Auto-tracked in CRM", type: "action" },
      { id: "4", icon: "📣", label: "Promo / Event", sublabel: "Seasonal campaign sent", type: "action" },
      { id: "5", icon: "🔄", label: "Return Visit", sublabel: "Win-back if 30+ days gone", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "🍽️", label: "Cliente Visita", sublabel: "En local, pedido o delivery", type: "trigger" },
      { id: "2", icon: "⭐", label: "Solicitud Reseña", sublabel: "SMS en 30 minutos", type: "action" },
      { id: "3", icon: "🎁", label: "Puntos Lealtad", sublabel: "Rastreados en CRM", type: "action" },
      { id: "4", icon: "📣", label: "Promo / Evento", sublabel: "Campaña de temporada", type: "action" },
      { id: "5", icon: "🔄", label: "Visita de Regreso", sublabel: "Recuperación si no regresa", type: "output" },
    ],
    items: [
      "SMS loyalty program — automated points, rewards, and promotions",
      "Review request sequence after every visit or order",
      "Win-back campaigns for customers who haven't returned in 30+ days",
      "Event & special promotion announcements via SMS/email",
      "Online reservation system connected to your operations",
      "Google Business Profile optimized and monitored automatically",
    ],
    itemsEs: [
      "Programa de lealtad por SMS — puntos, recompensas y promociones automatizadas",
      "Secuencia de solicitud de reseña después de cada visita o pedido",
      "Campañas de recuperación para clientes que no han regresado en 30+ días",
      "Anuncios de eventos y promociones especiales por SMS/correo",
      "Sistema de reservaciones en línea conectado a tus operaciones",
      "Perfil de Google Business optimizado y monitoreado automáticamente",
    ],
    stats: [
      { value: "30 min", label: "Review request after visit", labelEs: "Solicitud de reseña post-visita" },
      { value: "30 day", label: "Win-back trigger", labelEs: "Trigger de recuperación" },
      { value: "4.8★", label: "Average Google rating target", labelEs: "Objetivo de calificación Google" },
    ],
    metaTitle: "AI Automation for Restaurants & Local Business | Latin Prime Systems",
    metaDesc:
      "Automated Google review requests, SMS loyalty programs, win-back campaigns, and reservation systems for restaurants and local businesses.",
    metaTitleEs: "Automatización IA para Restaurantes y Negocios Locales | Latin Prime Systems",
    metaDescEs:
      "Solicitudes de reseñas en Google, programas de lealtad por SMS, campañas de recuperación y sistemas de reservas para restaurantes y negocios locales.",
    keywords: [
      "AI automation for restaurants",
      "restaurant review automation",
      "SMS loyalty program restaurant",
      "local business automation",
      "restaurant customer win-back",
      "Google review automation restaurant",
    ],
    keywordsEs: [
      "automatización IA restaurantes",
      "automatización reseñas restaurante",
      "programa lealtad SMS restaurante",
      "automatización negocios locales",
      "recuperación clientes restaurante",
    ],
    useCases: [
      {
        title: "Reservation Confirmation + No-Show Prevention",
        titleEs: "Confirmación de Reservas + Prevención de No-Shows",
        desc: "Every reservation gets confirmation immediately, reminder 24h before, and final SMS 2h before with one-tap cancel. Empty tables refilled from waitlist automatically.",
        descEs: "Cada reserva recibe confirmación inmediata, recordatorio 24h antes y SMS final 2h antes con cancelación de un clic. Mesas vacías se llenan desde lista de espera automáticamente.",
        flow: [
          { id: "rs1", icon: "🍽️", label: "Reservation Made", sublabel: "Trigger fires", type: "trigger" },
          { id: "rs2", icon: "📲", label: "Confirm + Reminders", sublabel: "Now / 24h / 2h", type: "action" },
          { id: "rs3", icon: "❌", label: "One-Tap Cancel", sublabel: "If can't make it", type: "process" },
          { id: "rs4", icon: "✅", label: "Table Filled", sublabel: "From waitlist", type: "output" },
        ],
        flowEs: [
          { id: "rs1", icon: "🍽️", label: "Reserva Hecha", sublabel: "Trigger activa", type: "trigger" },
          { id: "rs2", icon: "📲", label: "Confirmar + Recordatorios", sublabel: "Ahora / 24h / 2h", type: "action" },
          { id: "rs3", icon: "❌", label: "Cancelar 1 Clic", sublabel: "Si no puede", type: "process" },
          { id: "rs4", icon: "✅", label: "Mesa Llenada", sublabel: "Desde lista de espera", type: "output" },
        ],
      },
      {
        title: "SMS Loyalty + Win-Back Campaigns",
        titleEs: "Lealtad por SMS + Campañas de Recuperación",
        desc: "Customers earn points per visit (auto-tracked via POS). After 30 days inactive, a personalized win-back fires with an offer based on what they ordered before. Reactivates 15–25% of dormant customers.",
        descEs: "Clientes acumulan puntos por visita (rastreado por POS). Después de 30 días inactivos, sale recuperación personalizada con oferta basada en lo que pidieron antes. Reactiva 15–25% de clientes dormidos.",
        flow: [
          { id: "ls1", icon: "🛒", label: "POS Order Captured", sublabel: "Customer linked", type: "trigger" },
          { id: "ls2", icon: "⭐", label: "Loyalty Points", sublabel: "Auto-credited", type: "action" },
          { id: "ls3", icon: "💤", label: "30 Days Inactive", sublabel: "Win-back triggers", type: "process" },
          { id: "ls4", icon: "🎁", label: "Personalized Offer", sublabel: "Based on history", type: "output" },
        ],
        flowEs: [
          { id: "ls1", icon: "🛒", label: "Pedido en POS", sublabel: "Cliente vinculado", type: "trigger" },
          { id: "ls2", icon: "⭐", label: "Puntos Lealtad", sublabel: "Auto-acreditados", type: "action" },
          { id: "ls3", icon: "💤", label: "30 Días Inactivo", sublabel: "Recuperación activa", type: "process" },
          { id: "ls4", icon: "🎁", label: "Oferta Personalizada", sublabel: "Según historial", type: "output" },
        ],
      },
      {
        title: "Review Request + Negative Sentiment Capture",
        titleEs: "Solicitud de Reseña + Captura de Sentimiento Negativo",
        desc: "30 minutes after the bill is paid, customer gets a review request. Positive sentiment routes to Google. Negative sentiment routes to the manager privately — saving the public reputation and recovering the customer.",
        descEs: "30 minutos después de pagar la cuenta, el cliente recibe solicitud de reseña. Sentimiento positivo va a Google. Sentimiento negativo va al manager en privado — salvando la reputación pública y recuperando al cliente.",
        flow: [
          { id: "rev1", icon: "💵", label: "Bill Paid", sublabel: "POS trigger", type: "trigger" },
          { id: "rev2", icon: "📲", label: "Review Ask SMS", sublabel: "30 min after", type: "action" },
          { id: "rev3", icon: "🧠", label: "AI Sentiment Check", sublabel: "Positive vs negative", type: "process" },
          { id: "rev4", icon: "⭐", label: "Google Review", sublabel: "Or manager alert", type: "output" },
        ],
        flowEs: [
          { id: "rev1", icon: "💵", label: "Cuenta Pagada", sublabel: "Trigger POS", type: "trigger" },
          { id: "rev2", icon: "📲", label: "SMS Pidiendo Reseña", sublabel: "30 min después", type: "action" },
          { id: "rev3", icon: "🧠", label: "IA Revisa Sentimiento", sublabel: "Positivo vs negativo", type: "process" },
          { id: "rev4", icon: "⭐", label: "Reseña en Google", sublabel: "O alerta a manager", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "Reservation no-shows kill table turnover and wasted prep", beforeEs: "No-shows en reservas matan rotación de mesas y desperdician prep", after: "Multi-touch reminders cut no-shows; waitlist auto-fills empty tables", afterEs: "Recordatorios multi-touch bajan no-shows; lista de espera llena mesas vacías" },
      { before: "Customers visit once, never come back", beforeEs: "Clientes vienen una vez y no regresan", after: "Win-back campaigns reactivate 15–25% of dormant customers monthly", afterEs: "Campañas de recuperación reactivan 15–25% de clientes dormidos al mes" },
      { before: "Bad reviews land on Google before you know they happened", beforeEs: "Las malas reseñas aparecen en Google antes de que sepas que pasaron", after: "Sentiment routing sends negatives to manager privately first", afterEs: "El ruteo de sentimiento manda negativas al manager en privado primero" },
      { before: "Loyalty program ignored; no one actually uses the app", beforeEs: "Programa de lealtad ignorado; nadie usa la app", after: "SMS-based loyalty — no app to download, points auto-tracked", afterEs: "Lealtad por SMS — sin app que descargar, puntos auto-rastreados" },
    ],
    faq: [
      {
        q: "Does this integrate with Toast, Square, OpenTable, Resy, or Yelp?",
        qEs: "¿Se integra con Toast, Square, OpenTable, Resy o Yelp?",
        a: "Yes. We pull POS orders, reservation events, and review activity from the major restaurant platforms via API or webhooks — so loyalty, win-backs, and reviews fire on real customer behavior.",
        aEs: "Sí. Jalamos pedidos POS, eventos de reserva y actividad de reseñas de las principales plataformas de restaurantes vía API o webhooks — para que lealtad, recuperaciones y reseñas disparen sobre comportamiento real.",
      },
      {
        q: "Can it handle multi-location?",
        qEs: "¿Puede manejar múltiples ubicaciones?",
        a: "Yes. Each location has its own dashboard, its own loyalty program, its own review streams — but you see the rollup across all locations from one HQ view.",
        aEs: "Sí. Cada ubicación tiene su dashboard, su programa de lealtad, sus flujos de reseñas — pero ves el rollup de todas las ubicaciones desde una sola vista de HQ.",
      },
      {
        q: "What about online ordering / delivery (DoorDash, UberEats, Rappi)?",
        qEs: "¿Y los pedidos online / delivery (DoorDash, UberEats, Rappi)?",
        a: "Delivery customer data flows in via the platform integrations. Loyalty + win-back works on delivery customers too. We can also automate delivery promo codes and rebooking incentives.",
        aEs: "Datos de clientes de delivery fluyen vía integraciones. Lealtad + recuperación funciona también con clientes de delivery. También podemos automatizar códigos promo y incentivos de re-pedido.",
      },
      {
        q: "Does the AI handle reservations by phone?",
        qEs: "¿La IA maneja reservas por teléfono?",
        a: "Yes. The voice agent answers calls, takes reservation details (party size, time, special requests), confirms availability against your booking system, and books on the spot — bilingual.",
        aEs: "Sí. El agente de voz contesta llamadas, toma detalles de reserva (número de personas, hora, peticiones especiales), confirma disponibilidad contra tu sistema de reservas y agenda al instante — bilingüe.",
      },
      {
        q: "How does it handle our Spanish-speaking customer base?",
        qEs: "¿Cómo maneja nuestra base de clientes hispanohablantes?",
        a: "Bilingual from day one across SMS, voice, and reviews. Customer language preference is stored on first interaction. WhatsApp Business is supported for LATAM markets.",
        aEs: "Bilingüe desde el día uno por SMS, voz y reseñas. Preferencia de idioma se guarda en la primera interacción. WhatsApp Business soportado para mercados LATAM.",
      },
    ],
    techStack: [
      { name: "Toast / Square / Lightspeed", desc: "POS integration for orders, customers, loyalty", descEs: "Integración POS para pedidos, clientes, lealtad" },
      { name: "OpenTable / Resy / Yelp Reservations", desc: "Reservation sync with confirmations and waitlist", descEs: "Sincronización de reservas con confirmaciones y lista de espera" },
      { name: "Google Business Profile API", desc: "Review monitoring + sentiment routing", descEs: "Monitoreo de reseñas + ruteo de sentimiento" },
      { name: "Twilio + WhatsApp Business", desc: "SMS loyalty, win-backs, bilingual customer comms", descEs: "Lealtad por SMS, recuperaciones, comunicación bilingüe" },
      { name: "VAPI Voice Agent", desc: "Phone reservations and FAQ handling, bilingual", descEs: "Reservas por teléfono y FAQs, bilingüe" },
      { name: "Custom Restaurant Dashboard", desc: "Live: covers tonight, no-show rate, review velocity, repeat rate", descEs: "En vivo: cubiertos esta noche, no-show, velocidad de reseñas, tasa de repetición" },
    ],
  },
  {
    slug: "coaches",
    icon: "🎯",
    name: "Coaches & Consultants",
    nameEs: "Coaches y Consultores",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa8406418690.png",
    heroTitle: "AI Automation for Coaches & Consultants",
    heroTitleEs: "Automatización IA para Coaches y Consultores",
    heroSub:
      "You sell outcomes. Your systems should reflect that. From lead magnet to discovery call to onboarding — our automation handles every step of your sales pipeline so you can focus on delivering transformations.",
    heroSubEs:
      "Vendes resultados. Tus sistemas deben reflejarlo. Desde lead magnet hasta llamada de descubrimiento y onboarding — nuestra automatización maneja cada paso de tu pipeline de ventas para que puedas enfocarte en entregar transformaciones.",
    problem:
      "Most coaches manually follow up on every lead, manually book discovery calls, manually chase proposal responses. That's hours every week not spent coaching. Your competitors with automation running are doing more sales conversations with less effort — and closing faster.",
    problemEs:
      "La mayoría de los coaches hacen seguimiento manual a cada prospecto, agendan manualmente llamadas de descubrimiento y persiguen manualmente las respuestas a propuestas. Eso son horas semanales que no se invierten en coaching. Tus competidores con automatización hacen más conversaciones de ventas con menos esfuerzo — y cierran más rápido.",
    automationTitle: "Your #1 Automation: Lead Magnet → Discovery Call",
    automationTitleEs: "Tu Automatización #1: Lead Magnet → Llamada de Descubrimiento",
    flowEN: [
      { id: "1", icon: "🎁", label: "Lead Magnet", sublabel: "Download, webinar, or ad", type: "trigger" },
      { id: "2", icon: "📧", label: "Email Sequence", sublabel: "5-email nurture series", type: "action" },
      { id: "3", icon: "📅", label: "Discovery Call", sublabel: "Auto-booked to calendar", type: "action" },
      { id: "4", icon: "📝", label: "Proposal Sent", sublabel: "Follow-up ×3 automated", type: "process" },
      { id: "5", icon: "🚀", label: "Client Onboarded", sublabel: "Testimonial sequence starts", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "🎁", label: "Lead Magnet", sublabel: "Descarga, webinar o anuncio", type: "trigger" },
      { id: "2", icon: "📧", label: "Secuencia Email", sublabel: "5 correos de nurturing", type: "action" },
      { id: "3", icon: "📅", label: "Llamada Descubrimiento", sublabel: "Auto-agendada al calendario", type: "action" },
      { id: "4", icon: "📝", label: "Propuesta Enviada", sublabel: "Seguimiento ×3 automático", type: "process" },
      { id: "5", icon: "🚀", label: "Cliente Incorporado", sublabel: "Secuencia de testimonios", type: "output" },
    ],
    items: [
      "Lead magnet → email sequence → sales call, fully automated",
      "Discovery call booking directly from ads and social media",
      "Proposal follow-up sequence — never leave money on the table",
      "Onboarding automation for new clients",
      "Testimonial collection at key milestone moments",
      "Upsell sequences for premium programs and renewals",
    ],
    itemsEs: [
      "Lead magnet → secuencia de correo → llamada de ventas, completamente automatizado",
      "Agendamiento de llamadas de descubrimiento directo desde anuncios y redes sociales",
      "Secuencia de seguimiento de propuestas — nunca dejes dinero sobre la mesa",
      "Automatización de incorporación para nuevos clientes",
      "Recopilación de testimonios en momentos clave del proceso",
      "Secuencias de venta adicional para programas premium y renovaciones",
    ],
    stats: [
      { value: "5 emails", label: "Automated nurture sequence", labelEs: "Secuencia de nurturing" },
      { value: "3×", label: "Proposal follow-ups auto-sent", labelEs: "Seguimientos de propuesta" },
      { value: "24/7", label: "Discovery call booking", labelEs: "Agendamiento de llamadas" },
    ],
    metaTitle: "AI Automation for Coaches & Consultants | Latin Prime Systems",
    metaDesc:
      "Automate your entire sales funnel — lead magnet to discovery call to onboarding. Done-for-you automation for coaches and consultants. 90-Day ROI Guarantee.",
    metaTitleEs: "Automatización IA para Coaches y Consultores | Latin Prime Systems",
    metaDescEs:
      "Automatiza todo tu embudo de ventas — desde lead magnet hasta onboarding. Automatización lista para ti para coaches y consultores. Garantía ROI 90 días.",
    keywords: [
      "AI automation for coaches",
      "consultant sales funnel automation",
      "lead magnet follow-up automation",
      "discovery call automation",
      "coaching business CRM",
      "consultant client onboarding automation",
    ],
    keywordsEs: [
      "automatización IA coaches",
      "embudo ventas consultor automatización",
      "seguimiento lead magnet automático",
      "automatización llamada descubrimiento",
      "CRM negocio coaching",
    ],
    useCases: [
      {
        title: "Lead Magnet → Discovery Call Funnel",
        titleEs: "Embudo Lead Magnet → Llamada Descubrimiento",
        desc: "Lead opts in to a freebie (PDF, masterclass, mini-course). 5-step nurture sequence builds trust over 7 days. CTA at the end books a discovery call. Pre-qualification questions filter tire-kickers.",
        descEs: "Lead se registra al regalo (PDF, masterclass, mini-curso). Secuencia nurture de 5 pasos genera confianza en 7 días. CTA al final agenda llamada de descubrimiento. Preguntas de pre-calificación filtran a los curiosos.",
        flow: [
          { id: "lm1", icon: "🎁", label: "Lead Magnet Opt-In", sublabel: "Trigger fires", type: "trigger" },
          { id: "lm2", icon: "📚", label: "5-Day Nurture", sublabel: "Email + SMS", type: "action" },
          { id: "lm3", icon: "🎯", label: "Discovery Call CTA", sublabel: "Pre-qualified", type: "process" },
          { id: "lm4", icon: "📞", label: "Call Booked", sublabel: "On your calendar", type: "output" },
        ],
        flowEs: [
          { id: "lm1", icon: "🎁", label: "Opt-In Lead Magnet", sublabel: "Trigger activa", type: "trigger" },
          { id: "lm2", icon: "📚", label: "Nurture 5 Días", sublabel: "Email + SMS", type: "action" },
          { id: "lm3", icon: "🎯", label: "CTA Llamada", sublabel: "Pre-calificado", type: "process" },
          { id: "lm4", icon: "📞", label: "Llamada Agendada", sublabel: "En tu calendario", type: "output" },
        ],
      },
      {
        title: "Course / Program Enrollment + Onboarding",
        titleEs: "Inscripción a Curso / Programa + Onboarding",
        desc: "Student enrolls (Stripe / Kajabi). Instant access granted. Welcome video sent. Week 1 cohort kickoff scheduled. Drip lessons fire on schedule. Module completion tracked. Cert auto-issued at the end.",
        descEs: "Alumno se inscribe (Stripe / Kajabi). Acceso inmediato. Video de bienvenida enviado. Kick-off de cohorte semana 1 agendado. Lecciones drip por calendario. Avance por módulo trackeado. Certificado al final.",
        flow: [
          { id: "co1", icon: "💳", label: "Enrollment", sublabel: "Payment received", type: "trigger" },
          { id: "co2", icon: "🚪", label: "Access + Welcome", sublabel: "Instant", type: "action" },
          { id: "co3", icon: "📆", label: "Drip Lessons", sublabel: "Per cohort schedule", type: "process" },
          { id: "co4", icon: "🎓", label: "Cert Issued", sublabel: "Auto on completion", type: "output" },
        ],
        flowEs: [
          { id: "co1", icon: "💳", label: "Inscripción", sublabel: "Pago recibido", type: "trigger" },
          { id: "co2", icon: "🚪", label: "Acceso + Bienvenida", sublabel: "Instantáneo", type: "action" },
          { id: "co3", icon: "📆", label: "Lecciones Drip", sublabel: "Calendario de cohorte", type: "process" },
          { id: "co4", icon: "🎓", label: "Certificado", sublabel: "Auto al completar", type: "output" },
        ],
      },
      {
        title: "Renewal + Upsell Sequence",
        titleEs: "Secuencia de Renovación + Upsell",
        desc: "30 days before program ends, the system surfaces renewal offer + upsell to next-level program. Personalized based on what they completed and their stated goals.",
        descEs: "30 días antes de terminar programa, sistema saca oferta de renovación + upsell al siguiente nivel. Personalizado según lo que completaron y sus objetivos declarados.",
        flow: [
          { id: "ru1", icon: "📦", label: "Program Ending", sublabel: "30 days out", type: "trigger" },
          { id: "ru2", icon: "🎯", label: "Personalized Offer", sublabel: "Renewal + upsell", type: "action" },
          { id: "ru3", icon: "🤖", label: "AI Books Call", sublabel: "If interested", type: "process" },
          { id: "ru4", icon: "💵", label: "Renewed / Upsold", sublabel: "LTV grows", type: "output" },
        ],
        flowEs: [
          { id: "ru1", icon: "📦", label: "Programa Termina", sublabel: "A 30 días", type: "trigger" },
          { id: "ru2", icon: "🎯", label: "Oferta Personalizada", sublabel: "Renovación + upsell", type: "action" },
          { id: "ru3", icon: "🤖", label: "IA Agenda Llamada", sublabel: "Si está interesado", type: "process" },
          { id: "ru4", icon: "💵", label: "Renovado / Upsold", sublabel: "LTV crece", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "Discovery calls full of unqualified prospects who waste your time", beforeEs: "Llamadas descubrimiento llenas de prospectos no calificados que te roban tiempo", after: "Pre-qualification gates filter to high-fit leads only", afterEs: "Puertas de pre-calificación filtran solo a leads de alto match" },
      { before: "Lead magnets generate emails but no follow-up happens", beforeEs: "Los lead magnets generan emails pero no hay seguimiento", after: "5-day nurture builds trust and books calls automatically", afterEs: "Nurture de 5 días genera confianza y agenda llamadas automáticamente" },
      { before: "Course students drop off mid-program; completion rates are low", beforeEs: "Alumnos abandonan a la mitad; tasas de finalización bajas", after: "Drip lessons + check-ins keep students on track to certificate", afterEs: "Lecciones drip + check-ins mantienen al alumno hacia el certificado" },
      { before: "Programs end and clients silently churn", beforeEs: "Programas terminan y clientes se van en silencio", after: "Renewal + upsell sequences surface 30 days before end", afterEs: "Secuencias de renovación + upsell aparecen 30 días antes del fin" },
    ],
    faq: [
      {
        q: "Does this integrate with Kajabi, Teachable, Thinkific, or Mighty Networks?",
        qEs: "¿Se integra con Kajabi, Teachable, Thinkific o Mighty Networks?",
        a: "Yes. We sync enrollments, lesson completion, and member status with all major course platforms via API or webhooks. The automation layer drives the comms; the platform hosts the content.",
        aEs: "Sí. Sincronizamos inscripciones, completion de lecciones y estado de miembros con todas las plataformas principales vía API o webhooks. La capa de automatización maneja la comunicación; la plataforma aloja el contenido.",
      },
      {
        q: "Can it handle group / cohort coaching as well as 1:1?",
        qEs: "¿Maneja coaching grupal / cohortes igual que 1:1?",
        a: "Yes. Cohort kickoffs, group calls, peer accountability check-ins, and graduation events all run on a cohort schedule. 1:1 clients have their own personalized cadence.",
        aEs: "Sí. Kickoffs de cohorte, llamadas grupales, check-ins de accountability y graduaciones corren en calendario de cohorte. Clientes 1:1 tienen su propia cadencia personalizada.",
      },
      {
        q: "What if I sell info products but also book private clients?",
        qEs: "¿Qué pasa si vendo productos info pero también atiendo clientes privados?",
        a: "Both pipelines run in parallel. Buyers of the digital product can be invited into a high-ticket discovery call later. Pipeline tags keep everything separate but visible.",
        aEs: "Ambos pipelines corren en paralelo. Compradores del producto digital pueden ser invitados a llamada de alto ticket después. Tags en pipeline mantienen todo separado pero visible.",
      },
      {
        q: "Can clients book and pay through the system?",
        qEs: "¿Los clientes pueden reservar y pagar por el sistema?",
        a: "Yes. Stripe and PayPal integration handles one-time payments, payment plans, and recurring memberships. Booking syncs to your calendar automatically.",
        aEs: "Sí. Integración con Stripe y PayPal maneja pagos únicos, planes de pago y membresías recurrentes. El booking sincroniza a tu calendario automáticamente.",
      },
      {
        q: "What about international clients (LATAM, payments in COP/MXN)?",
        qEs: "¿Y los clientes internacionales (LATAM, pagos en COP/MXN)?",
        a: "Stripe + local processors (PayU, Mercado Pago) for LATAM. Multi-currency display, local payment methods, and bilingual customer flows make selling across borders frictionless.",
        aEs: "Stripe + procesadores locales (PayU, Mercado Pago) para LATAM. Display multi-moneda, métodos de pago locales y flujos bilingües hacen vender entre fronteras sin fricción.",
      },
    ],
    techStack: [
      { name: "Kajabi / Teachable / Thinkific", desc: "Course hosting + enrollment sync", descEs: "Alojamiento de cursos + sincronización de inscripciones" },
      { name: "Stripe / PayU / Mercado Pago", desc: "Payments — one-time, installments, subscriptions", descEs: "Pagos — únicos, cuotas, suscripciones" },
      { name: "Calendly / Acuity", desc: "Discovery call + 1:1 session booking", descEs: "Agendamiento de llamadas descubrimiento + sesiones 1:1" },
      { name: "GoHighLevel + Email", desc: "Nurture sequences, broadcast campaigns, CRM", descEs: "Secuencias nurture, campañas, CRM" },
      { name: "Notion / Airtable", desc: "Cohort tracking, peer accountability, content library", descEs: "Tracking de cohortes, accountability entre pares, biblioteca de contenido" },
      { name: "Custom Coach Dashboard", desc: "Live: enrollments, completion, revenue per cohort, churn", descEs: "En vivo: inscripciones, finalización, ingresos por cohorte, churn" },
    ],
    featuredQuote: {
      name: "Miguel Zuñiga",
      role: "Personal Trainer",
      roleEs: "Entrenador Personal",
      quote: "I came in with nothing but my expertise. The LPS team built me a complete website, a platform for my online training courses, and a custom training and nutrition app for my clients. Two new clients signed up — directly from the new system.",
      quoteEs: "Llegué con nada más que mi experiencia. El equipo de LPS me construyó un website completo, una plataforma para mis cursos de entrenamiento online y una app a la medida de entrenamiento y nutrición. Ya tengo dos clientes nuevos firmados — directo del nuevo sistema.",
      metric: "2 new clients in weeks",
      metricEs: "2 nuevos clientes en semanas",
      photo: "/testimonials/miguel-zuniga.jpeg",
      initials: "MZ",
    },
  },
  {
    slug: "law-firms",
    icon: "⚖️",
    name: "Law Firms & Legal Services",
    nameEs: "Despachos Jurídicos y Servicios Legales",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa6b2e418691.png",
    heroTitle: "AI Automation for Law Firms",
    heroTitleEs: "Automatización IA para Despachos Jurídicos",
    heroSub:
      "Potential clients don't wait. If your firm doesn't respond within minutes, they call the next firm on the list. Our AI handles 24/7 intake, qualifies case type and urgency, and books consultations automatically.",
    heroSubEs:
      "Los clientes potenciales no esperan. Si tu despacho no responde en minutos, llaman al siguiente. Nuestra IA maneja el intake las 24 horas, califica el tipo de caso y urgencia, y agenda consultas automáticamente.",
    problem:
      "Legal clients contact multiple firms simultaneously. The first firm to respond professionally and demonstrate they understand the case wins the client. Most firms respond hours later — if at all. That's not a staffing problem. It's a systems problem.",
    problemEs:
      "Los clientes legales contactan múltiples despachos al mismo tiempo. El primer despacho que responde profesionalmente y demuestra que entiende el caso gana al cliente. La mayoría de los despachos responden horas después — si es que lo hacen. Eso no es un problema de personal. Es un problema de sistemas.",
    automationTitle: "Your #1 Automation: 24/7 Intake & Consultation Booking",
    automationTitleEs: "Tu Automatización #1: Intake 24/7 y Agendamiento de Consultas",
    flowEN: [
      { id: "1", icon: "📬", label: "Contact Received", sublabel: "Web, call, missed call", type: "trigger" },
      { id: "2", icon: "⚡", label: "Instant Response", sublabel: "Within 2 minutes", type: "action" },
      { id: "3", icon: "🤖", label: "AI Intake", sublabel: "Case type + urgency scored", type: "process" },
      { id: "4", icon: "📅", label: "Consult Booked", sublabel: "Calendar link sent", type: "action" },
      { id: "5", icon: "⚖️", label: "Case Started", sublabel: "Status updates automated", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "📬", label: "Contacto Recibido", sublabel: "Web, llamada, llamada perdida", type: "trigger" },
      { id: "2", icon: "⚡", label: "Respuesta Inmediata", sublabel: "En 2 minutos", type: "action" },
      { id: "3", icon: "🤖", label: "Intake IA", sublabel: "Tipo de caso + urgencia", type: "process" },
      { id: "4", icon: "📅", label: "Consulta Agendada", sublabel: "Enlace de calendario enviado", type: "action" },
      { id: "5", icon: "⚖️", label: "Caso Iniciado", sublabel: "Actualizaciones automatizadas", type: "output" },
    ],
    items: [
      "24/7 intake system — AI agent qualifies case type and urgency",
      "Immediate response to web form submissions and missed calls",
      "Consultation booking directly from your website",
      "Case status update sequences that reduce inbound inquiry calls",
      "Referral source tracking and attorney referral management",
      "Client satisfaction follow-up after case resolution",
    ],
    itemsEs: [
      "Sistema de captación 24/7 — agente IA califica tipo de caso y urgencia",
      "Respuesta inmediata a formularios web y llamadas perdidas",
      "Agendamiento de consultas directamente desde tu sitio web",
      "Secuencias de actualización de estatus que reducen llamadas de seguimiento",
      "Rastreo de fuentes de referidos y gestión de referencias entre abogados",
      "Seguimiento de satisfacción del cliente al resolver el caso",
    ],
    stats: [
      { value: "< 2 min", label: "Intake response time", labelEs: "Tiempo de respuesta intake" },
      { value: "24/7", label: "Case intake coverage", labelEs: "Cobertura de intake" },
      { value: "0", label: "Missed potential clients", labelEs: "Clientes potenciales perdidos" },
    ],
    metaTitle: "AI Automation for Law Firms | Latin Prime Systems",
    metaDesc:
      "24/7 AI intake, instant response to leads, automated consultation booking, and case status updates for law firms and legal services. Never lose a case to slow response.",
    metaTitleEs: "Automatización IA para Despachos Jurídicos | Latin Prime Systems",
    metaDescEs:
      "Intake IA 24/7, respuesta inmediata a leads, agendamiento automático de consultas y actualizaciones de casos para despachos jurídicos. Nunca pierdas un caso por respuesta lenta.",
    keywords: [
      "AI automation for law firms",
      "legal intake automation",
      "law firm CRM automation",
      "legal consultation booking automation",
      "law firm lead follow-up",
      "attorney AI intake system",
    ],
    keywordsEs: [
      "automatización IA despachos jurídicos",
      "intake legal automatización",
      "CRM despacho jurídico",
      "agendamiento consultas legales automático",
      "seguimiento leads despacho legal",
    ],
    useCases: [
      {
        title: "AI Intake + Conflict Check",
        titleEs: "Intake IA + Revisión de Conflictos",
        desc: "Inbound inquiry triggers a structured intake (case type, parties involved, dates, budget). System runs an automated conflict check against your client database. Clean cases routed to the attorney; conflicts flagged.",
        descEs: "Consulta entrante dispara intake estructurado (tipo de caso, partes involucradas, fechas, presupuesto). Sistema corre revisión de conflictos contra tu base de clientes. Casos limpios al abogado; conflictos marcados.",
        flow: [
          { id: "in1", icon: "📞", label: "New Inquiry", sublabel: "Phone, web, referral", type: "trigger" },
          { id: "in2", icon: "📋", label: "Structured Intake", sublabel: "Case + parties", type: "process" },
          { id: "in3", icon: "🔍", label: "Conflict Check", sublabel: "Against database", type: "process" },
          { id: "in4", icon: "✅", label: "Routed to Attorney", sublabel: "Or flagged", type: "output" },
        ],
        flowEs: [
          { id: "in1", icon: "📞", label: "Nueva Consulta", sublabel: "Tel, web, referido", type: "trigger" },
          { id: "in2", icon: "📋", label: "Intake Estructurado", sublabel: "Caso + partes", type: "process" },
          { id: "in3", icon: "🔍", label: "Conflictos", sublabel: "Vs. base de datos", type: "process" },
          { id: "in4", icon: "✅", label: "Al Abogado", sublabel: "O marcado", type: "output" },
        ],
      },
      {
        title: "Document Request + Status Updates",
        titleEs: "Solicitud de Documentos + Actualizaciones de Caso",
        desc: "Each case stage triggers automated document requests (IDs, contracts, evidence). Clients get auto status updates (filed, pending, scheduled) without your paralegal sending one-off emails.",
        descEs: "Cada etapa del caso dispara solicitudes automáticas de documentos (cédulas, contratos, evidencias). Clientes reciben actualizaciones automáticas (presentado, pendiente, agendado) sin que tu asistente mande emails uno a uno.",
        flow: [
          { id: "ds1", icon: "🚦", label: "Case Stage Change", sublabel: "Trigger fires", type: "trigger" },
          { id: "ds2", icon: "📤", label: "Doc Request", sublabel: "If documents needed", type: "action" },
          { id: "ds3", icon: "📨", label: "Client Status SMS", sublabel: "Auto-sent", type: "action" },
          { id: "ds4", icon: "📁", label: "Case Updated", sublabel: "All parties informed", type: "output" },
        ],
        flowEs: [
          { id: "ds1", icon: "🚦", label: "Cambio de Etapa", sublabel: "Trigger activa", type: "trigger" },
          { id: "ds2", icon: "📤", label: "Solicitud Doc", sublabel: "Si se necesitan", type: "action" },
          { id: "ds3", icon: "📨", label: "SMS Estado", sublabel: "Auto-enviado", type: "action" },
          { id: "ds4", icon: "📁", label: "Caso Actualizado", sublabel: "Partes informadas", type: "output" },
        ],
      },
      {
        title: "Consultation Booking + Retainer Collection",
        titleEs: "Agendamiento de Consulta + Cobro de Retainer",
        desc: "Qualified lead books consultation through the AI. After call, retainer agreement sent via e-sign + invoice. Once paid, full case onboarding workflow kicks off automatically.",
        descEs: "Lead calificado agenda consulta vía IA. Después de la llamada, acuerdo de retainer por firma electrónica + factura. Una vez pagado, arranca el onboarding completo del caso automáticamente.",
        flow: [
          { id: "rt1", icon: "📅", label: "Consultation Booked", sublabel: "Via AI intake", type: "trigger" },
          { id: "rt2", icon: "✍️", label: "Retainer Sent", sublabel: "E-sign + invoice", type: "action" },
          { id: "rt3", icon: "💳", label: "Payment Received", sublabel: "Stripe / wire", type: "process" },
          { id: "rt4", icon: "🚀", label: "Case Onboarding", sublabel: "Auto-fires", type: "output" },
        ],
        flowEs: [
          { id: "rt1", icon: "📅", label: "Consulta Agendada", sublabel: "Vía intake IA", type: "trigger" },
          { id: "rt2", icon: "✍️", label: "Retainer Enviado", sublabel: "Firma + factura", type: "action" },
          { id: "rt3", icon: "💳", label: "Pago Recibido", sublabel: "Stripe / transferencia", type: "process" },
          { id: "rt4", icon: "🚀", label: "Onboarding Caso", sublabel: "Auto-activa", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "Inbound calls go to voicemail; potential clients hire the firm that picked up", beforeEs: "Llamadas van a voicemail; potenciales clientes contratan al despacho que sí contestó", after: "AI intake answers 24/7, structured info captured before attorney takes over", afterEs: "Intake IA contesta 24/7, info estructurada capturada antes de que el abogado tome el caso" },
      { before: "Conflict checks done manually after the consultation, sometimes too late", beforeEs: "Revisión de conflictos hecha manualmente después de la consulta, a veces tarde", after: "Automated conflict check runs at intake; flagged before you book", afterEs: "Revisión de conflictos automática en el intake; marcado antes de agendar" },
      { before: "Clients constantly call asking for case updates", beforeEs: "Clientes llaman constantemente preguntando por actualizaciones del caso", after: "Auto status SMS at every stage; client calls drop dramatically", afterEs: "SMS automático de estado en cada etapa; llamadas de cliente bajan drásticamente" },
      { before: "Retainer collection takes weeks of back-and-forth", beforeEs: "Cobro de retainer toma semanas de ida y vuelta", after: "E-sign + invoice + payment in days, not weeks", afterEs: "Firma + factura + pago en días, no semanas" },
    ],
    faq: [
      {
        q: "Does this integrate with Clio, MyCase, PracticePanther, or Smokeball?",
        qEs: "¿Se integra con Clio, MyCase, PracticePanther o Smokeball?",
        a: "Yes. We sync intake data, case stages, document requests, and status updates with the major legal practice management platforms via API. Your case data stays in your system of record.",
        aEs: "Sí. Sincronizamos datos de intake, etapas, solicitudes de documentos y actualizaciones de estado con las principales plataformas de gestión legal vía API. Tus datos de caso quedan en tu sistema oficial.",
      },
      {
        q: "How does conflict check work without violating privilege?",
        qEs: "¿Cómo funciona la revisión de conflictos sin violar privilegio?",
        a: "Conflict checks are run within your secured database; the AI never sends client information externally. Only flags (clean / flagged) are surfaced. The actual record review stays inside your firm.",
        aEs: "La revisión de conflictos se hace dentro de tu base segura; la IA nunca manda info de clientes afuera. Solo se muestran banderas (limpio / marcado). La revisión real queda dentro del despacho.",
      },
      {
        q: "What about attorney-client privilege and confidentiality?",
        qEs: "¿Y el privilegio abogado-cliente y la confidencialidad?",
        a: "All client communications use encrypted channels. Document storage uses HIPAA-grade encryption. We sign confidentiality agreements with every firm. The AI never accesses privileged communications outside scope.",
        aEs: "Todas las comunicaciones usan canales encriptados. El almacenamiento usa encriptación nivel HIPAA. Firmamos confidencialidad con cada despacho. La IA nunca accede a comunicaciones privilegiadas fuera de alcance.",
      },
      {
        q: "Can the AI handle Spanish-language intakes for immigration / family law?",
        qEs: "¿La IA maneja intakes en español para inmigración / familia?",
        a: "Yes. Bilingual intake is standard. Critical for immigration, family law, personal injury, and any practice serving Spanish-speaking communities in the U.S. or LATAM.",
        aEs: "Sí. Intake bilingüe es estándar. Crítico para inmigración, familia, lesiones personales y cualquier práctica que atienda comunidades hispanohablantes en EE.UU. o LATAM.",
      },
      {
        q: "Does this handle billable hours and trust accounting?",
        qEs: "¿Maneja horas facturables y contabilidad de fideicomiso?",
        a: "Time tracking and trust accounting stay in your existing legal accounting software (Clio Manage, LeanLaw, etc.). The automation layer feeds intake and case data into it without disrupting your billing workflow.",
        aEs: "Time tracking y contabilidad de fideicomiso quedan en tu software legal existente (Clio Manage, LeanLaw, etc.). La capa de automatización alimenta intake y datos de caso sin alterar tu flujo de facturación.",
      },
    ],
    techStack: [
      { name: "Clio / MyCase / PracticePanther", desc: "Two-way sync with practice management", descEs: "Sincronización con gestión de práctica" },
      { name: "DocuSign / Adobe Sign", desc: "Retainer agreements and case documents e-signed", descEs: "Acuerdos de retainer y documentos de caso firmados electrónicamente" },
      { name: "VAPI Voice Agent (legal-aware)", desc: "After-hours intake, never gives legal advice", descEs: "Intake fuera de horario, nunca da consejo legal" },
      { name: "Encrypted Document Portal", desc: "HIPAA-grade upload + storage", descEs: "Subida + almacenamiento nivel HIPAA" },
      { name: "Stripe / IOLTA-aware processors", desc: "Retainer collection with trust account separation", descEs: "Cobro de retainer con separación de cuenta de fideicomiso" },
      { name: "Custom Law Firm Dashboard", desc: "Live: open cases, intake conversion, retainers received, deadlines", descEs: "En vivo: casos abiertos, conversión de intake, retainers recibidos, plazos" },
    ],
  },
  {
    slug: "salons",
    icon: "✂️",
    name: "Salons, Barbershops & Spas",
    nameEs: "Salones, Barberías y Spas",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d257249b6b5f3cdce7.png",
    heroTitle: "AI Automation for Salons, Barbershops & Spas",
    heroTitleEs: "Automatización IA para Salones, Barberías y Spas",
    heroSub:
      "Empty chairs cost you money every day. Automated rebooking reminders, birthday promotions, and loyalty programs keep your calendar full without you or your staff doing anything extra.",
    heroSubEs:
      "Los sillas vacías te cuestan dinero cada día. Los recordatorios de reagendación automatizados, las promociones de cumpleaños y los programas de lealtad mantienen tu agenda llena sin que tú ni tu personal hagan nada extra.",
    problem:
      "Your best clients come in every 4–6 weeks naturally — but only if someone reminds them. Without a system, clients drift to competitors simply because that other salon texted them first. And when a client goes missing for 60 days, the cost of winning them back is 5× the cost of keeping them.",
    problemEs:
      "Tus mejores clientes vienen cada 4–6 semanas naturalmente — pero solo si alguien los recuerda. Sin un sistema, los clientes se van a la competencia simplemente porque ese otro salón les mandó un mensaje primero. Y cuando un cliente desaparece por 60 días, el costo de recuperarlo es 5× el de retenerlo.",
    automationTitle: "Your #1 Automation: Visit → Rebook → Stay Forever",
    automationTitleEs: "Tu Automatización #1: Visita → Reagendación → Clientes para Siempre",
    flowEN: [
      { id: "1", icon: "✂️", label: "Visit Complete", sublabel: "Service logged in CRM", type: "trigger" },
      { id: "2", icon: "📲", label: "Rebooking SMS", sublabel: "Sent 3–4 weeks later", type: "action" },
      { id: "3", icon: "🎂", label: "Birthday Offer", sublabel: "Auto on their birthday", type: "action" },
      { id: "4", icon: "⭐", label: "Review Request", sublabel: "Google + Yelp", type: "action" },
      { id: "5", icon: "👑", label: "Loyal Client", sublabel: "Birthday + VIP treatment", type: "output" },
    ],
    flowES: [
      { id: "1", icon: "✂️", label: "Visita Completa", sublabel: "Servicio registrado en CRM", type: "trigger" },
      { id: "2", icon: "📲", label: "SMS Reagendación", sublabel: "Enviado 3–4 semanas después", type: "action" },
      { id: "3", icon: "🎂", label: "Oferta Cumpleaños", sublabel: "Auto en su cumpleaños", type: "action" },
      { id: "4", icon: "⭐", label: "Solicitud Reseña", sublabel: "Google + Yelp", type: "action" },
      { id: "5", icon: "👑", label: "Cliente Leal", sublabel: "Cumpleaños + trato VIP", type: "output" },
    ],
    items: [
      "Automated rebooking reminder 3–4 weeks after every visit",
      "No-show and late cancellation recovery sequence",
      "Loyalty rewards program — fully automated",
      "Birthday promotions sent to every client automatically",
      "New service launch announcements to your full client base",
      "Review requests sent after every completed appointment",
    ],
    itemsEs: [
      "Recordatorio de reagendación automatizado 3–4 semanas después de cada visita",
      "Secuencia de recuperación para inasistencias y cancelaciones tardías",
      "Programa de lealtad con recompensas — completamente automatizado",
      "Promociones de cumpleaños enviadas a cada cliente automáticamente",
      "Anuncios de nuevos servicios a toda tu base de clientes",
      "Solicitudes de reseña enviadas después de cada cita completada",
    ],
    stats: [
      { value: "3–4 wk", label: "Auto rebooking trigger", labelEs: "Trigger de reagendación" },
      { value: "100%", label: "Clients receive birthday offer", labelEs: "Clientes con oferta de cumpleaños" },
      { value: "0", label: "Clients lost to silence", labelEs: "Clientes perdidos por silencio" },
    ],
    metaTitle: "AI Automation for Salons, Barbershops & Spas | Latin Prime Systems",
    metaDesc:
      "Automated rebooking reminders, birthday promotions, loyalty programs, and review campaigns for salons, barbershops, and spas. Keep your chairs full on autopilot.",
    metaTitleEs: "Automatización IA para Salones, Barberías y Spas | Latin Prime Systems",
    metaDescEs:
      "Recordatorios de reagendación, promociones de cumpleaños, programas de lealtad y campañas de reseñas para salones, barberías y spas. Mantén tu agenda llena en piloto automático.",
    keywords: [
      "AI automation for salons",
      "barbershop rebooking automation",
      "salon client retention automation",
      "spa SMS loyalty program",
      "hair salon review automation",
      "salon birthday promotion automation",
    ],
    keywordsEs: [
      "automatización IA salones",
      "reagendación automática barbería",
      "retención clientes salón automatización",
      "programa lealtad SMS spa",
      "automatización reseñas salón",
    ],
    useCases: [
      {
        title: "Online Booking + Stylist Preference",
        titleEs: "Booking Online + Preferencia de Estilista",
        desc: "Clients book directly via your link or DM. The system remembers their preferred stylist, last service, and color formula — and books them with the same person automatically next time.",
        descEs: "Clientes agendan directo vía tu link o DM. El sistema recuerda su estilista favorito, último servicio y fórmula de color — y los agenda con la misma persona la próxima vez automáticamente.",
        flow: [
          { id: "ob1", icon: "📲", label: "Booking Request", sublabel: "Link or DM", type: "trigger" },
          { id: "ob2", icon: "🧠", label: "Match to Stylist", sublabel: "Last visit history", type: "process" },
          { id: "ob3", icon: "📅", label: "Slot Confirmed", sublabel: "Calendar held", type: "action" },
          { id: "ob4", icon: "💇", label: "Service Done", sublabel: "Re-book scheduled", type: "output" },
        ],
        flowEs: [
          { id: "ob1", icon: "📲", label: "Solicitud Booking", sublabel: "Link o DM", type: "trigger" },
          { id: "ob2", icon: "🧠", label: "Match a Estilista", sublabel: "Historial visitas", type: "process" },
          { id: "ob3", icon: "📅", label: "Slot Confirmado", sublabel: "Calendario reservado", type: "action" },
          { id: "ob4", icon: "💇", label: "Servicio Hecho", sublabel: "Re-booking agendado", type: "output" },
        ],
      },
      {
        title: "No-Show Prevention + Confirmation",
        titleEs: "Prevención de No-Shows + Confirmación",
        desc: "Each appointment fires confirmation immediately, reminder 24h before, and final SMS 2h before. No-shows drop to single digits. Slots that open up auto-fill from waitlist.",
        descEs: "Cada cita dispara confirmación inmediata, recordatorio 24h antes y SMS final 2h antes. No-shows bajan a un dígito. Slots que se abren se llenan desde lista de espera automáticamente.",
        flow: [
          { id: "ns1", icon: "📅", label: "Appointment", sublabel: "Trigger fires", type: "trigger" },
          { id: "ns2", icon: "📲", label: "Confirm + 24h + 2h", sublabel: "Multi-touch", type: "action" },
          { id: "ns3", icon: "❌", label: "Cancel? Slot Frees", sublabel: "Waitlist activated", type: "process" },
          { id: "ns4", icon: "💇", label: "Chair Filled", sublabel: "Revenue saved", type: "output" },
        ],
        flowEs: [
          { id: "ns1", icon: "📅", label: "Cita", sublabel: "Trigger activa", type: "trigger" },
          { id: "ns2", icon: "📲", label: "Confirmar + 24h + 2h", sublabel: "Multi-touch", type: "action" },
          { id: "ns3", icon: "❌", label: "¿Cancela? Slot Libre", sublabel: "Lista espera activa", type: "process" },
          { id: "ns4", icon: "💇", label: "Silla Llena", sublabel: "Ingreso salvado", type: "output" },
        ],
      },
      {
        title: "Birthday + Re-booking Sequence",
        titleEs: "Cumpleaños + Secuencia de Re-booking",
        desc: "Each client gets a birthday SMS with a special offer 7 days before. After every visit, a re-booking nudge fires at the optimal interval (4 weeks for cuts, 6 weeks for color, etc).",
        descEs: "Cada cliente recibe SMS de cumpleaños con oferta especial 7 días antes. Después de cada visita, nudge de re-booking sale en el intervalo óptimo (4 semanas cortes, 6 semanas color, etc).",
        flow: [
          { id: "bb1", icon: "🎂", label: "Birthday in 7 Days", sublabel: "Auto-detected", type: "trigger" },
          { id: "bb2", icon: "🎁", label: "Birthday SMS", sublabel: "With offer", type: "action" },
          { id: "bb3", icon: "📅", label: "Re-book Nudge", sublabel: "Service-specific window", type: "action" },
          { id: "bb4", icon: "💵", label: "Booked + Spending", sublabel: "Visit frequency up", type: "output" },
        ],
        flowEs: [
          { id: "bb1", icon: "🎂", label: "Cumpleaños en 7 Días", sublabel: "Auto-detectado", type: "trigger" },
          { id: "bb2", icon: "🎁", label: "SMS Cumpleaños", sublabel: "Con oferta", type: "action" },
          { id: "bb3", icon: "📅", label: "Nudge Re-booking", sublabel: "Ventana por servicio", type: "action" },
          { id: "bb4", icon: "💵", label: "Reservado + Gasto", sublabel: "Frecuencia sube", type: "output" },
        ],
      },
    ],
    beforeAfter: [
      { before: "You spend hours each day confirming appointments and chasing no-shows", beforeEs: "Gastas horas al día confirmando citas y persiguiendo no-shows", after: "Multi-touch reminders automate confirmation; no-shows drop to single digits", afterEs: "Recordatorios multi-touch automatizan confirmación; no-shows bajan a un dígito" },
      { before: "Clients forget to re-book and drift to the salon next door", beforeEs: "Clientes se olvidan de re-agendar y se van al salón de al lado", after: "Service-specific re-booking nudges fire at the optimal interval", afterEs: "Nudges de re-booking salen en el intervalo óptimo por servicio" },
      { before: "DMs sit unanswered for hours; bookings lost to faster competitors", beforeEs: "DMs sin contestar por horas; reservas se van a competencia más rápida", after: "AI replies to Instagram + WhatsApp DMs in seconds, books the slot", afterEs: "IA contesta DMs de Instagram + WhatsApp en segundos, agenda el slot" },
      { before: "Reviews come in slowly; reputation barely grows", beforeEs: "Reseñas llegan despacio; reputación apenas crece", after: "Every visit triggers a review request; sentiment routed", afterEs: "Cada visita dispara solicitud de reseña; sentimiento ruteado" },
    ],
    faq: [
      {
        q: "Does this integrate with Square Appointments, Booksy, Vagaro, or Mindbody?",
        qEs: "¿Se integra con Square Appointments, Booksy, Vagaro o Mindbody?",
        a: "Yes. We sync appointments, client records, and stylist availability with the major salon booking platforms via API. The automation layer drives reminders, re-booking, and reviews on top.",
        aEs: "Sí. Sincronizamos citas, registros de clientes y disponibilidad de estilistas con las principales plataformas de booking vía API. La capa de automatización maneja recordatorios, re-booking y reseñas encima.",
      },
      {
        q: "Can it handle multiple stylists with different commissions and schedules?",
        qEs: "¿Puede manejar múltiples estilistas con diferentes comisiones y horarios?",
        a: "Yes. Each stylist has their own calendar, services, and commission split. Bookings route to the right person; revenue and tips track per stylist for clean payroll.",
        aEs: "Sí. Cada estilista tiene su calendario, servicios y división de comisiones. Las reservas van a la persona correcta; ingresos y propinas se trackean por estilista para nómina limpia.",
      },
      {
        q: "What about Instagram and WhatsApp DM bookings?",
        qEs: "¿Y las reservas por DM de Instagram y WhatsApp?",
        a: "DMs flow into one inbox. AI replies in seconds, suggests available slots, confirms the booking, and writes it directly to your calendar — without you ever opening the app.",
        aEs: "DMs fluyen a un inbox único. La IA contesta en segundos, sugiere slots disponibles, confirma la reserva y la escribe directo a tu calendario — sin que abras la app.",
      },
      {
        q: "Can clients pay deposits or full services online?",
        qEs: "¿Los clientes pueden pagar depósitos o servicios completos online?",
        a: "Yes. Stripe and Square handle deposits, full payment, and recurring memberships. Deposits dramatically reduce no-shows for high-value services like color or extensions.",
        aEs: "Sí. Stripe y Square manejan depósitos, pago completo y membresías recurrentes. Los depósitos reducen drásticamente los no-shows en servicios de alto valor como color o extensiones.",
      },
      {
        q: "How does it handle Spanish-speaking clients in Latin America or U.S.?",
        qEs: "¿Cómo maneja clientes hispanohablantes en Latinoamérica o EE.UU.?",
        a: "Bilingual from day one across SMS, WhatsApp, voice, and DMs. Language preference stored on first booking. Especially powerful for U.S. Hispanic markets and LATAM (where WhatsApp is the dominant channel).",
        aEs: "Bilingüe desde el día uno por SMS, WhatsApp, voz y DMs. Preferencia de idioma se guarda en la primera reserva. Especialmente poderoso para mercados hispanos en EE.UU. y LATAM (donde WhatsApp es canal dominante).",
      },
    ],
    techStack: [
      { name: "Square / Booksy / Vagaro / Mindbody", desc: "Two-way sync with your booking system", descEs: "Sincronización con tu sistema de booking" },
      { name: "Instagram + WhatsApp Business", desc: "DM bookings handled in seconds, bilingual", descEs: "Reservas por DM manejadas en segundos, bilingüe" },
      { name: "Stripe / Square", desc: "Deposits, full payment, recurring memberships", descEs: "Depósitos, pago completo, membresías recurrentes" },
      { name: "Twilio (SMS)", desc: "Confirmation + reminder + re-booking nudges", descEs: "Confirmación + recordatorio + nudges de re-booking" },
      { name: "Google Reviews API", desc: "Review velocity tracking + sentiment routing", descEs: "Velocidad de reseñas + ruteo de sentimiento" },
      { name: "Custom Salon Dashboard", desc: "Live: chair utilization, no-show rate, re-book rate per stylist", descEs: "En vivo: uso de sillas, tasa no-show, tasa de re-booking por estilista" },
    ],
    featuredQuote: {
      name: "Joshua Plaza",
      role: "Barbershop Owner",
      roleEs: "Dueño de Barbería",
      quote: "I used to spend 2 hours a day just confirming appointments and chasing no-shows. Now the system handles it all automatically. My chair is full every day and I didn't hire anyone.",
      quoteEs: "Antes gastaba 2 horas al día solo confirmando citas y persiguiendo no-shows. Ahora el sistema lo maneja todo automáticamente. Mi silla está llena todos los días y no contraté a nadie.",
      metric: "2 hrs/day saved",
      metricEs: "2 hrs/día ahorradas",
      photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693ca110cfdc2f1c3a6253b3.jpeg",
      initials: "JP",
    },
  },
];

export function getNiche(slug: string): NicheData | undefined {
  return niches.find((n) => n.slug === slug);
}

export function getAllNicheSlugs(): string[] {
  return niches.map((n) => n.slug);
}
