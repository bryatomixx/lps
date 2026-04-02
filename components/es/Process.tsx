"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Conocemos tu Negocio",
    desc: "Nos sentamos a entender exactamente cómo operas — dónde pierdes tiempo, dónde pierdes prospectos, qué te está frenando para crecer.",
  },
  {
    num: "02",
    title: "Diseñamos tu Sistema",
    desc: "Trazamos con precisión lo que vamos a construir — qué se automatiza, qué se conecta, qué podrás hacer que hoy no puedes hacer.",
  },
  {
    num: "03",
    title: "Construimos y Probamos",
    desc: "Construimos todo y lo probamos a fondo antes de que lo veas. Cuando te lo entregamos, funciona.",
  },
  {
    num: "04",
    title: "Tu Negocio Opera Mejor",
    desc: "Empiezas a ver resultados de inmediato. Más prospectos capturados, menos tiempo desperdiciado, más ingresos. Nos quedamos a tu lado mientras creces.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="slabel">Cómo Funciona</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            Nosotros Nos Encargamos de Todo.{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tú Ves Resultados.
            </em>
          </h2>
          <p className="section-desc">
            No necesitas entender la tecnología. Para eso estamos nosotros.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 2,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              style={{
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Step number — background watermark */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "7rem",
                  color: "rgba(255,255,255,0.025)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.num}
              </div>

              {/* Accent bar */}
              <div
                style={{
                  width: 32,
                  height: 3,
                  background: i % 2 === 0 ? "var(--blue)" : "var(--gold)",
                  marginBottom: 20,
                }}
              />

              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  color: i % 2 === 0 ? "var(--blue)" : "var(--gold)",
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                Paso {step.num}
              </div>

              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  lineHeight: 1.35,
                  marginBottom: 14,
                  color: "var(--text)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.72,
                }}
              >
                {step.desc}
              </p>

              {/* Connector arrow (except last) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: -14,
                    transform: "translateY(-50%)",
                    color: "var(--text-dim)",
                    fontSize: "1rem",
                    zIndex: 2,
                  }}
                  className="step-arrow"
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
