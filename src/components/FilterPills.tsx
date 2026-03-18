import { categories, type LinkCategory } from "@/data/links";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  active: "all" | LinkCategory;
  onChange: (value: "all" | LinkCategory) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <nav className="border-y-[2px] border-foreground paper-enter" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center justify-center gap-0">
        {categories.map((cat, i) => (
          <button
            key={cat.value}
            onClick={() => onChange(cat.value as "all" | LinkCategory)}
            className={cn(
              "font-sans-label text-[11px] tracking-[0.18em] uppercase px-5 py-2.5 transition-colors duration-200 relative",
              i > 0 && "border-l border-foreground/20",
              active === cat.value
                ? "text-foreground font-semibold bg-secondary/50"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
            )}
          >
            {cat.label}
            {active === cat.value && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-accent" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
