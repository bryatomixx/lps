"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const t = {
  en: {
    label: "FAQ",
    heading1: "Every Question",
    heading2: "You're Thinking",
    headingShiny: "Right Now",
    subtext:
      "No sales pitch. Just straight answers to what every business owner wants to know before committing.",
    cta: "Still have questions? Book a call →",
    faqs: [
      {
        q: "What exactly is an AI system for my business?",
        a: "It's a connected infrastructure — not an app or a plugin — that handles the operational work your business depends on every day: answering calls, following up with leads, booking appointments, sending reminders, managing your pipeline, and generating reports. It runs in the background, 24/7, without you having to touch it. Think of it as a full operations layer built on top of your existing phone number, calendar, and CRM.",
      },
      {
        q: "How is LPS different from hiring a marketing agency?",
        a: "A marketing agency brings you leads. LPS makes sure those leads are captured, followed up, and converted — automatically. We don't run ads. We build the systems that sit behind your business: CRM, automations, AI voice agents, follow-up sequences, booking flows, and reporting dashboards. Most marketing agency clients lose 60–70% of their leads to poor follow-up. We eliminate that problem entirely.",
      },
      {
        q: "What if I'm not technical at all?",
        a: "That's exactly who we build this for. You don't touch a single piece of technology. We handle everything — setup, configuration, testing, and ongoing maintenance. You give us access to your phone number, your calendar, and your CRM, and we do the rest. When we hand it over, it just works.",
      },
      {
        q: "How long until my system is live?",
        a: "Starter systems are typically live in 7–14 days. Growth systems take 14–30 days depending on complexity. We send you a live system with a walkthrough — not a rough draft. We don't deliver until it's fully tested and ready to capture leads.",
      },
      {
        q: "Can I start with just a strategy session before committing to a plan?",
        a: "Yes — and for many businesses, that's the right move. The AI Growth Strategy Session ($297–$497) maps your business, identifies where you're losing time and leads, and tells you exactly which automations would have the most impact before you invest in implementation. The AI Business Audit ($750–$1,500+) goes deeper for established businesses with more complex operations. Both are one-time engagements with no obligation to continue.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No. Month-to-month. You can cancel anytime. We keep clients because the system works, not because of lock-in. The only thing we ask is that you give the system at least 30 days to generate results before making a judgment.",
      },
      {
        q: "What does the setup fee cover?",
        a: "The setup fee covers the full build: your CRM configuration, all automations, the AI voice agent (if applicable), your website (Starter plan), integrations, testing, and your onboarding call. It's a one-time cost quoted during your strategy call based on your scope — typically $500–$2,500 depending on the plan.",
      },
      {
        q: "What if it doesn't work for my industry?",
        a: "Every system we build is custom to your industry and your specific workflows. We've built for insurance, real estate, dental, med spas, contractors, tax firms, restaurants, coaches, law firms, and salons — and the approach is different for each. If for any reason your system doesn't generate measurable results within the guarantee period, we keep working at no extra cost until it does.",
      },
      {
        q: "I already have GoHighLevel. Why do I need you?",
        a: "GHL is a tool — like buying a gym membership without a trainer. Most business owners who 'have GHL' have an account they barely use. We build the complete system inside it: the automations, the voice agent, the pipelines, the sequences, the integrations. If you already have GHL, we can configure your existing account. If not, GHL is included in your plan.",
      },
      {
        q: "Will the AI voice agent sound robotic?",
        a: "No. We use natural-sounding AI voice technology (ElevenLabs + VAPI) that's trained on your business — your tone, your FAQs, your services, your pricing. Callers regularly don't realize they're talking to an AI until they're told. You can review and approve the voice before we go live.",
      },
      {
        q: "What happens to my data and my clients' data?",
        a: "All data stays in your GoHighLevel account — which you own. We don't store, sell, or access your client data outside of the configuration work. GoHighLevel is SOC 2 Type II compliant and GDPR-ready. You retain 100% ownership of your data at all times.",
      },
      {
        q: "Do you work with businesses outside the US?",
        a: "Yes. We actively serve clients in Mexico, Colombia, Venezuela, and other Latin American markets. Pricing is adjusted for local market conditions on request. All systems support Spanish, English, and bilingual operation.",
      },
      {
        q: "How do I know I'm getting ROI?",
        a: "We set up a reporting dashboard from day one. You'll see exactly how many leads were captured, how many calls were answered by the AI, how many appointments were booked, and how many follow-ups went out — updated automatically. No guessing. Numbers every week.",
      },
    ],
  },
  es: {
    label: "FAQ",
    heading1: "Cada Pregunta",
    heading2: "Que Estás Pensando",
    headingShiny: "Ahora Mismo",
    subtext:
      "Sin discurso de ventas. Solo respuestas directas a lo que todo dueño de negocio quiere saber antes de comprometerse.",
    cta: "¿Tienes más preguntas? Agenda una llamada →",
    faqs: [
      {
        q: "¿Qué es exactamente un sistema de AI para mi negocio?",
        a: "Es una infraestructura conectada — no una app ni un plugin — que se encarga del trabajo operativo del que depende tu negocio cada día: contestar llamadas, dar seguimiento a prospectos, agendar citas, enviar recordatorios, gestionar tu pipeline y generar reportes. Funciona en segundo plano, 24/7, sin que tengas que tocar nada. Piénsalo como una capa operativa completa construida sobre tu número de teléfono, calendario y CRM existentes.",
      },
      {
        q: "¿En qué se diferencia LPS de contratar una agencia de marketing?",
        a: "Una agencia de marketing te trae prospectos. LPS se asegura de que esos prospectos sean capturados, reciban seguimiento y se conviertan — de forma automática. Nosotros no corremos anuncios. Construimos los sistemas que operan detrás de tu negocio: CRM, automatizaciones, agentes de voz con AI, secuencias de seguimiento, flujos de agendamiento y dashboards de reportes. La mayoría de los clientes de agencias de marketing pierden entre el 60 y el 70% de sus prospectos por un seguimiento deficiente. Nosotros eliminamos ese problema por completo.",
      },
      {
        q: "¿Qué pasa si no tengo ningún conocimiento técnico?",
        a: "Eso es exactamente para quien construimos esto. No tocas ni una sola pieza de tecnología. Nosotros lo gestionamos todo — configuración, pruebas y mantenimiento continuo. Tú nos das acceso a tu número de teléfono, tu calendario y tu CRM, y nosotros hacemos el resto. Cuando te lo entregamos, simplemente funciona.",
      },
      {
        q: "¿Cuánto tiempo tarda en estar activo mi sistema?",
        a: "Los sistemas Starter suelen estar activos en 7 a 14 días. Los sistemas Growth tardan entre 14 y 30 días según la complejidad. Te entregamos un sistema funcionando con una guía completa — no un borrador. No lo entregamos hasta que esté completamente probado y listo para capturar prospectos.",
      },
      {
        q: "¿Puedo empezar con una sesión de estrategia antes de comprometer un plan?",
        a: "Sí — y para muchos negocios, es la decisión correcta. La Sesión de Estrategia de Crecimiento con AI ($297–$497) mapea tu negocio, identifica dónde estás perdiendo tiempo y prospectos, y te dice exactamente qué automatizaciones tendrían mayor impacto antes de que inviertas en la implementación. La Auditoría de Negocio con AI ($750–$1,500+) profundiza más para negocios establecidos con operaciones más complejas. Ambas son compromisos de una sola vez, sin obligación de continuar.",
      },
      {
        q: "¿Hay contrato a largo plazo?",
        a: "No. Mes a mes. Puedes cancelar cuando quieras. Mantenemos a los clientes porque el sistema funciona, no por cláusulas de permanencia. Lo único que pedimos es que le des al sistema al menos 30 días para generar resultados antes de emitir un juicio.",
      },
      {
        q: "¿Qué cubre la tarifa de configuración?",
        a: "La tarifa de configuración cubre la construcción completa: la configuración de tu CRM, todas las automatizaciones, el agente de voz con AI (si aplica), tu sitio web (plan Starter), integraciones, pruebas y tu llamada de incorporación. Es un costo único que se cotiza durante tu llamada de estrategia según el alcance — generalmente entre $500 y $2,500 dependiendo del plan.",
      },
      {
        q: "¿Qué pasa si no funciona para mi industria?",
        a: "Cada sistema que construimos es personalizado para tu industria y tus flujos de trabajo específicos. Hemos construido para seguros, bienes raíces, dental, med spas, contratistas, despachos fiscales, restaurantes, coaches, bufetes de abogados y salones — y el enfoque es distinto para cada uno. Si por alguna razón tu sistema no genera resultados medibles dentro del período de garantía, seguimos trabajando sin costo adicional hasta que lo haga.",
      },
      {
        q: "Ya tengo GoHighLevel. ¿Para qué te necesito?",
        a: "GoHighLevel es una herramienta — como comprar una membresía de gimnasio sin entrenador. La mayoría de los dueños de negocio que 'tienen GHL' tienen una cuenta que apenas usan. Nosotros construimos el sistema completo dentro de él: las automatizaciones, el agente de voz, los pipelines, las secuencias, las integraciones. Si ya tienes GHL, podemos configurar tu cuenta existente. Si no, GHL está incluido en tu plan.",
      },
      {
        q: "¿El agente de voz con AI va a sonar robótico?",
        a: "No. Usamos tecnología de voz AI de sonido natural (ElevenLabs + VAPI) entrenada en tu negocio — tu tono, tus preguntas frecuentes, tus servicios, tus precios. Con frecuencia, las personas que llaman no se dan cuenta de que están hablando con una AI hasta que se les dice. Puedes revisar y aprobar la voz antes de que salgamos en vivo.",
      },
      {
        q: "¿Qué pasa con mis datos y los de mis clientes?",
        a: "Todos los datos permanecen en tu cuenta de GoHighLevel — que es tuya. No almacenamos, vendemos ni accedemos a los datos de tus clientes fuera del trabajo de configuración. GoHighLevel cumple con SOC 2 Tipo II y está preparado para GDPR. Tú conservas el 100% de la propiedad de tus datos en todo momento.",
      },
      {
        q: "¿Trabajan con negocios fuera de los Estados Unidos?",
        a: "Sí. Atendemos activamente a clientes en México, Colombia, Venezuela y otros mercados latinoamericanos. Los precios se ajustan a las condiciones del mercado local bajo solicitud. Todos los sistemas soportan operación en español, inglés y bilingüe.",
      },
      {
        q: "¿Cómo sé que estoy obteniendo ROI?",
        a: "Configuramos un dashboard de reportes desde el primer día. Verás exactamente cuántos prospectos fueron capturados, cuántas llamadas fueron atendidas por la AI, cuántas citas se agendaron y cuántos seguimientos se enviaron — actualizados automáticamente. Sin suposiciones. Números cada semana.",
      },
    ],
  },
};

