"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../SectionReveal";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";
const STARTER_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/692e34bda611824d7675e7f0";
const PRO_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/69cc6409c6a0e600f4d06bd2";
const GROWTH_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/692e3647d8c1a8022cff08f1";

type Currency = "USD" | "COP" | "MXN";

const RATES: Record<Currency, number> = { USD: 1, COP: 4200, MXN: 17.5 };
const CURRENCY_LABELS: Record<Currency, string> = {
  USD: "🇺🇸 USD",
  COP: "🇨🇴 COP",
  MXN: "🇲🇽 MXN",
};

function formatPrice(usd: number | null, currency: Currency): string {
  if (usd === null) return "Personalizado";
  if (currency === "USD") return `$${usd.toLocaleString("en-US")}`;
  const converted = Math.round(usd * RATES[currency]);
  if (currency === "COP") return `$${converted.toLocaleString("es-CO")}`;
  return `$${converted.toLocaleString("es-MX")}`;
}

function formatSetup(usd: number | null, currency: Currency, label: string): string {
  if (usd === null) return label;
  if (currency === "USD") return `+ $${usd.toLocaleString("en-US")} cuota de implementación única`;
  const converted = Math.round(usd * RATES[currency]);
  const sym = currency === "COP" ? converted.toLocaleString("es-CO") : converted.toLocaleString("es-MX");
  return `+ $${sym} ${currency} cuota de implementación única`;
}

interface Plan {
  tier: string;
  tagline: string;
  priceUSD: number | null;
  setupUSD: number | null;
  setupLabel: string;
  priceSub: string;
  ideal: string;
  featured: boolean;
  badge?: string;
  guarantee: string;
  cta: string;
  ctaHref: string;
  features: Array<string | { section: string }>;
}

