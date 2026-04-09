"use client";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  by?: "word" | "char";
}

export default function SplitText({
  text,
  className,
  style,
  delay = 0,
  stagger,
  duration = 0.55,
  once = true,
  by = "word",
}: SplitTextProps) {
  const staggerVal = stagger ?? (by === "char" ? 0.028 : 0.072);

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerVal, delayChildren: delay },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  const segments =
    by === "char" ? text.split("") : text.split(" ").filter(Boolean);

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-40px" }}
      className={className}
      style={{ display: "inline", ...style }}
      aria-label={text}
      suppressHydrationWarning
    >
      {segments.map((seg, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block" }}
        >
          {seg}
          {by === "word" && i < segments.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
