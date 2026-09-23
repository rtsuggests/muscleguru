import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "How to Breathe While Running: A Complete Guide";
const DESC = "Breathing techniques for running — diaphragmatic breathing, nose vs mouth breathing, rhythmic breathing patterns, and how to prevent side stitches.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/breathing-while-running" },
  title: "How to Breathe While Running",
  description: DESC,
  keywords: ["how to breathe while running", "running breathing technique", "side stitch prevention running"],
};

const faqs = [
  { q: "Should I breathe through my nose or mouth while running?", a: "Mouth breathing (or a combination of nose and mouth) allows more oxygen intake and is standard for moderate-to-hard running efforts. Nose-only breathing can work for easy-paced runs but usually becomes limiting once effort increases." },
  { q: "Why does my side hurt when I run?", a: "Side stitches are commonly linked to shallow chest breathing and eating too close to a run. Diaphragmatic (belly) breathing and allowing 2–3 hours between a full meal and a run both help reduce their frequency." },
  { q: "What is rhythmic breathing?", a: "Matching your breath to your footstrike in a set pattern (for example, inhaling for 3 steps, exhaling for 2). Some runners find this helps manage effort and reduce impact-related stitches, though it's a personal preference, not a requirement." },
  { q: "How do I deal with pollution while running outdoors?", a: "On days with poor air quality, consider indoor or treadmill running instead, avoid running directly alongside heavy traffic, and choose early morning hours when pollution levels are often (though not always) lower." },
];

export default function BreathingWhileRunningPage() {
  return (
    <ArticleLayout
      title="How to Breathe While Running"
      category="Running"
      categoryHref="/running"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Breathe from your diaphragm (belly) rather than shallow chest breathing, and use a mix of nose and mouth breathing once effort increases beyond an easy pace. A rhythmic breathing pattern, matching breath to footstrike, can help some runners manage effort and reduce side stitches."
      relatedArticles={[
        { title: "5K Training Plan for Beginners", href: "/running/5k-training-plan", time: "8 min" },
        { title: "How to Run Faster", href: "/running/how-to-run-faster", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/breathing-while-running", description: DESC, dateModified: "2026-09-21" })}
      faqs={faqs}
    >
      <h2>Why Breathing Feels Hard for Beginners</h2>
      <p>New runners often breathe shallowly from the chest, which limits how much air actually reaches the lungs per breath and can contribute to feeling out of breath faster than expected. Learning to breathe from the diaphragm is one of the most useful early technique fixes for making running feel more sustainable.</p>

      <h2>Diaphragmatic Breathing</h2>
      <p>Rather than breathing shallowly into the chest, focus on letting your belly expand outward as you inhale. Practising this while lying down (hand on stomach, feeling it rise and fall) makes the sensation easier to recognise, so you can apply it while running.</p>

      <h2>Nose vs Mouth Breathing</h2>
      <p>For easy-paced runs, nose breathing alone can work well and is sometimes used deliberately to keep effort in check. As pace or effort increases, most runners naturally shift to a mix of nose and mouth, or mouth-only breathing, since it allows a greater volume of air intake to match rising oxygen demand.</p>

      <h2>The 3:2 Rhythmic Breathing Pattern</h2>
      <p>A commonly used pattern: inhale over 3 footstrikes, exhale over 2. This asymmetric rhythm means the exhale doesn't always land on the same foot, which some coaches suggest may help distribute impact-related stress more evenly. It's a tool some runners find useful for pacing and stitch prevention, not a rule everyone needs to follow.</p>

      <h2>Preventing Side Stitches</h2>
      <ul>
        <li>Practice diaphragmatic breathing rather than shallow chest breathing</li>
        <li>Leave 2–3 hours between a full meal and a run</li>
        <li>Warm up gradually rather than starting at full pace</li>
        <li>If a stitch starts, try exhaling forcefully on the opposite side to where it hurts, or slow your pace briefly</li>
      </ul>

      <h2>Breathing in Indian Pollution</h2>
      <p>Air quality varies significantly by city and season in India, with some cities experiencing notably poor air quality during certain months. On days with high pollution, consider running indoors or on a treadmill, avoid routes directly alongside heavy traffic, and favour early morning hours when levels are often, though not always, comparatively lower. Checking a local air quality index before an outdoor run is a reasonable habit in cities where pollution is a known concern.</p>
    </ArticleLayout>
  );
}
