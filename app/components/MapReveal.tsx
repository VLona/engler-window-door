"use client";

import { useState } from "react";

// A button that reveals the embedded Google Map on click — instead of loading
// a heavy iframe on every page view. Keeps the contact page fast and clean;
// only visitors who actually want directions pull in the map.
export default function MapReveal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-foreground px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        {open ? "Hide map" : "See our showroom on the map"}
        <span aria-hidden="true">{open ? "↑" : "↓"}</span>
      </button>

      {open && (
        <div className="mt-10 aspect-[16/9] w-full overflow-hidden border border-line bg-line lg:aspect-[21/9]">
          <iframe
            title="Engler Window & Door showroom location — 4184 Tamiami Trail N, Naples, FL"
            src="https://www.google.com/maps?q=4184+Tamiami+Trail+N,+Naples,+FL+34103&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
}
