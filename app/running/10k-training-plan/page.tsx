import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/10k-training-plan" },
  title: "10K Training Plan India — 8-Week Programme",
  description: "Free 8-week 10K training plan for Indian runners. Build from 5K to 10K with structured runs, pace guidance, and Indian climate tips.",
  keywords: ["10K training plan India", "10km beginner India", "how to run 10K India"],
};

export default function TenKPage() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/running" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Running</Link>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>10K Training Plan</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Running</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>12 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          10K Training Plan India: 8-Week Programme from 5K to 10K
        </h1>

        <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.75rem", textTransform: "uppercase" }}>Programme Overview</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "0.75rem" }}>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>8 weeks</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Duration</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>3–4 runs</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Days/week</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>Can run 5K</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Start point</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>Finish 10K</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Goal</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>~19 km</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Peak week</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>Week 8</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Taper</div></div>
          </div>
        </div>

        <div className="seo-content">
          <h2>Why 10K Is the Perfect Distance for Indian Runners</h2>
          <p>The 10 kilometre race is the sweet spot of distance running — challenging enough to require genuine preparation, but accessible enough that any moderately fit adult can complete one within 2–4 months of structured training. Major Indian 10K events include the Bengaluru 10K Challenge (25,000+ participants), Airtel Delhi Half Marathon 10K, Hyderabad 10K, Mumbai 10K, and dozens of city-level events annually.</p>

          <h2>The Complete 8-Week Training Plan</h2>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table>
              <thead>
                <tr style={{ background: "var(--color-brand-light)" }}>
                  <th>Week</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Sat (Long)</th><th>Total</th><th>Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ fontWeight: 700 }}>Week 1</td><td>3K easy</td><td>Cross-train 30 min</td><td>3K easy</td><td>4K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>10K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Building habit</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 2</td><td>3.5K easy</td><td>Cross-train 35 min</td><td>3.5K easy</td><td>5K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>12K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Aerobic base</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 3</td><td>4K easy</td><td>3K + 4×200m strides</td><td>4K easy</td><td>6K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>14K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Introducing pace</td></tr>
                <tr style={{ background: "#fffbeb" }}><td style={{ fontWeight: 700 }}>Week 4</td><td>4K easy</td><td>Cross-train 30 min</td><td>3K easy</td><td>5K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>12K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Recovery week</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 5</td><td>5K easy</td><td>4K tempo run</td><td>4K easy</td><td>7K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>16K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Tempo work</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 6</td><td>5K easy</td><td>5×400m at 10K pace</td><td>4K easy</td><td>8K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>18K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Speed work</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 7</td><td>5K easy</td><td>5K tempo run</td><td>4K easy</td><td>9K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>19K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Peak week</td></tr>
                <tr style={{ background: "#f0fdf4" }}><td style={{ fontWeight: 700 }}>Week 8</td><td>4K easy</td><td>3K easy</td><td>2K easy</td><td style={{ fontWeight: 600 }}>RACE DAY</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>9K + race</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Taper and race</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Easy Runs — The Foundation</h2>
          <p>Easy runs are at a genuinely comfortable conversational pace — Zone 2 heart rate (60–70% of maximum). Use our <Link href="/calculators/heart-rate-zone" style={{ color: "var(--color-brand-darker)" }}>Heart Rate Zone Calculator</Link> to find your personal Zone 2 range. Most Indian beginner runners make the mistake of running too fast on easy days.</p>

          <h2>Race Day Pacing</h2>
          <ul>
            <li><strong>Km 1–3:</strong> Run 10–15 sec/km slower than planned — race adrenaline makes easy pace feel slow. Hold back.</li>
            <li><strong>Km 4–7:</strong> Settle into target pace. Focus on breathing and form.</li>
            <li><strong>Km 8–9:</strong> Gradually increase if you have energy in reserve.</li>
            <li><strong>Final km:</strong> Race to the finish.</li>
          </ul>
          <p>Use our <Link href="/calculators/running-pace" style={{ color: "var(--color-brand-darker)" }}>Running Pace Calculator</Link> to calculate your km splits for your target finish time.</p>

          <h2>Indian Climate Tips</h2>
          <ul>
            <li><strong>Heat:</strong> Run before 7 AM during April–June. Slow your easy pace by 30–60 sec/km on hot days.</li>
            <li><strong>Hydration:</strong> Drink 500ml before morning runs. Use our <Link href="/calculators/water-intake" style={{ color: "var(--color-brand-darker)" }}>Water Intake Calculator</Link> for daily needs.</li>
            <li><strong>Air quality:</strong> Check AQI India app. Above AQI 150 reduce intensity; above 200 move to treadmill.</li>
          </ul>

          <div className="disclaimer-box">
            <strong>Note:</strong> Stop training and consult a doctor if you experience chest pain, dizziness, or persistent joint pain.
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides and Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              <Link href="/running/half-marathon-training" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Half Marathon Plan</Link>
              <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
              <Link href="/calculators/heart-rate-zone" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Heart Rate Zones</Link>
              <Link href="/calculators/calories-burned" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calories Burned</Link>
              <Link href="/calculators/vo2-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>VO2 Max Calculator</Link>
              <Link href="/calculators/water-intake" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Water Intake Calc</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
