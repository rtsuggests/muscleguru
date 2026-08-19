import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Push Pull Legs Plan India — 6-Day PPL",
  description: "A complete, practical nutrition framework for building muscle on an Indian diet. Calorie targets, protein sources, sample meal plans for vegetarian and non-vegetarian Indians.",
};

const schema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "Muscle Gain Diet for Indians: A Practical Nutrition Framework",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  {
    q: "How many calories should I eat to build muscle in India?",
    a: "To build muscle you need to eat in a calorie surplus — more than your Total Daily Energy Expenditure (TDEE). Research supports a modest surplus of 200–400 calories per day above TDEE for most natural trainees. This 'lean bulk' approach maximises muscle gain while minimising fat accumulation. Use our TDEE Calculator to find your maintenance calories, then add 200–400 kcal. Aggressive surpluses above 500 kcal/day primarily result in excess fat gain for most people."
  },
  {
    q: "Can I build muscle on a pure vegetarian Indian diet without supplements?",
    a: "Yes, entirely possible. A well-planned vegetarian Indian diet using soya chunks (52g protein/100g dry), paneer (18g/100g), dals, milk, eggs if acceptable, and Greek yogurt can meet protein targets of 1.6–2.2g/kg without any supplements. The key is intentional planning — protein must be a central focus at every meal rather than an afterthought. Many successful natural athletes have built excellent physiques on vegetarian Indian diets."
  },
  {
    q: "Is rice and roti bad for muscle gain?",
    a: "No. Rice and roti are carbohydrate-rich foods that serve as the primary fuel source for high-intensity resistance training. Carbohydrates replenish muscle glycogen — the stored glucose that powers your workouts. Eliminating rice and roti while trying to train hard will impair workout performance and recovery. The key is portion management and ensuring protein needs are met alongside adequate carbohydrates, not eliminating any macronutrient."
  },
  {
    q: "How much weight should I gain per month when building muscle?",
    a: "For natural trainees, realistic muscle gain rates are approximately 1–2 kg per month in the first year of training, slowing to 0.5–1 kg per month in subsequent years. If you are gaining more than 2–3 kg per month consistently, much of that gain is likely fat rather than muscle. Total weight gain on a lean bulk should be slow and controlled — approximately 0.25–0.5 kg per week."
  },
  {
    q: "Should I eat before or after a workout for muscle gain?",
    a: "Both matter, but total daily intake is more important than precise timing. Eating a protein-containing meal 1.5–2 hours before training provides amino acids during the workout. Consuming protein within 2 hours after training supports muscle protein synthesis during the recovery window. A practical approach: eat a normal mixed meal 1–2 hours before training, and ensure your post-workout meal is protein-rich. If training early morning, a small protein snack pre-workout and a full meal within 60–90 minutes post-workout works well."
  },
  {
    q: "Is ghee good or bad for muscle building?",
    a: "Ghee is a calorie-dense fat source (approximately 900 kcal per 100g) that is neither particularly beneficial nor harmful for muscle building in moderate amounts. It provides fat-soluble vitamins and butyric acid. In a muscle gain phase where higher calories are beneficial, small amounts of ghee can contribute to calorie targets. During fat loss, portion control is important given its high calorie density. Ghee does not have special muscle-building properties beyond its calorie and fat contribution."
  },
];

