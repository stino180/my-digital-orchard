import { Github, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { icon: Twitter, href: "https://x.com/stino180", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Mail, href: "mailto:jstrongmgmt@gmail.com", label: "Email" },
];

export function UtilityRow() {
  return (
    <footer className="mt-10 paper-enter" style={{ animationDelay: '600ms' }}>
      {/* Classifieds-style section */}
      <div className="border-t-[2px] border-foreground" />
      <div className="border-t border-foreground mt-[2px]" />

      <div className="py-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-foreground font-semibold">
            Directory
          </span>
          <span className="h-px flex-1 bg-foreground/15" />
        </div>

        <div className="grid grid-cols-3 gap-px bg-border">
          {quickLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
              className={cn(
                "flex flex-col items-center gap-1.5 py-4 bg-background",
                "text-muted-foreground transition-colors duration-200",
                "hover:text-accent hover:bg-secondary/30"
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="font-sans-label text-[10px] tracking-[0.12em] uppercase">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t rule" />
      <div className="py-3 flex items-center justify-between">
        <p className="font-sans-label text-[9px] tracking-[0.15em] text-muted-foreground/40 uppercase">
          © {new Date().getFullYear()} · All Rights Reserved
        </p>
        <p className="font-sans-label text-[9px] tracking-[0.15em] text-muted-foreground/40 uppercase">
          Printed digitally
        </p>
      </div>
    </footer>
  );
}
