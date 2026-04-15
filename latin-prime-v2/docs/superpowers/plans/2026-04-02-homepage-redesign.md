# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign all homepage components (except Hero, already done) from a dark blue-accented theme to a premium white/warm off-white theme using the brand palette: #0F2240 (navy), #B4945D (gold), #C5A059 (gold-bright), #FFFFFF / #F7F6F3.

**Architecture:** Task 1 (globals.css) MUST complete before any other task — it updates CSS variables that all components inherit. Tasks 2–20 are independent of each other and can be parallelized in groups once globals is done. No logic, routing, copy, URLs, or component structure changes — visual/styling only.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, Framer Motion, inline styles (no Tailwind utility classes in component styles — follow existing pattern).

---

## File Map

| File | Action |
|------|--------|
| `app/globals.css` | Modify — full variable + rule update |
| `components/Nav.tsx` | Modify — colors, scrolled bg, CTA button |
| `components/Problem.tsx` | Modify — bg, card styles, hover accent, link color |
| `components/AIEmployee.tsx` | Modify — bg, table accent colors, CTA |
| `components/ROICalculator.tsx` | Modify — bg, remove grid overlay, slider/button colors, CTA |
| `components/Testimonials.tsx` | Modify — bg, active states, dots |
| `components/EmailCapture.tsx` | Modify — bg to navy, text white, gold button |
| `components/Compare.tsx` | Modify — bg, card styles, accent colors |
| `components/Solutions.tsx` | Modify — bg, card bg/radius, gap |
| `components/WhoWeServe.tsx` | Modify — bg, card styles, modal colors |
| `components/Process.tsx` | Modify — bg, step card styles, accent colors |
| `components/Pricing.tsx` | Modify — bg, card styles, featured card navy, gold accents |
| `components/FAQ.tsx` | Modify — bg, expand icon color, divider color |
| `components/AlaCartePricing.tsx` | Modify — bg, tile styles, selected state gold |
| `components/PlanGuide.tsx` | Modify — bg, outer card, row styles, badge colors |
| `components/TechStack.tsx` | Modify — bg, logo opacity, separator color |
| `components/CTA.tsx` | Modify — bg to navy, text white, gold button, stats |
| `components/BookingSection.tsx` | Modify — bg, remove iframe invert filter, gold accent |
| `components/Contact.tsx` | Modify — bg, form card styles, input focus gold, CTA |
| `components/Footer.tsx` | Modify — bg stays navy, update gold CTA, social hover |

---

## Task 1: Update globals.css

**Files:**
- Modify: `app/globals.css`

This is the critical first task. All other tasks depend on it.

- [ ] **Step 1: Replace CSS variables and global rules**

Replace the entire `:root` block and global rules in `app/globals.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800&family=DM+Mono:wght@300;400;500&family=Inter:wght@300;400;500;600&display=swap');
@import "tailwindcss";

:root {
  --bg: #FFFFFF;
  --surface: #F7F6F3;
  --surface2: #EFEEE9;
  --border: rgba(15,34,64,0.07);
  --border2: rgba(15,34,64,0.15);
  --blue: #0F2240;
  --blue-bright: #C5A059;
  --blue-dim: rgba(15,34,64,0.06);
  --blue-glow: rgba(180,148,93,0.25);
  --blue-glow-strong: rgba(180,148,93,0.45);
  --gold: #B4945D;
  --gold-bright: #C5A059;
  --gold-dim: rgba(180,148,93,0.1);
  --gold-glow: rgba(180,148,93,0.3);
  --green: #00a854;
  --green-dim: rgba(0,168,84,0.1);
  --text: #0F2240;
  --text-muted: rgba(15,34,64,0.6);
  --text-dim: rgba(15,34,64,0.35);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: rgba(180,148,93,0.4); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: rgba(180,148,93,0.7); }
::selection { background: rgba(180,148,93,0.18); color: var(--text); }

h1, h2, h3, h4, h5, h6 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.025em;
}

.gradient-text {
  background: linear-gradient(135deg, var(--gold), var(--gold-bright));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Section containers */
.section-wrap {
  padding: 120px 0;
  position: relative;
}
.section-inner {
  max-width: clamp(1100px, 85vw, 1440px);
  margin: 0 auto;
  padding: 0 clamp(24px, 4vw, 80px);
}

/* Section title */
.section-title {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  margin-bottom: 20px;
  line-height: 1.05;
}

/* Section labels */
.slabel {
  font-family: 'DM Mono', monospace;
  font-size: 0.60rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.slabel::before {
  content: '';
  width: 28px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold));
  flex-shrink: 0;
}

/* Section desc */
.section-desc {
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 580px;
  margin-bottom: 56px;
  font-weight: 300;
}

/* DecryptedText classes */
.decrypt-revealed { color: var(--text-muted); }
.decrypt-encrypted { color: rgba(180,148,93,0.6); }

/* SpotlightCard */
.spotlight-card {
  position: relative;
  overflow: hidden;
}
.spotlight-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(280px circle at var(--sx, 50%) var(--sy, 50%), var(--sc, transparent), transparent 70%);
  opacity: 1;
  pointer-events: none;
  z-index: 0;
  transition: background 0.1s;
}
.spotlight-card > * {
  position: relative;
  z-index: 1;
}

/* Gradient divider */
.gdiv {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(15,34,64,0.08) 30%, rgba(180,148,93,0.18) 70%, transparent);
}

/* Glow button */
.btn-glow {
  box-shadow: 0 4px 20px rgba(180,148,93,0.28);
  transition: box-shadow 0.3s, transform 0.2s !important;
}
.btn-glow:hover {
  box-shadow: 0 6px 30px rgba(180,148,93,0.42) !important;
  transform: translateY(-2px) !important;
}

/* Animations */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
@keyframes marquee-rev {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(1deg); }
}
@keyframes glow-pulse {
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.06); }
}
@keyframes dot-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(180,148,93,0.5); }
  50% { opacity: 0.7; box-shadow: 0 0 0 7px rgba(180,148,93,0); }
}
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes border-glow-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(180,148,93,0.28); }
  50% { box-shadow: 0 6px 32px rgba(180,148,93,0.45); }
}
@keyframes scan-line {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
}

/* Ultrawide (2560px+) */
@media (min-width: 2200px) {
  .section-wrap { padding: 160px 0; }
  .section-inner { max-width: clamp(1440px, 75vw, 1800px); }
  .section-desc { font-size: 1.1rem; max-width: 680px; }
  .section-title { font-size: clamp(3rem, 3vw, 4.5rem) !important; }
  .slabel { font-size: 0.72rem; }
}
```

