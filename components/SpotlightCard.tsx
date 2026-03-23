"use client";
import { useRef } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  style = {},
  spotlightColor = "rgba(26,127,212,0.13)",
  onMouseMove,
  onMouseLeave,
  ...rest
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      ref.current.style.setProperty("--sx", `${e.clientX - rect.left}px`);
      ref.current.style.setProperty("--sy", `${e.clientY - rect.top}px`);
      ref.current.style.setProperty("--sc", spotlightColor);
    }
    onMouseMove?.(e);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
    if (ref.current) {
      ref.current.style.setProperty("--sc", "transparent");
    }
    onMouseLeave?.(e);
  }

  return (
    <div
      ref={ref}
      className={`spotlight-card ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </div>
  );
}
