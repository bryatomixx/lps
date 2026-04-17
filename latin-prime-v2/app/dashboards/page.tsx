"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import DashMockup from "@/components/DashMockup";
import { t, Lang } from "./t";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

// ─── Animated counter ─────────────────────────────────────────────────────────
function useCounter(target: number, triggered: boolean, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, target, duration]);
  return count;
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function CheckBlue() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7.5" stroke="var(--blue)" strokeOpacity="0.35" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="var(--blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CheckGold() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7.5" stroke="var(--gold)" strokeOpacity="0.45" />
      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Dash() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
      <circle cx="8" cy="8" r="7.5" stroke="var(--border)" />
      <path d="M5 8h6" stroke="var(--border2)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5h9M7 2l4.5 4.5L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Stat card with animated counter ─────────────────────────────────────────
function StatCard({ label, target, suffix = "", color, delay, triggered }: {
  label: string; target: number; suffix?: string;
  color: string; delay: number; triggered: boolean;
}) {
  const count = useCounter(target, triggered);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={triggered ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#fff", border: "1px solid var(--border)",
        borderRadius: 14, padding: "28px 24px",
        position: "relative", overflow: "hidden",
        boxShadow: "0 2px 12px rgba(13,27,42,0.05)",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
      }} />
      <div className="slabel" style={{ marginBottom: 10, fontSize: "0.58rem" }}>{label}</div>
      <div style={{
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        fontSize: "clamp(2rem,3.5vw,2.6rem)", fontWeight: 800,
        color, lineHeight: 1, letterSpacing: "-0.03em",
      }}>
        {count.toLocaleString()}{suffix}
      </div>
    </motion.div>
  );
}

