import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { manufacturers } from "../data/manufacturers";

export const metadata: Metadata = {
  title: "Manufacturers — Engler Window & Door",
  description:
    "Engler installs only manufacturers we've vetted for fit, finish, and code compliance: Loewen, ES Windows, Signature Door, Euro-Wall, Origin, Arcadia, and Ashley Norton.",
};

export default function ManufacturersPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* Page header */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-10 lg:pt-24 lg:pb-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Premier Manufacturer Partners
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Seven names. One{" "}
            <em className="italic text-accent">standard of craft.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
            Engler doesn&apos;t carry a catalogue. We&apos;ve spent twenty
            years narrowing the field to the manufacturers who match our work
            — and we install nothing else. Each one below is hand-picked for
            its fit, finish, and code compliance with Southwest Florida&apos;s
            climate and architecture.
          </p>
        </div>

        {/* Brand links — each goes to that brand's dedicated deep page */}
        <nav
          aria-label="Browse brands"
          className="mt-12 hidden flex-wrap gap-x-6 gap-y-3 border-y border-line py-5 text-xs uppercase tracking-[0.2em] text-muted lg:flex"
        >
          <span className="text-foreground">Browse ·</span>
          {manufacturers.map((m) => (
            <Link
              key={m.slug}
              href={`/manufacturers/${m.slug}`}
              className="transition-colors hover:text-accent"
            >
              {m.name}
            </Link>
          ))}
        </nav>
      </section>

      {/* Brand sections */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="space-y-24 lg:space-y-32">
          {manufacturers.map((m, i) => (
            <article
              key={m.slug}
              id={m.slug}
              className="scroll-mt-24 border-t border-line pt-12 lg:pt-16"
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Left column: logo only — bigger, sole brand element */}
                <div className="lg:col-span-4">
                  <div className="flex w-full items-start justify-start bg-background">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.logo}
                      alt={`${m.name} logo`}
                      className="max-h-36 w-auto object-contain lg:max-h-44"
                    />
                  </div>
                </div>

                {/* Right column: heading block + copy + products + CTA */}
                <div className="lg:col-span-8">
                  {/* Heading block — number + name + classification + origin */}
                  <p className="font-serif text-5xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h2 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-6xl">
                    {m.name}
                  </h2>

                  {m.classification && (
                    <p className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-accent">
                      <span className="h-px w-6 bg-accent" />
                      {m.classification}
                    </p>
                  )}

                  {m.origin && (
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                      {m.origin}
                    </p>
                  )}

                  <p className="mt-8 text-lg leading-relaxed text-foreground">
                    {m.longCopy}
                  </p>

                  {m.tagline && (
                    <p className="mt-6 font-serif text-xl italic leading-snug text-muted">
                      &ldquo;{m.tagline}&rdquo;
                    </p>
                  )}

                  {/* What we install */}
                  <div className="mt-10 border-t border-line pt-8">
                    <p className="text-xs uppercase tracking-[0.25em] text-muted">
                      What we install
                    </p>
                    <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                      {m.products.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-3 text-sm text-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-block h-1 w-1 flex-shrink-0 bg-accent"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>

                    {m.signatureLines && m.signatureLines.length > 0 && (
                      <div className="mt-8">
                        <p className="text-xs uppercase tracking-[0.25em] text-muted">
                          Signature lines
                        </p>
                        <p className="mt-3 font-serif text-lg text-foreground">
                          {m.signatureLines.join(" · ")}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CTA — primary: go to deep brand page. quote CTA lives on the deep page. */}
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link
                      href={`/manufacturers/${m.slug}`}
                      className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
                    >
                      Check {m.name}
                      <span aria-hidden="true" className="ml-2">
                        →
                      </span>
                    </Link>
                    <Link
                      href={`/quote?brand=${encodeURIComponent(m.name)}`}
                      className="inline-flex items-center justify-center px-2 py-3.5 text-sm font-medium text-foreground underline-offset-4 transition hover:text-accent hover:underline"
                    >
                      Or request a quote →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA strip */}
      <section className="border-y border-line bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Not sure which fits your project?
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Mike will help you{" "}
            <em className="italic text-accent">choose.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Tell us about your home and budget — we&apos;ll recommend the
            manufacturer combination that gets you the look, the performance,
            and the warranty that fits.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
            >
              Get a quote
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
