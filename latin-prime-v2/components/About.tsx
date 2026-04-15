"use client";
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Placeholder — replace with <Image src="YOUR_PHOTO.jpg" fill style={{objectFit:'cover'}} alt="Founder" /> */}
                <div style={{ textAlign: "center", color: "var(--text-dim)" }}>
                  <div style={{ fontSize: "4rem", marginBottom: 12 }}>👤</div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Add your photo here
                  </div>
                </div>
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
              Founder
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                marginBottom: 4,
              }}
            >
              [Your Name]
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
              [Your story in English — why you founded Latin Prime, what you saw in the market,
              what your connection is to the Latin American business world, and why this matters
              to you personally.]
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                marginBottom: 32,
              }}
            >
              [Second paragraph — your background in technology & automation, and why you
              committed to making this accessible for small businesses, not just large enterprises.]
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
