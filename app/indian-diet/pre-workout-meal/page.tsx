import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "What to Eat Before a Workout: Indian Pre-Workout Meal Guide";
const DESC = "What to eat before training for energy without stomach discomfort, with Indian meal and snack examples for different timing windows.";

export const metadata: Metadata = {
  alternates: { canonical: "/indian-diet/pre-workout-meal" },
  title: "Pre-Workout Meal Guide — Indian Foods",
  description: DESC,
  keywords: ["pre workout meal Indian food", "what to eat before gym India", "pre workout snack India"],
};

const faqs = [
  { q: "How long before a workout should I eat?", a: "A full meal is best eaten 2–3 hours before training. If you're eating closer to your session (30–60 minutes before), keep it smaller and lower in fat and fibre to avoid stomach discomfort." },
  { q: "Should I train on an empty stomach?", a: "It's not necessary for most goals, but some people prefer fasted training and tolerate it fine, especially for lower-intensity sessions. For strength training or longer, harder sessions, some pre-workout carbohydrate generally supports better performance." },
  { q: "What Indian snack works well 30–60 minutes before the gym?", a: "A banana, a small bowl of poha, or a slice of toast with honey are all easy-to-digest carbohydrate options that won't sit heavy before training." },
  { q: "Should I eat protein before a workout?", a: "It's not essential right before training — total daily protein intake matters far more than pre-workout timing specifically. A small amount alongside carbs is fine if it doesn't cause discomfort." },
];

const references = [
  "Aragon AA, Schoenfeld BJ. Nutrient timing revisited: is there a post-exercise anabolic window? J Int Soc Sports Nutr. 2013;10:5.",
  "Kerksick CM et al. International Society of Sports Nutrition Position Stand: nutrient timing. J Int Soc Sports Nutr. 2017;14:33.",
];

export default function PreWorkoutMealPage() {
  return (
    <ArticleLayout
      title="What to Eat Before a Workout (Indian Foods)"
      category="Indian Diet"
      categoryHref="/indian-diet"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Eat a full meal 2–3 hours before training, or a small, easy-to-digest carbohydrate snack 30–60 minutes before. The goal is enough energy to train well without stomach discomfort — total daily protein intake matters more than timing it precisely around your workout."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
      ]}
      relatedArticles={[
        { title: "What to Eat After a Workout", href: "/indian-diet/post-workout-meal", time: "7 min" },
        { title: "How Much Protein Do You Need?", href: "/nutrition/how-much-protein", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/indian-diet/pre-workout-meal", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Pre-Workout Nutrition Matters</h2>
      <p>Carbohydrate eaten before training tops up muscle glycogen, the fuel your muscles draw on during resistance training and higher-intensity cardio. Eating something appropriate beforehand — matched to how much time you have — helps you train harder without the energy dips or stomach discomfort of eating either too much or too little too close to your session.</p>

      <h2>Timing Windows</h2>
      <table>
        <thead><tr><th>Time before training</th><th>What to eat</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>2–3 hours</td><td>A full, balanced meal</td><td>Rice, dal, vegetables, a protein source</td></tr>
          <tr><td>60–90 minutes</td><td>A lighter meal, less fat and fibre</td><td>Poha, a roti with a light sabzi</td></tr>
          <tr><td>30–60 minutes</td><td>A small, fast-digesting snack</td><td>Banana, toast with honey, a few dates</td></tr>
          <tr><td>Under 30 minutes</td><td>Optional, only if genuinely needed</td><td>A few sips of a sports drink or a small fruit</td></tr>
        </tbody>
      </table>

      <h2>Indian Pre-Workout Meal Ideas</h2>
      <ul>
        <li><strong>2–3 hours before:</strong> Rice or roti, dal, a vegetable sabzi, and a small portion of protein (egg, paneer or chicken)</li>
        <li><strong>60–90 minutes before:</strong> Poha or upma with peanuts, or idli with sambar</li>
        <li><strong>30–60 minutes before:</strong> Banana with a few soaked almonds, or a slice of toast with honey</li>
      </ul>

      <h2>What to Avoid Right Before Training</h2>
      <ul>
        <li>Heavy, oily or fried food close to a session — slow digestion, and can cause discomfort under load</li>
        <li>Large amounts of raw vegetables or high-fibre food right before training, which can cause bloating</li>
        <li>Very large meals with little time to digest before you start moving</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Match the size and type of your pre-workout meal to how much time you have before training. Further out, eat a normal balanced meal; closer to training, keep it small, carbohydrate-focused, and easy to digest.</p>
    </ArticleLayout>
  );
}
