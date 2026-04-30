"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import GradientText from "./GradientText";

type Lang = "en" | "es";

interface HowWeThinkProps {
  lang?: Lang;
}

export default function HowWeThink({ lang = "en" }: HowWeThinkProps) {
  const t = {
    en: {
      slabel: "Our Approach",
      titleStatic: "How we think about",
      titleGradient: "AI for your business",
      subtext:
        "We don't drop a chatbot on your site and call it strategy. We go from your raw data to decisions you can act on — in that exact order.",
      steps: [
        {
          n: "01",
          title: "Data",
          desc: "We map the data your business already creates — calls, leads, sales, ops.",
        },
        {
          n: "02",
          title: "Processes",
          desc: "We document the workflows that drive revenue, then strip out the friction.",
        },
        {
          n: "03",
          title: "AI Layer",
          desc: "We add AI where it removes work, not where it looks impressive.",
        },
        {
          n: "04",
          title: "Decisions",
          desc: "We ship dashboards and signals you can actually act on every day.",
        },
      ],
    },
    es: {
      slabel: "Nuestro Enfoque",
      titleStatic: "Cómo pensamos la",
      titleGradient: "IA para tu negocio",
      subtext:
        "No te ponemos un chatbot encima y le llamamos estrategia. Vamos desde tus datos crudos hasta decisiones sobre las que puedes actuar — en ese orden exacto.",
      steps: [
        {
          n: "01",
          title: "Datos",
          desc: "Mapeamos los datos que tu negocio ya genera — llamadas, prospectos, ventas, operaciones.",
        },
        {
          n: "02",
          title: "Procesos",
          desc: "Documentamos los flujos que generan ingresos y eliminamos la fricción.",
        },
        {
          n: "03",
          title: "Capa de IA",
          desc: "Agregamos IA donde elimina trabajo, no donde se ve bonito.",
        },
        {
          n: "04",
          title: "Decisiones",
          desc: "Entregamos dashboards y señales sobre los que puedes actuar todos los días.",
        },
      ],
    },
  }[lang];

  return (
    <section
      id="how-we-think"
      className="section-wrap"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Grid pattern background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,127,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />
      {/* Gold glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "40vw",
          maxWidth: 700,
          maxHeight: 500,
          background:
            "radial-gradient(ellipse, rgba(212,165,58,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
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
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                marginBottom: 18,
              }}
            >
              {t.titleStatic}{" "}
              <GradientText text={t.titleGradient} speed={4} />
            </h2>
            <p
              className="section-desc"
              style={{ maxWidth: 720, margin: "0 auto" }}
            >
              {t.subtext}
            </p>
          </div>
        </SectionReveal>

        <div
          className="hwt-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(16px, 2vw, 28px)",
            position: "relative",
          }}
        >
          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: 14,
                padding: "28px 22px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                boxShadow: "0 2px 12px rgba(15,34,64,0.04)",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  STEP {step.n}
                </span>
                {/* Arrow connector — visible only between steps on desktop */}
                {i < t.steps.length - 1 && (
                  <span
                    className="hwt-arrow"
                    style={{
                      position: "absolute",
                      right: -18,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 36,
                      height: 1,
                      background:
                        "linear-gradient(90deg, var(--gold), transparent)",
                      pointerEvents: "none",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        right: -2,
                        top: -4,
                        width: 0,
                        height: 0,
                        borderLeft: "6px solid var(--gold)",
                        borderTop: "4px solid transparent",
                        borderBottom: "4px solid transparent",
                      }}
                    />
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  letterSpacing: "-0.02em",
                  marginBottom: 0,
                }}
              >
                <GradientText
                  text={step.title}
                  speed={6}
                  from="#1A5CA8"
                  mid="#D4A53A"
                  to="#2B7FE0"
                />
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hwt-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hwt-arrow { display: none !important; }
        }
        @media (max-width: 540px) {
          .hwt-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
