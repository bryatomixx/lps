"use client";
import Image from "next/image";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/latin-prime-systems/",
    color: "#0A66C2",
    hoverBg: "rgba(10,102,194,0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/latinprimesystem",
    color: "#1877F2",
    hoverBg: "rgba(24,119,242,0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/latinprimesystems?igsh=YXZtOGlqdm1oeGdr",
    color: "url(#ig-gradient)",
    hoverBg: "rgba(225,48,108,0.15)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <defs>
          <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F77737"/>
            <stop offset="50%" stopColor="#E1306C"/>
            <stop offset="100%" stopColor="#833AB4"/>
          </linearGradient>
        </defs>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@carloslatinprime?_r=1&_t=ZS-95BPXmpOfkP",
    color: "#ffffff",
    hoverBg: "rgba(255,255,255,0.1)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Who We Serve", href: "#who" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* Main footer */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "64px 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Image
              src="https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69ac6d227bdf387250ce554b.png"
              alt="Latin Prime Systems"
              width={140}
              height={36}
              style={{ height: 30, width: "auto", objectFit: "contain", marginBottom: 16 }}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                lineHeight: 1.75,
                maxWidth: 280,
                marginBottom: 24,
              }}
            >
              Done-for-you AI systems for service businesses. Live in 7–30 days. No technical knowledge required.
            </p>
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "var(--text-dim)",
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  padding: "4px 10px",
                }}
              >
                US & Latin America
              </span>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "var(--green)",
                  background: "var(--green-dim)",
                  border: "1px solid rgba(0,229,122,0.2)",
                  padding: "4px 10px",
                }}
              >
                🛡️ 90-Day Guarantee
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    border: "1px solid var(--border2)",
                    color: s.color,
                    background: "transparent",
                    transition: "background 0.2s, border-color 0.2s, transform 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = s.hoverBg;
                    el.style.borderColor = "transparent";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "transparent";
                    el.style.borderColor = "var(--border2)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: 20,
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.88rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: 20,
              }}
            >
              Ready to Start
            </div>
            <p
              style={{
                fontSize: "0.83rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              30-minute call. We map out your system. No pitch deck, no commitment.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "12px 20px",
                background: "var(--orange)",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.83rem",
                textDecoration: "none",
                textAlign: "center",
                transition: "all 0.2s",
                borderRadius: 6,
                boxShadow: "0 4px 14px rgba(13,27,42,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--orange-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--orange)";
              }}
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              color: "var(--text-dim)",
            }}
          >
            <span suppressHydrationWarning>© {new Date().getFullYear()}</span> Latin Prime Systems · Latin Prime Enterprises LLC ·
            All rights reserved
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map((label) => (
              <span
                key={label}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-dim)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")
                }
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
