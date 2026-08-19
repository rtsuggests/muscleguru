import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Best Indian Protein Sources — Food List",
  description: "What does the science actually say about daily protein requirements? Evidence-based protein recommendations for muscle gain, fat loss, and general health for Indian adults.",
};

const schema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "How Much Protein Do You Need Per Day?",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  { q: "Is 1g of protein per pound of body weight necessary?", a: "This popular rule (approximately 2.2g/kg) sits at the upper end of evidence-based recommendations. Research by Morton et al. (2018) found the optimal range plateaus at around 1.62g/kg for most natural trainees. The 1g/lb rule is not harmful and provides a convenient overestimate that ensures needs are met, but it is not strictly necessary for most people. Targeting 1.6–2.0g/kg is sufficient for the majority of recreational lifters." },
  { q: "Does eating more protein than needed cause fat gain?", a: "Research suggests that excess protein calories are less likely to be stored as fat compared to excess carbohydrate or fat calories, due to protein's high thermic effect (approximately 25–30% of protein calories are burned during digestion). A study by Antonio et al. (2014) found that experienced lifters consuming very high protein diets (4.4g/kg) did not gain more fat than a control group consuming normal protein. However, total calorie surplus is still the primary driver of fat gain." },
  { q: "How much protein can the body absorb in one meal?", a: "The concept of a 20–40g per meal 'ceiling' is a simplification. The body can absorb and utilise protein from larger meals — it simply does so more slowly. What research does support is that approximately 0.4g/kg per meal is sufficient to maximally stimulate muscle protein synthesis acutely. Distributing protein across 3–4 meals optimises the frequency of this anabolic stimulus throughout the day." },
  { q: "Do older adults need more protein?", a: "Yes. Research consistently shows that older adults (65+) experience anabolic resistance — a reduced muscle protein synthesis response to the same protein dose. The PROT-AGE Study Group recommends 1.0–1.2g/kg for healthy older adults, and 1.2–1.5g/kg for those who exercise. Higher leucine content per meal is also beneficial for older adults to overcome this anabolic resistance." },
  { q: "Should I base protein intake on total weight or lean body mass?", a: "For most people, using total body weight is simpler and works fine. For individuals who are significantly overweight (BMI 30+), using lean body mass (LBM) for protein calculations avoids overestimating requirements — since fat tissue has minimal protein turnover. Calculate your LBM using our calculator, then multiply by 2.0–2.4g for an accurate target." },
];

