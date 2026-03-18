import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to morning edition" : "Switch to evening edition"}
      className={cn(
        "flex items-center gap-1.5 px-2.5 py-1 border transition-colors duration-200",
        "font-sans-label text-[10px] tracking-[0.15em] uppercase",
        "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
      )}
    >
      {dark ? (
        <>
          <Sun className="h-3 w-3" />
          <span className="hidden sm:inline">Morning Ed.</span>
        </>
      ) : (
        <>
          <Moon className="h-3 w-3" />
          <span className="hidden sm:inline">Evening Ed.</span>
        </>
      )}
    </button>
  );
}
