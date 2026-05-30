import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { manufacturers } from "../../data/manufacturers";

// Pre-generate all 7 brand pages at build time. New brand in the data array
// → new static page automatically. No server cost per visit.
export async function generateStaticParams() {
  return manufacturers.map((m) => ({ slug: m.slug }));
}

// Dynamic metadata per brand — better titles, descriptions, and SEO than
// having all 7 share one generic title.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = manufacturers.find((m) => m.slug === slug);
  if (!m) {
    return { title: "Manufacturer not found — Engler Window & Door" };
  }
  return {
    title: `${m.name} — Engler Window & Door`,
    description: m.shortCopy,
  };
}

export default async function ManufacturerDeepPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = manufacturers.find((m) => m.slug === slug);
  if (!m) notFound();

  // The other 6 brands for the cross-promo grid at the bottom.
  const otherBrands = manufacturers.filter((x) => x.slug !== slug);

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* Breadcrumb / back to overview */}
      <div className="border-b border-line bg-background">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.2em] text-muted lg:px-10">
          <Link
            href="/manufacturers"
            className="transition-colors hover:text-accent"
          >
            ← All manufacturers
          </Link>
          <span aria-hidden="true">·</span>
          <span className="text-foreground">{m.name}</span>
        </div>
      </div>

      {/* ── Brand hero — centered, logo top, brand name clickable to manufacturer site ── */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-16 text-center lg:px-10 lg:pt-24 lg:pb-20">
        {/* Logo — clickable if a website URL exists */}
        <div className="flex justify-center">
          {m.website ? (
            <a
              href={m.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${m.name} website (opens in new tab)`}
              className="transition-opacity hover:opacity-80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.logo}
                alt={`${m.name} logo`}
                className="h-32 w-auto object-contain lg:h-40"
              />
            </a>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={m.logo}
              alt={`${m.name} logo`}
              className="max-h-44 w-auto object-contain lg:max-h-56"
            />
          )}
        </div>

        {/* Eyebrow — no numbering: every partner is treated equally */}
        <p className="mt-10 text-xs uppercase tracking-[0.25em] text-muted">
          Manufacturer Partner
        </p>

        {/* Brand name — clickable to manufacturer site if website exists */}
        {m.website ? (
          <a
            href={m.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <h1 className="mt-4 font-serif text-6xl leading-[0.95] tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-7xl lg:text-8xl">
              {m.name}
            </h1>
          </a>
        ) : (
          <h1 className="mt-4 font-serif text-6xl leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            {m.name}
          </h1>
        )}

        {/* Classification — centered with flanking lines */}
        {m.classification && (
          <p className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-accent">
            <span className="h-px w-8 bg-accent" />
            {m.classification}
            <span className="h-px w-8 bg-accent" />
          </p>
        )}

        {/* Origin */}
        {m.origin && (
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
            {m.origin}
          </p>
        )}

        {/* Tagline */}
        {m.tagline && (
          <p className="mx-auto mt-8 max-w-2xl font-serif text-2xl italic leading-snug text-muted sm:text-3xl">
            &ldquo;{m.tagline}&rdquo;
          </p>
        )}

        {/* Explicit "Visit" link — clearer signal than just the headline being clickable */}
        {m.website && (
          <a
            href={m.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted transition-colors hover:text-accent"
          >
            Visit {m.name}
            <span aria-hidden="true">↗</span>
          </a>
        )}
      </section>

      {/* ── Body — Engler's voice on this brand ───────────────── */}
      <section className="border-y border-line bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <p className="text-xl leading-relaxed text-foreground lg:text-2xl">
            {m.longCopy}
          </p>
        </div>
      </section>

      {/* ── Products + signature lines ────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-8 bg-accent" />
              What we install
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              {m.name} from{" "}
              <em className="italic text-accent">Engler.</em>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-10">
              {m.products.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 border-b border-line pb-4 text-base text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 inline-block h-1 w-1 flex-shrink-0 bg-accent"
                  />
                  {p}
                </li>
              ))}
            </ul>

            {m.signatureLines && m.signatureLines.length > 0 && (
              <div className="mt-12 border-t border-foreground pt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-muted">
                  Signature lines
                </p>
                <p className="mt-4 font-serif text-2xl text-foreground">
                  {m.signatureLines.join(" · ")}
                </p>
              </div>
            )}

            {/* Product guide PDF — for architects/contractors who want real specs */}
            {m.productGuide && (
              <a
                href={m.productGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Download {m.name} product guide
                <span aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Quote CTA — the conversion moment ─────────────────── */}
      <section className="bg-ink py-24 text-background lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/60">
            <span className="h-px w-8 bg-accent" />
            Ready to specify {m.name}?
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
            Get a quote on{" "}
            <em className="italic text-accent">{m.name}.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-background/70">
            Tell us about your project — Mike personally reviews every {m.name}{" "}
            request within one business day.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/quote?brand=${encodeURIComponent(m.name)}`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
            >
              Request a quote on {m.name}
            </Link>
            <a
              href="tel:+12393312390"
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Call 239.331.2390
            </a>
          </div>
        </div>
      </section>

      {/* ── Cross-promo: other manufacturers ──────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Other manufacturers we install
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            Six other names. The same{" "}
            <em className="italic text-accent">standard.</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
          {otherBrands.map((b) => (
            <Link
              key={b.slug}
              href={`/manufacturers/${b.slug}`}
              className="group flex flex-col items-start gap-3 bg-background p-6 transition-colors hover:bg-line/30"
            >
              <p className="font-serif text-xl tracking-tight text-foreground group-hover:text-accent">
                {b.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                {b.category}
              </p>
              <span className="mt-auto pt-3 text-xs uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-accent">
                Check {b.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
