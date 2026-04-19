# Digital Departments — Page Spec
**Route:** `/digital-departments`
**Date:** 2026-04-19
**Status:** Approved

---

## Overview

A waitlist landing page for Latin Prime Systems' upcoming "Digital Departments" product — AI agent teams organized as virtual business departments. Businesses buy a department (e.g. Marketing, Finance) instead of hiring staff. Each department ships with 4 named AI agents that have distinct roles and pixel-art avatars.

The page follows the existing latin-prime-v2 design system exactly: white/light background (`var(--bg)`), Plus Jakarta Sans headings, DM Mono labels, Inter body text, brand colors blue/gold/navy.

Language: English only (Spanish version deferred).

---

## Sections

### 1. Hero

- **Background:** `var(--bg)` with the existing `<Threads>` component at low opacity (same as homepage pattern) for subtle animated depth
- **Label (DM Mono):** `COMING SOON · LATIN PRIME SYSTEMS`
- **Headline (SplitText, letter-by-letter entry):** `"Your Business. Fully Staffed. No Hires."`
- **Rotating word (new `<RotatingText>` component, framer-motion):** cycles through `Marketing · Finance · Sales · HR · Support` inline within the sentence `"Meet your AI ___ Department."`
- **Subheadline:** `"Stop paying salaries for tasks AI can handle. Buy a department of 4 specialized agents — connected to your tools, working 24/7."`
- **CTA button:** `"Join the Waitlist"` — navy background, gold hover, wrapped in new `<StarBorder>` animated component
- **Social proof line:** `"137 businesses already waiting"` in muted text below CTA

---

### 2. How It Works (3 steps)

Background: `var(--surface)` (#EEF3F8)

Three horizontal cards (stack on mobile):
1. **Choose Your Department** — Pick from 5 specialized AI teams built for your business type
2. **Connect Your Tools** — Link your email, CRM, calendar, and Slack in minutes
3. **They Start Working** — Agents handle the tasks. You review, approve, and scale.

Each card: number badge (gold), icon, title, description. No interactivity needed.

---

### 3. Department Cards Grid

Background: `var(--bg)`

**Section label (DM Mono):** `AVAILABLE DEPARTMENTS`
**Headline:** `"Pick your team. Deploy in days."`

5 cards in a responsive grid (3 col desktop, 2 col tablet, 1 col mobile). Each card:

- Department name + emoji icon in header
- 4 pixel-art agent sprites (CSS-drawn, no external images) arranged in a 2×2 grid
- Agent name + role label below each sprite
- On hover: card border animates with `<StarBorder>` (CSS conic-gradient sweep animation), background lifts with subtle shadow
- Collapsed by default, hover reveals agent task list (4–5 bullet tasks per department)

**Agent roster:**

| Department | Agent 1 | Agent 2 | Agent 3 | Agent 4 |
|---|---|---|---|---|
| 📣 Marketing | Maya – Copywriter | Rex – Ad Manager | Luna – Social Media | Pixel – Designer |
| 💰 Finance | Finn – Bookkeeper | Nova – Invoicing | Atlas – Reports | Sage – Tax Prep |
| 🎯 Sales | Chase – Lead Hunter | Aria – Follow-Up | Max – CRM Manager | Zara – Closer |
| 👥 HR | Oliver – Onboarding | Elle – Contracts | Bruno – Scheduling | Cleo – Compliance |
| 💬 Support | Sam – Live Chat | Echo – Tickets | Iris – Escalations | Bolt – FAQ Bot |

**Pixel sprites:** CSS box-shadow pixel art technique — each agent gets a unique 16×16 pixel design using the brand palette (blues, golds, navy). No external images or SVGs.

---

### 4. Waitlist Form

Background: `var(--navy)` (dark section — accent break, same pattern as homepage CTA)

**Headline:** `"Be the first to deploy your department."`
**Subheadline:** `"Early access members get priority onboarding and locked-in launch pricing."`

**Form fields:**
1. Full Name (text input)
2. Email Address (email input)
3. Department of Interest (select dropdown): Marketing / Finance / Sales / HR / Customer Support / All of them
4. Business Type (select dropdown): Service Business / Retail / Restaurant / Healthcare / Law / Real Estate / Other

**Submit button:** `"Secure My Spot"` — gold background, navy text. Wraps a new `<ClickSpark>` component that fires spark particles on click.

**Post-submit state:** Form collapses, shows confirmation message: `"You're on the list. We'll reach out when your department is ready."` with a checkmark animation.

**Form action:** Currently a no-op (`console.log` + state toggle). Ready to wire to GHL or any backend later.

---

## New Components to Build

Three new React Bits–style components to add to `/components/`:

### `RotatingText.tsx`
- Props: `words: string[]`, `interval?: number` (default 2000ms), `className?: string`
- Uses framer-motion `AnimatePresence` with a vertical slide + fade transition
- Renders inline (use `display: inline-block` with fixed width to prevent layout shift)

### `StarBorder.tsx`
- Props: `children`, `color?: string` (default `var(--gold)`), `speed?: string` (default `"4s"`)
- CSS conic-gradient that animates around the border of the wrapped element
- Implemented with a pseudo-element via inline `<style>` tag + unique class ID
- Use `border-radius` matching the card's radius

### `ClickSpark.tsx`
- Props: `children`, `sparkColor?: string` (default `var(--gold)`), `sparkCount?: number` (default 8)
- On click, fires N SVG line particles that burst outward and fade
- Uses `useRef` on the container and absolute-positioned SVG overlay

---

## File Structure

```
app/
  digital-departments/
    page.tsx          ← metadata + page shell
components/
  RotatingText.tsx    ← new
  StarBorder.tsx      ← new
  ClickSpark.tsx      ← new
  sections/           ← (optional subfolder, or flat in /components)
    DigitalDepts/
      DDHero.tsx
      DDHowItWorks.tsx
      DDDepartmentCards.tsx
      DDWaitlistForm.tsx
```

---

## SEO Metadata

```ts
title: "Digital Departments — AI Agent Teams for Your Business | Latin Prime Systems"
description: "Buy your AI Marketing, Finance, Sales, HR, or Support department. 4 specialized agents, connected to your tools, working 24/7. Join the waitlist."
canonical: "https://latinprimesystems.com/digital-departments"
og:image: (reuse existing LPS og image until product has its own)
robots: index, follow
```

---

## Design Constraints

- No new dependencies — use framer-motion (already installed) and CSS only for new components
- All pixel art via CSS `box-shadow` technique (no images, no external assets)
- Form is purely client-side for now — no backend wiring in this phase
- Must pass Lighthouse accessibility: all inputs labelled, color contrast ≥ 4.5:1, keyboard navigable
