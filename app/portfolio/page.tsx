import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Portfolio — Engler Window & Door",
  description:
    "Selected custom window and door installations by Engler Window & Door — Naples, the Gulf Coast, and beyond. Twenty years of homes for homeowners, architects, and builders.",
};

// Every photo on this page lives in this array — add/remove entries here,
// the grid below renders them automatically.
const projects = [
  {
    src: "https://static.wixstatic.com/media/b7f13d_37a8746101b44356aab9456a52ef8ef0~mv2.jpg/v1/fill/w_1200,h_900,q_90,enc_avif,quality_auto/Port%20Royal%20Residence.jpg",
    caption: "Port Royal Residence · Naples",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_77a82cc5d6b249e885ec0be677e77a50~mv2.jpg/v1/fill/w_1200,h_900,q_90,enc_avif,quality_auto/505%20Fifth%20Ave%20S.jpg",
    caption: "505 Fifth Ave S · Naples",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_edd39283aa6a4e838293f02a0bc8989e~mv2.jpg/v1/fill/w_1200,h_900,q_90,enc_avif,quality_auto/Naples%20Private%20Residence.jpg",
    caption: "Private Residence · Naples",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_1e4019b1ef074ad1b489db26ccbb1491~mv2.jpg/v1/fill/w_1200,h_900,q_90,enc_avif,quality_auto/North%20Carolina%20Residence_JPG.jpg",
    caption: "Private Residence · North Carolina",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_7ef984acaf8c4158a95e1999ea2560d7~mv2.jpeg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_7ef984acaf8c4158a95e1999ea2560d7~mv2.jpeg",
    caption: "Floor-to-Ceiling Residence · Naples",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_e5c263f0d0954237938f4be11c13015f~mv2.jpeg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_e5c263f0d0954237938f4be11c13015f~mv2.jpeg",
    caption: "Featured Installation · Gulf Coast",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_259ecae172654e5ca9fffbad5c79d8d1~mv2.jpeg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_259ecae172654e5ca9fffbad5c79d8d1~mv2.jpeg",
    caption: "Coastal Residence · Naples",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_90156cd07e8a4d8e942f9f815ff87e27~mv2.jpeg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_90156cd07e8a4d8e942f9f815ff87e27~mv2.jpeg",
    caption: "Custom Project · Southwest Florida",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_b7e0d8c3afdd4b97bf2f6d9013e6d666~mv2.jpeg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_b7e0d8c3afdd4b97bf2f6d9013e6d666~mv2.jpeg",
    caption: "Architect Collaboration · Naples",
  },
  {
    src: "https://static.wixstatic.com/media/b7f13d_211035c2186649498791b6febb721281~mv2.jpeg/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_211035c2186649498791b6febb721281~mv2.jpeg",
    caption: "Recent Project · Gulf Coast",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />

      {/* ── Page header ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Portfolio · Selected Work
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Twenty years of custom windows &amp; doors,{" "}
            <em className="italic text-accent">across the Gulf Coast.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            A selection of Engler installations — homes built with Loewen, ES
            Windows, Signature Door, Euro-Wall, Origin, Arcadia, and Ashley
            Norton hardware. Every project touched personally by Mike.
          </p>
        </div>
      </section>

      {/* ── Photo grid ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.map((p, i) => (
            <figure key={p.src} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={`Engler Window & Door — ${p.caption}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted">
                <span>
                  <span className="text-accent">
                    {String(i + 1).padStart(2, "0")} ·
                  </span>{" "}
                  {p.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <section className="border-t border-line bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Your project, next
            <span className="h-px w-8 bg-accent" />
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Want yours to be the{" "}
            <em className="italic text-accent">next one?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
            Tell us a little about your home and we&apos;ll put a quote
            together — or call Mike directly to talk it through.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
            >
              Request a quote
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
