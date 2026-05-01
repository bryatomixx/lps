"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";

type Lang = "en" | "es";

interface WhoWeServeProps {
  lang?: Lang;
}

export default function WhoWeServe({ lang = "en" }: WhoWeServeProps) {
  const t = {
    en: {
      slabel: "Who This Is For",
      splitText: "Any Business That Wants to",
      shinyText: "Operate Smarter",
      regionalNote: "Serving service businesses across the U.S., Colombia, and Mexico. Pick your industry.",
      desc: "This used to be only for companies with million-dollar tech budgets. Not anymore.",
      seeWhat: "See what we can do →",
      dedicatedPage: "Dedicated page ↗",
      visitNicheCta: "View full automation page →",
      visitNicheCtaShort: "View page →",
      andManyMore: "And many more industries",
      whatWeDeploy: "What we deploy for you",
      andMuchMore: "And much more...",
      industries: [
        {
          icon: "🛡️",
          name: "Insurance Agencies",
          slug: "insurance",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae21e91f63b1.png",
          desc: "Agents lose policies every day because no one followed up in time. Most leads go cold before anyone picks up the phone.",
          items: [
            "AI voice agent qualifies leads & books appointments 24/7",
            "Automated renewal reminders via SMS, email & WhatsApp",
            "Referral request sequence sent after every closed policy",
            "CRM pipeline with hot lead alerts & automatic follow-up",
            "Re-engagement campaign for dormant leads (30/60/90 days)",
            "Multi-channel follow-up: call → SMS → email → voicemail drop",
          ],
        },
        {
          icon: "🏠",
          name: "Real Estate Agents & Brokers",
          slug: "real-estate",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae642e1f63b2.png",
          desc: "90% of leads never close — not because they weren't interested, but because no one followed up consistently enough.",
          items: [
            "Instant SMS/email response to new leads — under 2 minutes",
            "AI agent qualifies buyer intent, budget & timeline automatically",
            "Showing scheduler connected to your calendar — zero friction",
            "Long-term nurture for leads not ready yet (6–12 month sequence)",
            "Automatic follow-up after every open house",
            "CRM with full buyer & seller pipelines",
          ],
        },
        {
          icon: "🦷",
          name: "Dental & Healthcare",
          slug: "dental",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2f3d78f630c1a9f7e.png",
          desc: "Every missed appointment is lost revenue. Every unanswered call is a patient who went to the next clinic on the list.",
          items: [
            "24/7 appointment booking — no receptionist needed after hours",
            "Automated reminders that cut no-shows by up to 60%",
            "Recall campaigns for patients who haven't come in 6+ months",
            "Google review requests sent after every appointment",
            "New patient intake form — automated and connected to your system",
            "Insurance verification follow-up automation",
          ],
        },
        {
          icon: "💆",
          name: "Med Spas & Aesthetics",
          slug: "med-spa",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eaee28e1f63b3.png",
          desc: "Clients ghost after their first visit. The money is in the rebooking — and that only happens when the follow-up is automatic.",
          items: [
            "Automated rebooking sequence after every treatment",
            "Upsell sequences for complementary services",
            "Birthday & seasonal promotions sent automatically",
            "VIP client segmentation and personalized outreach",
            "Abandoned booking recovery — follow up within minutes",
            "Review funnel on Google & Yelp on autopilot",
          ],
        },
        {
          icon: "🔧",
          name: "Contractors & Home Services",
          slug: "contractors",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2c2389c1a78536c6c.png",
          desc: "You're on a job site. You miss calls. Those missed calls are your competitors' new clients.",
          items: [
            "Missed call text-back — every missed call gets an immediate SMS",
            "AI voice agent answers inbound calls and books estimates",
            "Automated quote follow-up — stops leads from going cold",
            "Job completion → review request sequence",
            "Seasonal service reminders to past clients",
            "Referral incentive automation",
          ],
        },
        {
          icon: "📊",
          name: "Tax & Accounting Firms",
          slug: "tax-accounting",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28cb259174841bf11.png",
          desc: "Tax season is chaos. Document collection, deadline reminders, client follow-up — all of it can be automated.",
          items: [
            "Document collection sequences — automated reminders until complete",
            "Tax season intake — fully automated new client onboarding",
            "Deadline reminder campaigns for quarterly & annual filings",
            "Upsell sequences for bookkeeping, payroll, and advisory services",
            "Year-round client check-ins that keep relationships warm",
            "Referral campaigns targeting current satisfied clients",
          ],
        },
        {
          icon: "🍽️",
          name: "Restaurants & Local Business",
          slug: "restaurants",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d27fc07c048f9b8b54.png",
          desc: "You compete on Google reviews and repeat visits. Both can be driven by automation.",
          items: [
            "SMS loyalty program — automated points, rewards, and promotions",
            "Review request sequence after every visit or order",
            "Win-back campaigns for customers who haven't returned in 30+ days",
            "Event & special promotion announcements via SMS/email",
            "Online reservation system connected to your operations",
            "Google Business Profile optimized and monitored automatically",
          ],
        },
        {
          icon: "🎯",
          name: "Coaches & Consultants",
          slug: "coaches",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa8406418690.png",
          desc: "You sell outcomes. Your systems should reflect that — capturing, nurturing, and closing leads without you being in the loop for every step.",
          items: [
            "Lead magnet → email sequence → sales call, fully automated",
            "Discovery call booking directly from ads and social media",
            "Proposal follow-up sequence — never leave money on the table",
            "Onboarding automation for new clients",
            "Testimonial collection at key milestone moments",
            "Upsell sequences for premium programs and renewals",
          ],
        },
        {
          icon: "⚖️",
          name: "Law Firms & Legal Services",
          slug: "law-firms",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa6b2e418691.png",
          desc: "Potential clients don't wait. If you don't respond within minutes, they call the next firm on the list.",
          items: [
            "24/7 intake system — AI agent qualifies case type and urgency",
            "Immediate response to web form submissions and missed calls",
            "Consultation booking directly from your website",
            "Case status update sequences that reduce inbound inquiry calls",
            "Referral source tracking and attorney referral management",
            "Client satisfaction follow-up after case resolution",
          ],
        },
        {
          icon: "✂️",
          name: "Salons, Barbershops & Spas",
          slug: "salons",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d257249b6b5f3cdce7.png",
          desc: "Empty chairs cost money. Automated rebooking keeps your calendar full without you doing anything.",
          items: [
            "Automated rebooking reminder 3–4 weeks after every visit",
            "No-show and late cancellation recovery sequence",
            "Loyalty rewards program — fully automated",
            "Birthday promotions sent to every client automatically",
            "New service launch announcements to your full client base",
            "Review requests sent after every completed appointment",
          ],
        },
      ],
      nichesRow1: [
        { icon: "🏦", title: "Mortgage / Lending" },
        { icon: "💰", title: "Financial Services" },
        { icon: "💪", title: "Fitness / Wellness" },
        { icon: "🩺", title: "Chiro / Physical Therapy" },
        { icon: "🚗", title: "Auto Dealership / Services" },
        { icon: "🏢", title: "Property Management" },
        { icon: "🛒", title: "E-commerce / Retail" },
        { icon: "🎓", title: "Education / Training" },
        { icon: "👥", title: "Staffing / HR Services" },
        { icon: "🐾", title: "Veterinary Clinic" },
        { icon: "🤝", title: "Non-Profit / Association" },
        { icon: "🚛", title: "Trucking / Logistics" },
        { icon: "📣", title: "Marketing / Creative Agency" },
        { icon: "✈️", title: "Travel Agency" },
      ],
      nichesRow2: [
        { icon: "🧒", title: "Childcare / Daycare" },
        { icon: "🎉", title: "Events / Entertainment" },
        { icon: "🧹", title: "Cleaning / Janitorial" },
        { icon: "💊", title: "Pharmacy / Compounding" },
        { icon: "👓", title: "Optometry / Vision" },
        { icon: "🏡", title: "Senior Care / Assisted Living" },
        { icon: "🔧", title: "Contractor / Home Services" },
        { icon: "📊", title: "Tax / Accounting" },
        { icon: "⚖️", title: "Law Firm / Legal" },
        { icon: "🎯", title: "Coach / Consultant" },
        { icon: "🍽️", title: "Restaurant / Local Business" },
        { icon: "✂️", title: "Salon / Barbershop / Spa" },
        { icon: "💆", title: "Med Spa / Aesthetics" },
        { icon: "💼", title: "Any Service Business" },
      ],
    },
    es: {
      slabel: "Para Quién Es Esto",
      splitText: "Cualquier Negocio que Quiera",
      shinyText: "Operar con Más Inteligencia",
      regionalNote: "Atendemos negocios de servicios en Estados Unidos, Colombia y México. Selecciona tu industria.",
      desc: "Antes esto era solo para empresas con presupuestos tecnológicos millonarios. Ya no.",
      seeWhat: "Ver qué podemos hacer →",
      dedicatedPage: "Página dedicada ↗",
      visitNicheCta: "Ver página completa de automatización →",
      visitNicheCtaShort: "Ver página →",
      andManyMore: "Y muchas industrias más",
      whatWeDeploy: "Lo que implementamos para ti",
      andMuchMore: "Y mucho más...",
      industries: [
        {
          icon: "🛡️",
          name: "Agencias de Seguros",
          slug: "insurance",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae21e91f63b1.png",
          desc: "Los agentes pierden pólizas todos los días porque nadie dio seguimiento a tiempo. La mayoría de los prospectos se enfrían antes de que alguien levante el teléfono.",
          items: [
            "Agente de voz AI califica prospectos y agenda citas 24/7",
            "Recordatorios automáticos de renovación por SMS, email y WhatsApp",
            "Secuencia de solicitud de referidos después de cada póliza cerrada",
            "Pipeline en CRM con alertas de prospectos calientes y seguimiento automático",
            "Campaña de reactivación para prospectos inactivos (30/60/90 días)",
            "Seguimiento multicanal: llamada → SMS → email → mensaje de voz",
          ],
        },
        {
          icon: "🏠",
          name: "Agentes y Brokers Inmobiliarios",
          slug: "real-estate",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae642e1f63b2.png",
          desc: "El 90% de los prospectos nunca cierran — no porque no estuvieran interesados, sino porque nadie les dio seguimiento con la constancia necesaria.",
          items: [
            "Respuesta instantánea por SMS/email a nuevos prospectos — en menos de 2 minutos",
            "AI califica intención del comprador, presupuesto y plazo automáticamente",
            "Agendador de visitas conectado a tu calendario — sin fricción",
            "Nutrición a largo plazo para prospectos que aún no están listos (secuencia de 6–12 meses)",
            "Seguimiento automático después de cada open house",
            "CRM con pipelines completos para compradores y vendedores",
          ],
        },
        {
          icon: "🦷",
          name: "Clínicas Dentales y de Salud",
          slug: "dental",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2f3d78f630c1a9f7e.png",
          desc: "Cada cita perdida es ingreso que se va. Cada llamada sin respuesta es un paciente que fue a la clínica de al lado.",
          items: [
            "Agenda de citas 24/7 — sin recepcionista fuera de horario",
            "Recordatorios automáticos que reducen ausencias hasta en un 60%",
            "Campañas de reactivación para pacientes que no han venido en 6+ meses",
            "Solicitudes de reseña en Google enviadas después de cada cita",
            "Formulario de ingreso de nuevos pacientes — automatizado y conectado a tu sistema",
            "Automatización de seguimiento para verificación de seguro",
          ],
        },
        {
          icon: "💆",
          name: "Med Spas y Estética",
          slug: "med-spa",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eaee28e1f63b3.png",
          desc: "Los clientes desaparecen después de su primera visita. El dinero está en la recompra — y eso solo pasa cuando el seguimiento es automático.",
          items: [
            "Secuencia automática de reagendado después de cada tratamiento",
            "Secuencias de upsell para servicios complementarios",
            "Promociones de cumpleaños y temporadas enviadas automáticamente",
            "Segmentación de clientes VIP y comunicación personalizada",
            "Recuperación de reservas abandonadas — seguimiento en minutos",
            "Embudo de reseñas en Google y Yelp en piloto automático",
          ],
        },
        {
          icon: "🔧",
          name: "Contratistas y Servicios al Hogar",
          slug: "contractors",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2c2389c1a78536c6c.png",
          desc: "Estás en obra. Pierdes llamadas. Esas llamadas perdidas son los nuevos clientes de tu competencia.",
          items: [
            "Respuesta por SMS a llamadas perdidas — cada llamada recibe un mensaje inmediato",
            "Agente de voz AI atiende llamadas entrantes y agenda presupuestos",
            "Seguimiento automático de cotizaciones — evita que los prospectos se enfríen",
            "Secuencia de solicitud de reseña al terminar el trabajo",
            "Recordatorios de servicios estacionales a clientes anteriores",
            "Automatización de programa de referidos",
          ],
        },
        {
          icon: "📊",
          name: "Despachos Fiscales y Contables",
          slug: "tax-accounting",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28cb259174841bf11.png",
          desc: "La temporada de impuestos es caos. La recopilación de documentos, recordatorios de plazos, seguimiento a clientes — todo se puede automatizar.",
          items: [
            "Secuencias de recopilación de documentos — recordatorios automáticos hasta que estén completos",
            "Ingreso en temporada fiscal — incorporación automatizada de nuevos clientes",
            "Campañas de recordatorio de plazos para declaraciones trimestrales y anuales",
            "Secuencias de upsell para contabilidad, nómina y servicios de consultoría",
            "Check-ins anuales con clientes que mantienen la relación activa",
            "Campañas de referidos dirigidas a clientes satisfechos actuales",
          ],
        },
        {
          icon: "🍽️",
          name: "Restaurantes y Negocios Locales",
          slug: "restaurants",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d27fc07c048f9b8b54.png",
          desc: "Compites por reseñas en Google y visitas recurrentes. Ambas se pueden impulsar con automatización.",
          items: [
            "Programa de lealtad por SMS — puntos, recompensas y promociones automatizadas",
            "Secuencia de solicitud de reseña después de cada visita o pedido",
            "Campañas de recuperación para clientes que no han regresado en 30+ días",
            "Anuncios de eventos y promociones especiales por SMS/email",
            "Sistema de reservas en línea conectado a tus operaciones",
            "Perfil de Google Business optimizado y monitoreado automáticamente",
          ],
        },
        {
          icon: "🎯",
          name: "Coaches y Consultores",
          slug: "coaches",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa8406418690.png",
          desc: "Vendes resultados. Tus sistemas deben reflejar eso — captando, nutriendo y cerrando prospectos sin que tengas que estar en cada paso.",
          items: [
            "Lead magnet → secuencia de emails → llamada de ventas, completamente automatizado",
            "Agenda de llamadas de descubrimiento directamente desde anuncios y redes sociales",
            "Secuencia de seguimiento de propuestas — no dejes dinero sobre la mesa",
            "Automatización de incorporación para nuevos clientes",
            "Recopilación de testimonios en momentos clave del proceso",
            "Secuencias de upsell para programas premium y renovaciones",
          ],
        },
        {
          icon: "⚖️",
          name: "Despachos Jurídicos y Legales",
          slug: "law-firms",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa6b2e418691.png",
          desc: "Los clientes potenciales no esperan. Si no respondes en minutos, llaman al siguiente despacho de la lista.",
          items: [
            "Sistema de intake 24/7 — AI califica tipo de caso y urgencia",
            "Respuesta inmediata a formularios web y llamadas perdidas",
            "Agenda de consultas directamente desde tu sitio web",
            "Secuencias de actualización de caso que reducen llamadas de seguimiento",
            "Rastreo de fuentes de referidos y gestión de referidos entre abogados",
            "Seguimiento de satisfacción del cliente después de resolver el caso",
          ],
        },
        {
          icon: "✂️",
          name: "Salones, Barberías y Spas",
          slug: "salons",
          img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d257249b6b5f3cdce7.png",
          desc: "Las sillas vacías cuestan dinero. El reagendado automático mantiene tu agenda llena sin que hagas nada.",
          items: [
            "Recordatorio automático de reagendado 3–4 semanas después de cada visita",
            "Secuencia de recuperación para ausencias y cancelaciones tardías",
            "Programa de recompensas por lealtad — completamente automatizado",
            "Promociones de cumpleaños enviadas a cada cliente automáticamente",
            "Anuncios de nuevos servicios a toda tu base de clientes",
            "Solicitudes de reseña enviadas después de cada cita completada",
          ],
        },
      ],
      nichesRow1: [
        { icon: "🏦", title: "Hipotecas / Préstamos" },
        { icon: "💰", title: "Servicios Financieros" },
        { icon: "💪", title: "Fitness / Bienestar" },
        { icon: "🩺", title: "Quiropráctica / Fisioterapia" },
        { icon: "🚗", title: "Agencias / Talleres Automotrices" },
        { icon: "🏢", title: "Administración de Propiedades" },
        { icon: "🛒", title: "E-commerce / Retail" },
        { icon: "🎓", title: "Educación / Capacitación" },
        { icon: "👥", title: "Recursos Humanos / Reclutamiento" },
        { icon: "🐾", title: "Clínica Veterinaria" },
        { icon: "🤝", title: "Organizaciones sin Fines de Lucro" },
        { icon: "🚛", title: "Transporte / Logística" },
        { icon: "📣", title: "Agencia de Marketing / Creativa" },
        { icon: "✈️", title: "Agencia de Viajes" },
      ],
      nichesRow2: [
        { icon: "🧒", title: "Guarderías / Cuidado Infantil" },
        { icon: "🎉", title: "Eventos / Entretenimiento" },
        { icon: "🧹", title: "Limpieza / Conserjería" },
        { icon: "💊", title: "Farmacia / Compounding" },
        { icon: "👓", title: "Optometría / Visión" },
        { icon: "🏡", title: "Cuidado de Adultos Mayores" },
        { icon: "🔧", title: "Contratista / Servicios al Hogar" },
        { icon: "📊", title: "Fiscal / Contabilidad" },
        { icon: "⚖️", title: "Despacho Jurídico / Legal" },
        { icon: "🎯", title: "Coach / Consultor" },
        { icon: "🍽️", title: "Restaurante / Negocio Local" },
        { icon: "✂️", title: "Salón / Barbería / Spa" },
        { icon: "💆", title: "Med Spa / Estética" },
        { icon: "💼", title: "Cualquier Negocio de Servicios" },
      ],
    },
  }[lang];

  const [activeModal, setActiveModal] = useState<number | null>(null);
  const activeIndustry = activeModal !== null ? t.industries[activeModal] : null;

  return (
    <>
      <section
        id="who"
        className="section-wrap"
        style={{ background: "var(--surface)" }}
      >
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{t.slabel}</div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
            >
              <SplitText text={t.splitText} delay={0.05} />{" "}
              <ShinyText text={t.shinyText} speed={3.5} />
            </h2>
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.5,
                marginTop: 16,
                marginBottom: 12,
                maxWidth: 720,
              }}
            >
              {t.regionalNote}
            </p>
            <p className="section-desc">
              {t.desc}
            </p>
          </SectionReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {t.industries.map((ind, i) => (
              <SectionReveal key={i} delay={i * 0.06} variant="scale" style={{ height: "100%" }}>

                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "28px 22px",
                    cursor: "pointer",
                    transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    boxSizing: "border-box",
                    boxShadow: "0 1px 4px rgba(15,34,64,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(180,148,93,0.4)";
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 8px 32px rgba(15,34,64,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 1px 4px rgba(15,34,64,0.04)";
                  }}
                  onClick={() => setActiveModal(i)}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{ind.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      lineHeight: 1.4,
                      marginBottom: 10,
                      color: "var(--text)",
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {ind.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        color: "var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      {t.seeWhat}
                    </span>
                    <Link
                      href={lang === "es" ? `/es/${ind.slug}` : `/${ind.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        padding: "9px 14px",
                        background: "rgba(212,165,58,0.1)",
                        border: "1px solid rgba(212,165,58,0.35)",
                        borderRadius: 6,
                        color: "var(--gold)",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.72rem",
                        letterSpacing: "0.02em",
                        textDecoration: "none",
                        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "var(--gold)";
                        el.style.color = "white";
                        el.style.borderColor = "var(--gold)";
                        el.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "rgba(212,165,58,0.1)";
                        el.style.color = "var(--gold)";
                        el.style.borderColor = "rgba(212,165,58,0.35)";
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {t.visitNicheCtaShort}
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

        </div>
      </section>

      {/* Niche carousel — full width, outside section-inner */}
      <div style={{ background: "var(--surface)", paddingBottom: 64, overflow: "hidden" }}>
        <div style={{ textAlign: "center", padding: "0 0 32px" }}>
          <GradientText
            text={t.andManyMore}
            speed={5}
            from="#1A5CA8"
            mid="#D4A53A"
            to="#2B7FE0"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              letterSpacing: "-0.02em",
            }}
          />
        </div>

        {/* Row 1 — left */}
        <div style={{ overflow: "hidden", marginBottom: 10 }}>
          <div
            style={{ display: "flex", width: "max-content", animation: "ticker-scroll 35s linear infinite" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
          >
            {[...t.nichesRow1, ...t.nichesRow1].map((n, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#FFFFFF", border: "1px solid var(--border)",
                  borderRadius: 100, padding: "8px 20px", marginRight: 10,
                  whiteSpace: "nowrap", flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>{n.icon}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "var(--text-muted)" }}>{n.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{ display: "flex", width: "max-content", animation: "ticker-scroll 42s linear infinite reverse" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
          >
            {[...t.nichesRow2, ...t.nichesRow2].map((n, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#FFFFFF", border: "1px solid var(--border)",
                  borderRadius: 100, padding: "8px 20px", marginRight: 10,
                  whiteSpace: "nowrap", flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>{n.icon}</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "var(--text-muted)" }}>{n.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModal !== null && activeIndustry && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(15,34,64,0.65)",
                zIndex: 200,
                backdropFilter: "blur(8px)",
              }}
            />
            {/* Centering wrapper */}
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 201,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                pointerEvents: "none",
              }}
            >
              {/* Modal box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "relative",
                  pointerEvents: "all",
                  width: "min(90vw, 820px)",
                  maxHeight: "85vh",
                  background: "#FFFFFF",
                  border: "1px solid var(--border2)",
                  borderRadius: 12,
                  display: "grid",
                  gridTemplateColumns: "1fr 1.4fr",
                  overflow: "hidden",
                }}
                className="modal-grid"
              >
                {/* Left — Image */}
                <div
                  style={{
                    position: "relative",
                    minHeight: 300,
                    background: "var(--surface)",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    src={activeIndustry.img}
                    alt={activeIndustry.name}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 0.85, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(2,5,8,0.6) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "#B4945D",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: 4 }}>{activeIndustry.icon}</div>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "white",
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {activeIndustry.name}
                    </h3>
                  </div>
                </div>

                {/* Right — Content */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveModal(null)}
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      zIndex: 2,
                      background: "var(--surface)",
                      border: "1px solid var(--border2)",
                      borderRadius: 6,
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      fontSize: "1rem",
                      transition: "color 0.2s",
                    }}
                    aria-label="Close"
                  >
                    ×
                  </button>

                  {/* Scrollable content */}
                  <div style={{ flex: 1, overflowY: "auto", padding: "32px 28px 16px" }}>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 16,
                      }}
                    >
                      {t.whatWeDeploy}
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                      {activeIndustry.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          style={{
                            display: "flex",
                            gap: 10,
                            fontSize: "0.87rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }}>✓</span>
                          {item}
                        </motion.li>
                      ))}
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: activeIndustry.items.length * 0.06 }}
                        style={{
                          fontSize: "0.8rem",
                          color: "rgba(180,148,93,0.7)",
                          fontStyle: "italic",
                          paddingLeft: 22,
                        }}
                      >
                        {t.andMuchMore}
                      </motion.li>
                    </ul>
                  </div>

                  {/* Sticky footer — nav + CTA */}
                  <div
                    style={{
                      padding: "16px 28px 24px",
                      borderTop: "1px solid var(--border)",
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      flexWrap: "wrap",
                      background: "#FFFFFF",
                    }}
                  >
                    {activeModal > 0 && (
                      <button
                        onClick={() => setActiveModal(activeModal - 1)}
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border2)",
                          borderRadius: 6,
                          padding: "8px 14px",
                          cursor: "pointer",
                          color: "var(--text-muted)",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        ← Prev
                      </button>
                    )}
                    {activeModal < t.industries.length - 1 && (
                      <button
                        onClick={() => setActiveModal(activeModal + 1)}
                        style={{
                          background: "var(--surface)",
                          border: "1px solid var(--border2)",
                          borderRadius: 6,
                          padding: "8px 14px",
                          cursor: "pointer",
                          color: "var(--text-muted)",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Next →
                      </button>
                    )}

                    {/* Primary CTA — go to dedicated niche page */}
                    <Link
                      href={lang === "es" ? `/es/${activeIndustry.slug}` : `/${activeIndustry.slug}`}
                      style={{
                        marginLeft: "auto",
                        background: "var(--blue)",
                        color: "white",
                        padding: "10px 22px",
                        borderRadius: 6,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        letterSpacing: "0.01em",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                        boxShadow: "0 2px 10px rgba(26,92,168,0.25)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "var(--gold)";
                        el.style.transform = "translateY(-1px)";
                        el.style.boxShadow = "0 6px 20px rgba(212,165,58,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "var(--blue)";
                        el.style.transform = "translateY(0)";
                        el.style.boxShadow = "0 2px 10px rgba(26,92,168,0.25)";
                      }}
                    >
                      {t.visitNicheCta}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
