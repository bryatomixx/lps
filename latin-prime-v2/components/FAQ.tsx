"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const t = {
  en: {
    label: "FAQ",
    heading1: "Every Question",
    heading2: "You're Thinking",
    headingShiny: "Right Now",
    subtext:
      "No sales pitch. Just straight answers to what every business owner wants to know before committing.",
    cta: "Still have questions? Book a call →",
    faqs: [
      {
        q: "My business is too small for AI.",
        a: "Even 5-person teams see ROI when the right process is automated. Our Starter plan exists for this exact case.",
      },
      {
        q: "I don't have a technical team.",
        a: "That's why we exist. We implement, document, and train your team in plain language.",
      },
      {
        q: "I tried ChatGPT and it didn't work.",
        a: "A tool isn't a system. We build the system around the tools, integrated into your actual workflows.",
      },
      {
        q: "How long until I see results?",
        a: "90 days. If you don't see ROI by day 90, you don't pay. That's our guarantee.",
      },
      {
        q: "What if it doesn't work?",
        a: "Our 90-Day ROI Guarantee covers you. No results, no payment.",
      },
    ],
  },
  es: {
    label: "FAQ",
    heading1: "Cada Pregunta",
    heading2: "Que Estás Pensando",
    headingShiny: "Ahora Mismo",
    subtext:
      "Sin discurso de ventas. Solo respuestas directas a lo que todo dueño de negocio quiere saber antes de comprometerse.",
    cta: "¿Tienes más preguntas? Agenda una llamada →",
    faqs: [
      {
        q: "Mi negocio es muy pequeño para IA.",
        a: "Incluso equipos de 5 personas ven ROI cuando se automatiza el proceso correcto. Nuestro plan Starter existe exactamente para esto.",
      },
      {
        q: "No tengo equipo técnico.",
        a: "Por eso existimos nosotros. Implementamos, documentamos y entrenamos a tu equipo en lenguaje claro.",
      },
      {
        q: "Probé ChatGPT y no funcionó.",
        a: "Una herramienta no es un sistema. Nosotros construimos el sistema alrededor de las herramientas, integrado a tus flujos reales.",
      },
      {
        q: "¿Cuánto tardo en ver resultados?",
        a: "90 días. Si no ves ROI al día 90, no pagas. Esa es nuestra garantía.",
      },
      {
        q: "¿Y si no funciona?",
        a: "Nuestra Garantía ROI de 90 días te protege. Sin resultados, sin pago.",
      },
    ],
  },
};

export default function FAQ({ lang = "en" }: { lang?: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  const copy = t[lang ?? "en"];

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <div className="section-inner">
        <SectionReveal variant="left">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: 64,
              alignItems: "start",
            }}
            className="faq-grid"
          >
            {/* Left */}
            <div style={{ position: "sticky", top: 100 }}>
              <div className="slabel">{copy.label}</div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                <SplitText text={copy.heading1} delay={0.05} />
                <br />
                <SplitText text={copy.heading2} delay={0.2} />{" "}
                <ShinyText text={copy.headingShiny} speed={3.5} />
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                {copy.subtext}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 22px",
                  background: "transparent",
                  border: "1px solid var(--border2)",
                  color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,34,64,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(15,34,64,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {copy.cta}
              </a>
            </div>

            {/* Right — Accordion */}
            <div>
              {copy.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: open === i ? "var(--text)" : "var(--text-muted)",
                        lineHeight: 1.4,
                        transition: "color 0.2s",
                      }}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        border: `1px solid ${open === i ? "var(--gold)" : "var(--border2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: open === i ? "var(--gold)" : "var(--text-dim)",
                        borderRadius: 6,
                        fontSize: "1.2rem",
                        fontWeight: 300,
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.78,
                            paddingBottom: 22,
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
