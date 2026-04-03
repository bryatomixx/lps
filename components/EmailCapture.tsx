"use client";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WEBHOOK_URL =
  "https://latinprimesystems.app.n8n.cloud/webhook/05355d0d-cce9-4f2a-94a4-174498a2b75e";

type Status = "idle" | "sending" | "success";

const industries = [
  "Insurance Agency",
  "Real Estate",
  "Dental / Healthcare",
  "Med Spa / Aesthetics",
  "Contractor / Home Services",
  "Tax / Accounting",
  "Restaurant / Local Business",
  "Coach / Consultant",
  "Law Firm",
  "Salon / Barbershop / Spa",
  "Other",
];

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          industry,
          source: "mid-funnel-capture",
          submitted_at: new Date().toISOString(),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("success"); // still show success to not frustrate user
    }
  };

  return (
    <section
      ref={ref}
      style={{
        background: "#0F2240",
        padding: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: "rgba(180,148,93,0.08)",
          borderTop: "1px solid rgba(180,148,93,0.15)",
          borderBottom: "1px solid rgba(180,148,93,0.15)",
          padding: "64px 24px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: 560,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(180,148,93,0.15)",
              border: "1px solid rgba(180,148,93,0.35)",
              padding: "5px 14px",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#B4945D",
                animation: "dot-pulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#B4945D",
              }}
            >
              Free — No credit card
            </span>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 12 }}>✅</div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  marginBottom: 8,
                  color: "#FFFFFF",
                }}
              >
                You&apos;re in — check your inbox
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>
                Your custom automation plan is being prepared. We&apos;ll reach out within 24 hours.
              </p>
            </motion.div>
          ) : (
            <>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  lineHeight: 1.2,
                  marginBottom: 10,
                  color: "#FFFFFF",
                }}
              >
                Get Your Free{" "}
                <span
                  style={{
                    color: "#C5A059",
                  }}
                >
                  Automation Plan
                </span>
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Tell us your name and email. We&apos;ll send you a custom breakdown
                of exactly which automations would have the biggest impact on your
                specific business — no sales call required.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  placeholder="Your first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    flex: "1 1 160px",
                    maxWidth: 180,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF",
                    padding: "13px 16px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    outline: "none",
                    borderRadius: 8,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(180,148,93,0.7)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: "2 1 220px",
                    maxWidth: 280,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF",
                    padding: "13px 16px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    outline: "none",
                    borderRadius: 8,
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(180,148,93,0.7)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                />
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  style={{
                    flex: "1 1 200px",
                    maxWidth: 240,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#FFFFFF",
                    padding: "13px 16px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    outline: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(180,148,93,0.7)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                  }
                >
                  <option value="" disabled>Your industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind} style={{ background: "#0F2240", color: "#FFFFFF" }}>{ind}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    flex: "1 1 180px",
                    padding: "13px 24px",
                    background: "#B4945D",
                    color: "white",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    whiteSpace: "nowrap",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      (e.currentTarget as HTMLElement).style.background = "#C5A059";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#B4945D";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send My Free Plan →"}
                </button>
              </form>

              <p
                style={{
                  marginTop: 12,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                No spam. No sales pressure. Just a real automation strategy for your business.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
