# Tarstone equipment rules

Research snapshot: 2026-10-30. The references below are unofficial and disagree on some individual stones. Treat this as a design reference, not a verified game-data export.

## Loadout slots

A character can have **up to 10 stones active**: four Support slots, plus three slots for the selected melee weapon and three for the selected sidearm.

| Equipment | Combat | Infusion | Ability | Support |
| --- | ---: | ---: | ---: | ---: |
| Melee weapon | 1 | 1 | 1 | — |
| Sidearm | 1 | 1 | 1 | — |
| Character | — | — | — | 4 |

The two Combat slots, for example, are one melee and one sidearm slot; they are not interchangeable. Even Axe and Dagger has only one melee Combat slot. Support stones provide character-wide effects and use the four Support slots. A stone's category and its intended equipment are separate properties: filter on both, and then on compatibility with the selected item. Slots can be left empty. Sources: [GamesRadar](https://www.gamesradar.com/games/rpg/mortal-shell-2-tarstones/), [upgrade guide](https://bo3.gg/games/articles/how-to-upgrade-tarstones-in-mortal-shell-2), [player clarification](https://www.reddit.com/r/MortalShell/comments/1wib1tg/equipping_duality_and_wounding_stones/).

## Equipment compatibility

Some weapon and sidearm stones work with multiple items, some with all items of their equipment type, and others only with specific named items. The authoritative input for the planner should be an explicit per-stone list of compatible equipment, not an inference from its effect, name, or category. The [compatibility chart](https://probonk.com/mortal-shell-2/tarstone-finder) collects per-item lists; its interactive grid is needed to see the individual matches. The [stone database](https://mortalshelldb.com/tarstones) also gives compatibility counts and links to individual stones. Neither is official, and they disagree on some entries, so verify each mapping against the game before treating it as final.

The chart lists these eight melee weapons: Axatana, Axe and Dagger, Black Needle, Clockwork Scythe, Great Martyr's Blade, Obsidian Hammer, The Iconoclast, and Veteran's Battle Axe. It lists eight sidearms: Ballistazooka, Caged Hystrix, Cursed Child, Forgotten Crossbow, Naylshotte, Salvaged Trebuchaxe, Triarch Repeater, and Troubadour's Lute.

Examples of restrictions reported by the stone database:

| Stone | Compatible equipment reported |
| --- | --- |
| Hexapod Core | Axatana |
| Clockwork Shardstone; Scholar's Wormstone | Clockwork Scythe |
| Conqueror's Reward; Infused Stone; Nightgrasp Stone | Black Needle |
| Captive's Scabstone; Warden's Stone | Great Martyr's Blade |
| Colossus Stone; Wretchcaller's Stone | Obsidian Hammer |
| Inflamed Clawstone | Veteran's Battle Axe |
| Fulminant Stone; Infested Stone; Weeping Stone | Ballistazooka |
| Strange Remnant | Caged Hystrix |
| Summoning Stone | Cursed Child |
| Blackblood Stone | Naylshotte |
| Monarch's Vestige; Squall Stone; Tarred Fragment | Salvaged Trebuchaxe |
| Frostshard Stone | Triarch Repeater |
| Hand of Rock | Troubadour's Lute |

These are examples, not an exhaustive compatibility table. The database reports Wounding, Grudge, Parasitic and Thief's Stones as usable with any melee weapon, and Enfeebling and Rupturing Stones with any sidearm. See the linked database for the remaining stones and multi-weapon counts.

## Planner implications and unresolved questions

- Store category, equipment slot, and compatible gear independently, together with each stone's level-specific effects. Display effects from the currently selected stones in one panel. The existing `data.js` contains categories and many level effects, but compatibility needs separate verification.
- Filter each weapon slot by category, equipment type, and selected weapon or sidearm. On a gear change, revalidate affected selections. A player reports the game remembers stones separately for each weapon when switching back; verify this in game before implementing persistence to match it. [Source](https://www.reddit.com/r/MortalShell/comments/1vvdgpy/incombatible_tarstones/).
- Do not assume a stone can occupy multiple slots simultaneously, or that duplicate copies can be equipped: those rules were not established by these sources.
- The sources conflict: the chart lists Voltaic Crown on both gear grids, while the database lists Crown as melee and Voltaic Amber as sidearm. They also disagree on categories for Acolyte's Stone, Unwieldy Stone, Charged Stone and Fusillade Stone, and on the compatibility of Magdalena's Memento and several other stones. The chart's extracted grid does not expose its checkmarks. Resolve these against the in-game menu before building a complete compatibility dataset.
- Published rosters differ in total count (75 versus 78), and the chart itself flags several stones with undocumented compatibility. Do not interpret a missing mapping as confirmed incompatibility; represent it as unknown until checked. Game patches may also change effects or compatibility.
