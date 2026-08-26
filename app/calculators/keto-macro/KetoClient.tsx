"use client";
import { useState } from "react";
import Link from "next/link";

export default function KetoClient() {
  const [calories, setCalories] = useState("");
  const [variant, setVariant] = useState("standard");
  const [result, setResult] = useState<{ protein: number; carbs: number; fat: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const cal = parseFloat(calories);
    if (!cal || cal < 1000 || cal > 6000) { setError("Please enter valid daily calories."); return; }
    const ratios: Record<string, [number, number, number]> = {
      standard: [0.20, 0.05, 0.75],
      highProtein: [0.30, 0.05, 0.65],
      cyclical: [0.25, 0.10, 0.65],
      targeted: [0.20, 0.10, 0.70],
    };
    const [p, c, f] = ratios[variant];
    setResult({
      protein: Math.round((cal * p) / 4),
      carbs: Math.round((cal * c) / 4),
      fat: Math.round((cal * f) / 9),
    });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Keto</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Keto Macro Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate keto macros for 4 keto variants with Indian keto food guide.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Daily Calories</label><input className="calc-input" type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="e.g. 2000" /></div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Keto Variant</label>
            <select className="calc-select" value={variant} onChange={e => setVariant(e.target.value)}>
              <option value="standard">Standard Keto</option>
              <option value="highProtein">High Protein Keto</option>
              <option value="cyclical">Cyclical Keto</option>
              <option value="targeted">Targeted Keto</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Keto Macros</button>
        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            <div className="result-card"><div className="result-number">{result.fat}g</div><div className="result-label">Fat</div></div>
            <div className="result-card"><div className="result-number">{result.protein}g</div><div className="result-label">Protein</div></div>
            <div className="result-card"><div className="result-number">{result.carbs}g</div><div className="result-label">Carbs</div></div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Indian Keto Foods</h2>
        <table>
          <thead><tr><th>Food</th><th>Carbs per 100g</th></tr></thead>
          <tbody>
            <tr><td>Paneer</td><td>1.2g</td></tr>
            <tr><td>Spinach (palak)</td><td>3.6g</td></tr>
            <tr><td>Cauliflower</td><td>5g</td></tr>
            <tr><td>Eggs</td><td>1.1g</td></tr>
            <tr><td>Coconut oil</td><td>0g</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/macro" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Macro Calculator</Link>
        </div>
      </div>
    </div>
  );
}