- [ ] **Step 2: Verify dev server still compiles**

Run: `npm run dev` in `C:\Users\ADMIN\New Project\latin-prime-v2`
Expected: No compile errors, page loads on `http://localhost:3000`

- [ ] **Step 3: Commit**

```bash
cd "C:\Users\ADMIN\New Project\latin-prime-v2"
git add app/globals.css
git commit -m "feat: update design system to premium light theme — navy/gold palette"
```

---

## Task 2: Nav

**Files:**
- Modify: `components/Nav.tsx`

- [ ] **Step 1: Update scrolled background and link colors**

In `Nav.tsx`, find the `motion.nav` style object and update:
```tsx
background: scrolled
  ? "rgba(255,255,255,0.95)"
  : "transparent",
borderBottom: scrolled
  ? "1px solid rgba(15,34,64,0.08)"
  : "1px solid transparent",
backdropFilter: scrolled ? "blur(20px)" : "none",
WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
```

- [ ] **Step 2: Update nav link colors**

Replace the nav link button styles (both `color` and hover handlers):
```tsx
style={{
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "rgba(15,34,64,0.55)",
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.7rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  transition: "color 0.2s",
  padding: "4px 0",
}}
onMouseEnter={(e) => (e.currentTarget.style.color = "#0F2240")}
onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(15,34,64,0.55)")}
```

- [ ] **Step 3: Update desktop CTA button**

Replace the "Book a Demo" anchor styles and handlers:
```tsx
style={{
  padding: "9px 20px",
  background: "#B4945D",
  color: "white",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontWeight: 700,
  fontSize: "0.78rem",
  letterSpacing: "0.02em",
  textDecoration: "none",
  transition: "all 0.25s",
  borderRadius: 6,
  boxShadow: "0 4px 16px rgba(180,148,93,0.28)",
}}
onMouseEnter={(e) => {
  (e.currentTarget as HTMLElement).style.background = "#C5A059";
  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(180,148,93,0.4)";
}}
onMouseLeave={(e) => {
  (e.currentTarget as HTMLElement).style.background = "#B4945D";
  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(180,148,93,0.28)";
}}
```

- [ ] **Step 4: Update hamburger button and mobile menu**

Hamburger border and lines:
```tsx
// button style:
border: "1px solid rgba(15,34,64,0.2)",
// span lines background:
background: "#0F2240",
```

Mobile menu background, nav buttons, and CTA:
```tsx
// mobile menu div:
background: "rgba(255,255,255,0.98)",
borderBottom: "1px solid rgba(15,34,64,0.08)",

// mobile nav buttons:
color: "rgba(15,34,64,0.7)",
borderBottom: "1px solid rgba(15,34,64,0.07)",

// mobile CTA anchor:
background: "#B4945D",
borderRadius: 8,
```

- [ ] **Step 5: Commit**

```bash
git add components/Nav.tsx
git commit -m "feat: update Nav to premium light theme — white scrolled bg, gold CTA"
```

---

## Task 3: Problem

**Files:**
- Modify: `components/Problem.tsx`

- [ ] **Step 1: Update section background and card styles**

Change section `style` background to `var(--surface)` (already is, but confirm).

Replace each problem card `style` object inside the `.map()`:
```tsx
style={{
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "36px 28px",
  position: "relative",
  overflow: "hidden",
  cursor: "default",
  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
  height: "100%",
  boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.06)",
}}
onMouseEnter={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(180,148,93,0.35)";
  el.style.transform = "translateY(-4px)";
  el.style.boxShadow = "0 8px 40px rgba(15,34,64,0.1)";
}}
onMouseLeave={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "var(--border)";
  el.style.transform = "translateY(0)";
  el.style.boxShadow = "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.06)";
}}
```

- [ ] **Step 2: Update hover top bar color and grid gap**

Change the `.prob-topline` div (hover accent bar) from blue/gold gradient to gold:
```tsx
background: "#B4945D",
```

Change the grid `gap` from `2` to `24`:
```tsx
gap: 24,
```

- [ ] **Step 3: Update the "What we do about it" link color**

```tsx
color: "var(--gold)",
// hover:
onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
```

- [ ] **Step 4: Update heading accent**

Replace the `<em>` gradient style on the H2:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>
  Knows Too Well
</em>
```

- [ ] **Step 5: Commit**

```bash
git add components/Problem.tsx
git commit -m "feat: update Problem section — white cards, gold hover accent"
```

---

## Task 4: AIEmployee

**Files:**
- Modify: `components/AIEmployee.tsx`

- [ ] **Step 1: Update section background and heading accent**

Section `style` background: `"var(--bg)"` (white — it was already surface, change to white).

Replace `<em>` gradient:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>
  That Never Clocks Out.
</em>
```

- [ ] **Step 2: Wrap table in a card container**

