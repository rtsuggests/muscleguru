import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/how-to-squat" },
  title: "How to Squat — Complete Form Guide India",
  description: "Complete squat technique guide with form cues, common mistakes, and progressions for Indian gym-goers.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Exercise Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>How to Squat: Complete Form Guide</h1>
      <div className="seo-content">
        <h2>Perfect Squat Form</h2>
        <ul>
          <li><strong>Stance:</strong> Feet shoulder-width apart, toes slightly turned out</li>
          <li><strong>Descent:</strong> Push hips back and bend knees simultaneously, keeping chest up</li>
          <li><strong>Depth:</strong> Aim for thighs parallel to floor or below (if mobility allows)</li>
          <li><strong>Knees:</strong> Track in line with toes, do not cave inward</li>
          <li><strong>Drive up:</strong> Push through the whole foot, drive hips forward</li>
        </ul>
        <h2>Common Mistakes</h2>
        <ul>
          <li>Knees caving inward under load — strengthen glute medius with band walks</li>
          <li>Heels rising off the ground — indicates ankle mobility restriction</li>
          <li>Excessive forward lean — often a mobility or core stability issue</li>
        </ul>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/exercise-guides/how-to-deadlift" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Deadlift</Link>
          <Link href="/calculators/one-rep-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>One Rep Max Calc</Link>
        </div>
      </div>
    </div>
  );
}
