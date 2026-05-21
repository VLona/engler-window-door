export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* ── Announcement strip ──────────────────────────────────── */}
      <div className="bg-ink text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] lg:px-10">
          <span className="text-background/80">
            Family-owned in Naples since 2003
          </span>
          <span className="hidden text-background/60 sm:inline">
            Now scheduling 2026 installations · <span className="text-accent">239.331.2390</span>
          </span>
        </div>
      </div>

      {/* ── Top nav ─────────────────────────────────────────────── */}
      <header className="border-b border-line bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" aria-label="Engler Window & Door — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/b7f13d_4fd9ca12c1df4868a58318f47c856ca9~mv2.png"
              alt="Engler Window & Door"
              className="h-10 w-auto md:h-12"
            />
          </a>

          <ul className="hidden items-center gap-10 text-sm text-muted md:flex">
            <li>
              <a href="#work" className="transition-colors hover:text-accent">
                Work
              </a>
            </li>
            <li>
              <a
                href="#manufacturers"
                className="transition-colors hover:text-accent"
              >
                Manufacturers
              </a>
            </li>
            <li>
              <a href="#about" className="transition-colors hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-accent"
              >
                Contact
              </a>
            </li>
          </ul>

          <a
            href="tel:+12393312390"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-dark md:inline-block"
          >
            239.331.2390
          </a>
        </nav>
      </header>

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
              <em className="font-serif italic text-accent">the way you live.</em>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              For over twenty years, Engler has worked with homeowners,
              architects, and builders — delivering Loewen, ES Windows, and
              Signature Door products with the codes-and-craft knowledge every
              home deserves.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
              >
                Start your project
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center px-2 py-3.5 text-sm font-medium text-foreground underline-offset-4 transition hover:text-accent hover:underline"
              >
                See our work →
              </a>
            </div>

            {/* Brand values strip — from the real site */}
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line pt-8 text-[11px] uppercase tracking-[0.18em] text-muted">
              <div>
                <dt className="font-serif text-2xl normal-case tracking-tight text-accent">
                  20+
                </dt>
                <dd className="mt-2">Years family-owned</dd>
              </div>
              <div>
                <dt className="font-serif text-2xl normal-case tracking-tight text-accent">
                  3
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

          {/* Right: photo with offset bronze block */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Decorative bronze offset block behind the photo */}
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

      {/* ── Manufacturer band ──────────────────────────────────── */}
      <section className="border-y border-line bg-ink py-10 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-6 text-center text-[11px] uppercase tracking-[0.3em] text-background/60">
            Premier manufacturer partners
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 font-serif text-2xl tracking-tight text-background/90 md:text-3xl">
            <li>Loewen</li>
            <li className="text-accent">·</li>
            <li>ES Windows</li>
            <li className="text-accent">·</li>
            <li>Signature Door</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
