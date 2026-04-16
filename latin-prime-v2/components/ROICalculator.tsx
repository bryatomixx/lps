"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import SectionReveal from "./SectionReveal";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";

type Lang = "en" | "es";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 });
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [value, isInView, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        const formatted =
          value >= 1000
            ? Math.round(v).toLocaleString("en-US")
            : Math.round(v).toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, value]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function ROICalculator({ lang }: { lang?: Lang }) {
  const t = {
    en: {
      sectionLabel: "ROI Calculator",
      headingPart1: "How Much Is",
      headingPart2: "Doing Nothing Costing You?",
      sectionDesc: "Adjust the sliders to match your business. See exactly what automation is worth for your specific situation.",
      inputsHeading: "Your Business Numbers",
      slider1Label: "Missed calls / week",
      slider1Tooltip: "How many calls go unanswered in a typical week",
      slider2Label: "Average client value",
      slider2Tooltip: "What a single new client is worth to your business",
      slider3Label: "Your estimated close rate",
      slider3Tooltip: "Percentage of qualified leads you typically close",
      slider4Label: "Hours/week on manual admin",
      slider4Tooltip: "Time spent on follow-ups, data entry, scheduling, reports",
      slider5Label: "Your time value",
      slider5Tooltip: "What an hour of your time is worth to the business",
      comparePlan: "Compare against plan",
      resultHeading: "Monthly Value of Automation",
      resultSub: "per month in recovered revenue + time saved",
      roiPositive: (multiple: string) => `${multiple}x ROI`,
      roiNeutral: "Investing in growth",
      roiNetPositive: (net: string) => `$${net}/mo net above plan cost`,
      roiNetNeutral: "ROI builds as your volume grows",
      breakdownHeading: "Breakdown",
      breakdownRevLabel: "Revenue from recovered leads",
      breakdownRevSub: (clients: number, value: string) => `${clients} new clients/mo × $${value}`,
      breakdownTimeLabel: "Time saved on admin",
      breakdownTimeSub: (hrs: number, rate: number) => `${hrs} hrs/mo × $${rate}/hr`,
      breakdownPlanLabel: "Plan cost",
      breakdownPlanSub: (name: string) => `${name} plan`,
      ctaDesc: "These are conservative estimates. Most clients exceed these numbers within 60 days.",
      ctaBtn: "Book Your Free Strategy Call →",
      planStarter: "Starter",
      planPro: "Pro",
      planGrowth: "Growth",
    },
    es: {
      sectionLabel: "Calculadora de ROI",
      headingPart1: "¿Cuánto Te Está Costando",
      headingPart2: "No Hacer Nada?",
      sectionDesc: "Ajusta los controles según tu negocio. Ve exactamente cuánto vale la automatización para tu situación.",
      inputsHeading: "Los Números de Tu Negocio",
      slider1Label: "Llamadas perdidas / semana",
      slider1Tooltip: "Cuántas llamadas quedan sin respuesta en una semana típica",
      slider2Label: "Valor promedio por cliente",
      slider2Tooltip: "Lo que un nuevo cliente vale para tu negocio",
      slider3Label: "Tu tasa de cierre estimada",
      slider3Tooltip: "Porcentaje de leads calificados que normalmente cierras",
      slider4Label: "Horas/semana en tareas manuales",
      slider4Tooltip: "Tiempo en seguimientos, captura de datos, agendas e informes",
      slider5Label: "Valor de tu tiempo",
      slider5Tooltip: "Lo que vale una hora de tu tiempo para el negocio",
      comparePlan: "Comparar con plan",
      resultHeading: "Valor Mensual de la Automatización",
      resultSub: "al mes en ingresos recuperados + tiempo ahorrado",
      roiPositive: (multiple: string) => `${multiple}x ROI`,
      roiNeutral: "Invirtiendo en crecimiento",
      roiNetPositive: (net: string) => `$${net}/mes neto sobre el costo del plan`,
      roiNetNeutral: "El ROI crece con tu volumen",
      breakdownHeading: "Desglose",
      breakdownRevLabel: "Ingresos de leads recuperados",
      breakdownRevSub: (clients: number, value: string) => `${clients} nuevos clientes/mes × $${value}`,
      breakdownTimeLabel: "Tiempo ahorrado en admin",
      breakdownTimeSub: (hrs: number, rate: number) => `${hrs} hrs/mes × $${rate}/hr`,
      breakdownPlanLabel: "Costo del plan",
      breakdownPlanSub: (name: string) => `Plan ${name}`,
      ctaDesc: "Estas son estimaciones conservadoras. La mayoría de nuestros clientes superan estas cifras en 60 días.",
      ctaBtn: "Reserva tu Llamada de Estrategia Gratis →",
      planStarter: "Starter",
      planPro: "Pro",
      planGrowth: "Growth",
    },
  }[lang ?? "en"];

  const [calls, setCalls] = useState(20);
  const [avgValue, setAvgValue] = useState(500);
  const [closeRate, setCloseRate] = useState(20);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [plan, setPlan] = useState(497);

  const missedLeadsMonthly = calls * 4;
  const recoveredClients = Math.round(missedLeadsMonthly * (closeRate / 100));
  const revenueRecovered = recoveredClients * avgValue;
  const hoursSaved = hoursPerWeek * 4;
  const timeSaved = hoursSaved * hourlyRate;
  const totalROI = revenueRecovered + timeSaved;
  const roi = totalROI - plan;
  const roiMultiple = roi > 0 ? (roi / plan).toFixed(1) : "0";

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const planName = plan === 497 ? t.planStarter : plan === 997 ? t.planPro : t.planGrowth;

  return (
    <section
      ref={ref}
      style={{
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
        padding: "120px 0",
      }}
    >

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <SectionReveal>
          <div className="slabel">{t.sectionLabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 600 }}
          >
            <SplitText text={t.headingPart1} delay={0.05} />{" "}
            <ShinyText text={t.headingPart2} speed={4} />
          </h2>
          <p className="section-desc">
            {t.sectionDesc}
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 2,
            alignItems: "start",
          }}
          className="roi-grid"
        >
          {/* Left — Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "#FFFFFF",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "40px 36px",
              boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 32,
              }}
            >
              {t.inputsHeading}
            </div>

            <SliderInput
              label={t.slider1Label}
              value={calls}
              min={1}
              max={100}
              step={1}
              onChange={setCalls}
              display={`${calls} calls`}
              tooltip={t.slider1Tooltip}
            />
            <SliderInput
              label={t.slider2Label}
              value={avgValue}
              min={100}
              max={10000}
              step={100}
              onChange={setAvgValue}
              display={`$${avgValue.toLocaleString("en-US")}`}
              tooltip={t.slider2Tooltip}
            />
            <SliderInput
              label={t.slider3Label}
              value={closeRate}
              min={5}
              max={80}
              step={5}
              onChange={setCloseRate}
              display={`${closeRate}%`}
              tooltip={t.slider3Tooltip}
            />
            <SliderInput
              label={t.slider4Label}
              value={hoursPerWeek}
              min={1}
              max={40}
              step={1}
              onChange={setHoursPerWeek}
              display={`${hoursPerWeek} hrs`}
              tooltip={t.slider4Tooltip}
            />
            <SliderInput
              label={t.slider5Label}
              value={hourlyRate}
              min={25}
              max={500}
              step={25}
              onChange={setHourlyRate}
              display={`$${hourlyRate}/hr`}
              tooltip={t.slider5Tooltip}
            />

            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 24,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: 12,
                }}
              >
                {t.comparePlan}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {[
                  { label: t.planStarter, val: 497 },
                  { label: t.planPro, val: 997 },
                  { label: t.planGrowth, val: 1797 },
                ].map((p) => (
                  <button
                    key={p.val}
                    onClick={() => setPlan(p.val)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      background: plan === p.val ? "var(--gold)" : "var(--surface2)",
                      border: `1px solid ${plan === p.val ? "var(--gold)" : "var(--border2)"}`,
                      color: plan === p.val ? "white" : "var(--text-muted)",
                      borderRadius: 6,
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {p.label} ${p.val}/mo
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Results */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {/* Main ROI card */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: "var(--gold)",
                }}
              />
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 12,
                }}
              >
                {t.resultHeading}
              </div>
              <div
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                  letterSpacing: "-0.04em",
                  color: "#0F2240",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                <AnimatedNumber value={totalROI} prefix="$" />
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-dim)",
                  marginBottom: 20,
                }}
              >
                {t.resultSub}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  background: roi > 0 ? "var(--green-dim)" : "rgba(229,85,85,0.08)",
                  border: `1px solid ${roi > 0 ? "rgba(0,168,84,0.2)" : "rgba(229,85,85,0.2)"}`,
                  borderRadius: 8,
                }}
              >
                <span style={{ fontSize: "1rem" }}>{roi > 0 ? "🚀" : "📊"}</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.9rem",
                      color: roi > 0 ? "var(--green)" : "var(--text-muted)",
                    }}
                  >
                    {roi > 0 ? t.roiPositive(roiMultiple) : t.roiNeutral}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.08em",
                      color: "var(--text-dim)",
                    }}
                  >
                    {roi > 0
                      ? t.roiNetPositive(roi.toLocaleString("en-US"))
                      : t.roiNetNeutral}
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "28px 32px",
                boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: 20,
                }}
              >
                {t.breakdownHeading}
              </div>

              {[
                {
                  label: t.breakdownRevLabel,
                  value: revenueRecovered,
                  sub: t.breakdownRevSub(recoveredClients, avgValue.toLocaleString("en-US")),
                  color: "var(--gold)",
                },
                {
                  label: t.breakdownTimeLabel,
                  value: timeSaved,
                  sub: t.breakdownTimeSub(hoursSaved, hourlyRate),
                  color: "var(--gold-bright)",
                },
                {
                  label: t.breakdownPlanLabel,
                  value: -plan,
                  sub: t.breakdownPlanSub(planName),
                  color: "var(--text-dim)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: 14,
                    marginBottom: 14,
                    borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.83rem",
                        color: "var(--text-muted)",
                        marginBottom: 2,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.06em",
                        color: "var(--text-dim)",
                      }}
                    >
                      {item.sub}
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.05rem",
                      color: item.value < 0 ? "var(--text-dim)" : item.color,
                    }}
                  >
                    {item.value < 0 ? "-" : "+"}$
                    {Math.abs(item.value).toLocaleString("en-US")}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "24px 32px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
              }}
            >
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginBottom: 14,
                  lineHeight: 1.6,
                }}
              >
                {t.ctaDesc}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  padding: "14px",
                  background: "var(--orange)",
                  color: "white",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  borderRadius: 8,
                  transition: "all 0.2s",
                  boxShadow: "0 4px 16px rgba(13,27,42,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--orange-hover)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(212,165,58,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--orange)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(13,27,42,0.2)";
                }}
              >
                {t.ctaBtn}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
  tooltip,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  tooltip: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ marginBottom: 28 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <label
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
          title={tooltip}
        >
          {label}
        </label>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "0.95rem",
            color: "var(--text)",
            minWidth: 80,
            textAlign: "right",
          }}
        >
          {display}
        </span>
      </div>
      <div style={{ position: "relative" }}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            width: "100%",
            appearance: "none",
            height: 4,
            background: `linear-gradient(to right, var(--gold) ${pct}%, var(--border2) ${pct}%)`,
            outline: "none",
            cursor: "pointer",
          }}
        />
      </div>
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--gold);
          cursor: pointer;
          border: 2px solid #FFFFFF;
          box-shadow: 0 0 0 2px var(--gold);
          transition: transform 0.2s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.25);
        }
        input[type=range]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--gold);
          cursor: pointer;
          border: 2px solid #FFFFFF;
        }
      `}</style>
    </div>
  );
}
