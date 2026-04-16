"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GradientText from "./GradientText";

type Lang = "en" | "es";

interface CompareProps {
  lang?: Lang;
}

export default function Compare({ lang = "en" }: CompareProps) {
  const t = {
    en: {
      slabel: "The Difference",
      headlineStatic: "Before Latin Prime.",
      headlineGradient: "After Latin Prime.",
      colBefore: "Without Us",
      colAfter: "With Latin Prime Systems",
      rows: [
        {
          before: { label: "Leads call and nobody answers", sub: "They go to a competitor in minutes" },
          after:  { label: "Every call answered instantly by AI", sub: "Qualified, booked, and logged — automatically" },
        },
        {
          before: { label: "Manual follow-ups for days, then giving up", sub: "Your pipeline leaks at every stage" },
          after:  { label: "AI agents follow up across SMS, email, and voice", sub: "Zero leads fall through — ever" },
        },
        {
          before: { label: "Hours lost to data entry and spreadsheets", sub: "Your team is doing robot work" },
          after:  { label: "Custom software built around your exact workflow", sub: "Dispatch, billing, inventory — automated end to end" },
        },
        {
          before: { label: "No real-time visibility — managing by memory", sub: "Problems surface after they've already cost you" },
          after:  { label: "A command center shows every KPI live", sub: "Leads, orders, ops, and finance — one screen, always accurate" },
        },
        {
          before: { label: "Can't scale without adding headcount and cost", sub: "You become the bottleneck in your own growth" },
          after:  { label: "One person runs what used to need a full team", sub: "Your business operates like a funded startup" },
        },
      ],
    },
    es: {
      slabel: "La Diferencia",
      headlineStatic: "Antes de Latin Prime.",
      headlineGradient: "Después de Latin Prime.",
      colBefore: "Sin Nosotros",
      colAfter: "Con Latin Prime Systems",
      rows: [
        {
          before: { label: "Los prospectos llaman y nadie contesta", sub: "Se van con la competencia en minutos" },
          after:  { label: "Cada llamada respondida al instante por AI", sub: "Calificado, agendado y registrado — automáticamente" },
        },
        {
          before: { label: "Seguimientos manuales por días y luego se rinde", sub: "Tu pipeline pierde prospectos en cada etapa" },
          after:  { label: "AI agents dan seguimiento por SMS, email y voz", sub: "Cero prospectos se pierden — nunca" },
        },
        {
          before: { label: "Horas perdidas en captura de datos y hojas de cálculo", sub: "Tu equipo hace trabajo de robot" },
          after:  { label: "Software personalizado construido para tu flujo exacto", sub: "Despacho, facturación, inventario — automatizado de extremo a extremo" },
        },
        {
          before: { label: "Sin visibilidad en tiempo real — gestionas de memoria", sub: "Los problemas aparecen cuando ya te costaron" },
          after:  { label: "Un command center muestra cada KPI en vivo", sub: "Prospectos, pedidos, operaciones y finanzas — una pantalla, siempre precisa" },
        },
        {
          before: { label: "No puedes escalar sin contratar más gente y aumentar costos", sub: "Tú mismo te conviertes en el cuello de botella" },
          after:  { label: "Una persona hace lo que antes necesitaba un equipo completo", sub: "Tu negocio opera como una startup bien financiada" },
        },
      ],
    },
  }[lang];

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="compare"
      ref={ref}
      style={{ background: "var(--surface)", padding: "100px 24px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 64 }}
        >
          <div className="slabel">{t.slabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", marginBottom: 0 }}
          >
            {t.headlineStatic}{" "}
            <GradientText text={t.headlineGradient} speed={4} />
          </h2>
        </motion.div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 40px 1fr",
            gap: 0,
            marginBottom: 0,
          }}
          className="compare-row-grid"
        >
          <div style={{
            padding: "10px 20px",
            background: "rgba(220,50,47,0.06)",
            border: "1px solid rgba(220,50,47,0.15)",
            borderRight: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(220,50,47,0.5)", display: "inline-block" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(220,50,47,0.7)" }}>
              {t.colBefore}
            </span>
          </div>
          <div style={{ background: "var(--border)", width: 1, margin: "0 auto" }} />
          <div style={{
            padding: "10px 20px",
            background: "rgba(212,165,58,0.06)",
            border: "1px solid rgba(212,165,58,0.2)",
            borderLeft: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "var(--gold)",
              display: "inline-block",
              boxShadow: "0 0 6px var(--gold)",
              animation: "dot-pulse 2s ease-in-out infinite",
            }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>
              {t.colAfter}
            </span>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="compare-rows">
          {t.rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.09 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 40px 1fr",
                borderBottom: i < t.rows.length - 1 ? "1px solid var(--border)" : "none",
              }}
              className="compare-row"
            >
              {/* Before cell */}
              <div style={{
                padding: "24px 20px",
                background: "rgba(220,50,47,0.03)",
                borderLeft: "1px solid rgba(220,50,47,0.15)",
                borderRight: "none",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}>
                {/* X icon */}
                <div style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(220,50,47,0.08)",
                  border: "1px solid rgba(220,50,47,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(220,50,47,0.7)" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>
                    {row.before.label}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "'DM Mono', monospace" }}>
                    {row.before.sub}
                  </div>
                </div>
              </div>

              {/* Center arrow */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--surface2)",
                borderLeft: "1px solid var(--border)",
                borderRight: "1px solid var(--border)",
                position: "relative",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>

              {/* After cell */}
              <div style={{
                padding: "24px 20px",
                background: "rgba(212,165,58,0.03)",
                borderRight: "1px solid rgba(212,165,58,0.15)",
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
              }}>
                {/* Check icon */}
                <div style={{
                  flexShrink: 0,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(212,165,58,0.1)",
                  border: "1px solid rgba(212,165,58,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 1,
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text)", fontWeight: 600, lineHeight: 1.4, marginBottom: 4 }}>
                    {row.after.label}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "'DM Mono', monospace" }}>
                    {row.after.sub}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom border close */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 40px 1fr",
          borderTop: "1px solid var(--border)",
        }} className="compare-row-grid">
          <div style={{ borderLeft: "1px solid rgba(220,50,47,0.15)", height: 1 }} />
          <div style={{ background: "var(--surface2)", borderLeft: "1px solid var(--border)", borderRight: "1px solid var(--border)" }} />
          <div style={{ borderRight: "1px solid rgba(212,165,58,0.15)", height: 1 }} />
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .compare-row-grid { grid-template-columns: 1fr !important; }
          .compare-rows .compare-row { grid-template-columns: 1fr !important; }
          .compare-rows .compare-row > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
