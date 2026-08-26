"use client";
import { useState } from "react";
import Link from "next/link";

const activities = [
  ["Walking (5 km/h)", 3.5], ["Brisk walking (6.5 km/h)", 5.0], ["Running (8 km/h)", 8.3],
  ["Running (10 km/h)", 10.0], ["Running (12 km/h)", 12.5], ["Cycling (moderate)", 7.5],
  ["Cycling (vigorous)", 10.0], ["Swimming (moderate)", 7.0], ["Yoga", 3.0], ["Surya Namaskar", 4.5],
  ["Weight training (moderate)", 5.0], ["Weight training (vigorous)", 6.0], ["Cricket (batting/bowling)", 5.0],
  ["Badminton", 5.5], ["Football", 8.0], ["Basketball", 6.5], ["Zumba/Dance fitness", 5.5],
  ["Stair climbing", 8.0], ["Jump rope", 10.0], ["HIIT training", 8.5],
] as const;

export default function CaloriesBurnedClient() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState(String(activities[0][1]));
  const [duration, setDuration] = useState("30");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight), d = parseFloat(duration), met = parseFloat(activity);
    if (!w || !d || w < 30 || w > 200) { setError("Please enter valid weight and duration."); return; }
    const calories = Math.round((met * 3.5 * w / 200) * d);
    setResult(calories);
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Popular</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Calories Burned Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate calories burned during 40+ activities including Surya Namaskar, cricket, and yoga.</p>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 70" /></div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Activity</label>
            <select className="calc-select" value={activity} onChange={e => setActivity(e.target.value)}>
              {activities.map(([name, met]) => <option key={name} value={met}>{name}</option>)}
            </select>
          </div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Duration (min)</label><input className="calc-input" type="number" value={duration} onChange={e => setDuration(e.target.value)} /></div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate Calories Burned</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }} className="result-card">
            <div className="result-number">{result}</div>
            <div className="result-label">Calories Burned</div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>How This Calculator Works</h2>
        <p>This calculator uses MET (Metabolic Equivalent of Task) values — a standardised measure of exercise intensity from research-validated activity compendiums. Calories burned depend on activity intensity, duration, and your body weight.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/tdee" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>TDEE Calculator</Link>
          <Link href="/calculators/calorie-deficit" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Calorie Deficit</Link>
        </div>
      </div>
    </div>
  );
}
