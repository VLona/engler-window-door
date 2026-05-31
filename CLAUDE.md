# Engler Window & Door — Project Context for Claude

Real client website for Mike Engler's window & door business in Naples, FL.
Built by Vance (VLona) as freelance work. Goal: replace the existing
englerwindow.com (dated mid-2010s Wix template) with a luxury custom-windows-and-doors site.

## Stack & Infra

- **Framework:** Next.js 16 + App Router + TypeScript
- **Styling:** Tailwind CSS v4 (uses `@theme` blocks in `app/globals.css`, NOT `tailwind.config.js`)
- **Hosting:** Vercel (auto-deploy on push to `main`)
- **Repo:** https://github.com/VLona/engler-window-door
- **Live URL:** https://engler-window-door.vercel.app
- **Eventual domain:** englerwindow.com (DNS swap planned for Session 6)
- **Dev server:** `npm run dev` → http://localhost:3000

## Brand (LOCKED — do not re-derive)

- **Background:** `#f5f1e8` (warm cream)
- **Foreground:** `#1a1a1a` (deep charcoal)
- **Muted:** `#6b6660` (warm gray)
- **Line:** `#ddd5c4` (light beige borders)
- **Accent:** `#3a5d8a` (navy blue — matches Engler's existing cursive logo)
- **Accent-dark:** `#2a4670` (hover state)
- **Ink:** `#1f2a3a` (dark navy for footer + announcement strip)
- **Serif:** Fraunces (`font-serif`) — used for headlines + italic accent words
- **Sans:** Geist Sans (`font-sans`) — body text
- All colors registered in `app/globals.css` via `@theme { ... }`. Available as
  `bg-accent`, `text-accent`, `bg-ink`, etc.

## File Structure

```
app/
  layout.tsx                       — root layout, loads fonts + metadata
  page.tsx                         — homepage (hero, projects gallery, manufacturer band + cards, testimonials, about, CTA banner)
  globals.css                      — Tailwind @theme tokens, color vars
  components/
    SiteHeader.tsx                 — shared announcement strip + nav (used by every page)
    SiteFooter.tsx                 — shared footer with id="contact"
    ProjectCarousel.tsx            — reusable client component, takes className prop
  portfolio/
    page.tsx                       — /portfolio dedicated page (10 real Engler project photos)
```

## Conventions / Patterns To Preserve

1. **Closed-loop product rule:** ZERO outbound links to manufacturer sites
   (loewen.com, eurowall.com, etc.) anywhere on the site. Every CTA — including
   "Request a quote on [Brand]" buttons — funnels back to `#quote` on the
   homepage. Manufacturer brands exist as TRUST signals, not as referral traffic.
   This is the #1 product decision for the entire site.
2. **Data-driven cards:** `manufacturers` and `testimonials` arrays live at the
   top of `app/page.tsx`. Cards are rendered via `.map()`. To add/edit a brand
   or testimonial, edit the array only — JSX stays the same.
3. **Brand voice:** "Custom windows & doors" phrasing repeats intentionally
   (hero H1 + manufacturers H2). Family-owned since 2003. Mike Engler is the
   founder, named personally throughout. Audience triangle: homeowners,
   architects, builders.
4. **Image strategy:** All photos self-hosted from `/public/images/`.
   - Portfolio photos: `/public/images/portfolio/{hash}.avif` (96 files, AVIF at w_1920;
     two homepage heroes at w_2880). `wixUrl()` in `app/data/portfolio.ts` builds
     these paths — strip `~mv2.ext` from the file param, append `.avif`.
   - Manufacturer logos: `/public/images/manufacturers/{slug}.{ext}` (original
     ext preserved per source — jpg or png).
   - Engler logo: `/public/images/engler-logo.png` (PNG for transparency — used
     by `SiteHeader` + `SiteFooter` with `brightness-0 invert` on dark footer).
   - About hero: `/public/images/about-hero.avif`.
5. **Phone CTA:** `tel:+12393312390` everywhere phone is shown. Real number:
   239.331.2390. Mike's email: mengler@englerwindow.com.

## Tailwind v4 Gotcha (already bit us once — don't repeat)

- Adding NEW color tokens to `@theme { ... }` requires either (a) a dev server
  restart, or (b) deleting `.next/` cache + restart. Hot-reload picks up VALUE
  changes to existing tokens, but NOT new token registrations.
- Use `@theme { --color-x: #hex; }` (NO `inline` keyword, NO `var()` indirection)
  for static colors. `@theme inline { ... }` is only for runtime CSS vars (fonts
  set by next/font).

## Sessions Shipped

- ✅ Session 1: Hero (real logo, navy accent matching logo, real Port Royal photo)
- ✅ Session 2: Projects gallery, manufacturer band + 7 cards, testimonials
- ✅ Session 3: About + Mike's story + 3 core values, final CTA banner, rich footer
- ✅ Bonus: ProjectCarousel client component (5s auto-advance, prev/next, dots)
- ✅ Multi-page refactor: SiteHeader/SiteFooter shared components, dedicated /portfolio page

## Sessions Queued

- ⏳ **Session 4 (next):** Quote form with Supabase + Resend email notifications.
  Same pattern as Northwind project. Hidden `interested_in` field captures which
  manufacturer card the user clicked.
- ⏳ **Session 5:** Dedicated `/manufacturers` page (and stretch: per-brand
  `/manufacturers/[slug]` pages). User explicitly queued this. Pre-session: I
  research each manufacturer site for logos + product offerings. See full plan
  in `~/.claude/projects/.../memory/project_website_build.md`.
- ⏳ Session 6: Mobile QA + asset polish (download wixstatic images to /public)
- ⏳ Session 7: Domain swap englerwindow.com → Vercel DNS

## Working Style With Vance

- Casual lowercase register. Explain-as-we-go.
- Frame teach moments as "this is what makes clients pay you."
- When he defers on design choices ("keep it like the old one", "pick whatever"),
  ship the bolder confident option — he'll push back if it's wrong. Don't go
  timid. See `~/.claude/projects/.../memory/feedback_design_direction.md`.
- He's a beginner learner becoming a freelancer. Phase 1 git fundamentals done.
  Now learning React, components, props, TypeScript, Tailwind v4, Supabase
  patterns, and now multi-page Next.js architecture.

## Full History

Detailed session-by-session notes (decisions, bugs hit, gotchas, copy choices,
file paths) live in `~/.claude/projects/C--Users-vance-Desktop-c---VS-claude/memory/project_website_build.md` —
read that if this CLAUDE.md doesn't have enough context for what you're about to do.
