import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FadeIn from "../components/FadeIn";
import {
  getProjectsByCategory,
  categoryMeta,
  type ProjectCategory,
} from "../data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio — Engler Window & Door",
  description:
    "Browse Engler's portfolio by category — windows and doors. Twenty years of custom installations across Naples, the Gulf Coast, and beyond.",
};

// The two category cards on this landing page. Each shows a preview photo
// (the first project in that category) and links to the dedicated page.
const categories: { slug: ProjectCategory; cta: string }[] = [
  { slug: "windows", cta: "Browse Windows →" },
  { slug: "doors", cta: "Browse Doors →" },
];

export default function PortfolioLandingPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── Page header ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28 lg:pb-16">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Portfolio · Selected Work
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Twenty years of work,{" "}
            <em className="italic text-accent">organized by craft.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Browse by category — windows or doors. Every photo is a real
            Engler installation, every project touched personally by Mike.
          </p>
        </div>
      </section>

      {/* ── Two category cards ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {categories.map((c, i) => {
            const items = getProjectsByCategory(c.slug);
            const meta = categoryMeta[c.slug];
            const previewPhoto = items[0]?.src;
            return (
              <FadeIn key={c.slug} delay={i * 100} className="h-full">
                <Link
                  href={`/portfolio/${c.slug}`}
                  className="group relative block aspect-[5/6] w-full overflow-hidden bg-line"
                >
                  {previewPhoto && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={previewPhoto}
                      alt={`${meta.name} — Engler Window & Door portfolio preview`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}

                  {/* Always-on dark gradient at the bottom for legibility */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                  />

                  {/* Card content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                    <p className="text-xs uppercase tracking-[0.25em] text-background/70">
                      Category · {String(i + 1).padStart(2, "0")} ·{" "}
                      {items.length} project{items.length === 1 ? "" : "s"}
                    </p>
                    <h2 className="mt-3 font-serif text-5xl tracking-tight text-background sm:text-6xl">
                      {meta.name}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-background/85">
                      {meta.intro}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background transition-colors group-hover:text-accent">
                      {c.cta}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <section className="border-t border-line bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Your project, next
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Want yours to be the{" "}
            <em className="italic text-accent">next one?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            Tell us a little about your home and we&apos;ll put a quote
            together — or call Mike directly to talk it through.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
            >
              Request a quote
            </Link>
            <a
              href="tel:+12393312390"
              className="inline-flex items-center justify-center rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Call 239.331.2390
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
