"use client";
import { useState } from "react";
import SectionReveal from "../SectionReveal";

const WEBHOOK_URL =
  "https://latinprimesystems.app.n8n.cloud/webhook/05355d0d-cce9-4f2a-94a4-174498a2b75e";

interface Feature {
  id: string;
  label: string;
  description: string;
  category: string;
}

const features: Feature[] = [
  // Core
  { id: "website", label: "Sitio Web Profesional", description: "Diseñado y conectado al CRM, en línea en 7 días", category: "Core" },
  { id: "crm", label: "Configuración de CRM", description: "Pipelines, contactos y seguimiento de prospectos configurados", category: "Core" },
  { id: "booking", label: "Sistema de Reservas en Línea", description: "Los clientes se agendan solos — sin ir y venir", category: "Core" },
  { id: "google_profile", label: "Perfil de Google Business", description: "Configuración + optimización para aparecer antes que la competencia", category: "Core" },
  // Automation
  { id: "follow_up", label: "Seguimiento por Email + SMS", description: "Secuencias automáticas que persiguen prospectos por ti", category: "Automation" },
  { id: "welcome_seq", label: "Secuencia de Bienvenida", description: "Cada nuevo prospecto recibe tu mensaje en minutos", category: "Automation" },
  { id: "custom_automation", label: "Automatización Personalizada", description: "Construimos 1 automatización alrededor de tu principal cuello de botella", category: "Automation" },
  { id: "nurturing", label: "Pipeline de Ventas + Nutrición de Prospectos", description: "Prospectos fríos calentados automáticamente hasta que estén listos", category: "Automation" },
  { id: "reactivation", label: "Reactivación de Clientes Inactivos", description: "Recupera ingresos dormidos en tu base de datos existente", category: "Automation" },
  { id: "calendar_reminders", label: "Recordatorios + Prevención de Ausencias", description: "Recordatorios automáticos que reducen drásticamente las ausencias", category: "Automation" },
  // Multichannel
  { id: "ai_chat", label: "Widget de Chat con IA", description: "Captura y califica prospectos en tu sitio web 24/7", category: "Multichannel" },
  { id: "whatsapp", label: "API de WhatsApp Business", description: "Llega a los clientes donde realmente responden", category: "Multichannel" },
  { id: "facebook_ads", label: "Anuncios de Facebook → CRM", description: "Cada prospecto de FB/IG entra a tu pipeline automáticamente", category: "Multichannel" },
  { id: "instagram_dms", label: "DMs Automatizados en Instagram", description: "Convierte comentarios y mensajes en prospectos calificados", category: "Multichannel" },
  { id: "sales_funnel", label: "Embudo de Ventas Completo", description: "Landing page, formulario, seguimiento — todo conectado", category: "Multichannel" },
  // AI & Content
  { id: "ai_voice", label: "Agente de Voz con IA", description: "Contesta llamadas 24/7, califica prospectos y agenda citas", category: "AI" },
  { id: "ai_emails", label: "Emails de Ventas Generados con IA", description: "Secuencias de conversión redactadas y enviadas automáticamente", category: "AI" },
  // Revenue
  { id: "reputation", label: "Gestión de Reputación", description: "Solicitudes automáticas de reseñas — domina las calificaciones de Google", category: "Revenue" },
  { id: "stripe", label: "Integración de Pagos con Stripe", description: "Cobra depósitos y pagos desde el mismo sistema", category: "Revenue" },
];

const categories = ["Core", "Automation", "Multichannel", "AI", "Revenue"];

const categoryLabels: Record<string, string> = {
  Core: "Configuración Base",
  Automation: "Automatización",
  Multichannel: "Multicanal",
  AI: "Funciones con IA",
  Revenue: "Ingresos y Reputación",
};

type Status = "idle" | "sending" | "success" | "error";

