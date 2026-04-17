"use client";
import dynamic from "next/dynamic";

// Skip SSR — DashboardsPage uses framer-motion + IntersectionObserver
// which produce hydration mismatches when server-rendered.
// The page's SEO metadata lives in the parent server component (page.tsx).
const DashboardsContent = dynamic(() => import("@/app/dashboards/DashboardsContent"), {
  ssr: false,
});

export default function DashboardsClient() {
  return <DashboardsContent lang="es" />;
}
