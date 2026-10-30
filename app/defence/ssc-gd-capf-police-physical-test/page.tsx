import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "SSC GD, CAPF & State Police Physical Test: Standards + 6-Week Plan";
const DESC = "Exact running, height and chest standards for SSC GD, CAPF and state police exams, with a 6-week stamina plan built for training through Indian summer heat.";

export const metadata: Metadata = {
  alternates: { canonical: "/defence/ssc-gd-capf-police-physical-test" },
  title: "SSC GD CAPF Police Physical Test Standards",
  description: DESC,
  keywords: ["ssc gd running time", "ssc gd physical test standards", "capf police physical test training plan"],
};

const faqs = [
  { q: "What is the SSC GD running time for male candidates?", a: "5 km in 24 minutes, except for candidates applying from the Ladakh region, who run 1.6 km in 7 minutes instead, reflecting the altitude." },
  { q: "What is the SSC GD running time for female candidates?", a: "1.6 km in 8 minutes 30 seconds, except Ladakh region candidates, who run 800 m in 5 minutes." },
  { q: "Is the SSC GD PET pass/fail or marked?", a: "The PET (running) is qualifying only — you either meet the time or you don't, with no additional marks for running faster. This is different from the Agniveer PET, which is marked by timing group, so pacing strategy matters less here than simply getting under the cut-off with a safety margin." },
  { q: "What are the SSC GD height and chest requirements?", a: "170 cm height for General/SC/OBC male candidates (relaxed to around 162.5 cm for ST candidates), 157 cm for female candidates. Chest for male candidates is 80 cm unexpanded with a minimum 5 cm expansion, so at least 85 cm expanded. Weight is no longer assessed as a standalone cut-off — it's checked via BMI at the medical stage instead." },
  { q: "How should I train for a 5 km run in Indian summer heat?", a: "Shift training to early morning before sunrise, prioritise hydration in the hours before running rather than just during it, and don't skip heat-adapted training entirely — some exposure to the conditions you'll test in is more useful than training exclusively indoors or in the evening." },
];

const references = [
  "SSC GD Constable recruitment notifications and physical standards, Staff Selection Commission (ssc.nic.in) — standards are confirmed per notification year; verify your specific year's PDF before relying on any third-party summary, including this one.",
];

