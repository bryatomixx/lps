"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

interface Testimonial {
  name: string;
  role: { en: string; es: string };
  industry: { en: string; es: string };
  quote: { en: string; es: string };
  result: { en: string; es: string };
  photo?: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  // 1 — Berta Viloria, second case (custom accounting automation)
  {
    name: "Berta Viloria",
    role: { en: "Accountant & Tax Advisor", es: "Contadora y Asesora Tributaria" },
    industry: {
      en: "Tax & Accounting · Medellín, Colombia",
      es: "Contabilidad e Impuestos · Medellín, Colombia",
    },
    quote: {
      en: "There was one accounting process that used to take me days every month — manual, repetitive, exhausting. The LPS team built me a custom automation and now it runs in under three minutes. Days of work, gone. I didn't even know this kind of thing was possible for a firm my size.",
      es: "Había un proceso contable que me tomaba días cada mes — manual, repetitivo, agotador. El equipo de LPS me construyó una automatización a la medida y ahora corre en menos de tres minutos. Días de trabajo, eliminados. Yo ni sabía que esto era posible para una firma de mi tamaño.",
    },
    result: {
      en: "From days to <3 minutes",
      es: "De días a menos de 3 minutos",
    },
    photo:
      "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4c9fe91800719e64f8d4.jpeg",
    initials: "BV",
  },

  // 2 — Jesús Martínez
  {
    name: "Jesús Martínez",
    role: { en: "Insurance Agency Owner", es: "Dueño de Agencia de Seguros" },
    industry: { en: "Insurance", es: "Seguros" },
    quote: {
      en: "Since we set up the AI voice agent, we haven't missed a single lead. It answers every call, qualifies the client, and books the appointment — even at 11pm. Our close rate went up 40% in the first two months.",
      es: "Desde que pusimos el agente de voz con IA, no hemos perdido ni un solo prospecto. Contesta cada llamada, califica al cliente y agenda la cita — incluso a las 11pm. Nuestra tasa de cierre subió 40% en los primeros dos meses.",
    },
    result: { en: "+40% close rate", es: "+40% tasa de cierre" },
    photo:
      "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4c63078883d9c5ac7d06.jpeg",
    initials: "JM",
  },

  // 3 — Pedro Rivera
  {
    name: "Pedro Rivera",
    role: { en: "CabinetWorkx — Contractor", es: "CabinetWorkx — Contratista" },
    industry: {
      en: "Contractor & Home Services",
      es: "Contratista y Servicios para el Hogar",
    },
    quote: {
      en: "I'm always on job sites and can't answer my phone. With the missed-call text-back, every missed call gets a response in seconds. I've recovered deals I would have completely lost before.",
      es: "Siempre estoy en obra y no puedo contestar el teléfono. Con el SMS automático a llamadas perdidas, cada llamada perdida recibe respuesta en segundos. He recuperado trabajos que antes habría perdido por completo.",
    },
    result: { en: "Never miss a lead", es: "Cero leads perdidos" },
    photo:
      "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4cbe8bbf4a4527df2ec0.jpeg",
    initials: "PR",
  },

  // 4 — Joshua Plaza
  {
    name: "Joshua Plaza",
    role: { en: "Barbershop Owner", es: "Dueño de Barbería" },
    industry: { en: "Salon & Barbershop", es: "Salón y Barbería" },
    quote: {
      en: "I used to spend 2 hours a day just confirming appointments and chasing no-shows. Now the system handles it all automatically. My chair is full every day and I didn't hire anyone.",
      es: "Antes gastaba 2 horas al día solo confirmando citas y persiguiendo no-shows. Ahora el sistema lo maneja todo automáticamente. Mi silla está llena todos los días y no contraté a nadie.",
    },
    result: { en: "2 hrs/day saved", es: "2 hrs/día ahorradas" },
    photo:
      "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693ca110cfdc2f1c3a6253b3.jpeg",
    initials: "JP",
  },

