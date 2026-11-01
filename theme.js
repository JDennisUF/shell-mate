(() => {
  const key = 'shell-mate-theme';
  const themes = new Set([
    'obsidian', 'porcelain-prime', 'second-son', 'sanguine-prophet', 'king-in-yellow', 'warden', 'ophidian', 'bonegrafted', 'apocryphal', 'anointed-butcher', 'white-knight', 'red-kingsnake', 'lunar-emissary', 'gilded-scarab', 'sapphire-herald', 'regal-druzhina', 'queen-of-hearts'
  ]);
  const normalize = value => themes.has(value) ? value : 'default';
  const apply = value => {
    const theme = normalize(value);
    document.documentElement.dataset.theme = theme;
    const picker = document.getElementById('theme-select');
    if (picker) picker.value = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'ophidian' ? '#e9e2d2' : theme === 'default' ? '#181b1b' : '#0b0b10';
  };
  try { apply(localStorage.getItem(key)); } catch { apply('default'); }
  document.addEventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('theme-select');
    picker.value = normalize(document.documentElement.dataset.theme);
    picker.addEventListener('change', () => {
      apply(picker.value);
      try { localStorage.setItem(key, picker.value); } catch { /* Keep the selection for this session. */ }
    });
  });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) apply(event.key === null ? null : event.newValue);
  });
})();
