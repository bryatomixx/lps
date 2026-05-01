import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomPage from "@/components/CustomPage";

export const metadata: Metadata = {
  title: "Infraestructura de IA y Software a la Medida | Latin Prime Systems",
  description:
    "Cuando los planes estándar no alcanzan, diseñamos y construimos infraestructura a la medida alrededor de tu operación: dashboards, academias online, integraciones API profundas, flujos de IA, herramientas internas y apps a la medida. Cotizado por proyecto. SLA documentado. Tú eres dueño de todo.",
  keywords: [
    "infraestructura IA personalizada",
    "software a la medida",
    "dashboards personalizados",
    "plataforma de academia online",
    "desarrollo CRM personalizado",
    "agencia integraciones API",
    "flujos IA personalizados",
    "implementación RAG",
    "portal de cliente a la medida",
    "software white label",
    "software multi-ubicación",
    "Latin Prime Systems custom",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/es/custom",
    languages: {
      en: "https://latinprimesystems.com/custom",
      es: "https://latinprimesystems.com/es/custom",
      "x-default": "https://latinprimesystems.com/custom",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/custom",
    siteName: "Latin Prime Systems",
    title: "Infraestructura de IA y Software a la Medida | Latin Prime Systems",
    description:
      "Lo que tu negocio necesite — dashboards, academias, CRMs, integraciones API, flujos de IA — lo diseñamos, construimos y entregamos. Semanas, no meses. Tú eres dueño de todo.",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — Infraestructura de IA a la Medida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@latinprimesys",
    title: "Infraestructura de IA y Software a la Medida | Latin Prime Systems",
    description:
      "Dashboards, academias, CRMs, integraciones API, flujos de IA — a la medida. Semanas, no meses.",
  },
};

export default function CustomPlanPageEs() {
  return (
    <>
      <Nav lang="es" />
      <CustomPage lang="es" />
      <Footer lang="es" />
    </>
  );
}
