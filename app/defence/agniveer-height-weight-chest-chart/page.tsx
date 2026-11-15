import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Agniveer Height, Weight & Chest Chart (Region-Wise) + 1.6km Run Plan";
const DESC = "Region-wise Agniveer height, weight and chest standards for GD, Technical and Tradesman, plus an 8-week diet and training plan to run 1.6km inside the cut-off.";

export const metadata: Metadata = {
  alternates: { canonical: "https://muscleguru.in/defence/agniveer-height-weight-chest-chart" },
  title: "Agniveer Height Weight Chest Chart",
  description: DESC,
  keywords: ["agniveer height weight chest chart", "agniveer 1.6 km running time", "agniveer physical standards region wise"],
};

const faqs = [
  { q: "What is the minimum height for Agniveer GD?", a: "170 cm in most regions (Western Plains, Eastern Plains, Central and Southern regions). Hill and border regions have lower minimums — around 163 cm in the Western Himalayan region (J&K, Himachal, Uttarakhand) and 160 cm in the Eastern Himalayan region (North Eastern states). Exact cut-offs are set rally-to-rally, so always check your specific recruitment notification on joinindianarmy.nic.in." },
  { q: "What is the chest requirement for Agniveer?", a: "77 cm unexpanded with a minimum 5 cm expansion, meaning your expanded chest must reach at least 82 cm. This figure is consistent across General Duty, Technical and Tradesman categories in most notifications, though always confirm against your own rally notification." },
  { q: "How fast do I need to run 1.6 km for Agniveer?", a: "Under 5 minutes 30 seconds for the top timing group (Group I), which carries the most PET marks. Slower timing groups still qualify but score fewer marks — the run is marked, not just pass/fail, so running faster than the bare minimum genuinely helps your final merit." },
  { q: "Is weight a hard cut-off or does it depend on height?", a: "Weight must be proportionate to your height and age, assessed against a medical board's height-weight chart rather than a single fixed number. Being significantly under or overweight for your height can lead to medical rejection even if you pass the run and push-ups." },
  { q: "Do height and chest standards really change by region?", a: "Yes. The Indian Army applies regional and category-based relaxations (hill areas, Gorkha/Dogra/Garhwali/Kumaoni communities, Scheduled Tribes, North Eastern states) because these populations have historically lower average height. This is a recognised, long-standing part of recruitment policy, not an error." },
];

const references = [
  "Indian Army recruitment notifications and physical standards, joinindianarmy.nic.in (official source — standards are confirmed rally-wise and can be revised; always verify against your specific notification before relying on any third-party chart, including this one).",
];

