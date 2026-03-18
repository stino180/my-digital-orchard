import { useState, useEffect } from "react";

interface ProfileHeaderProps {
  profile: {
    name: string;
    bio: string;
    subtitle: string;
    avatarUrl: string;
  };
}

function useTypewriter(text: string, speed = 40, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const name = useTypewriter(profile.name, 60, 300);
  const bio = useTypewriter(profile.bio, 25, 1200);
  const subtitle = useTypewriter(profile.subtitle, 40, 2800);

  return (
    <header className="mb-10 font-mono">
      {/* ASCII art header */}
      <pre className="text-xs text-muted-foreground mb-6 boot-line leading-tight" style={{ animationDelay: '0ms' }}>
{`╔══════════════════════════════════════╗
║  TERMINAL v2.4.1 — SECURE SESSION   ║
╚══════════════════════════════════════╝`}
      </pre>

      <div className="text-xs text-muted-foreground mb-4 boot-line" style={{ animationDelay: '100ms' }}>
        <span className="text-foreground">$</span> cat /usr/local/profile.md
      </div>

      {/* Avatar as ASCII block */}
      <div className="flex items-center gap-4 mb-4 boot-line" style={{ animationDelay: '200ms' }}>
        <div className="h-14 w-14 rounded-none border border-border overflow-hidden border-glow">
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="h-full w-full object-cover"
            style={{ filter: 'brightness(1.1) contrast(1.2) saturate(0.3) hue-rotate(80deg)' }}
          />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground text-glow tracking-wider">
            {name.displayed}
            {!name.done && <span className="cursor-blink text-primary">█</span>}
          </h1>
          <span className="text-xs text-muted-foreground">PID: 4207 | TTY: pts/0</span>
        </div>
      </div>

      {/* Bio with typewriter */}
      <div className="text-sm text-foreground/80 leading-relaxed mb-3 min-h-[3rem]">
        <span className="text-primary">→</span>{" "}
        {bio.displayed}
        {!bio.done && name.done && <span className="cursor-blink text-primary">█</span>}
      </div>

      {/* Subtitle */}
      <div className="text-xs text-muted-foreground border-t border-border pt-3">
        <span className="text-primary">#</span>{" "}
        {subtitle.displayed}
        {!subtitle.done && bio.done && <span className="cursor-blink text-primary">█</span>}
      </div>
    </header>
  );
}
