# AGENTS.md

## Project

Single-page marketing site for Dr. Khalid Khan Zadran (neurosurgeon), built with React 19, Vite 6, and Tailwind CSS v4. No router, backend, or data layer: navigation uses in-page anchors, and the contact form builds a pre-filled WhatsApp URL client-side.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the built site

There is no test, lint, typecheck, or formatter script configured. Verify changes with `npm run build` and a manual browser check.

## Source layout

- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`; section order is defined in `App.jsx`, and `main.jsx` is the only importer of `src/index.css`.
- `src/components/` holds one component per page section plus shared pieces (`Reveal`, `SectionHead`, `CircleArrowButton`, `BrainLoop`, `icons`, `ImgPlaceholder`).
- `index.html` owns the page title, SEO meta tags, favicon, and Google Fonts links.
- `static-html/` is an earlier standalone HTML/CSS/JS prototype. It is not imported or built; leave it alone unless explicitly asked.
- `dist/` is generated output. Never edit it by hand.
- Images/videos live in `public/` and are referenced as absolute paths (e.g. `/contact-doctor.png`).

## Styling conventions

- Tailwind v4 is configured only through `@tailwindcss/vite`; there is no `tailwind.config.js`. Theme tokens and reusable classes are defined in `src/index.css` under `@theme` and `@layer components`.
- Use the existing tokens instead of raw colors: `navy-*`, `teal-*`, `lavender`, `cream`, `ink`, `muted`, `line`, `page`, `wa`; fonts are `font-display` (Sora) and `font-body` (Inter).
- Tailwind v4's dynamic spacing makes non-standard steps such as `py-21` and `px-4.5` valid; don't replace them with arbitrary-value syntax.
- Reusable classes: `glass`, `liquid-glass` (colourless frosted button/icon surface), `section-tinted`, `hero-dots`, `img-placeholder`, `dari`, and the `btn-*` family. Extend these rather than duplicating styles inline.
- Google Fonts are loaded in `index.html`; changing font families requires updating both the link and `@theme`.
- Sections use `py-21 scroll-mt-[108px]` to clear the sticky 108px header, and each anchor target needs a matching `id`. Adding/renaming a section means updating `App.jsx`, `Header.jsx`'s `NAV_LINKS`, and `Footer.jsx`'s `NAV_LINKS`/`SERVICES` links.
- Dari/Pashto text uses the `dari` class with `dir="rtl"`.

## Gotchas

- Contact data is duplicated: `Contact.jsx` constants (`CLINIC_NUMBER`, `WA_NUMBER`, `CLINIC_NUMBER_PRETTY`, `FACEBOOK_URL`), `Footer.jsx`, `WhatsAppFloat.jsx`, and FAQ copy in `QA.jsx`. The clinic address also appears in `Contact.jsx`, `Footer.jsx`, and `QA.jsx`. Update every occurrence; `wa.me` links use digits only.
- The contact form is intentionally frontend-only and calls `window.open` with a `wa.me` URL. Do not add an API call or backend for it.
- Animations use `framer-motion`; `Reveal` uses `once: true`. Respect the `prefers-reduced-motion` CSS block when adding motion.
- The hero video relies on `BrainLoop`'s two-video crossfade and requires `muted`, `playsInline`, and `autoPlay` to work in browsers.
- `Specializations` is a carousel whose cards expand on hover/tap/keyboard focus; preserve all three interaction paths when editing it.
- Placeholder image components (`ImgPlaceholder`) are intentional stand-ins, not bugs.