Wrap the `<div style={{ overflowX: "auto" ... }}>` in a card:
```tsx
<div style={{
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: 12,
  boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
  overflow: "hidden",
  marginBottom: 48,
}}>
  <div style={{ overflowX: "auto" }}>
    <table ...>
```

- [ ] **Step 3: Update table header styles**

AI Employee column header:
```tsx
// th for AI column:
background: "rgba(180,148,93,0.08)",
color: "var(--gold)",
// Remove ⭐ emoji or keep — keep it for personality
```

Feature column header:
```tsx
color: "var(--text-dim)",
borderBottom: "1px solid var(--border2)",
```

- [ ] **Step 4: Update table row styles**

Row hover:
```tsx
onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(15,34,64,0.02)")}
onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
```

AI column cells: `background: "rgba(180,148,93,0.04)"`

Check mark: `color: "var(--gold)"` (was green)
Cross mark: keep `color: "#e55"` (semantic red — don't change)

Table row border: `borderBottom: "1px solid var(--border)"`

- [ ] **Step 5: Update bottom CTA**

```tsx
// paragraph:
color: "var(--text-muted)",
// button:
background: "#B4945D",
borderRadius: 8,
// hover:
background: "#C5A059",
boxShadow: "0 6px 24px rgba(180,148,93,0.4)",
// guarantee div:
color: "var(--text-dim)",
```

- [ ] **Step 6: Commit**

```bash
git add components/AIEmployee.tsx
git commit -m "feat: update AIEmployee section — white bg, gold table accents"
```

---

## Task 5: ROICalculator

**Files:**
- Modify: `components/ROICalculator.tsx`

- [ ] **Step 1: Remove grid background, update section bg**

Section stays `var(--surface)`. Remove the two decorative `<div>` elements (grid background + radial overlay) entirely.

- [ ] **Step 2: Update heading accent**

```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>
  Doing Nothing Costing You?
</em>
```

- [ ] **Step 3: Update sliders panel (left card)**

```tsx
// motion.div (left panel):
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,
padding: "40px 36px",
boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",

// "Your Business Numbers" label:
color: "var(--gold)",
```

- [ ] **Step 4: Update plan selector buttons**

```tsx
background: plan === p.val ? "#B4945D" : "var(--surface2)",
border: `1px solid ${plan === p.val ? "#B4945D" : "var(--border2)"}`,
color: plan === p.val ? "white" : "var(--text-muted)",
borderRadius: 6,
```

- [ ] **Step 5: Update ROI main card (right side)**

```tsx
// Main card:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,
boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",

// Top accent bar:
background: "#B4945D",  // solid gold, not gradient

// "Monthly Value" label:
color: "var(--gold)",

// Big number (AnimatedNumber):
// Replace gradient text with plain navy:
fontFamily: "'Plus Jakarta Sans', sans-serif",
fontWeight: 900,
fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
letterSpacing: "-0.04em",
color: "#0F2240",
lineHeight: 1,
marginBottom: 6,
// Remove background/WebkitBackgroundClip/backgroundClip

// ROI multiplier chip (when roi > 0):
background: "var(--green-dim)",
border: "1px solid rgba(0,168,84,0.2)",
// roi label color: "var(--green)"

// Breakdown card:
background: "#FFFFFF",
borderRadius: 12,
border: "1px solid var(--border)",

// Revenue row color: "var(--gold)"
// Time saved row color: "var(--gold-bright)"
// Plan cost row color: "var(--text-dim)"
```

- [ ] **Step 6: Update CTA card and slider styles**

```tsx
// CTA card:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,

// CTA button:
background: "#B4945D",
borderRadius: 8,
// hover: background "#C5A059"
```

Update `SliderInput` component at the bottom of the file:
```tsx
// input range background:
background: `linear-gradient(to right, #B4945D ${pct}%, var(--border2) ${pct}%)`,

// thumb CSS (in style tag):
input[type=range]::-webkit-slider-thumb {
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #B4945D;
  cursor: pointer;
  border: 2px solid #FFFFFF;
  box-shadow: 0 0 0 2px #B4945D;
  transition: transform 0.2s;
}
input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.25); }
input[type=range]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #B4945D;
  cursor: pointer;
  border: 2px solid #FFFFFF;
}
```

- [ ] **Step 7: Commit**

```bash
git add components/ROICalculator.tsx
git commit -m "feat: update ROICalculator — light cards, gold sliders and accents"
```

---

## Task 6: Testimonials

**Files:**
- Modify: `components/Testimonials.tsx`

- [ ] **Step 1: Update section and main card bg**

Section bg: `var(--bg)` (white, was surface).

Main testimonial card:
```tsx
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,
boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",
```

- [ ] **Step 2: Update heading accent, top bar, quote mark**

```tsx
// H2 em:
<em style={{ fontStyle: "italic", color: "#B4945D" }}>We Go to Work</em>

// Top blue/gold bar — change to solid gold:
background: "#B4945D",

// Quote mark:
color: "rgba(180,148,93,0.2)",
```

- [ ] **Step 3: Update quote text, dots, and nav arrows**

```tsx
// Quote paragraph:
color: "var(--text)",
fontStyle: "italic",
fontWeight: 400,  // was 300

// Name:
color: "var(--text)",

// Role:
color: "var(--text-dim)",

// Result chip:
background: "var(--green-dim)",
border: "1px solid rgba(0,168,84,0.2)",
color: "var(--green)",  // keep green — semantic positive

// Active dot (progress bar):
background: "#B4945D",  // was blue
// Inactive dot:
background: "var(--border2)",

// Nav arrows:
background: "#FFFFFF",
border: "1px solid var(--border2)",
color: "var(--text-muted)",
borderRadius: 6,

