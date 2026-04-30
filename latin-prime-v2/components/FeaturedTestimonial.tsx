"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

type Lang = "en" | "es";

export interface FeaturedTestimonialData {
  name: string;
  role: string;
  company?: string;
  industry: { en: string; es: string };
  quote: { en: string; es: string };
  metric: { value: string; label: { en: string; es: string } };
  photoUrl?: string;
  initials?: string;
}

// Replace this with the real client data (or wire to a CMS / JSON fetch later).
const PLACEHOLDER: FeaturedTestimonialData = {
  name: "Andrea Vargas",
  role: "CEO",
  industry: { en: "Insurance Agency", es: "Agencia de Seguros" },
  quote: {
    en: "LPS rebuilt our follow-up from scratch. We stopped losing leads in week two.",
    es: "LPS reconstruyó nuestro seguimiento desde cero. Dejamos de perder prospectos en la segunda semana.",
  },
  metric: {
    value: "15h/wk",
    label: { en: "Saved every week", es: "Ahorradas cada semana" },
  },
  initials: "AV",
};

interface FeaturedTestimonialProps {
  lang?: Lang;
  data?: FeaturedTestimonialData;
}

export default function FeaturedTestimonial({
  lang = "en",
  data = PLACEHOLDER,
}: FeaturedTestimonialProps) {
  const t = {
    en: { slabel: "Real Results" },
    es: { slabel: "Resultados Reales" },
  }[lang];

  return (
    <section
      id="featured-testimonial"
      className="section-wrap"
      style={{ background: "var(--surface)", position: "relative" }}
    >
      <div className="section-inner" style={{ maxWidth: 980 }}>
        <SectionReveal>
          <div style={{ marginBottom: 32, textAlign: "center" }}>
            <div className="slabel" style={{ justifyContent: "center" }}>
              {t.slabel}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal variant="scale">
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "clamp(28px, 4vw, 48px)",
              boxShadow: "0 8px 32px rgba(15,34,64,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top gold bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background:
                  "linear-gradient(90deg, var(--gold), var(--gold-bright), var(--gold))",
              }}
            />

            {/* Big quote mark */}
            <div
              style={{
                position: "absolute",
                top: 18,
                right: 28,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "5rem",
                fontWeight: 900,
                color: "rgba(212,165,58,0.18)",
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              &ldquo;
            </div>

            <div
              className="ft-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "clamp(20px, 3vw, 40px)",
                alignItems: "center",
              }}
            >
              {/* Photo / initials */}
              <div
                style={{
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  background: data.photoUrl
                    ? `url(${data.photoUrl}) center/cover`
                    : "linear-gradient(135deg, var(--blue), var(--gold))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "white",
                  boxShadow: "0 6px 20px rgba(26,92,168,0.25)",
                  flexShrink: 0,
                }}
              >
                {!data.photoUrl && (data.initials ?? data.name.charAt(0))}
              </div>

              {/* Quote + person */}
              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                    fontWeight: 600,
                    lineHeight: 1.5,
                    color: "var(--text)",
                    marginBottom: 18,
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;{data.quote[lang]}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      color: "var(--text)",
                    }}
                  >
                    {data.name}
                  </span>
                  <span
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    — {data.role}{data.company ? `, ${data.company}` : ""}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      background: "rgba(212,165,58,0.1)",
                      padding: "3px 8px",
                      borderRadius: 4,
                      marginLeft: 4,
                    }}
                  >
                    {data.industry[lang]}
                  </span>
                </div>
              </div>

              {/* Bold metric */}
              <div
                className="ft-metric"
                style={{
                  textAlign: "center",
                  paddingLeft: "clamp(16px, 2vw, 32px)",
                  borderLeft: "1px solid var(--border)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    background:
                      "linear-gradient(135deg, var(--blue), var(--gold))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {data.metric.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                    fontWeight: 600,
                  }}
                >
                  {data.metric.label[lang]}
                </div>
              </div>
            </div>
          </motion.div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ft-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .ft-grid > div:first-child {
            margin: 0 auto;
          }
          .ft-metric {
            border-left: none !important;
            border-top: 1px solid var(--border);
            padding-left: 0 !important;
            padding-top: 18px;
          }
        }
      `}</style>
    </section>
  );
}
