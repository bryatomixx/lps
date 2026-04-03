"use client";
import SectionReveal from "./SectionReveal";

const problems = [
  {
    icon: "📞",
    title: "You lose leads because no one answered in time",
    desc: "A potential client calls. No one picks up. They move on to your competitor. This happens dozens of times a week — silently.",
  },
  {
    icon: "🔁",
    title: "Your team wastes hours on repetitive tasks",
    desc: "Data entry, sending the same emails, copying information between systems, generating the same reports every week. Expensive human hours — on tasks a machine can do.",
  },
  {
    icon: "📉",
    title: "You can't scale without hiring more people",
    desc: "Every new client means more work, more overhead, more staff. Growth feels expensive. Large companies solved this with systems — you can too.",
  },
  {
    icon: "😤",
    title: "You're doing $10/hr work instead of growing",
    desc: "You started this business to grow it — not to spend your day chasing invoices, updating spreadsheets, and following up on leads manually.",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">Sound Familiar?</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
          >
            The Problems Every Business{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#B4945D",
              }}
            >
              Knows Too Well
            </em>
          </h2>
          <p className="section-desc">
            These aren&apos;t technology problems. They&apos;re business problems — and they all have a solution.
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 24,
          }}
        >
          {problems.map((p, i) => (
            <SectionReveal key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  height: "100%",
                  boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.06)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(180,148,93,0.35)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 40px rgba(15,34,64,0.1)";
                  const bar = el.firstElementChild as HTMLElement;
                  if (bar) bar.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.06)";
                  const bar = el.firstElementChild as HTMLElement;
                  if (bar) bar.style.opacity = "0";
                }}
              >
                {/* Hover glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "#B4945D",
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                  className="prob-topline"
                />
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{p.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    lineHeight: 1.4,
                    marginBottom: 12,
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  {p.desc}
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("who")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--gold)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: 0,
                    transition: "gap 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "6px")}
                >
                  What we do about it →
                </button>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
