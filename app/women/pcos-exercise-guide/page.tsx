import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "PCOS and Exercise: An Evidence-Based Guide";
const DESC = "How exercise helps manage PCOS symptoms, which types work best according to the research, how much to do, and cautions around overtraining.";

export const metadata: Metadata = {
  alternates: { canonical: "/women/pcos-exercise-guide" },
  title: "PCOS and Exercise Guide — Evidence-Based",
  description: DESC,
  keywords: ["PCOS exercise guide", "best exercise for PCOS", "PCOS workout plan India"],
};

const faqs = [
  { q: "Does exercise really help PCOS?", a: "Yes. Multiple systematic reviews and meta-analyses find that regular aerobic and resistance exercise improves insulin sensitivity, and often reduces measures like BMI, waist circumference and testosterone in women with PCOS, even without significant weight loss in some studies." },
  { q: "Which type of exercise is best for PCOS?", a: "Research supports both aerobic exercise (for insulin and metabolic markers) and resistance training (for body composition and lean mass), with a combination of the two often recommended. Findings on hormonal effects specifically are more mixed across studies than the metabolic findings." },
  { q: "How much exercise is recommended for PCOS?", a: "Most supporting studies use programmes of roughly 12–24 weeks, at least 3 sessions a week, 30+ minutes per session. This lines up with general guidelines of about 150 minutes of moderate activity per week." },
  { q: "Can too much exercise make PCOS worse?", a: "Excessive, poorly recovered training combined with aggressive calorie restriction can add physical stress that may work against PCOS management. Moderate, consistent exercise is better supported by the evidence than extreme approaches." },
  { q: "Should I see a doctor before starting to exercise for PCOS?", a: "It's a good idea, especially if you have other health conditions or are new to exercise. A doctor or gynaecologist can help tailor recommendations to your specific case and rule out anything that needs a different approach first." },
];

const references = [
  "Patten RK et al. Effects of aerobic exercise training on epigenetic marks and cardiometabolic risk factors in women with polycystic ovary syndrome: a systematic review. J Endocrinol Invest. 2020 (aerobic and insulin sensitivity findings vary by study; see systematic reviews below for pooled evidence).",
  "Woodward A et al. Exercise and physical activity for women with polycystic ovary syndrome: a systematic review and meta-analysis. J Endocrinol Invest. 2020;43(3):271–280.",
  "Effects of physical activity in women with polycystic ovary syndrome: a systematic review and meta-analysis. 2024 (10 RCTs, 382 women).",
  "Patten RK et al. A Systematic Review of the Effects of Exercise on Hormones in Women with Polycystic Ovary Syndrome. Curr Nutr Rep. 2020.",
];

export default function PCOSExerciseGuidePage() {
  return (
    <ArticleLayout
      title="PCOS and Exercise: An Evidence-Based Guide"
      category="Women's Fitness"
      categoryHref="/women"
      readTime="9 min"
      lastUpdated="September 2026"
      summary="Regular exercise is one of the most well-supported interventions for PCOS. Systematic reviews consistently show that aerobic exercise improves insulin sensitivity, and resistance training improves body composition, in women with PCOS — often even without significant weight loss. Aim for roughly 150 minutes of moderate exercise weekly plus 2–3 resistance sessions, and avoid swinging to extremes."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Calorie Deficit Calculator", href: "/calculators/calorie-deficit", icon: "⚖️" },
      ]}
      relatedArticles={[
        { title: "Exercise During Periods", href: "/women/fitness-during-periods", time: "8 min" },
        { title: "Strength Training Guide for Women", href: "/women/strength-training-guide", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/women/pcos-exercise-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Exercise Helps With PCOS</h2>
      <p>PCOS (Polycystic Ovary Syndrome) is commonly linked to insulin resistance and elevated androgen (male hormone) levels, which drive many of its symptoms — irregular periods, acne, and metabolic issues among them. Exercise addresses the insulin resistance side directly: physical activity improves how effectively your body uses insulin, independent of weight loss. A 2024 meta-analysis of 10 randomized controlled trials found aerobic exercise reduced BMI, waist circumference, insulin levels and cholesterol in women with PCOS, with resistance exercise separately improving lean body mass and reducing body fat percentage.</p>

      <h2>What the Research Shows by Exercise Type</h2>
      <table>
        <thead><tr><th>Exercise type</th><th>What research generally shows</th></tr></thead>
        <tbody>
          <tr><td>Aerobic exercise</td><td>Consistently improves insulin sensitivity and metabolic markers across multiple systematic reviews</td></tr>
          <tr><td>Resistance training</td><td>Improves lean body mass and body fat percentage; hormonal effects are more mixed across studies</td></tr>
          <tr><td>Combined aerobic + resistance</td><td>Generally recommended as the most well-rounded approach for both metabolic and body composition outcomes</td></tr>
        </tbody>
      </table>
      <p>Findings on androgen (testosterone) levels specifically are less consistent across the research than the insulin and metabolic findings — some studies show improvement, others show no significant change. The metabolic benefits are the most reliably supported part of the picture.</p>

      <h2>How Much Exercise Is Recommended</h2>
      <p>Most of the supporting studies use programmes of roughly 12–24 weeks, with sessions at least 3 times a week for 30+ minutes each — broadly in line with general public health guidelines of about 150 minutes of moderate activity a week, plus 2–3 resistance training sessions.</p>

      <h2>A Word on Overtraining</h2>
      <p>The research supports moderate, consistent exercise — it does not suggest that more is always better. Combining very high training volumes with aggressive calorie restriction adds physical stress that may work against the goals of PCOS management rather than helping them. If you notice worsening menstrual irregularity, persistent fatigue or mood decline alongside a very demanding training and diet regimen, that combination is worth reconsidering rather than pushing through.</p>

      <h2>Getting Started</h2>
      <p>A reasonable starting point: 3 sessions of moderate aerobic activity (brisk walking, cycling, swimming) plus 2 resistance training sessions a week, building toward the 150-minute weekly target. Since PCOS presentation varies significantly between individuals, working with a doctor or gynaecologist to tailor this to your specific situation — especially if you have other health considerations — is worthwhile.</p>
    </ArticleLayout>
  );
}
