import type { Metadata } from "next";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://latinprimesystems.com/es#webpage",
    url: "https://latinprimesystems.com/es",
    name: "Latin Prime Systems — Automatización IA y Agentes de Voz para Negocios",
    description:
      "Agencia de automatización IA lista para ti. Agentes de voz IA, CRM, seguimientos automáticos y flujos de trabajo que capturan cada lead y operan 24/7 — sin contratar. Garantía de ROI 90 días.",
    inLanguage: "es",
    isPartOf: { "@id": "https://latinprimesystems.com/#website" },
    about: { "@id": "https://latinprimesystems.com/#business" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#hero", "#solutions", "#pricing", "#contact"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://latinprimesystems.com/es#faq",
    inLanguage: "es",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué hace Latin Prime Systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Latin Prime Systems es una agencia de automatización IA lista para ti. Construimos e implementamos agentes de voz IA que atienden llamadas 24/7, sistemas CRM que rastrean cada lead, automatizaciones de flujos de trabajo que eliminan el trabajo manual, y chatbots IA — para que negocios de cualquier tamaño puedan operar, hacer seguimiento y escalar sin contratar más personas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta la automatización IA para un negocio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Latin Prime Systems ofrece cuatro planes: Starter a $497/mes (CRM, widget de chat IA, automatización de seguimiento, sistema de reservas, sitio web), Pro a $997/mes (todo en Starter más automatizaciones ilimitadas, multicanal — WhatsApp, Instagram, Facebook, Stripe, gestión de reputación), Growth a $1,497/mes (todo en Pro más agente de voz IA que atiende llamadas 24/7), y Enterprise con precios personalizados. Todos los planes incluyen una cuota de implementación única y soporte continuo sin contratos a largo plazo.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué industrias trabaja Latin Prime Systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Latin Prime Systems sirve a agencias de seguros, agentes y corredores de bienes raíces, consultorios dentales y de salud, med spas, contratistas y servicios del hogar, firmas de impuestos y contabilidad, restaurantes y negocios locales, coaches y consultores, despachos legales, salones y spas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda en estar activa la automatización IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los sistemas Starter típicamente están activos en 7 a 14 días. Los sistemas Growth con agentes de voz IA tardan 14 a 30 días según la complejidad. Los sistemas Enterprise se definen individualmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Latin Prime Systems requiere contrato a largo plazo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Latin Prime Systems opera con planes mes a mes sin contratos a largo plazo. Puedes cancelar en cualquier momento. Todos los planes están respaldados por una garantía: garantía de ROI 90 días en el plan Growth, garantía de entrega del sistema en 30 días en el plan Starter.",
        },
      },
      {
        "@type": "Question",
        name: "¿Latin Prime Systems trabaja con negocios en América Latina?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Latin Prime Systems atiende activamente a clientes en México, Colombia, Venezuela y otros países de América Latina. Los precios se ajustan para mercados locales a solicitud. Todos los sistemas soportan operación completa en español.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://latinprimesystems.com/es#business",
    name: "Latin Prime Systems",
    description:
      "Latin Prime Systems es una agencia de automatización IA lista para ti, especializada en agentes de voz IA, configuración de CRM, automatización de flujos de trabajo, sistemas de seguimiento automatizado y chatbots IA para negocios de todos los tamaños en Estados Unidos y América Latina.",
    url: "https://latinprimesystems.com/es",
    telephone: "+19714006390",
    email: "contact@latinprimesystems.com",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Mexico" },
      { "@type": "Country", name: "Colombia" },
      { "@type": "Country", name: "Venezuela" },
      { "@type": "Place", name: "Latin America" },
    ],
    inLanguage: "es",
    sameAs: [
      "https://latinprimesystems.com",
      "https://www.linkedin.com/company/latin-prime-systems/",
      "https://www.facebook.com/latinprimesystem",
      "https://www.instagram.com/latinprimesystems",
    ],
  },
];

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
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
