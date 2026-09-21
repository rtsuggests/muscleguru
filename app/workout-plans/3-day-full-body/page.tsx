import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/3-day-full-body" },
  title: "3-Day Full Body Workout Plan India",
  description: "Free 3-day full body workout plan for Indian gym-goers with progressive overload.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Workout Plan</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>3-Day Full Body Workout Plan India</h1>
      <div className="seo-content">
        <h2>The Programme</h2>
        <p>Train Monday, Wednesday, Friday. Each session hits all major muscle groups with compound movements. Add weight or reps every 1-2 weeks when you can complete all sets with good form.</p>
        <table>
          <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
          <tbody>
            <tr><td>Squat</td><td>3 × 8-10</td></tr>
            <tr><td>Bench Press / Push-up</td><td>3 × 8-10</td></tr>
            <tr><td>Bent-over Row</td><td>3 × 8-10</td></tr>
            <tr><td>Overhead Press</td><td>3 × 8-10</td></tr>
            <tr><td>Romanian Deadlift</td><td>3 × 10</td></tr>
            <tr><td>Plank</td><td>3 × 45 sec</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/exercise-guides/how-to-squat" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Squat</Link>
          <Link href="/calculators/one-rep-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>One Rep Max Calc</Link>
        </div>
      </div>
    </div>
  );
}
