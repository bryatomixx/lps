"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const t = {
  en: {
    label: "Ready to Start",
    heading: "Your Business Deserves",
    headingShiny: "Better Systems",
    subtext:
      "Stop duct-taping your operation together. Start running a business that works — even when you\u2019re not there.",
    primaryCta: "Book Your Free Strategy Call",
    secondaryCta: "Start with a Strategy Session",
    guarantee: "🛡️ 90-Day ROI Guarantee — results or we work free · No long-term contracts",
    stats: [
      { stat: "24/7", label: "Lead coverage" },
      { stat: "<1s", label: "Response time" },
      { stat: "10+", label: "Industries served" },
      { stat: "90", label: "Day ROI guarantee" },
    ],
  },
  es: {
    label: "Listo para Empezar",
    heading: "Tu Negocio Merece",
    headingShiny: "Mejores Sistemas",
    subtext:
      "Deja de improvisar tu operación. Empieza a dirigir un negocio que funciona — incluso cuando no estás.",
    primaryCta: "Agenda tu Llamada de Estrategia Gratuita",
    secondaryCta: "Comenzar con una Sesión de Estrategia",
    guarantee: "🛡️ Garantía de ROI de 90 días — resultados o trabajamos gratis · Sin contratos a largo plazo",
    stats: [
      { stat: "24/7", label: "Cobertura de prospectos" },
      { stat: "<1s", label: "Tiempo de respuesta" },
      { stat: "10+", label: "Industrias atendidas" },
      { stat: "90", label: "Días de garantía ROI" },
    ],
  },
};

export default function CTA({ lang = "en" }: { lang?: Lang }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const copy = t[lang ?? "en"];

  return (
    <section
      ref={ref}
      className="section-wrap"
      style={{
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,127,212,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(26,127,212,0.4), rgba(200,148,26,0.3), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="slabel" style={{ justifyContent: "center" }}>
            {copy.label}
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              maxWidth: 900,
              margin: "0 auto 20px",
            }}
          >
            <SplitText text={copy.heading} delay={0.05} />{" "}
            <ShinyText
              text={copy.headingShiny}
              speed={3}
              style={{ paddingRight: "0.08em" }}
            />
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: 500,
              margin: "0 auto 44px",
              fontWeight: 300,
            }}
          >
            {copy.subtext}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "18px 44px",
                  background: "var(--orange)",
                  color: "white",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.01em",
                  textDecoration: "none",
                  transition: "all 0.25s",
                  boxShadow: "0 6px 28px rgba(13,27,42,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--orange-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(212,165,58,0.55)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--orange)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(13,27,42,0.25)";
                }}
              >
                {copy.primaryCta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "17px 32px",
                  background: "transparent",
                  color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  border: "1px solid var(--border2)",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,34,64,0.25)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(15,34,64,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {copy.secondaryCta}
              </a>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              {copy.guarantee}
            </span>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 48,
              marginTop: 64,
              flexWrap: "wrap",
            }}
          >
            {copy.stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.2rem",
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(135deg, var(--blue), var(--gold))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
