# Building Better Together — Campaign Site

Premium editorial campaign site for a General Secretary candidate, built with Next.js 16 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx      — fonts (Cormorant Garamond + Inter), metadata
  page.tsx         — composes all sections
  globals.css       — base styles, color tokens via Tailwind
components/
  Navbar.tsx        — transparent → solid on scroll
  Hero.tsx          — editorial hero with parallax portrait
  About.tsx         — magazine-style bio layout
  Journey.tsx        — signature horizontal connected-milestone roadmap
  Vision.tsx         — six-principle editorial grid
  Blueprint.tsx       — alternating council-by-council plan
  Network.tsx         — "Beyond the Classroom" gallery + quote
  Gallery.tsx          — Pinterest-style masonry
  Contact.tsx           — minimal closing section
  Footer.tsx
  Reveal.tsx             — shared fade/rise scroll animation primitive
```

## Notes

- All imagery currently points to royalty-free Unsplash placeholders — swap the `src` values in each component for real photography before launch.
- Update the name, email and social links in `Navbar.tsx` and `Contact.tsx`.
- Colors and type live in `tailwind.config.ts` under `theme.extend` (`navy`, `gold`, `cream`) — change once, it updates everywhere.
- Motion respects `prefers-reduced-motion` (see `globals.css`).

## Design system (v2 — award-worthy pass)

- **Fluid type scale** (`tailwind.config.ts` → `fontSize.fluid-*`): every heading and paragraph scales smoothly with viewport width instead of jumping between fixed breakpoints.
- **Whitespace**: section padding now lives in `.section-space` (`app/globals.css`) — a single class controls vertical rhythm site-wide.
- **Motion**: all reveals moved to a shared `[0.16, 1, 0.3, 1]` "silk" easing curve for a consistent, slowed-down editorial feel; headings reveal line-by-line via `RevealText`; grids/cards stagger in via `RevealGroup`.
- **Accessibility**: skip-to-content link, visible focus rings, `prefers-reduced-motion` support, semantic `<main>`/`<footer>` landmarks, and eyebrow labels use a darker gold (`gold-dark`) for AA-safe contrast on cream.
- **Buttons/links**: replaced flat hover fills with a wipe-fill on the primary CTA and an animated underline on text links — a quieter, more editorial interaction than a color swap.
- **New components**: `RevealText.tsx` (masked heading reveal) and `ScrollProgress.tsx` (hairline scroll indicator).
