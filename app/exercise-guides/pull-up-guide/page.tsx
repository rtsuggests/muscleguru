import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Pull-Up Guide — From Zero to 10 Reps",
  description: "Complete pull-up guide for Indian gym-goers. From zero pull-ups to 10 reps with an 8-week progressive programme, grip variations, and form cues.",
  keywords: ["pull up guide India", "how to do pull ups India", "pull up programme India", "zero to pull up India"],
};

export default function PullUpGuidePage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span className="tag">Exercise Guide</span>
        <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>⏱ 10 min read</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
        Complete Pull-Up Guide: From Zero to 10 Reps
      </h1>

      <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
        <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase" }}>Quick Answer</div>
        <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>
          Most beginners can achieve their first pull-up within 4–8 weeks using the progressive programme below. Getting from 1 pull-up to 10 typically takes an additional 6–10 weeks of consistent training.
        </p>
      </div>

      <div className="seo-content">
        <h2>Why Pull-Ups Are the King of Upper Body Exercises</h2>
        <p>The pull-up is the most effective bodyweight exercise for building back width, bicep strength, and overall upper body pulling power. It requires no equipment beyond a bar — available in every gym in India and in most parks — and it is one of the few exercises that simultaneously develops the latissimus dorsi, biceps brachii, rear deltoids, rhomboids, and core stability muscles in a single movement.</p>
        <p>Research by Ronai and Scibek (2014) confirmed that pull-ups activate the latissimus dorsi at significantly higher levels than lat pulldown machines at matched resistance — making them the superior exercise for back development. The key reason most Indian gym beginners avoid pull-ups: they cannot yet do one. This guide fixes that.</p>

        <h2>The 8-Week Zero to Pull-Up Programme</h2>
        <table>
          <thead><tr><th>Week</th><th>Exercise</th><th>Sets × Reps</th><th>Focus</th></tr></thead>
          <tbody>
            {[
              ["1–2", "Dead hangs", "3 × 20–30 sec", "Grip strength, scapular engagement"],
              ["1–2", "Scapular pull-ups", "3 × 8–10", "Shoulder blade retraction and depression"],
              ["3–4", "Negative pull-ups (5 sec descent)", "3 × 5–6", "Eccentric strength — most effective method"],
              ["3–4", "Band-assisted pull-ups (heavy band)", "3 × 6–8", "Full movement pattern with assistance"],
              ["5–6", "Band-assisted pull-ups (lighter band)", "4 × 5–6", "Reduce assistance progressively"],
              ["5–6", "Jumping pull-ups with slow descent", "3 × 5", "Build full range strength"],
              ["7–8", "Unassisted pull-up attempts", "4 × max (1–3)", "First unassisted reps"],
              ["7–8", "Mixed: assisted + unassisted", "4 × 3–5", "Build from first rep to 3–5 reps"],
            ].map(([week, ex, sets, focus]) => (
              <tr key={ex}><td style={{fontWeight:600}}>{week}</td><td>{ex}</td><td style={{color:"var(--color-brand-dark)",fontWeight:600}}>{sets}</td><td style={{fontSize:"0.8rem",color:"var(--color-muted)"}}>{focus}</td></tr>
            ))}
          </tbody>
        </table>

        <h2>From 1 to 10 Pull-Ups: The Next Phase</h2>
        <p>Once you can do 1 strict pull-up, the path to 10 follows a simple progression: add one rep every 1–2 weeks. The key is the <strong>grease the groove</strong> method — doing multiple sub-maximal sets throughout the day rather than training to failure once per session.</p>
        <table>
          <thead><tr><th>Current Max</th><th>Daily Practice Sets</th><th>Target in 4 Weeks</th></tr></thead>
          <tbody>
            {[
              ["1 rep", "5 sets of 1 rep throughout the day", "3–4 reps"],
              ["3 reps", "5 sets of 2 reps throughout the day", "5–6 reps"],
              ["5 reps", "5 sets of 3 reps throughout the day", "7–8 reps"],
              ["7 reps", "4 sets of 5 reps in gym session", "10 reps"],
            ].map(([curr, practice, target]) => (
              <tr key={curr}><td style={{fontWeight:600}}>{curr}</td><td>{practice}</td><td style={{color:"var(--color-brand-dark)",fontWeight:700}}>{target}</td></tr>
            ))}
          </tbody>
        </table>

        <h2>Perfect Pull-Up Form</h2>
        <ul>
          <li><strong>Grip:</strong> Slightly wider than shoulder width, palms facing away (pronated overhand grip). This is the standard pull-up — not a chin-up (palms facing you).</li>
          <li><strong>Starting position:</strong> Full dead hang — arms completely straight, shoulders slightly elevated. Do not start from a bent-arm position.</li>
          <li><strong>Initiation:</strong> Depress your shoulder blades first (pull them down and back) before bending your elbows. This engages the lats correctly.</li>
          <li><strong>Pulling phase:</strong> Drive your elbows down and back toward your hips. Think "elbows to pockets" rather than "pull yourself up."</li>
          <li><strong>Top position:</strong> Chin clearly over the bar. Chest ideally touching or near the bar. Do not crane your neck up — the chin should clear naturally.</li>
          <li><strong>Descent:</strong> Lower yourself fully under control — do not drop. The eccentric (lowering) phase builds as much strength as the upward phase.</li>
          <li><strong>No kipping:</strong> In Indian Army physical tests and standard gym assessment, only strict pull-ups are counted. Kipping (using momentum) does not build the same strength.</li>
        </ul>

        <h2>Grip Variations and When to Use Them</h2>
        <table>
          <thead><tr><th>Variation</th><th>Grip</th><th>Primary Muscles</th><th>Difficulty</th></tr></thead>
          <tbody>
            {[
              ["Standard Pull-up", "Pronated (palms away), shoulder-width+", "Lats, rear delts", "Moderate"],
              ["Chin-up", "Supinated (palms toward you)", "Biceps, lower lats", "Easier — start here"],
              ["Wide-grip Pull-up", "Pronated, wider than shoulder width", "Outer lats, upper back", "Harder"],
              ["Close-grip Pull-up", "Pronated or neutral, hands close", "Middle back, lats", "Moderate"],
              ["Neutral grip Pull-up", "Palms facing each other (hammer)", "Brachialis, lats", "Easiest on wrists"],
            ].map(([v, g, m, d]) => (
              <tr key={v}><td style={{fontWeight:600}}>{v}</td><td>{g}</td><td>{m}</td><td>{d}</td></tr>
            ))}
          </tbody>
        </table>

        <h2>Pull-Up Standards for Indian Army Recruitment</h2>
        <p>Pull-up standards matter for Indian Army, Navy, and Air Force aspirants:</p>
        <ul>
          <li><strong>Agniveer GD (Male):</strong> Minimum 10 strict pull-ups</li>
          <li><strong>NDA / CDS:</strong> Minimum 6 strict pull-ups</li>
          <li><strong>SSB Physical Test:</strong> Minimum 8 strict pull-ups</li>
        </ul>
        <p>Use our <Link href="/calculators/army-fitness" style={{ color: "var(--color-brand-darker)" }}>Army Fitness Calculator</Link> to check if you currently meet the standards for your target recruitment scheme.</p>

        <h2>Common Pull-Up Mistakes Indian Gym-Goers Make</h2>
        <ul>
          <li><strong>Partial range of motion:</strong> Not starting from a full dead hang or not getting chin over bar. Partial reps build partial strength.</li>
          <li><strong>Always training to failure:</strong> Training to failure every session accumulates fatigue faster than strength. Sub-maximal volume (greasing the groove) is more effective for beginners.</li>
          <li><strong>Skipping negatives:</strong> Negative (eccentric) pull-ups are the fastest way to build pull-up strength but most beginners skip them entirely.</li>
          <li><strong>Using lat pulldown as a substitute:</strong> Lat pulldown is useful supplementary work but cannot replace pull-up training for developing pull-up performance.</li>
          <li><strong>Neglecting grip strength:</strong> Dead hangs and farmers carries build the grip strength needed to sustain multiple pull-up sets.</li>
        </ul>

        <div className="disclaimer-box">
          <strong>Note:</strong> If you experience shoulder or elbow pain during pull-up training, stop and consult a physiotherapist before continuing.
        </div>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides & Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {[
              ["🪖 Army Fitness Calc", "/calculators/army-fitness"],
              ["🏋️ How to Deadlift", "/exercise-guides/how-to-deadlift"],
              ["🏋️ How to Squat", "/exercise-guides/how-to-squat"],
              ["💪 Protein Calculator", "/calculators/protein"],
              ["📋 3-Day Workout Plan", "/workout-plans/3-day-full-body"],
              ["😴 Sleep Calculator", "/calculators/sleep"],
            ].map(([name, href]) => (
              <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>{name}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
