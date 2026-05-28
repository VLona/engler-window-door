"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// All slides live in this array — add/remove entries here, JSX below stays the same.
const slides = [
  {
    src: "https://static.wixstatic.com/media/b7f13d_e5c263f0d0954237938f4be11c13015f~mv2.jpeg/v1/fit/w_1920,h_930,q_90,enc_avif,quality_auto/b7f13d_e5c263f0d0954237938f4be11c13015f~mv2.jpeg",
    alt: "Engler Window & Door — featured installation",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_259ecae172654e5ca9fffbad5c79d8d1~mv2.jpeg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/b7f13d_259ecae172654e5ca9fffbad5c79d8d1~mv2.jpeg",
    alt: "Engler Window & Door — coastal residence",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_90156cd07e8a4d8e942f9f815ff87e27~mv2.jpeg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/b7f13d_90156cd07e8a4d8e942f9f815ff87e27~mv2.jpeg",
    alt: "Engler Window & Door — custom installation",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_211035c2186649498791b6febb721281~mv2.jpeg/v1/fit/w_1920,h_1080,q_90,enc_avif,quality_auto/b7f13d_211035c2186649498791b6febb721281~mv2.jpeg",
    alt: "Engler Window & Door — architect collaboration",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_b7e0d8c3afdd4b97bf2f6d9013e6d666~mv2.jpeg/v1/fit/w_1920,h_930,q_90,enc_avif,quality_auto/b7f13d_b7e0d8c3afdd4b97bf2f6d9013e6d666~mv2.jpeg",
    alt: "Engler Window & Door — recent project",
  },
];

const AUTO_ADVANCE_MS_DEFAULT = 5000;

type Props = {
  // Override the carousel's sizing. Default works for the full-width image strip;
  // pass something like "aspect-[4/3] lg:aspect-auto lg:min-h-[480px]" when
  // dropping it into a different layout (e.g. the CTA banner split column).
  className?: string;
  // How often to auto-advance, in milliseconds. Default 5000 (5s). Pass 3000
  // for a snappier hero feel.
  autoAdvanceMs?: number;
  // Optional URL — if provided, the whole carousel becomes a clickable link
  // (prev/next/dot buttons still work independently because they sit above
  // the link's z-index).
  linkHref?: string;
};

export default function ProjectCarousel({
  className = "aspect-[21/9] w-full",
  autoAdvanceMs = AUTO_ADVANCE_MS_DEFAULT,
  linkHref,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance at the configured interval, unless the user is hovering (paused).
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoAdvanceMs);
    return () => clearInterval(id);
  }, [paused, autoAdvanceMs]);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Engler Window & Door project gallery"
      className={`relative overflow-hidden bg-ink ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide stack — all images overlap, only the active one is visible. */}
      {slides.map((slide, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Subtle bottom gradient so the dots/buttons stay readable on any photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink/70 to-transparent"
      />

      {/* Optional whole-carousel link — sits at z-10. Buttons + dots below
          are z-20 so they handle their own clicks without triggering the link. */}
      {linkHref && (
        <Link
          href={linkHref}
          aria-label="View Engler portfolio"
          className="absolute inset-0 z-10"
        />
      )}

      {/* Prev button */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous project"
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-background backdrop-blur transition hover:bg-accent md:left-6 md:h-14 md:w-14"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          ←
        </span>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={next}
        aria-label="Next project"
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink/40 text-background backdrop-blur transition hover:bg-accent md:right-6 md:h-14 md:w-14"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          →
        </span>
      </button>

      {/* Dot/bar indicators */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            className={`h-[3px] w-10 transition ${
              i === index
                ? "bg-accent"
                : "bg-background/40 hover:bg-background/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
