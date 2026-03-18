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
    <header className="mb-8 flex flex-col items-center text-center">
      <Avatar className="mb-4 h-20 w-20 ring-2 ring-border ring-offset-2 ring-offset-background">
        <AvatarImage src={profile.avatarUrl} alt={profile.name} />
        <AvatarFallback className="text-lg font-semibold">
          {profile.name.split(" ").map((n) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>

      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        {profile.name}
      </h1>

      <p className="mt-2 max-w-[420px] text-sm leading-relaxed text-muted-foreground" style={{ textWrap: "balance" }}>
        {profile.bio}
      </p>

      <span className="font-mono-label mt-4 text-muted-foreground">
        {profile.subtitle}
      </span>
    </header>
  );
}
