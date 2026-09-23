import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Strength Training Guide for Women in India";
const DESC = "A complete beginner strength training guide for Indian women: a 3-day programme, exercise selection, progressive overload, and why strength training matters for bone and muscle health.";

export const metadata: Metadata = {
  alternates: { canonical: "/women/strength-training-guide" },
  title: "Strength Training Guide for Women India",
  description: DESC,
  keywords: ["strength training for women India", "beginner weight lifting women", "gym plan for women India"],
};

const faqs = [
  { q: "Will strength training make me look bulky?", a: "No. Women have far lower testosterone than men, which limits how much muscle mass they can build. See the full explanation in Will Lifting Make Women Bulky." },
  { q: "How often should a beginner train?", a: "3 days a week with a full-body routine, allowing at least one rest day between sessions, is a strong starting point." },
  { q: "Is strength training safe during PCOS, pregnancy or other conditions?", a: "For most healthy women it is, but anyone with PCOS, endometriosis, a pregnancy, or another medical condition should get guidance from their doctor or gynaecologist before starting or adjusting a programme." },
  { q: "What's the single most important principle for results?", a: "Progressive overload — gradually increasing weight or reps over time. Without it, progress plateaus quickly no matter how consistently you show up." },
];

const references = [
  "Hagstrom AD et al. The Effect of Resistance Training in Women on Dynamic Strength and Muscular Hypertrophy: A Systematic Review with Meta-analysis. Sports Med. 2020;50(6):1075–1093.",
  "World Health Organization. WHO guidelines on physical activity and sedentary behaviour. 2020.",
];

export default function StrengthTrainingGuideWomenPage() {
  return (
    <ArticleLayout
      title="Strength Training Guide for Women in India"
      category="Women's Fitness"
      categoryHref="/women"
      readTime="9 min"
      lastUpdated="September 2026"
      summary="Start with 3 days a week of full-body resistance training focused on compound movements — squats, deadlifts, rows and presses. Progressive overload, gradually adding weight or reps over time, is the single biggest driver of results, alongside adequate protein and recovery."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "Will Lifting Make Women Bulky? The Truth", href: "/women/will-lifting-make-women-bulky", time: "8 min" },
        { title: "Protein Needs for Women", href: "/women/protein-needs-women", time: "8 min" },
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/women/strength-training-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Strength Training Matters</h2>
      <p>Bone density and muscle mass naturally decline with age, and this decline accelerates for women after menopause due to falling oestrogen. Strength training is one of the most effective tools for building and preserving both bone density and muscle mass, alongside its benefits for metabolism, insulin sensitivity and overall function. It's worth starting well before any of that decline sets in.</p>

      <h2>3-Day Beginner Programme</h2>
      <p>Train Monday, Wednesday and Friday. Each session: 5-minute warm-up, 35–40 minute main workout, 5-minute cool-down.</p>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th></tr></thead>
        <tbody>
          <tr><td>Goblet squat</td><td>3 × 10</td></tr>
          <tr><td>Romanian deadlift</td><td>3 × 10</td></tr>
          <tr><td>Dumbbell row</td><td>3 × 10 per arm</td></tr>
          <tr><td>Push-up or incline push-up</td><td>3 × 10</td></tr>
          <tr><td>Plank</td><td>3 × 30 sec</td></tr>
        </tbody>
      </table>
      <p>Add weight or reps every 1–2 weeks once the current load feels manageable across all sets with good form.</p>

      <h2>Progressive Overload: The Key Principle</h2>
      <p>Progressive overload means consistently increasing the training stimulus over time. The simplest method: once you can complete all prescribed sets and reps with good form, increase weight by roughly 1–2 kg on upper-body exercises or 2–4 kg on lower-body exercises. Tracking every session (a notebook or an app both work) makes it easy to see when you're ready to progress. Without this, results plateau quickly regardless of how consistently you show up.</p>

      <h2>What Results to Expect</h2>
      <p>In the first 4–8 weeks, most of the improvement comes from your nervous system getting more efficient at the movements — this shows up as noticeably better strength before much visible change. Over 3–6 months, visible muscle definition and body composition changes typically follow, particularly with consistent training and adequate protein intake.</p>
    </ArticleLayout>
  );
}
