import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "10K Training Plan: 8 Weeks From 5K to 10K";
const DESC = "An 8-week 10K training plan for runners who can already complete a 5K, with weekly structure, easy run guidance, race-day pacing and heat tips for India.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/10k-training-plan" },
  title: "10K Training Plan — 8 Weeks",
  description: DESC,
  keywords: ["10k training plan", "5k to 10k training", "10k running plan India"],
};

const faqs = [
  { q: "How fit do I need to be to start a 10K plan?", a: "Being able to comfortably run a 5K is a good baseline before starting a structured 10K plan. If you can't yet, a 5K training plan is the better starting point." },
  { q: "How many days a week should I train for a 10K?", a: "4 running days a week is a solid structure for most people: 2 easy runs, 1 quality session (intervals or tempo), and 1 longer run building toward race distance." },
  { q: "What pace should my easy runs be?", a: "Conversational pace — you should be able to speak in full sentences without gasping. Most beginners run their easy runs too fast, which limits recovery and can increase injury risk." },
  { q: "How should I pace the actual 10K race?", a: "A common approach is an even or slightly negative split — running the second half at the same pace or slightly faster than the first, rather than starting too fast and fading." },
];

export default function TenKTrainingPlanPage() {
  return (
    <ArticleLayout
      title="10K Training Plan: 8 Weeks"
      category="Running"
      categoryHref="/running"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="An 8-week plan for runners already comfortable with 5K builds toward 10K through 4 weekly sessions — 2 easy runs, 1 quality session, and a progressively longer run. Keep easy runs at a truly conversational pace, and aim for an even or slightly negative split on race day."
      relatedCalculators={[
        { name: "VO2 Max Calculator", href: "/calculators/vo2-max", icon: "🫁" },
      ]}
      relatedArticles={[
        { title: "5K Training Plan for Beginners", href: "/running/5k-training-plan", time: "8 min" },
        { title: "Half Marathon Training Plan", href: "/running/half-marathon-training", time: "8 min" },
        { title: "How to Run Faster", href: "/running/how-to-run-faster", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/10k-training-plan", description: DESC, dateModified: "2026-09-21" })}
      faqs={faqs}
    >
      <h2>The Complete 8-Week Training Plan</h2>
      <table>
        <thead><tr><th>Week</th><th>Long run</th><th>Quality session</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>5K</td><td>4 × 400m intervals</td></tr>
          <tr><td>2</td><td>5.5K</td><td>5 × 400m intervals</td></tr>
          <tr><td>3</td><td>6K</td><td>15-min tempo run</td></tr>
          <tr><td>4</td><td>5K (recovery week)</td><td>Easy pace only</td></tr>
          <tr><td>5</td><td>7K</td><td>6 × 400m intervals</td></tr>
          <tr><td>6</td><td>8K</td><td>20-min tempo run</td></tr>
          <tr><td>7</td><td>9K</td><td>Easy pace, short strides</td></tr>
          <tr><td>8</td><td>10K (race week — taper)</td><td>Short easy runs</td></tr>
        </tbody>
      </table>
      <p>Alongside the sessions above, keep 1–2 easy runs (20–30 minutes, conversational pace) each week for aerobic base building.</p>

      <h2>Easy Runs — The Foundation</h2>
      <p>Easy runs should feel genuinely easy — conversational pace, comfortable breathing. Most beginners run these too fast, which limits recovery between harder sessions and increases cumulative fatigue. If in doubt, slow down; the quality sessions are where the speed work happens.</p>

      <h2>Race Day Pacing</h2>
      <p>An even or slightly negative split (second half at the same pace or slightly faster than the first) generally produces a better result than starting fast and fading, which is a very common mistake for less experienced racers caught up in early-race adrenaline. Practising your goal race pace during a few training runs helps you recognise and hold it on race day.</p>

      <h2>Indian Climate Tips</h2>
      <p>Heat and humidity across much of India can significantly affect pace and perceived effort, especially outside the cooler winter months. Hydrate well in the hours before a run (not just immediately before), start earlier in the day when possible, and adjust pace expectations on hot or humid days rather than forcing a pace that felt comfortable in cooler weather.</p>
    </ArticleLayout>
  );
}
