# Tarstone description audit

Audited November 1, 2026 against the 89 entries in `data.js`, including their descriptions, rank effects and the loadout summary logic. This is a research report; no Tarstone data was changed as part of this audit. “Current” below means the text in Shell Mate, not necessarily the text in the game. Proposed wording is a paraphrase unless noted otherwise.

The available sources disagree and often use pre-release data. In particular, the [Open Beta database](https://www.mortalshell2.org/wiki/tarstones/) predates retail, and [QuestLog](https://questlog.casual-heroes.com/soulslike/mortal-shell-2/tarstones/) repeats several descriptions that the player has already corrected in this session. Do not treat either as authoritative for the current patch. The [Rotten Autumn announcement](https://steamdb.info/patchnotes/26073152/) announces new stones but does not provide a complete per-stone description list. I could not inspect the installed game, so this is a list of discrepancies and leads, not proof that all other descriptions match the current game.

## High-priority discrepancies

### Hag Stone — conflicting status effect

- **Guide currently:** “Consume 20 Resolve to infuse your Sidearm with Trauma.”
- **Loadout summary currently:** the Sidearm is infused with Poison.
- **Proposed:** “Consume 20 Resolve to infuse your Sidearm with Poison.” Make the guide and summary agree, subject to an in-game check. A [gameplay walkthrough](https://allthings.how/outskirts-of-nochte-beacon-walkthrough-in-mortal-shell-2/) and [Hag Stone listing](https://probonk.com/mortal-shell-2/tarstones?e=hag-stone) identify Poison, while [another reference](https://nerdschalk.com/all-mortal-shell-2-tarstones-and-upgrade-effects/) says Trauma. This is a source conflict, not a verified DLC change.

### Egon's Stone — contradictory loss protection

- **Guide currently:** “Revives you at the entrance of a dungeon when you die there; when it breaks, it prevents Gloom loss for that death.”
- **Additional fixed effect currently:** “Upon death inside a Dungeon, revive at its entrance and prevent Gloom loss for that death. Durability decreases on activation.”
- **Proposed:** “On death inside a dungeon, offers to revive you at its entrance at the cost of durability. When it breaks, it prevents Gloom loss for that death.” Align both displayed fields. The [Week 1 patch notes](https://www.reddit.com/r/MortalShell/comments/1w1qe4v/the_week_1_full_patch_notes_pc_new_content/) distinguish revival from protection on the death that breaks the stone.

### Black Lantern — unclear activation condition

- **Current:** “Blocks Mether's Pulse. Blocking, Perfect Guard, Parry, or Perfect Harden empowers your next attack.”
- **Current ranks:** the next melee hit restores 10%, 20%, or 30% maximum Health after a parry, perfect guard, or perfect harden.
- **Proposed:** “Disables Mether's Pulse. After a Parry, Perfect Guard, or Perfect Harden, the next melee hit restores Health.” Preserve the rank values. The current description appears to include ordinary blocking, whereas its own ranks and [QuestLog](https://questlog.casual-heroes.com/soulslike/mortal-shell-2/tarstones/) specify the timed actions. Verify in game whether ordinary blocking also qualifies before removing it.

### Voltaic Crown — missing target

- **Current:** “Consume 30 Resolve to infuse with Lightning.”
- **Proposed:** “Consume 30 Resolve to infuse your Weapon with Lightning.” The [Lightning reference](https://mortalshell2wiki.com/lightning/) names the Weapon; the [equipment guide](https://allthings.how/mortal-shell-2-how-to-get-the-voltaic-crown-tarstone/) also lists compatible sidearms. Confirm the exact current in-game wording and clarify compatibility separately.

## Rank effects needing in-game confirmation

These differences could reflect patch changes, source errors, or different interpretations of rank numbering. The proposed values are **candidates**, not verified current values.

### Hexapod Core — rank 2

- **Current:** “Each strike inflicts 2 Fragile stacks.”
- **Candidate:** “The attack gains Stagger immunity.” [GamesRecon's Axatana guide](https://www.gamesrecon.com/how-to-get-axatana-in-mortal-shell-2) reports immunity at the corresponding upgrade; [QuestLog](https://questlog.casual-heroes.com/soulslike/mortal-shell-2/tarstones/) agrees with the current Fragile text. Verify the upgraded stone in game.

### Unwieldly Stone — rank effects

- **Current:** charged attacks restore 10 / 20 / 40 Health on a critical hit.
- **Candidate:** 2 Leech stacks on kill; 3 stacks and 20 Health; 5 stacks and 25 Health, respectively. [GamesRecon](https://www.gamesrecon.com/how-to-get-axatana-in-mortal-shell-2) reports those effects; QuestLog reports the current healing-on-critical progression. Check all three ranks and triggers in game.

### Thief's Stone — rank values

- **Current:** 3 / 4 / 5 Warp stacks per strike.
- **Candidate:** 1 / 2 / 3 Warp stacks per strike according to [GamesRecon](https://www.gamesrecon.com/how-to-get-axatana-in-mortal-shell-2); [QuestLog](https://questlog.casual-heroes.com/soulslike/mortal-shell-2/tarstones/) agrees with the existing values. Verify the current game before changing.

### Retribution Stone — rank values

- **Current:** Riposte damage increased by 5% / 8% / 15%.
- **Candidate:** 10% / 15% / 20%, respectively, according to [GamesRecon](https://www.gamesrecon.com/how-to-get-axatana-in-mortal-shell-2). Verify the current game before changing.

## Recently corrected entries and unreliable comparisons

The user supplied current wording for Devout Stone, Shattering Stone, Bulwark Stone, Scholar's Wormstone, Duality Stone, Guitarstone, Mourning Bell, Channeler's Stone and Black Fleece; those corrections are already reflected in the catalog. Do not revert them merely because older references disagree. In particular QuestLog assigns older-looking chainsaw values and a different effect to Scholar's Wormstone, while a [Clockwork Shardstone guide](https://allthings.how/mortal-shell-2-how-to-get-clockwork-shardstone-in-the-alchemist-s-workshop/) associates those values with the separate Clockwork Shardstone. The latter guide itself cautions that its displayed values may differ from the game.

The 12 Rotten Autumn entries were reviewed for internal inconsistencies and compared with available community references. The update-specific index explicitly leaves [effect values unverified](https://mortalshell2.lol/patches/rotten-autumn/); absence from this report therefore does not establish that their wording or ranks match the latest build. The previously supplied player corrections are the strongest evidence available here for the affected stones.
