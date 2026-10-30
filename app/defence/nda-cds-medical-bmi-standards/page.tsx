import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "NDA & CDS Medical BMI Standards: How They Differ From Civilian BMI";
const DESC = "Why the SSB medical board uses an age and height-banded weight chart instead of a flat BMI cutoff, and how it compares to civilian ranges.";

export const metadata: Metadata = {
  alternates: { canonical: "/defence/nda-cds-medical-bmi-standards" },
  title: "NDA CDS Medical BMI Standards Explained",
  description: DESC,
  keywords: ["NDA medical BMI standards", "CDS medical overweight underweight", "SSB medical BMI chart"],
};

const faqs = [
  { q: "Does the SSB medical board use the same BMI cutoffs as a civilian doctor?", a: "No. The Armed Forces Medical Services (AFMS) use their own age and height-banded height-weight chart (set out in the official AFMS Medical Standards Document), not the ICMR civilian BMI cutoffs of 23 and 27.5 used elsewhere on this site. The two systems are built for different purposes and shouldn't be used interchangeably to predict your medical outcome." },
  { q: "What BMI range is commonly cited for NDA candidates?", a: "Coaching resources commonly cite roughly below 27 for male candidates and below 25 for female candidates as rough upper bounds, but the actual pass/fail decision comes from the official height-and-age-banded weight chart, not a single flat BMI number. Treat any flat-number figure, including these, as a rough orientation rather than the exact cut-off that will be applied to you." },
  { q: "Can being overweight or underweight get me rejected even if I pass SSB?", a: "Yes. Overweight/underweight is consistently listed as one of the most common reasons for temporary medical unfitness at the post-SSB medical board, separate from and in addition to the SSB interview itself. Temporary unfitness usually means you're given time to correct it and get re-examined; it is a real setback, not an automatic end to your candidature." },
  { q: "Where can I find the exact official chart for my height?", a: "The complete height-weight table (reportedly covering 140–210 cm) is published as part of the official AFMS Medical Standards Document, referenced in Appendix-IV. This is the only source that should be treated as authoritative for your specific case — third-party summaries, including this article, are for general orientation only." },
  { q: "How much time do I have to fix an overweight/underweight rejection?", a: "Candidates found temporarily unfit for weight reasons are typically given a window to correct it before a re-examination (an Appeal Medical Board or Review Medical Board), rather than being rejected outright. The exact timeframe is set by the medical board and communicated directly to the candidate — it isn't a fixed number published in advance." },
];

const references = [
  "Armed Forces Medical Services (AFMS) Medical Standards Document — the official source for height-weight-age standards; third-party summaries including this article should not be treated as a substitute.",
  "Indian Council of Medical Research – National Institute of Nutrition. Nutrient Requirements for Indians, RDA 2020 (for the separate, civilian ICMR BMI cutoffs referenced for comparison).",
];

