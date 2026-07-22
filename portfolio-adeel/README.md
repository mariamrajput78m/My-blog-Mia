# Mariam Mudassar — Portfolio

A premium, animated personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **GSAP**-ready structure. Glassmorphism + aurora background, magnetic buttons, tilt cards, animated timeline, custom cursor, dark/light mode, and a terminal-style loading screen.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production build:

```bash
npm run build
npm start
```

> Fonts (Space Grotesk + Inter) are loaded via `next/font/google` and require an internet connection at build time. This is normal — Vercel and any standard host will fetch them automatically.

## Project structure

```
app/
  layout.tsx        → fonts, SEO metadata, OpenGraph, JSON-LD, providers
  page.tsx           → assembles all sections
  globals.css         → theme tokens, glass utilities, animations
components/
  Hero, About, Skills, Projects, Timeline, Contact, Footer
  Navbar, ThemeToggle, ThemeProvider, CustomCursor, BackgroundScene,
  ScrollProgress, LoadingScreen, Reveal, MagneticButton, AnimatedCounter,
  TypingText, SectionHeading, ProjectCard
lib/
  data.ts             → all content (name, bio, skills, projects, education, contact)
public/
  resume.pdf          → your uploaded CV, used by the "Download Resume" button
  favicon.svg
```

## Customizing content

Everything text-based lives in **`lib/data.ts`** — edit that one file to update your bio, skills, projects, education, or contact details without touching any component.

## Adding your photo

The hero currently shows a gradient "MM" placeholder (glassmorphic, animated). To use a real photo:

1. Add your image to `public/`, e.g. `public/profile.jpg`.
2. In `components/Hero.tsx`, replace the placeholder `<div>` inside the "Photo column" block with a Next.js `<Image src="/profile.jpg" ... fill className="object-cover" />` (using `next/image` for optimization).

## Swapping the resume

`public/resume.pdf` is currently your uploaded CV. Replace that file (same filename) any time you update your resume — no code changes needed.

## Live project demos

Each project card shows a "Code" link to GitHub. If any project has a live/hosted demo, add its URL to the `demo` field for that project in `lib/data.ts` and a "Live Demo" button will appear automatically.

## Deploying

The fastest path is **Vercel** (built by the Next.js team):

1. Push this project to a GitHub repo.
2. Import it at vercel.com → it detects Next.js automatically.
3. Deploy — you'll get a live `.vercel.app` URL (or connect a custom domain).

## Notes

- Dark/light mode is persisted in `localStorage` and defaults to dark.
- Reduced-motion is respected (`prefers-reduced-motion`) for accessibility.
- Custom cursor auto-disables on touch devices.
- Update `siteUrl` in `app/layout.tsx` once you have a real domain, and add a real `public/og-image.png` (1200×630) for social share previews.
