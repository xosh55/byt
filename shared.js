// ═══ BYYT.SE — SHARED JS ═══
// Theme toggle, bottom tab bar, nav, helper functions
// Loaded via <script src="shared.js"></script> in every page

// ── THEME ──
(function initTheme() {
  const saved = localStorage.getItem('byyt-theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();

function toggleTheme() {
  const html = document.documentElement;
  const isLight = html.getAttribute('data-theme') === 'light';
  if (isLight) {
    html.removeAttribute('data-theme');
    localStorage.setItem('byyt-theme', 'dark');
  } else {
    html.setAttribute('data-theme', 'light');
    localStorage.setItem('byyt-theme', 'light');
  }
  // Update toggle button icon
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = isLight ? '🌙' : '☀️';
}

function getThemeIcon() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? '☀️' : '🌙';
}

// ── NAV COUNTER (placeholder) ──
function getDailyCount() {
  // Deterministic "random" based on date so it's consistent within a day
  const today = new Date().toISOString().slice(0, 10);
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = ((hash << 5) - hash) + today.charCodeAt(i);
    hash |= 0;
  }
  return 500 + Math.abs(hash % 400);
}

// ── HELPERS ──
function getOperatorColor(name) {
  if (typeof OPERATOR_COLORS !== 'undefined') return OPERATOR_COLORS[name] || '#94A3B8';
  const op = typeof OPERATORS !== 'undefined' && OPERATORS.find(o => o.id === name || o.name === name);
  return op ? op.color : '#94A3B8';
}

function getOperatorName(id) {
  const op = typeof OPERATORS !== 'undefined' && OPERATORS.find(o => o.id === id);
  return op ? op.name : id;
}

function getOperatorNet(id) {
  const nets = {
    hallon: 'Tre', vimla: 'Telenor', fello: 'Telia', comviq: 'Tele2',
    halebop: 'Telia', chilimobil: 'Tre', telia: 'Telia', tre: 'Tre',
    telenor: 'Telenor', tele2: 'Tele2'
  };
  return nets[id] || '';
}

function formatPrice(price) {
  return price.toLocaleString('sv-SE') + ' kr';
}

function formatData(gb) {
  return gb >= 9999 ? 'Obegränsad' : gb + ' GB';
}

// ── REACT COMPONENTS (shared) ──
// These are available in all pages via Babel/JSX

// Operator Logo component
function OperatorLogo({ name, size = 40 }) {
  const color = getOperatorColor(name);
  const displayName = getOperatorName(name);
  const initial = displayName.charAt(0).toUpperCase();
  return React.createElement('div', {
    className: 'op-logo',
    style: {
      width: size, height: size,
      background: color + '20',
      color: color,
      fontSize: size * 0.4,
    }
  }, initial);
}

// Byyt Logo
function ByytLogo({ size = 30, onClick }) {
  return React.createElement('div', {
    className: 'nav-logo',
    onClick: onClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    'aria-label': onClick ? 'Gå till startsidan' : undefined,
    onKeyDown: onClick ? (e) => { if (e.key === 'Enter') onClick(); } : undefined,
  },
    React.createElement('svg', { width: size, height: size, viewBox: '0 0 120 120', 'aria-hidden': 'true' },
      React.createElement('defs', null,
        React.createElement('linearGradient', { id: 'logoG', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
          React.createElement('stop', { offset: '0%', stopColor: '#06D6A0' }),
          React.createElement('stop', { offset: '50%', stopColor: '#00B4D8' }),
          React.createElement('stop', { offset: '100%', stopColor: '#8B5CF6' })
        )
      ),
      React.createElement('circle', { cx: 60, cy: 60, r: 56, fill: 'url(#logoG)' }),
      React.createElement('g', { stroke: '#FFF', strokeWidth: 4.5, strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' },
        React.createElement('path', { d: 'M36 44L67 44' }),
        React.createElement('polyline', { points: '59,36 67,44 59,52' }),
        React.createElement('path', { d: 'M84 76L53 76' }),
        React.createElement('polyline', { points: '61,68 53,76 61,84' })
      )
    ),
    React.createElement('span', {
      style: {
        fontSize: size * 0.62,
        fontWeight: 800,
        letterSpacing: '-0.03em',
        background: 'linear-gradient(135deg, #06D6A0, #00B4D8, #8B5CF6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
    }, 'byyt')
  );
}

// Nav Bar component
function NavBar() {
  const count = getDailyCount();
  const icon = getThemeIcon();
  return React.createElement('nav', { className: 'nav', role: 'navigation', 'aria-label': 'Huvudnavigation' },
    React.createElement(ByytLogo, { size: 28, onClick: () => { window.location.href = '/'; } }),
    React.createElement('div', { className: 'nav-right' },
      React.createElement('div', { className: 'nav-counter hide-mobile' },
        React.createElement('span', null, count),
        ' jämförelser idag'
      ),
      React.createElement('button', {
        className: 'theme-toggle',
        onClick: toggleTheme,
        'aria-label': 'Byt tema',
        title: 'Byt mellan mörkt och ljust tema'
      }, icon)
    )
  );
}

// Bottom Tab Bar component
function BottomTabs({ active }) {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Hem', href: '/' },
    { id: 'compare', icon: '⚖️', label: 'Jämför', href: '/mobil.html' },
    { id: 'total', icon: '🧮', label: 'Totalkostnad', href: '/totalkostnad.html' },
    { id: 'saved', icon: '💾', label: 'Sparade', href: '#', disabled: true },
  ];
  return React.createElement('div', { className: 'bottom-tabs hide-desktop', role: 'tablist', 'aria-label': 'Navigation' },
    tabs.map(tab =>
      React.createElement('a', {
        key: tab.id,
        href: tab.disabled ? undefined : tab.href,
        className: 'bottom-tab' + (active === tab.id ? ' active' : '') + (tab.disabled ? ' disabled' : ''),
        role: 'tab',
        'aria-selected': active === tab.id,
        'aria-disabled': tab.disabled || undefined,
        tabIndex: tab.disabled ? -1 : 0,
      },
        React.createElement('span', { className: 'bottom-tab-icon', 'aria-hidden': 'true' }, tab.icon),
        tab.label
      )
    )
  );
}

// Footer component
function Footer() {
  return React.createElement('footer', { className: 'footer' },
    React.createElement('div', { className: 'container-wide' },
      React.createElement('div', { className: 'footer-grid' },
        React.createElement('div', null,
          React.createElement(ByytLogo, { size: 24 }),
          React.createElement('p', { className: 'footer-desc' },
            'Oberoende jämförelse för mobil, bredband, TV, streaming och telefoner.'
          )
        ),
        React.createElement('div', { style: { display: 'flex', gap: 28 } },
          React.createElement('div', null,
            React.createElement('div', { className: 'footer-heading' }, 'Sidor'),
            React.createElement('a', { href: '/', className: 'footer-link' }, 'Jämför'),
            React.createElement('a', { href: '/om-byyt.html', className: 'footer-link' }, 'Om oss'),
            React.createElement('a', { href: '/integritetspolicy.html', className: 'footer-link' }, 'Integritet')
          ),
          React.createElement('div', null,
            React.createElement('div', { className: 'footer-heading' }, 'Kontakt'),
            React.createElement('a', { href: 'mailto:kontakt@byyt.se', className: 'footer-link' }, 'kontakt@byyt.se'),
            React.createElement('a', { href: 'https://instagram.com/byyt.se', target: '_blank', rel: 'noopener noreferrer', className: 'footer-link' }, 'Instagram')
          )
        )
      ),
      React.createElement('div', { className: 'footer-bottom' },
        React.createElement('span', null, '© 2026 Byyt.se'),
        React.createElement('span', null, 'Priser: april 2026')
      )
    )
  );
}
