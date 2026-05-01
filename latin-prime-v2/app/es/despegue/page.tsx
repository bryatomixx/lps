import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DespegueSection from "@/components/DespegueSection";

export const metadata: Metadata = {
  title: "Despegue — Plan de entrada $297/mes | Latin Prime Systems",
  description:
    "Acceso a la plataforma con onboarding bilingüe y office hours grupales mensuales. La puerta de entrada para operadores hispanos que apenas arrancan. Sin setup, mes a mes, soporte en español.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/es/despegue",
    languages: {
      en: "https://latinprimesystems.com/despegue",
      es: "https://latinprimesystems.com/es/despegue",
      "x-default": "https://latinprimesystems.com/despegue",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/despegue",
    siteName: "Latin Prime Systems",
    title: "Despegue — Plan de entrada $297/mes | Latin Prime Systems",
    description:
      "Plataforma + onboarding bilingüe + office hours grupales mensuales. Diseñado para que operadores hispanos aprendan el sistema sin cancelarse. Cuando crezcas, gradúa a Núcleo sin pagar setup de nuevo.",
  },
};

export default function DespeguePlanPageES() {
  return (
    <>
      <Nav />
      <main className="bg-white py-16">
        <DespegueSection lang="es" hideDivider />
      </main>
      <Footer />
    </>
  );
}
