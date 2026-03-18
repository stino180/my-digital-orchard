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
    <div className="min-h-screen bg-background crt-scanlines">
      <main className="mx-auto max-w-[640px] px-4 py-8 sm:py-16">
        <ProfileHeader profile={profileData} />

        <FilterPills active={activeFilter} onChange={setActiveFilter} />

        <div className="mt-4 flex flex-col gap-3">
          {filteredLinks.map((link, i) => (
            <LinkCard key={link.id} link={link} index={i} />
          ))}

          {filteredLinks.length === 0 && (
            <div className="py-12 text-center text-xs text-muted-foreground">
              <span className="text-primary">$</span> No entries found. <span className="cursor-blink text-primary">█</span>
            </div>
          )}
        </div>

        <UtilityRow />
      </main>
    </div>
  );
};

export default Index;
