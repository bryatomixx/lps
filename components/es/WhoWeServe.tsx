"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionReveal from "../SectionReveal";

const industries = [
  {
    icon: "🛡️",
    name: "Agencias de Seguros",
    slug: "insurance",
    desc: "Los agentes pierden pólizas todos los días porque nadie hizo el seguimiento a tiempo. La mayoría de los prospectos se enfrían antes de que alguien descuelgue el teléfono.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae21e91f63b1.png",
    items: [
      "Agente de voz IA califica prospectos y agenda citas las 24 horas",
      "Recordatorios de renovación automatizados por SMS, correo y WhatsApp",
      "Secuencia de referidos enviada después de cada póliza cerrada",
      "Pipeline CRM con alertas de prospectos calientes y seguimiento automático",
      "Campaña de reactivación para prospectos inactivos (30/60/90 días)",
      "Seguimiento multicanal: llamada → SMS → correo → mensaje de voz",
    ],
  },
  {
    icon: "🏠",
    name: "Agentes y Corredores de Bienes Raíces",
    slug: "real-estate",
    desc: "El 90% de los prospectos nunca cierran — no porque no estuvieran interesados, sino porque nadie hizo el seguimiento con suficiente consistencia.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eae642e1f63b2.png",
    items: [
      "Respuesta inmediata por SMS/correo a nuevos prospectos — en menos de 2 minutos",
      "Agente IA califica intención de compra, presupuesto y tiempos automáticamente",
      "Programador de visitas conectado a tu calendario — sin fricción",
      "Nurturing a largo plazo para prospectos que aún no están listos (secuencia de 6–12 meses)",
      "Seguimiento automático después de cada open house",
      "CRM con pipelines completos para compradores y vendedores",
    ],
  },
  {
    icon: "🦷",
    name: "Dental y Salud",
    slug: "dental",
    desc: "Cada cita perdida es ingreso perdido. Cada llamada sin respuesta es un paciente que fue a la siguiente clínica de la lista.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2f3d78f630c1a9f7e.png",
    items: [
      "Agendamiento de citas 24/7 — sin recepcionista fuera de horario",
      "Recordatorios automatizados que reducen inasistencias hasta un 60%",
      "Campañas de reactivación para pacientes que no han venido en 6+ meses",
      "Solicitudes de reseñas en Google enviadas después de cada cita",
      "Formulario de ingreso para nuevos pacientes — automatizado y conectado a tu sistema",
      "Automatización de seguimiento para verificación de seguros",
    ],
  },
  {
    icon: "💆",
    name: "Med Spas y Estética",
    slug: "med-spa",
    desc: "Los clientes desaparecen después de su primera visita. El dinero está en la reagendación — y eso solo sucede cuando el seguimiento es automático.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28d3eaee28e1f63b3.png",
    items: [
      "Secuencia de reagendación automatizada después de cada tratamiento",
      "Secuencias de venta cruzada para servicios complementarios",
      "Promociones de cumpleaños y temporada enviadas automáticamente",
      "Segmentación de clientes VIP y comunicación personalizada",
      "Recuperación de reservaciones abandonadas — seguimiento en minutos",
      "Embudo de reseñas en Google y Yelp en piloto automático",
    ],
  },
  {
    icon: "🔧",
    name: "Contratistas y Servicios del Hogar",
    slug: "contractors",
    desc: "Estás en obra. Pierdes llamadas. Esas llamadas perdidas son los nuevos clientes de tu competencia.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2c2389c1a78536c6c.png",
    items: [
      "Respuesta por SMS a llamadas perdidas — cada llamada recibe un mensaje inmediato",
      "Agente de voz IA contesta llamadas entrantes y agenda presupuestos",
      "Seguimiento automatizado de cotizaciones — evita que los prospectos se enfríen",
      "Secuencia de solicitud de reseña al finalizar cada trabajo",
      "Recordatorios de servicios estacionales a clientes anteriores",
      "Automatización de programa de referidos",
    ],
  },
  {
    icon: "📊",
    name: "Despachos Fiscales y Contables",
    slug: "tax-accounting",
    desc: "La temporada fiscal es caótica. La recopilación de documentos, los recordatorios de fechas límite, el seguimiento a clientes — todo puede automatizarse.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d28cb259174841bf11.png",
    items: [
      "Secuencias de recopilación de documentos — recordatorios automáticos hasta completar",
      "Incorporación de nuevos clientes en temporada fiscal — completamente automatizada",
      "Campañas de recordatorio de fechas límite para declaraciones trimestrales y anuales",
      "Secuencias de venta adicional para contabilidad, nómina y servicios de asesoría",
      "Seguimiento anual a clientes que mantiene las relaciones activas",
      "Campañas de referidos dirigidas a clientes actuales satisfechos",
    ],
  },
  {
    icon: "🍽️",
    name: "Restaurantes y Negocios Locales",
    slug: "restaurants",
    desc: "Compites en reseñas de Google y visitas recurrentes. Ambas pueden impulsarse con automatización.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d27fc07c048f9b8b54.png",
    items: [
      "Programa de lealtad por SMS — puntos, recompensas y promociones automatizadas",
      "Secuencia de solicitud de reseña después de cada visita o pedido",
      "Campañas de recuperación para clientes que no han regresado en 30+ días",
      "Anuncios de eventos y promociones especiales por SMS/correo",
      "Sistema de reservaciones en línea conectado a tus operaciones",
      "Perfil de Google Business optimizado y monitoreado automáticamente",
    ],
  },
  {
    icon: "🎯",
    name: "Coaches y Consultores",
    slug: "coaches",
    desc: "Vendes resultados. Tus sistemas deben reflejarlo — capturando, nutriendo y cerrando prospectos sin que estés en el proceso en cada paso.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa8406418690.png",
    items: [
      "Lead magnet → secuencia de correo → llamada de ventas, completamente automatizado",
      "Agendamiento de llamadas de descubrimiento directo desde anuncios y redes sociales",
      "Secuencia de seguimiento de propuestas — nunca dejes dinero sobre la mesa",
      "Automatización de incorporación para nuevos clientes",
      "Recopilación de testimonios en momentos clave del proceso",
      "Secuencias de venta adicional para programas premium y renovaciones",
    ],
  },
  {
    icon: "⚖️",
    name: "Despachos Jurídicos y Servicios Legales",
    slug: "law-firms",
    desc: "Los clientes potenciales no esperan. Si no respondes en minutos, llaman al siguiente despacho de la lista.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d2584eaa6b2e418691.png",
    items: [
      "Sistema de captación 24/7 — agente IA califica tipo de caso y urgencia",
      "Respuesta inmediata a formularios web y llamadas perdidas",
      "Agendamiento de consultas directamente desde tu sitio web",
      "Secuencias de actualización de estatus que reducen llamadas de seguimiento",
      "Rastreo de fuentes de referidos y gestión de referencias entre abogados",
      "Seguimiento de satisfacción del cliente al resolver el caso",
    ],
  },
  {
    icon: "✂️",
    name: "Salones, Barberías y Spas",
    slug: "salons",
    desc: "Los lugares vacíos cuestan dinero. La reagendación automatizada mantiene tu agenda llena sin que hagas nada.",
    img: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69b1b1d257249b6b5f3cdce7.png",
    items: [
      "Recordatorio de reagendación automatizado 3–4 semanas después de cada visita",
      "Secuencia de recuperación para inasistencias y cancelaciones tardías",
      "Programa de lealtad con recompensas — completamente automatizado",
      "Promociones de cumpleaños enviadas a cada cliente automáticamente",
      "Anuncios de nuevos servicios a toda tu base de clientes",
      "Solicitudes de reseña enviadas después de cada cita completada",
    ],
  },
];