const plans: Plan[] = [
  {
    tier: "Starter",
    tagline:
      "Todo lo que necesitas para capturar leads y automatizar el seguimiento desde el día 1 — sin contratar a nadie.",
    priceUSD: 497,
    setupUSD: 997,
    setupLabel: "+ $997 cuota de implementación única",
    priceSub: "/mes",
    ideal:
      "Ideal para: Negocios locales, operadores independientes y proveedores de servicios que dan su primer paso en la automatización.",
    featured: false,
    guarantee:
      "🛡️ Si tu sistema no está activo y funcionando en 30 días, te devolvemos el mes.",
    cta: "Comenzar",
    ctaHref: STARTER_PAYMENT,
    features: [
      "Sitio web profesional — diseñado, conectado a tu CRM, listo en 7 días",
      "Hosting y mantenimiento del sitio — sin costos adicionales",
      "CRM con hasta 2 pipelines — sabe exactamente dónde está cada cliente",
      "Widget de chat IA en tu sitio — captura leads y agenda citas mientras duermes",
      "Sistema de reservas online — los clientes se agendan solos, sin llamadas de ida y vuelta",
      "Seguimiento automático por email + SMS — nunca más persigas un lead manualmente",
      "Secuencia de bienvenida automática — cada nuevo lead recibe tu mensaje en minutos",
      "1 automatización personalizada para tu problema #1 — tú nos dices, nosotros la construimos",
      "Configuración de Google Business Profile — aparece antes que tu competencia en Google",
      "Reporte mensual de desempeño — ve qué funciona sin construir nada",
      "Soporte por email — respuesta en 24h",
    ],
  },
  {
    tier: "Pro",
    tagline:
      "Automatización multicanal y flujos ilimitados — tus leads capturados en todas partes, tu operación funcionando sola.",
    priceUSD: 997,
    setupUSD: 1497,
    setupLabel: "+ $1,497 cuota de implementación única",
    priceSub: "/mes",
    ideal:
      "Ideal para: Negocios en crecimiento listos para automatizar en todos los canales y dejar de depender del seguimiento manual.",
    featured: false,
    badge: "Mejor Valor",
    guarantee:
      "🛡️ Si en 45 días no ves una mejora medible en respuesta a leads o tiempo ahorrado, trabajamos gratis hasta que la veas.",
    cta: "Comenzar",
    ctaHref: PRO_PAYMENT,
    features: [
      "Todo en Starter — pipelines y flujos ilimitados",
      { section: "── AUTOMATIZACIONES ILIMITADAS ──" },
      "Automatizaciones personalizadas ilimitadas — todo tu back-office manejado automáticamente",
      "Chat IA avanzado — conectado al CRM, califica leads y agenda citas",
      "Pipeline de ventas con nurturing automático — el lead frío de hoy es el cliente de mañana",
      "Integración de calendario + recordatorios automáticos — cero inasistencias",
      "Reactivación de clientes dormidos — recupera ingresos que están en tu base de datos",
      { section: "── MULTICANAL ──" },
      "Facebook Lead Ads → CRM — cada lead entra automáticamente, cero trabajo manual",
      "DMs automatizados de Instagram — convierte comentarios y mensajes en leads calificados",
      "API de WhatsApp Business — llega a los clientes donde más responden",
      "Embudo de ventas completo — landing page, formulario, seguimiento, todo conectado",
      { section: "── REPUTACIÓN Y PAGOS ──" },
      "Gestión de reputación — solicitudes de reseñas automáticas, domina Google Business",
      "Stripe integrado — cobra depósitos, pagos y suscripciones desde el mismo sistema",
      { section: "── SOPORTE ──" },
      "Soporte prioritario — respuesta en 8h",
      "Reporte de desempeño quincenal — ve exactamente qué está convirtiendo",
    ],
  },
  {
    tier: "Growth",
    tagline:
      "Tu operación completa funcionando sola — con una IA que atiende cada llamada, cierra leads y trabaja 24/7.",
    priceUSD: 1497,
    setupUSD: 1997,
    setupLabel: "+ $1,997 cuota de implementación única",
    priceSub: "/mes",
    ideal:
      "Ideal para: Negocios serios en nunca perder un lead — donde un agente de voz IA atiende cada llamada mientras tú te enfocas en cerrar.",
    featured: true,
    badge: "Más Popular",
    guarantee:
      "🛡️ Si en 60 días no ves un aumento medible en leads o tiempo ahorrado, trabajamos gratis hasta que lo veas.",
    cta: "Comenzar",
    ctaHref: GROWTH_PAYMENT,
    features: [
      "Todo en Pro — como base de automatización",
      { section: "── AGENTE DE VOZ IA ──" },
      "Atiende cada llamada entrante 24/7 — nunca pierdas un lead por no contestar",
      "Califica leads con preguntas personalizadas — solo prospectos listos llegan a ti",
      "Agenda citas directamente en tu calendario — sin llamadas de confirmación",
      "Llama automáticamente a nuevos leads — el primero en contactar gana, y ese eres tú",
      { section: "── CONTENIDO IA ──" },
      "Emails de ventas generados por IA — secuencias que convierten, escritas automáticamente",
      "Copia de seguimiento personalizada — cada lead recibe el mensaje correcto en el momento correcto",
      { section: "── REPORTES ──" },
      "Panel de reportes automático — ve exactamente cuánto genera cada canal",
      { section: "── SOPORTE ──" },
      "Soporte prioritario — respuesta en 4h",
      "Llamada estratégica mensual — revisamos números y optimizamos juntos",
    ],
  },
  {
    tier: "Enterprise",
    tagline: "Infraestructura completa, construida exactamente para tu operación.",
    priceUSD: null,
    setupUSD: null,
    setupLabel: "Cotizado según tus necesidades específicas",
    priceSub: "",
    ideal:
      "Ideal para: Agencias, negocios con múltiples ubicaciones y empresas con operaciones complejas que necesitan infraestructura 100% personalizada.",
    featured: false,
    guarantee:
      "🛡️ ROI documentado en 90 días — o seguimos trabajando sin costo adicional hasta que lo veas.",
    cta: "Hablemos de Tu Negocio",
    ctaHref: BOOKING_URL,
    features: [
      "Todo en Growth — como base operativa",
      { section: "── AUTOMATIZACIÓN PERSONALIZADA ──" },
      "Flujos de trabajo 100% personalizados — construimos exactamente lo que tu negocio necesita",
      "Agente IA entrenado en tus datos — responde como tu mejor empleado, a escala ilimitada",
      "Onboarding automatizado de clientes — cada nuevo cliente recibe la misma experiencia perfecta",
      "Sistema de referidos automatizado — tus clientes actuales te traen nuevos por sí solos",
      { section: "── INFRAESTRUCTURA AVANZADA ──" },
      "Conecta cualquier sistema — CRM, ERP, POS, software heredado, lo que ya uses",
      "Infraestructura multi-ubicación / multi-marca — un sistema controlando todas tus operaciones",
      "Contenido IA a escala — publicaciones, emails y copy de ventas generados automáticamente",
      { section: "── PARA AGENCIAS ──" },
      "White-label completo — ofrece todo esto bajo tu propia marca",
      "Acceso a API + integraciones personalizadas — sin límites técnicos",
      { section: "── GESTIÓN Y SOPORTE ──" },
      "Account manager dedicado — una persona responsable de tus resultados",
      "Llamadas semanales + soporte en tiempo real por Slack",
      "Auditoría completa trimestral — identificamos oportunidades que estás dejando sobre la mesa",
      "SLA personalizado — sabes exactamente qué esperar y cuándo",
    ],
  },
];

