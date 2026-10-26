# Shell Mate

A small Mortal Shell 2 guide and progress checklist. Plain HTML, CSS, and JavaScript; no application build step.

## Run locally

From this folder:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Stop the server with Ctrl+C. Open through a server rather than double-clicking `index.html`.

## Filter the guide

Under **Content**, choose **Rotten Autumn DLC only**, **Base game only**, or **Base game + DLC**. This choice stays selected when switching categories. Progress totals follow that content choice. Search, region, type, and completion filters work together.

The checklist includes 89 tarstones (77 base-game entries, including Glimpse Stone and Egon's Stone, and 12 DLC stones), 53 beacons (49 standard and four Ghost Beacons), 46 bosses, and 15 DLC dungeons. No DLC bosses are cataloged yet. Ghost Beacon and dungeon checks are independent, even where they describe the same place.

Wellspring Stone and Forsaken Vow have checklist entries, but no acquisition route is documented yet. Glimpse Stone and Egon's Stone can be purchased from Merrick as his shop stock expands with progression. Existing saved checks remain intact when new entries are added.

Source links are available inside each route. See [the content notes](CONTENT_REVIEW.md) for catalog maintenance. “Catalog order” follows the item catalog rather than a recommended playthrough route.

## Progress and backups

Checks are saved in this browser for this site address under `shell-mate-progress-v2`. The local site and published site have separate saves. Clearing browser data removes saved progress.

**Export** downloads a JSON backup; **Import** replaces the current checks with a valid backup. Unknown entries are ignored and reported. Invalid files leave current progress alone. Both current backups and the original dungeon/Ghost Beacon format are supported. Older browser saves migrate automatically; the original save remains untouched.

If browser saving fails, a message stays visible and you can still check entries and export them. An unreadable save is left untouched; new checks are kept only for the current visit until you import a replacement or export them. The app works while the loaded page stays open; reopening offline is not supported.

## Developer checks

Node 22 or newer is used for checks.

```bash
npm ci
npm test
npx playwright install chromium
npm run test:browser
```

These tools are only needed for development. Players do not need them.

## Publish

Set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**. `.github/workflows/pages.yml` runs the catalog, save, and browser checks, then publishes only site files on pushes to `main` or manual runs. Pull requests run the same checks without publishing.

The expected address is https://jdennisuf.github.io/shell-mate/. Relative asset paths support the repository subfolder.

Unofficial fan project, not affiliated with Cold Symmetry.
