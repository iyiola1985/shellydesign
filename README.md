# SHELLYAND LLC — Premium Construction Website

A modern, luxury, award-winning style website for **SHELLYAND LLC** — construction, interior decoration, and equipment supply. Built with cinematic animations, glassmorphism, parallax scrolling, and a premium dark/light experience.

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion** (cinematic animations, scroll reveals, parallax)
- **next-themes** (dark/light mode)
- **lucide-react** (icons) + custom SVG brand icons

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero video background, services, projects, why-us, process, testimonials, CTA |
| `/about` | Company story, mission, vision, timeline, CEO message |
| `/services` | Six core services with detailed alternating layouts |
| `/projects` | Filterable masonry portfolio with hover reveals |
| `/equipment` | Equipment supply categories and benefits |
| `/contact` | Contact form, Google Maps embed, details, WhatsApp |

## Key Features

- Full-screen cinematic hero with **video background** and parallax
- **Glassmorphism** navbar, cards, and overlays
- **Parallax scrolling** + scroll-triggered reveal animations
- **Sticky navigation** with scroll-aware styling and animated mobile drawer
- **Dark / light mode** toggle (defaults to dark)
- Floating **WhatsApp** contact button
- Scroll progress indicator
- Fully **responsive** and **SEO optimized** (metadata, Open Graph, sitemap, robots)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve production build
```

## Configuration

All company information (name, CEO, address, phones, email, services, projects,
testimonials, social links, Google Maps) lives in a single source of truth:

```
src/lib/site.ts
```

Update that file to change content site-wide.

## Notes

- Imagery is loaded from Unsplash (configured in `next.config.mjs`). Replace with
  licensed/owned assets for production.
- The hero uses a sample construction clip. Replace the `<source>` in
  `src/components/sections/hero.tsx` with your own licensed footage before launch.
- The contact form opens the visitor's email client via `mailto:`. For server-side
  delivery, connect it to an email/API service (e.g. Resend, Formspree).
