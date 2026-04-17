"use client";
import dynamic from "next/dynamic";

// Skip SSR — DashboardsContent uses framer-motion + IntersectionObserver
// which produce hydration mismatches when server-rendered.
const DashboardsContent = dynamic(() => import("./DashboardsContent"), {
  ssr: false,
});

export default function DashboardsClient() {
  return <DashboardsContent />;
}