// Dots row border-top:
borderTop: "1px solid var(--border)",
```

- [ ] **Step 4: Update thumbnail list (right side)**

```tsx
// Active thumbnail:
background: "rgba(180,148,93,0.08)",  // was blue
border: "1px solid rgba(180,148,93,0.25)",

// Active left bar:
background: "#B4945D",  // was blue

// Inactive thumbnail:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 8,

// Active name: color: "var(--text)"
// Inactive name: color: "var(--text-muted)"

// Result text: color: "var(--green)"  // keep green
```

- [ ] **Step 5: Update grid gap**

Change `gap: 2` to `gap: 24` in the `.tm-grid` div.

- [ ] **Step 6: Commit**

```bash
git add components/Testimonials.tsx
git commit -m "feat: update Testimonials — white cards, gold active states"
```

---

## Task 7: EmailCapture

**Files:**
- Modify: `components/EmailCapture.tsx`

This section becomes a **dark navy band** — a visual interrupt on the white page.

- [ ] **Step 1: Update section and inner background**

```tsx
// section style:
background: "#0F2240",

// motion.div (inner):
background: "rgba(180,148,93,0.08)",
border: "none",
borderTop: "1px solid rgba(180,148,93,0.15)",
borderBottom: "1px solid rgba(180,148,93,0.15)",
```

Remove the grid overlay `<div>` and radial gradient `<div>` entirely.

- [ ] **Step 2: Update badge, heading, and paragraph**

```tsx
// "Free — No credit card" badge:
background: "rgba(180,148,93,0.15)",
border: "1px solid rgba(180,148,93,0.35)",
// span dot: background: "#B4945D"
// text color: "#B4945D"

// H3 heading (static text):
color: "#FFFFFF",
// H3 accent span — replace gradient with gold:
<span style={{ color: "#C5A059" }}>Automation Plan</span>

// Paragraph:
color: "rgba(255,255,255,0.65)",

// Trust line at bottom:
color: "rgba(255,255,255,0.45)",
```

- [ ] **Step 3: Update form inputs**

```tsx
// All three inputs/select:
background: "rgba(255,255,255,0.08)",
border: "1px solid rgba(255,255,255,0.2)",
color: "#FFFFFF",
borderRadius: 8,
// placeholder color handled via CSS — add to globals or inline

// onFocus: borderColor: "rgba(180,148,93,0.7)"
// onBlur: borderColor: "rgba(255,255,255,0.2)"
```

- [ ] **Step 4: Update submit button**

```tsx
background: "#B4945D",
borderRadius: 8,
// hover: background "#C5A059", transform translateY(-1px)
// onMouseLeave: background "#B4945D"
```

- [ ] **Step 5: Update success state**

```tsx
// Success H3:
color: "#FFFFFF",
// Success paragraph:
color: "rgba(255,255,255,0.65)",
```

- [ ] **Step 6: Commit**

```bash
git add components/EmailCapture.tsx
git commit -m "feat: update EmailCapture — navy dark band, gold accents, white inputs"
```

---

## Task 8: Compare

**Files:**
- Modify: `components/Compare.tsx`

- [ ] **Step 1: Update section bg and heading accent**

Section bg stays `var(--bg)`. Change to `var(--surface)`:
```tsx
style={{ background: "var(--surface)" }}
```

H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>After Latin Prime.</em>
```

- [ ] **Step 2: Update both column cards**

```tsx
// Both cards share base:
borderRadius: 12,
boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",

// "Before" card:
background: "#FFFFFF",
border: "1px solid var(--border)",

// "After" card:
background: "#FFFFFF",
border: "1px solid rgba(180,148,93,0.2)",
// Remove the blue border override
```

- [ ] **Step 3: Update labels and row dots**

```tsx
// "Without Us" label: color: "#c0392b" — keep red (semantic)
// dot: background: "rgba(192,57,43,0.5)"

// "With Latin Prime Systems" label: color: "#B4945D"
// dot: background: "#B4945D", remove animation (or keep dot-pulse but it now pulses gold from globals)

// "After" top accent bar: background: "#B4945D" (was blue/gold gradient)

// Row dividers in "After" column: "1px solid rgba(180,148,93,0.1)" (was blue)
// Row dividers in "Before" column: "1px solid var(--border)"

// bold text in both: color: "var(--text)"
// base text: color: "var(--text-muted)"
```

- [ ] **Step 4: Update grid gap**

Change `gap: 2` to `gap: 24`.

- [ ] **Step 5: Commit**

```bash
git add components/Compare.tsx
git commit -m "feat: update Compare — warm bg, white cards, gold After accent"
```

---

## Task 9: Solutions

**Files:**
- Modify: `components/Solutions.tsx`

- [ ] **Step 1: Update section bg, heading, gap**

Section bg: `var(--bg)` (white, was surface).
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>Results.</em>
```
Grid gap: change `2` to `24`.

- [ ] **Step 2: Update card styles**

Each `SpotlightCard` style:
```tsx
style={{
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "32px 28px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
  boxShadow: "0 1px 4px rgba(15,34,64,0.04)",
}}
onMouseEnter={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(180,148,93,0.35)";
  el.style.transform = "translateY(-4px)";
  el.style.boxShadow = "0 8px 32px rgba(15,34,64,0.1)";
}}
onMouseLeave={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "var(--border)";
  el.style.transform = "translateY(0)";
  el.style.boxShadow = "0 1px 4px rgba(15,34,64,0.04)";
}}
```

- [ ] **Step 3: Simplify solution colors**

In the `solutions` array, replace `var(--blue)` and `var(--green)` with `var(--gold)` or `var(--blue)` (now navy). Specifically:
```tsx
const solutions = [
  { ...sol1, color: "var(--gold)" },
  { ...sol2, color: "var(--gold)" },
  { ...sol3, color: "var(--gold)" },
  { ...sol4, color: "var(--blue)" },   // var(--blue) is now navy
  { ...sol5, color: "var(--gold)" },
];
```
This ensures outcome badges and dots use gold/navy only.

Card footer border: `borderTop: "1px solid var(--border)"`

- [ ] **Step 4: Commit**

```bash
git add components/Solutions.tsx
git commit -m "feat: update Solutions — white bg, warm off-white cards, gold accents"
```

---

## Task 10: WhoWeServe

**Files:**
- Modify: `components/WhoWeServe.tsx`

- [ ] **Step 1: Update section bg, heading, gap**

Section bg: `var(--surface)` (stays).
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>Operate Smarter</em>
```
Grid gap: `16`.

