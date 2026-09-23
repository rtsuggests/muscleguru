import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Muscle Gain Diet for Indians: What to Eat and How Much";
const DESC = "A complete muscle gain diet plan for Indian adults: calorie surplus, protein targets, meal timing, and Indian vegetarian and non-vegetarian food choices.";

export const metadata: Metadata = {
  alternates: { canonical: "/muscle-gain/muscle-gain-diet-india" },
  title: "Muscle Gain Diet India — What to Eat",
  description: DESC,
  keywords: ["muscle gain diet India", "bulking diet Indian food", "diet to gain muscle vegetarian"],
};

const faqs = [
  { q: "How many extra calories do I need to gain muscle?", a: "A moderate surplus of 200–300 kcal above your TDEE (total daily energy expenditure) is enough for most people. Larger surpluses speed up fat gain more than muscle gain, so a moderate, controlled surplus is the better trade-off." },
  { q: "Should I avoid carbs while trying to gain muscle?", a: "No — carbohydrates fuel training performance and help replenish muscle glycogen. Cutting carbs low while trying to gain muscle usually makes workouts weaker, which works against the goal." },
  { q: "Can vegetarians gain muscle as effectively as non-vegetarians?", a: "Yes, with planning to hit protein targets. Indian vegetarian staples — dal, paneer, curd, soya chunks, tofu — can supply enough protein when eaten across multiple meals a day." },
  { q: "How fast should I expect to gain muscle?", a: "Realistic rates are roughly 0.25–0.5 kg per week for beginners, slowing as training experience increases. Faster weight gain is mostly fat, not muscle." },
];

const references = [
  "Slater G, Phillips SM. Nutrition guidelines for strength sports: sprinting, weightlifting, throwing events, and bodybuilding. J Sports Sci. 2011;29(sup1):S67–S77.",
  "Garthe I et al. Effect of two different weight-loss rates on body composition and strength and power-related performance in elite athletes. Int J Sport Nutr Exerc Metab. 2011;21(2):97–104.",
  "Aragon AA, Schoenfeld BJ. Nutrient timing revisited: is there a post-exercise anabolic window? J Int Soc Sports Nutr. 2013;10:5.",
];

export default function MuscleGainDietIndiaPage() {
  return (
    <ArticleLayout
      title="Muscle Gain Diet for Indians"
      category="Muscle Gain"
      categoryHref="/muscle-gain"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Eat in a moderate calorie surplus (200–300 kcal above TDEE) with 1.8–2.2 g/kg protein daily. Indian sources like eggs, dal, paneer, soya chunks and chicken can cover this easily. Don't cut carbohydrates — they fuel the training that actually drives muscle growth."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Muscle Gain Rate Calculator", href: "/calculators/muscle-gain-rate", icon: "📈" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "How Muscle Actually Grows", href: "/muscle-gain/how-muscle-grows", time: "9 min" },
        { title: "How Much Protein Do You Need?", href: "/nutrition/how-much-protein", time: "7 min" },
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/muscle-gain/muscle-gain-diet-india", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>The Three Levers: Calories, Protein, Training</h2>
      <p>Muscle gain needs a consistent training stimulus, enough protein to rebuild the tissue that stimulus breaks down, and enough total calories to support growth. Diet alone won't build muscle — it supports the training, it doesn't replace it.</p>

      <h2>Step 1: A Moderate Calorie Surplus</h2>
      <p>Calculate your TDEE, then add 200–300 kcal a day. This is enough surplus to support muscle growth without adding excess fat. A much larger surplus (500+ kcal) doesn't build muscle meaningfully faster — the body can only build new tissue at a limited rate — it mostly adds fat.</p>

      <h2>Step 2: Protein Target</h2>
      <p>Aim for 1.8–2.2 g of protein per kg of body weight per day, spread across 3–4 meals. See the protein calculator for your exact number based on body weight and goal.</p>

      <h2>Indian Food Sources for a Muscle Gain Diet</h2>
      <table>
        <thead><tr><th>Food</th><th>Protein (per 100 g)</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Chicken breast</td><td>~27–31 g</td><td>Lean, versatile</td></tr>
          <tr><td>Eggs (whole)</td><td>~13 g</td><td>Complete protein, also good fats</td></tr>
          <tr><td>Paneer</td><td>~18 g</td><td>Vegetarian staple, also has fat and calories for a surplus</td></tr>
          <tr><td>Soya chunks (dry)</td><td>~50 g</td><td>Rehydrates, very cost-effective</td></tr>
          <tr><td>Dal (cooked)</td><td>~7–9 g</td><td>Pair with rice for complete amino acids</td></tr>
          <tr><td>Greek-style curd</td><td>~8–10 g</td><td>Good for a snack or breakfast</td></tr>
        </tbody>
      </table>

      <h2>Don't Cut Carbs</h2>
      <p>Carbohydrates replenish the glycogen your muscles use during training. Low-carb approaches tend to leave lifters weaker in the gym, which reduces the training stimulus that actually drives growth. Rice, roti, oats and fruit are all reasonable staples for a muscle-gain diet.</p>

      <h2>Sample Day (70 kg, moderate activity)</h2>
      <ul>
        <li><strong>Breakfast:</strong> 3 eggs, 2 roti, a bowl of curd — roughly 35 g protein</li>
        <li><strong>Lunch:</strong> 150 g paneer or chicken, dal, rice, vegetables — roughly 45 g protein</li>
        <li><strong>Snack:</strong> Soya chunks or a protein shake — roughly 25 g protein</li>
        <li><strong>Dinner:</strong> 150 g chicken or 200 g paneer, roti, vegetables — roughly 40 g protein</li>
      </ul>
      <p>This lands around 145 g protein for the day — well within the 1.8–2.2 g/kg range for a 70 kg lifter. Adjust portions to your own calorie and protein targets.</p>
    </ArticleLayout>
  );
}
