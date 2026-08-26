import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Diet for Fat Loss India",
  description: "Evidence-based comparison of diets for fat loss in Indian context.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Best Diet for Fat Loss India</h1>
      <div className="seo-content">
        <h2>The Best Diet Is the One You Can Sustain</h2>
        <p>Research consistently shows that adherence matters more than diet type. Whether low-carb, intermittent fasting, or calorie counting — the diet that produces a sustainable calorie deficit and that you can maintain long-term will produce the best results.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/calorie-deficit" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calorie Deficit Calculator</Link>
          <Link href="/calculators/intermittent-fasting" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Intermittent Fasting Calc</Link>
        </div>
      </div>
    </div>
  );
}
