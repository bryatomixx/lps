export default function DashMockup() {
  return (
    <div style={{
      background: "linear-gradient(145deg,#0A1525 0%,#0D1B2A 60%,#060E1A 100%)",
      borderRadius: 14,
      border: "1px solid rgba(43,127,224,0.2)",
      overflow: "hidden",
      boxShadow: "0 32px 64px rgba(13,27,42,0.32), 0 0 0 1px rgba(43,127,224,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
      width: "100%",
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "7px 12px", display: "flex", alignItems: "center", gap: 9,
      }}>
        <div style={{ display: "flex", gap: 5 }}>
          {["#FF5F57","#FFBD2E","#28CA41"].map((c,i) => (
            <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 4, height: 16,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: "rgba(255,255,255,0.2)" }}>
            dashboard.latinprimesystems.com
          </span>
        </div>
      </div>
      <div style={{ padding: "11px 13px" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 11 }}>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: "#2B7FE0", letterSpacing: "0.12em" }}>
            LATIN PRIME <span style={{ color: "#D4A53A" }}>COMMAND CENTER</span>
          </div>
          <div style={{
            display: "flex", alignItems: "center", gap: 4,
            background: "rgba(56,191,255,0.08)", border: "1px solid rgba(56,191,255,0.2)",
            borderRadius: 20, padding: "2px 7px",
          }}>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#38BFFF" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 7, color: "#38BFFF", letterSpacing: "0.1em" }}>LIVE</span>
          </div>
        </div>
        {/* KPIs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6, marginBottom: 10 }}>
          {[
            { l: "Revenue / Mo",  v: "$47,280", c: "#2B7FE0", d: "+18%" },
            { l: "Appts Today",   v: "142",     c: "#D4A53A", d: "+23%" },
            { l: "Show Rate",     v: "84%",     c: "#10B981", d: "+5%"  },
            { l: "No-Shows",      v: "11",      c: "#EF4444", d: "-8%"  },
          ].map(k => (
            <div key={k.l} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 7, padding: "7px 8px",
            }}>
              <div style={{ fontSize: 6, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{k.l}</div>
              <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, fontWeight: 700, color: k.c }}>{k.v}</div>
              <div style={{ fontSize: 6, color: k.d.startsWith("+") ? "#10B981" : "#EF4444", marginTop: 2 }}>{k.d}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(26,92,168,0.1)", borderRadius: 7, overflow: "hidden", marginBottom: 8 }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "4px 9px", background: "rgba(0,0,0,0.35)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {["Client","Closer","Time","Status"].map(h => (
              <span key={h} style={{ fontSize: 6, color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{h}</span>
            ))}
          </div>
          {[
            ["Carlos M.","Ana R.","10:00","On Time","#10B981"],
            ["María L.","Jorge V.","11:30","Pending","#2B7FE0"],
            ["Roberto S.","Ana R.","14:00","No-Show","#EF4444"],
            ["Diana C.","Luis P.","15:00","Pending","#2B7FE0"],
          ].map(([n,c,h,st,sc],i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "5px 9px", alignItems: "center", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.65)" }}>{n}</span>
              <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)" }}>{c}</span>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 7, color: "rgba(255,255,255,0.3)" }}>{h}</span>
              <span style={{ fontSize: 6, fontWeight: 700, color: sc, background: `${sc}18`, border: `1px solid ${sc}28`, borderRadius: 3, padding: "1px 4px", textTransform: "uppercase", display: "inline-block" }}>{st}</span>
            </div>
          ))}
        </div>
        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7 }}>
          <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(26,92,168,0.1)", borderRadius: 7, padding: "7px 9px" }}>
            <div style={{ fontSize: 6, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Top Closers</div>
            {[["Ana R.","$18,400","#D4A53A"],["Jorge V.","$14,200","#8FA8C0"],["Luis P.","$9,800","#C87D3E"]].map(([n,v,c],i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: c, fontWeight: 700 }}>#{i+1}</span>
                  <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>{n}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 8, color: "#38BFFF" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(26,92,168,0.1)", borderRadius: 7, padding: "7px 9px" }}>
            <div style={{ fontSize: 6, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Conversion Rate</div>
            {[["Ana R.",78],["Jorge V.",62],["Luis P.",54]].map(([n,p],i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 7, color: "rgba(255,255,255,0.38)" }}>{n}</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 7, color: "#2B7FE0" }}>{p}%</span>
                </div>
                <div style={{ height: 2, background: "rgba(255,255,255,0.06)", borderRadius: 1 }}>
                  <div style={{ width: `${p}%`, height: "100%", background: "linear-gradient(90deg,#1A5CA8,#2B7FE0)", borderRadius: 1 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