export default function WhoWeServe() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const activeIndustry = activeModal !== null ? industries[activeModal] : null;

  return (
    <>
      <section
        id="who"
        className="section-wrap"
        style={{ background: "var(--bg)" }}
      >
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">Para Quién Es Esto</div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
            >
              Cualquier Negocio que Quiera{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, var(--blue), var(--gold))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Operar con Mayor Inteligencia
              </em>
            </h2>
            <p className="section-desc">
              Esto solía ser exclusivo de empresas con presupuestos tecnológicos millonarios.
              Ya no.
            </p>
          </SectionReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 2,
            }}
          >
            {industries.map((ind, i) => (
              <SectionReveal key={i} delay={i * 0.05} style={{ height: "100%" }}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "28px 22px",
                    cursor: "pointer",
                    transition: "border-color 0.3s, transform 0.3s, background 0.3s",
                    position: "relative",
                    overflow: "hidden",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(26,127,212,0.3)";
                    el.style.transform = "translateY(-4px)";
                    el.style.background = "var(--surface2)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                    el.style.background = "var(--surface)";
                  }}
                  onClick={() => setActiveModal(i)}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: 10 }}>{ind.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      lineHeight: 1.4,
                      marginBottom: 10,
                      color: "var(--text)",
                    }}
                  >
                    {ind.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {ind.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        color: "var(--blue)",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      Ver qué podemos hacer →
                    </span>
                    <Link
                      href={`/es/${ind.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 4,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                      }}
                    >
                      Página dedicada ↗
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeModal !== null && activeIndustry && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.75)",
                zIndex: 200,
                backdropFilter: "blur(8px)",
              }}
            />
            {/* Centering wrapper */}
            <div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 201,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                pointerEvents: "none",
              }}
            >
              {/* Modal box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "relative",
                  pointerEvents: "all",
                  width: "min(90vw, 820px)",
                  maxHeight: "85vh",
                  background: "var(--surface)",
                  border: "1px solid var(--border2)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1.4fr",
                  overflow: "hidden",
                }}
                className="modal-grid"
              >
                {/* Left — Image */}
                <div
                  style={{
                    position: "relative",
                    minHeight: 300,
                    background: "var(--surface2)",
                    overflow: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <motion.img
                    src={activeIndustry.img}
                    alt={activeIndustry.name}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 0.85, scale: 1 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(2,5,8,0.6) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "linear-gradient(90deg, var(--blue), var(--gold))",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: 4 }}>{activeIndustry.icon}</div>
                    <h3
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "white",
                        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                      }}
                    >
                      {activeIndustry.name}
                    </h3>
                  </div>
                </div>

                {/* Right — Content */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 0,
                  }}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setActiveModal(null)}
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      zIndex: 2,
                      background: "var(--surface2)",
                      border: "1px solid var(--border2)",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      fontSize: "1rem",
                      transition: "color 0.2s",
                    }}
                    aria-label="Cerrar"
                  >
                    ×
                  </button>

                  {/* Scrollable content */}
                  <div style={{ flex: 1, overflowY: "auto", padding: "32px 28px 16px" }}>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        marginBottom: 16,
                      }}
                    >
                      Lo que implementamos para ti
                    </div>

                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                      {activeIndustry.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06 }}
                          style={{
                            display: "flex",
                            gap: 10,
                            fontSize: "0.87rem",
                            color: "var(--text-muted)",
                            lineHeight: 1.6,
                          }}
                        >
                          <span style={{ color: "var(--green)", flexShrink: 0, marginTop: 2 }}>✓</span>
                          {item}
                        </motion.li>
                      ))}
                      <motion.li
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: activeIndustry.items.length * 0.06 }}
                        style={{
                          fontSize: "0.8rem",
                          color: "rgba(200,148,26,0.7)",
                          fontStyle: "italic",
                          paddingLeft: 22,
                        }}
                      >
                        Y mucho más...
                      </motion.li>
                    </ul>
                  </div>

                  {/* Sticky footer — nav + CTA */}
                  <div
                    style={{
                      padding: "16px 28px 24px",
                      borderTop: "1px solid var(--border)",
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      flexWrap: "wrap",
                      background: "var(--surface)",
                    }}
                  >
                    {activeModal > 0 && (
                      <button
                        onClick={() => setActiveModal(activeModal - 1)}
                        style={{
                          background: "var(--surface2)",
                          border: "1px solid var(--border2)",
                          padding: "8px 14px",
                          cursor: "pointer",
                          color: "var(--text-muted)",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        ← Anterior
                      </button>
                    )}
                    {activeModal < industries.length - 1 && (
                      <button
                        onClick={() => setActiveModal(activeModal + 1)}
                        style={{
                          background: "var(--surface2)",
                          border: "1px solid var(--border2)",
                          padding: "8px 14px",
                          cursor: "pointer",
                          color: "var(--text-muted)",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
                      >
                        Siguiente →
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .modal-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
