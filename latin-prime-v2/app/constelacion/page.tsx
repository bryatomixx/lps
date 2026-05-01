import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TierPlaceholder from "@/components/TierPlaceholder";

export const metadata: Metadata = {
  title: "Constelación — Custom Enterprise | Latin Prime Systems",
  description:
    "Custom AI infrastructure for Hispanic multi-location operations. Bilingual dedicated CSM, multi-brand architecture, custom dev hours, branded mobile app, agent training academy. Reference client: NBG Latino.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/constelacion",
    languages: {
      en: "https://latinprimesystems.com/constelacion",
      es: "https://latinprimesystems.com/es/constelacion",
      "x-default": "https://latinprimesystems.com/constelacion",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/constelacion",
    siteName: "Latin Prime Systems",
    title: "Constelación — Custom Enterprise | Latin Prime Systems",
    description:
      "Designed around your operation, not the other way. For Hispanic multi-location operators with 25+ employees who need real bilingual enterprise infrastructure — not Salesforce in English.",
  },
};

// TODO (Alex): Replace TierPlaceholder with full ConstelacionPage component built from
// docs/previews/constelacion-landing-es.html (~988 lines of HTML/CSS to port).
// Includes: ICP filter, stack comparison vs Salesforce/HubSpot Enterprise, NBG Latino testimonial
// (logo at /public/nbg-latino-logo.png · Marco Conde, CEO), discovery form,
// 3-pillar commitment section, FAQ. Use StarterPage.tsx as the structural reference.

export default function ConstelacionPlanPage() {
  return (
    <>
      <Nav />
      <TierPlaceholder lang="en" tier="constelacion" />
      <Footer />
    </>
  );
}
