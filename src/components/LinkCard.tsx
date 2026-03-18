import { ExternalLink, Mail, Twitter, Github, ArrowUpRight } from "lucide-react";
import { type LinkItem } from "@/data/links";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  twitter: Twitter,
  mail: Mail,
  github: Github,
};

interface LinkCardProps {
  link: LinkItem;
  index: number;
  featured?: boolean;
}

export function LinkCard({ link, index, featured }: LinkCardProps) {
  const IconComponent = link.icon ? iconMap[link.icon] : null;

  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group block paper-enter"
      style={{ animationDelay: `${index * 100 + 200}ms` }}
    >
      <article
        className={cn(
          "transition-colors duration-200",
          "hover:bg-secondary/50",
          featured ? "pb-5" : "py-4 border-b rule"
        )}
      >
        {/* Featured card with image */}
        {featured && link.imageUrl && (
          <div className="relative mb-3 overflow-hidden border border-border">
            <img
              src={link.imageUrl}
              alt={link.title}
              className="w-full h-48 sm:h-56 object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute top-2 left-2">
              {link.status && (
                <span className={cn(
                  "font-mono-label px-2 py-0.5",
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

        <div className="flex items-start gap-3">
          {/* Column number / icon */}
          {!featured && (
            <div className="flex-shrink-0 w-8 pt-0.5">
              {IconComponent ? (
                <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
              ) : (
                <span className="font-headline text-2xl font-bold text-muted-foreground/40 leading-none">
                  {index + 1}
                </span>
              )}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h2
                className={cn(
                  "font-headline font-bold text-foreground leading-tight group-hover:text-accent transition-colors",
                  featured ? "text-2xl sm:text-3xl" : "text-base"
                )}
              >
                {link.title}
              </h2>
              <ArrowUpRight className="h-4 w-4 mt-1 shrink-0 text-muted-foreground/30 group-hover:text-accent transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <p className={cn(
              "mt-1 text-muted-foreground leading-relaxed font-body",
              featured ? "text-sm" : "text-xs"
            )}>
              {link.description}
            </p>

            {/* Status for non-featured */}
            {!featured && link.status && (
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
        </div>
      </article>
    </a>
  );
}
