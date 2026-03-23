"use client";
import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("./SplashCursor"), { ssr: false });

export default function SplashCursorLazy() {
  return (
    <SplashCursor
      TRANSPARENT={true}
      SIM_RESOLUTION={64}
      DYE_RESOLUTION={512}
      DENSITY_DISSIPATION={3}
      VELOCITY_DISSIPATION={2.5}
      SPLAT_RADIUS={0.15}
      SPLAT_FORCE={5000}
      COLOR_UPDATE_SPEED={8}
    />
  );
}
