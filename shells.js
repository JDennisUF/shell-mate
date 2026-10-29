// Shell roster and Shell Point skill trees sourced from Mortal Shell II references.
export const shellItems = [
  {
    "id": "shell-tiel",
    "name": "Tiel the Acolyte",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 3,
    "category": "Playable Shell",
    "shellName": "Tiel",
    "image": "assets/shells/tiel.webp",
    "signature": [
      "Shadow Dash: a precisely timed dodge grants Shadow and deals stagger damage.",
      "Lingering Shadow: enter Shadow and prepare a dagger Shadow Strike."
    ],
    "skills": [
      "Escalation",
      "Lasting Legacy",
      "Plague Bearer",
      "Deathmark",
      "Nightstride",
      "Poison Burst",
      "Lethality",
      "Shadow Stalk",
      "Ambush",
      "Critical Role",
      "Shadow Clone",
      "Seal Affinity"
    ],
    "skillDetails": [
      {
        "name": "Escalation",
        "description": "Each level improves Shadow Strike",
        "levels": [
          "Shadow Strike deals 125%",
          "Shadow Strike deals 140%",
          "Shadow Strike inflicts 10 Poison stacks"
        ],
        "tier": 1
      },
      {
        "name": "Lasting Legacy",
        "description": "Each level makes Tiel stay Shadowed for longer",
        "levels": [
          "Tiel gains 2 additional Shadow stacks from his abilities",
          "Tiel gains 3 additional Shadow stacks from his abilities",
          "Tiel gains 4 additional Shadow stacks from his abilities",
          "Tiel gains 5 additional Shadow stacks from his abilities"
        ],
        "tier": 1
      },
      {
        "name": "Plague Bearer",
        "description": "Each level makes Tiel stay Shadowed for longer",
        "levels": [
          "Tiel has +50% Poison mitigation",
          "Tiel has Poison immunity",
          "Poison restores a portion of Health"
        ],
        "tier": 1
      },
      {
        "name": "Deathmark",
        "description": "Each level improves Shadow Strike",
        "levels": [
          "Shadow Strike has +23% Critical Hit chance",
          "Shadow Strike deals 120% Critical damage",
          "Shadow Strike inflicts 10 Fragile stacks"
        ],
        "tier": 2
      },
      {
        "name": "Nightstride",
        "description": "Each level improves Shadow Dash",
        "levels": [
          "Shadow Dash activation window increased by 20%",
          "Shadow Dash deals 300% Stagger Damage",
          "Shadow Dash deals 50 damage",
          "Shadow Dash activation window increased by 45%"
        ],
        "tier": 2
      },
      {
        "name": "Poison Burst",
        "description": "Shadow Strike detonates all Poison stacks on the struck target",
        "levels": [
          "Each detonated Poison stack deals 4 damage",
          "Each detonated Poison stack deals 6 damage",
          "The struck enemy also emits a Poisonous cloud"
        ],
        "tier": 2
      },
      {
        "name": "Lethality",
        "description": "When killing an enemy with a Shadow Strike",
        "levels": [
          "Tiel restores 10 Resolve",
          "Tiel restores 20 Resolve",
          "Tiel has 50% chance to reactivate Lingering Shadow immediately"
        ],
        "tier": 3
      },
      {
        "name": "Shadow Stalk",
        "description": "Shadow Strike damage increases the longer Tiel stays Shadowed",
        "levels": [
          "Shadow Strike deals 2 more damage for every 0.5s spent while Shadowed",
          "Shadow Strike deals 3 more damage for every 0.5s spent while Shadowed",
          "Shadow Strike deals 4 more damage for every 0.5s spent while Shadowed"
        ],
        "tier": 3
      },
      {
        "name": "Ambush",
        "description": "When striking enemies from behind:",
        "levels": [
          "Tiel deals 150% damage",
          "Tiel has +25% Critical Hit chance",
          "Tiel deals 120% Critical Hit damage"
        ],
        "tier": 3
      },
      {
        "name": "Critical Role",
        "description": "Each level improves Tiel attacks",
        "levels": [
          "After a Shadow Strike, the next melee attack strikes Critically",
          "After a Shadow Strike, the next ranged attack strikes Critically",
          "Those Critical Hits deal +100% damage"
        ],
        "tier": 4
      },
      {
        "name": "Shadow Clone",
        "description": "Each level improves Shadow Dash",
        "levels": [
          "Shadow Dash leaves behind a Shadow Clone that inflicts 2 Poison stacks to enemies that strike it. The clone can resist up to 3 strikes.",
          "Shadow Dash leaves behind a Shadow Clone that inflicts 2 Poison stacks to enemies that strike it. The clone can resist up to 5 strikes.",
          "When the Shadow Clone expires, it bursts into a Poisonous cloud that lasts for 5s."
        ],
        "tier": 4
      },
      {
        "name": "Seal Affinity",
        "description": "Each level grants Tiel various Seals improvements",
        "levels": [
          "A field Guard, Parry or Harden grant Tiel 3 Shadow stacks",
          "A Perfect Guard, successful Parry or Perfect Harden deal 120% Break Damage",
          "A Perfect Guard, successful Parry or Perfect Harden have 15% chance to fully Break an enemy."
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-proxima",
    "name": "Proxima the Broodseeker",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 3,
    "category": "Playable Shell",
    "shellName": "Proxima",
    "image": "assets/shells/proxima.webp",
    "signature": [
      "Grafted Armor: chance to mitigate incoming damage and prevent stagger.",
      "Biosampler: hook enemies or pull Proxima into range, then strike with Lightning."
    ],
    "skills": [
      "Attunement",
      "Exoshell",
      "Ampereon",
      "Biohazard",
      "Reflection",
      "Biohunter",
      "Seizure",
      "Shellshock",
      "Collector",
      "Discharge",
      "Fortress",
      "Energize"
    ],
    "skillDetails": [
      {
        "name": "Attunement",
        "description": "Each level reduces the Resolve cost of Biosampler.",
        "levels": [
          "Biosampler costs 20% less Resolve",
          "Biosampler costs 30% less Resolve",
          "Biosampler costs 50% less Resolve"
        ],
        "tier": 1
      },
      {
        "name": "Exoshell",
        "description": "Each level improves Proxima's Grafted Armor.",
        "levels": [
          "Prima has +100% mitigation chance while using Biosampler",
          "Proxima has 25% mitigation chance while aiming",
          "Proxima has brief +30% mitigation chance after dodging",
          "Proxima has +50% mitigation chance while sprinting"
        ],
        "tier": 1
      },
      {
        "name": "Ampereon",
        "description": "Each level grants a new effect against Lightning.",
        "levels": [
          "Proxima has +50% Lightning migration",
          "Proxima has Lightning immunity",
          "Shock damage and Radius are doubled"
        ],
        "tier": 1
      },
      {
        "name": "Biohazard",
        "description": "Each level improves Proxima's Biosampler.",
        "levels": [
          "Biosampler deals 15% more damage",
          "Biosampler inflicts 3 additional Lightning stacks",
          "Biosampler deals 180% more damage",
          "Biosampler inflicts 5 additional Lightning stacks"
        ],
        "tier": 2
      },
      {
        "name": "Reflection",
        "description": "Each level improves Proxima's Grafted Armor.",
        "levels": [
          "Projectiles have 15% chance to cause no damage to Proxima",
          "Projectiles have 35% chance to cause no damage to Proxima",
          "Nullified projectiles have 100% chance to be reflected back to the attacker"
        ],
        "tier": 2
      },
      {
        "name": "Biohunter",
        "description": "Proxima has permanent damage increase against enemies she Biosamples",
        "levels": [
          "Proxima has 0.5% permanent damage increase per sample, up to 15%",
          "Proxima has 0.8% permanent damage increase per sample, up to 20%",
          "Proxima has 1% permanent damage increase per sample, up to 30%"
        ],
        "tier": 2
      },
      {
        "name": "Seizure",
        "description": "When Biosampler launches onto an enemy:",
        "levels": [
          "Biosampler inflicts 20 Stasis stacks",
          "Biosampler deals 50 splash damage and 100 Stagger Damage",
          "Biosampler deals 80 splash attack and 150 stagger damage"
        ],
        "tier": 3
      },
      {
        "name": "Shellshock",
        "description": "Whenever Grafted Armor mitigates damage:",
        "levels": [
          "Proxima gains 10 Resolve",
          "Proxima gains 15 Resolve",
          "Proxima inflicts 10 Lightning stacks to the attacker"
        ],
        "tier": 3
      },
      {
        "name": "Collector",
        "description": "Proxima can harvest Specimens from slain foes",
        "levels": [
          "Proxima has 20% chance to harvest a Specimen",
          "Proxima has 40% chance to harvest a Specimen",
          "Proxima has 35% chance to harvest +2 Specimens"
        ],
        "tier": 3
      },
      {
        "name": "Discharge",
        "description": "Each level improves Proxima's Biosampler",
        "levels": [
          "Biosampler knocks back the struck enemy and triggers a Lightning storm that lasts for 6s",
          "Biosampler knocks back the struck enemy and triggers a Lightning storm that lasts for 9s"
        ],
        "tier": 4
      },
      {
        "name": "Fortress",
        "description": "Each level improves Proxima's Grafted Armor",
        "levels": [
          "Mitigated damage effectiveness increased by 110%",
          "Mitigated damage effectiveness increased by 115%",
          "Mitigated damage effectiveness increased by 112%",
          "Mitigated damage effectiveness increased by 133%"
        ],
        "tier": 4
      },
      {
        "name": "Energize",
        "description": "When reviving Proxima",
        "levels": [
          "Grafted Armor always mitigates damage for 8s",
          "Proxima releases a shockwave that inflicts 15 Lightning stacks",
          "Proxima has 30% chance to fully restore Resolve"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-genessa",
    "name": "Genessa the Wayward",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Playable Shell",
    "shellName": "Genessa",
    "image": "assets/shells/genessa.webp",
    "signature": [
      "Duality: on depletion, become Stray instead of being severed.",
      "Faithful Doubles: summon doubles that attack with a weapon."
    ],
    "skills": [
      "Augmentation",
      "Catalyst",
      "Timeless",
      "Affinity",
      "Instigation",
      "Intangible",
      "Distraction",
      "Communion",
      "Alteration",
      "Impetus",
      "Causality",
      "Mirage"
    ],
    "skillDetails": [
      {
        "name": "Augmentation",
        "description": "Each level improves Faithful Doubles",
        "levels": [
          "Faithful Doubles cost 15% less Resolve to summon",
          "Faithful Doubles cost 25% less Resolve to summon",
          "Faithful Doubles regenerate 1 Resolve on damaging an enemy"
        ],
        "tier": 1
      },
      {
        "name": "Catalyst",
        "description": "Each level improves Stray Doubles",
        "levels": [
          "Stray Doubles cost 15% less Resolve to summon",
          "Stray Doubles cost 25% less Resolve to summon",
          "Duration of Stray Doubles increased by 20%"
        ],
        "tier": 1
      },
      {
        "name": "Timeless",
        "description": "Each level grants a new effect against Stasis",
        "levels": [
          "Genessa has 50% Stasis mitigation",
          "Genessa has Stasis immunity",
          "Enemies that inflict Stasis on Genessa receive 2 Phantom stacks instead."
        ],
        "tier": 1
      },
      {
        "name": "Affinity",
        "description": "Each level improves Faithful Doubles",
        "levels": [
          "Faithful Doubles deal 130% damage",
          "Faithful Doubles attack 2 times before vanishing",
          "Faithful Doubles deal 160% damage",
          "Faithful Doubles attack 3 times before vanishing"
        ],
        "tier": 2
      },
      {
        "name": "Instigation",
        "description": "Each level improves Genessa's Doubles",
        "levels": [
          "Faithful Doubles are summoned with 10 Warp stacks",
          "Faithful Doubles inflict 4 Phantom stacks",
          "Stray Doubles melee attacks inflict 3 Weak stacks",
          "Stray Doubles ranged attacks inflict 4 Fragile stacks"
        ],
        "tier": 2
      },
      {
        "name": "Intangible",
        "description": "When Genessa's Health is depleted:",
        "levels": [
          "Genessa summons 2 last Faithful Doubles",
          "Genessa summons 3 last Faithful Doubles",
          "Genessa summons 4 last Faithful Doubles"
        ],
        "tier": 2
      },
      {
        "name": "Distraction",
        "description": "Each level improves Faithful Doubles",
        "levels": [
          "Faithful Doubles have 50% chance to be attacked by enemies",
          "Faithful Doubles struck by enemies burst into a shockwave that inflicts 80% Stasis stacks",
          "Faithful Doubles struck by enemies burst into a shockwave that inflicts 15 Stasis stacks"
        ],
        "tier": 3
      },
      {
        "name": "Communion",
        "description": "Each level improves Stray Doubles",
        "levels": [
          "Stray Doubles deal 150% melee damage",
          "Stray Doubles deal 200% melee damage",
          "Stray Doubles deal 150% ranged damage",
          "Stray Doubles deal 200% ranged damage"
        ],
        "tier": 3
      },
      {
        "name": "Alteration",
        "description": "Sester Genessa is no more and becomes Stray by default",
        "levels": [
          "Duration of Stray Doubles increased by 3s",
          "Duration of Stray Doubles increased by 5s",
          "Duration of Stray Doubles increased by 8s"
        ],
        "tier": 3
      },
      {
        "name": "Impetus",
        "description": "Each level improves Faithful Doubles",
        "levels": [
          "Faithful Doubles have 15% chance to perform any equipped Weapon Ability",
          "Faithful Doubles have 20% chance to perform any equipped Weapon Ability",
          "Faithful Doubles have 22% chance to perform any equipped Weapon Ability"
        ],
        "tier": 4
      },
      {
        "name": "Causality",
        "description": "Each level improves Stray Doubles",
        "levels": [
          "Melee Stray Doubles have 25% chance to apply any equipped Weapon Infusion",
          "Melee Stray Doubles have 25% chance to apply any equipped Sidearm Infusion",
          "Melee Stray Doubles have 35% chance to apply any equipped Weapon Infusion",
          "Melee Stray Doubles have 35% chance to apply any equipped Sidearm Infusion"
        ],
        "tier": 4
      },
      {
        "name": "Mirage",
        "description": "Each level improves Stray Doubles",
        "levels": [
          "Stray Doubles protect Stray Genessa from a single fatal blow",
          "Stray Genessa can summon an additional Stray Double",
          "Stray Doubles protect Stray Genessa from 2 fatal blows"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-lazlo",
    "name": "Lazlo the Justiciar",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Playable Shell",
    "shellName": "Lazlo",
    "image": "assets/shells/lazlo.webp",
    "signature": [
      "Retribution: heat armor to unleash shockwaves; overheat adds Burn and disables armor temporarily.",
      "Fortified Plate: damage reduction while armor is active."
    ],
    "skills": [
      "Worthy Armor",
      "Warmed Up",
      "Inner Fire",
      "Temperament",
      "Adaptation",
      "Incandescence",
      "Breaker",
      "Furnace",
      "Detonation",
      "Inflamed",
      "Rekindle",
      "Rush"
    ],
    "skillDetails": [
      {
        "name": "Worthy Armor",
        "description": "Each level reduces the Resolve cost of Lazlo's Retribution",
        "levels": [
          "Retribution costs 20% less Resolve",
          "Retribution costs 30% less Resolve",
          "Retribution costs 40% less Resolve"
        ],
        "tier": 1
      },
      {
        "name": "Warmed Up",
        "description": "Lazlo gets stronger as the Heat Meter increases",
        "levels": [
          "Lazlo deals up to 30% more damage",
          "Lazlo gains up to 35% more Resolve from melee attacks",
          "Lazlo's armor provides up to 10% more damage reduction"
        ],
        "tier": 1
      },
      {
        "name": "Inner Fire",
        "description": "Each level grants Lazlo a new effect against Burn",
        "levels": [
          "Lazlo has 50% Burn mitigation",
          "Lazlo has Burn damage immunity",
          "Lazlo receives 5 Warp stacks when affected by Burn"
        ],
        "tier": 1
      },
      {
        "name": "Temperament",
        "description": "Each level improves Lazlo's Retribution",
        "levels": [
          "Unleashed shockwaves deal 130% damage",
          "Unleashed shockwaves deal 160% damage",
          "Unleashed shockwaves cover a much larger radius",
          "Overheated shockwaves ignite the ground for 5s"
        ],
        "tier": 2
      },
      {
        "name": "Adaptation",
        "description": "Each level reduces Lazlo's Armor cooldown duration",
        "levels": [
          "Armor cooldown reduced by 2s",
          "Armor cooldown reduced by 3s",
          "Armor cooldown reduced by 4s"
        ],
        "tier": 2
      },
      {
        "name": "Incandescence",
        "description": "When Lazlo's Armor comes off cooldown:",
        "levels": [
          "Lazlo's Heat Meter fills by 20%",
          "Lazlo's Heat Meter fills by 35%",
          "Lazlo's Heat Meter fills by 50%"
        ],
        "tier": 2
      },
      {
        "name": "Breaker",
        "description": "Each level improves Lazlo's Retribution",
        "levels": [
          "Unleashed shockwaves deal 15 Break Damage",
          "Unleashed shockwaves deal 20 Break Damage",
          "Overheated shockwaves have 15% chance to instantly Break enemies"
        ],
        "tier": 3
      },
      {
        "name": "Furnace",
        "description": "As long as Lazlo's Heat Meter is full:",
        "levels": [
          "Enemies suffer from 2 Burn stacks when striking Lazlo",
          "Damage reduction increases by +10%",
          "Lazlo has 50% chance to survive a fatal blow"
        ],
        "tier": 3
      },
      {
        "name": "Detonation",
        "description": "When Lazlo is severed from the Harbinger:",
        "levels": [
          "Lazlo's Armor unleashes one last shockwave that deals 120 damage",
          "The shockwave ignites the ground for 12s",
          "The shockwave covers +50% the radius"
        ],
        "tier": 3
      },
      {
        "name": "Inflamed",
        "description": "Each level improves Lazlo's Retribution",
        "levels": [
          "Heat Meter no longer drains over time",
          "Overheated shockwaves no longer consume Resolve and inflict 10 Burn stacks",
          "Overheated shockwaves have 30% chance to not deactivate Lazlo's Armor",
          "Overheated shockwaves cure all negative conditions on Lazlo"
        ],
        "tier": 4
      },
      {
        "name": "Rekindle",
        "description": "Lazlo's Heat Meter :",
        "levels": [
          "Restores 1 Health every 1s as it drains",
          "Restores 1 Resolve every 1s as it drains",
          "Restores 15 Health and Resolve when fully empties"
        ],
        "tier": 4
      },
      {
        "name": "Rush",
        "description": "When Lazlo's Armor goes on cooldown:",
        "levels": [
          "Lazlo gains 10 Warp stacks",
          "Lazlo gains 20 Warp stacks",
          "Lazlo has +15% Critical Hit chance",
          "Lazlo has +20% Critical Hit chance"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-smert",
    "name": "Smert the Apostate",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Playable Shell",
    "shellName": "Smert",
    "image": "assets/shells/smert.webp",
    "signature": [
      "Miracle: sacrifice health to halt time and enter Fight Stance; unarmed attacks inflict Chaos.",
      "Deadly Revelation: gain Faith at low health."
    ],
    "skills": [
      "Novertime",
      "Devotion",
      "Absolution",
      "Striker",
      "Fervor",
      "Resilience",
      "Kicker",
      "Tenacity",
      "Last Vow",
      "Beatdown",
      "Blessing",
      "Limitless"
    ],
    "skillDetails": [
      {
        "name": "Novertime",
        "description": "Each level improves Smert's Miracle",
        "levels": [
          "Miracle lasts 3s longer before going into Overtime",
          "Smert takes -20% the damage while in Overtime",
          "Miracle lasts 5s longer before going into Overtime",
          "Smert takes 5s the damage while in Overtime"
        ],
        "tier": 1
      },
      {
        "name": "Devotion",
        "description": "Each level improves Smert's Deadly Revelation",
        "levels": [
          "Faith regenerates 120% the Resolve",
          "Faith regenerates 130% the Resolve",
          "While Faithful any Resolve gain has 20% chance to fill Resolve completely"
        ],
        "tier": 1
      },
      {
        "name": "Absolution",
        "description": "Each level grants a new effect against negative conditions",
        "levels": [
          "Smert has 15% mitigation against Poison, Burn, Lightning and Frost",
          "Smert's mitigation of negative conditions is increased by 40% while Faithful",
          "Whenever a negative condition is mitigated Smert restores 5 Health",
          "When activating Miracle all negative conditions on Smert are cured"
        ],
        "tier": 1
      },
      {
        "name": "Striker",
        "description": "Each level improves Smert's Miracle",
        "levels": [
          "Fists inflict +1 Chaos stacks",
          "Fists inflict +2 Chaos stacks",
          "Each detonated Chaos stack deals +3 damage"
        ],
        "tier": 2
      },
      {
        "name": "Fervor",
        "description": "Each level improves Smert's Deadly Revelation",
        "levels": [
          "Smert gains Faith at 20% or lower health",
          "Smert gains Faith at 25% or lower health",
          "Smert gains Faith at 35% or lower health"
        ],
        "tier": 2
      },
      {
        "name": "Resilience",
        "description": "Each level makes Smert more resistant from being severed",
        "levels": [
          "At 10% or lower Health, Smert has 15% chance to negate a fatal blow healing by 5 instead",
          "At 15% or lower Health, Smert has 25% chance to negate a fatal blow healing by 10 instead",
          "At 25% or lower Health, Smert has 30% chance to negate a fatal blow healing by 15 instead"
        ],
        "tier": 2
      },
      {
        "name": "Kicker",
        "description": "Gain access to a Kick while in Fight Stance",
        "levels": [
          "Kicks inflict 3 Chaos stacks",
          "Kicks detonate Chaos stacks immediately",
          "Kicking an enemy has 15% chance to double their Chaos stacks before detonation"
        ],
        "tier": 3
      },
      {
        "name": "Tenacity",
        "description": "While Faithful :",
        "levels": [
          "Miracle cost -10% Resolve to activate",
          "Miracle cost -20% Resolve to activate",
          "Miracle cost -30% Resolve to activate"
        ],
        "tier": 3
      },
      {
        "name": "Last Vow",
        "description": "Smert permanently enters his Fight Stance and no longer uses a melee weapon",
        "levels": [
          "Fight Stance attacks deal 20 damage and 15 Stagger Damage",
          "Fight Stance attacks have 15% chance to restore 5 health",
          "Fight Stance attacks have +12% chance to strike critically",
          "Fight Stance attacks have 15% chance to deal massive Stagger Damage"
        ],
        "tier": 3
      },
      {
        "name": "Beatdown",
        "description": "Gain access to a Ground Punch while in Fight Stance that resumes time immediately",
        "levels": [
          "Ground Punch deals 5 Chaos stacks to all enemies in range",
          "Ground Punch deals 8 Chaos stacks to all enemies in range",
          "Ground Punch covers 150% the radius"
        ],
        "tier": 4
      },
      {
        "name": "Blessing",
        "description": "When Faithful :",
        "levels": [
          "Any healing received deals 10 splash damage around Smert",
          "Any healing received deals 15 splash damage around Smert",
          "Any healing received deals 20 splash damage around Smert"
        ],
        "tier": 4
      },
      {
        "name": "Limitless",
        "description": "While Miracle is active:",
        "levels": [
          "For every 32 Chaos stacks inflicted Smert has 5% chance to replenish Miracle’s duration by 3s",
          "For every 28 Chaos stacks inflicted Smert has 10% chance to replenish Miracle’s duration by 3s",
          "For every 25 Chaos stacks inflicted Smert has 15% chance to replenish Miracle’s duration by 3s"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-eredrim",
    "name": "Eredrim the Venerable",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Playable Shell",
    "shellName": "Eredrim",
    "image": "assets/shells/eredrim.webp",
    "signature": [
      "Executioner: execute low-health enemies and gain Slaughterer stacks on Riposte.",
      "Shoulder Bash: lunge into enemies and deal Break damage."
    ],
    "skills": [
      "Alacrity",
      "Massacre",
      "Apathy",
      "Anguish",
      "Tank",
      "Consecration",
      "Radiance",
      "Carnage",
      "Resonance",
      "Oppression",
      "Persistence",
      "Seal Affinity"
    ],
    "skillDetails": [
      {
        "name": "Alacrity",
        "description": "Each level reduces the Resolve cost of Eredrim's abilities",
        "levels": [
          "Shoulder Bash charges 20% faster",
          "-20% Shoulder Bash Resolve cost",
          "After killing an enemy with a Riposte, Eredrim's abilities cost No Resolve for 8 sec."
        ],
        "tier": 1
      },
      {
        "name": "Massacre",
        "description": "Each level improves Executioner",
        "levels": [
          "A Riposte grants 2 Slaughterer stacks",
          "A Riposte grants 3 Slaughterer stacks",
          "Killing an enemy with a Riposte grants 10 Slaughterer stacks."
        ],
        "tier": 1
      },
      {
        "name": "Apathy",
        "description": "Each level grants a new effect against Frost",
        "levels": [
          "Eredrim has 50% Frost mitigation",
          "Eredrim has Frost immunity",
          "Eredrim deals 20% damage to Frozen enemies"
        ],
        "tier": 1
      },
      {
        "name": "Anguish",
        "description": "Each level improves Shoulder Bash",
        "levels": [
          "Shoulder Bash deals 150% damage",
          "Shoulder Bash inflicts 10 Weak stacks",
          "Shoulder Bash deals massive Stagger Damage"
        ],
        "tier": 2
      },
      {
        "name": "Tank",
        "description": "Slaughterer stacks also provide damage reduction",
        "levels": [
          "0.15% damage reduction per stack",
          "0.18% damage reduction per stack",
          "0.2% damage reduction per stack"
        ],
        "tier": 2
      },
      {
        "name": "Consecration",
        "description": "When Eredrim uses Mether's Pulse :",
        "levels": [
          "Eredrim restores 15 Resolve",
          "Eredrim restores 15 Resolve",
          "Eredrim has 40% chance to fully restore Resolve"
        ],
        "tier": 2
      },
      {
        "name": "Radiance",
        "description": "Each level improves Ethereal Diapason",
        "levels": [
          "Ethereal Diapason deals 30 damage, 50 Break Damage to all enemies in range",
          "Ethereal Diapason deals 50 damage, 60 Break Damage to all enemies in range",
          "Ethereal Diapason inflicts 10 Fragile stacks to all enemies in range",
          "Ethereal Diapason has 200% the range"
        ],
        "tier": 3
      },
      {
        "name": "Carnage",
        "description": "Each level improves Executioner",
        "levels": [
          "Executed enemies rupture in a violent burst, spraying blood that deals 50 splash damage",
          "Executed enemies rupture in a violent burst, spraying blood that deals 70 splash damage",
          "Executed enemies rupture in a violent burst, spraying blood that deals 100 splash damage"
        ],
        "tier": 3
      },
      {
        "name": "Resonance",
        "description": "Enemies broken by the Ethereal Diapason:",
        "levels": [
          "Suffer from 5 Stasis stacks that last for 6s",
          "Suffer from 10 Stasis stacks that last for 8s",
          "Suffer from 18 Stasis stacks that last for 10s"
        ],
        "tier": 3
      },
      {
        "name": "Oppression",
        "description": "Each level improves Shoulder Bash",
        "levels": [
          "Shoulder Bash deals 110% Break Damage",
          "Shoulder Bash deals 120% Break Damage",
          "Shoulder Bash releases a frontal shockwave that inflicts 10 Trauma stacks but costs 20 more Resolve"
        ],
        "tier": 4
      },
      {
        "name": "Persistence",
        "description": "Each level improves Executioner",
        "levels": [
          "Only 50% of Slaughterer stacks are removed upon resting",
          "Only 50% of Slaughterer stacks are removed upon being severed",
          "Only 25% of Slaughterer stacks are removed upon resting",
          "Only 25% of Slaughterer stacks are removed upon being severed"
        ],
        "tier": 4
      },
      {
        "name": "Seal Affinity",
        "description": "Each level grants Eredrim various Seals improvements",
        "levels": [
          "Parry window is slightly longer",
          "A Riposte deals +20% damage",
          "A Riposte deals +35% damage",
          "Parry window is moderately longer"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-sariel",
    "name": "Sariel the Endless",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Playable Shell",
    "shellName": "Sariel",
    "image": "assets/shells/sariel.webp",
    "signature": [
      "Exodus of Thorns: send parasitic thorns after enemies, inflicting Curse and Pain on Sariel.",
      "Purge: Pain converts incoming damage; at maximum Pain, dodge faster."
    ],
    "skills": [
      "Growth",
      "Reaper",
      "Scourge",
      "Synthesis",
      "Remedy",
      "Frailty",
      "Torment",
      "Reversal",
      "Agonize",
      "Thornfall",
      "Restoration",
      "Affliction"
    ],
    "skillDetails": [
      {
        "name": "Growth",
        "description": "Each level improves Exodus of Thorns",
        "levels": [
          "Expelled thorns deal 20% more damage",
          "Expelled thorns deal 40% more damage",
          "Expelled thorns inflict 4 Perforation stacks"
        ],
        "tier": 1
      },
      {
        "name": "Reaper",
        "description": "Each level makes easier to cure Sariel's Pain",
        "levels": [
          "Damaging an enemy cures 25% more Pain",
          "Damaging an enemy has 50% chance to cure all Pain",
          "Ranged damage also cures Sariel's Pain"
        ],
        "tier": 1
      },
      {
        "name": "Scourge",
        "description": "Each level grants a new effect against Curse",
        "levels": [
          "Sariel has 50% Curse mitigation",
          "Sariel has Curse immunity",
          "Enemies stay Cursed for 30s"
        ],
        "tier": 1
      },
      {
        "name": "Synthesis",
        "description": "Each level improves Exodus of Thorns",
        "levels": [
          "Sariel thorns regrow 10% faster",
          "Sariel thorns regrow 20% faster",
          "Sariel thorns regrow 40% faster"
        ],
        "tier": 2
      },
      {
        "name": "Remedy",
        "description": "When Sariel cures all Pain :",
        "levels": [
          "Sariel generates a shockwave which inflicts 5 Trauma stacks",
          "Sariel generates a shockwave which inflicts 7 Trauma stacks",
          "Sariel generates a shockwave which inflicts 10 Trauma stacks"
        ],
        "tier": 2
      },
      {
        "name": "Frailty",
        "description": "When Sariel has no Pain :",
        "levels": [
          "70% of incoming damage is applied as Pain.",
          "80% of incoming damage is applied as Pain.",
          "100% of incoming damage is applied as Pain."
        ],
        "tier": 2
      },
      {
        "name": "Torment",
        "description": "Each level improves Exodus of Thorns",
        "levels": [
          "Thorns deal up to 300% Stagger Damage based on Sariel's Pain amount",
          "Thorns deal up to 200% damage based on Sariel's Pain amount",
          "Thorns start dealing up to 2 Break Damage based on Sariel's Pain amount"
        ],
        "tier": 3
      },
      {
        "name": "Reversal",
        "description": "Each level mitigates the negative effects of Pain",
        "levels": [
          "30% of the self-inflicted damage of a Cursed enemy, cures Sariel's Pain",
          "35% of the self-inflicted damage of a Cursed enemy, cures Sariel's Pain",
          "Cursed enemies self-inflicting damage also suffer from 15 Break Damage",
          "Riposte damage also cures Sariel's Pain"
        ],
        "tier": 3
      },
      {
        "name": "Agonize",
        "description": "As long as Sariel is at max Pain :",
        "levels": [
          "Resolve slowly refills over time up to 30%",
          "Resolve slowly refills over time up to 35%",
          "Resolve slowly refills over time up to 40%"
        ],
        "tier": 3
      },
      {
        "name": "Thornfall",
        "description": "Sariel releases a burst of thorns into the sky, which then rain down upon the current target",
        "levels": [
          "Expelled thorns deal 5 splash damage on impact",
          "Expelled thorns deal 8 splash damage on impact",
          "Sariel expels a total of 22 thorns",
          "Sariel expels a total of 25 thorns"
        ],
        "tier": 4
      },
      {
        "name": "Restoration",
        "description": "When Sariel uses Mether's Pulse :",
        "levels": [
          "Sariel cures 30% of Pain",
          "Sariel cures 50% of Pain",
          "Sariel cures 70% of Pain"
        ],
        "tier": 4
      },
      {
        "name": "Affliction",
        "description": "Damaging a Cursed enemy deals damage to all other cursed enemies",
        "levels": [
          "Other Cursed enemies take up to 30% of the original damage",
          "Other Cursed enemies take up to 40% of the original damage",
          "Other Cursed enemies take up to 50% of the original damage"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-gragu",
    "name": "Gragu the Insatiable",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Playable Shell",
    "shellName": "Gragu",
    "image": "assets/shells/gragu.webp",
    "signature": [
      "Staggering Blow: charge a powerful punch; longer charge deals more damage.",
      "Revered Heart: restore health, replenished by slaying foes."
    ],
    "skills": [
      "Escalation",
      "Bloodthirst",
      "Heartwork",
      "Attunement",
      "Harvest",
      "Maniac",
      "Anger",
      "Bloodlust",
      "Devourer",
      "Heartless",
      "Hunger",
      "Fortify"
    ],
    "skillDetails": [
      {
        "name": "Escalation",
        "description": "Each level improves Staggering Blow",
        "levels": [
          "Staggering Blow deals 150% damage",
          "Staggering Blow deals 165% damage",
          "Staggering Blow deals 170% damage"
        ],
        "tier": 1
      },
      {
        "name": "Bloodthirst",
        "description": "Each level improves Revered Heart",
        "levels": [
          "Each kill replenishes Revered Heart by an additional 20%",
          "Each kill replenishes Revered Heart by an additional 50%",
          "Each kill replenishes Revered Heart by an additional 80%"
        ],
        "tier": 1
      },
      {
        "name": "Heartwork",
        "description": "Each level grants a new effect against Bloodcurse",
        "levels": [
          "Gragu has 50% Bloodcurse mitigation",
          "Gragu has Bloodcurse immunity",
          "When inflicting Bloodcurse, Gragu has a 3% chance to fully replenish Revered Heart."
        ],
        "tier": 1
      },
      {
        "name": "Attunement",
        "description": "Each level reduces the Resolve cost of Staggering Blow",
        "levels": [
          "Staggering Blow costs 20% less Resolve",
          "Staggering Blow costs 30% less Resolve",
          "Staggering Blow costs 50% less Resolve"
        ],
        "tier": 2
      },
      {
        "name": "Harvest",
        "description": "Each level improves Revered Heart",
        "levels": [
          "Revered Heart restores 15 additional Health",
          "Revered Heart can be used up to 4 times",
          "Revered Heart restores 30 additional Health",
          "Revered Heart can be used up to 8 times"
        ],
        "tier": 2
      },
      {
        "name": "Maniac",
        "description": "Melee attacks deal more damage against enemies Gragu has never killed before",
        "levels": [
          "Melee attacks deal 120% damage",
          "Melee attacks deal 130% damage",
          "Melee attacks deal 140% damage"
        ],
        "tier": 2
      },
      {
        "name": "Anger",
        "description": "Each level improves Staggering Blow",
        "levels": [
          "Staggering Blow inflicts 5 Weak stacks",
          "Staggering Blow inflicts 5 Fragile stacks",
          "Staggering Blow deals 40 Break Damage"
        ],
        "tier": 3
      },
      {
        "name": "Bloodlust",
        "description": "When Gragu uses Revered Heart :",
        "levels": [
          "Gragu's next melee attack deals 200% damage",
          "Gragu has 50% chance to cure all negative conditions",
          "Gragu obtains 15 Warp stacks"
        ],
        "tier": 3
      },
      {
        "name": "Devourer",
        "description": "While Revered Heart power is full:",
        "levels": [
          "Gragu kills grant 15% additional Gloom",
          "Gragu kills grant 15 additional Resolve",
          "Gragu kills restore 20 Health"
        ],
        "tier": 3
      },
      {
        "name": "Heartless",
        "description": "Staggering Blow rips out the victim’s heart when used against small and medium humanoids and:",
        "levels": [
          "Gragu kills them immediately",
          "Gragu restores 15 Health",
          "Enemies explode into a bloody mist that deal 150 splash damage"
        ],
        "tier": 4
      },
      {
        "name": "Hunger",
        "description": "Each level improves Revered Heart",
        "levels": [
          "While Revered Heart is depleted, Gragu has +30% Critical Hit chance",
          "While Revered Heart is depleted, Gragu has +40% Critical Hit chance",
          "While Revered Heart is depleted, Gragu has +60% Critical Hit chance"
        ],
        "tier": 4
      },
      {
        "name": "Fortify",
        "description": "Each level improves Revered Heart",
        "levels": [
          "Resting at a Beacon replenishes Revered Heart up to 1 uses",
          "Resting at a Beacon replenishes Revered Heart up to 2 uses",
          "Resting at a Beacon replenishes Revered Heart up to 3 uses"
        ],
        "tier": 4
      }
    ]
  },
  {
    "id": "shell-harros",
    "name": "Harros the Vassal",
    "kind": "shell",
    "region": "Fainweald",
    "scope": "base",
    "order": 4,
    "category": "Prologue only",
    "shellName": "Harros",
    "image": "assets/shells/harros.png",
    "signature": [
      "Stone Stun: petrify nearby enemies; they cannot act and take Break damage instead of damage."
    ],
    "skills": []
  }
].map(item => ({ aliases: [], relatedIds: [], ...item }));
