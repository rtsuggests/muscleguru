"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

export default function PregnancyClient() {
  const [prePregWeight, setPrePregWeight] = useState("");
  const [height, setHeight] = useState("");
  const [week, setWeek] = useState("");
  const [multiples, setMultiples] = useState<"single" | "twins">("single");
  const [result, setResult] = useState<{ bmi: number; category: string; minGain: number; maxGain: number; recommendedNow: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(prePregWeight), h = parseFloat(height) / 100, wk = parseFloat(week);
    if (!w || !h || !wk || wk < 1 || wk > 42) { setError("Please enter valid pre-pregnancy weight, height, and current week (1-42)."); return; }

    const bmi = parseFloat((w / (h * h)).toFixed(1));
    let category = "", minTotal = 0, maxTotal = 0;

    if (bmi < 18.5) { category = "Underweight"; minTotal = 12.5; maxTotal = 18; }
    else if (bmi < 23) { category = "Normal (Indian BMI)"; minTotal = 11.5; maxTotal = 16; }
    else if (bmi < 27.5) { category = "Overweight (Indian BMI)"; minTotal = 7; maxTotal = 11.5; }
    else { category = "Obese"; minTotal = 5; maxTotal = 9; }

    if (multiples === "twins") { minTotal += 6; maxTotal += 7; }

    const progressFraction = Math.max(0, (wk - 12) / (40 - 12));
    const recommendedNow = wk <= 12 ? 1.5 : parseFloat((1.5 + progressFraction * (minTotal - 1.5)).toFixed(1));

    setResult({ bmi, category, minGain: minTotal, maxGain: maxTotal, recommendedNow });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Women&apos;s Health</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Pregnancy Weight Gain Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        Calculate healthy pregnancy weight gain in kilograms, by trimester, based on your pre-pregnancy BMI using ICMR-adapted guidelines.
      </p>

      <SavedResultBanner slug="pregnancy-weight-gain" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["single", "twins"] as const).map(m => (
            <button key={m} onClick={() => setMultiples(m)}
              style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: multiples === m ? "var(--color-brand-dark)" : "transparent", color: multiples === m ? "#fff" : "var(--color-muted)" }}>
              {m === "single" ? "Single Baby" : "Twins"}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Pre-Pregnancy Weight (kg)</label>
            <input className="calc-input" type="number" value={prePregWeight} onChange={e => setPrePregWeight(e.target.value)} placeholder="e.g. 58" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label>
            <input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 160" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Current Week</label>
            <input className="calc-input" type="number" value={week} onChange={e => setWeek(e.target.value)} placeholder="e.g. 20" />
          </div>
        </div>

        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Healthy Weight Gain</button>

        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card">
                <div className="result-number">{result.bmi}</div>
                <div className="result-label">Pre-Pregnancy BMI ({result.category})</div>
              </div>
              <div className="result-card">
                <div className="result-number">{result.minGain}–{result.maxGain}kg</div>
                <div className="result-label">Total Recommended Gain</div>
              </div>
            </div>
            <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem", marginBottom: "1.25rem" }}>
              <div style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem" }}>At Week {week}, You Should Have Gained Approximately</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", color: "var(--color-brand-dark)" }}>{result.recommendedNow}kg</div>
            </div>
            <SaveResultButton calculator="Pregnancy Weight Gain" slug="pregnancy-weight-gain" icon="🤰" headline={`${result.recommendedNow}kg`} label={`Week ${week} target`} />
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>Healthy Pregnancy Weight Gain in Kg: Indian Guidelines</h2>
        <p>Pregnancy weight gain recommendations are based on your pre-pregnancy BMI, because starting weight significantly affects both maternal and foetal health outcomes. India&apos;s ICMR-adapted BMI thresholds differ from Western/IOM guidelines — Indian women are classified as overweight starting at BMI 23 (not 25), which shifts the recommended gain ranges accordingly.</p>
        <table>
          <thead><tr><th>Pre-Pregnancy BMI</th><th>Category</th><th>Total Recommended Gain</th><th>2nd/3rd Trimester (per week)</th></tr></thead>
          <tbody>
            <tr><td>Below 18.5</td><td>Underweight</td><td>12.5–18 kg</td><td>~0.5 kg/week</td></tr>
            <tr><td>18.5–22.9</td><td>Normal (Indian)</td><td>11.5–16 kg</td><td>~0.4 kg/week</td></tr>
            <tr><td>23–27.4</td><td>Overweight (Indian)</td><td>7–11.5 kg</td><td>~0.3 kg/week</td></tr>
            <tr><td>27.5+</td><td>Obese</td><td>5–9 kg</td><td>~0.2 kg/week</td></tr>
          </tbody>
        </table>

        <h2>Weight Gain by Trimester: What&apos;s Normal</h2>
        <ul>
          <li><strong>First trimester (weeks 1-12):</strong> Minimal gain expected — typically 0.5-2 kg total. Some women experience no gain or even slight loss due to morning sickness; this is generally not a concern if it resolves by the second trimester.</li>
          <li><strong>Second trimester (weeks 13-27):</strong> The period of most consistent, steady gain — typically 0.3-0.5 kg per week for women starting at a normal BMI.</li>
          <li><strong>Third trimester (weeks 28-40):</strong> Gain continues at a similar or slightly reduced weekly rate as the body prepares for delivery.</li>
        </ul>

        <h2>What If You&apos;re Gaining Too Fast or Too Slow?</h2>
        <p>Occasional weeks above or below the target range are normal and not immediately concerning — pregnancy weight gain is rarely perfectly linear. However, a consistent pattern of gaining significantly faster than recommended increases risk of gestational diabetes and delivery complications, while consistently slow gain (particularly in underweight women) is associated with lower birth weight. Discuss any consistent pattern outside the expected range with your obstetrician at your next appointment — this calculator is a general guide, not a substitute for your doctor&apos;s specific monitoring.</p>

        <h2>Twin Pregnancy: Adjusted Targets</h2>
        <p>Carrying twins requires additional weight gain to support two developing babies. The general adjustment adds approximately 6-7 kg to the singleton recommendation across all BMI categories, though your doctor may provide more specific targets based on individual monitoring throughout your pregnancy.</p>

        <div className="disclaimer-box">
          <strong>Medical Disclaimer:</strong> This calculator provides general guidance based on published ICMR-adapted ranges. Always follow your obstetrician&apos;s specific recommendations, which account for your individual health history and pregnancy progress.
        </div>

        <RelatedCalculators items={[
          { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "Water Intake Calc", href: "/calculators/water-intake", icon: "💧" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        ]} />
      </div>
    </div>
  );
}
