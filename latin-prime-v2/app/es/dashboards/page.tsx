import type { Metadata } from "next";
import DashboardsClient from "./DashboardsClient";

export const metadata: Metadata = {
  title: "Dashboards y Command Center para Negocios | Latin Prime Systems",
  description:
    "Ve en tiempo real tus KPIs, pipeline de leads, rendimiento de equipo e ingresos — todo en un solo Command Center personalizado para tu negocio.",
  alternates: {
    canonical: "https://latinprimesystems.com/es/dashboards",
    languages: {
      en: "https://latinprimesystems.com/dashboards",
      es: "https://latinprimesystems.com/es/dashboards",
    },
  },
  openGraph: {
    type: "website",
    url: "https://latinprimesystems.com/es/dashboards",
    siteName: "Latin Prime Systems",
    title: "Dashboards y Command Center en Tiempo Real | Latin Prime Systems",
    description:
      "Cada cliente de LPS tiene acceso a un Command Center personalizado con KPIs, pipeline, equipo e ingresos — actualizados en tiempo real.",
    locale: "es_MX",
  },
};

export default function EsDashboardsPage() {
  return <DashboardsClient />;
}
