"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

const BOOKING_URL = "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";
const WEBHOOK_URL = "https://latinprimesystems.app.n8n.cloud/webhook/05355d0d-cce9-4f2a-94a4-174498a2b75e";

// ── PRIMARY INDUSTRIES ─────────────────────────────────────────────────────────
const PRIMARY_INDUSTRIES = [
  { val: "insurance",  icon: "🛡️", title: "Insurance Agency",           desc: "Life, health, P&C agents" },
  { val: "realestate", icon: "🏠", title: "Real Estate",                desc: "Agents, brokers, investors" },
  { val: "health",     icon: "🦷", title: "Dental / Healthcare",        desc: "Clinics, practices, therapists" },
  { val: "medspa",     icon: "💆", title: "Med Spa / Aesthetics",       desc: "Spas, aesthetics, beauty" },
  { val: "contractor", icon: "🔧", title: "Contractor / Home Services", desc: "HVAC, plumbing, landscaping" },
  { val: "tax",        icon: "📊", title: "Tax / Accounting",           desc: "CPAs, bookkeepers, advisors" },
  { val: "legal",      icon: "⚖️", title: "Law Firm / Legal",           desc: "Attorneys, paralegals" },
  { val: "coach",      icon: "🎯", title: "Coach / Consultant",         desc: "Business, life, financial coaches" },
  { val: "salon",      icon: "✂️", title: "Salon / Barbershop / Spa",  desc: "Beauty & personal care" },
  { val: "restaurant", icon: "🍽️", title: "Restaurant / Local Business",desc: "Food service, retail, local shops" },
];

// ── INDUSTRY DETAILS ───────────────────────────────────────────────────────────
const INDUSTRY_DETAILS: Record<string, { desc: string; items: string[] }> = {
  insurance: {
    desc: "Agents lose policies every day because no one followed up in time. We replace that with a system that never sleeps.",
    items: [
      "AI voice agent qualifies leads & books appointments 24/7",
      "Custom agency dashboard — leads, policies, renewals, pipeline on one screen",
      "Automated renewal & re-engagement sequences (30/60/90 days)",
      "Multi-channel follow-up: call → SMS → email → voicemail drop",
      "Referral request automation sent after every closed policy",
      "Hot lead alerts with automatic CRM routing",
    ],
  },
  realestate: {
    desc: "90% of leads never close — not because they weren't interested, but because the follow-up broke down. We fix the whole pipeline.",
    items: [
      "AI agent qualifies buyer intent, budget & timeline — under 2 minutes",
      "Custom CRM with full buyer/seller pipelines built for your workflow",
      "Showing scheduler connected directly to your calendar",
      "6–12 month nurture sequences for leads not ready yet",
      "Transaction coordination dashboard — status, docs, deadlines, all automated",
      "Automatic follow-up after every open house and listing inquiry",
    ],
  },
  health: {
    desc: "Every missed appointment is lost revenue. Every unanswered call is a patient who went to the next clinic on the list.",
    items: [
      "24/7 appointment booking — no receptionist needed after hours",
      "Clinical operations dashboard — schedule, no-shows, recalls, revenue in real time",
      "Automated reminders that cut no-shows by up to 60%",
      "Patient recall campaigns for those who haven't returned in 6+ months",
      "New patient intake — automated forms connected to your system",
      "Google review funnel sent automatically after every appointment",
    ],
  },
  medspa: {
    desc: "The money is in the rebooking and the upsell — and both only happen when your follow-up is automatic and perfectly timed.",
    items: [
      "Revenue dashboard — bookings, upsells, rebooking rate, client LTV live",
      "Automated rebooking sequence after every treatment",
      "VIP client segmentation with personalized upsell campaigns",
      "Birthday & seasonal promotions deployed automatically",
      "Abandoned booking recovery — follow up within minutes",
      "Review funnel on Google & Yelp on autopilot",
    ],
  },
  contractor: {
    desc: "You're on a job site. You miss calls. Those calls are your competitors' new clients. We make sure that never happens again.",
    items: [
      "AI voice agent answers calls and books estimates — even on job sites",
      "Field operations dashboard — jobs, crew, quotes, status in one place",
      "Missed call text-back triggered in seconds",
      "Automated quote follow-up — stops leads from going cold",
      "Job completion → review request → referral sequence",
      "Seasonal campaign automation to past clients",
    ],
  },
  tax: {
    desc: "Tax season is chaos by default. Document collection, deadlines, client follow-up — all of it can run automatically.",
    items: [
      "Client portal — document collection, status tracking, deadline alerts",
      "Fully automated new client onboarding and intake",
      "Deadline reminder campaigns for quarterly & annual filings",
      "Upsell sequences for bookkeeping, payroll, and advisory services",
      "Year-round check-ins that keep client relationships warm",
      "Referral campaigns targeting your most satisfied clients",
    ],
  },
  legal: {
    desc: "Potential clients don't wait. The first firm to respond wins. We make sure that's always you.",
    items: [
      "24/7 AI intake system — qualifies case type and urgency instantly",
      "Case management dashboard — pipeline, status, deadlines, docs",
      "Immediate response to web forms, missed calls, and messages",
      "Consultation booking directly from your website",
      "Case status update sequences that reduce inbound inquiry calls by 40%+",
      "Client satisfaction follow-up and referral automation",
    ],
  },
  coach: {
    desc: "You sell outcomes. Your systems should do the same — capturing, nurturing, and closing leads without you in every step.",
    items: [
      "Lead magnet → nurture sequence → sales call, fully automated",
      "Revenue and pipeline dashboard — cohorts, LTV, conversion rates live",
      "Discovery call booking from ads, social, and email — zero friction",
      "Proposal follow-up sequence — never leave money on the table",
      "Client onboarding automation and milestone check-ins",
      "Testimonial collection and upsell sequences at the right moment",
    ],
  },
  salon: {
    desc: "Empty chairs are lost revenue. A full calendar doesn't happen by accident — it happens because the system books it for you.",
    items: [
      "Business dashboard — chair utilization, revenue, rebooking rate, reviews",
      "Automated rebooking reminder 3–4 weeks after every visit",
      "No-show and cancellation recovery sequence",
      "Loyalty rewards program — points, redemptions, fully automated",
      "Birthday promotions sent to every client on the right day",
      "Review requests sent automatically after every appointment",
    ],
  },
  restaurant: {
    desc: "You compete on Google reviews and repeat visits. Both can be systematically driven — not left to chance.",
    items: [
      "Operations dashboard — covers, revenue, peak hours, repeat rate live",
      "SMS loyalty program — points, rewards, win-back campaigns automated",
      "Review request sequence triggered after every visit or order",
      "Win-back campaigns for guests who haven't returned in 30+ days",
      "Event and promotion announcements deployed to your full database",
      "Online reservation system integrated into your operations",
    ],
  },
};

