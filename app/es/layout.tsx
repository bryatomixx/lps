import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Latin Prime Systems — Automatización IA y Agentes de Voz para Negocios",
    template: "%s | Latin Prime Systems",
  },
  description:
    "Agencia de automatización IA lista para ti. Agentes de voz IA, sistemas CRM y automatizaciones que capturan cada lead y operan 24/7 — sin contratar. Cualquier industria, cualquier tamaño. Garantía de ROI 90 días.",
  keywords: [
    "agencia automatización IA",
    "CRM para negocios",
    "agente de voz IA",
    "automatización GoHighLevel",
    "automatización flujos de trabajo",
    "seguimiento automático de leads",
    "chatbot IA para negocios",
    "automatización lista para ti",
    "sistema seguimiento automatizado",
    "Latin Prime Systems",
    "automatización IA para seguros",
    "automatización IA para bienes raíces",
    "automatización IA dental",
    "automatización negocios EEUU",
    "automatización IA negocios",
    "agencia automatización IA latinoamerica",
    "agente de voz IA español",
  ],
  authors: [{ name: "Latin Prime Systems" }],
  creator: "Latin Prime Systems",
  publisher: "Latin Prime Systems",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://latinprimesystems.com"),
  alternates: {
    canonical: "/es",
    languages: { "en": "/", "es": "/es" },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es",
    siteName: "Latin Prime Systems",
    title: "Latin Prime Systems — Automatización IA y Agentes de Voz para Negocios",
    description:
      "Automatización IA lista para ti: agentes de voz, CRM, seguimientos automáticos. Cualquier industria, cualquier tamaño. Deja de perder leads. Escala sin contratar. Garantía ROI 90 días.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — Automatización IA para Negocios",
      },
    ],
    locale: "es_LA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latin Prime Systems — Automatización IA y Agentes de Voz para Negocios",
    description:
      "Automatización IA lista para ti: agentes de voz 24/7, seguimientos automáticos, sistemas CRM. Garantía ROI 90 días.",
    images: [
      "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
    ],
  },
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
