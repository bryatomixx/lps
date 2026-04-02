"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const beforeItems = [
  { text: "Los prospectos llaman y ", bold: "nadie contesta", after: " — se van con la competencia" },
  { text: "Persigues prospectos ", bold: "manualmente durante días", after: " antes de rendirte" },
  { text: "Tu equipo pierde ", bold: "horas capturando datos", after: " y enviando seguimientos" },
  { text: "Los reportes y actualizaciones ", bold: "suceden cuando alguien tiene tiempo", after: "" },
  { text: "No puedes ", bold: "crecer", after: " sin contratar más personal y aumentar costos" },
];

const afterItems = [
  { text: "Un agente de IA ", bold: "contesta cada llamada", after: ", califica el prospecto y agenda la cita" },
  { text: "Cada prospecto recibe ", bold: "seguimiento automático", after: " — en segundos, las 24 horas, los 7 días" },
  { text: "Los datos se mueven, los correos se envían y las tareas se ejecutan ", bold: "sin que nadie las toque", after: "" },
  { text: "Los reportes y actualizaciones ", bold: "se generan solos", after: " — siempre precisos, siempre listos" },
  { text: "Tus sistemas ", bold: "escalan contigo", after: " — más volumen, el mismo equipo" },
];

export default function Compare() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="compare"
      ref={ref}
      className="section-wrap"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="slabel">La Diferencia</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 60 }}
          >
            Antes de Latin Prime.{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Después de Latin Prime.
            </em>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
          className="compare-grid"
        >
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              padding: "36px 32px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#e55",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#e55",
                  opacity: 0.7,
                }}
              />
              Sin Nosotros
            </div>
            {beforeItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 12,
                  paddingBottom: 18,
                  marginBottom: 18,
                  borderBottom:
                    i < beforeItems.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "rgba(229,85,85,0.5)",
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.text}
                  <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                    {item.bold}
                  </strong>
                  {item.after}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              background: "rgba(26,127,212,0.04)",
              border: "1px solid rgba(26,127,212,0.15)",
              padding: "36px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(90deg, var(--blue), var(--gold))",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--green)",
                marginBottom: 28,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--green)",
                  animation: "dot-pulse 2s ease-in-out infinite",
                }}
              />
              Con Latin Prime Systems
            </div>
            {afterItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 12,
                  paddingBottom: 18,
                  marginBottom: 18,
                  borderBottom:
                    i < afterItems.length - 1 ? "1px solid rgba(26,127,212,0.1)" : "none",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--green)",
                    opacity: 0.7,
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {item.text}
                  <strong style={{ color: "var(--text)", fontWeight: 600 }}>
                    {item.bold}
                  </strong>
                  {item.after}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .compare-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
