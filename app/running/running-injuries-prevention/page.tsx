import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/running-injuries-prevention" },
  title: "Running Injuries Prevention India — Complete Guide",
  description: "Complete guide to preventing and treating the most common running injuries in India. Shin splints, runner's knee, IT band, plantar fasciitis.",
  keywords: ["running injuries India", "shin splints treatment", "runner's knee prevention"],
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
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Running Injuries Prevention</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Running Health</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>12 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          Running Injuries Prevention: Complete Guide for Indian Runners
        </h1>

        <div style={{ background: "#fef2f2", border: "1.5px solid #fecaca", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#991b1b", marginBottom: "0.4rem" }}>Key Statistic</div>
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#7f1d1d", lineHeight: 1.65 }}>Research by Videbæk et al. (2015) found that 19-79% of runners sustain at least one running-related injury per year. The majority are preventable.</p>
        </div>

        <div className="seo-content">
          <h2>Why Indian Runners Are Particularly Injury-Prone</h2>
          <p>India&apos;s rapidly growing running community faces India-specific risk factors: hard concrete surfaces (10x harder than natural turf), aggressive mileage progression driven by race deadlines, inadequate footwear, and insufficient strength training.</p>

          <h2>Shin Splints (Medial Tibial Stress Syndrome)</h2>
          <p><strong>Prevalence:</strong> Most common — 10-15% of all running injuries. <strong>Causes:</strong> too much mileage increase too quickly, hard concrete surfaces, worn-out footwear. <strong>Prevention:</strong> follow the 10% weekly mileage rule, replace shoes every 600-800 km, daily calf stretching.</p>

          <h2>Runner&apos;s Knee (Patellofemoral Pain Syndrome)</h2>
          <p><strong>Prevalence:</strong> 16-25% of runners. <strong>Causes:</strong> weak quadriceps and glutes, overstriding, sudden mileage increase. <strong>Prevention:</strong> strengthen glutes and quads, shorten stride and increase cadence.</p>

          <h2>IT Band Syndrome</h2>
          <p><strong>Prevalence:</strong> 5-14% of injuries. <strong>Causes:</strong> weak hip abductors, excessive downhill running, always running the same side of a cambered road. <strong>Prevention:</strong> hip abductor strengthening, foam rolling.</p>

          <h2>Plantar Fasciitis</h2>
          <p><strong>Prevalence:</strong> Affects 10% of runners. <strong>Causes:</strong> tight calf muscles, sudden mileage increase. <strong>Prevention:</strong> daily calf and plantar fascia stretching, gradual shoe transitions.</p>

          <h2>The 10% Rule</h2>
          <p>Research by Nielsen et al. (2012) found that weekly mileage increases above 30% significantly increased injury risk. Never increase your total weekly running distance by more than 10% from one week to the next.</p>

          <h2>Strength Training for Injury Prevention</h2>
          <p>Research by Lauersen et al. (2014) found strength training reduced overuse sports injuries by approximately 50% — more effective than any other prevention intervention studied.</p>
          <table>
            <thead><tr><th>Exercise</th><th>Sets × Reps</th><th>Target</th></tr></thead>
            <tbody>
              <tr><td>Single-leg calf raise</td><td>3×15/leg</td><td>Achilles, plantar fasciitis</td></tr>
              <tr><td>Clamshell (band)</td><td>3×20/side</td><td>IT band, runner&apos;s knee</td></tr>
              <tr><td>Bulgarian split squat</td><td>3×10/leg</td><td>Runner&apos;s knee, IT band</td></tr>
              <tr><td>Tibialis anterior raise</td><td>3×20</td><td>Shin splints</td></tr>
            </tbody>
          </table>

          <h2>Footwear Guide</h2>
          <ul>
            <li>Replace shoes every 600-800 km — cushioning degrades before uppers show wear</li>
            <li>Choose moderate-to-high stack height (25-35mm) for hard Indian surfaces</li>
            <li>Never change heel drop rapidly — transition over 8-12 weeks minimum</li>
          </ul>

          <div className="disclaimer-box">
            <strong>Medical Disclaimer:</strong> Persistent running pain requires assessment by a qualified physiotherapist or sports medicine doctor.
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides and Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              <Link href="/running/beginners-guide" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Beginner Running Guide</Link>
              <Link href="/recovery/rest-days-explained" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Rest Days Explained</Link>
              <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
              <Link href="/exercise-guides/how-to-squat" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Squat</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
