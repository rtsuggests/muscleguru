import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/dumbbell-exercises" },
  title: "Best Dumbbell Exercises India — Full Body Guide",
  description: "The best dumbbell exercises for every muscle group, with form cues and a sample home workout. No gym or barbell required.",
  keywords: ["dumbbell exercises India", "dumbbell workout home", "best dumbbell exercises full body"],
};

const exercises = [
  { name: "Dumbbell Goblet Squat", muscle: "Quads, Glutes, Core", cue: "Hold one dumbbell vertically at chest height, squat with knees tracking over toes." },
  { name: "Dumbbell Romanian Deadlift", muscle: "Hamstrings, Glutes, Back", cue: "Hinge at hips, keep dumbbells close to legs, maintain a flat back throughout." },
  { name: "Dumbbell Bench/Floor Press", muscle: "Chest, Triceps, Shoulders", cue: "Press dumbbells up over chest, control the descent, keep elbows at 45-75°." },
  { name: "Dumbbell Row", muscle: "Back, Biceps", cue: "Hinge forward, pull dumbbell to hip, squeeze shoulder blade at the top." },
  { name: "Dumbbell Overhead Press", muscle: "Shoulders, Triceps", cue: "Press dumbbells overhead without arching the lower back excessively." },
  { name: "Dumbbell Lunge", muscle: "Quads, Glutes, Balance", cue: "Step forward, lower until both knees form 90°, push back to start." },
  { name: "Dumbbell Bicep Curl", muscle: "Biceps", cue: "Keep elbows pinned to sides, curl with control, avoid swinging." },
  { name: "Dumbbell Lateral Raise", muscle: "Side Delts", cue: "Raise dumbbells to shoulder height with a slight elbow bend, avoid using momentum." },
];

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/exercise-guides" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Exercise Guides</Link> › Dumbbell Exercises
      </div>
      <span className="tag" style={{ marginTop: "1rem", display: "inline-block" }}>Exercise Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Best Dumbbell Exercises for a Full Body Workout</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        A complete set of dumbbell exercises covering every major muscle group — ideal for home workouts or supplementing your gym routine.
      </p>

      <div className="seo-content">
        <h2>Why Dumbbells Are Underrated</h2>
        <p>Dumbbells allow a full range of motion, train each side of the body independently (correcting strength imbalances), and require minimal space — making them one of the most versatile tools for building strength and muscle, whether at home or in a gym.</p>

        <h2>The Complete Dumbbell Exercise List</h2>
        <table>
          <thead><tr><th>Exercise</th><th>Primary Muscles</th><th>Form Cue</th></tr></thead>
          <tbody>
            {exercises.map(e => (
              <tr key={e.name}>
                <td style={{ fontWeight: 600 }}>{e.name}</td>
                <td style={{ color: "var(--color-brand-dark)", fontSize: "0.85rem" }}>{e.muscle}</td>
                <td style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>{e.cue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Sample Full Body Dumbbell Workout</h2>
        <table>
          <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
          <tbody>
            <tr><td>Goblet Squat</td><td>3 × 12</td></tr>
            <tr><td>Dumbbell Row</td><td>3 × 10/side</td></tr>
            <tr><td>Floor Press</td><td>3 × 10</td></tr>
            <tr><td>Romanian Deadlift</td><td>3 × 10</td></tr>
            <tr><td>Overhead Press</td><td>3 × 10</td></tr>
            <tr><td>Lateral Raise</td><td>3 × 12</td></tr>
          </tbody>
        </table>
        <p>Perform this routine 2-3 times per week on non-consecutive days, resting 60-90 seconds between sets.</p>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/exercise-guides/plank-guide" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Plank Guide</Link>
            <Link href="/exercise-guides/how-to-squat" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Squat</Link>
            <Link href="/workout-plans/3-day-full-body" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Workout Plan</Link>
            <Link href="/calculators/one-rep-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>One Rep Max Calc</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
