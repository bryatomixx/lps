"use client";
import SectionReveal from "../SectionReveal";

const problems = [
  {
    icon: "📞",
    title: "Pierdes prospectos porque nadie contestó a tiempo",
    desc: "Un cliente potencial llama. Nadie responde. Se va con tu competencia. Esto pasa decenas de veces a la semana — en silencio.",
  },
  {
    icon: "🔁",
    title: "Tu equipo desperdicia horas en tareas repetitivas",
    desc: "Captura de datos, enviar los mismos correos, copiar información entre sistemas, generar los mismos reportes cada semana. Horas humanas costosas — en tareas que una máquina puede hacer.",
  },
  {
    icon: "📉",
    title: "No puedes crecer sin contratar más personas",
    desc: "Cada nuevo cliente significa más trabajo, más gastos, más personal. Crecer se siente caro. Las empresas grandes resolvieron esto con sistemas — tú también puedes.",
  },
  {
    icon: "😤",
    title: "Estás haciendo trabajo de $10/hr en lugar de crecer",
    desc: "Empezaste este negocio para hacerlo crecer — no para pasar el día persiguiendo facturas, actualizando hojas de cálculo y haciendo seguimiento manual de prospectos.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section-wrap"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">¿Te suena familiar?</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
          >
            Los Problemas que Todo Negocio{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Conoce Demasiado Bien
            </em>
          </h2>
          <p className="section-desc">
            Estos no son problemas de tecnología. Son problemas de negocio — y todos tienen solución.
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 2,
          }}
        >
          {problems.map((p, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "border-color 0.3s, transform 0.3s",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(26,127,212,0.3)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Hover glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "linear-gradient(90deg, var(--blue), var(--gold))",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="prob-topline"
                />
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{p.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    lineHeight: 1.4,
                    marginBottom: 12,
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {p.desc}
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("who")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--blue)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: 0,
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "6px")}
                >
                  Qué hacemos al respecto →
                </button>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
