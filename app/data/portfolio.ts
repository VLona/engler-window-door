// Single source of truth for portfolio photos. Used by:
//   - app/portfolio/page.tsx (category landing — 2 big cards)
//   - app/portfolio/[category]/page.tsx (per-category grids)

// Local image URL builder. Files were downloaded from wixstatic at w_1920/q_90
// (AVIF) and saved to /public/images/portfolio/{hash}.avif. Two specific images
// used on full-bleed homepage heroes ("37a874..." + "dfaf75c8...") are saved at
// w_2880 — same filename, just a bigger source. Keeps the arrays below short.
// Filename param looks like "37a874...~mv2.jpg" — we strip the ~mv2.ext suffix
// since we save everything as .avif regardless of original wix extension.
const localUrl = (file: string) => {
  const hash = file.split("~")[0];
  return `/images/portfolio/${hash}.avif`;
};
export const wixUrl = localUrl;

// Same source file used for category page heros — use CSS object-fit:cover at
// the call site to crop. (Previously wix's /v1/fill/ transform did this server-side.)
const heroUrl = localUrl;

export type ProjectCategory = "windows" | "doors";

export type Project = {
  src: string;
  category: ProjectCategory;
};

// Windows category — homepage carousel + portfolio-collections/my-portfolio/project-title-6.
// 4 photos that ALSO appeared on the doors collection page were moved to
// doorFiles below — they're rooms showing both, doors-primary per user.
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

// Doors category — pulled from englerwindow.com/portfolio-collections/my-portfolio/project-title-3.
// 50 total: 3 from earlier categorization + 4 that ALSO appeared on the
// windows collection page (rooms showing both — doors-primary per user) +
// 43 fresh photos from the doors collection.
const doorFiles = [
  // Originally categorized as doors
  "edd39283aa6a4e838293f02a0bc8989e~mv2.jpg",
  "90156cd07e8a4d8e942f9f815ff87e27~mv2.jpeg",
  "211035c2186649498791b6febb721281~mv2.jpeg",
  // Appeared on BOTH windows AND doors collection pages on engler's site.
  // Recategorized to doors-primary per user direction.
  "f0dffdd2eeb24d4db3ceaccba58bf4c6~mv2.jpeg",
  "f6b2aa4292dc481798bbeacf851b3d78~mv2.jpeg",
  "dfaf75c8faa84281952d74918daf957e~mv2.jpeg",
  "9d29e0ed2f2d493ea1d51b691b9a4b8d~mv2.jpg",
  // From englerwindow.com/portfolio-collections/my-portfolio/project-title-3
  "d0e15dc52590472bb8c8602061018bbc~mv2.jpg",
  "088dcb852c4a46248abba8504926dcf7~mv2.jpeg",
  "75e8ad19f0ea43d5827d125adc20fd41~mv2.jpeg",
  "75b2d362018140c985f50e3d55f54e9c~mv2.jpeg",
  "d10d78c5ce5f4ae79086902b8969ebf4~mv2.jpeg",
  "0d7b9bbad13344baace4a5d04d95ef3a~mv2.jpeg",
  "97680e84163f41a184e99f30a6363453~mv2.jpeg",
  "29fd2d33bf4d4071830abb647238d0c1~mv2.jpeg",
  "025acf858c5047fcb92e4be187cd2317~mv2.jpeg",
  "05d450a280c541a5b0c002bba9df2a1c~mv2.jpeg",
  "cced9de2269a474db98bda799c6f4cc0~mv2.jpeg",
  "3100051aa1b943cb8f6c629a22b4d070~mv2.jpeg",
  "8293f37752c84fc4b7d70f5af24beb6f~mv2.jpeg",
  "03ae411df228492a99249742f4c7d08c~mv2.jpeg",
  "298300dd67804ea9b97e478639abcb9d~mv2.jpeg",
  "b4cc25fd1297460f9f3d727bae979a57~mv2.jpeg",
  "9cd05b9043ca4a44a3e9830a75dffe28~mv2.jpeg",
  "527c651ce45c4f9c80284151cda6f7c4~mv2.jpeg",
  "918d58699d2149d29d1b6b960882b945~mv2.jpeg",
  "51e456b7570541d48fb3f0ce1dfdf3a9~mv2.jpeg",
  "91d991ef9bed432aab7dd876f5ea266f~mv2.jpeg",
  "b97730fb6d2143bb9138e086bcc63d29~mv2.jpeg",
  "88d977297ff9485d95a48a05b5cf83ee~mv2.jpeg",
  "ce7e6222ef2849e1a3bfe9b11cf0460f~mv2.jpeg",
  "b9beabaee866482a8cf93a277eb8e970~mv2.jpeg",
  "ba988711d42540689fd25da18c528c5d~mv2.jpeg",
  "83656f2490f34164985bf1f338c6c72b~mv2.jpeg",
  "95a09f7cade74c4c8fbdf112f62d4752~mv2.jpeg",
  "3dc83ddc51ed4b43b53e234a297ab82a~mv2.jpeg",
  "601aceee1b0845c9b74e55103af1fae4~mv2.jpeg",
  "31ab7af7193e4abf98168df53b24f66b~mv2.jpeg",
  "35ced8f992054c77b120aa1ab4e212b1~mv2.jpeg",
  "13a0a537d76a41e591e45de64d58a0d0~mv2.jpeg",
  "2ac646f698ba4ec3a3d6013161850511~mv2.jpeg",
  "b2e2e4aa4e4541b2b57d47e38f76f42a~mv2.jpeg",
  "1832b972d0a74d48aae1efe181bec487~mv2.jpeg",
  "af1b29002545481e9c96a3abee9bb5f0~mv2.jpeg",
  "46a4954b27124a8cb0d1cdba464c9fdf~mv2.jpeg",
  "1b9ddb3345e04db897ea22a504f50f06~mv2.jpeg",
  "7611813a8bdb45a6bd9ca15e85a40cee~mv2.jpeg",
  "25f11f270bde4ac38d48c4cd4a07066c~mv2.jpeg",
  "21a27714b73b429b96e9e88acc678c80~mv2.jpeg",
  "aaa3394bb0b64af58c064eb6fa2b12dc~mv2.jpeg",
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
  { name: string; intro: string; heroImage: string }
> = {
  windows: {
    name: "Windows",
    intro:
      "From floor-to-ceiling picture windows to impact-rated casements and lift-and-slide systems — every install is engineered for Florida's climate and the architecture it serves.",
    // Deliberately NOT one of the homepage carousel photos — a fresh shot.
    heroImage: heroUrl("f0dffdd2eeb24d4db3ceaccba58bf4c6~mv2.jpeg"),
  },
  doors: {
    name: "Doors",
    intro:
      "Custom mahogany entryways, folding glass walls that dissolve into the lanai, multi-track sliders, and one-of-a-kind iron grillework — every door specified for the residence it opens.",
    heroImage: heroUrl("edd39283aa6a4e838293f02a0bc8989e~mv2.jpg"),
  },
};
