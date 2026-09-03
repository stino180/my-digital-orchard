/**
 * CANONICAL PROJECT CATALOGUE — SOURCE OF TRUTH.
 *
 * These are the products themselves, described once. Both this site and the
 * Inpoint Studio site read from this file so a project's name, URL, and
 * one-line description can't drift between them.
 *
 * Facts only. Anything site-specific — screenshots, section headings, how a
 * project is framed for its audience — belongs in the site that renders it,
 * not here. This site shows in-house work as "things I built"; Inpoint shows
 * the same rows as portfolio proof with an origin badge. Same facts, two
 * framings, one place to edit.
 *
 * Inpoint keeps a synced copy at src/data/projects.ts. After editing this
 * file, run `npm run sync:projects` in the Inpoint repo to pull the change
 * across.
 *
 * NOTE: the two sites are separate deployments, so this is a sync, not an
 * import. Edit here, never there.
 */

export type ProjectDiscipline = "website" | "app";
export type ProjectOrigin = "in-house" | "client";
export type ProjectStatus = "live" | "wip";

export interface Project {
  /** Stable identifier. Used to attach per-site artwork; don't rename casually. */
  slug: string;
  name: string;
  /** Omit while a project has no public link yet; cards render unlinked. */
  url?: string;
  /** One line, no site-specific framing. Reads correctly on either site. */
  blurb: string;
  discipline: ProjectDiscipline;
  origin: ProjectOrigin;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    slug: "mozze",
    name: "Mozze",
    url: "https://mozze.xyz",
    blurb:
      "Music streaming platform where artists charge per stream and sell direct to fans.",
    discipline: "website",
    origin: "in-house",
    status: "live",
  },
  {
    slug: "zmove",
    name: "zMove",
    url: "https://zmove.xyz",
    blurb:
      "Sports clip platform for posting highlights, livestreams, and grassroots moments.",
    discipline: "website",
    origin: "in-house",
    status: "live",
  },
  {
    slug: "stacq",
    name: "Stacq",
    url: "https://stacq.xyz",
    blurb:
      "Self-custody automated investing — schedule recurring buys into crypto and stocks.",
    discipline: "app",
    origin: "in-house",
    status: "live",
  },
  {
    slug: "duochart",
    name: "DuoChart",
    url: "https://duochart.pages.dev",
    blurb: "Side-by-side charting that overlays any two assets for comparison.",
    discipline: "app",
    origin: "in-house",
    status: "live",
  },
  {
    slug: "bitcoin-clock",
    name: "Bitcoin Clock",
    url: "https://bitcoin-clock-95y.pages.dev",
    blurb:
      "Live dashboard of Bitcoin stats — halvings, ownership metrics, and network data.",
    discipline: "website",
    origin: "in-house",
    status: "live",
  },
  {
    slug: "eols",
    name: "EOLS Inc.",
    url: "https://eolsinc.org",
    blurb: "CDL training platform with live classes, practice tests, and study guides.",
    discipline: "website",
    origin: "client",
    status: "live",
  },
  {
    slug: "savenly",
    name: "Savenly",
    // savenly.deals redirects here; .app is canonical
    url: "https://savenly.app",
    blurb:
      "Chicago restaurant deals on a map — happy hours, daily specials, and BOGO offers near you.",
    discipline: "app",
    origin: "in-house",
    status: "live",
  },
];

/** Work built under my own name — what the personal site is allowed to claim. */
export const inHouseProjects = projects.filter((p) => p.origin === "in-house");

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