// ── MORE INDUSTRIES ────────────────────────────────────────────────────────────
const MORE_INDUSTRIES = [
  { val: "mortgage",  icon: "🏦", title: "Mortgage / Lending",          desc: "Loan officers, brokers, lenders" },
  { val: "financial", icon: "💰", title: "Financial Services",           desc: "Wealth management, planning" },
  { val: "fitness",   icon: "💪", title: "Fitness / Wellness",           desc: "Gyms, personal trainers, studios" },
  { val: "chiro",     icon: "🩺", title: "Chiro / Physical Therapy",    desc: "Chiropractors, PT clinics, rehab" },
  { val: "auto",      icon: "🚗", title: "Auto Dealership / Services",  desc: "Car sales, repair, detailing" },
  { val: "property",  icon: "🏢", title: "Property Management",          desc: "Rentals, HOA, leasing offices" },
  { val: "ecommerce", icon: "🛒", title: "E-commerce / Retail",         desc: "Online stores, product businesses" },
  { val: "education", icon: "🎓", title: "Education / Training",         desc: "Schools, tutoring, online courses" },
  { val: "vet",         icon: "🐾", title: "Veterinary Clinic",            desc: "Animal hospitals, vet practices" },
  { val: "childcare",  icon: "🧒", title: "Childcare / Daycare",          desc: "Daycare centers, preschools" },
  { val: "events",     icon: "🎉", title: "Events / Photography",         desc: "Event planners, photographers, venues" },
  { val: "cleaning",   icon: "🧹", title: "Cleaning / Janitorial",        desc: "Residential, commercial cleaning" },
  { val: "optometry",  icon: "👓", title: "Optometry / Vision",           desc: "Eye care clinics, optometrists" },
  { val: "marketing",  icon: "📣", title: "Marketing / Creative Agency",  desc: "Digital agencies, design studios" },
  { val: "travel",     icon: "✈️", title: "Travel Agency",                desc: "Tour operators, travel advisors" },
  { val: "solar",      icon: "☀️", title: "Solar / Energy",               desc: "Solar installers, energy consultants" },
  { val: "mentalhealth",icon: "🧠", title: "Mental Health / Therapy",     desc: "Therapists, psychologists, counselors" },
  { val: "pestcontrol",icon: "🐛", title: "Pest Control",                 desc: "Residential, commercial pest services" },
  { val: "immigration",icon: "🌎", title: "Immigration Services",         desc: "Immigration attorneys, consultants" },
  { val: "other",      icon: "💼", title: "Other Service Business",       desc: "Not listed above" },
];

// ── TICKER ROWS ────────────────────────────────────────────────────────────────
const nichesRow1 = [
  { icon: "🏦", title: "Mortgage / Lending" },
  { icon: "💰", title: "Financial Services" },
  { icon: "💪", title: "Fitness / Wellness" },
  { icon: "🩺", title: "Chiro / Physical Therapy" },
  { icon: "🚗", title: "Auto Dealership / Services" },
  { icon: "🏢", title: "Property Management" },
  { icon: "🛒", title: "E-commerce / Retail" },
  { icon: "🎓", title: "Education / Training" },
  { icon: "👥", title: "Staffing / HR Services" },
  { icon: "🐾", title: "Veterinary Clinic" },
  { icon: "🤝", title: "Non-Profit / Association" },
  { icon: "🚛", title: "Trucking / Logistics" },
  { icon: "📣", title: "Marketing / Creative Agency" },
  { icon: "✈️", title: "Travel Agency" },
];

const nichesRow2 = [
  { icon: "🧒", title: "Childcare / Daycare" },
  { icon: "🎉", title: "Events / Entertainment" },
  { icon: "🧹", title: "Cleaning / Janitorial" },
  { icon: "💊", title: "Pharmacy / Compounding" },
  { icon: "👓", title: "Optometry / Vision" },
  { icon: "🏡", title: "Senior Care / Assisted Living" },
  { icon: "🔧", title: "Contractor / Home Services" },
  { icon: "📊", title: "Tax / Accounting" },
  { icon: "⚖️", title: "Law Firm / Legal" },
  { icon: "🎯", title: "Coach / Consultant" },
  { icon: "🍽️", title: "Restaurant / Local Business" },
  { icon: "✂️", title: "Salon / Barbershop / Spa" },
  { icon: "💆", title: "Med Spa / Aesthetics" },
  { icon: "💼", title: "Any Service Business" },
];