export default function NdaCdsMedicalBmiPage() {
  return (
    <ArticleLayout
      title="NDA & CDS Medical BMI Standards Explained"
      category="Defence Exams"
      categoryHref="/defence"
      readTime="9 min"
      lastUpdated="October 2026"
      summary="SSB medical boards assess weight against an age-and-height-banded chart from the official AFMS Medical Standards Document — not the civilian ICMR BMI cutoffs (23/27.5) used elsewhere on this site. Being clearly overweight or underweight for your height and age is consistently one of the most common reasons for temporary medical unfitness, separate from the SSB interview itself."
      relatedCalculators={[
        { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Lean Body Mass Calculator", href: "/calculators/lean-body-mass", icon: "📏" },
      ]}
      relatedArticles={[
        { title: "Agniveer Height, Weight & Chest Chart + 1.6km Run Plan", href: "/defence/agniveer-height-weight-chest-chart", time: "11 min" },
        { title: "SSC GD, CAPF & State Police Physical Test", href: "/defence/ssc-gd-capf-police-physical-test", time: "10 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/defence/nda-cds-medical-bmi-standards", description: DESC, dateModified: "2026-10-25" })}
      references={references}
      faqs={faqs}
    >
      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        <strong>This article is deliberately cautious with numbers.</strong> Unlike Agniveer or SSC GD height standards, the exact NDA/CDS medical weight chart is published only in the official AFMS Medical Standards Document, and different coaching sites quote slightly different figures for it. Where sources disagree or precision isn't verifiable, this article says so rather than presenting a single number as fact. Always check the official document or your SSB coaching institute's verified copy before your medical.
      </div>

      <h2>Why Defence Medical Standards Aren't the Same as Civilian BMI</h2>
      <p>Everywhere else on this site, BMI is assessed against ICMR-adapted cutoffs for Indian adults — overweight starting around 23, obese around 27.5. The SSB medical board for NDA and CDS candidates does not use this scale. Instead, the Armed Forces Medical Services apply their own height-weight-age table, built specifically around the physical demands of military training rather than general civilian health risk.</p>
      <p>This matters practically: a candidate who is "normal" by civilian BMI standards can still be flagged as underweight or overweight by the defence chart, because the acceptable range is banded by age and height in a way that doesn't map cleanly onto a single BMI number.</p>

      <h2>What's Commonly Cited (With a Caveat)</h2>
      <p>Several coaching resources cite rough orientation figures — approximately below 27 for male candidates and below 25 for female candidates — as a general ceiling. Treat these as a loose sense of range, not your actual cut-off. The real assessment is your weight against the official chart for your exact height and age bracket, which can be stricter or more lenient than a flat BMI number depending on where you fall.</p>

      <h2>Overweight/Underweight: How Often It Actually Causes Rejection</h2>
      <p>Across multiple independent coaching and SSB-preparation sources, "overweight/underweight" appears consistently as one of the most commonly cited reasons for medical unfitness after SSB recommendation — alongside vision problems, flat feet and knock knees. This is a genuine, frequent reason candidates lose their place after clearing the harder stages (written exam and SSB interview), which makes it worth taking seriously well before your medical date rather than treating it as a formality.</p>

      <h2>What Happens If You're Flagged</h2>
      <p>Being outside the weight range typically results in <strong>temporary</strong> unfitness, not permanent disqualification. You're generally given a window to correct your weight before a re-examination through an Appeal Medical Board or Review Medical Board. This is a real setback — it costs time and can affect your batch/course timeline — but it is usually recoverable if you act on it promptly rather than waiting.</p>

      <h2>How to Prepare Before Your Medical</h2>
      <ul>
        <li><strong>Know your height-for-age band early.</strong> Don't wait until your medical date to find out whether you're likely to be flagged — ask a verified SSB coaching resource or, ideally, consult the official AFMS document directly.</li>
        <li><strong>If you're likely to be flagged overweight:</strong> aim for a moderate, sustained calorie deficit (see our calorie deficit calculator) rather than a crash diet in the final weeks — rapid water-weight loss right before a medical can backfire and doesn't address the underlying issue.</li>
        <li><strong>If you're likely to be flagged underweight:</strong> a structured lean-gain approach (modest calorie surplus, resistance training, adequate protein) over several months works far better than trying to add weight quickly right before your medical.</li>
        <li><strong>Don't neglect the rest of your fitness</strong> while focused on weight — the SSB physical tasks and your general conditioning matter for the GTO tasks and your overall impression, not just the medical board.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>NDA and CDS medical weight standards are a different system from the civilian BMI guidance used elsewhere on this site, and the exact numbers genuinely vary by height and age band in a way no single flat BMI figure fully captures. If there's any doubt about where you stand, the safest move is checking the official AFMS document or a verified SSB coaching source well ahead of your medical date — not relying on any single article, including this one, as your final word.</p>
    </ArticleLayout>
  );
}
