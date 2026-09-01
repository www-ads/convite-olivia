const loadingScreen = document.getElementById('loadingScreen');
window.addEventListener('load', () => setTimeout(() => loadingScreen?.classList.add('hidden'), 450));

const target = new Date('2026-10-03T17:00:00-03:00').getTime();
function updateCountdown() {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  const values = { days: d, hours: h, minutes: m, seconds: s };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, '0');
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
