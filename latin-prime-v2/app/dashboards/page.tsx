import type { Metadata } from "next";
import DashboardsClient from "./DashboardsClient";

export const metadata: Metadata = {
  title: "Business Dashboards & Command Center | Latin Prime Systems",
  description:
    "See every KPI that moves your business — revenue, leads, appointments, team performance — on one real-time screen. Essential Dashboard included with Growth. Full Command Center available.",
  keywords: [
    "business dashboard",
    "real-time KPI dashboard",
    "command center for business",
    "AI business intelligence",
    "live business metrics",
    "CRM dashboard",
    "sales dashboard",
    "lead tracking dashboard",
    "Latin Prime Systems dashboard",
    "business analytics dashboard",
    "custom business dashboard",
    "automated reporting dashboard",
  ],
  alternates: {
    canonical: "https://latinprimesystems.com/dashboards",
    languages: {
      en: "https://latinprimesystems.com/dashboards",
      es: "https://latinprimesystems.com/es/dashboards",
      "x-default": "https://latinprimesystems.com/dashboards",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/dashboards",
    siteName: "Latin Prime Systems",
    title: "Your Business. Fully Visible. | Latin Prime Systems Dashboards",
    description:
      "Every number that moves your business — on one screen. Real-time KPIs, pipeline, team performance, and revenue. Essential Dashboard included with Growth. Full Command Center available.",
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@latinprimesys",
    title: "Business Dashboards & Command Center | Latin Prime Systems",
    description:
      "See every KPI that moves your business on one real-time screen. Essential Dashboard included with Growth.",
  },
  robots: { index: true, follow: true },
};

export default function DashboardsPage() {
  return <DashboardsClient />;
}