- [ ] **Step 2: Update industry card styles**

```tsx
style={{
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "28px 22px",
  cursor: "pointer",
  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
  position: "relative",
  overflow: "hidden",
  height: "100%",
  boxSizing: "border-box",
  boxShadow: "0 1px 4px rgba(15,34,64,0.04)",
}}
onMouseEnter={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(180,148,93,0.4)";
  el.style.transform = "translateY(-4px)";
  el.style.boxShadow = "0 8px 32px rgba(15,34,64,0.1)";
}}
onMouseLeave={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "var(--border)";
  el.style.transform = "translateY(0)";
  el.style.boxShadow = "0 1px 4px rgba(15,34,64,0.04)";
}}
```

- [ ] **Step 3: Update card text and links**

```tsx
// "See what we can do" link: color: "var(--gold)"
// "Dedicated page" link: color: "var(--text-dim)", hover: "var(--gold)"
// Industry name h3: color: "var(--text)"
// Description p: color: "var(--text-muted)"
```

- [ ] **Step 4: Update modal styles**

```tsx
// Overlay: background: "rgba(15,34,64,0.65)"

// Modal box:
background: "#FFFFFF",
border: "1px solid var(--border2)",
borderRadius: 12,

// Image left panel:
background: "var(--surface)",
// Bottom accent bar on image: background: "#B4945D"

// Right panel - "What we deploy" label: color: "var(--gold)"
// Check marks in list: color: "var(--gold)"  (was green)
// "And much more" italic: color: "rgba(180,148,93,0.7)"

// Close button:
background: "var(--surface)",
border: "1px solid var(--border2)",
borderRadius: 6,
color: "var(--text-muted)",

// Sticky footer bg: background: "#FFFFFF"
// borderTop: "1px solid var(--border)"

// Prev/Next buttons:
background: "var(--surface)",
border: "1px solid var(--border2)",
borderRadius: 6,
color: "var(--text-muted)",
```

- [ ] **Step 5: Commit**

```bash
git add components/WhoWeServe.tsx
git commit -m "feat: update WhoWeServe — white cards, gold hover, updated modal"
```

---

## Task 11: Process

**Files:**
- Modify: `components/Process.tsx`

- [ ] **Step 1: Update section bg, heading, gap**

Section bg: `var(--bg)` (white, was surface).
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>You See Results.</em>
```
Grid gap: change `2` to `20`.

- [ ] **Step 2: Update step card styles**

```tsx
style={{
  background: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "36px 28px",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 1px 4px rgba(15,34,64,0.03)",
}}
```

- [ ] **Step 3: Update watermark, accent bar, step label, and arrow**

```tsx
// Watermark number:
color: "rgba(15,34,64,0.04)",  // was rgba(255,255,255,0.025)

// Accent bar — all steps use gold:
background: "#B4945D",  // was i % 2 === 0 ? var(--blue) : var(--gold)

// Step label ("Step 01" etc.):
color: "var(--gold)",  // was i % 2 === 0 blue : gold

// Step title:
color: "var(--text)",

// Step description:
color: "var(--text-muted)",

// Connector arrow:
color: "var(--text-dim)",
```

- [ ] **Step 4: Commit**

```bash
git add components/Process.tsx
git commit -m "feat: update Process — white bg, warm step cards, gold accents"
```

---

## Task 12: Pricing

**Files:**
- Modify: `components/Pricing.tsx`

- [ ] **Step 1: Update section bg, heading, gap, and currency toggle**

Section bg: `var(--surface)`.
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>at Every Budget</em>
```
Grid gap: change `2` to `20`.

Currency toggle:
```tsx
// Container border:
border: "1px solid var(--border2)",
borderRadius: 6,
overflow: "hidden",

// Active button:
background: "#B4945D",

// Inactive button:
background: "transparent",
color: "var(--text-muted)",
```

- [ ] **Step 2: Update non-featured plan cards**

```tsx
style={{
  background: "#FFFFFF",
  border: "1px solid var(--border)",
  borderRadius: 12,
  padding: "36px 28px",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
  boxShadow: "0 2px 8px rgba(15,34,64,0.04)",
}}
onMouseEnter={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "rgba(180,148,93,0.35)";
  el.style.boxShadow = "0 8px 40px rgba(15,34,64,0.1)";
  el.style.transform = "translateY(-2px)";
}}
onMouseLeave={(e) => {
  const el = e.currentTarget as HTMLElement;
  el.style.borderColor = "var(--border)";
  el.style.boxShadow = "0 2px 8px rgba(15,34,64,0.04)";
  el.style.transform = "translateY(0)";
}}
```

Non-featured top bar: `background: "linear-gradient(90deg, transparent, var(--border2), transparent)"`

- [ ] **Step 3: Update featured (Growth) plan card**

