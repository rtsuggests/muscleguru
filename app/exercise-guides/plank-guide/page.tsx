import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Plank Guide: Perfect Form, Mistakes and Progressions";
const DESC = "How to do a plank with correct form, common mistakes to avoid, plank progressions, and how long you should actually hold one.";

export const metadata: Metadata = {
  alternates: { canonical: "/exercise-guides/plank-guide" },
  title: "Plank Guide — Form, Mistakes & Progressions",
  description: DESC,
  keywords: ["how to do a plank correctly", "plank form guide", "plank progressions beginner"],
};

const faqs = [
  { q: "How long should I hold a plank?", a: "30–60 seconds with good form is a solid target for most people. Holding much longer with breakdown in form (sagging hips, rounded back) trains bad positioning rather than core strength — it's better to do multiple shorter, clean sets than one long, sloppy one." },
  { q: "Why do my lower back or shoulders hurt during a plank?", a: "Lower back discomfort usually means the hips are sagging, shifting load onto the spine. Shoulder discomfort often means hands are positioned too far forward, or shoulders aren't stacked directly over elbows. Fix your position before continuing." },
  { q: "Is the plank enough for core training?", a: "It's a solid anti-extension exercise (resisting your spine from arching), but a well-rounded core routine also includes anti-rotation and direct flexion work — side planks, dead bugs, and similar movements complement it." },
  { q: "Can beginners do a full plank?", a: "Many can, but a knee plank is a reasonable regression if a full plank breaks down quickly. Master the knee version with good form before progressing to a full plank." },
];

const references = [
  "Schoenfeld BJ, Contreras B. Are Bodyweight Exercise Equivalent to Resistance Training? Strength Cond J. 2013;35(6):8–17.",
];

export default function PlankGuidePage() {
  return (
    <ArticleLayout
      title="Plank Guide: Perfect Form, Mistakes and Progressions"
      category="Exercise Guides"
      categoryHref="/exercise-guides"
      readTime="6 min"
      lastUpdated="September 2026"
      summary="A plank should form a straight line from head to heels, with hips level (not sagging or piked up) and shoulders stacked over elbows. 30–60 seconds with clean form beats a longer hold with breakdown. Progress by adding variations rather than just chasing longer times."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "No-Equipment Home Workout Guide", href: "/beginner-fitness/home-workout-guide", time: "8 min" },
        { title: "How to Squat: Full Technique Guide", href: "/exercise-guides/how-to-squat", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/exercise-guides/plank-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Perfect Plank Form</h2>
      <ol>
        <li>Forearms on the floor, elbows directly under shoulders</li>
        <li>Body forming a straight line from head to heels — no sagging or piking at the hips</li>
        <li>Core braced, glutes lightly squeezed</li>
        <li>Neck neutral, gaze down toward the floor rather than straining forward</li>
        <li>Breathe steadily throughout — holding your breath adds unnecessary strain</li>
      </ol>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Hips sagging</strong> — the most common mistake, shifting load onto the lower back instead of the core</li>
        <li><strong>Hips piked too high</strong> — reduces how much the core actually has to work</li>
        <li><strong>Shoulders not stacked over elbows</strong> — increases shoulder strain over time</li>
        <li><strong>Holding your breath</strong> — makes the hold feel harder than it needs to and can spike blood pressure unnecessarily</li>
      </ul>

      <h2>How Long Should You Hold a Plank?</h2>
      <p>30–60 seconds with clean form is a solid working target. Once form starts to break down — hips sagging, shaking excessively — the set is effectively over, even if the timer hasn't hit your goal. Multiple clean 30-second holds train the core better than one long, sloppy 90-second hold.</p>

      <h2>Plank Progressions</h2>
      <table>
        <thead><tr><th>Level</th><th>Variation</th></tr></thead>
        <tbody>
          <tr><td>Beginner</td><td>Knee plank (forearms + knees on floor)</td></tr>
          <tr><td>Standard</td><td>Full forearm plank</td></tr>
          <tr><td>Intermediate</td><td>Plank with shoulder taps, or side plank</td></tr>
          <tr><td>Advanced</td><td>Plank with leg lifts, or a weighted plank (plate on the back)</td></tr>
        </tbody>
      </table>

      <h2>Building a Complete Core Routine</h2>
      <p>The plank trains your core's ability to resist extension (your spine arching under load). A well-rounded routine also includes anti-rotation work (like a Pallof press) and direct flexion (like a crunch), giving more complete core training than the plank alone.</p>
    </ArticleLayout>
  );
}
