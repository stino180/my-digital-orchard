export type LinkCategory = "projects" | "socials" | "contact";
export type LinkStatus = "live" | "wip";

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: LinkCategory;
  status?: LinkStatus;
  imageUrl?: string;
  icon?: string; // lucide icon name
}

export const profileData = {
  name: "Justin Strong",
  bio: "Building products at the intersection of design, code, and culture.",
  subtitle: "Selected Works & Coordinates",
  avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Justin&backgroundColor=c0aede",
};

export const links: LinkItem[] = [
  {
    id: "1",
    title: "Mozze",
    description: "A platform crafted to streamline workflows and elevate creative output.",
    url: "https://mozze.io",
    category: "projects",
    status: "live",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Zmove",
    description: "Rethinking movement and logistics through intuitive digital experiences.",
    url: "https://zmove.io",
    category: "projects",
    status: "live",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Stacq",
    description: "Stack your tools, simplify your process. A developer-first productivity suite.",
    url: "https://stacq.io",
    category: "projects",
    status: "live",
  },
  {
    id: "4",
    title: "DuoChart",
    description: "Side-by-side charting and data visualization for traders and analysts.",
    url: "https://duochart.com",
    category: "projects",
    status: "live",
  },
  {
    id: "5",
    title: "Bitcoin Clock",
    description: "A real-time Bitcoin block height clock. Every block is a tick.",
    url: "https://bitcoinclock.com",
    category: "projects",
    status: "live",
  },
  {
    id: "6",
    title: "Trait Forge",
    description: "On-chain generative NFT game with evolving traits and strategic gameplay.",
    url: "https://traitforge.info",
    category: "projects",
    status: "live",
  },
  {
    id: "7",
    title: "Stino180 Music",
    description: "Official music site for Stino180. Beats, releases, and everything sonic.",
    url: "https://stino180.com",
    category: "projects",
    status: "live",
  },
  {
    id: "8",
    title: "Twitter / X",
    description: "Thoughts on building, music, and the internet.",
    url: "https://x.com/stino180",
    category: "socials",
    status: "live",
    icon: "twitter",
  },
  {
    id: "9",
    title: "Get in Touch",
    description: "Open for collaborations, freelance, or just to say hi.",
    url: "mailto:jstrongmgmt@gmail.com",
    category: "contact",
    status: "live",
    icon: "mail",
  },
];

export const categories = [
  { value: "all", label: "All" },
  { value: "projects", label: "Projects" },
  { value: "socials", label: "Socials" },
  { value: "contact", label: "Contact" },
] as const;
