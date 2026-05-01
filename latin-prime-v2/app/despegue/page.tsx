import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DespegueSection from "@/components/DespegueSection";

export const metadata: Metadata = {
  title: "Despegue — Entry Plan $297/mo | Latin Prime Systems",
  description:
    "Bilingual platform access with onboarding and monthly group office hours. The right starting point for Hispanic operators learning the system before scaling to a full build. No setup, month-to-month.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/despegue",
    languages: {
      en: "https://latinprimesystems.com/despegue",
      es: "https://latinprimesystems.com/es/despegue",
      "x-default": "https://latinprimesystems.com/despegue",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/despegue",
    siteName: "Latin Prime Systems",
    title: "Despegue — Entry Plan $297/mo | Latin Prime Systems",
    description:
      "Platform + bilingual onboarding + monthly group office hours. Designed so Hispanic operators learn the system without canceling. When you grow, upgrade to Núcleo without paying setup again.",
  },
};

export default function DespeguePlanPage() {
  return (
    <>
      <Nav />
      <main className="bg-white py-16">
        <DespegueSection lang="en" hideDivider />
      </main>
      <Footer />
    </>
  );
}
