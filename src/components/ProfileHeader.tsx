import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import avatarImg from "@/assets/avatar.png";

interface ProfileHeaderProps {
  profile: {
    name: string;
    bio: string;
    subtitle: string;
    avatarUrl: string;
  };
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const editionNum = Math.floor(
    (today.getTime() - new Date("2024-01-01").getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <header className="mb-6 paper-enter">
      {/* Top double rule */}
      <div className="border-t-[3px] border-foreground" />
      <div className="border-t border-foreground mt-[2px]" />

      {/* Ticker / info bar */}
      <div className="flex items-center justify-between mt-2.5 mb-3">
        <span className="font-mono-label text-muted-foreground">{dateStr}</span>
        <ThemeToggle />
        <span className="font-mono-label text-muted-foreground">No. {editionNum}</span>
      </div>

      <div className="border-t rule mb-3" />

      {/* Masthead */}
      <div className="text-center mb-1">
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="h-[2px] flex-1 bg-foreground/15" />
          <span className="font-sans-label text-[9px] tracking-[0.25em] uppercase text-muted-foreground">
            Est. 2024 · Digital Edition
          </span>
          <span className="h-[2px] flex-1 bg-foreground/15" />
        </div>

        <h1 className="font-headline text-5xl sm:text-[4rem] font-black tracking-tight text-foreground leading-[0.9] mb-2">
          {profile.name}
        </h1>

        <div className="flex items-center justify-center gap-4 mt-2 mb-1">
          <span className="ornament text-muted-foreground/40">✦</span>
          <span className="font-body text-xs italic text-muted-foreground tracking-wide">
            {profile.subtitle}
          </span>
          <span className="ornament text-muted-foreground/40">✦</span>
        </div>
      </div>

      <div className="border-t-[2px] border-foreground mt-2" />
      <div className="border-t border-foreground mt-[2px]" />

      {/* Byline / lede */}
      <div className="py-3 flex items-start gap-3 border-b rule">
        <Avatar className="h-10 w-10 rounded-none border border-border flex-shrink-0 mt-0.5">
          <AvatarImage src={avatarImg} alt={profile.name} className="grayscale object-cover" />
          <AvatarFallback className="rounded-none text-xs font-semibold">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <span className="font-sans-label text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
            From the Editor
          </span>
          <p className="text-sm leading-relaxed text-foreground/80 font-body italic mt-0.5">
            "{profile.bio}"
          </p>
        </div>
      </div>
    </header>
  );
}
