"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "../SectionReveal";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const faqs = [
  {
    q: "¿Qué pasa si no soy técnico en absoluto?",
    a: "Es exactamente para quién construimos esto. No tocas ni una sola pieza de tecnología. Nosotros nos encargamos de todo — configuración, implementación, pruebas y mantenimiento continuo. Tú nos das acceso a tu número de teléfono, tu calendario y tu CRM, y nosotros hacemos el resto. Cuando te lo entregamos, simplemente funciona.",
  },
  {
    q: "¿Cuánto tiempo hasta que mi sistema esté activo?",
    a: "Los sistemas Starter suelen estar activos en 7–14 días. Los sistemas Growth tardan 14–30 días según la complejidad. Te entregamos un sistema en funcionamiento con una guía completa — no un borrador. No entregamos hasta que esté completamente probado y listo para capturar leads.",
  },
  {
    q: "¿Hay contrato a largo plazo?",
    a: "No. Mes a mes. Puedes cancelar en cualquier momento. Mantenemos a los clientes porque el sistema funciona, no por cláusulas de permanencia. Lo único que pedimos es que le des al sistema al menos 30 días para generar resultados antes de hacer un juicio.",
  },
  {
    q: "¿Qué cubre la cuota de implementación?",
    a: "La cuota de implementación cubre la construcción completa: configuración de tu CRM, todas las automatizaciones, el agente de voz IA (si aplica), tu sitio web (plan Starter), integraciones, pruebas y tu llamada de onboarding. Es un costo único cotizado durante tu llamada estratégica según tu alcance — típicamente $500–$2,500 USD dependiendo del plan.",
  },
  {
    q: "¿Qué pasa si no funciona para mi industria?",
    a: "Cada sistema que construimos es personalizado para tu industria y tus flujos de trabajo específicos. Hemos construido para seguros, bienes raíces, dental, med spas, contratistas, firmas de impuestos, restaurantes, coaches, despachos legales y salones — y el enfoque es diferente para cada uno. Si por alguna razón tu sistema no genera resultados medibles dentro del período de garantía, seguimos trabajando sin costo adicional hasta que lo haga.",
  },
  {
    q: "Ya tengo GoHighLevel. ¿Para qué te necesito?",
    a: "GHL es una herramienta — como tener membresía en un gimnasio sin entrenador. La mayoría de los dueños de negocio que 'tienen GHL' tienen una cuenta que casi no usan. Nosotros construimos el sistema completo dentro: las automatizaciones, el agente de voz, los pipelines, las secuencias, las integraciones. Si ya tienes GHL, podemos configurar tu cuenta existente. Si no, GHL está incluido en tu plan.",
  },
  {
    q: "¿El agente de voz IA va a sonar robótico?",
    a: "No. Usamos tecnología de voz IA con sonido natural (ElevenLabs + VAPI) que está entrenada en tu negocio — tu tono, tus preguntas frecuentes, tus servicios, tus precios. Los clientes regularmente no se dan cuenta de que están hablando con una IA hasta que se les dice. Puedes revisar y aprobar la voz antes de que salgamos en vivo.",
  },
  {
    q: "¿Qué pasa con mis datos y los de mis clientes?",
    a: "Todos los datos permanecen en tu cuenta de GoHighLevel — que tú posees. Nosotros no almacenamos, vendemos ni accedemos a los datos de tus clientes fuera del trabajo de configuración. GoHighLevel cumple con SOC 2 Tipo II y está listo para GDPR. Tú conservas el 100% de la propiedad de tus datos en todo momento.",
  },
  {
    q: "¿Trabajan con negocios fuera de Estados Unidos?",
    a: "Sí. Atendemos activamente a clientes en México, Colombia, Venezuela y otros mercados de América Latina. Los precios se ajustan según las condiciones del mercado local a solicitud. Todos los sistemas soportan operación en español, inglés y bilingüe.",
  },
  {
    q: "¿Cómo sé que estoy obteniendo ROI?",
    a: "Configuramos un panel de reportes desde el primer día. Verás exactamente cuántos leads fueron capturados, cuántas llamadas fueron atendidas por la IA, cuántas citas se agendaron y cuántos seguimientos salieron — actualizado automáticamente. Sin suposiciones. Números cada semana.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--bg)", padding: "100px 0", position: "relative" }}>
      <div className="section-inner">
        <SectionReveal>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}
            className="faq-grid"
          >
            {/* Left */}
            <div style={{ position: "sticky", top: 100 }}>
              <div className="slabel">Preguntas Frecuentes</div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)",
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                Cada Pregunta
                <br />
                Que Estás Pensando{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(135deg, var(--blue), var(--gold))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ahora Mismo
                </em>
              </h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 32 }}>
                Sin discurso de ventas. Solo respuestas directas a lo que todo dueño de negocio quiere saber antes de comprometerse.
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
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                ¿Tienes más preguntas? Agenda una llamada →
              </a>
            </div>

            {/* Right — Accordion */}
            <div>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                  style={{ borderBottom: "1px solid var(--border)" }}
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
                        border: `1px solid ${open === i ? "var(--blue)" : "var(--border2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: open === i ? "var(--blue)" : "var(--text-dim)",
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
                        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.78, paddingBottom: 22 }}>
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
          .faq-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .faq-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