```tsx
style={{
  background: "#0F2240",  // keep navy — premium dark card on warm bg
  border: "1px solid rgba(180,148,93,0.3)",
  borderRadius: 12,
  // rest same as non-featured but with navy colors for text
}}

// Featured top bar:
background: "linear-gradient(90deg, #B4945D, #C5A059)",
boxShadow: "none",  // remove blue glow

// Featured price color: "#B4945D"  (was blue)
// Featured text (tagline, ideal, etc.): "rgba(255,255,255,0.7)"
// Featured feature items text: "rgba(255,255,255,0.65)"
// Featured section dividers: "rgba(255,255,255,0.1)"
```

- [ ] **Step 4: Update badges and feature items**

```tsx
// "Most Popular" badge on featured:
background: "linear-gradient(135deg, #B4945D, #C5A059)",
boxShadow: "none",

// "Best Value" badge on non-featured:
background: "#B4945D",

// FeatureItem check mark ✓: color: "#B4945D"  (was blue)
// Section label inside features: color for featured = "rgba(255,255,255,0.35)", non-featured = "var(--text-dim)"
```

- [ ] **Step 5: Update CTAs, expand button, guarantee text**

```tsx
// Featured CTA:
background: "#B4945D", border: "1px solid #B4945D", color: "white",
borderRadius: 8,
// hover: background "#C5A059"

// Non-featured CTA:
background: "transparent", border: "1px solid var(--border2)", color: "var(--text)",
borderRadius: 8,
// hover: borderColor "rgba(15,34,64,0.35)", background "rgba(15,34,64,0.03)"

// Expand button: color: "var(--gold)"  (was blue)

// Guarantee text:
// Featured: color "rgba(255,255,255,0.45)"
// Non-featured: color "var(--text-dim)"

// Bottom disclaimer:
color: "var(--text-dim)",
```

- [ ] **Step 6: Commit**

```bash
git add components/Pricing.tsx
git commit -m "feat: update Pricing — warm bg, white cards, navy featured, gold accents"
```

---

## Task 13: FAQ

**Files:**
- Modify: `components/FAQ.tsx`

- [ ] **Step 1: Update section bg, heading accent**

Section bg: `var(--bg)` (white). Already `var(--bg)` but was dark — now it's white.
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>Right Now</em>
```

- [ ] **Step 2: Update accordion item styles**

```tsx
// Row border-bottom:
borderBottom: "1px solid var(--border)",

// Question text (inactive):
color: "var(--text-muted)",
// Question text (active):
color: "var(--text)",

// Expand icon button (inactive):
border: "1px solid var(--border2)",
color: "var(--text-dim)",
borderRadius: 6,
// Expand icon button (active):
border: `1px solid ${open === i ? "var(--gold)" : "var(--border2)"}`,
color: open === i ? "var(--gold)" : "var(--text-dim)",

// Answer paragraph:
color: "var(--text-muted)",
```

- [ ] **Step 3: Update left sticky panel and CTA button**

```tsx
// "Still have questions?" button:
background: "transparent",
border: "1px solid var(--border2)",
color: "var(--text)",
borderRadius: 8,
// hover: borderColor "rgba(15,34,64,0.3)", background "rgba(15,34,64,0.03)"

// description paragraph:
color: "var(--text-muted)",
```

- [ ] **Step 4: Commit**

```bash
git add components/FAQ.tsx
git commit -m "feat: update FAQ — white bg, gold expand icon, navy borders"
```

---

## Task 14: AlaCartePricing

**Files:**
- Modify: `components/AlaCartePricing.tsx`

- [ ] **Step 1: Update section bg, heading accent**

Section bg: `var(--surface)`.
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>Pick What You Need.</em>
```

- [ ] **Step 2: Update feature tile styles**

```tsx
// Inactive tile:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 8,
// hover: borderColor "rgba(180,148,93,0.3)"

// Active (selected) tile:
background: "rgba(180,148,93,0.08)",
border: "1px solid rgba(180,148,93,0.4)",
borderRadius: 8,

// Checkbox (active):
background: "#B4945D",  // was var(--blue)
border: "none",
borderRadius: 3,

// Checkbox (inactive):
border: "1px solid var(--border2)",
borderRadius: 3,

// Feature label (active): color: "var(--gold)"  (was blue)
// Feature label (inactive): color: "var(--text)"
// Feature description: color: "var(--text-muted)"

// Category label: color: "var(--text-dim)"
```

- [ ] **Step 3: Update summary card (sticky right)**

```tsx
// Summary card:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,
boxShadow: "0 4px 24px rgba(15,34,64,0.08)",

// "Your Selection" label: color: "var(--text-dim)"

// "N features selected" badge:
background: "rgba(180,148,93,0.1)",  // was blue tint
border: "1px solid rgba(180,148,93,0.25)",
// text: color: "var(--gold)"

// Section divider: borderTop: "1px solid var(--border)"

// Form inputs (name/email/business):
background: "var(--surface)",
border: "1px solid var(--border2)",
color: "var(--text)",
borderRadius: 6,
// focus: borderColor "rgba(180,148,93,0.5)"

// Submit button (active):
background: "#B4945D",
color: "white",
borderRadius: 8,
// disabled: background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-dim)"
```

- [ ] **Step 4: Commit**

```bash
git add components/AlaCartePricing.tsx
git commit -m "feat: update AlaCartePricing — white tiles, gold selected state"
```

---

## Task 15: PlanGuide

**Files:**
- Modify: `components/PlanGuide.tsx`

- [ ] **Step 1: Update section bg**

Section bg: `var(--bg)` (white, was surface).

- [ ] **Step 2: Update outer card and rows**

```tsx
// Outer card:
background: "var(--surface)",
border: "1px solid var(--border)",
borderRadius: 16,
boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",

// H2 accent em:
<em style={{ fontStyle: "italic", color: "#B4945D" }}>matches where you actually are.</em>

// Subtitle paragraph:
color: "var(--text-muted)",

// Rows gap: change `2` to `12`

// Row items:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 8,
// transition stays same

// "If you are" label: color: "var(--text-dim)"
// Condition text: color: "var(--text)", fontWeight: 600
// Detail text: color: "var(--text-muted)"
```

