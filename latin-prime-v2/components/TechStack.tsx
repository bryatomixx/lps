"use client";
import Image from "next/image";
import SectionReveal from "./SectionReveal";

type Lang = "en" | "es";

const row1 = [
  { src: "https://cdn.brandfetch.io/domain/gohighlevel.com/w/279/h/63/logo?c=1idTXJGonJnc4B8xS2u", alt: "GoHighLevel", w: 120 },
  { src: "https://cdn.brandfetch.io/domain/n8n.io/w/458/h/124/logo?c=1idTXJGonJnc4B8xS2u", alt: "n8n", w: 80 },
  { src: "https://cdn.brandfetch.io/domain/vapi.ai/w/400/h/400/symbol?c=1idTXJGonJnc4B8xS2u", alt: "VAPI", w: 44 },
  { text: "ElevenLabs" },
  { src: "https://cdn.brandfetch.io/domain/heygen.com/w/264/h/264/symbol?c=1idTXJGonJnc4B8xS2u", alt: "HeyGen", w: 44 },
  { src: "https://cdn.brandfetch.io/domain/openai.com/w/800/h/695/logo?c=1idTXJGonJnc4B8xS2u", alt: "OpenAI", w: 100 },
  { src: "https://cdn.brandfetch.io/domain/anthropic.com/w/800/h/90/logo?c=1idTXJGonJnc4B8xS2u", alt: "Anthropic", w: 130 },
  { src: "https://cdn.brandfetch.io/domain/twilio.com/w/800/h/240/logo?c=1idTXJGonJnc4B8xS2u", alt: "Twilio", w: 100 },
  { src: "https://cdn.brandfetch.io/domain/zapier.com/w/800/h/218/logo?c=1idTXJGonJnc4B8xS2u", alt: "Zapier", w: 100 },
  { src: "https://cdn.brandfetch.io/domain/make.com/w/800/h/165/logo?c=1idTXJGonJnc4B8xS2u", alt: "Make", w: 90 },
  { src: "https://cdn.brandfetch.io/domain/airtable.com/w/800/h/174/logo?c=1idTXJGonJnc4B8xS2u", alt: "Airtable", w: 110 },
];

const row2 = [
  { src: "https://cdn.brandfetch.io/domain/stripe.com/w/800/h/380/logo?c=1idTXJGonJnc4B8xS2u", alt: "Stripe", w: 90 },
  { src: "https://cdn.brandfetch.io/domain/google.meet/w/820/h/105/logo?c=1idTXJGonJnc4B8xS2u", alt: "Google Workspace", w: 160 },
  { src: "https://cdn.brandfetch.io/domain/whatsapp.com/w/800/h/800/symbol?c=1idTXJGonJnc4B8xS2u", alt: "WhatsApp", w: 38 },
  { src: "https://cdn.brandfetch.io/domain/facebook.com/w/400/h/400/symbol?c=1idTXJGonJnc4B8xS2u", alt: "Facebook", w: 36 },
  { src: "https://cdn.brandfetch.io/domain/slack.com/w/400/h/400/symbol?c=1idTXJGonJnc4B8xS2u", alt: "Slack", w: 38 },
  { src: "https://cdn.brandfetch.io/domain/hubspot.com/w/800/h/227/logo?c=1idTXJGonJnc4B8xS2u", alt: "HubSpot", w: 110 },
  { src: "https://cdn.brandfetch.io/domain/calendly.com/w/800/h/193/logo?c=1idTXJGonJnc4B8xS2u", alt: "Calendly", w: 110 },
  { src: "https://cdn.brandfetch.io/domain/notion.so/w/400/h/400/symbol?c=1idTXJGonJnc4B8xS2u", alt: "Notion", w: 36 },
  { src: "https://cdn.brandfetch.io/domain/monday.com/w/800/h/146/logo?c=1idTXJGonJnc4B8xS2u", alt: "Monday.com", w: 130 },
];

type LogoItem = { src?: string; alt?: string; w?: number; text?: string };

function LogoTrack({ items, reverse }: { items: LogoItem[]; reverse?: boolean }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div style={{ overflow: "hidden", marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          width: "max-content",
          animation: reverse
            ? "marquee-rev 28s linear infinite"
            : "marquee 28s linear infinite",
        }}
      >
        {tripled.map((item, i) => (
          <div
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 0, flexShrink: 0 }}
          >
            <div
              style={{
                padding: "0 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  width={item.w || 100}
                  height={32}
                  style={{
                    height: 28,
                    width: "auto",
                    maxWidth: item.w,
                    objectFit: "contain",
                    opacity: 0.75,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.75")}
                />
              ) : (
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "rgba(15,34,64,0.45)",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.text}
                </span>
              )}
            </div>
            <span
              style={{
                color: "rgba(180,148,93,0.5)",
                fontSize: "0.5rem",
                flexShrink: 0,
              }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack({ lang }: { lang?: Lang }) {
  const t = {
    en: {
      sectionLabel: "Under the Hood",
      heading: "The Most Powerful Platforms",
      headingEm: "Working for Your Business",
      desc: "Behind every result we deliver is a carefully selected stack of the most powerful enterprise platforms available — connected and configured by our team so you never have to think about them.",
      subLabel: "The same platforms used by enterprise companies worldwide — configured for your business",
    },
    es: {
      sectionLabel: "Bajo el Capó",
      heading: "Las Plataformas Más Poderosas",
      headingEm: "Trabajando para Tu Negocio",
      desc: "Detrás de cada resultado que entregamos hay una selección cuidadosa de las plataformas empresariales más poderosas disponibles — conectadas y configuradas por nuestro equipo para que nunca tengas que pensar en ellas.",
      subLabel: "Las mismas plataformas usadas por empresas líderes en todo el mundo — configuradas para tu negocio",
    },
  }[lang ?? "en"];

  return (
    <section
      id="stack"
      className="section-wrap"
      style={{ background: "var(--surface)", overflow: "hidden" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">{t.sectionLabel}</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", maxWidth: 640 }}
          >
            {t.heading}{" "}
            <em style={{ fontStyle: "italic", background: "linear-gradient(135deg, var(--blue), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{t.headingEm}</em>
          </h2>
          <p className="section-desc">
            {t.desc}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div
            style={{
              textAlign: "center",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              marginBottom: 40,
            }}
          >
            {t.subLabel}
          </div>
        </SectionReveal>
      </div>

      <LogoTrack items={row1} />
      <LogoTrack items={row2} reverse />
    </section>
  );
}
