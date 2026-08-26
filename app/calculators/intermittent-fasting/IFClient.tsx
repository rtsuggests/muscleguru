"use client";
import { useState } from "react";
import Link from "next/link";

export default function IFClient() {
  const [startHour, setStartHour] = useState("12");
  const [protocol, setProtocol] = useState("16-8");
  const [result, setResult] = useState<{ eatStart: string; eatEnd: string } | null>(null);

  function formatHour(h: number) {
    const hh = ((h % 24) + 24) % 24;
    const ampm = hh < 12 ? "AM" : "PM";
    const h12 = hh % 12 === 0 ? 12 : hh % 12;
    return `${h12}:00 ${ampm}`;
  }

  function calculate() {
    const start = parseInt(startHour);
    const eatHours = protocol === "16-8" ? 8 : protocol === "18-6" ? 6 : 10;
    setResult({ eatStart: formatHour(start), eatEnd: formatHour(start + eatHours) });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Fat Loss</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Intermittent Fasting Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your eating window for 16:8, 18:6, and 14:10 protocols.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Protocol</label>
            <select className="calc-select" value={protocol} onChange={e => setProtocol(e.target.value)}>
              <option value="16-8">16:8</option>
              <option value="18-6">18:6</option>
              <option value="14-10">14:10 (Beginner)</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Eating Window Start (24hr)</label>
            <input className="calc-input" type="number" value={startHour} onChange={e => setStartHour(e.target.value)} placeholder="12" min="0" max="23" />
          </div>
        </div>
        <button className="btn-primary" onClick={calculate}>Calculate My Window</button>
        {result && (
          <div style={{ marginTop: "1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div className="result-card"><div className="result-number">{result.eatStart}</div><div className="result-label">Eating Starts</div></div>
            <div className="result-card"><div className="result-number">{result.eatEnd}</div><div className="result-label">Eating Ends</div></div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>What You Can Drink While Fasting</h2>
        <p>Water, black coffee, and plain green tea are safe during your fasting window. Milk, sugar, and any calorie-containing beverages break the fast. Chai with milk and sugar is not fasting-compatible — substitute with black coffee or plain tea.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/calculators/calorie-deficit" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calorie Deficit Calculator</Link>
        </div>
      </div>
    </div>
  );
}
