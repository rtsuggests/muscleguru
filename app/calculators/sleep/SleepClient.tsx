"use client";
import { useState } from "react";

const schema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Sleep Calculator — MuscleGuru.in",
  "url": "https://muscleguru.in/calculators/sleep",
  "applicationCategory": "HealthApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
};

const faqs = [
  { q: "How many hours of sleep do adults need?", a: "The American Academy of Sleep Medicine and Sleep Research Society recommend 7–9 hours of sleep per night for adults aged 18–60. For teenagers (14–17), 8–10 hours is recommended. Research by Hirshkowitz et al. (2015) comprehensively reviewed the evidence and confirmed these ranges. Consistently sleeping less than 7 hours is associated with increased risk of obesity, type 2 diabetes, cardiovascular disease, and impaired cognitive function." },
  { q: "Why does sleep matter for muscle growth and fitness?", a: "Sleep is when the majority of muscle repair and growth occurs. During deep sleep (slow-wave sleep), growth hormone secretion peaks — research by Van Cauter et al. found that 70% of daily growth hormone release occurs during the first hours of sleep. Growth hormone drives muscle protein synthesis, fat metabolism, and tissue repair. Sleep deprivation reduces testosterone, increases cortisol (catabolic), impairs glycogen replenishment, and reduces next-day training performance." },
  { q: "What is a sleep cycle and why are 90 minutes important?", a: "A sleep cycle is one complete progression through all sleep stages: light sleep (N1, N2), deep sleep (N3/slow-wave sleep), and REM sleep. Each cycle takes approximately 90 minutes. Waking mid-cycle — particularly from deep sleep — produces sleep inertia (grogginess). Waking at the end of a complete cycle, when you naturally transition to lighter sleep, feels significantly more refreshing. This calculator aligns your wake time with cycle completions." },
  { q: "How can I improve my sleep quality for better fitness results?", a: "Evidence-based sleep hygiene practices include: keeping a consistent sleep and wake time 7 days per week (even weekends), keeping your bedroom cool (18–20°C is optimal), avoiding screens for 30–60 minutes before bed (blue light suppresses melatonin), avoiding caffeine after 2 PM (caffeine has a half-life of 5–7 hours), exercising regularly (but not within 2 hours of bedtime for high-intensity training), and avoiding large meals within 2 hours of sleep." },
];

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>{items.map((item, i) => (
      <div key={i} className="faq-item">
        <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
          <span>{item.q}</span>
          <span style={{ fontSize: "1.2rem", color: "var(--color-brand)", flexShrink: 0, marginLeft: "0.75rem" }}>{open === i ? "−" : "+"}</span>
        </button>
        {open === i && <div className="faq-answer">{item.a}</div>}
      </div>
    ))}</div>
  );
}

