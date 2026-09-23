import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "No-Equipment Home Workout Guide for Beginners (India)";
const DESC = "A complete bodyweight home workout plan with no equipment: warm-up, exercises, sets and reps, progression, and a weekly schedule for beginners.";

export const metadata: Metadata = {
  alternates: { canonical: "/beginner-fitness/home-workout-guide" },
  title: "Home Workout Guide India — No Equipment Needed",
  description: DESC,
  keywords: ["home workout no equipment India", "bodyweight workout beginners", "home workout plan India"],
};

const faqs = [
  { q: "Can I build muscle with only bodyweight exercises?", a: "Yes, especially as a beginner. Any new stress on a muscle you're not used to can drive growth. Progress comes from adding reps, slowing the tempo, reducing rest, or moving to a harder variation (for example, from a knee push-up to a full push-up to a decline push-up)." },
  { q: "How often should beginners work out at home?", a: "3–4 sessions a week, with at least one rest day between sessions that hit the same muscles. This gives you enough frequency to build the habit while allowing recovery." },
  { q: "How long should a home workout be?", a: "20–40 minutes is enough for a full-body session, including warm-up. Consistency across the week matters more than the length of any single session." },
  { q: "Do I need any equipment at all?", a: "No. A full programme can be built from bodyweight movements alone. A resistance band or a pair of dumbbells extends your options later, but they are optional." },
];

const references = [
  "Kraemer WJ et al. Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2002;34(2):364–380.",
  "Schoenfeld BJ et al. Effects of resistance training frequency on measures of muscle hypertrophy: a systematic review and meta-analysis. Sports Med. 2016;46(11):1689–1697.",
];

export default function HomeWorkoutGuidePage() {
  return (
    <ArticleLayout
      title="No-Equipment Home Workout Guide for Beginners"
      category="Beginner Fitness"
      categoryHref="/beginner-fitness"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="A full-body bodyweight routine — squats, push-ups, lunges, planks and glute bridges — trained 3–4 times a week is enough to build real strength as a beginner. Progress by adding reps, slowing the tempo, or moving to a harder variation of each move."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
      ]}
      relatedArticles={[
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "Beginner Gym Guide India", href: "/beginner-fitness/beginner-gym-guide", time: "8 min" },
        { title: "HIIT Workout Plan for Beginners India", href: "/workout-plans/hiit-beginner", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/beginner-fitness/home-workout-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Bodyweight Training Works</h2>
      <p>As a beginner, your muscles aren't yet adapted to resistance of any kind, so bodyweight exercises provide enough stimulus to build real strength and size. You don't need a gym or dumbbells to get started — you need consistency and a plan to progressively make the exercises harder.</p>

      <h2>Warm-Up (5 Minutes)</h2>
      <ul>
        <li>30 seconds each: arm circles, bodyweight squats, high knees, hip circles</li>
        <li>10 slow bodyweight squats to prime the pattern before loading it with more reps</li>
      </ul>

      <h2>The Full-Body Routine</h2>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Bodyweight squat</td><td>3 × 15–20</td><td>Full depth, controlled tempo</td></tr>
          <tr><td>Push-up (or knee push-up)</td><td>3 × 8–15</td><td>Chest to floor, elbows at 45°</td></tr>
          <tr><td>Reverse lunge</td><td>3 × 10 per leg</td><td>Knee tracks over toes</td></tr>
          <tr><td>Glute bridge</td><td>3 × 15</td><td>Squeeze glutes at the top</td></tr>
          <tr><td>Plank</td><td>3 × 30–45 sec</td><td>Straight line, hips level</td></tr>
        </tbody>
      </table>

      <h2>Weekly Schedule</h2>
      <p>Train this full routine 3–4 times a week (for example Monday, Wednesday, Friday, Sunday), with at least one rest day between sessions. Beginners recover quickly, so full-body sessions at this frequency work well before splitting into upper/lower routines.</p>

      <h2>How to Progress</h2>
      <ul>
        <li><strong>Add reps</strong> first — work up from 15 to 20+ before increasing difficulty.</li>
        <li><strong>Slow the tempo</strong> — a 3-second lowering phase makes any move harder without new equipment.</li>
        <li><strong>Move to a harder variation</strong> — knee push-up → full push-up → decline push-up; bodyweight squat → jump squat → single-leg squat.</li>
        <li><strong>Reduce rest</strong> between sets once form is solid, to add a conditioning element.</li>
      </ul>

      <h2>When to Move Beyond Bodyweight</h2>
      <p>Once bodyweight squats and push-ups feel easy for 25+ reps with good form, it's a sign you're ready for external load — a gym, resistance bands, or a pair of dumbbells — to keep progressing. See the <em>Beginner Gym Guide India</em> for what to do next.</p>
    </ArticleLayout>
  );
}
