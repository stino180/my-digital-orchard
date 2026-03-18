import { categories, type LinkCategory } from "@/data/links";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  active: "all" | LinkCategory;
  onChange: (value: "all" | LinkCategory) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <nav className="flex items-center justify-center gap-0 border-y rule paper-enter" style={{ animationDelay: '100ms' }}>
      {categories.map((cat, i) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value as "all" | LinkCategory)}
          className={cn(
            "font-sans-label text-[11px] tracking-[0.15em] uppercase px-4 py-2.5 transition-colors duration-200 relative",
            i > 0 && "border-l rule",
            active === cat.value
              ? "text-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {cat.label}
          {active === cat.value && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent" />
          )}
        </button>
      ))}
    </nav>
  );
}
