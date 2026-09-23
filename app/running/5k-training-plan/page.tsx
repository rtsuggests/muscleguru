import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "5K Training Plan for Beginners: Couch to 5K in 8 Weeks";
const DESC = "An 8-week beginner 5K training plan with a run-walk progression, weekly schedule, and tips for running your first 5K in India.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/5k-training-plan" },
  title: "5K Training Plan for Beginners",
  description: DESC,
  keywords: ["5k training plan beginners", "couch to 5k India", "how to run 5k"],
};

const faqs = [
  { q: "How long does it take a beginner to train for a 5K?", a: "8 weeks is a common and realistic timeline for a complete beginner, training 3 days a week. Someone with some existing fitness could compress this, but 8 weeks allows a gradual, lower-injury-risk build-up." },
  { q: "Can I walk during my 5K?", a: "Yes, especially early in training. A run-walk approach is a well-established way to build up running endurance safely, and many people use walk breaks even in their first race." },
  { q: "What if I miss a week of training?", a: "Repeat the previous week rather than skipping ahead. It's better to build the base solidly than to progress on schedule but under-prepared." },
  { q: "Do I need running shoes specifically?", a: "Proper running shoes with adequate cushioning reduce injury risk compared to casual sneakers or sandals, especially as weekly volume increases." },
];

const references = [
  "Buman MP et al. Reconceptualizing the phases of marathon training. J Sport Exerc Psychol. 2008;30(3):319–335.",
  "American College of Sports Medicine. ACSM's Guidelines for Exercise Testing and Prescription. 11th ed. 2021.",
];

export default function FiveKTrainingPlanPage() {
  return (
    <ArticleLayout
      title="5K Training Plan for Beginners"
      category="Running"
      categoryHref="/running"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="An 8-week run-walk progression takes a complete beginner from short run-walk intervals to running a full 5K. Train 3 days a week with rest days in between, and don't be afraid to repeat a week if it feels too hard — consistency matters more than sticking exactly to the schedule."
      relatedCalculators={[
        { name: "VO2 Max Calculator", href: "/calculators/vo2-max", icon: "🫁" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "10K Training Plan", href: "/running/10k-training-plan", time: "8 min" },
        { title: "Running Injuries: Prevention Guide", href: "/running/running-injuries-prevention", time: "8 min" },
        { title: "How to Run Faster", href: "/running/how-to-run-faster", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/5k-training-plan", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>How the Plan Works</h2>
      <p>This plan uses a run-walk method: alternating short running intervals with walking breaks, gradually increasing the running portion each week. This lets a complete beginner build endurance while managing injury risk, rather than trying to run continuously from day one.</p>

      <h2>8-Week Schedule (3 sessions/week)</h2>
      <table>
        <thead><tr><th>Week</th><th>Session structure</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Run 1 min / walk 2 min × 8 rounds</td></tr>
          <tr><td>2</td><td>Run 2 min / walk 2 min × 6 rounds</td></tr>
          <tr><td>3</td><td>Run 3 min / walk 2 min × 5 rounds</td></tr>
          <tr><td>4</td><td>Run 5 min / walk 2 min × 4 rounds</td></tr>
          <tr><td>5</td><td>Run 8 min / walk 2 min × 3 rounds</td></tr>
          <tr><td>6</td><td>Run 10 min / walk 1 min × 3 rounds</td></tr>
          <tr><td>7</td><td>Run 15 min / walk 1 min × 2 rounds</td></tr>
          <tr><td>8</td><td>Run 5K continuously, or with minimal walk breaks</td></tr>
        </tbody>
      </table>

      <h2>Weekly Structure</h2>
      <p>Train 3 non-consecutive days a week (for example Monday, Wednesday, Saturday), with rest or light activity on other days. This spacing gives your joints and muscles time to adapt between sessions, which matters for beginners more than for experienced runners.</p>

      <h2>Warm-Up and Cool-Down</h2>
      <p>5 minutes of brisk walking before each session, followed by dynamic stretches (leg swings, walking lunges). After running, 5 minutes of walking to bring your heart rate down, followed by light static stretching for the calves, hamstrings and hip flexors.</p>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Progressing too fast</strong> — jumping ahead in the schedule increases injury risk; repeat a week if it felt too hard rather than pushing forward.</li>
        <li><strong>Skipping rest days</strong> — running every day as a beginner is one of the most common causes of shin splints and other overuse injuries.</li>
        <li><strong>Ignoring pain</strong> — normal fatigue is expected; sharp or localized pain is a signal to stop and rest, not push through.</li>
      </ul>

      <h2>After Your First 5K</h2>
      <p>Once you can comfortably run a full 5K, you can work on running it faster, or extend toward a 10K using a similar gradual progression. See the 10K training plan and the guide on running faster for next steps.</p>
    </ArticleLayout>
  );
}
