import { ArrowUpRight } from "lucide-react";
import type { LinkItem } from "@/data/links";
import type { Story } from "@/data/stories";

interface LeadStoryProps {
  link: LinkItem;
  story: Story;
}

/** The front-page splash: one project, given the full broadsheet treatment. */
export function LeadStory({ link, story }: LeadStoryProps) {
  const body = (
    <>
      <p className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-accent mb-1.5">
        {link.title}
      </p>

      <h2 className="font-headline text-[2.1rem] sm:text-[2.9rem] font-black leading-[0.95] tracking-tight text-foreground group-hover:text-accent transition-colors">
        {story.headline}
      </h2>

      <p className="mt-2.5 font-body italic text-[0.95rem] leading-relaxed text-foreground/70">
        {story.standfirst}
      </p>

      {link.imageUrl && (
        <div className="relative my-4 overflow-hidden border border-border">
          <img
            src={link.imageUrl}
            alt={link.title}
            className="w-full h-48 sm:h-60 object-cover grayscale-[0.45] group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute bottom-0 inset-x-0 bg-foreground/80 px-3 py-1.5 flex items-center justify-between">
            <span className="font-sans-label text-[9px] tracking-[0.15em] uppercase text-background/80">
              Today's Lead
            </span>
            {link.status && (
              <span className="font-mono-label px-1.5 py-0.5 text-[9px] bg-[hsl(var(--status-live))] text-white">
                {link.status}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Two columns of body text, the way a front page actually sets */}
      <div className="mt-3 sm:columns-2 sm:gap-5 column-rule">
        {story.body.map((para, i) => (
          <p
            key={i}
            className={`text-[0.82rem] leading-[1.65] text-muted-foreground font-body mb-2.5 ${
              i === 0 ? "drop-cap" : ""
            }`}
          >
            {para}
          </p>
        ))}
      </div>

      {link.url && (
        <span className="inline-flex items-center gap-1 mt-1 font-sans-label text-[10px] tracking-[0.15em] uppercase text-accent group-hover:underline">
          Visit {link.title} <ArrowUpRight className="h-3 w-3" />
        </span>
      )}
    </>
  );

  if (!link.url) {
    return (
      <article className="group block paper-enter pb-5" style={{ animationDelay: "200ms" }}>
        {body}
        <span className="inline-flex items-center gap-1 mt-1 font-mono-label text-muted-foreground">
          Link coming soon
        </span>
      </article>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block paper-enter"
      style={{ animationDelay: "200ms" }}
    >
      <article className="pb-5">{body}</article>
    </a>
  );
}
