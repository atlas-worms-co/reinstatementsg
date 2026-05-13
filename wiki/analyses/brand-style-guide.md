---
type: analysis
query: "Brand style guide for reinstatement.sg redesign"
date: 2026-05-13
---

# IA Builders — Brand Style Guide

**Positioning:** Precision reinstatement. Zero surprises.  
**Tone:** Clinical, professional, numbers-driven. B2B premium service firm — not a friendly trades contractor.  
**Target:** Corporate tenants, property managers, facilities heads, MNCs in Singapore.

---

## Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Void | `#0C0F0E` | Page background |
| Surface 1 | Dark Surface | `#131716` | Card backgrounds, sections |
| Surface 2 | Mid Surface | `#1A1E1D` | Elevated cards |
| Surface 3 | High Surface | `#212624` | Inputs, raised elements |
| Accent | Precision Teal | `#0CB8A8` | CTAs, icons, active states, highlights |
| Accent Dim | Dark Teal | `#0A9080` | Hover states |
| Accent Glow | Teal Wash | `rgba(12,184,168,0.12)` | Backgrounds behind accent elements |
| Text Primary | Warm White | `#EEE9E0` | Headlines, body text |
| Text Secondary | Stone | `#8C9490` | Supporting copy, meta text |
| Text Tertiary | Muted | `#555E5B` | Placeholders, decorative text |
| Border Light | Ghost | `rgba(238,233,224,0.07)` | Default borders |
| Border Mid | | `rgba(238,233,224,0.12)` | Hover states, active borders |

### Rationale
Dark base creates premium differentiation in a category dominated by white contractor sites. Teal accent reads as precise, clean, modern — aligned with "precision reinstatement" positioning. Warm white (vs pure white) keeps the dark theme from feeling cold.

---

## Typography

| Role | Font | Weight | Size | Notes |
|------|------|--------|------|-------|
| Display / H1 | Syne | 800 | clamp(2.8rem–5.2rem) | Tight letter-spacing (-0.03em), geometric |
| Section Titles | Syne | 700 | clamp(2rem–3rem) | |
| Card Titles | Syne | 700 | 15–18px | |
| Body | Outfit | 400 | 14–16px | 1.65–1.75 line height |
| Labels / Tags | Barlow Condensed | 600 | 10–12px | ALL CAPS, 0.12–0.2em letter-spacing |
| Stats / Numbers | Barlow Condensed | 700 | 2.4–3.4rem | Tight, numerical display |
| Buttons | Outfit | 600 | 13–15px | |

**Google Fonts import:**
```
https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600&family=Barlow+Condensed:wght@300;400;600;700&display=swap
```

---

## Spacing & Layout

- **Container:** max-width 1200px, 32px horizontal padding (20px on mobile)
- **Section padding:** 100px vertical (desktop), 60px (mobile)
- **Grid gap:** 24px (cards), 1px (service grid for seamless look)
- **Card padding:** 28–32px
- **Generous whitespace:** the brand reads as premium through restraint, not decoration

---

## Component Rules

### Cards
- Background treatment only — `var(--surface)`
- Hover: background lightens + top 2px accent rule appears (`::after` pseudo-element)
- **NO left border accents** — never use `border-left` as an accent
- Subtle `border: 1px solid var(--border)` at rest
- Border radius: 16px for feature cards, 4px for small elements

### Buttons
- **Primary:** `background: var(--accent)`, `color: #000`, 4px border-radius, hover lifts 2px
- **Secondary:** transparent with `border: 1px solid var(--border-mid)`, hover tints to accent
- Font: Outfit 600, 0.02em letter-spacing
- Padding: 15px 32px (primary), 15px 28px (secondary)

### Section Labels
- Barlow Condensed 600, 11px, ALL CAPS, 0.18em letter-spacing
- Accent color with a 24px line before the text
- Always above section titles

### Tags / Badges
- 2px border-radius (sharp, clinical)
- `.tag--accent`: accent glow background + accent text
- `.tag--muted`: surface-3 background + text-2

### Forms
- Dark background inputs (`var(--surface-2)`)
- Focus state: `border-color: var(--accent)` + slightly lighter background
- Labels: Barlow Condensed 600, 12px, ALL CAPS

---

## Motion

- **Scroll reveal:** fade + 24px Y translate, 0.6s ease, 0.08 threshold
- **Hover transitions:** 0.2s ease across all interactive elements
- **Button hover:** 2px translateY lift + box-shadow glow
- **FAQ accordion:** max-height transition, 0.4s ease
- **No:** parallax, page transitions, spinning loaders, progress bars, typewriter effects
- Principle: every animation serves comprehension or confirms interaction. Nothing decorative.

---

## Iconography

- Inline SVG preferred for custom icons
- Stroke-based (2px, round linecap) from Heroicons/Feather style
- Emoji used for service category icons only — functional, not decorative
- Color: `var(--accent)` on dark backgrounds

---

## Photography / Imagery Guidelines

When real project photos are available:
- Show before/after pairs
- Consistent color treatment: cool, slightly desaturated
- Never use stock photos of smiling people
- Show the work: floors, ceilings, clean concrete, stripped spaces
- Add location badge overlay (matching `.tag--muted` style)

---

## Voice & Copy Rules

1. **Lead with numbers.** "7 years. 100+ projects. 0 disputes." beats "We're experienced and trusted."
2. **Name the problem.** "The contractor you won't have to chase." addresses a specific pain.
3. **No adjective soup.** "Professional, reliable, experienced" says nothing. Cut them.
4. **Direct address.** "We come to you" not "On-site assessment is provided."
5. **Specificity wins.** "Grade A CBD" is better than "high-end."
6. **Never say "trusted" or "leading" without evidence.** Show the certification, the project, the outcome.

---

## Don'ts

- No left border accents on cards
- No gradients with purple
- No Inter/Roboto/Arial
- No "lorem ipsum" in production
- No stock construction imagery (generic hard hats, etc.)
- No animated counters or excessive scroll effects
- No garish gold/red accent colors
- Don't mix warm and cool grays

---

## Related Pages

- [[ia-builders-engineering]]
- [[ia-builders-site-audit]]
- [[office-reinstatement-sg]]
