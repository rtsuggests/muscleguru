import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans" },
  title: "Workout Plans India — Gym & Home Programmes",
  description: "Free workout plans for Indian lifters — 3-day full body, 4-day upper/lower, HIIT for beginners, and a muscle-building plan for naturally thin guys.",
  keywords: ["workout plans India", "gym workout plan India", "beginner workout plan India"],
};

const articles = [
  { title: "3-Day Full Body Workout Plan", desc: "A complete beginner full-body routine trained 3 times a week, with exercises, sets, reps and a clear progression method.", href: "/workout-plans/3-day-full-body", icon: "💪", tag: "Beginner", mins: "8 min" },
  { title: "4-Day Upper/Lower Workout Plan", desc: "For intermediate lifters ready to add volume — two upper days, two lower days, built around compound lifts.", href: "/workout-plans/4-day-upper-lower", icon: "🏋️", tag: "Intermediate", mins: "8 min" },
  { title: "HIIT Workout Plan for Beginners", desc: "A safe, effective 4-week HIIT programme — no equipment needed, just 20 minutes per session.", href: "/workout-plans/hiit-beginner", icon: "⚡", tag: "No Equipment", mins: "7 min" },
  { title: "Muscle Building for Skinny Guys", desc: "A practical training and diet plan for naturally thin ('hardgainer') men trying to build muscle in India.", href: "/workout-plans/skinny-guys-muscle", icon: "📈", tag: "Hardgainers", mins: "8 min" },
];

const calcs = [
  { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
  { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
  { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
  { name: "Muscle Gain Rate Calculator", href: "/calculators/muscle-gain-rate", icon: "📈" },
];

export default function WorkoutPlansHubPage() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          {" › "}<span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Workout Plans</span>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🏋️</div>
          <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", marginBottom: "0.75rem" }}>Workout Plans for India: Complete Resource Hub</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 640, margin: "0 auto 1.5rem" }}>Structured training plans for every stage — from your first 3-day routine to intermediate splits and plans for specific body types.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 500 }}>
            <span>✅ Evidence-based</span><span>🇮🇳 India-specific</span><span>📋 Sets & reps included</span>
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg,var(--color-brand),var(--color-brand-dark))", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "2.5rem", color: "#fff" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.85, marginBottom: "0.4rem" }}>New to the Gym? Start Here</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.4rem" }}>3-Day Full Body Workout Plan</div>
              <div style={{ opacity: 0.9, fontSize: "0.9rem" }}>The most recommended structure for beginners — full-body training, 3 times a week.</div>
            </div>
            <Link href="/workout-plans/3-day-full-body" style={{ background: "#fff", color: "var(--color-brand-dark)", padding: "0.75rem 1.5rem", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", whiteSpace: "nowrap" }}>Read Guide →</Link>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>All Workout Plans</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
          {articles.map(a => (
            <Link key={a.href} href={a.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.375rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.875rem" }}>
                <span style={{ fontSize: "2rem" }}>{a.icon}</span>
                <span className="tag" style={{ fontSize: "0.72rem" }}>{a.tag}</span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem", color: "var(--color-dark)", lineHeight: 1.35 }}>{a.title}</div>
              <p style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.6, flex: 1, margin: 0 }}>{a.desc}</p>
              <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--color-muted)" }}>⏱ {a.mins}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>Read →</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ background: "var(--color-bg)", borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1.25rem" }}>Related Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {calcs.map(c => (
              <Link key={c.href} href={c.href} style={{ display: "flex", alignItems: "center", gap: "0.875rem", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1rem 1.125rem", textDecoration: "none" }}>
                <span style={{ fontSize: "1.75rem" }}>{c.icon}</span>
                <span style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark)" }}>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
