// Single source of truth for manufacturer data. Used by:
//   - app/page.tsx (homepage "Premier manufacturer partners" band + cards)
//   - app/manufacturers/page.tsx (dedicated deep page)
// Edit data here — both pages re-render automatically.

export type Manufacturer = {
  slug: string; // URL-safe id, used for anchor links (#loewen) and future /manufacturers/[slug] routes
  name: string;
  category: string; // short product-category descriptor (e.g. "Premium wood-clad windows") — used on homepage cards
  classification?: string; // e.g. "Full-Line Brand" from Engler's industry-resources page
  tagline?: string; // brand's own tagline / official quote (verbatim where possible) — used on /manufacturers page
  shortCopy: string; // 1-2 sentence Engler-voiced summary (used on homepage cards)
  longCopy: string; // expanded 3-4 sentence Engler-voiced version (used on /manufacturers page)
  logo: string; // logo URL — self-hosted from /public/images/manufacturers/{slug}.{ext}
  origin?: string; // where the manufacturer is based
  products: string[]; // categories Engler installs (lifted from engler's industry-resources page)
  signatureLines?: string[]; // collection / product line names worth calling out
  website?: string; // brand's official site — opens in new tab from logo + name + "Visit" link on deep page (closed-loop relaxed for transparency)
  productGuide?: string; // URL to brand's product brochure PDF — renders a "Download product guide" CTA on the deep page
  brandColor?: string; // hex (#RRGGBB) — drives the hover tint on the homepage manufacturer cards. brand-distinct color picked to evoke each manufacturer's identity.
};

