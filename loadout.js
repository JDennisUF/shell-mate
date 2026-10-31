import { catalog } from './data.js';
import { tarstoneArtwork } from './tarstone-art.js';
import { glossary, keywordAliases } from './glossary.js';

const compat = await fetch('./tarstone-compatibility.json').then(r => r.json());
const norm = s => (s || '').toLowerCase().replace(/[’‘]/g, "'").replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
const lookup = stone => Object.entries(compat).find(([name]) => [stone.name, ...(stone.aliases || [])].some(n => norm(n) === norm(name)))?.[1];
const slots = ['melee-Abilities','melee-Infusions','melee-Combat','sidearm-Abilities','sidearm-Infusions','sidearm-Combat', ...[1,2,3,4].map(i => `support-${i}`)];
const defaultState = () => ({ melee: '', sidearm: '', stones: {}, levels: {}, gearStones: { melee: {}, sidearm: {} }, concise: false });
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
state.gearStones ||= { melee: {}, sidearm: {} };
for (const type of ['melee', 'sidearm']) {
 state.gearStones[type] ||= {};
 if (state[type] && !state.gearStones[type][state[type]]) rememberGear(type);
}
save();
function rememberGear(type) {
 if (!state[type]) return;
 state.gearStones[type][state[type]] = Object.fromEntries(slots.filter(key => key.startsWith(type + '-') && state.stones[key]).map(key => [key, state.stones[key]]));
}
function selectGear(type, value, list) {
 rememberGear(type);
 state[type] = value;
 const keys = slots.filter(key => key.startsWith(type + '-'));
 for (const key of keys) delete state.stones[key];
 const gear = list.find(item => item.id === value);
 for (const key of keys) {
  const id = state.gearStones[type][value]?.[key];
  const stone = stoneById(id);
  if (gear && stone && stone.category === key.split('-')[1] && status(stone, type, gear) !== 'no' && !Object.values(state.stones).includes(id)) state.stones[key] = id;
 }
 save(); render();
}
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
  const preview = /^(Weapon|Sidearm|Support) stones /.test(label) ? el('div', 'stone-preview') : null;
  if (preview) { preview.id = 'stone-picker-preview'; preview.hidden = true; preview.setAttribute('role', 'tooltip'); }
  const empty = el('button', 'picker-option picker-empty', '✕'); empty.type = 'button'; empty.append(el('span', '', 'Empty slot')); empty.addEventListener('click', () => { dialog.close(); onSelect(''); }); grid.append(empty);
  for (const item of items) {
   const option = el('button', 'picker-option' + (selected?.id === item.id ? ' is-selected' : '')); option.type = 'button';
   const img = el('img'); img.src = imageFor(item) || 'assets/categories/tarstones.png'; img.alt = ''; img.loading = 'lazy';
   option.append(img, el('span', '', item.name));
   if (preview) {
    option.setAttribute('aria-describedby', preview.id);
    const showPreview = () => {
     preview.replaceChildren(el('strong', '', item.name));
     if (!label.startsWith('Support stones ')) {
     const type = label.startsWith('Weapon stones ') ? 'melee' : 'sidearm';
     const gearList = type === 'melee' ? catalog.weapons : catalog.sidearms;
     const compatibility = el('div', 'stone-compatibility');
     compatibility.setAttribute('aria-label', `${type === 'melee' ? 'Weapon' : 'Sidearm'} compatibility`);
     for (const gear of gearList) {
      const result = status(item, type, gear);
      const icon = el('span', `compatibility-icon is-${result}`);
      const description = `${gear.name}: ${result === 'no' ? 'incompatible' : result === 'unknown' ? 'compatibility unknown' : 'compatible'}`;
      icon.setAttribute('aria-label', description); icon.title = description;
      const image = el('img'); image.src = gear.image; image.alt = ''; icon.append(image);
      if (result === 'unknown') icon.append(el('span', 'compatibility-unknown', '?'));
      compatibility.append(icon);
     }
     preview.append(compatibility);
     }
     if (item.description) preview.append(effectText(item.description, true));
     const levels = item.levelEffects || [];
     if (levels.length) levels.forEach((effect, index) => {
      const row = effectText(effect, true); row.prepend(document.createTextNode(`Rank ${index + 1}: `)); preview.append(row);
     });
     else if (item.fixedEffect) preview.append(effectText(item.fixedEffect, true));
     else if (!item.description) preview.append(effectText('Effect details not yet documented.'));
     preview.hidden = false;
     const rect = option.getBoundingClientRect();
     const width = preview.offsetWidth;
     const height = preview.offsetHeight;
     const left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8));
     const below = rect.bottom + 8;
     const top = below + height <= window.innerHeight - 8 ? below : Math.max(8, rect.top - height - 8);
     preview.style.left = `${left}px`;
     preview.style.top = `${top}px`;
    };
    option.addEventListener('mouseenter', showPreview);
    option.addEventListener('focus', showPreview);
    option.addEventListener('mouseleave', () => { if (document.activeElement !== option) preview.hidden = true; });
    option.addEventListener('blur', () => { preview.hidden = true; });
   }
   const note = noteFor(item); if (note) option.append(el('small', '', note));
   option.addEventListener('click', () => { dialog.close(); onSelect(item.id); }); grid.append(option);
  }
  dialog.append(grid); if (preview) { dialog.append(preview); dialog.addEventListener('scroll', () => { preview.hidden = true; }); } document.body.append(dialog); dialog.addEventListener('close', () => { dialog.remove(); if (button.isConnected) button.focus(); }); dialog.showModal(); close.focus();
 });
 return button;
}
const keywordMap = new Map([...glossary.map(item => [item.term.toLowerCase(), item.id]), ...keywordAliases.map(([id, term]) => [term.toLowerCase(), id])]);
const keywordPattern = new RegExp(`\\b(${[...keywordMap.keys()].sort((a,b) => b.length - a.length).map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join('|')})\\b`, 'gi');
function effectText(text, highlightNumbers = true) {
 const p = el('p', 'effect-description'); let last = 0;
 const appendText = value => {
  if (!highlightNumbers) { p.append(document.createTextNode(value)); return; }
  let end = 0;
  for (const number of value.matchAll(/[+-]?\d+(?:[.,]\d+)*(?:%|\b)/g)) {
   p.append(document.createTextNode(value.slice(end, number.index)), el('span', 'stone-stat', number[0]));
   end = number.index + number[0].length;
  }
  p.append(document.createTextNode(value.slice(end)));
 };
 for (const match of text.matchAll(keywordPattern)) {
  appendText(text.slice(last, match.index));
  p.append(el('span', `tarstone-keyword tarstone-keyword-${keywordMap.get(match[0].toLowerCase())}`, match[0]));
  last = match.index + match[0].length;
 }
 appendText(text.slice(last)); return p;
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
  lab.append(picker(label, gear, list, item => item.image, value => selectGear(type, value, list))); body.append(lab); card.append(body); gearRoot.append(card);
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
   label.append(picker(`${title} ${label.textContent}`, selected, candidates, item => tarstoneArtwork[item.id], value => {state.stones[key]=value;if(type !== 'support') rememberGear(type);save();render();}, type!=='support'&&!gear, item => status(item,type,gear)==='unknown' ? 'Compatibility unknown' : '')); row.append(label); section.append(row);
  } root.append(section);
 }
 const effects=document.querySelector('#effects'); effects.replaceChildren(); effects.classList.toggle('is-concise', !!state.concise); document.querySelector('#concise').checked = !!state.concise; let count=0;
 const groups = state.concise
  ? [['Weapon', slots.filter(key => key.startsWith('melee-'))], ['Sidearm', slots.filter(key => key.startsWith('sidearm-'))], ['Support', slots.filter(key => key.startsWith('support-'))]]
  : [['Abilities', ['melee-Abilities', 'sidearm-Abilities']], ['Infusions', ['melee-Infusions', 'sidearm-Infusions']], ['Combat', ['melee-Combat', 'sidearm-Combat']], ['Support', slots.filter(key => key.startsWith('support-'))]];
 for (const [title, keys] of groups) {
  const selectedKeys = keys.filter(key => stoneById(state.stones[key]));
  if (!selectedKeys.length) continue;
  const group = el('section', 'effect-group'); group.append(el('h3', 'effect-divider', title)); effects.append(group);
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

const libraryKey = 'shell-mate-saved-loadouts-v1';
const nameInput = document.querySelector('#loadout-name');
const savedSelect = document.querySelector('#saved-loadouts');
const message = document.querySelector('#loadout-message');
function readLibrary() {
 try { const value = JSON.parse(localStorage.getItem(libraryKey) || '[]'); return Array.isArray(value) ? value : []; }
 catch { return []; }
}
function writeLibrary(library) {
 try { localStorage.setItem(libraryKey, JSON.stringify(library)); return true; }
 catch { message.textContent = 'Could not save loadouts in this browser.'; return false; }
}
function currentLoadout() {
 return { melee: state.melee, sidearm: state.sidearm, stones: Object.fromEntries(slots.filter(key => state.stones[key]).map(key => [key, state.stones[key]])) };
}
function validateLoadout(value) {
 if (!value || typeof value !== 'object' || Array.isArray(value) || typeof value.melee !== 'string' || typeof value.sidearm !== 'string' || !value.stones || typeof value.stones !== 'object' || Array.isArray(value.stones)) throw new Error('Invalid loadout file.');
 if ((value.melee && !catalog.weapons.some(x => x.id === value.melee)) || (value.sidearm && !catalog.sidearms.some(x => x.id === value.sidearm))) throw new Error('The loadout contains unknown equipment.');
 const seen = new Set();
 for (const [key, id] of Object.entries(value.stones)) {
  const stone = stoneById(id), type = key.split('-')[0];
  const gear = (type === 'melee' ? catalog.weapons : catalog.sidearms).find(x => x.id === value[type]);
  if (!slots.includes(key) || !stone || stone.category !== (type === 'support' ? 'Support' : key.split('-')[1]) || seen.has(id) || (type !== 'support' && (!gear || status(stone, type, gear) === 'no'))) throw new Error('The loadout contains an invalid Tarstone selection.');
  seen.add(id);
 }
 return { melee: value.melee, sidearm: value.sidearm, stones: { ...value.stones } };
}
function refreshLibrary(selected = '') {
 savedSelect.replaceChildren(new Option('Choose a loadout', ''));
 for (const entry of readLibrary()) if (typeof entry.name === 'string') savedSelect.add(new Option(entry.name, entry.name));
 savedSelect.value = selected;
}
function storeNamed(name, loadout) {
 const library = readLibrary();
 const index = library.findIndex(entry => entry.name === name);
 if (index < 0) library.push({ name, loadout }); else library[index] = { name, loadout };
 if (!writeLibrary(library)) return false;
 refreshLibrary(name); return true;
}
function getName() { const name = nameInput.value.trim(); if (!name) message.textContent = 'Enter a loadout name first.'; return name; }
document.querySelector('#save-loadout').addEventListener('click', () => {
 const name = getName(); if (name && storeNamed(name, currentLoadout())) message.textContent = `Saved “${name}”.`;
});
document.querySelector('#export-loadout').addEventListener('click', () => {
 const name = getName(); if (!name) return;
 const url = URL.createObjectURL(new Blob([JSON.stringify({ version: 1, type: 'shell-mate-loadout', name, loadout: currentLoadout() }, null, 2)], { type: 'application/json' }));
 const link = el('a'); link.href = url; link.download = 'shell-mate-loadout.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
 message.textContent = `Exported “${name}”.`;
});
document.querySelector('#import-loadout').addEventListener('click', () => document.querySelector('#loadout-file').click());
document.querySelector('#loadout-file').addEventListener('change', async event => {
 const file = event.target.files[0]; if (!file) return;
 try {
  const data = JSON.parse(await file.text());
  if (data?.version !== 1 || data.type !== 'shell-mate-loadout' || typeof data.name !== 'string' || !data.name.trim() || data.name.length > 100) throw new Error('Invalid loadout file.');
  const loadout = validateLoadout(data.loadout), name = data.name.trim();
  if (storeNamed(name, loadout)) { nameInput.value = name; message.textContent = `Imported “${name}”. Select Load to use it.`; }
 } catch (error) { message.textContent = error instanceof SyntaxError ? 'Invalid loadout file.' : error.message; }
 event.target.value = '';
});
document.querySelector('#load-loadout').addEventListener('click', () => {
 const entry = readLibrary().find(item => item.name === savedSelect.value);
 if (!entry) { message.textContent = 'Choose a saved loadout first.'; return; }
 try {
  const loadout = validateLoadout(entry.loadout);
  state = { ...defaultState(), ...loadout, concise: state.concise };
  rememberGear('melee'); rememberGear('sidearm'); save(); render(); nameInput.value = entry.name;
  message.textContent = `Loaded “${entry.name}”.`;
 } catch (error) { message.textContent = error.message; }
});
document.querySelector('#delete-loadout').addEventListener('click', () => {
 const name = savedSelect.value; if (!name) { message.textContent = 'Choose a saved loadout first.'; return; }
 if (writeLibrary(readLibrary().filter(entry => entry.name !== name))) { refreshLibrary(); message.textContent = `Deleted “${name}”.`; }
});
refreshLibrary();
