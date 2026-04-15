"use client";
import SectionReveal from "./SectionReveal";

const rows = [
  {
    icon: "🟡",
    badge: "Starter",
    badgeColor: "#B4945D",
    condition: "You have a business and you're doing everything manually",
    detail:
      "You want to start automating the basics — follow-ups, appointments, responses — without overhauling everything at once.",
  },
  {
    icon: "🔵",
    badge: "Growth",
    badgeColor: "#B4945D",
    condition: "Your business grew — but you're still running it like day one",
    detail:
      "The manual processes that worked when you were small are now costing you time, leads, and money.",
  },
  {
    icon: "⚡",
    badge: "Enterprise",
    badgeColor: "rgba(15,34,64,0.4)",
    badgeBorderColor: "rgba(15,34,64,0.3)",
    badgeTextColor: "var(--text-muted)" as string | undefined,
    condition: "Your operation is too specific to fit into a standard package",
    detail:
      "You have complex workflows, multiple locations, or need integrations with existing systems — and you need someone to build it right.",
  },
];

export default function PlanGuide() {
  return (
    <section
      className="section-wrap"
      id="plan-guide"
      style={{ background: "var(--bg)", padding: "80px 0" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
              padding: "48px 44px",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                lineHeight: 1.25,
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              The best plan for you is the one that{" "}
              <em style={{ fontStyle: "italic", color: "#B4945D" }}>matches where you actually are.</em>
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: 36,
              }}
            >
              Choose based on where your business is right now, not where you want it to be.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {rows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    background: "#FFFFFF",
                    border: "1px solid var(--border)",
                    borderRadius: 8,
                    padding: "20px 24px",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      row.badgeColor + "44")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                  }
                  className="pg-row"
                >
                  <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>{row.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-dim)",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      If you are
                    </div>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--text)",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {row.condition}
                    </p>
                    <p
                      style={{
                        fontSize: "0.83rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {row.detail}
                    </p>
                  </div>
                  <div
                    style={{
                      flexShrink: 0,
                      padding: "6px 16px",
                      border: `1px solid ${"badgeBorderColor" in row ? row.badgeBorderColor : row.badgeColor}`,
                      color: "badgeTextColor" in row ? (row as { badgeTextColor: string }).badgeTextColor : row.badgeColor,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.badge}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .pg-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
