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
  name: "Alex Morgan",
  bio: "Designer & developer building tools for the modern web. Currently crafting interfaces that feel inevitable.",
  subtitle: "Selected Works & Coordinates",
  avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Alex&backgroundColor=c0aede",
};

export const links: LinkItem[] = [
  {
    id: "1",
    title: "Luminary UI",
    description: "A design system for building fast, accessible interfaces with zero config.",
    url: "https://example.com/luminary",
    category: "projects",
    status: "live",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "2",
    title: "Fieldnotes App",
    description: "Markdown-first note taking for researchers and writers. Work in progress.",
    url: "https://example.com/fieldnotes",
    category: "projects",
    status: "wip",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "3",
    title: "Twitter / X",
    description: "Thoughts on design, dev, and the internet.",
    url: "https://x.com",
    category: "socials",
    status: "live",
    icon: "twitter",
  },
  {
    id: "4",
    title: "Get in Touch",
    description: "Open for freelance, collaborations, or just to say hi.",
    url: "mailto:hello@example.com",
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
