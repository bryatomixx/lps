"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

const BOOKING_URL = "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";
const WEBHOOK_URL = "https://latinprimesystems.app.n8n.cloud/webhook/05355d0d-cce9-4f2a-94a4-174498a2b75e";

// ── TRANSLATIONS ───────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    // Header
    sectionLabel: "Who We Serve",
    headline: "Built for Your Industry.",
    headlineShiny: "Get Your Free Roadmap.",
    headerDesc: "Pick your industry — see exactly what we'd automate for you. Then answer 2 more questions and get your free personalized automation roadmap.",

    // Social proof
    socialBusinesses: "businesses",
    socialThisMonth: "got their free roadmap this month",

    // Progress bar labels
    question2of3: "Question 2 of 3",
    question3of3: "Question 3 of 3",
    analyzing: "Analyzing your business...",
    planReady: "Your plan is ready",

    // Q1
    step1of3: "Step 1 of 3",
    q1Title: "What type of business do you run?",
    q1Desc: "Click your industry to see exactly what we'd automate — then continue for your free roadmap.",
    industrySelected1: "1 industry selected",
    industrySelectedMany: (n: number) => `${n} industries selected`,
    showFewerIndustries: "− Show fewer industries",
    showMoreIndustries: "+ Show 40+ more industries",
    whatWeAutomate: "What we automate for you",
    manyMoreAutomations: "+ many more automations tailored to your operation",
    selectToContinue: "Select an industry to continue",
    continueChallenge: "Continue — What's your biggest challenge? →",
    continueWithMany: (n: number) => `Continue with ${n} industries →`,

    // Q2
    question2label: "Question 2 of 3",
    q2Title: "What's your biggest operational bottleneck right now?",
    q2Desc: "This determines your highest-impact automation.",
    continueCta: "Continue →",

    // Q3
    question3label: "Question 3 of 3",
    q3Title: "How many new leads or inquiries does your business get per month?",
    q3Desc: "This determines the scale of the system we'd build for you.",
    seeMyPlan: "See My Plan →",
    back: "← Back",

    // Loading
    buildingPlan: "Building your automation plan...",
    analyzingProfile: "Analyzing your business profile",
    loadingItems: [
      "Identifying your highest-impact automations",
      "Matching to proven systems in your industry",
      "Calculating your revenue recovery potential",
      "Selecting the right infrastructure tier",
    ],

    // Result
    analysisComplete: "✓ Analysis Complete",
    resultTitle: "Your Automation Opportunity Is Ready",
    resultDesc: "Here's what we found for your specific business.",
    scoreLabel: "Automation Opportunity Score",
    recommendedPlan: "Recommended Plan",
    top3Label: "Top 3 Automations for Your Business",
    roiUnlockTitle: "Your estimated monthly revenue recovery is ready.",
    roiUnlockDesc: "Enter your info below to unlock your full breakdown — ROI projection, system roadmap, and exact automations we'd build first.",
    unlockPlanTitle: "Unlock Your Free Automation Roadmap",
    unlockPlanDesc: "Free — no sales pressure, no credit card. We'll send your personalized roadmap within 24 hours.",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "Your name",
    emailLabel: "Business Email",
    emailPlaceholder: "you@business.com",
    unlockCta: "Get My Free Automation Roadmap →",
    noSpam: "No spam. No sales calls unless you book one.",

    // Thank you
    thankYouTitle: "You're on the list.",
    thankYouDesc: "Your personalized automation roadmap is being put together. You'll receive it within 24 hours.",
    thankYouItems: [
      { icon: "📧", t: "Personalized plan sent to your inbox",       s: "Usually within 24 hours — often much faster" },
      { icon: "🎯", t: "Your top 3 high-impact automations",          s: "Specific to your industry and biggest bottleneck" },
      { icon: "💰", t: "ROI projection included",                     s: "Conservative estimate of what automation is worth for you" },
      { icon: "🛡️", t: "90-Day ROI Guarantee on every plan",         s: "Results or we work free until you see them" },
    ],
    skipWait: "Want to skip the wait? Book your free strategy call now.",
    bookCta: "📅 Book My Free Strategy Call →",
    bookSub: "30 minutes. We map out your system. No pitch deck, no commitment.",

    // Trust bar
    trustItems: ["🛡️ 90-Day ROI Guarantee", "⚡ Live in 7–30 days", "🚫 No long-term contracts", "💬 Response within 24h"],

    // Plan periods
    planPeriodCustom: "Scoped for your operation",
    planSetupEnterprise: "+ $8,997+ one-time setup",
    planSetupGrowth: "+ $5,997 one-time setup",
    planSetupPro: "+ $3,997 one-time setup",
    planSetupStarter: "+ $2,497 one-time setup",

    // Primary industries
    primaryIndustries: [
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
    ],

    // Industry details
    industryDetails: {
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
    } as Record<string, { desc: string; items: string[] }>,

    // More industries
    moreIndustries: [
      { val: "mortgage",    icon: "🏦", title: "Mortgage / Lending",          desc: "Loan officers, brokers, lenders" },
      { val: "financial",   icon: "💰", title: "Financial Services",           desc: "Wealth management, planning" },
      { val: "fitness",     icon: "💪", title: "Fitness / Wellness",           desc: "Gyms, personal trainers, studios" },
      { val: "chiro",       icon: "🩺", title: "Chiro / Physical Therapy",    desc: "Chiropractors, PT clinics, rehab" },
      { val: "auto",        icon: "🚗", title: "Auto Dealership / Services",  desc: "Car sales, repair, detailing" },
      { val: "property",    icon: "🏢", title: "Property Management",          desc: "Rentals, HOA, leasing offices" },
      { val: "ecommerce",   icon: "🛒", title: "E-commerce / Retail",         desc: "Online stores, product businesses" },
      { val: "education",   icon: "🎓", title: "Education / Training",         desc: "Schools, tutoring, online courses" },
      { val: "vet",         icon: "🐾", title: "Veterinary Clinic",            desc: "Animal hospitals, vet practices" },
      { val: "childcare",   icon: "🧒", title: "Childcare / Daycare",          desc: "Daycare centers, preschools" },
      { val: "events",      icon: "🎉", title: "Events / Photography",         desc: "Event planners, photographers, venues" },
      { val: "cleaning",    icon: "🧹", title: "Cleaning / Janitorial",        desc: "Residential, commercial cleaning" },
      { val: "optometry",   icon: "👓", title: "Optometry / Vision",           desc: "Eye care clinics, optometrists" },
      { val: "marketing",   icon: "📣", title: "Marketing / Creative Agency",  desc: "Digital agencies, design studios" },
      { val: "travel",      icon: "✈️", title: "Travel Agency",                desc: "Tour operators, travel advisors" },
      { val: "solar",       icon: "☀️", title: "Solar / Energy",               desc: "Solar installers, energy consultants" },
      { val: "mentalhealth",icon: "🧠", title: "Mental Health / Therapy",     desc: "Therapists, psychologists, counselors" },
      { val: "pestcontrol", icon: "🐛", title: "Pest Control",                 desc: "Residential, commercial pest services" },
      { val: "immigration", icon: "🌎", title: "Immigration Services",         desc: "Immigration attorneys, consultants" },
      { val: "other",       icon: "💼", title: "Other Service Business",       desc: "Not listed above" },
    ],

    // Ticker rows
    nichesRow1: [
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
    ],
    nichesRow2: [
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
    ],

    // Pain options
    painOptions: [
      { val: "missed_calls",  icon: "📞", title: "Missed calls & leads that go unanswered",     desc: "Potential clients call, nobody answers — they move to a competitor" },
      { val: "slow_followup", icon: "🐌", title: "Slow or inconsistent lead follow-up",          desc: "Leads go cold because follow-up is manual and inconsistent" },
      { val: "manual_work",   icon: "🔁", title: "Too much manual, repetitive work",             desc: "Hours wasted on tasks that should be automated" },
      { val: "no_shows",      icon: "🚫", title: "No-shows & appointment cancellations",         desc: "Scheduled appointments that don't happen cost real revenue" },
      { val: "cant_scale",    icon: "📈", title: "Can't grow without hiring more people",        desc: "Every new client means more overhead — growth feels expensive" },
      { val: "no_visibility", icon: "📉", title: "No visibility into what's happening",          desc: "No clear data on leads, conversions, or what's actually working" },
    ],

    // Volume options
    volumeOptions: [
      { val: "low",       icon: "🌱", title: "Under 20",  desc: "Early stage or niche market" },
      { val: "medium",    icon: "🔥", title: "20 – 60",   desc: "Growing and consistent flow" },
      { val: "high",      icon: "⚡", title: "60 – 150",  desc: "High volume — system is critical" },
      { val: "very_high", icon: "🚀", title: "150+",      desc: "Enterprise-level — needs full infrastructure" },
    ],

    // Automations by pain
    autoMap: {
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
    } as Record<string, { i: string; t: string; d: string }[]>,

    // Score subtitles
    scoreSub90: "Critical opportunity — significant revenue being left on the table right now",
    scoreSub80: "High opportunity — your operation is ready to be dramatically more efficient",
    scoreSub70: "Strong opportunity — the right systems would immediately change your trajectory",
    scoreSub60: "Clear opportunity — foundational automation would unlock real growth",

    // Testimonials
    testimonials: {
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
    } as Record<string, { quote: string; name: string; title: string; metric: string }>,

    // Plan names
    planNames: {
      enterprise: "Enterprise",
      growth: "Growth Plan",
      pro: "Pro Plan",
      starter: "Starter Plan",
    },
  },

  es: {
    // Header
    sectionLabel: "A Quién Servimos",
    headline: "Hecho para tu industria.",
    headlineShiny: "Obtén tu diagnóstico gratis.",
    headerDesc: "Selecciona tu industria y verás exactamente qué automatizaríamos para ti. Responde 2 preguntas más y recibe tu diagnóstico de automatización gratis.",

    // Social proof
    socialBusinesses: "negocios",
    socialThisMonth: "recibieron su diagnóstico gratis este mes",

    // Progress bar labels
    question2of3: "Pregunta 2 de 3",
    question3of3: "Pregunta 3 de 3",
    analyzing: "Analizando tu negocio...",
    planReady: "Tu plan está listo",

    // Q1
    step1of3: "Paso 1 de 3",
    q1Title: "¿Qué tipo de negocio tienes?",
    q1Desc: "Haz clic en tu industria para ver qué automatizaríamos — luego continúa para obtener tu diagnóstico gratis.",
    industrySelected1: "1 industria seleccionada",
    industrySelectedMany: (n: number) => `${n} industrias seleccionadas`,
    showFewerIndustries: "− Ver menos industrias",
    showMoreIndustries: "+ Ver 40+ industrias más",
    whatWeAutomate: "Qué automatizamos para ti",
    manyMoreAutomations: "+ muchas más automatizaciones adaptadas a tu operación",
    selectToContinue: "Selecciona una industria para continuar",
    continueChallenge: "Continuar — ¿Cuál es tu mayor reto? →",
    continueWithMany: (n: number) => `Continuar con ${n} industrias →`,

    // Q2
    question2label: "Pregunta 2 de 3",
    q2Title: "¿Cuál es tu mayor cuello de botella operacional ahora mismo?",
    q2Desc: "Esto determina la automatización de mayor impacto para ti.",
    continueCta: "Continuar →",

    // Q3
    question3label: "Pregunta 3 de 3",
    q3Title: "¿Cuántos prospectos o consultas nuevas recibe tu negocio por mes?",
    q3Desc: "Esto determina la escala del sistema que construiríamos para ti.",
    seeMyPlan: "Ver Mi Plan →",
    back: "← Atrás",

    // Loading
    buildingPlan: "Construyendo tu plan de automatización...",
    analyzingProfile: "Analizando el perfil de tu negocio",
    loadingItems: [
      "Identificando tus automatizaciones de mayor impacto",
      "Comparando con sistemas probados en tu industria",
      "Calculando tu potencial de recuperación de ingresos",
      "Seleccionando el nivel de infraestructura adecuado",
    ],

    // Result
    analysisComplete: "✓ Análisis Completo",
    resultTitle: "Tu Oportunidad de Automatización Está Lista",
    resultDesc: "Esto es lo que encontramos para tu negocio específico.",
    scoreLabel: "Puntuación de Oportunidad de Automatización",
    recommendedPlan: "Plan Recomendado",
    top3Label: "Las 3 Principales Automatizaciones para Tu Negocio",
    roiUnlockTitle: "Tu estimado mensual de recuperación de ingresos está listo.",
    roiUnlockDesc: "Ingresa tu información para desbloquear el desglose completo — proyección ROI, hoja de ruta del sistema y las automatizaciones exactas que construiríamos primero.",
    unlockPlanTitle: "Desbloquea Tu Diagnóstico de Automatización",
    unlockPlanDesc: "Gratis — sin presión de ventas, sin tarjeta de crédito. Te enviaremos tu diagnóstico personalizado en 24 horas.",
    firstNameLabel: "Nombre",
    firstNamePlaceholder: "Tu nombre",
    emailLabel: "Correo de Negocio",
    emailPlaceholder: "tu@negocio.com",
    unlockCta: "Obtener Mi Diagnóstico Gratis →",
    noSpam: "Sin spam. Sin llamadas de ventas a menos que tú las agendes.",

    // Thank you
    thankYouTitle: "Ya estás en la lista.",
    thankYouDesc: "Tu diagnóstico de automatización personalizado está siendo preparado. Lo recibirás en 24 horas.",
    thankYouItems: [
      { icon: "📧", t: "Plan personalizado enviado a tu correo",         s: "Generalmente en 24 horas — con frecuencia mucho antes" },
      { icon: "🎯", t: "Tus 3 automatizaciones de mayor impacto",        s: "Específicas para tu industria y tu mayor cuello de botella" },
      { icon: "💰", t: "Proyección ROI incluida",                        s: "Estimado conservador de lo que vale la automatización para ti" },
      { icon: "🛡️", t: "Garantía ROI de 90 días en cada plan",          s: "Resultados o trabajamos gratis hasta que los veas" },
    ],
    skipWait: "¿Quieres saltarte la espera? Agenda tu llamada estratégica gratuita ahora.",
    bookCta: "📅 Agendar Mi Llamada Estratégica Gratis →",
    bookSub: "30 minutos. Trazamos tu sistema. Sin presentación de ventas, sin compromiso.",

    // Trust bar
    trustItems: ["🛡️ Garantía ROI de 90 días", "⚡ En vivo en 7–30 días", "🚫 Sin contratos a largo plazo", "💬 Respuesta en 24h"],

    // Plan periods
    planPeriodCustom: "Adaptado a tu operación",
    planSetupEnterprise: "+ $8,997+ configuración única",
    planSetupGrowth: "+ $5,997 configuración única",
    planSetupPro: "+ $3,997 configuración única",
    planSetupStarter: "+ $2,497 configuración única",

    // Primary industries
    primaryIndustries: [
      { val: "insurance",  icon: "🛡️", title: "Agencia de Seguros",         desc: "Agentes de vida, salud y P&C" },
      { val: "realestate", icon: "🏠", title: "Bienes Raíces",              desc: "Agentes, brokers, inversionistas" },
      { val: "health",     icon: "🦷", title: "Dental / Salud",             desc: "Clínicas, consultorios, terapeutas" },
      { val: "medspa",     icon: "💆", title: "Med Spa / Estética",         desc: "Spas, estética, belleza" },
      { val: "contractor", icon: "🔧", title: "Contratista / Servicios",    desc: "HVAC, plomería, jardinería" },
      { val: "tax",        icon: "📊", title: "Impuestos / Contabilidad",   desc: "CPAs, contadores, asesores" },
      { val: "legal",      icon: "⚖️", title: "Despacho Legal",             desc: "Abogados, paralegales" },
      { val: "coach",      icon: "🎯", title: "Coach / Consultor",          desc: "Coaches de negocios, vida, finanzas" },
      { val: "salon",      icon: "✂️", title: "Salón / Barbería / Spa",    desc: "Belleza y cuidado personal" },
      { val: "restaurant", icon: "🍽️", title: "Restaurante / Negocio Local",desc: "Comida, retail, tiendas locales" },
    ],

    // Industry details
    industryDetails: {
      insurance: {
        desc: "Los agentes pierden pólizas cada día porque nadie dio seguimiento a tiempo. Lo reemplazamos con un sistema que nunca duerme.",
        items: [
          "Agente de voz AI califica prospectos y agenda citas 24/7",
          "Dashboard personalizado de agencia — prospectos, pólizas, renovaciones y pipeline en una sola pantalla",
          "Secuencias automatizadas de renovación y reactivación (30/60/90 días)",
          "Seguimiento multicanal: llamada → SMS → email → mensaje de voz",
          "Automatización de solicitudes de referidos después de cada póliza cerrada",
          "Alertas de prospectos calientes con enrutamiento automático al CRM",
        ],
      },
      realestate: {
        desc: "El 90% de los prospectos nunca cierran — no porque no estuvieran interesados, sino porque el seguimiento falló. Nosotros corregimos todo el pipeline.",
        items: [
          "Agente AI califica intención, presupuesto y plazo del comprador — en menos de 2 minutos",
          "CRM personalizado con pipelines completos para compradores y vendedores",
          "Programador de visitas conectado directamente a tu calendario",
          "Secuencias de nurture de 6 a 12 meses para prospectos que aún no están listos",
          "Dashboard de coordinación de transacciones — estatus, documentos, plazos, todo automatizado",
          "Seguimiento automático después de cada open house y consulta de listado",
        ],
      },
      health: {
        desc: "Cada cita perdida es ingreso que se va. Cada llamada sin respuesta es un paciente que fue a la próxima clínica de la lista.",
        items: [
          "Agenda de citas 24/7 — sin necesidad de recepcionista fuera de horario",
          "Dashboard de operaciones clínicas — agenda, ausentismo, recalls e ingresos en tiempo real",
          "Recordatorios automatizados que reducen el ausentismo hasta un 60%",
          "Campañas de recall para pacientes que no han regresado en 6+ meses",
          "Admisión de pacientes nuevos — formularios automatizados conectados a tu sistema",
          "Embudo de reseñas en Google enviado automáticamente después de cada cita",
        ],
      },
      medspa: {
        desc: "El dinero está en la reagendación y el upsell — y ambos solo ocurren cuando tu seguimiento es automático y perfectamente cronometrado.",
        items: [
          "Dashboard de ingresos — reservas, upsells, tasa de reagendación y LTV del cliente en vivo",
          "Secuencia automatizada de reagendación después de cada tratamiento",
          "Segmentación de clientes VIP con campañas personalizadas de upsell",
          "Promociones de cumpleaños y temporada desplegadas automáticamente",
          "Recuperación de reservas abandonadas — seguimiento en minutos",
          "Embudo de reseñas en Google y Yelp en piloto automático",
        ],
      },
      contractor: {
        desc: "Estás en obra. Pierdes llamadas. Esas llamadas son los nuevos clientes de tu competencia. Nos aseguramos de que eso nunca vuelva a pasar.",
        items: [
          "Agente de voz AI responde llamadas y agenda estimados — incluso en obra",
          "Dashboard de operaciones de campo — trabajos, equipo, cotizaciones y estatus en un solo lugar",
          "Respuesta automática por SMS ante llamadas perdidas en segundos",
          "Seguimiento automatizado de cotizaciones — evita que los prospectos se enfríen",
          "Secuencia: trabajo completado → solicitud de reseña → referido",
          "Automatización de campañas estacionales para clientes anteriores",
        ],
      },
      tax: {
        desc: "La temporada de impuestos es caos por defecto. Recolección de documentos, plazos, seguimiento a clientes — todo puede correr automáticamente.",
        items: [
          "Portal de clientes — recolección de documentos, seguimiento de estatus, alertas de plazos",
          "Incorporación y admisión de nuevos clientes completamente automatizadas",
          "Campañas de recordatorio de plazos para declaraciones trimestrales y anuales",
          "Secuencias de upsell para contabilidad, nómina y servicios de asesoría",
          "Check-ins durante todo el año que mantienen las relaciones con clientes activas",
          "Campañas de referidos dirigidas a tus clientes más satisfechos",
        ],
      },
      legal: {
        desc: "Los clientes potenciales no esperan. El primer despacho en responder gana. Nos aseguramos de que siempre seas tú.",
        items: [
          "Sistema de admisión AI 24/7 — califica tipo de caso y urgencia al instante",
          "Dashboard de gestión de casos — pipeline, estatus, plazos, documentos",
          "Respuesta inmediata a formularios web, llamadas perdidas y mensajes",
          "Agenda de consultas directamente desde tu sitio web",
          "Secuencias de actualización de estatus que reducen llamadas de seguimiento en más del 40%",
          "Seguimiento de satisfacción del cliente y automatización de referidos",
        ],
      },
      coach: {
        desc: "Vendes resultados. Tus sistemas deben hacer lo mismo — capturar, nutrir y cerrar prospectos sin que tú estés en cada paso.",
        items: [
          "Lead magnet → secuencia de nurture → llamada de ventas, completamente automatizado",
          "Dashboard de ingresos y pipeline — cohortes, LTV, tasas de conversión en vivo",
          "Agenda de llamadas de descubrimiento desde anuncios, redes sociales y email — sin fricción",
          "Secuencia de seguimiento a propuestas — nunca dejes dinero sobre la mesa",
          "Automatización de incorporación de clientes y check-ins de hitos",
          "Recolección de testimonios y secuencias de upsell en el momento correcto",
        ],
      },
      salon: {
        desc: "Las sillas vacías son ingresos perdidos. Un calendario lleno no ocurre por accidente — ocurre porque el sistema lo agenda por ti.",
        items: [
          "Dashboard de negocio — uso de sillas, ingresos, tasa de reagendación y reseñas",
          "Recordatorio automático de reagendación 3–4 semanas después de cada visita",
          "Secuencia de recuperación de ausencias y cancelaciones",
          "Programa de recompensas de lealtad — puntos, canjes, completamente automatizado",
          "Promociones de cumpleaños enviadas a cada cliente en el día correcto",
          "Solicitudes de reseña enviadas automáticamente después de cada cita",
        ],
      },
      restaurant: {
        desc: "Compites en reseñas de Google y visitas repetidas. Ambas pueden impulsarse de forma sistemática — no dejarse al azar.",
        items: [
          "Dashboard de operaciones — cubiertos, ingresos, horas pico y tasa de repetición en vivo",
          "Programa de lealtad por SMS — puntos, recompensas, campañas de reactivación automatizadas",
          "Secuencia de solicitud de reseña activada después de cada visita o pedido",
          "Campañas de reactivación para clientes que no han regresado en 30+ días",
          "Anuncios de eventos y promociones desplegados a toda tu base de datos",
          "Sistema de reservas en línea integrado a tus operaciones",
        ],
      },
    } as Record<string, { desc: string; items: string[] }>,

    // More industries
    moreIndustries: [
      { val: "mortgage",    icon: "🏦", title: "Hipotecas / Préstamos",         desc: "Oficiales de préstamo, brokers, prestamistas" },
      { val: "financial",   icon: "💰", title: "Servicios Financieros",          desc: "Gestión patrimonial, planeación financiera" },
      { val: "fitness",     icon: "💪", title: "Fitness / Bienestar",            desc: "Gimnasios, entrenadores personales, estudios" },
      { val: "chiro",       icon: "🩺", title: "Quiropráctico / Fisioterapia",  desc: "Quiroprácticos, clínicas de PT, rehabilitación" },
      { val: "auto",        icon: "🚗", title: "Agencia / Servicios de Autos",  desc: "Venta de autos, taller, detailing" },
      { val: "property",    icon: "🏢", title: "Administración de Propiedades", desc: "Rentas, HOA, oficinas de arrendamiento" },
      { val: "ecommerce",   icon: "🛒", title: "E-commerce / Retail",           desc: "Tiendas en línea, negocios de productos" },
      { val: "education",   icon: "🎓", title: "Educación / Capacitación",      desc: "Escuelas, tutorías, cursos en línea" },
      { val: "vet",         icon: "🐾", title: "Clínica Veterinaria",           desc: "Hospitales para animales, consultorios veterinarios" },
      { val: "childcare",   icon: "🧒", title: "Guardería / Daycare",           desc: "Centros de cuidado infantil, preescolares" },
      { val: "events",      icon: "🎉", title: "Eventos / Fotografía",          desc: "Organizadores de eventos, fotógrafos, venues" },
      { val: "cleaning",    icon: "🧹", title: "Limpieza / Mantenimiento",      desc: "Limpieza residencial y comercial" },
      { val: "optometry",   icon: "👓", title: "Optometría / Visión",           desc: "Clínicas de ojos, optometristas" },
      { val: "marketing",   icon: "📣", title: "Agencia de Marketing / Diseño", desc: "Agencias digitales, estudios de diseño" },
      { val: "travel",      icon: "✈️", title: "Agencia de Viajes",             desc: "Operadores turísticos, asesores de viajes" },
      { val: "solar",       icon: "☀️", title: "Solar / Energía",               desc: "Instaladores de paneles solares, consultores" },
      { val: "mentalhealth",icon: "🧠", title: "Salud Mental / Terapia",        desc: "Terapeutas, psicólogos, consejeros" },
      { val: "pestcontrol", icon: "🐛", title: "Control de Plagas",             desc: "Servicios residenciales y comerciales de plagas" },
      { val: "immigration", icon: "🌎", title: "Servicios de Inmigración",      desc: "Abogados y consultores de inmigración" },
      { val: "other",       icon: "💼", title: "Otro Negocio de Servicios",     desc: "No está en la lista" },
    ],

    // Ticker rows
    nichesRow1: [
      { icon: "🏦", title: "Hipotecas / Préstamos" },
      { icon: "💰", title: "Servicios Financieros" },
      { icon: "💪", title: "Fitness / Bienestar" },
      { icon: "🩺", title: "Quiropráctico / Fisioterapia" },
      { icon: "🚗", title: "Agencia / Servicios de Autos" },
      { icon: "🏢", title: "Administración de Propiedades" },
      { icon: "🛒", title: "E-commerce / Retail" },
      { icon: "🎓", title: "Educación / Capacitación" },
      { icon: "👥", title: "Staffing / Recursos Humanos" },
      { icon: "🐾", title: "Clínica Veterinaria" },
      { icon: "🤝", title: "Organizaciones Sin Fines de Lucro" },
      { icon: "🚛", title: "Transporte / Logística" },
      { icon: "📣", title: "Agencia de Marketing / Diseño" },
      { icon: "✈️", title: "Agencia de Viajes" },
    ],
    nichesRow2: [
      { icon: "🧒", title: "Guardería / Daycare" },
      { icon: "🎉", title: "Eventos / Entretenimiento" },
      { icon: "🧹", title: "Limpieza / Mantenimiento" },
      { icon: "💊", title: "Farmacia / Compounding" },
      { icon: "👓", title: "Optometría / Visión" },
      { icon: "🏡", title: "Cuidado de Adultos Mayores" },
      { icon: "🔧", title: "Contratista / Servicios" },
      { icon: "📊", title: "Impuestos / Contabilidad" },
      { icon: "⚖️", title: "Despacho Legal" },
      { icon: "🎯", title: "Coach / Consultor" },
      { icon: "🍽️", title: "Restaurante / Negocio Local" },
      { icon: "✂️", title: "Salón / Barbería / Spa" },
      { icon: "💆", title: "Med Spa / Estética" },
      { icon: "💼", title: "Cualquier Negocio de Servicios" },
    ],

    // Pain options
    painOptions: [
      { val: "missed_calls",  icon: "📞", title: "Llamadas y prospectos que quedan sin respuesta",  desc: "Clientes potenciales llaman, nadie contesta — se van a la competencia" },
      { val: "slow_followup", icon: "🐌", title: "Seguimiento lento o inconsistente a prospectos",  desc: "Los prospectos se enfrían porque el seguimiento es manual e inconsistente" },
      { val: "manual_work",   icon: "🔁", title: "Demasiado trabajo manual y repetitivo",           desc: "Horas perdidas en tareas que deberían estar automatizadas" },
      { val: "no_shows",      icon: "🚫", title: "Ausentismo y cancelaciones de citas",             desc: "Las citas agendadas que no se presentan cuestan ingresos reales" },
      { val: "cant_scale",    icon: "📈", title: "No puedo crecer sin contratar más personal",      desc: "Cada nuevo cliente implica más costos — crecer se siente caro" },
      { val: "no_visibility", icon: "📉", title: "Sin visibilidad de lo que está pasando",          desc: "Sin datos claros de prospectos, conversiones o qué está funcionando" },
    ],

    // Volume options
    volumeOptions: [
      { val: "low",       icon: "🌱", title: "Menos de 20", desc: "Etapa inicial o mercado de nicho" },
      { val: "medium",    icon: "🔥", title: "20 – 60",     desc: "Flujo creciente y constante" },
      { val: "high",      icon: "⚡", title: "60 – 150",    desc: "Alto volumen — el sistema es crítico" },
      { val: "very_high", icon: "🚀", title: "150+",        desc: "Nivel empresarial — necesita infraestructura completa" },
    ],

    // Automations by pain
    autoMap: {
      missed_calls: [
        { i: "📞", t: "Agente de Voz AI — Atención de Llamadas 24/7",  d: "Cada llamada respondida, prospectos calificados y agendados automáticamente" },
        { i: "💬", t: "Sistema de Respuesta Inmediata por SMS",          d: "Las llamadas perdidas activan un SMS inmediato para mantener al prospecto activo" },
        { i: "🗓️", t: "Agenda Automática de Citas",                     d: "El AI agenda directamente en tu calendario — sin ir y venir" },
      ],
      slow_followup: [
        { i: "🤖", t: "Secuencia AI de Seguimiento (SMS + Email)",      d: "Cada prospecto recibe seguimiento en segundos, automáticamente" },
        { i: "🔥", t: "Sistema de Reactivación de Prospectos",           d: "Prospectos fríos de tu base de datos traídos de vuelta" },
        { i: "📋", t: "Pipeline CRM + Enrutamiento Automático",          d: "Prospectos organizados y movidos automáticamente según su etapa" },
      ],
      manual_work: [
        { i: "🔄", t: "Automatización Completa de Back-Office",          d: "Captura de datos, reportes, emails — funcionando sin que nadie los toque" },
        { i: "📄", t: "Recolección y Procesamiento de Documentos",       d: "Recordatorios automáticos y flujos de admisión para documentos de clientes" },
        { i: "📊", t: "Dashboard de Reportes Automatizados",             d: "Números siempre listos — sin actualizaciones manuales en hojas de cálculo" },
      ],
      no_shows: [
        { i: "⏰", t: "Sistema de Recordatorios Inteligentes (SMS + Email + WhatsApp)", d: "Recordatorios multicanal que reducen el ausentismo entre 60–80%" },
        { i: "🗓️", t: "Flujo Fácil de Reagendación",                    d: "Reagendación con un toque que mantiene la cita viva" },
        { i: "💳", t: "Sistema de Depósito y Confirmación",              d: "Reservas con compromiso que reducen citas fantasma" },
      ],
      cant_scale: [
        { i: "⚙️", t: "Capa de Automatización Operacional",             d: "Gestiona 2× más volumen con el mismo equipo — los sistemas absorben el crecimiento" },
        { i: "🤝", t: "Incorporación Automatizada de Clientes",          d: "Cada nuevo cliente recibe la misma experiencia perfecta" },
        { i: "📈", t: "Automatización del Pipeline de Ventas AI",        d: "Prospectos capturados, nutridos y movidos hacia el cierre en piloto automático" },
      ],
      no_visibility: [
        { i: "📊", t: "Dashboard de Negocio en Tiempo Real",             d: "Cada métrica actualizada automáticamente — siempre sabes dónde estás" },
        { i: "🎯", t: "Rastreo de Fuente de Prospectos y Conversiones",  d: "Sabes exactamente qué canales producen clientes y cuáles desperdician dinero" },
        { i: "📩", t: "Reporte Semanal Automatizado del Negocio",        d: "Números clave entregados a tu correo cada lunes, automáticamente" },
      ],
    } as Record<string, { i: string; t: string; d: string }[]>,

    // Score subtitles
    scoreSub90: "Oportunidad crítica — hay ingresos significativos siendo perdidos ahora mismo",
    scoreSub80: "Alta oportunidad — tu operación está lista para ser dramáticamente más eficiente",
    scoreSub70: "Gran oportunidad — los sistemas correctos cambiarían tu trayectoria de inmediato",
    scoreSub60: "Oportunidad clara — la automatización base desbloquearía crecimiento real",

    // Testimonials
    testimonials: {
      insurance:  { quote: '"Desde que configuramos el agente de voz AI, no hemos perdido ni un solo prospecto. Responde cada llamada, califica al cliente y agenda la cita — incluso a las 11pm. Nuestra tasa de cierre subió 40% en los primeros dos meses."', name: "Jesús Martínez",    title: "Dueño de Agencia de Seguros",    metric: "+40% tasa de cierre" },
      tax:        { quote: '"La temporada de impuestos era caos. Ahora la recolección de documentos, recordatorios a clientes y seguimientos ocurren automáticamente. Atendí 30% más clientes este año con el mismo personal."',                             name: "Berta Viloria",    title: "Contadora y Asesora Fiscal",     metric: "+30% clientes atendidos" },
      contractor: { quote: '"Estoy en obra todo el día. Antes de LPS, cada llamada perdida era un trabajo perdido. Ahora el AI lo gestiona, agenda el estimado y yo solo aparezco. No he perdido un prospecto por llamada perdida en meses."',              name: "Pedro Rivera",     title: "CabinetWorkx — Contratista",     metric: "Nunca más pierde prospectos" },
      salon:      { quote: '"Las sillas vacías me estresaban. Ahora el sistema de reagendación llena mi calendario automáticamente. Ahorré 2 horas al día solo en administración."',                                                                        name: "Joshua Plaza",     title: "Dueño de Barbería",              metric: "2 hrs/día ahorradas" },
      realestate: { quote: '"El 90% de mis prospectos se enfriaban porque no podía dar seguimiento rápido. Ahora cada prospecto recibe respuesta en segundos. Mis conversiones se duplicaron en 60 días."',                                                 name: "Kerwin Iglesias",  title: "Broker de Bienes Raíces",        metric: "Conversiones 2×" },
      health:     { quote: '"Cada ausencia me costaba $200. Después de configurar el sistema de recordatorios, mi tasa de ausentismo bajó de 25% a menos del 5%. El sistema se pagó solo en la primera semana."',                                          name: "Dr. Andrea Campos",title: "Dueña de Clínica de Salud",     metric: "−80% ausencias" },
      medspa:     { quote: '"Los clientes desaparecían después de su primera visita. Ahora la secuencia de reagendación los trae de regreso automáticamente. Mis ingresos mensuales por clientes recurrentes subieron 35%."',                               name: "Sofia Restrepo",   title: "Dueña de Med Spa",               metric: "+35% ingresos recurrentes" },
      legal:      { quote: '"Con el sistema de respuesta instantánea, ahora somos el primer despacho en contestar — y eso solo aumentó nuestras consultas un 60% este trimestre."',                                                                        name: "Carlos Mendez",    title: "Abogado de Inmigración",         metric: "+60% consultas" },
      coach:      { quote: '"Antes pasaba mis días persiguiendo prospectos y agendando llamadas. Ahora el sistema lo hace todo. Me enfoco en entregar resultados — y mis ingresos subieron 45%."',                                                          name: "Maria Torres",     title: "Coach de Negocios",              metric: "+45% ingresos" },
      default:    { quote: '"El sistema estuvo activo en menos de 3 semanas. En el primer mes, recuperamos $4,200 en prospectos que habríamos perdido, ahorramos 8 horas de administración manual, y nuestra consistencia de seguimiento llegó al 100%."', name: "Cliente Latin Prime",title: "Dueño de Negocio de Servicios", metric: "$4,200 recuperados" },
    } as Record<string, { quote: string; name: string; title: string; metric: string }>,

    // Plan names
    planNames: {
      enterprise: "Enterprise",
      growth: "Growth Plan",
      pro: "Pro Plan",
      starter: "Starter Plan",
    },
  },
};