export default function SSCGDPhysicalTestPage() {
  return (
    <ArticleLayout
      title="SSC GD, CAPF & State Police Physical Test: Standards + 6-Week Plan"
      category="Defence Exams"
      categoryHref="/defence"
      readTime="10 min"
      lastUpdated="October 2026"
      summary="SSC GD male candidates run 5 km in 24 minutes; female candidates run 1.6 km in 8:30 (Ladakh region gets shorter distances). Height is 170 cm (male) / 157 cm (female) with ST relaxation, chest is 80 cm unexpanded + 5 cm expansion. The PET is qualifying only — no bonus marks for running faster, so train for a safety margin, not a personal best."
      relatedCalculators={[
        { name: "Running Pace Calculator", href: "/calculators/running-pace", icon: "🏃" },
        { name: "VO2 Max Calculator", href: "/calculators/vo2-max", icon: "🫁" },
        { name: "Water Intake Calculator", href: "/calculators/water-intake", icon: "💧" },
      ]}
      relatedArticles={[
        { title: "Agniveer Height, Weight & Chest Chart + 1.6km Run Plan", href: "/defence/agniveer-height-weight-chest-chart", time: "11 min" },
        { title: "NDA & CDS Medical BMI Standards", href: "/defence/nda-cds-medical-bmi-standards", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/defence/ssc-gd-capf-police-physical-test", description: DESC, dateModified: "2026-10-25" })}
      references={references}
      faqs={faqs}
    >
      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        <strong>Before you rely on any number here:</strong> SSC GD and CAPF standards are confirmed in the official notification for each recruitment year and can be revised. The figures below are consistent across the recent notification cycle, but check the current year's PDF on <strong>ssc.nic.in</strong> before treating any number — including these — as final.
      </div>

      <h2>SSC GD Running Standard (PET)</h2>
      <table>
        <thead><tr><th>Candidate</th><th>Distance</th><th>Time Limit</th></tr></thead>
        <tbody>
          <tr><td>Male (except Ladakh)</td><td>5 km</td><td>24 minutes</td></tr>
          <tr><td>Male (Ladakh region)</td><td>1.6 km</td><td>7 minutes</td></tr>
          <tr><td>Female (except Ladakh)</td><td>1.6 km</td><td>8 minutes 30 seconds</td></tr>
          <tr><td>Female (Ladakh region)</td><td>800 m</td><td>5 minutes</td></tr>
        </tbody>
      </table>
      <p>Unlike the Agniveer PET, this run is <strong>qualifying only</strong> — there's no scoring advantage to finishing faster than the cut-off. That changes the training goal: you're not chasing a personal best, you're building a reliable margin so a bad-weather day or a slightly-off morning doesn't put you outside the time limit.</p>

      <h2>Height & Chest Standards (PST)</h2>
      <table>
        <thead><tr><th>Requirement</th><th>Male</th><th>Female</th></tr></thead>
        <tbody>
          <tr><td>Height (General/SC/OBC)</td><td>170 cm</td><td>157 cm</td></tr>
          <tr><td>Height (ST relaxation)</td><td>~162.5 cm</td><td>~150 cm</td></tr>
          <tr><td>Chest</td><td>80 cm unexpanded, min. 5 cm expansion (85 cm expanded)</td><td>Not applicable</td></tr>
        </tbody>
      </table>
      <p>Weight is no longer used as a standalone rejection ground at the PST stage under current Ministry of Home Affairs guidelines — it's assessed via BMI during the medical examination instead, with a standard qualifying range rather than a fixed kilogram figure.</p>

      <h2>How CAPF and State Police Standards Compare</h2>
      <p>CAPF posts recruited through SSC GD generally follow the same standards above. RPF Constable height/chest standards are broadly similar (around 170 cm / 80–85 cm chest for male Executive Cadre). State police exams — including Delhi Police — set their own standards per notification, which can differ meaningfully from SSC GD, so always check the specific state or force's current notification rather than assuming SSC GD figures carry over.</p>

      <h2>6-Week Stamina Plan for Indian Summer Conditions</h2>
      <p>Training for a 5 km (or 1.6 km) timed run through Indian heat needs a different approach than training in cooler conditions — overheating, not fitness, is often what actually slows people down in April–June training blocks.</p>
      <table>
        <thead><tr><th>Weeks</th><th>Focus</th><th>Sessions/week</th></tr></thead>
        <tbody>
          <tr><td>1–2</td><td>Easy-paced base building, 3–4 km runs, early morning (before 7 am)</td><td>4</td></tr>
          <tr><td>3–4</td><td>Add tempo runs at target race pace for 1.5–2 km segments</td><td>4–5</td></tr>
          <tr><td>5</td><td>Full timed-distance attempts at target pace, twice this week</td><td>5</td></tr>
          <tr><td>6</td><td>Taper: reduce volume, 1 confidence-building timed run, rest 2 days before the test</td><td>3</td></tr>
        </tbody>
      </table>

      <h3>Heat-Specific Adjustments</h3>
      <ul>
        <li><strong>Train before sunrise.</strong> Temperature and humidity are both lower, and it's simply safer to run hard outdoors at this time for most of the year across Indian cities.</li>
        <li><strong>Hydrate ahead of time, not just during.</strong> Drinking well in the hours before a session matters more than what you drink mid-run for anything under 30 minutes.</li>
        <li><strong>Don't train exclusively indoors.</strong> Some heat exposure in training builds genuine heat tolerance; a candidate who has only ever run on a treadmill in an air-conditioned gym is often slower on test day than their training times suggest.</li>
        <li><strong>Watch for heat exhaustion signs</strong> — dizziness, nausea, stopping sweating — and stop immediately if they appear. No single training session is worth a heat injury.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>SSC GD's running test rewards consistency and a safety margin over raw speed, since there's no marks advantage to running faster than the cut-off. Build your base in weeks 1–2, confirm you can hit the time reliably by week 5, and taper into test day rather than peaking too early.</p>
    </ArticleLayout>
  );
}
