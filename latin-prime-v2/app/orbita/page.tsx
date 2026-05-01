import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TierPlaceholder from "@/components/TierPlaceholder";

export const metadata: Metadata = {
  title: "Órbita — $1,797/mo Scale Plan | Latin Prime Systems",
  description:
    "Voice 700 min/mo, chatbot 6,000 conv/mo, 15 CRM users, SMS broadcasting, dedicated number, A/B testing, biweekly + quarterly strategic calls. The scale tier for Hispanic operations already moving fast.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/orbita",
    languages: {
      en: "https://latinprimesystems.com/orbita",
      es: "https://latinprimesystems.com/es/orbita",
      "x-default": "https://latinprimesystems.com/orbita",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/orbita",
    siteName: "Latin Prime Systems",
    title: "Órbita — $1,797/mo Scale Plan | Latin Prime Systems",
    description:
      "The engine that moves your operation when it starts spinning faster — voice expanded, SMS broadcasting, revenue attribution dashboard, dedicated phone number, A/B testing, bilingual specialist with quarterly strategic reviews.",
  },
};

// TODO (Alex): Replace TierPlaceholder with full OrbitaPage component built from
// docs/previews/orbita-landing-es.html (~706 lines of HTML/CSS to port).
// Use StarterPage.tsx as the structural reference.

export default function OrbitaPlanPage() {
  return (
    <>
      <Nav />
      <TierPlaceholder lang="en" tier="orbita" />
      <Footer />
    </>
  );
}