export default function HowMuchProteinPage() {
  return (
    <ArticleLayout
      title="How Much Protein Do You Need Per Day? The Evidence-Based Answer"
      category="Nutrition"
      categoryHref="/nutrition"
      readTime="7 min"
      lastUpdated="January 2025"
      summary="For most active adults, research supports 1.6–2.2g of protein per kg of body weight per day for muscle gain and fat loss. Sedentary adults need a minimum of 0.8g/kg (the RDA). The sweet spot for most Indian gym-goers is approximately 1.8–2.0g/kg — achievable through a well-planned Indian diet with or without supplements."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Lean Body Mass", href: "/calculators/lean-body-mass", icon: "🫀" },
        { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
      ]}
      relatedArticles={[
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
        { title: "Creatine Guide for Indian Beginners", href: "/supplements/creatine-guide", time: "10 min" },
        { title: "Muscle Gain Diet for Indians", href: "/muscle-gain/muscle-gain-diet-india", time: "11 min" },
      ]}
      schema={schema}
    >
      <h2>The Official Recommendation vs. The Fitness Reality</h2>
      <p>The government's Recommended Dietary Allowance (RDA) for protein — set by the Indian Council of Medical Research (ICMR) and aligned with WHO guidelines — is <strong>0.8g per kg of body weight per day</strong> for sedentary adults. For a 70kg person, that is just 56g of protein daily.</p>
      <p>This number is widely misunderstood. The RDA is the minimum intake required to prevent deficiency in a sedentary population — it is not an optimal target for anyone who exercises, wants to build muscle, preserve lean mass during fat loss, or age healthily. Using the RDA as a fitness target is like using the minimum wage as your career salary goal.</p>
      <p>For physically active individuals, the evidence-based optimal range is substantially higher — and the difference matters significantly for body composition outcomes.</p>

      <h2>What the Research Actually Says</h2>
      <p>The most comprehensive analysis of protein requirements for muscle gain is a systematic review and meta-analysis by Morton et al., published in the <em>British Journal of Sports Medicine</em> in 2018. The study pooled data from 49 randomised controlled trials involving 1,863 participants and found:</p>
      <ul>
        <li>Protein supplementation significantly increased muscle mass gains from resistance training</li>
        <li>The anabolic response to protein plateaued at approximately <strong>1.62g per kg of body weight per day</strong></li>
        <li>The upper 95% confidence interval was 2.2g/kg — suggesting this as a safe upper target</li>
        <li>Beyond 2.2g/kg, no additional muscle gain benefit was observed</li>
      </ul>
      <p>For fat loss phases, research suggests higher protein intakes are beneficial for muscle preservation. A study by Helms et al. in the <em>International Journal of Sport Nutrition and Exercise Metabolism</em> found that protein intakes of 1.8–2.7g/kg in lean individuals undergoing calorie restriction were associated with superior lean mass retention compared to lower intakes.</p>

      <h2>Protein Requirements by Goal: Evidence-Based Targets</h2>
      <table>
        <thead><tr><th>Goal</th><th>Recommended Intake</th><th>For 60kg person</th><th>For 75kg person</th><th>For 90kg person</th></tr></thead>
        <tbody>
          <tr><td>Sedentary / general health</td><td>0.8–1.0 g/kg</td><td>48–60g</td><td>60–75g</td><td>72–90g</td></tr>
          <tr><td>Recreational exercise (2–3×/week)</td><td>1.2–1.4 g/kg</td><td>72–84g</td><td>90–105g</td><td>108–126g</td></tr>
          <tr><td>Muscle gain / hypertrophy</td><td>1.6–2.2 g/kg</td><td>96–132g</td><td>120–165g</td><td>144–198g</td></tr>
          <tr><td>Fat loss (muscle preservation)</td><td>1.8–2.4 g/kg</td><td>108–144g</td><td>135–180g</td><td>162–216g</td></tr>
          <tr><td>Endurance athletes</td><td>1.2–1.6 g/kg</td><td>72–96g</td><td>90–120g</td><td>108–144g</td></tr>
          <tr><td>Older adults (65+)</td><td>1.0–1.2 g/kg</td><td>60–72g</td><td>75–90g</td><td>90–108g</td></tr>
        </tbody>
      </table>

      <h2>Why Higher Protein During Fat Loss?</h2>
      <p>When eating in a calorie deficit, the body is in a catabolic environment — it must break down stored energy to meet its needs. Without sufficient protein and resistance training, a significant portion of the weight lost can come from lean muscle tissue rather than fat alone.</p>
      <p>Higher protein intake during fat loss serves three key functions supported by research:</p>
      <ul>
        <li><strong>Muscle preservation:</strong> Adequate amino acids from dietary protein reduce muscle protein breakdown. Research by Pasiakos et al. (2013) found that protein intakes of 1.6g/kg and 2.4g/kg preserved significantly more lean mass than 0.8g/kg during a 21-day energy deficit.</li>
        <li><strong>Increased satiety:</strong> Protein is the most satiating macronutrient. Studies show that higher protein diets significantly reduce hunger, spontaneous calorie intake, and late-night snacking — making a calorie deficit much easier to maintain.</li>
        <li><strong>Higher thermic effect:</strong> Approximately 25–30% of protein calories are burned during digestion and metabolism (compared to 5–10% for carbohydrates and 0–3% for fat). This means a high-protein diet has a meaningful metabolic advantage during fat loss.</li>
      </ul>

      <h2>Protein Timing: When to Eat It</h2>
      <p>Total daily protein intake is the primary variable. However, distribution across meals also matters. Research by Areta et al. (2013) showed that consuming protein in approximately equal doses across 3–5 meals per day was superior to consuming the same total in fewer, larger doses for sustaining muscle protein synthesis.</p>
      <p>A practical evidence-based approach:</p>
      <ul>
        <li>Aim for 25–40g of protein per meal across 3–4 meals</li>
        <li>Include a protein-rich food at breakfast — a commonly skipped opportunity in Indian dietary patterns</li>
        <li>A protein-rich snack or meal within 2–3 hours of training is a reasonable practice</li>
        <li>A casein-rich food before bed (milk, paneer, curd) may support overnight muscle protein synthesis — research by Res et al. (2012) supports pre-sleep protein for recovery</li>
      </ul>

      <h2>How to Hit Your Protein Target on an Indian Diet</h2>
      <p>The most common obstacle for Indian fitness enthusiasts is that traditional Indian meals are structured around carbohydrate staples — rice, roti, dal — with protein playing a secondary role. Here are practical strategies:</p>
      <ul>
        <li><strong>Make protein the centre of every meal</strong>, not a side dish. Build the meal around an egg, paneer portion, dal serving, or soya preparation first, then add carbs around it.</li>
        <li><strong>Increase dal portions</strong>. Most Indians eat a small katori of dal. Doubling or tripling the serving size meaningfully increases protein at minimal extra cost.</li>
        <li><strong>Use soya chunks</strong> as a regular protein source — they are by far the most protein-dense affordable plant food in India.</li>
        <li><strong>Add eggs wherever possible</strong>. Boiled eggs as a snack, egg bhurji at breakfast, or egg curry for dinner are all extremely protein-efficient options.</li>
        <li><strong>Supplement strategically</strong>. If whole food sources alone cannot meet targets (common for vegetarians with high requirements), whey or soy protein powder is a practical, safe, and evidence-backed supplement.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <FAQ items={faqs} />

      <h2>References</h2>
      <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
        <li>Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass. <em>Br J Sports Med.</em> 2018;52(6):376-384.</li>
        <li>Helms ER et al. A systematic review of dietary protein during caloric restriction. <em>Int J Sport Nutr Exerc Metab.</em> 2014;24(2):127-138.</li>
        <li>Areta JL et al. Timing and distribution of protein ingestion during prolonged recovery from resistance exercise. <em>J Physiol.</em> 2013;591(9):2319-2331.</li>
        <li>Pasiakos SM et al. Effects of high-protein diets on fat-free mass and muscle protein synthesis. <em>FASEB J.</em> 2013;27(9):3837-3847.</li>
        <li>Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. <em>J Int Soc Sports Nutr.</em> 2017;14:20.</li>
      </ol>
    </ArticleLayout>
  );
}
