"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NicheAutomationFlow from "./NicheAutomationFlow";
import SectionReveal from "./SectionReveal";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";
import SplitText from "./SplitText";
import type { NicheData } from "@/lib/niches";

// Split a hero title like "AI Automation for Insurance Agencies" into a
// plain-text prefix and a highlight half (after " for " in EN, " para " in ES).
// The highlight gets a ShinyText shimmer to mirror the home-page hero.
function splitHeroTitle(title: string, isEs: boolean): { prefix: string; highlight: string } {
  const sep = isEs ? " para " : " for ";
  const idx = title.toLowerCase().indexOf(sep);
  if (idx === -1) {
    // Fallback: highlight the last 3 words
    const words = title.trim().split(/\s+/);
    if (words.length <= 3) return { prefix: "", highlight: title };
    const tail = words.slice(-3).join(" ");
    const head = words.slice(0, -3).join(" ");
    return { prefix: head, highlight: tail };
  }
  return {
    prefix: title.slice(0, idx + sep.length).trim(),
    highlight: title.slice(idx + sep.length).trim(),
  };
}

const BOOKING_URL = "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

interface NichePageContentProps {
  niche: NicheData;
  lang: "en" | "es";
}

export default function NichePageContent({ niche, lang }: NichePageContentProps) {
  const isEs = lang === "es";
  const name = isEs ? niche.nameEs : niche.name;
  const heroTitle = isEs ? niche.heroTitleEs : niche.heroTitle;
  const heroSub = isEs ? niche.heroSubEs : niche.heroSub;
  const problem = isEs ? niche.problemEs : niche.problem;
  const automationTitle = isEs ? niche.automationTitleEs : niche.automationTitle;
  const flowNodes = isEs ? niche.flowES : niche.flowEN;
  const items = isEs ? niche.itemsEs : niche.items;
  const homeUrl = isEs ? "/es" : "/";
  const bookLabel = isEs ? "Agendar Llamada Gratuita" : "Book a Free Strategy Call";
  const pricingLabel = isEs ? "Ver Planes y Precios" : "See Plans & Pricing";
  const backLabel = isEs ? `← Volver a Latin Prime` : `← Back to Latin Prime`;
  const problemLabel = isEs ? "El Problema" : "The Problem";
  const automationLabel = isEs ? "La Automatización" : "The Automation";
  const useCasesLabel = isEs ? "Casos de Uso Reales" : "Real Use Cases";
  const useCasesSubtitle = isEs
    ? "Tres flujos automatizados que entregamos para tu industria — más allá del flujo principal."
    : "Three automated flows we deliver for your industry — beyond the main pipeline.";
  const deployLabel = isEs ? "Lo Que Implementamos Para Ti" : "What We Deploy For You";
  const beforeAfterLabel = isEs ? "Antes vs. Después" : "Before vs. After";
  const beforeAfterTitle = isEs
    ? `Cómo cambia tu día a día`
    : `How your day-to-day changes`;
  const beforeColLabel = isEs ? "Sin nosotros" : "Without us";
  const afterColLabel = isEs ? "Con LPS" : "With LPS";
  const statsLabel = isEs ? "Resultados Que Puedes Esperar" : "Results You Can Expect";
  const testimonialLabel = isEs ? "Cliente Real" : "Real Client";
  const techLabel = isEs ? "Stack que Integramos" : "Stack We Integrate";
  const techSubtitle = isEs
    ? "Trabajamos con las herramientas que tu industria ya usa. Si tu plataforma no está aquí pero tiene API, también la conectamos."
    : "We work with the tools your industry already uses. If your platform isn't listed but exposes an API, we connect it too.";
  const faqLabel = isEs ? "Preguntas Frecuentes" : "Frequently Asked Questions";
  const ctaSub = isEs
    ? "Agenda una llamada gratuita de 30 minutos. Te mostramos exactamente cómo funciona para tu negocio — sin compromisos."
    : "Book a free 30-minute strategy call. We'll show you exactly how this works for your business — no commitment required.";

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroTitleParts = splitHeroTitle(heroTitle, isEs);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 24px 80px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,127,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            zIndex: 0,
          }}
        />
        {/* Dot grid with mask — same vibe as home hero */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(26,127,212,0.32) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 80%)",
            zIndex: 0,
          }}
        />
        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: "8%",
            left: "5%",
            width: "55vw",
            height: "55vw",
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(26,127,212,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            animation: "glow-pulse 6s ease-in-out infinite",
            zIndex: 0,
          }}
        />
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "3%",
            width: "40vw",
            height: "40vw",
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(212,165,58,0.1) 0%, transparent 70%)",
            filter: "blur(50px)",
            pointerEvents: "none",
            animation: "glow-pulse 8s ease-in-out infinite 1s",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 800,
            margin: "0 auto",
            width: "100%",
          }}
        >
          <Link
            href={homeUrl}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              color: "var(--text-muted)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 32,
              transition: "color 0.2s",
            }}
          >
            {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(26,127,212,0.1)",
              border: "1px solid rgba(26,127,212,0.25)",
              borderRadius: 4,
              padding: "5px 12px",
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: "1rem" }}>{niche.icon}</span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                color: "var(--blue)",
                textTransform: "uppercase",
              }}
            >
              {name}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              lineHeight: 1.15,
              color: "var(--text)",
              marginBottom: 24,
              maxWidth: 720,
              letterSpacing: "-0.025em",
            }}
          >
            {heroTitleParts.prefix && (
              <>
                {heroTitleParts.prefix}{" "}
              </>
            )}
            <ShinyText
              text={heroTitleParts.highlight}
              speed={3.5}
              fromColor="#1A5CA8"
              toColor="#D4A53A"
              style={{ "--st-style": "normal" } as React.CSSProperties}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 620,
              marginBottom: 40,
            }}
          >
            {heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--blue)",
                color: "white",
                padding: "14px 28px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "opacity 0.2s, transform 0.2s",
                borderRadius: 2,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {bookLabel} →
            </a>
            <Link
              href={`${homeUrl}#pricing`}
              style={{
                background: "transparent",
                color: "var(--text-muted)",
                padding: "14px 24px",
                border: "1px solid var(--border2)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                borderRadius: 2,
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,127,212,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
              }}
            >
              {pricingLabel}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────── */}
      <section
        className="section-wrap"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
      >
        <div className="section-inner" style={{ maxWidth: 800 }}>
          <SectionReveal>
            <div className="slabel">{problemLabel}</div>
            <p
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                color: "var(--text-muted)",
                lineHeight: 1.8,
              }}
            >
              {problem}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── AUTOMATION FLOW (main) ───────────────────────── */}
      <section className="section-wrap" style={{ background: "var(--bg)" }}>
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{automationLabel}</div>
          </SectionReveal>
          <NicheAutomationFlow nodes={flowNodes} title={automationTitle} />
        </div>
      </section>

      {/* ── USE CASES (sub-flows) ───────────────────────── */}
      {niche.useCases && niche.useCases.length > 0 && (
        <section
          className="section-wrap"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner">
            <SectionReveal>
              <div className="slabel">{useCasesLabel}</div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: 640,
                  marginBottom: 32,
                }}
              >
                {useCasesSubtitle}
              </p>
            </SectionReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 16,
              }}
            >
              {niche.useCases.map((uc, i) => {
                const ucTitle = isEs ? uc.titleEs : uc.title;
                const ucDesc = isEs ? uc.descEs : uc.desc;
                const ucFlow = isEs ? uc.flowEs : uc.flow;
                return (
                  <SectionReveal key={i} delay={i * 0.08}>
                    <div
                      style={{
                        background: "var(--bg)",
                        border: "1px solid var(--border)",
                        borderRadius: 8,
                        padding: "22px 22px 18px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "0.58rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          fontWeight: 700,
                          marginBottom: 10,
                        }}
                      >
                        Flow {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--text)",
                          marginBottom: 10,
                          lineHeight: 1.3,
                        }}
                      >
                        {ucTitle}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.84rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                          marginBottom: 18,
                          flexGrow: 1,
                        }}
                      >
                        {ucDesc}
                      </p>
                      {/* Compact horizontal mini-flow */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          flexWrap: "wrap",
                          paddingTop: 14,
                          borderTop: "1px solid var(--border)",
                        }}
                      >
                        {ucFlow.map((node, idx) => (
                          <div
                            key={node.id}
                            style={{ display: "flex", alignItems: "center", gap: 4 }}
                          >
                            <span
                              title={node.label}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 5,
                                padding: "4px 8px",
                                background: "var(--surface)",
                                border: "1px solid var(--border)",
                                borderRadius: 4,
                                fontSize: "0.6rem",
                                fontFamily: "'DM Mono', monospace",
                                letterSpacing: "0.04em",
                                color: "var(--text-muted)",
                              }}
                            >
                              <span style={{ fontSize: "0.85rem" }}>{node.icon}</span>
                              {node.label}
                            </span>
                            {idx < ucFlow.length - 1 && (
                              <span
                                style={{
                                  color: "var(--gold)",
                                  fontSize: "0.7rem",
                                  fontWeight: 700,
                                }}
                              >
                                →
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── WHAT WE DEPLOY ───────────────────────────────── */}
      <section
        className="section-wrap"
        style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{deployLabel}</div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", maxWidth: 540 }}
            >
              {isEs ? "Todo " : "Everything "}
              <ShinyText
                text={isEs ? "listo en 7–30 días." : "live in 7–30 days."}
                speed={3.5}
                fromColor="#1A5CA8"
                toColor="#D4A53A"
              />
            </h2>
          </SectionReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 12,
              marginTop: 32,
            }}
          >
            {items.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "18px 20px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 4,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "var(--green)",
                      flexShrink: 0,
                      fontSize: "0.9rem",
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ─────────────────────────────── */}
      {niche.beforeAfter && niche.beforeAfter.length > 0 && (
        <section
          className="section-wrap"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner">
            <SectionReveal>
              <div className="slabel">{beforeAfterLabel}</div>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", maxWidth: 580 }}
              >
                {isEs ? "Cómo cambia tu " : "How your "}
                <GradientText
                  text={isEs ? "día a día" : "day-to-day"}
                  speed={5}
                  from="#1A5CA8"
                  mid="#D4A53A"
                  to="#2B7FE0"
                  style={{ fontWeight: 800 }}
                />
                {isEs ? "" : " changes"}
              </h2>
            </SectionReveal>
            <div
              className="ba-grid-niche"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginTop: 32,
              }}
            >
              {/* Before column */}
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "24px 22px",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(15,34,64,0.06)",
                    color: "var(--text-muted)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    padding: "5px 10px",
                    borderRadius: 4,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#94A3B8",
                    }}
                  />
                  {beforeColLabel}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {niche.beforeAfter.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: "0.85rem",
                        lineHeight: 1.55,
                        color: "var(--text-muted)",
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          border: "1.5px solid #CBD5E1",
                          color: "#94A3B8",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          marginTop: 2,
                        }}
                      >
                        ✕
                      </span>
                      {isEs ? p.beforeEs : p.before}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After column */}
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--blue)",
                  borderRadius: 8,
                  padding: "24px 22px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(26,92,168,0.08)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, var(--gold), var(--gold-bright))",
                  }}
                />
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(212,165,58,0.12)",
                    color: "var(--gold)",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    padding: "5px 10px",
                    borderRadius: 4,
                    marginBottom: 18,
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "var(--gold)",
                      boxShadow: "0 0 8px var(--gold)",
                    }}
                  />
                  {afterColLabel}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {niche.beforeAfter.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: "0.85rem",
                        lineHeight: 1.55,
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: "var(--gold)",
                          color: "white",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.55rem",
                          fontWeight: 800,
                          marginTop: 2,
                        }}
                      >
                        ✓
                      </span>
                      {isEs ? p.afterEs : p.after}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .ba-grid-niche { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </section>
      )}

      {/* ── STATS ────────────────────────────────────────── */}
      <section
        className="section-wrap"
        style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
      >
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{statsLabel}</div>
          </SectionReveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 2,
              marginTop: 24,
            }}
          >
            {niche.stats.map((stat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "32px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(2rem, 4vw, 2.8rem)",
                      background: "linear-gradient(135deg, var(--blue), var(--gold))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      marginBottom: 8,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {isEs ? stat.labelEs : stat.label}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TESTIMONIAL ────────────────────────── */}
      {niche.featuredQuote && (
        <section
          className="section-wrap"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner" style={{ maxWidth: 920 }}>
            <SectionReveal>
              <div className="slabel">{testimonialLabel}</div>
            </SectionReveal>
            <SectionReveal variant="scale">
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "32px 32px",
                  marginTop: 16,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "linear-gradient(90deg, var(--gold), var(--gold-bright), var(--gold))",
                  }}
                />
                <div
                  className="ft-niche-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 24,
                    alignItems: "center",
                  }}
                >
                  {/* Avatar */}
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: niche.featuredQuote.photo
                        ? "transparent"
                        : "linear-gradient(135deg, var(--blue), var(--gold))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.4rem",
                      flexShrink: 0,
                      position: "relative",
                    }}
                  >
                    {niche.featuredQuote.photo ? (
                      <Image
                        src={niche.featuredQuote.photo}
                        alt={niche.featuredQuote.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      niche.featuredQuote.initials
                    )}
                  </div>
                  {/* Quote + person */}
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                        fontWeight: 600,
                        lineHeight: 1.55,
                        color: "var(--text)",
                        marginBottom: 14,
                      }}
                    >
                      &ldquo;{isEs ? niche.featuredQuote.quoteEs : niche.featuredQuote.quote}&rdquo;
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 8,
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 800,
                          fontSize: "0.9rem",
                          color: "var(--text)",
                        }}
                      >
                        {niche.featuredQuote.name}
                      </span>
                      <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                        — {isEs ? niche.featuredQuote.roleEs : niche.featuredQuote.role}
                      </span>
                    </div>
                  </div>
                  {/* Metric */}
                  <div
                    className="ft-niche-metric"
                    style={{
                      textAlign: "center",
                      paddingLeft: 24,
                      borderLeft: "1px solid var(--border)",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                        background: "linear-gradient(135deg, var(--blue), var(--gold))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                      }}
                    >
                      {isEs ? niche.featuredQuote.metricEs : niche.featuredQuote.metric}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
          <style>{`
            @media (max-width: 768px) {
              .ft-niche-grid {
                grid-template-columns: 1fr !important;
                text-align: center;
              }
              .ft-niche-grid > div:first-child { margin: 0 auto; }
              .ft-niche-metric {
                border-left: none !important;
                border-top: 1px solid var(--border);
                padding-left: 0 !important;
                padding-top: 18px;
              }
            }
          `}</style>
        </section>
      )}

      {/* ── TECH STACK ───────────────────────────────────── */}
      {niche.techStack && niche.techStack.length > 0 && (
        <section
          className="section-wrap"
          style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner">
            <SectionReveal>
              <div className="slabel">{techLabel}</div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: 640,
                  marginBottom: 32,
                }}
              >
                {techSubtitle}
              </p>
            </SectionReveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 12,
              }}
            >
              {niche.techStack.map((tech, i) => (
                <SectionReveal key={i} delay={i * 0.05}>
                  <div
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      padding: "16px 18px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.92rem",
                        color: "var(--text)",
                        marginBottom: 6,
                      }}
                    >
                      {tech.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      {isEs ? tech.descEs : tech.desc}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────── */}
      {niche.faq && niche.faq.length > 0 && (
        <section
          className="section-wrap"
          style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
        >
          <div className="section-inner" style={{ maxWidth: 880 }}>
            <SectionReveal>
              <div className="slabel">{faqLabel}</div>
            </SectionReveal>
            <div style={{ marginTop: 24 }}>
              {niche.faq.map((item, i) => {
                const q = isEs ? item.qEs : item.q;
                const a = isEs ? item.aEs : item.a;
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.04 }}
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      style={{
                        width: "100%",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "20px 0",
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
                          color: isOpen ? "var(--text)" : "var(--text-muted)",
                          lineHeight: 1.4,
                          transition: "color 0.2s",
                        }}
                      >
                        {q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          flexShrink: 0,
                          width: 26,
                          height: 26,
                          border: `1px solid ${isOpen ? "var(--gold)" : "var(--border2)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: isOpen ? "var(--gold)" : "var(--text-dim)",
                          borderRadius: 6,
                          fontSize: "1.1rem",
                          fontWeight: 300,
                          transition: "border-color 0.2s, color 0.2s",
                        }}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
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
                            {a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="section-wrap"
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          textAlign: "center",
        }}
      >
        <div className="section-inner" style={{ maxWidth: 680 }}>
          <SectionReveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(26,127,212,0.08)",
                border: "1px solid rgba(26,127,212,0.2)",
                borderRadius: 4,
                padding: "5px 14px",
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: "1rem" }}>{niche.icon}</span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.16em",
                  color: "var(--blue)",
                  textTransform: "uppercase",
                }}
              >
                {name}
              </span>
            </div>
            <h2
              className="section-title"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                maxWidth: 580,
                margin: "0 auto 20px",
              }}
            >
              {isEs ? `¿Listo para automatizar tu ` : `Ready to automate your `}
              <ShinyText
                text={`${name.toLowerCase()}${isEs ? "?" : "?"}`}
                speed={3.2}
                fromColor="#1A5CA8"
                toColor="#D4A53A"
              />
            </h2>
            <p
              className="section-desc"
              style={{ maxWidth: 520, margin: "0 auto 40px" }}
            >
              {ctaSub}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--blue)",
                color: "white",
                padding: "16px 36px",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 2,
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.88";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {bookLabel} →
            </a>
            <div
              style={{
                marginTop: 20,
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              {isEs
                ? "Sistema activo en 7–30 días · Sin contrato a largo plazo · Garantía ROI 90 días"
                : "System live in 7–30 days · No long-term contract · 90-Day ROI Guarantee"}
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
