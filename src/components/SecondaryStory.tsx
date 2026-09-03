import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/data/links";
import type { Story } from "@/data/stories";

interface SecondaryStoryProps {
  link: LinkItem;
  story: Story;
  index: number;
}

/** Below the fold: headline, standfirst, and a single paragraph. */
export function SecondaryStory({ link, story, index }: SecondaryStoryProps) {
  const inner = (
    <article className="py-4 border-t rule">
      <p className="font-sans-label text-[9px] tracking-[0.2em] uppercase text-accent mb-1">
        {link.title}
      </p>
      <h3 className="font-headline text-lg font-bold leading-snug text-foreground group-hover:text-accent transition-colors">
        {story.headline}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground font-body">
        {story.standfirst}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground/80 font-body">
        {story.body[0]}
      </p>
      {link.url ? (
        <span className="inline-flex items-center gap-1 mt-2 font-mono-label text-accent group-hover:underline">
          Continue <ArrowUpRight className="h-3 w-3" />
        </span>
      ) : (
        <span className="inline-block mt-2 font-mono-label text-muted-foreground">
          Link coming soon
        </span>
      )}
    </article>
  );

  const style = { animationDelay: `${index * 90 + 320}ms` };

  return link.url ? (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block paper-enter"
      style={style}
    >
      {inner}
    </a>
  ) : (
    <div className="group block paper-enter" style={style}>
      {inner}
    </div>
  );
}