export const manufacturers: Manufacturer[] = [
  {
    slug: "loewen",
    name: "Loewen",
    category: "Premium wood-clad windows",
    classification: "Full-Line Brand",
    tagline:
      "Leading manufacturer of premium windows and doors for the luxury architectural market.",
    shortCopy:
      "For projects that demand the warmth of wood paired with modern engineering, we work with Loewen. Their hand-finished casements and lift-and-slide doors are how we deliver true architectural craft to clients who notice every detail.",
    longCopy:
      "For projects that demand the warmth of wood paired with modern engineering, we work with Loewen. Every Loewen window starts as solid wood laminations — never veneers — and pairs with extruded aluminum cladding and solid bronze, brass, zinc, or stainless steel hardware. Engler installs across Loewen's full product line, from the Cyprium Collection down to their StormForce series.",
    logo: "/images/manufacturers/loewen.jpg",
    website: "https://www.loewen.com",
    // productGuide intentionally removed for now — set this URL again when Mike confirms which Loewen PDF to host.
    brandColor: "#C8232C", // red — from the cursive Loewen wordmark
    origin: "Steinbach, Manitoba, Canada",
    products: [
      "Inswing & outswing doors",
      "French door transom",
      "Operable & fixed casement",
      "Operable awning",
      "Lift and slide",
      "Double hung windows",
      "Picture / direct set windows",
    ],
    signatureLines: ["Cyprium Collection", "StormForce Series"],
  },
  {
    slug: "es-windows",
    name: "ES Windows",
    category: "Impact-rated aluminum systems",
    tagline: "Impact-rated aluminum systems engineered for the Florida coast.",
    shortCopy:
      "Built for Florida's climate. ES Windows' impact-rated aluminum systems are our first call when a project needs hurricane code compliance without sacrificing the clean modern lines architects ask for.",
    longCopy:
      "Built for Florida's climate. ES Windows' impact-rated aluminum systems are our first call when a project needs hurricane code compliance without sacrificing the clean modern lines architects ask for. The full residential line — from the ES-5000 casement through the ES-EL400 sliding door — meets Florida HVHZ Category 5 standards while keeping slim profiles and tall configurations.",
    logo: "/images/manufacturers/es-windows.png",
    website: "https://eswindows.com",
    brandColor: "#1B3A6B", // deep blue — aluminum modernist
    products: [
      "Fixed windows",
      "Sliding glass doors",
      "Horizontal rollers / sliding windows",
      "Single hungs",
      "Swing doors",
      "Sidelites",
      "Casements",
    ],
    signatureLines: [
      "ES-5000 Casement",
      "ES-9000 Impact Door",
      "ES-EL400 Sliding Door",
    ],
  },
  {
    slug: "signature-door",
    name: "Signature Door",
    category: "Custom mahogany & iron entryways",
    tagline:
      "We're not different to be different — we're different to be better.",
    shortCopy:
      "An entryway sets the tone for the whole home. We work with Signature Door because every one of theirs is built from solid mahogany or wrought iron, made-to-order for the residence it opens.",
    longCopy:
      "An entryway sets the tone for the whole home. We work with Signature Door because every one of theirs is built from solid wood, iron grillework, and decorative glass — manufactured to your exact specifications. Signature carries impact and non-impact testing up to Category 5 hurricane compliance, and every door is made-to-order in Altoona, Pennsylvania.",
    logo: "/images/manufacturers/signature-door.png",
    website: "https://signaturedoor.com",
    brandColor: "#5C3317", // mahogany — wood + iron entryways
    origin: "Altoona, Pennsylvania",
    products: [
      "Custom entry doors",
      "Bifold / fold & slide doors",
      "Combination storm & screen doors",
      "Decorative glass entryways",
      "Iron grillework",
      "Florida hurricane-approved doors",
    ],
  },
  {
    slug: "euro-wall",
    name: "Euro-Wall",
    category: "Folding & multi-track glass systems",
    tagline: "Folding & multi-track glass systems for indoor-outdoor living.",
    shortCopy:
      "When clients want to dissolve the line between living room and lanai, we install Euro-Wall. Their folding and pocketing glass walls open entire facades to the water, the breeze, and the view.",
    longCopy:
      "When clients want to dissolve the line between living room and lanai, we install Euro-Wall. Their folding and pocketing glass walls open entire facades to the water, the breeze, and the view. The Euro Vista Bi-Fold and Multi Slide systems are the centerpiece of every Engler project that calls for true indoor-outdoor living.",
    logo: "/images/manufacturers/euro-wall.png",
    website: "https://eurowallsystems.com",
    brandColor: "#5A6F7A", // steel blue-gray — glass + aluminum
    products: [
      "Euro-Pivot Door",
      "Euro Vista Bi-Fold",
      "Euro Vista Multi Slide",
    ],
    signatureLines: ["Euro Vista Bi-Fold", "Euro Vista Multi Slide"],
  },
  {
    slug: "origin",
    name: "Origin",
    category: "British-engineered aluminum bifolds",
    tagline: "Engineering beauty in every detail.",
    shortCopy:
      "Origin's slim-profile aluminum bifolds and casements deliver the minimalist look modern Naples architecture demands — paired with the precision and warranty backing that come out of an English factory.",
    longCopy:
      "Origin's slim-profile aluminum bifolds, casements, and french doors deliver the minimalist look modern Naples architecture demands — paired with the precision of a 20-year guarantee out of an English factory. Their family-run UK operation has spent over two decades perfecting aluminum systems for the discerning custom market.",
    logo: "/images/manufacturers/origin.jpg",
    website: "https://www.origin-global.com",
    brandColor: "#212121", // charcoal black — minimalist aluminum
    origin: "Manufactured in-house in the UK",
    products: [
      "Bi-fold doors",
      "Swing / French doors",
      "Sliding doors",
      "Casement windows",
    ],
    signatureLines: ["20-Year Guarantee"],
  },
  {
    slug: "arcadia",
    name: "Arcadia",
    category: "Classic Florida sliding glass",
    tagline: "Luxury windows and doors.",
    shortCopy:
      "Arcadia has been part of Florida's architectural language for generations. We install them on careful restorations and modern coastal builds alike — clean, timeless, and effortless to operate for decades.",
    longCopy:
      "Arcadia has been part of Florida's architectural language for generations. We install their luxury sliding glass doors and casement windows on careful restorations and modern coastal builds alike — clean, timeless, and effortless to operate for decades.",
    logo: "/arcadia-logo.png", // Self-hosted from /public — replaces the Engler-logo fallback. Originally pulled from arcadiacustom.com.
    website: "https://arcadiacustom.com",
    brandColor: "#A8AC9F", // sage moss — Florida coastal classic
    products: ["Sliding glass doors", "Casement windows"],
  },
  {
    slug: "ashley-norton",
    name: "Ashley Norton",
    category: "Architectural hardware in solid brass",
    tagline:
      "The leading choice for discerning architects and designers.",
    shortCopy:
      "The smallest details say the most about a home. Ashley Norton's solid-brass handles, hinges, and locksets — finished by hand in any patina — are what we specify when nothing less than perfect will do.",
    longCopy:
      "The smallest details say the most about a home. Ashley Norton's solid-brass and bronze hardware — handcrafted by artisans since 1987 and tested for 5 million-plus cycles — is what we specify when nothing less than perfect will do. Available in seven brass finishes plus their signature Natural Bronze patina.",
    logo: "/images/manufacturers/ashley-norton.jpg",
    website: "https://ashleynorton.com",
    brandColor: "#8B6F47", // brass + bronze — matches their material
    origin: "Founded 1987 · Europe & USA",
    products: [
      "Door hardware (levers, knobs, locksets)",
      "Cabinet hardware",
      "Window hardware",
      "Gate hardware",
      "Home accessories",
    ],
    signatureLines: ["Natural Bronze (NB) Patina"],
  },
];
