import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Creatine Guide for Indians: Benefits, Dosage & Vegetarian Use";
const DESC = "How creatine works, how much to take (3–5 g a day), why vegetarians may benefit most, safety, side effects and what to look for when buying creatine monohydrate in India.";

export const metadata: Metadata = {
  alternates: { canonical: "/supplements/creatine-guide" },
  title: "Creatine Guide India — Benefits, Dosage & Vegetarian Use",
  description: DESC,
  keywords: ["creatine India", "creatine for vegetarians India", "creatine dosage", "creatine monohydrate India", "is creatine safe"],
};

const faqs = [
  { q: "How much creatine should I take per day?", a: "For most adults, 3–5 grams of creatine monohydrate once a day is enough. A loading phase (about 20 g a day split into four doses for 5–7 days) saturates muscle faster but is optional; the same level is reached in roughly 3–4 weeks at 3–5 g a day. Take it at any time of day, consistently." },
  { q: "Is creatine safe for the kidneys?", a: "In healthy people, studies up to several years long have not found kidney damage at recommended doses; the International Society of Sports Nutrition considers creatine monohydrate safe. Creatine can raise blood creatinine slightly, which is a lab artefact rather than kidney injury, but anyone with existing kidney disease should not supplement without their doctor's approval." },
  { q: "Do vegetarians need creatine?", a: "Vegetarians eat almost no dietary creatine, and studies find their muscle creatine stores are lower than in meat eaters. Research suggests that vegetarians can respond more strongly to supplementation. It is not compulsory, but it is one of the few supplements with a clear rationale for a vegetarian diet." },
  { q: "Does creatine cause hair loss?", a: "This concern comes from a single small study in rugby players that found a rise in DHT, a hormone linked to hair loss. Hair loss itself was not measured, and the finding has not been replicated. There is currently no good evidence that creatine causes hair loss." },
  { q: "Will creatine make me bloated or gain water weight?", a: "Creatine draws water into muscle cells, so a scale weight increase of 1–2 kg in the first weeks is common and is mostly intracellular water, not fat. It is not the same as puffiness under the skin. A loading phase can cause more stomach discomfort; skipping it usually avoids that." },
  { q: "Can women take creatine?", a: "Yes. The same 3–5 g dose is used, and research shows women improve strength and lean mass with creatine just as men do. It does not cause a bulky look; that depends on training, calories and genetics." },
  { q: "Which type of creatine should I buy?", a: "Creatine monohydrate. It is the form used in nearly all of the research, it is the cheapest, and no other form has been shown to work better. Look for a product with a lab test report or third-party testing, because supplement quality varies." },
];

const references = [
  "Kreider RB et al. International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017;14:18.",
  "Burke DG et al. Effect of creatine and weight training on muscle creatine and performance in vegetarians. Med Sci Sports Exerc. 2003;35(11):1946–1955.",
  "Branch JD. Effect of creatine supplementation on body composition and performance: a meta-analysis. Int J Sport Nutr Exerc Metab. 2003;13(2):198–226.",
  "Lanhers C et al. Creatine supplementation and upper limb strength performance: a systematic review and meta-analysis. Sports Med. 2017;47:163–173.",
  "Hultman E et al. Muscle creatine loading in men. J Appl Physiol. 1996;81(1):232–237.",
  "van der Merwe J, Brooks NE, Myburgh KH. Three weeks of creatine monohydrate supplementation affects dihydrotestosterone to testosterone ratio in college-aged rugby players. Clin J Sport Med. 2009;19(5):399–404.",
  "Smith-Ryan AE et al. Creatine supplementation in women's health: a lifespan perspective. Nutrients. 2021;13(3):877.",
];

