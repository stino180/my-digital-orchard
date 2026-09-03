import { Link as RouterLink } from "react-router-dom";
import type { LinkItem } from "@/data/links";

interface InsideIndexProps {
  /** Everything not already given a story on the front page. */
  items: LinkItem[];
}

/**
 * The index box a broadsheet runs so the front page can stay short. Everything
 * still reachable, nothing taking up a column.
 */
export function InsideIndex({ items }: InsideIndexProps) {
  const sections: Record<string, string> = {
    projects: "A",
    videos: "B",
    socials: "C",
    contact: "D",
  };

  const counters: Record<string, number> = {};

  return (
    <aside className="paper-enter" style={{ animationDelay: "560ms" }}>
      <div className="border-t-[2px] border-foreground" />
      <div className="border-t border-foreground mt-[2px]" />

      <div className="flex items-center gap-3 mt-3 mb-2">
        <span className="font-sans-label text-[10px] tracking-[0.2em] uppercase text-foreground font-semibold">
          Inside Index
        </span>
        <span className="h-px flex-1 bg-foreground/15" />
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        {items.map((item) => {
          const letter = sections[item.category] ?? "A";
          counters[letter] = (counters[letter] ?? 0) + 1;
          const ref = `${letter}${counters[letter]}`;

          const row = (
            <>
              <span className="font-headline text-sm text-foreground group-hover:text-accent transition-colors truncate">
                {item.title}
              </span>
              <span
                className="flex-1 border-b border-dotted border-foreground/25 mx-2 translate-y-[-3px]"
                aria-hidden="true"
              />
              <span className="font-mono-label text-muted-foreground shrink-0">{ref}</span>
            </>
          );

          return (
            <li key={item.id} className="py-1.5 border-b rule">
              {!item.url ? (
                <div className="flex items-baseline">
                  {row}
                </div>
              ) : item.url.startsWith("/") ? (
                <RouterLink to={item.url} className="group flex items-baseline">
                  {row}
                </RouterLink>
              ) : (
                <a
                  href={item.url}
                  target={
                    item.url.startsWith("mailto:") || item.url.startsWith("tel:")
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="group flex items-baseline"
                >
                  {row}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
