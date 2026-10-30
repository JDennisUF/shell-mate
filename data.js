import { shellItems } from "./shells.js";

export const catalog = {
  "sources": {
    "tarstone-list": {
      "title": "PowerPyx: all tarstones",
      "url": "https://www.powerpyx.com/mortal-shell-2-all-tarstone-locations/"
    },
    "beacon-list": {
      "title": "PowerPyx: all beacons",
      "url": "https://www.powerpyx.com/mortal-shell-2-all-beacon-locations/"
    },
    "beacon-routes": {
      "title": "Probonk: beacon routes",
      "url": "https://probonk.com/mortal-shell-2/beacons"
    },
    "boss-roster": {
      "title": "Probonk: bosses and rewards",
      "url": "https://probonk.com/mortal-shell-2/bosses"
    },
    "boss-main": {
      "title": "PowerPyx: main boss guide",
      "url": "https://www.powerpyx.com/mortal-shell-2-boss-guide-all-main-bosses/"
    },
    "existing-checklist": {
      "title": "Existing Shell Mate DLC checklist",
      "url": "https://github.com/JDennisUF/shell-mate/blob/main/index.html"
    },
    "rotten-dungeons": {
      "title": "Item Level: Rotten Autumn dungeon routes",
      "url": "https://itemlevel.net/mortal-shell-2-rotten-autumn-all-15-new-dungeons-location-guide/"
    },
    "rotten-crosscheck": {
      "title": "GamesHorizon: Rotten Autumn dungeon locations",
      "url": "https://gameshorizon.com/guides/mortal-shell-2-rotten-autumn-all-15-new-dungeons-location-guide/"
    },
    "tarstone-roster": {
      "title": "Probonk: tarstone catalog",
      "url": "https://probonk.com/mortal-shell-2/tarstones"
    },
    "glimpse-stone-route": {
      "title": "All Things How: Glimpse Stone",
      "url": "https://allthings.how/mortal-shell-2-how-to-get-and-use-the-glimpse-stone/"
    },
    "egon-stone-route": {
      "title": "All Things How: Egon's Stone",
      "url": "https://allthings.how/mortal-shell-2-how-to-get-and-use-egon-s-stone/"
    },
    "tarstone-effects": {
      "title": "QuestLog: Tarstones",
      "url": "https://questlog.casual-heroes.com/soulslike/mortal-shell-2/tarstones/"
    },
    "rotten-missing-stones": {
      "title": "Community discussion: Wellspring Stone and Forsaken Vow",
      "url": "https://www.reddit.com/r/MortalShell/comments/1xc99or/wellspring_stone_and_forsaken_vow_stone/"
    },
    "base-dungeon-routes": {
      "title": "All Things How: all 35 base-game dungeon locations",
      "url": "https://allthings.how/mortal-shell-2-every-dungeon-location-all-35-sites/"
    },
    "base-dungeon-roster": {
      "title": "PowerPyx: all 36 overworld dungeon locations",
      "url": "https://www.powerpyx.com/mortal-shell-2-all-dungeon-locations/"
    },
    "hag-pit-route": {
      "title": "All Things How: Hag’s Pit dungeon walkthrough",
      "url": "https://allthings.how/hag-s-pit-dungeon-walkthrough-in-mortal-shell-2-all-rewards/"
    },
    "derelict-hideout-route": {
      "title": "All Things How: Derelict Hideout Beacon walkthrough",
      "url": "https://allthings.how/mortal-shell-2-disciple-s-grotto-beacon-walkthrough-derelict-hideout/"
    },
    "boss-artwork-hexapod": {
      "title": "All Things How: Hexapod boss location and screenshots",
      "url": "https://allthings.how/mortal-shell-2-how-to-find-the-hexapod-boss/"
    },
    "boss-artwork-endgame": {
      "title": "Probonk: Malborn Offspring and Monolith images",
      "url": "https://probonk.com/mortal-shell-2/enemies?e=malborn-offspring"
    },
    "boss-artwork-orrem": {
      "title": "All Things How: Empty Cradle and Orrem screenshots",
      "url": "https://allthings.how/mortal-shell-2-empty-cradle-beacon-dungeon-walkthrough/"
    },
    "boss-artwork-zmey": {
      "title": "All Things How: Zmey, the Unbidden screenshots",
      "url": "https://allthings.how/mortal-shell-2-how-to-reach-and-beat-zmey-the-unbidden/"
    },
    "tarstone-ms2db-levels": {
      "title": "Mortal Shell 2 Database: tarstone levels",
      "url": "https://ms2db.com/tarstones/clockwork-shardstone"
    },
    "tarstone-gamerguides": {
      "title": "Gamer Guides: tarstone effects and levels",
      "url": "https://www.gamerguides.com/mortal-shell-ii/checklists/tarstones-locations"
    },
    "tarstone-community-levels": {
      "title": "Community-reported tarstone levels (Reddit)",
      "url": "https://www.reddit.com/r/MortalShell/comments/1xbytpp/new_tarstones_i_found_so_far/"
    },
    "weapon-locations": {
      "title": "AllThingsHow: primary weapon locations",
      "url": "https://allthings.how/mortal-shell-2-weapon-locations-all-eight-primary-weapons/"
    },
    "sidearm-locations": {
      "title": "PowerPyx: sidearm locations",
      "url": "https://www.powerpyx.com/mortal-shell-2-all-sidearm-locations/"
    },
    "gear-locations": {
      "title": "GameSpot: weapon and sidearm locations",
      "url": "https://www.gamespot.com/articles/mortal-shell-2-all-weapon-sidearm-locations/"
    }
  },
  "shells": shellItems,
  "weapons": [
    {
      "id": "weapon-01", "name": "The Iconoclast", "kind": "weapon", "region": "Prologue", "scope": "base", "order": 1,
      "category": "Light sword", "image": "assets/weapons/iconoclast.webp", "description": "A light sword granted during the prologue.",
      "steps": ["Continue the prologue and receive Harros; the Iconoclast is added automatically."], "aliases": [], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-02", "name": "Axe & Dagger", "kind": "weapon", "region": "Fainweald", "scope": "base", "order": 2,
      "category": "Paired weapons", "image": "assets/weapons/axe-and-dagger.webp", "description": "A paired set combining a dagger with an axe.",
      "nearestBeacon": "Mushroom Village", "nearestBeaconId": "beacon-05", "steps": ["Find the Chapel Key near Mushroom Village.", "Unlock the Shrine of Trials and solve its block puzzles.", "Defeat the Armored Knight in the final room and collect the weapon."],
      "requirement": "Chapel Key", "aliases": [], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-03", "name": "Veteran’s Battle Axe", "kind": "weapon", "region": "Fainweald", "scope": "base", "order": 3,
      "category": "Heavy axe", "image": "assets/weapons/veterans-battle-axe.webp", "description": "A heavy battle axe found in The King’s Crypt.",
      "steps": ["Enter The King’s Crypt in northern Fainweald.", "Work through the dungeon to the final chamber and take the axe from the body or sarcophagus."],
      "aliases": ["Veteran's Battle Axe"], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-04", "name": "Great Martyr’s Blade", "kind": "weapon", "region": "Fainweald", "scope": "base", "order": 4,
      "category": "Greatsword", "image": "assets/weapons/great-martyrs-blade.webp", "description": "A heavy blade hidden inside Martyr’s Prison.",
      "nearestBeacon": "Gloomshade Grove", "nearestBeaconId": "beacon-09", "steps": ["Enter Martyr’s Prison outside the Citadel of Penance.", "Use the coin pouch to reach the prison, clear the corridors, then collect the blade at the end."],
      "aliases": ["Great Martyr's Blade"], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-05", "name": "Obsidian Hammer", "kind": "weapon", "region": "Mammon", "scope": "base", "order": 5,
      "category": "Hammer", "image": "assets/weapons/obsidian-hammer.webp", "description": "A hammer awarded for defeating the Prophet of Profane Infinities.",
      "nearestBeacon": "Outskirts of Mammon", "nearestBeaconId": "beacon-12", "steps": ["Enter the Obsidianite Mines from the quarry west of the Outskirts of Mammon Beacon.", "Reach the Prophet of Profane Infinities at the end of the mines and defeat it."],
      "aliases": [], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-06", "name": "Axatana", "kind": "weapon", "region": "Mammon", "scope": "base", "order": 6,
      "category": "Transforming weapon", "image": "assets/weapons/axatana.webp", "description": "A transforming weapon with dual-blade and axe forms.",
      "nearestBeacon": "Sester’s Gate", "nearestBeaconId": "beacon-13", "steps": ["Reach the Forgotten Tower beyond the Bone Gate near Sester’s Gate.", "Open the gated room, defeat the Dagger Sester, and collect the Axatana from the niche."],
      "aliases": [], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-07", "name": "Black Needle", "kind": "weapon", "region": "Mammon", "scope": "base", "order": 7,
      "category": "Spear", "image": "assets/weapons/black-needle.webp", "description": "A spear earned by cleansing the Sester’s Gate Beacon.",
      "nearestBeacon": "Sester’s Gate", "nearestBeaconId": "beacon-13", "steps": ["Complete the Sester’s Gate Beacon dungeon and reach the arena encounter.", "Defeat the Twin Sesters and the Stray Sester to receive the Black Needle."],
      "aliases": [], "sources": ["weapon-locations", "gear-locations"]
    },
    {
      "id": "weapon-08", "name": "Clockwork Scythe", "kind": "weapon", "region": "Mammon", "scope": "base", "order": 8,
      "category": "Scythe", "image": "assets/weapons/clockwork-scythe.webp", "description": "A scythe dropped by Sariel, the Endless.",
      "nearestBeacon": "The Silent Steps", "nearestBeaconId": "beacon-19", "steps": ["Defeat Sariel near The Silent Steps Beacon, then follow him into the Chamber of Becoming.", "Defeat Sariel again in the dungeon to receive the scythe."],
      "aliases": [], "sources": ["weapon-locations", "gear-locations"]
    }
  ],
  "sidearms": [
    {
      "id": "sidearm-01", "name": "Naylshotte", "kind": "sidearm", "region": "Prologue", "scope": "base", "order": 1,
      "category": "Shotgun", "image": "assets/weapons/naylshotte.webp", "description": "A close-range sidearm that fires a spread of projectiles.",
      "steps": ["Received automatically during the prologue."], "aliases": ["Nayleshotte"], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-02", "name": "Forgotten Crossbow", "kind": "sidearm", "region": "Fainweald", "scope": "base", "order": 2,
      "category": "Crossbow", "image": "assets/weapons/forgotten-crossbow.webp", "description": "A crossbow hidden inside the Flooded Village.",
      "nearestBeacon": "Blackridge Pass", "nearestBeaconId": "beacon-07", "steps": ["Enter Flooded Village northwest of Blackridge Pass Beacon using the arc to open its boarded entrance.", "After the second elevator, find the Damp Key in a box by a house in the underground village.", "Use the key on the central building and take the crossbow from the table."],
      "requirement": "Damp Key", "aliases": [], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-03", "name": "Salvaged Trebuchaxe", "kind": "sidearm", "region": "Fainweald", "scope": "base", "order": 3,
      "category": "Axe launcher", "image": "assets/weapons/salvaged-trebuchaxe.webp", "description": "A sidearm that launches axes.",
      "nearestBeacon": "Gloomshade Grove", "nearestBeaconId": "beacon-09", "steps": ["Defeat the Bloodcursed Lithopod south of Gloomshade Grove to open the Ravaged Hideout.", "Clear the dungeon and collect the sidearm from a body in the final room."],
      "aliases": [], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-04", "name": "Troubadour’s Lute", "kind": "sidearm", "region": "Fainweald", "scope": "base", "order": 4,
      "category": "Instrument", "image": "assets/weapons/troubadours-lute.webp", "description": "A lute that can confuse enemies.",
      "nearestBeacon": "One Legged Wolf", "nearestBeaconId": "beacon-11", "steps": ["Enter One Legged Wolf Tavern southeast of One Legged Wolf Beacon.", "Pick up the lute from the stage to the left of the performer."],
      "aliases": ["Troubador’s Lute", "Troubadour's Lute", "Troubador's Lute"], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-05", "name": "Triarch Repeater", "kind": "sidearm", "region": "Mammon", "scope": "base", "order": 5,
      "category": "Repeater", "image": "assets/weapons/triarch-repeater.webp", "description": "A repeating-fire ranged weapon found in Blackwell Cavern.",
      "nearestBeacon": "Castigator’s Keep", "nearestBeaconId": "beacon-15", "steps": ["Reach Blackwell Cavern below Castigator’s Keep Beacon, near the cliff edge.", "Follow the dungeon route to the first lit area and collect the repeater from the ground."],
      "aliases": ["Triach Repeater"], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-06", "name": "Ballistazooka", "kind": "sidearm", "region": "Mammon", "scope": "base", "order": 6,
      "category": "Launcher", "image": "assets/weapons/ballistazooka.webp", "description": "A heavy launcher found in Sentry’s Grave.",
      "nearestBeacon": "Gate of Mammon", "nearestBeaconId": "beacon-18", "steps": ["Enter Sentry’s Grave inside Lonesome Spire, northwest of Gate of Mammon Beacon.", "Defeat the Subjugated Guardian at the end of the dungeon to receive the sidearm."],
      "aliases": [], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-07", "name": "Cursed Child", "kind": "sidearm", "region": "Mammon", "scope": "base", "order": 7,
      "category": "Living weapon", "image": "assets/weapons/cursed-child.webp", "description": "A sidearm recovered from the Revered Beacon dungeon.",
      "nearestBeacon": "Sester’s Gate", "nearestBeaconId": "beacon-13", "steps": ["Enter Revered Beacon from the ledge northwest of Sester’s Gate Beacon.", "Stay out of the tower’s golden light, circle counterclockwise to the tower, and attack its central pillar.", "Collect Cursed Child after disabling the light."],
      "aliases": [], "sources": ["sidearm-locations", "gear-locations"]
    },
    {
      "id": "sidearm-08", "name": "Caged Hystrix", "kind": "sidearm", "region": "Mammon", "scope": "base", "order": 8,
      "category": "Repeater", "image": "assets/weapons/caged-hystrix.webp", "description": "A rapid-fire sidearm found in the Chamber of Becoming.",
      "nearestBeacon": "The Silent Steps", "nearestBeaconId": "beacon-19", "steps": ["Defeat Sariel near The Silent Steps Beacon, then follow him into the Chamber of Becoming.", "In the final room, break all four tombstones and defeat Sariel again.", "Collect the sidearm near the dungeon exit."],
      "aliases": [], "sources": ["sidearm-locations", "gear-locations"]
    }
  ],
  "tarstones": [
    {
      "id": "tar-01",
      "name": "Auspicious Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 1,
      "category": "Support",
      "nearestBeacon": "Widow's Overlook",
      "steps": [
        "Go southeast into the village and find the sealed chest at its center",
        "light the candle behind it, the one uphill to the right, and the one behind the house on the left",
        "open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-ms2db-levels"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-08",
      "levelEffects": [
        "Melee attacks have +10% Critical Chance",
        "Melee attacks have +15% Critical Chance",
        "Melee attacks have +18% Critical Chance"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Auspicious_Stone",
      "description": "Improves melee Critical Chance."
    },
    {
      "id": "tar-02",
      "name": "Headman’s Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 2,
      "category": "Support",
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "Go southeast to the ruins patrolled by Grisha Hunters",
        "circle to the northeast corner and open the chest beside the tree"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [
        "Headsman's Stone"
      ],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12",
      "levelEffects": [
        "Melee attacks deal +50% Critical Damage",
        "Melee attacks deal +80% Critical Damage",
        "Melee attacks deal +100% Critical Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Headsman%27s_Stone",
      "description": "Improves melee Critical Damage."
    },
    {
      "id": "tar-03",
      "name": "Devout Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 3,
      "category": "Support",
      "nearestBeacon": "Sester's Gate",
      "steps": [
        "Climb the stairs north toward the two ranged enemies",
        "use the wall switch beside them, then open the newly accessible chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-13",
      "levelEffects": [
        "Generates 7 Resolve",
        "Generates 14 Resolve",
        "Generates 28 Resolve"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Devout_Stone",
      "description": "Improves Resolve gain from melee attacks."
    },
    {
      "id": "tar-04",
      "name": "Shattering Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 4,
      "category": "Support",
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "Reach the Obsidianite Mines entrance and take its northern lift up",
        "follow the western route into Collapsed Mine",
        "at the fork take the left dead end for the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12",
      "levelEffects": [
        "The next melee attack deals +20% Stagger Damage",
        "The next melee attack deals +30% Stagger Damage",
        "The next melee attack deals +50% Stagger Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Shattering_Stone",
      "description": "Improves melee Stagger Damage."
    },
    {
      "id": "tar-05",
      "name": "Berserker’s Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 5,
      "category": "Support",
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "Travel east through the Bone Gate into the Temple of Vatra",
        "climb the stairs and turn left to the offering chest",
        "light two candles on its left and one on its right before opening it"
      ],
      "requirement": "Missable: collect before taking the Heart of Vatra and leaving",
      "sources": [
        "tarstone-list",
        "tarstone-ms2db-levels"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-11",
      "levelEffects": [
        "Melee damage increased up to 130% when Health is at 35% or below",
        "Melee damage increased up to 140% when Health is at 40% or below",
        "Melee damage increased up to 165% when Health is at 50% or below"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Berserker%27s_Stone",
      "description": "Improves melee damage the lower your Health is."
    },
    {
      "id": "tar-06",
      "name": "Marksman’s Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 6,
      "category": "Support",
      "nearestBeacon": "Mushroom Village Gate",
      "steps": [
        "Take the upper trail northeast",
        "defeat or pass the three enemies guarding the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-03",
      "levelEffects": [
        "Ranged attacks have 10% Critical Chance",
        "Ranged attacks have 12% Critical Chance",
        "Ranged attacks have 15% Critical Chance"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Marksman%27s_Stone",
      "description": "Improves ranged Critical Chance."
    },
    {
      "id": "tar-07",
      "name": "Deadeye Stone",
      "kind": "tarstone",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 7,
      "category": "Support",
      "nearestBeacon": "Pulsing Caves",
      "steps": [
        "From the entrance to Sanguine Caverns, take the first drop on the left into the camp",
        "open its chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-28",
      "levelEffects": [
        "Ranged attacks deal +20% Critical Damage",
        "Ranged attacks deal +30% Critical Damage",
        "Ranged attacks deal +40% Critical Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Deadeye_Stone",
      "description": "Improves ranged Critical Damage."
    },
    {
      "id": "tar-08",
      "name": "Siegebreaker’s Stone",
      "kind": "tarstone",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 8,
      "category": "Support",
      "nearestBeacon": "Seeping Mire",
      "steps": [
        "In the first swamp, locate the offering chest",
        "light the candle on the house railing up the stairs, the candle on the central pillar, and the candle in the cage behind the pillars",
        "claim the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-21",
      "levelEffects": [
        "Ranged attacks deal 150% Stagger Damage",
        "Ranged attacks deal 200% Stagger Damage",
        "Ranged attacks deal 250% Stagger Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Siegebreaker%27s_Stone",
      "description": "Improves ranged Stagger Damage."
    },
    {
      "id": "tar-09",
      "name": "Spite Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 9,
      "category": "Support",
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "Head north and ring the bell to form a bridge path",
        "enter Bellkeeper's Corner and reach the little platform beside its bell",
        "open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17",
      "levelEffects": [
        "Ranged damage increases by up to 40% when Health is at 35% or below",
        "Ranged damage increases by up to 50% when Health is at 40% or below",
        "Ranged damage increases by up to 60% when Health is at 50% or below"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Spite_Stone",
      "description": "Improves ranged damage the lower your Health is."
    },
    {
      "id": "tar-10",
      "name": "Bulwark Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 10,
      "category": "Support",
      "nearestBeacon": "Citadel of Penance",
      "steps": [
        "Go south to the southwest section of the outer wall",
        "pull the gate lever, pass the four enemies, and open the chest at the broken bridge"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-10",
      "levelEffects": [
        "Gain 25% Damage Reduction for the next 2s",
        "Gain 50% Damage Reduction for the next 3s",
        "Gain 70% Damage Reduction for the next 4s"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Bulwark_Stone",
      "description": "Provides Damage Reduction to all characters."
    },
    {
      "id": "tar-11",
      "name": "Retribution Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 11,
      "category": "Support",
      "nearestBeacon": "Widow's Overlook",
      "steps": [
        "Head north to the Trial marker",
        "activate and finish the Trial"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-08",
      "levelEffects": [
        "Riposte damage increased by 5%",
        "Riposte damage increased by 8%",
        "Riposte damage increased by 15%"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Retribution_Stone",
      "description": "Improves Riposte damage."
    },
    {
      "id": "tar-12",
      "name": "Gloombound Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 12,
      "category": "Support",
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Go northeast into Stones of Remembrance",
        "enter the central ruined building and open its chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07",
      "fixedEffect": "While it lasts, slain foes drop 30% more Gloom. When it breaks, it grants 3,000 Gloom; durability falls as Gloom is gained.",
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Gloombound_Stone",
      "description": "Increases Gloom gained from slain foes; when it breaks, grants Gloom and a Tarcore."
    },
    {
      "id": "tar-13",
      "name": "Justiciar’s Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 13,
      "category": "Support",
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Reach the Feeding Grounds entrance east of Stones of Remembrance",
        "continue southeast into the northern swamp",
        "defeat Broodshell Swarm and enter the cave behind it"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07",
      "fixedEffect": "While it lasts, slain foes drop 30% more Coin. When it breaks, it grants 1,500 Coin; durability falls as Coin is gained.",
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Justiciar%27s_Stone",
      "description": "Increases Coin gained from slain foes; when it breaks, grants Coin and a Tarcore."
    },
    {
      "id": "tar-14",
      "name": "Wounding Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 14,
      "category": "Combat",
      "nearestBeacon": "Widow's Overlook",
      "steps": [
        "Head southeast to Tiel's village area",
        "look around the corner of the first house for a chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-ms2db-levels"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-08",
      "levelEffects": [
        "Inflict 2 Perforation stacks per strike",
        "Inflict 4 Perforation stacks per strike",
        "Inflict 7 Perforation stacks per strike"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Wounding_Stone",
      "description": "Melee attacks inflict Perforation."
    },
    {
      "id": "tar-15",
      "name": "Grudge Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 15,
      "category": "Combat",
      "nearestBeacon": "Citadel of Penance",
      "steps": [
        "Walk directly south from the beacon and open the nearby chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-10",
      "levelEffects": [
        "Every 7 attacks",
        "Every 6 attacks",
        "Every 5 attacks"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Grudge_Stone",
      "description": "Your Weapon deals a guaranteed Critical Hit."
    },
    {
      "id": "tar-16",
      "name": "Duality Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 16,
      "category": "Combat",
      "nearestBeacon": "Nochtean Gate",
      "steps": [
        "Ride the southeastern lift down",
        "enter Ravaged Tomb from the room below",
        "follow the dungeon to the chest beneath the hanging body"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-04",
      "levelEffects": [
        "First attack only",
        "First and Second attacks",
        "All attacks"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Duality_Stone",
      "description": "Your Weapon light attack combo strikes twice."
    },
    {
      "id": "tar-17",
      "name": "Unyielding Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 17,
      "category": "Combat",
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "Find the stone circle north of Deserted Mine",
        "activate the Trial in its center and finish it"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12",
      "levelEffects": [
        "First attack only",
        "First and Second attacks",
        "All attacks"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Unyielding_Stone",
      "description": "Your Weapon light attack combo has Stagger immunity."
    },
    {
      "id": "tar-18",
      "name": "Parasitic Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 18,
      "category": "Combat",
      "nearestBeacon": "Widow's Overlook",
      "steps": [
        "Go southeast into the building that leads to Martyr's Tomb",
        "reach the back room and loot its chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-08",
      "levelEffects": [
        "Gain 2 Leech stack per kill",
        "Gain 4 Leech stacks per kill",
        "Gain 6 Leech stacks per kill"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Parasitic_Stone",
      "description": "Slaying foes grants Leech stacks."
    },
    {
      "id": "tar-19",
      "name": "Thief’s Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 19,
      "category": "Combat",
      "nearestBeacon": "Gate of Infinity",
      "steps": [
        "Go northeast to the circular platform across from the statue where Ruk held the Map Fragment",
        "complete the Trial there"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-14",
      "levelEffects": [
        "Gain 3 Warp stack per strike",
        "Gain 4 Warp stacks per strike",
        "Gain 5 Warp stacks per strike"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Thief%27s_Stone",
      "description": "Striking foes grants Warp."
    },
    {
      "id": "tar-20",
      "name": "Stillblade’s Stone",
      "kind": "tarstone",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 20,
      "category": "Combat",
      "nearestBeacon": "Citadel Annex",
      "steps": [
        "Enter the beacon dungeon and keep going until a spider creature carries you across the gap",
        "defeat the enemy on the landing and open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-34",
      "levelEffects": [
        "The light finisher deals 10 Break Damage",
        "The light finisher deals 15 Break Damage",
        "The light finisher deals 25 Break Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Stillblade%27s_Stone",
      "description": "Grants access to a special Light Combo Finisher that deals Break Damage."
    },
    {
      "id": "tar-21",
      "name": "Zealot’s Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 21,
      "category": "Combat",
      "nearestBeacon": "High Lord's Courtyard",
      "steps": [
        "Go east and descend two levels to the jump-pad enemies",
        "enter Besieged Ruins through the nearby wall",
        "touch the helmet at the rear and finish the knight flashback"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-20",
      "levelEffects": [
        "The light finisher generates 1.4 Resolve",
        "The light finisher generates 1.7 Resolve",
        "The light finisher generates 2.5 Resolve"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Zealot%27s_Stone",
      "description": "Grants access to a special Light Combo Finisher that generates Resolve."
    },
    {
      "id": "tar-22",
      "name": "Clerik’s Stone",
      "kind": "tarstone",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 22,
      "category": "Combat",
      "nearestBeacon": "Village Outskirts",
      "steps": [
        "Reach Disciple's Stash, then climb southwest into the castle",
        "strike the wall in the northern corner and open the cliffside chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-49",
      "levelEffects": [
        "The heavy finisher has +30% Critical Chance",
        "The heavy finisher has +35% Critical Chance",
        "The heavy finisher has +40% Critical Chance"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Clerik%27s_Stone",
      "description": "Grants access to a special Heavy Combo Finisher with increased Critical Chance."
    },
    {
      "id": "tar-23",
      "name": "Tyrant’s Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 23,
      "category": "Combat",
      "nearestBeacon": "Abbey Entrance",
      "steps": [
        "Return across the Bone Gate into the upper castle",
        "hit the white-marked wall on the right and open the hidden chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-16",
      "levelEffects": [
        "The heavy finisher inflicts 4 Weak stacks",
        "The heavy finisher inflicts 5 Weak stacks",
        "The heavy finisher inflicts 6 Weak stacks"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Tyrant%27s_Stone",
      "description": "Grants access to a special Heavy Combo Finisher that inflicts Weak."
    },
    {
      "id": "tar-24",
      "name": "Enfeebling Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 24,
      "category": "Combat",
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "Head east to the Trial",
        "complete it for the stone"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12",
      "levelEffects": [
        "Inflict 5 Fragile stacks per strike",
        "Inflict 6 Fragile stacks per strike",
        "Inflict 7 Fragile stacks per strike"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Enfeebling_Stone",
      "description": "Projectiles inflict Fragile."
    },
    {
      "id": "tar-25",
      "name": "Shuddering Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 25,
      "category": "Combat",
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "Follow the cliff path southwest and take the Bone Gate to Desolate Peak",
        "enter Illusionist's Cache in the building",
        "use the visibility arches and break white-marked walls",
        "place the block on its pressure plate and open the revealed chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-09",
      "levelEffects": [
        "Small shockwave on impact",
        "Medium shockwave on impact",
        "Large shockwave on impact"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Shuddering_Stone",
      "description": "Projectile impacts generate a Knockback shockwave."
    },
    {
      "id": "tar-26",
      "name": "Pulse Stone",
      "kind": "tarstone",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 26,
      "category": "Combat",
      "nearestBeacon": "Winterglass Lake",
      "steps": [
        "Continue through Conquered Temple to the cave and Grisha Hunters",
        "inspect the stone hands to their left for the concealed chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-32",
      "levelEffects": [
        "Small shockwave on impact",
        "Medium shockwave on impact",
        "Large shockwave on impact"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Pulse_Stone",
      "description": "Projectile impacts generate a shockwave that pulls enemies inward."
    },
    {
      "id": "tar-27",
      "name": "Ironpiercer’s Stone",
      "kind": "tarstone",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 27,
      "category": "Combat",
      "nearestBeacon": "Slumwater Drain",
      "steps": [
        "Inside the beacon, take the Bone Gate to the upper floor of the large chamber",
        "open the chest on the arrival platform"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-26",
      "levelEffects": [
        "Projectiles pierce up to 3 targets before stopping",
        "Projectiles pierce up to 4 targets before stopping",
        "Projectiles pierce up to 5 targets before stopping"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Ironpiercer%27s_Stone",
      "description": "Projectiles pierce through enemies."
    },
    {
      "id": "tar-28",
      "name": "Myriad Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 28,
      "category": "Combat",
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Head northeast to Stones of Remembrance",
        "break the three luminous gravestones at the center, left of the entrance stairs, and north rim",
        "enter Feeding Grounds and open the chest on its main floor"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07",
      "levelEffects": [
        "Fire 3 projectiles per shot, each dealing 60% of the original damage.",
        "Fire 5 projectiles per shot, each dealing 40% of the original damage.",
        "Fire 7 projectiles per shot, each dealing 30% of the original damage."
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Myriad_Stone",
      "description": "Your Sidearm fires multiple projectiles in an arc without consuming additional Resolve."
    },
    {
      "id": "tar-29",
      "name": "Splitting Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 29,
      "category": "Combat",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "From Sentry's Grave, circle clockwise around the castle",
        "reach the northern balcony and open its chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15",
      "levelEffects": [
        "Fire 2 projectiles per shot, each dealing 55% of the original damage.",
        "Fire 3 projectiles per shot, each dealing 40% of the original damage.",
        "Fire 4 projectiles per shot, each dealing 35% of the original damage."
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Splitting_Stone",
      "description": "Your Sidearm fires multiple projectiles in an arc without consuming additional Resolve."
    },
    {
      "id": "tar-30",
      "name": "Rupturing Stone",
      "kind": "tarstone",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 30,
      "category": "Combat",
      "nearestBeacon": "Slumwater Drain",
      "steps": [
        "Follow the Prisoners' Domain route to the summon platform before the Nameless Captive",
        "circle behind the platform and open the chest before entering the boss route"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-26",
      "levelEffects": [
        "Projectiles deal 4 Break Damage",
        "Projectiles deal 8 Break Damage",
        "Projectiles deal 12 Break Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Rupturing_Stone",
      "description": "Projectiles that strike critically deal Break Damage."
    },
    {
      "id": "tar-31",
      "name": "Blackblood Stone",
      "kind": "tarstone",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 31,
      "category": "Combat",
      "nearestBeacon": "Pulsing Caves",
      "steps": [
        "Work through the beacon to its upper floor",
        "find the chest near the stone crab group"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-28",
      "levelEffects": [
        "Exploding projectiles deal 2× splash damage",
        "Exploding projectiles deal 3× splash damage",
        "Exploding projectiles deal 4× splash damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Blackblood_Stone",
      "description": "Projectiles explode mid-air and deal splash damage."
    },
    {
      "id": "tar-32",
      "name": "Corroded Stone",
      "kind": "tarstone",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 32,
      "category": "Combat",
      "nearestBeacon": "Sunken Village",
      "steps": [
        "Climb the wooden platforms inside the beacon, then drop to the lower section",
        "pass the two enemies and open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-22",
      "levelEffects": [
        "Projectiles deal 8% of the original damage every 7s for 30s",
        "Projectiles deal 12% of the original damage every 7s for 30s",
        "Projectiles deal 15% of the original damage every 7s for 30s"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Corroded_Stone",
      "description": "Projectiles deal damage over time after striking their target."
    },
    {
      "id": "tar-33",
      "name": "Squall Stone",
      "kind": "tarstone",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 33,
      "category": "Combat",
      "nearestBeacon": "Executioner's Pulpit",
      "steps": [
        "Inside the beacon, reach the iron-maiden ghost room",
        "check the side room opposite the button that opens the Ova route for a chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-25",
      "levelEffects": [
        "Projectiles spin for 3s and deal 9% of original damage",
        "Projectiles spin for 4s and deal 10% of original damage",
        "Projectiles spin for 5s and deal 11% of original damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Squall_Stone",
      "description": "Projectiles spin in place after hitting their target."
    },
    {
      "id": "tar-34",
      "name": "Charged Stone",
      "kind": "tarstone",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 34,
      "category": "Combat",
      "nearestBeacon": "Nameless Pass",
      "steps": [
        "Progress through the beacon until you leave the long tube",
        "turn right immediately for the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-roster",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-37",
      "levelEffects": [
        "Sidearm charging speed increased by 20%",
        "Sidearm charging speed increased by 35%",
        "Sidearm charging speed increased by 50%"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Charged_Stone",
      "description": "Your Sidearm charges faster."
    },
    {
      "id": "tar-35",
      "name": "Unstable Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 35,
      "category": "Combat",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "Drop to the lower wooden walkways west of the beacon",
        "circle the pillars to the second one on the north side",
        "strike its false wall and open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15",
      "levelEffects": [
        "The triggered explosion deals 30 splash damage",
        "The triggered explosion deals 40 splash damage",
        "The explosion triggers after 4 hits"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Unstable_Stone",
      "description": "Repeatedly hitting the same enemy triggers an explosion that deals splash damage."
    },
    {
      "id": "tar-36",
      "name": "Volatile Fragment",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 36,
      "category": "Combat",
      "nearestBeacon": "Mushroom Village Gate",
      "steps": [
        "Finish the beacon encounter against Vrannic, the Grand Illusionist"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-45"
      ],
      "nearestBeaconId": "beacon-03",
      "levelEffects": [
        "Exploding enemies deal 15 splash damage",
        "Exploding enemies deal 25 splash damage",
        "Exploding enemies deal 35 splash damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Volatile_Fragment",
      "description": "Enemies dying by a ranged attack explode, dealing splash damage."
    },
    {
      "id": "tar-37",
      "name": "Arbiter’s Prize",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 37,
      "category": "Infusions",
      "nearestBeacon": "Widow's Overlook",
      "steps": [
        "Go southeast to the Great Arbiter of Flesh arena and defeat it"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-09"
      ],
      "nearestBeaconId": "beacon-08",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Arbiter%27s_Prize",
      "description": "Consume 30 Resolve to infuse your Weapon with Bloodcurse."
    },
    {
      "id": "tar-38",
      "name": "Serpent Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 38,
      "category": "Infusions",
      "nearestBeacon": "Stonebled Gate",
      "steps": [
        "Clear the beacon to its final encounter",
        "defeat Lucian, the Thirsting Knight"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-14"
      ],
      "nearestBeaconId": "beacon-02",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Serpent_Stone",
      "description": "Consume 15 Resolve to infuse your Weapon with Poison."
    },
    {
      "id": "tar-39",
      "name": "Voltaic Crown",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 39,
      "category": "Infusions",
      "nearestBeacon": "Nochtean Gate",
      "steps": [
        "Reach the end of the beacon and defeat Vrago, Solikar Champion"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-ms2db-levels"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-44"
      ],
      "nearestBeaconId": "beacon-04",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Voltaic_Crown",
      "description": "Consume 30 Resolve to infuse with Lightning."
    },
    {
      "id": "tar-40",
      "name": "Warden’s Stone",
      "kind": "tarstone",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 40,
      "category": "Infusions",
      "nearestBeacon": "Winterglass Lake",
      "steps": [
        "Advance deeper into Conquered Temple beyond the lake until Urrig, the Executioner appears",
        "defeat him"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-41"
      ],
      "nearestBeaconId": "beacon-32",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Warden%27s_Stone",
      "description": "Consume 30 Resolve to infuse your Weapon with Frost."
    },
    {
      "id": "tar-41",
      "name": "Curseblood Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 41,
      "category": "Infusions",
      "nearestBeacon": "Gate of Infinity",
      "steps": [
        "Take Grimorium Obscurum from the top of the bookshelves and place it in the wall slot near the entrance",
        "reach and defeat Gloombound Wraith"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-08"
      ],
      "nearestBeaconId": "beacon-14",
      "levelEffects": [
        "Infusion lasts for 15 strikes",
        "Infusion lasts for 30 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Curseblood_Stone",
      "description": "Consume 30 Resolve to infuse your Weapon with Curse."
    },
    {
      "id": "tar-42",
      "name": "Nightgrasp Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 42,
      "category": "Infusions",
      "nearestBeacon": "Abbey Entrance",
      "steps": [
        "Enter the castle and immediately turn southwest toward the Map Fragment tower",
        "on the lower floor, light the candle by the chest, the one behind the Trial pillar, and the one on the lower ledge left of that pillar",
        "open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-16",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Nightgrasp_Stone",
      "description": "Consume 30 Resolve to infuse your Weapon with Phantom."
    },
    {
      "id": "tar-43",
      "name": "Torpor Stone",
      "kind": "tarstone",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 43,
      "category": "Infusions",
      "nearestBeacon": "Ossinite Falls",
      "steps": [
        "Walk through the waterfall behind the beacon and open the hidden chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-38",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Torpor_Stone",
      "description": "Consume 25 Resolve to infuse your Weapon with Stasis."
    },
    {
      "id": "tar-44",
      "name": "Wretchcaller’s Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 44,
      "category": "Infusions",
      "nearestBeacon": "Gate of Mammon",
      "steps": [
        "Finish the beacon's Burrowkin Dwelling route and defeat Infected Miner"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-12"
      ],
      "nearestBeaconId": "beacon-18",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Wretchcaller%27s_Stone",
      "description": "Consume 30 Resolve to infuse your Weapon with Trauma."
    },
    {
      "id": "tar-45",
      "name": "Inflamed Clawstone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 45,
      "category": "Infusions",
      "nearestBeacon": "Mushroom Village",
      "steps": [
        "Go northwest past Shrine of Trials and clear the corrupted jump pad with Mether's Breath",
        "use the well above to enter Holding Cells",
        "take Feeding Room Key from the building by two bodies below, unlock the door halfway along the right side, and defeat Rabid Grisha Pack"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-21"
      ],
      "nearestBeaconId": "beacon-05",
      "levelEffects": [
        "Infusion lasts for 4 strikes",
        "Infusion lasts for 8 strikes",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Inflamed_Clawstone",
      "description": "Consume 30 Resolve to infuse your Weapon with Burn."
    },
    {
      "id": "tar-46",
      "name": "Hag Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 46,
      "category": "Infusions",
      "nearestBeacon": "Outskirts of Nochte",
      "steps": [
        "Enter the beacon and check its chest before the end of the route"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-06",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Hag_Stone",
      "description": "Consume 20 Resolve to infuse your Sidearm with Trauma."
    },
    {
      "id": "tar-47",
      "name": "Emberseed Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 47,
      "category": "Infusions",
      "nearestBeacon": "Mushroom Village",
      "steps": [
        "Enter the beacon and open the chest along its interior route"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-05",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Emberseed_Stone",
      "description": "Consume 20 Resolve to infuse your Sidearm with Burn. Burn is inflicted on Critical Hits only."
    },
    {
      "id": "tar-48",
      "name": "Viletongue Hedron",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 48,
      "category": "Infusions",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "Advance through the beacon to the Ovum room",
        "interact with the item on its right, then defeat Viletongue Batushka while the controls are reversed"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-43"
      ],
      "nearestBeaconId": "beacon-15",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Viletongue_Hedron",
      "description": "Consume 20 Resolve to infuse your Sidearm with Bloodcurse."
    },
    {
      "id": "tar-49",
      "name": "Voltaic Amber",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 49,
      "category": "Infusions",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "Take the southwest route and ride the southern lift into Vestige of Infinity",
        "defeat Starved Harridan"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-26"
      ],
      "nearestBeaconId": "beacon-15",
      "levelEffects": [
        "Infusion lasts for 40 shots",
        "Infusion lasts for 80 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Voltaic_Amber",
      "description": "Consume 20 Resolve to infuse your Sidearm with Lightning."
    },
    {
      "id": "tar-50",
      "name": "Frostshard Stone",
      "kind": "tarstone",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 50,
      "category": "Infusions",
      "nearestBeacon": "Conqueror's Hoard",
      "steps": [
        "Inside the beacon, go past the former Ova position into the snowy route",
        "continue to the large statue and open the chest in front"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-33",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Frostshard_Stone",
      "description": "Consume 20 Resolve to infuse your Sidearm with Frost."
    },
    {
      "id": "tar-51",
      "name": "Monarch’s Vestige",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 51,
      "category": "Infusions",
      "nearestBeacon": "Abbey Entrance",
      "steps": [
        "In the beacon, take the path behind the houses and defeat the coffin enemy for Strange Village Key",
        "unlock the door in the central area, drop down, and defeat Bor, the Deluded Monarch"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-02"
      ],
      "nearestBeaconId": "beacon-16",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Monarch%27s_Vestige",
      "description": "Consume 20 Resolve to infuse your Sidearm with Phantom."
    },
    {
      "id": "tar-52",
      "name": "Accursed Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 52,
      "category": "Infusions",
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "Drop to the lower level inside the beacon",
        "press the wall button, return to the opened upper gate, and loot the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Accursed_Stone",
      "description": "Consume 20 Resolve to infuse your Sidearm with Curse. Curse is inflicted on Critical Hits only."
    },
    {
      "id": "tar-53",
      "name": "Weeping Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 53,
      "category": "Infusions",
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "Set the world to night",
        "visit the Collector directly south of the beacon and pay 1,500 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17",
      "levelEffects": [
        "Infusion lasts for 4 shots",
        "Infusion lasts for 8 shots",
        "Infusion is permanent"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Weeping_Stone",
      "description": "Consume 20 Resolve to infuse your Sidearm with Trauma."
    },
    {
      "id": "tar-54",
      "name": "Acolyte’s Stone",
      "kind": "tarstone",
      "region": "Marrow Keep",
      "scope": "base",
      "order": 54,
      "category": "Abilities",
      "nearestBeacon": "Marrow Keep",
      "steps": [
        "Buy the stone from Merrick for 2,000 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-01",
      "levelEffects": [
        "The charged attack has 15% Critical Chance",
        "The charged attack deals 150% Critical Damage",
        "Resolve cost reduced to 30"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Acolyte%27s_Stone",
      "description": "Consume 40 Resolve to perform a charged Light Attack."
    },
    {
      "id": "tar-55",
      "name": "Unwieldly Stone",
      "kind": "tarstone",
      "region": "Marrow Keep",
      "scope": "base",
      "order": 55,
      "category": "Abilities",
      "nearestBeacon": "Marrow Keep",
      "steps": [
        "Buy the stone from Merrick for 2,000 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-01",
      "levelEffects": [
        "The charged attack restores 10 Health on a critically hit.",
        "The charged attack restores 20 Health on a critically hit.",
        "The charged attack restores 40 Health on a critically hit."
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Unwieldly_Stone",
      "description": "Consume 35 Resolve to perform a charged Heavy Attack."
    },
    {
      "id": "tar-56",
      "name": "Magdalena’s Memento",
      "kind": "tarstone",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 56,
      "category": "Abilities",
      "nearestBeacon": "Seeping Mire",
      "steps": [
        "Reach Magdalena at the end of Glutted Mire and defeat her"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-15"
      ],
      "nearestBeaconId": "beacon-21",
      "levelEffects": [
        "Each strike inflicts 2 Weak stacks",
        "Each strike has 15% Critical Chance Each strike deals 1× Critical Damage",
        "Each strike deals 100% Critical Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Magdalena%27s_Memento",
      "description": "Consume 100 Resolve to rise into the air and unleash a flurry of ruthless strikes."
    },
    {
      "id": "tar-57",
      "name": "Captive’s Scabstone",
      "kind": "tarstone",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 57,
      "category": "Abilities",
      "nearestBeacon": "Slumwater Drain",
      "steps": [
        "Reach the Nameless Captive at the end of Prisoners' Domain and defeat it"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-17"
      ],
      "nearestBeaconId": "beacon-26",
      "levelEffects": [
        "Each strike deals 3 damage",
        "Each strike deals 250 Stagger Damage",
        "Resolve cost reduced to 75"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Captive%27s_Scabstone",
      "description": "Consume 100 Resolve to swing your Weapon in a violent arc, striking nearby foes."
    },
    {
      "id": "tar-58",
      "name": "Conqueror’s Reward",
      "kind": "tarstone",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 58,
      "category": "Abilities",
      "nearestBeacon": "Ovate's Chamber",
      "steps": [
        "Reach Droeg at the end of Conquered Temple and defeat him"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-05"
      ],
      "nearestBeaconId": "beacon-31",
      "levelEffects": [
        "Each strike deals 2 damage",
        "The attack delivers 4 additional strikes",
        "Resolve cost reduced to 75"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Conqueror%27s_Reward",
      "description": "Consume 100 Resolve to drive your Weapon forward in a series of swift, piercing thrusts."
    },
    {
      "id": "tar-59",
      "name": "Infused Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 59,
      "category": "Abilities",
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "Set the world to night",
        "buy the stone from the Collector south of the beacon for 1,500 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17",
      "levelEffects": [
        "Each strike inflicts 3 Perforation stacks",
        "The thrown weapon strikes up to 4 targets",
        "Each strike inflicts 150% damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Infused_Stone",
      "description": "Consume 70 Resolve to throw your Weapon through multiple targets before it returns."
    },
    {
      "id": "tar-60",
      "name": "Shrike Stone",
      "kind": "tarstone",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 60,
      "category": "Abilities",
      "nearestBeacon": "Seeping Mire",
      "steps": [
        "Enter the next swamp but take the right-hand descent instead of the left bridge",
        "cross the long rope bridge past the exploding enemies and two giant eels",
        "open the chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-21",
      "levelEffects": [
        "The attack triggers a shockwave upon landing that deals 150 splash damage",
        "Resolve cost reduced to 50",
        "The attack deals 25 Break Damage to nearby foes upon landing"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Shrike_Stone",
      "description": "Consume 70 Resolve to leap high and plunge your Weapon into the ground."
    },
    {
      "id": "tar-61",
      "name": "Colossus Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 61,
      "category": "Abilities",
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "Head northeast to the white map area's far corner",
        "open the chest beside the Bone Gate"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-19",
      "levelEffects": [
        "Each shockwave deals 30 splash damage",
        "Each shockwave covers a wider area",
        "Each shockwave deals 80 splash damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Colossus_Stone",
      "description": "Consume 80 Resolve to thrust your Weapon into the ground and send out shockwaves."
    },
    {
      "id": "tar-62",
      "name": "Lost Clotstone",
      "kind": "tarstone",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 62,
      "category": "Abilities",
      "nearestBeacon": "Sanguine Shoreline",
      "steps": [
        "Finish the Sanguine Caverns route and defeat the Lost Child"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-34"
      ],
      "nearestBeaconId": "beacon-29",
      "levelEffects": [
        "The thrown weapon deals 200 splash damage on impact",
        "The thrown weapon deals 3 damage to the struck target",
        "Resolve cost reduced to 40"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Lost_Clotstone",
      "description": "Consume 60 Resolve to spin and release your Weapon with brutal force."
    },
    {
      "id": "tar-63",
      "name": "Scholar’s Wormstone",
      "kind": "tarstone",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 63,
      "category": "Abilities",
      "nearestBeacon": "Citadel Atrium",
      "steps": [
        "Continue through Faded Citadel and defeat Sir Isaac, the Scholar-Prince"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-13"
      ],
      "nearestBeaconId": "beacon-35",
      "levelEffects": [
        "Each chainsaw spin deals 12% of the weapon base damage",
        "Each chainsaw spin deals 15 Stagger Damage",
        "Each chainsaw spin deals 20% of the weapon base damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Scholar%27s_Wormstone",
      "description": "Consume Resolve over time to set the chainsaw in motion, augmenting your attacks."
    },
    {
      "id": "tar-64",
      "name": "Clockwork Shardstone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 64,
      "category": "Abilities",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "First pick up the Makeshift Projectile south of Outskirts of Mammon and fire it from the nearby catapult",
        "return to Castigator's Keep, drop to the southwest scaffolds, and enter Alchemist's Workshop",
        "solve its hidden wall and lift route and loot the final chest"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-ms2db-levels"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15",
      "levelEffects": [
        "Each chainsaw spin deals 12% of the weapon base damage",
        "Each chainsaw spin deals 15 Stagger Damage",
        "Each chainsaw spin deals 20% of the weapon base damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Clockwork_Shardstone",
      "description": "Consume Resolve over time to hold your Weapon forward with its chainsaw spinning at full speed."
    },
    {
      "id": "tar-65",
      "name": "Hexapod Core",
      "kind": "tarstone",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 65,
      "category": "Abilities",
      "nearestBeacon": "Ossinite Falls",
      "steps": [
        "Advance through Withered Shoals and defeat Hexapod"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-11"
      ],
      "nearestBeaconId": "beacon-38",
      "levelEffects": [
        "Each strike grants 3 Warp stacks",
        "Each strike inflicts 2 Fragile stacks",
        "Resolve cost increased to 80, but the ability continues with another barrage of ruthless dual-blade strikes"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Hexapod_Core",
      "description": "Consume 60 Resolve to carve through enemies with a rapid succession of strikes."
    },
    {
      "id": "tar-66",
      "name": "Solnir Shard",
      "kind": "tarstone",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 66,
      "category": "Abilities",
      "nearestBeacon": "Citadel Annex",
      "steps": [
        "After the beacon, reach and defeat Solnir, the Gloom Seeker"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-25"
      ],
      "nearestBeaconId": "beacon-34",
      "levelEffects": [
        "The heavy round deals 70 splash damage in a small range",
        "The heavy round deals 120 splash damage in a small range",
        "The heavy round bursts into a wider explosion"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Solnir_Shard",
      "description": "Consume 25 Resolve to launch a heavy round in a parabolic arc that bursts on impact."
    },
    {
      "id": "tar-67",
      "name": "Confessor’s Keepsake",
      "kind": "tarstone",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 67,
      "category": "Abilities",
      "nearestBeacon": "Slumwater Drain",
      "steps": [
        "Continue through Prisoners' Domain toward the boss path",
        "defeat Tishina's Confessor"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-38"
      ],
      "nearestBeaconId": "beacon-26",
      "levelEffects": [
        "The charged shot deals 200% damage",
        "The charged shot deals 300% damage",
        "The charged shot deals 350% damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Confessor%27s_Keepsake",
      "description": "Consume 60 Resolve to charge your Sidearm and fire a devastating shot."
    },
    {
      "id": "tar-68",
      "name": "Fusillade Stone",
      "kind": "tarstone",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 68,
      "category": "Abilities",
      "nearestBeacon": "Winterglass Lake",
      "steps": [
        "Complete the beacon route and defeat Caged Grisha at its end"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-03"
      ],
      "nearestBeaconId": "beacon-32",
      "levelEffects": [
        "Each shot has 20% Critical Chance",
        "Each shot has 35% Critical Chance",
        "Each shot deals 100% Critical Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Fusillade_Stone",
      "description": "At 80 Resolve or higher, unleash a flurry of consecutive shots."
    },
    {
      "id": "tar-69",
      "name": "Barrage Stone",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 69,
      "category": "Abilities",
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "Go southeast to the Trial and complete it"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-09",
      "levelEffects": [
        "The heavy round detonates 2 times, each explosive projectile deals 4× splash damage",
        "The heavy round detonates 2 times, each explosive projectile deals 8 splash damage",
        "The heavy round detonates 3 times, each explosive projectile deals 8 splash damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Barrage_Stone",
      "description": "Consume 40 Resolve to launch a heavy round that detonates above the target and scatters explosive projectiles."
    },
    {
      "id": "tar-70",
      "name": "Tarred Fragment",
      "kind": "tarstone",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 70,
      "category": "Abilities",
      "nearestBeacon": "Sanguine Shoreline",
      "steps": [
        "Continue past the beacon through Sanguine Caverns and defeat Tarblighted Stoner"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-32"
      ],
      "nearestBeaconId": "beacon-29",
      "levelEffects": [
        "The tethered projectiles spin at 6s",
        "The tethered projectiles spin at 8s",
        "The tethered projectiles spin at 10s and deals more frequently damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Tarred_Fragment",
      "description": "Consume 50 Resolve to fire multiple tethered projectiles spinning at high speed."
    },
    {
      "id": "tar-71",
      "name": "Fulminant Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 71,
      "category": "Abilities",
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "Set the world to night",
        "buy the stone from the Collector south of the beacon for 1,500 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17",
      "levelEffects": [
        "The heavy-caliber shot triggers 3 explosions around the target",
        "The heavy-caliber shot triggers 5 explosions around the target",
        "Each explosion deal 20 Break Damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Fulminant_Stone",
      "description": "Consume 60 Resolve to fire a heavy-caliber round that triggers multiple explosions around the target."
    },
    {
      "id": "tar-72",
      "name": "Strange Remnant",
      "kind": "tarstone",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 72,
      "category": "Abilities",
      "nearestBeacon": "Ossinite Falls",
      "steps": [
        "From the Withered Shoals entry, keep right to the Bone Gate",
        "launch to the island and defeat Strange Grisha"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-27"
      ],
      "nearestBeaconId": "beacon-38",
      "levelEffects": [
        "Chaining projectiles deal 20 damage",
        "Projectiles chain between up to 4 targets",
        "Chaining projectiles deal 40 damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Strange_Remnant",
      "description": "Consume 15 Resolve to unleash a stream of projectiles that chain between targets."
    },
    {
      "id": "tar-73",
      "name": "Infested Stone",
      "kind": "tarstone",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 73,
      "category": "Abilities",
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "Set the world to night",
        "buy the stone from the Collector south of the beacon for 1,500 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17",
      "levelEffects": [
        "The clinging projectile deals 100 damage upon exploding",
        "The clinging projectile draws the aggression of all nearby enemies",
        "The clinging projectile scatters 3 other clinging projectiles upon exploding"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Infested_Stone",
      "description": "Consume 60 Resolve to fire a clinging projectile that explodes after a short delay."
    },
    {
      "id": "tar-74",
      "name": "Summoning Stone",
      "kind": "tarstone",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 74,
      "category": "Abilities",
      "nearestBeacon": "Citadel Annex",
      "steps": [
        "In Faded Citadel, pass the second group protected by invulnerability fire",
        "climb the torchlit tunnel stairs and open the chest at the top"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-34",
      "levelEffects": [
        "The summoned foe attacks 2 times before vanishing",
        "The summoned foe attacks 5 times before vanishing",
        "Summon 2 foes instead of one"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Summoning_Stone",
      "description": "Consume 70 Resolve to summon the last slain foe to fight for you."
    },
    {
      "id": "tar-75",
      "name": "Hand of Rock",
      "kind": "tarstone",
      "region": "Fainweald",
      "scope": "base",
      "order": 75,
      "category": "Abilities",
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "Enter the tavern southeast of the beacon",
        "choose Order Drink with the keeper and buy the stone for 1,500 Coin"
      ],
      "requirement": "",
      "sources": [
        "tarstone-list",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-11",
      "levelEffects": [
        "Each projectile deals 10 damage",
        "Each projectile deals 5 Break Damage",
        "Firing rate is increased by 70%"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Hand_of_Rock",
      "description": "Consume 80 Resolve to unleash a swarm of homing projectiles."
    },
    {
      "id": "tar-ra-guitarstone",
      "name": "Guitarstone",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Fainweald",
      "order": 76,
      "category": "Support",
      "nearestBeacon": "One Legged Wolf",
      "nearestBeaconId": "beacon-11",
      "steps": [
        "Reward in Troubadour's Reprise. Follow the linked dungeon route."
      ],
      "requirement": "Night Mode and Troubadour's Lute",
      "sources": [
        "rotten-dungeons",
        "tarstone-effects",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-01"
      ],
      "fixedEffect": "Unlocks one guitar melody for the lute, with another at each upgrade.",
      "levelEffects": [
        "Unlocks melodies 1, 2 and 3",
        "Unlocks melodies 4, 5 and 6",
        "Unlocks melodies 7, 8 and 9"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Guitarstone",
      "description": "Compatible only with the Troubadour's Lute, which unlocks additional tracks."
    },
    {
      "id": "tar-ra-mourning-bell",
      "name": "Mourning Bell",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Fainweald",
      "order": 77,
      "category": "Support",
      "nearestBeacon": "Gloomshade Grove",
      "nearestBeaconId": "beacon-09",
      "steps": [
        "Reward in Obscured Market. Follow the linked dungeon route."
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "tarstone-effects",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-03"
      ],
      "fixedEffect": "During Night Mode, deal increased melee poise damage while melee attacks are 15% slower; both effects are dormant by day.",
      "levelEffects": [
        "Melee attacks deal 140% Stagger Damage but are 15% slower",
        "Melee attacks deal 160% Stagger Damage but are 15% slower",
        "Melee attacks deal 180% Stagger Damage but are 15% slower"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Mourning_Bell",
      "description": "Increases melee Stagger Damage at night, but slows attack speed."
    },
    {
      "id": "tar-ra-widowmoon-stone",
      "name": "Widowmoon Stone",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Fainweald",
      "order": 78,
      "category": "Combat",
      "nearestBeacon": "Outskirts of Nochte",
      "nearestBeaconId": "beacon-06",
      "steps": [
        "Reward in Shrouded Mire. Follow the linked dungeon route."
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-04"
      ],
      "levelEffects": [
        "Attacks deal 125% damage but you take 25% more damage",
        "Attacks deal 135% damage but you take 25% more damage",
        "Attacks deal 145% damage but you take 25% more damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Widowmoon_Stone",
      "description": "Increases melee attack damage at night, but you take increased damage when struck."
    },
    {
      "id": "tar-ra-waning-stone",
      "name": "Waning Stone",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Ruins of Mammon",
      "order": 79,
      "category": "Combat",
      "nearestBeacon": "Gate of Mammon",
      "nearestBeaconId": "beacon-18",
      "steps": [
        "Reward in Ankle's Bane. Follow the linked dungeon route."
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-07"
      ],
      "levelEffects": [
        "Resolve cost reduced by 30% but damage reduced by 40%",
        "Resolve cost reduced by 40% but damage reduced by 40%",
        "Resolve cost reduced by 50% but damage reduced by 40%"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Waning_Stone",
      "description": "Reduces Resolve consumption for Sidearm attacks, but also reduces their damage."
    },
    {
      "id": "tar-ra-black-lantern",
      "name": "Black Lantern",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Ruins of Mammon",
      "order": 80,
      "category": "Support",
      "nearestBeacon": "Gate of Mammon",
      "nearestBeaconId": "beacon-18",
      "steps": [
        "Reward in Veiled Tower. Follow the linked dungeon route."
      ],
      "requirement": "Night",
      "sources": [
        "rotten-dungeons",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-08"
      ],
      "levelEffects": [
        "After a parry, perfect guard, or perfect harden, the next melee hit restores 10% of maximum health.",
        "After a parry, perfect guard, or perfect harden, the next melee hit restores 20% of maximum health.",
        "After a parry, perfect guard, or perfect harden, the next melee hit restores 30% of maximum health."
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Black_Lantern",
      "description": "Blocks Mether's Pulse. Blocking, Perfect Guard, Parry, or Perfect Harden empowers your next attack."
    },
    {
      "id": "tar-ra-channelers-stone",
      "name": "Channeler's Stone",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Ruins of Mammon",
      "order": 81,
      "category": "Support",
      "nearestBeacon": "The Silent Steps",
      "nearestBeaconId": "beacon-19",
      "steps": [
        "Reward in Buried Library. Follow the linked dungeon route."
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "tarstone-effects",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-10"
      ],
      "fixedEffect": "Regenerate additional Resolve while aiming a sidearm. Regeneration continues while firing.",
      "levelEffects": [
        "Regenerates Resolve proportional to 50% damage over 5s",
        "Regenerates Resolve proportional to 60% damage over 5s",
        "Regenerates Resolve proportional to 80% damage over 5s"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Channeler%27s_Stone",
      "description": "Lets you regenerate Resolve in proportion to the damage dealt to enemies with a Sidearm."
    },
    {
      "id": "tar-ra-starless-eye",
      "name": "Starless Eye",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Ruins of Mammon",
      "order": 82,
      "category": "Combat",
      "nearestBeacon": "The Silent Steps",
      "nearestBeaconId": "beacon-19",
      "steps": [
        "Reward in Secret Alcove. Follow the linked dungeon route."
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "tarstone-gamerguides"
      ],
      "aliases": [
        "Starless Eye Stone"
      ],
      "relatedIds": [
        "dungeon-11"
      ],
      "levelEffects": [
        "Damage increased 30% but Resolve cost increased by 40%",
        "Damage increased 45% but Resolve cost increased by 40%",
        "Damage increased 60% but Resolve cost increased by 40%"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Starless_Eye",
      "description": "At night, increases Sidearm damage at the cost of increased Resolve consumption."
    },
    {
      "id": "tar-ra-black-fleece",
      "name": "Black Fleece",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Glutted Mire",
      "order": 83,
      "category": "Support",
      "nearestBeacon": "Sunken Village",
      "nearestBeaconId": "beacon-22",
      "steps": [
        "Reward in Not The Sheep. Follow the linked dungeon route."
      ],
      "requirement": "Sheephead Totem",
      "sources": [
        "rotten-dungeons",
        "tarstone-effects",
        "tarstone-gamerguides"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-14"
      ],
      "fixedEffect": "Consume 40 Resolve in sheep form to become the black sheep, unleash a halberd assault, and remain invulnerable during it.",
      "levelEffects": [
        "Each Halberd strike deals 180 damage",
        "Each Halberd strike deals 225 damage",
        "Each Halberd strike deals 270 damage"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Black_Fleece",
      "description": "Transforms you into a black sheep that can attack with a halberd."
    },
    {
      "id": "tar-ra-bloodoath-stone",
      "name": "Bloodoath Stone",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Prisoners’ Domain",
      "order": 84,
      "category": "Combat",
      "nearestBeacon": "Hangman's Scaffold",
      "nearestBeaconId": "beacon-24",
      "steps": [
        "Reward in Neglected Ward. Follow the linked dungeon route."
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "tarstone-community-levels"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-15"
      ],
      "levelEffects": [
        "Weapon attacks are 10% faster and deal 120% Stagger Damage; you take 20% more damage when struck",
        "Weapon attacks are 15% faster and deal 130% Stagger Damage; you take 20% more damage when struck",
        "Weapon attacks are 20% faster and deal 140% Stagger Damage; you take 20% more damage when struck"
      ],
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Bloodoath_Stone",
      "description": "Makes weapon attacks faster and increases Stagger damage, but you take increased damage when struck."
    },
    {
      "id": "tar-ra-knowledge-stone",
      "name": "Knowledge Stone",
      "kind": "tarstone",
      "scope": "rotten-autumn",
      "region": "Unspecified",
      "order": 85,
      "category": "Support",
      "steps": [
        "Found in The Forgotten Tower."
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "tarstone-effects"
      ],
      "aliases": [],
      "relatedIds": [],
      "fixedEffect": "While continuously locked on to the same enemy, deal 5% more damage per second, up to 25%; changing or losing lock-on resets it.",
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Knowledge_Stone",
      "description": "Its passive grants increased damage while locked onto the same enemy; its Break and Durability effects are dormant."
    },
    {
      "id": "tar-glimpse-stone",
      "name": "Glimpse Stone",
      "kind": "tarstone",
      "scope": "base",
      "region": "Marrow Keep",
      "order": 86,
      "category": "Support",
      "nearestBeacon": "Marrow Keep",
      "nearestBeaconId": "beacon-01",
      "steps": [
        "Travel to Marrow Keep and speak with Merrick.",
        "Open the Tarstones tab in his shop and purchase a Glimpse Stone for 250 Coins.",
        "If it is not stocked yet, return as you progress through the story and defeat bosses."
      ],
      "requirement": "250 Coins; Merrick's shop stock expands with progression.",
      "sources": [
        "glimpse-stone-route",
        "tarstone-effects"
      ],
      "aliases": [
        "Glimpse Tarstone"
      ],
      "relatedIds": [],
      "fixedEffect": "After 20 defeated enemies consume its durability, the stone breaks and grants 3 Glimpses.",
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Glimpse_Stone",
      "description": "Wears down as you defeat enemies, then breaks into Glimpses."
    },
    {
      "id": "tar-egons-stone",
      "name": "Egon's Stone",
      "kind": "tarstone",
      "scope": "base",
      "region": "Marrow Keep",
      "order": 87,
      "category": "Support",
      "nearestBeacon": "Marrow Keep",
      "nearestBeaconId": "beacon-01",
      "steps": [
        "Travel to Marrow Keep and speak with Merrick.",
        "Open the Tarstones tab in his shop and purchase Egon's Stone for 500 Coins.",
        "If it is not stocked yet, return as you progress through the story and defeat bosses."
      ],
      "requirement": "500 Coins; Merrick's shop stock expands with progression.",
      "sources": [
        "egon-stone-route",
        "tarstone-effects"
      ],
      "aliases": [
        "Egon Stone"
      ],
      "relatedIds": [],
      "fixedEffect": "Upon death inside a Dungeon, revive at its entrance and prevent Gloom loss for that death. Durability decreases on activation.",
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Egon%27s_Stone",
      "description": "Revives you at the entrance of a dungeon when you die there; when it breaks, it prevents Gloom loss for that death."
    },
    {
      "id": "tar-ra-wellspring-stone",
      "name": "Wellspring Stone",
      "kind": "tarstone",
      "availabilityWarning": "NOT FOUND BY PLAYERS · POSSIBLY BUGGED",
      "scope": "rotten-autumn",
      "region": "Unspecified",
      "order": 88,
      "category": "Unknown",
      "steps": [
        "No acquisition route is documented yet. This entry tracks Wellspring Stone, which continuously regenerates Resolve."
      ],
      "requirement": "",
      "sources": [
        "tarstone-effects",
        "rotten-missing-stones"
      ],
      "aliases": [],
      "relatedIds": [],
      "fixedEffect": "Continuously regenerate Resolve, even when empty.",
      "descriptionSource": "https://mortalshell2.wiki.fextralife.com/Wellspring_Stone",
      "description": "Lets you regenerate Resolve after damaging an enemy. Subsequent levels increase the duration of this effect."
    },
    {
      "id": "tar-ra-forsaken-vow",
      "name": "Forsaken Vow",
      "kind": "tarstone",
      "availabilityWarning": "NOT FOUND BY PLAYERS · POSSIBLY BUGGED",
      "scope": "rotten-autumn",
      "region": "Unspecified",
      "order": 89,
      "category": "Unknown",
      "steps": [
        "No acquisition route is documented yet. This entry tracks Forsaken Vow, which increases melee damage during Night Mode while disabling your sidearm and Shell ability."
      ],
      "requirement": "",
      "sources": [
        "tarstone-effects",
        "rotten-missing-stones"
      ],
      "aliases": [
        "Forsaken Vow Stone"
      ],
      "relatedIds": [],
      "levelEffects": [
        "During Night Mode, gain 50% bonus melee attack damage; sidearm and shell ability remain disabled.",
        "During Night Mode, gain 75% bonus melee attack damage; sidearm and shell ability remain disabled.",
        "During Night Mode, gain 100% bonus melee attack damage; sidearm and shell ability remain disabled."
      ],
      "description": "During Night Mode, increases melee attack damage while disabling Sidearm use and Shell abilities."
    }
  ],
  "beacons": [
    {
      "id": "beacon-01",
      "name": "Marrow Keep",
      "kind": "beacon",
      "region": "Marrow Keep",
      "scope": "base",
      "order": 1,
      "subtype": "standard",
      "steps": [
        "Finish the prologue and enter Marrow Keep, the central hub"
      ],
      "requirement": "Already active",
      "alreadyCleansed": true,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-54",
        "tar-55"
      ]
    },
    {
      "id": "beacon-02",
      "name": "Stonebled Gate",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 2,
      "subtype": "standard",
      "steps": [
        "Follow the blood trail into the cave before the Sanguine Caverns gate",
        "the beacon is inside"
      ],
      "requirement": "Clear its Hidden Keep route to cleanse",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-38",
        "boss-14"
      ]
    },
    {
      "id": "beacon-03",
      "name": "Mushroom Village Gate",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 3,
      "subtype": "standard",
      "steps": [
        "Travel east beyond Mushroom Village toward the Glutted Mire gate",
        "activate the beacon before the gate"
      ],
      "requirement": "Clear Hall of Illusions",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-06",
        "tar-36",
        "boss-45"
      ]
    },
    {
      "id": "beacon-04",
      "name": "Nochtean Gate",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 4,
      "subtype": "standard",
      "steps": [
        "Cross the Ruins of Nochte to the gate leading toward Prisoners' Domain",
        "activate the beacon at the far end"
      ],
      "requirement": "Clear Abandoned Shrine",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-16",
        "tar-39",
        "boss-44",
        "dungeon-05"
      ]
    },
    {
      "id": "beacon-05",
      "name": "Mushroom Village",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 5,
      "subtype": "standard",
      "steps": [
        "Enter Mushroom Village and locate the large bonfire and enemy group",
        "the beacon is nearby"
      ],
      "requirement": "Clear Passenger's Shrine",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-45",
        "tar-47",
        "boss-21"
      ]
    },
    {
      "id": "beacon-06",
      "name": "Outskirts of Nochte",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 6,
      "subtype": "standard",
      "steps": [
        "Take Hag's Path south of the Citadel of Penance",
        "find the beacon in the middle of the path"
      ],
      "requirement": "Clear Infested Den",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-46",
        "ghost-02",
        "dungeon-04",
        "tar-ra-widowmoon-stone"
      ]
    },
    {
      "id": "beacon-07",
      "name": "Blackridge Pass",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 7,
      "subtype": "standard",
      "steps": [
        "Travel north from Widow's Overlook, staying south of Flooded Village",
        "use the beacon at the pass"
      ],
      "requirement": "Clear Mustworn Tomb",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-12",
        "tar-13",
        "tar-28",
        "boss-10",
        "boss-19"
      ]
    },
    {
      "id": "beacon-08",
      "name": "Widow’s Overlook",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 8,
      "subtype": "standard",
      "steps": [
        "From Marrow Keep, use the Fainweald route to the overlook beacon"
      ],
      "requirement": "Already active",
      "alreadyCleansed": true,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-01",
        "tar-11",
        "tar-14",
        "tar-18",
        "tar-37",
        "boss-09"
      ]
    },
    {
      "id": "beacon-09",
      "name": "Gloomshade Grove",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 9,
      "subtype": "standard",
      "steps": [
        "Follow the cliff route east of Citadel of Penance to the grove beacon"
      ],
      "requirement": "Cleanse its interior route",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-25",
        "tar-69",
        "ghost-01",
        "boss-01",
        "dungeon-02",
        "dungeon-03",
        "tar-ra-mourning-bell"
      ]
    },
    {
      "id": "beacon-10",
      "name": "Citadel of Penance",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 10,
      "subtype": "standard",
      "steps": [
        "Climb to the upper floors of the citadel",
        "the ruins north of One Legged Wolf provide a teleport shortcut"
      ],
      "requirement": "Cleanse its interior route",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-10",
        "tar-15",
        "boss-37"
      ]
    },
    {
      "id": "beacon-11",
      "name": "One Legged Wolf",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "base",
      "order": 11,
      "subtype": "standard",
      "steps": [
        "From Mushroom Village Gate head north past the corrupted statue",
        "continue to the tavern beacon"
      ],
      "requirement": "Mether's Breath is needed to open the route",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-05",
        "tar-75",
        "dungeon-01",
        "tar-ra-guitarstone"
      ]
    },
    {
      "id": "beacon-12",
      "name": "Outskirts of Mammon",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 12,
      "subtype": "standard",
      "steps": [
        "From Marrow Keep, take the Ruins of Mammon exit and activate the outskirts beacon"
      ],
      "requirement": "Already active",
      "alreadyCleansed": true,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-02",
        "tar-04",
        "tar-17",
        "tar-24",
        "boss-20"
      ]
    },
    {
      "id": "beacon-13",
      "name": "Sester’s Gate",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 13,
      "subtype": "standard",
      "steps": [
        "Pass Abbey Entrance into Sester's Refuge",
        "follow the main corridor and climb its stairs"
      ],
      "requirement": "Clear Sester's Bastion",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-03",
        "ghost-04",
        "boss-28",
        "boss-39",
        "dungeon-12",
        "dungeon-13"
      ]
    },
    {
      "id": "beacon-14",
      "name": "Gate of Infinity",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 14,
      "subtype": "standard",
      "steps": [
        "From Ruk's Map of Mammon position, climb straight up the stairs and follow the route to the beacon"
      ],
      "requirement": "Cleanse its interior route",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-19",
        "tar-41",
        "boss-08",
        "dungeon-09"
      ]
    },
    {
      "id": "beacon-15",
      "name": "Castigator’s Keep",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 15,
      "subtype": "standard",
      "steps": [
        "At the keep entrance turn right and climb the stone staircase to the upper ruins"
      ],
      "requirement": "Clear Viletongue's Domain",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-29",
        "tar-35",
        "tar-48",
        "tar-49",
        "tar-64",
        "boss-26",
        "boss-29",
        "boss-43"
      ]
    },
    {
      "id": "beacon-16",
      "name": "Abbey Entrance",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 16,
      "subtype": "standard",
      "steps": [
        "Continue beyond Outskirts of Mammon",
        "cross the Bone Gate and thread through the ruins"
      ],
      "requirement": "Clear Kingdom of Fools",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-23",
        "tar-42",
        "tar-51",
        "boss-02"
      ]
    },
    {
      "id": "beacon-17",
      "name": "Abandoned Outpost",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 17,
      "subtype": "standard",
      "steps": [
        "Cross from Outskirts of Mammon toward Deserted Slums",
        "locate the beacon south of the connecting Bone Gate"
      ],
      "requirement": "Clear Big Ol' Hole",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-09",
        "tar-52",
        "tar-53",
        "tar-59",
        "tar-71",
        "tar-73"
      ]
    },
    {
      "id": "beacon-18",
      "name": "Gate of Mammon",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 18,
      "subtype": "standard",
      "steps": [
        "From High Lord's Courtyard travel southwest and cross its Bone Gate to the map's southwest tip"
      ],
      "requirement": "Clear Burrowkin Dwelling",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-44",
        "boss-12",
        "dungeon-07",
        "dungeon-08",
        "tar-ra-waning-stone",
        "tar-ra-black-lantern"
      ]
    },
    {
      "id": "beacon-19",
      "name": "The Silent Steps",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 19,
      "subtype": "standard",
      "steps": [
        "After Sariel's arena, turn right at the large statue and use the Bone Gate"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-61",
        "ghost-03",
        "boss-22",
        "dungeon-10",
        "dungeon-11",
        "tar-ra-channelers-stone",
        "tar-ra-starless-eye"
      ]
    },
    {
      "id": "beacon-20",
      "name": "High Lord’s Courtyard",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 20,
      "subtype": "standard",
      "steps": [
        "Travel southwest from Abandoned Outpost to the courtyard near its Map Fragment"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-21",
        "boss-42",
        "dungeon-06"
      ]
    },
    {
      "id": "beacon-21",
      "name": "Seeping Mire",
      "kind": "beacon",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 21,
      "subtype": "standard",
      "steps": [
        "Enter the Glutted Mire beyond Mushroom Village Gate",
        "follow the swamp route to the first beacon"
      ],
      "requirement": "Clear Rootwater Hollow",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-08",
        "tar-56",
        "tar-60",
        "boss-04"
      ]
    },
    {
      "id": "beacon-22",
      "name": "Sunken Village",
      "kind": "beacon",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 22,
      "subtype": "standard",
      "steps": [
        "Continue through Glutted Mire to the village beacon"
      ],
      "requirement": "Clear Wortbriar Encampment",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-32",
        "boss-15",
        "boss-36",
        "dungeon-14",
        "tar-ra-black-fleece"
      ]
    },
    {
      "id": "beacon-23",
      "name": "Magdalena’s Glade",
      "kind": "beacon",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 23,
      "subtype": "standard",
      "steps": [
        "Defeat Magdalena in Glutted Mire",
        "enter the beacon that emerges in her arena"
      ],
      "requirement": "Magdalena must be defeated",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-24",
      "name": "Hangman’s Scaffold",
      "kind": "beacon",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 24,
      "subtype": "standard",
      "steps": [
        "In the Prisoners' Domain courtyard, shoot the gas pots to topple the statue",
        "use it as a ramp to the walls, then follow the archway"
      ],
      "requirement": "Clear Gloomstricken Garrison",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-06",
        "dungeon-15",
        "tar-ra-bloodoath-stone"
      ]
    },
    {
      "id": "beacon-25",
      "name": "Executioner’s Pulpit",
      "kind": "beacon",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 25,
      "subtype": "standard",
      "steps": [
        "From Hangman's Scaffold take the wooden stairs and bridges, then stone stairs",
        "pass the Resolve Stalk and drop at the end"
      ],
      "requirement": "Clear Central Sewers",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-33"
      ]
    },
    {
      "id": "beacon-26",
      "name": "Slumwater Drain",
      "kind": "beacon",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 26,
      "subtype": "standard",
      "steps": [
        "Inside the first Slumwater Drain room, turn right to the broken grate by the torch"
      ],
      "requirement": "Clear Central Sewers",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-27",
        "tar-30",
        "tar-57",
        "tar-67",
        "boss-17",
        "boss-38"
      ]
    },
    {
      "id": "beacon-27",
      "name": "Captive’s End",
      "kind": "beacon",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 27,
      "subtype": "standard",
      "steps": [
        "Defeat the Nameless Captive and enter the beacon that appears"
      ],
      "requirement": "Nameless Captive must be defeated",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-28",
      "name": "Pulsing Caves",
      "kind": "beacon",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 28,
      "subtype": "standard",
      "steps": [
        "Enter Sanguine Caverns and take the right branch at the fork, passing the Lithopods"
      ],
      "requirement": "Clear Mawbreak Cavern",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-07",
        "tar-31"
      ]
    },
    {
      "id": "beacon-29",
      "name": "Sanguine Shoreline",
      "kind": "beacon",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 29,
      "subtype": "standard",
      "steps": [
        "After crossing two bridges, take the left bridge into the large cave and follow it inward"
      ],
      "requirement": "Clear Hermit's Pass",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-62",
        "tar-70",
        "boss-32",
        "boss-34"
      ]
    },
    {
      "id": "beacon-30",
      "name": "Child’s Feeding Grounds",
      "kind": "beacon",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 30,
      "subtype": "standard",
      "steps": [
        "Defeat the Lost Child and enter the beacon that rises in the arena"
      ],
      "requirement": "Lost Child must be defeated",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-31",
      "name": "Ovate’s Chamber",
      "kind": "beacon",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 31,
      "subtype": "standard",
      "steps": [
        "After Urrig's encounter, use the jump pad, ascend the stairs, and ride the lift up"
      ],
      "requirement": "Clear Pilfered Crypt",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-58",
        "boss-05",
        "boss-40"
      ]
    },
    {
      "id": "beacon-32",
      "name": "Winterglass Lake",
      "kind": "beacon",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 32,
      "subtype": "standard",
      "steps": [
        "Leave the temple's multilevel structure and descend three flights of stairs"
      ],
      "requirement": "Clear Mornefrost Grave",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-26",
        "tar-40",
        "tar-68",
        "boss-03",
        "boss-41"
      ]
    },
    {
      "id": "beacon-33",
      "name": "Conqueror’s Hoard",
      "kind": "beacon",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 33,
      "subtype": "standard",
      "steps": [
        "Defeat Droeg",
        "enter the beacon that emerges in the arena"
      ],
      "requirement": "Droeg must be defeated",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-50"
      ]
    },
    {
      "id": "beacon-34",
      "name": "Citadel Annex",
      "kind": "beacon",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 34,
      "subtype": "standard",
      "steps": [
        "Climb the egg-filled cave and take the stairs beyond it to the balcony beacon"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-20",
        "tar-66",
        "tar-74",
        "boss-25"
      ]
    },
    {
      "id": "beacon-35",
      "name": "Citadel Atrium",
      "kind": "beacon",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 35,
      "subtype": "standard",
      "steps": [
        "From Solnir's arena ride the lift, cross by Bone Gate, turn left at the Canyon Crawler, and descend to the lower chamber"
      ],
      "requirement": "Cleanse its interior route",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-63",
        "boss-13",
        "boss-23"
      ]
    },
    {
      "id": "beacon-36",
      "name": "Scholar-Prince’s Chamber",
      "kind": "beacon",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 36,
      "subtype": "standard",
      "steps": [
        "Defeat Sir Isaac and activate the beacon in his chamber"
      ],
      "requirement": "Sir Isaac must be defeated",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-37",
      "name": "Nameless Pass",
      "kind": "beacon",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 37,
      "subtype": "standard",
      "steps": [
        "Follow the Withered Shoals route beyond the Cefatropod cave and take the rocky ramp shortcut"
      ],
      "requirement": "Clear Odious Crevice",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-34"
      ]
    },
    {
      "id": "beacon-38",
      "name": "Ossinite Falls",
      "kind": "beacon",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 38,
      "subtype": "standard",
      "steps": [
        "Pass the Grisha Hunter chamber and climb the rocky hill to the falls beacon"
      ],
      "requirement": "Clear Broodshell Nest",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-43",
        "tar-65",
        "tar-72",
        "boss-11",
        "boss-27"
      ]
    },
    {
      "id": "beacon-39",
      "name": "Hexapod’s Burrow",
      "kind": "beacon",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 39,
      "subtype": "standard",
      "steps": [
        "Search the mist within Hexapod's arena after the fight"
      ],
      "requirement": "Hexapod must be defeated",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-40",
      "name": "The Hidden Nave",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 40,
      "subtype": "standard",
      "steps": [
        "From Empty Cradle slip through the right-hand gap",
        "follow the path to the Root and sever it"
      ],
      "requirement": "Sever the Root",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-16"
      ]
    },
    {
      "id": "beacon-41",
      "name": "Receiving Hall",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 41,
      "subtype": "standard",
      "steps": [
        "From Chamber of the Forsaken use the Bone Gate just ahead"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-42",
      "name": "Faithful’s Shelter",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 42,
      "subtype": "standard",
      "steps": [
        "In the Unfound Path, pass the Enslaved Disciple guarding the shelter entrance"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-43",
      "name": "Brether’s Court",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 43,
      "subtype": "standard",
      "steps": [
        "From the Unfound Path entrance pass two Bone Gates, turn right, follow the Lithopod trail, then take the final Bone Gate to the egg-filled area"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-44",
      "name": "Obsidian Vault",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 44,
      "subtype": "standard",
      "steps": [
        "Follow the Unfound Path route until the Crimson Tar Growth is in view",
        "the beacon stands nearby"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-35"
      ]
    },
    {
      "id": "beacon-45",
      "name": "Bridge of Procession",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 45,
      "subtype": "standard",
      "steps": [
        "From the Unfound Path entrance pass two Bone Gates, turn right, take the Bone Gate before the Lithopods, and climb three flights past the Anointed Confessor"
      ],
      "requirement": "Activate the beacon",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": []
    },
    {
      "id": "beacon-46",
      "name": "Empty Cradle",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 46,
      "subtype": "standard",
      "steps": [
        "Continue through the Unfound Path to Orrem's arena",
        "the beacon stands beside it"
      ],
      "requirement": "Reach Orrem's arena",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-18"
      ]
    },
    {
      "id": "beacon-47",
      "name": "Chamber of the Forsaken",
      "kind": "beacon",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 47,
      "subtype": "standard",
      "steps": [
        "After severing the Root in the Monolith arena, turn left in the new area and pass its guards"
      ],
      "requirement": "Sever the Root",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-33",
        "boss-46"
      ]
    },
    {
      "id": "beacon-48",
      "name": "Disciple’s Grotto",
      "kind": "beacon",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 48,
      "subtype": "standard",
      "steps": [
        "In the prologue, follow the main path from Village Outskirts to the second beacon"
      ],
      "requirement": "Clear Derelict Hideout",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "boss-30",
        "boss-31"
      ]
    },
    {
      "id": "beacon-49",
      "name": "Village Outskirts",
      "kind": "beacon",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 49,
      "subtype": "standard",
      "steps": [
        "Follow the opening prologue route to its first beacon"
      ],
      "requirement": "Clear Overgrown Temple",
      "alreadyCleansed": false,
      "sources": [
        "beacon-list",
        "beacon-routes"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-22",
        "boss-07",
        "boss-24"
      ]
    },
    {
      "id": "ghost-01",
      "name": "Obscured Market Ghost Beacon",
      "legacyName": "Obscured Market",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 50,
      "subtype": "ghost",
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "West; via Citadel of Penance"
      ],
      "requirement": "Night Mode; interact with the Ghost Beacon.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-03"
      ],
      "nearestBeaconId": "beacon-09"
    },
    {
      "id": "ghost-02",
      "name": "Shrouded Mire Ghost Beacon",
      "legacyName": "Shrouded Mire",
      "kind": "beacon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 51,
      "subtype": "ghost",
      "nearestBeacon": "Outskirts of Nochte",
      "steps": [
        "Northeast; Hag's Path swamp"
      ],
      "requirement": "Night Mode; interact with the Ghost Beacon.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-04"
      ],
      "nearestBeaconId": "beacon-06"
    },
    {
      "id": "ghost-03",
      "name": "Secret Alcove Ghost Beacon",
      "legacyName": "Secret Alcove",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 52,
      "subtype": "ghost",
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "Southeast; statue path"
      ],
      "requirement": "Night Mode; interact with the Ghost Beacon.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-11"
      ],
      "nearestBeaconId": "beacon-19"
    },
    {
      "id": "ghost-04",
      "name": "Concealed Lookout Ghost Beacon",
      "legacyName": "Concealed Lookout",
      "kind": "beacon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 53,
      "subtype": "ghost",
      "nearestBeacon": "Sester's Gate",
      "steps": [
        "West; stone stairs"
      ],
      "requirement": "Night Mode; interact with the Ghost Beacon.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "dungeon-12"
      ],
      "nearestBeaconId": "beacon-13"
    }
  ],
  "bosses": [
    {
      "id": "boss-01",
      "name": "Bloodcursed Lithopod",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 100,
      "bossType": "optional",
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "Approach the grove and find the Bloodcursed Lithopod guarding the citadel lever"
      ],
      "requirement": "",
      "rewards": "Citadel Gate Lever, Coins, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-09"
    },
    {
      "id": "boss-02",
      "name": "Bor, the Deluded Monarch",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 101,
      "bossType": "optional",
      "nearestBeacon": "Abbey Entrance",
      "steps": [
        "Clear the beacon route, obtain Strange Village Key behind the houses, unlock the central door, and drop into Bor's chamber"
      ],
      "requirement": "",
      "rewards": "Glimpse, Monarch's Vestige, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-51"
      ],
      "nearestBeaconId": "beacon-16"
    },
    {
      "id": "boss-03",
      "name": "Caged Grisha",
      "kind": "boss",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 102,
      "bossType": "optional",
      "nearestBeacon": "Winterglass Lake",
      "steps": [
        "Finish Mornefrost Grave inside the lake beacon and confront Caged Grisha at its end"
      ],
      "requirement": "",
      "rewards": "Grisha Remnant, Fusillade Stone, Coin, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-68"
      ],
      "nearestBeaconId": "beacon-32"
    },
    {
      "id": "boss-04",
      "name": "Circle of the Grasping Root",
      "kind": "boss",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 103,
      "bossType": "optional",
      "nearestBeacon": "Seeping Mire",
      "steps": [
        "Enter Rootwater Hollow through the beacon and complete its route to the root arena"
      ],
      "requirement": "",
      "rewards": "Gloom, Coin",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-21"
    },
    {
      "id": "boss-05",
      "name": "Droeg, the Conquerer",
      "kind": "boss",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 5,
      "bossType": "main",
      "nearestBeacon": "Ovate's Chamber",
      "steps": [
        "Advance through Conquered Temple to Droeg's arena"
      ],
      "requirement": "",
      "rewards": "Conqueror's Reward, Gloom",
      "tip": "Frost resistance helps. Get behind the slow club swings and use arena cover against the tracking projectiles.",
      "sources": [
        "boss-roster",
        "boss-main"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-58"
      ],
      "nearestBeaconId": "beacon-31"
    },
    {
      "id": "boss-06",
      "name": "Gloombound Legion",
      "kind": "boss",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 105,
      "bossType": "optional",
      "nearestBeacon": "Hangman's Scaffold",
      "steps": [
        "Enter the beacon's Gloomstricken Garrison route and finish its group encounter"
      ],
      "requirement": "",
      "rewards": "Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-24"
    },
    {
      "id": "boss-07",
      "name": "Gloombound Ritualist",
      "kind": "boss",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 106,
      "bossType": "optional",
      "nearestBeacon": "Village Outskirts",
      "steps": [
        "Continue past the opening beacon and descend into the sunken ground"
      ],
      "requirement": "",
      "rewards": "Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-49"
    },
    {
      "id": "boss-08",
      "name": "Gloombound Wraith",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 107,
      "bossType": "optional",
      "nearestBeacon": "Gate of Infinity",
      "steps": [
        "Find Grimorium Obscurum on the bookshelves, slot it into the wall near the entrance, and complete Forbidden Archives"
      ],
      "requirement": "",
      "rewards": "Glimpse, Curseblood Stone, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-41"
      ],
      "nearestBeaconId": "beacon-14"
    },
    {
      "id": "boss-09",
      "name": "Great Arbiter of Flesh",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 108,
      "bossType": "optional",
      "nearestBeacon": "Widow's Overlook",
      "steps": [
        "Head south into the open arena near the overlook"
      ],
      "requirement": "",
      "rewards": "Gloom, Glimpse, Arbiter's Prize",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-37"
      ],
      "nearestBeaconId": "beacon-08"
    },
    {
      "id": "boss-10",
      "name": "Grisha",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 109,
      "bossType": "optional",
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Enter Flooded Village and continue beyond its smaller arena to the Grisha encounter"
      ],
      "requirement": "",
      "rewards": "Gloom, Synaptic Vessel, Grisha Remnant",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "boss-11",
      "name": "Hexapod",
      "kind": "boss",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 6,
      "bossType": "main",
      "nearestBeacon": "Ossinite Falls",
      "steps": [
        "Cross Withered Shoals to the final arena"
      ],
      "requirement": "",
      "rewards": "Hexapod Core, Gloom",
      "tip": "Harden buys time against its quick frontal attacks. Move to the side when homing shots appear.",
      "sources": [
        "boss-roster",
        "boss-main",
        "boss-artwork-hexapod"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-65"
      ],
      "nearestBeaconId": "beacon-38"
    },
    {
      "id": "boss-12",
      "name": "Infested Miner",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 111,
      "bossType": "optional",
      "nearestBeacon": "Gate of Mammon",
      "steps": [
        "Complete Burrowkin Dwelling through the beacon and face the miner at its end"
      ],
      "requirement": "",
      "rewards": "Glimpse, Ventrium, Laterite, Dorsalite, Wretchcaller's Stone, Coins, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-44"
      ],
      "nearestBeaconId": "beacon-18"
    },
    {
      "id": "boss-13",
      "name": "Sir Isaac, the Scholar-Prince",
      "kind": "boss",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 7,
      "bossType": "main",
      "nearestBeacon": "Citadel Atrium",
      "steps": [
        "Continue through Faded Citadel to the Ashen Sanctum and Isaac's arena"
      ],
      "requirement": "",
      "rewards": "Scholar's Wormstone, Gloom",
      "tip": "Parry the measured first phase. In the faster second phase, Harden can be more forgiving than repeated parries.",
      "sources": [
        "boss-roster",
        "boss-main"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-63"
      ],
      "nearestBeaconId": "beacon-35"
    },
    {
      "id": "boss-14",
      "name": "Lucian, the Thirsting Knight",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 113,
      "bossType": "optional",
      "nearestBeacon": "Stonebled Gate",
      "steps": [
        "Complete The Hidden Keep inside the beacon"
      ],
      "requirement": "",
      "rewards": "Glimpse, Serpent Stone, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-38"
      ],
      "nearestBeaconId": "beacon-02"
    },
    {
      "id": "boss-15",
      "name": "Magdalena, the Lady of the Woods",
      "kind": "boss",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 2,
      "bossType": "main",
      "nearestBeacon": "Sunken Village",
      "steps": [
        "Continue through Glutted Mire to Magdalena's isolated platform",
        "dropping in starts the battle"
      ],
      "requirement": "",
      "rewards": "Gloom, Magdalena's Memento",
      "tip": "Attack from behind the chair, avoid lingering fire, and clear the small summons when they appear.",
      "sources": [
        "boss-roster",
        "boss-main"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-56"
      ],
      "nearestBeaconId": "beacon-22"
    },
    {
      "id": "boss-16",
      "name": "Malborn Offspring",
      "kind": "boss",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 8,
      "bossType": "main",
      "nearestBeacon": "The Hidden Nave",
      "steps": [
        "Descend beneath Marrow Keep into the Unfound Path and follow the route to the tower it patrols"
      ],
      "requirement": "Unfound Path endgame access",
      "rewards": "",
      "tip": "Keep distance from grabs and long sword chains. Faithful Doubles can draw attention and create openings.",
      "sources": [
        "boss-roster",
        "boss-main",
        "boss-artwork-endgame"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-40"
    },
    {
      "id": "boss-17",
      "name": "Nameless Captive",
      "kind": "boss",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 4,
      "bossType": "main",
      "nearestBeacon": "Slumwater Drain",
      "steps": [
        "Cross Prisoners' Domain to the final arena beyond the summon platform"
      ],
      "requirement": "",
      "rewards": "Captive's Scabstone, Gloom",
      "tip": "Its melee strings are strongly telegraphed. Parry the familiar hits, but give the rapid spinning sequence space.",
      "sources": [
        "boss-roster",
        "boss-main"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-57"
      ],
      "nearestBeaconId": "beacon-26"
    },
    {
      "id": "boss-18",
      "name": "Orrem, the Reclaimed",
      "kind": "boss",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 10,
      "bossType": "main",
      "nearestBeacon": "Empty Cradle",
      "steps": [
        "Descend beneath Marrow Keep and follow the Unfound Path branch to Orrem's infection point"
      ],
      "requirement": "Unfound Path endgame access. Some guides call this encounter Orrem, the Discarded Golem.",
      "rewards": "",
      "tip": "Circle close to the second form's sides and dodge beneath the arm slams; sidestep its ranged barrage.",
      "sources": [
        "boss-roster",
        "boss-main",
        "boss-artwork-orrem"
      ],
      "aliases": [
        "Orrem, the Discarded Golem"
      ],
      "relatedIds": [],
      "nearestBeaconId": "beacon-46"
    },
    {
      "id": "boss-19",
      "name": "Pale Grisha",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 118,
      "bossType": "optional",
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Travel to the Grisha Hunting Grounds and search for the Pale Grisha"
      ],
      "requirement": "",
      "rewards": "Revered Gland, Grisha Remnant, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "boss-20",
      "name": "Prophet of Profane Infinities",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 119,
      "bossType": "optional",
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "Enter Obsidianite Mines and reach the Prophet's chamber"
      ],
      "requirement": "",
      "rewards": "Obsidian Hammer, Paradoxical Scripture, Coins, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12"
    },
    {
      "id": "boss-21",
      "name": "Rabid Grisha Pack",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 120,
      "bossType": "optional",
      "nearestBeacon": "Mushroom Village",
      "steps": [
        "Clear the corrupted jump pad, enter Holding Cells through the well, collect Feeding Room Key below, and open the locked room"
      ],
      "requirement": "",
      "rewards": "Grisha Remnant, Inflamed Clawstone, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-45"
      ],
      "nearestBeaconId": "beacon-05"
    },
    {
      "id": "boss-22",
      "name": "Sariel, the Endless",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 121,
      "bossType": "optional",
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "Reach the platform north of Chamber of Becoming",
        "follow Sariel into the chamber for phase two"
      ],
      "requirement": "",
      "rewards": "Gloom, Glimpse, Clockwork Scythe, Sariel the Endless",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-19"
    },
    {
      "id": "boss-23",
      "name": "Servants of the Scholar Prince",
      "kind": "boss",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 122,
      "bossType": "optional",
      "nearestBeacon": "Citadel Atrium",
      "steps": [
        "Complete the beacon's inner route to its group encounter"
      ],
      "requirement": "",
      "rewards": "Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-35"
    },
    {
      "id": "boss-24",
      "name": "Sester Secundus",
      "kind": "boss",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 123,
      "bossType": "optional",
      "nearestBeacon": "Village Outskirts",
      "steps": [
        "Explore Revenant Graves and enter Secundus's arena"
      ],
      "requirement": "",
      "rewards": "Glimpse, Sester's Censer, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-49"
    },
    {
      "id": "boss-25",
      "name": "Solnir, the Gloom Seeker",
      "kind": "boss",
      "region": "Faded Citadel",
      "scope": "base",
      "order": 124,
      "bossType": "optional",
      "nearestBeacon": "Citadel Annex",
      "steps": [
        "Continue from the annex into Solnir's arena"
      ],
      "requirement": "",
      "rewards": "Glimpse, Solnir Shard, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-66"
      ],
      "nearestBeaconId": "beacon-34"
    },
    {
      "id": "boss-26",
      "name": "Starved Harridan",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 125,
      "bossType": "optional",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "Travel south from the keep and take the lift into Vestige of Infinity"
      ],
      "requirement": "",
      "rewards": "Voltaic Essence, Voltaic Amber, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-49"
      ],
      "nearestBeaconId": "beacon-15"
    },
    {
      "id": "boss-27",
      "name": "Strange Grisha",
      "kind": "boss",
      "region": "Withered Shoals",
      "scope": "base",
      "order": 126,
      "bossType": "optional",
      "nearestBeacon": "Ossinite Falls",
      "steps": [
        "From the Shoals entrance stay right, take the Bone Gate to the island, and face Strange Grisha"
      ],
      "requirement": "",
      "rewards": "Grisha Remnant, Strange Remnant, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-72"
      ],
      "nearestBeaconId": "beacon-38"
    },
    {
      "id": "boss-28",
      "name": "Stray Sesters",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 127,
      "bossType": "optional",
      "nearestBeacon": "Sester's Gate",
      "steps": [
        "Finish the beacon's Sester's Bastion route"
      ],
      "requirement": "",
      "rewards": "Black Needle, Sester's Crest, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-13"
    },
    {
      "id": "boss-29",
      "name": "Subjugated Guardian",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 128,
      "bossType": "optional",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "Enter Sentry's Grave and complete its guardian encounter"
      ],
      "requirement": "",
      "rewards": "Ballistazooka, Coins, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15"
    },
    {
      "id": "boss-30",
      "name": "Tainted Vestige",
      "kind": "boss",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 129,
      "bossType": "optional",
      "nearestBeacon": "Disciple's Grotto",
      "steps": [
        "Leave the main prologue route for the cave below the bridge"
      ],
      "requirement": "",
      "rewards": "Gloom, Burnt Effigy",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-48"
    },
    {
      "id": "boss-31",
      "name": "Tar Golem",
      "kind": "boss",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 1,
      "bossType": "main",
      "nearestBeacon": "Disciple's Grotto",
      "steps": [
        "Follow the tutorial path north of the beacon to the open arena"
      ],
      "requirement": "",
      "rewards": "Vatra's Seal",
      "tip": "Take short openings after its heavy swings. Watch for the jumping slam and use safe parries when you can.",
      "sources": [
        "boss-roster",
        "boss-main"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-48"
    },
    {
      "id": "boss-32",
      "name": "Tarblighted Stoner",
      "kind": "boss",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 131,
      "bossType": "optional",
      "nearestBeacon": "Sanguine Shoreline",
      "steps": [
        "Continue through Sanguine Caverns after the shoreline beacon"
      ],
      "requirement": "",
      "rewards": "Tarred Fragment, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-70"
      ],
      "nearestBeaconId": "beacon-29"
    },
    {
      "id": "boss-33",
      "name": "The Foul Passenger",
      "kind": "boss",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 132,
      "bossType": "endgame",
      "nearestBeacon": "Chamber of the Forsaken",
      "steps": [
        "Face the passenger during the final Zmey sequence"
      ],
      "requirement": "Unfound Path endgame access",
      "rewards": "",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-47"
    },
    {
      "id": "boss-34",
      "name": "The Lost Child",
      "kind": "boss",
      "region": "Sanguine Caverns",
      "scope": "base",
      "order": 3,
      "bossType": "main",
      "nearestBeacon": "Sanguine Shoreline",
      "steps": [
        "Follow the Sanguine Caverns route to its final gap and arena"
      ],
      "requirement": "",
      "rewards": "Lost Clotstone, Gloom",
      "tip": "Respect the bite and arm-swipe windups. When it leaps away, keep moving sideways through the ranged spray.",
      "sources": [
        "boss-roster",
        "boss-main"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-62"
      ],
      "nearestBeaconId": "beacon-29"
    },
    {
      "id": "boss-35",
      "name": "The Monolith",
      "kind": "boss",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 9,
      "bossType": "main",
      "nearestBeacon": "Obsidian Vault",
      "steps": [
        "Descend beneath Marrow Keep to the Monolith branch and infection point"
      ],
      "requirement": "Unfound Path endgame access",
      "rewards": "",
      "tip": "Hit the exposed center, back away from repeated slams, and dodge through its laser sweep.",
      "sources": [
        "boss-roster",
        "boss-main",
        "boss-artwork-endgame"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-44"
    },
    {
      "id": "boss-36",
      "name": "The Wandering Shepherd",
      "kind": "boss",
      "region": "Glutted Mire",
      "scope": "base",
      "order": 135,
      "bossType": "optional",
      "nearestBeacon": "Sunken Village",
      "steps": [
        "Cross the bridge from the village beacon to the farm compound"
      ],
      "requirement": "",
      "rewards": "Gloom, Sheephead Totem",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-22"
    },
    {
      "id": "boss-37",
      "name": "The Warden",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 136,
      "bossType": "optional",
      "nearestBeacon": "Citadel of Penance",
      "steps": [
        "Ascend through the citadel to the Warden encounter"
      ],
      "requirement": "",
      "rewards": "Gloom, Eredrim the Venerable",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-10"
    },
    {
      "id": "boss-38",
      "name": "Tishina's Confessor",
      "kind": "boss",
      "region": "Prisoners’ Domain",
      "scope": "base",
      "order": 137,
      "bossType": "optional",
      "nearestBeacon": "Slumwater Drain",
      "steps": [
        "Continue through Prisoners' Domain after the drain or pulpit beacon"
      ],
      "requirement": "",
      "rewards": "Confessor's Keepsake, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-67"
      ],
      "nearestBeaconId": "beacon-26"
    },
    {
      "id": "boss-39",
      "name": "Twin Sesters",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 138,
      "bossType": "optional",
      "nearestBeacon": "Sester's Gate",
      "steps": [
        "Finish the Sester's Bastion beacon route"
      ],
      "requirement": "",
      "rewards": "Black Needle, Sester's Crest, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-13"
    },
    {
      "id": "boss-40",
      "name": "Tyrant's Sycophants",
      "kind": "boss",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 139,
      "bossType": "optional",
      "nearestBeacon": "Ovate's Chamber",
      "steps": [
        "Finish the beacon's interior group encounter"
      ],
      "requirement": "",
      "rewards": "Gloom, Coin",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-31"
    },
    {
      "id": "boss-41",
      "name": "Urrig, the Executioner",
      "kind": "boss",
      "region": "Conquered Temple",
      "scope": "base",
      "order": 140,
      "bossType": "optional",
      "nearestBeacon": "Winterglass Lake",
      "steps": [
        "Continue into Conquered Temple beyond Winterglass Lake"
      ],
      "requirement": "",
      "rewards": "Warden's Stone, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-40"
      ],
      "nearestBeaconId": "beacon-32"
    },
    {
      "id": "boss-42",
      "name": "Vellen, High Lord of Mammon",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 141,
      "bossType": "optional",
      "nearestBeacon": "High Lord's Courtyard",
      "steps": [
        "Reach Royal Crypt of Mammon through the courtyard route"
      ],
      "requirement": "",
      "rewards": "Glimpse, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-20"
    },
    {
      "id": "boss-43",
      "name": "Viletongue Batushka",
      "kind": "boss",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 142,
      "bossType": "optional",
      "nearestBeacon": "Castigator's Keep",
      "steps": [
        "Reach the beacon's Ovum room, activate the item on the right, and face Batushka"
      ],
      "requirement": "",
      "rewards": "Glimpse, Sage's Gate Lever, Viletongue Hedron",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-48"
      ],
      "nearestBeaconId": "beacon-15"
    },
    {
      "id": "boss-44",
      "name": "Vrago, Solikar Champion",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 143,
      "bossType": "optional",
      "nearestBeacon": "Nochtean Gate",
      "steps": [
        "Finish the Abandoned Shrine beacon route"
      ],
      "requirement": "",
      "rewards": "Voltaic Crown, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-39"
      ],
      "nearestBeaconId": "beacon-04"
    },
    {
      "id": "boss-45",
      "name": "Vrannic the Grand Illusionist",
      "kind": "boss",
      "region": "Fainweald",
      "scope": "base",
      "order": 144,
      "bossType": "optional",
      "nearestBeacon": "Mushroom Village Gate",
      "steps": [
        "Finish the Hall of Illusions beacon route"
      ],
      "requirement": "",
      "rewards": "Volatile Fragment, Glimpse, Gloom",
      "tip": "",
      "sources": [
        "boss-roster"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-36"
      ],
      "nearestBeaconId": "beacon-03"
    },
    {
      "id": "boss-46",
      "name": "Zmey, the Unbidden",
      "kind": "boss",
      "region": "The Unfound Path",
      "scope": "base",
      "order": 11,
      "bossType": "main",
      "nearestBeacon": "Chamber of the Forsaken",
      "steps": [
        "Sever the three infection branches beneath Marrow Keep and follow the final route"
      ],
      "requirement": "Unfound Path endgame access",
      "rewards": "",
      "tip": "Equip Cosmic resistance before the fight. Avoid the grab and move away as the second phase opens with waves.",
      "sources": [
        "boss-roster",
        "boss-main",
        "boss-artwork-zmey"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-47"
    }
  ],
  "dungeons": [
    {
      "id": "dungeon-01",
      "name": "Troubadour's Reprise",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 1,
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "North; lute statue"
      ],
      "requirement": "Night Mode and Troubadour's Lute",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-guitarstone"
      ],
      "nearestBeaconId": "beacon-11"
    },
    {
      "id": "dungeon-02",
      "name": "Primeval Dungeon",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 2,
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "Northeast; giant mushroom"
      ],
      "requirement": "Night",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-09"
    },
    {
      "id": "dungeon-03",
      "name": "Obscured Market",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 3,
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "West; via Citadel of Penance"
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-mourning-bell",
        "ghost-01"
      ],
      "nearestBeaconId": "beacon-09"
    },
    {
      "id": "dungeon-04",
      "name": "Shrouded Mire",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 4,
      "nearestBeacon": "Outskirts of Nochte",
      "steps": [
        "Northeast; Hag's Path swamp"
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-widowmoon-stone",
        "ghost-02"
      ],
      "nearestBeaconId": "beacon-06"
    },
    {
      "id": "dungeon-05",
      "name": "The Corridors",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "rotten-autumn",
      "order": 5,
      "nearestBeacon": "Nochtean Gate",
      "steps": [
        "Northeast; ruins and bridge"
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-04"
    },
    {
      "id": "dungeon-06",
      "name": "The Sideway",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 6,
      "nearestBeacon": "High Lord's Courtyard",
      "steps": [
        "Behind beacon pillar"
      ],
      "requirement": "Night",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-20"
    },
    {
      "id": "dungeon-07",
      "name": "Ankle's Bane",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 7,
      "nearestBeacon": "Gate of Mammon",
      "steps": [
        "East; wooden stairs"
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-waning-stone"
      ],
      "nearestBeaconId": "beacon-18"
    },
    {
      "id": "dungeon-08",
      "name": "Veiled Tower",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 8,
      "nearestBeacon": "Gate of Mammon",
      "steps": [
        "North-northeast; pumpkin trail"
      ],
      "requirement": "Night",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-black-lantern"
      ],
      "nearestBeaconId": "beacon-18"
    },
    {
      "id": "dungeon-09",
      "name": "Well of Knowledge",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 9,
      "nearestBeacon": "Gate of Infinity",
      "steps": [
        "North; elevator"
      ],
      "requirement": "Night",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-14"
    },
    {
      "id": "dungeon-10",
      "name": "Buried Library",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 10,
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "South; downhill between braziers"
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-channelers-stone"
      ],
      "nearestBeaconId": "beacon-19"
    },
    {
      "id": "dungeon-11",
      "name": "Secret Alcove",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 11,
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "Southeast; statue path"
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-starless-eye",
        "ghost-03"
      ],
      "nearestBeaconId": "beacon-19"
    },
    {
      "id": "dungeon-12",
      "name": "Concealed Lookout",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 12,
      "nearestBeacon": "Sester's Gate",
      "steps": [
        "West; stone stairs"
      ],
      "requirement": "Night Mode; Ghost Beacon entrance.",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "ghost-04"
      ],
      "nearestBeaconId": "beacon-13"
    },
    {
      "id": "dungeon-13",
      "name": "Icebound Chamber",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "rotten-autumn",
      "order": 13,
      "nearestBeacon": "Sester's Gate",
      "steps": [
        "Through Cleansed Gate"
      ],
      "requirement": "Night",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-13"
    },
    {
      "id": "dungeon-14",
      "name": "Not The Sheep",
      "kind": "dungeon",
      "region": "Glutted Mire",
      "scope": "rotten-autumn",
      "order": 14,
      "nearestBeacon": "Sunken Village",
      "steps": [
        "Northeast; below bridge"
      ],
      "requirement": "Sheephead Totem",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-black-fleece"
      ],
      "nearestBeaconId": "beacon-22"
    },
    {
      "id": "dungeon-15",
      "name": "Neglected Ward",
      "kind": "dungeon",
      "region": "Prisoners’ Domain",
      "scope": "rotten-autumn",
      "order": 15,
      "nearestBeacon": "Hangman's Scaffold",
      "steps": [
        "Stairs, bridge, left, stairs, right"
      ],
      "requirement": "",
      "sources": [
        "rotten-dungeons",
        "rotten-crosscheck"
      ],
      "aliases": [],
      "relatedIds": [
        "tar-ra-bloodoath-stone"
      ],
      "nearestBeaconId": "beacon-24"
    },
    {
      "id": "dungeon-16",
      "name": "Desolate Keep",
      "kind": "dungeon",
      "region": "Marrow Keep",
      "scope": "base",
      "order": 16,
      "nearestBeacon": "Marrow Keep",
      "steps": [
        "Break the four chains and commune with the goblet in the hidden room in Sester Genessa’s room at Marrow Keep."
      ],
      "requirement": "Progress far enough in the story.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-01"
    },
    {
      "id": "dungeon-17",
      "name": "Ravaged Tomb",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 17,
      "nearestBeacon": "Nochtean Gate",
      "steps": [
        "From Nochtean Gate, take the southeast elevator down; the entrance is in the room below."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-04"
    },
    {
      "id": "dungeon-18",
      "name": "Thieves Retreat",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 18,
      "nearestBeacon": "Nochtean Gate",
      "steps": [
        "From Nochtean Gate, head north and drop one level; press the switch to open the metal gate."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-04"
    },
    {
      "id": "dungeon-19",
      "name": "Shrine of Trials",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 19,
      "nearestBeacon": "Mushroom Village",
      "steps": [
        "Northwest of Mushroom Village, open the doorway with the Chapel Key."
      ],
      "requirement": "Chapel Key.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-05"
    },
    {
      "id": "dungeon-20",
      "name": "Holding Cells",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 20,
      "nearestBeacon": "Mushroom Village",
      "steps": [
        "Northwest of Mushroom Village, clear the corruption from the nearby jump pad and interact with the well on the upper level."
      ],
      "requirement": "Mether’s Breath.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-05"
    },
    {
      "id": "dungeon-21",
      "name": "Waterfall Camp",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 21,
      "nearestBeacon": "Outskirts of Nochte",
      "steps": [
        "South of Outskirts of Nochte, press the button on the north wall of the southeast building to reveal the entrance."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-06"
    },
    {
      "id": "dungeon-22",
      "name": "Disciple’s Stash",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 22,
      "nearestBeacon": "Outskirts of Nochte",
      "steps": [
        "East of Outskirts of Nochte in the town; break the wall of the large building."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-06"
    },
    {
      "id": "dungeon-23",
      "name": "Illusionist’s Cache",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 23,
      "nearestBeacon": "Outskirts of Nochte",
      "steps": [
        "North of Outskirts of Nochte, take a Bone Gate to Desolate Peak; the entrance is inside the building."
      ],
      "requirement": "Bone Gate.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-06"
    },
    {
      "id": "dungeon-24",
      "name": "Flooded Village",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 24,
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Northwest of Blackridge Pass, use the archway to open the doorway in the building."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "dungeon-25",
      "name": "Coward’s Retreat",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 25,
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "East of Blackridge Pass, inside a cave."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "dungeon-26",
      "name": "Crumbling Tunnel",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 26,
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Northeast of Blackridge Pass, east of the Shattered Beacon entrance."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "dungeon-27",
      "name": "The King’s Crypt",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 27,
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "North of the Shattered Beacon dungeon, in the cave near explosive jars."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "dungeon-28",
      "name": "Martyr’s Tomb",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 28,
      "nearestBeacon": "Widow’s Overlook",
      "steps": [
        "Southeast of Widow’s Overlook, inside the building."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-08"
    },
    {
      "id": "dungeon-29",
      "name": "Ritual Grounds",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 29,
      "nearestBeacon": "Widow’s Overlook",
      "steps": [
        "Southeast of Widow’s Overlook, behind the village where Tiel is found."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-08"
    },
    {
      "id": "dungeon-30",
      "name": "Ravaged Hideout",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 30,
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "South of Gloomshade Grove; defeat the Bloodcursed Lithopod to access it."
      ],
      "requirement": "Defeat the Bloodcursed Lithopod.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-09"
    },
    {
      "id": "dungeon-31",
      "name": "Martyr’s Prison",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 31,
      "nearestBeacon": "Gloomshade Grove",
      "steps": [
        "Northwest of Gloomshade Grove; follow the path to the castle’s northeast outer corner and enter through the hole in the wall."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-09"
    },
    {
      "id": "dungeon-32",
      "name": "Deserted Mine",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 32,
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "West of One Legged Wolf, through the cave near the flags."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-11"
    },
    {
      "id": "dungeon-33",
      "name": "Overrun Quarry",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 33,
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "North of One Legged Wolf; pass through the castle area, loop southeast, and look by the north side of the broken wooden bridge."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-11"
    },
    {
      "id": "dungeon-34",
      "name": "Grisha Hunting Grounds",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 34,
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "Northwest of One Legged Wolf, in the valley beyond the ruins."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-11"
    },
    {
      "id": "dungeon-35",
      "name": "Hall of Echoes",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 35,
      "nearestBeacon": "One Legged Wolf",
      "steps": [
        "Northwest of One Legged Wolf; open the building with the Crypt Key."
      ],
      "requirement": "Crypt Key, found in Illusionist’s Cache.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-11"
    },
    {
      "id": "dungeon-36",
      "name": "Feeding Grounds",
      "kind": "dungeon",
      "region": "Fainweald",
      "scope": "base",
      "order": 36,
      "nearestBeacon": "Blackridge Pass",
      "steps": [
        "Northeast of Blackridge Pass, in the graveyard; destroy the three glowing headstones to open the door."
      ],
      "requirement": "Destroy three glowing headstones.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-07"
    },
    {
      "id": "dungeon-37",
      "name": "Smuggler’s Hideout",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 37,
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "Northwest of Outskirts of Mammon, near the camp."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12"
    },
    {
      "id": "dungeon-38",
      "name": "Revered Beacon",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 38,
      "nearestBeacon": "Sester’s Gate",
      "steps": [
        "From Sester’s Gate, take the northwest stairs, drop to the western ledge by the Bone Gate, then follow the path north; the entrance is past the hammer enemy on the right."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-13"
    },
    {
      "id": "dungeon-39",
      "name": "Blackwell Cavern",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 39,
      "nearestBeacon": "Castigator’s Keep",
      "steps": [
        "From Castigator’s Keep, follow the paths or drop behind the Beacon to the lower level; head north and turn around the cliff corner."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15"
    },
    {
      "id": "dungeon-40",
      "name": "Hall of Murmurs",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 40,
      "nearestBeacon": "Castigator’s Keep",
      "steps": [
        "From Castigator’s Keep, go southwest through the central courtyard; the entrance stairs are set into the ground beyond it."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15"
    },
    {
      "id": "dungeon-41",
      "name": "Alchemist’s Workshop",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 41,
      "nearestBeacon": "Castigator’s Keep",
      "steps": [
        "Find the Makeshift Projectile near the southern Grisha hunters by Outskirts of Mammon and fire it from the catapult east of that Beacon’s statue. Then follow the southwest wooden platforms below Castigator’s Keep."
      ],
      "requirement": "Makeshift Projectile.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-15"
    },
    {
      "id": "dungeon-42",
      "name": "Bellkeeper’s Corner",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 42,
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "North of Abandoned Outpost, ring the bell to form a path across the bridge."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17"
    },
    {
      "id": "dungeon-43",
      "name": "Collapsed Mine",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 43,
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "South of Abandoned Outpost in the slums; follow the platforms around the central pit and head west into a cave."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17"
    },
    {
      "id": "dungeon-44",
      "name": "Obsidianite Mines",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 44,
      "nearestBeacon": "Abandoned Outpost",
      "steps": [
        "South of Abandoned Outpost in the slums; drop to the lower mining area and find the entrance on the west wall."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-17"
    },
    {
      "id": "dungeon-45",
      "name": "Spoiled Mortuary",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 45,
      "nearestBeacon": "Gate of Mammon",
      "steps": [
        "From Gate of Mammon, climb the stairs and continue past the next set; the entrance is in the corner."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-18"
    },
    {
      "id": "dungeon-46",
      "name": "Sentry’s Grave",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 46,
      "nearestBeacon": "Gate of Mammon",
      "steps": [
        "From Gate of Mammon, go northeast up the first stairs, follow the first level clockwise, and take the stairs down inside."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-18"
    },
    {
      "id": "dungeon-47",
      "name": "Chamber of Becoming",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 47,
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "Southeast of The Silent Steps, defeat Sariel at the large stone platform; the south wall opens into the dungeon."
      ],
      "requirement": "Defeat Sariel, the Endless.",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-19"
    },
    {
      "id": "dungeon-48",
      "name": "Parasitic Stash",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 48,
      "nearestBeacon": "The Silent Steps",
      "steps": [
        "Northwest of The Silent Steps; follow the path to the platform east of it and look beneath the wooden bridge."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-19"
    },
    {
      "id": "dungeon-49",
      "name": "Besieged Ruins",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 49,
      "nearestBeacon": "High Lord’s Courtyard",
      "steps": [
        "East of High Lord’s Courtyard, drop two levels to the enemies and jump pad; the entrance is in the nearby wall."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-20"
    },
    {
      "id": "dungeon-50",
      "name": "Garrick’s Den",
      "kind": "dungeon",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 50,
      "nearestBeacon": "Disciple’s Grotto",
      "steps": [
        "Left of Disciple’s Grotto, inside a cave."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-routes"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-48"
    },
    {
      "id": "dungeon-51",
      "name": "Hag’s Pit",
      "kind": "dungeon",
      "region": "Ruins of Mammon",
      "scope": "base",
      "order": 51,
      "nearestBeacon": "Outskirts of Mammon",
      "steps": [
        "From Outskirts of Mammon, follow the cliff southeast to a cave entrance, then ride the lift down."
      ],
      "requirement": "",
      "sources": [
        "base-dungeon-roster",
        "hag-pit-route"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-12"
    },
    {
      "id": "dungeon-52",
      "name": "Derelict Hideout",
      "kind": "dungeon",
      "region": "Disciple’s Pass",
      "scope": "base",
      "order": 52,
      "nearestBeacon": "Disciple’s Grotto",
      "steps": [
        "Cleanse Disciple’s Grotto Beacon in the prologue to open Derelict Hideout; clear the area and cleanse the corruption behind the crates."
      ],
      "requirement": "",
      "sources": [
        "derelict-hideout-route"
      ],
      "aliases": [],
      "relatedIds": [],
      "nearestBeaconId": "beacon-48"
    }
  ]
};
