"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";
const STARTER_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/692e34bda611824d7675e7f0";
const PRO_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/69cc6409c6a0e600f4d06bd2";
const GROWTH_PAYMENT =
  "https://link.latinprimesystems.com/payment-link/692e3647d8c1a8022cff08f1";

type Currency = "USD" | "COP" | "MXN";

// Approximate rates — USD is the billing currency
const RATES: Record<Currency, number> = { USD: 1, COP: 4200, MXN: 17.5 };
const CURRENCY_LABELS: Record<Currency, string> = {
  USD: "🇺🇸 USD",
  COP: "🇨🇴 COP",
  MXN: "🇲🇽 MXN",
};

/** Round to a "clean" number based on magnitude — no ugly decimals or long strings */
function roundNicely(n: number): number {
  if (n >= 1_000_000) return Math.round(n / 100_000) * 100_000; // 2,087,400 → 2,100,000
  if (n >=    50_000) return Math.round(n /   5_000) *   5_000; // 69,947 → 70,000
  if (n >=     5_000) return Math.round(n /     500) *     500; // 17,447 → 17,500
  if (n >=       500) return Math.round(n /      50) *      50; // 847 → 850
  return Math.round(n / 10) * 10;
}

function toLocal(n: number, currency: Currency): string {
  const rounded = roundNicely(n);
  if (currency === "COP") return rounded.toLocaleString("es-CO");
  return rounded.toLocaleString("es-MX");
}

function formatPrice(usd: number | null, currency: Currency): string {
  if (usd === null) return "Custom";
  if (currency === "USD") return `$${usd.toLocaleString("en-US")}`;
  return `$${toLocal(usd * RATES[currency], currency)}`;
}

function formatSetup(usd: number | null, currency: Currency, label: string, from = false): string {
  if (usd === null) return label;
  const pre = from ? "from " : "";
  if (currency === "USD") return `+ ${pre}$${usd.toLocaleString("en-US")} one-time setup`;
  return `+ ${pre}$${toLocal(usd * RATES[currency], currency)} ${currency} cuota de implementación única`;
}

interface Plan {
  tier: string;
  tagline: string;
  priceUSD: number | null;
  setupUSD: number | null;
  setupLabel: string;
  setupFrom?: boolean;
  priceSub: string;
  ideal: string;
  featured: boolean;
  badge?: string;
  guarantee: string;
  cta: string;
  ctaHref: string;
  features: Array<string | { section: string }>;
}

