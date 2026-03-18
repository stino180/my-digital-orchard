import { Github, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function UtilityRow() {
  return (
    <div className="mt-10 flex items-center justify-center gap-3 glass-enter" style={{ animationDelay: '700ms' }}>
      {quickLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={item.label}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full",
            "glass glass-highlight transition-all duration-300",
            "hover:-translate-y-0.5 hover:glow-purple-hover hover:text-primary",
            "text-muted-foreground active:scale-95"
          )}
        >
          <item.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
