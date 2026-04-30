"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const BOOKING_URL =
  "https://link.latinprimesystems.com/widget/bookings/latin-prime-demo";

type Lang = "en" | "es";

// Paths that exist only in EN today (no ES counterpart).
// Toggling to ES from these falls back to /es.
const EN_ONLY_PATHS = new Set<string>(["/pro"]);

function getToggleHref(currentPath: string, currentLang: Lang): string {
  if (currentLang === "es") {
    const stripped = currentPath.replace(/^\/es/, "");
    return stripped || "/";
  }
  if (currentPath === "/") return "/es";
  if (EN_ONLY_PATHS.has(currentPath)) return "/es";
  return `/es${currentPath}`;
}

function persistLocale(lang: Lang) {
  if (typeof document === "undefined") return;
  // 1 year, root path so every route reads it.
  document.cookie = `NEXT_LOCALE=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

function localizedLinks(lang: Lang) {
  const prefix = lang === "es" ? "/es" : "";
  // /starter and /pro stay EN-only — link to anchor on the localized homepage instead.
  const planHref = (extra: string) =>
    lang === "es" ? `/es#pricing` : extra;

  if (lang === "es") {
    return [
      { href: "/es", label: "Inicio" },
      {
        label: "Planes",
        dropdown: [
          { href: "/es/starter", label: "Starter — $497/mes", desc: "Tu primer sistema real. En vivo en 7–14 días." },
          { href: "/es#pricing", label: "Pro — $997/mes",     desc: "Motor de cierre + reactivación. En vivo en 14–21 días." },
        ],
      },
      { href: `${prefix}/dashboards`, label: "Command Center" },
    ];
  }

  return [
    { href: "/", label: "Home" },
    {
      label: "Plans",
      dropdown: [
        { href: planHref("/starter"), label: "Starter — $497/mo", desc: "Your first real system. Live in 7–14 days." },
        { href: planHref("/pro"),     label: "Pro — $997/mo",     desc: "Closing engine + reactivation. Live in 14–21 days." },
      ],
    },
    { href: `${prefix}/dashboards`, label: "Command Center" },
  ];
}

