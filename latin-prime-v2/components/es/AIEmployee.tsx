"use client";
import SectionReveal from "../SectionReveal";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const rows = [
  { feature: "Costo mensual", ai: "Fracción del costo de contratar", trad: "$2,000 – $4,000+" },
  { feature: "Disponibilidad", ai: "24/7/365 — sin descansos", trad: "Solo horario laboral" },
  { feature: "Velocidad de respuesta", ai: "< 1 segundo", trad: "Minutos u horas" },
  { feature: "Multitarea", ai: "Miles de tareas a la vez", trad: "Una cosa a la vez" },
  { feature: "Seguimiento de leads", ai: "Nunca pierde uno", trad: "A veces se olvida" },
  { feature: "Llamadas perdidas", ai: "Text-Back + Voz IA 24/7", trad: "Frecuentes" },
  { feature: "Riesgo de renuncia", ai: "0% — nunca renuncia", trad: "Alto (renuncias, enfermedades)" },
  { feature: "Errores", ai: "Casi cero", trad: "Alto riesgo humano" },
  { feature: "Consistencia", ai: "100% consistente", trad: "Variable" },
  { feature: "Tiempo de implementación", ai: "7–30 días", trad: "Meses" },
  { feature: "Escalabilidad", ai: "Instantánea — sin contratar", trad: "Contratar más personas" },
  { feature: "Integraciones", ai: "CRM, WhatsApp, pagos, calendario…", trad: "Limitadas" },
  { feature: "ROI", ai: "Alto y medible desde el día 1", trad: "Bajo / variable" },
];

export default function AIEmployee() {
  return (
    <section
      id="ai-employee"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">El Nuevo Empleado</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 640 }}
          >
            Tu Negocio Necesita un Empleado{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Que Nunca Para.
            </em>
          </h2>
          <p className="section-desc">
            Un empleado de IA maneja tu chat, WhatsApp y redes sociales — agendando
            citas, respondiendo preguntas y tomando acción 24/7. Sin días de enfermedad.
            Sin rotación. Sin costos de capacitación.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div style={{ overflowX: "auto", marginBottom: 48 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 600 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                      textAlign: "left",
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--border2)",
                      fontWeight: 400,
                      width: "30%",
                    }}
                  >
                    Característica
                  </th>
                  <th
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      textAlign: "center",
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--border2)",
                      background: "rgba(26,127,212,0.06)",
                      color: "var(--blue)",
                      width: "35%",
                    }}
                  >
                    ⭐ Empleado IA
                  </th>
                  <th
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textAlign: "center",
                      padding: "12px 16px",
                      borderBottom: "1px solid var(--border2)",
                      color: "var(--text-dim)",
                      width: "35%",
                    }}
                  >
                    Empleado Tradicional
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid var(--border)", transition: "background 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                  >
                    <td style={{ padding: "14px 16px", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.05em", color: "var(--text-muted)" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center", background: "rgba(26,127,212,0.04)" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ color: "var(--green)", fontSize: "0.85rem" }}>✓</span>
                        <span style={{ fontSize: "0.83rem", color: "var(--text)", fontWeight: 500 }}>{row.ai}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 16px", textAlign: "center" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                        <span style={{ color: "#e55", fontSize: "0.85rem" }}>✗</span>
                        <span style={{ fontSize: "0.83rem", color: "var(--text-dim)", textDecoration: "line-through", textDecorationColor: "rgba(255,80,80,0.4)" }}>
                          {row.trad}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.25}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: 20 }}>
              ¿Listo para eliminar el mayor cuello de botella operativo de tu negocio?
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "15px 32px",
                background: "var(--blue)",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2290e8";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 35px rgba(26,127,212,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--blue)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Obtén Tu Empleado IA →
            </a>
            <div style={{ marginTop: 10, fontFamily: "'DM Mono', monospace", fontSize: "0.57rem", letterSpacing: "0.08em", color: "var(--text-dim)" }}>
              🛡️ Garantía 60 días — resultados medibles o trabajamos gratis
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
