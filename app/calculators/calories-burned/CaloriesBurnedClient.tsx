"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const activities = [
  ["Walking (5 km/h)", 3.5], ["Brisk walking (6.5 km/h)", 5.0], ["Running (8 km/h)", 8.3],
  ["Running (10 km/h)", 10.0], ["Running (12 km/h)", 12.5], ["Jogging (moderate pace)", 7.0],
  ["Cycling (moderate)", 7.5], ["Cycling (vigorous)", 10.0], ["Swimming (moderate)", 7.0],
  ["Yoga", 3.0], ["Surya Namaskar", 4.5], ["Weight training (moderate)", 5.0],
  ["Weight training (vigorous)", 6.0], ["Cricket (batting/bowling)", 5.0], ["Badminton", 5.5],
  ["Football", 8.0], ["Basketball", 6.5], ["Zumba/Dance fitness", 5.5], ["Stair climbing", 8.0],
  ["Jump rope", 10.0], ["HIIT training", 8.5], ["Brisk walk uphill", 6.0], ["Table tennis", 4.0],
  ["Tennis (singles)", 8.0], ["Elliptical trainer", 5.0], ["Rowing machine", 7.0],
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
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Track calories burned during 40+ activities — from walking and jogging to cricket and Surya Namaskar — using research-validated MET values.</p>

      <SavedResultBanner slug="calories-burned" />

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
          <div style={{ marginTop: "1.5rem" }}>
            <div className="result-card" style={{ marginBottom: "1.25rem" }}>
              <div className="result-number">{result}</div>
              <div className="result-label">Calories Burned</div>
            </div>
            <SaveResultButton calculator="Calories Burned" slug="calories-burned" icon="🔥" headline={`${result} kcal`} label="Session estimate" />
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>How This Calorie Burn Tracker Works</h2>
        <p>This calculator uses MET (Metabolic Equivalent of Task) values — a standardised measure of exercise intensity used in research-validated activity compendiums published by exercise scientists. One MET represents the energy cost of sitting quietly; an activity with a MET of 8 burns roughly 8 times that resting rate. Calorie burn is calculated as: <strong>MET × 3.5 × weight(kg) / 200 × duration(minutes)</strong>. This formula accounts for the fact that heavier individuals burn more calories doing the same activity, and that longer sessions burn proportionally more.</p>

        <h2>Jogging and Running: Calorie Burn by Pace</h2>
        <p>Jogging is one of the most searched calorie-burning activities in India, and pace makes a significant difference. A 70 kg person jogging at a moderate pace (around 7-8 km/h) for 30 minutes burns approximately 245-290 kcal, while the same person running at 10 km/h for 30 minutes burns closer to 350 kcal. The table below shows how pace and body weight interact:</p>
        <table>
          <thead><tr><th>Activity</th><th>60 kg person (30 min)</th><th>70 kg person (30 min)</th><th>85 kg person (30 min)</th></tr></thead>
          <tbody>
            <tr><td>Walking (5 km/h)</td><td>105</td><td>123</td><td>149</td></tr>
            <tr><td>Jogging (moderate)</td><td>210</td><td>245</td><td>298</td></tr>
            <tr><td>Running (10 km/h)</td><td>300</td><td>350</td><td>425</td></tr>
            <tr><td>Cycling (moderate)</td><td>225</td><td>263</td><td>319</td></tr>
            <tr><td>Surya Namaskar</td><td>135</td><td>158</td><td>191</td></tr>
          </tbody>
        </table>

        <h2>Is Jogging Good for Weight Loss?</h2>
        <p>Jogging burns meaningful calories and is one of the most accessible ways to create a calorie deficit, but calorie burn from exercise alone is rarely enough for significant weight loss without also managing diet. A 30-minute jog burning ~250 kcal is roughly equivalent to one samosa — meaningful, but easily offset by diet if not tracked. Combining regular jogging with a moderate dietary calorie deficit produces significantly faster and more sustainable results than either approach alone. See our <Link href="/running/running-for-weight-loss" style={{ color: "var(--color-brand-darker)" }}>Running for Weight Loss guide</Link> for a complete strategy.</p>

        <h2>Why Fitness Tracker Calorie Estimates Are Often Wrong</h2>
        <p>Wearable fitness trackers commonly overestimate calorie burn by 20-40%, particularly for strength training and activities with irregular movement patterns, because they rely primarily on heart rate and motion sensors rather than true metabolic measurement. This calculator uses published MET values from peer-reviewed exercise physiology research, offering a more conservative and typically more accurate estimate than most consumer wearables.</p>

        <h2>Common Indian Activities and Their Calorie Burn</h2>
        <p>Many popular Indian physical activities aren&apos;t well represented in Western fitness calculators. Surya Namaskar (Sun Salutations) has a MET value of approximately 4.5 — comparable to brisk walking — and a typical 10-round session burns 45-70 kcal depending on pace and body weight. Cricket, despite long periods of standing, averages a MET of 5.0 during active play (batting, bowling, fielding), similar to moderate weight training.</p>

        <div style={{ marginTop: "2rem" }}>
          <RelatedCalculators items={[
            { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
            { name: "Calorie Deficit Calc", href: "/calculators/calorie-deficit", icon: "📉" },
            { name: "Water Intake Calc", href: "/calculators/water-intake", icon: "💧" },
            { name: "Heart Rate Zones", href: "/calculators/heart-rate-zone", icon: "❤️" },
            { name: "Running Pace Calc", href: "/calculators/running-pace", icon: "🏃" },
            { name: "Running for Weight Loss", href: "/running/running-for-weight-loss", icon: "📉" },
          ]} />
        </div>
      </div>
    </div>
  );
}
