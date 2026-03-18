import { ExternalLink, Mail, Twitter, Github } from "lucide-react";
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
}

export function LinkCard({ link, index }: LinkCardProps) {
  const IconComponent = link.icon ? iconMap[link.icon] : null;

  return (
    <a
      href={link.url}
      target={link.url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="group block glass-enter"
      style={{ animationDelay: `${index * 100 + 300}ms` }}
    >
      <div
        className={cn(
          "glass glass-highlight rounded-2xl overflow-hidden transition-all duration-300",
          "hover:-translate-y-1 hover:glow-purple-hover",
          "active:scale-[0.98]",
          "glow-purple"
        )}
      >
        {/* Image area */}
        {link.imageUrl && (
          <div className="relative h-40 overflow-hidden">
            <img
              src={link.imageUrl}
              alt={link.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230_25%_10%/0.7)] via-transparent to-transparent" />
          </div>
        )}

        {/* Icon area for non-image cards */}
        {!link.imageUrl && IconComponent && (
          <div className="flex items-center justify-center py-8 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
            <div className="rounded-2xl p-4 glass-strong">
              <IconComponent className="h-7 w-7 text-foreground/80 transition-colors group-hover:text-primary" />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-display truncate text-sm font-semibold text-foreground">
                  {link.title}
                </h2>
                {link.status && (
                  <span className="flex shrink-0 items-center gap-1.5">
                    <span
                      className={cn(
                        "inline-block h-1.5 w-1.5 rounded-full",
                        link.status === "live"
                          ? "bg-[hsl(var(--status-live))] shadow-[0_0_8px_hsl(var(--status-live)/0.5)]"
                          : "bg-[hsl(var(--status-wip))] shadow-[0_0_8px_hsl(var(--status-wip)/0.5)]"
                      )}
                    />
                    <span className="font-mono-label text-muted-foreground">
                      {link.status}
                    </span>
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {link.description}
              </p>
            </div>

            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:opacity-100 opacity-0" />
          </div>
        </div>
      </div>
    </a>
  );
}
