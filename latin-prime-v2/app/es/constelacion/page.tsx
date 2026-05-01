import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TierPlaceholder from "@/components/TierPlaceholder";

export const metadata: Metadata = {
  title: "Constelación — Custom Enterprise | Latin Prime Systems",
  description:
    "Infraestructura AI custom para operaciones hispanas multi-ubicación. CSM bilingüe dedicado, arquitectura multi-brand, horas de dev, app móvil branded, academia de agentes. Cliente referencia: NBG Latino.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/es/constelacion",
    languages: {
      en: "https://latinprimesystems.com/constelacion",
      es: "https://latinprimesystems.com/es/constelacion",
      "x-default": "https://latinprimesystems.com/constelacion",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/constelacion",
    siteName: "Latin Prime Systems",
    title: "Constelación — Custom Enterprise | Latin Prime Systems",
    description:
      "Diseñado alrededor de tu operación — no al revés. Para operaciones hispanas multi-ubicación con 25+ empleados que necesitan enterprise infrastructure bilingüe real — no Salesforce en inglés.",
  },
};

// TODO (Alex): Reemplazar TierPlaceholder con ConstelacionPage component completo desde
// docs/previews/constelacion-landing-es.html. Incluye: ICP filter, stack comparison vs
// Salesforce/HubSpot Enterprise, testimonio NBG Latino (logo en /public/nbg-latino-logo.png ·
// Marco Conde, CEO), discovery form, sección 3-pillar commitment, FAQ.
// Usar StarterPage.tsx como referencia estructural.

export default function ConstelacionPlanPageES() {
  return (
    <>
      <Nav />
      <TierPlaceholder lang="es" tier="constelacion" />
      <Footer />
    </>
  );
}
