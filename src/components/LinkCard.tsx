import { ExternalLink, Mail, Twitter, Github } from "lucide-react";
import { type LinkItem } from "@/data/links";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      className="group block animate-in fade-in slide-in-from-bottom-3 fill-mode-both"
      style={{ animationDelay: `${index * 80}ms`, animationDuration: "400ms" }}
    >
      <div
        className={cn(
          "overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-200",
          "hover:-translate-y-0.5 hover:shadow-md",
          "active:scale-[0.98]"
        )}
      >
        {link.imageUrl && (
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src={link.imageUrl}
              alt={link.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </AspectRatio>
        )}

        {!link.imageUrl && IconComponent && (
          <div className="flex items-center justify-center bg-secondary py-10">
            <IconComponent className="h-8 w-8 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
        )}

        <div className="flex items-start justify-between gap-3 p-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h2 className="truncate text-sm font-semibold text-foreground">
                {link.title}
              </h2>
              {link.status && (
                <span className="flex shrink-0 items-center gap-1">
                  <span
                    className={cn(
                      "inline-block h-1.5 w-1.5 rounded-full",
                      link.status === "live"
                        ? "bg-[hsl(var(--status-live))]"
                        : "bg-[hsl(var(--status-wip))]"
                    )}
                  />
                  <span className="font-mono-label text-muted-foreground">
                    {link.status}
                  </span>
                </span>
              )}
            </div>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {link.description}
            </p>
          </div>

          <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
    </a>
  );
}
