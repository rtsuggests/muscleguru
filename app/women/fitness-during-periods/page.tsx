import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Exercise During Periods: What to Do and What to Modify";
const DESC = "How to train safely and effectively during your period, how the menstrual cycle affects performance, and which exercises help reduce period pain.";

export const metadata: Metadata = {
  alternates: { canonical: "/women/fitness-during-periods" },
  title: "Fitness During Periods — Exercise Guide India",
  description: DESC,
  keywords: ["exercise during periods", "workout during menstruation", "period pain exercise relief"],
};

const faqs = [
  { q: "Is it safe to exercise during my period?", a: "Yes, for most women. Light to moderate exercise is generally safe and can help reduce cramping, bloating and mood symptoms. You don't need to rest completely unless you have severe dysmenorrhoea, endometriosis, or your doctor has advised otherwise." },
  { q: "Does exercise actually reduce period pain?", a: "A Cochrane systematic review found that regular exercise, at least 3 times a week for 45–60 minutes, can meaningfully reduce menstrual pain intensity, with no higher rate of adverse events than not exercising." },
  { q: "Should I reduce workout intensity during my period?", a: "Many women find lower perceived exertion tolerance during the luteal phase (just before their period) and prefer lighter training on the heaviest days of bleeding. This is individual — some women train at full intensity throughout with no issue." },
  { q: "Are inverted yoga poses unsafe during periods?", a: "There's no strong medical evidence that inversions are harmful during menstruation. Avoiding them during this time is a personal or traditional choice in many yoga practices, not a medical requirement." },
];

const references = [
  "Armour M et al. Exercise for dysmenorrhoea. Cochrane Database Syst Rev. 2019;9:CD004142.",
  "Xiang Y et al. Efficacy and safety of therapeutic exercise for primary dysmenorrhea: a systematic review and meta-analysis. Front Med. 2025;12:1540557.",
];

export default function FitnessDuringPeriodsPage() {
  return (
    <ArticleLayout
      title="Exercise During Periods: What to Do and What to Modify"
      category="Women's Fitness"
      categoryHref="/women"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Exercise during periods is safe and, for most women, beneficial — a Cochrane review found regular exercise can meaningfully reduce menstrual pain. You don't need to rest completely unless you have severe dysmenorrhoea, endometriosis, or a doctor has advised otherwise. Light modifications on heavier days can help."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Sleep Calculator", href: "/calculators/sleep", icon: "😴" },
      ]}
      relatedArticles={[
        { title: "PCOS and Exercise Guide", href: "/women/pcos-exercise-guide", time: "9 min" },
        { title: "Strength Training Guide for Women", href: "/women/strength-training-guide", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/women/fitness-during-periods", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>The Menstrual Cycle and Exercise</h2>
      <p>Hormone levels fluctuate across the menstrual cycle, and some women notice differences in energy, strength and perceived effort at different phases. These patterns are individual — some women notice no meaningful difference across their cycle, while others find certain phases feel harder or easier. It's worth paying attention to your own pattern rather than assuming a generic rule applies to you.</p>
      <table>
        <thead><tr><th>Phase</th><th>Roughly when</th><th>What many women notice</th></tr></thead>
        <tbody>
          <tr><td>Menstruation</td><td>Days 1–5</td><td>Energy may be lower for some; moderate exercise is generally still fine and often helpful for cramps</td></tr>
          <tr><td>Follicular</td><td>Days 6–13</td><td>Energy and mood often improve as the cycle progresses</td></tr>
          <tr><td>Ovulation</td><td>Around day 14</td><td>Some women report feeling strongest around this point</td></tr>
          <tr><td>Luteal</td><td>Days 15–28</td><td>Some women notice higher perceived effort for the same workout</td></tr>
        </tbody>
      </table>

      <h2>What the Research Shows on Exercise and Period Pain</h2>
      <p>A Cochrane systematic review of exercise for dysmenorrhoea (period pain) found that regular exercise — generally at least 3 sessions a week for 45–60 minutes — can produce a meaningful reduction in menstrual pain intensity, with no higher rate of side effects compared to not exercising. A more recent meta-analysis found benefits with sessions of more than 30 minutes, more than 3 times weekly, sustained for at least 8 weeks.</p>

      <h2>What to Modify During Your Period</h2>
      <ul>
        <li><strong>Reduce intensity if cramping is significant</strong> — swap a hard run for a walk, or use lighter weights.</li>
        <li><strong>Stay well hydrated</strong> — fluid retention is common during this time.</li>
        <li><strong>Consider slightly more protein</strong> if you notice increased fatigue or slower recovery, though this varies by individual.</li>
        <li><strong>Prioritise sleep</strong> — some women notice mildly impaired recovery during this phase.</li>
      </ul>

      <h2>Exercise Types That May Help With Symptoms</h2>
      <ul>
        <li><strong>Brisk walking</strong> — low-impact, accessible, and included in most of the supporting research</li>
        <li><strong>Yoga and stretching</strong> — child's pose and gentle hip-opening stretches are commonly used for lower back and abdominal cramping</li>
        <li><strong>Light swimming or cycling</strong> — good options if higher-impact activity feels uncomfortable</li>
      </ul>
      <p>If symptoms are severe — pain that stops you from normal daily activities, very heavy bleeding, or symptoms that worsen over time — see a doctor or gynaecologist rather than relying on exercise alone, as these can be signs of an underlying condition that needs proper evaluation.</p>
    </ArticleLayout>
  );
}
