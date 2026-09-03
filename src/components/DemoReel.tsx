import { useEffect, useRef, useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { reels } from "@/data/reels";
import { dailyRotation } from "@/lib/edition";
import { CHANNEL_URL } from "@/data/videos";
import { cn } from "@/lib/utils";

export function DemoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  // One reel leads each day, but both are selectable — burying a whole reel
  // behind a day of waiting hides half the work.
  const [leadReel] = dailyRotation(reels);
  const [activeId, setActiveId] = useState(leadReel.id);
  const featured = reels.find((r) => r.id === activeId) ?? leadReel;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().then(
      () => setNeedsTap(false),
      () => setNeedsTap(true)
    );
  }, [featured.src]);

  const handleTap = async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    try {
      await v.play();
      setNeedsTap(false);
    } catch {
      /* browser refused; the tap target stays up */
    }
  };

  return (
    <section
      className="mb-6 paper-enter"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-muted-foreground shrink-0">
          Demo Reels
        </span>
        <span className="h-px flex-1 bg-foreground/15" />
        {/* Both reels named and selectable, so neither is hidden behind a day */}
        <nav className="flex items-center shrink-0 border border-foreground/20">
          {reels.map((reel, i) => (
            <button
              key={reel.id}
              type="button"
              onClick={() => setActiveId(reel.id)}
              aria-pressed={activeId === reel.id}
              className={cn(
                "font-sans-label text-[9px] sm:text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 transition-colors",
                i > 0 && "border-l border-foreground/20",
                activeId === reel.id
                  ? "bg-foreground text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
              )}
            >
              {reel.discipline}
            </button>
          ))}
        </nav>
      </div>

      <figure className="border-y-[2px] border-foreground">
        <div
          className="relative bg-foreground/5 overflow-hidden"
          onClick={needsTap ? handleTap : undefined}
        >
          <video
            ref={videoRef}
            key={featured.src}
            src={featured.src}
            poster={featured.poster}
            autoPlay
            muted
            loop
            playsInline
            {...({ "webkit-playsinline": "true" } as Record<string, string>)}
            preload="metadata"
            controls={hovered && !needsTap}
            className="w-full h-auto block grayscale-[0.15] contrast-[1.05]"
          />
          {needsTap && (
            <button
              type="button"
              onClick={handleTap}
              aria-label={`Play ${featured.discipline.toLowerCase()} reel`}
              className="absolute inset-0 flex items-center justify-center bg-foreground/30 hover:bg-foreground/40 transition-colors"
            >
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-background/90 border-2 border-foreground">
                <Play className="h-7 w-7 text-foreground translate-x-0.5" fill="currentColor" />
              </span>
            </button>
          )}

          <span className="absolute top-0 left-0 bg-foreground/85 px-2 py-1">
            <span className="font-mono-label text-background/90">
              {featured.discipline}
            </span>
          </span>
        </div>

        <figcaption className="px-1 py-2 flex items-center justify-between gap-3 border-t rule">
          <span className="font-body italic text-xs text-muted-foreground min-w-0 truncate">
            {featured.caption}
          </span>
          <span className="font-mono-label text-muted-foreground shrink-0">
            {needsTap ? "Tap to play" : hovered ? "Controls active" : "Hover for controls"}
          </span>
        </figcaption>
      </figure>

      <p className="mt-2 font-body text-xs text-muted-foreground">
        Two reels — editing and cinematography. Pick either above.{" "}
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline inline-flex items-center gap-0.5"
        >
          Full quality on YouTube <ArrowUpRight className="h-3 w-3" />
        </a>
      </p>
    </section>
  );
}
