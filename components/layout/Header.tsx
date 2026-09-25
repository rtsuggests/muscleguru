"use client";
import { useState } from "react";
import Link from "next/link";

const primaryLinks = [
  { label: "Calculators", href: "/calculators" },
  { label: "Running", href: "/running" },
  { label: "Workout Plans", href: "/workout-plans" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Supplements", href: "/supplements" },
  { label: "Muscle Gain", href: "/muscle-gain" },
  { label: "Weight Loss", href: "/weight-loss" },
];

const moreLinks = [
  { label: "Beginners", href: "/beginner-fitness" },
  { label: "Exercise Guides", href: "/exercise-guides" },
  { label: "Recovery", href: "/recovery" },
  { label: "Indian Diet", href: "/indian-diet" },
  { label: "Women", href: "/women" },
  { label: "Fasting", href: "/fasting" },
];

const allLinks = [...primaryLinks, ...moreLinks];

const linkStyle: React.CSSProperties = { padding: "0.4rem 0.6rem", borderRadius: "0.375rem", fontSize: "0.85rem", fontWeight: 500, color: "var(--color-body)", textDecoration: "none", whiteSpace: "nowrap" };

export default function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header style={{ background: "#fff", borderBottom: "1.5px solid var(--color-border)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, gap: "0.75rem" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <span style={{ background: "var(--color-brand)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", padding: "0.3rem 0.7rem", borderRadius: "0.5rem" }}>MG</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--color-dark)", whiteSpace: "nowrap" }}>MuscleGuru<span style={{ color: "var(--color-brand)" }}>.in</span></span>
        </Link>

        <nav style={{ display: "flex", gap: "0.1rem", alignItems: "center", position: "relative" }} className="hidden-mobile">
          {primaryLinks.map(l => (
            <Link key={l.href} href={l.href} style={linkStyle}>{l.label}</Link>
          ))}

          <div style={{ position: "relative" }}>
            <button
              onClick={() => setMoreOpen(v => !v)}
              aria-expanded={moreOpen}
              style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "0.25rem", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              More
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transform: moreOpen ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}><polyline points="6 9 12 15 18 9" /></svg>
            </button>
            {moreOpen && (
              <div style={{ position: "absolute", top: "100%", right: 0, background: "#fff", border: "1px solid var(--color-border)", borderRadius: "0.5rem", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", padding: "0.4rem", minWidth: 160, zIndex: 60 }}>
                {moreLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setMoreOpen(false)} style={{ ...linkStyle, display: "block", padding: "0.5rem 0.6rem" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", flexShrink: 0 }} className="show-mobile" aria-label="Menu" aria-expanded={open}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--color-border)", padding: "0.75rem 1rem 1rem", maxHeight: "calc(100vh - 64px)", overflowY: "auto" }} className="show-mobile-menu">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 0.75rem" }}>
            {allLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ display: "block", padding: "0.75rem 0.25rem", fontWeight: 500, color: "var(--color-body)", textDecoration: "none", borderBottom: "1px solid var(--color-border)", fontSize: "0.9rem" }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1200px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 1201px) { .show-mobile { display: none !important; } .show-mobile-menu { display: none !important; } }
      `}</style>
    </header>
  );
}
