import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Running for Weight Loss: How Much and How Often";
const DESC = "How many calories running actually burns, a weekly running schedule for fat loss, and realistic expectations for how fast you'll see results.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/running-for-weight-loss" },
  title: "Running for Weight Loss — Complete Guide",
  description: DESC,
  keywords: ["running for weight loss", "how much running to lose weight", "running weight loss plan"],
};

const faqs = [
  { q: "How many calories does running burn?", a: "Roughly 60–100 kcal per km for most adults, depending on body weight and pace — heavier runners and faster paces burn more per kilometre. A rough estimate is 1 kcal per kg of body weight per km run." },
  { q: "Is running alone enough to lose weight?", a: "Running creates a calorie deficit lever, but diet is usually the bigger factor. It's easy to unintentionally eat back the calories burned from a run, especially with 'earned it' thinking. A calorie deficit through diet, supported by running, is more reliable than running alone." },
  { q: "How much should I run per week to lose weight?", a: "3–5 sessions a week, mixing easy runs with 1–2 higher-intensity sessions, is a reasonable target for most beginners aiming for fat loss, alongside a modest calorie deficit from diet." },
  { q: "Should I run every day to lose weight faster?", a: "Not recommended, especially for beginners — daily running significantly increases overuse injury risk. Rest days allow recovery and reduce injury risk, which matters more for long-term consistency than squeezing in an extra session." },
];

const references = [
  "Hall KD, Guo J. Obesity energetics: body weight regulation and the effects of diet composition. Gastroenterology. 2017;152(7):1718–1727.",
];

export default function RunningForWeightLossPage() {
  return (
    <ArticleLayout
      title="Running for Weight Loss"
      category="Running"
      categoryHref="/running"
      readTime="6 min"
      lastUpdated="September 2026"
      summary="Running burns roughly 60–100 kcal per km depending on body weight and pace, but it works best paired with a modest calorie deficit from diet, not as a substitute for one. 3–5 sessions a week, mostly easy-paced with 1–2 harder sessions, is a sustainable target that also limits injury risk."
      relatedCalculators={[
        { name: "Calorie Deficit Calculator", href: "/calculators/calorie-deficit", icon: "🔥" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "⚡" },
      ]}
      relatedArticles={[
        { title: "5K Training Plan for Beginners", href: "/running/5k-training-plan", time: "8 min" },
        { title: "Calorie Deficit Explained", href: "/weight-loss/calorie-deficit-explained", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/running-for-weight-loss", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>How Many Calories Does Running Burn?</h2>
      <p>A common estimate is roughly 1 kcal burned per kg of body weight per km run — so a 70 kg person burns roughly 70 kcal per km, or about 350 kcal for a 5K. Faster pace and hillier routes increase this somewhat, but body weight and distance are the dominant factors, more than pace itself.</p>

      <h2>Why Running Alone Often Doesn't Produce Weight Loss</h2>
      <p>It's common to overestimate how many calories a run burned, and to unintentionally "reward" a run with extra food that offsets the deficit it created — sometimes referred to as compensatory eating. Running is a genuinely useful tool for weight loss, but it works best as part of a deliberate calorie deficit from diet, not as a stand-alone strategy you expect to work on its own.</p>

      <h2>A Weekly Running Schedule for Fat Loss</h2>
      <table>
        <thead><tr><th>Day</th><th>Session</th></tr></thead>
        <tbody>
          <tr><td>Monday</td><td>Easy run, 30 min</td></tr>
          <tr><td>Tuesday</td><td>Rest or strength training</td></tr>
          <tr><td>Wednesday</td><td>Interval or tempo run, 25–30 min</td></tr>
          <tr><td>Thursday</td><td>Rest</td></tr>
          <tr><td>Friday</td><td>Easy run, 30 min</td></tr>
          <tr><td>Saturday</td><td>Longer easy run, 40–50 min</td></tr>
          <tr><td>Sunday</td><td>Rest or light activity</td></tr>
        </tbody>
      </table>
      <p>This gives 3–4 running sessions a week with adequate rest, reducing overuse injury risk compared to running daily.</p>

      <h2>Realistic Expectations</h2>
      <p>Combined with a sensible calorie deficit, this level of running supports the commonly cited 0.4–0.5 kg per week fat loss rate. Running alone, without dietary changes, tends to produce much slower or inconsistent results, since the calorie burn from a single run is often smaller than people expect relative to a day's total intake.</p>
    </ArticleLayout>
  );
}
