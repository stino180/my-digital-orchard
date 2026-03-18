import { categories, type LinkCategory } from "@/data/links";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  active: "all" | LinkCategory;
  onChange: (value: "all" | LinkCategory) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value as "all" | LinkCategory)}
          className={cn(
            "font-mono-label rounded-full px-3.5 py-1.5 transition-all duration-200",
            active === cat.value
              ? "bg-foreground text-background shadow-sm"
              : "bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