// ── PAIN / VOLUME OPTIONS ──────────────────────────────────────────────────────
const PAIN_OPTIONS = [
  { val: "missed_calls",  icon: "📞", title: "Missed calls & leads that go unanswered",     desc: "Potential clients call, nobody answers — they move to a competitor" },
  { val: "slow_followup", icon: "🐌", title: "Slow or inconsistent lead follow-up",          desc: "Leads go cold because follow-up is manual and inconsistent" },
  { val: "manual_work",   icon: "🔁", title: "Too much manual, repetitive work",             desc: "Hours wasted on tasks that should be automated" },
  { val: "no_shows",      icon: "🚫", title: "No-shows & appointment cancellations",         desc: "Scheduled appointments that don't happen cost real revenue" },
  { val: "cant_scale",    icon: "📈", title: "Can't grow without hiring more people",        desc: "Every new client means more overhead — growth feels expensive" },
  { val: "no_visibility", icon: "📉", title: "No visibility into what's happening",          desc: "No clear data on leads, conversions, or what's actually working" },
];

const VOLUME_OPTIONS = [
  { val: "low",      icon: "🌱", title: "Under 20",  desc: "Early stage or niche market" },
  { val: "medium",   icon: "🔥", title: "20 – 60",   desc: "Growing and consistent flow" },
  { val: "high",     icon: "⚡", title: "60 – 150",  desc: "High volume — system is critical" },
  { val: "very_high",icon: "🚀", title: "150+",      desc: "Enterprise-level — needs full infrastructure" },
];

// ── AUTOMATIONS BY PAIN ────────────────────────────────────────────────────────
const AUTO_MAP: Record<string, { i: string; t: string; d: string }[]> = {
  missed_calls: [
    { i: "📞", t: "AI Voice Agent — 24/7 Call Answering",  d: "Every call answered, leads qualified and booked automatically" },
    { i: "💬", t: "Instant Text-Back System",               d: "Missed calls trigger immediate SMS to keep the lead warm" },
    { i: "🗓️", t: "Automated Appointment Booking",          d: "AI schedules directly into your calendar — no back-and-forth" },
  ],
  slow_followup: [
    { i: "🤖", t: "AI Follow-Up Sequence (SMS + Email)",   d: "Every lead gets followed up within seconds, automatically" },
    { i: "🔥", t: "Lead Reactivation System",               d: "Cold leads from your database brought back to life" },
    { i: "📋", t: "CRM Pipeline + Auto-Routing",            d: "Leads organized and moved automatically based on their stage" },
  ],
  manual_work: [
    { i: "🔄", t: "Full Back-Office Automation",            d: "Data entry, reports, emails — running without anyone touching them" },
    { i: "📄", t: "Document Collection & Processing",       d: "Automatic reminders and intake flows for client documents" },
    { i: "📊", t: "Automated Reporting Dashboard",          d: "Numbers always ready — no manual spreadsheet updates needed" },
  ],
  no_shows: [
    { i: "⏰", t: "Smart Reminder System (SMS + Email + WhatsApp)", d: "Multi-touch reminders that cut no-shows by 60–80%" },
    { i: "🗓️", t: "Easy Reschedule Flow",                   d: "One-tap rescheduling that keeps the appointment" },
    { i: "💳", t: "Deposit & Confirmation System",          d: "Commitment-based booking that reduces ghost appointments" },
  ],
  cant_scale: [
    { i: "⚙️", t: "Operational Automation Layer",          d: "Handle 2× volume with the same team — systems absorb growth" },
    { i: "🤝", t: "Automated Client Onboarding",            d: "Every new client gets the same perfect experience" },
    { i: "📈", t: "AI Sales Pipeline Automation",           d: "Leads captured, nurtured, and moved toward close on autopilot" },
  ],
  no_visibility: [
    { i: "📊", t: "Real-Time Business Dashboard",           d: "Every metric updated automatically — always know where you stand" },
    { i: "🎯", t: "Lead Source & Conversion Tracking",      d: "Know exactly which channels produce clients and which waste money" },
    { i: "📩", t: "Automated Weekly Business Report",       d: "Key numbers delivered to your inbox every Monday, automatically" },
  ],
};

// ── SCORING & PLAN LOGIC ───────────────────────────────────────────────────────
function getPlan(pain: string | null, volume: string | null) {
  if (volume === "very_high") return { name: "Enterprise",   price: "Custom",  period: "Scoped for your operation", setup: "+ $8,997+ one-time setup" };
  if (pain === "missed_calls" || volume === "high")          return { name: "Growth Plan", price: "$1,797", period: "/month", setup: "+ $5,997 one-time setup" };
  if (volume === "medium" || pain === "slow_followup" || pain === "cant_scale")
                                                             return { name: "Pro Plan",    price: "$997",   period: "/month", setup: "+ $3,997 one-time setup" };
  return                                                            { name: "Starter Plan",price: "$497",   period: "/month", setup: "+ $2,497 one-time setup" };
}

function getScore(pain: string | null, volume: string | null) {
  const base:  Record<string, number> = { low: 62, medium: 74, high: 85, very_high: 94 };
  const boost: Record<string, number> = { missed_calls: 8, slow_followup: 6, manual_work: 4, no_shows: 5, cant_scale: 7, no_visibility: 3 };
  return Math.min(98, (base[volume ?? ""] ?? 70) + (boost[pain ?? ""] ?? 0));
}

