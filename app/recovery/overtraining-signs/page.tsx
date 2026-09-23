import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Overtraining: Signs, Symptoms and How to Recover";
const DESC = "How to recognize overtraining and overreaching, the warning signs to watch for, and how to recover through deloads and rest.";

export const metadata: Metadata = {
  alternates: { canonical: "/recovery/overtraining-signs" },
  title: "Overtraining Signs — Recognize & Recover",
  description: DESC,
  keywords: ["overtraining signs", "overtraining syndrome symptoms", "how to recover from overtraining"],
};

const faqs = [
  { q: "How long does it take to recover from overtraining?", a: "Mild overreaching often resolves within a few days to two weeks of reduced training and better sleep and nutrition. True overtraining syndrome, which is less common, can take several weeks to months of significantly reduced training to fully recover from." },
  { q: "Is overtraining common for beginners?", a: "It's uncommon in true beginners, since most people don't yet train with enough frequency, volume or intensity to trigger it. It's more often seen in intermediate to advanced lifters and endurance athletes training multiple hours a day, or anyone combining hard training with poor sleep and high life stress." },
  { q: "What's the difference between normal soreness and overtraining?", a: "Normal muscle soreness (DOMS) is localized, fades within 2–3 days, and doesn't affect your mood or sleep. Overtraining signs are broader — persistent fatigue, mood changes, disrupted sleep, and declining performance across multiple sessions, not just soreness in one muscle." },
  { q: "How often should I take a deload week?", a: "Every 4–8 weeks of consistent hard training is a common guideline, though this varies by individual and training intensity. A deload isn't only for when you feel overtrained — using them proactively can help prevent reaching that point." },
];

const references = [
  "Meeusen R et al. Prevention, diagnosis, and treatment of the overtraining syndrome: joint consensus statement of the European College of Sport Science and the American College of Sports Medicine. Med Sci Sports Exerc. 2013;45(1):186–205.",
  "Kreher JB, Schwartz JB. Overtraining syndrome: a practical guide. Sports Health. 2012;4(2):128–138.",
];

export default function OvertrainingSignsPage() {
  return (
    <ArticleLayout
      title="Overtraining: Signs, Symptoms and How to Recover"
      category="Recovery"
      categoryHref="/recovery"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Overtraining shows up as persistent fatigue, declining performance despite training hard, mood changes, disrupted sleep and a higher resting heart rate. It's different from normal muscle soreness, which fades within a few days and stays localized. The fix is reduced training load, better sleep, and often a full deload week."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "Sleep and Muscle Growth", href: "/recovery/sleep-muscle-growth", time: "7 min" },
        { title: "Rest Days Explained", href: "/recovery/rest-days-explained", time: "7 min" },
        { title: "Running Injuries: Prevention Guide", href: "/running/running-injuries-prevention", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/recovery/overtraining-signs", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>What Overtraining Actually Is</h2>
      <p>Overtraining happens when training stress consistently outpaces recovery capacity over weeks or months. A milder, more common version is called "overreaching," which resolves with a few days to two weeks of reduced training. True overtraining syndrome is less common and takes much longer to recover from, often weeks to months.</p>

      <h2>Key Warning Signs</h2>
      <ul>
        <li><strong>Performance decline despite consistent effort</strong> — lifts that used to move well now feel heavy, or pace slows even with hard effort.</li>
        <li><strong>Persistent fatigue</strong> that doesn't improve with a normal night's sleep.</li>
        <li><strong>Elevated resting heart rate</strong> compared to your usual baseline, measured first thing in the morning.</li>
        <li><strong>Mood changes</strong> — irritability, reduced motivation, or a general sense of being "flat" about training you normally enjoy.</li>
        <li><strong>Disrupted sleep</strong>, sometimes despite feeling exhausted.</li>
        <li><strong>Frequent minor illness or injury</strong> as immune function and tissue repair capacity are reduced.</li>
        <li><strong>Loss of appetite</strong> or unintended weight loss.</li>
      </ul>
      <p>One or two of these on a bad week is normal life. Several of them together, persisting for more than a week or two, is the pattern worth acting on.</p>

      <h2>How This Differs From Normal Soreness</h2>
      <p>Delayed onset muscle soreness (DOMS) after a hard session is localized to the muscles you trained, peaks around 24–48 hours later, and fades within a few days. It doesn't come with mood changes, sleep disruption, or a drop in performance across unrelated training. Overtraining signs are broader and more persistent.</p>

      <h2>What to Do About It</h2>
      <ol>
        <li><strong>Cut training volume or intensity</strong> for 1–2 weeks — this is usually enough for overreaching.</li>
        <li><strong>Prioritise sleep</strong> — 7–9 hours a night, consistently, is one of the fastest levers for recovery.</li>
        <li><strong>Check nutrition</strong> — an unintentional calorie deficit alongside heavy training accelerates overreaching.</li>
        <li><strong>Address life stress</strong> — training stress and life stress add together; a demanding period at work or home lowers your recovery capacity even if training itself hasn't changed.</li>
        <li><strong>Take a full deload week</strong> if symptoms persist — roughly half your usual volume or intensity for a week, then reassess.</li>
      </ol>

      <h2>Preventing It</h2>
      <p>Scheduling a deload every 4–8 weeks of hard training, rather than waiting for symptoms to force one, is a practical way to stay ahead of overtraining. Track your resting heart rate and how sessions feel — subjective effort creeping up for the same weights or paces is often the earliest sign, well before performance visibly drops.</p>
    </ArticleLayout>
  );
}
