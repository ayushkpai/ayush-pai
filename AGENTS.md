# AGENTS.md

Personal site for Ayush Pai — https://ayushpai.com (GitHub Pages, `main` branch).

## Stack

- Plain static HTML, no framework, no runtime build step for deploy. Pushing to `main` publishes.
- Tailwind CSS v3 is compiled locally to `styles.css` — never add the Play CDN (`cdn.tailwindcss.com`) back.

## Files

- `index.html` — the whole site: markup, inline `<style>`, inline `<script>`, overlays, theme and music controls.
- `retro-grand-prix.html` — self-contained canvas game. Redirects to `/#retro-grand-prix` when opened top-level; runs in an iframe inside the modal otherwise.
- `404.html` — meta refresh to `/`.
- `images/`, `audio/` — assets referenced by `index.html`.
- `src/input.css`, `tailwind.config.js` — Tailwind source; output is `styles.css`.

## Commands

```sh
npm install         # once
npm run build:css   # rebuild styles.css after editing classes
npm run watch:css   # rebuild on save while developing
```

Commit the regenerated `styles.css` with any HTML class change, otherwise the deployed page uses stale styles.

## Conventions

- Keep the page as a single `index.html` with inline CSS/JS unless asked to split it.
- Sections: Projects, Writing, Links — each a heading with a hairline rule, then a `grid-cols-1 sm:grid-cols-2` grid.
- Cards: `rounded-2xl card-copy border border-black p-6`. Cards are not clickable; every action is an internal pill button/link.
- Buttons use the shared pill style: `rounded-full border-2 border-[#5966cc]/60 bg-[#5966cc]/5 px-5 py-2 ...` with pink (`#eb58e3`) hover and the `dark:` equivalents.
- Dark mode: `class` strategy on `<html>`, toggled by `#themeToggle`, persisted in `localStorage` under `theme`.
- Overlay z-index ladder: scroll hint `z-50`, volume widget `z-50`, retro modal `z-[60]`, GitHub backdrop `z-[70]`, GitHub sheet `z-[80]`, toasts `z-[90]`, page loader `z-[100]`.
- Animation: `drop-in-sm` / `in-bottom` at `0.9s cubic-bezier(0.22, 1, 0.36, 1)`, disabled under `prefers-reduced-motion`.
- Scrollbars are intentionally hidden; `#scrollHint` fades out after 80px of scroll.

## Git

- Do not commit unless explicitly asked. "commit" means commit the current changes; "checkout" means discard them.
