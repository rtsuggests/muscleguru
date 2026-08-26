"use client";
import { useState } from "react";
import Link from "next/link";

export default function TDEEClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.375");
  const [result, setResult] = useState<{ bmr: number; tdee: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height);
    if (!a || !w || !h || a < 15 || a > 90 || w < 30 || w > 200 || h < 120 || h > 220) {
      setError("Please enter valid age, weight and height.");
      return;
    }
    const bmr = sex === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    const tdee = Math.round(bmr * parseFloat(activity));
    setResult({ bmr: Math.round(bmr), tdee });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span className="tag">Calculator</span>
      </div>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
        TDEE Calculator India — Total Daily Energy Expenditure
      </h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation — the most accurate formula validated for modern populations.
      </p>

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)}
              style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>
              {s === "male" ? "Male" : "Female"}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Age (years)</label>
            <input className="calc-input" type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="e.g. 28" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (kg)</label>
            <input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 70" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label>
            <input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="e.g. 172" />
          </div>
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Activity Level</label>
          <select className="calc-select" value={activity} onChange={e => setActivity(e.target.value)}>
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (1-3 days/week)</option>
            <option value="1.55">Moderately active (3-5 days/week)</option>
            <option value="1.725">Very active (6-7 days/week)</option>
            <option value="1.9">Extremely active (physical job + training)</option>
          </select>
        </div>

        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My TDEE</button>

        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="result-card">
              <div className="result-number">{result.bmr}</div>
              <div className="result-label">BMR (kcal/day)</div>
            </div>
            <div className="result-card">
              <div className="result-number">{result.tdee}</div>
              <div className="result-label">TDEE (kcal/day)</div>
            </div>
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>What Is TDEE and Why It Matters</h2>
        <p>Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a day including your Basal Metabolic Rate (BMR) plus activity. Knowing your TDEE is the foundation for any fat loss, muscle gain, or maintenance nutrition plan.</p>
        <p>This calculator uses the Mifflin-St Jeor equation, which research has repeatedly shown to be the most accurate BMR formula for the general population compared to older formulas like Harris-Benedict.</p>
        <h2>How to Use Your TDEE</h2>
        <ul>
          <li><strong>Fat loss:</strong> Eat 300-500 kcal below your TDEE</li>
          <li><strong>Muscle gain:</strong> Eat 200-300 kcal above your TDEE</li>
          <li><strong>Maintenance:</strong> Eat at your TDEE</li>
        </ul>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/calorie-deficit" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calorie Deficit Calc</Link>
          <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
          <Link href="/calculators/macro" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Macro Calculator</Link>
        </div>
      </div>
    </div>
  );
}
