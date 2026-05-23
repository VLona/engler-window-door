import Link from "next/link";
import ProjectCarousel from "./components/ProjectCarousel";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

// Manufacturer data — kept up here so the JSX below stays readable.
// Each card maps over this array; edit copy here, JSX stays the same.
const manufacturers = [
  {
    name: "Loewen",
    tagline: "Premium wood-clad windows",
    copy: "For projects that demand the warmth of wood paired with modern engineering, we work with Loewen. Their hand-finished casements and lift-and-slide doors are how we deliver true architectural craft to clients who notice every detail.",
  },
  {
    name: "ES Windows",
    tagline: "Impact-rated aluminum systems",
    copy: "Built for Florida's climate. ES Windows' impact-rated aluminum systems are our first call when a project needs hurricane code compliance without sacrificing the clean modern lines architects ask for.",
  },
  {
    name: "Signature Door",
    tagline: "Custom mahogany & iron entryways",
    copy: "An entryway sets the tone for the whole home. We work with Signature Door because every one of theirs is built from solid mahogany or wrought iron, made-to-order for the residence it opens.",
  },
  {
    name: "Euro-Wall",
    tagline: "Folding & multi-track glass systems",
    copy: "When clients want to dissolve the line between living room and lanai, we install Euro-Wall. Their folding and pocketing glass walls open entire facades to the water, the breeze, and the view.",
  },
  {
    name: "Origin",
    tagline: "British-engineered aluminum bifolds",
    copy: "Origin's slim-profile aluminum bifolds and casements deliver the minimalist look modern Naples architecture demands — paired with the precision and warranty backing that come out of an English factory.",
  },
  {
    name: "Arcadia",
    tagline: "Classic Florida sliding glass",
    copy: "Arcadia has been part of Florida's architectural language for generations. We install them on careful restorations and modern coastal builds alike — clean, timeless, and effortless to operate for decades.",
  },
  {
    name: "Ashley Norton",
    tagline: "Architectural hardware in solid brass",
    copy: "The smallest details say the most about a home. Ashley Norton's solid-brass handles, hinges, and locksets — finished by hand in any patina — are what we specify when nothing less than perfect will do.",
  },
];

