import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FadeIn from "../components/FadeIn";
import ContactInfo from "../components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact — Engler Window & Door · Naples, FL",
  description:
    "Reach Engler Window & Door in Naples, Florida. Call 239-331-2390, email mengler@englerwindow.com, or visit our showroom at 4184 Tamiami Trail N. Family-owned since 2003.",
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── Immersive image hero ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/portfolio/f6b2aa4292dc481798bbeacf851b3d78.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Dark gradient overlay keeps the overlaid text legible on any photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <FadeIn className="mx-auto max-w-3xl">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/70">
              <span className="h-px w-8 bg-accent" />
              Contact
              <span className="h-px w-8 bg-accent" />
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-background sm:text-6xl lg:text-7xl">
              Let&apos;s build something{" "}
              <em className="italic text-accent">that lasts.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-background/85">
              Engler operates on a simple principle: do what&apos;s right for
              our customers, employees, and suppliers. We focus on the long
              term, do it right the first time, and fix what needs fixing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact cards + map (interactive client component) ─── */}
      <ContactInfo />

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <section className="border-t border-line bg-ink py-20 text-background lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-background/60">
            <span className="h-px w-8 bg-accent" />
            Ready when you are
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-background sm:text-5xl">
            Tell us about{" "}
            <em className="italic text-accent">your home.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-background/70">
            Send a few details and Mike will personally follow up within one
            business day.
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
              className="inline-flex items-center justify-center rounded-full border border-background/30 px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-background hover:text-foreground"
            >
              Call 239-331-2390
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
