export type VideoKind = "short-film" | "music-video" | "teaser" | "reel";

export interface VideoItem {
  /** YouTube video ID — the 11 characters after `watch?v=`. */
  youtubeId: string;
  title: string;
  description: string;
  kind: VideoKind;
  /** ISO date (YYYY-MM-DD). Used for sort order and the dateline. */
  published: string;
}

/**
 * Personal and music work only — teasers, music videos, short films, reels.
 *
 * Commercial video (brand spots, product film, client work) belongs in the
 * Inpoint Studio portfolio instead, under its Video & Motion service. Keeping
 * the two apart is deliberate: this page is a body of work, that one is a
 * shop window.
 *
 * To add a video: paste its YouTube ID and fill in the fields below. The
 * thumbnail is derived from the ID automatically — nothing else to upload.
 */
export const videos: VideoItem[] = [
  {
    youtubeId: "sEADhI8zxY8",
    title: "3am 2",
    description: "Teaser for \"3am 2.\"",
    kind: "teaser",
    published: "2025-10-17",
  },
  {
    youtubeId: "ytsPPMQCoP8",
    title: "3am 2 — Vertical Cut",
    description: "The \"3am 2\" teaser recut for vertical, for phones and social.",
    kind: "teaser",
    published: "2025-10-17",
  },
  {
    youtubeId: "hjwG_OCSG54",
    title: "Puppet Master",
    description: "Teaser for \"Puppet Master.\"",
    kind: "teaser",
    published: "2025-10-14",
  },
  {
    youtubeId: "habXuJFr1_k",
    title: "Greed",
    description: "Short film for \"Greed.\" Shot and edited by Stino.",
    kind: "short-film",
    published: "2025-08-29",
  },
  {
    youtubeId: "a4LnDK2hREw",
    title: "Greed — Out Now",
    description: "Release spot for the \"Greed\" single.",
    kind: "teaser",
    published: "2025-03-12",
  },
  {
    youtubeId: "2rrkW43MPdI",
    title: "Greed — Release Cut",
    description: "Alternate release spot announcing \"Greed\" across all platforms.",
    kind: "teaser",
    published: "2025-03-12",
  },
  {
    youtubeId: "hDtdN1Qgt5o",
    title: "Icarus",
    description: "Teaser for \"Icarus,\" from the Vanity EP.",
    kind: "teaser",
    published: "2025-01-21",
  },
  {
    youtubeId: "4Boq30xhPjQ",
    title: "4our",
    description: "Teaser for \"4our.\"",
    kind: "teaser",
    published: "2025-01-21",
  },
  {
    youtubeId: "BKL6hjrz8PM",
    title: "Mud",
    description: "Teaser for \"Mud.\"",
    kind: "teaser",
    published: "2024-10-05",
  },
  {
    youtubeId: "Lt4v3TlmiVk",
    title: "Greed — First Look",
    description: "First look at \"Greed.\" Produced by Vilencia, shot and edited by Stino.",
    kind: "teaser",
    published: "2024-10-05",
  },
  {
    youtubeId: "NhE_vVYOCxg",
    title: "Back 2 It",
    description: "Teaser for \"Back 2 It.\"",
    kind: "teaser",
    published: "2024-10-05",
  },
  {
    youtubeId: "46odDF9BlaA",
    title: "Vanity EP",
    description: "Announcement spot for the Vanity EP.",
    kind: "teaser",
    published: "2024-10-05",
  },
  {
    youtubeId: "OEgBWlDdumo",
    title: "Cathedral",
    description: "Teaser for \"Cathedral.\"",
    kind: "teaser",
    published: "2024-08-29",
  },
  {
    youtubeId: "4W18eNcgxuk",
    title: "4our — Out Now",
    description: "Release cut for \"4our.\" Produced by H2ndrx.",
    kind: "music-video",
    published: "2024-08-25",
  },
  {
    youtubeId: "TnA537dn464",
    title: "The Path Least Traveled",
    description: "Teaser for \"Icarus.\"",
    kind: "teaser",
    published: "2024-08-17",
  },
];

const allKinds = [
  { value: "all", label: "All" },
  { value: "teaser", label: "Teasers" },
  { value: "short-film", label: "Short Films" },
  { value: "music-video", label: "Music Videos" },
  { value: "reel", label: "Reels" },
] as const;

/**
 * Only offer a filter that has something behind it — an empty category with a
 * visible filter is worse than no filter at all.
 */
export const videoKinds = allKinds.filter(
  (k) => k.value === "all" || videos.some((v) => v.kind === k.value)
);

export const kindLabel: Record<VideoKind, string> = {
  "short-film": "Short Film",
  "music-video": "Music Video",
  teaser: "Teaser",
  reel: "Reel",
};

export const CHANNEL_URL = "https://youtube.com/@stino180v";

/** YouTube always serves hqdefault; maxresdefault 404s on plenty of uploads. */
export const thumbnailFor = (youtubeId: string) =>
  `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

export const watchUrl = (youtubeId: string) =>
  `https://www.youtube.com/watch?v=${youtubeId}`;

/** Newest first. */
export const videosByDate = [...videos].sort((a, b) =>
  b.published.localeCompare(a.published)
);