const plans: Plan[] = [
  {
    tier: "Starter",
    tagline:
      "Your business organized, automated, and capturing every lead — without hiring anyone new.",
    priceUSD: 497,
    setupUSD: 2497,
    setupLabel: "+ $2,497 one-time setup",
    priceSub: "/mo",
    ideal: "Best for: Solo operators and small teams running their business without a real system.",
    featured: false,
    guarantee:
      "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost.",
    cta: "Book Your Free Strategy Call",
    ctaHref: STARTER_PAYMENT,
    features: [
      { section: "── WEBSITE ──" },
      "1-page website or landing page — professionally designed, built, and connected to your CRM",
      "Website hosting & maintenance — included every month, no extra cost",
      { section: "── CRM & PIPELINE ──" },
      "CRM fully built for your business — contacts, tags, custom fields, and pipeline stages configured from day one",
      "Lead pipeline setup — custom stages from first contact to closed deal",
      "Contact import & organization — all your existing contacts loaded and structured",
      "Lead capture forms — connected directly to your CRM, no manual entry",
      "Unified social media inbox — Instagram & Facebook DMs managed in one place",
      { section: "── AUTOMATIONS ──" },
      "Missed call text-back — automatic SMS sent in under 30 seconds when you don't answer",
      "New lead SMS follow-up sequence — 3-step automated texts the moment someone enters your pipeline",
      "New lead email follow-up sequence — automated welcome + follow-up emails",
      "Appointment confirmation & reminder — automatic messages before every booking",
      "No-show follow-up — automatic re-engagement if a client misses their appointment",
      "Social media auto-reply — responds to DMs and captures contact info when you're unavailable",
      "Online booking link — clients schedule directly to your calendar, zero back-and-forth",
      { section: "── SUPPORT ──" },
      "Onboarding & training session — full walkthrough of your system",
      "Monthly strategy call — review performance and adjust",
      "Email & chat support — 48h response",
    ],
  },
  {
    tier: "Pro",
    tagline:
      "Your full operation on autopilot — leads, sales, reputation, and a professional website. All connected.",
    priceUSD: 997,
    setupUSD: 3997,
    setupLabel: "+ $3,997 one-time setup",
    priceSub: "/mo",
    ideal: "Best for: Growing businesses ready to replace manual processes with automated systems.",
    featured: false,
    badge: "Best Value",
    guarantee:
      "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost.",
    cta: "Book Your Free Strategy Call",
    ctaHref: PRO_PAYMENT,
    features: [
      "Everything in Starter, plus:",
      { section: "── WEBSITE ──" },
      "Full website — all the pages your business needs, custom designed, built, and connected to your CRM. Live in 7 days",
      "Website hosting & maintenance — included every month, no extra cost",
      "AI chatbot on your website — captures leads, answers FAQs, and books appointments automatically",
      { section: "── ADVANCED AUTOMATIONS ──" },
      "Internal workflow automations — task assignments, status updates, and process handoffs between your team",
      "Re-engagement campaign — automatically reaches out to cold or inactive leads",
      "Proposal follow-up — automatic nudge sent if a quote or proposal goes unanswered",
      "Invoice & payment reminders — automated follow-up on unpaid or overdue invoices",
      "Multi-channel follow-up sequences — SMS, email, and social DMs coordinated in one flow",
      { section: "── SALES & REPUTATION ──" },
      "AI lead scoring — automatically ranks your leads so you focus on the hottest ones first",
      "Full sales pipeline — visual deal tracking from first contact to signed contract",
      "Automated review requests — every client gets a review prompt after their service",
      "Negative review alert — get notified immediately if a bad review is left anywhere",
      { section: "── REPORTING & SUPPORT ──" },
      "Monthly performance report — leads, bookings, conversions, and automation activity",
      "Bi-weekly strategy calls",
      "Priority support — 24h response",
    ],
  },
  {
    tier: "Growth",
    tagline:
      "An AI that answers your calls, speaks in your voice, and books appointments — with a dedicated team managing everything.",
    priceUSD: 1797,
    setupUSD: 5997,
    setupLabel: "+ $5,997 one-time setup",
    priceSub: "/mo",
    ideal: "Best for: Businesses that want the full AI stack — voice, automation, and dedicated management.",
    featured: true,
    badge: "Most Popular",
    guarantee:
      "🛡️ 90-Day ROI Guarantee — measurable results or we keep working at no extra cost.",
    cta: "Book Your Free Strategy Call",
    ctaHref: GROWTH_PAYMENT,
    features: [
      "Everything in Pro, plus:",
      { section: "── AI VOICE ──" },
      "AI voice agent — answers inbound calls, qualifies leads, and books appointments automatically",
      "Your voice, cloned with AI — the agent speaks using a replica of your own voice",
      "Outbound AI calling — proactively calls your lead list and follows up without manual dialing",
      "Call transcripts & summaries — every call automatically logged, summarized, and saved to the CRM",
      "AI video avatar — a digital version of you for personalized video messages and follow-ups",
      { section: "── INTELLIGENCE ──" },
      "Advanced lead routing — hot leads get prioritized and assigned automatically",
      "Full automation ecosystem — every process in your business mapped and automated end-to-end",
      "Advanced analytics dashboard — full visibility into every call, lead, conversion, and revenue metric",
      { section: "── DEDICATED MANAGEMENT ──" },
      "Dedicated Success Manager — a real person assigned to your account, managing and optimizing your system weekly",
      "Weekly strategy & optimization calls",
      "Proactive improvements — monthly adjustments to automations based on your data",
      "Same-day priority support",
      "Quarterly full system audit & upgrade",
    ],
  },
  {
    tier: "Enterprise",
    tagline:
      "Custom AI infrastructure for agencies, franchises, and multi-location businesses operating at scale.",
    priceUSD: null,
    setupUSD: 8997,
    setupLabel: "",
    setupFrom: true,
    priceSub: "",
    ideal: "Best for: Agencies, multi-location brands, and high-volume operations needing fully custom infrastructure.",
    featured: false,
    guarantee:
      "🛡️ Custom SLA & documented performance guarantees — or we keep working at no extra cost.",
    cta: "Request Proposal",
    ctaHref: BOOKING_URL,
    features: [
      "Everything in Growth, plus:",
      { section: "── CUSTOM INFRASTRUCTURE ──" },
      "Multiple AI voice agents — dedicated inbound and outbound agents for different campaigns or locations",
      "Custom API integrations — connect any software, ERP, POS, or internal platform you use",
      "Multi-location CRM architecture — manage all your locations and teams from a single dashboard",
      "White-label dashboards — branded reporting for your clients or internal leadership",
      "AI video series & full voice cloning suite — multiple avatars and branded voice assets",
      "Dedicated development hours every month — new builds, custom automations, and ongoing updates",
      { section: "── PLATINUM SUPPORT ──" },
      "Executive Strategy Director assigned to your account",
      "24/7 emergency support line",
      "Monthly executive business review with documented results",
      "Custom SLA & performance guarantees in writing",
    ],
  },
];

