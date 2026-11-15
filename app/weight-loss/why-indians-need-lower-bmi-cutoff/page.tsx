import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Why Indians Need a Lower BMI Cut-off: 23, Not 25";
const DESC = "Why Indians face diabetes risk at a lower BMI: the 23 and 27.5 cut-offs, thin-fat bodies, waist limits, and how to check your own risk.";

export const metadata: Metadata = {
  alternates: { canonical: "https://muscleguru.in/weight-loss/why-indians-need-lower-bmi-cutoff" },
  title: "Why Indians Need a Lower BMI Cut-off (23)",
  description: DESC,
  keywords: ["BMI for Indians", "Indian BMI chart 23 overweight", "thin fat Indian TOFI", "WHO BMI vs Indian BMI"],
};

const faqs = [
  { q: "What BMI counts as overweight for Indians?", a: "The ICMR-NIN Dietary Guidelines for Indians (2024) define a BMI of 18.5 to 23 as normal, above 23 up to 27.5 as overweight, and above 27.5 as obese. The global WHO categories start overweight at 25 and obesity at 30." },
  { q: "Why is the global BMI cut-off 25 and not 23?", a: "The global categories were set largely from studies of European populations. WHO's 2004 expert consultation concluded that Asian populations carry increased risk at lower BMI values and identified 23 and 27.5 as public health action points, but WHO kept 25 and 30 as the international classification." },
  { q: "My BMI is 24. Should I be worried?", a: "Not worried, but it is worth a closer look. A BMI of 24 sits in the Indian overweight range, so check your waist size (90 cm or more in men and 80 cm or more in women adds risk) and consider a blood test if you have a family history of diabetes." },
  { q: "Is waist size more important than BMI for Indians?", a: "Often it is a better signal for diabetes and heart risk, because it reflects abdominal fat, which BMI cannot see. The best approach is to use both, along with blood tests if either is high." },
  { q: "Can I have a normal BMI and still be at risk of diabetes?", a: "Yes. Type 2 diabetes in Indians frequently develops at lower BMI than in Western populations, particularly in people with a large waist, low muscle mass and little physical activity." },
];

const references = [
  "WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet. 2004;363:157–163.",
  "ICMR-National Institute of Nutrition. Dietary Guidelines for Indians, 2024.",
  "Misra A, Chowbey P, Makkar BM, et al. Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians and recommendations for physical activity, medical and surgical management. J Assoc Physicians India. 2009;57:163–170.",
  "Yajnik CS, Fall CHD, Coyaji KJ, et al. Neonatal anthropometry: the thin-fat Indian baby. The Pune Maternal Nutrition Study. Int J Obes Relat Metab Disord. 2003;27:173–180.",
  "International Diabetes Federation. The IDF consensus worldwide definition of the metabolic syndrome. 2006 (Asian waist circumference thresholds).",
];

