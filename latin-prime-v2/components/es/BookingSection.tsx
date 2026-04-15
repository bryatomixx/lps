"use client";
import { useEffect, useRef } from "react";
import SectionReveal from "../SectionReveal";

export default function BookingSection() {
  const scriptRef = useRef<boolean>(false);

  useEffect(() => {
    if (scriptRef.current) return;
    scriptRef.current = true;
    const script = document.createElement("script");
    script.src = "https://link.latinprimesystems.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return (
    <section
      id="booking"
      style={{
        background: "var(--bg)",
        padding: "120px 0",
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
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,127,212,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <SectionReveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="slabel" style={{ justifyContent: "center" }}>
              Agenda Tu Llamada Estratégica Gratuita
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                marginBottom: 16,
                maxWidth: 620,
                margin: "0 auto 16px",
              }}
            >
              Elige un Horario.{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, var(--blue), var(--gold))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Nosotros Nos Encargamos del Resto.
              </em>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Llamada estratégica de 30 minutos. Analizamos tus principales cuellos
              de botella operativos y te mostramos exactamente lo que construiríamos
              para tu negocio. Sin compromiso, sin presentación de ventas.
            </p>
          </div>
        </SectionReveal>

        {/* Integración de calendario */}
        <SectionReveal delay={0.15}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border2)",
              padding: "4px",
              maxWidth: 900,
              margin: "0 auto",
              position: "relative",
            }}
          >
            {/* Acento superior */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: "linear-gradient(90deg, var(--blue), var(--gold))",
              }}
            />
            <iframe
              src="https://link.latinprimesystems.com/widget/booking/sm0lHek6RvXYQGlCRPjK"
              style={{
                width: "100%",
                border: "none",
                overflow: "hidden",
                minHeight: 680,
                display: "block",
                marginTop: 3,
                filter: "invert(1) hue-rotate(180deg)",
              }}
              scrolling="no"
              id="sm0lHek6RvXYQGlCRPjK_1774270637725"
              title="Agenda una llamada estratégica gratuita con Latin Prime Systems"
            />
          </div>
        </SectionReveal>

        {/* Señales de confianza bajo el calendario */}
        <SectionReveal delay={0.25}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              "🛡️ Garantía de ROI a 90 días",
              "⚡ Sistema activo en 7–30 días",
              "🚫 Sin contratos a largo plazo",
              "💬 Respuesta en menos de 24 horas",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
