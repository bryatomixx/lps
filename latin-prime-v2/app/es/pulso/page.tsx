import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TierPlaceholder from "@/components/TierPlaceholder";

export const metadata: Metadata = {
  title: "Pulso — Plan de Crecimiento $997/mes | Latin Prime Systems",
  description:
    "Voice 500 min/mes, chatbot 2,500 conv/mes, 5 usuarios CRM, email marketing, call quincenal. El tier de crecimiento para negocios hispanos con leads ya entrando — specialist bilingüe incluido.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/es/pulso",
    languages: {
      en: "https://latinprimesystems.com/pulso",
      es: "https://latinprimesystems.com/es/pulso",
      "x-default": "https://latinprimesystems.com/pulso",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/pulso",
    siteName: "Latin Prime Systems",
    title: "Pulso — Plan de Crecimiento $997/mes | Latin Prime Systems",
    description:
      "Cuando tu sistema empieza a tomar pulso — voice agent ampliado, chatbot ampliado, multi-usuario CRM, email marketing, calls quincenales. Todo en español o inglés.",
  },
};

// TODO (Alex): Reemplazar TierPlaceholder con PulsoPage component completo desde
// docs/previews/pulso-landing-es.html. Usar StarterPage.tsx como referencia estructural.

export default function PulsoPlanPageES() {
  return (
    <>
      <Nav />
      <TierPlaceholder lang="es" tier="pulso" />
      <Footer />
    </>
  );
}
