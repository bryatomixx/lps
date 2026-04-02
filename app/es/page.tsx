import Nav from "@/components/es/Nav";
import Hero from "@/components/es/Hero";
import Problem from "@/components/es/Problem";
import AIEmployee from "@/components/es/AIEmployee";
import ROICalculator from "@/components/es/ROICalculator";
import Testimonials from "@/components/es/Testimonials";
import EmailCapture from "@/components/es/EmailCapture";
import Compare from "@/components/es/Compare";
import Solutions from "@/components/es/Solutions";
import WhoWeServe from "@/components/es/WhoWeServe";
import Process from "@/components/es/Process";
import Pricing from "@/components/es/Pricing";
import FAQ from "@/components/es/FAQ";
import AlaCartePricing from "@/components/es/AlaCartePricing";
import PlanGuide from "@/components/es/PlanGuide";
import TechStack from "@/components/es/TechStack";
import CTA from "@/components/es/CTA";
import BookingSection from "@/components/es/BookingSection";
import Contact from "@/components/es/Contact";
import Footer from "@/components/es/Footer";

export default function HomeES() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero */}
        <Hero />
        <div className="gdiv" />

        {/* 2. Problem */}
        <Problem />
        <div className="gdiv" />

        {/* 3. AI Employee comparison table */}
        <AIEmployee />

        {/* 4. ROI Calculator */}
        <ROICalculator />

        {/* 5. Testimonials — social proof at peak emotional intensity */}
        <Testimonials />
        <div className="gdiv" />

        {/* 6. Mid-funnel email capture */}
        <EmailCapture />
        <div className="gdiv" />

        {/* 7. Before/After compare */}
        <Compare />
        <div className="gdiv" />

        {/* 8. Solutions */}
        <Solutions />
        <div className="gdiv" />

        {/* 9. Industries */}
        <WhoWeServe />
        <div className="gdiv" />

        {/* 10. Process */}
        <Process />
        <div className="gdiv" />

        {/* 11. Pricing */}
        <Pricing />

        {/* 12. FAQ */}
        <FAQ />
        <div className="gdiv" />

        {/* 13. À la carte */}
        <AlaCartePricing />
        <div className="gdiv" />

        {/* 14. Plan guide */}
        <PlanGuide />
        <div className="gdiv" />

        {/* 15. Tech stack */}
        <TechStack />
        <div className="gdiv" />

        {/* 16. Big CTA */}
        <CTA />
        <div className="gdiv" />

        {/* 17. Embedded booking calendar */}
        <BookingSection />
        <div className="gdiv" />

        {/* 18. Contact form */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
