/**
 * The front page is a daily edition: which project leads, which run beneath it,
 * and which reel is featured all change once a day and hold steady until the
 * next one.
 *
 * Deterministic on the date rather than random, so every visitor sees the same
 * edition and a refresh doesn't reshuffle the page under someone mid-read.
 */

/** Days since epoch in local time — the edition number. */
export const editionDay = (now: Date = new Date()): number => {
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor(midnight.getTime() / 86_400_000);
};

/**
 * Rotates `items` so a different one leads each day, preserving order after it.
 * Returns the whole list rotated; take what you need off the front.
 */
export function dailyRotation<T>(items: T[], day: number = editionDay()): T[] {
  if (items.length === 0) return [];
  const offset = ((day % items.length) + items.length) % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

/** Picks one item for the day. */
export function dailyPick<T>(items: T[], day: number = editionDay()): T | undefined {
  return dailyRotation(items, day)[0];
}
