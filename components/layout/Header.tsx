"use client";

import { useState } from "react";
import Link from "next/link";
import QuickSearchModal from "@/components/ui/QuickSearchModal";

const primaryLinks = [
  { label: "Calculators", href: "/calculators", badge: "27+" },
  { label: "Defence", href: "/defence", badge: "Agniveer" },
  { label: "Running", href: "/running", badge: null },
  { label: "Workout Plans", href: "/workout-plans", badge: null },
  { label: "Nutrition", href: "/nutrition", badge: null },
  { label: "Supplements", href: "/supplements", badge: null },
  { label: "Muscle Gain", href: "/muscle-gain", badge: null },
];

const moreLinks = [
  { label: "Weight Loss", href: "/weight-loss", icon: "📉" },
  { label: "Beginners Guide", href: "/beginner-fitness", icon: "🔰" },
  { label: "Exercise Guides", href: "/exercise-guides", icon: "📋" },
  { label: "Recovery & Sleep", href: "/recovery", icon: "😴" },
  { label: "Indian Diet Plans", href: "/indian-diet", icon: "🥗" },
  { label: "Women's Fitness", href: "/women", icon: "💪" },
  { label: "Fasting Windows", href: "/fasting", icon: "⏰" },
  { label: "Progress Tracker", href: "/my-progress", icon: "📈" },
];

const allLinks = [...primaryLinks, ...moreLinks];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        style={{
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.2s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: "0 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
            gap: "1rem",
          }}
        >
          {/* Logo with 3D Glowing Shield Badge */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "0.65rem",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "1.1rem",
                boxShadow: "0 4px 14px rgba(16, 185, 129, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              MG
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "var(--color-dark)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                MuscleGuru<span style={{ color: "var(--color-brand)" }}>.in</span>
              </span>
              <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Fitness for India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{ display: "flex", gap: "0.2rem", alignItems: "center", position: "relative" }}
            className="hidden-mobile"
          >
            {primaryLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "0.45rem 0.65rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  color: "#334155",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--color-brand-dark)";
                  e.currentTarget.style.background = "var(--color-brand-light)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#334155";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span>{l.label}</span>
                {l.badge && (
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      padding: "0.1rem 0.4rem",
                      borderRadius: "9999px",
                      background: "rgba(16, 185, 129, 0.15)",
                      color: "var(--color-brand-dark)",
                    }}
                  >
                    {l.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* More dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                style={{
                  padding: "0.45rem 0.65rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.86rem",
                  fontWeight: 600,
                  color: "#334155",
                  background: moreOpen ? "var(--color-brand-light)" : "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                  transition: "all 0.15s",
                }}
              >
                More
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{
                    transform: moreOpen ? "rotate(180deg)" : "none",
                    transition: "transform 0.2s",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {moreOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "120%",
                    right: 0,
                    background: "#fff",
                    border: "1px solid rgba(226, 232, 240, 0.9)",
                    borderRadius: "0.875rem",
                    boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0,0,0,0.03)",
                    padding: "0.5rem",
                    minWidth: 210,
                    zIndex: 60,
                  }}
                >
                  {moreLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setMoreOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        padding: "0.6rem 0.85rem",
                        borderRadius: "0.5rem",
                        fontSize: "0.86rem",
                        fontWeight: 600,
                        color: "#334155",
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#f1f5f9";
                        e.currentTarget.style.color = "var(--color-brand-dark)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "#334155";
                      }}
                    >
                      <span style={{ fontSize: "1.1rem" }}>{l.icon}</span>
                      <span>{l.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action: Quick Search Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.5rem 0.9rem",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                borderRadius: "9999px",
                color: "#64748b",
                fontSize: "0.84rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-brand)";
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(16, 185, 129, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.background = "#f1f5f9";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span>🔍</span>
              <span className="hidden-sm">Search Calculators...</span>
              <kbd
                style={{
                  fontSize: "0.7rem",
                  background: "#e2e8f0",
                  padding: "0.15rem 0.4rem",
                  borderRadius: "0.25rem",
                  color: "#475569",
                  fontWeight: 700,
                }}
              >
                ⌘K
              </kbd>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                color: "var(--color-dark)",
              }}
              className="show-mobile"
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div
            style={{
              background: "#fff",
              borderTop: "1px solid var(--color-border)",
              padding: "1rem 1.25rem 1.5rem",
              maxHeight: "calc(100vh - 68px)",
              overflowY: "auto",
              boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
            }}
            className="show-mobile-menu"
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem 0.75rem" }}>
              {allLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0.5rem",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    textDecoration: "none",
                    borderBottom: "1px solid #f1f5f9",
                    fontSize: "0.88rem",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <style>{`
          @media (max-width: 1140px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
          @media (min-width: 1141px) {
            .show-mobile { display: none !important; }
            .show-mobile-menu { display: none !important; }
          }
          @media (max-width: 640px) {
            .hidden-sm { display: none !important; }
          }
        `}</style>
      </header>

      {/* Global Quick Search Modal */}
      <QuickSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
