import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/treadmill-vs-outdoor" },
  title: "Treadmill vs Outdoor Running India — Which is Better",
  description: "Evidence-based comparison of treadmill vs outdoor running for Indian runners. Monsoon and pollution protocols, the 1% incline rule, and the hybrid approach.",
  keywords: ["treadmill vs outdoor running India", "is treadmill good for running", "running indoors India"],
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
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Treadmill vs Outdoor Running</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Running</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>10 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          Treadmill vs Outdoor Running India: Which Is Better for You?
        </h1>

        <div className="seo-content">
          <h2>The Indian Runner&apos;s Dilemma</h2>
          <p>For millions of Indian runners, the choice between treadmill and outdoor running is shaped by monsoon rains, summer heat, winter pollution, and road safety. Both are effective training tools that produce similar cardiovascular adaptations when intensity and duration are matched.</p>

          <h2>Key Differences</h2>
          <table>
            <thead><tr><th>Factor</th><th>Treadmill</th><th>Outdoor</th></tr></thead>
            <tbody>
              <tr><td>Energy cost (same speed)</td><td>~1-2% lower at 0% incline</td><td>Standard baseline</td></tr>
              <tr><td>Joint impact</td><td>Lower (cushioned)</td><td>Higher (road surface)</td></tr>
              <tr><td>Pace control</td><td>Exact — machine-controlled</td><td>Approximate</td></tr>
              <tr><td>Weather independence</td><td>Complete</td><td>None</td></tr>
              <tr><td>Race preparation</td><td>Limited transfer</td><td>Direct transfer</td></tr>
            </tbody>
          </table>

          <h2>The 1% Incline Rule</h2>
          <p>Research by Jones and Doust (1996) found that setting treadmill incline to 1% compensates for the lack of air resistance and belt assistance in outdoor running, producing equivalent energy cost. Always use 1% incline as your treadmill default — never run at 0%.</p>

          <h2>When Treadmill Is Clearly Better</h2>
          <h3>Delhi-NCR Winter Pollution (November-January)</h3>
          <p>Delhi&apos;s winter AQI regularly reaches 300-500+. Exercising at moderate-to-high intensity during these conditions dramatically increases particulate matter inhalation. Protocol: AQI below 100 = outdoor safe. 100-150 = outdoor easy pace only. Above 150 = treadmill preferred. Above 200 = treadmill only.</p>
          <h3>Monsoon Season</h3>
          <p>Waterlogged roads with hidden potholes, flooded areas, and slippery surfaces make outdoor running genuinely risky during heavy monsoon rains. Treadmill eliminates these hazards while maintaining full training.</p>
          <h3>Injury Recovery</h3>
          <p>The cushioned treadmill surface reduces impact forces by 10-30% compared to concrete — useful for runners recovering from shin splints or stress fractures.</p>

          <h2>When Outdoor Running Is Better</h2>
          <p>For race preparation, outdoor training in the final 6-8 weeks is essential — it develops gait adaptation, heat management, and the mental experience of sustained outdoor effort that treadmill cannot replicate. Research also shows outdoor exercise produces greater mood and motivation benefits, important for long-term running adherence.</p>

          <h2>The Optimal Hybrid Approach</h2>
          <ul>
            <li><strong>Weekday morning runs:</strong> Outdoor — best air quality, cooler temperatures</li>
            <li><strong>Bad AQI days (150+):</strong> Treadmill at 1% incline</li>
            <li><strong>Heavy monsoon rain:</strong> Treadmill</li>
            <li><strong>Interval sessions:</strong> Treadmill for precise pace control</li>
            <li><strong>Long runs:</strong> Outdoor — race simulation</li>
            <li><strong>Final 4 weeks before a race:</strong> Primarily outdoor</li>
          </ul>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides and Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              <Link href="/running/beginners-guide" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Beginner Running Guide</Link>
              <Link href="/running/10k-training-plan" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>10K Training Plan</Link>
              <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
              <Link href="/calculators/heart-rate-zone" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Heart Rate Zones</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
