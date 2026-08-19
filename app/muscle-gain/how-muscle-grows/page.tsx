import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "How Muscle Grows — Hypertrophy Explained",
  description: "A complete evidence-based guide to creating and maintaining a calorie deficit for sustainable fat loss. How big a deficit, what to eat, how to preserve muscle, and common mistakes.",
};

const schema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "Calorie Deficit Explained: How to Lose Fat Without Losing Muscle",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  {
    q: "How do I know what my calorie deficit should be?",
    a: "Start by calculating your TDEE (Total Daily Energy Expenditure) using our TDEE Calculator. Then subtract 400–500 calories to create a moderate deficit. This produces approximately 0.4–0.5 kg of fat loss per week for most people. After 3–4 weeks, assess your actual rate of weight loss. If losing more than 0.75 kg/week, increase calories slightly. If not losing weight, reduce by 100–200 calories or increase activity."
  },
  {
    q: "Why is my weight not dropping even though I'm eating less?",
    a: "Several factors can mask fat loss on the scale: increased water retention (from a new exercise programme, hormonal cycle, higher sodium intake, or stress), glycogen fluctuations (carbohydrates and water are stored together in muscle), and metabolic adaptation (TDEE decreasing as body weight falls). True fat loss is a slow process. Track weekly averages over 3–4 weeks rather than daily weigh-ins to see the real trend."
  },
  {
    q: "Will eating less slow down my metabolism?",
    a: "Yes — this is called adaptive thermogenesis. Research shows that calorie restriction causes TDEE to decrease beyond what body weight loss alone would predict — the body 'defends' its weight by reducing energy expenditure. The degree of adaptation depends on deficit size and duration. Moderate deficits (300–500 cal/day) cause less adaptation than extreme restriction. Refeed days, diet breaks, and maintaining muscle mass through resistance training all help mitigate metabolic adaptation."
  },
  {
    q: "Should I do intermittent fasting for fat loss?",
    a: "Intermittent fasting (IF) can be an effective fat loss strategy for some people — but not because it has any magical metabolic properties. Research by Lowe et al. (2020) found that IF produces similar weight loss to standard calorie restriction when total calorie intake is matched. IF works for those who find it easier to maintain a calorie deficit by restricting eating to a shorter window. If you find IF sustainable and it helps you eat less, it is a valid approach. If you find it uncomfortable or it leads to overeating in the eating window, standard calorie restriction is equally effective."
  },
  {
    q: "Can I eat Indian food while in a calorie deficit?",
    a: "Absolutely. Indian food is highly compatible with a calorie deficit — many traditional Indian dishes are naturally high in fibre, vegetables, legumes, and spices that support satiety. Key adjustments include: reducing oil in cooking (most Indian recipes use 2–4× more oil than needed), choosing dal-based dishes over heavy cream-based curries, controlling rice and roti portions, using low-fat dairy, and being mindful of calorie-dense snacks like namkeen, samosas, and mithai."
  },
];

