import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

const demoReel = "/demoreel.mp4";

export function DemoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = async () => {
      try {
        await v.play();
        setNeedsTap(false);
      } catch {
        setNeedsTap(true);
      }
    };
    tryPlay();
  }, []);

  const handleTap = async () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    try {
      await v.play();
      setNeedsTap(false);
    } catch {
      /* noop */
    }
  };

  return (
    <section
      className="mb-6 paper-enter"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Section label */}
      <div className="flex items-center gap-3 mb-2">
        <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Featured Reel
        </span>
        <span className="h-px flex-1 bg-foreground/15" />
        <span className="font-mono-label text-muted-foreground">Vol. I</span>
      </div>

      <figure className="border-y-[2px] border-foreground">
        <div
          className="relative bg-foreground/5 overflow-hidden"
          onClick={needsTap ? handleTap : undefined}
        >
          <video
            ref={videoRef}
            src={demoReel}
            autoPlay
            muted
            loop
            playsInline
            // @ts-expect-error - non-standard but needed for iOS
            webkit-playsinline="true"
            preload="auto"
            controls={hovered && !needsTap}
            className="w-full h-auto block grayscale-[0.15] contrast-[1.05]"
          />
          {needsTap && (
            <button
              type="button"
              onClick={handleTap}
              aria-label="Play demo reel"
              className="absolute inset-0 flex items-center justify-center bg-foreground/30 hover:bg-foreground/40 transition-colors"
            >
              <span className="flex items-center justify-center h-16 w-16 rounded-full bg-background/90 border-2 border-foreground">
                <Play className="h-7 w-7 text-foreground translate-x-0.5" fill="currentColor" />
              </span>
            </button>
          )}
        </div>
        <figcaption className="px-1 py-2 flex items-center justify-between border-t rule">
          <span className="font-body italic text-xs text-muted-foreground">
            Selected works · Director's cut
          </span>
          <span className="font-mono-label text-muted-foreground">
            {needsTap ? "Tap to play" : hovered ? "Controls active" : "Hover for controls"}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