function FeatureItem({ feat, featured }: { feat: string | { section: string }; featured: boolean }) {
  if (typeof feat === "object") {
    return (
      <li
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--text-muted)",
          padding: "12px 0 4px",
          marginTop: 4,
          listStyle: "none",
          fontWeight: 500,
        }}
      >
        {feat.section}
      </li>
    );
  }
  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        fontSize: "0.83rem",
        color: "var(--text-muted)",
        lineHeight: 1.6,
        listStyle: "none",
      }}
    >
      <span style={{ color: "#D4A53A", flexShrink: 0, marginTop: 2 }}>✓</span>
      {feat}
    </li>
  );
}

type Billing = "monthly" | "annual";

const ANNUAL_DISCOUNT = 0.25;

const MONTHLY_CTA: Record<string, string> = {
  Starter:    "Get My Starter System →",
  Pro:        "Get My Pro System →",
  Growth:     "Get My AI Stack →",
  Enterprise: "Request Proposal",
};

function getDisplayPrice(usd: number | null, billing: Billing): number | null {
  if (usd === null) return null;
  if (billing === "annual") return Math.round(usd * (1 - ANNUAL_DISCOUNT));
  return usd;
}

const PREVIEW_COUNT = 5; // items shown before "see more"

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [billing, setBilling] = useState<Billing>("monthly");
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <section
      id="pricing"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">Investment</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          >
            <SplitText text="Enterprise Infrastructure" delay={0.05} />{" "}
            <ShinyText text="at Every Budget" speed={4} />
          </h2>
          <p className="section-desc">
            Choose the level that fits where your business is today — and upgrade
            as you grow. Every plan includes setup, configuration, and ongoing support.
          </p>

          {/* Billing toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32, marginBottom: 4 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(15,34,64,0.05)",
                borderRadius: 100,
                padding: 4,
                gap: 0,
                position: "relative",
              }}
            >
              <button
                onClick={() => setBilling("monthly")}
                style={{
                  background: billing === "monthly" ? "#FFFFFF" : "transparent",
                  border: "none",
                  borderRadius: 100,
                  color: billing === "monthly" ? "var(--text)" : "var(--text-muted)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: billing === "monthly" ? 700 : 500,
                  padding: "8px 22px",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  boxShadow: billing === "monthly" ? "0 2px 8px rgba(15,34,64,0.1)" : "none",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("annual")}
                style={{
                  background: billing === "annual" ? "#FFFFFF" : "transparent",
                  border: "none",
                  borderRadius: 100,
                  color: billing === "annual" ? "var(--text)" : "var(--text-muted)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: billing === "annual" ? 700 : 500,
                  padding: "8px 22px",
                  cursor: "pointer",
                  transition: "all 0.22s",
                  boxShadow: billing === "annual" ? "0 2px 8px rgba(15,34,64,0.1)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                Annual
                <span
                  style={{
                    background: "linear-gradient(135deg, var(--blue), var(--gold))",
                    color: "white",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 100,
                  }}
                >
                  SAVE 25%
                </span>
              </button>
            </div>
          </div>
          {billing === "annual" && (
            <p
              style={{
                textAlign: "center",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.08em",
                color: "var(--text-dim)",
                marginBottom: 0,
              }}
            >
              Annual pricing shown · billed as one yearly payment
            </p>
          )}

          {/* Currency toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>
              Currency:
            </span>
            <div style={{ display: "flex", border: "1px solid var(--border2)", borderRadius: 6, overflow: "hidden" }}>
              {(["USD", "COP", "MXN"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  style={{
                    background: currency === c ? "#D4A53A" : "transparent",
                    border: "none",
                    borderRight: c !== "MXN" ? "1px solid var(--border2)" : "none",
                    color: currency === c ? "white" : "var(--text-muted)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    padding: "7px 16px",
                    cursor: "pointer",
                    transition: "background 0.2s, color 0.2s",
                    fontWeight: currency === c ? 700 : 400,
                  }}
                >
                  {CURRENCY_LABELS[c]}
                </button>
              ))}
            </div>
            {currency !== "USD" && (
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.57rem", letterSpacing: "0.06em", color: "var(--text-dim)" }}>
                ≈ Approximate · USD is the billing currency
              </span>
            )}
          </div>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <SectionReveal key={i} delay={i * 0.13} variant="scale">
              <div
                style={plan.featured ? {
                  background: "#FFFFFF",
                  border: "2px solid var(--blue)",
                  borderRadius: 12,
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: "0 8px 32px rgba(26,92,168,0.12)",
                } : {
                  background: "#FFFFFF",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                  boxShadow: "0 2px 8px rgba(15,34,64,0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.featured ? "var(--blue)" : "rgba(26,92,168,0.35)";
                  el.style.boxShadow = "0 8px 40px rgba(26,92,168,0.15)";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = plan.featured ? "var(--blue)" : "var(--border)";
                  el.style.boxShadow = plan.featured ? "0 8px 32px rgba(26,92,168,0.12)" : "0 2px 8px rgba(15,34,64,0.04)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Top gradient bar */}
                {plan.featured ? (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 4,
                      background: "linear-gradient(90deg, #D4A53A, #E8BE4A)",
                      boxShadow: "none",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, transparent, var(--border2), transparent)",
                    }}
                  />
                )}

                {plan.badge && (
                  <div
                    style={{
                      display: "inline-block",
                      background: plan.featured ? "var(--blue-dim)" : "rgba(212,165,58,0.1)",
                      color: plan.featured ? "var(--blue)" : "var(--gold)",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      fontWeight: 600,
                      marginBottom: 16,
                      boxShadow: "none",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    marginBottom: 8,
                  }}
                >
                  <GradientText
                    text={plan.tier}
                    speed={plan.featured ? 3 : 6}
                    from={plan.featured ? "#D4A53A" : "#1A5CA8"}
                    mid={plan.featured ? "#F0D080" : "#D4A53A"}
                    to={plan.featured ? "#2B7FE0" : "#2B7FE0"}
                  />
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                    marginBottom: 24,
                    minHeight: 60,
                  }}
                >
                  {plan.tagline}
                </p>

                <motion.div
                  key={`price-${billing}-${plan.tier}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18 }}
                >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 900,
                      fontSize: plan.priceUSD && currency !== "USD" ? "2rem" : "2.6rem",
                      color: plan.featured ? "var(--blue)" : "var(--text)",
                      letterSpacing: "-0.03em",
                      transition: "font-size 0.2s",
                    }}
                  >
                    {formatPrice(getDisplayPrice(plan.priceUSD, billing), currency)}
                  </span>
                  {plan.priceSub && (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                      {plan.priceSub}
                      {currency !== "USD" && <span style={{ fontSize: "0.7rem", marginLeft: 4 }}>{currency}</span>}
                    </span>
                  )}
                  {billing === "annual" && plan.priceUSD && (
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        color: "var(--text-dim)",
                        textDecoration: "line-through",
                        marginLeft: 6,
                        alignSelf: "center",
                      }}
                    >
                      {formatPrice(plan.priceUSD, currency)}
                    </span>
                  )}
                </div>

                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    letterSpacing: "0.08em",
                    fontWeight: 500,
                    color: "var(--text-dim)",
                    marginBottom: billing === "annual" && plan.priceUSD ? 2 : 6,
                  }}
                >
                  {formatSetup(plan.setupUSD, currency, plan.setupLabel, plan.setupFrom)}
                </div>
                {billing === "annual" && plan.priceUSD && (
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      color: "var(--blue)",
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    ✓ Billed annually · 25% saved
                  </div>
                )}
                </motion.div>

                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    marginBottom: 28,
                    paddingBottom: 24,
                    borderBottom: "1px solid var(--border)",
                    lineHeight: 1.6,
                  }}
                >
                  {plan.ideal}
                </div>

                {/* Feature list — collapsible */}
                {(() => {
                  const isExpanded = expanded[i] ?? false;
                  const preview = plan.features.slice(0, PREVIEW_COUNT);
                  const hidden = plan.features.slice(PREVIEW_COUNT);
                  const hiddenFeatureCount = hidden.filter(
                    (f) => typeof f === "string"
                  ).length;

                  return (
                    <>
                      <ul
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          marginBottom: 0,
                          flex: 1,
                        }}
                      >
                        {preview.map((feat, j) => (
                          <FeatureItem key={j} feat={feat} featured={plan.featured} />
                        ))}

                        {/* Expanded features */}
                        {isExpanded &&
                          hidden.map((feat, j) => (
                            <FeatureItem
                              key={`h${j}`}
                              feat={feat}
                              featured={plan.featured}
                            />
                          ))}
                      </ul>

                      {/* See more / collapse toggle */}
                      {hidden.length > 0 && (
                        <button
                          onClick={() =>
                            setExpanded((prev) => ({
                              ...prev,
                              [i]: !isExpanded,
                            }))
                          }
                          style={{
                            marginTop: 14,
                            background: "none",
                            border: `1px solid ${plan.featured ? "rgba(26,92,168,0.25)" : "var(--border2)"}`,
                            borderRadius: 6,
                            color: plan.featured ? "var(--blue)" : "var(--text-dim)",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "0.68rem",
                            letterSpacing: "0.08em",
                            padding: "8px 14px",
                            cursor: "pointer",
                            width: "100%",
                            textAlign: "center",
                            transition: "all 0.2s",
                            fontWeight: 500,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)";
                            (e.currentTarget as HTMLElement).style.color = "var(--blue)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.borderColor = plan.featured
                              ? "rgba(26,92,168,0.25)"
                              : "var(--border2)";
                            (e.currentTarget as HTMLElement).style.color = plan.featured
                              ? "var(--blue)"
                              : "var(--text-dim)";
                          }}
                        >
                          {isExpanded
                            ? "↑ Show less"
                            : `+ ${hiddenFeatureCount} more features`}
                        </button>
                      )}
                    </>
                  );
                })()}

                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.06em",
                    color: "var(--text-dim)",
                    marginTop: 16,
                    marginBottom: 24,
                    lineHeight: 1.6,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {plan.guarantee}
                </div>

                <motion.div
                  key={`btn-${billing}-${plan.tier}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.18, delay: 0.04 }}
                >
                {(() => {
                  const isEnterprise = plan.tier === "Enterprise";
                  const isPro        = plan.tier === "Pro";
                  const isGrowth     = plan.tier === "Growth";

                  // Annual → always book a call (except Enterprise stays same)
                  const href    = !isEnterprise && billing === "annual" ? BOOKING_URL : plan.ctaHref;
                  const ctaText = isEnterprise
                    ? "Request Proposal"
                    : billing === "annual"
                    ? "Book My Strategy Call →"
                    : MONTHLY_CTA[plan.tier] ?? "Get Started →";

                  if (isEnterprise) {
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pricing-btn-gradient"
                        style={{
                          display: "block",
                          textAlign: "center",
                          padding: "14px 24px",
                          borderRadius: 8,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          textDecoration: "none",
                          transition: "transform 0.2s, box-shadow 0.2s",
                          marginTop: "auto",
                          boxShadow: "0 4px 20px rgba(26,92,168,0.3)",
                          color: "white",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = "translateY(-2px)";
                          el.style.boxShadow = "0 8px 28px rgba(212,165,58,0.45)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.transform = "translateY(0)";
                          el.style.boxShadow = "0 4px 20px rgba(26,92,168,0.3)";
                        }}
                      >
                        {ctaText}
                      </a>
                    );
                  }

                  const bg      = isPro ? "#D4A53A" : isGrowth ? "#0D1B2A" : "#1A5CA8";
                  const bgHover = isPro ? "#C49A30" : isGrowth ? "#132238" : "#154d8f";
                  const txtColor = isPro ? "#0D1B2A" : "white";
                  const shadow   = isPro
                    ? "0 4px 16px rgba(212,165,58,0.45)"
                    : isGrowth
                    ? "0 4px 16px rgba(13,27,42,0.35)"
                    : "0 4px 16px rgba(26,92,168,0.25)";

                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: "14px 24px",
                        background: bg,
                        border: "none",
                        color: txtColor,
                        borderRadius: 8,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        textDecoration: "none",
                        transition: "all 0.25s",
                        marginTop: "auto",
                        boxShadow: shadow,
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = bgHover;
                        el.style.transform = "translateY(-1px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = bg;
                        el.style.transform = "translateY(0)";
                      }}
                    >
                      {ctaText}
                    </a>
                  );
                })()}
                </motion.div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              color: "var(--text-dim)",
              textAlign: "center",
              marginTop: 36,
              lineHeight: 1.7,
            }}
          >
            All plans include a free strategy call before you commit. No long-term
            contracts — cancel anytime. Setup fee is paid once at the start — it covers
            full system build, configuration, and launch.
          </p>
        </SectionReveal>

        {/* AI Add-Ons */}
        <SectionReveal delay={0.15}>
          <div
            style={{
              marginTop: 80,
              paddingTop: 64,
              borderTop: "1px solid var(--border)",
            }}
          >
            <div style={{ marginBottom: 40 }}>
              <div className="slabel">Optional Upgrades</div>
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  letterSpacing: "-0.025em",
                  marginBottom: 12,
                }}
              >
                <SplitText text="Add AI Capabilities to" delay={0.05} />{" "}
                <ShinyText text="Any Plan" speed={3.2} />
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540 }}>
                Not ready for Growth? Add individual AI capabilities to your Starter or Pro plan — and upgrade to the full stack whenever you're ready.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {[
                {
                  icon: "🎙️",
                  name: "Voice AI Agent",
                  desc: "An AI that answers your inbound calls, qualifies leads, and books appointments — automatically, around the clock.",
                  setup: 1497,
                  monthly: 497,
                  available: "Available for Starter & Pro",
                  highlight: true,
                },
                {
                  icon: "🔊",
                  name: "Voice Cloning",
                  desc: "Your AI agent speaks in your own voice — cloned and branded. Every call sounds like you, even when you're not there.",
                  setup: 497,
                  monthly: 197,
                  available: "Available for Starter & Pro",
                  highlight: false,
                },
                {
                  icon: "🎬",
                  name: "AI Video Avatar",
                  desc: "A digital version of you for personalized video messages, follow-ups, and automated outreach that feels human.",
                  setup: 997,
                  monthly: 297,
                  available: "Available for Pro plan only",
                  highlight: false,
                },
              ].map((addon, i) => (
                <div
                  key={i}
                  style={{
                    background: addon.highlight ? "var(--navy)" : "#FFFFFF",
                    border: addon.highlight ? "1px solid rgba(212,165,58,0.3)" : "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    boxShadow: addon.highlight ? "0 8px 32px rgba(13,27,42,0.15)" : "0 2px 8px rgba(15,34,64,0.04)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = addon.highlight
                      ? "0 12px 40px rgba(13,27,42,0.25)"
                      : "0 8px 32px rgba(15,34,64,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = addon.highlight
                      ? "0 8px 32px rgba(13,27,42,0.15)"
                      : "0 2px 8px rgba(15,34,64,0.04)";
                  }}
                >
                  {addon.highlight && (
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--gold), var(--gold-bright))" }} />
                  )}
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{addon.icon}</div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: addon.highlight ? "#FFFFFF" : "var(--text)",
                      marginBottom: 10,
                    }}
                  >
                    {addon.name}
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: addon.highlight ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: 24,
                      flexGrow: 1,
                    }}
                  >
                    {addon.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 16,
                      marginBottom: 16,
                      paddingTop: 16,
                      borderTop: `1px solid ${addon.highlight ? "rgba(255,255,255,0.12)" : "var(--border)"}`,
                    }}
                  >
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: addon.highlight ? "rgba(255,255,255,0.45)" : "var(--text-dim)", textTransform: "uppercase", marginBottom: 4 }}>One-time setup</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: addon.highlight ? "var(--gold)" : "var(--text)", letterSpacing: "-0.02em" }}>${addon.setup.toLocaleString("en-US")}</div>
                    </div>
                    <div style={{ width: 1, background: addon.highlight ? "rgba(255,255,255,0.12)" : "var(--border)" }} />
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: addon.highlight ? "rgba(255,255,255,0.45)" : "var(--text-dim)", textTransform: "uppercase", marginBottom: 4 }}>Monthly</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: addon.highlight ? "#FFFFFF" : "var(--text)", letterSpacing: "-0.02em" }}>${addon.monthly}<span style={{ fontSize: "0.75rem", fontWeight: 500, color: addon.highlight ? "rgba(255,255,255,0.5)" : "var(--text-dim)" }}>/mo</span></div>
                    </div>
                  </div>

                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.06em",
                      color: addon.highlight ? "var(--gold)" : "var(--text-dim)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: addon.highlight ? "var(--gold)" : "var(--text-dim)", flexShrink: 0, display: "inline-block" }} />
                    {addon.available}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.63rem",
                letterSpacing: "0.06em",
                color: "var(--text-dim)",
                textAlign: "center",
                marginTop: 24,
                lineHeight: 1.7,
              }}
            >
              Add-ons are included by default in the Growth plan. Ask about bundling during your strategy call.
            </p>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        .pricing-btn-gradient {
          background-image: linear-gradient(90deg, #1A5CA8 0%, #D4A53A 35%, #2B7FE0 65%, #1A5CA8 100%);
          background-size: 200% 100%;
          animation: gradient-drift 3s linear infinite;
        }
        .pricing-btn-gradient:hover {
          animation-duration: 1.5s;
        }
      `}</style>
    </section>
  );
}
