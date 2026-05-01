import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TierPlaceholder from "@/components/TierPlaceholder";

export const metadata: Metadata = {
  title: "Órbita — Plan de Escala $1,797/mes | Latin Prime Systems",
  description:
    "Voice 700 min/mes, chatbot 6,000 conv/mes, 15 usuarios CRM, SMS broadcasting, número dedicado, A/B testing, calls quincenal + estratégica trimestral. El tier de escala para operaciones hispanas en crecimiento serio.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/es/orbita",
    languages: {
      en: "https://latinprimesystems.com/orbita",
      es: "https://latinprimesystems.com/es/orbita",
      "x-default": "https://latinprimesystems.com/orbita",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/orbita",
    siteName: "Latin Prime Systems",
    title: "Órbita — Plan de Escala $1,797/mes | Latin Prime Systems",
    description:
      "El motor que mueve tu operación cuando empieza a girar más rápido — voice ampliado, SMS broadcasting, dashboard de revenue attribution, número dedicado, A/B testing, specialist bilingüe con sesiones estratégicas trimestrales.",
  },
};

// TODO (Alex): Reemplazar TierPlaceholder con OrbitaPage component completo desde
// docs/previews/orbita-landing-es.html. Usar StarterPage.tsx como referencia estructural.

export default function OrbitaPlanPageES() {
  return (
    <>
      <Nav />
      <TierPlaceholder lang="es" tier="orbita" />
      <Footer />
    </>
  );
}
