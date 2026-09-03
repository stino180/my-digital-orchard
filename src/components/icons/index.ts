import { Mail, Twitter, Github, Instagram, Play, Film, Phone, Facebook } from "lucide-react";
import { TikTok } from "./TikTok";

/**
 * Maps a link's `icon` string to a component. lucide covers everything except
 * TikTok, which ships as a local mark.
 */
export const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  twitter: Twitter,
  mail: Mail,
  github: Github,
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTok,
  play: Play,
  film: Film,
  phone: Phone,
};
