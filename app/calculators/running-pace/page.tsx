import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Running Pace Calculator India — Pace & Race Time",
};

"use client";
import { useState } from "react";

const schema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Running Pace Calculator — MuscleGuru.in",
  "url": "https://muscleguru.in/calculators/running-pace",
  "applicationCategory": "HealthApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
};

const raceTimes = [
  { name: "1 km", dist: 1 },
  { name: "5 km", dist: 5 },
  { name: "10 km", dist: 10 },
  { name: "21.1 km (Half Marathon)", dist: 21.1 },
  { name: "42.2 km (Full Marathon)", dist: 42.2 },
];

const trainingZones = [
  { name: "Zone 1 — Recovery", pctMin: 0.78, pctMax: 0.85, desc: "Very easy, conversational. Active recovery runs." },
  { name: "Zone 2 — Aerobic Base", pctMin: 0.85, pctMax: 0.93, desc: "Comfortable, can hold a conversation. Most of your training." },
  { name: "Zone 3 — Tempo", pctMin: 0.93, pctMax: 1.00, desc: "Comfortably hard. 10K race pace for most runners." },
  { name: "Zone 4 — Threshold", pctMin: 1.00, pctMax: 1.10, desc: "Hard effort. 5K race pace. Improves lactate threshold." },
  { name: "Zone 5 — Speed", pctMin: 1.10, pctMax: 1.25, desc: "Very hard, short intervals. Improves VO2 max." },
];

function formatPace(secPerKm: number): string {
  if (!secPerKm || secPerKm <= 0) return "—";
  const mins = Math.floor(secPerKm / 60);
  const secs = Math.round(secPerKm % 60);
  return `${mins}:${secs.toString().padStart(2, "0")} /km`;
}

function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  if (h > 0) return `${h}h ${m}m ${s}s`;
  return `${m}m ${s}s`;
}

