# Add an Items Reference

## Summary

Add an **Items** section covering distinct item types across the base game and Rotten Autumn DLC. Organize it by category and make it a reference: items will not have checkboxes or count toward progress.

## Implementation

- Research the in-game item categories and build a sourced catalog of usable items, key and quest items, upgrade materials, and other distinct inventory items. Use the game's own categories where they can be verified; document uncertain or conflicting information instead of presenting it as fact.
- Give each entry a stable ID, name, category, content scope, description or effect, and known acquisition or usage details. Include links to relevant existing guide entries and sources where available.
- Add an Items tab using the existing search, category, region, content, and ordering controls where applicable. Present item details in the existing expandable-card style.
- Keep Items out of progress totals, completion banners, bulk selection, and saved checks. Preserve existing saves and backup compatibility.
- Update the guide documentation and content review notes with coverage, sources, and known gaps.

## Test Plan

- Check catalog IDs, categories, source links, related-entry links, and base-game/DLC classification.
- Verify search and filters, item details, direct links, and mobile and keyboard navigation.
- Confirm Items do not change completion totals or exported progress, and that existing saves and imports still work.

## Assumptions

- Catalog each distinct item once; do not track quantities or every pickup location.
- Existing Shells, weapons, sidearms, and Tarstones remain in their current sections rather than being duplicated as Items.
- Aim for comprehensive coverage, but clearly label missing details or uncertain entries rather than inventing them.
