"use client";
import { CSSProperties } from "react";

interface GradientTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  speed?: number;
  /** First gradient color (hex/CSS) */
  from?: string;
  /** Middle gradient color (hex/CSS) */
  mid?: string;
  /** Second gradient color (hex/CSS) */
  to?: string;
}

export default function GradientText({
  text,
  className,
  style,
  speed = 4,
  from = "#1A5CA8",
  mid = "#D4A53A",
  to = "#2B7FE0",
}: GradientTextProps) {
  return (
    <span
      className={`gradient-text ${className ?? ""}`.trim()}
      style={
        {
          "--gt-speed": `${speed}s`,
          "--gt-from": from,
          "--gt-mid": mid,
          "--gt-to": to,
          ...style,
        } as CSSProperties
      }
    >
      {text}
    </span>
  );
}
