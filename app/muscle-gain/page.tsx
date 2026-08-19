import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weight Loss Guides India — Evidence-Based Fat Loss",
  description: "Science-backed weight loss guides for Indian adults. Calorie deficits, sustainable fat loss, diet strategies — without extreme or dangerous advice.",
};

const articles = [
  { title: "Calorie Deficit Explained: How to Lose Fat Without Losing Muscle", desc: "A complete, evidence-based guide to creating and maintaining a calorie deficit — with practical strategies for the Indian diet.", href: "/weight-loss/calorie-deficit-explained", time: "9 min" },
  { title: "Why You're Not Losing Weight: 7 Evidence-Based Reasons", desc: "The most common reasons fat loss stalls — explained by research, not bro-science. From metabolic adaptation to under-tracking.", href: "/weight-loss/why-not-losing-weight", time: "10 min" },
  { title: "Best Diet for Fat Loss: Comparing Evidence-Based Approaches", desc: "Low-carb vs. low-fat vs. intermittent fasting — what does the research actually say about which diet works best for fat loss?", href: "/weight-loss/best-diet-fat-loss", time: "11 min" },
];

export default function WeightLossPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Weight Loss
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: "1.5rem", marginBottom: "0.75rem" }}>Weight Loss Guides</h1>
      <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: 600 }}>
        Sustainable, evidence-based fat loss — without extreme diets, unrealistic promises, or dangerous advice.
      </p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem", display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="tag">Weight Loss</span>
              <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{a.time} read</span>
            </div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.5rem" }}>{a.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
            <div style={{ marginTop: "0.875rem", fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 600 }}>Read article →</div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "3rem", background: "var(--color-bg)", borderRadius: "1rem", padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.875rem" }}>Fat Loss Calculators</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[["📉 Calorie Deficit", "/calculators/calorie-deficit"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["⚖️ BMI Calculator", "/calculators/bmi"], ["🥗 Macro Calculator", "/calculators/macro"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
