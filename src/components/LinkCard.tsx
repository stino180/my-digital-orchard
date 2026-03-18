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
      className="group block boot-line"
      style={{ animationDelay: `${index * 120 + 400}ms` }}
    >
      <div
        className={cn(
          "border border-border p-4 transition-all duration-200",
          "hover:border-primary hover:border-glow hover:bg-primary/5",
          "active:bg-primary/10"
        )}
      >
        {/* Terminal-style header line */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
          <span className="text-primary">$</span>
          <span>open</span>
          <span className="text-foreground/60 truncate">{link.url.replace(/^(https?:\/\/|mailto:)/, '')}</span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {IconComponent && (
                <IconComponent className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors" />
              )}
              <h2 className="truncate text-sm font-semibold text-foreground group-hover:text-glow transition-all">
                {link.title}
              </h2>
              {link.status && (
                <span className="flex shrink-0 items-center gap-1.5 ml-auto">
                  <span
                    className={cn(
                      "inline-block h-1.5 w-1.5 rounded-full",
                      link.status === "live"
                        ? "bg-[hsl(var(--status-live))] shadow-[0_0_6px_hsl(var(--status-live)/0.6)]"
                        : "bg-[hsl(var(--status-wip))] shadow-[0_0_6px_hsl(var(--status-wip)/0.6)]"
                    )}
                  />
                  <span className="font-mono-label text-muted-foreground">
                    [{link.status}]
                  </span>
                </span>
              )}
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              <span className="text-primary/50">// </span>
              {link.description}
            </p>
          </div>

          <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
        </div>

        {/* Image preview as "screenshot" */}
        {link.imageUrl && (
          <div className="mt-3 border border-border/50 overflow-hidden">
            <div className="bg-secondary/50 px-2 py-0.5 text-[10px] text-muted-foreground border-b border-border/50 flex items-center gap-2">
              <span>preview.png</span>
              <span className="ml-auto">640×360</span>
            </div>
            <img
              src={link.imageUrl}
              alt={link.title}
              className="w-full h-32 object-cover transition-all duration-300 group-hover:brightness-110"
              style={{ filter: 'saturate(0.4) contrast(1.1)' }}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </a>
  );
}
