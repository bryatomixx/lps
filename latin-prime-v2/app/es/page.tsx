import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AutomationQuiz from "@/components/AutomationQuiz";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import WhoWeServe from "@/components/WhoWeServe";
import TechStack from "@/components/TechStack";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import Compare from "@/components/Compare";
import CommandCenter from "@/components/CommandCenter";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InternalDiagnostic from "@/components/InternalDiagnostic";

export const metadata = {
  title: "Agencia de Automatización con IA para Negocios | Latin Prime Systems",
  description:
    "Sistemas de IA listos para usar: agentes de voz que responden llamadas 24/7, automatizaciones que hacen seguimiento a cada lead, y software personalizado que opera tu negocio. En vivo en 7–30 días. Garantía de ROI de 90 días.",
  keywords: [
    "automatización IA negocios",
    "agencia automatización inteligencia artificial",
    "agente de voz IA para negocios",
    "sistema CRM automatizado",
    "automatización para seguros",
    "automatización para bienes raíces",
    "automatización para clínicas",
    "IA para pequeños negocios",
    "Latin Prime Systems",
    "sistema de automatización para negocios latinos",
    "dejar de perder llamadas",
    "escalar negocio sin contratar",
    "seguimiento automático de leads",
    "command center para negocios",
    "dashboard IA para negocios",
  ],
  alternates: {
    canonical: "https://latinprimesystems.com/es",
    languages: {
      en: "https://latinprimesystems.com",
      es: "https://latinprimesystems.com/es",
      "x-default": "https://latinprimesystems.com",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es",
    siteName: "Latin Prime Systems",
    title:
      "Para de Perder Leads. Tu Negocio en Piloto Automático. | Latin Prime Systems",
    description:
      "Agentes de voz IA responden cada llamada. Las automatizaciones hacen seguimiento a cada lead. Software personalizado opera tu negocio. Sistemas listos en 7–30 días. Garantía de ROI de 90 días.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — Agencia de Automatización con IA",
        type: "image/webp",
      },
    ],
    locale: "es_MX",
  },
  robots: { index: true, follow: true },
};

export default function HomeEs() {
  return (
    <>
      <Nav lang="es" />
      <main>
        {/* 1. Hero */}
        <Hero lang="es" />
        <div className="gdiv" />

        {/* 2. Problem */}
        <Problem lang="es" />
        <div className="gdiv" />

        {/* 3. Quiz interactivo */}
        <AutomationQuiz lang="es" />
        <div className="gdiv" />

        {/* 4. How It Works */}
        <Process lang="es" />
        <div className="gdiv" />

        {/* 5. Soluciones */}
        <Solutions lang="es" />
        <div className="gdiv" />

        {/* 6. Who We Serve */}
        <WhoWeServe lang="es" />
        <div className="gdiv" />

        {/* 7. Tech Stack */}
        <TechStack lang="es" />
        <div className="gdiv" />

        {/* 8. ROI Calculator */}
        <ROICalculator lang="es" />
        <div className="gdiv" />

        {/* 9. Testimonios */}
        <Testimonials lang="es" />
        <div className="gdiv" />

        {/* 10. Antes vs Después */}
        <Compare lang="es" />
        <div className="gdiv" />

        {/* 11. Command Center */}
        <CommandCenter lang="es" />
        <div className="gdiv" />

        {/* 12. Pricing */}
        <Pricing lang="es" />

        {/* 13. FAQ */}
        <FAQ lang="es" />
        <div className="gdiv" />

        {/* 14. About */}
        <About lang="es" />
        <div className="gdiv" />

        {/* 15. CTA final */}
        <CTA lang="es" />
        <div className="gdiv" />

        {/* 16. Contacto */}
        <Contact lang="es" />
      </main>
      <Footer lang="es" />
      <InternalDiagnostic />
    </>
  );
}
