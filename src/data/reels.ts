/**
 * The two demo reels. Both are compressed loops, not the masters — the hero
 * shows one at a time and the full-quality versions belong on YouTube.
 *
 * Sources were 84MB and 137MB at 1080p. They render in a 640px column, so
 * they're re-encoded to 720p (exactly 2x that) with the audio stripped, since
 * the hero plays muted. Never put a master file in public/.
 */

export interface Reel {
  id: string;
  /** Discipline this reel demonstrates. Shown as the section kicker. */
  discipline: string;
  src: string;
  poster: string;
  caption: string;
}

export const reels: Reel[] = [
  {
    id: "editing",
    discipline: "Editing",
    src: "/demoreel.mp4",
    poster: "/demoreel-poster.jpg",
    caption: "Cuts, pacing, and assembly — selected work",
  },
  {
    id: "cinematography",
    discipline: "Cinematography",
    src: "/videoreel.mp4",
    poster: "/videoreel-poster.jpg",
    caption: "Camera, light, and composition — selected work",
  },
];
