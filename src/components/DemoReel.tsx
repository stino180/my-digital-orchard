import { useEffect, useRef, useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import { reels } from "@/data/reels";
import { dailyRotation } from "@/lib/edition";
import { CHANNEL_URL } from "@/data/videos";

export function DemoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  // One reel leads each day; the other can still be watched on demand.
  const [leadReel, ...rest] = dailyRotation(reels);
  const [activeId, setActiveId] = useState(leadReel.id);
  const featured = reels.find((r) => r.id === activeId) ?? leadReel;
  const alternate = rest[0];

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
        <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Demo Reel · {featured.discipline}
        </span>
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="font-mono-label text-muted-foreground">
          {featured.id === "editing" ? "Vol. I" : "Vol. II"}
        </span>
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

      {alternate && (
        <p className="mt-2 font-body text-xs text-muted-foreground">
          Also in this edition:{" "}
          <button
            type="button"
            onClick={() => setActiveId(alternate.id)}
            disabled={activeId === alternate.id}
            className={
              activeId === alternate.id
                ? "text-muted-foreground/60 cursor-default"
                : "text-foreground hover:text-accent hover:underline underline-offset-2"
            }
          >
            {alternate.discipline} reel
          </button>
          {activeId === alternate.id ? " — now playing." : " — watch it now."}{" "}
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-0.5"
          >
            Full quality on YouTube <ArrowUpRight className="h-3 w-3" />
          </a>
        </p>
      )}
    </section>
  );
}