- [ ] **Step 3: Update badge styles**

Remove emoji icons from `rows` array (replace `icon: "🟡"` etc. with a color dot). Or keep emojis — they're fine. Just update badge border/color:

```tsx
// Starter badge: border: "1px solid #B4945D", color: "#B4945D"
// Growth badge: border: "1px solid #B4945D", color: "#B4945D"  (was blue)
// Enterprise badge: border: "1px solid rgba(15,34,64,0.3)", color: "var(--text-muted)"
```

Update `rows` badgeColor values in the data array:
```tsx
const rows = [
  { ..., badgeColor: "#B4945D" },   // Starter
  { ..., badgeColor: "#B4945D" },   // Growth (was var(--blue))
  { ..., badgeColor: "rgba(15,34,64,0.4)" },  // Enterprise
];
```

- [ ] **Step 4: Commit**

```bash
git add components/PlanGuide.tsx
git commit -m "feat: update PlanGuide — white bg, warm outer card, gold badges"
```

---

## Task 16: TechStack

**Files:**
- Modify: `components/TechStack.tsx`

- [ ] **Step 1: Update section bg and heading accent**

Section bg: `var(--surface)`.
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>Working for Your Business</em>
```
Subtitle text: `color: "var(--text-dim)"`

- [ ] **Step 2: Update logo opacity and separator**

In `LogoTrack`, update logo opacity and text color:
```tsx
// Image logos:
opacity: 0.45,
// hover: opacity: "0.9"

// "ElevenLabs" text span:
color: "rgba(15,34,64,0.45)",  // was white

// Diamond separator:
color: "rgba(180,148,93,0.5)",  // was gold at 40%
```

- [ ] **Step 3: Commit**

```bash
git add components/TechStack.tsx
git commit -m "feat: update TechStack — warm bg, updated logo opacity and separator"
```

---

## Task 17: CTA

**Files:**
- Modify: `components/CTA.tsx`

This section becomes a **dark navy full-width block** for the final conversion push.

- [ ] **Step 1: Update section bg and remove blue glow**

```tsx
// section style:
background: "#0F2240",

// Remove the two decorative divs (blue radial glow + bottom line) entirely.
```

- [ ] **Step 2: Update heading accent and paragraph**

```tsx
// H2:
color: "#FFFFFF",
// H2 em accent:
<em style={{ fontStyle: "italic", color: "#B4945D", paddingRight: "0.08em" }}>
  Better Systems
</em>

// Paragraph:
color: "rgba(255,255,255,0.65)",
```

- [ ] **Step 3: Update CTA button**

```tsx
// Primary button:
background: "#B4945D",
color: "white",
borderRadius: 8,
boxShadow: "0 4px 20px rgba(180,148,93,0.3)",
// Remove animation: "border-glow 3s ease-in-out infinite"
// hover:
background: "#C5A059",
transform: "translateY(-2px)",
boxShadow: "0 8px 32px rgba(180,148,93,0.45)",
// mouseLeave:
background: "#B4945D",
boxShadow: "0 4px 20px rgba(180,148,93,0.3)",

// Trust text span:
color: "rgba(255,255,255,0.5)",
```

- [ ] **Step 4: Update stats numbers**

```tsx
// Each stat number div — replace gradient with gold:
fontFamily: "'Plus Jakarta Sans', sans-serif",
fontWeight: 900,
fontSize: "2.2rem",
letterSpacing: "-0.03em",
color: "#B4945D",
// Remove background/WebkitBackgroundClip

// Stat label:
color: "rgba(255,255,255,0.45)",
```

- [ ] **Step 5: Update .slabel inside CTA**

Since `.slabel` now has navy text from globals, override inline for the dark section:
```tsx
<div className="slabel" style={{ justifyContent: "center", color: "rgba(255,255,255,0.5)" }}>
  Ready to Start
</div>
```

- [ ] **Step 6: Commit**

```bash
git add components/CTA.tsx
git commit -m "feat: update CTA — navy dark section, gold stats and button"
```

---

## Task 18: BookingSection

**Files:**
- Modify: `components/BookingSection.tsx`

- [ ] **Step 1: Update section bg and remove blue glow**

```tsx
// section style:
background: "var(--bg)",

// Remove the background radial glow div entirely.
```

- [ ] **Step 2: Update heading and accent**

```tsx
// H2 em:
<em style={{ fontStyle: "italic", color: "#B4945D" }}>We Handle the Rest.</em>

// Paragraph:
color: "var(--text-muted)",
```

- [ ] **Step 3: Update calendar card and remove invert filter**

```tsx
// Calendar wrapper:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,
boxShadow: "0 4px 32px rgba(15,34,64,0.08)",
padding: "4px",

// Top accent bar:
background: "#B4945D",  // was blue/gold gradient

// iframe — REMOVE the filter property entirely:
// DELETE: filter: "invert(1) hue-rotate(180deg)"
// The calendar is on a light bg now — no invert needed
```

- [ ] **Step 4: Update trust signals**

```tsx
// Each trust signal span:
color: "var(--text-dim)",
```

- [ ] **Step 5: Commit**

```bash
git add components/BookingSection.tsx
git commit -m "feat: update BookingSection — white bg, remove iframe invert, gold accent"
```

---

## Task 19: Contact

**Files:**
- Modify: `components/Contact.tsx`

- [ ] **Step 1: Update section bg and heading accent**

Section bg stays `var(--surface)`.
H2 accent:
```tsx
<em style={{ fontStyle: "italic", color: "#B4945D" }}>AI System</em>
```

- [ ] **Step 2: Update left panel**

```tsx
// "Get in Touch" slabel: uses .slabel class — already gold from globals
// Description paragraph: color: "var(--text-muted)"
// Email address span: color: "var(--text-muted)"

