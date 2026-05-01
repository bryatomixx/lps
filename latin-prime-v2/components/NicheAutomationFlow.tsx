"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { FlowNode } from "@/lib/niches";

const TYPE_COLORS: Record<FlowNode["type"], { bg: string; border: string; dot: string }> = {
  trigger: { bg: "rgba(26,127,212,0.12)", border: "rgba(26,127,212,0.5)", dot: "#1a7fd4" },
  process: { bg: "rgba(124,58,237,0.12)", border: "rgba(124,58,237,0.5)", dot: "#7c3aed" },
  action: { bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.4)", dot: "#22c55e" },
  output: { bg: "rgba(200,148,26,0.12)", border: "rgba(200,148,26,0.5)", dot: "#c8941a" },
};

const TYPE_LABELS: Record<FlowNode["type"], string> = {
  trigger: "TRIGGER",
  process: "AI PROCESS",
  action: "ACTION",
  output: "RESULT",
};

function FlowConnector({ index, inView }: { index: number; inView: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: 52,
        position: "relative",
      }}
    >
      <svg
        width="52"
        height="24"
        viewBox="0 0 52 24"
        style={{ overflow: "visible" }}
      >
        {/* Background track */}
        <line
          x1="2"
          y1="12"
          x2="44"
          y2="12"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
        />
        {/* Animated dashed line */}
        <motion.line
          x1="2"
          y1="12"
          x2="44"
          y2="12"
          stroke="rgba(26,127,212,0.35)"
          strokeWidth="2"
          strokeDasharray="5 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
        />
        {/* Arrowhead */}
        <motion.polygon
          points="42,8 48,12 42,16"
          fill="rgba(26,127,212,0.6)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 + index * 0.15 }}
        />
        {/* Traveling pulse dot */}
        {inView && (
          <motion.circle
            cy="12"
            r="3.5"
            fill="#1a7fd4"
            style={{ filter: "drop-shadow(0 0 4px #1a7fd4)" }}
            animate={{ cx: [2, 44] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 0.6,
              ease: "easeInOut",
              delay: index * 0.25,
            }}
          />
        )}
      </svg>
    </div>
  );
}

function FlowNodeCard({ node, index, inView }: { node: FlowNode; index: number; inView: boolean }) {
  const c = TYPE_COLORS[node.type];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: 10,
        padding: "16px 14px",
        minWidth: 120,
        maxWidth: 150,
        flex: "0 0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        position: "relative",
      }}
    >
      {/* Type badge */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.5rem",
          letterSpacing: "0.14em",
          color: c.dot,
          marginBottom: 2,
        }}
      >
        {TYPE_LABELS[node.type]}
      </div>
      {/* Icon */}
      <div style={{ fontSize: "1.5rem", lineHeight: 1 }}>{node.icon}</div>
      {/* Label */}
      <div
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          color: "var(--text)",
          lineHeight: 1.3,
        }}
      >
        {node.label}
      </div>
      {/* Sublabel */}
      <div
        style={{
          fontSize: "0.68rem",
          color: "var(--text-muted)",
          lineHeight: 1.4,
        }}
      >
        {node.sublabel}
      </div>
      {/* Glowing dot indicator */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: c.dot,
          boxShadow: `0 0 6px ${c.dot}`,
        }}
      />
    </motion.div>
  );
}

interface NicheAutomationFlowProps {
  nodes: FlowNode[];
  title: string;
}

export default function NicheAutomationFlow({ nodes, title }: NicheAutomationFlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      {/* Optional secondary title (skipped when caller renders its own h2) */}
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 20,
          }}
        >
          {title}
        </motion.div>
      )}

      {/* Flow row — scrollable on mobile */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "visible",
          paddingBottom: 8,
          /* hide scrollbar visually */
          scrollbarWidth: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            minWidth: "fit-content",
          }}
        >
          {nodes.map((node, i) => (
            <div key={node.id} style={{ display: "flex", alignItems: "center" }}>
              <FlowNodeCard node={node} index={i} inView={inView} />
              {i < nodes.length - 1 && (
                <FlowConnector index={i} inView={inView} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          display: "flex",
          gap: 16,
          marginTop: 16,
          flexWrap: "wrap",
        }}
      >
        {(Object.keys(TYPE_COLORS) as FlowNode["type"][]).map((type) => (
          <div
            key={type}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: TYPE_COLORS[type].dot,
              }}
            />
            {TYPE_LABELS[type]}
          </div>
        ))}
      </motion.div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
