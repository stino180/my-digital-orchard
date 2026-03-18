import { Github, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function UtilityRow() {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      {quickLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={item.label}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full",
            "bg-secondary text-muted-foreground transition-all duration-200",
            "hover:bg-primary hover:text-primary-foreground",
            "active:scale-95"
          )}
        >
          <item.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
