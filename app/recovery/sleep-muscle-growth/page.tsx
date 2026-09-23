import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Sleep and Muscle Growth: How Much You Need and Why";
const DESC = "How sleep affects muscle protein synthesis, growth hormone and recovery, how much sleep to aim for, and practical steps to sleep better for training.";

export const metadata: Metadata = {
  alternates: { canonical: "/recovery/sleep-muscle-growth" },
  title: "Sleep and Muscle Growth — Science-Backed Guide",
  description: DESC,
  keywords: ["sleep and muscle growth", "sleep for recovery", "how much sleep for bodybuilding"],
};

const faqs = [
  { q: "How many hours of sleep do I need to build muscle?", a: "Most research on athletic recovery points to 7–9 hours a night for adults. Going below 6 hours consistently has been shown to impair recovery and reduce measures of strength performance." },
  { q: "Does poor sleep really stop muscle growth?", a: "Sleep restriction studies show reduced muscle protein synthesis and altered hormone levels, including lower testosterone and higher cortisol, with short sleep duration. This creates a less favourable environment for building muscle, even if training and diet stay the same." },
  { q: "Is a nap useful for recovery?", a: "A short nap (20–30 minutes) can help offset a poor night's sleep, but it is a partial fix, not a substitute for consistent nightly sleep." },
  { q: "Does sleep timing matter, not just duration?", a: "Consistency helps. Going to bed and waking at similar times most days supports better sleep quality than the same total hours at irregular times." },
];

const references = [
  "Dattilo M et al. Sleep and muscle recovery: endocrinological and molecular basis for a new and promising hypothesis. Med Hypotheses. 2011;77(2):220–222.",
  "Reilly T, Piercy M. The effect of partial sleep deprivation on weight-lifting performance. Ergonomics. 1994;37(1):107–115.",
  "Leproult R, Van Cauter E. Effect of 1 week of sleep restriction on testosterone levels in young healthy men. JAMA. 2011;305(21):2173–2174.",
];

export default function SleepMuscleGrowthPage() {
  return (
    <ArticleLayout
      title="Sleep and Muscle Growth"
      category="Recovery"
      categoryHref="/recovery"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Aim for 7–9 hours of sleep a night. Growth hormone release peaks during deep sleep, and chronic sleep under 6 hours has been shown to reduce muscle protein synthesis and lower testosterone. Sleep is not optional for recovery — it works alongside training and protein intake, not instead of them."
      relatedCalculators={[
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Muscle Gain Rate Calculator", href: "/calculators/muscle-gain-rate", icon: "📈" },
      ]}
      relatedArticles={[
        { title: "Overtraining Signs to Watch For", href: "/recovery/overtraining-signs", time: "7 min" },
        { title: "Rest Days Explained", href: "/recovery/rest-days-explained", time: "7 min" },
        { title: "How Muscle Actually Grows", href: "/muscle-gain/how-muscle-grows", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/recovery/sleep-muscle-growth", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Why Sleep Matters for Muscle Growth</h2>
      <p>Muscle isn't built in the gym — training creates the stimulus, but the actual repair and growth happens during recovery, and sleep is when most of that recovery takes place. Growth hormone release is concentrated in the first few hours of deep (slow-wave) sleep. Cutting sleep short cuts into this window directly.</p>

      <h2>What Happens When Sleep Is Cut Short</h2>
      <ul>
        <li><strong>Lower muscle protein synthesis</strong> — the process that repairs and builds muscle tissue slows down with insufficient sleep.</li>
        <li><strong>Hormonal shifts</strong> — a week of restricted sleep has been shown to lower testosterone by a meaningful margin in young men, alongside a rise in the stress hormone cortisol.</li>
        <li><strong>Reduced strength performance</strong> — studies on partial sleep deprivation show measurable drops in weightlifting performance the next day.</li>
        <li><strong>Increased injury risk</strong> — fatigue affects coordination and form under load.</li>
      </ul>

      <h2>How Much Sleep to Aim For</h2>
      <p>7–9 hours a night is the range supported by most recovery research for adults. Athletes and people training hard may benefit from the higher end of that range, or slightly more, especially during periods of heavy training.</p>

      <h2>Practical Steps to Sleep Better</h2>
      <ul>
        <li><strong>Keep a consistent schedule.</strong> Go to bed and wake up at similar times, including on weekends where possible.</li>
        <li><strong>Cut caffeine after early afternoon.</strong> Caffeine's effects can linger for 6+ hours and disrupt deep sleep even if you fall asleep fine.</li>
        <li><strong>Dim lights and screens before bed.</strong> Bright light, especially from phones, delays the body's natural sleep signal.</li>
        <li><strong>Keep the room cool and dark.</strong> Both support deeper, less interrupted sleep.</li>
        <li><strong>Don't train too close to bedtime</strong> if it leaves you too alert to fall asleep — for some people, a late intense session can delay sleep onset.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Training and protein intake get most of the attention, but sleep is the third pillar of recovery and it's often the one people skip first. If your gains have stalled despite good training and eating, checking your sleep is one of the highest-leverage places to look.</p>
    </ArticleLayout>
  );
}
