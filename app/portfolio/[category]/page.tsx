import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import FadeIn from "../../components/FadeIn";
import {
  getProjectsByCategory,
  categoryMeta,
  type ProjectCategory,
} from "../../data/portfolio";

// Pre-generate both /portfolio/windows and /portfolio/doors at build time.
// Adding a third category later (e.g. hardware) only requires adding to the
// portfolio.ts data file — this page handles it automatically.
export async function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

// Dynamic per-category SEO metadata — better than a generic shared title.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isValidCategory(category)) {
    return { title: "Portfolio not found — Engler Window & Door" };
  }
  const meta = categoryMeta[category];
  return {
    title: `${meta.name} — Portfolio — Engler Window & Door`,
    description: meta.intro,
  };
}

// Type guard so TS narrows the param to a valid ProjectCategory.
function isValidCategory(value: string): value is ProjectCategory {
  return value in categoryMeta;
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isValidCategory(category)) notFound();

  const meta = categoryMeta[category];
  const items = getProjectsByCategory(category);

  // Figure out the "other" category for the cross-promo card at the bottom
  const otherCategory: ProjectCategory =
    category === "windows" ? "doors" : "windows";
  const otherMeta = categoryMeta[otherCategory];
  const otherCount = getProjectsByCategory(otherCategory).length;

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="border-b border-line bg-background">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.2em] text-muted lg:px-10">
          <Link
            href="/portfolio"
            className="transition-colors hover:text-accent"
          >
            ← Portfolio
          </Link>
          <span aria-hidden="true">·</span>
          <span className="text-foreground">{meta.name}</span>
        </div>
      </div>

      {/* ── Immersive image hero ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={meta.heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark gradient overlay so the overlaid text stays legible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
          <FadeIn className="max-w-3xl">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/70">
              <span className="h-px w-8 bg-accent" />
              Portfolio · {meta.name} · {items.length} project
              {items.length === 1 ? "" : "s"}
            </p>
            <h1 className="mt-6 font-serif text-6xl leading-[1.02] tracking-tight text-background sm:text-7xl lg:text-8xl">
              {meta.name}.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-background/85">
              {meta.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Photo grid ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-20 lg:px-10 lg:pt-28 lg:pb-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((p, i) => (
            <FadeIn key={p.src} delay={Math.min(i, 8) * 40}>
              <a
                href={p.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${category} installation full size (opens in new tab)`}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-line"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={`Engler Window & Door — ${category} installation`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay: dark fade + "View ↗" pill */}
                <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30" />
                <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Cross-promo: the OTHER category ─────────────────────── */}
      <section className="border-y border-line bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Also installed by Engler
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            <em className="italic text-accent">{otherMeta.name}</em>, too.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            {otherMeta.intro}
          </p>
          <Link
            href={`/portfolio/${otherCategory}`}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
          >
            Browse {otherMeta.name} ({otherCount})
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── Closing quote CTA ──────────────────────────────────── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-3xl leading-[1.1] tracking-tight text-foreground sm:text-4xl">
            Want one of yours in here{" "}
            <em className="italic text-accent">next?</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Tell us about your home — Mike personally follows up on every
            quote request.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Request a quote
            </Link>
            <a
              href="tel:+12393312390"
              className="inline-flex items-center justify-center text-sm font-medium text-foreground underline-offset-4 transition hover:text-accent hover:underline"
            >
              or call 239.331.2390 →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
