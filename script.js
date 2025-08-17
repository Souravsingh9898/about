// AOS (Animate On Scroll) – repeat animations on every scroll into view
AOS.init({
  duration: 1100,
  once: false
});

// Current year in footer
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// Lightweight floating stars (copyright-free motion)
(function makeStars() {
  const wrap = document.getElementById('stars');
  if (!wrap) return;

  const STAR_COUNT = 70; // adjust for more/less
  for (let i = 0; i < STAR_COUNT; i++) {
    const s = document.createElement('span');
    const size = Math.random() * 2.2 + 0.8; // 0.8–3 px
    s.style.position = 'absolute';
    s.style.width = `${size}px`;
    s.style.height = `${size}px`;
    s.style.borderRadius = '50%';
    s.style.background = 'rgba(255,255,255,.9)';
    s.style.top = Math.random() * 100 + '%';
    s.style.left = Math.random() * 100 + '%';

    const time = 3 + Math.random() * 4;
    const delay = Math.random() * 2;
    s.style.animation = `twinkle ${time}s ease-in-out ${delay}s infinite`;
    wrap.appendChild(s);
  }

  // Inject keyframes once
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%, 100% { opacity:.25; transform: translateY(0) scale(.9); filter: blur(.2px); }
      50% { opacity:1; transform: translateY(-6px) scale(1.15); filter: blur(0); }
    }
  `;
  document.head.appendChild(style);
})();
