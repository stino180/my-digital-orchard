import { categories, type LinkCategory } from "@/data/links";
import { cn } from "@/lib/utils";

interface FilterPillsProps {
  active: "all" | LinkCategory;
  onChange: (value: "all" | LinkCategory) => void;
}

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className="flex items-center gap-1 text-xs mb-1">
      <span className="text-muted-foreground mr-2">$ ls --filter=</span>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value as "all" | LinkCategory)}
          className={cn(
            "px-3 py-1 border transition-all duration-200 font-mono text-xs tracking-wider uppercase",
            active === cat.value
              ? "border-primary text-primary bg-primary/10 text-glow border-glow"
              : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