function FeatureItem({ feat }: { feat: string | { section: string } }) {
  if (typeof feat === "object") {
    return (
      <li style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--text-dim)", padding: "10px 0 4px", marginTop: 4, listStyle: "none" }}>
        {feat.section}
      </li>
    );
  }
  return (
    <li style={{ display: "flex", gap: 10, fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.6, listStyle: "none" }}>
      <span style={{ color: "var(--blue)", flexShrink: 0, marginTop: 2 }}>✓</span>
      {feat}
    </li>
  );
}

export default function Pricing() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currency, setCurrency] = useState<Currency>("USD");

  return (
    <section id="pricing" className="section-wrap" style={{ background: "var(--bg)" }}>
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">Inversión</div>
          <h2 className="section-title" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            Infraestructura Empresarial{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              para Todo Presupuesto
            </em>
          </h2>
          <p className="section-desc">
            Elige el nivel que se adapta a donde está tu negocio hoy — y escala conforme creces.
            Cada plan incluye implementación, configuración y soporte continuo.
          </p>

          {/* Currency toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>
              Moneda:
            </span>
            <div style={{ display: "flex", border: "1px solid var(--border2)", overflow: "hidden" }}>
              {(["USD", "COP", "MXN"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  style={{
                    background: currency === c ? "var(--blue)" : "transparent",
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
                ≈ Aproximado · USD es la moneda de facturación
              </span>
            )}
          </div>
        </SectionReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2, alignItems: "stretch" }}>
          {plans.map((plan, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  background: plan.featured ? "linear-gradient(160deg, #0a1628 0%, #080d14 60%)" : "var(--surface2)",
                  border: plan.featured ? "1px solid rgba(26,127,212,0.55)" : "1px solid var(--border)",
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: plan.featured ? "0 0 80px rgba(26,127,212,0.22), 0 20px 60px rgba(26,127,212,0.1), inset 0 0 80px rgba(26,127,212,0.04)" : "none",
                  transform: plan.featured ? "scale(1.02)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.featured ? "rgba(26,127,212,0.8)" : "rgba(26,127,212,0.3)";
                  el.style.boxShadow = plan.featured ? "0 0 100px rgba(26,127,212,0.35), 0 20px 60px rgba(26,127,212,0.18)" : "0 8px 40px rgba(26,127,212,0.1)";
                  el.style.transform = plan.featured ? "scale(1.03)" : "scale(1.01)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.featured ? "rgba(26,127,212,0.55)" : "var(--border)";
                  el.style.boxShadow = plan.featured ? "0 0 80px rgba(26,127,212,0.22), 0 20px 60px rgba(26,127,212,0.1), inset 0 0 80px rgba(26,127,212,0.04)" : "none";
                  el.style.transform = plan.featured ? "scale(1.02)" : "scale(1)";
                }}
              >
                {plan.featured ? (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--blue), var(--blue-bright), var(--gold-bright))", boxShadow: "0 0 20px rgba(26,127,212,0.8)" }} />
                ) : (
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, var(--border2), transparent)" }} />
                )}

                {plan.badge && (
                  <div style={{ display: "inline-block", background: plan.featured ? "linear-gradient(135deg, var(--blue), var(--blue-bright))" : "var(--gold)", color: "white", fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 12px", fontWeight: 600, marginBottom: 16, boxShadow: plan.featured ? "0 0 16px rgba(26,127,212,0.5)" : "none" }}>
                    {plan.badge}
                  </div>
                )}

                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--text)", marginBottom: 8 }}>
                  {plan.tier}
                </h3>

                <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 24, minHeight: 60 }}>
                  {plan.tagline}
                </p>

                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: plan.priceUSD && currency !== "USD" ? "2rem" : "2.6rem", color: plan.featured ? "var(--blue)" : "var(--text)", letterSpacing: "-0.03em", transition: "font-size 0.2s" }}>
                    {formatPrice(plan.priceUSD, currency)}
                  </span>
                  {plan.priceSub && (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      {plan.priceSub}
                      {currency !== "USD" && <span style={{ fontSize: "0.7rem", marginLeft: 4 }}>{currency}</span>}
                    </span>
                  )}
                </div>

                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--text-dim)", marginBottom: 6 }}>
                  {formatSetup(plan.setupUSD, currency, plan.setupLabel)}
                </div>

                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid var(--border)", lineHeight: 1.6 }}>
                  {plan.ideal}
                </div>

                <ul style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16, maxHeight: expanded === i ? "none" : 240, overflow: "hidden", position: "relative", flex: 1 }}>
                  {plan.features.slice(0, expanded === i ? undefined : 6).map((feat, j) => (
                    <FeatureItem key={j} feat={feat} />
                  ))}
                </ul>

                {plan.features.length > 6 && (
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "var(--blue)", fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 0", marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}
                  >
                    {expanded === i
                      ? "↑ Ver menos"
                      : `↓ Ver las ${plan.features.filter((f) => typeof f === "string").length} funciones`}
                  </button>
                )}

                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.06em", color: "var(--text-dim)", marginBottom: 24, lineHeight: 1.6, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                  {plan.guarantee}
                </div>

                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", textAlign: "center", padding: "14px 24px", background: plan.featured ? "var(--blue)" : "transparent", border: plan.featured ? "1px solid var(--blue)" : "1px solid var(--border2)", color: plan.featured ? "white" : "var(--text)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none", transition: "all 0.25s", marginTop: "auto" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.featured) { el.style.background = "#2290e8"; el.style.boxShadow = "0 8px 25px rgba(26,127,212,0.4)"; }
                    else { el.style.borderColor = "rgba(255,255,255,0.25)"; el.style.background = "rgba(255,255,255,0.04)"; }
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.featured) { el.style.background = "var(--blue)"; el.style.boxShadow = "none"; }
                    else { el.style.borderColor = "var(--border2)"; el.style.background = "transparent"; }
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--text-dim)", textAlign: "center", marginTop: 36, lineHeight: 1.7 }}>
            Todos los planes incluyen una llamada estratégica gratuita antes de comprometerte. Sin contratos a largo plazo — cancela cuando quieras. La cuota de implementación se paga una sola vez al inicio — cubre la construcción completa del sistema, configuración y lanzamiento.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
