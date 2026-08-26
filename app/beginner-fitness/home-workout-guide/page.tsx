import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Workout Guide India",
  description: "Complete home workout guide with no equipment needed.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Home Workout Guide India</h1>
      <div className="seo-content">
        <h2>No-Equipment Programme</h2>
        <p>Bodyweight squats, push-ups, lunges, planks, and glute bridges form an effective full-body routine. Progress by adding reps, slowing tempo, or trying single-leg variations.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/workout-plans/3-day-full-body" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Workout Plan</Link>
        </div>
      </div>
    </div>
  );
}
