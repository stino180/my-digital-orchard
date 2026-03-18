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
  return (
    <header className="mb-10 flex flex-col items-center text-center glass-enter">
      {/* Avatar with glow ring */}
      <div className="relative mb-5">
        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-xl" />
        <Avatar className="relative h-22 w-22 ring-2 ring-[hsl(var(--glass-border))] shadow-lg shadow-primary/20">
          <AvatarImage src={profile.avatarUrl} alt={profile.name} />
          <AvatarFallback className="text-lg font-semibold bg-secondary text-foreground">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
      </div>

      <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
        {profile.name}
      </h1>

      <p
        className="mt-3 max-w-[380px] text-sm leading-relaxed text-muted-foreground"
        style={{ textWrap: "balance" }}
      >
        {profile.bio}
      </p>

      <span className="font-mono-label mt-4 text-muted-foreground/70">
        {profile.subtitle}
      </span>
    </header>
  );
}
