"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

type Lang = "en" | "es";

const t = {
  en: {
    eyebrow: "Meet the Founder",
    name: "Carlos J. Torres",
    title: "Founder, Latin Prime Systems",
    bio1: "Carlos J. Torres is the founder of Latin Prime Systems, a business growth and automation company built to help small and mid-sized businesses operate smarter, respond faster, and scale with more structure. His work is rooted in a simple belief: technology should not be reserved for large corporations. It should be practical, understandable, and accessible for real business owners who need systems that save time, capture opportunities, and reduce daily chaos.",
    bio2: "As an entrepreneur with a strong background in client service, sales, business operations, and automation strategy, Carlos has spent years working closely with Hispanic families, entrepreneurs, and business owners across the United States. Through that experience, he saw a consistent problem in the market: many businesses had ambition and talent, but lacked the systems, automation, follow-up, and digital infrastructure needed to grow efficiently. Latin Prime Systems was created to close that gap.",
    bio3: "His broader entrepreneurial path also includes leading Latin Prime Financial Group, where his public-facing mission emphasizes education, transparency, and empowering the Hispanic community with clear guidance and responsible solutions. That same commitment to clarity, trust, and long-term value is now embedded into Latin Prime Systems.",
    stats: [
      { value: "10+", label: "Industries Served" },
      { value: "5+", label: "Countries" },
      { value: "90", label: "Day ROI Guarantee" },
    ],
  },
  es: {
    eyebrow: "Conoce al Fundador",
    name: "Carlos J. Torres",
    title: "Fundador, Latin Prime Systems",
    bio1: "Carlos J. Torres es el fundador de Latin Prime Systems, una empresa de crecimiento empresarial y automatización creada para ayudar a pequeñas y medianas empresas a operar con mayor inteligencia, responder más rápido y escalar con más estructura. Su trabajo se fundamenta en una creencia sencilla: la tecnología no debe estar reservada para las grandes corporaciones. Debe ser práctica, comprensible y accesible para los dueños de negocios reales que necesitan sistemas que ahorren tiempo, capturen oportunidades y reduzcan el caos diario.",
    bio2: "Como emprendedor con sólida experiencia en servicio al cliente, ventas, operaciones empresariales y estrategia de automatización, Carlos ha trabajado de cerca con familias hispanas, emprendedores y dueños de negocio en todo Estados Unidos. A través de esa experiencia, identificó un problema recurrente en el mercado: muchos negocios tenían ambición y talento, pero carecían de los sistemas, la automatización, el seguimiento y la infraestructura digital necesarios para crecer de forma eficiente. Latin Prime Systems fue creada para cerrar esa brecha.",
    bio3: "Su trayectoria emprendedora también incluye la dirección de Latin Prime Financial Group, donde su misión pública enfatiza la educación, la transparencia y el empoderamiento de la comunidad hispana con orientación clara y soluciones responsables. Ese mismo compromiso con la claridad, la confianza y el valor a largo plazo está ahora integrado en Latin Prime Systems.",
    stats: [
      { value: "10+", label: "Industrias Atendidas" },
      { value: "5+", label: "Países" },
      { value: "90", label: "Días de Garantía ROI" },
    ],
  },
};

export default function About({ lang = "en" }: { lang?: Lang }) {
  const copy = t[lang ?? "en"];

  return (
    <section
      id="about"
      className="section-wrap"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(26,127,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      {/* Ambient glow — left */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: "55vw",
          height: "55vw",
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,127,212,0.07) 0%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
      {/* Ambient glow — right */}
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          right: "-5%",
          width: "40vw",
          height: "40vw",
          maxWidth: 500,
          maxHeight: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,148,26,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "center",
          }}
        >
          {/* ── Photo panel ── */}
          <SectionReveal>
            <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>

              {/* Outer decorative ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  position: "absolute",
                  inset: -20,
                  borderRadius: 32,
                  border: "1px solid rgba(212,165,58,0.15)",
                  pointerEvents: "none",
                }}
              />

              {/* Photo frame with gradient border */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 420,
                  padding: 2,
                  borderRadius: 24,
                  background: "linear-gradient(145deg, rgba(212,165,58,0.5), rgba(26,92,168,0.3), rgba(212,165,58,0.1))",
                  boxShadow: "0 24px 80px rgba(13,27,42,0.6), 0 0 40px rgba(26,127,212,0.12)",
                }}
              >
                {/* Inner photo container */}
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: 22,
                    overflow: "hidden",
                    position: "relative",
                    background: "var(--surface)",
                  }}
                >
                  <Image
                    src="https://latinprimefg.com/wp-content/uploads/2022/03/latin-prime_president-carlos.jpg"
                    alt="Carlos J. Torres — Founder, Latin Prime Systems"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Bottom gradient fade */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "45%",
                      background: "linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.4) 60%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Name + title overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "24px 28px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "#ffffff",
                        marginBottom: 5,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {copy.name}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--gold)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                        }}
                      >
                        {copy.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical gold accent bar */}
              <div
                style={{
                  position: "absolute",
                  left: -4,
                  top: "15%",
                  bottom: "15%",
                  width: 3,
                  background: "linear-gradient(180deg, transparent, var(--gold) 40%, var(--gold) 60%, transparent)",
                  borderRadius: 4,
                  opacity: 0.7,
                }}
              />

              {/* Corner dot — top right */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--blue)",
                  boxShadow: "0 0 12px var(--blue)",
                }}
              />
            </div>
          </SectionReveal>

          {/* ── Text panel ── */}
          <SectionReveal delay={0.2}>
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(212,165,58,0.08)",
                  border: "1px solid rgba(212,165,58,0.25)",
                  padding: "6px 14px",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "var(--gold)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {copy.eyebrow}
                </span>
              </div>

              {/* Bio */}
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.82,
                  marginBottom: 18,
                }}
              >
                {copy.bio1}
              </p>
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.82,
                  marginBottom: 18,
                }}
              >
                {copy.bio2}
              </p>
              <p
                style={{
                  fontSize: "0.93rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.82,
                  marginBottom: 36,
                }}
              >
                {copy.bio3}
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: "flex",
                  gap: 0,
                  border: "1px solid var(--border2)",
                  overflow: "hidden",
                }}
              >
                {[
                  { ...copy.stats[0], color: "var(--gold)", accent: "rgba(212,165,58,0.08)" },
                  { ...copy.stats[1], color: "var(--blue)", accent: "rgba(26,127,212,0.08)" },
                  { ...copy.stats[2], color: "var(--green)", accent: "rgba(0,229,122,0.08)" },
                ].map((stat, i) => (
                  <div
                    key={stat.label}
                    style={{
                      flex: 1,
                      padding: "20px 18px",
                      background: stat.accent,
                      borderRight: i < 2 ? "1px solid var(--border2)" : "none",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.8rem",
                        color: stat.color,
                        lineHeight: 1,
                        marginBottom: 6,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-dim)",
                        textTransform: "uppercase",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