export default function Nav({ lang = "en" }: { lang?: Lang }) {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const plansRef = useRef<HTMLDivElement>(null);

  const t = lang === "es"
    ? {
        bookCta: "Agenda una Llamada",
        plansSoonLabel: "Growth — $1,797/mes",
        plansSoonDesc: "Sistema IA gestionado + Agente de Voz.",
        plansSection: "Planes",
        toggleAria: "Cambiar a inglés",
      }
    : {
        bookCta: "Book a Free Call",
        plansSoonLabel: "Growth — $1,797/mo",
        plansSoonDesc: "Managed AI system + Voice Agent.",
        plansSection: "Plans",
        toggleAria: "Switch to Spanish",
      };

  const NAV_LINKS = localizedLinks(lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (plansRef.current && !plansRef.current.contains(e.target as Node)) {
        setPlansOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setPlansOpen(false);
  }, [pathname]);

  // Persist current locale on every page load so subsequent visits
  // to "/" can be redirected by middleware.
  useEffect(() => {
    persistLocale(lang);
  }, [lang]);

  const isActive = (href: string) => pathname === href;
  const plansActivePaths = lang === "es"
    ? new Set(["/es/starter", "/es#pricing"])
    : new Set(["/starter", "/pro"]);
  const isPlansActive = plansActivePaths.has(pathname);

  const handleToggle = (target: Lang) => {
    persistLocale(target);
    router.push(getToggleHref(pathname, lang));
  };

  const linkStyle = (active: boolean): React.CSSProperties => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    color: active ? "var(--text)" : "rgba(15,34,64,0.5)",
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    transition: "color 0.2s",
    padding: "4px 0",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontWeight: active ? 600 : 400,
    position: "relative",
  });

  // Locale toggle pill — used in both desktop nav and mobile menu
  const LocaleToggle = ({ inMobile = false }: { inMobile?: boolean }) => (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid rgba(15,34,64,0.18)",
        borderRadius: 999,
        padding: 2,
        background: "rgba(255,255,255,0.5)",
        ...(inMobile ? { width: "100%", justifyContent: "center", marginTop: 16 } : {}),
      }}
    >
      {(["en", "es"] as Lang[]).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => !active && handleToggle(code)}
            aria-current={active ? "true" : undefined}
            aria-label={code === "en" ? "Switch to English" : "Cambiar a español"}
            style={{
              padding: inMobile ? "8px 22px" : "5px 12px",
              border: "none",
              borderRadius: 999,
              background: active ? "var(--text)" : "transparent",
              color: active ? "white" : "var(--text-muted)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              cursor: active ? "default" : "pointer",
              transition: "background 0.18s, color 0.18s",
            }}
          >
            {code}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(20px, 3vw, 48px)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(248,247,244,0.97)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(15,34,64,0.07)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(15,34,64,0.06)" : "none",
        }}
      >
        {/* Logo */}
        <Link href={lang === "es" ? "/es" : "/"} style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <Image
            src="https://assets.cdn.filesafe.space/0EgKTcd9YvsDKkQqklPo/media/69ac6d227bdf387250ce554b.png"
            alt="Latin Prime Systems"
            width={140}
            height={36}
            style={{ height: 30, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="nav-desktop">
          {NAV_LINKS.map((item) => {
            if (item.dropdown) {
              return (
                <div key="plans" ref={plansRef} style={{ position: "relative" }}>
                  <button
                    onClick={() => setPlansOpen(!plansOpen)}
                    style={{
                      ...linkStyle(isPlansActive),
                      gap: 6,
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = isPlansActive ? "var(--text)" : "rgba(15,34,64,0.5)")}
                  >
                    {item.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      style={{ transition: "transform 0.2s", transform: plansOpen ? "rotate(180deg)" : "rotate(0deg)", opacity: 0.5 }}
                    >
                      <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {plansOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 16px)",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "#FFFFFF",
                          border: "1px solid var(--border)",
                          borderRadius: 10,
                          padding: "8px",
                          minWidth: 260,
                          boxShadow: "0 8px 32px rgba(15,34,64,0.12), 0 2px 8px rgba(15,34,64,0.06)",
                          zIndex: 200,
                        }}
                      >
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.label}
                            href={d.href}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 3,
                              padding: "12px 14px",
                              borderRadius: 7,
                              textDecoration: "none",
                              background: isActive(d.href) ? "var(--surface)" : "transparent",
                              transition: "background 0.15s",
                            }}
                            onMouseEnter={(e) => { if (!isActive(d.href)) (e.currentTarget as HTMLElement).style.background = "var(--surface)"; }}
                            onMouseLeave={(e) => { if (!isActive(d.href)) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                          >
                            <span style={{
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.88rem",
                              color: "var(--text)",
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                            }}>
                              {isActive(d.href) && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />}
                              {d.label}
                            </span>
                            <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", lineHeight: 1.4 }}>{d.desc}</span>
                          </Link>
                        ))}

                        {/* Coming soon */}
                        <div style={{ borderTop: "1px solid var(--border)", margin: "6px 0", paddingTop: 6 }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "10px 14px", borderRadius: 7, opacity: 0.45, cursor: "not-allowed" }}>
                            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "var(--text)", display: "flex", alignItems: "center", gap: 8 }}>
                              {t.plansSoonLabel}
                              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.12em", color: "var(--text-dim)", background: "var(--surface)", padding: "2px 7px", borderRadius: 3, textTransform: "uppercase" }}>soon</span>
                            </span>
                            <span style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>{t.plansSoonDesc}</span>
                          </div>
                        </div>

                        <div style={{
                          position: "absolute", top: -5, left: "50%",
                          width: 10, height: 10, background: "#FFFFFF",
                          border: "1px solid var(--border)", borderBottom: "none", borderRight: "none",
                          transform: "translateX(-50%) rotate(45deg)",
                        }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                style={linkStyle(isActive(item.href!))}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = isActive(item.href!) ? "var(--text)" : "rgba(15,34,64,0.5)")}
              >
                {item.label}
                {isActive(item.href!) && (
                  <span style={{ position: "absolute", bottom: -2, left: 0, right: 0, height: 1, background: "var(--gold)" }} />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right — Locale toggle + CTA + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <div className="nav-locale-desktop">
            <LocaleToggle />
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
            style={{
              padding: "9px 20px",
              background: "var(--orange)",
              color: "white",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.78rem",
              letterSpacing: "0.02em",
              textDecoration: "none",
              transition: "all 0.25s",
              borderRadius: 6,
              boxShadow: "0 4px 16px rgba(13,27,42,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--orange-hover)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(212,165,58,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--orange)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(13,27,42,0.2)";
            }}
          >
            {t.bookCta}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            style={{
              background: "none",
              border: "1px solid rgba(15,34,64,0.2)",
              padding: "8px",
              cursor: "pointer",
              width: 38,
              height: 38,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
            }}
            aria-label={t.toggleAria}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 18,
                  height: 1.5,
                  background: "var(--text)",
                  transition: "all 0.3s",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(248,247,244,0.99)",
              borderBottom: "1px solid rgba(15,34,64,0.08)",
              padding: "20px 24px 28px",
              backdropFilter: "blur(20px)",
            }}
          >
            <MobileLink
              href={lang === "es" ? "/es" : "/"}
              label={lang === "es" ? "Inicio" : "Home"}
              active={isActive(lang === "es" ? "/es" : "/")}
            />

            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-dim)", padding: "14px 0 8px", borderBottom: "1px solid var(--border)" }}>
                {t.plansSection}
              </div>
              {NAV_LINKS.find((l) => l.dropdown)?.dropdown?.map((d) => (
                <MobileLink key={d.label} href={d.href} label={d.label} active={isActive(d.href)} indent />
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 0 12px 16px", borderBottom: "1px solid var(--border)", opacity: 0.4 }}>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--text-muted)" }}>{t.plansSoonLabel}</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.5rem", letterSpacing: "0.1em", color: "var(--text-dim)", background: "var(--surface2)", padding: "2px 7px", borderRadius: 3, textTransform: "uppercase" }}>soon</span>
              </div>
            </div>

            <MobileLink
              href={`${lang === "es" ? "/es" : ""}/dashboards`}
              label="Command Center"
              active={isActive(`${lang === "es" ? "/es" : ""}/dashboards`)}
            />

            {/* Locale toggle in mobile menu */}
            <LocaleToggle inMobile />

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                marginTop: 20,
                padding: "14px",
                background: "var(--orange)",
                color: "white",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: 8,
              }}
            >
              {t.bookCta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-cta { display: inline-flex; align-items: center; }
        .nav-locale-desktop { display: inline-flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-locale-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

function MobileLink({ href, label, active, indent }: {
  href: string; label: string; active: boolean; indent?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: indent ? "12px 0 12px 16px" : "14px 0",
        borderBottom: "1px solid rgba(15,34,64,0.07)",
        textDecoration: "none",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontWeight: active ? 700 : 600,
        fontSize: indent ? "0.95rem" : "1.05rem",
        color: active ? "var(--text)" : "rgba(15,34,64,0.65)",
      }}
    >
      {active && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />}
      {label}
    </Link>
  );
}
