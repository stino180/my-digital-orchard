# justinstrong.me — the hub

The front door for everything Justin Strong. Answers "who is this?" and routes
people to the right place. Deployed via Lovable.

## Role in the wider setup

One hub, four spokes, each with a single audience:

| Property | Audience | Repo |
| --- | --- | --- |
| **This site** | everyone — the default landing point | `my-digital-orchard` |
| Inpoint Studio | prospective clients | `phaseone-precision-design` |
| Stino180 | music fans | — |
| Vizi | clothing buyers | — |

`stino-link-library` is a superseded version of this site. Don't edit it.

## This repo owns the project catalogue

`src/data/projects.ts` is the **canonical** list of products and the only copy
that counts. Inpoint holds a synced copy and pulls from here.

Facts live in the catalogue; framing lives in the site. A project's name, URL
and one-line blurb are written once. How it's *presented* — screenshots,
headings, badges — belongs to whichever site renders it.

After editing the catalogue, run `npm run sync:projects` in the Inpoint repo.

`origin: "client"` keeps a project off this site automatically. Client work
belongs in the Inpoint portfolio; this is a personal site.

## Content

- `src/data/projects.ts` — products (canonical, see above)
- `src/data/videos.ts` — the `/videos` section. Add a film by pasting its
  YouTube ID; the thumbnail is derived from it, nothing to upload. Kind filters
  are derived from the data, so an empty category shows no filter.
- `src/data/links.ts` — socials, contact, and the spoke links. Project entries
  are generated from the catalogue, not written here.

## Package manager

**Use npm.** This repo has been touched by both npm and bun, and only npm writes
`package-lock.json`. Twice a dependency has been added without the npm lockfile
learning about it, which gives a working dev server and a broken clean install.

`npm run dev` checks for that drift first and tells you the fix
(`npm install --package-lock-only`). Run `npm run check:lockfile` any time.

The check is deliberately not wired into `build` — the hosted build runs where
this repo can't see, and a failing prebuild there would take the site down
rather than warn you.

## Images

Encode to webp and size to roughly 2–3x the rendered size, not the source size.
The avatar was once 2.2MB serving a 40px slot.
