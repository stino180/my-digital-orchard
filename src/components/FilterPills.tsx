import { categories, type LinkCategory } from "@/data/links";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  active: "all" | LinkCategory;
  onChange: (value: "all" | LinkCategory) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className="flex items-center justify-center gap-2 glass-enter" style={{ animationDelay: '150ms' }}>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value as "all" | LinkCategory)}
          className={cn(
            "font-mono-label rounded-full px-4 py-1.5 transition-all duration-300",
            active === cat.value
              ? "glass-strong text-foreground shadow-lg shadow-primary/10 glow-purple"
              : "text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-highlight))]"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
