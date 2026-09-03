import { useMemo } from "react";
import { ProfileHeader } from "@/components/ProfileHeader";
import { DemoReel } from "@/components/DemoReel";
import { LeadStory } from "@/components/LeadStory";
import { SecondaryStory } from "@/components/SecondaryStory";
import { InsideIndex } from "@/components/InsideIndex";
import { UtilityRow } from "@/components/UtilityRow";
import { links, profileData } from "@/data/links";
import { storyFor } from "@/data/stories";
import { dailyRotation, editionDay } from "@/lib/edition";

/** One lead plus two below it — a front page, not a catalogue. */
const SECONDARY_COUNT = 2;

const Index = () => {
  const { lead, secondaries, rest } = useMemo(() => {
    // Only projects carrying a slug have story copy to run.
    const storyable = links.filter((l) => l.slug && storyFor(l.slug));
    const rotated = dailyRotation(storyable);

    const lead = rotated[0];
    const secondaries = rotated.slice(1, 1 + SECONDARY_COUNT);
    const featured = new Set([lead, ...secondaries].filter(Boolean).map((l) => l.id));

    return {
      lead,
      secondaries,
      rest: links.filter((l) => !featured.has(l.id)),
    };
  }, []);

  const leadStory = lead?.slug ? storyFor(lead.slug) : undefined;

  return (
    <div className="min-h-screen bg-background paper-texture">
      <main className="mx-auto max-w-[640px] px-4 py-8 sm:py-14">
        <ProfileHeader profile={profileData} />

        <DemoReel />

        {lead && leadStory && <LeadStory link={lead} story={leadStory} />}

        {secondaries.map((link, i) => {
          const story = link.slug ? storyFor(link.slug) : undefined;
          return story ? (
            <SecondaryStory key={link.id} link={link} story={story} index={i} />
          ) : null;
        })}

        <div className="mt-8">
          <InsideIndex items={rest} />
        </div>

        <p className="mt-4 font-body italic text-[11px] text-muted-foreground/70">
          Edition No. {editionDay()} — the front page changes daily; everything
          else is in the index.
        </p>

        <UtilityRow />
      </main>
    </div>
  );
};

export default Index;
