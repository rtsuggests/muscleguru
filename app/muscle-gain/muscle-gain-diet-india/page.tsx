import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Muscle Gain Diet India — What to Eat",
  description: "Evidence-based muscle gain diet plan for Indian adults.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Muscle Gain Diet India</h1>
      <div className="seo-content">
        <h2>Key Principles</h2>
        <p>Eat in a moderate calorie surplus (200-300 kcal above TDEE) with high protein intake (1.8-2.2g/kg). Indian sources: eggs, dal, paneer, soya chunks, chicken. Do not restrict carbohydrates — they fuel training performance.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
          <Link href="/calculators/muscle-gain-rate" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Muscle Gain Rate Calc</Link>
        </div>
      </div>
    </div>
  );
}
