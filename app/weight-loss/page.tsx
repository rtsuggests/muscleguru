import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weight Loss India — Evidence-Based Guides",
  description: "Evidence-based weight loss guides for Indian adults.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Weight Loss India: Evidence-Based Guides</h1>
      <div className="seo-content">
        <h2>Approach</h2>
        <p>Weight loss requires a sustainable calorie deficit combined with adequate protein intake to preserve muscle. Avoid extreme restriction — it is not sustainable and often leads to muscle loss.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/calorie-deficit" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calorie Deficit Calculator</Link>
          <Link href="/calculators/tdee" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>TDEE Calculator</Link>
        </div>
      </div>
    </div>
  );
}
