"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import NicheAutomationFlow from "./NicheAutomationFlow";
import SectionReveal from "./SectionReveal";
import type { NicheData } from "@/lib/niches";

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
  const deployLabel = isEs ? "Lo Que Implementamos Para Ti" : "What We Deploy For You";
  const statsLabel = isEs ? "Resultados Que Puedes Esperar" : "Results You Can Expect";
  const ctaTitle = isEs
    ? `¿Listo para automatizar tu ${name.toLowerCase()}?`
    : `Ready to automate your ${name.toLowerCase()}?`;
  const ctaSub = isEs
    ? "Agenda una llamada gratuita de 30 minutos. Te mostramos exactamente cómo funciona para tu negocio — sin compromisos."
    : "Book a free 30-minute strategy call. We'll show you exactly how this works for your business — no commitment required.";

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
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(26,127,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,127,212,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            zIndex: 0,
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 300,
            background: "radial-gradient(ellipse, rgba(26,127,212,0.07) 0%, transparent 70%)",
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
          {/* Back link */}
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

          {/* Industry badge */}
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

          {/* Headline */}
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
            }}
          >
            {heroTitle}
          </motion.h1>

          {/* Sub */}
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

          {/* CTAs */}
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

      {/* ── AUTOMATION FLOW ──────────────────────────────── */}
      <section
        className="section-wrap"
        style={{ background: "var(--bg)" }}
      >
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{automationLabel}</div>
          </SectionReveal>
          <NicheAutomationFlow nodes={flowNodes} title={automationTitle} />
        </div>
      </section>

      {/* ── WHAT WE DEPLOY ───────────────────────────────── */}
      <section
        className="section-wrap"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
      >
        <div className="section-inner">
          <SectionReveal>
            <div className="slabel">{deployLabel}</div>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", maxWidth: 540 }}
            >
              {isEs ? "Todo listo en 7–30 días." : "Everything live in 7–30 days."}
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
                    background: "var(--bg)",
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

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="section-wrap"
        style={{
          background: "var(--surface)",
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
              {ctaTitle}
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
