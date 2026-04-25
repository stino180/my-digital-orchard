import { useRef, useState } from "react";
import demoReel from "/demoreel.mp4";

export function DemoReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

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
        <div className="relative bg-foreground/5 overflow-hidden">
          <video
            ref={videoRef}
            src={demoReel}
            autoPlay
            muted
            loop
            playsInline
            controls={hovered}
            className="w-full h-auto block grayscale-[0.15] contrast-[1.05]"
          />
        </div>
        <figcaption className="px-1 py-2 flex items-center justify-between border-t rule">
          <span className="font-body italic text-xs text-muted-foreground">
            Selected works · Director's cut
          </span>
          <span className="font-mono-label text-muted-foreground">
            {hovered ? "Controls active" : "Hover for controls"}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
