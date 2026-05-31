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

      {/* ── Cinematic hero — full-bleed image, minimal overlay ────
          ONE image, ONE headline, ONE primary CTA + ONE secondary link.
          Stats strip, carousel, and the 5/7 split are intentionally gone —
          the brief is luxury architecture, not contractor template. */}
      <section className="relative flex h-[88vh] min-h-[640px] overflow-hidden bg-ink">
        {/* Fullscreen image — Port Royal residence (arched windows + chandelier
            + lake view). Iconic coastal Florida luxury frame. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://static.wixstatic.com/media/b7f13d_37a8746101b44356aab9456a52ef8ef0~mv2.jpg/v1/fit/w_2880,h_1620,q_95,enc_avif,quality_auto/b7f13d_37a8746101b44356aab9456a52ef8ef0~mv2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Directional gradient — heaviest at bottom-left where the text sits,
            fading to near-transparent top-right so the image breathes. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-ink/90 via-ink/55 to-ink/15"
        />

        {/* Bottom-left editorial overlay */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-6 pb-20 lg:px-10 lg:pb-28">
          <FadeIn className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-background/75">
              Engler Window &amp; Door · Naples, Florida
            </p>
            <h1 className="mt-7 font-serif text-6xl leading-[0.95] tracking-tight text-background sm:text-7xl lg:text-8xl xl:text-9xl">
              Built to live with for{" "}
              <em className="italic text-accent">generations.</em>
            </h1>
            {/* Subhead — tells visitors what Engler actually does in one line.
                without this, the headline alone could be any luxury brand. */}
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
              Custom windows &amp; doors for Southwest Florida&apos;s most
              considered homes — designed, sourced, and installed personally
              by Mike Engler since 2003.
            </p>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-full bg-accent px-9 py-4 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent-dark"
              >
                Start your project
              </Link>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-medium text-background underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                See selected work
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Featured Project — the ONE memorable showcase moment.
          Asymmetric 8/4 grid: oversized portrait image dominates, editorial
          headline + project metadata stack sits beside it like an architect's
          label. Replaces the old centered "See portfolio" CTA. */}
      <section
        id="work"
        className="overflow-hidden bg-background py-32 lg:py-44"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Top bar — eyebrow only, no number.
              The "01" implied a series; we only have one project, so removing
              the number stops the dishonest "next one coming" cue. */}
          <div className="flex items-baseline gap-6 border-b border-line pb-6">
            <span className="text-xs uppercase tracking-[0.35em] text-muted">
              Selected Work · Featured
            </span>
          </div>

          {/* Asymmetric showcase */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-20">
            {/* Oversized portrait image — 8 of 12 columns */}
            <div className="lg:col-span-8">
              <Link
                href="/portfolio"
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-line lg:aspect-[5/6]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.wixstatic.com/media/b7f13d_cca93d574ed047b8919f90d950cc1400~mv2.jpeg/v1/fit/w_1600,h_2000,q_90,enc_avif,quality_auto/b7f13d_cca93d574ed047b8919f90d950cc1400~mv2.jpeg"
                  alt="Engler Window & Door — featured residential installation"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                {/* Subtle caption ribbon bottom — emerges from a soft gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/65 to-transparent p-8 lg:p-12"
                >
                  <p className="text-[10px] uppercase tracking-[0.35em] text-background/90">
                    A Naples Residence
                  </p>
                </div>
              </Link>
            </div>

            {/* Editorial text column — vertically centered next to the image */}
            <div className="lg:col-span-4 lg:flex lg:flex-col lg:justify-center">
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Built to disappear into the architecture they{" "}
                <em className="italic text-accent">belong to.</em>
              </h2>

              {/* Project metadata — navy accent-line stack, architect's label feel */}
              <dl className="mt-12 space-y-6 border-l-2 border-accent pl-6">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Featured in this project
                  </dt>
                  <dd className="mt-1 font-serif text-lg text-foreground">
                    Loewen casements · Euro-Wall multi-slide
                  </dd>
                  <dd className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted">
                    <Link
                      href="/manufacturers"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      2 of 7 premier partners · See all
                      <span aria-hidden="true">→</span>
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Scope
                  </dt>
                  <dd className="mt-1 font-serif text-lg text-foreground">
                    Custom new construction
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted">
                    Location
                  </dt>
                  <dd className="mt-1 font-serif text-lg text-foreground">
                    Naples, Florida
                  </dd>
                </div>
              </dl>

              <Link
                href="/portfolio"
                className="group mt-12 inline-flex items-center gap-3 self-start text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                See the full portfolio
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-width imagery break — wordless cinematic cut.
          Palate cleanser between the featured project's editorial weight
          and the manufacturer band's quick info beat. NO container, NO
          padding, NO text. Pure imagery.
          Photo chosen to be UNIQUE — not in the hero, featured project,
          or CTA carousel. Avoids on-homepage repetition. */}
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://static.wixstatic.com/media/b7f13d_dfaf75c8faa84281952d74918daf957e~mv2.jpeg/v1/fit/w_2880,h_1440,q_95,enc_avif,quality_auto/b7f13d_dfaf75c8faa84281952d74918daf957e~mv2.jpeg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Soft gradient anchors the caption at bottom-left without darkening
            the rest of the image — keeps the cinematic feel, earns its space */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/70 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 pb-10 text-background lg:px-10 lg:pb-12">
          <span className="text-[11px] uppercase tracking-[0.35em] text-background/85">
            Selected Work · Naples, Florida
          </span>
          <span className="text-[11px] uppercase tracking-[0.35em] text-background/60">
            Engler · since 2003
          </span>
        </div>
      </section>

      {/* ── Manufacturer band — refined, confident, no decoration.
          Dropped: the ◆ diamond decorations, the "South Florida code-compliant"
          fine-print caption, and the marketing-prose headline.
          Added: confident "Seven manufacturers. One installer." typography move
          and a subtle underline-on-hover for the brand names so the click
          affordance is clearer. */}
      <section
        id="manufacturers"
        className="border-y border-line bg-ink py-14 text-background lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-background/60">
              <span className="h-px w-8 bg-accent" />
              Premier manufacturer partners
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-background md:text-4xl lg:text-5xl">
              Seven manufacturers.{" "}
              <em className="italic text-accent">One installer.</em>
            </h2>
          </div>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-7">
            {manufacturers.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/manufacturers/${m.slug}`}
                  className="group inline-flex flex-col items-center"
                >
                  <span className="font-serif text-xl tracking-tight text-background/90 transition-colors group-hover:text-accent md:text-2xl">
                    {m.name}
                  </span>
                  {/* Thin underline grows from 0 → full width on hover —
                      signals clickability without cluttering at rest */}
                  <span
                    aria-hidden="true"
                    className="mt-2 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Testimonials — all 3 real ones from englerwindow.com,
          side-by-side 3-column grid. Verbatim quotes, audience triangle
          (homeowner / architect / builder). One FadeIn wraps everything. */}
      <section className="bg-ink py-24 text-background lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-center text-xs uppercase tracking-[0.35em] text-background/60">
              What they&apos;re saying
            </p>

            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
              {/* Patty Wareham — homeowner */}
              <figure>
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl leading-none text-accent"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 font-serif text-lg italic leading-snug text-background/95 sm:text-xl">
                  Mr. Engler and his team are extremely professional and
                  deliver excellent quality in their product and service.
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-background/60">
                  <span className="text-accent">—</span> Patty Wareham
                  <span className="mx-2 text-background/40">·</span>
                  Homeowner
                </figcaption>
              </figure>

              {/* Irma Sefa — architect */}
              <figure>
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl leading-none text-accent"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 font-serif text-lg italic leading-snug text-background/95 sm:text-xl">
                  It&apos;s always a pleasure working with Mike and his team,
                  who are very knowledgeable and detail-oriented, helpful and
                  courteous. Mike presents the best product for a particular
                  project, one that functions optimally and adds value. His
                  company&apos;s approach and product line-up are advantageous
                  for my practice and for our industry.
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-background/60">
                  <span className="text-accent">—</span> Irma Sefa
                  <span className="mx-2 text-background/40">·</span>
                  Architect
                </figcaption>
              </figure>

              {/* Nautilus Homes — custom builder */}
              <figure>
                <span
                  aria-hidden="true"
                  className="font-serif text-3xl leading-none text-accent"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-3 font-serif text-lg italic leading-snug text-background/95 sm:text-xl">
                  Mike doesn&apos;t just provide windows and doors, he is a
                  partner in creating true to form architectural elements. He
                  knows all the ins and outs of the products that he
                  represents and is great with one on one meetings with
                  owners.
                </blockquote>
                <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-background/60">
                  <span className="text-accent">—</span> Nautilus Homes
                  <span className="mx-2 text-background/40">·</span>
                  Custom Builder
                </figcaption>
              </figure>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── About — whitespace-heavy editorial single-column.
          Dropped the 3-card values grid (read like SaaS feature cards) and
          condensed to two paragraphs. Narrower container, more breath,
          centered eyebrow + Mike's signature for editorial bookends. */}
      {/* ── About — VERBATIM copy from englerwindow.com.
          No invented headline, no invented paragraphs, no Mike signature.
          The 3 lines below are their actual core values lifted directly. */}
      <section id="about" className="bg-background py-32 lg:py-44">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
              <span className="h-px w-8 bg-accent" />
              About Engler
              <span className="h-px w-8 bg-accent" />
            </span>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              In Southwest Florida{" "}
              <em className="italic text-accent">since 2003.</em>
            </h2>
          </div>

          <div className="mt-16 space-y-7 text-left text-base leading-relaxed text-muted lg:text-lg">
            <p>
              Engler Window &amp; Door has been in business for over 20 years
              in Southwest Florida. Our substantial project portfolio
              highlights our hard-earned reputation for quality control, top
              rated product offerings, and knowledgeability on codes and
              trends.
            </p>
            <p>
              EWD specializes in custom new construction and remove &amp;
              replace projects.
            </p>
          </div>

          {/* Their 3 actual core values — lifted directly from
              englerwindow.com. Single accent line, NOT 3 SaaS feature cards. */}
          <div className="mt-16 border-t border-line pt-10">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.3em] text-foreground">
              <span>Distinctive products &amp; ability</span>
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              <span>Longterm specialized service</span>
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              <span>Fair &amp; honest practices</span>
            </div>
          </div>
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
              Bring your blueprints.{" "}
              <em className="italic text-accent">We&apos;ll bring the catalogue.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Call Mike directly to talk through a project, or send the
              details and we&apos;ll put a quote together for you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="tel:+12393312390"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors duration-300 hover:bg-accent-dark"
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