// WhatsApp button: keep #25D366 green — it's the WhatsApp brand color
```

- [ ] **Step 3: Update form card and inputs**

```tsx
// Form card div:
background: "#FFFFFF",
border: "1px solid var(--border)",
borderRadius: 12,
padding: "40px 36px",
boxShadow: "0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)",

// All inputs and textarea and select:
background: "var(--surface)",
border: "1px solid var(--border2)",
color: "var(--text)",
borderRadius: 8,
// Focus: borderColor "rgba(180,148,93,0.5)"  (was blue)

// All labels: color: "var(--text-dim)"

// Select placeholder color: handled by form.type check — keep as-is
```

- [ ] **Step 4: Update submit button**

```tsx
// Idle/default:
background: "#B4945D",
borderRadius: 8,

// Success stays green gradient
// Error stays red gradient
// Sending: opacity 0.7 of gold
```

- [ ] **Step 5: Update FormField component**

In the `FormField` sub-component at the bottom of the file:
```tsx
// input style:
background: "var(--surface)",
border: "1px solid var(--border2)",
color: "var(--text)",
borderRadius: 8,
// onFocus: borderColor "rgba(180,148,93,0.5)"
// onBlur: borderColor "var(--border2)"

// label: color: "var(--text-dim)"
```

- [ ] **Step 6: Commit**

```bash
git add components/Contact.tsx
git commit -m "feat: update Contact — white form card, gold focus states"
```

---

## Task 20: Footer

**Files:**
- Modify: `components/Footer.tsx`

The footer already has `background: var(--surface)` — it needs to become navy `#0F2240` to anchor the page.

- [ ] **Step 1: Update footer background and top border**

```tsx
// footer element:
background: "#0F2240",
borderTop: "none",
```

- [ ] **Step 2: Update brand section**

```tsx
// Logo: keep — it loads fine on dark bg (it's a white/light logo)

// Brand description paragraph:
color: "rgba(255,255,255,0.6)",

// "US & Latin America" tag:
background: "rgba(255,255,255,0.08)",
border: "1px solid rgba(255,255,255,0.15)",
color: "rgba(255,255,255,0.6)",
borderRadius: 4,

// "90-Day Guarantee" tag:
background: "rgba(180,148,93,0.15)",
border: "1px solid rgba(180,148,93,0.3)",
color: "#B4945D",
borderRadius: 4,
```

- [ ] **Step 3: Update social icons**

```tsx
// Social link anchor style:
border: "1px solid rgba(255,255,255,0.15)",
color: "rgba(255,255,255,0.65)",
borderRadius: 6,
// hover: background: s.hoverBg stays, borderColor: "transparent", color: "white" (keep existing logic)
```

- [ ] **Step 4: Update navigation column**

```tsx
// "Navigation" label:
color: "rgba(255,255,255,0.35)",

// Nav links:
color: "rgba(255,255,255,0.55)",
// hover: color "rgba(255,255,255,1)"
```

- [ ] **Step 5: Update Get Started column and CTA**

```tsx
// "Get Started" label:
color: "rgba(255,255,255,0.35)",

// Paragraph:
color: "rgba(255,255,255,0.55)",

// CTA button:
background: "#B4945D",
borderRadius: 8,
color: "white",
// hover: background "#C5A059"
```

- [ ] **Step 6: Update bottom bar**

```tsx
// borderTop: "1px solid rgba(255,255,255,0.1)"

// Copyright span:
color: "rgba(255,255,255,0.35)",

// "Privacy Policy" / "Terms" spans:
color: "rgba(255,255,255,0.35)",
// hover: color "rgba(255,255,255,0.6)"
```

- [ ] **Step 7: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: update Footer — navy bg, gold CTA, white text hierarchy"
```

---

## Self-Review

**Spec coverage check:**
- ✅ globals.css → Task 1
- ✅ Nav → Task 2
- ✅ Problem → Task 3
- ✅ AIEmployee → Task 4
- ✅ ROICalculator → Task 5
- ✅ Testimonials → Task 6
- ✅ EmailCapture → Task 7 (navy dark band)
- ✅ Compare → Task 8
- ✅ Solutions → Task 9
- ✅ WhoWeServe → Task 10
- ✅ Process → Task 11
- ✅ Pricing → Task 12
- ✅ FAQ → Task 13
- ✅ AlaCartePricing → Task 14
- ✅ PlanGuide → Task 15
- ✅ TechStack → Task 16
- ✅ CTA → Task 17 (navy dark section)
- ✅ BookingSection → Task 18 (iframe invert removed)
- ✅ Contact → Task 19
- ✅ Footer → Task 20 (navy anchor)

**Placeholder scan:** No TBDs or TODOs found. All steps contain actual code.

**Type consistency:** All color values reference the same variable names throughout. `#B4945D` / `var(--gold)` used consistently for primary gold. `#0F2240` / `var(--text)` / `var(--blue)` (now navy) used consistently for dark/navy.

**Gap from spec:** BookingSection iframe `filter: invert(1) hue-rotate(180deg)` removal is explicitly included in Task 18 ✅. `animation: "border-glow 3s..."` removal from CTA button is in Task 17 ✅.

**Parallelization note:** Tasks 2–20 are all independent. After Task 1 (globals.css) completes, tasks can be dispatched in groups:
- Group A: Tasks 2, 3, 4, 5
- Group B: Tasks 6, 7, 8, 9
- Group C: Tasks 10, 11, 12, 13
- Group D: Tasks 14, 15, 16, 17, 18, 19, 20