// ── SCORING & PLAN LOGIC ───────────────────────────────────────────────────────
function getPlan(pain: string | null, volume: string | null, t: typeof TRANSLATIONS["en"]) {
  if (volume === "very_high") return { name: t.planNames.enterprise, price: "Custom",  period: t.planPeriodCustom, setup: t.planSetupEnterprise };
  if (pain === "missed_calls" || volume === "high") return { name: t.planNames.growth, price: "$1,797", period: "/month", setup: t.planSetupGrowth };
  if (volume === "medium" || pain === "slow_followup" || pain === "cant_scale")
    return { name: t.planNames.pro, price: "$997", period: "/month", setup: t.planSetupPro };
  return { name: t.planNames.starter, price: "$497", period: "/month", setup: t.planSetupStarter };
}

function getScore(pain: string | null, volume: string | null) {
  const base:  Record<string, number> = { low: 62, medium: 74, high: 85, very_high: 94 };
  const boost: Record<string, number> = { missed_calls: 8, slow_followup: 6, manual_work: 4, no_shows: 5, cant_scale: 7, no_visibility: 3 };
  return Math.min(98, (base[volume ?? ""] ?? 70) + (boost[pain ?? ""] ?? 0));
}

function getScoreSub(score: number, t: typeof TRANSLATIONS["en"]) {
  if (score >= 90) return t.scoreSub90;
  if (score >= 80) return t.scoreSub80;
  if (score >= 70) return t.scoreSub70;
  return t.scoreSub60;
}

