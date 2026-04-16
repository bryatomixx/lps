"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

const translations = {
  en: {
    sectionLabel: "How It Works",
    headline: "We Handle Everything.",
    headlineShiny: "You See Results.",
    desc: "You don't need to understand the technology. That's our job.",
    stepLabel: "Step",
    steps: [
      {
        num: "01",
        title: "We Learn Your Business",
        desc: "We sit down and understand exactly how you operate — where you lose time, where you lose leads, what's holding you back from growing.",
      },
      {
        num: "02",
        title: "We Design Your System",
        desc: "We map out exactly what we're going to build — what gets automated, what gets connected, what you'll be able to do that you can't do today.",
      },
      {
        num: "03",
        title: "We Build & Test It",
        desc: "We build everything and test it thoroughly before you see it. When we hand it over, it works.",
      },
      {
        num: "04",
        title: "You Run Your Business Better",
        desc: "You start seeing results immediately. More leads captured, less time wasted, more money in. We stay by your side as you grow.",
      },
    ],
  },
  es: {
    sectionLabel: "Cómo Funciona",
    headline: "Nosotros lo hacemos todo.",
    headlineShiny: "Tú ves los resultados.",
    desc: "No necesitas entender la tecnología. Eso es nuestro trabajo.",
    stepLabel: "Paso",
    steps: [
      {
        num: "01",
        title: "Conocemos Tu Negocio",
        desc: "Nos sentamos contigo y entendemos exactamente cómo operas — dónde pierdes tiempo, dónde pierdes prospectos, qué te frena para crecer.",
      },
      {
        num: "02",
        title: "Diseñamos Tu Sistema",
        desc: "Trazamos con precisión lo que vamos a construir — qué se automatiza, qué se conecta, qué podrás hacer que hoy no puedes.",
      },
      {
        num: "03",
        title: "Lo Construimos y Probamos",
        desc: "Construimos todo y lo probamos a fondo antes de que lo veas. Cuando te lo entregamos, funciona.",
      },
      {
        num: "04",
        title: "Operas Tu Negocio Mejor",
        desc: "Comienzas a ver resultados de inmediato. Más prospectos capturados, menos tiempo perdido, más ingresos. Estamos a tu lado mientras creces.",
      },
    ],
  },
};

export default function Process({ lang }: { lang?: Lang }) {
  const t = translations[lang ?? "en"];
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-wrap"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginBottom: 64 }}
        >
          <div className="slabel">{t.sectionLabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 16 }}
          >
            <SplitText text={t.headline} delay={0.04} />{" "}
            <ShinyText text={t.headlineShiny} speed={3.8} />
          </h2>
          <p className="section-desc" style={{ marginBottom: 0 }}>
            {t.desc}
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="process-grid">
          {t.steps.map((step, i) => (
            <div key={i} className="process-step-wrapper">
              <motion.div
                className="process-card"
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  opacity: { duration: 0.45, delay: i * 0.12, ease: "easeOut" },
                  y: { type: "spring", stiffness: 60, damping: 14, delay: i * 0.12 },
                }}
                whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(13,27,42,0.10)" }}
              >
                {/* Watermark number */}
                <div className="process-watermark">{step.num}</div>

                {/* Gold accent bar */}
                <div className="process-bar" />

                {/* Step label */}
                <div className="process-step-label">{t.stepLabel} {step.num}</div>

                {/* Title */}
                <h3 className="process-card-title">{step.title}</h3>

                {/* Description */}
                <p className="process-card-desc">{step.desc}</p>
              </motion.div>

              {/* Arrow connector */}
              {i < t.steps.length - 1 && (
                <motion.div
                  className="process-arrow"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.12 + 0.3, duration: 0.3 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-grid {
          display: flex;
          align-items: stretch;
          gap: 0;
        }

        .process-step-wrapper {
          flex: 1;
          display: flex;
          align-items: stretch;
          gap: 0;
          min-width: 0;
        }

        .process-card {
          flex: 1;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 36px 28px 32px;
          box-shadow: 0 2px 12px rgba(13,27,42,0.05);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
        }

        .process-watermark {
          position: absolute;
          top: -14px;
          right: -6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 900;
          font-size: 6.5rem;
          line-height: 1;
          letter-spacing: -0.05em;
          color: rgba(13,27,42,0.035);
          user-select: none;
          pointer-events: none;
        }

        .process-bar {
          width: 32px;
          height: 3px;
          background: var(--gold);
          border-radius: 2px;
          margin-bottom: 20px;
        }

        .process-step-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 10px;
        }

        .process-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.3;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 14px;
        }

        .process-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.72;
          font-weight: 400;
        }

        .process-arrow {
          flex-shrink: 0;
          width: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .process-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }
          .process-step-wrapper {
            flex-direction: column;
          }
          .process-arrow {
            display: none;
          }
        }

        @media (max-width: 540px) {
          .process-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
