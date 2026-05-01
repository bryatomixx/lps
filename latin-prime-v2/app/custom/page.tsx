import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomPage from "@/components/CustomPage";

export const metadata: Metadata = {
  title: "Custom AI Infrastructure & Software | Latin Prime Systems",
  description:
    "When standard plans don't fit, we design and build custom infrastructure around your operation: dashboards, online academies, deep API integrations, AI workflows, internal tools, and custom apps. Quoted per project. Documented SLA. You own everything.",
  keywords: [
    "custom AI infrastructure",
    "custom business software",
    "custom dashboards",
    "online academy platform",
    "custom CRM development",
    "API integration agency",
    "custom AI workflows",
    "RAG implementation",
    "custom client portal",
    "white label software",
    "multi-location software",
    "Latin Prime Systems custom",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://latinprimesystems.com/custom",
    languages: {
      en: "https://latinprimesystems.com/custom",
      es: "https://latinprimesystems.com/es/custom",
      "x-default": "https://latinprimesystems.com/custom",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/custom",
    siteName: "Latin Prime Systems",
    title: "Custom AI Infrastructure & Software | Latin Prime Systems",
    description:
      "Whatever your business needs — dashboards, academies, custom CRM, API integrations, AI workflows — we design, build, and ship it. Weeks not months. You own everything.",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/0EgKTcd9YvsDKkQqklPo/media/691b4d7d013f3138a3825fc0.webp",
        width: 1200,
        height: 630,
        alt: "Latin Prime Systems — Custom AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@latinprimesys",
    title: "Custom AI Infrastructure & Software | Latin Prime Systems",
    description:
      "Custom dashboards, academies, CRMs, API integrations, AI workflows. Weeks not months.",
  },
};

export default function CustomPlanPageEn() {
  return (
    <>
      <Nav />
      <CustomPage />
      <Footer />
    </>
  );
}
