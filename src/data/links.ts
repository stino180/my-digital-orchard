export type LinkCategory = "projects" | "socials" | "contact" | "videos";
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
  avatarUrl: "", // will use imported image
};

export const links: LinkItem[] = [
  {
    id: "1",
    title: "Mozze",
    description: "A platform crafted to streamline workflows and elevate creative output.",
    url: "https://mozze.xyz",
    category: "projects",
    status: "live",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Zmove",
    description: "Rethinking movement and logistics through intuitive digital experiences.",
    url: "https://zmove.xyz",
    category: "projects",
    status: "live",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Stacq",
    description: "Stack your tools, simplify your process. A developer-first productivity suite.",
    url: "https://stacq.xyz",
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
    title: "Baseline Studio",
    description: "Full-service creative studio for websites, apps, logos, and graphic design. Hire me here.",
    url: "https://baselinestudio.io",
    category: "projects",
    status: "live",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "6",
    title: "Stino180 Music",
    description: "Official music site for Stino180. Beats, releases, and everything sonic.",
    url: "https://stino180.com",
    category: "projects",
    status: "live",
  },
  {
    id: "7",
    title: "Videos & Reels",
    description: "Music videos, promo reels, brand spots, and behind-the-scenes content.",
    url: "https://youtube.com/@stino180",
    category: "videos",
    status: "live",
    icon: "play",
    imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "9",
    title: "Twitter / X",
    description: "Thoughts on building, music, and the internet.",
    url: "https://x.com/stino180",
    category: "socials",
    status: "live",
    icon: "twitter",
  },
  {
    id: "10",
    title: "Instagram",
    description: "Behind the scenes, design work, and daily life.",
    url: "https://instagram.com/stino180",
    category: "socials",
    status: "live",
    icon: "instagram",
  },
  {
    id: "11",
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
  { value: "videos", label: "Videos" },
  { value: "socials", label: "Socials" },
  { value: "contact", label: "Contact" },
] as const;
