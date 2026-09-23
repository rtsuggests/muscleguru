import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Beginner Gym Guide for India: Your First 3 Months";
const DESC = "A complete beginner's guide to starting at the gym in India — the 5 basic movements, how to choose a routine, gym etiquette, and common first-timer mistakes.";

export const metadata: Metadata = {
  alternates: { canonical: "/beginner-fitness/beginner-gym-guide" },
  title: "Beginner Gym Guide India",
  description: DESC,
  keywords: ["beginner gym guide India", "how to start gym", "first time gym tips India"],
};

const faqs = [
  { q: "How many days a week should a beginner go to the gym?", a: "3 days a week, with a full-body routine, is a well-supported starting point. It gives enough recovery time between sessions while building the habit and enough frequency for steady progress." },
  { q: "What should I learn first at the gym?", a: "The 5 basic compound movements: squat, deadlift, bench press, overhead press and row. These recruit the most muscle per exercise and form the base of almost every effective programme." },
  { q: "Do I need a personal trainer as a beginner?", a: "Not strictly necessary, but a few sessions to learn correct form on the main lifts can meaningfully reduce injury risk and speed up progress, especially for the squat and deadlift." },
  { q: "How long until I see results?", a: "Strength improvements are often noticeable within 4–6 weeks. Visible body composition changes typically take 8–12 weeks of consistent training and nutrition." },
];

const references = [
  "American College of Sports Medicine. Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
  "Kraemer WJ et al. Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2002;34(2):364–380.",
];

export default function BeginnerGymGuidePage() {
  return (
    <ArticleLayout
      title="Beginner Gym Guide for India"
      category="Beginner Fitness"
      categoryHref="/beginner-fitness"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Learn the 5 basic compound movements — squat, deadlift, bench press, overhead press, row — starting with lighter weights to master form. Train 3 days a week on a full-body plan, track every workout, and add weight or reps gradually. Consistency in the first 3 months matters more than any advanced technique."
      relatedCalculators={[
        { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "How to Squat: Full Technique Guide", href: "/exercise-guides/how-to-squat", time: "7 min" },
        { title: "No-Equipment Home Workout Guide", href: "/beginner-fitness/home-workout-guide", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/beginner-fitness/beginner-gym-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>The 5 Movements to Learn First</h2>
      <table>
        <thead><tr><th>Movement</th><th>Trains</th></tr></thead>
        <tbody>
          <tr><td>Squat</td><td>Legs, glutes, core</td></tr>
          <tr><td>Deadlift</td><td>Back, glutes, hamstrings</td></tr>
          <tr><td>Bench press</td><td>Chest, shoulders, triceps</td></tr>
          <tr><td>Overhead press</td><td>Shoulders, triceps, core</td></tr>
          <tr><td>Row</td><td>Back, biceps</td></tr>
        </tbody>
      </table>
      <p>These compound movements recruit multiple muscle groups per lift, giving the most training benefit per minute in the gym. Almost every effective programme is built around variations of these five.</p>

      <h2>Your First 3 Months: What to Focus On</h2>
      <ol>
        <li><strong>Weeks 1–2:</strong> Learn correct form with light weight. Ego lifting (adding weight before form is solid) is the most common cause of early injuries and stalled progress.</li>
        <li><strong>Weeks 3–8:</strong> Follow a structured plan (see the 3-day full-body plan) consistently, adding weight or reps as lifts get easier.</li>
        <li><strong>Weeks 9–12:</strong> Continue the same plan. By now you should be noticeably stronger on the main lifts, and form should feel automatic.</li>
      </ol>

      <h2>Basic Gym Etiquette</h2>
      <ul>
        <li>Re-rack weights after use</li>
        <li>Wipe down benches and equipment after sweating on them</li>
        <li>Don't work in on someone's set without asking, and offer to share equipment during busy hours</li>
        <li>Wear closed shoes appropriate for lifting, not sandals or flip-flops</li>
      </ul>

      <h2>Common Beginner Mistakes</h2>
      <ul>
        <li><strong>Programme hopping</strong> — switching plans every 2 weeks before giving one a real chance to work</li>
        <li><strong>Skipping warm-up sets</strong> — going straight to a working weight increases injury risk</li>
        <li><strong>Not tracking workouts</strong> — without a log, it's hard to know whether you're actually progressing</li>
        <li><strong>Comparing to others</strong> — everyone's starting point and rate of progress differs; compare only to your own past sessions</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Pick a structured beginner plan (the 3-day full-body plan is a good default), track your lifts every session, and prioritise learning form over lifting heavy in the first month. Progress from there is largely a matter of consistency.</p>
    </ArticleLayout>
  );
}
