import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "How to Run Faster: 5 Proven Methods";
const DESC = "Five evidence-based methods to run faster — interval training, tempo runs, cadence, strength training and aerobic base building — plus a 6-week speed plan.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/how-to-run-faster" },
  title: "How to Run Faster — 5 Proven Methods",
  description: DESC,
  keywords: ["how to run faster", "improve running speed", "running speed training plan"],
};

const faqs = [
  { q: "Why have I stopped getting faster at running?", a: "Running the same easy pace on every run, with no dedicated speed or tempo work, is one of the most common reasons progress stalls. The body adapts to a consistent stimulus and needs a new, harder one (intervals, tempo runs, strength work) to keep improving." },
  { q: "What's the difference between interval training and tempo runs?", a: "Intervals are short, hard efforts (like 400m repeats) with recovery between them, targeting top-end speed and VO2 max. Tempo runs are sustained efforts at a 'comfortably hard' pace for 15-30+ minutes, improving your ability to sustain a faster pace for longer." },
  { q: "Does strength training actually help running speed?", a: "Yes — stronger legs and a more stable core improve running economy (how efficiently you use oxygen at a given pace), which translates to being able to hold faster paces with the same effort." },
  { q: "How long does it take to see speed improvements?", a: "With consistent training including intervals and tempo work, most runners notice measurable pace improvements within 6–8 weeks, though the exact timeline varies by starting fitness and consistency." },
];

const references = [
  "Barnes KR, Kilding AE. Running economy: measurement, norms, and determining factors. Sports Med Open. 2015;1:8.",
  "Blagrove RC et al. Effects of strength training on the physiological determinants of middle- and long-distance running performance: a systematic review. Sports Med. 2018;48(5):1117–1149.",
];

export default function HowToRunFasterPage() {
  return (
    <ArticleLayout
      title="How to Run Faster: 5 Proven Methods"
      category="Running"
      categoryHref="/running"
      readTime="9 min"
      lastUpdated="September 2026"
      summary="Running faster requires more than just running more — interval training, tempo runs, and strength training all address different limiters (top-end speed, sustained pace, and running economy respectively). Combining these with a solid aerobic base is what drives consistent progress once easy running alone stops producing results."
      relatedCalculators={[
        { name: "VO2 Max Calculator", href: "/calculators/vo2-max", icon: "🫁" },
      ]}
      relatedArticles={[
        { title: "10K Training Plan", href: "/running/10k-training-plan", time: "8 min" },
        { title: "Running Injuries: Prevention Guide", href: "/running/running-injuries-prevention", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/how-to-run-faster", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Progress Stalls</h2>
      <p>Running the same easy-paced route at the same effort week after week produces initial fitness gains, but the body adapts and plateaus without a new stimulus. Getting faster requires deliberately varying training — some sessions dedicated to speed, some to sustained effort, and some to building the underlying aerobic and strength base that supports both.</p>

      <h2>Method 1: Interval Training</h2>
      <p>Short, hard efforts (e.g., 400m at a fast pace) with recovery jogs or rest between reps. Intervals target top-end speed and VO2 max — your body's capacity to use oxygen during intense effort. Example: 6 × 400m at a hard effort, with 90 seconds recovery jog between each.</p>

      <h2>Method 2: Tempo Runs</h2>
      <p>A sustained effort at a "comfortably hard" pace — one you could hold for roughly 20–60 minutes if you had to, but wouldn't choose to go longer. Tempo runs improve your lactate threshold, the pace at which fatigue starts accumulating faster than your body can clear it. Example: 20 minutes at tempo pace, bracketed by an easy warm-up and cool-down jog.</p>

      <h2>Method 3: Cadence Improvement</h2>
      <p>Cadence (steps per minute) that's too low often means longer strides with more vertical bounce, which can be less efficient. Many runners find a modest increase in cadence — a slightly quicker, shorter stride — improves efficiency, though the ideal cadence varies by individual and isn't the same fixed number for everyone.</p>

      <h2>Method 4: Strength Training</h2>
      <p>Stronger legs and a more stable core improve running economy — how efficiently your body uses oxygen at a given pace. A systematic review of strength training in distance runners found it improved several performance-related measures without adding significant bulk. Squats, lunges, calf raises and core work, 2 sessions a week, are a reasonable addition to a running programme.</p>

      <h2>Method 5: Building Aerobic Base</h2>
      <p>Speed work matters, but it's built on top of a solid aerobic foundation from consistent easy-paced running. Skipping easy runs to do more hard sessions tends to backfire — most successful training plans are roughly 80% easy effort and 20% hard effort, not the other way around.</p>

      <h2>Hill Sprints: An Underused Tool</h2>
      <p>Short, hard efforts (8–12 seconds) up a moderate hill, followed by a full walk-down recovery, build power and running-specific strength with less joint impact than flat sprinting. 4–6 reps once a week is a useful addition once a base level of fitness is established.</p>

      <h2>A 6-Week Speed Development Approach</h2>
      <table>
        <thead><tr><th>Weeks</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>1–2</td><td>Add 1 interval session/week to your existing routine</td></tr>
          <tr><td>3–4</td><td>Add 1 tempo run/week alongside intervals</td></tr>
          <tr><td>5–6</td><td>Add hill sprints, keep easy runs at true easy pace</td></tr>
        </tbody>
      </table>
      <p>Introduce one new element at a time rather than adding everything at once — this reduces injury risk and makes it easier to see what's actually driving your improvement.</p>
    </ArticleLayout>
  );
}
