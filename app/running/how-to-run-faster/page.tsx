import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/how-to-run-faster" },
  title: "How to Run Faster — Speed Training India",
  description: "Evidence-based guide to running faster for Indian runners. Interval training, tempo runs, cadence improvement, hill sprints, and a 6-week speed plan.",
  keywords: ["how to run faster India", "speed training running India", "improve running pace India"],
};

export default function Page() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/running" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Running</Link>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>How to Run Faster</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Running</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>12 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          How to Run Faster: Evidence-Based Speed Training for Indian Runners
        </h1>

        <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.75rem", textTransform: "uppercase" }}>Five Ways to Run Faster</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.5rem" }}>
            <div style={{ fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>1. Add interval training</div>
            <div style={{ fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>2. Run tempo runs weekly</div>
            <div style={{ fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>3. Increase cadence to 175+</div>
            <div style={{ fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>4. Add strength training</div>
            <div style={{ fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>5. Run more easy mileage</div>
          </div>
        </div>

        <div className="seo-content">
          <h2>Why Most Indian Runners Stop Getting Faster</h2>
          <p>Most Indian runners who train consistently for 3-6 months experience rapid early improvement, then plateau. This is not a fitness ceiling — it is a training stimulus problem. Getting faster requires deliberately overloading the systems that limit running speed: the aerobic energy system, lactate threshold, running economy, and neuromuscular power.</p>

          <h2>Method 1: Interval Training</h2>
          <p>Interval training — alternating high-intensity efforts with recovery periods — is the most researched method for improving VO2 max. Research by Helgerud et al. (2007) found that 4x4-minute intervals at 90-95% max heart rate improved VO2 max by 13.4% in 8 weeks — significantly more than continuous moderate training.</p>
          <table>
            <thead><tr><th>Interval Type</th><th>Distance</th><th>Target Pace</th><th>Rest</th></tr></thead>
            <tbody>
              <tr><td>Short repeats</td><td>200-400m</td><td>Faster than 5K pace</td><td>60-90 sec</td></tr>
              <tr><td>5K pace intervals</td><td>400-800m</td><td>Current 5K race pace</td><td>90-120 sec</td></tr>
              <tr><td>Cruise intervals</td><td>800-1200m</td><td>10K race pace</td><td>60-90 sec</td></tr>
            </tbody>
          </table>
          <p>Find your target paces with our <Link href="/calculators/running-pace" style={{ color: "var(--color-brand-darker)" }}>Running Pace Calculator</Link>.</p>

          <h2>Method 2: Tempo Runs</h2>
          <p>Tempo runs are sustained efforts at your lactate threshold pace — typically 15-30 seconds per km slower than your 10K race pace. This raises the pace you can sustain before lactate accumulates and forces you to slow. Start with 5-10 min easy warm-up, then 20-40 min at "comfortably hard" effort where you can speak 3-4 words at a time.</p>

          <h2>Method 3: Cadence Improvement</h2>
          <p>Many Indian runners run at 150-165 steps per minute — below the 170-180 spm that research identifies as optimal. Low cadence often means overstriding, which creates braking force and increases injury risk. Research by Heiderscheit et al. (2011) found that increasing cadence 5-10% significantly reduced hip and knee joint stress.</p>
          <p>To measure: count steps for 30 seconds and multiply by 4. Use a metronome app set to 170-180 bpm during easy runs to build the habit over 3-4 weeks.</p>

          <h2>Method 4: Strength Training</h2>
          <p>Research by Beattie et al. (2017) found that 40 weeks of heavy strength training alongside endurance training improved 5K time by 3.9% without any additional running.</p>
          <table>
            <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
            <tbody>
              <tr><td>Heavy squats</td><td>4 × 5-6</td></tr>
              <tr><td>Single-leg Romanian deadlift</td><td>3 × 8/leg</td></tr>
              <tr><td>Box jumps</td><td>4 × 5</td></tr>
              <tr><td>Weighted calf raises</td><td>4 × 12</td></tr>
            </tbody>
          </table>

          <h2>Method 5: Building Aerobic Base</h2>
          <p>Counterintuitively, more easy running makes you faster. Aerobic base — built through consistent easy mileage — is the foundation all speed work sits on. Increase easy weekly mileage by 10% every 2-3 weeks before adding speed work.</p>

          <h2>Hill Sprints: An Underused Tool</h2>
          <p>Find a hill with 6-10% gradient and 80-100m length. Sprint up at near-maximum effort, walk back down as recovery. Repeat 6-10 times, once weekly. Hill sprints develop explosive power with lower injury risk than flat sprinting due to reduced impact forces.</p>

          <h2>The 6-Week Speed Development Plan</h2>
          <table>
            <thead><tr><th>Week</th><th>Quality Session</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>4×400m at 5K pace, 90 sec rest</td><td>Establish baseline</td></tr>
              <tr><td>2</td><td>5×400m at 5K pace</td><td>Add one rep</td></tr>
              <tr><td>3</td><td>3×800m at 10K pace, 2 min rest</td><td>Longer intervals</td></tr>
              <tr style={{ background: "#fffbeb" }}><td>4</td><td>Easy runs only</td><td>Recovery week — reduce volume 30%</td></tr>
              <tr><td>5</td><td>5×800m at 10K pace, 90 sec rest</td><td>Reduce rest</td></tr>
              <tr style={{ background: "#f0fdf4" }}><td>6</td><td>Time trial — test your speed</td><td>Measure improvement</td></tr>
            </tbody>
          </table>

          <div className="disclaimer-box">
            <strong>Note:</strong> Speed training significantly increases training stress. Build an aerobic base of at least 20 km/week before adding speed sessions.
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides and Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
              <Link href="/calculators/heart-rate-zone" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Heart Rate Zones</Link>
              <Link href="/calculators/vo2-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>VO2 Max Calc</Link>
              <Link href="/running/10k-training-plan" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>10K Training Plan</Link>
              <Link href="/running/half-marathon-training" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Half Marathon Plan</Link>
              <Link href="/calculators/calories-burned" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calories Burned</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