const faqs = [
  { q: "What is a good running pace for beginners in India?", a: "For Indian beginners, a comfortable starting pace is typically 7:00–9:00 minutes per kilometre — slow enough to hold a conversation without gasping. Research supports the 'talk test' as a reliable indicator of appropriate aerobic training intensity. Running too fast too soon is the most common beginner mistake and leads to injury and burnout. Build your base at a conversational pace for the first 8–12 weeks before introducing any faster running." },
  { q: "How do I improve my running pace?", a: "Evidence-based methods to improve running pace include: building your aerobic base (most runs at easy/conversational pace), weekly tempo runs at comfortably hard effort, interval training (e.g. 400m or 800m repeats at 5K effort), progressive long runs to build endurance, and strength training — research by Storen et al. (2008) found that heavy strength training significantly improved running economy. Consistency over months matters more than any single workout type." },
  { q: "What pace should I target for my first 5K in India?", a: "For a first 5K, the goal should be to finish comfortably rather than achieve a specific pace. Most beginner runners complete their first 5K in 35–45 minutes (7:00–9:00 per km). If you can run for 30 minutes continuously at a conversational pace, you are ready for your first 5K event. Many Indian cities now have Parkrun events and local running club 5Ks that are excellent, welcoming environments for first-timers." },
  { q: "Is it better to run in the morning or evening in India?", a: "In most Indian cities, early morning (5:30–7:00 AM) is the preferred running time — temperatures are cooler, air quality is better (AQI is typically lower in the morning before traffic peaks), and roads are quieter. During summer months (April–June) in North India, where daytime temperatures exceed 40°C, morning running is not just preferable but essential for safety. Evening running (after 6:30 PM) is a reasonable alternative in cooler months." },
];

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span style={{ fontSize: "1.2rem", color: "var(--color-brand)", flexShrink: 0, marginLeft: "0.75rem" }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="faq-answer">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

function RunningPaceCalculator() {
  const [mode, setMode] = useState<"pace" | "time" | "speed">("pace");
  const [mins, setMins] = useState(""); const [secs, setSecs] = useState("");
  const [distance, setDistance] = useState("5");
  const [timeMins, setTimeMins] = useState(""); const [timeSecs, setTimeSecs] = useState(""); const [timeHrs, setTimeHrs] = useState("");
  const [speed, setSpeed] = useState("");
  const [result, setResult] = useState<{ paceSecPerKm: number; speedKph: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    let paceSecPerKm = 0;
    if (mode === "pace") {
      const m = parseFloat(mins) || 0; const s = parseFloat(secs) || 0;
      if (!m && !s) { setError("Please enter your pace (minutes and/or seconds per km)."); return; }
      paceSecPerKm = m * 60 + s;
    } else if (mode === "time") {
      const h = parseFloat(timeHrs) || 0; const m = parseFloat(timeMins) || 0; const s = parseFloat(timeSecs) || 0;
      const d = parseFloat(distance);
      if ((!m && !h) || !d) { setError("Please enter your finish time and distance."); return; }
      const totalSec = h * 3600 + m * 60 + s;
      paceSecPerKm = totalSec / d;
    } else {
      const spd = parseFloat(speed);
      if (!spd || spd <= 0) { setError("Please enter a valid speed in km/h."); return; }
      paceSecPerKm = 3600 / spd;
    }
    if (paceSecPerKm < 120 || paceSecPerKm > 1200) {
      setError("Pace seems unrealistic. Please check your inputs (valid range: 2:00–20:00 /km)."); return;
    }
    setResult({ paceSecPerKm, speedKph: parseFloat((3600 / paceSecPerKm).toFixed(2)) });
  }

  return (
    <div>
      {/* Mode selector */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {[["pace", "I know my pace (min/km)"], ["time", "I know my race time"], ["speed", "I know my speed (km/h)"]].map(([m, label]) => (
          <button key={m} onClick={() => { setMode(m as "pace" | "time" | "speed"); setResult(null); setError(""); }}
            style={{ padding: "0.625rem 0.5rem", borderRadius: "0.5rem", border: `1.5px solid ${mode === m ? "var(--color-brand)" : "var(--color-border)"}`, background: mode === m ? "var(--color-brand)" : "#fff", color: mode === m ? "#fff" : "var(--color-body)", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer", textAlign: "center", lineHeight: 1.3 }}>
            {label}
          </button>
        ))}
      </div>

      {mode === "pace" && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Minutes per km</label>
            <input className="calc-input" type="number" placeholder="e.g. 6" value={mins} onChange={e => setMins(e.target.value)} min="0" max="30" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Seconds per km</label>
            <input className="calc-input" type="number" placeholder="e.g. 30" value={secs} onChange={e => setSecs(e.target.value)} min="0" max="59" />
          </div>
        </div>
      )}

      {mode === "time" && (
        <div style={{ marginBottom: "1.25rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Race Distance</label>
            <select className="calc-select" value={distance} onChange={e => setDistance(e.target.value)}>
              <option value="1">1 km</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
              <option value="21.1">Half Marathon (21.1 km)</option>
              <option value="42.2">Full Marathon (42.2 km)</option>
              <option value="custom">Custom distance</option>
            </select>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
            {[["Hours", timeHrs, setTimeHrs, "0"], ["Minutes", timeMins, setTimeMins, "45"], ["Seconds", timeSecs, setTimeSecs, "00"]].map(([label, val, setter, ph]) => (
              <div key={label as string}>
                <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>{label as string}</label>
                <input className="calc-input" type="number" placeholder={ph as string} value={val as string} onChange={e => (setter as (v: string) => void)(e.target.value)} />
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === "speed" && (
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Speed (km/h)</label>
          <input className="calc-input" type="number" placeholder="e.g. 10" value={speed} onChange={e => setSpeed(e.target.value)} min="1" max="30" />
        </div>
      )}

      {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>⚠ {error}</p>}
      <button className="btn-primary" onClick={calculate}>Calculate</button>

      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          {/* Main result */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div className="result-card">
              <div className="result-number" style={{ fontSize: "2.25rem" }}>{formatPace(result.paceSecPerKm)}</div>
              <div className="result-label">Your Running Pace</div>
            </div>
            <div className="result-card" style={{ background: "linear-gradient(135deg,#eff6ff,#bfdbfe)" }}>
              <div className="result-number" style={{ fontSize: "2.25rem", color: "#1d4ed8" }}>{result.speedKph} km/h</div>
              <div className="result-label">Speed</div>
            </div>
          </div>

          {/* Race time predictions */}
          <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.875rem", fontSize: "0.95rem" }}>🏁 Predicted Race Finish Times</div>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {raceTimes.map(r => (
                <div key={r.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0.75rem", background: "#fff", borderRadius: "0.5rem", border: "1px solid var(--color-border)" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{r.name}</span>
                  <span style={{ color: "var(--color-brand-dark)", fontWeight: 700, fontFamily: "var(--font-display)" }}>{formatTime(result.paceSecPerKm * r.dist)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Training zones */}
          <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.875rem", fontSize: "0.95rem" }}>🎯 Training Pace Zones</div>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {trainingZones.map((z, i) => {
                const colors = ["#6b7280", "#22c55e", "#f59e0b", "#ef4444", "#7c3aed"];
                const zonePace = result.paceSecPerKm / ((z.pctMin + z.pctMax) / 2);
                return (
                  <div key={z.name} style={{ padding: "0.625rem 0.875rem", background: "#fff", borderRadius: "0.5rem", border: `1.5px solid ${colors[i]}30` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.85rem", color: colors[i] }}>{z.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--color-muted)" }}>{z.desc}</div>
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: colors[i], fontSize: "0.9rem", textAlign: "right", flexShrink: 0, marginLeft: "0.5rem" }}>
                        {formatPace(result.paceSecPerKm / z.pctMax)}–{formatPace(result.paceSecPerKm / z.pctMin)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function RunningPaceClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</a> <span>›</span>
          <a href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Calculators</a> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Running Pace Calculator</span>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🏃</div>
          <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", marginBottom: "0.75rem" }}>Running Pace Calculator</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 560, margin: "0 auto" }}>
            Calculate your running pace, predicted race finish times for 5K to marathon, and personalised training zone paces.
          </p>
        </div>
        <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
          <RunningPaceCalculator />
        </div>
        <div className="disclaimer-box">
          <strong>⚠️ Note:</strong> Race time predictions assume consistent pacing across the full distance. Real race times are affected by terrain, weather, fatigue, and training base. Use predictions as targets, not guarantees.
        </div>
        <div className="seo-content" style={{ marginTop: "2rem" }}>
          <h2>Understanding Running Pace: A Complete Guide for Indian Runners</h2>
          <p>Running pace is the time it takes you to cover one kilometre — expressed as minutes and seconds per kilometre (e.g. 6:30/km). It is the most fundamental metric in running and the basis of all structured training. Understanding your current pace, your target race pace, and the right pace for each type of training run is what separates runners who improve consistently from those who plateau or get injured.</p>
          <p>India&apos;s running community has grown explosively over the past five years. With almost 2.5 million registered runners and over 1,500 running events annually, more Indians are lacing up than ever before. Running clubs have emerged in virtually every major city — Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, and many Tier 2 cities — providing structure, community, and accountability for runners at all levels.</p>

          <h2>How to Use This Calculator</h2>
          <p>This calculator works in three modes. Choose whichever fits the information you have:</p>
          <ul>
            <li><strong>Know your pace:</strong> Enter your current average pace (minutes and seconds per km) to get race predictions and training zones.</li>
            <li><strong>Know your race time:</strong> Enter a recent finish time for any distance to calculate your implied pace and training zones.</li>
            <li><strong>Know your speed:</strong> Enter your treadmill speed in km/h to convert to pace and get all other outputs.</li>
          </ul>

          <h2>Training Zones: Why Running at Different Paces Matters</h2>
          <p>One of the most evidence-supported findings in running science is the importance of training at different intensities — not just running as hard as you can every session. Research by Seiler and Tønnessen (2009) on elite endurance athletes found that approximately 80% of training should be at easy/aerobic pace (Zones 1–2), with only 20% at higher intensities (Zones 3–5). This &quot;polarised training model&quot; is also supported for recreational runners.</p>
          <table>
            <thead><tr><th>Zone</th><th>Effort Level</th><th>Purpose</th><th>% of Weekly Training</th></tr></thead>
            <tbody>
              <tr><td>Zone 1–2 (Easy)</td><td>Conversational</td><td>Aerobic base, recovery</td><td>~80%</td></tr>
              <tr><td>Zone 3 (Tempo)</td><td>Comfortably hard</td><td>Lactate threshold</td><td>~10%</td></tr>
              <tr><td>Zone 4–5 (Hard)</td><td>Hard to very hard</td><td>VO2 max, speed</td><td>~10%</td></tr>
            </tbody>
          </table>
          <p>Most recreational runners do the opposite — running too hard on easy days and not hard enough on hard days. This &quot;grey zone&quot; training produces sub-optimal adaptations and increases injury risk. Using this calculator&apos;s training zones ensures you train at the right intensity for each session.</p>

          <h2>Common Indian Running Events and Target Paces</h2>
          <table>
            <thead><tr><th>Event</th><th>Beginner Target</th><th>Intermediate Target</th><th>Advanced Target</th></tr></thead>
            <tbody>
              <tr><td>5K</td><td>35–45 min (7:00–9:00/km)</td><td>25–35 min (5:00–7:00/km)</td><td>Under 25 min (&lt;5:00/km)</td></tr>
              <tr><td>10K</td><td>70–90 min</td><td>50–70 min</td><td>Under 50 min</td></tr>
              <tr><td>Half Marathon</td><td>2:30–3:00 hrs</td><td>1:50–2:30 hrs</td><td>Under 1:50 hrs</td></tr>
              <tr><td>Full Marathon</td><td>5:00–6:00 hrs</td><td>3:30–5:00 hrs</td><td>Under 3:30 hrs</td></tr>
            </tbody>
          </table>

          <h2>Running Safety in India: Heat, Air Quality and Hydration</h2>
          <p>Indian runners face unique environmental challenges that directly affect performance and safety:</p>
          <ul>
            <li><strong>Heat:</strong> In summer months (April–June), temperatures in North and Central India regularly exceed 35–42°C. Running in these conditions significantly increases heat illness risk. Slow your pace by 30–60 seconds per km for every 5°C above 20°C, run only in early morning, and hydrate aggressively before and after.</li>
            <li><strong>Air quality:</strong> Many Indian cities have high AQI (Air Quality Index) levels, particularly in winter months. Check AQI before running — above 150 (Unhealthy), reduce intensity; above 200 (Very Unhealthy), consider indoor alternatives. The AQI India app provides real-time readings.</li>
            <li><strong>Hydration:</strong> India&apos;s climate means sweat losses are higher than in temperate countries. Drink 400–600ml of water 1–2 hours before running and carry water for runs longer than 45 minutes. Use our <a href="/calculators/water-intake" style={{ color: "var(--color-brand)" }}>Water Intake Calculator</a> for your baseline daily hydration needs.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Seiler S, Tønnessen E. Intervals, thresholds, and long slow distance: the role of intensity and duration in endurance training. <em>Sportscience.</em> 2009;13:32-53.</li>
            <li>Storen O et al. Maximal strength training improves running economy in distance runners. <em>Med Sci Sports Exerc.</em> 2008;40(6):1087-1092.</li>
            <li>Billat VL. Interval training for performance. <em>Sports Med.</em> 2001;31(1):13-31.</li>
          </ol>
        </div>
        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Related Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            {[["❤️ Heart Rate Zones", "/calculators/heart-rate-zone"], ["💧 Water Intake", "/calculators/water-intake"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["📉 Calorie Deficit", "/calculators/calorie-deficit"]].map(([name, href]) => (
              <a key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.875rem" }}>{name}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
