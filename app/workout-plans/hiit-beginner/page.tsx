import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/hiit-beginner" },
  title: "HIIT Workout Plan for Beginners India",
  description: "A safe, effective 4-week HIIT programme for Indian beginners. No equipment needed, 20 minutes per session.",
  keywords: ["HIIT workout beginners India", "HIIT plan no equipment", "high intensity interval training beginner"],
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/workout-plans" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Workout Plans</Link> › HIIT for Beginners
      </div>
      <span className="tag" style={{ marginTop: "1rem", display: "inline-block" }}>Workout Plan</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>HIIT Workout Plan for Beginners</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        A 4-week High-Intensity Interval Training programme designed for beginners — no equipment, 20 minutes per session, 3 days a week.
      </p>

      <div className="seo-content">
        <h2>Why HIIT Works for Beginners</h2>
        <p>HIIT alternates short bursts of intense effort with brief recovery periods. Research consistently shows it produces cardiovascular and fat-loss benefits comparable to much longer steady-state cardio sessions — making it time-efficient for beginners easing into fitness.</p>

        <h2>The Beginner HIIT Format</h2>
        <p>Each session: 5 min warm-up, 8 rounds of 30 seconds work / 30 seconds rest, 5 min cool-down. Total time: ~20 minutes.</p>

        <h2>Sample Exercise Rotation</h2>
        <table>
          <thead><tr><th>Exercise</th><th>Modification if needed</th></tr></thead>
          <tbody>
            <tr><td>Jumping jacks</td><td>Step jacks (low impact)</td></tr>
            <tr><td>Bodyweight squats</td><td>Chair-assisted squats</td></tr>
            <tr><td>Mountain climbers</td><td>Slow, controlled pace</td></tr>
            <tr><td>Push-ups</td><td>Knee push-ups</td></tr>
            <tr><td>High knees</td><td>Marching in place</td></tr>
          </tbody>
        </table>

        <h2>4-Week Progression</h2>
        <ul>
          <li><strong>Week 1-2:</strong> 30s work / 30s rest, 3 sessions/week</li>
          <li><strong>Week 3:</strong> 35s work / 25s rest, 3 sessions/week</li>
          <li><strong>Week 4:</strong> 40s work / 20s rest, 3 sessions/week</li>
        </ul>

        <div className="disclaimer-box">
          <strong>Note:</strong> HIIT is intense — if you have any cardiovascular condition, consult your doctor before starting.
        </div>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/workout-plans/3-day-full-body" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Full Body Plan</Link>
            <Link href="/calculators/calories-burned" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calories Burned Calc</Link>
            <Link href="/calculators/heart-rate-zone" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Heart Rate Zones</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