// Real testimonials lifted from englerwindow.com — homeowner / architect / builder triangle.
const testimonials = [
  {
    quote:
      "Mr. Engler and his team are extremely professional and deliver excellent quality in their product and service.",
    name: "Patty Wareham",
    role: "Homeowner",
  },
  {
    quote:
      "It's always a pleasure working with Mike and his team, who are very knowledgeable and detail-oriented, helpful and courteous.",
    name: "Irma Sefa",
    role: "Architect",
  },
  {
    quote:
      "Mike doesn't just provide windows and doors, he is a partner in creating true to form architectural elements.",
    name: "Nautilus Homes",
    role: "Builder",
  },
];

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
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
              >
                Start your project
              </Link>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-2 py-3.5 text-sm font-medium text-foreground underline-offset-4 transition hover:text-accent hover:underline"
              >
                See our work →
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

          {/* Right: photo with navy offset */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full bg-accent lg:-bottom-6 lg:-right-6"
              />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-line lg:aspect-[5/6]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.wixstatic.com/media/b7f13d_37a8746101b44356aab9456a52ef8ef0~mv2.jpg"
                  alt="Engler Window & Door — Port Royal Residence project"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-10 text-xs uppercase tracking-[0.2em] text-muted lg:mt-12">
              <span className="text-accent">Project ·</span> Port Royal
              Residence, Naples
            </p>
          </div>
        </div>
      </section>

      {/* ── Projects gallery ───────────────────────────────────── */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32"
      >
        <div className="mb-16 max-w-2xl">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Selected Work
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A portfolio built across Naples, the Gulf Coast, and{" "}
            <em className="italic text-accent">beyond.</em>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Each project begins with a homeowner, an architect, or a builder
            asking for something specific — and ends with us delivering it.
          </p>
        </div>

        {/* Asymmetric grid: one tall photo left, two stacked right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <figure className="lg:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/b7f13d_edd39283aa6a4e838293f02a0bc8989e~mv2.jpg"
                alt="Engler Window & Door — Private Residence in Naples"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
              <span className="text-accent">Project ·</span> Private Residence,
              Naples
            </figcaption>
          </figure>

          <div className="flex flex-col gap-8 lg:col-span-5 lg:gap-10">
            <figure>
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.wixstatic.com/media/b7f13d_77a82cc5d6b249e885ec0be677e77a50~mv2.jpg"
                  alt="Engler Window & Door — 505 Fifth Ave S, Naples"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                <span className="text-accent">Project ·</span> 505 Fifth Ave S,
                Naples
              </figcaption>
            </figure>

            <figure>
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.wixstatic.com/media/b7f13d_1e4019b1ef074ad1b489db26ccbb1491~mv2.jpg"
                  alt="Engler Window & Door — Private Residence in North Carolina"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted">
                <span className="text-accent">Project ·</span> Private
                Residence, North Carolina
              </figcaption>
            </figure>
          </div>
        </div>

        <p className="mt-16 text-center text-sm text-muted">
          Want to see more?{" "}
          <Link
            href="/quote"
            className="font-medium text-foreground underline-offset-4 transition hover:text-accent hover:underline"
          >
            Request a portfolio walkthrough →
          </Link>
        </p>
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
                key={m.name}
                className="flex flex-col items-center gap-3 border-l border-background/10 first:border-l-0 sm:[&:nth-child(4)]:border-l-0 lg:[&:nth-child(n)]:border-l lg:[&:nth-child(n)]:first:border-l-0"
              >
                <span aria-hidden="true" className="text-[10px] text-accent">
                  ◆
                </span>
                <span className="font-serif text-xl tracking-tight text-background/90 md:text-2xl">
                  {m.name}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-center text-[11px] uppercase tracking-[0.2em] text-background/50">
            Custom windows, doors, and architectural hardware · South Florida
            code-compliant
          </p>
        </div>
      </section>

      {/* ── Manufacturers detail (cards) ───────────────────────── */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-8 bg-accent" />
              Our Manufacturers
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Seven names. One{" "}
              <em className="italic text-accent">standard of craft.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              Engler doesn&apos;t carry a catalogue. We&apos;ve spent twenty
              years narrowing the field to the manufacturers who match our work
              — and we install nothing else.
            </p>
          </div>

          {/* Card grid — thin lines between cells via gap-px on bg-line */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {manufacturers.map((m) => (
              <article
                key={m.name}
                className="flex flex-col bg-background p-8 transition-colors hover:bg-line/30 lg:p-10"
              >
                <h3 className="font-serif text-3xl tracking-tight text-foreground">
                  {m.name}
                </h3>
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-accent">
                  {m.tagline}
                </p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                  {m.copy}
                </p>
                <Link
                  href={`/quote?brand=${encodeURIComponent(m.name)}`}
                  className="mt-8 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground transition hover:text-accent"
                >
                  Request a quote on {m.name}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      <section className="bg-ink py-24 text-background lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 max-w-2xl">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/60">
              <span className="h-px w-8 bg-accent" />
              Testimonials
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-background sm:text-5xl">
              What homeowners, architects, and builders{" "}
              <em className="italic text-accent">say about Mike.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
            {testimonials.map((t) => (
              <figure key={t.name}>
                <blockquote className="font-serif text-xl leading-relaxed text-background/95 md:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-background/60">
                  <span className="text-accent">—</span> {t.name} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section id="about" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
                <span className="h-px w-8 bg-accent" />
                About Engler
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Twenty years, one family,{" "}
                <em className="italic text-accent">one standard.</em>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7">
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
            </div>
          </div>

          {/* Three core values — lifted from the real englerwindow.com */}
          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-line pt-16 md:grid-cols-3 md:gap-8">
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
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
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
