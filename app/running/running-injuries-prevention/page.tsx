import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Running Injuries: Prevention Guide for Common Problems";
const DESC = "The most common running injuries — shin splints, runner's knee, IT band syndrome, plantar fasciitis — their causes, prevention, and the 10% training rule.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/running-injuries-prevention" },
  title: "Running Injuries — Prevention Guide",
  description: DESC,
  keywords: ["running injury prevention", "shin splints runners knee", "common running injuries"],
};

const faqs = [
  { q: "What's the most common running injury?", a: "Runner's knee (patellofemoral pain syndrome) and shin splints are among the most frequently reported overuse injuries in runners, especially those increasing volume quickly." },
  { q: "What is the 10% rule?", a: "A guideline suggesting weekly running distance shouldn't increase by more than roughly 10% from the previous week, to give tissues time to adapt and reduce overuse injury risk." },
  { q: "Does strength training actually prevent running injuries?", a: "Yes — building strength in the hips, glutes and core addresses common underlying weaknesses linked to several overuse running injuries, particularly runner's knee and IT band syndrome." },
  { q: "When should I see a doctor for a running injury?", a: "If pain persists beyond a few days of rest, worsens during or after running, or affects your walking gait, see a doctor or physiotherapist rather than trying to run through it." },
];

const references = [
  "van der Worp MP et al. Injuries in runners: a systematic review on risk factors and sex differences. PLoS One. 2015;10(2):e0114937.",
  "Fokkema T et al. Preventing running-related injuries using evidence-based online advice: the design of a randomised-controlled trial. BMJ Open Sport Exerc Med. 2017;3(1):e000265.",
];

export default function RunningInjuriesPreventionPage() {
  return (
    <ArticleLayout
      title="Running Injuries: Prevention Guide"
      category="Running"
      categoryHref="/running"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Most running injuries — shin splints, runner's knee, IT band syndrome, plantar fasciitis — are overuse injuries caused by increasing volume or intensity too quickly. The 10% rule, adequate footwear, and hip/glute strength training are the most effective, well-supported prevention strategies."
      relatedArticles={[
        { title: "5K Training Plan for Beginners", href: "/running/5k-training-plan", time: "8 min" },
        { title: "Overtraining: Signs, Symptoms and How to Recover", href: "/recovery/overtraining-signs", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/running-injuries-prevention", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Shin Splints (Medial Tibial Stress Syndrome)</h2>
      <p>Pain along the inner shin bone, usually from a sudden increase in running volume or intensity, or worn-out footwear. Prevention: increase mileage gradually, replace shoes with worn-down cushioning, and consider running on softer surfaces occasionally if you're prone to this.</p>

      <h2>Runner's Knee (Patellofemoral Pain Syndrome)</h2>
      <p>Pain around or behind the kneecap, often linked to weak hip and glute muscles that allow the knee to track poorly during running. Prevention: hip and glute strengthening exercises (clamshells, lateral band walks, single-leg squats) alongside gradual mileage progression.</p>

      <h2>IT Band Syndrome</h2>
      <p>Pain on the outside of the knee, commonly associated with weak hip abductors and a sudden increase in downhill running or training volume. Prevention: hip strengthening, gradual progression, and addressing any noticeable gait or hip-drop issues.</p>

      <h2>Plantar Fasciitis</h2>
      <p>Heel or arch pain, often worst with the first steps in the morning. Linked to inadequate footwear support, sudden volume increases, and tight calf muscles. Prevention: proper footwear, calf stretching, and gradual training progression.</p>

      <h2>The 10% Rule</h2>
      <p>A widely used guideline: don't increase weekly running distance by more than roughly 10% from the previous week. This gives connective tissue and bone time to adapt to increasing load, which is a major factor in most overuse running injuries.</p>

      <h2>Strength Training for Injury Prevention</h2>
      <p>Research consistently links hip and glute weakness to several of the injuries above. Adding 2 sessions a week of strength work targeting these areas — squats, lunges, glute bridges, lateral band walks — is one of the most effective prevention strategies available to runners.</p>

      <h2>Footwear Guide</h2>
      <p>Running shoes typically need replacing every 500–800 km, depending on your weight, running surface and shoe type, as cushioning breaks down gradually and often imperceptibly. Getting fitted at a specialty running store, rather than guessing, helps match shoe type to your foot shape and running style.</p>
    </ArticleLayout>
  );
}