export default function FAQ({ lang = "en" }: { lang?: Lang }) {
  const [open, setOpen] = useState<number | null>(null);
  const copy = t[lang ?? "en"];

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <div className="section-inner">
        <SectionReveal variant="left">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.6fr",
              gap: 64,
              alignItems: "start",
            }}
            className="faq-grid"
          >
            {/* Left */}
            <div style={{ position: "sticky", top: 100 }}>
              <div className="slabel">{copy.label}</div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                <SplitText text={copy.heading1} delay={0.05} />
                <br />
                <SplitText text={copy.heading2} delay={0.2} />{" "}
                <ShinyText text={copy.headingShiny} speed={3.5} />
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: 32,
                }}
              >
                {copy.subtext}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 22px",
                  background: "transparent",
                  border: "1px solid var(--border2)",
                  color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(15,34,64,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(15,34,64,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {copy.cta}
              </a>
            </div>

            {/* Right — Accordion */}
            <div>
              {copy.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  style={{
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: open === i ? "var(--text)" : "var(--text-muted)",
                        lineHeight: 1.4,
                        transition: "color 0.2s",
                      }}
                    >
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        border: `1px solid ${open === i ? "var(--gold)" : "var(--border2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: open === i ? "var(--gold)" : "var(--text-dim)",
                        borderRadius: 6,
                        fontSize: "1.2rem",
                        fontWeight: 300,
                        transition: "border-color 0.2s, color 0.2s",
                      }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.78,
                            paddingBottom: 22,
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-grid > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
