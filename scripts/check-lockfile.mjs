#!/usr/bin/env node
/**
 * Fails when package.json and package-lock.json disagree about a dependency.
 *
 * This repo has been edited by two package managers — npm locally and bun via
 * Lovable — and only one of them writes package-lock.json. Twice now a
 * dependency has been added to package.json without the npm lockfile learning
 * about it, which produces a clean local dev server and a broken clean install.
 *
 * Runs automatically before `npm run dev`. It is deliberately NOT wired into
 * `build`, because the hosted build runs on infrastructure this repo can't see
 * and a failing prebuild there would take the site down rather than warn you.
 */
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const [pkg, lock] = await Promise.all([
  readFile(join(root, "package.json"), "utf8").then(JSON.parse),
  readFile(join(root, "package-lock.json"), "utf8").then(JSON.parse),
]);

const declared = { ...pkg.dependencies, ...pkg.devDependencies };
const rootEntry = lock.packages?.[""] ?? {};
const locked = { ...rootEntry.dependencies, ...rootEntry.devDependencies };

const drift = Object.keys(declared)
  .filter((name) => declared[name] !== locked[name])
  .map((name) => `  ${name}\n    package.json      ${declared[name]}\n    package-lock.json ${locked[name] ?? "(absent)"}`);

if (drift.length === 0) {
  process.exit(0);
}

console.error(
  `\npackage-lock.json is out of date with package.json:\n\n${drift.join("\n")}\n\n` +
    `Fix it with:\n\n  npm install --package-lock-only\n\n` +
    `then commit package-lock.json. A clean install will fail until you do.\n`
);
process.exit(1);
