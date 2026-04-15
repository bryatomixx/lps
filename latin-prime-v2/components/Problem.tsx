"use client";
import { motion } from "framer-motion";
import GradientText from "./GradientText";

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.25 1.2 2 2 0 012.23 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.56-1.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        <line x1="18" y1="2" x2="22" y2="6"/>
        <line x1="22" y1="2" x2="18" y2="6"/>
      </svg>
    ),
    title: "Every missed call is a missed contract",
    desc: "Leads call once. If you don't answer, they move on. Your best opportunities disappear before you know they existed.",
    stat: "78% of buyers choose the first business that calls back.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"/>
        <path d="M3 11V9a4 4 0 014-4h14"/>
        <polyline points="7 23 3 19 7 15"/>
        <path d="M21 13v2a4 4 0 01-4 4H3"/>
      </svg>
    ),
    title: "Your team is stuck doing work robots should be doing",
    desc: "Hours lost to copy-paste, manual data entry, rescheduling, and chasing paperwork — every day, on repeat.",
    stat: "Owners report 60%+ of their week is administrative.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
        <path d="M2 12l4-4 4 3 6-7"/>
      </svg>
    ),
    title: "You're managing by memory and gut feeling",
    desc: "No live dashboard. No clear numbers. Decisions get made on guesses — and problems only surface after they've already cost you.",
    stat: "Most service businesses can't tell you their real margins.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
        <line x1="12" y1="2" x2="12" y2="1"/>
        <path d="M8 3.5C5 5 3 8 3 11.5"/>
        <path d="M16 3.5c3 1.5 5 4.5 5 8"/>
      </svg>
    ),
    title: "You can't grow what you're too busy to run",
    desc: "You become the bottleneck in your own business. Every system depends on you — so growth just means more pressure on one person.",
    stat: "Scaling without systems just means bigger chaos.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Problem() {
  return (
    <section
      id="problem"
      style={{
        background: "var(--bg)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            display: "inline-block",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
            border: "1px solid var(--border)",
            padding: "5px 14px",
            marginBottom: 24,
          }}>
            Sound Familiar?
          </div>

          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 16,
            maxWidth: 700,
          }}>
            You didn't build a business to{" "}
            <GradientText text="run it by hand." speed={5} />
          </h2>

          <p style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            lineHeight: 1.75,
            maxWidth: 560,
          }}>
            These are the four walls that keep service businesses from scaling — and they all have the same fix.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div
          className="problem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 2,
            marginBottom: 2,
          }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              style={{ position: "relative" }}
              className="problem-card-wrap"
            >
              <ProblemCard problem={p} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderTop: "none",
            padding: "28px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
          className="problem-cta-strip"
        >
          <div>
            <div style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--text)",
              marginBottom: 4,
            }}>
              Every one of these problems has a system for it.
            </div>
            <div style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}>
              In 30 minutes we map exactly which ones apply to your business — and what it costs you per month to leave them unsolved.
            </div>
          </div>
          <a
            href="#automation-quiz"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#automation-quiz")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: "var(--gold)",
              color: "#0D1B2A",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.88")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            See How We Fix It
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .problem-cta-strip { padding: 24px 20px !important; flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>
    </section>
  );
}

function ProblemCard({ problem }: { problem: typeof problems[0] }) {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        padding: "36px 32px",
        height: "100%",
        cursor: "default",
        overflow: "hidden",
        transition: "border-color 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(212,165,58,0.35)";
        el.querySelector<HTMLElement>(".card-accent-bar")!.style.opacity = "1";
        el.querySelector<HTMLElement>(".problem-icon-wrap")!.style.background = "var(--gold-dim)";
        el.querySelector<HTMLElement>(".problem-icon-wrap")!.style.borderColor = "rgba(212,165,58,0.4)";
        el.querySelector<HTMLElement>(".problem-icon-wrap")!.style.color = "var(--gold)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.querySelector<HTMLElement>(".card-accent-bar")!.style.opacity = "0";
        el.querySelector<HTMLElement>(".problem-icon-wrap")!.style.background = "var(--surface2)";
        el.querySelector<HTMLElement>(".problem-icon-wrap")!.style.borderColor = "var(--border)";
        el.querySelector<HTMLElement>(".problem-icon-wrap")!.style.color = "var(--text-muted)";
      }}
    >
      {/* Left accent bar */}
      <div
        className="card-accent-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 3,
          height: "100%",
          background: "var(--gold)",
          opacity: 0,
          transition: "opacity 0.25s",
        }}
      />

      {/* Icon */}
      <div
        className="problem-icon-wrap"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          background: "var(--surface2)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
          marginBottom: 20,
          transition: "background 0.25s, border-color 0.25s, color 0.25s",
        }}
      >
        {problem.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 700,
        fontSize: "1.05rem",
        color: "var(--text)",
        lineHeight: 1.35,
        marginBottom: 12,
      }}>
        {problem.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "0.875rem",
        color: "var(--text-muted)",
        lineHeight: 1.75,
        marginBottom: 20,
      }}>
        {problem.desc}
      </p>

      {/* Stat pill */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.04em",
        color: "var(--text-dim)",
        background: "var(--surface2)",
        border: "1px solid var(--border)",
        padding: "5px 10px",
      }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
          <circle cx="12" cy="12" r="12"/>
        </svg>
        {problem.stat}
      </div>
    </div>
  );
}