function getScoreSub(score: number) {
  if (score >= 90) return "Critical opportunity — significant revenue being left on the table right now";
  if (score >= 80) return "High opportunity — your operation is ready to be dramatically more efficient";
  if (score >= 70) return "Strong opportunity — the right systems would immediately change your trajectory";
  return "Clear opportunity — foundational automation would unlock real growth";
}

function getRoiTeaser(volume: string | null) {
  return { low: "$3,200", medium: "$6,800", high: "$14,500", very_high: "$28,000+" }[volume ?? ""] ?? "$8,400";
}

// ── TESTIMONIALS ───────────────────────────────────────────────────────────────
const TESTIMONIALS: Record<string, { quote: string; name: string; title: string; metric: string }> = {
  insurance:  { quote: '"Since we set up the AI voice agent, we haven\'t missed a single lead. It answers every call, qualifies the client, and books the appointment — even at 11pm. Our close rate went up 40% in the first two months."', name: "Jesús Martínez",    title: "Insurance Agency Owner",     metric: "+40% close rate" },
  tax:        { quote: '"Tax season used to be chaos. Now document collection, client reminders, and follow-ups all happen automatically. I handled 30% more clients this year with the same staff."',                                      name: "Berta Viloria",    title: "Accountant & Tax Advisor",   metric: "+30% clients served" },
  contractor: { quote: '"I\'m on job sites all day. Before LPS, every missed call was a lost job. Now the AI handles it, books the estimate, and I just show up. I haven\'t lost a lead to a missed call in months."',                      name: "Pedro Rivera",     title: "CabinetWorkx — Contractor",  metric: "Never miss a lead" },
  salon:      { quote: '"Empty chairs used to stress me out. Now the rebooking system fills my calendar automatically. I saved 2 hours a day on admin alone."',                                                                              name: "Joshua Plaza",     title: "Barbershop Owner",           metric: "2 hrs/day saved" },
  realestate: { quote: '"90% of my leads used to go cold because I couldn\'t follow up fast enough. Now every lead gets a response within seconds. My conversions doubled in 60 days."',                                                    name: "Kerwin Iglesias",  title: "Real Estate Broker",         metric: "Conversions 2×" },
  health:     { quote: '"Every no-show used to cost me $200. After setting up the reminder system, my no-show rate dropped from 25% to under 5%. The system paid for itself in the first week."',                                           name: "Dr. Andrea Campos",title: "Healthcare Clinic Owner",    metric: "−80% no-shows" },
  medspa:     { quote: '"Clients were ghosting after their first visit. Now the rebooking sequence brings them back automatically. My monthly revenue from repeat clients went up 35%."',                                                    name: "Sofia Restrepo",   title: "Med Spa Owner",              metric: "+35% repeat revenue" },
  legal:      { quote: '"With the instant response system, we\'re now the first firm to reply — and that alone has increased our consultations by 60% this quarter."',                                                                      name: "Carlos Mendez",    title: "Immigration Attorney",       metric: "+60% consultations" },
  coach:      { quote: '"I used to spend my days chasing leads and scheduling calls. Now the system does it all. I focus only on delivering results — and my revenue is up 45%."',                                                          name: "Maria Torres",     title: "Business Coach",             metric: "+45% revenue" },
  default:    { quote: '"The system was live in under 3 weeks. In the first month, we recovered $4,200 in leads we would have lost, saved 8 hours of manual admin, and our follow-up consistency went to 100%."',                           name: "Latin Prime Client",title: "Service Business Owner",    metric: "$4,200 recovered" },
};

function getTestimonial(industries: string[]) {
  for (const ind of industries) if (TESTIMONIALS[ind]) return TESTIMONIALS[ind];
  return TESTIMONIALS.default;
}

// ── SHARED STYLES ──────────────────────────────────────────────────────────────
const card: React.CSSProperties = {
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
};
const cardHeader: React.CSSProperties = {
  padding: "28px 32px 20px",
  borderBottom: "1px solid var(--border)",
};
const cardBody: React.CSSProperties = { padding: "24px 32px 32px" };

const slideIn = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit:    { opacity: 0, x: -32 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};

// ── COMPONENT ──────────────────────────────────────────────────────────────────
type Step = "q1" | "q2" | "q3" | "loading" | "result" | "thankyou";

