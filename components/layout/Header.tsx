"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Calculators", href: "/calculators" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Supplements", href: "/supplements" },
  { label: "Muscle Gain", href: "/muscle-gain" },
  { label: "Weight Loss", href: "/weight-loss" },
  { label: "Beginners", href: "/beginner-fitness" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ background: "#fff", borderBottom: "1.5px solid var(--color-border)", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ background: "var(--color-brand)", color: "#fff", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem", padding: "0.3rem 0.7rem", borderRadius: "0.5rem" }}>MG</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--color-dark)" }}>MuscleGuru<span style={{ color: "var(--color-brand)" }}>.in</span></span>
        </Link>

        <nav style={{ display: "flex", gap: "0.25rem", alignItems: "center" }} className="hidden-mobile">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} style={{ padding: "0.4rem 0.75rem", borderRadius: "0.375rem", fontSize: "0.9rem", fontWeight: 500, color: "var(--color-body)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }} className="show-mobile" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--color-border)", padding: "0.75rem 1rem" }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", padding: "0.75rem 0.5rem", fontWeight: 500, color: "var(--color-body)", textDecoration: "none", borderBottom: "1px solid var(--color-border)", fontSize: "0.975rem" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
