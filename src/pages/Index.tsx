import { useState } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { DemoReel } from "@/components/DemoReel";
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

  // Rotate featured link daily based on date
  const linksWithImages = filteredLinks.filter((l) => l.imageUrl);
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const featuredLink = linksWithImages.length > 0 ? linksWithImages[dayOfYear % linksWithImages.length] : undefined;
  const restLinks = filteredLinks.filter((l) => l !== featuredLink);

  return (
    <div className="min-h-screen bg-background paper-texture">
      <main className="mx-auto max-w-[640px] px-4 py-8 sm:py-14">
        <ProfileHeader profile={profileData} />

        <DemoReel />

        <FilterPills active={activeFilter} onChange={setActiveFilter} />

        <div className="mt-6">
          {/* Featured / headline article */}
          {featuredLink && (
            <LinkCard link={featuredLink} index={0} featured />
          )}

          {/* Below-the-fold articles */}
          {featuredLink && restLinks.length > 0 && (
            <div className="border-t rule-heavy mb-1" />
          )}

          <div className="flex flex-col">
            {restLinks.map((link, i) => (
              <LinkCard
                key={link.id}
                link={link}
                index={featuredLink ? i + 1 : i}
              />
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <p className="py-12 text-center text-sm text-muted-foreground italic font-body">
              No stories in this section.
            </p>
          )}
        </div>

        <UtilityRow />
      </main>
    </div>
  );
};

export default Index;
