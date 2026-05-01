"use client";
import { motion } from "framer-motion";

type Lang = "en" | "es";

interface BilingualBannerProps {
  lang?: Lang;
}

export default function BilingualBanner({ lang = "en" }: BilingualBannerProps) {
  const t = {
    en: {
      headline: "We work in English and Spanish.",
      body:
        "We work in English and Spanish — bilingual implementation, bilingual training, bilingual support. We've built systems for businesses in the U.S., Colombia, and Mexico, with local context: regional regulations, regional tax calendars, regional customer behavior. Not generic templates.",
      pillEN: "EN",
      pillES: "ES",
      tag: "Bilingual EN / ES · Built for Latin America and the U.S. Hispanic market",
    },
    es: {
      headline: "Trabajamos en inglés y español.",
      body:
        "Trabajamos en inglés y español — implementación bilingüe, capacitación bilingüe, soporte bilingüe. Hemos construido sistemas para empresas en Estados Unidos, Colombia y México, con contexto local: regulaciones regionales, calendarios tributarios regionales, comportamiento real del cliente regional. No son templates genéricos.",
      pillEN: "EN",
      pillES: "ES",
      tag: "Bilingüe EN / ES · Hecho para Latinoamérica y el mercado hispano de Estados Unidos",
    },
  }[lang];

  return (
    <section
      id="bilingual"
      style={{
        padding: "clamp(40px, 6vw, 72px) clamp(24px, 4vw, 80px)",
        background:
          "linear-gradient(135deg, rgba(26,92,168,0.06) 0%, rgba(212,165,58,0.06) 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,127,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
          maskImage:
            "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div
        className="bb-row"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(20px, 4vw, 56px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Bilingual visual: stacked pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: -6,
            flexShrink: 0,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 64,
              height: 64,
              padding: "0 18px",
              background: "var(--blue)",
              color: "white",
              borderRadius: 14,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              boxShadow: "0 8px 24px rgba(26,92,168,0.35)",
              transform: "rotate(-4deg)",
              border: "2px solid white",
              position: "relative",
              zIndex: 2,
            }}
          >
            {t.pillEN}
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 64,
              height: 64,
              padding: "0 18px",
              background: "var(--gold)",
              color: "white",
              borderRadius: 14,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "1.4rem",
              fontWeight: 800,
              letterSpacing: "0.04em",
              boxShadow: "0 8px 24px rgba(212,165,58,0.4)",
              transform: "rotate(4deg)",
              border: "2px solid white",
              marginLeft: -10,
              position: "relative",
              zIndex: 1,
            }}
          >
            {t.pillES}
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          style={{ flex: 1, minWidth: 0 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 700,
              marginBottom: 8,
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
            {t.tag}
          </div>
          <h3
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.3rem, 2.4vw, 1.85rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: 8,
            }}
          >
            {t.headline}
          </h3>
          <p
            style={{
              fontSize: "clamp(0.92rem, 1.3vw, 1.05rem)",
              color: "var(--text-muted)",
              lineHeight: 1.55,
              margin: 0,
              maxWidth: 720,
            }}
          >
            {t.body}
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .bb-row {
            flex-direction: column;
            text-align: center;
            align-items: center !important;
          }
        }
      `}</style>
    </section>
  );
}