  // 5 — Kerwin Iglesias
  {
    name: "Kerwin Iglesias",
    role: { en: "Insurance Agency Owner", es: "Dueño de Agencia de Seguros" },
    industry: { en: "Insurance", es: "Seguros" },
    quote: {
      en: "I was skeptical at first. But within 30 days, the system had already recovered $4,200 in policies from dormant leads we thought were dead. The ROI was obvious in the first month.",
      es: "Al principio era escéptico. Pero a los 30 días, el sistema ya había recuperado $4,200 en pólizas de prospectos dormidos que dábamos por perdidos. El ROI fue obvio desde el primer mes.",
    },
    result: { en: "$4,200 recovered", es: "$4,200 recuperados" },
    photo:
      "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4d003165d977033d76e4.jpeg",
    initials: "KI",
  },

  // 6 — Naidys Rodríguez
  {
    name: "Naidys Rodríguez",
    role: { en: "Accountant", es: "Contadora" },
    industry: {
      en: "Tax & Accounting · Colombia",
      es: "Contabilidad e Impuestos · Colombia",
    },
    quote: {
      en: "I'm a Colombian accountant managing dozens of clients with constant tax deadlines. The LPS team built me an automation specifically for our Colombian tax calendar — not a generic template — and from the first weeks the mental load lifted off my shoulders. They actually understood the regulation, the deadlines, and how we work here.",
      es: "Soy contadora en Colombia manejando decenas de clientes con vencimientos tributarios constantes. El equipo de LPS me construyó una automatización específica para nuestro calendario tributario colombiano — no un template genérico — y desde las primeras semanas la carga mental se me quitó de los hombros. Realmente entendieron la regulación, los vencimientos y cómo trabajamos acá.",
    },
    result: {
      en: "Built for Colombian tax regulation",
      es: "Construida para la regulación tributaria colombiana",
    },
    photo: "/testimonials/naidys-rodriguez.jpeg",
    initials: "NR",
  },

  // 7 — Miguel Zuñiga
  {
    name: "Miguel Zuñiga",
    role: { en: "Personal Trainer", es: "Entrenador Personal" },
    industry: {
      en: "Personal Training & Coaching · Colombia",
      es: "Entrenamiento Personal y Coaching · Colombia",
    },
    quote: {
      en: "I'm a personal trainer and I came in with nothing but my expertise. The LPS team built me a complete website, a platform for my online training courses, and a custom training and nutrition app for my clients. Two new clients signed up already — directly from the new system. I went from being just a trainer to running a real coaching business, in weeks.",
      es: "Soy entrenador personal y llegué con nada más que mi experiencia. El equipo de LPS me construyó un website completo, una plataforma para mis cursos de entrenamiento online y una app a la medida de entrenamiento y nutrición para mis clientes. Ya tengo dos clientes nuevos firmados — directo del nuevo sistema. Pasé de ser solo un entrenador a tener un verdadero negocio de coaching, en semanas.",
    },
    result: { en: "2 new clients in weeks", es: "2 nuevos clientes en semanas" },
    photo: "/testimonials/miguel-zuniga.jpeg",
    initials: "MZ",
  },
];

// Avatar — uses photo when available, otherwise gradient initials.
function Avatar({ tm, size }: { tm: Testimonial; size: number }) {
  if (tm.photo) {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          border: size >= 48 ? "2px solid var(--border2)" : undefined,
          position: "relative",
        }}
      >
        <Image src={tm.photo} alt={tm.name} fill style={{ objectFit: "cover" }} />
      </div>
    );
  }

  const fontSize = Math.round(size * 0.36);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        flexShrink: 0,
        border: size >= 48 ? "2px solid var(--border2)" : undefined,
        background: "linear-gradient(135deg, var(--blue), var(--gold))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: 800,
        fontSize,
        letterSpacing: "0.02em",
      }}
      aria-label={tm.name}
    >
      {tm.initials}
    </div>
  );
}

