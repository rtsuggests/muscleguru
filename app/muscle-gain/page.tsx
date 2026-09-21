import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/muscle-gain" },
  title: "Muscle Gain India — Diet & Workout Guides",
  description: "Evidence-based muscle gain guides for Indian gym-goers. Diet plans, workout programmes, and the science of building muscle.",
};

const articles = [
  { title: "Push Pull Legs Workout Plan India", desc: "A complete 6-day PPL split for intermediate lifters, with progressive overload built in.", href: "/muscle-gain/push-pull-legs", time: "10 min" },
  { title: "Muscle Gain Diet India: What to Eat", desc: "Calorie surplus, protein targets, and Indian foods to support consistent, lean muscle growth.", href: "/muscle-gain/muscle-gain-diet-india", time: "9 min" },
  { title: "How Muscle Actually Grows", desc: "The science of hypertrophy — mechanical tension, muscle protein synthesis, and recovery, explained simply.", href: "/muscle-gain/how-muscle-grows", time: "8 min" },
];

export default function MuscleGainPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Muscle Gain
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: "1.5rem", marginBottom: "0.75rem" }}>Muscle Gain Guides</h1>
      <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: 600 }}>
        Evidence-based training and nutrition for building lean muscle — no shortcuts, no unrealistic promises.
      </p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem", display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="tag">Muscle Gain</span>
              <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{a.time} read</span>
            </div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.5rem" }}>{a.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
            <div style={{ marginTop: "0.875rem", fontSize: "0.85rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>Read guide →</div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "3rem", background: "var(--color-bg)", borderRadius: "1rem", padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.875rem" }}>Muscle Building Calculators</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[["💪 Protein Calculator", "/calculators/protein"], ["📈 Muscle Gain Rate", "/calculators/muscle-gain-rate"], ["🏆 FFMI Calculator", "/calculators/ffmi"], ["🏋️ One Rep Max", "/calculators/one-rep-max"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
