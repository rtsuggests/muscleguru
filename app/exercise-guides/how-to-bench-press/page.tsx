import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "How to Bench Press: Full Technique Guide";
const DESC = "Step-by-step bench press technique, grip width, common mistakes, safety tips, and how to progress the bench press as a beginner.";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/how-to-bench-press" },
  title: "How to Bench Press — Technique Guide",
  description: DESC,
  keywords: ["how to bench press correctly", "bench press form guide", "bench press mistakes beginners"],
};

const faqs = [
  { q: "How wide should my grip be on the bench press?", a: "A grip slightly wider than shoulder-width is standard for most people, with forearms roughly vertical at the bottom of the movement. Grip width can be adjusted slightly based on comfort and shoulder mobility." },
  { q: "Should the bar touch my chest?", a: "Yes, for a full range of motion — lower the bar under control until it lightly touches the mid-chest, then press back up. Stopping short of the chest reduces the range of motion trained." },
  { q: "Do I need a spotter?", a: "Recommended, especially as weights get heavier. If no spotter is available, use a squat rack with safety pins set at chest height, or choose a weight you're confident you can always complete or rack safely." },
  { q: "Why do my shoulders hurt when bench pressing?", a: "Often caused by flared elbows (elbows too far out from the body) or insufficient shoulder blade retraction. Tucking elbows slightly and keeping the shoulder blades pulled back and down on the bench usually resolves this." },
];

const references = [
  "Green CM, Comfort P. The effect of grip width on bench press performance and risk of injury. Strength Cond J. 2007;29(5):10–14.",
  "Saeterbakken AH et al. The effect of bench press variations in competitive athletes on muscle activity and performance. J Hum Kinet. 2017;57:61–71.",
];

export default function HowToBenchPressPage() {
  return (
    <ArticleLayout
      title="How to Bench Press: Full Technique Guide"
      category="Exercise Guides"
      categoryHref="/exercise-guides"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Lie flat with your shoulder blades pulled back and down, grip the bar slightly wider than shoulder-width, and lower it under control to your mid-chest with elbows at roughly 45 degrees. Press back up along a slight arc rather than a straight vertical line. Use a spotter or safety pins as weight increases."
      relatedCalculators={[
        { name: "One Rep Max Calculator", href: "/calculators/one-rep-max", icon: "🏋️" },
      ]}
      relatedArticles={[
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "4-Day Upper/Lower Workout Plan", href: "/workout-plans/4-day-upper-lower", time: "8 min" },
        { title: "Dumbbell Exercises Guide", href: "/exercise-guides/dumbbell-exercises", time: "6 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/exercise-guides/how-to-bench-press", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Step-by-Step Technique</h2>
      <ol>
        <li><strong>Setup:</strong> Lie on the bench with your eyes roughly under the bar. Pull your shoulder blades back and down, creating a slight arch in your upper back.</li>
        <li><strong>Grip:</strong> Grip the bar slightly wider than shoulder-width, wrists stacked directly over your elbows.</li>
        <li><strong>Unrack:</strong> Lift the bar off the rack and position it over your shoulders, not your face.</li>
        <li><strong>Lower:</strong> Bring the bar down under control to your mid-chest, elbows at roughly a 45° angle from your torso, not flared straight out to the sides.</li>
        <li><strong>Press:</strong> Push the bar back up along a slight arc toward your shoulders, keeping your feet planted and glutes on the bench.</li>
      </ol>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Flared elbows</strong> — pressing with elbows straight out to the sides puts more stress on the shoulder joint. Keep them at roughly 45°.</li>
        <li><strong>Bouncing the bar off the chest</strong> — reduces control and increases injury risk; lower under control and pause briefly before pressing.</li>
        <li><strong>Feet moving or heels lifting</strong> — reduces the stable base you press from; keep feet planted throughout.</li>
        <li><strong>Uneven bar path</strong> — often from one side pressing harder than the other; slow down and focus on symmetry.</li>
      </ul>

      <h2>Safety</h2>
      <p>Use a spotter when working near your limits, or set safety pins on a squat rack at chest height so the bar can't trap you if a rep fails. Never bench press heavy without one of these safeguards in place.</p>

      <h2>How to Progress</h2>
      <p>Start with just the bar or light dumbbells to learn the movement pattern. Add weight in small increments (2–2.5 kg) once you can complete all working sets with good form and full range of motion. If shoulder discomfort appears, reduce weight and check elbow position before continuing to add load.</p>
    </ArticleLayout>
  );
}
