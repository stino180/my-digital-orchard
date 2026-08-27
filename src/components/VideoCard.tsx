import { Play } from "lucide-react";
import { kindLabel, thumbnailFor, type VideoItem } from "@/data/videos";

interface VideoCardProps {
  video: VideoItem;
  index: number;
  onPlay: (video: VideoItem) => void;
}

export function VideoCard({ video, index, onPlay }: VideoCardProps) {
  const year = video.published.slice(0, 4);

  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      aria-label={`Play ${video.title}`}
      className="group text-left paper-enter focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      style={{ animationDelay: `${index * 60 + 150}ms` }}
    >
      <article className="pb-4">
        <div className="relative overflow-hidden border border-border bg-foreground/5">
          <img
            src={thumbnailFor(video.youtubeId)}
            alt=""
            loading="lazy"
            /* hqdefault is 4:3 with letterbox bars; cropping to 16:9 removes them. */
            className="w-full aspect-video object-cover scale-[1.35] grayscale-[0.45] group-hover:grayscale-0 transition-all duration-700"
          />

          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 bg-foreground/25">
            <span className="flex items-center justify-center h-12 w-12 rounded-full bg-background/90 border-2 border-foreground">
              <Play className="h-5 w-5 text-foreground translate-x-0.5" fill="currentColor" />
            </span>
          </span>

          <span className="absolute top-0 left-0 bg-foreground/85 px-1.5 py-0.5">
            <span className="font-mono-label text-background/90">
              {kindLabel[video.kind]}
            </span>
          </span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-headline text-xl font-black text-foreground/15 leading-none select-none shrink-0">
            {index + 1}
          </span>
          <h3 className="font-headline text-base font-bold leading-snug text-foreground group-hover:text-accent transition-colors">
            {video.title}
          </h3>
        </div>

        <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-body">
          {video.description}
        </p>
        <span className="font-mono-label text-muted-foreground mt-1.5 block">{year}</span>
      </article>
    </button>
  );
}
