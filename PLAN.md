# Shell Mate: Full Companion Plan

## Goal

Expand Shell Mate from its current Rotten Autumn dungeon and Ghost Beacon tracker into a static, searchable Mortal Shell 2 companion covering **every verified tarstone, beacon, and boss**, while keeping the existing DLC checklist and saved progress usable. Use simple Unicode symbols and text, with no image or framework dependency.

## Current starting point

- `index.html` is the whole app: inline CSS, data, and JavaScript.
- It tracks 15 Rotten Autumn dungeons and 4 Ghost Beacons, with search, open/completed filtering, browser storage, and JSON import/export.
- The current save key is `shell-mate-rotten-autumn-v1`; dungeon and Ghost Beacon completion are keyed by display name. Preserve these values during the expansion.
- A separate working checklist lists 75 obtainable tarstones and a 73-tarstone achievement target. Treat these as **research leads**, not a verified canonical count.

## Content inventory

1. Build a source-backed inventory for tarstones, beacons, and bosses across the base game and Rotten Autumn content. Cross-check game names, counts, locations, and acquisition requirements against at least two independent sources where possible. Record source URLs and the date checked.
2. Give each entry a stable ID and a scope (`base` or `rotten-autumn`). Keep aliases for changed spellings or names; display one verified name. Mark disputed or unconfirmed entries in the data and UI instead of silently treating them as complete facts.
3. For each tarstone, record category, region, nearest usable beacon, precise route, prerequisites/objectives, acquisition method, and relevant boss or dungeon. For each beacon, record region and directions to activate it. For each boss, record region, nearest beacon, approach/unlock requirements, and rewards relevant to this tracker.
4. Treat Ghost Beacons as beacons with a subtype, while preserving the existing four-entry Ghost Beacon checklist and its progress. Keep the 15 existing dungeon entries as their own checklist.
5. Audit all routes in the five local tarstone notes (`Myriad Stone`, `Rupturing Stone`, `Unstable Stone`, `Clockwork Shardstone`, `Strange Remnant`) before using them in the app. They are draft leads, not verified source material.

## App design

- Keep the app static and easy to host: plain HTML, CSS, and JavaScript. Split the growing catalog into small data and UI files once the entries are assembled; no build step is required.
- First screen: Shell Mate title, overall progress, category navigation (`Tarstones`, `Beacons`, `Bosses`, `Dungeons`), and a compact search/filter row. Show category counts and completion totals.
- Each category supports text search, region/scope filters, and all/open/completed status. Tarstones also filter by category. Entry details show the route, nearest beacon as a link to that beacon, requirements, and source links. Boss and beacon details cross-link relevant entries.
- Use Unicode marks such as `◆` for tarstones, `✦` for beacons, `⚔` for bosses, and `✓` for completion. Treat symbols as decoration with accessible text labels; no emoji-only commands.
- Keep the visual language compact and readable on phones. Use semantic controls, keyboard navigation, visible focus, and sufficient contrast. Respect reduced-motion settings.
- Progress remains local to the browser. Export includes all categories; import validates the file and reports what was restored. The page works without an account or network connection after its static assets are loaded.

## Data and progress contract

- Use stable IDs rather than display names for new catalog entries. Minimum entry fields: `id`, `name`, `scope`, `region`, `sources`, `verificationStatus`, plus category-specific route and relationship fields.
- Version the new save format. On first load, read `shell-mate-rotten-autumn-v1` and map its dungeon and Ghost Beacon names to stable IDs; do not discard prior checks. Leave the old storage value intact as a recovery path.
- Import accepts both the current DLC-only JSON shape and the new versioned shape. Ignore unknown IDs with a clear summary rather than inventing entries; reject malformed files without changing existing progress.
- Keep catalog data separate from user progress so corrections to names or routes do not erase checkmarks.

## Delivery steps

1. **Research and reconcile:** create the complete inventory, source links, aliases, and unresolved-item log. Do not publish an unsupported “complete” count.
2. **Model and migrate:** add catalog data and a tested migration/import path for the existing DLC tracker.
3. **Build the interface:** implement category navigation, searchable lists, detail views, links, progress, and Unicode styling.
4. **Verify and ship:** compare rendered counts with the verified inventory; test search and filters, route links, mobile layout, keyboard use, reload persistence, legacy import, new export/import, and offline static loading. Deploy from the repository's static hosting setup once chosen.

## Discussion points

- **Scope default:** Mortal Shell 2 base game plus Rotten Autumn, retaining the existing DLC dungeons and Ghost Beacons. If Shell Mate should also cover the original Mortal Shell, that is a separate catalog and changes the data model and research workload.
- **Tracking default:** a checkbox for each tarstone, activated beacon, defeated boss, and existing dungeon; detailed route text remains readable without checking anything off.
- **Hosting:** the repo has no deployment configuration yet. GitHub Pages is the simplest fit for this no-build app; choose a different host if desired.
