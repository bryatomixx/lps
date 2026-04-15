# Homepage Redesign — Design Spec
Date: 2026-04-02

## Summary
Full redesign of all homepage components (excluding Hero, already done) to match the premium white/light aesthetic established in the Hero redesign. Approach: update globals.css first, then update each component. No changes to functionality, copy, or routing.

---

## Design Decisions
- **Theme:** Light (white/warm off-white), NOT dark
- **Alternation pattern:** Sections alternate between `--bg` (#FFFFFF) and `--surface` (#F7F6F3). Two dark sections break the rhythm for visual impact: EmailCapture (navy mid-funnel capture) and CTA + Footer (navy close).
- **globals.css:** Updated to light theme variables. Any untouched page (niche pages, /es) will inherit light vars — acceptable for this phase.

---

## New Design System (globals.css)

### CSS Variables
```css
--bg: #FFFFFF;
--surface: #F7F6F3;
--surface2: #EFEEE9;
--border: rgba(15,34,64,0.07);
--border2: rgba(15,34,64,0.15);
--blue: #0F2240;           /* repurposed — points to navy for legacy refs */
--blue-bright: #C5A059;    /* repurposed — points to gold-bright for legacy refs */
--blue-dim: rgba(15,34,64,0.06);
--blue-glow: rgba(180,148,93,0.25);
--gold: #B4945D;
--gold-bright: #C5A059;
--gold-dim: rgba(180,148,93,0.1);
--gold-glow: rgba(180,148,93,0.3);
--green: #00a854;
--green-dim: rgba(0,168,84,0.1);
--text: #0F2240;
--text-muted: rgba(15,34,64,0.6);
--text-dim: rgba(15,34,64,0.35);
```

### Updated Global Rules
- `body`: background `var(--bg)`, color `var(--text)`
- Scrollbar: gold (`#B4945D`) thumb instead of blue
- `::selection`: `rgba(180,148,93,0.2)` with navy text
- `.slabel`: color `var(--gold)`, `::before` line = gold gradient
- `.gdiv`: linear-gradient using `rgba(15,34,64,0.08)` and `rgba(180,148,93,0.18)`
- `.btn-glow`: update shadow to gold
- Remove `--blue-glow-strong` and `--blue-glow-strong` references

---

## Section Map

| Section | Background | Notes |
|---------|-----------|-------|
| Nav | transparent → `rgba(255,255,255,0.95)` scrolled | Navy text, gold CTA |
| Hero | `#FFFFFF` | ✓ Already done |
| Problem | `--surface` | White cards on warm bg |
| AIEmployee | `--bg` (white) | Navy/gold table |
| ROICalculator | `--surface` | Gold sliders |
| Testimonials | `--bg` (white) | Gold active states |
| EmailCapture | `#0F2240` | Dark interrupt band |
| Compare | `--surface` | Gold "After" accent |
| Solutions | `--bg` (white) | Warm off-white cards |
| WhoWeServe | `--surface` | White cards, white modal |
| Process | `--bg` (white) | Warm off-white step cards |
| Pricing | `--surface` | Navy featured card |
| FAQ | `--bg` (white) | Gold expand icon |
| AlaCartePricing | `--surface` | Gold selected state |
| PlanGuide | `--bg` (white) | Warm off-white outer card |
| TechStack | `--surface` | Logos visible on warm bg |
| CTA | `#0F2240` | Dark final push |
| BookingSection | `--bg` (white) | Remove iframe invert filter |
| Contact | `--surface` | White form card |
| Footer | `#0F2240` | Navy, gold CTA |

---

## Common Patterns (apply everywhere)

### Cards
- Background: `#FFFFFF` (on surface sections) or `var(--surface)` (on white sections)
- `borderRadius: 12px`
- `border: 1px solid var(--border)`
- `boxShadow: 0 2px 8px rgba(15,34,64,0.04), 0 8px 32px rgba(15,34,64,0.07)`
- Grid gap: `20px` or `24px` (never `2px`)

### Section Headings (H2)
- Color: `var(--text)` (#0F2240)
- Accent word/phrase: replace `<em>` gradient with `color: var(--gold)` (#B4945D), keep italic
- Remove all `linear-gradient(135deg, var(--blue), var(--gold))` gradient text

### Primary CTA Button
- `background: #B4945D` → hover `#C5A059`
- `color: white`
- `borderRadius: 8px`
- `boxShadow: 0 4px 20px rgba(180,148,93,0.28)`
- Remove blue glow shadows

### Secondary CTA Button
- `background: white` or transparent
- `color: #0F2240`
- `border: 1.5px solid rgba(15,34,64,0.18)`
- `borderRadius: 8px`
- Hover: `borderColor: rgba(15,34,64,0.32)`, `background: rgba(15,34,64,0.03)`

### Form Inputs
- `background: #FFFFFF`
- `border: 1px solid rgba(15,34,64,0.15)`
- `color: var(--text)`
- `borderRadius: 8px`
- Focus: `borderColor: rgba(180,148,93,0.5)`

### Check Marks / Bullets
- Replace blue `✓` with gold `#B4945D` or `#C5A059`

---

## Component-by-Component Rules

### Nav
- Transparent at top (white hero behind = invisible)
- Scrolled: white `rgba(255,255,255,0.95)`, `border-bottom: 1px solid rgba(15,34,64,0.08)`, `backdropFilter: blur(20px)`
- Links: `rgba(15,34,64,0.55)` → hover `#0F2240`
- "Book a Demo" CTA: `background: #B4945D`, white text, hover `#C5A059`
- Mobile menu: white background, navy text, gold CTA button
- Hamburger lines: navy

### Problem
- Section bg: `var(--surface)`
- Cards: white bg, `borderRadius: 12`, soft shadow, `gap: 24`
- Top accent bar on hover: `#B4945D` (was blue)
- "What we do about it" link: `color: var(--gold)`

### AIEmployee
- Section bg: `var(--bg)` (white)
- Table wrapper: white bg, rounded-12, soft shadow
- AI column header: `color: var(--gold)`, `background: var(--gold-dim)`
- AI column rows: `background: rgba(180,148,93,0.04)`
- Check mark: gold, Cross: `#c0392b` (keep red — semantic)
- CTA: gold button

### ROICalculator
- Section bg: `var(--surface)`
- Remove grid line background decoration
- Sliders panel: white card, rounded-12
- Slider track: gold (`#B4945D`)
- Slider thumb: gold
- Plan buttons selected: gold
- Main ROI number: navy `#0F2240` (not gradient)
- ROI card: white, gold top border
- CTA: gold button

### Testimonials
- Section bg: `var(--bg)` (white)
- Main card: white, `borderRadius: 12`, soft shadow
- Active left bar: `#B4945D` (was blue)
- Active thumbnail bg: `rgba(180,148,93,0.08)`, border: gold tint
- Progress dots: gold for active
- Result chip: keep green — it's a positive outcome signal
- Navigation arrows: navy border

### EmailCapture (dark band)
- Section bg: `#0F2240` (navy)
- All text: white or white-muted
- Badge: gold border, gold text (or white)
- Inputs: white bg, navy text, gold focus
- Submit button: `#B4945D` → hover `#C5A059`
- Trust text: white at 60% opacity
- Remove grid overlay and blue gradient background

### Compare
- Section bg: `var(--surface)`
- Both cards: white bg, `borderRadius: 12`, soft shadow
- "Without Us" label: `#c0392b` red dot (keep — semantic)
- "With Latin Prime" label: `#B4945D` gold dot + text
- "After" card: subtle gold top border (2px)
- Row dividers: `rgba(15,34,64,0.06)`

### Solutions
- Section bg: `var(--bg)` (white)
- Cards: `var(--surface)` bg (warm off-white on white = subtle differentiation)
- `borderRadius: 12`, gap: 24
- Outcome badge dots: use each solution's color (simplify to gold/navy only)
- Card footer text: `var(--text-dim)`
- Remove SpotlightCard hover effect (or keep it — it's subtle)

### WhoWeServe
- Section bg: `var(--surface)`
- Industry cards: white bg, `borderRadius: 12`, soft shadow, gap: 16
- Hover: gold border instead of blue
- "See what we can do" link: gold
- "Dedicated page" link: navy
- Modal overlay: `rgba(15,34,64,0.6)` instead of black
- Modal: white bg, navy text, gold accent bar at bottom of image

### Process
- Section bg: `var(--bg)` (white)
- Step cards: `var(--surface)` bg, `borderRadius: 12`, gap: 20
- Watermark number: `rgba(15,34,64,0.04)` (was white 2.5%)
- Accent bar: `#B4945D` for all steps (not alternating blue/gold)
- Step label: `var(--gold)`
- Connector arrow: `var(--text-dim)`

### Pricing
- Section bg: `var(--surface)`
- Cards: white bg, `borderRadius: 12`, `gap: 20`
- Featured (Growth) card: `background: #0F2240` (navy) — keep dark for premium contrast
- Featured top bar: `background: linear-gradient(90deg, #B4945D, #C5A059)` (gold instead of blue)
- Badge: `background: #B4945D` (was blue gradient)
- Check marks: gold `#B4945D`
- "Best Value" badge: gold
- Currency toggle selected: gold
- Expand button: gold
- Featured CTA: gold button (on dark bg)
- Non-featured CTA: navy border, navy text
- Section divider lines between features: navy at 6% opacity

### FAQ
- Section bg: `var(--bg)` (white)
- Question dividers: `rgba(15,34,64,0.08)`
- Expand icon: navy border → gold border when open, gold `+`
- Active question text: navy
- "Book a call" button: navy border, navy text

### AlaCartePricing
- Section bg: `var(--surface)`
- Category label: `var(--text-dim)` (keep)
- Feature tiles: white bg, `borderRadius: 8`, border navy 7%
- Selected tile: `rgba(180,148,93,0.1)` bg, gold border
- Checkbox: gold when checked (was blue)
- Feature title selected: `var(--gold)` (was blue)
- Summary card: white bg, `borderRadius: 12`, soft shadow, sticky
- "N features selected" badge: gold tint (was blue)
- Submit button: gold when active, disabled = neutral

### PlanGuide
- Section bg: `var(--bg)` (white)  
- Outer card: `var(--surface)` bg, `borderRadius: 16`, soft shadow
- Row items: white bg, `borderRadius: 8`, `gap: 12` between rows
- Badge borders: use simplified gold/navy (remove emoji icons or keep)
- Starter badge: gold
- Growth badge: gold (was blue)
- Enterprise badge: navy

### TechStack
- Section bg: `var(--surface)`
- Logo opacity: `0.45` default, hover `0.9` (light-theme logos look better at lower opacity)
- Diamond separator: `rgba(180,148,93,0.5)` (was gold at 40%)
- "ElevenLabs" text: `rgba(15,34,64,0.5)` (was white 65%)

### CTA (dark section)
- Section bg: `#0F2240`
- All text: white / white-muted
- Headline: white, accent word `#B4945D` or `#EABA45`
- Stats numbers: `#B4945D` or `#C5A059` (not blue/gold gradient)
- Stat labels: white at 50% opacity
- CTA button: `#B4945D` → hover `#C5A059`, white text
- Trust text: white at 55% opacity
- Remove blue background glow

### BookingSection
- Section bg: `var(--bg)` (white)
- Calendar card: white bg, `borderRadius: 12`, soft shadow
- Top accent: gold instead of blue/gold gradient
- **Remove `filter: invert(1) hue-rotate(180deg)`** from iframe — calendar is now on white
- Trust signals: `var(--text-dim)` (navy at 35%)

### Contact
- Section bg: `var(--surface)`
- Form card: white bg, `borderRadius: 12`, soft shadow, `padding: 40px`
- Inputs: white bg, navy border, gold focus
- Submit button: gold
- WhatsApp button: keep `#25D366` green (brand color)
- Email icon: replace emoji with clean SVG or keep simple

### Footer (dark section)
- Section bg: `#0F2240`
- Brand description: white at 65%
- Region/guarantee tags: white at 12% bg, white text
- Nav links: white at 55%, hover white
- "Book a Free Demo" CTA: `#B4945D` → hover `#C5A059`
- Social icons: white with gold hover glow
- Section labels ("Navigation", "Get Started"): white at 35%
- Bottom bar divider: white at 10%
- Copyright text: white at 35%

---

## What NOT to change
- All copy (headlines, body text, CTAs text)
- All URLs (booking URL, payment links, webhook URLs)
- All component logic (ROI calculator, form submissions, testimonial carousel, modal)
- SectionReveal animation (keep as-is)
- SpotlightCard (keep but update colors if needed)
- Mobile responsive breakpoints (keep all existing)
- Footer social icons SVGs
- Iframe embed in BookingSection (only remove the invert filter)
- WhatsApp green button in Contact
- Success/error states in forms
