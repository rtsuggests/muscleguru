import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/skinny-guys-muscle" },
  title: "Muscle Gain Plan for Skinny Guys India",
  description: "A complete workout and diet plan for naturally thin Indian men struggling to gain muscle. Calorie surplus, compound lifts, and progression.",
  keywords: ["skinny guy muscle gain India", "hardgainer workout plan", "underweight muscle building"],
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/workout-plans" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Workout Plans</Link> › Skinny Guys Muscle Plan
      </div>
      <span className="tag" style={{ marginTop: "1rem", display: "inline-block" }}>Workout Plan</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Muscle Gain Plan for Skinny Guys</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        A focused programme for naturally thin (ectomorph) Indian men who struggle to gain weight and muscle despite training.
      </p>

      <div className="seo-content">
        <h2>Why Skinny Guys Struggle to Gain Muscle</h2>
        <p>The most common reason isn&apos;t training — it&apos;s insufficient calorie intake. Naturally thin body types (ectomorphs) often have a fast metabolism and underestimate how much they need to eat to be in a genuine surplus. Use our <Link href="/calculators/tdee" style={{ color: "var(--color-brand-darker)" }}>TDEE Calculator</Link> to find your baseline, then add 300-500 kcal for a lean bulk.</p>

        <h2>Training Focus: Compound Lifts</h2>
        <table>
          <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
          <tbody>
            <tr><td>Squat</td><td>4 × 6-8</td></tr>
            <tr><td>Bench Press</td><td>4 × 6-8</td></tr>
            <tr><td>Deadlift</td><td>3 × 5</td></tr>
            <tr><td>Overhead Press</td><td>3 × 8</td></tr>
            <tr><td>Barbell Row</td><td>3 × 8</td></tr>
          </tbody>
        </table>
        <p>Train 3-4 days per week, focusing on progressive overload — add weight or reps every 1-2 weeks.</p>

        <h2>Nutrition Priorities</h2>
        <ul>
          <li><strong>Calorie surplus:</strong> 300-500 kcal above TDEE — track this consistently, don&apos;t guess</li>
          <li><strong>Protein:</strong> 1.6-2.0g/kg body weight daily — use our <Link href="/calculators/protein" style={{ color: "var(--color-brand-darker)" }}>Protein Calculator</Link></li>
          <li><strong>Frequent meals:</strong> 5-6 smaller meals are easier to hit calorie targets than 3 large ones for people with a fast metabolism and low appetite</li>
          <li><strong>Calorie-dense foods:</strong> Full-fat milk, nuts, ghee, paneer, rice — don&apos;t rely only on volume-heavy foods like salad and vegetables</li>
        </ul>

        <h2>Realistic Expectations</h2>
        <p>Natural muscle gain is slow — beginners can expect 0.5-1kg of muscle per month in the first year. Use our <Link href="/calculators/muscle-gain-rate" style={{ color: "var(--color-brand-darker)" }}>Muscle Gain Rate Calculator</Link> for a personalised realistic timeline.</p>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/calculators/tdee" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>TDEE Calculator</Link>
            <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
            <Link href="/calculators/muscle-gain-rate" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Muscle Gain Rate</Link>
            <Link href="/workout-plans/3-day-full-body" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Full Body Plan</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
