import type { Metadata } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "AI Automation Agency for Small Business | Latin Prime Systems",
  description:
    "Done-for-you AI systems: voice agents answer calls 24/7, automations follow up every lead, and custom software runs your business — live in 7–30 days. 90-Day ROI Guarantee.",
  keywords: [
    "AI automation agency",
    "AI automation for small business",
    "done-for-you AI automation",
    "AI voice agent for business",
    "automated lead follow-up",
    "business process automation",
    "CRM for service business",
    "Latin Prime Systems",
    "command center for business",
    "scale business without hiring",
    "stop missing calls small business",
  ],
  alternates: {
    canonical: "https://latinprimesystems.com",
    languages: {
      en: "https://latinprimesystems.com",
      es: "https://latinprimesystems.com/es",
      "x-default": "https://latinprimesystems.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com",
    siteName: "Latin Prime Systems",
    title: "Stop Losing Leads. Your Business on Autopilot. | Latin Prime Systems",
    description:
      "AI voice agents answer every call. Automations follow up every lead. Custom software runs your business. Live in 7–30 days. 90-Day ROI Guarantee.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — AI Automation Agency",
        type: "image/webp",
      },
    ],
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AutomationQuiz from "@/components/AutomationQuiz";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import HowWeThink from "@/components/HowWeThink";
import WhoWeServe from "@/components/WhoWeServe";
import TechStack from "@/components/TechStack";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import Compare from "@/components/Compare";
import CommandCenter from "@/components/CommandCenter";
import Pricing from "@/components/Pricing";
import BilingualBanner from "@/components/BilingualBanner";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InternalDiagnostic from "@/components/InternalDiagnostic";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero — hook inmediato */}
        <Hero />
        <div className="gdiv" />

        {/* 2. Problem — identificación rápida, 4 tarjetas */}
        <Problem />
        <div className="gdiv" />

        {/* 3. Quiz interactivo — primer elemento de acción, captura leads temprano */}
        <AutomationQuiz />
        <div className="gdiv" />

        {/* 4. How It Works — cómo trabaja LPS antes de mostrar qué ofrece */}
        <Process />
        <div className="gdiv" />

        {/* 5. Soluciones — ahora que entienden el proceso, mostramos qué construimos */}
        <Solutions />
        <div className="gdiv" />

        {/* 5b. Before/After — visual transformation */}
        <BeforeAfter />
        <div className="gdiv" />

        {/* 5c. How we think — methodology / strategic positioning */}
        <HowWeThink />
        <div className="gdiv" />

        {/* 6. Who We Serve — segmentación de audiencia */}
        <WhoWeServe />
        <div className="gdiv" />

        {/* 6. Tech Stack */}
        <TechStack />
        <div className="gdiv" />

        {/* 6. ROI Calculator — cuantifica valor antes de mostrar precio */}
        <ROICalculator />
        <div className="gdiv" />

        {/* 7. Testimonios — prueba social antes de precio */}
        <Testimonials />
        <div className="gdiv" />

        {/* 9. Antes vs Después — refuerza la transformación */}
        <Compare />
        <div className="gdiv" />

        {/* 10. Command Center — muestra el dashboard en vivo antes del precio */}
        <CommandCenter />
        <div className="gdiv" />

        {/* 11. Pricing — después de valor + prueba */}
        <Pricing />

        {/* 11b. Bilingual differentiator banner */}
        <BilingualBanner />

        {/* 11c. FAQ — objections right after pricing */}
        <FAQ />
        <div className="gdiv" />

        {/* 12. About — antes del CTA final */}
        <About />
        <div className="gdiv" />

        {/* 13. CTA final */}
        <CTA />
        <div className="gdiv" />

        {/* 14. Contacto */}
        <Contact />
      </main>
      <Footer />
      <InternalDiagnostic />
    </>
  );
}
