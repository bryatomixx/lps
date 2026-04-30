import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StarterPage from "@/components/StarterPage";

export const metadata: Metadata = {
  title: "Sistema Starter de IA — $497/mes | Latin Prime Systems",
  description:
    "Tu primer sistema real para tu negocio: CRM configurado, automatizaciones corriendo y un sitio web capturando leads — en vivo en 7–14 días. Diseñado para operadores independientes y equipos pequeños que aún hacen todo manual.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/es/starter",
    languages: {
      en: "https://latinprimesystems.com/starter",
      es: "https://latinprimesystems.com/es/starter",
      "x-default": "https://latinprimesystems.com/starter",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/starter",
    siteName: "Latin Prime Systems",
    title: "Sistema Starter de IA — $497/mes | Latin Prime Systems",
    description:
      "Deja de perder leads por llamadas perdidas y seguimientos lentos. El Sistema Starter es tu primera infraestructura real — CRM, automatizaciones y sitio web. En vivo en 7–14 días.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — Sistema Starter de IA",
      },
    ],
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@latinprimesys",
    title: "Sistema Starter de IA — $497/mes | Latin Prime Systems",
    description:
      "Tu primera infraestructura real: CRM, automatizaciones, sitio web. En vivo en 7–14 días. Garantía ROI 90 días.",
  },
};

export default function StarterPlanPageEs() {
  return (
    <>
      <Nav lang="es" />
      <StarterPage lang="es" />
      <Footer lang="es" />
    </>
  );
}