export default function MuscleGainDietPage() {
  return (
    <ArticleLayout
      title="Muscle Gain Diet for Indians: A Practical Nutrition Framework"
      category="Muscle Gain"
      categoryHref="/muscle-gain"
      readTime="11 min"
      lastUpdated="January 2025"
      summary="To build muscle on an Indian diet: eat 200–400 calories above your TDEE, consume 1.8–2.2g of protein per kg of body weight daily, distribute protein across 4–5 meals, keep carbohydrates high to fuel training, and eat adequate healthy fats. Soya chunks, paneer, eggs, dal, chicken, and milk are the best Indian protein foundations. Consistency over 3–6 months produces visible, measurable results."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
        { name: "Lean Body Mass", href: "/calculators/lean-body-mass", icon: "🫀" },
      ]}
      relatedArticles={[
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
        { title: "Push Pull Legs Routine", href: "/muscle-gain/push-pull-legs", time: "11 min" },
        { title: "How Muscle Growth Works", href: "/muscle-gain/how-muscle-grows", time: "8 min" },
      ]}
      schema={schema}
    >
      <h2>The Three Non-Negotiable Pillars of Muscle Gain Nutrition</h2>
      <p>Building muscle requires three nutritional conditions to be met simultaneously. Miss any one of them and progress stalls regardless of training quality:</p>
      <ul>
        <li><strong>Calorie surplus:</strong> Muscle tissue synthesis requires energy. You cannot build significant new muscle in a prolonged calorie deficit — the body prioritises survival over growth when under-fuelled.</li>
        <li><strong>Sufficient protein:</strong> Amino acids from dietary protein are the structural building blocks of muscle tissue. Without adequate protein, training stimulus cannot be converted into new muscle.</li>
        <li><strong>Consistent resistance training:</strong> Nutrition without training produces fat gain, not muscle. The training stimulus is what signals the body to use the calorie surplus and protein for muscle construction rather than fat storage.</li>
      </ul>

      <h2>Step 1: Calculate Your Calorie Target for Muscle Gain</h2>
      <p>Start by finding your TDEE (Total Daily Energy Expenditure) — the number of calories your body burns per day at your current activity level. Use our <a href="/calculators/tdee" style={{ color: "var(--color-brand)" }}>TDEE Calculator</a> for an accurate estimate.</p>
      <p>For muscle gain, add a lean bulk surplus on top of your TDEE:</p>
      <table>
        <thead><tr><th>Surplus Size</th><th>Weekly Weight Gain</th><th>Best For</th><th>Risk</th></tr></thead>
        <tbody>
          <tr><td>+100–200 kcal/day</td><td>~0.1–0.15 kg/week</td><td>Very lean individuals, minimising fat</td><td>Very slow progress</td></tr>
          <tr><td>+200–300 kcal/day</td><td>~0.2–0.25 kg/week</td><td>Most people — best balance</td><td>Low</td></tr>
          <tr><td>+300–500 kcal/day</td><td>~0.3–0.4 kg/week</td><td>Underweight, fast metabolism</td><td>Moderate fat gain</td></tr>
          <tr><td>+500+ kcal/day</td><td>~0.5+ kg/week</td><td>Not recommended for most</td><td>High fat accumulation</td></tr>
        </tbody>
      </table>
      <p>Research by Barakat et al. (2020) confirms that modest surpluses support muscle gain while minimising unnecessary fat accumulation in natural trainees. The common belief that you must "eat big to get big" leads to excessive fat gain that requires long cutting phases to undo.</p>

      <h2>Step 2: Set Your Protein Target</h2>
      <p>For muscle gain, the evidence-based target is <strong>1.6–2.2g of protein per kg of body weight per day</strong>, based on the landmark meta-analysis by Morton et al. (2018). Use our <a href="/calculators/protein" style={{ color: "var(--color-brand)" }}>Protein Calculator</a> for a personalised target.</p>
      <p>Example targets by body weight:</p>
      <table>
        <thead><tr><th>Body Weight</th><th>Protein Target (1.8g/kg)</th><th>Protein Target (2.0g/kg)</th></tr></thead>
        <tbody>
          <tr><td>55 kg</td><td>99g/day</td><td>110g/day</td></tr>
          <tr><td>65 kg</td><td>117g/day</td><td>130g/day</td></tr>
          <tr><td>75 kg</td><td>135g/day</td><td>150g/day</td></tr>
          <tr><td>85 kg</td><td>153g/day</td><td>170g/day</td></tr>
          <tr><td>95 kg</td><td>171g/day</td><td>190g/day</td></tr>
        </tbody>
      </table>

      <h2>Step 3: Build Your Macro Split</h2>
      <p>Once protein is set, distribute remaining calories between carbohydrates and fat. A practical starting point for muscle gain:</p>
      <ul>
        <li><strong>Protein:</strong> 1.8–2.2g/kg (as calculated above)</li>
        <li><strong>Carbohydrates:</strong> 4–6g/kg body weight — the primary fuel for high-intensity training and glycogen replenishment</li>
        <li><strong>Fat:</strong> 0.8–1.2g/kg — essential for hormonal health, fat-soluble vitamin absorption, and cell membrane integrity</li>
      </ul>
      <p>Carbohydrates are particularly important for muscle gain because glycogen availability directly affects training performance. Research by Burke et al. (2011) confirms that carbohydrate availability during high-intensity training significantly impacts both performance and the metabolic response to exercise.</p>

      <h2>The Best Indian Foods for Muscle Gain</h2>

      <h3>High-Protein Foundations</h3>
      <table>
        <thead><tr><th>Food</th><th>Protein per serving</th><th>Calories</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Soya chunks (50g dry)</td><td>~26g</td><td>~175 kcal</td><td>Best plant protein value in India</td></tr>
          <tr><td>Chicken breast (200g)</td><td>~62g</td><td>~330 kcal</td><td>Best non-veg protein-to-calorie ratio</td></tr>
          <tr><td>Whole eggs (3)</td><td>~19g</td><td>~216 kcal</td><td>Complete protein, excellent micronutrients</td></tr>
          <tr><td>Paneer (150g)</td><td>~27g</td><td>~397 kcal</td><td>Casein-rich — great pre-bed or between meals</td></tr>
          <tr><td>Dal (1 cup cooked, ~200g)</td><td>~16g</td><td>~230 kcal</td><td>Also high in fibre and micronutrients</td></tr>
          <tr><td>Milk (500ml)</td><td>~17g</td><td>~310 kcal</td><td>Whey + casein blend, high calcium</td></tr>
          <tr><td>Greek yogurt / hung curd (200g)</td><td>~20g</td><td>~140 kcal</td><td>High protein, low calorie — excellent for snacks</td></tr>
        </tbody>
      </table>

      <h3>Quality Carbohydrate Sources</h3>
      <ul>
        <li><strong>White rice:</strong> Easily digestible, excellent post-workout carbohydrate for glycogen replenishment. 1 cup cooked (~200g) provides ~45g carbs.</li>
        <li><strong>Whole wheat roti:</strong> 1 roti provides ~20g carbs with some fibre and B vitamins.</li>
        <li><strong>Oats:</strong> Excellent breakfast carbohydrate with beta-glucan fibre. 50g dry oats provides ~35g carbs and ~6g protein.</li>
        <li><strong>Sweet potato:</strong> Nutrient-dense complex carbohydrate. 200g provides ~40g carbs with vitamin A and potassium.</li>
        <li><strong>Banana:</strong> Convenient pre/post-workout carbohydrate. One medium banana provides ~27g carbs.</li>
      </ul>

      <h3>Healthy Fat Sources</h3>
      <ul>
        <li>Groundnuts / peanut butter (in moderation)</li>
        <li>Almonds, walnuts, cashews</li>
        <li>Ghee (small amounts)</li>
        <li>Coconut (in traditional Indian cooking)</li>
        <li>Fatty fish (surmai, salmon) for omega-3s</li>
      </ul>

      <h2>Sample Vegetarian Muscle Gain Meal Plan (75kg, ~2700 kcal, ~150g protein)</h2>
      <table>
        <thead><tr><th>Meal</th><th>Foods</th><th>Approx. Protein</th><th>Approx. Calories</th></tr></thead>
        <tbody>
          <tr><td>Breakfast (8am)</td><td>3 whole eggs scrambled + 2 rotis + 1 glass full-fat milk</td><td>~35g</td><td>~650 kcal</td></tr>
          <tr><td>Mid-morning (11am)</td><td>200g hung curd + 1 banana + handful almonds (20g)</td><td>~22g</td><td>~380 kcal</td></tr>
          <tr><td>Lunch (1:30pm)</td><td>1.5 cups rice + 1 cup chana dal + 100g paneer sabzi + salad</td><td>~42g</td><td>~750 kcal</td></tr>
          <tr><td>Pre-workout (4:30pm)</td><td>50g dry soya chunks (stir-fried) + 1 banana</td><td>~28g</td><td>~300 kcal</td></tr>
          <tr><td>Dinner (8pm)</td><td>2 rotis + 1 cup rajma + 100g low-fat paneer + curd</td><td>~38g</td><td>~650 kcal</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td><strong>~165g</strong></td><td><strong>~2730 kcal</strong></td></tr>
        </tbody>
      </table>

      <h2>Sample Non-Vegetarian Muscle Gain Meal Plan (75kg, ~2700 kcal, ~170g protein)</h2>
      <table>
        <thead><tr><th>Meal</th><th>Foods</th><th>Approx. Protein</th><th>Approx. Calories</th></tr></thead>
        <tbody>
          <tr><td>Breakfast (8am)</td><td>4 whole eggs (bhurji) + 2 rotis + 1 glass milk</td><td>~42g</td><td>~680 kcal</td></tr>
          <tr><td>Mid-morning (11am)</td><td>200g Greek yogurt + 1 fruit</td><td>~20g</td><td>~250 kcal</td></tr>
          <tr><td>Lunch (1:30pm)</td><td>200g chicken breast curry + 1.5 cups rice + dal + salad</td><td>~65g</td><td>~780 kcal</td></tr>
          <tr><td>Pre-workout snack (4:30pm)</td><td>2 boiled eggs + 1 banana</td><td>~15g</td><td>~240 kcal</td></tr>
          <tr><td>Dinner (8pm)</td><td>150g fish curry + 2 rotis + 1 cup dal + curd</td><td>~45g</td><td>~680 kcal</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td><strong>~187g</strong></td><td><strong>~2630 kcal</strong></td></tr>
        </tbody>
      </table>

      <h2>Common Muscle Gain Nutrition Mistakes</h2>
      <ul>
        <li><strong>Eating too little protein at breakfast:</strong> Many Indians eat a low-protein breakfast (poha, upma, paratha with pickle). Restructuring breakfast to include eggs, curd, or paneer significantly improves daily protein distribution.</li>
        <li><strong>Fear of carbohydrates:</strong> Cutting rice and roti while training hard leads to glycogen depletion, poor workout performance, and muscle breakdown. Carbohydrates are your training fuel.</li>
        <li><strong>Inconsistent calorie intake:</strong> Eating in a surplus on training days and a deficit on rest days limits muscle gain. Aim for consistent intake 7 days per week during a bulk phase.</li>
        <li><strong>Not tracking progress:</strong> Without tracking body weight trends over 4–6 weeks, it is impossible to know whether you are eating enough, too much, or too little. Weigh yourself daily and track the weekly average.</li>
        <li><strong>Relying on supplements before optimising food:</strong> No supplement compensates for chronically inadequate whole food nutrition. Food first, supplements after.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <FAQ items={faqs} />

      <h2>References</h2>
      <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
        <li>Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass. <em>Br J Sports Med.</em> 2018;52(6):376-384.</li>
        <li>Barakat C et al. Body Recomposition: Can Trained Individuals Build Muscle and Lose Fat Simultaneously? <em>Strength Cond J.</em> 2020;42(5):7-21.</li>
        <li>Burke LM et al. Carbohydrates for training and competition. <em>J Sports Sci.</em> 2011;29 Suppl 1:S17-27.</li>
        <li>Phillips SM, Van Loon LJC. Dietary protein for athletes. <em>J Sports Sci.</em> 2011;29 Suppl 1:S29-38.</li>
        <li>Helms ER et al. Evidence-based recommendations for natural bodybuilding contest preparation. <em>J Int Soc Sports Nutr.</em> 2014;11:20.</li>
      </ol>
    </ArticleLayout>
  );
}
