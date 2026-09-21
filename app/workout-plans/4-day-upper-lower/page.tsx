import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/4-day-upper-lower" },
  title: "4-Day Upper Lower Workout Plan India",
  description: "4-day upper/lower split workout plan for intermediate lifters.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Workout Plan</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>4-Day Upper Lower Workout Plan India</h1>
      <div className="seo-content">
        <table>
          <thead><tr><th>Day</th><th>Focus</th></tr></thead>
          <tbody>
            <tr><td>Monday</td><td>Upper Body (push/pull)</td></tr>
            <tr><td>Tuesday</td><td>Lower Body (squat focus)</td></tr>
            <tr><td>Wednesday</td><td>Rest</td></tr>
            <tr><td>Thursday</td><td>Upper Body (volume)</td></tr>
            <tr><td>Friday</td><td>Lower Body (deadlift focus)</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/workout-plans/3-day-full-body" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Full Body Plan</Link>
        </div>
      </div>
    </div>
  );
}
