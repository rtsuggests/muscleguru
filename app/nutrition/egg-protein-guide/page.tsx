import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Egg Protein Content India — Complete Guide",
  description: "Complete guide to egg protein content and usage.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Egg Protein Content India</h1>
      <div className="seo-content">
        <h2>Egg Nutrition Facts</h2>
        <p>One whole egg contains approximately 6g protein and 70 calories. Egg whites alone provide 3.6g protein with minimal fat. Whole eggs provide the most complete amino acid profile including the yolk nutrients.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
        </div>
      </div>
    </div>
  );
}
