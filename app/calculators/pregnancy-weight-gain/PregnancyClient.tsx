"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import Link from "next/link";

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

    // Estimate recommended gain by current week (simple proportional model post week 12)
    const progressFraction = Math.max(0, (wk - 12) / (40 - 12));
    const recommendedNow = wk <= 12 ? 1.5 : parseFloat((1.5 + progressFraction * (minTotal - 1.5)).toFixed(1));

    setResult({ bmi, category, minGain: minTotal, maxGain: maxTotal, recommendedNow });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Women&apos;s Health</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>
        Pregnancy Weight Gain Calculator India
      </h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        Calculate healthy pregnancy weight gain with trimester guidance based on your pre-pregnancy BMI.
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
            <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem" }}>
              <div style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem" }}>At Week {week}, You Should Have Gained Approximately</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem", color: "var(--color-brand-dark)" }}>{result.recommendedNow}kg</div>
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <SaveResultButton calculator="Pregnancy Weight Gain" slug="pregnancy-weight-gain" icon="🤰" headline={`${result.recommendedNow}kg`} label={`Week ${week} target`} />
            </div>
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>Indian BMI-Based Weight Gain Guidelines</h2>
        <table>
          <thead><tr><th>Pre-Pregnancy BMI</th><th>Category</th><th>Total Recommended Gain</th></tr></thead>
          <tbody>
            <tr><td>Below 18.5</td><td>Underweight</td><td>12.5–18 kg</td></tr>
            <tr><td>18.5–22.9</td><td>Normal (Indian)</td><td>11.5–16 kg</td></tr>
            <tr><td>23–27.4</td><td>Overweight (Indian)</td><td>7–11.5 kg</td></tr>
            <tr><td>27.5+</td><td>Obese</td><td>5–9 kg</td></tr>
          </tbody>
        </table>
        <div className="disclaimer-box">
          <strong>Medical Disclaimer:</strong> This calculator provides general guidance only. Always follow your obstetrician&apos;s specific recommendations for your pregnancy.
        </div>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/bmi" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>BMI Calculator</Link>
          <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
        </div>
      </div>
    </div>
  );
}