function getRoiTeaser(volume: string | null) {
  return { low: "$3,200", medium: "$6,800", high: "$14,500", very_high: "$28,000+" }[volume ?? ""] ?? "$8,400";
}

function getTestimonial(industries: string[], t: typeof TRANSLATIONS["en"]) {
  for (const ind of industries) if (t.testimonials[ind]) return t.testimonials[ind];
  return t.testimonials.default;
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

export default function AutomationQuiz({ lang }: { lang?: Lang }) {
  const t = TRANSLATIONS[lang ?? "en"];

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

    const selectedPlan = getPlan(pain, volume, t);
    const selectedScore = getScore(pain, volume);
    const selectedAutomations = (t.autoMap[pain ?? ""] ?? t.autoMap.slow_followup).map(a => a.t);
    const industryItems = detailIndustry ? (t.industryDetails[detailIndustry]?.items ?? []) : [];

    const leadData = {
      form_id: "Quiz",
      name: formName,
      email: formEmail,
      industry: industry.join(", "),
      pain,
      volume,
      plan: selectedPlan.name,
      plan_price: selectedPlan.price,
      plan_setup: selectedPlan.setup,
      score: selectedScore,
      score_label: getScoreSub(selectedScore, t),
      estimated_revenue: getRoiTeaser(volume),
      recommended_automations: selectedAutomations,
      industry_solutions: industryItems,
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

  const plan  = getPlan(pain, volume, t);
  const score = getScore(pain, volume);
  const autos = t.autoMap[pain ?? ""] ?? t.autoMap.slow_followup;
  const testimonial = getTestimonial(industry, t);

  const stepIndex: Record<Step, number> = { q1: 0, q2: 1, q3: 2, loading: 3, result: 3, thankyou: 4 };
  const currentIdx = stepIndex[step];

  const detailData = detailIndustry ? t.industryDetails[detailIndustry] : null;
  const detailLabel = detailIndustry ? t.primaryIndustries.find(i => i.val === detailIndustry) : null;

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
              <div className="slabel" style={{ justifyContent: "center" }}>{t.sectionLabel}</div>
              <h2 className="section-title" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", marginBottom: 14 }}>
                <SplitText text={t.headline} delay={0.05} />{" "}
                <ShinyText text={t.headlineShiny} speed={4} />
              </h2>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 540, margin: "0 auto" }}>
                {t.headerDesc}
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
                  {socialCount} {t.socialBusinesses}
                </span>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  {t.socialThisMonth}
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
                {step === "q2" ? t.question2of3 : step === "q3" ? t.question3of3 : step === "loading" ? t.analyzing : t.planReady}
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
                    {t.step1of3}
                  </div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)", lineHeight: 1.3 }}>
                    {t.q1Title}
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>
                    {t.q1Desc}
                  </p>
                </div>

                <div style={cardBody}>
                  {/* Counter badge */}
                  {industry.length > 0 && (
                    <div style={{ marginBottom: 16 }}>
                      <span style={{ background: "rgba(212,165,58,0.12)", border: "1px solid rgba(212,165,58,0.35)", color: "var(--gold)", fontSize: "0.72rem", fontWeight: 700, padding: "4px 14px", borderRadius: 20, fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}>
                        {industry.length === 1 ? t.industrySelected1 : t.industrySelectedMany(industry.length)}
                      </span>
                    </div>
                  )}

                  {/* Primary industry grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                    {t.primaryIndustries.map(opt => (
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
                          {t.moreIndustries.map(opt => (
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
                    {moreVisible ? t.showFewerIndustries : t.showMoreIndustries}
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
                            {t.whatWeAutomate}
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
                            {t.manyMoreAutomations}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                    <NavBtn disabled={industry.length === 0} onClick={() => goStep("q2")}>
                      {industry.length === 0
                        ? t.selectToContinue
                        : industry.length === 1
                          ? t.continueChallenge
                          : t.continueWithMany(industry.length)}
                    </NavBtn>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Q2 — Pain */}
            {step === "q2" && (
              <motion.div key="q2" {...slideIn} style={card}>
                <div style={cardHeader}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>{t.question2label}</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)", lineHeight: 1.3 }}>
                    {t.q2Title}
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>
                    {t.q2Desc}
                  </p>
                </div>
                <div style={cardBody}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {t.painOptions.map(opt => (
                      <SingleOpt key={opt.val} opt={opt} selected={pain === opt.val} onSelect={() => setPain(opt.val)} />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, gap: 12 }}>
                    <BackBtn onClick={() => goStep("q1")} label={t.back} />
                    <NavBtn disabled={!pain} onClick={() => goStep("q3")}>{t.continueCta}</NavBtn>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Q3 — Volume */}
            {step === "q3" && (
              <motion.div key="q3" {...slideIn} style={card}>
                <div style={cardHeader}>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>{t.question3label}</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)", lineHeight: 1.3 }}>
                    {t.q3Title}
                  </h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>
                    {t.q3Desc}
                  </p>
                </div>
                <div style={cardBody}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="quiz-vol-grid">
                    {t.volumeOptions.map(opt => (
                      <SingleOpt key={opt.val} opt={opt} selected={volume === opt.val} onSelect={() => setVolume(opt.val)} />
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24, gap: 12 }}>
                    <BackBtn onClick={() => goStep("q2")} label={t.back} />
                    <NavBtn disabled={!volume} onClick={() => goStep("loading")}>{t.seeMyPlan}</NavBtn>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Loading */}
            {step === "loading" && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={card}>
                <div style={{ textAlign: "center", padding: "64px 32px" }}>
                  <div style={{ width: 56, height: 56, border: "3px solid var(--border2)", borderTopColor: "var(--gold)", borderRadius: "50%", animation: "quiz-spin 0.9s linear infinite", margin: "0 auto 24px" }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: 8 }}>{t.buildingPlan}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 24 }}>{t.analyzingProfile}</p>
                  <ul style={{ listStyle: "none", textAlign: "left", display: "inline-block" }}>
                    {t.loadingItems.map((txt, i) => (
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
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00a854", marginBottom: 8 }}>{t.analysisComplete}</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)", color: "var(--text)" }}>{t.resultTitle}</h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--text-muted)", marginTop: 6 }}>{t.resultDesc}</p>
                </div>
                <div style={cardBody}>
                  {/* Score bar */}
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border2)", borderRadius: 12, padding: 20, marginBottom: 16, position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--blue), var(--gold))" }} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)" }}>{t.scoreLabel}</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "2rem", color: "var(--gold)", lineHeight: 1 }}>{animScore}<span style={{ fontSize: "1rem", color: "var(--text-dim)", fontWeight: 600 }}>%</span></span>
                    </div>
                    <div style={{ height: 8, background: "var(--surface2)", borderRadius: 8, overflow: "hidden" }}>
                      <div style={{ height: "100%", borderRadius: 8, background: "linear-gradient(90deg, var(--blue), var(--gold))", width: `${animScore}%`, transition: "width 0.1s" }} />
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", marginTop: 8 }}>{getScoreSub(score, t)}</p>
                  </div>

                  {/* Plan badge */}
                  <div style={{ background: "rgba(212,165,58,0.06)", border: "1px solid rgba(212,165,58,0.25)", borderRadius: 12, padding: "16px 20px", marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 4 }}>{t.recommendedPlan}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.25rem", color: "var(--text)" }}>{plan.name}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900, fontSize: "1.35rem", color: "var(--gold)" }}>{plan.price}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--text-dim)" }}>{plan.period} · {plan.setup}</div>
                    </div>
                  </div>

                  {/* Top 3 automations */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: 10 }}>{t.top3Label}</div>
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
                      <strong style={{ color: "var(--text)" }}>{t.roiUnlockTitle}</strong><br />
                      {t.roiUnlockDesc}
                    </p>
                  </div>

                  {/* Lead form */}
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border2)", borderRadius: 14, padding: 24 }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)", marginBottom: 4 }}>{t.unlockPlanTitle}</p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.6 }}>{t.unlockPlanDesc}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="quiz-form-row">
                      <div>
                        <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>{t.firstNameLabel}</label>
                        <input
                          type="text" value={formName} placeholder={t.firstNamePlaceholder}
                          onChange={e => { setFormName(e.target.value); setNameErr(false); }}
                          style={{ width: "100%", background: "#FFFFFF", border: `1.5px solid ${nameErr ? "#e55" : "var(--border2)"}`, borderRadius: 10, padding: "13px 16px", fontSize: "0.875rem", color: "var(--text)", fontFamily: "inherit", outline: "none" }}
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: 6 }}>{t.emailLabel}</label>
                        <input
                          type="email" value={formEmail} placeholder={t.emailPlaceholder}
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
                      {t.unlockCta}
                    </button>
                    <p style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--text-dim)", marginTop: 10, lineHeight: 1.5 }}>{t.noSpam}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Thank You */}
            {step === "thankyou" && (
              <motion.div key="thankyou" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} style={card}>
                <div style={{ textAlign: "center", padding: "52px 32px 40px" }}>
                  <div style={{ width: 72, height: 72, background: "rgba(0,168,84,0.1)", border: "2px solid var(--green)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", margin: "0 auto 24px", animation: "quiz-popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>✓</div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--text)", marginBottom: 10 }}>{t.thankYouTitle}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28, maxWidth: 420, margin: "0 auto 28px" }}>{t.thankYouDesc}</p>

                  <div style={{ background: "var(--surface)", borderRadius: 12, padding: 20, marginBottom: 20, textAlign: "left" }}>
                    {t.thankYouItems.map((row, i) => (
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

                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 12 }}>{t.skipWait}</p>
                  <a
                    href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", background: "var(--blue)", color: "white", padding: "16px 24px", borderRadius: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", boxShadow: "0 4px 24px rgba(15,34,64,0.2)", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#1a3560"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--blue)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    {t.bookCta}
                  </a>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-dim)", marginTop: 10 }}>{t.bookSub}</p>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Trust bar */}
          {step !== "thankyou" && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 28, marginTop: 32, flexWrap: "wrap" }}>
              {t.trustItems.map(item => (
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

function BackBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{ background: "transparent", border: "1.5px solid var(--border2)", color: "var(--text-muted)", padding: "13px 22px", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--blue)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
    >
      {label}
    </button>
  );
}
