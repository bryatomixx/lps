"use client";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-wrap"
      style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(26,127,212,0.04), transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Image */}
          <SectionReveal>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="https://latinprimefg.com/wp-content/uploads/2022/03/latin-prime_president-carlos.jpg"
                  alt="Carlos J. Torres — Founder, Latin Prime Systems"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, var(--blue), var(--gold))",
                }}
              />
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal delay={0.15}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 6,
              }}
            >
              Meet the Founder
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                marginBottom: 4,
              }}
            >
              Carlos J. Torres
            </h2>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: 28,
              }}
            >
              Founder, Latin Prime Systems
            </div>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              Carlos J. Torres is the founder of Latin Prime Systems, a business growth and
              automation company built to help small and mid-sized businesses operate smarter,
              respond faster, and scale with more structure. His work is rooted in a simple
              belief: technology should not be reserved for large corporations. It should be
              practical, understandable, and accessible for real business owners who need
              systems that save time, capture opportunities, and reduce daily chaos.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              As an entrepreneur with a strong background in client service, sales, business
              operations, and automation strategy, Carlos has spent years working closely with
              Hispanic families, entrepreneurs, and business owners across the United States.
              Through that experience, he saw a consistent problem in the market: many businesses
              had ambition and talent, but lacked the systems, automation, follow-up, and digital
              infrastructure needed to grow efficiently. Latin Prime Systems was created to close
              that gap.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              His broader entrepreneurial path also includes leading Latin Prime Financial Group,
              where his public-facing mission emphasizes education, transparency, and empowering
              the Hispanic community with clear guidance and responsible solutions. That same
              commitment to clarity, trust, and long-term value is now embedded into Latin Prime Systems.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
              {[
                { value: "10+", label: "Industries Served", color: "var(--gold)" },
                { value: "2", label: "Countries", color: "var(--blue)" },
                { value: "90", label: "Day ROI Guarantee", color: "var(--green)" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderLeft: `2px solid ${stat.color}`,
                    paddingLeft: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: "1.6rem",
                      color: stat.color,
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      marginTop: 3,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
