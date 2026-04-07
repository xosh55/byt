// ═══════════════════════════════════════════════════════════
// BYYT.SE — Shared React-komponenter (V0.7)
// Laddas via <script type="text/babel" src="shared.js"></script>
// FÖRE inline mount-skript på varje sida.
// Gör Logo, Header, Footer globalt tillgängliga via window.Byyt.
// Kräver att data.js redan är laddad (window.BYYT.C, opName etc).
// ═══════════════════════════════════════════════════════════

const { C } = window.BYYT;

// ─── Logo ────────────────────────────────────────────────────
function ByytLogo({ size = 40, href = "/" }) {
  const inner = (
    <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: href ? "pointer" : "default" }}>
      <svg width={size} height={size} viewBox="0 0 120 120">
        <defs>
          <linearGradient id="logoG" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C.mint} />
            <stop offset="50%" stopColor={C.cyan} />
            <stop offset="100%" stopColor={C.violet} />
          </linearGradient>
        </defs>
        <circle cx="60" cy="60" r="56" fill="url(#logoG)" />
        <g stroke="#FFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M36 44L67 44" />
          <polyline points="59,36 67,44 59,52" />
          <path d="M84 76L53 76" />
          <polyline points="61,68 53,76 61,84" />
        </g>
      </svg>
      <span style={{
        fontSize: size * 0.62, fontWeight: 800, letterSpacing: "-0.03em",
        background: `linear-gradient(135deg,${C.mint},${C.cyan},${C.violet})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
      }}>byyt</span>
    </div>
  );
  if (!href) return inner;
  return <a href={href} style={{ textDecoration: "none" }}>{inner}</a>;
}

// ─── Header med riktig URL-navigation ────────────────────────
function ByytHeader({ active }) {
  const [mm, setMm] = React.useState(false);
  const NAV = [
    { id: "jamfor",     l: "Jämför",     href: "/" },
    { id: "om",         l: "Om oss",     href: "/om.html" },
    { id: "integritet", l: "Integritet", href: "/integritet.html" },
    { id: "kontakt",    l: "Kontakt",    href: "/kontakt.html" },
  ];
  return (
    <>
      <header style={{
        padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,.04)", backdropFilter: "blur(20px)",
        position: "sticky", top: 0, zIndex: 100, background: "rgba(8,14,26,.92)", height: 60
      }}>
        <ByytLogo size={30} href="/" />
        <nav style={{ display: "flex", gap: 2 }} className="dn">
          {NAV.map(n => {
            const a = active === n.id;
            return (
              <a key={n.id} href={n.href} style={{
                padding: "6px 12px", borderRadius: 8, textDecoration: "none",
                background: a ? "rgba(0,180,216,.08)" : "transparent",
                color: a ? C.cyan : C.muted, fontSize: 13, fontWeight: a ? 700 : 500
              }}>{n.l}</a>
            );
          })}
        </nav>
        <button onClick={() => setMm(!mm)} className="mb" style={{
          display: "none", background: "none", border: `1px solid ${C.surface}`,
          borderRadius: 8, padding: "5px 8px", color: C.muted, cursor: "pointer", fontSize: 14
        }}>☰</button>
      </header>
      {mm && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: C.dark, borderBottom: `1px solid ${C.surface}`,
          padding: 10, display: "flex", flexDirection: "column", gap: 2,
          animation: "fadeIn .15s"
        }}>
          {NAV.map(n => {
            const a = active === n.id;
            return (
              <a key={n.id} href={n.href} style={{
                padding: "10px 16px", borderRadius: 10, textDecoration: "none",
                background: a ? "rgba(0,180,216,.06)" : "transparent",
                color: a ? C.cyan : C.muted, fontSize: 14, fontWeight: 600, textAlign: "left"
              }}>{n.l}</a>
            );
          })}
        </div>
      )}
    </>
  );
}

// ─── Footer med riktig URL-navigation ────────────────────────
function ByytFooter() {
  const links = [
    { l: "Jämför",     href: "/" },
    { l: "Om oss",     href: "/om.html" },
    { l: "Integritet", href: "/integritet.html" },
    { l: "Kontakt",    href: "/kontakt.html" },
  ];
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,.03)", padding: "32px 24px 24px",
      background: C.dark, marginTop: 40
    }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, marginBottom: 20 }}>
          <div>
            <ByytLogo size={28} href="/" />
            <p style={{ fontSize: 11, color: C.subtle, marginTop: 6, maxWidth: 220, lineHeight: 1.5 }}>
              Oberoende jämförelse för mobil, bredband, TV, streaming och telefoner.
            </p>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <div>
              <div style={{ fontSize: 10, color: C.subtle, fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>Sidor</div>
              {links.map(i => (
                <a key={i.href} href={i.href} style={{
                  display: "block", padding: "2px 0", color: C.muted,
                  fontSize: 12, textDecoration: "none"
                }}>{i.l}</a>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 10, color: C.subtle, fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>Socialt</div>
              <a href="https://instagram.com/byyt.se" target="_blank" rel="noopener noreferrer" style={{ color: C.muted, textDecoration: "none", fontSize: 12 }}>Instagram</a>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: C.surface2 }}>
          <span>© 2026 Byyt.se</span>
          <span>Priser: mars 2026</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Page wrapper — minimal layout används av alla sidor ─────
function ByytPage({ active, children }) {
  return (
    <div style={{
      minHeight: "100vh", background: C.ink, color: C.text,
      fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif", overflowX: "hidden"
    }}>
      <ByytHeader active={active} />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }} className="mw">
        {children}
      </main>
      <ByytFooter />
    </div>
  );
}

// ─── Mode-pills (delas mellan jämför-sidorna) ────────────────
function ByytModePills({ active }) {
  const MODES = [
    { id: "mobil",     l: "Mobil",           href: "/" },
    { id: "bredband",  l: "Bredband",        href: "/bredband.html" },
    { id: "tv",        l: "TV",              href: "/tv.html" },
    { id: "streaming", l: "Streaming",       href: "/streaming.html" },
    { id: "telefoner", l: "Telefoner",       href: "/telefoner.html" },
    { id: "paket",     l: "Allt-i-ett",      href: "/paket.html" },
    { id: "radgivare", l: "Kolla ditt pris", href: "/radgivare.html" },
  ];
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", marginBottom: 24, position: "relative", zIndex: 1 }}>
      {MODES.map(m => {
        const a = active === m.id;
        return (
          <a key={m.id} href={m.href} style={{
            padding: "10px 20px", borderRadius: 24,
            border: a ? "none" : `1px solid ${C.surface}`,
            textDecoration: "none", fontSize: 13, fontWeight: 700,
            background: a ? `linear-gradient(135deg,${C.mint},${C.cyan})` : C.dark,
            color: a ? C.ink : C.muted
          }}>{m.l}</a>
        );
      })}
    </div>
  );
}

// Exponera globalt så mount-skripten kan använda dem
window.Byyt = {
  Logo: ByytLogo, Header: ByytHeader, Footer: ByytFooter,
  Page: ByytPage, ModePills: ByytModePills
};
