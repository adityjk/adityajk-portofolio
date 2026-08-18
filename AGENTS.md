# AGENTS.md

> Standing instructions for any coding agent (OpenCode, Antigravity, etc.) working in this repo. This file is loaded into context on every task — treat it as binding, not a suggestion.

## 1. Project Overview

A single-page personal portfolio site (warm editorial minimal style — see DESIGN.md). Sections: hero, client logos, about, selected works list, contact/footer. No CMS, no blog, no backend — static content, hand-edited data file for work items.

**DESIGN.md is the source of truth for all visual/UX decisions.** The agent must not invent colors, fonts, spacing, or motion behavior — if DESIGN.md doesn't specify something, ask before deciding.

## 2. Tech Stack

- Framework: **Astro** — chosen because the site is content-heavy, mostly static, and DESIGN.md explicitly avoids WebGL/heavy JS (section 5, 9). Astro ships zero JS by default and only hydrates the small interactive bits (theme toggle, scroll-reveal, hover states) via islands — matches the "light JS helper" requirement instead of a full SPA framework.
- Language: **TypeScript**
- Styling: **Plain CSS with custom properties (design tokens)** — no Tailwind. DESIGN.md's palette/type system is small enough that hand-written tokens stay clearer than a utility framework, and it keeps output CSS minimal.
- Animation: **Motion One** for scroll-reveal and load stagger (per DESIGN.md section 5) — loaded only on the client islands that need it, not globally.
- Package manager & runtime: **Bun** (no separate Node.js install required — Astro 6+ officially supports Bun as a runtime target)

## 3. Folder Structure

```
src/
  components/       # small reusable pieces (Nav, ThemeToggle, WorkListItem, LogoMarquee)
  sections/         # one file per page section (Hero, About, SelectedWorks, Footer)
  data/
    works.ts        # array of work items (see DESIGN.md section 6 for fields)
    clients.ts       # client/collaborator logo list
  styles/
    tokens.css      # all design tokens (colors, spacing, type scale) — single source, matches DESIGN.md §2-3
    global.css       # resets + base element styles
  layouts/
    Base.astro       # <html> shell, meta tags, font loading
  pages/
    index.astro       # assembles all sections
public/
  fonts/
  images/
  favicon assets
```

- Work item data lives in `src/data/works.ts` as a typed array — never hardcode work entries inside components.
- Design tokens live only in `src/styles/tokens.css` — components reference `var(--token-name)`, never raw hex values.

## 4. Commands

- Install: `bun install`
- Dev server: `bun run dev`
- Build: `bun run build`
- Preview build: `bun run preview`
- Lint: `bun run lint` (ESLint)
- Format: `bun run format` (Prettier)
- Type check: `bun run typecheck` (`astro check`)
- The agent must run `bun run lint` and `bun run typecheck` before considering a task done, and fix any errors it introduced.

## 5. Coding Conventions

- Components: `.astro` for static/structural pieces, framework islands only where interactivity is required (theme toggle, scroll-reveal trigger) — keep islands as small as possible.
- Naming: PascalCase for component files (`WorkListItem.astro`), camelCase for functions/variables, kebab-case for CSS custom property names (`--color-accent`).
- Path aliases: use `@/` for `src/` (configured in `tsconfig.json` / `astro.config.mjs`) — no relative `../../../` chains.
- Comments: only for non-obvious logic (e.g. why a specific easing/stagger timing was chosen); no comments restating what the code visibly does.
- Commits: Conventional Commits (`feat:`, `fix:`, `style:`, `chore:`).

## 6. Design System Rules (mirrors DESIGN.md — keep in sync)

- All colors, spacing, and font sizes must be CSS custom properties defined in `src/styles/tokens.css`. No hardcoded hex/px values in component files.
- Token names should map directly to DESIGN.md language, e.g.:
  - `--color-bg`, `--color-bg-dark`, `--color-text`, `--color-text-dark`, `--color-accent`, `--color-muted`
  - `--font-serif` (Fraunces), `--font-grotesk` (Space Grotesk)
  - `--space-1` … `--space-8` (8px base scale)
- If a change in DESIGN.md updates a value, update `tokens.css` in the same task — the two files must never drift apart.

## 7. What the Agent SHOULD Do

- Ask before adding any new dependency, especially anything that would pull in more client-side JS than DESIGN.md's motion approach calls for.
- Keep each section as its own component in `src/sections/`, composed together in `pages/index.astro`.
- Respect `prefers-reduced-motion` in every animation added (DESIGN.md section 9).
- Optimize all images to `.webp` and correct dimensions before committing; use Astro's built-in `<Image />` for anything in `src/`.
- Verify color-contrast pairs against DESIGN.md's stated pairs when adding new text/background combinations.

## 8. What the Agent Should NOT Do

- Do not introduce WebGL, shaders, or a heavy animation framework (GSAP full suite, Three.js) — DESIGN.md explicitly rules this out.
- Do not add a UI/component library (e.g. shadcn, MUI) — this is a small, fully custom design system.
- Do not add Tailwind or any CSS-in-JS solution — plain CSS + tokens only.
- Do not restructure the folder layout without asking.
- Do not add pages/routes beyond the single-page structure without confirmation.
- Do not invent new color values, fonts, or spacing values not present in `tokens.css` / DESIGN.md.

## 9. Testing / QA

- No automated test suite for v1 — this is a static marketing/portfolio site, QA is visual + performance based.
- Before marking a task done: run `bun run build && bun run preview`, check the page in both light and dark mode, at mobile (375px) and desktop (1440px) widths.
- Run a Lighthouse pass on the built output; target 95+ on Performance and Accessibility given the lightweight stack chosen.

## 10. Deployment

- Hosting: **Netlify**
- Domain: **adityajk.netlify.app**
- Deploy command: automatic on push to `main` via Netlify Git integration (`bun run build`, output `dist/`)
- Environment variables: none expected for a static site — note here if any are added later (e.g. analytics ID).
