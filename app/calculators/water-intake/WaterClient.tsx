"use client";
import { useState } from "react";
import Link from "next/link";

export default function WaterClient() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight);
    if (!w || w < 30 || w > 200) { setError("Please enter a valid weight (30-200 kg)."); return; }
    let base = w * 0.033;
    if (activity === "active") base += 0.5;
    if (activity === "veryActive") base += 1.0;
    setResult(Math.round(base * 10) / 10);
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Health</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Water Intake Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your daily water intake needs adjusted for India&apos;s climate.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Body Weight (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 70" /></div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Activity Level</label>
            <select className="calc-select" value={activity} onChange={e => setActivity(e.target.value)}>
              <option value="sedentary">Sedentary</option>
              <option value="moderate">Moderate exercise</option>
              <option value="active">Active (daily exercise)</option>
              <option value="veryActive">Very active / hot climate</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Water Needs</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }} className="result-card">
            <div className="result-number">{result}L</div>
            <div className="result-label">Daily Water Target</div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Hydration Needs in Indian Climate</h2>
        <p>India&apos;s heat and humidity significantly increase fluid loss through sweat. The baseline formula (33ml per kg body weight) is adjusted upward for activity level and hot weather. Add 500-750ml for every hour of exercise, especially in summer months.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/tdee" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>TDEE Calculator</Link>
        </div>
      </div>
    </div>
  );
}