export default function CalorieDeficitExplainedPage() {
  return (
    <ArticleLayout
      title="Calorie Deficit Explained: How to Lose Fat Without Losing Muscle"
      category="Weight Loss"
      categoryHref="/weight-loss"
      readTime="9 min"
      lastUpdated="January 2025"
      summary="A calorie deficit — eating fewer calories than you burn — is the only scientifically validated method for fat loss. A moderate deficit of 400–500 calories per day produces sustainable fat loss of approximately 0.4–0.5 kg per week while minimising muscle loss. Combine the deficit with high protein intake (1.8–2.2g/kg) and resistance training to preserve lean mass. Use our Calorie Deficit Calculator to find your personalised daily target."
      relatedCalculators={[
        { name: "Calorie Deficit", href: "/calculators/calorie-deficit", icon: "📉" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
        { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
      ]}
      relatedArticles={[
        { title: "Why You're Not Losing Weight", href: "/weight-loss/why-not-losing-weight", time: "10 min" },
        { title: "Best Diet for Fat Loss", href: "/weight-loss/best-diet-fat-loss", time: "11 min" },
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
      ]}
      schema={schema}
    >
      <h2>The Energy Balance Equation: The Foundation of Fat Loss</h2>
      <p>Fat loss is governed by a straightforward physiological principle: when your body receives less energy (calories) than it expends, it must draw on stored energy reserves to make up the difference. The primary stored energy source is adipose tissue — body fat.</p>
      <p>This is the energy balance equation:</p>
      <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1.25rem 1.5rem", margin: "1rem 0", fontFamily: "var(--font-mono)", fontSize: "0.9rem", border: "1.5px solid var(--color-border)", lineHeight: 2 }}>
        <div><strong>Energy In (calories consumed)</strong> vs <strong>Energy Out (calories burned)</strong></div>
        <div>Energy In &lt; Energy Out → Calorie Deficit → Body Burns Stored Fat</div>
        <div>Energy In = Energy Out → Maintenance → Weight Stays Stable</div>
        <div>Energy In &gt; Energy Out → Calorie Surplus → Body Stores Energy (fat or muscle)</div>
      </div>
      <p>Every legitimate, evidence-based approach to fat loss — low carb, intermittent fasting, Mediterranean diet, high protein diet — works through this mechanism. The diet creates a calorie deficit. There are no exceptions. What differs between approaches is how the deficit is created, how sustainable it is, and how well it preserves muscle mass.</p>

      <h2>How Big Should Your Calorie Deficit Be?</h2>
      <p>One kilogram of body fat stores approximately 7,700 kilocalories of energy. To lose 0.5 kg of fat per week, you need a weekly deficit of approximately 3,850 calories — or 550 calories per day.</p>
      <p>However, in practice, the relationship between deficit size and fat loss is not perfectly linear because:</p>
      <ul>
        <li>Some weight lost is water and glycogen, not pure fat (particularly in the first 1–2 weeks)</li>
        <li>Metabolic adaptation reduces TDEE as the deficit persists</li>
        <li>Larger deficits cause proportionally more lean mass loss</li>
      </ul>
      <table>
        <thead><tr><th>Deficit Size</th><th>Expected Fat Loss</th><th>Muscle Risk</th><th>Recommended For</th></tr></thead>
        <tbody>
          <tr><td>200–300 kcal/day</td><td>~0.2–0.25 kg/week</td><td>Very low</td><td>Athletes, lean individuals</td></tr>
          <tr><td>400–500 kcal/day</td><td>~0.4–0.5 kg/week</td><td>Low</td><td>Most people — optimal balance</td></tr>
          <tr><td>500–750 kcal/day</td><td>~0.5–0.75 kg/week</td><td>Moderate</td><td>Those with significant excess fat</td></tr>
          <tr><td>750–1000 kcal/day</td><td>~0.75–1 kg/week</td><td>High</td><td>Medical supervision only</td></tr>
        </tbody>
      </table>

      <h2>The Muscle Loss Problem: Why Deficit Size Matters</h2>
      <p>The most common mistake in fat loss is creating too large a deficit. When the body is severely under-fuelled, it increasingly catabolises lean muscle tissue for energy — not just fat. Research by Helms et al. (2014) found that protein intakes of 2.3–3.1 g/kg of lean body mass significantly reduced lean mass loss during aggressive deficits in lean individuals.</p>
      <p>Three strategies consistently shown by research to preserve muscle mass during a calorie deficit:</p>
      <ol>
        <li><strong>High protein intake:</strong> 1.8–2.4g/kg body weight (or 2.3–3.1g/kg lean body mass) minimises muscle protein breakdown and maximises fat as the fuel source for the deficit</li>
        <li><strong>Resistance training:</strong> Continuing to train with weights while in a deficit sends a powerful signal to preserve muscle tissue. Research by Stiegler and Cunliffe (2006) found resistance training during calorie restriction significantly reduced lean mass loss compared to calorie restriction alone</li>
        <li><strong>Moderate deficit size:</strong> Deficits of 400–500 kcal/day preserve lean mass far better than extreme restriction</li>
      </ol>

      <h2>Practical Guide: Creating Your Calorie Deficit on an Indian Diet</h2>
      <h3>Step 1: Find Your TDEE</h3>
      <p>Use our <a href="/calculators/tdee" style={{ color: "var(--color-brand)" }}>TDEE Calculator</a> to estimate how many calories you burn daily. This becomes your maintenance baseline.</p>

      <h3>Step 2: Set Your Deficit Target</h3>
      <p>Subtract 400–500 calories from your TDEE. Use our <a href="/calculators/calorie-deficit" style={{ color: "var(--color-brand)" }}>Calorie Deficit Calculator</a> for a personalised breakdown including your macro targets.</p>

      <h3>Step 3: Prioritise Protein at Every Meal</h3>
      <p>Build every meal around a protein source. In the Indian context, this means:</p>
      <ul>
        <li><strong>Breakfast:</strong> Eggs, paneer, or curd instead of purely carbohydrate-based options</li>
        <li><strong>Lunch:</strong> Double the dal portion, add a protein side</li>
        <li><strong>Dinner:</strong> Ensure a substantial protein source is the centrepiece</li>
      </ul>

      <h3>Step 4: Reduce Calories Without Sacrificing Nutrition</h3>
      <p>Practical Indian-specific calorie reduction strategies:</p>
      <ul>
        <li>Halve cooking oil — most Indian recipes use 2–4× more oil than needed. Switching from 4 tbsp to 2 tbsp saves 240 calories per dish</li>
        <li>Replace full-fat dairy with low-fat versions (toned milk, low-fat curd)</li>
        <li>Increase vegetable volume in dals, sabzis, and rice dishes — vegetables are very low calorie and increase meal satiety</li>
        <li>Reduce portions of rice and roti by 20–30%, not eliminate them</li>
        <li>Minimise calorie-dense snacks: namkeen, biscuits, mithai, and fried snacks are the biggest hidden calorie sources in Indian diets</li>
        <li>Drink water before meals — research shows this modestly reduces calorie intake at the meal</li>
      </ul>

      <h2>Tracking Your Deficit: The Most Reliable Methods</h2>
      <p>Consistent self-monitoring is one of the most evidence-supported behaviours for successful fat loss. Research by Burke et al. (2011) found that self-monitoring of food intake was one of the strongest predictors of successful weight management outcomes.</p>
      <ul>
        <li><strong>Food diary app:</strong> Apps like MyFitnessPal have an Indian food database — log meals for at least 4 weeks to understand your intake patterns</li>
        <li><strong>Weekly weigh-in average:</strong> Weigh yourself daily (same time, same conditions — ideally morning, after bathroom) and take the weekly average. Track averages, not daily fluctuations</li>
        <li><strong>Waist measurement:</strong> Waist circumference change is a better indicator of fat loss (especially visceral fat) than scale weight alone</li>
      </ul>

      <h2>Metabolic Adaptation: Why Fat Loss Slows Over Time</h2>
      <p>A consistent challenge in fat loss is metabolic adaptation — the body's response to calorie restriction that reduces energy expenditure over time. Research by Trexler et al. (2014) described adaptive thermogenesis as a significant obstacle in prolonged fat loss attempts.</p>
      <p>Strategies to manage metabolic adaptation:</p>
      <ul>
        <li><strong>Refeed days:</strong> Periodically eating at maintenance calories (1–2 days per week) can temporarily restore leptin levels and reduce psychological diet fatigue</li>
        <li><strong>Diet breaks:</strong> Planned 1–2 week periods eating at maintenance after 6–12 weeks of deficit can partially reverse metabolic adaptation</li>
        <li><strong>Preserve muscle mass:</strong> Muscle tissue is metabolically active. Every kilogram of muscle retained preserves approximately 13–15 kcal/day of resting metabolism</li>
        <li><strong>Recalculate TDEE:</strong> Every 4–6 weeks, recalculate your TDEE at your new (lower) body weight and adjust calories accordingly</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <FAQ items={faqs} />

      <h2>References</h2>
      <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
        <li>Hall KD et al. Energy balance and its components: implications for body weight regulation. <em>Am J Clin Nutr.</em> 2012;95(4):989-994.</li>
        <li>Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. <em>Int J Sport Nutr Exerc Metab.</em> 2014;24(2):127-138.</li>
        <li>Trexler ET et al. Metabolic adaptation to weight loss: implications for the athlete. <em>J Int Soc Sports Nutr.</em> 2014;11(1):7.</li>
        <li>Stiegler P, Cunliffe A. The role of diet and exercise for the maintenance of fat-free mass and resting metabolic rate. <em>Sports Med.</em> 2006;36(3):239-262.</li>
        <li>Lowe DA et al. Effects of time-restricted eating on weight loss and other metabolic parameters in women and men. <em>JAMA Intern Med.</em> 2020;180(11):1491-1499.</li>
      </ol>
    </ArticleLayout>
  );
}
