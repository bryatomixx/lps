"use client";
import { CSSProperties } from "react";

interface ShinyTextProps {
  text: string;
  speed?: number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Hex or CSS value for the left/right gradient stop */
  fromColor?: string;
  /** Hex or CSS value for the mid gradient stop */
  toColor?: string;
}

export default function ShinyText({
  text,
  speed = 3.5,
  disabled = false,
  className,
  style,
  fromColor = "#1A5CA8",
  toColor = "#D4A53A",
}: ShinyTextProps) {
  return (
    <span
      className={`shiny-text${disabled ? " shiny-text--off" : ""} ${className ?? ""}`.trim()}
      style={
        {
          "--st-speed": `${speed}s`,
          "--st-from": fromColor,
          "--st-to": toColor,
          ...style,
        } as CSSProperties
      }
    >
      {text}
    </span>
  );
}
