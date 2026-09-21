import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/indian-diet/pre-workout-meal" },
  title: "Pre-Workout Meal India — What to Eat Before Training",
  description: "Best Indian foods to eat before training for energy, performance, and muscle protection.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Nutrition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Pre-Workout Meal India: What to Eat Before Training</h1>
      <div className="seo-content">
        <h2>Timing Guidelines</h2>
        <ul>
          <li><strong>2-3 hours before:</strong> Full meal with carbs and protein — rice/roti with dal and vegetables</li>
          <li><strong>1 hour before:</strong> Light snack — banana with peanut butter, or a small bowl of oats</li>
          <li><strong>30 min before:</strong> Fast-digesting carbs only — banana or dates</li>
        </ul>
        <h2>Best Indian Pre-Workout Options</h2>
        <table>
          <thead><tr><th>Food</th><th>Timing</th></tr></thead>
          <tbody>
            <tr><td>Banana with peanut butter</td><td>30-60 min before</td></tr>
            <tr><td>Poha with peanuts</td><td>60-90 min before</td></tr>
            <tr><td>Idli with sambar</td><td>90 min before</td></tr>
            <tr><td>Oats with milk</td><td>60-90 min before</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/indian-diet/post-workout-meal" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Post-Workout Meal</Link>
          <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
        </div>
      </div>
    </div>
  );
}
