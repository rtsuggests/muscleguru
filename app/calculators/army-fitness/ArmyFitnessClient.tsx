"use client";
import { useState } from "react";
import Link from "next/link";

export default function ArmyFitnessClient() {
  const [runMin, setRunMin] = useState("");
  const [runSec, setRunSec] = useState("");
  const [pushups, setPushups] = useState("");
  const [situps, setSitups] = useState("");
  const [result, setResult] = useState<{ run: boolean; push: boolean; sit: boolean } | null>(null);

  function calculate() {
    const totalSec = parseFloat(runMin || "0") * 60 + parseFloat(runSec || "0");
    const push = parseFloat(pushups || "0");
    const sit = parseFloat(situps || "0");
    setResult({
      run: totalSec > 0 && totalSec <= 330,
      push: push >= 20,
      sit: sit >= 25,
    });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Defence</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Army Fitness Calculator</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Check if you meet physical fitness standards for NDA, CDS, and Agniveer selection.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>1.6km Run — Min</label>
            <input className="calc-input" type="number" value={runMin} onChange={e => setRunMin(e.target.value)} placeholder="5" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Sec</label>
            <input className="calc-input" type="number" value={runSec} onChange={e => setRunSec(e.target.value)} placeholder="30" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Push-ups</label>
            <input className="calc-input" type="number" value={pushups} onChange={e => setPushups(e.target.value)} placeholder="20" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Sit-ups</label>
            <input className="calc-input" type="number" value={situps} onChange={e => setSitups(e.target.value)} placeholder="25" />
          </div>
        </div>
        <button className="btn-primary" onClick={calculate}>Check My Standards</button>
        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gap: "0.625rem" }}>
            <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.run ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 600 }}>1.6km Run (under 5:30)</span><span>{result.run ? "PASS" : "FAIL"}</span>
            </div>
            <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.push ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 600 }}>Push-ups (min 20)</span><span>{result.push ? "PASS" : "FAIL"}</span>
            </div>
            <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.sit ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 600 }}>Sit-ups (min 25)</span><span>{result.sit ? "PASS" : "FAIL"}</span>
            </div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Standards Reference</h2>
        <p>Agniveer GD: 1.6km run under 5:30, minimum 10 pull-ups. NDA/CDS: run under 7:30, minimum 6 pull-ups. Always verify current standards at joinindianarmy.nic.in before your test.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/calculators/running-pace" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calculator</Link>
        </div>
      </div>
    </div>
  );
}
