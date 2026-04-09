"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SpotlightCard from "./SpotlightCard";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

const steps = [
  {
    num: "01",
    title: "We Learn Your Business",
    desc: "We map exactly where you lose time, lose leads, and where money slips through the cracks — before we build anything.",
  },
  {
    num: "02",
    title: "We Design & Build Your System",
    desc: "We build it, test it, and connect everything. When we hand it over, it works — no guesswork, no back-and-forth.",
  },
  {
    num: "03",
    title: "You Go Live in 7–30 Days",
    desc: "A fully operational AI system running your business in the background. We stay by your side as you scale.",
  },
];

const outcomes = [
  {
    badge: "Your business on one screen",
    title: "A Command Center Built for You",
    body: "Real-time dashboards with every KPI that matters — leads, revenue, inventory, dispatch, performance — updating live. Not a template. Built from scratch for your operation.",
    tag: "Custom dashboards · live data · full visibility",
    color: "var(--blue)",
  },
  {
    badge: "AI agents running your departments",
    title: "Your Own AI Workforce",
    body: "Specialized AI agents for sales, operations, finance, and support — each trained on your business, handling their domain automatically. Calls answered, leads followed up, anomalies flagged, reports generated.",
    tag: "AI agents · n8n workflows · multi-department automation",
    color: "var(--gold)",
  },
  {
    badge: "Custom software, not off-the-shelf tools",
    title: "Software Built Around Your Process",
    body: "Order management, inventory control, dispatch tracking, billing systems, client portals — built exactly for how your business works. Database-backed, real-time, and yours.",
    tag: "Next.js · PostgreSQL · custom back-office systems",
    color: "var(--blue)",
  },
  {
    badge: "Run more with fewer people",
    title: "One Team. Startup-Level Output.",
    body: "The same infrastructure that funded startups pay engineers $500K/year to build — deployed for your business in weeks. Handle 5× the volume without adding headcount.",
    tag: "Full-stack AI infrastructure · scalable by design",
    color: "var(--gold)",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      {/* Anchor for nav #process link */}
      <span id="process" style={{ position: "absolute", top: -80 }} />

      <div className="section-inner">

        {/* ── Header ───────────────────────────────────────── */}
        <SectionReveal>
          <div className="slabel">How It Works</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            <SplitText text="We Do the Work." delay={0.05} />{" "}
            <ShinyText text="You Keep the Results." speed={3.2} />
          </h2>
          <p className="section-desc">
            You don&apos;t need to understand the technology. You just need to
            see what changes on day one.
          </p>
        </SectionReveal>

        {/* ── 3 Steps ──────────────────────────────────────── */}
        <div className="steps-row" style={{ display: "flex", alignItems: "stretch", gap: 0, marginBottom: 0 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              style={{
                flex: 1,
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRight: i < steps.length - 1 ? "none" : "1px solid var(--border)",
                borderRadius: i === 0 ? "12px 0 0 12px" : i === steps.length - 1 ? "0 12px 12px 0" : 0,
                padding: "36px 28px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: i % 2 === 0
                    ? "linear-gradient(90deg, var(--blue), rgba(26,92,168,0))"
                    : "linear-gradient(90deg, var(--gold), rgba(212,165,58,0))",
                }}
              />

              {/* Large watermark number */}
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -8,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "8rem",
                  color: "rgba(15,34,64,0.04)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {step.num}
              </div>

              {/* Step badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: i % 2 === 0 ? "rgba(26,92,168,0.08)" : "rgba(212,165,58,0.1)",
                  borderRadius: 100,
                  padding: "5px 14px 5px 10px",
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: i % 2 === 0 ? "var(--blue)" : "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    color: "white",
                    letterSpacing: "0.04em",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: i % 2 === 0 ? "var(--blue)" : "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  Step {step.num}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  lineHeight: 1.35,
                  marginBottom: 12,
                  color: "var(--text)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.72,
                }}
              >
                {step.desc}
              </p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div
                  className="step-connector"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: -14,
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: "1px solid var(--border2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-dim)",
                    fontSize: "0.7rem",
                  }}
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Bridge divider ───────────────────────────────── */}
        <SectionReveal delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              margin: "48px 0 44px",
            }}
          >
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, var(--border2))" }} />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 22px",
                border: "1px solid var(--gold-dim)",
                borderRadius: 100,
                background: "rgba(212,165,58,0.06)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
              What your business looks like after day 1
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, var(--border2), transparent)" }} />
          </div>
        </SectionReveal>

        {/* ── 4 Outcome cards ──────────────────────────────── */}
        <div
          className="solutions-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {outcomes.map((out, i) => (
            <SectionReveal key={i} delay={i * 0.1} variant="scale">
              <SpotlightCard
                spotlightColor={`${out.color}22`}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "32px 28px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 1px 4px rgba(15,34,64,0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = out.color === "var(--blue)"
                    ? "rgba(26,92,168,0.35)"
                    : "rgba(212,165,58,0.4)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 8px 32px rgba(15,34,64,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 1px 4px rgba(15,34,64,0.04)";
                }}
              >
                {/* Outcome badge */}
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: out.color,
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: out.color,
                      flexShrink: 0,
                    }}
                  />
                  {out.badge}
                </div>

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    lineHeight: 1.35,
                    marginBottom: 14,
                    color: "var(--text)",
                  }}
                >
                  {out.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.72,
                    flexGrow: 1,
                    marginBottom: 20,
                  }}
                >
                  {out.body}
                </p>

                <div
                  style={{
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                  }}
                >
                  {out.tag}
                </div>
              </SpotlightCard>
            </SectionReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-row { flex-direction: column !important; }
          .steps-row > div {
            border-right: 1px solid var(--border) !important;
            border-radius: 12px !important;
          }
          .step-connector { display: none !important; }
          .solutions-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
