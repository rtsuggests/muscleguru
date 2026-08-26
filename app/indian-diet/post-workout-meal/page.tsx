import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post-Workout Meal India — Recovery Nutrition",
  description: "What to eat after training to maximise muscle repair and glycogen replenishment.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Nutrition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Post-Workout Meal India: Recovery Nutrition Guide</h1>
      <div className="seo-content">
        <h2>The Post-Workout Window</h2>
        <p>Eating protein and carbs within 1-2 hours after training supports muscle repair and glycogen replenishment. The "anabolic window" is wider than once believed — but eating soon after training is still beneficial.</p>
        <h2>Best Indian Post-Workout Options</h2>
        <table>
          <thead><tr><th>Meal</th><th>Protein</th></tr></thead>
          <tbody>
            <tr><td>Paneer bhurji + roti</td><td>20g</td></tr>
            <tr><td>Egg curry + rice</td><td>22g</td></tr>
            <tr><td>Whey shake + banana</td><td>28g</td></tr>
            <tr><td>Dal + rice + curd</td><td>18g</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/indian-diet/pre-workout-meal" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Pre-Workout Meal</Link>
          <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
        </div>
      </div>
    </div>
  );
}