export default function WhyIndiansNeedLowerBmiPage() {
  return (
    <ArticleLayout
      title="Why Indians Need a Lower BMI Cut-off: 23, Not 25"
      category="Weight Loss"
      categoryHref="/weight-loss"
      readTime="9 min"
      lastUpdated="October 2026"
      summary="Global BMI cut-offs (overweight at 25, obese at 30) miss risk in many Indians. ICMR-NIN's 2024 guidelines treat a BMI above 23 as overweight and above 27.5 as obese, because Indians tend to carry more body fat, especially around the abdomen, at the same BMI. Waist size (90 cm in men, 80 cm in women) often tells you more than BMI does."
      relatedCalculators={[
        { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
        { name: "Waist-Hip Ratio", href: "/calculators/waist-hip-ratio", icon: "📐" },
        { name: "IDRS Diabetes Score", href: "/calculators/idrs", icon: "📋" },
      ]}
      relatedArticles={[
        { title: "Indian Vegetarian Diet for Blood Sugar", href: "/indian-diet/diabetes-diet-indian-vegetarian", time: "10 min" },
        { title: "Calorie Deficit Explained", href: "/weight-loss/calorie-deficit-explained", time: "7 min" },
        { title: "Strength Training Guide for Women", href: "/women/strength-training-guide", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/weight-loss/why-indians-need-lower-bmi-cutoff", description: DESC, dateModified: "2026-10-31" })}
      references={references}
      faqs={faqs}
    >
      <h2>BMI Cut-offs Compared</h2>
      <p>You will see several different BMI charts for Indians online, and they do not agree. That is because they come from different sources with different purposes:</p>
      <table>
        <thead><tr><th>System</th><th>Normal</th><th>Overweight</th><th>Obese</th></tr></thead>
        <tbody>
          <tr><td>WHO global classification</td><td>18.5 to 24.9</td><td>25 to 29.9</td><td>30 and above</td></tr>
          <tr><td>WHO 2004 Asian action points</td><td>18.5 to 22.9</td><td>23 and above: increased risk</td><td>27.5 and above: high risk</td></tr>
          <tr><td>ICMR-NIN Dietary Guidelines 2024</td><td>18.5 to 23</td><td>Above 23 to 27.5</td><td>Above 27.5</td></tr>
          <tr><td>2009 Indian consensus statement</td><td>18.5 to 22.9</td><td>23 to 24.9</td><td>25 and above</td></tr>
        </tbody>
      </table>
      <p>The BMI calculator on this site uses the ICMR-NIN 2024 cut-offs, because that is India's national dietary reference. The 2009 consensus statement, written by a group of Indian physicians, is stricter and still widely quoted in clinics. Neither says that a BMI of 24 means disease. They say that risk starts climbing earlier in Indians than the global chart suggests.</p>

      <h2>Why the Same BMI Means More Body Fat in Indians</h2>
      <p>BMI only measures weight against height. It cannot tell muscle from fat, or where fat is stored. Research on Indian populations, beginning with the Pune Maternal Nutrition Study in the early 2000s, described a "thin-fat" pattern: relatively low weight and muscle, but a higher proportion of body fat. A later analysis questioned how common this is at birth, so the newborn finding is debated. Comparisons of Indian and white European children and adults, however, repeatedly find a higher body fat percentage and more abdominal fat at the same or even lower BMI.</p>
      <p>The fat that matters most is stored around the abdominal organs (visceral fat) and in the liver. It interferes with how the body responds to insulin, which is why Indians are prone to type 2 diabetes, fatty liver, high triglycerides and heart disease at body weights that would look unremarkable in other populations.</p>

      <h2>Thin on the Outside, Fat on the Inside</h2>
      <p>This pattern is sometimes called TOFI. Typical signs are a BMI in the normal range, a waist above the healthy limit, low muscle mass and a mostly sedentary routine. Picture a man with a BMI of 22 and a waist of 96 cm: the chart says normal, but his waist says otherwise. The same applies to a woman with a BMI of 21 and a waist of 85 cm.</p>

      <h2>Waist Limits That Matter</h2>
      <ul>
        <li><strong>Men:</strong> a waist of 90 cm or more signals increased risk.</li>
        <li><strong>Women:</strong> a waist of 80 cm or more signals increased risk.</li>
        <li><strong>Waist-to-height ratio:</strong> keeping your waist below half your height is a simple target that works across heights.</li>
      </ul>
      <p>These are the thresholds used by the International Diabetes Federation for Asian populations, and they are also built into the <Link href="/calculators/idrs">Indian Diabetes Risk Score</Link>.</p>

      <h2>Check Your Own Risk in Three Steps</h2>
      <ol>
        <li><strong>Calculate your BMI</strong> with our <Link href="/calculators/bmi">BMI calculator</Link>, using the Indian cut-offs.</li>
        <li><strong>Measure your waist</strong> at the navel after breathing out, and compare it with the limits above.</li>
        <li><strong>Run the IDRS</strong> in our <Link href="/calculators/idrs">diabetes risk score calculator</Link>, which combines waist, age, activity and family history.</li>
      </ol>
      <p>If any of these flags a concern, ask your doctor about a fasting glucose or HbA1c test and a lipid profile. They are inexpensive and give far more information than a weighing scale.</p>

      <h2>What to Do If Your BMI Is Normal but Your Waist Is Not</h2>
      <ul>
        <li><strong>Lift weights two to three times a week.</strong> Building muscle improves how your body handles blood sugar and raises your metabolic rate, even if the scale barely moves.</li>
        <li><strong>Move daily.</strong> The ICMR-NIN guidelines advise at least 30 to 45 minutes of moderate activity every day.</li>
        <li><strong>Eat enough protein and vegetables,</strong> and reduce sugar. The same guidelines suggest keeping added sugar below 5% of your daily energy.</li>
        <li><strong>Sleep well.</strong> Poor sleep is linked with abdominal fat gain and higher blood sugar.</li>
      </ul>
      <p>Focus on waist size and strength rather than the number on the scale. A modest drop in waist size is a reliable sign that visceral fat is falling.</p>

      <h2>Limits of These Numbers</h2>
      <p>BMI is a screening tool, not a diagnosis. Very muscular people can have a high BMI with little excess fat, and older adults can have a normal BMI with low muscle and high fat. Children and teenagers need growth charts, not adult cut-offs, and pregnancy changes everything. When in doubt, a doctor can order a body composition scan or blood tests that look at your actual risk.</p>
    </ArticleLayout>
  );
}
