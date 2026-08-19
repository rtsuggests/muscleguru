import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact MuscleGuru.in",
  description: "Complete beginner fitness guides for Indian adults. Learn how to start at the gym, build a workout routine, eat right, and make lasting progress.",
};

const guides = [
  { title: "The Complete Beginner Gym Guide for Indians", desc: "Everything you need to know before your first gym session — equipment, etiquette, beginner programmes, and how to track progress.", href: "/beginner-fitness/beginner-gym-guide", time: "12 min" },
  { title: "How to Build a Beginner Workout Routine", desc: "A step-by-step guide to building a simple, effective workout routine from scratch — no experience required.", href: "/beginner-fitness/workout-routine", time: "10 min" },
  { title: "Home Workout Guide for Indian Beginners", desc: "Get started with fitness at home using bodyweight exercises. No gym membership needed.", href: "/beginner-fitness/home-workout-guide", time: "9 min" },
];

export default function BeginnerFitnessPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Beginner Fitness
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: "1.5rem", marginBottom: "0.75rem" }}>Beginner Fitness Guides</h1>
      <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: 580 }}>
        Evidence-based guides for those new to fitness. No intimidation — just clear, practical advice to help you start strong and stay consistent.
      </p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {guides.map(g => (
          <Link key={g.href} href={g.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem", display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="tag">Beginner</span>
              <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{g.time} read</span>
            </div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.5rem" }}>{g.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>{g.desc}</p>
            <div style={{ marginTop: "0.875rem", fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 600 }}>Read guide →</div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "3rem", background: "var(--color-bg)", borderRadius: "1rem", padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Recommended Calculators for Beginners</h2>
        <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>Start here before anything else — knowing your numbers is the foundation of smart training.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[["⚖️ BMI Calculator", "/calculators/bmi"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["💪 Protein Calculator", "/calculators/protein"], ["💧 Water Intake", "/calculators/water-intake"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
