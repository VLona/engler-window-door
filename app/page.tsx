import Link from "next/link";
import ProjectCarousel from "./components/ProjectCarousel";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import FadeIn from "./components/FadeIn";
import { manufacturers } from "./data/manufacturers";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:px-10 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-5 lg:pt-10">
            <p className="mb-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-8 bg-accent" />
              Custom Windows &amp; Doors · Est. 2003
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Custom windows &amp; doors, built for{" "}
              <em className="font-serif italic text-accent">
                the way you live.
              </em>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              For over twenty years, Engler has worked with homeowners,
              architects, and builders — delivering Loewen, ES Windows, and
              Signature Door products with the codes-and-craft knowledge every
              home deserves.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg"
              >
                Start your project
              </Link>
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-1.5 px-2 py-3.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                See our work
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Brand values strip */}
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8 text-[11px] uppercase tracking-[0.18em] text-muted">
              <div>
                <dt className="font-serif text-2xl normal-case tracking-tight text-accent">
                  20+
                </dt>
                <dd className="mt-2">Years family-owned</dd>
              </div>
              <div>
                <dt className="font-serif text-2xl normal-case tracking-tight text-accent">
                  7
                </dt>
                <dd className="mt-2">Premier manufacturer partners</dd>
              </div>
              <div>
                <dt className="font-serif text-2xl normal-case tracking-tight text-accent">
                  100s
                </dt>
                <dd className="mt-2">Projects delivered</dd>
              </div>
            </dl>
          </div>

          {/* Right: rotating carousel of Engler installs (3s auto-advance,
              clickable → /portfolio), with the navy offset block behind it */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full bg-accent lg:-bottom-6 lg:-right-6"
              />
              <ProjectCarousel
                className="relative aspect-[4/5] w-full bg-line lg:aspect-[5/6]"
                autoAdvanceMs={3000}
                linkHref="/portfolio"
              />
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted lg:mt-12">
              <span className="text-accent">Selected work ·</span> Engler
              installations across Southwest Florida
            </p>
          </div>
        </div>
      </section>

      {/* ── Projects gallery ───────────────────────────────────── */}
      {/* ── Portfolio CTA — compact replacement for the old 3-photo gallery.
          Hero carousel already shows rotating photos; full gallery lives at
          /portfolio. This section is just the bridge between hero and band. */}
      <section
        id="work"
        className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10 lg:py-32"
      >
        <FadeIn>
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Selected Work
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A portfolio across Naples, the Gulf Coast, and{" "}
            <em className="italic text-accent">beyond.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            Twenty years of custom windows and doors — every project touched
            personally by Mike, every install in a home built to last.
          </p>
          <Link
            href="/portfolio"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg"
          >
            See full portfolio
            <span aria-hidden="true">→</span>
          </Link>
        </FadeIn>
      </section>

      {/* ── Manufacturer band (intro to detail below) ──────────── */}
      <section
        id="manufacturers"
        className="border-y border-line bg-ink py-14 text-background lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-background/60">
              <span className="h-px w-8 bg-accent" />
              Premier manufacturer partners
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight tracking-tight text-background md:text-4xl">
              The finest names in custom windows &amp; doors,{" "}
              <em className="italic text-accent">handpicked for every home.</em>
            </h2>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-3 lg:grid-cols-7">
            {manufacturers.map((m) => (
              <li
                key={m.slug}
                className="border-l border-background/10 first:border-l-0 sm:[&:nth-child(4)]:border-l-0 lg:[&:nth-child(n)]:border-l lg:[&:nth-child(n)]:first:border-l-0"
              >
                <Link
                  href={`/manufacturers/${m.slug}`}
                  className="group flex flex-col items-center gap-3"
                >
                  <span aria-hidden="true" className="text-[10px] text-accent">
                    ◆
                  </span>
                  <span className="font-serif text-xl tracking-tight text-background/90 transition-colors group-hover:text-accent md:text-2xl">
                    {m.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center text-[11px] uppercase tracking-[0.2em] text-background/50">
            Custom windows, doors, and architectural hardware · South Florida
            code-compliant
          </p>
        </div>
      </section>

      {/* ── Testimonial — single cinematic pull quote.
          Replaced the 3-column grid + the entire 7-card manufacturer-details
          section with this one editorial moment. The /manufacturers page now
          owns the detailed brand storytelling; the homepage doesn't repeat it. */}
      <section className="bg-ink py-32 text-background lg:py-44">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <FadeIn>
            <span aria-hidden="true" className="font-serif text-6xl leading-none text-accent">
              &ldquo;
            </span>
            <blockquote className="mt-4 font-serif text-3xl italic leading-[1.2] tracking-tight text-background sm:text-4xl lg:text-5xl">
              Mike doesn&apos;t just provide windows and doors — he is a
              partner in creating true-to-form architectural elements.
            </blockquote>
            <figcaption className="mt-12 text-xs uppercase tracking-[0.3em] text-background/60">
              <span className="text-accent">—</span> Nautilus Homes
              <span className="mx-2 text-background/40">·</span>
              Custom Builder
            </figcaption>
          </FadeIn>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section id="about" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
                <span className="h-px w-8 bg-accent" />
                About Engler
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Twenty years, one family,{" "}
                <em className="italic text-accent">one standard.</em>
              </h2>
            </FadeIn>

            <FadeIn
              delay={150}
              className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7"
            >
              <p>
                Engler Window &amp; Door was founded in 2003 by Mike Engler in
                Naples, Florida. What started as one man insisting on doing
                the install himself has grown into a small, deliberate
                family-owned business that homeowners, architects, and
                builders across the Gulf Coast keep coming back to.
              </p>
              <p>
                We&apos;ve stayed small on purpose. What&apos;s grown over
                twenty years isn&apos;t our headcount — it&apos;s the depth
                of our manufacturer relationships, the breadth of our project
                portfolio, and our reputation for the codes-and-craft
                knowledge the Florida climate demands.
              </p>
              <p>
                Today, Engler specializes in{" "}
                <em className="font-serif italic text-foreground">
                  custom new construction
                </em>{" "}
                and{" "}
                <em className="font-serif italic text-foreground">
                  remove &amp; replace
                </em>{" "}
                projects from Naples to North Carolina — every one of them
                touched personally by Mike.
              </p>
            </FadeIn>
          </div>

          {/* Three core values — lifted from the real englerwindow.com */}
          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-line pt-16 md:grid-cols-3 md:gap-8">
            <FadeIn>
              <article>
                <span className="font-serif text-5xl text-accent">01</span>
                <h3 className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground">
                  Distinctive products
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  We carry only the manufacturers that meet our standard for
                  design, performance, and warranty. No catalogue padding, no
                  house brands.
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={120}>
              <article>
                <span className="font-serif text-5xl text-accent">02</span>
                <h3 className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground">
                  Long-term service
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Specialized service that doesn&apos;t end the day we hand
                  over the keys. The same Engler team is here in year ten as
                  it was in year one.
                </p>
              </article>
            </FadeIn>
            <FadeIn delay={240}>
              <article>
                <span className="font-serif text-5xl text-accent">03</span>
                <h3 className="mt-4 text-xs uppercase tracking-[0.25em] text-foreground">
                  Fair &amp; honest
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Direct pricing, straight answers, and a quote you can take
                  to your contractor. Twenty years of referrals come from how
                  we handle the hard conversations.
                </p>
              </article>
            </FadeIn>
          </div>

          <p className="mt-16 text-center font-serif text-lg italic text-muted">
            — Mike Engler, Founder
          </p>
        </div>
      </section>

      {/* ── Final CTA banner — split layout w/ photo + text ────── */}
      <section className="border-y border-line bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Photo carousel (left on desktop, top on mobile) — reuses the
              same component as the image strip above, with a taller aspect */}
          <ProjectCarousel className="aspect-[4/3] w-full lg:aspect-auto lg:min-h-[480px]" />


          {/* Text + CTAs (right on desktop, below on mobile) */}
          <div className="flex flex-col items-start justify-center px-6 py-20 lg:px-16 lg:py-28">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-8 bg-accent" />
              Let&apos;s begin
            </span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ready to start{" "}
              <em className="italic text-accent">your project?</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Call Mike directly, or send us a few details about your home and
              we&apos;ll put a quote together for you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+12393312390"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg"
              >
                Call 239.331.2390
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Request a quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
