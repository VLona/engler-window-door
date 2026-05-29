import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FadeIn from "../components/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Engler Window & Door · Naples, FL",
  description:
    "Reach Engler Window & Door in Naples, Florida. Call 239-331-2390, email mengler@englerwindow.com, or visit our showroom at 4184 Tamiami Trail N. Family-owned since 2003.",
};

// Phone extensions lifted from englerwindow.com/contact.
const extensions = [
  { ext: "1", label: "Estimating" },
  { ext: "2", label: "Sales — New Construction" },
  { ext: "3", label: "Sales — New & Remove / Replace" },
  { ext: "4", label: "Service" },
];

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── Page header ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28 lg:pb-16">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Contact
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Start your project{" "}
            <em className="italic text-accent">today.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Engler Window &amp; Door operates on a simple principle: do what&apos;s
            right for our customers, employees, and suppliers. We focus on the
            long term, we do it right the first time, and when problems
            inevitably arise, we fix them as efficiently as we can.
          </p>
        </div>
      </section>

      {/* ── Contact details ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {/* Phone + extensions */}
          <FadeIn className="bg-background">
            <div className="flex h-full flex-col p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Call
              </p>
              <a
                href="tel:+12393312390"
                className="mt-3 font-serif text-4xl tracking-tight text-foreground transition-colors hover:text-accent sm:text-5xl"
              >
                239-331-2390
              </a>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                {extensions.map((e) => (
                  <li key={e.ext} className="flex items-baseline gap-3">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-accent">
                      Ext {e.ext}
                    </span>
                    <span>{e.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Email */}
          <FadeIn className="bg-background" delay={80}>
            <div className="flex h-full flex-col p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Email
              </p>
              <a
                href="mailto:mengler@englerwindow.com"
                className="mt-3 break-all font-serif text-2xl tracking-tight text-foreground transition-colors hover:text-accent sm:text-3xl"
              >
                mengler@englerwindow.com
              </a>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                Email reaches Mike and the team directly. For the fastest
                turnaround on a project, use the quote form — it routes the
                right details to the right person.
              </p>
              <Link
                href="/quote"
                className="mt-6 inline-flex items-center gap-2 self-start text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Request a quote
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </FadeIn>

          {/* Showroom */}
          <FadeIn className="bg-background" delay={120}>
            <div className="flex h-full flex-col p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Showroom
              </p>
              <p className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground">
                4184 Tamiami Trail N
                <br />
                Naples, FL 34103
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
                Hours
              </p>
              <p className="mt-2 text-sm text-foreground">
                Mon – Fri · 9:00 AM – 5:00 PM
              </p>
              <p className="mt-1 text-sm text-muted">
                Appointments encouraged
              </p>
            </div>
          </FadeIn>

          {/* Mailing + service area */}
          <FadeIn className="bg-background" delay={160}>
            <div className="flex h-full flex-col p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                Mailing Address
              </p>
              <p className="mt-3 font-serif text-2xl leading-snug tracking-tight text-foreground">
                340 Tamiami Trail N #206
                <br />
                Naples, FL 34102
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">
                Service Area
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                Naples · the Gulf Coast · Southwest Florida &amp; beyond — for
                over twenty years.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Map ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="aspect-[16/9] w-full overflow-hidden border border-line bg-line lg:aspect-[21/9]">
          <iframe
            title="Engler Window & Door showroom location — 4184 Tamiami Trail N, Naples, FL"
            src="https://www.google.com/maps?q=4184+Tamiami+Trail+N,+Naples,+FL+34103&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

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
