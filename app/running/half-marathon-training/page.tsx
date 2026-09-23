import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Half Marathon Training Plan: 12 Weeks to 21.1K";
const DESC = "A 12-week half marathon training plan for intermediate runners, long run progression rules, and popular half marathons in India.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/half-marathon-training" },
  title: "Half Marathon Training Plan — 12 Weeks",
  description: DESC,
  keywords: ["half marathon training plan", "21k training plan India", "half marathon India"],
};

const faqs = [
  { q: "What fitness level do I need before starting half marathon training?", a: "Being able to comfortably run 5K is a reasonable starting point for a 12-week half marathon plan. Complete beginners may want to build a running base first with a 5K or 10K plan before jumping to 21.1K training." },
  { q: "How much should my weekly long run increase?", a: "No more than about 10% per week is a commonly used guideline to reduce overuse injury risk, with a lighter 'recovery' week roughly every 3–4 weeks where the long run distance drops back down." },
  { q: "Do I need to run the full 21.1K in training before race day?", a: "No — most plans peak at 16–18K for the longest training run, 2–3 weeks before the race, relying on race-day adrenaline and a tapered final week to cover the remaining distance." },
  { q: "How many days a week should I train?", a: "4–5 running days a week is typical for a half marathon plan, mixing easy runs, one quality session (tempo or intervals), and a weekly long run." },
];

const references = [
  "Buman MP et al. Reconceptualizing the phases of marathon training. J Sport Exerc Psychol. 2008;30(3):319–335.",
];

export default function HalfMarathonTrainingPage() {
  return (
    <ArticleLayout
      title="Half Marathon Training Plan: 12 Weeks"
      category="Running"
      categoryHref="/running"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="A 12-week plan for runners already comfortable with 5K builds toward 21.1K through a gradually increasing weekly long run, peaking around 16–18K a few weeks before race day. Keep weekly long-run increases to roughly 10%, with a lighter recovery week every 3–4 weeks."
      relatedCalculators={[
        { name: "VO2 Max Calculator", href: "/calculators/vo2-max", icon: "🫁" },
      ]}
      relatedArticles={[
        { title: "10K Training Plan", href: "/running/10k-training-plan", time: "8 min" },
        { title: "Running Injuries: Prevention Guide", href: "/running/running-injuries-prevention", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/half-marathon-training", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>12-Week Half Marathon Training Plan</h2>
      <table>
        <thead><tr><th>Weeks</th><th>Long run progression</th><th>Weekly sessions</th></tr></thead>
        <tbody>
          <tr><td>1–3</td><td>8K → 10K → 11K</td><td>4 runs/week: 2 easy, 1 quality, 1 long</td></tr>
          <tr><td>4</td><td>Recovery week: long run drops to 8K</td><td>Lighter overall volume</td></tr>
          <tr><td>5–7</td><td>12K → 13K → 14K</td><td>4–5 runs/week</td></tr>
          <tr><td>8</td><td>Recovery week: long run drops to 10K</td><td>Lighter overall volume</td></tr>
          <tr><td>9–10</td><td>15K → 16–18K (peak long run)</td><td>5 runs/week</td></tr>
          <tr><td>11</td><td>Taper: long run down to 10–12K</td><td>Reduced volume, race-pace practice</td></tr>
          <tr><td>12</td><td>Taper: short easy runs only</td><td>Race day</td></tr>
        </tbody>
      </table>

      <h2>Long Run Rules</h2>
      <ul>
        <li><strong>The 10% rule:</strong> Increase weekly long-run distance by no more than roughly 10% to manage injury risk</li>
        <li><strong>Recovery weeks:</strong> Every 3–4 weeks, drop the long run back down to let your body absorb the training rather than continuously pushing distance up</li>
        <li><strong>Practice fuelling:</strong> From around 90 minutes onward, practise the hydration and fuelling strategy you plan to use on race day, since a half marathon takes most runners well over this duration</li>
        <li><strong>Run at an easy, conversational pace</strong> for most long runs — they're about building endurance, not testing speed</li>
      </ul>

      <h2>Major Half Marathons in India</h2>
      <p>India has a growing half marathon calendar across major cities, with events typically held between October and February when temperatures are more favourable for distance running. Check registration timelines well in advance, as popular city events can fill up months ahead.</p>

      <h2>Race Week</h2>
      <p>Reduce training volume significantly in the final week (tapering), prioritise sleep, and avoid trying anything new — new shoes, new food, new gear — right before race day. The training is done; race week is about arriving rested and prepared.</p>
    </ArticleLayout>
  );
}