export default function Testimonials({ lang = "en" }: { lang?: Lang }) {
  const t = {
    en: {
      sectionLabel: "Real Results",
      headingPart1: "What Happens When",
      headingPart2: "We Go to Work",
      prevLabel: "Previous",
      nextLabel: "Next",
      dotLabel: (i: number) => `Go to testimonial ${i + 1}`,
    },
    es: {
      sectionLabel: "Resultados Reales",
      headingPart1: "Qué Pasa Cuando",
      headingPart2: "Nos Ponemos a Trabajar",
      prevLabel: "Anterior",
      nextLabel: "Siguiente",
      dotLabel: (i: number) => `Ir al testimonio ${i + 1}`,
    },
  }[lang ?? "en"];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? 1 : -1);
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const tm = testimonials[current];

  return (
    <section
      className="section-wrap"
      style={{ background: "var(--bg)", overflow: "hidden" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">{t.sectionLabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
          >
            <SplitText text={t.headingPart1} delay={0.05} />{" "}
            <ShinyText text={t.headingPart2} speed={3.5} />
          </h2>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 24,
            marginTop: 16,
          }}
          className="tm-grid"
        >
          {/* Left — Current testimonial */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: 12,
              boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
              padding: "44px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 360,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "#B4945D",
              }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "5rem",
                    lineHeight: 0.8,
                    color: "rgba(180,148,93,0.2)",
                    marginBottom: 16,
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    fontSize: "1.02rem",
                    color: "var(--text)",
                    lineHeight: 1.78,
                    fontStyle: "italic",
                    fontWeight: 400,
                    flex: 1,
                    marginBottom: 28,
                  }}
                >
                  {tm.quote[lang]}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Avatar tm={tm} size={48} />
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "var(--text)",
                      }}
                    >
                      {tm.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        letterSpacing: "0.04em",
                        color: "var(--text-muted)",
                        marginTop: 2,
                      }}
                    >
                      {tm.role[lang]}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        background: "rgba(212,165,58,0.1)",
                        padding: "3px 8px",
                        borderRadius: 4,
                        marginTop: 6,
                        display: "inline-block",
                        fontWeight: 600,
                      }}
                    >
                      {tm.industry[lang]}
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "5px 12px",
                      background: "var(--green-dim)",
                      border: "1px solid rgba(0,168,84,0.2)",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.06em",
                      color: "var(--green)",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      alignSelf: "flex-start",
                    }}
                  >
                    {tm.result[lang]}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots + arrows */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 28,
                paddingTop: 20,
                borderTop: "1px solid var(--border)",
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 4,
                    border: "none",
                    cursor: "pointer",
                    background: i === current ? "#B4945D" : "var(--border2)",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                  aria-label={t.dotLabel(i)}
                />
              ))}
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button
                  onClick={() =>
                    goTo((current - 1 + testimonials.length) % testimonials.length)
                  }
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--border2)",
                    borderRadius: 6,
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  aria-label={t.prevLabel}
                >
                  ←
                </button>
                <button
                  onClick={next}
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid var(--border2)",
                    borderRadius: 6,
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  aria-label={t.nextLabel}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right — Thumbnail list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {testimonials.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                whileHover={{ x: 4 }}
                style={{
                  background: i === current ? "rgba(180,148,93,0.08)" : "#FFFFFF",
                  border:
                    i === current
                      ? "1px solid rgba(180,148,93,0.25)"
                      : "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "16px 20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  textAlign: "left",
                  transition: "background 0.2s",
                  position: "relative",
                }}
              >
                {i === current && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: 3,
                      background: "#B4945D",
                    }}
                  />
                )}
                <div style={{ opacity: i === current ? 1 : 0.6 }}>
                  <Avatar tm={item} size={40} />
                </div>
                <div style={{ flex: 1, overflow: "hidden", minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: i === current ? "var(--text)" : "var(--text-muted)",
                      marginBottom: 2,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      letterSpacing: "0.05em",
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.role[lang]}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.04em",
                    color: "var(--green)",
                    flexShrink: 0,
                    textAlign: "right",
                    maxWidth: 140,
                    lineHeight: 1.3,
                  }}
                >
                  {item.result[lang]}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tm-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
