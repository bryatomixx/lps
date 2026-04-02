"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionReveal from "../SectionReveal";

const testimonials = [
  {
    name: "Jesús Martínez",
    role: "Dueño de Agencia de Seguros",
    photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4c63078883d9c5ac7d06.jpeg",
    quote:
      "Desde que configuramos el agente de voz con IA, no hemos perdido ni un solo prospecto. Responde cada llamada, califica al cliente y agenda la cita — incluso a las 11 de la noche. Nuestra tasa de cierre subió un 40% en los primeros dos meses.",
    result: "+40% tasa de cierre",
  },
  {
    name: "Joshua Plaza",
    role: "Dueño de Barbería",
    photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693ca110cfdc2f1c3a6253b3.jpeg",
    quote:
      "Antes perdía 2 horas al día solo confirmando citas y persiguiendo ausencias. Ahora el sistema lo gestiona todo automáticamente. Mi silla está ocupada todos los días y no contraté a nadie.",
    result: "2 hrs/día ahorradas",
  },
  {
    name: "Berta Viloria",
    role: "Contadora y Asesora Fiscal",
    photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4c9fe91800719e64f8d4.jpeg",
    quote:
      "La temporada de impuestos era un caos. Ahora la recolección de documentos, los recordatorios a clientes y el seguimiento ocurren de forma automática. Atendí un 30% más de clientes este año con el mismo equipo. Eso es ganancia pura.",
    result: "+30% clientes atendidos",
  },
  {
    name: "Pedro Rivera",
    role: "CabinetWorkx — Contratista",
    photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4cbe8bbf4a4527df2ec0.jpeg",
    quote:
      "Siempre estoy en obras y no puedo contestar el teléfono. Con la respuesta automática por texto, cada llamada perdida recibe una respuesta en segundos. He recuperado negocios que antes habría perdido por completo.",
    result: "Nunca pierde un prospecto",
  },
  {
    name: "Kerwin Iglesias",
    role: "Dueño de Agencia de Seguros",
    photo: "https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/693c4d003165d977033d76e4.jpeg",
    quote:
      "Al principio era escéptico. Pero en 30 días, el sistema ya había recuperado $4,200 en pólizas de prospectos inactivos que creíamos perdidos. El retorno fue evidente desde el primer mes.",
    result: "$4,200 recuperados",
  },
];

export default function Testimonials() {
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

  const t = testimonials[current];

  return (
    <section
      className="section-wrap"
      style={{ background: "var(--surface)", overflow: "hidden" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">Resultados Reales</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
          >
            Lo Que Sucede Cuando{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nos Ponemos a Trabajar
            </em>
          </h2>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 2,
            marginTop: 16,
          }}
          className="tm-grid"
        >
          {/* Izquierda — Testimonio actual */}
          <div
            style={{
              background: "var(--surface2)",
              border: "1px solid var(--border)",
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
                background: "linear-gradient(90deg, var(--blue), var(--gold))",
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
                {/* Comillas */}
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "5rem",
                    lineHeight: 0.8,
                    color: "var(--blue-dim)",
                    marginBottom: 16,
                    opacity: 0.4,
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
                    fontWeight: 300,
                    flex: 1,
                    marginBottom: 28,
                  }}
                >
                  {t.quote}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "2px solid var(--border2)",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "var(--text)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        color: "var(--text-dim)",
                        marginTop: 2,
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      padding: "5px 12px",
                      background: "var(--green-dim)",
                      border: "1px solid rgba(0,229,122,0.25)",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "var(--green)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t.result}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Puntos + flechas */}
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
                    background: i === current ? "var(--blue)" : "var(--border2)",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <button
                  onClick={() =>
                    goTo((current - 1 + testimonials.length) % testimonials.length)
                  }
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border2)",
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  aria-label="Anterior"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border2)",
                    width: 32,
                    height: 32,
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s",
                  }}
                  aria-label="Siguiente"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Derecha — Lista de miniaturas */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {testimonials.map((tm, i) => (
              <motion.button
                key={i}
                onClick={() => goTo(i)}
                whileHover={{ x: 4 }}
                style={{
                  background: i === current ? "rgba(26,127,212,0.08)" : "var(--surface2)",
                  border:
                    i === current
                      ? "1px solid rgba(26,127,212,0.25)"
                      : "1px solid var(--border)",
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
                      background: "var(--blue)",
                    }}
                  />
                )}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    position: "relative",
                    opacity: i === current ? 1 : 0.6,
                  }}
                >
                  <Image
                    src={tm.photo}
                    alt={tm.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ flex: 1, overflow: "hidden" }}>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: i === current ? "var(--text)" : "var(--text-muted)",
                      marginBottom: 2,
                    }}
                  >
                    {tm.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      color: "var(--text-dim)",
                    }}
                  >
                    {tm.role}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    color: "var(--green)",
                    flexShrink: 0,
                  }}
                >
                  {tm.result}
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
