import { ExternalLink, Mail, Twitter, Github, ArrowUpRight, Instagram, Play, Film, Phone } from "lucide-react";
import { type LinkItem } from "@/data/links";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  twitter: Twitter,
  mail: Mail,
  github: Github,
  instagram: Instagram,
  play: Play,
  film: Film,
};

interface LinkCardProps {
  link: LinkItem;
  index: number;
  featured?: boolean;
}

export function LinkCard({ link, index, featured }: LinkCardProps) {
  const IconComponent = link.icon ? iconMap[link.icon] : null;

  if (featured) {
    return (
      <a
        href={link.url}
        target={link.url.startsWith("mailto:") ? undefined : "_blank"}
        rel="noopener noreferrer"
        className="group block paper-enter"
        style={{ animationDelay: `${index * 100 + 200}ms` }}
      >
        <article className="pb-5">
          {/* Headline image */}
          {link.imageUrl && (
            <div className="relative mb-3 overflow-hidden border border-border">
              <img
                src={link.imageUrl}
                alt={link.title}
                className="w-full h-52 sm:h-64 object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              {/* Caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-foreground/80 px-3 py-1.5 flex items-center justify-between">
                <span className="font-sans-label text-[9px] tracking-[0.15em] uppercase text-background/80">
                  Featured
                </span>
                {link.status && (
                  <span className={cn(
                    "font-mono-label px-1.5 py-0.5 text-[9px]",
                    link.status === "live"
                      ? "bg-[hsl(var(--status-live))] text-white"
                      : "bg-[hsl(var(--status-wip))] text-white"
                  )}>
                    {link.status}
                  </span>
                )}
              </div>
            </div>
          )}

          <h2 className="font-headline text-3xl sm:text-4xl font-black text-foreground leading-tight group-hover:text-accent transition-colors duration-200">
            {link.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-body drop-cap">
            {link.description}
          </p>
          <span className="inline-flex items-center gap-1 mt-2 font-sans-label text-[10px] tracking-[0.15em] uppercase text-accent group-hover:underline">
            Read more <ArrowUpRight className="h-3 w-3" />
          </span>
        </article>
      </a>
    );
  }

  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group block paper-enter"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      <article className="py-3.5 border-b rule flex items-start gap-3 hover:bg-secondary/30 transition-colors px-1 -mx-1">
        {/* Section icon or column number */}
        <div className="flex-shrink-0 w-8 pt-0.5">
          {IconComponent ? (
            <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
          ) : (
            <span className="font-headline text-2xl font-black text-foreground/15 leading-none select-none">
              {index + 1}
            </span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              {/* Category tag */}
              <span className="font-mono-label text-accent mb-0.5 block">
                {link.category}
              </span>
              <h2 className="font-headline text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                {link.title}
              </h2>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 mt-3.5 shrink-0 text-muted-foreground/20 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground font-body">
            {link.description}
          </p>

          {link.status && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <span
                className={cn(
                  "inline-block h-1.5 w-1.5 rounded-full",
                  link.status === "live" ? "bg-[hsl(var(--status-live))]" : "bg-[hsl(var(--status-wip))]"
                )}
              />
              <span className="font-mono-label text-muted-foreground">{link.status}</span>
            </div>
          )}
        </div>

        {/* Thumbnail for image cards */}
        {link.imageUrl && (
          <div className="flex-shrink-0 w-20 h-16 overflow-hidden border border-border hidden sm:block">
            <img
              src={link.imageUrl}
              alt=""
              className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        )}
      </article>
    </a>
  );
}
