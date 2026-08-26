"use client";
import { useState } from "react";
import Link from "next/link";

export default function ProteinClient() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<"maintain" | "muscle" | "loss">("muscle");
  const [result, setResult] = useState<{ target: number; perMeal: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight);
    if (!w || w < 30 || w > 200) { setError("Please enter a valid body weight (30-200 kg)."); return; }
    const perKg = goal === "muscle" ? 2.0 : goal === "loss" ? 1.8 : 1.4;
    const target = Math.round(w * perKg);
    setResult({ target, perMeal: Math.round(target / 4) });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Calculator</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>
        Protein Calculator India — Find Your Daily Target
      </h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your daily protein intake target based on weight and goal.</p>

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Body Weight (kg)</label>
            <input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 70" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Goal</label>
            <select className="calc-select" value={goal} onChange={e => setGoal(e.target.value as "maintain" | "muscle" | "loss")}>
              <option value="muscle">Build Muscle (2.0g/kg)</option>
              <option value="loss">Fat Loss (1.8g/kg)</option>
              <option value="maintain">Maintain (1.4g/kg)</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Protein Target</button>
        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="result-card"><div className="result-number">{result.target}g</div><div className="result-label">Daily Protein Target</div></div>
            <div className="result-card"><div className="result-number">{result.perMeal}g</div><div className="result-label">Per Meal (4 meals)</div></div>
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>Indian Protein Sources</h2>
        <table>
          <thead><tr><th>Food</th><th>Protein per 100g</th></tr></thead>
          <tbody>
            <tr><td>Soya chunks (dry)</td><td>52g</td></tr>
            <tr><td>Paneer</td><td>18g</td></tr>
            <tr><td>Whole eggs</td><td>13g</td></tr>
            <tr><td>Chicken breast</td><td>31g</td></tr>
            <tr><td>Chana dal (cooked)</td><td>9g</td></tr>
            <tr><td>Hung curd</td><td>10g</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/vegetarian-protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Vegetarian Protein Calc</Link>
          <Link href="/calculators/tdee" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>TDEE Calculator</Link>
        </div>
      </div>
    </div>
  );
}
