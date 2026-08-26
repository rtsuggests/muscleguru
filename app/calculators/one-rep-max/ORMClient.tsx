"use client";
import { useState } from "react";
import Link from "next/link";

export default function ORMClient() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight), r = parseFloat(reps);
    if (!w || !r || r < 1 || r > 15) { setError("Please enter valid weight and reps (1-15)."); return; }
    const orm = Math.round(w * (1 + r / 30));
    setResult(orm);
  }

  const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Strength</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>One Rep Max Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Estimate your 1RM using the Epley formula and get a full training percentage table.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight Lifted (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 80" /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Reps Completed</label><input className="calc-input" type="number" value={reps} onChange={e => setReps(e.target.value)} placeholder="e.g. 5" /></div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My 1RM</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div className="result-card" style={{ marginBottom: "1.25rem" }}><div className="result-number">{result}kg</div><div className="result-label">Estimated One Rep Max</div></div>
            <table>
              <thead><tr><th>Percentage</th><th>Weight</th><th>Typical Reps</th></tr></thead>
              <tbody>
                {percentages.map(p => (
                  <tr key={p}><td>{p}%</td><td style={{ fontWeight: 700, color: "var(--color-brand-dark)" }}>{Math.round(result * p / 100)}kg</td><td style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>{p >= 95 ? "1-2" : p >= 85 ? "3-5" : p >= 75 ? "6-8" : p >= 65 ? "10-12" : "15+"}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>How This Calculator Works</h2>
        <p>This calculator uses the Epley formula: 1RM = weight × (1 + reps/30). It is most accurate for rep ranges between 1-10. Use the percentage table to plan training loads for strength, hypertrophy, or endurance phases.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/workout-plans/3-day-full-body" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>3-Day Workout Plan</Link>
        </div>
      </div>
    </div>
  );
}
