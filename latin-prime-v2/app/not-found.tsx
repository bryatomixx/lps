import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--navy)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: 48,
        }}
      >
        Latin Prime Systems
      </div>

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,92,168,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Label */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 24,
        }}
      >
        <span style={{ width: 28, height: 1, background: "linear-gradient(90deg, transparent, var(--gold))", display: "inline-block" }} />
        Coming Soon
      </div>

      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: 900,
          color: "#fff",
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          marginBottom: 20,
          maxWidth: 600,
        }}
      >
        We&apos;re Building<br />
        <span style={{
          background: "linear-gradient(90deg, #D4A53A, #E8BE4A)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          This Page.
        </span>
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: "1rem",
          color: "#94A3B8",
          lineHeight: 1.75,
          maxWidth: 440,
          marginBottom: 48,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
        }}
      >
        This section is on its way. In the meantime, everything you need is already on the homepage — or book a call and we&apos;ll walk you through it directly.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/"
          style={{
            background: "#D4A53A",
            color: "#0D1B2A",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "0.9rem",
            padding: "14px 28px",
            borderRadius: 8,
            textDecoration: "none",
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s",
          }}
        >
          ← Back to Homepage
        </Link>
        <a
          href="https://link.latinprimesystems.com/widget/bookings/latin-prime-demo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            color: "#fff",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "14px 28px",
            borderRadius: 8,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            letterSpacing: "-0.01em",
            transition: "border-color 0.2s",
          }}
        >
          Book a Free Call →
        </a>
      </div>

      {/* Bottom label */}
      <p
        style={{
          position: "absolute",
          bottom: 32,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase",
        }}
      >
        AI · Automation · CRM · Business Infrastructure
      </p>
    </div>
  );
}
