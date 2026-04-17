"use client";
import dynamic from "next/dynamic";

// Skip SSR — DashboardsPage uses framer-motion + IntersectionObserver
// which produce hydration mismatches when server-rendered.
// The page's SEO metadata lives in the parent server component (page.tsx).
const DashboardsPage = dynamic(() => import("@/app/dashboards/page"), {
  ssr: false,
});

export default function DashboardsClient() {
  return <DashboardsPage lang="es" />;
}