export default function CreatineGuidePage() {
  return (
    <ArticleLayout
      title="Creatine for Indians: Benefits, Dosage & Vegetarian Use"
      category="Supplements"
      categoryHref="/supplements"
      readTime="9 min"
      lastUpdated="September 2026"
      summary="Creatine monohydrate is the most researched sports supplement. Take 3–5 g a day, any time, with or without food. It reliably improves strength and lean mass alongside resistance training, and vegetarians, who eat almost no dietary creatine, may see the biggest response. It is safe for healthy adults at this dose."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Lean Body Mass Calculator", href: "/calculators/lean-body-mass", icon: "📏" },
      ]}
      relatedArticles={[
        { title: "Whey Protein Explained: Types, Benefits & How to Choose", href: "/supplements/whey-protein-guide", time: "9 min" },
        { title: "Supplement Tier List: What Actually Works", href: "/supplements/supplement-tier-list", time: "8 min" },
        { title: "How Much Protein Do You Need?", href: "/nutrition/how-much-protein", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/supplements/creatine-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>What Is Creatine?</h2>
      <p>Creatine is a compound made from three amino acids (arginine, glycine and methionine). Your liver, kidneys and pancreas make about 1 gram a day, and you get roughly another gram from food if you eat meat or fish. About 95% of the body's creatine is stored in skeletal muscle, mostly as phosphocreatine.</p>
      <p>Its job is to help regenerate ATP, the molecule your muscles burn for short, intense efforts. Every set of squats, sprint or heavy lift leans on this system for the first several seconds. Supplementing raises muscle creatine stores, so you can do a little more work per session, and that extra work is what drives extra progress over weeks and months.</p>

      <h2>What Does the Research Say It Does?</h2>
      <p>Creatine monohydrate has been studied for more than three decades, and the results are consistent. In the International Society of Sports Nutrition (ISSN) position stand, it is described as the most effective ergogenic supplement available for increasing high-intensity exercise capacity and lean body mass. The evidence supports these benefits:</p>
      <ul>
        <li><strong>More strength and lean mass with resistance training.</strong> Meta-analyses report larger gains in strength and fat-free mass when creatine is added to a training programme, compared with training alone.</li>
        <li><strong>Better performance in repeated short efforts</strong>, such as sprints, jumps and sets close to failure.</li>
        <li><strong>Faster recovery between sets and sessions</strong>, which is one of the ways it supports training volume.</li>
      </ul>
      <p>Effects are modest, not magical. Think of it as a small, reliable edge on top of good training, enough food and sleep. It does nothing without the training itself.</p>

      <h2>Why It Matters More for Indian Vegetarians</h2>
      <p>Dietary creatine comes almost entirely from meat and fish. Dal, roti, paneer, curd, rajma and vegetables supply essentially none. Dairy and eggs contain only trace amounts, so a vegetarian relies almost entirely on the body's own production.</p>
      <p>Studies comparing vegetarians with meat eaters find lower muscle creatine stores in vegetarians. In a placebo-controlled trial in vegetarians and non-vegetarians, supplementation raised muscle creatine in both groups, and the vegetarians showed a larger increase in lean mass and training work than the meat eaters. This is one trial, so treat it as suggestive rather than settled, but the reasoning is sound: if your baseline is lower, there is more room to raise it.</p>
      <p>Since roughly a third or more of Indians follow a vegetarian diet, this is one of the few supplements with a clear, diet-specific rationale. It is not essential, and building muscle on a vegetarian diet is fully possible without it. It is simply an inexpensive way to close a small gap.</p>

      <h2>How Much Creatine to Take</h2>
      <table>
        <thead><tr><th>Approach</th><th>Dose</th><th>How long</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td>Standard (recommended)</td><td>3–5 g daily</td><td>Ongoing</td><td>Reaches full saturation in about 3–4 weeks</td></tr>
          <tr><td>Loading (optional)</td><td>About 20 g daily, split into 4 doses</td><td>5–7 days, then 3–5 g</td><td>Faster, but more stomach discomfort</td></tr>
        </tbody>
      </table>
      <p>For most people the standard approach is the better choice: same end result, fewer side effects, no extra steps. Larger people (for example above 90 kg) may use the upper end of the range. Higher doses beyond 5 g a day give no additional benefit for most people.</p>
      <p><strong>Timing.</strong> It barely matters. The goal is to keep muscle stores topped up, so consistency beats timing. Take it with a meal or a drink at whatever time you will remember, including on rest days. Mixing it in water, milk or a shake are all fine. Small amounts of carbohydrate or protein alongside it may slightly improve uptake, but this is not necessary.</p>

      <h2>Is Creatine Safe?</h2>
      <p>For healthy adults, the ISSN position stand concludes that creatine monohydrate is safe at recommended doses, including in studies lasting several years. Reported side effects are mostly minor:</p>
      <ul>
        <li><strong>Water retention in muscle</strong> leading to a 1–2 kg scale increase in the first weeks. This is intracellular water, not fat gain.</li>
        <li><strong>Stomach upset</strong>, especially with loading doses. Splitting the dose or skipping loading usually solves it.</li>
        <li><strong>A small rise in blood creatinine.</strong> Creatinine is a normal breakdown product of creatine, so tests can look slightly high without any kidney damage. Tell your doctor you take creatine before any blood test.</li>
      </ul>
      <p><strong>Who should check with a doctor first:</strong> anyone with kidney disease or reduced kidney function, people on medications that affect the kidneys, pregnant or breastfeeding women, and anyone under 18. The evidence for adolescents is limited and supplements are generally unnecessary at that age.</p>
      <p>On the hair-loss worry: it traces back to one small study in rugby players that found higher DHT levels after creatine. Hair loss was not measured and the result has not been replicated. There is no solid evidence that creatine causes hair loss.</p>

      <h2>How to Choose Creatine in India</h2>
      <ul>
        <li><strong>Buy creatine monohydrate.</strong> It is the form in nearly all of the studies. Marketing for other forms (HCl, buffered, "advanced") has not shown better results, and they cost more.</li>
        <li><strong>Check the label.</strong> The ingredient list should say creatine monohydrate and little else. A plain, unflavoured powder is usually the best value.</li>
        <li><strong>Look for third-party testing or a lab report.</strong> Supplement quality varies, and counterfeit products are a known issue with online marketplaces. Buy from the brand's official store or a trusted retailer, and check batch numbers and seals.</li>
        <li><strong>Ignore price-per-serving tricks.</strong> A month at 5 g a day needs about 150 g of powder. Compare on cost per 5 g of actual creatine, not per scoop.</li>
      </ul>

      <h2>Common Myths</h2>
      <ul>
        <li><strong>"Creatine is a steroid."</strong> No. It is a natural compound found in meat and made by your own body. It is not a hormone.</li>
        <li><strong>"You must cycle on and off."</strong> There is no evidence that cycling is needed. Long-term daily use at 3–5 g is studied and considered safe.</li>
        <li><strong>"It only works for men."</strong> Research in women shows comparable improvements in strength and lean mass.</li>
        <li><strong>"Milk and paneer give you enough."</strong> Dairy contains only trace amounts, far below what a 3–5 g supplement provides.</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>If you lift regularly, eat enough protein and sleep well, creatine monohydrate is a low-cost addition that has more evidence behind it than almost anything else in the supplement aisle. Take 3–5 g a day, be consistent, and buy a plain, tested product. If you are vegetarian, you are one of the people with the strongest reason to consider it. If you skip it, you can still build muscle.</p>
    </ArticleLayout>
  );
}
