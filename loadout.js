import { catalog } from './data.js';
import { tarstoneArtwork } from './tarstone-art.js';
import { glossary } from './glossary.js';

const compat = await fetch('./tarstone-compatibility.json').then(r => r.json());
const norm = s => (s || '').toLowerCase().replace(/[’‘]/g, "'").replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
const lookup = stone => Object.entries(compat).find(([name]) => [stone.name, ...(stone.aliases || [])].some(n => norm(n) === norm(name)))?.[1];
const slots = ['melee-Abilities','melee-Infusions','melee-Combat','sidearm-Abilities','sidearm-Infusions','sidearm-Combat', ...[1,2,3,4].map(i => `support-${i}`)];
const defaultState = () => ({ melee: '', sidearm: '', stones: {}, levels: {}, concise: false });
let state; try { state = { ...defaultState(), ...JSON.parse(localStorage.getItem('shell-mate-loadout') || '{}') }; } catch { state = defaultState(); }
const save = () => { try { localStorage.setItem('shell-mate-loadout', JSON.stringify(state)); } catch {} };
const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; };
const stoneById = id => catalog.tarstones.find(s => s.id === id);
// Discard selections saved in a slot that no longer matches the catalog category.
for (const [key, id] of Object.entries(state.stones)) {
 const stone = stoneById(id);
 const category = key.startsWith('support-') ? 'Support' : key.split('-')[1];
 if (!stone || stone.category !== category) delete state.stones[key];
}
save();
function status(stone, type, gear) {
  if (type === 'support') return 'compatible';
  const info = lookup(stone);
  if (info?.slot === 'none') return 'no';
  if (!info || !['melee','sidearm','both'].includes(info.slot)) return 'unknown';
  if (info.slot !== 'both' && info.slot !== type) return 'no';
  if (!info.fits) return 'unknown';
  if (!info.fits.length) return 'compatible';
  return info.fits.some(n => norm(n) === norm(gear?.name)) ? 'compatible' : 'no';
}
function picker(label, selected, items, imageFor, onSelect, disabled = false, noteFor = () => '') {
 const button = el('button', 'picker-trigger', selected?.name || 'Choose an item');
 button.type = 'button'; button.disabled = disabled; button.setAttribute('aria-label', `${label}: ${selected?.name || 'empty'}`); button.setAttribute('aria-haspopup', 'dialog');
 button.addEventListener('click', () => {
  const dialog = el('dialog', 'picker-dialog');
  dialog.setAttribute('aria-label', `Choose ${label}`);
  const header = el('div', 'picker-header'); header.append(el('h2', '', `Choose ${label}`));
  const close = el('button', 'picker-close', 'Close'); close.type = 'button'; close.addEventListener('click', () => dialog.close()); header.append(close); dialog.append(header);
  const grid = el('div', 'picker-grid');
  const empty = el('button', 'picker-option picker-empty', '✕'); empty.type = 'button'; empty.append(el('span', '', 'Empty slot')); empty.addEventListener('click', () => { dialog.close(); onSelect(''); }); grid.append(empty);
  for (const item of items) {
   const option = el('button', 'picker-option' + (selected?.id === item.id ? ' is-selected' : '')); option.type = 'button';
   const img = el('img'); img.src = imageFor(item) || 'assets/categories/tarstones.png'; img.alt = ''; img.loading = 'lazy';
   option.append(img, el('span', '', item.name)); const note = noteFor(item); if (note) option.append(el('small', '', note));
   option.addEventListener('click', () => { dialog.close(); onSelect(item.id); }); grid.append(option);
  }
  dialog.append(grid); document.body.append(dialog); dialog.addEventListener('close', () => { dialog.remove(); if (button.isConnected) button.focus(); }); dialog.showModal(); close.focus();
 });
 return button;
}
const keywordMap = new Map(glossary.map(item => [item.term.toLowerCase(), item.id]));
const keywordPattern = new RegExp(`\\b(${[...glossary].sort((a,b) => b.term.length - a.term.length).map(item => item.term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join('|')})\\b`, 'gi');
function effectText(text) {
 const p = el('p', 'effect-description'); let last = 0;
 for (const match of text.matchAll(keywordPattern)) {
  p.append(document.createTextNode(text.slice(last, match.index)));
  p.append(el('span', `tarstone-keyword tarstone-keyword-${keywordMap.get(match[0].toLowerCase())}`, match[0]));
  last = match.index + match[0].length;
 }
 p.append(document.createTextNode(text.slice(last))); return p;
}
// Indexes of upgrades that remain distinct at level 3; unspecified stones use only the final upgrade.
const retainedUpgrades = {
 'Unstable Stone': [1, 2], 'Acolyte’s Stone': [0, 1, 2],
 'Magdalena’s Memento': [0, 1, 2], 'Captive’s Scabstone': [0, 1, 2],
 'Conqueror’s Reward': [0, 1, 2], 'Infused Stone': [0, 1, 2],
 'Shrike Stone': [0, 1, 2], 'Colossus Stone': [1, 2],
 'Lost Clotstone': [0, 1, 2], 'Scholar’s Wormstone': [1, 2],
 'Clockwork Shardstone': [1, 2], 'Hexapod Core': [0, 1, 2],
 'Solnir Shard': [1, 2], 'Fusillade Stone': [1, 2],
 'Fulminant Stone': [1, 2], 'Strange Remnant': [1, 2],
 'Infested Stone': [0, 1, 2], 'Summoning Stone': [1, 2],
 'Hand of Rock': [0, 1, 2], 'Guitarstone': [0, 1, 2]
};
const infusionEffects = {
 'Arbiter’s Prize':'Bloodcurse', 'Serpent Stone':'Poison', 'Voltaic Crown':'Lightning',
 'Warden’s Stone':'Frost', 'Curseblood Stone':'Curse', 'Nightgrasp Stone':'Phantom',
 'Torpor Stone':'Stasis', 'Wretchcaller’s Stone':'Trauma', 'Inflamed Clawstone':'Burn',
 'Hag Stone':'Poison', 'Emberseed Stone':'Burn', 'Viletongue Hedron':'Bloodcurse',
 'Voltaic Amber':'Lightning', 'Frostshard Stone':'Frost', 'Monarch’s Vestige':'Phantom',
 'Accursed Stone':'Curse', 'Weeping Stone':'Trauma'
};
function render() {
 const gearRoot = document.querySelector('#gear'); gearRoot.replaceChildren();
 for (const [type, label, list] of [['melee','Melee weapon',catalog.weapons],['sidearm','Sidearm',catalog.sidearms]]) {
  const card = el('div','gear-card'); const gear = list.find(x=>x.id===state[type]);
  if (gear?.image) { const img=el('img','gear-image'); img.src=gear.image; img.alt=''; card.append(img); } else card.append(el('div','gear-placeholder','⚔'));
  const body=el('div','gear-body'); const lab=el('div','slot-label',label);
  lab.append(picker(label, gear, list, item => item.image, value => {state[type]=value; for(const key of slots.filter(k=>k.startsWith(type+'-'))) { const stone=stoneById(state.stones[key]); if(stone && (!value || status(stone,type,list.find(x=>x.id===value))==='no')) delete state.stones[key]; } save(); render();})); body.append(lab); card.append(body); gearRoot.append(card);
 }
 const root=document.querySelector('#slots'); root.replaceChildren();
 for (const [type,title] of [['melee','Weapon stones'],['sidearm','Sidearm stones'],['support','Support stones']]) {
  const section=el('section','stone-section'); section.append(el('h3','section-title',title));
  const keys=slots.filter(k=>k.startsWith(type+'-'));
  for(const key of keys) {
   const category=type==='support'?'Support':key.split('-')[1]; const gear=(type==='melee'?catalog.weapons:catalog.sidearms).find(x=>x.id===state[type]);
   const row=el('div','stone-slot'); const selected=stoneById(state.stones[key]);
   const img=el('img','stone-icon'); img.src=tarstoneArtwork[selected?.id] || 'assets/categories/tarstones.png'; img.alt=''; row.append(img);
   const label=el('div','slot-label',type==='support'?`Support ${key.split('-')[1]}`:category.replace('Infusions','Infusion').replace('Abilities','Ability'));
   const candidates=catalog.tarstones.filter(s=>s.category===category && (!Object.entries(state.stones).some(([k,id])=>k!==key && id===s.id)) && status(s,type,gear)!=='no');
   candidates.sort((a,b)=>a.name.localeCompare(b.name));
   label.append(picker(`${title} ${label.textContent}`, selected, candidates, item => tarstoneArtwork[item.id], value => {state.stones[key]=value;save();render();}, type!=='support'&&!gear, item => status(item,type,gear)==='unknown' ? 'Compatibility unknown' : '')); row.append(label); section.append(row);
  } root.append(section);
 }
 const effects=document.querySelector('#effects'); effects.replaceChildren(); effects.classList.toggle('is-concise', !!state.concise); document.querySelector('#concise').checked = !!state.concise; let count=0;
 for (const [title, keys] of [['Abilities', ['melee-Abilities', 'sidearm-Abilities']], ['Infusions', ['melee-Infusions', 'sidearm-Infusions']], ['Combat', ['melee-Combat', 'sidearm-Combat']], ['Support', slots.filter(key => key.startsWith('support-'))]]) {
  const selectedKeys = keys.filter(key => stoneById(state.stones[key]));
  if (!selectedKeys.length) continue;
  const group = el('section', 'effect-group'); if (!state.concise) group.append(el('h3', 'effect-divider', title)); effects.append(group);
 for(const key of selectedKeys) { const stone=stoneById(state.stones[key]); count++; const card=el('article','effect-card');
  if (!state.concise) {
   if (!key.startsWith('support')) card.append(el('p','effect-type',key.startsWith('melee')?'Weapon':'Sidearm'));
   card.append(el('h4','effect-name',stone.name));
  }
  const levels=stone.levelEffects || [];
  if (stone.category === 'Infusions' && infusionEffects[stone.name]) {
   card.append(effectText(`${key.startsWith('melee') ? 'Weapon' : 'Sidearm'} is infused with ${infusionEffects[stone.name]}.`));
   if (/critical hits only/i.test(stone.description || '')) card.append(effectText('Inflicted on Critical Hits only.'));
  } else {
   let description = stone.description;
   const costUpgrade = levels.find(effect => /Resolve cost (?:reduced|increased) to \d+/i.test(effect));
   if (description && costUpgrade) {
    const cost = costUpgrade.match(/to (\d+)/i)?.[1];
    description = description.replace(/Consume \d+ Resolve/i, `Consume ${cost} Resolve`);
   }
   if (description) card.append(effectText(description));
   if (levels.length) {
    const indexes = retainedUpgrades[stone.name] || [levels.length - 1];
    indexes.forEach(index => { if (levels[index]) card.append(effectText(levels[index])); });
   } else if (stone.fixedEffect) card.append(effectText(stone.fixedEffect));
   else if (!description) card.append(effectText('Effect details not yet documented.'));
  }
  const type=key.split('-')[0]; const gear=(type==='melee'?catalog.weapons:catalog.sidearms).find(x=>x.id===state[type]); if(!state.concise && status(stone,type,gear)==='unknown') card.append(el('p','uncertain','Compatibility not yet verified.')); group.append(card);
 }
 }
 if(!count) effects.append(el('p','empty-effects','Your selected stones and their effects will appear here.'));
}
document.querySelector('#concise').addEventListener('change', event => { state.concise = event.target.checked; save(); render(); });
document.querySelector('#reset').addEventListener('click',()=>{state=defaultState();save();render();}); render();
