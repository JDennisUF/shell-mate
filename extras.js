const shadePairs = [['Genessa','Porcelain Prime'],['Lazlo','Second Son'],['Smert','Sanguine Prophet'],['Eredrim','King in Yellow'],['Gragu','Warden'],['Tiel','Ophidian'],['Proxima','Bonegrafted'],['Sariel','Apocryphal']];
export const shades = shadePairs.map(([shell, name], i) => ({order:i, aliases:[],id:`shade-${shell.toLowerCase()}`, name, kind:'shade', category:shell, region:'Marrow Keep', scope:'base', steps:[`Find the ${shell} Shell first.`, `Go to the elevator room in Marrow Keep and open the chest labeled ${shell} with a Blackmarrow Key.`, 'Change the Shade at any Beacon.', 'Keys have been reported in the Desolate Ruins, Child’s Feeding Ground, behind the Ova at Conquered Temple, beneath the tower near Sester’s Abbey, and at the Abandoned Outpost merchant or Shrine of Sorrows in Night Mode.'], sources:['shade-guide','shade-keys']}));
const autumnShades = [
  ["Eredrim", "Anointed Butcher", "Fainweald", "dungeon-02", ["In Night Mode, head down the slope from Gloomshade Grove to the giant mushroom and accept its invitation.", "Explore Primeval Dungeon and collect the Shade."]],
  ["Lazlo", "White Knight", "Fainweald", "dungeon-03", ["In Night Mode, travel from Gloomshade Grove through the Citadel of Penance, taking the right-hand route to the Obscured Market Ghost Beacon.", "Enter and collect the Shade."]],
  ["Tiel", "Red Kingsnake", "Fainweald", "dungeon-04", ["In Night Mode, cross the bridge from Outskirts of Nochte into Hag’s Path swamp and interact with the Shrouded Mire Ghost Beacon.", "Explore the area and collect the Shade."]],
  ["Smert", "Lunar Emissary", "Ruins of Mammon", "dungeon-06", ["In Night Mode, interact with the mechanism behind the High Lord’s Courtyard beacon pillar to enter The Sideway.", "Collect the Shade before leaving: the guide reports that the dungeon cannot be re-entered."]],
  ["Sariel", "Gilded Scarab", "Ruins of Mammon", "dungeon-11", ["In Night Mode, turn around from The Silent Steps, head forward and drop down. Interact with the statue to reveal a path.", "Follow it past four witches to the Secret Alcove Ghost Beacon; enter and collect the Shade."]],
  ["Genessa", "Sapphire Herald", "Ruins of Mammon", "dungeon-12", ["In Night Mode, turn around from Sester’s Gate, climb the stone stairs, turn left and go through the doorway.", "Interact with the Concealed Lookout Ghost Beacon on the right and collect the Shade."]],
  ["Gragu", "Regal Druzhina", "Ruins of Mammon", "dungeon-13", ["In Night Mode, enter the Cleansed Gate beside Sester’s Gate.", "Follow the Valley of the Revered path to the torch-lit entrance of Icebound Chamber and collect the Shade inside."]],
  ["Proxima", "Queen of Hearts", "Prisoners’ Domain", "dungeon-15", ["From Hangman’s Scaffold, climb the nearby stairs, cross the bridge, turn left and climb again. Enter Neglected Ward on the right.", "Collect the Shade during the boss fight: the doors lock afterward and re-entry is uncertain."]]
];
shades.push(...autumnShades.map(([shell, name, region, dungeon, steps], i) => ({id:`shade-rotten-${shell.toLowerCase()}`, order:i+8, aliases:[], name, kind:'shade', category:shell, region, scope:'rotten-autumn', steps, relatedIds:[dungeon], sources:['rotten-dungeons']})));
const list = `You’re More Than a Weapon|Claim your first Shell, weapon and sidearm
Home at Last|Reach Marrow Keep
Mid Summer?|Enter the Festival
Haunting Times|Watch your first Shell Memory
This is Not an Achievement|Complete Mortal Shell II
Seeking the Past|Watch all Shell Memories
No Lifer|Unlock every other achievement
Forever Alone?|Unlock Tiel
Arrival|Unlock Proxima
Vengeance is Mine|Unlock Eredrim
Heartless|Unlock Gragu
My Brether|Unlock Smert
The Alchemist|Unlock Sariel
Down with the Thickness|Unlock Lazlo
Shell Seeker|Unlock all Shells
Decked Out|Reach maximum bonding tier with a Shell
Deep Cuts|Obtain Axe and Dagger
Old School|Obtain the Forgotten Crossbow
Cut You Down to Size|Obtain the Veteran’s Battle Axe
Big Boi|Obtain the Great Martyr’s Blade
Chop Chop|Obtain the Salvaged Trebuchaxe
Dual Wielding|Obtain the Axatana
Old Painless|Obtain the Triarch Repeater
Point Taken|Obtain the Black Needle
Like Clockwork|Obtain the Clockwork Scythe
Spiked|Obtain the Caged Hystrix
Stop - Hammer Time|Obtain the Obsidian Hammer
Beautiful Baby|Obtain the Cursed Child
Speared|Obtain the Ballistazooka
Over 9000|Max out a weapon at the Tarforge
Lord of War|Obtain every weapon
Guns. Lots of Guns|Obtain every sidearm
Heavy Metal|Play every Lute track
Sat Nav|Find all map fragments
Bring My Ova Back to Me|Collect all Ova
Stoned|Find all Tarstones
So Fresh, So Clean|Cleanse every Beacon
Wheelie Good Time|Defeat Magdalena, the Lady of the Woods
Meat’s Back on the Menu, Boys!|Defeat the Lost Child
Headcase|Defeat the Nameless Captive
No, You Still Can’t Win|Reduce the tutorial Tar Golem to minimum health
Baghead|Complete Baghead’s quest
Sester|Unlock Sester Genessa
Feed Me|Feed Egon until he passes away
Ascension|Discover the secret of the Mango
Something in the deep…|Defeat Hexapod
It burnssssssssss|Defeat Droeg, the Conqueror
Nightmare Fuel|Defeat Sir Isaac, the Scholar-Prince
Lost Your Head|Defeat Orrem, the Reclaimed
Ultimate Gainz|Defeat the Malborn Offspring
Praise him!|Defeat the Monolith
It’s over now?|Defeat Zmey, the Unbidden
Peter’s Perfect Parry|Parry the Nameless Captive’s full headspin combo`;
export const achievements = list.split('\n').map((line,i) => { const [name,description] = line.split('|'); return {order:i, aliases:[], id:`achievement-${i+1}`,name,description,kind:'achievement',category:'Achievement',region:'Various',scope:'base',steps:[description],sources:['achievement-guide']}; });
