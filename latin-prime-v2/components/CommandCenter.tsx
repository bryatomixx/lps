"use client";
import SectionReveal from "./SectionReveal";
import DashMockup from "./DashMockup";

const DASHBOARDS_URL = "https://latinprimesystems.com/dashboards";

const features = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="#2B7FE0" fillOpacity="0.9"/>
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="#D4A53A" fillOpacity="0.9"/>
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="#10B981" fillOpacity="0.9"/>
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="#A78BFA" fillOpacity="0.9"/>
      </svg>
    ),
    label: "Revenue & KPIs in real time",
    desc: "Revenue, appointments, show rate, and conversions — updated live.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 12 L5 8 L8 10 L11 5 L14 7" stroke="#2B7FE0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="7" r="1.5" fill="#D4A53A"/>
      </svg>
    ),
    label: "Full lead pipeline visibility",
    desc: "Every lead tracked from first contact to closed deal.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6.5" stroke="#10B981" strokeWidth="1.2"/>
        <path d="M5 8.5L7 10.5L11 6" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Team performance at a glance",
    desc: "Closers, conversion rates, and rankings — all in one place.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="10" width="2.5" height="4" rx="0.5" fill="#2B7FE0"/>
        <rect x="6" y="7" width="2.5" height="7" rx="0.5" fill="#D4A53A"/>
        <rect x="10" y="4" width="2.5" height="10" rx="0.5" fill="#10B981"/>
      </svg>
    ),
    label: "Automated monthly reports",
    desc: "Your operation fully documented — without lifting a finger.",
  },
];

export default function CommandCenter() {
  return (
    <section
      id="command-center"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 800,
        height: 400,
        background: "radial-gradient(ellipse, rgba(26,92,168,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Two-column layout ── */}
        <div
          className="cc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          {/* Left — text */}
          <div>
            <SectionReveal>
              <div className="slabel">Live Intelligence</div>
              <h2
                className="section-title"
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  marginBottom: 20,
                }}
              >
                Your Business.{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1A5CA8, #D4A53A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  One Screen. Always Live.
                </span>
              </h2>
              <p
                className="section-desc"
                style={{ maxWidth: 460, marginBottom: 36 }}
              >
                Every LPS client gets access to a personalized Command Center —
                a real-time dashboard where you can see your KPIs, pipeline, team
                performance, and revenue without opening a single spreadsheet.
              </p>
            </SectionReveal>

            {/* Feature bullets */}
            <SectionReveal delay={0.1}>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  marginBottom: 44,
                }}
              >
                {features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 8,
                        background: "var(--blue-dim)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          color: "var(--text)",
                          marginBottom: 3,
                        }}
                      >
                        {f.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.55,
                        }}
                      >
                        {f.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionReveal>

            {/* CTA */}
            <SectionReveal delay={0.15}>
              <a
                href={DASHBOARDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  background: "linear-gradient(135deg, #1A5CA8, #2B7FE0)",
                  color: "#FFFFFF",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  borderRadius: 10,
                  boxShadow: "0 4px 20px rgba(43,127,224,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 8px 32px rgba(43,127,224,0.45)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(43,127,224,0.35)";
                }}
              >
                Explorar el Dashboard
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2 7.5h11M8.5 3l4.5 4.5L8.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Live badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  marginLeft: 16,
                  verticalAlign: "middle",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#10B981",
                    boxShadow: "0 0 8px #10B981",
                    animation: "pulse-live 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "var(--text-dim)",
                  }}
                >
                  LIVE DATA · UPDATED IN REAL TIME
                </span>
              </div>
            </SectionReveal>
          </div>

          {/* Right — mockup */}
          <SectionReveal delay={0.2} variant="scale">
            <DashMockup />
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cc-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @keyframes pulse-live {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
