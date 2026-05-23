import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import QuoteForm from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote — Engler Window & Door",
  description:
    "Tell us about your project. Mike Engler personally follows up on every quote request within one business day.",
};

export default function QuotePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* Page header */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center lg:px-10 lg:pt-24 lg:pb-16">
        <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
          <span className="h-px w-8 bg-accent" />
          Get a Quote
          <span className="h-px w-8 bg-accent" />
        </span>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Tell us about{" "}
          <em className="italic text-accent">your project.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
          Mike personally follows up on every quote request — usually the same
          day, never longer than one business day. The more detail you give us,
          the faster we can put together real numbers.
        </p>
      </section>

      {/* The form */}
      <section className="mx-auto max-w-2xl px-6 pb-24 lg:px-10 lg:pb-32">
        <QuoteForm />
      </section>

      {/* Alternative contact strip */}
      <section className="border-t border-line bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            Prefer to talk first?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-2 font-serif text-2xl tracking-tight text-foreground sm:flex-row sm:gap-6 sm:text-3xl">
            <a
              href="tel:+12393312390"
              className="transition hover:text-accent"
            >
              239.331.2390
            </a>
            <span aria-hidden="true" className="hidden text-muted sm:inline">
              ·
            </span>
            <a
              href="mailto:mengler@englerwindow.com"
              className="break-all transition hover:text-accent"
            >
              mengler@englerwindow.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
