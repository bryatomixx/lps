"use client";
import Link from "next/link";
import SectionReveal from "./SectionReveal";

type Lang = "en" | "es";

interface TierPlaceholderProps {
  lang?: Lang;
  tier: "pulso" | "orbita" | "constelacion";
}

const TIER_DATA = {
  pulso: {
    en: {
      name: "Pulso",
      eyebrow: "Tier 2 · Growth",
      headline: "When your system starts to take rhythm",
      tagline:
        "Voice 500 min/mo · Chatbot 2,500 conv/mo · 5 CRM users · email marketing · biweekly call.",
      price: "$997",
      pricePer: "/mo + $1,997 one-time setup",
      cta: "Book a Strategy Call",
    },
    es: {
      name: "Pulso",
      eyebrow: "Tier 2 · Crecimiento",
      headline: "Cuando tu sistema empieza a tomar pulso",
      tagline:
        "Voice 500 min/mes · Chatbot 2,500 conv/mes · 5 usuarios CRM · email marketing · call quincenal.",
      price: "$997",
      pricePer: "/mes + $1,997 implementación única",
      cta: "Agendar Llamada Estratégica",
    },
  },
  orbita: {
    en: {
      name: "Órbita",
      eyebrow: "Tier 3 · Scale",
      headline: "The engine that powers your operation",
      tagline:
        "Voice 700 min/mo · Chatbot 6,000 conv/mo · 15 CRM users · SMS broadcasting · dedicated number · A/B testing · biweekly + quarterly strategic calls.",
      price: "$1,797",
      pricePer: "/mo + $2,997 one-time setup",
      cta: "Book a Strategy Call",
    },
    es: {
      name: "Órbita",
      eyebrow: "Tier 3 · Escala",
      headline: "El motor que mueve tu operación",
      tagline:
        "Voice 700 min/mes · Chatbot 6,000 conv/mes · 15 usuarios CRM · SMS broadcasting · número dedicado · A/B testing · call quincenal + estratégica trimestral.",
      price: "$1,797",
      pricePer: "/mes + $2,997 implementación única",
      cta: "Agendar Llamada Estratégica",
    },
  },
  constelacion: {
    en: {
      name: "Constelación",
      eyebrow: "Tier 4 · Custom Enterprise",
      headline: "Designed around your operation, not the other way",
      tagline:
        "For Hispanic multi-location operations with 25+ employees. Bilingual dedicated CSM · multi-brand · custom dev · branded mobile app · agent training academy · enterprise security.",
      price: "Custom",
      pricePer: "· defined in discovery call",
      cta: "Request Discovery Call",
    },
    es: {
      name: "Constelación",
      eyebrow: "Tier 4 · Custom Enterprise",
      headline: "Diseñado alrededor de tu operación — no al revés",
      tagline:
        "Para operaciones hispanas multi-ubicación con 25+ empleados. CSM bilingüe dedicado · multi-brand · custom dev · app móvil branded · academia de agentes · enterprise security.",
      price: "Custom",
      pricePer: "· definido en discovery call",
      cta: "Solicitar Discovery Call",
    },
  },
} as const;

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

export default function TierPlaceholder({
  lang = "en",
  tier,
}: TierPlaceholderProps) {
  const data = TIER_DATA[tier][lang];
  const pricingHref = lang === "es" ? "/es#pricing" : "/#pricing";
  const labels =
    lang === "es"
      ? {
          back: "← Volver al pricing comparativo",
          devNote:
            "Página dedicada en preparación · vista resumen abajo",
        }
      : {
          back: "← Back to pricing comparison",
          devNote:
            "Dedicated page in preparation · summary view below",
        };

  return (
    <SectionReveal>
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="mb-8">
          <Link
            href={pricingHref}
            className="text-sm font-medium text-amber-600 hover:text-amber-700"
          >
            {labels.back}
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-10 shadow-xl shadow-slate-900/5 sm:p-14">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-600">
            {data.eyebrow}
          </div>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {data.name}
          </h1>
          <p className="mt-4 text-xl text-slate-700 sm:text-2xl">
            {data.headline}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
            {data.tagline}
          </p>

          <div className="mt-8 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {data.price}
            </span>
            <span className="text-sm text-slate-500">{data.pricePer}</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-300 px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition-transform hover:-translate-y-0.5"
            >
              {data.cta} →
            </a>
            <Link
              href={pricingHref}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              {lang === "es" ? "Ver comparación completa" : "View full comparison"}
            </Link>
          </div>

          <p className="mt-10 border-t border-gray-100 pt-6 text-xs italic text-slate-400">
            {labels.devNote}
          </p>
        </div>
      </div>
    </SectionReveal>
  );
}
