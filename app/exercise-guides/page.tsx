import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://muscleguru.in/exercise-guides" },
  title: "Exercise Technique Guides India",
  description: "Step-by-step exercise technique guides for Indian beginners — squat, bench press, deadlift, pull-ups and more, with common mistakes and fixes.",
  keywords: ["exercise technique guides India", "how to squat correctly", "gym exercise form guide"],
};

const articles = [
  { title: "How to Squat: Full Technique Guide", desc: "Step-by-step squat form, the most common mistakes, mobility fixes, and how to progress as a beginner.", href: "/exercise-guides/how-to-squat", icon: "🏋️", tag: "Lower Body", mins: "7 min" },
  { title: "How to Bench Press: Full Technique Guide", desc: "Grip width, bar path, common mistakes, safety tips, and how to progress the bench press.", href: "/exercise-guides/how-to-bench-press", icon: "🏋️", tag: "Upper Body", mins: "7 min" },
  { title: "How to Deadlift: Technique Guide", desc: "Setup, bar path, bracing and lockout, with the most common mistakes that cause injury.", href: "/exercise-guides/how-to-deadlift", icon: "🏋️", tag: "Full Body", mins: "7 min" },
  { title: "Pull-Up Guide: Zero to 10 Reps", desc: "A progression plan to go from zero pull-ups to 10 clean reps, with assisted variations and common mistakes.", href: "/exercise-guides/pull-up-guide", icon: "💪", tag: "Upper Body", mins: "7 min" },
  { title: "Best Dumbbell Exercises: Full Body Guide", desc: "A complete dumbbell exercise list for every major muscle group, plus a sample full-body workout.", href: "/exercise-guides/dumbbell-exercises", icon: "🏋️", tag: "Equipment Guide", mins: "7 min" },
  { title: "Plank Guide: Form, Mistakes & Progressions", desc: "Perfect plank form, the most common mistakes, and progressions from beginner to advanced.", href: "/exercise-guides/plank-guide", icon: "🧘", tag: "Core", mins: "6 min" },
];

const calcs = [
  { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
  { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
  { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
  { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
];

export default function ExerciseGuidesHubPage() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          {" › "}<span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Exercise Guides</span>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🏋️</div>
          <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", marginBottom: "0.75rem" }}>Exercise Technique Guides: Complete Resource Hub</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 640, margin: "0 auto 1.5rem" }}>Step-by-step form for the exercises that matter most, with the mistakes that actually cause injuries and how to fix them.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 500 }}>
            <span>✅ Evidence-based</span><span>🎯 Step-by-step</span><span>⚠️ Common mistakes covered</span>
          </div>
        </div>

        <div style={{ background: "linear-gradient(135deg,var(--color-brand),var(--color-brand-dark))", borderRadius: "1.25rem", padding: "1.75rem 2rem", marginBottom: "2.5rem", color: "#fff" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.85, marginBottom: "0.4rem" }}>Most Searched</div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.4rem" }}>How to Squat: Full Technique Guide</div>
              <div style={{ opacity: 0.9, fontSize: "0.9rem" }}>The exercise most beginners get wrong first — learn it properly from day one.</div>
            </div>
            <Link href="/exercise-guides/how-to-squat" style={{ background: "#fff", color: "var(--color-brand-dark)", padding: "0.75rem 1.5rem", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", whiteSpace: "nowrap" }}>Read Guide →</Link>
          </div>
        </div>

        <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>All Exercise Guides</h2>
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
