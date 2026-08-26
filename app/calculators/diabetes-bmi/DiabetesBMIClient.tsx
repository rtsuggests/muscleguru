"use client";
import { useState } from "react";
import Link from "next/link";

export default function DiabetesBMIClient() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [result, setResult] = useState<{ bmi: number; risk: string; color: string } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight), h = parseFloat(height) / 100, wc = parseFloat(waist);
    if (!w || !h) { setError("Please enter weight and height."); return; }
    const bmi = parseFloat((w / (h * h)).toFixed(1));
    const waistRisk = wc && (sex === "male" ? wc > 90 : wc > 80);
    let risk = "Low Risk", color = "#16a34a";
    if (bmi >= 27.5 || waistRisk) { risk = "High Risk"; color = "#ef4444"; }
    else if (bmi >= 23) { risk = "Moderate Risk"; color = "#f59e0b"; }
    setResult({ bmi, risk, color });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Medical</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Diabetes Risk & BMI Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Assess your type 2 diabetes risk using Indian-adapted BMI thresholds.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>{s === "male" ? "Male" : "Female"}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label><input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Waist (cm)</label><input className="calc-input" type="number" value={waist} onChange={e => setWaist(e.target.value)} /></div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Assess My Risk</button>
        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="result-card"><div className="result-number">{result.bmi}</div><div className="result-label">BMI</div></div>
            <div style={{ background: result.color + "18", border: `2px solid ${result.color}40`, borderRadius: "1rem", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: "1.4rem", color: result.color }}>{result.risk}</div>
            </div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Indian BMI Thresholds</h2>
        <p>Indians develop diabetes at lower BMI than Western populations. ICMR thresholds: overweight starts at BMI 23 (not 25). Waist circumference above 90cm (men) or 80cm (women) indicates elevated risk regardless of BMI.</p>
        <div className="disclaimer-box">This is a screening tool, not a diagnosis. Consult a doctor for proper evaluation.</div>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/bmi" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>BMI Calculator</Link>
          <Link href="/calculators/waist-hip-ratio" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Waist-Hip Ratio</Link>
        </div>
      </div>
    </div>
  );
}
