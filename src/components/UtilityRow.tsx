import { links } from "@/data/links";
import { iconMap } from "@/components/icons";
import { cn } from "@/lib/utils";

/**
 * The directory strip. Reads from links.ts rather than keeping its own list —
 * it used to hold a second, hand-maintained copy that quietly went out of date.
 */
const directory = links.filter(
  (l) => (l.category === "socials" || l.category === "contact") && l.icon && l.url
);

export function UtilityRow() {
  return (
    <footer className="mt-10 paper-enter" style={{ animationDelay: "600ms" }}>
      <div className="border-t-[2px] border-foreground" />
      <div className="border-t border-foreground mt-[2px]" />

      <div className="py-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-foreground font-semibold">
            Directory
          </span>
          <span className="h-px flex-1 bg-foreground/15" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-border">
          {directory.map((item) => {
            const Icon = iconMap[item.icon as string];
            if (!Icon) return null;
            const isHandler =
              item.url!.startsWith("mailto:") || item.url!.startsWith("tel:");

            return (
              <a
                key={item.id}
                href={item.url}
                target={isHandler ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={item.title}
                className={cn(
                  "flex flex-col items-center gap-1.5 py-4 bg-background",
                  "text-muted-foreground transition-colors duration-200",
                  "hover:text-accent hover:bg-secondary/30"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="font-sans-label text-[10px] tracking-[0.12em] uppercase">
                  {item.title}
                </span>
              </a>
            );
          })}
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