export default function AgniveerChartPage() {
  return (
    <ArticleLayout
      title="Agniveer Height, Weight & Chest Chart + 1.6km Run Plan"
      category="Defence Exams"
      categoryHref="/defence"
      readTime="11 min"
      lastUpdated="October 2026"
      summary="Minimum height for Agniveer GD is 170 cm in most regions, with lower minimums in hill and North Eastern regions. Chest must be 77 cm unexpanded with 5 cm expansion. The 1.6 km run is marked, not pass/fail — running under 5:30 puts you in the top scoring group. Standards are confirmed rally-wise, so always check your own notification."
      relatedCalculators={[
        { name: "Army Fitness Calculator", href: "/calculators/army-fitness", icon: "🪖" },
        { name: "Running Pace Calculator", href: "/calculators/running-pace", icon: "🏃" },
        { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
      ]}
      relatedArticles={[
        { title: "SSC GD, CAPF & State Police Physical Test", href: "/defence/ssc-gd-capf-police-physical-test", time: "10 min" },
        { title: "NDA & CDS Medical BMI Standards", href: "/defence/nda-cds-medical-bmi-standards", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/defence/agniveer-height-weight-chest-chart", description: DESC, dateModified: "2026-10-25" })}
      references={references}
      faqs={faqs}
    >
      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        <strong>Before you rely on any number here:</strong> Agniveer standards are set rally-by-rally and can differ by state, category and recruitment year. The figures below reflect widely consistent standards across recent notifications, but your own recruitment notification on <strong>joinindianarmy.nic.in</strong> is the only authoritative source for your specific rally. Treat this as a preparation guide, not a substitute for the official PDF.
      </div>

      <h2>Height Standards by Region</h2>
      <p>The Indian Army applies regional relaxation because average population height genuinely varies across India. These are the broad bands used across most General Duty (GD) and Tradesman notifications:</p>
      <table>
        <thead><tr><th>Region / Category</th><th>Minimum Height (Male)</th></tr></thead>
        <tbody>
          <tr><td>Western Plains (Punjab, Haryana, Rajasthan, Delhi, West UP)</td><td>170 cm</td></tr>
          <tr><td>Eastern Plains (Bihar, Jharkhand, East UP, Odisha, West Bengal)</td><td>169 cm</td></tr>
          <tr><td>Central Region (MP, Maharashtra, Gujarat, Chhattisgarh)</td><td>168 cm</td></tr>
          <tr><td>Southern Region (Tamil Nadu, Karnataka, Kerala, AP, Telangana)</td><td>166 cm</td></tr>
          <tr><td>Western Himalayan (J&K, Himachal Pradesh, Uttarakhand)</td><td>~163 cm</td></tr>
          <tr><td>Eastern Himalayan / North Eastern States</td><td>~160 cm</td></tr>
          <tr><td>Gorkha, Garhwali, Kumaoni, Dogra, Assamese and similar communities</td><td>165 cm (community-based relaxation, not region-based)</td></tr>
          <tr><td>Scheduled Tribes</td><td>Further relaxation, typically 162 cm</td></tr>
        </tbody>
      </table>
      <p>Agniveer Clerk/Store Keeper Technical generally has a lower height floor (around 162 cm) than GD and Technical, which usually sit at the regional standard above. Always cross-check the category you're applying for.</p>

      <h2>Chest Requirement</h2>
      <p>The standard chest requirement across GD, Technical and Tradesman categories is:</p>
      <ul>
        <li><strong>Unexpanded chest:</strong> minimum 77 cm</li>
        <li><strong>Minimum expansion:</strong> 5 cm</li>
        <li><strong>Expanded chest:</strong> must therefore reach at least 82 cm</li>
      </ul>
      <p>Chest expansion is measured, not estimated — it genuinely rewards breathing and rib-cage mobility work, not just raw size. Candidates from hill and tribal regions may see a marginally different benchmark; this is confirmed in the official notification, not a fixed universal exception.</p>

      <h2>Weight: Proportionate, Not a Flat Number</h2>
      <p>Unlike height and chest, weight is not a single cut-off. Medical officers assess whether your weight is proportionate to your height and age using a standard chart, and candidates significantly outside the expected range — in either direction — can be held back for being underweight or overweight, even after clearing the physical tests. If you're visibly thinner or heavier than typical for your height, it's worth addressing before your rally, not after a rejection.</p>

      <h2>The 1.6 km Run: It's Marked, Not Just Pass/Fail</h2>
      <p>This is the detail most first-time aspirants miss. The 1.6 km run carries PET marks based on which timing group you finish in — running faster than the bare qualifying time genuinely improves your merit position, it doesn't just get you through the door.</p>
      <table>
        <thead><tr><th>Group</th><th>Approx. Time</th><th>What it means</th></tr></thead>
        <tbody>
          <tr><td>Group I</td><td>Under 5:30</td><td>Highest PET marks</td></tr>
          <tr><td>Group II</td><td>5:31 – 5:45</td><td>Reduced marks</td></tr>
          <tr><td>Group III</td><td>5:46 – 6:30</td><td>Minimum qualifying marks</td></tr>
        </tbody>
      </table>
      <p>Exact group boundaries are set in your notification and can shift slightly year to year — the structure (faster time = more marks) is the consistent part worth training for.</p>

      <h2>8-Week Plan to Get Under 5:30</h2>
      <p>If you're currently running 1.6 km in 7–8 minutes, this progression is realistic for most fit young men starting from a reasonable base. If you're starting from near-zero running fitness, extend each phase by 2 weeks.</p>
      <table>
        <thead><tr><th>Weeks</th><th>Focus</th><th>Sessions/week</th></tr></thead>
        <tbody>
          <tr><td>1–2</td><td>Build aerobic base: easy-paced 3–4 km runs</td><td>4</td></tr>
          <tr><td>3–4</td><td>Add intervals: 6–8 × 400m at race pace, full recovery between</td><td>4 (2 easy + 2 interval)</td></tr>
          <tr><td>5–6</td><td>Timed 1.6 km attempts every 5th day; intervals continue</td><td>4–5</td></tr>
          <tr><td>7</td><td>Sharpen: shorter, faster intervals (200–300m); reduce volume</td><td>4</td></tr>
          <tr><td>8</td><td>Taper: 2 easy runs, 1 short sharp session, rest before the test</td><td>3</td></tr>
        </tbody>
      </table>
      <p>Alongside running, 2–3 sessions a week of push-ups and sit-ups to the official minimums (and beyond — like height and chest, these carry marks, not just pass/fail) will cover the rest of the PET.</p>

      <h2>Diet Through the Training Block</h2>
      <p>You're training hard and likely also trying to hit height/chest/weight targets, so food needs to support both performance and body composition:</p>
      <ul>
        <li><strong>Protein:</strong> 1.4–1.6 g/kg body weight daily — dal, eggs, paneer, chicken, curd spread across meals</li>
        <li><strong>Carbohydrate:</strong> Don't cut this short during a running block — rice, roti and fruit fuel the interval sessions that actually build your pace</li>
        <li><strong>If you need to gain weight:</strong> A modest surplus (run the TDEE calculator, add 300–400 kcal) with consistent resistance training, since being underweight for your height is itself a medical rejection risk</li>
        <li><strong>If you need to lose weight:</strong> A moderate deficit, not a crash diet — losing weight too fast alongside hard running training often costs you running performance exactly when you need it most</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Height and chest are fixed by biology and regional relaxation — you can't train your way past a hard minimum, but you can know exactly where you stand well before rally day. Weight and the 1.6 km run are both trainable, and because the run is marked rather than pass/fail, treating "qualifying" as the finish line leaves marks on the table. Start the 8-week block early enough that your final timed attempts land comfortably under your target, not right at it.</p>
    </ArticleLayout>
  );
}
