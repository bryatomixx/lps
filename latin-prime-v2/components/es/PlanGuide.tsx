"use client";
import SectionReveal from "../SectionReveal";

const rows = [
  {
    icon: "🟡",
    badge: "Starter",
    badgeColor: "var(--gold)",
    condition: "Tienes un negocio y gestionas todo de forma manual",
    detail:
      "Quieres comenzar a automatizar lo esencial — seguimientos, citas, respuestas — sin reorganizar todo de una sola vez.",
  },
  {
    icon: "🔵",
    badge: "Growth",
    badgeColor: "var(--blue)",
    condition: "Tu negocio creció, pero lo sigues operando como el primer día",
    detail:
      "Los procesos manuales que funcionaban cuando eras pequeño ahora te están costando tiempo, prospectos y dinero.",
  },
  {
    icon: "⚡",
    badge: "Enterprise",
    badgeColor: "var(--text-muted)",
    condition: "Tu operación es demasiado específica para encajar en un paquete estándar",
    detail:
      "Tienes flujos de trabajo complejos, múltiples sucursales o necesitas integraciones con sistemas existentes — y necesitas a alguien que lo construya correctamente.",
  },
];

export default function PlanGuide() {
  return (
    <section
      className="section-wrap"
      id="plan-guide"
      style={{ background: "var(--surface)", padding: "80px 0" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div
            style={{
              background: "var(--surface2)",
              border: "1px solid var(--border2)",
              padding: "48px 44px",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                lineHeight: 1.25,
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              El mejor plan para ti es el que{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, var(--blue), var(--gold))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                corresponde a donde estás realmente.
              </em>
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: 36,
              }}
            >
              Elige según el momento actual de tu negocio, no según donde quieres que esté.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {rows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "20px 24px",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      row.badgeColor + "44")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                  className="pg-row"
                >
                  <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{row.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-dim)",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      Si eres
                    </div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text)",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {row.condition}
                    </p>
                    <p
                      style={{
                        fontSize: "0.83rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.detail}
                    </p>
                  </div>
                  <div
                    style={{
                      flexShrink: 0,
                      padding: "6px 16px",
                      border: `1px solid ${row.badgeColor}`,
                      color: row.badgeColor,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .pg-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
