import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TierPlaceholder from "@/components/TierPlaceholder";

export const metadata: Metadata = {
  title: "Pulso — $997/mo Growth Plan | Latin Prime Systems",
  description:
    "Voice 500 min/mo, chatbot 2,500 conv/mo, 5 CRM users, email marketing, biweekly call. The growth tier for Hispanic businesses already getting leads — bilingual specialist included.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/pulso",
    languages: {
      en: "https://latinprimesystems.com/pulso",
      es: "https://latinprimesystems.com/es/pulso",
      "x-default": "https://latinprimesystems.com/pulso",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/pulso",
    siteName: "Latin Prime Systems",
    title: "Pulso — $997/mo Growth Plan | Latin Prime Systems",
    description:
      "When your system starts to take rhythm — voice agent expanded, chatbot expanded, multi-user CRM, email marketing, biweekly strategy calls. All in Spanish or English.",
  },
};

// TODO (Alex): Replace TierPlaceholder with full PulsoPage component built from
// docs/previews/pulso-landing-es.html (~720 lines of HTML/CSS to port).
// Use StarterPage.tsx as the structural reference.

export default function PulsoPlanPage() {
  return (
    <>
      <Nav />
      <TierPlaceholder lang="en" tier="pulso" />
      <Footer />
    </>
  );
}
