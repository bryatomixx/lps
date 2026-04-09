import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "AI Automation Agency for Small Business | Latin Prime Systems",
    template: "%s | Latin Prime Systems",
  },
  description:
    "Done-for-you AI automation for service businesses. AI voice agents answer calls 24/7, automations follow up every lead, and custom software runs your ops — live in 7–30 days. 90-Day ROI Guarantee.",
  keywords: [
    // Core service keywords
    "AI automation agency",
    "AI automation for small business",
    "done-for-you AI automation",
    "AI voice agent for business",
    "AI phone answering service",
    "automated lead follow-up",
    "business process automation",
    "workflow automation small business",
    // Platform-specific
    "GoHighLevel agency",
    "GoHighLevel setup service",
    "VAPI AI voice agent",
    "n8n automation agency",
    "Make automation agency",
    // Industry-specific
    "AI automation for insurance agents",
    "AI automation for real estate",
    "AI automation for dental practice",
    "AI automation for med spa",
    "AI automation for contractors",
    "AI automation for law firm",
    "CRM for service business",
    "AI chatbot for local business",
    // Bilingual / LatAm
    "automatización IA negocios",
    "agencia automatización con inteligencia artificial",
    "agente de voz IA para negocios",
    "sistema CRM automatizado",
    "automatización para agencias de seguros",
    // Brand + intent
    "Latin Prime Systems",
    "Latin Prime automation",
    "latinprimesystems.com",
    "stop missing calls small business",
    "AI system for service business",
    "scale business without hiring",
    "automated follow-up system",
    "command center for small business",
    "AI dashboard for business",
  ],
  authors: [{ name: "Latin Prime Systems", url: "https://latinprimesystems.com" }],
  creator: "Latin Prime Systems",
  publisher: "Latin Prime Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://latinprimesystems.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://latinprimesystems.com",
      "es": "https://latinprimesystems.com/es",
      "x-default": "https://latinprimesystems.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com",
    siteName: "Latin Prime Systems",
    title: "Stop Losing Leads. Your Business on Autopilot. | Latin Prime Systems",
    description:
      "AI voice agents answer every call. Automations follow every lead. Custom software runs your ops. Done-for-you AI systems live in 7–30 days. 90-Day ROI Guarantee.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — AI Automation Agency for Small Business",
        type: "image/webp",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@latinprimesys",
    creator: "@latinprimesys",
    title: "AI Automation Agency for Small Business | Latin Prime Systems",
    description:
      "AI voice agents answer calls 24/7. Every lead followed up automatically. Custom command centers for your business. Live in 7–30 days. 90-Day ROI Guarantee.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        alt: "Latin Prime Systems — AI Automation Agency",
      },
    ],
  },
  category: "Business Services",
  classification: "AI Automation Agency",
  other: {
    // Geo targeting
    "geo.region": "US",
    "geo.placename": "United States",
    "ICBM": "37.09024, -95.712891",
    // App info
    "application-name": "Latin Prime Systems",
    "apple-mobile-web-app-title": "Latin Prime Systems",
    // Content signals
    "subject": "AI Automation Agency for Small and Medium Service Businesses",
    "rating": "general",
    "revisit-after": "7 days",
    // Verification placeholders (add actual codes when available)
    // "google-site-verification": "your-code-here",
    // "msvalidate.01": "your-code-here",
  },
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = [
  // 1. ProfessionalService — primary business entity
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://latinprimesystems.com/#business",
    name: "Latin Prime Systems",
    alternateName: ["Latin Prime", "LPS", "Latin Prime Enterprises"],
    description:
      "Latin Prime Systems is a done-for-you AI automation agency that builds AI voice agents, CRM systems, workflow automations, custom dashboards, and command centers for service businesses. We handle the complete setup, configuration, and management so owners can scale without adding headcount.",
    url: "https://latinprimesystems.com",
    telephone: "+19714006390",
    email: "contact@latinprimesystems.com",
    foundingDate: "2024",
    priceRange: "$497–$1,797/month",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Bank Transfer",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Venezuela" },
      { "@type": "Place", name: "Latin America" },
    ],
    serviceType: [
      "AI Automation Agency",
      "AI Voice Agent Deployment",
      "CRM Setup and Configuration",
      "Workflow Automation",
      "AI Chatbot Development",
      "Lead Follow-Up Automation",
      "Sales Pipeline Automation",
      "Business Command Center",
      "Custom Dashboard Development",
      "GoHighLevel Agency Services",
      "Business Process Automation",
      "Missed Call Text-Back Systems",
      "n8n Automation",
      "Make Automation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Plans for Small Business",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Starter AI System",
          description:
            "GoHighLevel CRM full build, lead capture pipeline, automated SMS & email follow-up, Zapier integrations, basic AI chatbot, monthly strategy call, LPS dashboard access, and onboarding session.",
          price: "497",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "497",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
          eligibleRegion: { "@type": "Place", name: "United States" },
        },
        {
          "@type": "Offer",
          name: "Pro AI System",
          description:
            "Everything in Starter plus professional website, n8n advanced automations, Gemini AI integration, full sales pipeline, multichannel (WhatsApp, Instagram, Facebook), reputation management, bi-weekly strategy calls, and priority support.",
          price: "997",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "997",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Growth AI System with Voice Agent",
          description:
            "Everything in Pro plus Vapi AI voice agent answering calls 24/7, ElevenLabs voice cloning, HeyGen AI video avatar, full Make/n8n ecosystem, AI lead scoring, dedicated Success Manager, weekly strategy calls, same-day support.",
          price: "1797",
          priceCurrency: "USD",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "1797",
            priceCurrency: "USD",
            unitText: "MONTH",
          },
        },
        {
          "@type": "Offer",
          name: "Enterprise Custom AI Infrastructure",
          description:
            "Fully custom AI infrastructure: custom workflows, AI agents trained on client data, automated client onboarding, referral automation, multi-location systems, white-label options, API integrations, dedicated account manager, weekly calls, quarterly audits.",
          priceCurrency: "USD",
          eligibleCustomerType: "Business",
        },
      ],
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Jesús Martínez" },
        reviewBody:
          "Since we set up the AI voice agent, we haven't missed a single lead. Our close rate went up 40% in the first two months.",
        datePublished: "2025-04-01",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Kerwin Iglesias" },
        reviewBody:
          "Within 30 days, the system had already recovered $4,200 in policies from dormant leads. The ROI was obvious in the first month.",
        datePublished: "2025-05-01",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Berta Viloria" },
        reviewBody:
          "I handled 30% more clients this year with the same staff. Tax season automation changed everything.",
        datePublished: "2025-06-01",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Marco Delgado" },
        reviewBody:
          "We went from answering maybe 60% of calls to 100%. The AI books appointments while I sleep. I don't know how I ran without this.",
        datePublished: "2025-07-01",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Adriana Fuentes" },
        reviewBody:
          "The command center alone was worth it. I finally know what's happening in my business in real time — leads, revenue, follow-ups, everything on one screen.",
        datePublished: "2025-08-01",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "5",
      bestRating: "5",
      worstRating: "1",
    },
  },

  // 2. WebSite — enables sitelinks search box
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://latinprimesystems.com/#website",
    url: "https://latinprimesystems.com",
    name: "Latin Prime Systems",
    description:
      "Done-for-you AI automation agency for service businesses. AI voice agents, CRM systems, workflow automation, custom dashboards, and command centers — live in 7–30 days.",
    inLanguage: ["en", "es"],
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: "https://latinprimesystems.com/?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://latinprimesystems.com/#webpage",
    url: "https://latinprimesystems.com",
    name: "AI Automation Agency for Small Business | Latin Prime Systems",
    description:
      "Done-for-you AI automation: voice agents answer every call, automations follow every lead, custom software runs your ops. Live in 7–30 days. 90-Day ROI Guarantee.",
    inLanguage: ["en", "es"],
    isPartOf: { "@id": "https://latinprimesystems.com/#website" },
    about: { "@id": "https://latinprimesystems.com/#business" },
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#hero", "#solutions", "#pricing", "#faq"],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://latinprimesystems.com",
        },
      ],
    },
  },

  // 4. Organization — brand entity with social signals
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://latinprimesystems.com/#organization",
    name: "Latin Prime Systems",
    legalName: "Latin Prime Enterprises LLC",
    url: "https://latinprimesystems.com",
    logo: {
      "@type": "ImageObject",
      url: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69ac6d227bdf387250ce554b.png",
      width: 280,
      height: 72,
    },
    image: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
    sameAs: [
      "https://www.linkedin.com/company/latin-prime-systems/",
      "https://www.facebook.com/latinprimesystem",
      "https://www.instagram.com/latinprimesystems",
      "https://www.tiktok.com/@carloslatinprime",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+19714006390",
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
        contactOption: "TollFree",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        email: "contact@latinprimesystems.com",
        contactType: "customer support",
        availableLanguage: ["English", "Spanish"],
      },
    ],
    knowsAbout: [
      "AI Automation for Small Business",
      "Artificial Intelligence Business Systems",
      "CRM Systems and GoHighLevel",
      "AI Voice Agents (VAPI)",
      "Workflow Automation (n8n, Make, Zapier)",
      "Lead Generation Automation",
      "Sales Pipeline Automation",
      "Business Command Centers",
      "Custom Business Dashboards",
      "WhatsApp Business API Automation",
      "ElevenLabs Voice Synthesis",
      "Small Business Technology",
      "Service Business Scaling",
      "Bilingual AI Systems (English and Spanish)",
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
    slogan: "Stop Running Your Business. Start Growing It.",
  },

  // 5. FAQPage — synced with FAQ component (10 questions)
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://latinprimesystems.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What if I'm not technical at all?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That's exactly who we build this for. You don't touch a single piece of technology. We handle everything — setup, configuration, testing, and ongoing maintenance. You give us access to your phone number, your calendar, and your CRM, and we do the rest. When we hand it over, it just works.",
        },
      },
      {
        "@type": "Question",
        name: "How long until my AI automation system is live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Starter systems are typically live in 7–14 days. Growth systems with AI voice agents take 14–30 days depending on complexity. We send you a live, fully-tested system with a walkthrough — not a rough draft.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a long-term contract for AI automation services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Latin Prime Systems operates on month-to-month plans. You can cancel anytime. We keep clients because the system works, not because of lock-in.",
        },
      },
      {
        "@type": "Question",
        name: "What does the AI automation setup fee cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The setup fee covers the full build: your CRM configuration, all automations, the AI voice agent (if applicable), your website (Starter plan), integrations, testing, and your onboarding call. It's a one-time cost based on your scope — typically $997–$5,997 depending on the plan.",
        },
      },
      {
        "@type": "Question",
        name: "Will AI automation work for my specific industry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every system we build is custom to your industry and workflows. We've built for insurance, real estate, dental, med spas, contractors, tax firms, restaurants, coaches, law firms, and salons. If for any reason your system doesn't generate measurable results within the guarantee period, we keep working at no extra cost until it does.",
        },
      },
      {
        "@type": "Question",
        name: "I already have GoHighLevel. Why do I need Latin Prime Systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GoHighLevel is a platform — like buying a gym without a trainer. Most businesses who have GHL barely use it. We build the complete working system inside it: automations, voice agent, pipelines, sequences, and integrations. If you already have GHL, we configure your existing account.",
        },
      },
      {
        "@type": "Question",
        name: "Will the AI voice agent sound robotic?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We use natural-sounding AI voice technology (ElevenLabs + VAPI) that's trained on your business — your tone, your FAQs, your services, your pricing. Callers regularly don't realize they're talking to an AI until they're told. You review and approve the voice before we go live.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to my data and my clients' data?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All data stays in your GoHighLevel account — which you own. We don't store, sell, or access your client data outside of configuration work. GoHighLevel is SOC 2 Type II compliant and GDPR-ready. You retain 100% ownership of your data at all times.",
        },
      },
      {
        "@type": "Question",
        name: "Does Latin Prime Systems work with businesses outside the US?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We actively serve clients in Mexico, Colombia, Venezuela, and other Latin American markets. Pricing is adjusted for local market conditions on request. All systems support Spanish, English, and bilingual operation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I measure ROI from AI automation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We set up a reporting dashboard from day one. You'll see exactly how many leads were captured, how many calls were answered by the AI, how many appointments were booked, and how many follow-ups went out — updated automatically. No guessing. Numbers every week.",
        },
      },
    ],
  },

  // 6. HowTo — the onboarding process (targets 'how to set up AI automation' queries)
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get AI Automation for Your Business with Latin Prime Systems",
    description:
      "Latin Prime Systems sets up your complete AI automation system — AI voice agent, CRM, automations, and command center — in 4 steps, live in 7–30 days.",
    totalTime: "P7D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "497",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book a Free 30-Minute Strategy Call",
        text: "Schedule a free strategy call. We map out exactly which automations will have the highest ROI for your specific business — no pitch deck, no commitment.",
        url: "https://latinprimesystems.com/#contact",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "We Design Your Custom AI System",
        text: "After the call, we design your complete automation blueprint: AI voice agent configuration, CRM pipeline setup, workflow logic, and integration map — specific to your industry.",
        url: "https://latinprimesystems.com/#solutions",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "We Build, Test, and Configure Everything",
        text: "We build every component of your system, test it end-to-end, and configure it to your exact business workflows. You don't touch a single line of code.",
        url: "https://latinprimesystems.com/#solutions",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Your System Goes Live — You Scale",
        text: "We hand over a fully working system with a live walkthrough. From day one, your AI answers calls, follows up leads, and books appointments automatically — 24/7.",
        url: "https://latinprimesystems.com/#pricing",
      },
    ],
  },

  // 7. ItemList — industries served
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Industries Served by Latin Prime Systems AI Automation",
    description: "Service businesses that benefit from done-for-you AI automation by Latin Prime Systems.",
    itemListElement: [
      "Insurance Agencies",
      "Real Estate Agents and Brokers",
      "Dental and Healthcare Practices",
      "Med Spas and Aesthetics",
      "Contractors and Home Services",
      "Tax and Accounting Firms",
      "Restaurants and Local Businesses",
      "Coaches and Consultants",
      "Law Firms",
      "Salons, Barbershops, and Spas",
      "Solar Energy Companies",
      "Mental Health Practices",
      "Pest Control Companies",
      "Immigration Consultants",
    ].map((name, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
    })),
  },

  // 8. Service — individual service entities for keyword targeting
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://latinprimesystems.com/#ai-voice-agent",
    name: "AI Voice Agent for Small Business",
    provider: { "@id": "https://latinprimesystems.com/#business" },
    description:
      "AI-powered phone answering service that handles inbound calls 24/7. The AI qualifies leads, answers FAQs, books appointments into your calendar, and follows up missed calls via text — using VAPI and ElevenLabs technology.",
    serviceType: "AI Voice Agent",
    areaServed: { "@type": "Country", name: "United States" },
    offers: {
      "@type": "Offer",
      price: "1797",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", unitText: "MONTH" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://latinprimesystems.com/#crm-automation",
    name: "CRM Setup and Lead Automation for Small Business",
    provider: { "@id": "https://latinprimesystems.com/#business" },
    description:
      "Complete GoHighLevel CRM build with automated lead capture, multi-channel follow-up (SMS, email, WhatsApp), pipeline management, and sales reporting. Done-for-you setup included.",
    serviceType: "CRM Automation",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Place", name: "Latin America" },
    ],
    offers: {
      "@type": "Offer",
      price: "497",
      priceCurrency: "USD",
      priceSpecification: { "@type": "UnitPriceSpecification", unitText: "MONTH" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://latinprimesystems.com/#command-center",
    name: "Business Command Center and Custom Dashboard",
    provider: { "@id": "https://latinprimesystems.com/#business" },
    description:
      "Custom-built business intelligence dashboards that show every KPI, lead, order, and operation in real time — on one screen. Built with n8n, Airtable, and custom software for your exact business workflow.",
    serviceType: "Business Intelligence Dashboard",
    areaServed: { "@type": "Country", name: "United States" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="theme-color" content="#020508" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* hreflang — bilingual */}
        <link rel="alternate" hrefLang="en" href="https://latinprimesystems.com" />
        <link rel="alternate" hrefLang="es" href="https://latinprimesystems.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://latinprimesystems.com" />
        {/* Font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* LCP preload — hero OG image doubles as above-fold visual */}
        <link
          rel="preload"
          as="image"
          href="https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp"
          type="image/webp"
        />
        {/* CDN preconnect */}
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        {/* JSON-LD structured data */}
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
