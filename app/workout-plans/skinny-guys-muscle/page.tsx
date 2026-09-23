import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Muscle Building Guide for Skinny Guys (Hardgainers) in India";
const DESC = "A practical training and diet plan for naturally thin ('hardgainer') men trying to build muscle in India, with calorie targets, a workout split and common mistakes to avoid.";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/skinny-guys-muscle" },
  title: "Muscle Building for Skinny Guys — India Guide",
  description: DESC,
  keywords: ["skinny guy build muscle India", "hardgainer workout plan", "how to gain weight muscle India"],
};

const faqs = [
  { q: "Why can't I gain muscle even though I eat a lot?", a: "Most self-described 'hardgainers' underestimate their actual calorie intake. Naturally thin people also often have higher daily movement (fidgeting, faster metabolism) and can underestimate how large a true surplus needs to be. Tracking intake for two weeks usually reveals the gap." },
  { q: "How many calories does a skinny guy need to gain muscle?", a: "Start with your TDEE plus 300–500 kcal a day. If the scale hasn't moved in 2 weeks, increase by another 200–300 kcal. Being naturally thin often just means you need a bigger, more deliberate surplus than average." },
  { q: "Should skinny guys do cardio while bulking?", a: "Light cardio for health is fine, but excessive cardio makes it harder to maintain the calorie surplus needed to gain weight. Keep it minimal and prioritise the surplus and training." },
  { q: "How long does it take to see results?", a: "Visible muscle growth typically takes 8–12 weeks of consistent training and eating, with more noticeable changes over 6 months to a year. Weight gain on the scale can show within 2–3 weeks if the surplus is right." },
];

const references = [
  "Slater G, Phillips SM. Nutrition guidelines for strength sports: sprinting, weightlifting, throwing events, and bodybuilding. J Sports Sci. 2011;29(sup1):S67–S77.",
  "Garthe I et al. Effect of nutritional intervention on body composition and performance in elite athletes. Eur J Sport Sci. 2013;13(3):295–303.",
];

export default function SkinnyGuysMusclePage() {
  return (
    <ArticleLayout
      title="Muscle Building Guide for Skinny Guys (Hardgainers)"
      category="Workout Plans"
      categoryHref="/workout-plans"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Being naturally thin usually means you need a bigger calorie surplus than you think — most 'hardgainers' simply aren't eating as much as they believe. Combine a 300–500 kcal surplus, 1.6–2.2 g/kg protein and a compound-lift training plan, and track your intake for two weeks to find out where the gap really is."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Muscle Gain Rate Calculator", href: "/calculators/muscle-gain-rate", icon: "📈" },
      ]}
      relatedArticles={[
        { title: "Muscle Gain Diet for Indians", href: "/muscle-gain/muscle-gain-diet-india", time: "8 min" },
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "How Muscle Actually Grows", href: "/muscle-gain/how-muscle-grows", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/workout-plans/skinny-guys-muscle", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why "Hardgainers" Struggle to Gain Muscle</h2>
      <p>Being naturally thin doesn't mean your body can't build muscle — it usually means the calorie surplus you think you're eating isn't actually big enough. Studies tracking self-reported versus actual intake consistently find people underestimate how much they eat, often significantly. Combine that with a fast metabolism or high daily activity from fidgeting, and the "surplus" many thin guys believe they're in is often close to maintenance.</p>

      <h2>Step 1: Find Your Real Calorie Surplus</h2>
      <p>Start at your TDEE plus 300–500 kcal a day. Track your weight weekly for 2 weeks. If it hasn't moved, you're not actually in a surplus — add another 200–300 kcal and check again. This trial-and-adjust approach is more reliable than trusting a single calculator number.</p>

      <h2>Step 2: Make Calories Easy to Eat</h2>
      <p>Large volumes of food can be genuinely hard to eat consistently for naturally thin people with smaller appetites. Calorie-dense foods make this easier:</p>
      <ul>
        <li>Peanut butter, nuts and seeds (calorie-dense, easy to add to meals)</li>
        <li>Whole milk or paneer instead of low-fat versions</li>
        <li>Rice, roti and potatoes as a base at most meals</li>
        <li>A calorie-dense shake (milk, banana, peanut butter, oats) between meals if solid food feels like too much</li>
      </ul>

      <h2>Step 3: Protein and Training</h2>
      <p>Protein target: 1.6–2.2 g/kg body weight per day. Training: a full-body plan (3 days a week) or an upper/lower split (4 days a week), built around compound lifts — squat, bench press, row, overhead press, deadlift. These recruit the most muscle mass per session and are the most efficient use of training time for a beginner or intermediate lifter trying to gain size.</p>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Doing too much cardio</strong> — it burns into the calorie surplus you're trying to maintain. Keep it light while actively trying to gain.</li>
        <li><strong>Constantly changing programmes</strong> — chasing a new workout every few weeks prevents the progressive overload that actually drives growth.</li>
        <li><strong>Giving up too early</strong> — visible changes typically take 8–12 weeks of consistency, sometimes longer. Weigh in weekly and trust the process if the scale is moving in the right direction.</li>
        <li><strong>Skipping meals when busy</strong> — a missed meal is a missed opportunity to hit the calorie target; planning ahead matters more for naturally thin people than for anyone else.</li>
      </ul>

      <h2>Sample Daily Structure (70 kg target, ~2,800–3,000 kcal)</h2>
      <ul>
        <li><strong>Breakfast:</strong> 3 eggs, 2 paratha, a glass of whole milk</li>
        <li><strong>Mid-morning:</strong> Banana, peanut butter, handful of nuts</li>
        <li><strong>Lunch:</strong> Rice, dal, paneer or chicken, vegetables, ghee</li>
        <li><strong>Post-workout:</strong> Protein shake with milk and oats</li>
        <li><strong>Dinner:</strong> Roti, chicken or soya chunks, vegetables</li>
      </ul>
      <p>Adjust portions up or down based on the weekly weigh-in trend, not how the meal feels on any single day.</p>
    </ArticleLayout>
  );
}
