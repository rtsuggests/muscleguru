import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "4-Day Upper/Lower Workout Plan for Intermediate Lifters";
const DESC = "A complete 4-day upper/lower split for intermediate lifters, with exercises, sets and reps, and how to progress from the 3-day full-body routine.";

export const metadata: Metadata = {
  alternates: { canonical: "/workout-plans/4-day-upper-lower" },
  title: "4-Day Upper Lower Workout Plan India",
  description: DESC,
  keywords: ["4 day upper lower split", "upper lower workout plan India", "intermediate gym plan"],
};

const faqs = [
  { q: "Who should use a 4-day upper/lower split?", a: "Lifters who have trained consistently for at least 3–6 months on a full-body plan and can recover well between sessions. It allows more total volume per muscle group per week than a 3-day full-body plan, which suits an intermediate lifter." },
  { q: "How is this different from a 3-day full-body plan?", a: "A full-body plan trains every major muscle group each session, 3 times a week. Upper/lower splits each muscle group across 2 sessions a week instead of 3, letting you do more sets per muscle group per session without the workout becoming excessively long." },
  { q: "Can I add a 5th day?", a: "Yes — a common progression is upper/lower/rest/upper/lower/rest/rest, or adding a light 5th session focused on a lagging muscle group or conditioning. Keep the first 4 days as the core structure." },
  { q: "How much weight should I lift?", a: "Enough that the last 1–2 reps of each set are genuinely hard with good form. If you can easily do more reps than the target, add weight next session." },
];

const references = [
  "Schoenfeld BJ, Ogborn D, Krieger JW. Dose-response relationship between weekly resistance training volume and increases in muscle mass: a systematic review and meta-analysis. J Sports Sci. 2017;35(11):1073–1082.",
  "American College of Sports Medicine. Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.",
];

export default function FourDayUpperLowerPage() {
  return (
    <ArticleLayout
      title="4-Day Upper/Lower Workout Plan"
      category="Workout Plans"
      categoryHref="/workout-plans"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="A 4-day upper/lower split trains each muscle group twice a week across two upper-body days and two lower-body days, with a rest day in between. It suits intermediate lifters who have outgrown a 3-day full-body plan and want more volume per muscle group."
      relatedCalculators={[
        { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
        { name: "Muscle Gain Rate Calculator", href: "/calculators/muscle-gain-rate", icon: "📈" },
      ]}
      relatedArticles={[
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "Push Pull Legs Split Explained", href: "/muscle-gain/push-pull-legs", time: "9 min" },
        { title: "Rest Days Explained", href: "/recovery/rest-days-explained", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/workout-plans/4-day-upper-lower", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Weekly Schedule</h2>
      <table>
        <thead><tr><th>Day</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>Monday</td><td>Upper Body (push/pull)</td></tr>
          <tr><td>Tuesday</td><td>Lower Body (squat focus)</td></tr>
          <tr><td>Wednesday</td><td>Rest</td></tr>
          <tr><td>Thursday</td><td>Upper Body (volume)</td></tr>
          <tr><td>Friday</td><td>Lower Body (deadlift focus)</td></tr>
          <tr><td>Saturday, Sunday</td><td>Rest or light activity</td></tr>
        </tbody>
      </table>

      <h2>Upper Body Day 1 (Monday)</h2>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
        <tbody>
          <tr><td>Bench press</td><td>4 × 6–8</td></tr>
          <tr><td>Bent-over row</td><td>4 × 8–10</td></tr>
          <tr><td>Overhead press</td><td>3 × 8–10</td></tr>
          <tr><td>Lat pulldown or pull-up</td><td>3 × 8–12</td></tr>
          <tr><td>Bicep curl / triceps pushdown</td><td>2 × 12–15 each</td></tr>
        </tbody>
      </table>

      <h2>Lower Body Day 1 (Tuesday)</h2>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
        <tbody>
          <tr><td>Back squat</td><td>4 × 6–8</td></tr>
          <tr><td>Romanian deadlift</td><td>3 × 8–10</td></tr>
          <tr><td>Leg press or lunges</td><td>3 × 10–12</td></tr>
          <tr><td>Calf raise</td><td>3 × 15</td></tr>
          <tr><td>Plank</td><td>3 × 45 sec</td></tr>
        </tbody>
      </table>

      <h2>Upper Body Day 2 (Thursday) — Volume Focus</h2>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
        <tbody>
          <tr><td>Incline dumbbell press</td><td>4 × 10–12</td></tr>
          <tr><td>Seated cable row</td><td>4 × 10–12</td></tr>
          <tr><td>Lateral raise</td><td>3 × 12–15</td></tr>
          <tr><td>Face pull</td><td>3 × 15</td></tr>
          <tr><td>Bicep curl / triceps extension</td><td>2 × 12–15 each</td></tr>
        </tbody>
      </table>

      <h2>Lower Body Day 2 (Friday) — Deadlift Focus</h2>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
        <tbody>
          <tr><td>Deadlift</td><td>4 × 5</td></tr>
          <tr><td>Front squat or goblet squat</td><td>3 × 8–10</td></tr>
          <tr><td>Walking lunge</td><td>3 × 12 per leg</td></tr>
          <tr><td>Hanging leg raise</td><td>3 × 12</td></tr>
        </tbody>
      </table>

      <h2>Progression</h2>
      <p>Add weight or reps whenever you complete all target reps on all sets with good form. A small increase (2.5 kg on compound lifts) most weeks compounds over months. If you stall for 2–3 sessions in a row, take a lighter deload week before pushing again.</p>
    </ArticleLayout>
  );
}
