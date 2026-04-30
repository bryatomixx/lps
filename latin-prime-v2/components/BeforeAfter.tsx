"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import GradientText from "./GradientText";

type Lang = "en" | "es";

interface BeforeAfterProps {
  lang?: Lang;
}

const ROBOT_SRC =
  "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp";

export default function BeforeAfter({ lang = "en" }: BeforeAfterProps) {
  const t = {
    en: {
      slabel: "The Transformation",
      titleStatic: "Where you are vs.",
      titleGradient: "where you'll be",
      beforeLabel: "Before",
      afterLabel: "After with LPS",
      before: [
        "Manual, repetitive processes",
        "Dependent on key employees",
        "Data scattered across tools",
        "Decisions made on intuition",
      ],
      after: [
        "Automated workflows running 24/7",
        "Documented, transferable knowledge",
        "Centralized operational data",
        "Decisions backed by AI insights",
      ],
      mascotAlt: "Latin Prime Systems AI assistant separating before and after states",
    },
    es: {
      slabel: "La Transformación",
      titleStatic: "Dónde estás vs.",
      titleGradient: "dónde vas a estar",
      beforeLabel: "Antes",
      afterLabel: "Después con LPS",
      before: [
        "Procesos manuales y repetitivos",
        "Dependencia de empleados clave",
        "Datos dispersos en mil herramientas",
        "Decisiones por intuición",
      ],
      after: [
        "Flujos automatizados funcionando 24/7",
        "Conocimiento documentado y transferible",
        "Datos operativos centralizados",
        "Decisiones respaldadas por IA",
      ],
      mascotAlt:
        "Asistente IA de Latin Prime Systems separando el antes y el después",
    },
  }[lang];

  return (
    <section
      id="before-after"
      className="section-wrap"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,127,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <SectionReveal>
          <div style={{ marginBottom: 56, textAlign: "center" }}>
            <div className="slabel" style={{ justifyContent: "center" }}>
              {t.slabel}
            </div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 0 }}
            >
              {t.titleStatic}{" "}
              <GradientText text={t.titleGradient} speed={4} />
            </h2>
          </div>
        </SectionReveal>

        <div
          className="ba-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "center",
          }}
        >
          {/* Before column */}
          <SectionReveal variant="left">
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "32px 28px",
                boxShadow: "0 2px 12px rgba(15,34,64,0.04)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(15,34,64,0.06)",
                  color: "var(--text-muted)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: 6,
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#94A3B8",
                  }}
                />
                {t.beforeLabel}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {t.before.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: "0.95rem",
                      lineHeight: 1.55,
                      color: "var(--text-muted)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        border: "1.5px solid #CBD5E1",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#94A3B8",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        marginTop: 2,
                      }}
                    >
                      ✕
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Robot mascot divider */}
          <div
            className="ba-mascot"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "clamp(140px, 16vw, 200px)",
              height: "clamp(140px, 16vw, 200px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(212,165,58,0.22) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                animation: "float 6s ease-in-out infinite",
              }}
            >
              <Image
                src={ROBOT_SRC}
                alt={t.mascotAlt}
                width={200}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 12px 40px rgba(212,165,58,0.35)) drop-shadow(0 0 24px rgba(26,127,212,0.25))",
                }}
              />
            </motion.div>
          </div>

          {/* After column */}
          <SectionReveal variant="right">
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--blue)",
                borderRadius: 14,
                padding: "32px 28px",
                boxShadow: "0 8px 32px rgba(26,92,168,0.12)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background:
                    "linear-gradient(90deg, var(--gold), var(--gold-bright))",
                }}
              />
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(212,165,58,0.12)",
                  color: "var(--gold)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  padding: "6px 12px",
                  borderRadius: 6,
                  marginBottom: 22,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    boxShadow: "0 0 8px var(--gold)",
                  }}
                />
                {t.afterLabel}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {t.after.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: "0.95rem",
                      lineHeight: 1.55,
                      color: "var(--text)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "var(--gold)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ba-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .ba-mascot {
            order: 0;
            margin: 0 auto;
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}
