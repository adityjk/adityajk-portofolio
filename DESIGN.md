# DESIGN.md

## 1. Identity & Tone

- Name: Aditya Jauhari Khazindar
- Positioning: "Independent Web Developer, Wordpress Dev"
- Tone: **Warm minimal / editorial** — not cold-technical. Where the reference (surya-aditya.com) feels like a lab report — dense mono labels, stark black/white, clinical spacing — this site should feel like a well-typeset magazine spread: still restrained and confident, but with more breathing room and a human, warm undertone rather than a machine-precision one.
- References:
  - https://surya-aditya.com/ — structural inspiration: numbered work list, minimal chrome, info-dense hover states. NOT copying its cold mono/neon aesthetic.
  - https://cristinagomezruiz.com/ - structural inspiration: open animation, scroll animation, typhography, and line spacing.

## 2. Color Palette

- Base mode: **Light-first, with dark mode toggle** (reference is dark-only — this is one clear differentiator)
- Background: `#F6F3EE` (warm off-white / bone, not pure white — avoids the sterile feel)
- Dark mode background: `#15130F` (warm near-black, not pure `#000` — keeps the warmth even in dark mode)
- Primary text: `#1C1A15` on light / `#EDE9E0` on dark
- Accent: `#B5502E` (burnt terracotta/rust) — used sparingly: hover underlines, the numbered prefixes ("01.", "02."), active nav state, and cursor dot. Never as a background fill.
- Secondary muted tone: `#8A8574` (warm gray) for meta text (years, labels, captions)
- Palette rule: near-monochrome (warm neutrals) + one accent only. No blue, no neon, no pure black/white.

## 3. Typography

- Primary (headings, name, intro copy): a humanist serif — e.g. **"Fraunces"** (Google Fonts, variable) at a heavier weight for the hero name, lighter weight for body. This is the main departure from the reference's all-grotesk system — it signals "editorial" instead of "technical."
- Secondary (labels, nav, meta, numbered prefixes, UI chrome): a mono or grotesk — e.g. **"JetBrains Mono"** or **"Space Grotesk"**, small size, uppercase, slightly tracked-out letter-spacing.
- Base size: 18px desktop / 16px mobile body text.
- Scale: fluid, `clamp()`-based, so the hero name scales smoothly instead of snapping at breakpoints.
- Details: numbered list prefixes ("01.", "02.") in the mono face, kept small and muted-gray; headings in serif, sentence case (not uppercase) — softer than the reference's terse, clipped labels.

## 4. Layout & Structure

1. Hero — name (large serif) + short positioning line + current local time/date (kept from reference, but styled in mono, muted)
2. Client/collaborator logos — static row or subtle marquee (slower, less frantic than typical dev-portfolio marquees)
3. About paragraph(s)
4. Selected Works — numbered list (see below)
5. Recognitions — simple stat list
6. Contact / footer — email, social links

- Single long scrolling page (no separate project pages for v1) — matches the reference's simplicity, keeps scope small.
- Grid: 12-column desktop, single column mobile.
- Spacing: 8px base unit, generous vertical rhythm (more whitespace between sections than the reference — part of the "editorial breathing room" feel).
- Work list: **text-only list**, like the reference — but on hover, instead of a thumbnail image following the cursor, show a **soft warm-tinted background wash** behind the row plus the project's accent-colored underline. Keeps it text-forward/editorial rather than image-heavy.

## 5. Motion & Interaction

- Library: CSS + a light JS helper (e.g. Motion One or GSAP for the stagger/reveal only) — deliberately NOT WebGL/shaders. This is the second big departure from the reference: motion should feel calm and typographic, not technical/experimental.
- On load: short staggered fade+rise on hero text lines (150-200ms stagger, ease-out, no bounce).
- On scroll: simple reveal-on-scroll (opacity + 8-12px translate) per section, no parallax, no sticky gimmicks.
- Work list hover: background wash fades in (200ms), accent underline draws left-to-right under the title, number prefix shifts color to accent.
- Cursor: default system cursor (no custom cursor) — keeps things restrained rather than "designer flex."
- Page transitions: none needed (single-page).

## 6. Content per Work Item

- Number (01, 02, …)
- Title
- Link (external, opens new tab)
- Short info/description (1-2 sentences)
- Role/collaborators (optional, only if relevant)
- Year
- (Drop the "Feat." press-mentions field from the reference unless you actually have press coverage to list — don't leave it as an empty placeholder.)

## 7. Responsive Behavior

- Breakpoint: single breakpoint at 768px is enough for a page this simple.
- Mobile: logos row becomes horizontal scroll-snap; work list rows stack with number+year on one line, title below.
- Nav: no hamburger needed — single scroll with a small fixed corner element (e.g. dark/light toggle + email) is enough, matches the minimal single-page structure.

## 8. Assets

- Logo/wordmark: text-based (your name, set in the serif), no icon/logomark needed.
- Client thumbnails: i will change first the extension to .webp, just make image folder to save the thumbnail
- Favicon: simple text glyph (e.g. your initial) on the terracotta accent background.
- OG image: name + positioning line on the warm off-white background, serif type, 1200×630.

## 9. Performance & Constraints

- No WebGL/shader budget needed given the motion approach above — keep JS bundle light, target sub-1s interactive on a mid-range mobile connection.
- Respect `prefers-reduced-motion`: disable stagger/reveal animations, keep instant state.
- Contrast: text/background pairs above must meet WCAG AA at minimum (verify `#1C1A15` on `#F6F3EE` and `#EDE9E0` on `#15130F` — both comfortably pass).
- Browser support: modern evergreen only (last 2 versions).

## 10. Deployment

- Hosting: **Netlify**
- Domain: **adityajk.netlify.app**
