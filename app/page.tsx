import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MuscleGuru.in — Evidence-Based Fitness for India",
  description: "Free science-backed fitness calculators, workout plans, and nutrition guides for Indian adults. BMI, TDEE, protein, running plans and more.",
};

const featuredCalcs = [
  { name: "BMI Calculator", desc: "Indian-adapted cutoffs (ICMR)", href: "/calculators/bmi", icon: "⚖️" },
  { name: "TDEE Calculator", desc: "Find your daily calorie needs", href: "/calculators/tdee", icon: "🔥" },
  { name: "Protein Calculator", desc: "Daily protein for your goal", href: "/calculators/protein", icon: "💪" },
  { name: "Army Fitness", desc: "NDA, CDS, Agniveer standards", href: "/calculators/army-fitness", icon: "🪖" },
  { name: "Running Pace", desc: "Pace, race time, training zones", href: "/calculators/running-pace", icon: "🏃" },
  { name: "Calorie Deficit", desc: "Fat loss calorie target", href: "/calculators/calorie-deficit", icon: "📉" },
  { name: "Vegetarian Protein", desc: "Protein from Indian veg foods", href: "/calculators/vegetarian-protein", icon: "🌱" },
  { name: "Diabetes & BMI", desc: "Diabetes risk for Indians", href: "/calculators/diabetes-bmi", icon: "🩸" },
  { name: "IF Calculator", desc: "16:8, 18:6, 5:2 windows", href: "/calculators/intermittent-fasting", icon: "⏰" },
  { name: "Muscle Gain Rate", desc: "Realistic monthly projections", href: "/calculators/muscle-gain-rate", icon: "📈" },
];

const sections = [
  { title: "Running", icon: "🏃", desc: "10K plans, half marathon, speed training", href: "/running", tag: "Trending" },
  { title: "Workout Plans", icon: "🏋️", desc: "3-day full body, PPL, HIIT, home workouts", href: "/workout-plans", tag: null },
  { title: "Indian Diet", icon: "🥗", desc: "High protein breakfast, pre/post workout meals", href: "/indian-diet", tag: null },
  { title: "Women's Fitness", icon: "💪", desc: "Strength training, PCOS, periods and exercise", href: "/women", tag: null },
  { title: "Exercise Guides", icon: "📋", desc: "Squat, deadlift, bench press, pull-ups", href: "/exercise-guides", tag: null },
  { title: "Recovery", icon: "😴", desc: "Sleep, rest days, foam rolling, overtraining", href: "/recovery", tag: null },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#f0fdf4 0%,#dcfce7 100%)", padding: "4rem 1rem 3rem", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#fff", border: "1.5px solid #86efac", borderRadius: "9999px", padding: "0.35rem 1rem", fontSize: "0.82rem", fontWeight: 600, color: "var(--color-brand-dark)", marginBottom: "1.5rem" }}>
            🇮🇳 Built specifically for Indian adults
          </div>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", lineHeight: 1.15, marginBottom: "1.25rem", fontFamily: "var(--font-display)" }}>
            Evidence-Based Fitness<br />for India
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-muted)", marginBottom: "2rem", maxWidth: 560, margin: "0 auto 2rem" }}>
            Free science-backed calculators, workout plans, and nutrition guides — all adapted for Indian bodies, foods, climate, and lifestyle.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/calculators" style={{ padding: "0.875rem 2rem", background: "var(--color-brand-dark)", color: "#fff", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-display)", boxShadow: "0 4px 12px rgba(21,128,61,0.3)" }}>
              Explore Calculators →
            </a>
            <a href="/running" style={{ padding: "0.875rem 2rem", background: "#fff", color: "var(--color-brand-dark)", border: "2px solid var(--color-brand-dark)", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-display)" }}>
              Running Plans
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid var(--color-border)", padding: "1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--color-muted)", fontWeight: 500 }}>
          {["🔬 Peer-reviewed formulas","🇮🇳 Indian-adapted cutoffs","⚡ Instant free results","📱 Mobile-friendly","🏥 ICMR guidelines used"].map(t=>(
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem 5rem" }}>

        {/* Featured calculators */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <h2 style={{ fontSize: "1.75rem", margin: 0 }}>Popular Calculators</h2>
            <Link href="/calculators" style={{ color: "var(--color-brand-dark)", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>View all 25 →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
            {featuredCalcs.map(c => (
              <Link key={c.href} href={c.href} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.25rem", textDecoration: "none", transition: "box-shadow 0.2s" }}>
                <span style={{ fontSize: "2rem" }}>{c.icon}</span>
                <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-dark)" }}>{c.name}</span>
                <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{c.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Sections grid */}
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>Guides & Plans</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
            {sections.map(s => (
              <Link key={s.href} href={s.href} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.5rem", textDecoration: "none" }}>
                <span style={{ fontSize: "2.25rem", flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                    <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-dark)" }}>{s.title}</span>
                    {s.tag && <span className="tag" style={{ fontSize: "0.7rem" }}>{s.tag}</span>}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>{s.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why MuscleGuru */}
        <div style={{ background: "var(--color-bg)", borderRadius: "1.25rem", padding: "2.5rem", textAlign: "center" }}>
          <h2 style={{ marginBottom: "0.75rem" }}>Why MuscleGuru.in?</h2>
          <p style={{ color: "var(--color-muted)", maxWidth: 600, margin: "0 auto 2rem" }}>Most fitness content is made for Western audiences. We build everything specifically for India — Indian foods, Indian BMI cutoffs, Indian climate, ICMR guidelines, and the Indian fitness culture.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
            {[
              ["🇮🇳 India-First", "Indian BMI thresholds, ICMR guidelines, Indian food tables, Indian race calendars."],
              ["🔬 Evidence-Based", "Every claim backed by peer-reviewed research. References cited on every page."],
              ["🆓 Always Free", "All 25 calculators, all articles, all training plans — completely free, no sign-up."],
              ["📱 Mobile-Friendly", "Designed for Indian mobile users. Fast, clean, and works on any device."],
            ].map(([title, desc]) => (
              <div key={title as string}>
                <div style={{ fontWeight: 700, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{title}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
