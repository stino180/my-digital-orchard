import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileHeaderProps {
  profile: {
    name: string;
    bio: string;
    subtitle: string;
    avatarUrl: string;
  };
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="mb-8 paper-enter">
      {/* Top rule */}
      <div className="border-t-4 border-foreground" />
      <div className="border-t border-foreground mt-0.5" />

      {/* Date & Edition line */}
      <div className="flex items-center justify-between mt-3 mb-4">
        <span className="font-mono-label text-muted-foreground">{today}</span>
        <span className="font-mono-label text-muted-foreground">Vol. XXIV · No. 1</span>
      </div>

      {/* Masthead */}
      <div className="text-center mb-4">
        <h1 className="font-headline text-5xl sm:text-6xl font-black tracking-tight text-foreground leading-none">
          {profile.name}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="h-px flex-1 bg-foreground/20" />
          <span className="font-sans-label text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {profile.subtitle}
          </span>
          <span className="h-px flex-1 bg-foreground/20" />
        </div>
      </div>

      {/* Byline with avatar */}
      <div className="border-t rule border-b rule py-3 flex items-center gap-3">
        <Avatar className="h-9 w-9 rounded-none border border-border">
          <AvatarImage src={profile.avatarUrl} alt={profile.name} className="grayscale" />
          <AvatarFallback className="rounded-none text-xs font-semibold">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <p className="text-sm leading-relaxed text-foreground/80 font-body italic">
          {profile.bio}
        </p>
      </div>
    </header>
  );
}