// ─── CRM Mockup (sidebar + arch bars) ────────────────────────────────────────
function CRMMockup() {
  const months = [
    { m: "Nov", v: 62 }, { m: "Dec", v: 74 }, { m: "Jan", v: 68 },
    { m: "Feb", v: 79 }, { m: "Mar", v: 86 }, { m: "Apr", v: 100 },
  ];
  const navItems = ["Dashboard","Analytics","Clients","Calendar","Settings"];
  return (
    <div style={{
      background: "linear-gradient(150deg,#060E1A 0%,#09142A 60%,#050B14 100%)",
      border: "1px solid rgba(43,127,224,0.2)", borderRadius: 18, overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.75)", display: "flex",
    }}>
      {/* Sidebar */}
      <div style={{ width: 134, background: "rgba(0,0,0,0.45)", borderRight: "1px solid rgba(255,255,255,0.04)", padding: "18px 10px", display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }}>
        <div style={{ marginBottom: 18, paddingLeft: 8 }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", color: "#2B7FE0", fontWeight: 700, letterSpacing: "0.12em" }}>LATIN PRIME</div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.48rem", color: "#3A5570", letterSpacing: "0.1em" }}>CRM COMMAND</div>
        </div>
        {navItems.map((label, i) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 10px", borderRadius: 8, background: i === 0 ? "rgba(43,127,224,0.14)" : "transparent", border: i === 0 ? "1px solid rgba(43,127,224,0.18)" : "1px solid transparent" }}>
            <div style={{ width: 6, height: 6, borderRadius: i === 0 ? 2 : "50%", background: i === 0 ? "#2B7FE0" : "#263A52", flexShrink: 0 }} />
            <span style={{ fontSize: "0.67rem", color: i === 0 ? "#E8F0FA" : "#4A6278", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: i === 0 ? 600 : 400 }}>{label}</span>
          </div>
        ))}
        <div style={{ marginTop: "auto", paddingLeft: 8 }}>
          <div style={{ width: "100%", height: 3, background: "rgba(255,255,255,0.05)", borderRadius: 2, marginBottom: 5 }}>
            <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg,#1A5CA8,#2B7FE0)", borderRadius: 2 }} />
          </div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.5rem", color: "#3A5570" }}>72% capacity used</div>
        </div>
      </div>
      {/* Main content */}
      <div style={{ flex: 1, padding: "18px 20px", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#E8F0FA", fontFamily: "'Plus Jakarta Sans',sans-serif", lineHeight: 1.2 }}>Good morning, Owner.</div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", color: "#3A5570", marginTop: 3 }}>Your operation is up <span style={{ color: "#10B981" }}>18%</span> this month — best run yet.</div>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {["Today","Week","Month"].map((f, i) => (
              <div key={f} style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.54rem", letterSpacing: "0.07em", textTransform: "uppercase", padding: "5px 9px", borderRadius: 6, background: i === 2 ? "#2B7FE0" : "rgba(255,255,255,0.04)", color: i === 2 ? "#fff" : "#7A96B2", border: `1px solid ${i === 2 ? "#2B7FE0" : "rgba(255,255,255,0.06)"}` }}>{f}</div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(56,191,255,0.08)", border: "1px solid rgba(56,191,255,0.2)", borderRadius: 20, padding: "5px 11px" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#38BFFF" }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.54rem", color: "#38BFFF" }}>LIVE</span>
            </div>
          </div>
        </div>
        {/* 4 KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 14 }}>
          {[
            { l: "Revenue / Mo", v: "$47,280", d: "+18%", c: "#2B7FE0" },
            { l: "Appts Today",  v: "142",     d: "+23%", c: "#D4A53A" },
            { l: "Show Rate",    v: "84%",      d: "+5%",  c: "#10B981" },
            { l: "Pending Dues", v: "$8,400",   d: "6",    c: "#A78BFA" },
          ].map(k => (
            <div key={k.l} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "11px 12px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${k.c}66,transparent)` }} />
              <div style={{ fontSize: "0.55rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{k.l}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.95rem", fontWeight: 700, color: k.c }}>{k.v}</div>
              <div style={{ fontSize: "0.55rem", color: k.d.startsWith("+") ? "#10B981" : "#7A96B2", marginTop: 3 }}>{k.d}</div>
            </div>
          ))}
        </div>
        {/* Chart + table */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 10 }}>
          {/* Monthly revenue arch bar chart */}
          <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(26,92,168,0.12)", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#E8F0FA" }}>Monthly Revenue</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", color: "#3A5570" }}>6-month trend</div>
              </div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", color: "#D4A53A", fontWeight: 700 }}>↑ +18% vs last month</div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 80 }}>
              {months.map((m, i) => (
                <div key={m.m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
                  <div style={{ width: "80%", height: `${(m.v / 100) * 64}px`, background: i === 5 ? "linear-gradient(180deg,#38BFFF,#2B7FE0)" : i >= 3 ? "rgba(43,127,224,0.45)" : "rgba(43,127,224,0.18)", borderRadius: "999px 999px 0 0", minHeight: 6, transition: "all 0.3s" }} />
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.5rem", color: i === 5 ? "#38BFFF" : "#3A5570" }}>{m.m}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Closer rankings */}
          <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(26,92,168,0.12)", borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#E8F0FA", marginBottom: 12 }}>Closer Rankings</div>
            {[["Ana R.","$18,400","78%","#D4A53A","100%"],["Jorge V.","$14,200","62%","#8FA8C0","77%"],["Luis P.","$9,800","54%","#C87D3E","53%"]].map(([n,rev,conv,c,bar],ri) => (
              <div key={String(n)} style={{ marginBottom: 11 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 4 }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.75rem", color: String(c), fontWeight: 700, width: 16 }}>#{ri+1}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#E8F0FA" }}>{n}</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", color: "#38BFFF" }}>{rev} · {conv} conv.</div>
                  </div>
                </div>
                <div style={{ height: 3, background: "rgba(255,255,255,0.06)", borderRadius: 2 }}>
                  <div style={{ width: String(bar), height: "100%", background: `linear-gradient(90deg,${String(c)},${String(c)}88)`, borderRadius: 2 }} />
                </div>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: "9px 12px", background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: 8 }}>
              <div style={{ fontSize: "0.64rem", color: "#EF4444", fontWeight: 600 }}>3 no-shows without follow-up</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", color: "#3A5570", marginTop: 2 }}>2h ago · assign closer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Social Media Mockup ──────────────────────────────────────────────────────
function SocialMockup() {
  const platforms = [
    { name: "Instagram", handle: "@negociocapital", followers: "32.1K", eng: "5.2%", reach: "89K", c: "#E1306C", border: "rgba(225,48,108,0.28)" },
    { name: "TikTok",    handle: "@negociocapital", followers: "12.4K", eng: "8.1%", reach: "24K", c: "#69C9D0", border: "rgba(105,201,208,0.28)" },
    { name: "YouTube",   handle: "NegocioCapital",  followers: "8.2K",  eng: "3.4%", reach: "41K", c: "#FF4444", border: "rgba(255,68,68,0.2)"   },
    { name: "Facebook",  handle: "Negocio Capital", followers: "3.7K",  eng: "1.8%", reach: "11K", c: "#4A9EFF", border: "rgba(74,158,255,0.28)"  },
  ];
  const weekDays = [
    { d: "Mon", ig: 2, tt: 1, fb: 0 }, { d: "Tue", ig: 1, tt: 2, fb: 1 },
    { d: "Wed", ig: 3, tt: 1, fb: 0 }, { d: "Thu", ig: 1, tt: 3, fb: 2 },
    { d: "Fri", ig: 2, tt: 2, fb: 1 }, { d: "Sat", ig: 1, tt: 1, fb: 0 },
    { d: "Sun", ig: 2, tt: 0, fb: 1 },
  ];
  return (
    <div style={{
      background: "linear-gradient(145deg,#1C0A3A 0%,#0D1650 45%,#06102A 100%)",
      border: "1px solid rgba(168,85,247,0.22)", borderRadius: 18, overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.75)", position: "relative",
    }}>
      <div style={{ position:"absolute", top:"-15%", right:"8%", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(168,85,247,0.14) 0%,transparent 65%)", filter:"blur(60px)", pointerEvents:"none" }} />
      <div style={{ position:"relative", zIndex:1, padding:"20px 24px" }}>
        {/* Header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", fontWeight:700, color:"#A855F7", letterSpacing:"0.14em" }}>LATIN PRIME <span style={{ color:"#C084FC" }}>SOCIAL COMMAND</span></div>
            <div style={{ fontSize:"1rem", fontWeight:800, color:"#F3E8FF", fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:3 }}>Social Media Performance</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.54rem", color:"rgba(192,132,252,0.55)", marginTop:2 }}>4 platforms · Updated now</div>
          </div>
          <div style={{ display:"flex", gap:6, alignItems:"center" }}>
            {["7D","30D","90D"].map((f,i) => (
              <div key={f} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.55rem", padding:"5px 10px", borderRadius:6, background: i===0?"rgba(168,85,247,0.22)":"rgba(255,255,255,0.04)", border:`1px solid ${i===0?"rgba(168,85,247,0.45)":"rgba(255,255,255,0.06)"}`, color: i===0?"#C084FC":"rgba(192,132,252,0.45)" }}>{f}</div>
            ))}
            <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(168,85,247,0.1)", border:"1px solid rgba(168,85,247,0.3)", borderRadius:20, padding:"5px 11px" }}>
              <div style={{ width:6, height:6, borderRadius:"50%", background:"#A855F7" }} />
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.54rem", color:"#C084FC" }}>LIVE</span>
            </div>
          </div>
        </div>
        {/* 4 KPIs */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:14 }}>
          {[
            { l:"Total Followers", v:"56.4K", d:"+2.8K this week",    c:"#A855F7" },
            { l:"Weekly Reach",    v:"165K",  d:"+38% vs last week",  c:"#60A5FA" },
            { l:"Avg Engagement",  v:"4.8%",  d:"Best: TikTok 8.1%",  c:"#F472B6" },
            { l:"Content Posted",  v:"28",    d:"Across 4 platforms",  c:"#34D399" },
          ].map(k => (
            <div key={k.l} style={{ background:"rgba(255,255,255,0.05)", border:`1px solid ${k.c}22`, borderRadius:12, padding:"11px 13px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${k.c}77,transparent)` }} />
              <div style={{ fontSize:"0.53rem", color:"rgba(192,132,252,0.5)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>{k.l}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.95rem", fontWeight:700, color:k.c }}>{k.v}</div>
              <div style={{ fontSize:"0.53rem", color:"rgba(192,132,252,0.55)", marginTop:3 }}>{k.d}</div>
            </div>
          ))}
        </div>
        {/* Main grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 290px", gap:12 }}>
          {/* Platform cards */}
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {platforms.map(p => (
              <div key={p.name} style={{ background:`${p.c}0D`, border:`1px solid ${p.border}`, borderRadius:12, padding:"12px 16px", display:"flex", alignItems:"center", gap:14 }}>
                <div style={{ width:34, height:34, borderRadius:10, background:`${p.c}18`, border:`1px solid ${p.border}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <div style={{ width:10, height:10, borderRadius:"50%", background:p.c }} />
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"0.75rem", fontWeight:700, color:"#F3E8FF", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.name}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.53rem", color:"rgba(192,132,252,0.45)", marginTop:1 }}>{p.handle}</div>
                </div>
                {[{ v:p.followers, l:"followers" },{ v:p.eng, l:"engagement" },{ v:p.reach, l:"reach" }].map((stat,si) => (
                  <div key={si} style={{ textAlign:"right", minWidth:48 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.78rem", fontWeight:700, color: si===0?p.c:si===1?"#34D399":"#60A5FA" }}>{stat.v}</div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"rgba(192,132,252,0.45)" }}>{stat.l}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Right col */}
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {/* Weekly posts arch bar chart */}
            <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(168,85,247,0.15)", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#F3E8FF", marginBottom:3 }}>Posts This Week</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.52rem", color:"rgba(192,132,252,0.45)", marginBottom:12 }}>by platform per day</div>
              <div style={{ display:"flex", alignItems:"flex-end", gap:5, height:58 }}>
                {weekDays.map(w => {
                  const total = w.ig + w.tt + w.fb;
                  return (
                    <div key={w.d} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                      <div style={{ width:"90%", display:"flex", flexDirection:"column-reverse", gap:1 }}>
                        {w.fb>0&&<div style={{ height:`${(w.fb/4)*38}px`, background:"#4A9EFF", borderRadius: w.ig===0&&w.tt===0?"999px 999px 0 0":"0", minHeight:5 }} />}
                        {w.tt>0&&<div style={{ height:`${(w.tt/4)*38}px`, background:"#69C9D0", borderRadius: w.ig===0?"999px 999px 0 0":"0", minHeight:5 }} />}
                        {w.ig>0&&<div style={{ height:`${(w.ig/4)*38}px`, background:"#E1306C", borderRadius:"999px 999px 0 0", minHeight:5 }} />}
                      </div>
                      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.46rem", color:"rgba(192,132,252,0.4)" }}>{w.d}</span>
                    </div>
                  );
                })}
              </div>
              <div style={{ display:"flex", gap:10, marginTop:8 }}>
                {[["#E1306C","IG"],["#69C9D0","TT"],["#4A9EFF","FB"]].map(([c,l]) => (
                  <div key={String(l)} style={{ display:"flex", alignItems:"center", gap:4 }}>
                    <div style={{ width:6, height:6, borderRadius:2, background:String(c) }} />
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"rgba(192,132,252,0.5)" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Insights */}
            <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(168,85,247,0.15)", borderRadius:12, padding:"14px 16px", flex:1 }}>
              <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#F3E8FF", marginBottom:12 }}>Insights</div>
              {[
                { label:"TikTok leads engagement at 8.1%",   c:"#69C9D0", time:"1h ago"  },
                { label:"Best day to post: Friday–Saturday",  c:"#A855F7", time:"auto"    },
                { label:"IG Reels outperforming Stories 3×",  c:"#E1306C", time:"6h ago"  },
                { label:"FB reach down 12% vs last week",     c:"#F59E0B", time:"today"   },
              ].map((a,i) => (
                <div key={i} style={{ display:"flex", gap:10, padding:"7px 0", borderBottom: i<3?"1px solid rgba(168,85,247,0.07)":"none" }}>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:a.c, marginTop:5, flexShrink:0 }} />
                  <div>
                    <div style={{ fontSize:"0.68rem", color:"rgba(192,132,252,0.75)", lineHeight:1.4 }}>{a.label}</div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.5rem", color:"rgba(192,132,252,0.35)", marginTop:2 }}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Accounting Mockup ────────────────────────────────────────────────────────
function AccountingMockup() {
  const months = [
    { m: "Nov", inc: 68, exp: 29 },
    { m: "Dec", inc: 74, exp: 31 },
    { m: "Jan", inc: 71, exp: 27 },
    { m: "Feb", inc: 79, exp: 33 },
    { m: "Mar", inc: 83, exp: 30 },
    { m: "Apr", inc: 87, exp: 31 },
  ];
  const maxInc = Math.max(...months.map(m => m.inc));
  const transactions = [
    { date: "16 Apr", concept: "Client payment — Growth plan × 3",       cat: "Income",    amount: "+$7,800", c: "#10B981" },
    { date: "15 Apr", concept: "Team payroll — April",                    cat: "Payroll",   amount: "-$14,200", c: "#EF4444" },
    { date: "14 Apr", concept: "Facebook & Google Ads budget",            cat: "Marketing", amount: "-$3,600",  c: "#EF4444" },
    { date: "12 Apr", concept: "Client payment — Command Center setup",   cat: "Income",    amount: "+$10,000", c: "#10B981" },
    { date: "11 Apr", concept: "Software subscriptions",                  cat: "Operations",amount: "-$1,240",  c: "#EF4444" },
    { date: "10 Apr", concept: "Client payment — Starter plan × 5",      cat: "Income",    amount: "+$4,500",  c: "#10B981" },
  ];
  const expenses = [
    { cat: "Payroll",    pct: "45%", w: "100%",  c: "#EF4444" },
    { cat: "Operations", pct: "28%", w: "62%",   c: "#F59E0B" },
    { cat: "Marketing",  pct: "18%", w: "40%",   c: "#2B7FE0" },
    { cat: "Other",      pct: "9%",  w: "20%",   c: "#7A96B2" },
  ];
  return (
    <div style={{ background:"#EEF3FB", border:"1px solid #D0DCF0", borderRadius:18, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.12)", display:"flex" }}>
      {/* Sidebar */}
      <div style={{ width:140, background:"#fff", borderRight:"1px solid #E4EAF4", padding:"18px 10px", display:"flex", flexDirection:"column", gap:2, flexShrink:0 }}>
        <div style={{ marginBottom:16, paddingLeft:8 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#1E3A5F", fontWeight:700, letterSpacing:"0.1em" }}>LATIN PRIME</div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"#94A3B8" }}>FINANCE</div>
        </div>
        {["Dashboard","Income","Expenses","Invoices","Reports"].map((label,i) => (
          <div key={label} style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 10px", borderRadius:8, background:i===0?"#EEF3FB":"transparent", border:i===0?"1px solid #D0DCF0":"1px solid transparent" }}>
            <div style={{ width:6, height:6, borderRadius:i===0?2:"50%", background:i===0?"#1E3A5F":"#CBD5E1", flexShrink:0 }} />
            <span style={{ fontSize:"0.67rem", color:i===0?"#1E3A5F":"#94A3B8", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:i===0?600:400 }}>{label}</span>
          </div>
        ))}
      </div>
      {/* Main */}
      <div style={{ flex:1, padding:"18px 20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#64748B", letterSpacing:"0.1em" }}>LATIN PRIME COMMAND CENTER</div>
            <div style={{ fontSize:"1rem", fontWeight:800, color:"#0F172A", fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:2 }}>Financial Overview</div>
          </div>
          <div style={{ display:"flex", gap:6 }}>
            {["Month","Q1","YTD"].map((f,i) => (
              <div key={f} style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.55rem", padding:"5px 10px", borderRadius:6, background:i===0?"#1E3A5F":"#fff", border:`1px solid ${i===0?"#1E3A5F":"#D0DCF0"}`, color:i===0?"#fff":"#64748B" }}>{f}</div>
            ))}
          </div>
        </div>
        {/* 4 KPIs */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:14 }}>
          {[
            { l:"Revenue", v:"$87,400", d:"+18%", c:"#16A34A", bg:"#F0FDF4", border:"#BBF7D0" },
            { l:"Expenses", v:"$31,200", d:"+4%",  c:"#DC2626", bg:"#FEF2F2", border:"#FECACA" },
            { l:"Net Profit", v:"$56,200", d:"64.3%",c:"#1D4ED8", bg:"#EFF6FF", border:"#BFDBFE" },
            { l:"Invoices Due", v:"$14,800", d:"6 open",c:"#7C3AED", bg:"#F5F3FF", border:"#DDD6FE" },
          ].map(k => (
            <div key={k.l} style={{ background:k.bg, border:`1px solid ${k.border}`, borderRadius:10, padding:"11px 12px" }}>
              <div style={{ fontSize:"0.53rem", color:"#64748B", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>{k.l}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.95rem", fontWeight:700, color:k.c }}>{k.v}</div>
              <div style={{ fontSize:"0.53rem", color:"#64748B", marginTop:3 }}>{k.d}</div>
            </div>
          ))}
        </div>
        {/* Chart + transactions */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 260px", gap:10 }}>
          <div style={{ background:"#fff", border:"1px solid #E4EAF4", borderRadius:12, overflow:"hidden" }}>
            <div style={{ padding:"10px 16px", borderBottom:"1px solid #F1F5F9", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontSize:"0.72rem", fontWeight:700, color:"#0F172A" }}>Recent Transactions</span>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.55rem", color:"#94A3B8" }}>APR 2026</span>
            </div>
            {transactions.map((t,i) => (
              <div key={i} style={{ display:"grid", gridTemplateColumns:"60px 1fr 90px 82px", padding:"9px 16px", alignItems:"center", borderBottom:i<transactions.length-1?"1px solid #F1F5F9":"none" }}>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.58rem", color:"#94A3B8" }}>{t.date}</span>
                <span style={{ fontSize:"0.7rem", color:"#475569", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", paddingRight:8 }}>{t.concept}</span>
                <span style={{ fontSize:"0.58rem", color:"#64748B", background:"#F8FAFC", border:"1px solid #E2E8F0", borderRadius:4, padding:"2px 6px", display:"inline-block" }}>{t.cat}</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", fontWeight:700, color:t.c }}>{t.amount}</span>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            <div style={{ background:"#fff", border:"1px solid #E4EAF4", borderRadius:12, padding:"14px 16px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#0F172A" }}>Income vs Expenses</div>
                <div style={{ display:"flex", gap:8 }}>
                  {[["#16A34A","Income"],["#DC2626","Exp"]].map(([c,l])=>(
                    <div key={String(l)} style={{ display:"flex", alignItems:"center", gap:3 }}>
                      <div style={{ width:6, height:6, borderRadius:2, background:String(c) }} />
                      <span style={{ fontSize:"0.52rem", color:"#94A3B8" }}>{l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display:"flex", alignItems:"flex-end", gap:5, height:70 }}>
                {months.map(m=>(
                  <div key={m.m} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:3 }}>
                    <div style={{ width:"100%", display:"flex", gap:2, alignItems:"flex-end" }}>
                      <div style={{ flex:1, height:`${(m.inc/maxInc)*54}px`, background:"#16A34A", borderRadius:"999px 999px 0 0", minHeight:4, opacity:0.8 }} />
                      <div style={{ flex:1, height:`${(m.exp/maxInc)*54}px`, background:"#DC2626", borderRadius:"999px 999px 0 0", minHeight:4, opacity:0.7 }} />
                    </div>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"#94A3B8" }}>{m.m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:"#fff", border:"1px solid #E4EAF4", borderRadius:12, padding:"14px 16px", flex:1 }}>
              <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#0F172A", marginBottom:12 }}>Expense Breakdown</div>
              {expenses.map(e=>(
                <div key={e.cat} style={{ marginBottom:9 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                    <span style={{ fontSize:"0.67rem", color:"#475569" }}>{e.cat}</span>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:e.c, fontWeight:700 }}>{e.pct}</span>
                  </div>
                  <div style={{ height:4, background:"#F1F5F9", borderRadius:2 }}>
                    <div style={{ width:e.w, height:"100%", background:e.c, borderRadius:2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Real Estate Mockup ───────────────────────────────────────────────────────
function RealEstateMockup() {
  const stages = [
    { label:"Leads",    count:24, c:"#0FCFB0" },
    { label:"Showing",  count:11, c:"#22D3EE" },
    { label:"Offer",    count:6,  c:"#F59E0B" },
    { label:"Closing",  count:3,  c:"#A78BFA" },
    { label:"Sold",     count:8,  c:"#10B981" },
  ];
  const listings = [
    ["1482 Lakeview Dr","$485,000","12d","Martínez","Showing","#22D3EE"],
    ["830 Palm Court","$312,000","5d","García","Offer","#F59E0B"],
    ["2201 Ridge Blvd","$650,000","28d","Reyes","Closing","#A78BFA"],
    ["115 Ocean Ave","$890,000","3d","Martínez","New","#0FCFB0"],
    ["4400 Mesa Way","$275,000","41d","López","Sold","#10B981"],
  ];
  return (
    <div style={{ background:"#07101A", border:"1px solid rgba(15,207,176,0.2)", borderRadius:18, overflow:"hidden", boxShadow:"0 40px 100px rgba(0,0,0,0.75)", display:"flex" }}>
      <div style={{ width:134, background:"rgba(0,0,0,0.45)", borderRight:"1px solid rgba(15,207,176,0.08)", padding:"18px 10px", display:"flex", flexDirection:"column", gap:2, flexShrink:0 }}>
        <div style={{ marginBottom:18, paddingLeft:8 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#0FCFB0", fontWeight:700, letterSpacing:"0.1em" }}>LATIN PRIME</div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"#2D6B5E" }}>REAL ESTATE</div>
        </div>
        {["Dashboard","Listings","Pipeline","Agents","Reports"].map((l,i)=>(
          <div key={l} style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 10px", borderRadius:8, background:i===0?"rgba(15,207,176,0.1)":"transparent", border:i===0?"1px solid rgba(15,207,176,0.2)":"1px solid transparent" }}>
            <div style={{ width:6, height:6, borderRadius:i===0?2:"50%", background:i===0?"#0FCFB0":"#1B3A34", flexShrink:0 }} />
            <span style={{ fontSize:"0.67rem", color:i===0?"#E0FFF9":"#2D6B5E", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:i===0?600:400 }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ flex:1, padding:"18px 20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#0FCFB0", letterSpacing:"0.12em" }}>LATIN PRIME <span style={{ color:"#22D3EE" }}>COMMAND CENTER</span></div>
            <div style={{ fontSize:"1rem", fontWeight:800, color:"#E0FFF9", fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:2 }}>Real Estate Pipeline</div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(15,207,176,0.08)", border:"1px solid rgba(15,207,176,0.25)", borderRadius:20, padding:"5px 11px" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#0FCFB0" }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.54rem", color:"#0FCFB0" }}>LIVE</span>
          </div>
        </div>
        {/* KPIs */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:14 }}>
          {[
            { l:"Active Listings", v:"52",       c:"#0FCFB0" },
            { l:"Pending Closings",v:"9",         c:"#A78BFA" },
            { l:"Revenue / Mo",    v:"$128,400",  c:"#22D3EE" },
            { l:"Avg Days to Close",v:"34d",      c:"#F59E0B" },
          ].map(k=>(
            <div key={k.l} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${k.c}22`, borderRadius:10, padding:"11px 12px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${k.c}66,transparent)` }} />
              <div style={{ fontSize:"0.53rem", color:"rgba(15,207,176,0.4)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>{k.l}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.95rem", fontWeight:700, color:k.c }}>{k.v}</div>
            </div>
          ))}
        </div>
        {/* Pipeline stages */}
        <div style={{ background:"rgba(0,0,0,0.3)", border:"1px solid rgba(15,207,176,0.1)", borderRadius:12, padding:"12px 16px", marginBottom:10 }}>
          <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#E0FFF9", marginBottom:10 }}>Pipeline Stages</div>
          <div style={{ display:"flex", gap:6 }}>
            {stages.map((s,i)=>(
              <div key={s.label} style={{ flex:1, background:`${s.c}10`, border:`1px solid ${s.c}30`, borderRadius:10, padding:"10px 12px" }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"1.1rem", fontWeight:700, color:s.c }}>{s.count}</div>
                <div style={{ fontSize:"0.6rem", color:"rgba(224,255,249,0.5)", marginTop:3 }}>{s.label}</div>
                {i < stages.length-1 && <div style={{ height:3, background:"rgba(255,255,255,0.05)", borderRadius:2, marginTop:8 }}><div style={{ width:`${(s.count/24)*100}%`, height:"100%", background:s.c, borderRadius:2 }} /></div>}
              </div>
            ))}
          </div>
        </div>
        {/* Listings table */}
        <div style={{ background:"rgba(0,0,0,0.3)", border:"1px solid rgba(15,207,176,0.1)", borderRadius:12, overflow:"hidden" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 90px 50px 80px 70px", padding:"7px 14px", background:"rgba(0,0,0,0.3)", borderBottom:"1px solid rgba(15,207,176,0.06)" }}>
            {["Property","Price","Days","Agent","Status"].map(h=><span key={h} style={{ fontSize:"0.55rem", color:"rgba(15,207,176,0.35)", textTransform:"uppercase", letterSpacing:"0.1em" }}>{h}</span>)}
          </div>
          {listings.map(([prop,price,days,agent,status,sc],i)=>(
            <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 90px 50px 80px 70px", padding:"9px 14px", alignItems:"center", borderBottom:i<listings.length-1?"1px solid rgba(255,255,255,0.03)":"none" }}>
              <span style={{ fontSize:"0.7rem", color:"#E0FFF9" }}>{prop}</span>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:"#0FCFB0" }}>{price}</span>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:"rgba(15,207,176,0.4)" }}>{days}</span>
              <span style={{ fontSize:"0.65rem", color:"rgba(224,255,249,0.5)" }}>{agent}</span>
              <span style={{ fontSize:"0.58rem", fontWeight:700, color:String(sc), background:`${String(sc)}14`, border:`1px solid ${String(sc)}22`, borderRadius:4, padding:"2px 6px" }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── E-commerce Mockup ────────────────────────────────────────────────────────
function EcommerceMockup() {
  const revWeek = [42,58,51,74,89,96,68];
  const days    = ["M","T","W","T","F","S","S"];
  const maxRev  = 96;
  const products = [
    ["Pro Sales Course","$297","142","89%","#F97316"],
    ["1:1 Mentorship — 4 Sessions","$850","38","96%","#10B981"],
    ["Ebook: Close Without Objections","$47","310","72%","#F97316"],
    ["Canva Template Pack","$27","521","68%","#60A5FA"],
    ["Premium Community Access","$97","204","81%","#A78BFA"],
  ];
  return (
    <div style={{ background:"#0E0A05", border:"1px solid rgba(249,115,22,0.2)", borderRadius:18, overflow:"hidden", boxShadow:"0 40px 100px rgba(0,0,0,0.75)", display:"flex" }}>
      <div style={{ width:134, background:"rgba(0,0,0,0.5)", borderRight:"1px solid rgba(249,115,22,0.07)", padding:"18px 10px", display:"flex", flexDirection:"column", gap:2, flexShrink:0 }}>
        <div style={{ marginBottom:18, paddingLeft:8 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#F97316", fontWeight:700, letterSpacing:"0.1em" }}>LATIN PRIME</div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"#5A3010" }}>E-COMMERCE</div>
        </div>
        {["Dashboard","Products","Orders","Customers","Analytics"].map((l,i)=>(
          <div key={l} style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 10px", borderRadius:8, background:i===0?"rgba(249,115,22,0.12)":"transparent", border:i===0?"1px solid rgba(249,115,22,0.2)":"1px solid transparent" }}>
            <div style={{ width:6, height:6, borderRadius:i===0?2:"50%", background:i===0?"#F97316":"#3A1F08", flexShrink:0 }} />
            <span style={{ fontSize:"0.67rem", color:i===0?"#FDE8D0":"#5A3010", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:i===0?600:400 }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ flex:1, padding:"18px 20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#F97316", letterSpacing:"0.12em" }}>LATIN PRIME <span style={{ color:"#FB923C" }}>COMMAND CENTER</span></div>
            <div style={{ fontSize:"1rem", fontWeight:800, color:"#FDE8D0", fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:2 }}>Store Performance</div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(249,115,22,0.08)", border:"1px solid rgba(249,115,22,0.25)", borderRadius:20, padding:"5px 11px" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#F97316" }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.54rem", color:"#F97316" }}>LIVE</span>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:14 }}>
          {[
            { l:"Revenue / Mo", v:"$87,400", c:"#F97316" },
            { l:"Orders Today",  v:"47",      c:"#FB923C" },
            { l:"Avg Order",     v:"$183",    c:"#10B981" },
            { l:"Return Rate",   v:"2.1%",    c:"#60A5FA" },
          ].map(k=>(
            <div key={k.l} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${k.c}22`, borderRadius:10, padding:"11px 12px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${k.c}66,transparent)` }} />
              <div style={{ fontSize:"0.53rem", color:"rgba(249,115,22,0.4)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>{k.l}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.95rem", fontWeight:700, color:k.c }}>{k.v}</div>
            </div>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 220px", gap:10 }}>
          <div style={{ background:"rgba(0,0,0,0.35)", border:"1px solid rgba(249,115,22,0.1)", borderRadius:12, overflow:"hidden" }}>
            <div style={{ padding:"10px 14px", borderBottom:"1px solid rgba(249,115,22,0.07)", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontSize:"0.68rem", fontWeight:700, color:"#FDE8D0" }}>Top Products</span>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.55rem", color:"rgba(249,115,22,0.4)" }}>LAST 30 DAYS</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 60px 60px 70px", padding:"6px 14px", background:"rgba(0,0,0,0.3)", borderBottom:"1px solid rgba(249,115,22,0.05)" }}>
              {["Product","Price","Sold","Rating"].map(h=><span key={h} style={{ fontSize:"0.53rem", color:"rgba(249,115,22,0.3)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{h}</span>)}
            </div>
            {products.map(([name,price,sold,rating,c],i)=>(
              <div key={i} style={{ display:"grid", gridTemplateColumns:"1fr 60px 60px 70px", padding:"9px 14px", alignItems:"center", borderBottom:i<products.length-1?"1px solid rgba(255,255,255,0.03)":"none" }}>
                <span style={{ fontSize:"0.68rem", color:"#FDE8D0", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", paddingRight:8 }}>{name}</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:String(c) }}>{price}</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:"rgba(253,232,208,0.6)" }}>{sold}</span>
                <div style={{ height:4, background:"rgba(255,255,255,0.06)", borderRadius:2 }}><div style={{ width:rating, height:"100%", background:String(c), borderRadius:2 }} /></div>
              </div>
            ))}
          </div>
          <div style={{ background:"rgba(0,0,0,0.35)", border:"1px solid rgba(249,115,22,0.1)", borderRadius:12, padding:"14px 16px" }}>
            <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#FDE8D0", marginBottom:4 }}>Revenue This Week</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.52rem", color:"rgba(249,115,22,0.4)", marginBottom:14 }}>daily sales</div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:7, height:80 }}>
              {revWeek.map((v,i)=>(
                <div key={i} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:4 }}>
                  <div style={{ width:"80%", height:`${(v/maxRev)*64}px`, background: i===5?`linear-gradient(180deg,#FDBA74,#F97316)`:`rgba(249,115,22,${0.15+i*0.08})`, borderRadius:"999px 999px 0 0", minHeight:5 }} />
                  <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"rgba(249,115,22,0.35)" }}>{days[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Schools Mockup ───────────────────────────────────────────────────────────
function SchoolsMockup() {
  const grades = [
    { range:"90–100", count:28, label:"A" },
    { range:"80–89",  count:41, label:"B" },
    { range:"70–79",  count:19, label:"C" },
    { range:"60–69",  count:7,  label:"D" },
    { range:"<60",    count:5,  label:"F" },
  ];
  const maxCount = 41;
  const schedule = [
    { time:"08:00", subject:"Math II",  teacher:"Prof. Ramírez", room:"A-204", students:28 },
    { time:"10:00", subject:"U.S. History", teacher:"Prof. Vega",    room:"B-101", students:32 },
    { time:"12:00", subject:"Sciences",         teacher:"Prof. Torres",  room:"Lab-1", students:24 },
    { time:"14:00", subject:"Literature",        teacher:"Prof. Navarro", room:"A-102", students:30 },
  ];
  return (
    <div style={{ background:"#0A0B1E", border:"1px solid rgba(99,102,241,0.22)", borderRadius:18, overflow:"hidden", boxShadow:"0 40px 100px rgba(0,0,0,0.75)", display:"flex" }}>
      <div style={{ width:134, background:"rgba(0,0,0,0.45)", borderRight:"1px solid rgba(99,102,241,0.08)", padding:"18px 10px", display:"flex", flexDirection:"column", gap:2, flexShrink:0 }}>
        <div style={{ marginBottom:18, paddingLeft:8 }}>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#818CF8", fontWeight:700, letterSpacing:"0.1em" }}>LATIN PRIME</div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.48rem", color:"#312E81" }}>EDUCATION</div>
        </div>
        {["Dashboard","Students","Subjects","Attendance","Reports"].map((l,i)=>(
          <div key={l} style={{ display:"flex", alignItems:"center", gap:8, padding:"9px 10px", borderRadius:8, background:i===0?"rgba(99,102,241,0.14)":"transparent", border:i===0?"1px solid rgba(99,102,241,0.2)":"1px solid transparent" }}>
            <div style={{ width:6, height:6, borderRadius:i===0?2:"50%", background:i===0?"#818CF8":"#1E1B4B", flexShrink:0 }} />
            <span style={{ fontSize:"0.67rem", color:i===0?"#E0E7FF":"#312E81", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:i===0?600:400 }}>{l}</span>
          </div>
        ))}
      </div>
      <div style={{ flex:1, padding:"18px 20px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.6rem", color:"#818CF8", letterSpacing:"0.12em" }}>LATIN PRIME <span style={{ color:"#A5B4FC" }}>COMMAND CENTER</span></div>
            <div style={{ fontSize:"1rem", fontWeight:800, color:"#E0E7FF", fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:2 }}>Academic Overview</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.54rem", color:"rgba(129,140,248,0.45)", marginTop:2 }}>Spring Semester Jan–Jun 2026 · 420 students</div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:5, background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.28)", borderRadius:20, padding:"5px 11px" }}>
            <div style={{ width:6, height:6, borderRadius:"50%", background:"#818CF8" }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.54rem", color:"#A5B4FC" }}>LIVE</span>
          </div>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, marginBottom:14 }}>
          {[
            { l:"Avg Grade",      v:"82.4",  d:"+1.2 vs last sem", c:"#818CF8" },
            { l:"Attendance",     v:"91.8%", d:"-0.4% this week",  c:"#34D399" },
            { l:"Students at Risk",v:"12",   d:"below 60 avg",     c:"#F87171" },
            { l:"Honor Roll",     v:"34",    d:"90+ average",      c:"#FBBF24" },
          ].map(k=>(
            <div key={k.l} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${k.c}22`, borderRadius:10, padding:"11px 12px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,transparent,${k.c}66,transparent)` }} />
              <div style={{ fontSize:"0.53rem", color:"rgba(129,140,248,0.45)", textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:6 }}>{k.l}</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.95rem", fontWeight:700, color:k.c }}>{k.v}</div>
              <div style={{ fontSize:"0.53rem", color:"rgba(129,140,248,0.45)", marginTop:3 }}>{k.d}</div>
            </div>
          ))}
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 240px", gap:10 }}>
          {/* Schedule */}
          <div style={{ background:"rgba(0,0,0,0.3)", border:"1px solid rgba(99,102,241,0.1)", borderRadius:12, overflow:"hidden" }}>
            <div style={{ padding:"10px 14px", borderBottom:"1px solid rgba(99,102,241,0.07)", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontSize:"0.68rem", fontWeight:700, color:"#E0E7FF" }}>Class Schedule — Today</span>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.55rem", color:"rgba(129,140,248,0.4)" }}>THU APR 16</span>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"50px 1fr 90px 60px 55px", padding:"6px 14px", background:"rgba(0,0,0,0.25)", borderBottom:"1px solid rgba(99,102,241,0.05)" }}>
              {["Time","Subject","Teacher","Room","Stdnts"].map(h=><span key={h} style={{ fontSize:"0.53rem", color:"rgba(129,140,248,0.35)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{h}</span>)}
            </div>
            {schedule.map((c,i)=>(
              <div key={i} style={{ display:"grid", gridTemplateColumns:"50px 1fr 90px 60px 55px", padding:"10px 14px", alignItems:"center", borderBottom:i<schedule.length-1?"1px solid rgba(99,102,241,0.05)":"none" }}>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:"#818CF8" }}>{c.time}</span>
                <span style={{ fontSize:"0.7rem", color:"#E0E7FF", fontWeight:600 }}>{c.subject}</span>
                <span style={{ fontSize:"0.65rem", color:"rgba(224,231,255,0.5)" }}>{c.teacher}</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.62rem", color:"rgba(129,140,248,0.5)" }}>{c.room}</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.65rem", color:"#A5B4FC" }}>{c.students}</span>
              </div>
            ))}
          </div>
          {/* Grade distribution arch chart */}
          <div style={{ background:"rgba(0,0,0,0.3)", border:"1px solid rgba(99,102,241,0.1)", borderRadius:12, padding:"14px 16px" }}>
            <div style={{ fontSize:"0.68rem", fontWeight:700, color:"#E0E7FF", marginBottom:4 }}>Grade Distribution</div>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.52rem", color:"rgba(129,140,248,0.4)", marginBottom:14 }}>420 students · this semester</div>
            <div style={{ display:"flex", alignItems:"flex-end", gap:7, height:80 }}>
              {grades.map((g,i)=>{
                const colors=["#818CF8","#A5B4FC","#FBBF24","#F97316","#F87171"];
                return (
                  <div key={g.label} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:5 }}>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.52rem", color:colors[i] }}>{g.count}</div>
                    <div style={{ width:"80%", height:`${(g.count/maxCount)*56}px`, background:colors[i], borderRadius:"999px 999px 0 0", minHeight:5, opacity: i===0?1:i===1?0.85:0.65 }} />
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.55rem", color:colors[i], fontWeight:700 }}>{g.label}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop:14, padding:"9px 12px", background:"rgba(248,113,113,0.07)", border:"1px solid rgba(248,113,113,0.15)", borderRadius:8 }}>
              <div style={{ fontSize:"0.64rem", color:"#F87171", fontWeight:600 }}>12 students below passing grade</div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.52rem", color:"rgba(129,140,248,0.4)", marginTop:2 }}>Tutoring sessions recommended</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DashboardsPage({ lang = "en" }: { lang?: Lang }) {
  const copy = t[lang];
  const kpiRef = useRef<HTMLDivElement>(null);
  const [kpiOn, setKpiOn] = useState(false);
  const [dashTab, setDashTab] = useState(0);

  useEffect(() => {
    if (!kpiRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setKpiOn(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(kpiRef.current);
    return () => obs.disconnect();
  }, []);

  // ─── Feature lists (from translations) ───────────────────────────────────
  const initialFeatures = copy.initialFeatures as readonly string[];
  const initialMissing = copy.initialMissing as readonly string[];
  const premiumFeatures = copy.premiumFeatures as readonly string[];

  return (
    <>
      {/* Re-uses the exact same Nav as the main site — logo included */}
      <Nav />

      <main style={{ background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section style={{
          paddingTop: 64,
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "clamp(40px,5vw,80px)",
          padding: "110px clamp(24px,6vw,100px) 80px",
          position: "relative",
          overflow: "hidden",
        }} className="dash-hero">

          {/* Subtle grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(26,92,168,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(26,92,168,0.04) 1px,transparent 1px)",
            backgroundSize: "80px 80px", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "10%", right: "2%",
            width: "38vw", height: "38vw", maxWidth: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(26,92,168,0.07) 0%,transparent 65%)",
            filter: "blur(70px)", pointerEvents: "none",
          }} />

          {/* Left — copy */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="slabel" style={{ marginBottom: 24 }}>
                {copy.heroKicker}
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22,1,0.36,1] }}
              className="section-title"
              style={{ fontSize: "clamp(2.8rem,5.5vw,4.8rem)", marginBottom: 24 }}
            >
              {copy.heroHeadline1}<br />
              <span style={{
                background: "linear-gradient(120deg,var(--blue),var(--gold))",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{copy.heroHeadline2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="section-desc"
              style={{ marginBottom: 36 }}
            >
              {copy.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}
            >
              {copy.heroChips.map(chip => (
                <div key={chip} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "var(--surface)", border: "1px solid var(--border2)",
                  padding: "7px 14px", borderRadius: 8,
                }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--text-muted)" }}>{chip}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <motion.a
                href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "15px 32px",
                  background: "var(--orange)", color: "white",
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.92rem",
                  borderRadius: 8, textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(13,27,42,0.22)",
                  transition: "background 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--orange-hover)"; el.style.boxShadow = "0 6px 28px rgba(212,165,58,0.4)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--orange)"; el.style.boxShadow = "0 4px 20px rgba(13,27,42,0.22)"; }}
              >
                {copy.heroCTA} <Arrow />
              </motion.a>
              <a
                href="#comparison"
                onClick={e => { e.preventDefault(); document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 28px",
                  background: "transparent", color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.88rem",
                  borderRadius: 8, textDecoration: "none",
                  border: "1px solid var(--border2)", cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--blue)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border2)")}
              >
                {copy.heroSecondary}
              </a>
            </motion.div>
          </div>

          {/* Right — dashboard mockup, statically tilted */}
          <motion.div
            initial={{ opacity: 0, x: 36, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16,1,0.3,1] }}
            style={{ position: "relative", zIndex: 1, perspective: "900px" }}
            className="hero-mockup"
          >
            <div style={{ transform: "rotateY(-5deg) rotateX(2deg)", transformStyle: "preserve-3d" }}>
              <DashMockup />
            </div>
          </motion.div>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: "linear-gradient(transparent,var(--bg))", pointerEvents: "none" }} />
        </section>

        {/* ── TICKER ───────────────────────────────────────────────────────── */}
        <div style={{
          borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
          background: "var(--surface)", padding: "13px 0", overflow: "hidden",
        }}>
          <div style={{ display: "flex", width: "max-content", animation: "ticker-scroll 36s linear infinite" }}>
            {[...copy.tickerItems, ...copy.tickerItems].map((item,i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", whiteSpace: "nowrap", padding: "0 22px" }}>{item}</span>
                <span style={{ color: "var(--gold)", fontSize: "0.45rem" }}>◆</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── USE CASES ────────────────────────────────────────────────────── */}
        <section className="section-wrap" style={{ background: "var(--bg)" }}>
          <div className="section-inner">
            <SectionReveal>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <div className="slabel" style={{ justifyContent: "center", marginBottom: 16 }}>{copy.useCasesKicker}</div>
                <h2 className="section-title" style={{ marginBottom: 20 }}>
                  {copy.useCasesHeadline1}<br />
                  <span style={{
                    background: "linear-gradient(120deg,var(--blue),var(--gold))",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}>{copy.useCasesHeadline2}</span>
                </h2>
                <p className="section-desc" style={{ margin: "0 auto", maxWidth: 580 }}>
                  {copy.useCasesDesc}
                </p>
              </div>
            </SectionReveal>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 18,
              maxWidth: 1100,
              margin: "0 auto",
            }} className="usecase-grid">
              {[
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--blue)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--gold)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--blue)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--gold)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>), color: "var(--blue)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--gold)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--blue)" },
                { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>), color: "var(--gold)" },
              ].map((ucMeta, i) => {
                const uc = copy.useCases[i];
                return (
                <SectionReveal key={i} delay={i * 0.06} variant="scale">
                  <div style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "26px 24px",
                    height: "100%",
                    boxShadow: "0 2px 12px rgba(13,27,42,0.04)",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 6px 28px rgba(13,27,42,0.1)";
                      el.style.borderColor = ucMeta.color === "var(--blue)" ? "rgba(26,92,168,0.3)" : "rgba(212,165,58,0.35)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 2px 12px rgba(13,27,42,0.04)";
                      el.style.borderColor = "var(--border)";
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: ucMeta.color === "var(--blue)" ? "var(--blue-dim)" : "rgba(212,165,58,0.08)",
                      border: `1px solid ${ucMeta.color === "var(--blue)" ? "rgba(26,92,168,0.2)" : "rgba(212,165,58,0.2)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: ucMeta.color, marginBottom: 16,
                    }}>
                      {ucMeta.icon}
                    </div>
                    <div style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif",
                      fontWeight: 700, fontSize: "0.92rem",
                      color: "var(--text)", marginBottom: 12, lineHeight: 1.3,
                    }}>{uc.title}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {(uc.items as readonly string[]).map(item => (
                        <div key={item} style={{
                          display: "flex", alignItems: "flex-start", gap: 7,
                        }}>
                          <div style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: ucMeta.color, flexShrink: 0, marginTop: 6,
                          }} />
                          <span style={{
                            fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5,
                          }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
                );
              })}
            </div>

            {/* Bottom tagline */}
            <SectionReveal delay={0.3}>
              <div style={{ textAlign: "center", marginTop: 48 }}>
                <p style={{
                  fontFamily: "'DM Mono',monospace", fontSize: "0.68rem",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--text-dim)",
                }}>
                  {copy.useCasesTagline}
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── COMPARISON ───────────────────────────────────────────────────── */}
        <section id="comparison" className="section-wrap">
          <div className="section-inner">
            <SectionReveal>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <div className="slabel" style={{ justifyContent: "center", marginBottom: 16 }}>{copy.comparisonKicker}</div>
                <h2 className="section-title">{copy.comparisonHeadline}</h2>
                <p className="section-desc" style={{ margin: "0 auto" }}>
                  {copy.comparisonDesc}
                </p>
              </div>
            </SectionReveal>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 960, margin: "0 auto" }} className="comparison-grid">

              {/* Basic — Included */}
              <SectionReveal delay={0.08} variant="left">
                <div style={{
                  background: "#fff", border: "1px solid var(--border)",
                  borderRadius: 20, padding: "36px 32px", height: "100%",
                  boxShadow: "0 2px 16px rgba(13,27,42,0.05)",
                }}>
                  <div className="slabel" style={{ marginBottom: 10 }}>{copy.basicKicker}</div>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
                    fontSize: "1.7rem", color: "var(--text)", marginBottom: 8, letterSpacing: "-0.025em",
                  }}>{copy.basicHeadline}</h3>
                  <p style={{ fontSize: "0.87rem", color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.7 }}>
                    {copy.basicDesc}
                  </p>

                  {/* Plan badge */}
                  <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                    <div style={{
                      fontFamily: "'DM Mono',monospace", fontSize: "0.58rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "5px 12px", borderRadius: 20,
                      background: "var(--blue-dim)", border: "1px solid rgba(26,92,168,0.2)",
                      color: "var(--blue)",
                    }}>{copy.basicBadge1}</div>
                    <div style={{
                      fontFamily: "'DM Mono',monospace", fontSize: "0.58rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "5px 12px", borderRadius: 20,
                      background: "rgba(13,27,42,0.04)", border: "1px solid var(--border)",
                      color: "var(--text-dim)",
                    }}>{copy.basicBadge2}</div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
                    {initialFeatures.map((f, i) => (
                      <motion.div key={f}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                      >
                        <CheckBlue />
                        <span style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{f}</span>
                      </motion.div>
                    ))}
                    <div style={{ borderTop: "1px solid var(--border)", margin: "6px 0" }} />
                    {initialMissing.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, opacity: 0.42 }}>
                        <Dash />
                        <span style={{ fontSize: "0.875rem", color: "var(--text-dim)", lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      padding: "14px 24px", background: "transparent", color: "var(--blue)",
                      border: "1px solid var(--blue)", borderRadius: 8,
                      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.88rem",
                      textDecoration: "none", transition: "background 0.2s",
                    }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "var(--blue-dim)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                  >
                    {copy.basicCTA} <Arrow />
                  </motion.a>
                </div>
              </SectionReveal>

              {/* Command Center Premium */}
              <SectionReveal delay={0.16} variant="right">
                <div style={{
                  background: "var(--navy)", border: "1px solid rgba(212,165,58,0.35)",
                  borderRadius: 20, padding: "36px 32px", height: "100%",
                  position: "relative", overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(13,27,42,0.28)",
                }}>
                  <div style={{
                    position: "absolute", top: 0, left: "10%", right: "10%", height: 2,
                    background: "linear-gradient(90deg,transparent,var(--gold),transparent)",
                  }} />
                  <div style={{
                    position: "absolute", top: "-20%", right: "-15%",
                    width: "60%", height: "60%", borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(212,165,58,0.06) 0%,transparent 65%)",
                    filter: "blur(40px)", pointerEvents: "none",
                  }} />

                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>
                        {copy.premiumKicker}
                      </div>
                      <div style={{
                        fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", letterSpacing: "0.1em",
                        textTransform: "uppercase", color: "var(--navy)", background: "var(--gold)",
                        padding: "4px 10px", borderRadius: 20,
                      }}>{copy.premiumBadge}</div>
                    </div>

                    <h3 style={{
                      fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800,
                      fontSize: "1.7rem", color: "#E8F0FA", marginBottom: 8, letterSpacing: "-0.025em",
                    }}>{copy.premiumHeadline}</h3>
                    <p style={{ fontSize: "0.87rem", color: "#7A96B2", marginBottom: 24, lineHeight: 1.7 }}>
                      {copy.premiumDesc}
                    </p>

                    <div style={{
                      display: "flex", gap: 20, marginBottom: 28, padding: "14px 18px",
                      background: "rgba(212,165,58,0.07)", border: "1px solid rgba(212,165,58,0.2)",
                      borderRadius: 10,
                    }}>
                      <div>
                        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", color: "#8FA8C0", letterSpacing: "0.1em", marginBottom: 4 }}>{copy.premiumSetupLabel}</div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--gold)", letterSpacing: "-0.02em" }}>$5k – $10k+</div>
                      </div>
                      <div style={{ width: 1, background: "rgba(212,165,58,0.2)", alignSelf: "stretch" }} />
                      <div>
                        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", color: "#8FA8C0", letterSpacing: "0.1em", marginBottom: 4 }}>{copy.premiumMonthlyLabel}</div>
                        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--gold)", letterSpacing: "-0.02em" }}>
                          $750 – $1,500<span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#7A96B2" }}>/mo</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
                      {premiumFeatures.map((f, i) => (
                        <motion.div key={f}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.035 }}
                          style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                        >
                          <CheckGold />
                          <span style={{ fontSize: "0.875rem", color: "#7A96B2", lineHeight: 1.5 }}>{f}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        padding: "15px 24px", background: "var(--gold)", color: "var(--navy)",
                        borderRadius: 8,
                        fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem",
                        textDecoration: "none",
                        boxShadow: "0 4px 24px rgba(212,165,58,0.3)",
                        transition: "box-shadow 0.2s",
                      }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 36px rgba(212,165,58,0.5)")}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(212,165,58,0.3)")}
                    >
                      {copy.premiumCTA} <Arrow />
                    </motion.a>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ── KPI STATS ────────────────────────────────────────────────────── */}
        <section ref={kpiRef} style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }} className="section-wrap">
          <div className="section-inner">
            <SectionReveal>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <div className="slabel" style={{ justifyContent: "center", marginBottom: 14 }}>{copy.statsKicker}</div>
                <h2 className="section-title">{copy.statsHeadline}</h2>
              </div>
            </SectionReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, maxWidth: 1000, margin: "0 auto" }} className="kpi-grid">
              <StatCard label={copy.statLabels[0]} target={84}  suffix="%" color="var(--blue)"  delay={0}   triggered={kpiOn} />
              <StatCard label={copy.statLabels[1]} target={78}  suffix="%" color="var(--gold)"  delay={0.1} triggered={kpiOn} />
              <StatCard label={copy.statLabels[2]} target={142}            color="var(--green)"  delay={0.2} triggered={kpiOn} />
              <StatCard label={copy.statLabels[3]} target={7}              color="#7C3AED"        delay={0.3} triggered={kpiOn} />
            </div>
          </div>
        </section>

        {/* ── DASHBOARD PREVIEW — dark section shows the actual product ─────── */}
        <section style={{ background: "var(--navy)", padding: "100px clamp(24px,6vw,100px)", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "20%", right: "-5%",
            width: "40vw", height: "40vw", maxWidth: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(43,127,224,0.1) 0%,transparent 65%)",
            filter: "blur(70px)", pointerEvents: "none",
          }} />
          <SectionReveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{
                fontFamily: "'DM Mono',monospace", fontSize: "0.60rem",
                letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)",
                marginBottom: 16,
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}>
                <div style={{ width: 28, height: 1, background: "linear-gradient(90deg,transparent,var(--gold))" }} />
                {copy.previewKicker}
                <div style={{ width: 28, height: 1, background: "linear-gradient(90deg,var(--gold),transparent)" }} />
              </div>
              <h2 style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800,
                color: "#E8F0FA", letterSpacing: "-0.03em", marginBottom: 16,
              }}>{copy.previewHeadline}</h2>
              <p style={{ fontSize: "1rem", color: "#7A96B2", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                {copy.previewDesc}
              </p>
            </div>
          </SectionReveal>

          {/* Tab selector */}
          <SectionReveal delay={0.08}>
            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 32, flexWrap: "wrap" }}>
              {[
                { c: "#2B7FE0" },
                { c: "#A855F7" },
                { c: "#16A34A" },
                { c: "#0FCFB0" },
                { c: "#F97316" },
                { c: "#818CF8" },
              ].map((tabMeta, i) => {
                const tab = copy.dashTabs[i];
                return (
                <button key={i} onClick={() => setDashTab(i)} style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: dashTab === i ? 700 : 500,
                  fontSize: "0.78rem",
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: dashTab === i ? `1px solid ${tabMeta.c}55` : "1px solid rgba(255,255,255,0.08)",
                  background: dashTab === i ? `${tabMeta.c}18` : "rgba(255,255,255,0.03)",
                  color: dashTab === i ? tabMeta.c : "#7A96B2",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
                }}>
                  <span>{tab.label}</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.5rem", letterSpacing: "0.06em", color: dashTab === i ? `${tabMeta.c}CC` : "rgba(122,150,178,0.65)" }}>{tab.sub}</span>
                </button>
                );
              })}
            </div>
          </SectionReveal>

          {/* Dashboard panels */}
          <SectionReveal delay={0.12} variant="scale">
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              {dashTab === 0 && <CRMMockup />}
              {dashTab === 1 && <SocialMockup />}
              {dashTab === 2 && <AccountingMockup />}
              {dashTab === 3 && <RealEstateMockup />}
              {dashTab === 4 && <EcommerceMockup />}
              {dashTab === 5 && <SchoolsMockup />}
            </div>
          </SectionReveal>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="section-wrap" style={{ background: "var(--bg)" }}>
          <div className="section-inner" style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <SectionReveal>
              <div className="slabel" style={{ justifyContent: "center", marginBottom: 20 }}>{copy.ctaKicker}</div>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                {copy.ctaHeadline1}{" "}
                <span style={{
                  background: "linear-gradient(120deg,var(--blue-bright),var(--gold))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{copy.ctaHeadline2}</span>
              </h2>
              <p className="section-desc" style={{ margin: "0 auto 40px" }}>
                {copy.ctaDesc}
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <motion.a
                  href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "16px 36px", background: "var(--orange)", color: "white",
                    fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.95rem",
                    borderRadius: 8, textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(13,27,42,0.22)",
                    transition: "background 0.25s, box-shadow 0.25s",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--orange-hover)"; el.style.boxShadow = "0 8px 36px rgba(212,165,58,0.45)"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--orange)"; el.style.boxShadow = "0 4px 20px rgba(13,27,42,0.22)"; }}
                >
                  {copy.ctaPrimary} <Arrow />
                </motion.a>
                <a href="/" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "15px 28px", background: "transparent", color: "var(--text)",
                  fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.88rem",
                  borderRadius: 8, textDecoration: "none", border: "1px solid var(--border2)",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--blue)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border2)")}
                >
                  {copy.ctaSecondary}
                </a>
              </div>
              <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.57rem", letterSpacing: "0.08em", color: "var(--text-dim)", marginTop: 20 }}>
                {copy.ctaGuarantee}
              </p>
            </SectionReveal>
          </div>
        </section>

      </main>

      {/* Re-uses the exact same Footer as the main site */}
      <Footer />

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 900px) {
          .dash-hero       { grid-template-columns: 1fr !important; padding: 100px 24px 60px !important; }
          .hero-mockup     { display: none !important; }
          .comparison-grid { grid-template-columns: 1fr !important; }
          .kpi-grid        { grid-template-columns: 1fr 1fr !important; }
          .usecase-grid    { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .kpi-grid     { grid-template-columns: 1fr !important; }
          .usecase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
