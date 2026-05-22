import Link from "next/link";

// Shared footer for every page on the site.
export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink py-20 text-background lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/b7f13d_4fd9ca12c1df4868a58318f47c856ca9~mv2.png"
              alt="Engler Window & Door"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              Custom windows and doors for homeowners, architects, and
              builders across Southwest Florida and beyond. Family-owned
              since 2003.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-background/50">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-background/85">
              <li>
                <a
                  href="tel:+12393312390"
                  className="transition-colors hover:text-accent"
                >
                  239.331.2390
                </a>
              </li>
              <li>
                <a
                  href="mailto:mengler@englerwindow.com"
                  className="break-all transition-colors hover:text-accent"
                >
                  mengler@englerwindow.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-background/50">
              Service Area
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-background/85">
              Naples · the Gulf Coast · Southwest Florida &amp; beyond
            </p>
          </div>

          {/* Explore links */}
          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-background/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-background/85">
              <li>
                <Link
                  href="/portfolio"
                  className="transition-colors hover:text-accent"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#manufacturers"
                  className="transition-colors hover:text-accent"
                >
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="transition-colors hover:text-accent"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-8 text-[11px] uppercase tracking-[0.2em] text-background/50 md:flex-row">
          <p>© 2026 Engler Window &amp; Door. All rights reserved.</p>
          <p>Family-owned in Naples since 2003</p>
        </div>
      </div>
    </footer>
  );
}
