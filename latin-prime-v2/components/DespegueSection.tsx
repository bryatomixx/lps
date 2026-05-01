"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

type Lang = "en" | "es";

// TODO: Carlos needs to create a HighLevel payment link for Despegue ($297/mo, no setup).
// Replace this URL when the payment link is ready.
const DESPEGUE_PAYMENT =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const T = {
  en: {
    introTitle: "Just starting out? Begin with Despegue.",
    introDesc:
      "For operators just building their system who aren't ready for the full Núcleo build. Platform access plus bilingual onboarding so you learn without getting stuck.",
    eyebrow: "Entry tier",
    name: "Despegue",
    badge: "New",
    tagline:
      "The first push — platform with bilingual onboarding and monthly group office hours. When you grow, graduate to Núcleo without paying setup.",
    price: "$297",
    pricePer: "/mo · no setup",
    meta: "Month-to-month · cancel anytime",
    features: [
      "Access to LPS platform (CRM, basic automations, forms)",
      "1 bilingual onboarding session — live, 1-on-1, 90 min in month 1",
      "1 pre-configured automation (new lead → instant response)",
      "Monthly group office hours — 1 hour, in Spanish",
      "Bilingual email/chat support (shared queue · <24h response)",
      "Spanish docs and video tutorials",
    ],
    notIncluded:
      "No voice agent · no chatbot · no assigned specialist · no 1-on-1 call",
    ctaPrimary: "Start with Despegue →",
    upgradeQuestion: "Ready for more?",
    upgradeLink: "Núcleo $497/mo →",
    footer:
      "Despegue is our entry door for Hispanic operators just starting out. It's not a full-service tier — it's the platform with enough support to let you learn it without frustration. When you're ready for the system we build for you, Núcleo awaits — without paying setup again, your time in Despegue counts as your initial investment.",
  },
  es: {
    introTitle: "¿Recién empezando? Empieza con Despegue.",
    introDesc:
      "Para operadores que apenas están armando su sistema y no están listos para el build completo del Núcleo. Acceso a la plataforma + soporte bilingüe para que aprendas sin frustrarte.",
    eyebrow: "Tier de entrada",
    name: "Despegue",
    badge: "Nuevo",
    tagline:
      "El primer impulso — plataforma con onboarding bilingüe y soporte grupal mensual. Cuando crezcas, gradúas a Núcleo sin pagar setup.",
    price: "$297",
    pricePer: "/mes · sin setup",
    meta: "Mes a mes · cancela cuando quieras",
    features: [
      "Acceso a la plataforma LPS (CRM, automatizaciones básicas, formularios)",
      "1 sesión de onboarding bilingüe en vivo (mes 1 · 90 min · 1-on-1)",
      "1 automatización pre-configurada (lead nuevo → respuesta inmediata)",
      "Office hours grupales mensuales · 1 hora · en español",
      "Soporte email/chat bilingüe (cola compartida · respuesta <24h hábiles)",
      "Docs y video tutoriales en español",
    ],
    notIncluded:
      "Sin voice agent · sin chatbot · sin specialist asignado · sin call 1-on-1",
    ctaPrimary: "Empezar con Despegue →",
    upgradeQuestion: "¿Listo para más?",
    upgradeLink: "Núcleo $497/mo →",
    footer:
      "Despegue es nuestra puerta de entrada para operadores hispanos que apenas arrancan. No es un tier de servicio completo — es la plataforma con suficiente soporte para que aprendas a usarla sin frustrarte. Cuando estés listo para el sistema construido por nosotros, Núcleo te espera sin pagar setup de nuevo — el tiempo que invertiste en Despegue cuenta como tu inversión inicial.",
  },
} as const;

interface DespegueSectionProps {
  lang?: Lang;
  /** Pass true if the section follows directly after the 4-tier pricing comparison */
  hideDivider?: boolean;
}

export default function DespegueSection({
  lang = "en",
  hideDivider = false,
}: DespegueSectionProps) {
  const t = T[lang];
  const nucleoHref = lang === "es" ? "/es/nucleo" : "/nucleo";

  return (
    <SectionReveal>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {!hideDivider && (
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        )}

        {/* Intro */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            {t.introTitle}
          </h3>
          <p className="mt-2 text-sm text-gray-500 sm:text-base">{t.introDesc}</p>
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-amber-400/30 bg-gradient-to-br from-[#0E1A2E] to-[#162842] p-8 shadow-2xl shadow-slate-900/40 sm:p-10"
        >
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1.5fr_auto] lg:items-center">
            {/* Left — Brand + price */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
                {t.eyebrow}
              </div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {t.name}
                <span className="ml-2 inline-block rounded-full bg-emerald-700 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-white">
                  {t.badge}
                </span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                {t.tagline}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-amber-400 sm:text-5xl">
                  {t.price}
                </span>
                <span className="text-sm text-slate-400">{t.pricePer}</span>
              </div>
              <div className="mt-1 font-mono text-xs text-slate-400">{t.meta}</div>
            </div>

            {/* Center — Features */}
            <ul className="space-y-2 text-sm leading-relaxed text-slate-100">
              {t.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex-shrink-0 font-bold text-amber-400">
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
              <li className="mt-3 text-xs italic text-slate-400">
                {t.notIncluded}
              </li>
            </ul>

            {/* Right — CTA */}
            <div className="flex min-w-[200px] flex-col gap-3">
              <a
                href={DESPEGUE_PAYMENT}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-amber-400 to-amber-300 px-5 py-4 text-sm font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition-transform hover:-translate-y-0.5"
              >
                {t.ctaPrimary}
              </a>
              <div className="text-center text-xs leading-relaxed text-slate-400">
                {t.upgradeQuestion}
                <br />
                <a
                  href={nucleoHref}
                  className="border-b border-amber-300 text-amber-300 hover:text-amber-200"
                >
                  {t.upgradeLink}
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs italic leading-relaxed text-gray-500">
          {t.footer}
        </p>
      </div>
    </SectionReveal>
  );
}
