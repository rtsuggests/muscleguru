import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Best Dumbbell Exercises: A Complete Full-Body Guide";
const DESC = "A complete list of dumbbell exercises for every major muscle group, plus a sample full-body dumbbell workout for home or gym training.";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/dumbbell-exercises" },
  title: "Best Dumbbell Exercises — Full Body Guide",
  description: DESC,
  keywords: ["dumbbell exercises list", "dumbbell workout full body", "best dumbbell exercises home gym"],
};

const faqs = [
  { q: "Can I build muscle with only dumbbells?", a: "Yes. Dumbbells allow a full range of resistance training covering every major muscle group, and research doesn't show a meaningful hypertrophy disadvantage compared to barbells or machines when training is otherwise well-structured." },
  { q: "How heavy should my dumbbells be?", a: "Heavy enough that the last 1–2 reps of each set are genuinely challenging with good form, typically in the 8–15 rep range for most goals. Adjustable dumbbells are a practical way to cover a wide range without buying many pairs." },
  { q: "Are dumbbells better than a barbell?", a: "Neither is universally better — they're different tools. Dumbbells allow a greater range of motion and train each side independently, which can help address strength imbalances, while barbells generally allow heavier total loads on compound lifts." },
];

const references = [
  "Schwanbeck SR et al. Effects of training with free weights versus machines on muscle mass, strength, free testosterone, and free cortisol levels. J Strength Cond Res. 2020;34(7):1851–1859.",
];

export default function DumbbellExercisesPage() {
  return (
    <ArticleLayout
      title="Best Dumbbell Exercises: A Complete Full-Body Guide"
      category="Exercise Guides"
      categoryHref="/exercise-guides"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Dumbbells cover every major muscle group and let each side of your body work independently, which barbells and machines don't. A well-built dumbbell routine can build strength and muscle just as effectively as a fully-equipped gym for most goals."
      relatedCalculators={[
        { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
      ]}
      relatedArticles={[
        { title: "No-Equipment Home Workout Guide", href: "/beginner-fitness/home-workout-guide", time: "8 min" },
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/exercise-guides/dumbbell-exercises", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Dumbbells Are Underrated</h2>
      <p>Dumbbells are often seen as a stepping stone to "real" barbell training, but they're a complete training tool in their own right. Because each side of your body works independently, dumbbells help expose and correct strength imbalances that a barbell can mask, and they allow a fuller, more natural range of motion for many exercises.</p>

      <h2>The Complete Dumbbell Exercise List</h2>
      <table>
        <thead><tr><th>Muscle group</th><th>Exercises</th></tr></thead>
        <tbody>
          <tr><td>Chest</td><td>Flat press, incline press, flyes</td></tr>
          <tr><td>Back</td><td>Bent-over row, single-arm row, pullover</td></tr>
          <tr><td>Shoulders</td><td>Overhead press, lateral raise, front raise, rear delt fly</td></tr>
          <tr><td>Arms</td><td>Bicep curl, hammer curl, triceps extension, triceps kickback</td></tr>
          <tr><td>Legs</td><td>Goblet squat, Romanian deadlift, walking lunge, step-up</td></tr>
          <tr><td>Core</td><td>Weighted plank, Russian twist, dumbbell side bend</td></tr>
        </tbody>
      </table>

      <h2>Sample Full-Body Dumbbell Workout</h2>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
        <tbody>
          <tr><td>Goblet squat</td><td>3 × 10–12</td></tr>
          <tr><td>Flat dumbbell press</td><td>3 × 10–12</td></tr>
          <tr><td>Bent-over row</td><td>3 × 10–12</td></tr>
          <tr><td>Overhead press</td><td>3 × 10–12</td></tr>
          <tr><td>Romanian deadlift</td><td>3 × 10–12</td></tr>
          <tr><td>Bicep curl + triceps extension</td><td>2 × 12–15 each</td></tr>
        </tbody>
      </table>
      <p>Train this routine 2–3 times a week with rest days in between, adding weight or reps as each exercise gets easier.</p>

      <h2>Getting Started</h2>
      <p>If buying equipment, a pair of adjustable dumbbells covers most beginner-to-intermediate needs in far less space than fixed pairs. Start light enough to master form on each movement, then increase load gradually as strength builds.</p>
    </ArticleLayout>
  );
}
