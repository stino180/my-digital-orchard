import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { kindLabel, watchUrl, type VideoItem } from "@/data/videos";

interface VideoLightboxProps {
  video: VideoItem | null;
  onClose: () => void;
}

export function VideoLightbox({ video, onClose }: VideoLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!video) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    // Stop the page behind the dialog from scrolling while it's open.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  if (!video) return null;

  const dateStr = new Date(`${video.published}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} — ${kindLabel[video.kind]}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[880px] bg-background border-[2px] border-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dialog masthead */}
        <div className="flex items-start justify-between gap-3 px-3 py-2 border-b rule">
          <div className="min-w-0">
            <span className="font-mono-label text-accent block">
              {kindLabel[video.kind]}
            </span>
            <h2 className="font-headline text-lg sm:text-xl font-bold leading-tight text-foreground truncate">
              {video.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="shrink-0 mt-0.5 p-1.5 border border-foreground/20 text-muted-foreground hover:text-accent hover:border-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative w-full bg-foreground/5" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            key={video.youtubeId}
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        <div className="px-3 py-2.5 border-t rule flex items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground italic min-w-0 truncate">
            {video.description}
          </p>
          <a
            href={watchUrl(video.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-muted-foreground hover:text-accent transition-colors shrink-0"
          >
            {dateStr} · Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
