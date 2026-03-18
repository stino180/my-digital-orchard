import { Github, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { icon: Twitter, href: "https://x.com", label: "twitter", cmd: "ssh" },
  { icon: Github, href: "https://github.com", label: "github", cmd: "git" },
  { icon: Mail, href: "mailto:hello@example.com", label: "email", cmd: "mail" },
];

export function UtilityRow() {
  return (
    <div className="mt-10 border-t border-border pt-6">
      <div className="text-xs text-muted-foreground mb-3">
        <span className="text-primary">#</span> quick links
      </div>
      <div className="flex items-center gap-2">
        {quickLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={item.label}
            className={cn(
              "flex items-center gap-2 px-3 py-2 border border-border text-xs",
              "text-muted-foreground transition-all duration-200",
              "hover:border-primary hover:text-primary hover:border-glow hover:text-glow",
              "active:bg-primary/10"
            )}
          >
            <item.icon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{item.cmd} {item.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-6 text-[10px] text-muted-foreground/50 text-center">
        Connection closed. Session duration: ∞
      </div>
    </div>
  );
}
