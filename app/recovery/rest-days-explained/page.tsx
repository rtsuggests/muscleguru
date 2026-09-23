import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Rest Days Explained: Why They Matter and How Many You Need";
const DESC = "Why rest days are necessary for muscle growth, how many you need per week, active recovery options, and signs you're not resting enough.";

export const metadata: Metadata = {
  alternates: { canonical: "/recovery/rest-days-explained" },
  title: "Rest Days Explained",
  description: DESC,
  keywords: ["rest days for muscle growth", "how many rest days per week", "active recovery day"],
};

const faqs = [
  { q: "How many rest days do I need per week?", a: "Most people training with weights benefit from 1–3 rest or active recovery days a week, depending on training split, intensity and experience level. Beginners on a 3-day full-body plan often have 3–4 rest days built in naturally." },
  { q: "What's the difference between a rest day and an active recovery day?", a: "A rest day means no structured exercise. An active recovery day involves light movement — a walk, gentle mobility work, easy cycling — that doesn't add meaningful training stress but keeps you moving." },
  { q: "Will I lose progress if I take a rest day?", a: "No. Muscle growth and strength adaptations happen during recovery, not during the workout itself. Skipping needed rest days is more likely to hurt progress than taking them." },
  { q: "Can I train the same muscle group every day?", a: "Generally not advisable for muscle groups trained with meaningful intensity — most research suggests at least 48 hours before training the same muscle group hard again, to allow repair." },
];

const references = [
  "Schoenfeld BJ et al. Effects of resistance training frequency on measures of muscle hypertrophy: a systematic review and meta-analysis. Sports Med. 2016;46(11):1689–1697.",
  "Dupuy O et al. An evidence-based approach for choosing post-exercise recovery techniques to reduce markers of muscle damage, soreness, fatigue, and inflammation: a systematic review with meta-analysis. Front Physiol. 2018;9:403.",
];

export default function RestDaysExplainedPage() {
  return (
    <ArticleLayout
      title="Rest Days Explained"
      category="Recovery"
      categoryHref="/recovery"
      readTime="6 min"
      lastUpdated="September 2026"
      summary="Rest days let your muscles repair and adapt from training stress — this is when strength and size gains actually happen, not during the workout. Most people benefit from 1–3 rest or active recovery days a week, depending on training frequency and intensity."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "Overtraining: Signs, Symptoms and How to Recover", href: "/recovery/overtraining-signs", time: "7 min" },
        { title: "Sleep and Muscle Growth", href: "/recovery/sleep-muscle-growth", time: "7 min" },
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/recovery/rest-days-explained", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Rest Days Aren't Optional</h2>
      <p>Training creates the stimulus for adaptation — small amounts of muscle damage and stress that the body then repairs and strengthens. That repair process happens in the hours and days after training, not during the workout. Skipping rest days means interrupting this process before it's finished, which can blunt the results you're training for.</p>

      <h2>How Many Rest Days Do You Need?</h2>
      <table>
        <thead><tr><th>Training frequency</th><th>Typical rest days/week</th></tr></thead>
        <tbody>
          <tr><td>3-day full-body plan</td><td>3–4 rest or light days</td></tr>
          <tr><td>4-day upper/lower split</td><td>2–3 rest or light days</td></tr>
          <tr><td>5–6 day split</td><td>1–2 rest days, built around muscle group spacing</td></tr>
          <tr><td>Endurance training (running)</td><td>1–2 full rest days, plus easy days between hard sessions</td></tr>
        </tbody>
      </table>
      <p>These are starting points, not fixed rules. Training age, sleep quality, stress and nutrition all shift how much recovery an individual actually needs.</p>

      <h2>Rest Day vs Active Recovery Day</h2>
      <p>A true rest day means no structured training. An active recovery day still involves movement — walking, light cycling, gentle mobility or yoga — but at an intensity that doesn't add meaningful training stress. Many people benefit from mixing both types rather than being fully sedentary every rest day.</p>

      <h2>The 48-Hour Guideline</h2>
      <p>Most research suggests waiting at least 48 hours before training the same muscle group hard again. This is why full-body plans space out training days, and why splits like upper/lower or push/pull/legs are structured the way they are — each muscle group gets time to repair before it's stressed again.</p>

      <h2>Signs You're Not Resting Enough</h2>
      <ul>
        <li>Performance stalling or declining across sessions</li>
        <li>Persistent soreness that doesn't clear before the next session</li>
        <li>Poor sleep despite feeling tired</li>
        <li>Reduced motivation for training you normally enjoy</li>
      </ul>
      <p>If several of these show up together, see the guide on overtraining signs for how to recover.</p>

      <h2>The Bottom Line</h2>
      <p>Rest days aren't a break from progress — they're part of how progress happens. Build them into your plan deliberately rather than treating them as something to skip when motivated.</p>
    </ArticleLayout>
  );
}
