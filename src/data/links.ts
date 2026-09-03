import { inHouseProjects } from "./projects";

export type LinkCategory = "projects" | "socials" | "contact" | "videos";
export type LinkStatus = "live" | "wip";

export interface LinkItem {
  id: string;
  /** Present on project links; ties the entry back to the catalogue. */
  slug?: string;
  title: string;
  description: string;
  /** Absent while a project has no public link yet. */
  url?: string;
  category: LinkCategory;
  status?: LinkStatus;
  imageUrl?: string;
  icon?: string; // lucide icon name
}

export const profileData = {
  name: "Justin Strong",
  bio: "Building products at the intersection of design, code, and culture.",
  subtitle: "Creative Technologist Portfolio · Selected Works & Coordinates",
  avatarUrl: "", // will use imported image
};

/**
 * Artwork is per-site, so it lives here rather than in the shared catalogue.
 * A project without an entry simply renders without a thumbnail.
 */
const projectArtwork: Record<string, string> = {
  mozze:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop&q=80",
  zmove:
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop&q=80",
};

/**
 * Built from the shared catalogue, filtered to in-house work: client projects
 * belong in the Inpoint portfolio, not on a personal site.
 */
const projectLinks: LinkItem[] = inHouseProjects.map((project) => ({
  id: `project-`,
  slug: project.slug,
  title: project.name,
  description: project.blurb,
  url: project.url,
  category: "projects",
  status: project.status,
  imageUrl: projectArtwork[project.slug],
}));

/** The other places I live on the internet — spokes, not products. */
const propertyLinks: LinkItem[] = [
  {
    id: "inpoint",
    title: "Inpoint Studio",
    description:
      "Full-service creative studio for websites, apps, logos, and graphic design. Hire me here.",
    url: "https://inpointstudio.lovable.app",
    category: "projects",
    status: "live",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "stino180",
    title: "Stino180 Music",
    description: "Official music site for Stino180. Beats, releases, and everything sonic.",
    url: "https://stino180.com",
    category: "projects",
    status: "live",
  },
  {
    id: "videos",
    title: "Videos & Reels",
    description: "Short films, music videos, teasers, and reels — the full screen section.",
    url: "/videos",
    category: "videos",
    status: "live",
    icon: "play",
    imageUrl: "https://img.youtube.com/vi/sEADhI8zxY8/hqdefault.jpg",
  },
];

const contactLinks: LinkItem[] = [
  {
    id: "twitter",
    title: "Twitter / X",
    description: "Thoughts on building, music, and the internet.",
    url: "https://x.com/stino180",
    category: "socials",
    status: "live",
    icon: "twitter",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "Behind the scenes, design work, and daily life.",
    url: "https://instagram.com/stino180",
    category: "socials",
    status: "live",
    icon: "instagram",
  },
  {
    id: "tiktok",
    title: "TikTok",
    description: "Short films, clips, and work in progress.",
    url: "https://www.tiktok.com/@stino180_",
    category: "socials",
    status: "live",
    icon: "tiktok",
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Releases, shows, and everything else worth announcing.",
    url: "https://www.facebook.com/profile.php?id=100068605364624",
    category: "socials",
    status: "live",
    icon: "facebook",
  },
  {
    id: "email",
    title: "Email Me",
    description:
      "jstrongmgmt@gmail.com — Open for collaborations, freelance, or just to say hi.",
    url: "mailto:jstrongmgmt@gmail.com",
    category: "contact",
    status: "live",
    icon: "mail",
  },
  {
    id: "phone",
    title: "Call / Text",
    description: "(773) 234-7823 — Reach me directly.",
    url: "tel:+17732347823",
    category: "contact",
    status: "live",
    icon: "phone",
  },
];

export const links: LinkItem[] = [
  ...projectLinks,
  ...propertyLinks,
  ...contactLinks,
];

export const categories = [
  { value: "all", label: "All" },
  { value: "projects", label: "Projects" },
  { value: "videos", label: "Videos" },
  { value: "socials", label: "Socials" },
  { value: "contact", label: "Contact" },
] as const;
