"use client";
import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

interface SolutionsProps {
  lang?: Lang;
}

export default function Solutions({ lang = "en" }: SolutionsProps) {
  const t = {
    en: {
      slabel: "What We Build",
      splitText: "Systems That Run",
      shinyText: "While You Focus on Growth.",
      desc: "Every solution we deploy is custom-built for your business — not a template, not a plugin. Real infrastructure that captures leads, automates follow-up, and reduces owner dependency from day one.",
      bridgeLabel: "What your business looks like after implementation",
      outcomes: [
        {
          badge: "Your business on one screen",
          title: "A Command Center Built for You",
          body: "Real-time dashboards with every KPI that matters — leads, revenue, inventory, dispatch, performance — updating live. Not a template. Built from scratch for your operation.",
          tag: "Custom dashboards · live data · full visibility",
          color: "var(--blue)",
        },
        {
          badge: "AI agents running your departments",
          title: "Your Own AI Workforce",
          body: "Specialized AI agents for sales, operations, finance, and support — each trained on your business, handling their domain automatically. Calls answered, leads followed up, anomalies flagged, reports generated.",
          tag: "AI agents · n8n workflows · multi-department automation",
          color: "var(--gold)",
        },
        {
          badge: "Custom software, not off-the-shelf tools",
          title: "Software Built Around Your Process",
          body: "Order management, inventory control, dispatch tracking, billing systems, client portals — built exactly for how your business works. Database-backed, real-time, and yours.",
          tag: "Next.js · PostgreSQL · custom back-office systems",
          color: "var(--blue)",
        },
        {
          badge: "Run more with fewer people",
          title: "One Team. Startup-Level Output.",
          body: "The same infrastructure that funded startups pay engineers $500K/year to build — deployed for your business in weeks. Handle 5× the volume without adding headcount.",
          tag: "Full-stack AI infrastructure · scalable by design",
          color: "var(--gold)",
        },
        {
          badge: "Website + Apps + Platforms",
          title: "Your Complete Digital Operation",
          body: "When your business needs more than automation, we build the full stack: custom websites, online course platforms, training and client apps, member portals \u2014 all integrated and branded as yours. From idea to launch in weeks, not quarters.",
          tag: "Next.js \u00b7 Custom Apps \u00b7 Course Platforms \u00b7 Mobile-First",
          color: "var(--blue)",
        },
      ],
      ctaHeadline: "There\u2019s more under the hood.",
      ctaBody: "Voice AI, WhatsApp automation, CRM pipelines, reputation systems, custom integrations — built for your specific operation.",
      ctaButton: "Explore All Solutions",
    },
    es: {
      slabel: "Qué Construimos",
      splitText: "Sistemas que Trabajan",
      shinyText: "Mientras Tú Creces.",
      desc: "Cada solución que implementamos se construye a medida para tu negocio — no es una plantilla, no es un plugin. Infraestructura real que captura prospectos, automatiza el seguimiento y reduce la dependencia del dueño desde el primer día.",
      bridgeLabel: "Así luce tu negocio después de la implementación",
      outcomes: [
        {
          badge: "Tu negocio en una sola pantalla",
          title: "Un Command Center Hecho para Ti",
          body: "Dashboard en tiempo real con cada KPI que importa — prospectos, ingresos, inventario, despacho, rendimiento — actualizado en vivo. No es una plantilla. Construido desde cero para tu operación.",
          tag: "Dashboards personalizados · datos en vivo · visibilidad total",
          color: "var(--blue)",
        },
        {
          badge: "Agentes de AI dirigiendo tus áreas",
          title: "Tu Propio Equipo de AI",
          body: "Agentes de AI especializados en ventas, operaciones, finanzas y soporte — cada uno entrenado en tu negocio y gestionando su área de forma automática. Llamadas atendidas, prospectos con seguimiento, anomalías detectadas, reportes generados.",
          tag: "AI agents · flujos n8n · automatización multidepartamental",
          color: "var(--gold)",
        },
        {
          badge: "Software personalizado, no herramientas genéricas",
          title: "Software Construido para Tu Proceso",
          body: "Gestión de pedidos, control de inventario, seguimiento de despacho, sistemas de facturación, portales para clientes — construidos exactamente como funciona tu negocio. Con base de datos, en tiempo real y completamente tuyo.",
          tag: "Next.js · PostgreSQL · sistemas back-office personalizados",
          color: "var(--blue)",
        },
        {
          badge: "Haz más con menos personas",
          title: "Un Equipo. Resultados de Startup.",
          body: "La misma infraestructura que startups financiadas pagan $500K/año en ingenieros para construir — desplegada en tu negocio en semanas. Maneja 5× el volumen sin aumentar personal.",
          tag: "Infraestructura AI full-stack · escalable por diseño",
          color: "var(--gold)",
        },
        {
          badge: "Website + Apps + Plataformas",
          title: "Tu Operación Digital Completa",
          body: "Cuando tu negocio necesita más que automatización, construimos el stack completo: websites a la medida, plataformas de cursos online, apps de entrenamiento y de cliente, portales de miembros — todo integrado y con tu marca. De la idea al lanzamiento en semanas, no en trimestres.",
          tag: "Next.js · Apps a la medida · Plataformas de cursos · Mobile-First",
          color: "var(--blue)",
        },
      ],
      ctaHeadline: "Hay mucho más por descubrir.",
      ctaBody: "Voice AI, automatización por WhatsApp, pipelines de CRM, sistemas de reputación, integraciones personalizadas — todo construido para tu operación específica.",
      ctaButton: "Ver Todas las Soluciones",
    },
  }[lang];

  return (
    <section
      id="solutions"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">

        {/* ── Header ───────────────────────────────────────── */}
        <SectionReveal>
          <div className="slabel">{t.slabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            <SplitText text={t.splitText} delay={0.05} />{" "}
            <ShinyText text={t.shinyText} speed={3.2} />
          </h2>
          <p className="section-desc">
            {t.desc}
          </p>
        </SectionReveal>

        {/* ── Bridge divider ───────────────────────────────── */}
        <SectionReveal delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              margin: "0 0 44px",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, var(--border2))" }} />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 22px",
                border: "1px solid var(--gold-dim)",
                borderRadius: 100,
                background: "rgba(212,165,58,0.06)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              {t.bridgeLabel}
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--border2), transparent)" }} />
          </div>
        </SectionReveal>

        {/* ── 4 Outcome cards ──────────────────────────────── */}
        <div
          className="solutions-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {t.outcomes.map((out, i) => (
            <SectionReveal
              key={i}
              delay={i * 0.1}
              variant="scale"
              style={i === 4 ? { gridColumn: "1 / -1" } : undefined}
            >
              <SpotlightCard
                spotlightColor={`${out.color}22`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "32px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 1px 4px rgba(15,34,64,0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = out.color === "var(--blue)"
                    ? "rgba(26,92,168,0.35)"
                    : "rgba(212,165,58,0.4)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 32px rgba(15,34,64,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 1px 4px rgba(15,34,64,0.04)";
                }}
              >
                {/* Outcome badge */}
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: out.color,
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: out.color,
                      flexShrink: 0,
                    }}
                  />
                  {out.badge}
                </div>

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    lineHeight: 1.35,
                    marginBottom: 14,
                    color: "var(--text)",
                  }}
                >
                  {out.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.72,
                    flexGrow: 1,
                    marginBottom: 20,
                  }}
                >
                  {out.body}
                </p>

                <div
                  style={{
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  {out.tag}
                </div>
              </SpotlightCard>
            </SectionReveal>
          ))}
        </div>

        {/* ── Explore CTA ──────────────────────────────────── */}
        <SectionReveal delay={0.2}>
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              padding: "28px 36px",
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: 12,
            }}
            className="solutions-cta-strip"
          >
            <div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text)",
                marginBottom: 4,
              }}>
                {t.ctaHeadline}
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {t.ctaBody}
              </div>
            </div>
            <a
              href="/solutions"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                background: "transparent",
                border: "1px solid var(--border2)",
                color: "var(--text)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                textDecoration: "none",
                borderRadius: 8,
                whiteSpace: "nowrap",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
                (e.currentTarget as HTMLElement).style.color = "var(--blue)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
            >
              {t.ctaButton}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </SectionReveal>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .solutions-grid { grid-template-columns: 1fr !important; }
          .solutions-cta-strip { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
