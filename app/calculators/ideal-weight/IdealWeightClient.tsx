"use client";
import { useState } from "react";

const related = [
  { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
  { name: "Body Fat %", href: "/calculators/body-fat", icon: "📊" },
  { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
  { name: "Calorie Deficit", href: "/calculators/calorie-deficit", icon: "📉" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ideal Weight Calculator — MuscleGuru.in",
  "url": "https://muscleguru.in/calculators/ideal-weight",
  "applicationCategory": "HealthApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
};

const faqs = [
  {
    q: "What is the ideal weight for my height in India?",
    a: "Ideal weight ranges vary based on sex, frame size, and body composition. For Indian adults, research suggests slightly lower reference ranges than Western populations due to differences in body composition and metabolic risk. As a general guide, a BMI of 18.5–22.9 (using Indian-adapted cutoffs) combined with a healthy waist circumference is a more meaningful target than any single number on a scale. Our calculator provides four evidence-based formula estimates — use the average as a practical starting range.",
  },
  {
    q: "Which ideal weight formula is most accurate?",
    a: "No single formula is universally superior. Each was developed on different populations and for different clinical purposes. The Robinson formula (1983) is generally considered the most accurate for most adults. The Devine formula was originally designed for drug dosing in clinical settings. Taking the average of all four formulas, as shown in this calculator, provides a more robust estimate than relying on any single equation. For Indian adults specifically, these formulas may slightly overestimate ideal weight due to the tendency for South Asians to carry more body fat at lower weights.",
  },
  {
    q: "Is ideal body weight the same as goal weight?",
    a: "Not necessarily. Ideal body weight (IBW) formulas were originally developed for clinical and pharmacological purposes — primarily to calculate drug dosages and nutritional requirements — not as fitness goals. Your personal goal weight should also account for your body composition (muscle vs. fat ratio), fitness level, activity demands, and health status. A muscular, athletic individual may healthily exceed IBW calculations, while someone with sarcopenia (low muscle mass) may fall within the IBW range but still have poor body composition.",
  },
  {
    q: "Why do the four formulas give different results?",
    a: "Each formula was derived from different study populations, time periods, and methodologies. The Hamwi formula (1964) uses a simple rule-of-thumb approach. The Devine formula (1974) was specifically designed for clinical drug dosing. The Robinson formula (1983) and Miller formula (1983) were developed to improve accuracy using regression analysis on broader datasets. These differences in methodology produce modestly different results, particularly for taller or shorter individuals where the formulas diverge most significantly.",
  },
  {
    q: "What should I do if I'm above my ideal weight range?",
    a: "Being above your calculated ideal weight range is not a diagnosis — it is a starting point for a conversation. The most evidence-based approach is to: calculate your TDEE, create a moderate calorie deficit of 400–500 kcal/day, increase protein intake to 1.6–2.0g/kg to preserve muscle during fat loss, and engage in regular resistance training. A sustainable rate of fat loss is 0.4–0.5 kg per week. Consult a doctor or registered dietitian before making significant dietary changes, especially if you have any underlying health conditions.",
  },
  {
    q: "Does ideal weight differ for vegetarians and non-vegetarians?",
    a: "The ideal weight formulas themselves do not differentiate by diet type. However, body composition can differ — vegetarians, particularly those with lower protein intakes, may have less lean muscle mass at a given body weight, which could affect how their weight compares to reference ranges. The most meaningful health target for both groups is achieving a healthy body fat percentage and waist circumference alongside a weight in or near the ideal range.",
  },
];

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ marginTop: "0.5rem" }}>
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

function IdealWeightCalculator() {
  const [height, setHeight] = useState("");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [unit, setUnit] = useState<"cm" | "ft">("cm");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<{
    robinson: number; miller: number; devine: number; hamwi: number;
    avg: number; min: number; max: number; bmiRange: { low: number; high: number };
  } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    let hCm = 0;
    if (unit === "cm") {
      hCm = parseFloat(height);
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inches = parseFloat(heightIn) || 0;
      hCm = (ft * 12 + inches) * 2.54;
    }
    if (!hCm || hCm < 130 || hCm > 220) {
      setError("Please enter a valid height between 130–220 cm (4'3\" – 7'2\")."); return;
    }
    const hIn = hCm / 2.54;
    const hM = hCm / 100;
    const over5ft = hIn - 60;

    let robinson: number, miller: number, devine: number, hamwi: number;
    if (sex === "male") {
      robinson = 52 + 1.9 * over5ft;
      miller   = 56.2 + 1.41 * over5ft;
      devine   = 50 + 2.3 * over5ft;
      hamwi    = 48 + 2.7 * over5ft;
    } else {
      robinson = 49 + 1.7 * over5ft;
      miller   = 53.1 + 1.36 * over5ft;
      devine   = 45.5 + 2.3 * over5ft;
      hamwi    = 45.5 + 2.2 * over5ft;
    }

    robinson = Math.max(0, parseFloat(robinson.toFixed(1)));
    miller   = Math.max(0, parseFloat(miller.toFixed(1)));
    devine   = Math.max(0, parseFloat(devine.toFixed(1)));
    hamwi    = Math.max(0, parseFloat(hamwi.toFixed(1)));

    const avg = parseFloat(((robinson + miller + devine + hamwi) / 4).toFixed(1));
    const all = [robinson, miller, devine, hamwi];
    const min = Math.min(...all);
    const max = Math.max(...all);

    // Indian-adapted BMI range: 18.5–22.9
    const bmiLow  = parseFloat((18.5 * hM * hM).toFixed(1));
    const bmiHigh = parseFloat((22.9 * hM * hM).toFixed(1));

    setResult({ robinson, miller, devine, hamwi, avg, min, max, bmiRange: { low: bmiLow, high: bmiHigh } });
  }

  return (
    <div>
      {/* Unit toggle */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
        {(["cm", "ft"] as const).map(u => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); setError(""); }}
            style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--font-display)", background: unit === u ? "var(--color-brand)" : "transparent", color: unit === u ? "#fff" : "var(--color-muted)", transition: "all 0.15s" }}>
            {u === "cm" ? "Metric (cm)" : "Imperial (ft/in)"}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
        {/* Sex */}
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Sex</label>
          <select className="calc-select" value={sex} onChange={e => { setSex(e.target.value as "male" | "female"); setResult(null); }}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Height */}
        {unit === "cm" ? (
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label>
            <input className="calc-input" type="number" placeholder="e.g. 170" value={height} onChange={e => setHeight(e.target.value)} min="130" max="220" />
          </div>
        ) : (
          <>
            <div>
              <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (feet)</label>
              <input className="calc-input" type="number" placeholder="5" value={heightFt} onChange={e => setHeightFt(e.target.value)} />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Inches</label>
              <input className="calc-input" type="number" placeholder="7" value={heightIn} onChange={e => setHeightIn(e.target.value)} min="0" max="11" />
            </div>
          </>
        )}
      </div>

      {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>⚠ {error}</p>}
      <button className="btn-primary" onClick={calculate}>Calculate My Ideal Weight</button>

      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          {/* Main result */}
          <div className="result-card" style={{ marginBottom: "1.25rem" }}>
            <div className="result-number">{result.avg} kg</div>
            <div className="result-label">Average Ideal Body Weight</div>
            <div style={{ fontSize: "0.875rem", color: "var(--color-muted)", marginTop: "0.5rem" }}>
              Formula range: {result.min} – {result.max} kg
            </div>
          </div>

          {/* Indian BMI range */}
          <div style={{ background: "#f0fdf4", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ fontWeight: 700, color: "var(--color-brand-dark)", fontSize: "0.9rem", marginBottom: "0.4rem" }}>
              🇮🇳 Indian-Adapted Healthy Weight Range (BMI 18.5–22.9)
            </div>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-brand-dark)", fontFamily: "var(--font-display)" }}>
              {result.bmiRange.low} – {result.bmiRange.high} kg
            </div>
            <div style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>
              Based on ICMR-recommended BMI cutoffs for Indian adults. More relevant than standard Western formulas.
            </div>
          </div>

          {/* Formula breakdown */}
          <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.875rem", fontSize: "0.95rem" }}>Results by Formula</div>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {[
                ["Robinson (1983)", result.robinson, "Most widely used clinical formula"],
                ["Miller (1983)", result.miller, "Developed for regression accuracy"],
                ["Devine (1974)", result.devine, "Originally for drug dosing"],
                ["Hamwi (1964)", result.hamwi, "Simple rule-of-thumb approach"],
              ].map(([name, val, desc]) => (
                <div key={name as string} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.625rem 0.875rem", background: "#fff", borderRadius: "0.5rem", border: "1px solid var(--color-border)", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{name as string}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-muted)" }}>{desc as string}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", color: "var(--color-brand-dark)" }}>{val as number} kg</div>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="disclaimer-box" style={{ marginTop: "1.25rem" }}>
            <strong>⚠️ Remember:</strong> These are estimates based on height alone. They do not account for muscle mass, bone density, age, or body composition. A muscular person may healthily exceed these numbers. Consult a doctor or dietitian for personalised guidance.
          </div>
        </div>
      )}
    </div>
  );
}

