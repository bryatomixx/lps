"use client";
import SectionReveal from "../SectionReveal";
import SpotlightCard from "../SpotlightCard";

const solutions = [
  {
    outcome: "Nunca pierdas un prospecto",
    title: "Tu Negocio, Siempre Disponible",
    body: "Implementamos agentes de voz con IA que contestan llamadas, responden mensajes y dan seguimiento a prospectos de forma automática — a cualquier hora, cualquier día. Tus clientes siempre reciben una respuesta.",
    footer: "Impulsado por tecnología de voz e IA conversacional",
    color: "var(--blue)",
  },
  {
    outcome: "Deja de perder tiempo en trabajo manual",
    title: "Tus Tareas Repetitivas, Automatizadas",
    body: "Captura de datos, generación de reportes, secuencias de correo, recordatorios de citas, procesamiento de impuestos, seguimiento de facturas — identificamos qué consume el tiempo de tu equipo y lo automatizamos por completo.",
    footer: "Construido sobre automatización de flujos avanzada",
    color: "var(--gold)",
  },
  {
    outcome: "Convierte más prospectos en clientes",
    title: "Tu Sistema de Ventas, en Piloto Automático",
    body: "Un sistema completo que captura prospectos, los nutre con el mensaje correcto en el momento preciso, hace seguimiento sin parar y agenda citas — sin que tú muevas un dedo.",
    footer: "CRM + automatización + IA, completamente integrados",
    color: "var(--green)",
  },
  {
    outcome: "Conoce tu negocio en tiempo real",
    title: "Tus Datos, Trabajando para Ti",
    body: "Tableros, reportes e indicadores que se actualizan automáticamente. Sin esperar a que alguien arme una hoja de cálculo — tus números siempre están listos cuando los necesitas.",
    footer: "Reportes automatizados e inteligencia de negocio",
    color: "var(--blue)",
  },
  {
    outcome: "Crece sin aumentar tu nómina",
    title: "Escala tus Operaciones al Instante",
    body: "Atiende el doble de volumen con el mismo equipo. Los sistemas que construimos crecen con tu negocio — atender 10 clientes o 1,000 te cuesta lo mismo.",
    footer: "Infraestructura operativa impulsada por IA",
    color: "var(--gold)",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">Lo Que Construimos para Ti</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            No Herramientas.{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Resultados.
            </em>
          </h2>
          <p className="section-desc">
            No necesitas entender cómo funciona nada de esto. Solo necesitas saber qué
            hace por tu negocio.
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 2,
          }}
        >
          {solutions.map((sol, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <SpotlightCard
                spotlightColor={`${sol.color}22`}
                style={{
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  padding: "32px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${sol.color}44`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Outcome badge */}
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: sol.color,
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: sol.color,
                      flexShrink: 0,
                    }}
                  />
                  {sol.outcome}
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
                  {sol.title}
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
                  {sol.body}
                </p>

                <div
                  style={{
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  {sol.footer}
                </div>
              </SpotlightCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
