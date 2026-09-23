import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "What to Eat After a Workout: Indian Post-Workout Meal Guide";
const DESC = "What to eat after training to support recovery and muscle growth, with Indian vegetarian and non-vegetarian meal examples and how important timing really is.";

export const metadata: Metadata = {
  alternates: { canonical: "/indian-diet/post-workout-meal" },
  title: "Post-Workout Meal Guide — Indian Foods",
  description: DESC,
  keywords: ["post workout meal Indian food", "what to eat after gym India", "recovery meal after workout"],
};

const faqs = [
  { q: "Do I need to eat immediately after a workout?", a: "No — the 'anabolic window' of needing protein within 30 minutes is largely a myth for most people. Research shows the window for meaningful benefit is several hours wide, not 30 minutes. Eating a good meal within about 2 hours is sufficient for most goals." },
  { q: "How much protein should I eat after training?", a: "20–40 g of protein in your post-workout meal is a reasonable target, though your total protein intake across the day matters more than this single meal." },
  { q: "Do I need carbs after a workout?", a: "Carbohydrate helps replenish muscle glycogen used during training, which matters more if you train again within 24 hours or do endurance training. For general strength training a few times a week, it's helpful but not critical to time precisely." },
  { q: "What's a good vegetarian post-workout meal in India?", a: "Paneer or soya chunks with rice and dal, a bowl of curd with fruit, or a protein shake with banana are all solid, practical options." },
];

const references = [
  "Aragon AA, Schoenfeld BJ. Nutrient timing revisited: is there a post-exercise anabolic window? J Int Soc Sports Nutr. 2013;10:5.",
  "Schoenfeld BJ, Aragon A. Is there a postworkout anabolic window of opportunity for nutrient consumption? J Orthop Sports Phys Ther. 2018;48(12):911–914.",
  "Kerksick CM et al. International Society of Sports Nutrition Position Stand: nutrient timing. J Int Soc Sports Nutr. 2017;14:33.",
];

export default function PostWorkoutMealPage() {
  return (
    <ArticleLayout
      title="What to Eat After a Workout (Indian Foods)"
      category="Indian Diet"
      categoryHref="/indian-diet"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Eat a meal with 20–40 g of protein and some carbohydrate within about 2 hours of training. The '30-minute anabolic window' is largely a myth — research shows the real window for benefit is several hours wide, so what matters more is your total daily protein intake."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "What to Eat Before a Workout", href: "/indian-diet/pre-workout-meal", time: "7 min" },
        { title: "How Much Protein Do You Need?", href: "/nutrition/how-much-protein", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/indian-diet/post-workout-meal", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>The "Anabolic Window" Myth</h2>
      <p>A popular belief holds that you must eat protein within 30 minutes of finishing a workout or lose most of the training benefit. Research reviewing this claim has found the actual window is much wider — likely several hours — meaning a good meal within roughly 2 hours of training covers nearly all of the practical benefit. What matters most is still your total protein intake across the whole day.</p>

      <h2>What to Include</h2>
      <ul>
        <li><strong>Protein (20–40 g):</strong> supports muscle repair and growth. Sources: paneer, chicken, eggs, soya chunks, dal, a protein shake.</li>
        <li><strong>Carbohydrate:</strong> replenishes muscle glycogen used during training, especially useful if you train again the next day. Sources: rice, roti, fruit, potatoes.</li>
        <li><strong>Fluids:</strong> replace what you sweated out, particularly after a hard or hot session.</li>
      </ul>

      <h2>Indian Post-Workout Meal Ideas</h2>
      <table>
        <thead><tr><th>Option</th><th>Approx. protein</th></tr></thead>
        <tbody>
          <tr><td>Rice, dal, paneer or chicken, vegetables</td><td>25–35 g</td></tr>
          <tr><td>Curd with banana and a handful of nuts</td><td>10–15 g</td></tr>
          <tr><td>Soya chunks curry with roti</td><td>25–30 g</td></tr>
          <tr><td>Whey or plant protein shake with milk and a banana</td><td>25–30 g</td></tr>
          <tr><td>Egg bhurji with 2 roti</td><td>20–25 g</td></tr>
        </tbody>
      </table>

      <h2>Does Timing Matter at All?</h2>
      <p>It matters somewhat, but far less than most gym-culture advice suggests. If you're able to eat a proper meal within about 2 hours of training, you're covering essentially all of the timing-related benefit. The bigger lever, by far, is hitting your total daily protein target — the meals you eat the rest of the day matter more than the exact minute you eat after your workout.</p>

      <h2>The Bottom Line</h2>
      <p>Don't stress about eating within 30 minutes. Eat a balanced meal with adequate protein and some carbohydrate within a couple of hours of training, and focus most of your attention on hitting your total daily protein and calorie targets.</p>
    </ArticleLayout>
  );
}
