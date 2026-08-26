"use client";
import { useState } from "react";
import Link from "next/link";

export default function BodyFatClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const h = parseFloat(height), w = parseFloat(waist), n = parseFloat(neck);
    if (!h || !w || !n) { setError("Please fill in height, waist, and neck."); return; }
    let bf;
    if (sex === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      const hp = parseFloat(hip);
      if (!hp) { setError("Please also enter hip measurement."); return; }
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }
    setResult(Math.round(bf * 10) / 10);
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Body Composition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Body Fat Calculator India — US Navy Method</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your body fat percentage using the US Navy circumference method.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>{s === "male" ? "Male" : "Female"}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label><input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Waist (cm)</label><input className="calc-input" type="number" value={waist} onChange={e => setWaist(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Neck (cm)</label><input className="calc-input" type="number" value={neck} onChange={e => setNeck(e.target.value)} /></div>
          {sex === "female" && (
            <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Hip (cm)</label><input className="calc-input" type="number" value={hip} onChange={e => setHip(e.target.value)} /></div>
          )}
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Body Fat</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }} className="result-card">
            <div className="result-number">{result}%</div>
            <div className="result-label">Estimated Body Fat</div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>About the US Navy Method</h2>
        <p>The US Navy circumference method estimates body fat using simple tape measurements — no calipers or scans needed. While less precise than DEXA scans, it is accurate within 3-4% for most body types and is free and repeatable at home.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/lean-body-mass" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Lean Body Mass</Link>
          <Link href="/calculators/bmi" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>BMI Calculator</Link>
        </div>
      </div>
    </div>
  );
}