export default function IdealWeightClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", alignItems: "center", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</a>
          <span>›</span>
          <a href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Calculators</a>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Ideal Weight Calculator</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🎯</div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>Ideal Weight Calculator for Indian Adults</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 580, margin: "0 auto" }}>
            Find your ideal body weight range using four validated scientific formulas, plus an Indian-adapted BMI range from ICMR guidelines.
          </p>
        </div>

        {/* Calculator card */}
        <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.25rem, 4vw, 2rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
          <IdealWeightCalculator />
        </div>

        {/* SEO content */}
        <div className="seo-content">

          <h2>What Is Ideal Body Weight (IBW)?</h2>
          <p>Ideal Body Weight (IBW) is a calculated estimate of the weight considered optimal for a person of a given height and sex, based on population-level data and clinical research. It was originally developed not as a fitness target, but as a clinical tool — primarily to calculate appropriate drug dosages in medical settings, where body weight significantly affects pharmacokinetics (how drugs are absorbed and processed by the body).</p>
          <p>Over time, IBW formulas have been adopted more broadly as reference points in health assessments, nutrition planning, and fitness goal-setting. However, it is important to understand their origin and limitations: these formulas were derived from population averages and do not account for individual differences in muscle mass, bone density, age-related changes in body composition, or ethnic differences in metabolic risk.</p>

          <h2>The Four IBW Formulas: History and Scientific Basis</h2>
          <p>This calculator uses four validated ideal weight formulas, each developed at a different time and for different purposes:</p>

          <h3>1. Robinson Formula (1983)</h3>
          <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem 1.25rem", margin: "0.75rem 0", fontFamily: "var(--font-mono)", fontSize: "0.875rem", border: "1.5px solid var(--color-border)", lineHeight: 2 }}>
            <div><strong>Men:</strong> IBW = 52 kg + 1.9 kg per inch over 5 feet</div>
            <div><strong>Women:</strong> IBW = 49 kg + 1.7 kg per inch over 5 feet</div>
          </div>
          <p>Published by Robinson et al. in 1983, this formula is considered the most accurate general-purpose IBW equation for most adults and is widely cited in clinical nutrition literature. It was developed using regression analysis on a large population dataset, giving it stronger statistical backing than earlier rule-of-thumb approaches.</p>

          <h3>2. Miller Formula (1983)</h3>
          <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem 1.25rem", margin: "0.75rem 0", fontFamily: "var(--font-mono)", fontSize: "0.875rem", border: "1.5px solid var(--color-border)", lineHeight: 2 }}>
            <div><strong>Men:</strong> IBW = 56.2 kg + 1.41 kg per inch over 5 feet</div>
            <div><strong>Women:</strong> IBW = 53.1 kg + 1.36 kg per inch over 5 feet</div>
          </div>
          <p>Also published in 1983, the Miller formula was developed as a refinement of earlier equations. It tends to give slightly higher estimates than the Robinson formula, particularly for taller individuals.</p>

          <h3>3. Devine Formula (1974)</h3>
          <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem 1.25rem", margin: "0.75rem 0", fontFamily: "var(--font-mono)", fontSize: "0.875rem", border: "1.5px solid var(--color-border)", lineHeight: 2 }}>
            <div><strong>Men:</strong> IBW = 50 kg + 2.3 kg per inch over 5 feet</div>
            <div><strong>Women:</strong> IBW = 45.5 kg + 2.3 kg per inch over 5 feet</div>
          </div>
          <p>The Devine formula was published in 1974 and specifically designed for calculating creatinine clearance in clinical drug dosing. Despite its pharmaceutical origins, it became widely used as a general IBW reference. Research has found it tends to underestimate ideal weight for shorter individuals and overestimate for very tall ones.</p>

          <h3>4. Hamwi Formula (1964)</h3>
          <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem 1.25rem", margin: "0.75rem 0", fontFamily: "var(--font-mono)", fontSize: "0.875rem", border: "1.5px solid var(--color-border)", lineHeight: 2 }}>
            <div><strong>Men:</strong> IBW = 48 kg + 2.7 kg per inch over 5 feet</div>
            <div><strong>Women:</strong> IBW = 45.5 kg + 2.2 kg per inch over 5 feet</div>
          </div>
          <p>The oldest of the four formulas, Hamwi (1964) uses a simple rule-of-thumb approach and was one of the first widely adopted IBW equations. It tends to produce higher estimates for men compared to the other formulas.</p>

          <h2>Why We Show an Indian-Adapted Range</h2>
          <p>Standard IBW formulas were derived predominantly from Western (primarily American and European) population data. Growing evidence from Indian researchers and the Indian Council of Medical Research (ICMR) shows that South Asians have distinct body composition characteristics that make direct application of these formulas potentially misleading.</p>
          <p>Key differences documented in peer-reviewed literature include:</p>
          <ul>
            <li><strong>Higher body fat at lower BMIs:</strong> Indians tend to carry proportionally more body fat at the same BMI compared to Europeans — the so-called "thin-fat Indian" phenotype first described by Dr. C.S. Yajnik of KEM Hospital, Pune.</li>
            <li><strong>Greater visceral fat accumulation:</strong> South Asians accumulate more fat around the abdominal organs at lower total body weights, increasing metabolic risk at weights that would appear "normal" by Western standards.</li>
            <li><strong>Lower muscle mass:</strong> Indian adults typically have less skeletal muscle mass relative to body weight compared to Western reference populations.</li>
          </ul>
          <p>For these reasons, the ICMR recommends using a BMI of 18.5–22.9 as the healthy range for Indian adults (vs. 18.5–24.9 in international guidelines). Our calculator converts this BMI range to a weight range for your specific height, giving you an India-specific healthy weight target that is more clinically relevant than the formula-based IBW alone.</p>

          <h2>IBW vs BMI vs Body Fat %: Which Measure Matters Most?</h2>
          <table>
            <thead>
              <tr><th>Measure</th><th>What It Assesses</th><th>Limitations</th><th>Best Used For</th></tr>
            </thead>
            <tbody>
              <tr><td>Ideal Body Weight (IBW)</td><td>Target weight based on height</td><td>Ignores body composition, muscle, age</td><td>Clinical drug dosing; rough reference</td></tr>
              <tr><td>BMI</td><td>Weight relative to height</td><td>Cannot distinguish fat from muscle</td><td>Population-level screening</td></tr>
              <tr><td>Body Fat %</td><td>Actual proportion of fat tissue</td><td>Requires measurement tools or equations</td><td>Body composition assessment</td></tr>
              <tr><td>Waist circumference</td><td>Central/visceral fat</td><td>Does not reflect total body fat</td><td>Metabolic risk assessment — best for Indians</td></tr>
            </tbody>
          </table>
          <p>For Indian adults, waist circumference is often the most clinically meaningful single measurement. The ICMR recommends waist circumference below 90 cm for men and below 80 cm for women as targets associated with lower metabolic risk. Use this alongside your ideal weight range for a more complete picture.</p>

          <h2>How to Use Your Ideal Weight Results Practically</h2>
          <p>Once you have your ideal weight range, here is how to use it effectively:</p>

          <h3>If you are above your ideal weight range</h3>
          <p>A sustainable approach to reaching your ideal weight range involves four evidence-backed steps: calculate your TDEE using our <a href="/calculators/tdee" style={{ color: "var(--color-brand)" }}>TDEE Calculator</a>, create a moderate calorie deficit of 400–500 kcal/day, maintain high protein intake (1.6–2.0g per kg body weight) to preserve muscle while losing fat, and engage in resistance training 3 times per week to maintain lean mass. Aim for 0.4–0.5 kg of fat loss per week — faster rates increase the risk of losing muscle alongside fat.</p>

          <h3>If you are below your ideal weight range</h3>
          <p>Being underweight carries its own health risks including nutrient deficiencies, reduced bone density, impaired immune function, and hormonal disruption. A structured approach to gaining weight healthily includes: eating in a calorie surplus of 300–400 kcal above TDEE, prioritising protein (1.8–2.2g/kg) to support muscle gain, and performing resistance training to ensure weight gained is lean mass rather than predominantly fat. Consult a doctor to rule out medical causes of low body weight.</p>

          <h3>If you are within your ideal weight range</h3>
          <p>Being within your IBW range does not automatically mean optimal health. Focus on body composition rather than the number on the scale — a person within their IBW range but with high body fat and low muscle mass (metabolically obese normal weight, or MONW) may be at higher health risk than someone slightly above IBW with excellent body composition. Aim to maintain or improve your muscle-to-fat ratio through regular resistance training and adequate protein intake.</p>

          <h2>Ideal Weight for Common Indian Heights</h2>
          <table>
            <thead><tr><th>Height</th><th>Ideal Weight (Men)</th><th>Ideal Weight (Women)</th><th>Indian BMI Range</th></tr></thead>
            <tbody>
              <tr><td>155 cm (5'1")</td><td>52–57 kg</td><td>47–52 kg</td><td>44.4–55.1 kg</td></tr>
              <tr><td>160 cm (5'3")</td><td>55–60 kg</td><td>50–55 kg</td><td>47.4–58.7 kg</td></tr>
              <tr><td>165 cm (5'5")</td><td>58–64 kg</td><td>53–58 kg</td><td>50.3–62.4 kg</td></tr>
              <tr><td>170 cm (5'7")</td><td>61–67 kg</td><td>56–62 kg</td><td>53.5–66.3 kg</td></tr>
              <tr><td>175 cm (5'9")</td><td>64–70 kg</td><td>60–65 kg</td><td>56.7–70.3 kg</td></tr>
              <tr><td>180 cm (5'11")</td><td>68–74 kg</td><td>63–69 kg</td><td>59.9–74.3 kg</td></tr>
            </tbody>
          </table>

          <h2>Who Should Not Rely Solely on This Calculator</h2>
          <ul>
            <li><strong>Athletes and bodybuilders:</strong> Significant muscle mass will place you above IBW ranges despite excellent body composition.</li>
            <li><strong>Pregnant or breastfeeding women:</strong> Weight assessment requires specialist guidance during pregnancy.</li>
            <li><strong>Children and adolescents:</strong> Use age- and sex-specific growth charts rather than adult IBW formulas.</li>
            <li><strong>Older adults (65+):</strong> Slightly higher body weight may be protective in older age; consult your doctor.</li>
            <li><strong>People with medical conditions:</strong> Certain conditions (thyroid disorders, kidney disease, heart failure) significantly affect body weight interpretation.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Robinson JD et al. Determination of ideal body weight for drug dosage calculations. <em>Am J Hosp Pharm.</em> 1983;40(6):1016-1019.</li>
            <li>Miller DR et al. Determination of ideal body weight. <em>Am J Hosp Pharm.</em> 1983;40:1761-1763.</li>
            <li>Devine BJ. Gentamicin therapy. <em>Drug Intell Clin Pharm.</em> 1974;8:650-655.</li>
            <li>Hamwi GJ. Therapy: changing dietary concepts. <em>American Diabetes Association.</em> 1964:73-78.</li>
            <li>Indian Council of Medical Research. <em>Nutrient Requirements and Recommended Dietary Allowances for Indians.</em> ICMR, 2020.</li>
            <li>Yajnik CS, Yudkin JS. The Y-Y paradox. <em>The Lancet.</em> 2004;363(9403):163.</li>
          </ol>
        </div>

        {/* Related calculators */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1.25rem" }}>Related Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {related.map(r => (
              <a key={r.href} href={r.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.9rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{r.icon}</span>{r.name}
              </a>
            ))}
          </div>
        </div>

        {/* Author block */}
        <div style={{ marginTop: "2.5rem", background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)", flexShrink: 0 }}>MG</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-dark)" }}>MuscleGuru Editorial Team</div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>Reviewed against peer-reviewed research and evidence-based guidelines. All formulas sourced from published scientific literature.</div>
          </div>
        </div>
      </div>
    </>
  );
}
