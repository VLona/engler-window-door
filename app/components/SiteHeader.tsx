import Link from "next/link";

// Shared header for every page on the site. Uses Next.js <Link> for
// client-side navigation between routes (/, /portfolio, etc.) — and
// /#work, /#about, etc. anchors that work from any page on the site.
export default function SiteHeader() {
  return (
    <>
      {/* Announcement strip */}
      <div className="bg-ink text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] lg:px-10">
          <span className="text-background/80">
            Family-owned in Naples since 2003
          </span>
          <span className="hidden text-background/60 sm:inline">
            Now scheduling 2026 installations ·{" "}
            <span className="text-accent">239.331.2390</span>
          </span>
        </div>
      </div>

      {/* Top nav */}
      <header className="border-b border-line bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" aria-label="Engler Window & Door — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://static.wixstatic.com/media/b7f13d_4fd9ca12c1df4868a58318f47c856ca9~mv2.png"
              alt="Engler Window & Door"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          <ul className="hidden items-center gap-10 text-sm text-muted md:flex">
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
                href="/manufacturers"
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
            <li>
              <Link
                href="/#contact"
                className="transition-colors hover:text-accent"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link
            href="/quote"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-dark md:inline-block"
          >
            Get a quote
          </Link>
        </nav>
      </header>
    </>
  );
}
