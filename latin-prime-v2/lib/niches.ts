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
  },
];

export function getNiche(slug: string): NicheData | undefined {
  return niches.find((n) => n.slug === slug);
}

export function getAllNicheSlugs(): string[] {
  return niches.map((n) => n.slug);
}
