"use client";
import Image from "next/image";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

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
              We build the AI systems that handle your calls, follow-ups,
              scheduling, and admin — so you stop being the bottleneck in your
              own business.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
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
              Get Started
            </div>
            <p
              style={{
                fontSize: "0.83rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: 20,
              }}
            >
              Book a free strategy call and get a custom automation plan for your business.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "12px 20px",
                background: "var(--blue)",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.83rem",
                textDecoration: "none",
                textAlign: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2290e8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--blue)";
              }}
            >
              Book a Free Demo
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
            © {new Date().getFullYear()} Latin Prime Systems · Latin Prime Enterprises LLC ·
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
