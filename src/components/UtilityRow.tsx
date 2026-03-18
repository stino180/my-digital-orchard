import { Github, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export function UtilityRow() {
  return (
    <footer className="mt-10 paper-enter" style={{ animationDelay: '600ms' }}>
      <div className="border-t rule-heavy border-b rule pt-4 pb-4">
        <div className="flex items-center justify-between">
          <span className="font-mono-label text-muted-foreground">Connect</span>
          <div className="flex items-center gap-1">
            {quickLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={item.label}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5",
                  "font-sans-label text-xs text-muted-foreground transition-colors duration-200",
                  "hover:text-accent"
                )}
              >
                <item.icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-[10px] text-muted-foreground/50 font-sans-label tracking-wider">
        © {new Date().getFullYear()} · All Rights Reserved
      </p>
    </footer>
  );
}
