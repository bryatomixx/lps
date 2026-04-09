"use client";
import { ReactNode } from "react";
import { motion, Transition } from "framer-motion";

export type RevealVariant = "up" | "left" | "right" | "scale" | "clip" | "flip";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
  variant?: RevealVariant;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnimState = Record<string, any>;

function getStates(variant: RevealVariant, y: number): { hidden: AnimState; visible: AnimState } {
  switch (variant) {
    case "left":
      return {
        hidden:  { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0   },
      };
    case "right":
      return {
        hidden:  { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0  },
      };
    case "scale":
      return {
        hidden:  { opacity: 0, scale: 0.88 },
        visible: { opacity: 1, scale: 1    },
      };
    case "clip":
      return {
        hidden:  { clipPath: "inset(0 0 100% 0)", opacity: 0 },
        visible: { clipPath: "inset(0 0 0% 0)",   opacity: 1 },
      };
    case "flip":
      return {
        hidden:  { opacity: 0, rotateX: 20, y: 28 },
        visible: { opacity: 1, rotateX: 0,  y: 0  },
      };
    default: // "up"
      return {
        hidden:  { opacity: 0, y },
        visible: { opacity: 1, y: 0 },
      };
  }
}

function getTransition(variant: RevealVariant, delay: number): Transition {
  const sp = (s: number, d: number) => ({ type: "spring" as const, stiffness: s, damping: d, delay });
  switch (variant) {
    case "left":
    case "right":
      return {
        opacity: { duration: 0.4, delay, ease: "easeOut" },
        x:       sp(55, 15),
      };
    case "scale":
      return {
        opacity: { duration: 0.4, delay, ease: "easeOut" },
        scale:   sp(72, 16),
      };
    case "clip":
      return {
        clipPath: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        opacity:  { duration: 0.3, delay },
      };
    case "flip":
      return {
        opacity:  { duration: 0.4, delay, ease: "easeOut" },
        rotateX:  sp(80, 15),
        y:        sp(80, 15),
      };
    default: // "up"
      return {
        opacity: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
        y:       sp(65, 18),
      };
  }
}

export default function SectionReveal({
  children,
  delay = 0,
  className,
  style,
  y = 32,
  variant = "up",
}: Props) {
  const { hidden, visible } = getStates(variant, y);

  const extraStyle: React.CSSProperties =
    variant === "flip"
      ? { perspective: 900, transformStyle: "preserve-3d" }
      : variant === "clip"
      ? { overflow: "hidden" }
      : {};

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={getTransition(variant, delay)}
      className={className}
      style={{ ...extraStyle, ...style }}
    >
      {children}
    </motion.div>
  );
}
