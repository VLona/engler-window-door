import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "About — Engler Window & Door · Naples, FL",
  description:
    "Meet the Engler Window & Door team. President Mike Engler and the four specialists handling every project from estimate through install. Family-owned in Naples since 2003.",
};

// Team data — every word lifted VERBATIM from englerwindow.com/about.
// Names, titles, bios — nothing invented.
type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    name: "Mike Engler",
    role: "President & New Construction Sales",
    bio: "Mike Engler is the President of Engler Window & Door and the salesman for all new construction projects. Mike is educated and up-to-date on the latest codes, trends and performance requirements to help our clientele make informed purchase decisions.",
  },
  {
    name: "Brandon Magnan",
    role: "New & Remove/Replace Sales",
    bio: "Brandon Magnan is a salesman for both new and remodel projects for Engler Window & Door. Brandon keeps himself up-to-date will all aspects of new and existing product information to ensure the highest quality of products are available to our clients. Brandon works with both builders and homeowners.",
  },
  {
    name: "Taber Engler",
    role: "Service Technician",
    bio: "Taber Engler handles all service and delivery requirements outside of the office. Taber works with installers, homeowners and builders to ensure all of our products are maintained and working properly.",
  },
  {
    name: "Rebecca Golden",
    role: "Estimator",
    bio: "Rebecca Golden is the estimator for all new construction projects. Rebecca handles everything from initial takeoffs to assisting Mike with project management.",
  },
  {
    name: "Evanryll Maog",
    role: "Service Coordinator",
    bio: "Evanryll Maog handles all service and delivery scheduling. Evan focuses on maintaining the calendar for service visits and ordering any required service parts.",
  },
];

// The 3 core values — verbatim from englerwindow.com. We use the canonical
// "Practices" spelling rather than the older "Practises" on their site.
const values = [
  "Distinctive Products & Ability",
  "Longterm Specialized Service",
  "Fair & Honest Practices",
];

export default function AboutPage() {
  const founder = team[0];
  const rest = team.slice(1);

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── Immersive image hero — consistent w/ /contact + /portfolio
          deep pages. Same overlay treatment, same Fraunces headline pattern. */}
      <section className="relative overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-hero.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-background/70">
              <span className="h-px w-8 bg-accent" />
              About Engler
              <span className="h-px w-8 bg-accent" />
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-background sm:text-6xl lg:text-7xl">
              Doing it right the{" "}
              <em className="italic text-accent">first time.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-background/85">
              Five people. One philosophy. Naples since 2003.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Our Commitment — verbatim mission statement from
          englerwindow.com/about. Large editorial typography, narrow column,
          generous whitespace. The single most important paragraph on this page. */}
      <section className="bg-background py-32 lg:py-44">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="h-px w-8 bg-accent" />
              Our Commitment
              <span className="h-px w-8 bg-accent" />
            </span>
          </div>
          <p className="mt-14 font-serif text-2xl leading-[1.5] text-foreground sm:text-3xl">
            Engler Window &amp; Door was founded and operates on the principal
            of doing what is right for our customers, employees, and
            suppliers. We will strive to be honest and ethical in all we do.
            We will focus on long-term, as opposed to short term gains. Doing
            it right the first time is our goal, and we will remedy problems
            as efficiently as possible when they inevitably occur.
          </p>
        </div>
      </section>

      {/* ── Values — numbered editorial labels on a dark band.
          NOT feature cards (no descriptions / boxes / icons) — just three
          confident statements. Reads as a philosophy, not a value-add list. */}
      <section className="bg-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 md:divide-x md:divide-background/15">
            {values.map((value, i) => (
              <div key={value} className="text-center md:px-6">
                <p className="font-serif text-5xl text-accent sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-background">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Team — Mike featured (founder), then 2-col grid of the rest.
          Same asymmetric editorial logic as the homepage Featured Project
          section. Mike gets a section that breathes; the team gets a refined grid. */}
      <section className="bg-background py-32 lg:py-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section header */}
          <FadeIn>
            <div className="mb-16 max-w-2xl lg:mb-20">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
                <span className="h-px w-8 bg-accent" />
                Engler W&amp;D Team
              </span>
              <h2 className="mt-4 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Five people you&apos;ll actually{" "}
                <em className="italic text-accent">talk to.</em>
              </h2>
            </div>
          </FadeIn>

          {/* Mike — featured founder treatment */}
          <FadeIn>
            <article className="border-y border-line py-16 lg:py-20">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                    Founder
                  </p>
                  <h3 className="mt-4 font-serif text-5xl tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                    {founder.name}
                  </h3>
                  <p className="mt-4 text-xs uppercase tracking-[0.25em] text-muted">
                    {founder.role}
                  </p>
                </div>
                <div className="lg:col-span-8 lg:flex lg:items-center">
                  <p className="text-lg leading-relaxed text-foreground lg:text-xl">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </article>
          </FadeIn>

          {/* The other four — 2-column grid */}
          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 lg:gap-x-20">
            {rest.map((member, i) => (
              <FadeIn key={member.name} delay={i * 60}>
                <article>
                  <h3 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-accent">
                    {member.role}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-muted">
                    {member.bio}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jesse Dreher testimonial — the NEW one only from /about.
          The homepage already shows Patty / Irma / Nautilus; this 4th voice
          (8-year client) is /about-exclusive. Reinforces the long-term-
          relationships story the page is making. */}
      <section className="bg-ink py-32 text-background lg:py-44">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <FadeIn>
            <span
              aria-hidden="true"
              className="font-serif text-6xl leading-none text-accent"
            >
              &ldquo;
            </span>
            <blockquote className="mt-4 font-serif text-2xl italic leading-[1.4] text-background sm:text-3xl">
              I have been working with Engler Window &amp; Door for over 8
              years and have a great relationship with Mike and his team. I
              have always been impressed with their work habits, organization,
              and most importantly, their attention to detail. Whether it be
              a luxury single family home residential project or a
              multi-family commercial project, the Engler team gets involved
              in every step from design to preconstruction to delivery to
              punch out.
            </blockquote>
            <figcaption className="mt-12 text-xs uppercase tracking-[0.3em] text-background/60">
              <span className="text-accent">—</span> Jesse Dreher
              <span className="mx-2 text-background/40">·</span>
              Client, 8+ Years
            </figcaption>
          </FadeIn>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Start your{" "}
            <em className="italic text-accent">project.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            Tell us about your home — Mike personally follows up on every
            quote request within one business day.
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
              className="inline-flex items-center justify-center text-sm font-medium text-foreground underline-offset-4 transition hover:text-accent hover:underline"
            >
              or call 239-331-2390 →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
