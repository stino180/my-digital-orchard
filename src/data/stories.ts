/**
 * Article copy for the front page, keyed by project slug.
 *
 * Deliberately NOT in projects.ts. That file is the shared catalogue synced to
 * Inpoint Studio and holds facts only — name, URL, one-line blurb. This is
 * voice, and it belongs to this site alone: Inpoint frames the same projects as
 * portfolio proof for buyers, where this reads them as stories.
 *
 * Written to stay true. Nothing here dates, so the front page can rotate
 * without anyone rewriting copy. Don't add numbers that will age.
 */

export interface Story {
  /** Newspaper headline — a claim about the work, not the product's name. */
  headline: string;
  /** Standfirst under the headline. One sentence. */
  standfirst: string;
  /** Body paragraphs. Two or three; the front page is not the place for more. */
  body: string[];
}

export const stories: Record<string, Story> = {
  mozze: {
    headline: "Paying Artists By The Play, Not By The Fraction",
    standfirst:
      "A streaming platform built on the argument that per-stream economics are the problem, not the medium.",
    body: [
      "Streaming solved distribution and broke the pay cheque in the same motion. An artist can be heard a hundred thousand times and see almost nothing for it, because the rate was never set by the people making the work.",
      "Mozze inverts that. Artists set what a play costs and sell directly to the people listening, with songs and videos priced by the person who made them rather than by a platform's blended rate.",
      "The bet is simple: a smaller audience paying a real price beats a large one paying a fraction of a cent.",
    ],
  },

  zmove: {
    headline: "Grassroots Sport Finally Gets A Highlight Reel",
    standfirst:
      "Clips, livestreams and the moments that never make the broadcast.",
    body: [
      "Professional sport is documented from twenty angles. Everything below it — school games, local leagues, the good Sunday match — survives only in whatever someone filmed on a phone and lost in a camera roll.",
      "zMove is built for that footage. Post the clip, watch what other people posted, stream the game live for whoever cannot make it to the touchline.",
      "The audience for a local game is small, devoted, and almost entirely unserved. That is the whole opportunity.",
    ],
  },

  stacq: {
    headline: "Investing On A Schedule, With The Keys In Your Own Hand",
    standfirst:
      "Recurring buys into crypto and stocks, without surrendering custody to do it.",
    body: [
      "Automated investing usually asks for a trade nobody names out loud: convenience in exchange for custody. The scheduling is easy, but the assets sit somewhere else, under someone else's control.",
      "Stacq keeps the automation and drops that condition. Buys run on a schedule you set, into crypto and equities, while custody stays yours.",
      "It is the least glamorous idea in the portfolio and probably the most useful — the discipline of buying on a timetable, minus the counterparty.",
    ],
  },

  duochart: {
    headline: "Two Assets, One Axis, No Spreadsheet",
    standfirst:
      "Overlay anything against anything and see the comparison directly.",
    body: [
      "Every serious question about a market is comparative. Against what, over what period, from which starting point — and answering it usually means exporting to a spreadsheet and rebuilding the chart by hand.",
      "DuoChart does the comparison as the primary action rather than an afterthought. Pick two things, overlay them, read the result.",
      "A narrow tool that does one thing immediately, for people who were already doing it slowly.",
    ],
  },

  "bitcoin-clock": {
    headline: "The Network, Read As A Clock",
    standfirst:
      "Halvings, ownership and supply — the long numbers, in one place.",
    body: [
      "Bitcoin's interesting figures move on a geological timescale. Halvings arrive years apart, supply tightens on a fixed schedule, and ownership concentrates slowly enough that no price chart will ever show it.",
      "The Bitcoin Clock puts those slow numbers on one dashboard and lets them tick.",
      "Not a trading screen. A way of seeing the network's timescale rather than the day's.",
    ],
  },

  savenly: {
    headline: "The Deals Were Always There. Finding Them Was The Problem",
    standfirst:
      "Chicago happy hours and daily specials, plotted on a map instead of buried on a chalkboard.",
    body: [
      "Restaurants run specials constantly and advertise them almost nowhere — a chalkboard by the door, a story that expires overnight, a page nobody thinks to check before deciding where to eat.",
      "Savenly puts the whole city on one map. Happy hours, daily specials and BOGO offers across Chicago neighborhoods, filtered by where you are standing when the question comes up.",
      "The name is save plus heavenly, which tells you it does not take itself too seriously. The problem it solves is real enough: the diner who would have paid full price, and the kitchen with a quiet Tuesday to fill.",
    ],
  },
};

export const storyFor = (slug: string): Story | undefined => stories[slug];