function SleepCalculator() {
  const [mode, setMode] = useState<"wakeup" | "bedtime">("wakeup");
  const [hour, setHour] = useState("6"); const [minute, setMinute] = useState("00"); const [ampm, setAmpm] = useState("AM");
  const [result, setResult] = useState<string[]>([]);

  function calculate() {
    let h = parseInt(hour); const m = parseInt(minute);
    if (ampm === "PM" && h !== 12) h += 12;
    if (ampm === "AM" && h === 12) h = 0;
    const baseMinutes = h * 60 + m;
    const CYCLE = 90; const FALL_ASLEEP = 15;
    const times: string[] = [];

    for (let cycles = 6; cycles >= 3; cycles--) {
      let targetMins: number;
      if (mode === "wakeup") {
        targetMins = baseMinutes - cycles * CYCLE - FALL_ASLEEP;
      } else {
        targetMins = baseMinutes + cycles * CYCLE + FALL_ASLEEP;
      }
      targetMins = ((targetMins % 1440) + 1440) % 1440;
      const th = Math.floor(targetMins / 60) % 24;
      const tm = targetMins % 60;
      const displayHour = th === 0 ? 12 : th > 12 ? th - 12 : th;
      const displayAmPm = th < 12 ? "AM" : "PM";
      times.push(`${displayHour}:${tm.toString().padStart(2, "0")} ${displayAmPm} (${cycles} cycles = ${cycles * 1.5} hrs)`);
    }
    setResult(times);
  }

  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1));
  const minutes = ["00", "15", "30", "45"];

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
        {[["wakeup", "I want to wake up at..."], ["bedtime", "I want to go to bed at..."]].map(([m, label]) => (
          <button key={m} onClick={() => { setMode(m as "wakeup" | "bedtime"); setResult([]); }}
            style={{ padding: "0.5rem 1rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.875rem", fontFamily: "var(--font-display)", background: mode === m ? "var(--color-brand)" : "transparent", color: mode === m ? "#fff" : "var(--color-muted)", transition: "all 0.15s" }}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Hour</label>
          <select className="calc-select" value={hour} onChange={e => setHour(e.target.value)} style={{ width: 90 }}>
            {hours.map(h => <option key={h} value={h}>{h}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Minute</label>
          <select className="calc-select" value={minute} onChange={e => setMinute(e.target.value)} style={{ width: 90 }}>
            {minutes.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>AM/PM</label>
          <select className="calc-select" value={ampm} onChange={e => setAmpm(e.target.value)} style={{ width: 90 }}>
            <option>AM</option><option>PM</option>
          </select>
        </div>
      </div>

      <button className="btn-primary" onClick={calculate}>
        {mode === "wakeup" ? "Calculate Best Bedtimes" : "Calculate Best Wake Times"}
      </button>

      {result.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "0.95rem" }}>
            {mode === "wakeup" ? "🌙 Best times to go to sleep:" : "☀️ Best times to wake up:"}
          </div>
          <div style={{ display: "grid", gap: "0.625rem" }}>
            {result.map((t, i) => (
              <div key={i} style={{ background: i === 0 ? "var(--color-brand-light)" : "var(--color-bg)", border: `1.5px solid ${i === 0 ? "var(--color-brand)" : "var(--color-border)"}`, borderRadius: "0.75rem", padding: "0.875rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", color: i === 0 ? "var(--color-brand-dark)" : "var(--color-dark)" }}>
                    {t.split(" (")[0]}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>
                    {t.split("(")[1]?.replace(")", "")}
                  </div>
                </div>
                {i === 0 && <span className="tag">⭐ Recommended</span>}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1rem", background: "#f0f9ff", border: "1.5px solid #bae6fd", borderRadius: "0.75rem", padding: "0.875rem 1.125rem", fontSize: "0.875rem", color: "#0369a1" }}>
            <strong>💡 Tip:</strong> These times assume you fall asleep in approximately 15 minutes. Includes a 15-minute wind-down buffer. Aim for 5–6 complete cycles (7.5–9 hours) for optimal recovery.
          </div>
        </div>
      )}
    </div>
  );
}

export default function SleepClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</a> <span>›</span>
          <a href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Calculators</a> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Sleep Calculator</span>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>😴</div>
          <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", marginBottom: "0.75rem" }}>Sleep Calculator</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 580, margin: "0 auto" }}>Find the best time to sleep or wake up based on 90-minute sleep cycles. Wake up refreshed instead of groggy — every day.</p>
        </div>
        <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
          <SleepCalculator />
        </div>
        <div className="disclaimer-box">
          <strong>⚠️ Note:</strong> Sleep cycle length varies between individuals (typically 80–110 minutes). These calculations use the average 90-minute cycle. Consult a doctor if you experience persistent sleep difficulties, excessive daytime sleepiness, or suspect a sleep disorder such as sleep apnoea.
        </div>
        <div className="seo-content" style={{ marginTop: "2rem" }}>
          <h2>Why Sleep Is the Most Important Recovery Tool for Fitness</h2>
          <p>Of all the variables affecting fitness outcomes — training, nutrition, hydration, supplementation — sleep is arguably the one most chronically undervalued in India. Research by Dattilo et al. (2011) described sleep as the &quot;anabolic state&quot; where the physiological adaptations to training are actually realised. The workout provides the stimulus; sleep provides the time and hormonal environment for adaptation to occur.</p>
          <p>A landmark study by Spiegel et al. found that restricting sleep to 5.5 hours vs 8.5 hours for just two weeks resulted in significantly less fat loss and more lean mass loss from the same calorie deficit — a profound demonstration of sleep&apos;s role in body composition independent of training and nutrition.</p>

          <h2>The 90-Minute Sleep Cycle Explained</h2>
          <p>Human sleep is not a uniform state but a cyclical progression through four distinct stages repeated throughout the night:</p>
          <table>
            <thead><tr><th>Stage</th><th>Type</th><th>Duration per Cycle</th><th>Function</th></tr></thead>
            <tbody>
              <tr><td>N1</td><td>Light sleep</td><td>5–10 min</td><td>Transition from wakefulness</td></tr>
              <tr><td>N2</td><td>Light sleep</td><td>20–25 min</td><td>Memory consolidation begins</td></tr>
              <tr><td>N3</td><td>Deep sleep (SWS)</td><td>20–40 min</td><td>Growth hormone release, physical repair</td></tr>
              <tr><td>REM</td><td>Rapid Eye Movement</td><td>15–30 min</td><td>Emotional processing, skill memory</td></tr>
            </tbody>
          </table>
          <p>Deep sleep (N3) dominates the first half of the night and is where growth hormone peaks. REM sleep dominates the second half and is critical for cognitive function, emotional regulation, and skill learning. Both halves of the night are important — cutting sleep short reduces REM disproportionately, while going to bed too late reduces deep sleep.</p>

          <h2>Sleep and Fitness: The Evidence</h2>
          <ul>
            <li><strong>Muscle growth:</strong> Growth hormone, which drives muscle protein synthesis, is secreted primarily during deep sleep. Chronic sleep deprivation reduces GH by up to 70%.</li>
            <li><strong>Fat loss:</strong> Sleep deprivation increases ghrelin (hunger hormone) by ~25% and reduces leptin (satiety hormone) by ~18%, leading to increased calorie intake and reduced fat burning.</li>
            <li><strong>Performance:</strong> Research by Mah et al. (2011) found that extending sleep to 10 hours in basketball players improved sprint times, shooting accuracy, and reaction time significantly.</li>
            <li><strong>Injury prevention:</strong> A study by Milewski et al. (2014) found that young athletes sleeping less than 8 hours were 1.7 times more likely to sustain an injury.</li>
          </ul>

          <h2>Indian Sleep Context: Unique Challenges</h2>
          <p>India faces some specific sleep challenges worth addressing. A 2023 survey found India has one of the lowest average sleep durations globally — approximately 7.01 hours — with significant urban populations sleeping 6 hours or less. Contributing factors include late dinner times (9–10 PM in many Indian households), late-night screen use, heat in summer months affecting sleep quality, and cultural attitudes that sometimes romanticise sleeping less as a sign of productivity.</p>
          <p>For gym-goers and athletes, these cultural patterns directly impact training results. Prioritising sleep to 7–9 hours is one of the single most impactful free interventions available for improving body composition and fitness performance.</p>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Hirshkowitz M et al. National Sleep Foundation's sleep time duration recommendations. <em>Sleep Health.</em> 2015;1(1):40-43.</li>
            <li>Dattilo M et al. Sleep and muscle recovery: endocrinological and molecular basis. <em>Med Hypotheses.</em> 2011;77(2):220-222.</li>
            <li>Spiegel K et al. Effects of poor and short sleep on glucose metabolism and obesity risk. <em>Nat Rev Endocrinol.</em> 2009;5(5):253-261.</li>
            <li>Mah CD et al. The effects of sleep extension on the athletic performance of collegiate basketball players. <em>Sleep.</em> 2011;34(7):943-950.</li>
          </ol>
        </div>
        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Related Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            {[["💧 Water Intake", "/calculators/water-intake"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["💪 Protein Calculator", "/calculators/protein"], ["📉 Calorie Deficit", "/calculators/calorie-deficit"]].map(([name, href]) => (
              <a key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.875rem" }}>{name}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