export default function AutomationQuiz() {
  const [step, setStep]                   = useState<Step>("q1");
  const [industry, setIndustry]           = useState<string[]>([]);
  const [detailIndustry, setDetailIndustry] = useState<string | null>(null);
  const [pain, setPain]                   = useState<string | null>(null);
  const [volume, setVolume]               = useState<string | null>(null);
  const [moreVisible, setMoreVisible]     = useState(false);
  const [formName, setFormName]           = useState("");
  const [formEmail, setFormEmail]         = useState("");
  const [nameErr, setNameErr]             = useState(false);
  const [emailErr, setEmailErr]           = useState(false);
  const [animScore, setAnimScore]         = useState(0);
  const [socialCount, setSocialCount] = useState(57);
  useEffect(() => {
    const day = new Date().getDate();
    setSocialCount(43 + Math.floor(day * 1.4));
  }, []);

  useEffect(() => {
    if (step !== "result") return;
    const target = getScore(pain, volume);
    let start: number | null = null;
    const duration = 1400;
    function frame(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setAnimScore(Math.round(target * ease));
      if (progress < 1) requestAnimationFrame(frame);
    }
    const raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [step, pain, volume]);

  function toggleIndustry(val: string) {
    setIndustry(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );
    setDetailIndustry(val);
  }

  function goStep(next: Step) {
    if (next === "loading") {
      setStep("loading");
      setTimeout(() => setStep("result"), 2800);
    } else {
      setStep(next);
    }
    document.getElementById("automation-quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitLead() {
    const ne = !formName.trim();
    const ee = !formEmail.trim() || !formEmail.includes("@");
    setNameErr(ne);
    setEmailErr(ee);
    if (ne || ee) return;

    const leadData = {
      name: formName,
      email: formEmail,
      industry: industry.join(", "),
      pain,
      volume,
      plan: getPlan(pain, volume).name,
      score: getScore(pain, volume),
      source: "website_quiz",
      timestamp: new Date().toISOString(),
    };
    fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData),
    }).catch(() => {});

    goStep("thankyou");
  }

  const plan  = getPlan(pain, volume);
  const score = getScore(pain, volume);
  const autos = AUTO_MAP[pain ?? ""] ?? AUTO_MAP.slow_followup;
  const testimonial = getTestimonial(industry);

  const stepIndex: Record<Step, number> = { q1: 0, q2: 1, q3: 2, loading: 3, result: 3, thankyou: 4 };
  const currentIdx = stepIndex[step];

  const detailData = detailIndustry ? INDUSTRY_DETAILS[detailIndustry] : null;
  const detailLabel = detailIndustry ? PRIMARY_INDUSTRIES.find(i => i.val === detailIndustry) : null;

  return (
    <>
      <section
        id="automation-quiz"
        className="section-wrap"
        style={{ background: "var(--surface)" }}
      >
        {/* Anchor for "who" nav link */}
        <span id="who" style={{ position: "absolute", top: -80 }} />

        <div className="section-inner">

          {/* Header */}
          {step !== "loading" && step !== "thankyou" && (
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="slabel" style={{ justifyContent: "center" }}>Who We Serve</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", marginBottom: 14 }}>
                <SplitText text="Built for Your Industry." delay={0.05} />{" "}
                <ShinyText text="Get Your Free Plan." speed={4} />
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
                Pick your industry — see exactly what we&apos;d automate for you. Then answer 2 more questions and get your personalized plan free.
              </p>
            </div>
          )}

          {/* Social proof */}
          {step === "q1" && (
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                background: "rgba(212,165,58,0.07)",
                border: "1px solid rgba(212,165,58,0.35)",
                borderRadius: 100,
                padding: "11px 28px 11px 20px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, animation: "dot-pulse 2s ease-in-out infinite" }} />
                <span style={{ color: "var(--gold)", fontWeight: 900, fontSize: "1.05rem", letterSpacing: "0.06em", lineHeight: 1 }}>★★★★★</span>
                <span style={{ width: 1, height: 18, background: "rgba(212,165,58,0.35)", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "var(--text)" }}>
                  {socialCount} businesses
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  got their free plan this month
                </span>
              </div>
            </div>
          )}

          {/* Progress */}
          {step !== "q1" && step !== "thankyou" && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
                {[0, 1, 2, 3].map(i => (
                  <div key={i} style={{
                    flex: 1, height: 4, borderRadius: 4,
                    background: i < currentIdx ? "var(--gold)" : i === currentIdx ? "var(--blue)" : "var(--border2)",
                    transition: "background 0.4s",
                  }} />
                ))}
              </div>
              <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--text-dim)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.08em" }}>
                {step === "q2" ? "Question 2 of 3" : step === "q3" ? "Question 3 of 3" : step === "loading" ? "Analyzing your business..." : "Your plan is ready"}
              </p>
            </div>
          )}

          {/* ── STEPS ── */}
          <AnimatePresence mode="wait">

            {/* Q1 — Industry */}
            {step === "q1" && (
              <motion.div key="q1" {...slideIn} style={card}>
                <div style={cardHeader}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>
                    Step 1 of 3
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)", lineHeight: 1.3 }}>
                    What type of business do you run?
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>
                    Click your industry to see exactly what we&apos;d automate — then continue for your free plan.
                  </p>
                </div>

                <div style={cardBody}>
                  {/* Counter badge */}
                  {industry.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ background: "rgba(212,165,58,0.12)", border: "1px solid rgba(212,165,58,0.35)", color: "var(--gold)", fontSize: "0.72rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20, fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>
                        {industry.length === 1 ? "1 industry selected" : `${industry.length} industries selected`}
                      </span>
                    </div>
                  )}

                  {/* Primary industry grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                    {PRIMARY_INDUSTRIES.map(opt => (
                      <IndustryCard
                        key={opt.val}
                        opt={opt}
                        selected={industry.includes(opt.val)}
                        active={detailIndustry === opt.val}
                        onToggle={() => toggleIndustry(opt.val)}
                      />
                    ))}
                  </div>

                  {/* More industries */}
                  <AnimatePresence>
                    {moreVisible && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10, marginTop: 10 }}>
                          {MORE_INDUSTRIES.map(opt => (
                            <IndustryOpt key={opt.val} opt={opt} selected={industry.includes(opt.val)} onToggle={() => toggleIndustry(opt.val)} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Show more */}
                  <button
                    onClick={() => setMoreVisible(v => !v)}
                    style={{
                      width: "100%", marginTop: 12, padding: "11px 20px",
                      background: "transparent", border: "1.5px dashed var(--border2)",
                      borderRadius: 10, color: "var(--text-dim)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.83rem", fontWeight: 600,
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"; }}
                  >
                    {moreVisible ? "− Show fewer industries" : `+ Show 40+ more industries`}
                  </button>

                  {/* ── Industry detail panel ── */}
                  <AnimatePresence>
                    {detailData && detailLabel && (
                      <motion.div
                        key={detailIndustry}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          marginTop: 20,
                          border: "1px solid rgba(212,165,58,0.3)",
                          borderTop: "2px solid var(--gold)",
                          borderRadius: 12,
                          background: "rgba(212,165,58,0.03)",
                          overflow: "hidden",
                        }}
                      >
                        {/* Panel header */}
                        <div style={{ padding: "16px 24px 14px", borderBottom: "1px solid rgba(212,165,58,0.15)", display: "flex", alignItems: "center", gap: 12 }}>
                          <span style={{ fontSize: "1.5rem" }}>{detailLabel.icon}</span>
                          <div>
                            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--text)" }}>{detailLabel.title}</div>
                            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: 2, lineHeight: 1.5 }}>{detailData.desc}</p>
                          </div>
                        </div>

                        {/* Automation list */}
                        <div style={{ padding: "18px 24px 20px" }}>
                          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 12 }}>
                            What we automate for you
                          </div>
                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }} className="detail-grid">
                            {detailData.items.map((item, i) => (
                              <div key={i} style={{ display: "flex", gap: 8, fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                                <span style={{ color: "var(--gold)", flexShrink: 0, fontWeight: 700, marginTop: 1 }}>✓</span>
                                {item}
                              </div>
                            ))}
                          </div>
                          <p style={{ fontSize: "0.72rem", color: "rgba(180,148,93,0.7)", fontStyle: "italic", marginTop: 12 }}>
                            + many more automations tailored to your operation
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                    <NavBtn disabled={industry.length === 0} onClick={() => goStep("q2")}>
                      {industry.length === 0
                        ? "Select an industry to continue"
                        : industry.length === 1
                          ? "Continue — What's your biggest challenge? →"
                          : `Continue with ${industry.length} industries →`}
                    </NavBtn>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Q2 — Pain */}
            {step === "q2" && (
              <motion.div key="q2" {...slideIn} style={card}>
                <div style={cardHeader}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>Question 2 of 3</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)", lineHeight: 1.3 }}>
                    What&apos;s your biggest operational bottleneck right now?
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>
                    This determines your highest-impact automation.
                  </p>
                </div>
                <div style={cardBody}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {PAIN_OPTIONS.map(opt => (
                      <SingleOpt key={opt.val} opt={opt} selected={pain === opt.val} onSelect={() => setPain(opt.val)} />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, gap: 12 }}>
                    <BackBtn onClick={() => goStep("q1")} />
                    <NavBtn disabled={!pain} onClick={() => goStep("q3")}>Continue →</NavBtn>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Q3 — Volume */}
            {step === "q3" && (
              <motion.div key="q3" {...slideIn} style={card}>
                <div style={cardHeader}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>Question 3 of 3</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)", lineHeight: 1.3 }}>
                    How many new leads or inquiries does your business get per month?
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>
                    This determines the scale of the system we&apos;d build for you.
                  </p>
                </div>
                <div style={cardBody}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="quiz-vol-grid">
                    {VOLUME_OPTIONS.map(opt => (
                      <SingleOpt key={opt.val} opt={opt} selected={volume === opt.val} onSelect={() => setVolume(opt.val)} />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, gap: 12 }}>
                    <BackBtn onClick={() => goStep("q2")} />
                    <NavBtn disabled={!volume} onClick={() => goStep("loading")}>See My Plan →</NavBtn>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading */}
            {step === "loading" && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={card}>
                <div style={{ textAlign: "center", padding: "64px 32px" }}>
                  <div style={{ width: 56, height: 56, border: "3px solid var(--border2)", borderTopColor: "var(--gold)", borderRadius: "50%", animation: "quiz-spin 0.9s linear infinite", margin: "0 auto 24px" }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: 8 }}>Building your automation plan...</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 24 }}>Analyzing your business profile</p>
                  <ul style={{ listStyle: "none", textAlign: "left", display: "inline-block" }}>
                    {[
                      "Identifying your highest-impact automations",
                      "Matching to proven systems in your industry",
                      "Calculating your revenue recovery potential",
                      "Selecting the right infrastructure tier",
                    ].map((txt, i) => (
                      <li key={i} style={{ fontSize: "0.83rem", color: "var(--text-muted)", padding: "5px 0", display: "flex", alignItems: "center", gap: 10, opacity: 0, animation: `quiz-fadeUp 0.4s ${0.2 + i * 0.6}s forwards` }}>
                        <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span> {txt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === "result" && (
              <motion.div key="result" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={card}>
                <div style={cardHeader}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00a854", marginBottom: 8 }}>✓ Analysis Complete</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)" }}>Your Automation Opportunity Is Ready</h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>Here&apos;s what we found for your specific business.</p>
                </div>
                <div style={cardBody}>
                  {/* Score bar */}
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border2)", borderRadius: 12, padding: 20, marginBottom: 16, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--blue), var(--gold))" }} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>Automation Opportunity Score</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "2rem", color: "var(--gold)", lineHeight: 1 }}>{animScore}<span style={{ fontSize: "1rem", color: "var(--text-dim)", fontWeight: 600 }}>%</span></span>
                    </div>
                    <div style={{ height: 8, background: "var(--surface2)", borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 8, background: "linear-gradient(90deg, var(--blue), var(--gold))", width: `${animScore}%`, transition: "width 0.1s" }} />
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginTop: 8 }}>{getScoreSub(score)}</p>
                  </div>

                  {/* Plan badge */}
                  <div style={{ background: "rgba(212,165,58,0.06)", border: "1px solid rgba(212,165,58,0.25)", borderRadius: 12, padding: "16px 20px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 4 }}>Recommended Plan</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.25rem", color: "var(--text)" }}>{plan.name}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.35rem", color: "var(--gold)" }}>{plan.price}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)" }}>{plan.period} · {plan.setup}</div>
                    </div>
                  </div>

                  {/* Top 3 automations */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 10 }}>Top 3 Automations for Your Business</div>
                    {autos.map((a, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", borderRadius: 10, background: "var(--surface)", marginBottom: 8 }}>
                        <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{a.i}</span>
                        <div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text)" }}>{a.t}</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 2 }}>{a.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ROI teaser (blurred) */}
                  <div style={{ background: "var(--surface)", border: "1.5px dashed var(--border2)", borderRadius: 12, padding: "18px 20px", marginBottom: 20, textAlign: "center" }}>
                    <div style={{ fontSize: "1.1rem", marginBottom: 6 }}>🔒</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "2rem", background: "linear-gradient(135deg, var(--blue), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", filter: "blur(6px)", userSelect: "none", marginBottom: 6 }}>
                      {getRoiTeaser(volume)}/mo
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                      <strong style={{ color: "var(--text)" }}>Your estimated monthly revenue recovery is ready.</strong><br />
                      Enter your info below to unlock your full breakdown — ROI projection, system roadmap, and exact automations we&apos;d build first.
                    </p>
                  </div>

                  {/* Lead form */}
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border2)", borderRadius: 14, padding: 24 }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 4 }}>Unlock Your Full Automation Plan</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.6 }}>Free — no sales pressure, no credit card. We&apos;ll send your personalized plan within 24 hours.</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="quiz-form-row">
                      <div>
                        <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>First Name</label>
                        <input
                          type="text" value={formName} placeholder="Your name"
                          onChange={e => { setFormName(e.target.value); setNameErr(false); }}
                          style={{ width: "100%", background: "#FFFFFF", border: `1.5px solid ${nameErr ? "#e55" : "var(--border2)"}`, borderRadius: 10, padding: "13px 16px", fontSize: "0.875rem", color: "var(--text)", fontFamily: "inherit", outline: "none" }}
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>Business Email</label>
                        <input
                          type="email" value={formEmail} placeholder="you@business.com"
                          onChange={e => { setFormEmail(e.target.value); setEmailErr(false); }}
                          style={{ width: "100%", background: "#FFFFFF", border: `1.5px solid ${emailErr ? "#e55" : "var(--border2)"}`, borderRadius: 10, padding: "13px 16px", fontSize: "0.875rem", color: "var(--text)", fontFamily: "inherit", outline: "none" }}
                        />
                      </div>
                    </div>
                    <button
                      onClick={submitLead}
                      style={{ width: "100%", background: "var(--blue)", border: "none", color: "white", padding: "15px 24px", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 4px 20px rgba(15,34,64,0.25)" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a3560"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--blue)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                    >
                      Unlock My Full Plan — It&apos;s Free →
                    </button>
                    <p style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--text-dim)", marginTop: 10, lineHeight: 1.5 }}>No spam. No sales calls unless you book one.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Thank You */}
            {step === "thankyou" && (
              <motion.div key="thankyou" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} style={card}>
                <div style={{ textAlign: "center", padding: "52px 32px 40px" }}>
                  <div style={{ width: 72, height: 72, background: "rgba(0,168,84,0.1)", border: "2px solid var(--green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 24px", animation: "quiz-popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>✓</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--text)", marginBottom: 10 }}>You&apos;re on the list.</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28, maxWidth: 420, margin: "0 auto 28px" }}>Your personalized automation plan is being put together. You&apos;ll receive it within 24 hours.</p>

                  <div style={{ background: "var(--surface)", borderRadius: 12, padding: 20, marginBottom: 20, textAlign: "left" }}>
                    {[
                      { icon: "📧", t: "Personalized plan sent to your inbox",       s: "Usually within 24 hours — often much faster" },
                      { icon: "🎯", t: "Your top 3 high-impact automations",          s: "Specific to your industry and biggest bottleneck" },
                      { icon: "💰", t: "ROI projection included",                     s: "Conservative estimate of what automation is worth for you" },
                      { icon: "🛡️", t: "90-Day ROI Guarantee on every plan",         s: "Results or we work free until you see them" },
                    ].map((row, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: i < 3 ? "1px solid var(--border)" : "none" }}>
                        <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 2 }}>{row.icon}</span>
                        <div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text)" }}>{row.t}</div>
                          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: 2 }}>{row.s}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "rgba(212,165,58,0.05)", border: "1px solid rgba(212,165,58,0.2)", borderRadius: 12, padding: 18, marginBottom: 24, textAlign: "left" }}>
                    <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", fontStyle: "italic", lineHeight: 1.7, marginBottom: 10 }}>{testimonial.quote}</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <span style={{ fontSize: "0.83rem", fontWeight: 700, color: "var(--text)" }}>{testimonial.name}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginLeft: 6 }}>— {testimonial.title}</span>
                      </div>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "rgba(0,168,84,0.1)", color: "var(--green)", padding: "3px 12px", borderRadius: 20 }}>{testimonial.metric}</span>
                    </div>
                  </div>

                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 12 }}>Want to skip the wait? Book your free strategy call now.</p>
                  <a
                    href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", background: "var(--blue)", color: "white", padding: "16px 24px", borderRadius: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(15,34,64,0.2)", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a3560"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--blue)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    📅 Book My Free Strategy Call →
                  </a>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-dim)", marginTop: 10 }}>30 minutes. We map out your system. No pitch deck, no commitment.</p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Trust bar */}
          {step !== "thankyou" && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, marginTop: 32, flexWrap: "wrap" }}>
              {["🛡️ 90-Day ROI Guarantee", "⚡ Live in 7–30 days", "🚫 No long-term contracts", "💬 Response within 24h"].map(item => (
                <span key={item} style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{item}</span>
              ))}
            </div>
          )}
        </div>


        <style>{`
          @keyframes quiz-spin  { to { transform: rotate(360deg); } }
          @keyframes quiz-fadeUp { to { opacity: 1; transform: translateY(0); } }
          @keyframes quiz-popIn  { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          @media (max-width: 540px) {
            .quiz-vol-grid  { grid-template-columns: 1fr !important; }
            .quiz-form-row  { grid-template-columns: 1fr !important; }
            .detail-grid    { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

// ── SUB-COMPONENTS ─────────────────────────────────────────────────────────────

function IndustryCard({ opt, selected, active, onToggle }: {
  opt: { val: string; icon: string; title: string; desc: string };
  selected: boolean;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      onClick={onToggle}
      style={{
        border: `1.5px solid ${selected ? "var(--gold)" : active ? "rgba(212,165,58,0.35)" : "var(--border2)"}`,
        borderRadius: 12,
        padding: "18px 16px 16px",
        cursor: "pointer",
        background: selected ? "rgba(212,165,58,0.06)" : active ? "rgba(212,165,58,0.02)" : "#FFFFFF",
        transition: "all 0.18s",
        boxShadow: selected ? "0 0 0 1px rgba(212,165,58,0.2), 0 2px 12px rgba(212,165,58,0.08)" : "0 1px 3px rgba(15,34,64,0.04)",
        position: "relative",
      }}
    >
      <div style={{ fontSize: "1.7rem", marginBottom: 8 }}>{opt.icon}</div>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "var(--text)", marginBottom: 4, lineHeight: 1.3 }}>{opt.title}</div>
      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)", lineHeight: 1.5 }}>{opt.desc}</div>
      {selected && (
        <div style={{
          position: "absolute", top: 10, right: 10,
          width: 18, height: 18, borderRadius: "50%",
          background: "var(--gold)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{ color: "white", fontSize: "0.58rem", fontWeight: 900 }}>✓</span>
        </div>
      )}
    </div>
  );
}

function IndustryOpt({ opt, selected, onToggle }: { opt: { val: string; icon: string; title: string; desc: string }; selected: boolean; onToggle: () => void }) {
  return (
    <div
      onClick={onToggle}
      style={{
        border: `1.5px solid ${selected ? "var(--gold)" : "var(--border2)"}`,
        borderRadius: 12, padding: "13px 14px", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 12,
        background: selected ? "rgba(212,165,58,0.05)" : "transparent",
        transition: "all 0.18s",
        boxShadow: selected ? "0 0 0 1px rgba(212,165,58,0.2)" : "none",
      }}
    >
      <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{opt.icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "var(--text)" }}>{opt.title}</div>
        <div style={{ fontSize: "0.7rem", color: "var(--text-dim)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{opt.desc}</div>
      </div>
      <div style={{
        width: 18, height: 18, borderRadius: 5, flexShrink: 0,
        border: `2px solid ${selected ? "var(--gold)" : "var(--border2)"}`,
        background: selected ? "var(--gold)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.18s",
      }}>
        {selected && <span style={{ color: "white", fontSize: "0.65rem", fontWeight: 900 }}>✓</span>}
      </div>
    </div>
  );
}

function SingleOpt({ opt, selected, onSelect }: { opt: { val: string; icon: string; title: string; desc: string }; selected: boolean; onSelect: () => void }) {
  return (
    <div
      onClick={onSelect}
      style={{
        border: `1.5px solid ${selected ? "var(--gold)" : "var(--border2)"}`,
        borderRadius: 12, padding: "14px 18px", cursor: "pointer",
        display: "flex", alignItems: "center", gap: 14,
        background: selected ? "rgba(212,165,58,0.05)" : "transparent",
        transition: "all 0.18s",
        boxShadow: selected ? "0 0 0 1px rgba(212,165,58,0.2)" : "none",
      }}
    >
      <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{opt.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "var(--text)" }}>{opt.title}</div>
        <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", marginTop: 3, lineHeight: 1.4 }}>{opt.desc}</div>
      </div>
      <div style={{
        width: 20, height: 20, borderRadius: "50%", flexShrink: 0,
        border: `2px solid ${selected ? "var(--gold)" : "var(--border2)"}`,
        background: selected ? "var(--gold)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.18s",
      }}>
        {selected && <span style={{ color: "white", fontSize: "0.65rem", fontWeight: 900 }}>✓</span>}
      </div>
    </div>
  );
}

function NavBtn({ children, disabled, onClick }: { children: React.ReactNode; disabled?: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick} disabled={disabled}
      style={{
        flex: 1, maxWidth: 360,
        background: disabled ? "var(--surface2)" : "var(--blue)",
        border: "none", color: disabled ? "var(--text-dim)" : "white",
        padding: "14px 24px", borderRadius: 10,
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.2s",
        boxShadow: disabled ? "none" : "0 4px 16px rgba(15,34,64,0.2)",
      }}
      onMouseEnter={e => { if (!disabled) { (e.currentTarget as HTMLElement).style.background = "#1a3560"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; } }}
      onMouseLeave={e => { if (!disabled) { (e.currentTarget as HTMLElement).style.background = "var(--blue)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; } }}
    >
      {children}
    </button>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "transparent", border: "1.5px solid var(--border2)", color: "var(--text-muted)", padding: "13px 22px", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
    >
      ← Back
    </button>
  );
}
