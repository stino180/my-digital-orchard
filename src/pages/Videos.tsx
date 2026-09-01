import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { VideoCard } from "@/components/VideoCard";
import { VideoLightbox } from "@/components/VideoLightbox";
import { UtilityRow } from "@/components/UtilityRow";
import {
  CHANNEL_URL,
  videoKinds,
  videosByDate,
  type VideoItem,
  type VideoKind,
} from "@/data/videos";
import { cn } from "@/lib/utils";

const Videos = () => {
  const [activeKind, setActiveKind] = useState<"all" | VideoKind>("all");
  const [playing, setPlaying] = useState<VideoItem | null>(null);

  const filtered = useMemo(
    () =>
      activeKind === "all"
        ? videosByDate
        : videosByDate.filter((v) => v.kind === activeKind),
    [activeKind]
  );

  const years = videosByDate.map((v) => v.published.slice(0, 4));
  const span = `${years[years.length - 1]}–${years[0]}`;

  return (
    <div className="min-h-screen bg-background paper-texture">
      <main className="mx-auto max-w-[640px] px-4 py-8 sm:py-14">
        <header className="mb-6 paper-enter">
          <div className="border-t-[3px] border-foreground" />
          <div className="border-t border-foreground mt-[2px]" />

          <div className="flex items-center justify-between mt-2.5 mb-3 gap-3">
            <Link
              to="/"
              className="font-mono-label text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="h-3 w-3" />
              Front Page
            </Link>
            <div className="flex items-center gap-2">
              <span className="font-mono-label text-muted-foreground">
                {videosByDate.length} Films · {span}
              </span>
              <ThemeToggle />
            </div>
          </div>

          <div className="border-t rule mb-3" />

          {/* Section masthead */}
          <div className="text-center mb-1">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="h-[2px] flex-1 bg-foreground/15" />
              <span className="font-sans-label text-[9px] tracking-[0.25em] uppercase text-muted-foreground">
                Section B · The Screen
              </span>
              <span className="h-[2px] flex-1 bg-foreground/15" />
            </div>

            <h1 className="font-headline text-5xl sm:text-[3.75rem] font-black tracking-tight text-foreground leading-[0.9] mb-2">
              Moving Pictures
            </h1>

            <div className="flex items-center justify-center gap-4 mt-2 mb-1">
              <span className="ornament text-muted-foreground/40">✦</span>
              <span className="font-sans-label text-[9px] tracking-[0.25em] uppercase text-muted-foreground">
                Teasers · Short Films · Music Videos
              </span>
              <span className="ornament text-muted-foreground/40">✦</span>
            </div>
          </div>

          <div className="border-t-[2px] border-foreground mt-2" />
          <div className="border-t border-foreground mt-[2px]" />

          <div className="py-3 border-b rule">
            <p className="text-sm leading-relaxed text-foreground/80 font-body italic">
              "Everything shot, cut, and released under my own name — the music
              work, not the client work."
            </p>
          </div>
        </header>

        {/* Kind filter */}
        <nav
          className="border-y-[2px] border-foreground paper-enter overflow-x-auto"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex items-center justify-start sm:justify-center gap-0 min-w-max mx-auto">
            {videoKinds.map((kind, i) => (
              <button
                key={kind.value}
                onClick={() => setActiveKind(kind.value as "all" | VideoKind)}
                className={cn(
                  "font-sans-label text-[11px] tracking-[0.18em] uppercase px-4 py-2.5 transition-colors duration-200 relative whitespace-nowrap",
                  i > 0 && "border-l border-foreground/20",
                  activeKind === kind.value
                    ? "text-foreground font-semibold bg-secondary/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                )}
              >
                {kind.label}
                {activeKind === kind.value && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-accent" />
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5">
          {filtered.map((video, i) => (
            <VideoCard
              key={video.youtubeId}
              video={video}
              index={i}
              onPlay={setPlaying}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground italic font-body">
            No films in this section.
          </p>
        )}

        {/* Where the commercial work lives instead */}
        <aside className="mt-6 border-t-[2px] border-foreground pt-4 paper-enter" style={{ animationDelay: "500ms" }}>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-foreground font-semibold">
              Also In This Edition
            </span>
            <span className="h-px flex-1 bg-foreground/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-3 hover:bg-secondary/30 transition-colors"
            >
              <span className="font-mono-label text-accent block mb-0.5">The Full Reel</span>
              <span className="font-headline text-base font-bold text-foreground group-hover:text-accent transition-colors inline-flex items-center gap-1">
                YouTube Channel <ArrowUpRight className="h-3 w-3" />
              </span>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-body">
                Everything, including shorts and older uploads.
              </p>
            </a>

            <a
              href="https://inpointstudio.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-3 hover:bg-secondary/30 transition-colors"
            >
              <span className="font-mono-label text-accent block mb-0.5">Commissions</span>
              <span className="font-headline text-base font-bold text-foreground group-hover:text-accent transition-colors inline-flex items-center gap-1">
                Inpoint Studio <ArrowUpRight className="h-3 w-3" />
              </span>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-body">
                Brand spots and product film are booked through the studio.
              </p>
            </a>
          </div>
        </aside>

        <UtilityRow />
      </main>

      <VideoLightbox video={playing} onClose={() => setPlaying(null)} />
    </div>
  );
};

export default Videos;
