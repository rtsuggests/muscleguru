"use client";
import { useState } from "react";
import Link from "next/link";

export default function MacroClient() {
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState<"muscle" | "loss" | "maintain">("maintain");
  const [result, setResult] = useState<{ protein: number; carbs: number; fat: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const cal = parseFloat(calories);
    if (!cal || cal < 1000 || cal > 6000) { setError("Please enter valid daily calories (1000-6000)."); return; }
    let proteinPct = 0.30, fatPct = 0.25, carbPct = 0.45;
    if (goal === "muscle") { proteinPct = 0.30; fatPct = 0.25; carbPct = 0.45; }
    if (goal === "loss") { proteinPct = 0.35; fatPct = 0.30; carbPct = 0.35; }
    if (goal === "maintain") { proteinPct = 0.25; fatPct = 0.30; carbPct = 0.45; }
    const protein = Math.round((cal * proteinPct) / 4);
    const fat = Math.round((cal * fatPct) / 9);
    const carbs = Math.round((cal * carbPct) / 4);
    setResult({ protein, carbs, fat });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Nutrition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Macro Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your daily protein, carbs and fat targets for any fitness goal.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Daily Calories</label>
            <input className="calc-input" type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="e.g. 2200" />
            <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>Use our <Link href="/calculators/tdee" style={{ color: "var(--color-brand-darker)" }}>TDEE Calculator</Link> first</p>
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Goal</label>
            <select className="calc-select" value={goal} onChange={e => setGoal(e.target.value as "muscle" | "loss" | "maintain")}>
              <option value="muscle">Build Muscle</option>
              <option value="loss">Fat Loss</option>
              <option value="maintain">Maintain</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Macros</button>
        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            <div className="result-card"><div className="result-number">{result.protein}g</div><div className="result-label">Protein</div></div>
            <div className="result-card"><div className="result-number">{result.carbs}g</div><div className="result-label">Carbs</div></div>
            <div className="result-card"><div className="result-number">{result.fat}g</div><div className="result-label">Fat</div></div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Understanding Macronutrients</h2>
        <p>Macros are the three nutrients that provide calories: protein (4 kcal/g), carbohydrates (4 kcal/g), and fat (9 kcal/g). Different goals require different macro ratios — higher protein for fat loss to preserve muscle, moderate protein and higher carbs for muscle building performance.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/tdee" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>TDEE Calculator</Link>
          <Link href="/calculators/keto-macro" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Keto Macro Calc</Link>
        </div>
      </div>
    </div>
  );
}
