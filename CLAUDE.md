# Compli Marketing Site

Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript. Deployed on Vercel:
`main` auto-deploys to production (compli-marketing.vercel.app); feature
branches get preview URLs. Custom domain `compli.biz` swap pending — do not
touch domain config.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (run before pushing)
- `node scripts/screenshot.mjs [path ...]` — full-page screenshots at
  375/768/1440 into `.screenshots/` (requires a server on :3100 and
  `npm install --no-save playwright`)

## Product facts (do not contradict)

- Compli is a **federal-only** employer compliance SaaS: 28 federal programs
  + 5 AI & Biometrics programs = 33 at launch. **No state compliance claims.**
- Launching **Summer 2026**. Public launch date: June 24, 2026.
- Pricing: Compli base **$97/month**. Add-ons: DOT FMCSA Manager $59/month,
  DOT FTA Manager $59/month, AI & Biometrics Suite (Federal Edition) — suite
  price not yet announced; pages say "announced at launch".
- **NO free-trial language anywhere** — no "trial", "free look", "free
  trial". Paid from day 1, monthly-only billing, **never mention the word
  "annual"** (banned-content grep: `trial|free look|annual`).
- The AI & Biometrics Suite is the flagship differentiator — it always gets
  distinctive visual treatment (dark ink section, accent top bar, SVG
  diagram), never an equal-weight card in a grid.
- CTAs route to coming-soon pages until the app SSL is fixed
  (`/get-started`, `/become-a-partner`, `/login-coming-soon`). Restyle
  buttons freely; never change hrefs.

## Design system — "Compliance, engineered."

Defined in `app/globals.css` `@theme`. Deep ink anchor, warm paper ground,
ONE emerald accent used with discipline. WCAG AA minimum everywhere.

### Tokens

| Token | Value | Use |
|---|---|---|
| `ink` / `ink-2` / `ink-3` | `#0b1623` / `#101f30` / `#1a2c3e` | dark sections, headlines |
| `paper` / `paper-2` | `#faf9f5` / `#f2f0e8` | page ground / alt sections |
| `accent` / `accent-deep` | `#0e7c4f` / `#0a5e3c` | the only accent (AA on paper) |
| `accent-bright` | `#43d17c` | accent on dark ink |
| `body` / `faint` | `#3d4a57` / `#5c6b77` | body / secondary text |
| `line` / `line-strong` | `#e3e0d6` / `#c9c5b6` | warm hairlines / panel borders |

Legacy token names (`navy`, `green`, `surface`, `muted`) are aliased to the
new palette in globals.css so older class usage stays coherent.

### Typography

- **Display**: Fraunces variable (opsz axis), via `.display` class —
  tight leading, -0.02em tracking, weight ~560. Headlines carry the design.
- **Text/UI**: Geist.
- **Data/codes**: Geist Mono via `.mono-label` (12px uppercase, 0.14em
  tracking) — program codes, section numbers, eyebrows, micro-labels.

### Form language

- Numbered sections (mono `01`–`06` + hairline + eyebrow) via
  `components/SectionHeader.tsx`.
- Bordered grid cells sharing hairlines (`border-t border-l` on the wrap,
  `border-b border-r` on cells) instead of floating rounded cards.
- Near-square radii (2px on interactive elements, none on panels).
- Custom SVG only: `Wordmark.tsx` (logo — replaces the old low-res PNGs),
  `ProgramLedger.tsx` (hero registry panel), `AbSuiteDiagram.tsx`
  (A&B Suite flow diagram, with stacked HTML fallback below `md`).
- Motion: `components/Reveal.tsx` (IntersectionObserver + `.reveal` CSS,
  opacity/translate only, honors `prefers-reduced-motion`).

### Banned (automatic fail)

Indigo/purple gradients or stock Tailwind palettes; Inter-only typography;
three-equal-cards rows with centered icons; emoji as icons; glassmorphism,
blob backgrounds, fake browser mockups.

## Page notes

- `/pricing`, `/insights`, `/get-started`, `/become-a-partner`, `/login*`,
  `/privacy`, `/terms`, `/data-security` are **noindexed** (deliberate,
  during domain aging). `/` , `/about`, `/features` are indexable.
- `/features` shows 8 named backbone programs of the 28 ("full coverage
  details publishing ahead of launch") — don't invent program names.
- Contact form posts to `/api/contact` (Resend, FROM noreply@compli.biz).

## Session log

- **2026-06-10** (`feature/site-redesign`): Full visual redesign. New token
  system, Fraunces/Geist/Geist Mono pairing, SVG wordmark, rebuilt homepage
  (3-pass self-critique with Playwright screenshots), built out pricing
  ($97 + DOT add-ons + flagship A&B band) and features pages from stubs,
  restyled about/contact/insights/privacy/ComingSoon. Removed
  DashboardMockup (banned fake-browser pattern). QA: no horizontal overflow
  at 375/768/1440 on all 13 routes, keyboard nav verified, Lighthouse
  perf 96–98 / a11y 100 on all key pages, banned-content grep clean.
  Open decision: A&B Suite add-on price (not provided; pages say
  "announced at launch").
