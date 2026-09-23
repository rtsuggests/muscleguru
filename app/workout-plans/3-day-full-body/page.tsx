import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "3-Day Full Body Workout Plan for Beginners (India)";
const DESC = "A complete 3-day full-body workout plan for beginners, with exercises, sets, reps and how to progress over the first months of training.";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/3-day-full-body" },
  title: "3-Day Full Body Workout Plan India",
  description: DESC,
  keywords: ["3 day full body workout plan", "beginner gym plan India", "full body workout schedule"],
};

const faqs = [
  { q: "Is a 3-day full-body plan good for beginners?", a: "Yes — it's one of the most recommended structures for beginners because each muscle group is trained 3 times a week, giving more practice with technique and more frequent progress than a split routine at this stage." },
  { q: "How long should each session take?", a: "45–60 minutes including warm-up, for the 6 exercises listed here at 3 sets each." },
  { q: "When should I switch to a split routine?", a: "Once progress on this plan slows (typically after 3–6 months, though this varies), a 4-day upper/lower split or push/pull/legs split allows more volume per muscle group to keep progressing." },
  { q: "What if I miss a day?", a: "Just pick up the next session as scheduled rather than trying to cram in extra sessions. Consistency across weeks matters more than hitting every planned session perfectly." },
];

const references = [
  "American College of Sports Medicine. Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
  "Schoenfeld BJ et al. Effects of resistance training frequency on measures of muscle hypertrophy: a systematic review and meta-analysis. Sports Med. 2016;46(11):1689–1697.",
];

export default function ThreeDayFullBodyPage() {
  return (
    <ArticleLayout
      title="3-Day Full Body Workout Plan"
      category="Workout Plans"
      categoryHref="/workout-plans"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Train Monday, Wednesday and Friday. Each session hits all major muscle groups with compound movements — squat, press, row, deadlift pattern. Add weight or reps every 1–2 weeks when you can complete all sets with good form. This is one of the most effective structures for beginners."
      relatedCalculators={[
        { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
      ]}
      relatedArticles={[
        { title: "Beginner Gym Guide India", href: "/beginner-fitness/beginner-gym-guide", time: "8 min" },
        { title: "4-Day Upper/Lower Workout Plan", href: "/workout-plans/4-day-upper-lower", time: "8 min" },
        { title: "How to Squat: Full Technique Guide", href: "/exercise-guides/how-to-squat", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/workout-plans/3-day-full-body", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Full-Body for Beginners</h2>
      <p>Beginners recover quickly and benefit from more frequent practice of each movement pattern. Training every major muscle group 3 times a week, rather than splitting the body across more days, gives more total practice with technique early on — which matters more than volume at this stage.</p>

      <h2>The Programme</h2>
      <p>Train Monday, Wednesday, Friday, with rest days in between. Each session covers the same core exercises; increase weight or reps as they get easier.</p>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th><th>Pattern</th></tr></thead>
        <tbody>
          <tr><td>Squat</td><td>3 × 8–10</td><td>Lower body, quad-dominant</td></tr>
          <tr><td>Bench Press / Push-up</td><td>3 × 8–10</td><td>Upper body push</td></tr>
          <tr><td>Bent-over Row</td><td>3 × 8–10</td><td>Upper body pull</td></tr>
          <tr><td>Overhead Press</td><td>3 × 8–10</td><td>Shoulder push</td></tr>
          <tr><td>Romanian Deadlift</td><td>3 × 10</td><td>Lower body, hip-dominant</td></tr>
          <tr><td>Plank</td><td>3 × 45 sec</td><td>Core</td></tr>
        </tbody>
      </table>

      <h2>How to Progress</h2>
      <p>Add weight or reps every 1–2 weeks whenever you can complete all 3 sets at the target reps with good form. A small jump (2–2.5 kg on most exercises) each time you progress adds up meaningfully over months. If a lift stalls for 2–3 sessions in a row, hold the weight steady or reduce it slightly before pushing again.</p>

      <h2>Warm-Up</h2>
      <p>5 minutes of light cardio (walking, cycling) followed by 1–2 light warm-up sets of the first exercise before working sets. This primes the joints and pattern before loading with your working weight.</p>

      <h2>When to Move On</h2>
      <p>This plan works well for the first 3–6 months of consistent training, though the exact timeline varies. Once progress on all 6 lifts slows despite consistent effort, sleep and nutrition, a 4-day upper/lower split allows more total volume per muscle group to keep driving progress.</p>
    </ArticleLayout>
  );
}
