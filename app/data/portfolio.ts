// Single source of truth for portfolio photos. Used by:
//   - app/portfolio/page.tsx (category landing — 2 big cards)
//   - app/portfolio/[category]/page.tsx (per-category grids)

// Wix CDN URL builder. Their /v1/fit/ path scales images to fit within w×h
// while preserving aspect ratio. enc_avif uses the modern avif format
// (smaller + faster than jpeg). Keeps the file identifier arrays below
// short and readable instead of 50+ full URL strings.
const WIX_BASE = "https://static.wixstatic.com/media/b7f13d_";
const WIX_SIZE = "/v1/fit/w_1200,h_900,q_90,enc_avif,quality_auto/b7f13d_";
export const wixUrl = (file: string) =>
  `${WIX_BASE}${file}${WIX_SIZE}${file}`;

export type ProjectCategory = "windows" | "doors";

export type Project = {
  src: string;
  category: ProjectCategory;
};

// Windows category — 50 photos, pulled from engler's homepage carousel
// + their portfolio-collections/my-portfolio/project-title-6 page.
const windowFiles = [
  // Existing site hero / homepage photos
  "37a8746101b44356aab9456a52ef8ef0~mv2.jpg",
  "77a82cc5d6b249e885ec0be677e77a50~mv2.jpg",
  "1e4019b1ef074ad1b489db26ccbb1491~mv2.jpg",
  "e5c263f0d0954237938f4be11c13015f~mv2.jpeg",
  "259ecae172654e5ca9fffbad5c79d8d1~mv2.jpeg",
  "b7e0d8c3afdd4b97bf2f6d9013e6d666~mv2.jpeg",
  // From englerwindow.com/portfolio-collections/my-portfolio/project-title-6
  "7ef984acaf8c4158a95e1999ea2560d7~mv2.jpeg",
  "f0dffdd2eeb24d4db3ceaccba58bf4c6~mv2.jpeg",
  "f6b2aa4292dc481798bbeacf851b3d78~mv2.jpeg",
  "dfaf75c8faa84281952d74918daf957e~mv2.jpeg",
  "9d29e0ed2f2d493ea1d51b691b9a4b8d~mv2.jpg",
  "51e1913f42924bc4bda8f14b867e5b55~mv2.jpg",
  "37f7eb726a0245beb38916e80fe0487f~mv2.jpeg",
  "b566294932294f5eaed93cab188fdb6a~mv2.jpeg",
  "68294af3ad3645f09d27ff01b2a14ddc~mv2.jpeg",
  "392e0001266342f1889d2b2eb35e47b1~mv2.jpeg",
  "4ec122ae34384783a642c5ae9a89759e~mv2.jpeg",
  "2182584291804fa08facc40c44ea2bdb~mv2.jpeg",
  "0796c17e72c74f32938d683d54ca7d18~mv2.jpeg",
  "641c6055bcd24229b958f927edd3c967~mv2.jpeg",
  "1bb11ee103d742a6bc98fbd77994146a~mv2.jpeg",
  "33a4db88341644c9a33c9b464f4cdc52~mv2.jpeg",
  "ad4f7c2c7ba24af6b1793f77d1692cd9~mv2.jpeg",
  "48778522eeb2418cb472db7190b6176e~mv2.jpeg",
  "cca93d574ed047b8919f90d950cc1400~mv2.jpeg",
  "81b81de98f2e43ee889ab7b6c7c056b9~mv2.jpeg",
  "6196b280dd7d4bc388719dd10079dfd3~mv2.jpeg",
  "d30cc84013eb41539c5d16f8b2dcb92f~mv2.jpeg",
  "a283d4587e804bc88f82d547a46d9648~mv2.jpeg",
  "ce584ae0e18c44ad9b2b798152be17a1~mv2.jpeg",
  "6ee1175f3d2b40248f7e476b3e0bcd04~mv2.jpeg",
  "ec04f2f9193242108f2a2d6f32bbef30~mv2.jpeg",
  "4a613086b9bd48f396d522fc49538950~mv2.jpeg",
  "adde5fbecbb84c9caf12f845cc4a5d1e~mv2.jpeg",
  "8affda9acacc4fd79f5e0237c0c8dbe8~mv2.jpeg",
  "752486a1d5ce46e3b8472e81e42645c0~mv2.jpeg",
  "8ad00d930508428499ee039e14a7e53e~mv2.jpeg",
  "da8fd8b987454a91b24ea5c36c57dd9f~mv2.jpeg",
  "3f1515ab344f425a973ad376a4cdc193~mv2.jpeg",
  "2b0237c4fc774eac80045a383914aa43~mv2.jpeg",
  "df250657409848cbaba37b1a22fcd75f~mv2.jpeg",
  "d9f23c20a34f4241b7656d982b1962b8~mv2.jpeg",
  "d95853672d7e4bb7bac82e1f13db2ad0~mv2.jpeg",
  "dea6501da19546ac9bb0981d247f5fdd~mv2.jpeg",
  "9bc5609b282a46609a047fb80180da14~mv2.jpeg",
  "d2b7edefddbe4961a068f5a00daee032~mv2.jpeg",
  "f1fba222e9b54b52b34b07878a5e562c~mv2.jpeg",
  "08e3820c78744c998f1db5fe8d3f418f~mv2.jpeg",
  "4455199b65254efb8ce081bcefa60106~mv2.jpeg",
  "c330c9147f674ae1bf3fdc0d6fdff080~mv2.jpeg",
];

// Doors category — smaller for now. When user sends a door-specific
// portfolio collection URL we'll expand this (same array pattern).
const doorFiles = [
  "edd39283aa6a4e838293f02a0bc8989e~mv2.jpg",
  "90156cd07e8a4d8e942f9f815ff87e27~mv2.jpeg",
  "211035c2186649498791b6febb721281~mv2.jpeg",
];

export const projects: Project[] = [
  ...windowFiles.map((f) => ({
    src: wixUrl(f),
    category: "windows" as const,
  })),
  ...doorFiles.map((f) => ({
    src: wixUrl(f),
    category: "doors" as const,
  })),
];

// Helper: filter projects by category. Used by both /portfolio (preview
// thumbnails on the landing cards) and /portfolio/[category] (full grid).
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

// Metadata per category — drives the page header content on
// /portfolio/[category] pages without repeating strings.
export const categoryMeta: Record<
  ProjectCategory,
  { name: string; intro: string }
> = {
  windows: {
    name: "Windows",
    intro:
      "From floor-to-ceiling picture windows to impact-rated casements and lift-and-slide systems — every install is engineered for Florida's climate and the architecture it serves.",
  },
  doors: {
    name: "Doors",
    intro:
      "Custom mahogany entryways, folding glass walls that dissolve into the lanai, multi-track sliders, and one-of-a-kind iron grillework — every door specified for the residence it opens.",
  },
};
