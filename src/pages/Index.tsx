import { useState } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { FilterPills } from "@/components/FilterPills";
import { LinkCard } from "@/components/LinkCard";
import { UtilityRow } from "@/components/UtilityRow";
import { links, profileData, type LinkCategory } from "@/data/links";

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | LinkCategory>("all");

  const filteredLinks =
    activeFilter === "all"
      ? links
      : links.filter((l) => l.category === activeFilter);

  return (
    <div className="min-h-screen relative noise">
      {/* Animated mesh gradient background */}
      <div className="mesh-gradient" />

      <main className="relative z-10 mx-auto max-w-[640px] px-4 py-12 sm:py-20">
        <ProfileHeader profile={profileData} />

        <FilterPills active={activeFilter} onChange={setActiveFilter} />

        <div className="mt-6 flex flex-col gap-4">
          {filteredLinks.map((link, i) => (
            <LinkCard key={link.id} link={link} index={i} />
          ))}

          {filteredLinks.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground">
              Nothing here yet.
            </p>
          )}
        </div>

        <UtilityRow />
      </main>
    </div>
  );
};

export default Index;
