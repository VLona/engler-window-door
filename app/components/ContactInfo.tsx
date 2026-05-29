"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import FadeIn from "./FadeIn";

// Phone extensions lifted from englerwindow.com/contact.
const extensions = [
  { ext: "1", label: "Estimating" },
  { ext: "2", label: "Sales — New Construction" },
  { ext: "3", label: "Sales — New & Remove / Replace" },
  { ext: "4", label: "Service" },
];

// Minimal line icons (Lucide-style). Inline SVG = no icon-library dependency.
const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg {...iconProps}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

// Shared card styling — soft navy-tinted shadow, ring edge, hover lift.
const cardClass =
  "group h-full rounded-2xl bg-background p-8 text-left shadow-[0_2px_24px_rgba(31,42,58,0.05)] ring-1 ring-line/70 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(31,42,58,0.12)] lg:p-10";

export default function ContactInfo() {
  const [mapOpen, setMapOpen] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  function toggleMap() {
    setMapOpen((open) => {
      const next = !open;
      // Only scroll the map into view when we're OPENING it.
      if (next) {
        window.setTimeout(() => {
          mapRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 80);
      }
      return next;
    });
  }

  return (
    <>
      {/* ── Floating cards ────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Call */}
          <FadeIn>
            <div className={cardClass}>
              <span className="text-accent">
                <PhoneIcon />
              </span>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted">
                Call
              </p>
              <a
                href="tel:+12393312390"
                className="mt-2 block font-serif text-3xl tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-4xl"
              >
                239-331-2390
              </a>
              <ul className="mt-5 space-y-2 text-sm text-muted">
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
          <FadeIn delay={80}>
            <div className={cardClass}>
              <span className="text-accent">
                <MailIcon />
              </span>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted">
                Email
              </p>
              <a
                href="mailto:mengler@englerwindow.com"
                className="mt-2 block break-all font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl"
              >
                mengler@englerwindow.com
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Reaches Mike and the team directly. For the fastest turnaround,
                the quote form routes the right details to the right person.
              </p>
              <Link
                href="/quote"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                Request a quote
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </FadeIn>

          {/* Showroom — clickable, opens the map */}
          <FadeIn delay={120}>
            <button type="button" onClick={toggleMap} className={`${cardClass} w-full`}>
              <span className="text-accent">
                <PinIcon />
              </span>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted">
                Showroom
              </p>
              <p className="mt-2 font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                4184 Tamiami Trail N
                <br />
                Naples, FL 34103
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">
                Hours
              </p>
              <p className="mt-2 text-sm text-foreground">
                Mon – Fri · 9:00 AM – 5:00 PM
              </p>
              <p className="mt-1 text-sm text-muted">Appointments encouraged</p>

              {/* Cue that the card is interactive */}
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                {mapOpen ? "Map open below" : "Tap to view on map"}
                <span aria-hidden="true">{mapOpen ? "↓" : "→"}</span>
              </span>
            </button>
          </FadeIn>

          {/* Mailing + service area */}
          <FadeIn delay={160}>
            <div className={cardClass}>
              <span className="text-accent">
                <SendIcon />
              </span>
              <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted">
                Mailing Address
              </p>
              <p className="mt-2 font-serif text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                340 Tamiami Trail N #206
                <br />
                Naples, FL 34102
              </p>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted">
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

      {/* ── Map (revealed by the Showroom card or the button) ──── */}
      <section
        ref={mapRef}
        className="mx-auto max-w-7xl px-6 pb-24 text-center lg:px-10 lg:pb-32"
      >
        {!mapOpen && (
          <button
            type="button"
            onClick={toggleMap}
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            See our showroom on the map
            <span aria-hidden="true">↓</span>
          </button>
        )}

        {mapOpen && (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-line lg:aspect-[21/9]">
            <iframe
              title="Engler Window & Door showroom location — 4184 Tamiami Trail N, Naples, FL"
              src="https://www.google.com/maps?q=4184+Tamiami+Trail+N,+Naples,+FL+34103&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </section>
    </>
  );
}