export default function AlaCartePricing() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [form, setForm] = useState({ name: "", email: "", business: "" });
  const [status, setStatus] = useState<Status>("idle");

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedFeatures = features.filter((f) => selected.has(f.id));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || selected.size === 0) return;
    setStatus("sending");

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          business: form.business,
          selected_features: selectedFeatures.map((f) => f.label).join(", "),
          feature_count: selected.size,
          source: "latinprimesystems.com — à la carte",
          submitted_at: new Date().toISOString(),
        }),
      });
      setStatus("success");
      setSelected(new Set());
      setForm({ name: "", email: "", business: "" });
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="a-la-carte"
      className="section-wrap"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <SectionReveal>
          <div className="slabel">Arma Tu Paquete</div>
          <h2
            className="section-title"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
          >
            ¿No Necesitas Todo?{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, var(--blue), var(--gold))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elige Lo Que Necesitas.
            </em>
          </h2>
          <p className="section-desc">
            Selecciona las funciones que se adapten a tu situación exacta. Revisaremos tu
            selección y te enviaremos una cotización personalizada — sin necesidad de una llamada de ventas.
          </p>
        </SectionReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 32,
            alignItems: "start",
          }}
          className="alacarte-grid"
        >
          {/* Selector de funciones */}
          <SectionReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {categories.map((cat) => (
                <div key={cat}>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                      marginBottom: 12,
                    }}
                  >
                    {categoryLabels[cat]}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                      gap: 8,
                    }}
                  >
                    {features
                      .filter((f) => f.category === cat)
                      .map((feat) => {
                        const isOn = selected.has(feat.id);
                        return (
                          <button
                            key={feat.id}
                            onClick={() => toggle(feat.id)}
                            style={{
                              background: isOn
                                ? "rgba(26,127,212,0.12)"
                                : "var(--surface2)",
                              border: isOn
                                ? "1px solid rgba(26,127,212,0.5)"
                                : "1px solid var(--border)",
                              padding: "14px 16px",
                              cursor: "pointer",
                              textAlign: "left",
                              transition: "all 0.18s",
                            }}
                            onMouseEnter={(e) => {
                              if (!isOn)
                                (e.currentTarget as HTMLElement).style.borderColor =
                                  "rgba(26,127,212,0.3)";
                            }}
                            onMouseLeave={(e) => {
                              if (!isOn)
                                (e.currentTarget as HTMLElement).style.borderColor =
                                  "var(--border)";
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                marginBottom: 4,
                              }}
                            >
                              <span
                                style={{
                                  width: 16,
                                  height: 16,
                                  border: isOn
                                    ? "none"
                                    : "1px solid var(--border2)",
                                  background: isOn ? "var(--blue)" : "transparent",
                                  flexShrink: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "0.6rem",
                                  color: "white",
                                  transition: "all 0.18s",
                                }}
                              >
                                {isOn ? "✓" : ""}
                              </span>
                              <span
                                style={{
                                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                                  fontWeight: 700,
                                  fontSize: "0.82rem",
                                  color: isOn ? "var(--blue)" : "var(--text)",
                                  transition: "color 0.18s",
                                }}
                              >
                                {feat.label}
                              </span>
                            </div>
                            <p
                              style={{
                                fontSize: "0.75rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.5,
                                margin: 0,
                                paddingLeft: 24,
                              }}
                            >
                              {feat.description}
                            </p>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Resumen + formulario */}
          <SectionReveal delay={0.15}>
            <div
              style={{
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                padding: "28px 24px",
                position: "sticky",
                top: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                  marginBottom: 16,
                }}
              >
                Tu Selección
              </div>

              {selected.size === 0 ? (
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-dim)",
                    lineHeight: 1.6,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  Selecciona las funciones que necesitas a la izquierda.
                </p>
              ) : (
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    marginBottom: 20,
                    listStyle: "none",
                  }}
                >
                  {selectedFeatures.map((f) => (
                    <li
                      key={f.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        {f.label}
                      </span>
                      <button
                        onClick={() => toggle(f.id)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--text-dim)",
                          fontSize: "0.7rem",
                          padding: "2px 4px",
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#e74c3c")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--text-dim)")
                        }
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {selected.size > 0 && (
                <div
                  style={{
                    padding: "10px 14px",
                    background: "rgba(26,127,212,0.08)",
                    border: "1px solid rgba(26,127,212,0.2)",
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.08em",
                      color: "var(--blue)",
                    }}
                  >
                    {selected.size} {selected.size !== 1 ? "funciones seleccionadas" : "función seleccionada"}
                    — te enviaremos una cotización personalizada
                  </span>
                </div>
              )}

              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {(["name", "email", "business"] as const).map((field) => (
                  <div key={field}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-dim)",
                        marginBottom: 6,
                      }}
                    >
                      {field === "name"
                        ? "Tu nombre"
                        : field === "email"
                        ? "Correo electrónico"
                        : "Tipo de negocio"}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={form[field]}
                      onChange={(e) =>
                        setForm({ ...form, [field]: e.target.value })
                      }
                      placeholder={
                        field === "business" ? "Ej. Agencia de Seguros" : ""
                      }
                      required={field !== "business"}
                      style={{
                        width: "100%",
                        background: "var(--surface)",
                        border: "1px solid var(--border2)",
                        color: "var(--text)",
                        padding: "10px 12px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.83rem",
                        outline: "none",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(26,127,212,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor = "var(--border2)")
                      }
                    />
                  </div>
                ))}

                <button
                  onClick={handleSubmit}
                  disabled={
                    selected.size === 0 ||
                    !form.name ||
                    !form.email ||
                    status === "sending" ||
                    status === "success"
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    background:
                      selected.size === 0 || !form.name || !form.email
                        ? "var(--surface)"
                        : status === "success"
                        ? "linear-gradient(135deg, #00a854, #007a3d)"
                        : status === "error"
                        ? "linear-gradient(135deg, #c0392b, #922b21)"
                        : "var(--blue)",
                    border:
                      selected.size === 0 || !form.name || !form.email
                        ? "1px solid var(--border)"
                        : "none",
                    color:
                      selected.size === 0 || !form.name || !form.email
                        ? "var(--text-dim)"
                        : "white",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor:
                      selected.size === 0 ||
                      !form.name ||
                      !form.email ||
                      status === "sending" ||
                      status === "success"
                        ? "not-allowed"
                        : "pointer",
                    transition: "all 0.2s",
                    opacity: status === "sending" ? 0.7 : 1,
                    marginTop: 4,
                  }}
                >
                  {status === "idle" && "Enviar Mi Selección →"}
                  {status === "sending" && "Enviando..."}
                  {status === "success" && "✓ Enviado — Nos pondremos en contacto"}
                  {status === "error" && "Error — Intenta de nuevo"}
                </button>

                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--text-dim)",
                    lineHeight: 1.55,
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Respondemos en 24h con una cotización personalizada. Sin ningún compromiso.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .alacarte-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
