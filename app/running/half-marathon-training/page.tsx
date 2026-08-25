import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Half Marathon Training Plan India — 12 Weeks",
  description: "Free 12-week half marathon training plan for Indian runners. Build from 10K to 21.1K with long runs, tempo work, and Indian race calendar.",
  keywords: ["half marathon training plan India", "21K training plan India", "half marathon beginner India"],
};

export default function HalfMarathonPage() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/running" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Running</Link>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Half Marathon Training Plan</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Running</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>12 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          Half Marathon Training Plan India: 12-Week Programme (10K to 21.1K)
        </h1>

        <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.75rem", textTransform: "uppercase" }}>Programme Overview</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: "0.75rem" }}>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>12 weeks</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Duration</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>4 runs</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Days/week</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>Can run 10K</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Start point</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>~43 km</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Peak week</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>1:45–2:30</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Target time</div></div>
            <div style={{ textAlign: "center" }}><div style={{ fontWeight: 800, color: "var(--color-brand-dark)" }}>Weeks 11–12</div><div style={{ fontSize: "0.72rem", color: "var(--color-muted)" }}>Taper</div></div>
          </div>
        </div>

        <div className="seo-content">
          <h2>12-Week Half Marathon Training Plan</h2>
          <p>This programme uses three session types per week — easy runs for aerobic base, a quality session (tempo or intervals), and a progressively longer long run. Two built-in recovery weeks (Weeks 4 and 8) reduce mileage by 30–40% before building again.</p>

          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table>
              <thead>
                <tr style={{ background: "var(--color-brand-light)" }}>
                  <th>Week</th><th>Wed Quality Session</th><th>Sat Long Run</th><th>Weekly Total</th><th>Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ fontWeight: 700 }}>Week 1</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>4×800m intervals</td><td style={{ fontWeight: 600 }}>10K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>24K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Base establishment</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 2</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>5K tempo</td><td style={{ fontWeight: 600 }}>11K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>27K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Aerobic base</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 3</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>5×800m intervals</td><td style={{ fontWeight: 600 }}>13K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>30K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Building distance</td></tr>
                <tr style={{ background: "#fffbeb" }}><td style={{ fontWeight: 700 }}>Week 4</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>Easy runs only</td><td style={{ fontWeight: 600 }}>10K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>23K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Recovery week</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 5</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>6K tempo</td><td style={{ fontWeight: 600 }}>14K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>33K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Long run build</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 6</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>6×800m intervals</td><td style={{ fontWeight: 600 }}>16K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>35K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Speed and distance</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 7</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>7K tempo</td><td style={{ fontWeight: 600 }}>18K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>40K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Peak build</td></tr>
                <tr style={{ background: "#fffbeb" }}><td style={{ fontWeight: 700 }}>Week 8</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>Easy runs only</td><td style={{ fontWeight: 600 }}>13K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>28K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Recovery week</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 9</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>8K tempo</td><td style={{ fontWeight: 600 }}>19K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>42K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Race-specific</td></tr>
                <tr style={{ background: "#fef2f2" }}><td style={{ fontWeight: 700 }}>Week 10</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>8×800m intervals</td><td style={{ fontWeight: 600 }}>20K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>43K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Peak week</td></tr>
                <tr><td style={{ fontWeight: 700 }}>Week 11</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>6K easy</td><td style={{ fontWeight: 600 }}>16K easy</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>34K</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Taper begins</td></tr>
                <tr style={{ background: "#f0fdf4" }}><td style={{ fontWeight: 700 }}>Week 12</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 500 }}>3K easy</td><td style={{ fontWeight: 600 }}>RACE DAY 21.1K</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>12K + race</td><td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>Race week</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Long Run Rules</h2>
          <ul>
            <li><strong>Run genuinely easy:</strong> 60–90 sec/km slower than target race pace.</li>
            <li><strong>Never increase long run distance more than 3 km per week.</strong></li>
            <li><strong>Rest fully the day after your long run.</strong></li>
            <li><strong>Practice race nutrition from Week 7 onwards</strong> — carry water, practise dates or banana at halfway.</li>
          </ul>

          <h2>Major Half Marathons in India</h2>
          <table>
            <thead><tr><th>Race</th><th>City</th><th>Month</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Airtel Delhi Half Marathon</td><td>Delhi</td><td>November</td><td>Elite international field</td></tr>
              <tr><td>TCSW Mumbai Half Marathon</td><td>Mumbai</td><td>January</td><td>Flat, sea-level course</td></tr>
              <tr><td>Bengaluru Half Marathon</td><td>Bengaluru</td><td>October</td><td>Moderate hills</td></tr>
              <tr><td>Hyderabad Half Marathon</td><td>Hyderabad</td><td>August</td><td>Flat, monsoon season</td></tr>
              <tr><td>Pune International Half</td><td>Pune</td><td>September</td><td>Moderate course</td></tr>
            </tbody>
          </table>

          <div className="disclaimer-box">
            <strong>Note:</strong> Half marathon training places significant demands on the musculoskeletal system. Persistent pain requires physiotherapy assessment before continuing.
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides and Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              <Link href="/running/10k-training-plan" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>10K Training Plan</Link>
              <Link href="/running/how-to-run-faster" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Run Faster</Link>
              <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
              <Link href="/calculators/heart-rate-zone" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Heart Rate Zones</Link>
              <Link href="/calculators/water-intake" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Water Intake Calc</Link>
              <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
