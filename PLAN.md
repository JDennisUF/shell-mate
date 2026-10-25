# Shell Mate public guide

Keep the app static, with no application build step, account, or server-side save system.

## Implemented

- Keep Export and Import, including older backup support and browser-save migration.
- Separate progress handling and catalog searching from the page controls.
- Keep Rotten Autumn DLC filtering selected when changing categories. Show DLC-only progress totals and clearly label DLC entries.
- Keep source links and review dates with entries. Flag conflicting or unconfirmed details. Add reported DLC stones without claiming a complete inventory.
- Keep keyboard focus and open routes/fight tips when checking an entry. Support direct links and malformed-link handling.
- Use one Pages deployment workflow, publishing only site files, with automated checks before deployment.

## Remaining content work

Check each route and reward against the current game before marking it fully checked. See `CONTENT_REVIEW.md` for discrepancies and evidence reviewed so far. Additional collectible categories, accounts, shared saves, and installable offline support are outside this release.
