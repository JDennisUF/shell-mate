// Shared definitions for colored combat terms in Shell Mate.
export const glossary = [
  { id: "health", term: "Health", group: "Core combat", definition: "A Shell’s durability. When it runs out, the Harbinger is expelled from that Shell." },
  { id: "resolve", term: "Resolve", group: "Core combat", definition: "Combat resource gained by damaging enemies and spent on weapon abilities, shell abilities, and sidearm attacks." },
  { id: "critical-chance", term: "Critical Chance", group: "Core combat", definition: "The chance that an attack becomes a critical hit." },
  { id: "critical-damage", term: "Critical Damage", group: "Core combat", definition: "The damage dealt by a critical hit; bonuses to this stat make critical hits stronger." },
  { id: "break-damage", term: "Break Damage", group: "Core combat", definition: "Damage that fills an enemy’s Break meter. Breaking an enemy leaves it vulnerable to a Riposte." },
  { id: "stagger-damage", term: "Stagger Damage", group: "Core combat", definition: "Damage that builds toward staggering a target and interrupting its action." },
  { id: "faithful-doubles", term: "Faithful Doubles", group: "Genessa’s abilities", definition: "Genessa summons doubles that perform one weapon attack and then vanish." },
  { id: "stray-doubles", term: "Stray Doubles", group: "Genessa’s abilities", definition: "For a duration, Genessa automatically summons doubles that copy her weapon and sidearm attacks." },
  { id: "bloodcurse", term: "Bloodcurse", group: "Conditions", definition: "Deals a burst of heavy damage after enough stacks are applied." },
  { id: "burn", term: "Burn", group: "Conditions", definition: "Deals accumulated damage over time." },
  { id: "curse", term: "Curse", group: "Conditions", definition: "At enough stacks, nullifies the cursed target’s next melee strike and turns it back on them." },
  { id: "fragile", term: "Fragile", group: "Conditions", definition: "Makes an affected target take extra weapon damage." },
  { id: "frost", term: "Frost", group: "Conditions", definition: "Freezes a target for a duration after enough stacks are applied." },
  { id: "leech", term: "Leech", group: "Conditions", definition: "Gain stacks by slaying enemies. Each stack raises maximum Health; all stacks are lost on death." },
  { id: "lightning", term: "Lightning", group: "Conditions", definition: "Deals damage over time. Enough repeated applications release a shockwave." },
  { id: "perforation", term: "Perforation", group: "Conditions", definition: "Makes an affected target take extra damage from sidearm attacks." },
  { id: "phantom", term: "Phantom", group: "Conditions", definition: "Stores splash and Stagger Damage, then releases the accumulated damage when the effect expires." },
  { id: "poison", term: "Poison", group: "Conditions", definition: "A long lasting effect that deals damage over time." },
  { id: "stasis", term: "Stasis", group: "Conditions", definition: "Slows a target by distorting time. More stacks increase the slowing effect." },
  { id: "trauma", term: "Trauma", group: "Conditions", definition: "Deals Break Damage over time." },
  { id: "warp", term: "Warp", group: "Conditions", definition: "Increases weapon attack speed as stacks build." },
  { id: "weak", term: "Weak", group: "Conditions", definition: "Reduces the damage dealt by an affected target." }
];

export const glossaryById = new Map(glossary.map(entry => [entry.id, entry]));
