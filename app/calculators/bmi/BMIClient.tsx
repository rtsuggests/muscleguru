"use client";
import { useState } from "react";
import CalcLayout from "@/components/layout/CalcLayout";
import FAQ from "@/components/ui/FAQ";

const related = [
  { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
  { name: "Body Fat %", href: "/calculators/body-fat", icon: "📊" },
  { name: "Calorie Deficit", href: "/calculators/calorie-deficit", icon: "📉" },
  { name: "Protein Intake", href: "/calculators/protein", icon: "💪" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BMI Calculator — MuscleGuru.in",
  "description": "Free Body Mass Index calculator for Indian adults with evidence-based interpretation.",
  "url": "https://muscleguru.in/calculators/bmi",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

function getBMICategory(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "#3b82f6", bg: "#eff6ff", advice: "You may benefit from increasing calorie intake and resistance training to build lean mass. Consult a doctor or dietitian." };
  if (bmi < 23)   return { label: "Normal Weight", color: "#16a34a", bg: "#f0fdf4", advice: "Your BMI is within the healthy range for most Indian adults. Focus on maintaining this through balanced nutrition and regular exercise." };
  if (bmi < 27.5) return { label: "Overweight", color: "#f59e0b", bg: "#fffbeb", advice: "Research suggests a moderate calorie deficit and increased physical activity may be beneficial. Consider consulting a registered dietitian." };
  return { label: "Obese", color: "#ef4444", bg: "#fef2f2", advice: "A BMI in this range is associated with increased health risks. We strongly recommend consulting a qualified healthcare professional for personalised guidance." };
}

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weightLbs, setWeightLbs] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    let w = 0, hM = 0;
    if (unit === "metric") {
      w = parseFloat(weight); hM = parseFloat(height) / 100;
    } else {
      w = parseFloat(weightLbs) * 0.453592;
      hM = ((parseFloat(heightFt) * 12) + parseFloat(heightIn || "0")) * 0.0254;
    }
    if (!w || !hM || w <= 0 || hM <= 0) { setError("Please enter valid values for weight and height."); return; }
    if (w < 20 || w > 300) { setError("Please enter a realistic weight (20–300 kg)."); return; }
    if (hM < 1 || hM > 2.5) { setError("Please enter a realistic height."); return; }
    setResult(parseFloat((w / (hM * hM)).toFixed(1)));
  }

  const cat = result ? getBMICategory(result) : null;

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
        {(["metric", "imperial"] as const).map(u => (
          <button key={u} onClick={() => { setUnit(u); setResult(null); setError(""); }}
            style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--font-display)", background: unit === u ? "var(--color-brand)" : "transparent", color: unit === u ? "#fff" : "var(--color-muted)", transition: "all 0.15s" }}>
            {u === "metric" ? "Metric (kg/cm)" : "Imperial (lbs/ft)"}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
        {unit === "metric" ? (
          <>
            <div>
              <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (kg)</label>
              <input className="calc-input" type="number" placeholder="e.g. 70" value={weight} onChange={e => setWeight(e.target.value)} min="1" max="300" />
            </div>
            <div>
              <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label>
              <input className="calc-input" type="number" placeholder="e.g. 170" value={height} onChange={e => setHeight(e.target.value)} min="100" max="250" />
            </div>
          </>
        ) : (
          <>
            <div>
              <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (lbs)</label>
              <input className="calc-input" type="number" placeholder="e.g. 154" value={weightLbs} onChange={e => setWeightLbs(e.target.value)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              <div>
                <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (ft)</label>
                <input className="calc-input" type="number" placeholder="5" value={heightFt} onChange={e => setHeightFt(e.target.value)} />
              </div>
              <div>
                <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Inches</label>
                <input className="calc-input" type="number" placeholder="7" value={heightIn} onChange={e => setHeightIn(e.target.value)} />
              </div>
            </div>
          </>
        )}
      </div>

      {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>⚠ {error}</p>}

      <button className="btn-primary" onClick={calculate}>Calculate My BMI</button>

      {result !== null && cat && (
        <div style={{ marginTop: "1.5rem" }}>
          <div className="result-card">
            <div className="result-number">{result}</div>
            <div className="result-label">Your BMI Score</div>
            <div style={{ marginTop: "0.75rem", display: "inline-flex", alignItems: "center", padding: "0.35rem 1rem", borderRadius: "9999px", background: cat.bg, color: cat.color, fontWeight: 700, fontSize: "0.95rem" }}>
              {cat.label}
            </div>
          </div>

          <div style={{ marginTop: "1.25rem", background: cat.bg, border: `1.5px solid ${cat.color}30`, borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
            <div style={{ fontWeight: 700, color: cat.color, marginBottom: "0.4rem", fontSize: "0.9rem" }}>What this means for you:</div>
            <p style={{ fontSize: "0.9rem", color: "var(--color-body)", margin: 0 }}>{cat.advice}</p>
          </div>

          <div style={{ marginTop: "1.25rem", background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem 1.25rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.9rem" }}>BMI Categories (WHO / Indian Adapted)</div>
            <div style={{ display: "grid", gap: "0.4rem" }}>
              {[["< 18.5", "Underweight", "#3b82f6"], ["18.5 – 22.9", "Normal Weight", "#16a34a"], ["23 – 27.4", "Overweight", "#f59e0b"], ["≥ 27.5", "Obese", "#ef4444"]].map(([range, label, color]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", padding: "0.3rem 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span style={{ fontWeight: 600 }}>{range}</span>
                  <span style={{ color: color as string, fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const faqs = [
  {
    q: "What is a healthy BMI for Indian adults?",
    a: "For Indian adults, health organisations generally recommend a BMI between 18.5 and 22.9 as the normal range. The standard WHO cutoff of 25 for overweight is often adjusted lower (to 23) for South Asian populations, because research suggests Indians tend to carry higher body fat and face greater metabolic risks at lower BMI values compared to Caucasian populations."
  },
  {
    q: "Why is the BMI cutoff different for Indians?",
    a: "Multiple studies, including research published in the Lancet and guidelines from the Indian Council of Medical Research (ICMR), indicate that South Asians have higher percentage body fat and greater visceral fat at the same BMI compared to Europeans. This means health risks like type 2 diabetes and cardiovascular disease may begin appearing at a BMI of 23 rather than 25 in Indians."
  },
  {
    q: "Is BMI accurate for muscular people?",
    a: "BMI does not differentiate between fat mass and muscle mass. A highly muscular athlete may have a 'overweight' BMI despite having very low body fat. For people who train regularly with weights, BMI should be interpreted alongside other measures such as body fat percentage, waist circumference, and waist-to-hip ratio for a more accurate health assessment."
  },
  {
    q: "Can BMI be used for children?",
    a: "Standard adult BMI calculators are not appropriate for children and adolescents. Children's BMI must be assessed using age- and sex-specific growth charts. Always consult a paediatrician for weight concerns in anyone under 18 years old."
  },
  {
    q: "What should I do if my BMI is high?",
    a: "A high BMI is a starting point for a conversation, not a diagnosis. We recommend consulting a registered dietitian or doctor who can assess your full health picture — including blood tests, activity level, and dietary habits — before recommending a course of action. In general, sustainable improvements in diet quality and regular physical activity are evidence-backed first steps."
  },
  {
    q: "Does this BMI calculator work for women?",
    a: "Yes. The standard BMI formula is the same for both men and women. However, women naturally carry more body fat than men at the same BMI, so the interpretation differs slightly. The BMI formula itself does not account for sex-based differences in body composition, which is one of its known limitations."
  }
];

function SEOContent() {
  return (
    <>
      <h2>What Is BMI? A Clear, Evidence-Based Explanation</h2>
      <p>Body Mass Index, commonly known as BMI, is a numerical value derived from a person&apos;s weight and height. It was originally developed in the 1830s by Belgian mathematician Adolphe Quetelet as a population-level statistical tool — not as an individual diagnostic measure. Today, it is widely used by healthcare systems globally as a quick, inexpensive screening tool to categorise body weight relative to height.</p>
      <p>The formula is straightforward: BMI equals your weight in kilograms divided by the square of your height in metres. For example, a person weighing 70 kg who is 170 cm tall has a BMI of 70 ÷ (1.70 × 1.70) = 24.2.</p>
      <p>While BMI has significant limitations (discussed below), it remains one of the most widely used tools in public health research and clinical screening because of its simplicity and low cost. Research published in major journals consistently shows that population-level BMI is associated with rates of type 2 diabetes, cardiovascular disease, and all-cause mortality.</p>

      <h2>BMI Formula: How It Is Calculated</h2>
      <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", margin: "1rem 0", fontFamily: "var(--font-mono)", fontSize: "0.95rem", border: "1.5px solid var(--color-border)" }}>
        <div style={{ marginBottom: "0.5rem" }}><strong>BMI (Metric) =</strong> Weight (kg) ÷ Height² (m²)</div>
        <div><strong>BMI (Imperial) =</strong> (Weight in lbs × 703) ÷ Height² (inches²)</div>
      </div>
      <p>This formula was standardised by Ancel Keys in 1972 following his study of body fat measurement across multiple populations. Keys&apos; original paper titled &quot;Indices of relative weight and obesity&quot; was published in the Journal of Chronic Diseases.</p>

      <h2>BMI Categories: Standard vs. Indian-Adapted Cutoffs</h2>
      <p>The World Health Organization (WHO) established the following standard BMI categories based primarily on data from European populations:</p>
      <table>
        <thead><tr><th>BMI Range</th><th>WHO Category</th><th>Indian-Adapted Category</th></tr></thead>
        <tbody>
          <tr><td>Below 18.5</td><td>Underweight</td><td>Underweight</td></tr>
          <tr><td>18.5 – 24.9</td><td>Normal weight</td><td>Normal weight (18.5–22.9)</td></tr>
          <tr><td>25.0 – 29.9</td><td>Overweight</td><td>Overweight (23–27.4)</td></tr>
          <tr><td>30.0 and above</td><td>Obese</td><td>Obese (≥27.5)</td></tr>
        </tbody>
      </table>
      <p>Importantly, multiple studies have demonstrated that South Asian adults, including Indians, tend to accumulate more visceral fat (fat around the abdominal organs) at lower BMI values than European populations. A landmark 2004 paper in the Lancet by Misra et al. and subsequent ICMR guidelines recommend lower BMI cutoff points for Indians: overweight begins at 23.0, and obesity at 27.5.</p>
      <p>This distinction is clinically meaningful. Research suggests that the risk of type 2 diabetes and hypertension begins to rise in Indian adults at a BMI of around 22–23, which falls within the &quot;normal&quot; range on the standard WHO scale. This is why our calculator presents Indian-adapted thresholds alongside the international standard.</p>

      <h2>The Science Behind BMI: What the Research Says</h2>
      <p>BMI&apos;s relationship with health outcomes is well-documented in epidemiological research. A large meta-analysis published in <em>The Lancet</em> (Global BMI Mortality Collaboration, 2016) pooled data from 239 prospective studies involving more than 10 million participants and found that BMI outside the range of 20–25 was associated with higher all-cause mortality.</p>
      <p>For Indians specifically, a study published in the <em>Indian Journal of Medical Research</em> found significant associations between higher BMI and metabolic syndrome, insulin resistance, and dyslipidaemia — even at BMI values below the international obesity threshold of 30.</p>
      <p>However, it&apos;s equally important to understand that BMI is a <strong>screening tool, not a diagnostic test</strong>. The American Medical Association (AMA) issued a policy statement in 2023 cautioning against over-reliance on BMI as a sole metric of health, noting its limitations with respect to body composition, age, sex, ethnicity, and muscle mass.</p>

      <h2>Limitations of BMI: What It Cannot Tell You</h2>
      <p>BMI has several well-recognised limitations that are important to understand:</p>
      <ul>
        <li><strong>Does not measure body fat directly:</strong> Two people with identical BMIs can have very different body fat percentages. A bodybuilder and a sedentary individual may share the same BMI despite vastly different body compositions.</li>
        <li><strong>Does not account for fat distribution:</strong> Where fat is stored matters as much as how much fat you have. Visceral fat (stored around the abdomen and organs) carries higher health risks than subcutaneous fat.</li>
        <li><strong>Not suitable for all populations:</strong> BMI is less accurate for older adults (who tend to lose muscle), certain ethnic groups, pregnant women, and professional athletes.</li>
        <li><strong>Does not differentiate muscle from fat:</strong> Muscle is denser than fat, so highly muscular individuals often test as &quot;overweight&quot; or &quot;obese&quot; on BMI despite having excellent body composition.</li>
        <li><strong>Does not capture overall fitness:</strong> A person who is &quot;normal weight&quot; on BMI but sedentary may be at higher metabolic risk than someone who is &quot;overweight&quot; but highly active and fit.</li>
      </ul>
      <p>Better complementary measures include waist circumference, waist-to-hip ratio, body fat percentage (measured by DEXA or bioimpedance), and blood markers such as fasting glucose and lipid profiles.</p>

      <h2>BMI in the Indian Context: Special Considerations</h2>
      <p>India presents a unique public health challenge called the &quot;thin-fat Indian&quot; phenotype, a term coined by Dr. C.S. Yajnik of the KEM Hospital in Pune. Indian individuals often have a lower BMI but proportionally higher body fat, particularly visceral fat, compared to age and BMI-matched individuals of European descent.</p>
      <p>This phenotype is associated with what researchers describe as &quot;metabolic obesity with normal weight&quot; — a condition where a person has a technically normal BMI but displays insulin resistance, elevated triglycerides, and other markers typically seen in obese individuals. The CARRS (Centre for Cardiometabolic Risk Reduction in South Asia) study found that a significant proportion of Indians with normal BMI already show signs of metabolic dysfunction.</p>
      <p>What this means practically is that relying solely on the standard international BMI cutoffs may underestimate health risks in the Indian population. Using the ICMR-adapted cutoffs (as our calculator does) provides a more relevant reference point.</p>

      <h2>How to Improve Your BMI: Evidence-Based Strategies</h2>
      <p>If your BMI is outside the healthy range, the good news is that even moderate improvements in body weight are associated with significant health benefits. Research suggests that a 5–10% reduction in body weight in overweight individuals can meaningfully improve blood pressure, blood sugar, and cholesterol levels.</p>
      <h3>For those looking to reduce BMI:</h3>
      <ul>
        <li><strong>Create a moderate calorie deficit:</strong> A deficit of 300–500 calories per day from your TDEE (Total Daily Energy Expenditure) supports sustainable fat loss of approximately 0.3–0.5 kg per week without excessive muscle loss.</li>
        <li><strong>Increase protein intake:</strong> Higher protein diets (1.6–2.2 g per kg body weight) are associated with better preservation of lean mass during calorie restriction, according to research by Morton et al. (2018).</li>
        <li><strong>Incorporate resistance training:</strong> Strength training two to four times per week helps preserve and build muscle mass while losing fat, improving body composition even when the scale doesn&apos;t move dramatically.</li>
        <li><strong>Prioritise sleep and manage stress:</strong> Chronic sleep deprivation and high cortisol levels are associated with increased visceral fat accumulation and impaired weight management.</li>
      </ul>
      <h3>For those who are underweight:</h3>
      <ul>
        <li>Increase total calorie intake through calorie-dense, nutrient-rich foods.</li>
        <li>Emphasise protein and resistance training to build lean mass rather than just fat.</li>
        <li>Consult a healthcare provider to rule out underlying medical causes of low body weight.</li>
      </ul>

      <h2>Who Should Not Rely Solely on This Calculator</h2>
      <ul>
        <li><strong>Pregnant women:</strong> BMI is not an appropriate weight assessment tool during pregnancy.</li>
        <li><strong>Children and adolescents:</strong> Use age- and sex-specific growth charts.</li>
        <li><strong>People with diagnosed medical conditions:</strong> Consult your doctor for appropriate weight assessment.</li>
        <li><strong>Professional athletes and bodybuilders:</strong> High muscle mass will inflate BMI without reflecting high body fat.</li>
        <li><strong>Older adults (65+):</strong> Age-related muscle loss (sarcopenia) may make BMI less reliable.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <FAQ items={faqs} />

      <h2>References</h2>
      <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
        <li>World Health Organization. <em>Obesity and Overweight Fact Sheet.</em> WHO, 2021.</li>
        <li>Keys A et al. Indices of relative weight and obesity. <em>Journal of Chronic Diseases.</em> 1972;25(6):329-343.</li>
        <li>Misra A et al. Consensus physical activity guidelines for Asian Indians. <em>Diabetes Technology &amp; Therapeutics.</em> 2012.</li>
        <li>Global BMI Mortality Collaboration. Body-mass index and all-cause mortality. <em>The Lancet.</em> 2016;388(10046):776-786.</li>
        <li>Indian Council of Medical Research. <em>Nutrient Requirements and Recommended Dietary Allowances for Indians.</em> ICMR, 2020.</li>
        <li>Yajnik CS, Yudkin JS. The Y-Y paradox. <em>The Lancet.</em> 2004;363(9403):163.</li>
      </ol>
    </>
  );
}

export default function BMIClient() {
  return (
    <CalcLayout
      title="BMI Calculator for Indian Adults"
      subtitle="Calculate your Body Mass Index instantly. Uses Indian-adapted cutoffs recommended by ICMR for more accurate interpretation."
      icon="⚖️"
      breadcrumb="BMI Calculator"
      calculatorSlot={<BMICalculator />}
      seoContent={<SEOContent />}
      related={related}
      schema={schema}
    />
  );
}
