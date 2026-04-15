"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-wrap"
      style={{
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Resplandor de fondo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,127,212,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(26,127,212,0.4), rgba(200,148,26,0.3), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="section-inner"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="slabel" style={{ justifyContent: "center" }}>
            Listo para Comenzar
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              maxWidth: 900,
              margin: "0 auto 20px",
            }}
          >
            Tu Negocio Merece{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingRight: "0.08em",
              }}
            >
              Mejores Sistemas
            </em>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: 500,
              margin: "0 auto 44px",
              fontWeight: 300,
            }}
          >
            Deja de improvisar con tu operación. Empieza a gestionar un negocio
            que funciona — incluso cuando tú no estás.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "18px 44px",
                background: "var(--blue)",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.01em",
                textDecoration: "none",
                transition: "all 0.25s",
                boxShadow: "0 0 30px rgba(26,127,212,0.3), 0 6px 25px rgba(26,127,212,0.2)",
                animation: "border-glow 3s ease-in-out infinite",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--blue-bright)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 60px rgba(26,127,212,0.6), 0 16px 50px rgba(26,127,212,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--blue)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(26,127,212,0.3), 0 6px 25px rgba(26,127,212,0.2)";
              }}
            >
              Agenda Tu Llamada Estratégica Gratis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M8 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              🛡️ Garantía de ROI a 90 Días — resultados o trabajamos gratis · Sin contratos a largo plazo
            </span>
          </div>

          {/* Estadísticas */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 48,
              marginTop: 64,
              flexWrap: "wrap",
            }}
          >
            {[
              { stat: "24/7", label: "Cobertura de prospectos" },
              { stat: "<1s", label: "Tiempo de respuesta" },
              { stat: "10+", label: "Industrias atendidas" },
              { stat: "90", label: "Días de garantía de ROI" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.2rem",
                    letterSpacing: "-0.03em",
                    background: "linear-gradient(135deg, var(--blue), var(--gold))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    color: "var(--text-dim)",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
