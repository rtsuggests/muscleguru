"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Intermittent Fasting Calculator India — MuscleGuru.in",
  "description": "Calculate your eating and fasting window for 16:8, 18:6, and 14:10 intermittent fasting protocols.",
  "url": "https://muscleguru.in/calculators/intermittent-fasting",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Fat Loss</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Intermittent Fasting Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Find your ideal eating and fasting window for 16:8, 18:6, and 14:10 protocols, with Indian meal timing guidance.</p>

      <SavedResultBanner slug="intermittent-fasting" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Protocol</label>
            <select className="calc-select" value={protocol} onChange={e => setProtocol(e.target.value)}>
              <option value="16-8">16:8 (most popular)</option>
              <option value="18-6">18:6 (advanced)</option>
              <option value="14-10">14:10 (beginner-friendly)</option>
            </select>
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Eating Window Start (24hr)</label>
            <input className="calc-input" type="number" value={startHour} onChange={e => setStartHour(e.target.value)} placeholder="12" min="0" max="23" />
          </div>
        </div>
        <button className="btn-primary" onClick={calculate}>Calculate My Window</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.eatStart}</div><div className="result-label">Eating Starts</div></div>
              <div className="result-card"><div className="result-number">{result.eatEnd}</div><div className="result-label">Eating Ends</div></div>
            </div>
            <SaveResultButton calculator="Intermittent Fasting" slug="intermittent-fasting" icon="⏰" headline={`${result.eatStart} – ${result.eatEnd}`} label={`${protocol} protocol`} />
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>Which Intermittent Fasting Protocol Should You Choose?</h2>
        <table>
          <thead><tr><th>Protocol</th><th>Fasting / Eating</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td>14:10</td><td>14 hrs fast, 10 hrs eat</td><td>Complete beginners easing into IF</td></tr>
            <tr><td>16:8</td><td>16 hrs fast, 8 hrs eat</td><td>Most popular and sustainable for fat loss</td></tr>
            <tr><td>18:6</td><td>18 hrs fast, 6 hrs eat</td><td>Experienced fasters wanting a stronger effect</td></tr>
          </tbody>
        </table>

        <h2>What You Can Drink While Fasting</h2>
        <p>Water, black coffee, and plain green or black tea are all safe during your fasting window — they contain negligible calories and don&apos;t trigger a significant insulin response. Milk, sugar, cream, and any calorie-containing beverage will break your fast. This means the traditional Indian morning chai with milk and sugar is not fasting-compatible — switch to black coffee or plain tea during your fasting window, and enjoy your regular chai once your eating window opens.</p>

        <h2>Sample 16:8 Schedule for Indian Routines</h2>
        <table>
          <thead><tr><th>Time</th><th>Activity</th></tr></thead>
          <tbody>
            <tr><td>7:00 AM</td><td>Wake up, black coffee or plain tea</td></tr>
            <tr><td>12:00 PM</td><td>Eating window opens — first meal (lunch)</td></tr>
            <tr><td>4:00 PM</td><td>Snack — nuts, fruit, or protein shake</td></tr>
            <tr><td>7:30 PM</td><td>Dinner — last meal before window closes</td></tr>
            <tr><td>8:00 PM</td><td>Eating window closes — fast begins again</td></tr>
          </tbody>
        </table>

        <h2>Does Intermittent Fasting Actually Work for Weight Loss?</h2>
        <p>Intermittent fasting itself doesn&apos;t create weight loss through any special metabolic mechanism — it works primarily by making it easier to eat fewer total calories by restricting the time window available for eating. For many people, this is easier to sustain than traditional calorie counting throughout the day. IF is not inherently superior to other calorie-deficit methods, but it is a genuinely effective tool if it helps you consistently eat less without feeling deprived.</p>
        <p>Use our <Link href="/calculators/tdee" style={{ color: "var(--color-brand-darker)" }}>TDEE Calculator</Link> to find your maintenance calories, then aim to stay in a moderate deficit within your chosen eating window.</p>

        <h2>Who Should Avoid Intermittent Fasting</h2>
        <p>IF is not recommended for pregnant or breastfeeding women, individuals with a history of disordered eating, people with diabetes on insulin or certain medications (without medical supervision), and those who are underweight. If you have any underlying health condition, consult your doctor before starting an extended fasting protocol.</p>

        <RelatedCalculators items={[
          { name: "Calorie Deficit Calc", href: "/calculators/calorie-deficit", icon: "📉" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "Fasting Nutrition Calc", href: "/calculators/fasting-nutrition", icon: "🪔" },
        ]} />
      </div>
    </div>
    </>
  );
}
