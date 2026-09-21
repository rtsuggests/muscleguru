import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/plank-guide" },
  title: "Plank Guide — Perfect Form & Progressions India",
  description: "Complete plank guide with perfect form cues, common mistakes, and progressive variations to build core strength safely.",
  keywords: ["plank exercise guide", "how to do plank correctly", "plank variations progression"],
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/exercise-guides" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Exercise Guides</Link> › Plank Guide
      </div>
      <span className="tag" style={{ marginTop: "1rem", display: "inline-block" }}>Exercise Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Plank Guide: Perfect Form and Progressions</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        The plank is one of the most effective core exercises — but poor form makes it far less useful. Here&apos;s how to do it correctly and progress safely.
      </p>

      <div className="seo-content">
        <h2>Perfect Plank Form</h2>
        <ul>
          <li><strong>Forearms and toes on the ground</strong> — elbows directly beneath shoulders</li>
          <li><strong>Straight line from head to heels</strong> — no sagging hips, no piking upward</li>
          <li><strong>Brace your core</strong> — imagine tensing as if about to be punched in the stomach</li>
          <li><strong>Neutral neck</strong> — look at the floor slightly ahead, not straight down or up</li>
          <li><strong>Squeeze glutes</strong> — this helps maintain the straight hip line automatically</li>
        </ul>

        <h2>Common Plank Mistakes</h2>
        <ul>
          <li><strong>Sagging hips</strong> — the most common error, places excessive strain on the lower back. Fix by actively bracing the core and squeezing glutes.</li>
          <li><strong>Hips too high (piking)</strong> — reduces core engagement, turns the exercise into a shoulder/hip flexor hold instead.</li>
          <li><strong>Holding breath</strong> — breathe steadily throughout; holding breath increases blood pressure unnecessarily.</li>
          <li><strong>Chasing time over form</strong> — a strict 30-second plank is more valuable than a sagging 2-minute one.</li>
        </ul>

        <h2>Plank Progressions</h2>
        <table>
          <thead><tr><th>Level</th><th>Variation</th><th>How</th></tr></thead>
          <tbody>
            <tr><td>Beginner</td><td>Knee Plank</td><td>Same form, knees on the ground instead of toes</td></tr>
            <tr><td>Standard</td><td>Forearm Plank</td><td>Full plank as described above, build to 45-60 sec</td></tr>
            <tr><td>Intermediate</td><td>Plank with Shoulder Taps</td><td>Tap opposite shoulder alternately without rotating hips</td></tr>
            <tr><td>Intermediate</td><td>Side Plank</td><td>Balance on one forearm, stack feet, hold each side</td></tr>
            <tr><td>Advanced</td><td>Plank to Push-up</td><td>Alternate between forearm and full push-up position</td></tr>
            <tr><td>Advanced</td><td>Weighted Plank</td><td>Add light plate on upper back once bodyweight is easy</td></tr>
          </tbody>
        </table>

        <h2>How Long Should You Hold a Plank?</h2>
        <p>Research does not support endless plank-hold progression as a training goal in itself — beyond roughly 60-90 seconds of good form, the exercise stops providing proportionally more core benefit. Instead of chasing longer holds, progress to harder variations (shoulder taps, side planks, plank-to-push-up) once you can comfortably hold a strict 60-second forearm plank.</p>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/exercise-guides/dumbbell-exercises" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Dumbbell Exercises</Link>
            <Link href="/exercise-guides/how-to-squat" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Squat</Link>
            <Link href="/workout-plans/3-day-full-body" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Workout Plan</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
