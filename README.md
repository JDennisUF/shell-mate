# Shell Mate

A static Mortal Shell 2 progression guide and checklist. Open `index.html` through a static web server or the published GitHub Pages site. There is no build step or package installation.

## Coverage

- 75 obtainable tarstones, with routes and nearest beacons
- 49 standard beacons and the 4 Ghost Beacons from the existing Rotten Autumn checklist
- 46 named boss encounters, including 11 main fights; brief tips for main fights are collapsed by default
- 15 existing Rotten Autumn dungeon entries

These are sourced catalog counts, not in-game achievement requirements. Named optional boss catalogs can differ, and routes may change with game updates. Each entry links to its source. The five earlier local tarstone notes were treated as draft leads; the app's collectible roster was reconciled against the linked guide.

## Progress and backups

Checkmarks live in browser `localStorage` under `shell-mate-progress-v2`. Existing `shell-mate-rotten-autumn-v1` dungeon and Ghost Beacon checks migrate on first visit; the old value is left in place. Export makes a JSON backup. Import accepts either the new export or the original DLC-only JSON format and replaces the current progress with valid known IDs.

## Publishing

The repository includes `.github/workflows/pages.yml`. To publish it, set **Settings > Pages > Build and deployment > Source** to **GitHub Actions**, then run **Publish Shell Mate** from the Actions tab if it does not start automatically. The expected address is `https://jdennisuf.github.io/shell-mate/`. Relative asset paths make the app work under the repository path.

## Sources

- [PowerPyx tarstone locations](https://www.powerpyx.com/mortal-shell-2-all-tarstone-locations/)
- [PowerPyx beacon locations](https://www.powerpyx.com/mortal-shell-2-all-beacon-locations/)
- [PowerPyx main boss guide](https://www.powerpyx.com/mortal-shell-2-boss-guide-all-main-bosses/)
- [Probonk beacon routes](https://probonk.com/mortal-shell-2/beacons)
- [Probonk boss catalog](https://probonk.com/mortal-shell-2/bosses)

Unofficial fan project, not affiliated with Cold Symmetry.
