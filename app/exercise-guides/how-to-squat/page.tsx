import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "How to Squat: Full Technique Guide";
const DESC = "Step-by-step squat technique, common form mistakes, mobility fixes, and how to progress the squat safely as a beginner.";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/how-to-squat" },
  title: "How to Squat — Technique Guide",
  description: DESC,
  keywords: ["how to squat correctly", "squat form guide", "squat mistakes beginners"],
};

const faqs = [
  { q: "How deep should I squat?", a: "Aim for at least parallel — hip crease at or below knee level — if mobility allows. Depth should be limited by your own mobility and comfort, not forced beyond a point where your lower back rounds." },
  { q: "Is it bad for my knees if they go past my toes?", a: "No. Some forward knee travel is a normal part of a mobile squat, especially for people with longer shins. It only becomes an issue if it's paired with poor stability or pain, not from the position alone." },
  { q: "Should I squat with my heels raised?", a: "Not required for most people, but a small heel lift (via weightlifting shoes or a wedge) can help those with limited ankle mobility squat more comfortably." },
  { q: "How often should beginners squat?", a: "2–3 times a week works well for most beginner programmes, with at least one rest day between sessions to allow recovery." },
];

const references = [
  "Schoenfeld BJ. Squatting kinematics and kinetics and their application to exercise performance. J Strength Cond Res. 2010;24(12):3497–3506.",
  "Hartmann H et al. Analysis of the load on the knee joint and vertebral column with changes in squatting depth and weight load. Sports Med. 2013;43(10):993–1008.",
];

export default function HowToSquatPage() {
  return (
    <ArticleLayout
      title="How to Squat: Full Technique Guide"
      category="Exercise Guides"
      categoryHref="/exercise-guides"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Stand with feet shoulder-width apart, brace your core, and lower by bending at the hips and knees together, keeping your chest up and weight through your mid-foot. Aim for at least parallel depth if mobility allows, and drive back up through your heels. The most common mistake is letting the knees cave inward."
      relatedCalculators={[
        { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
      ]}
      relatedArticles={[
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "Beginner Gym Guide India", href: "/beginner-fitness/beginner-gym-guide", time: "8 min" },
        { title: "Dumbbell Exercises Guide", href: "/exercise-guides/dumbbell-exercises", time: "6 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/exercise-guides/how-to-squat", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Step-by-Step Technique</h2>
      <ol>
        <li><strong>Setup:</strong> Feet shoulder-width apart, toes turned out slightly (10–20°).</li>
        <li><strong>Brace:</strong> Take a breath and tighten your core, as if bracing for a light punch to the stomach.</li>
        <li><strong>Descend:</strong> Bend at the hips and knees together, keeping your chest up and weight balanced through your mid-foot, not your toes.</li>
        <li><strong>Depth:</strong> Go to at least parallel (hip crease level with or below the knee) if your mobility allows, without your lower back rounding.</li>
        <li><strong>Drive up:</strong> Push through your feet, keeping your knees tracking in line with your toes, and stand back to the start position.</li>
      </ol>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Knees caving inward</strong> — often a hip or ankle stability issue; slow down and consciously push knees out over toes.</li>
        <li><strong>Rounding the lower back at the bottom</strong> — usually means the depth is beyond current mobility; reduce depth slightly and work on hip and ankle mobility.</li>
        <li><strong>Rising onto the toes</strong> — indicates weight has shifted too far forward; refocus on keeping weight through the mid-foot.</li>
        <li><strong>Rushing the descent</strong> — a controlled 2-second lowering phase builds better control than dropping quickly.</li>
      </ul>

      <h2>Mobility Fixes for a Better Squat</h2>
      <p>Limited ankle mobility is one of the most common reasons people struggle with squat depth. Calf stretches and ankle mobility drills before squatting can help. A small heel lift — a weightlifting shoe or a flat wedge under the heels — is a practical workaround while mobility improves.</p>

      <h2>How to Progress</h2>
      <p>Start with bodyweight squats until the pattern feels automatic and pain-free. Move to a goblet squat (holding a dumbbell at chest height) next, then to a barbell back squat once you're comfortable with the loaded pattern. Increase weight in small increments (2–2.5 kg) once you can complete all sets at your target reps with good form.</p>
    </ArticleLayout>
  );
}
