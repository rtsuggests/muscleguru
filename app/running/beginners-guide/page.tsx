import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Beginner Running Guide India — Start to 5K",
  description: "How sleep affects muscle growth, testosterone, recovery, and fat loss. Evidence-based guide for Indian gym-goers on optimising sleep for maximum training results.",
  keywords: ["sleep muscle growth India", "how sleep affects muscle building", "sleep recovery gym", "sleep and testosterone", "sleep tips India fitness"],
};

const faqs = [
  { q: "How many hours of sleep do I need to build muscle?", a: "Research consistently supports 7–9 hours of sleep per night for adults engaged in regular resistance training. A 2011 study by Dattilo et al. in Medical Hypotheses established that growth hormone secretion — the primary anabolic hormone released during sleep — is maximised with 8 hours of sleep and significantly reduced with less than 6 hours. Athletes in heavy training phases may benefit from 8–10 hours. The minimum effective sleep duration for muscle growth and recovery is approximately 7 hours — below this, muscle protein synthesis rates decline measurably." },
  { q: "What happens to muscle gains if I sleep only 5–6 hours?", a: "Research by Spiegel et al. found that sleeping 5.5 hours vs 8.5 hours while in a calorie deficit caused 60% less fat loss and 60% more muscle loss — a dramatic difference from the same calorie deficit with different sleep duration. A 2021 study by Knowles et al. found that sleep restriction reduced muscle protein synthesis rates by 18% compared to normal sleep. Practically: gym-goers sleeping 5–6 hours chronically are likely losing muscle or severely limiting muscle gain, regardless of how good their training and nutrition are." },
  { q: "Does it matter what time I sleep for muscle recovery?", a: "Timing matters less than total sleep duration, but consistency of sleep timing does matter. Research by Monk et al. shows that circadian rhythm disruption — shifting sleep times significantly between days — impairs growth hormone release even with the same total sleep duration. Going to sleep and waking at the same time every day (including weekends) supports optimal hormonal release. The first 90 minutes of sleep contain the deepest slow-wave sleep with the highest growth hormone pulse — this is why total sleep duration and sleep quality both matter." },
  { q: "How does Indian culture affect sleep quality for gym-goers?", a: "Several common Indian lifestyle patterns negatively affect sleep quality relevant to fitness: late dinner times (9–10 PM in many households increases GI activity during sleep); late-night screen use (blue light suppresses melatonin onset); chai consumption after 4 PM (caffeine has a 5–7 hour half-life); irregular sleep schedules driven by social and family obligations; shared bedrooms (noise disruption); and summer heat without air conditioning (optimal sleep temperature is 18–20°C). Addressing these cultural patterns — particularly meal timing and screen use — can meaningfully improve sleep quality." },
  { q: "Can naps compensate for poor night sleep?", a: "Short naps (20–30 minutes) can partially compensate for sleep debt and have been shown to improve alertness, mood, and short-term cognitive performance. Research by Mah et al. on athlete sleep extension found that even brief daily naps improved reaction time and sprint performance. However, naps cannot fully compensate for chronic short night sleep — particularly for hormonal cycles that depend on continuous sleep architecture (growth hormone is released in pulses during the night, not during daytime naps). If possible, address the root cause of night sleep deficiency rather than relying on naps as a long-term solution." },
  { q: "What supplements help sleep quality for Indian gym-goers?", a: "Evidence-based supplements that modestly improve sleep: magnesium glycinate (200–400mg before bed — many Indian diets are magnesium deficient, and magnesium supports GABA activity and sleep quality); ashwagandha (300–600mg — multiple Indian studies confirm modest improvements in sleep quality and cortisol reduction); melatonin (0.5–3mg — useful for jet lag or shift schedule adjustment, not for nightly use long-term). Note that Ayurvedic ashwagandha has specific evidence in Indian research contexts. All supplements should be discussed with a doctor before use." },
];

export default function SleepMuscleGrowthPage() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> <span>›</span>
          <Link href="/recovery" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Recovery</Link> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Sleep and Muscle Growth</span>
        </div>
      </div>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Recovery</span><span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>⏱ 10 min read</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>Sleep and Muscle Growth: The Complete Science Guide</h1>
        <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase" }}>Key Finding</div>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>Sleeping 5.5 hours vs 8.5 hours while dieting causes 60% more muscle loss and 60% less fat loss from the same calorie deficit. Poor sleep makes you simultaneously fatter and less muscular — even with perfect training and nutrition.</p>
        </div>

        <div className="seo-content">
          <h2>Why Sleep Is the Most Underrated Factor in Indian Fitness Culture</h2>
          <p>Indian fitness culture — both online and in gyms — obsessively discusses training programmes, supplements, and diet plans. Sleep receives a fraction of the attention it deserves, despite being the single most impactful recovery variable under your control. A survey of Indian gym-goers would likely reveal that the majority sleep 6 hours or less, train hard 4–5 days per week, take multiple supplements, and wonder why their results are suboptimal.</p>
          <p>The answer, for a significant proportion of them, is insufficient sleep. Research has established beyond reasonable doubt that sleep deprivation impairs muscle protein synthesis, reduces anabolic hormone levels, increases catabolic hormone levels, impairs glycogen replenishment, reduces next-day training performance, increases injury risk, and promotes fat gain. No supplement, no training programme, and no diet strategy can overcome the effects of chronically inadequate sleep.</p>
          <p>This guide presents the complete science of sleep&apos;s role in muscle growth and fitness adaptation — and practical strategies specifically tailored for the Indian lifestyle context.</p>

          <h2>The Physiology of Sleep and Muscle Building</h2>
          <h3>Growth Hormone: The Primary Sleep-Dependent Anabolic Hormone</h3>
          <p>Growth hormone (GH) is the most important anabolic hormone released during sleep. Research by Van Cauter et al. (2000) established that approximately 70–75% of the daily total growth hormone secretion in adults occurs during the first hours of sleep — specifically during slow-wave sleep (Stage N3). This is not a coincidence — growth hormone evolved to drive the repair and rebuilding processes that occur during rest.</p>
          <p>GH stimulates muscle protein synthesis directly, increases fat oxidation (fat burning), supports connective tissue repair, and modulates insulin sensitivity. Chronic sleep deprivation reduces total GH secretion — meaning gym-goers who sleep 5–6 hours are chronically suppressing the hormone most responsible for converting their training stimulus into actual muscle growth.</p>
          <h3>Testosterone: The Male Anabolic Hormone That Sleeps</h3>
          <p>Testosterone — the primary male anabolic hormone — is also profoundly sleep-dependent. Research by Leproult and Van Cauter (2011) in JAMA found that restricting sleep to 5 hours per night for just 8 consecutive days reduced testosterone levels by 10–15% in healthy young men. This magnitude of reduction is clinically significant — equivalent to ageing 10–15 years in terms of hormonal status.</p>
          <p>Lower testosterone directly reduces muscle protein synthesis rates, impairs recovery from training, reduces motivation and training drive, and increases fat accumulation. For Indian men concerned about muscle building and body composition, protecting testosterone levels through adequate sleep is as important as any training or nutritional strategy.</p>
          <h3>Cortisol: The Catabolic Hormone That Rises With Sleep Loss</h3>
          <p>Cortisol — the primary stress hormone — has an inverse relationship with sleep: sleep deprivation elevates cortisol, and elevated cortisol impairs sleep quality. This creates a vicious cycle that many stressed, sleep-deprived Indian professionals are trapped in.</p>
          <p>Chronically elevated cortisol promotes muscle protein breakdown (catabolism), visceral fat accumulation — particularly relevant for Indians with the &quot;thin-fat&quot; phenotype — insulin resistance, and appetite dysregulation (increasing hunger for high-calorie foods). Research by Dattilo et al. (2011) described sleep as the &quot;anabolic state&quot; precisely because it is when cortisol is at its daily nadir and anabolic hormones dominate.</p>

          <h2>Sleep Architecture: Why All Sleep Is Not Equal</h2>
          <p>Sleep is not a uniform state — it cycles through distinct stages, each with different physiological functions:</p>
          <table>
            <thead><tr><th>Stage</th><th>Type</th><th>Duration/Cycle</th><th>Fitness Relevance</th></tr></thead>
            <tbody>
              <tr><td>N1</td><td>Light sleep</td><td>5–10 min</td><td>Minimal — transition stage</td></tr>
              <tr><td>N2</td><td>Light sleep</td><td>20–25 min</td><td>Memory consolidation, skill learning (motor patterns)</td></tr>
              <tr><td>N3 (SWS)</td><td>Deep/slow-wave sleep</td><td>20–40 min</td><td>Maximum GH release, physical repair, glycogen replenishment</td></tr>
              <tr><td>REM</td><td>Rapid Eye Movement</td><td>15–30 min</td><td>Emotional processing, skill memory consolidation, brain restoration</td></tr>
            </tbody>
          </table>
          <p>Deep sleep (N3) dominates the first half of the night — meaning going to bed later shifts your sleep window into phases with less deep sleep and more REM. This is one reason why the common Indian pattern of sleeping at midnight and waking at 6 AM is suboptimal for fitness recovery, even if total duration reaches 6 hours.</p>

          <h2>What Research Shows About Sleep and Body Composition</h2>
          <h3>The Landmark Spiegel et al. Study</h3>
          <p>A seminal 2010 study by Spiegel et al. published in the <em>Annals of Internal Medicine</em> is the most cited evidence on sleep and body composition. Researchers placed overweight adults on a calorie-restricted diet and randomised them to either 5.5 hours or 8.5 hours of sleep per night for 14 days. Both groups lost the same total weight — but the composition was dramatically different:</p>
          <ul>
            <li>The 8.5-hour sleep group lost 55% of their weight as fat and 45% as lean mass</li>
            <li>The 5.5-hour sleep group lost only 25% of their weight as fat and 75% as lean mass</li>
          </ul>
          <p>In other words, sleeping less caused people to lose three times more muscle and two-thirds less fat from the same dietary intervention. This finding has profound implications for Indian gym-goers trying to lose fat while preserving muscle.</p>

          <h2>Practical Sleep Optimisation for Indian Gym-Goers</h2>
          <h3>Sleep Timing: Aligning with Circadian Biology</h3>
          <p>The human circadian rhythm is regulated by light exposure — particularly sunlight in the morning and darkness in the evening. Indian geography provides excellent natural light — sunrises at 5:30–6:30 AM across most of the country — which can be leveraged for circadian health:</p>
          <ul>
            <li><strong>Get outdoor morning light within 30–60 minutes of waking:</strong> Even 10 minutes of natural morning light exposure significantly anchors your circadian rhythm and improves evening melatonin onset.</li>
            <li><strong>Dim household lights after 8 PM:</strong> Bright overhead lighting suppresses melatonin. Switch to lamps or reduce lighting intensity in the evening.</li>
            <li><strong>Use blue light filters after 9 PM:</strong> Most smartphones have Night Mode or Warm Display settings. Enable these after 9 PM to reduce blue light exposure.</li>
            <li><strong>Consistent sleep and wake times:</strong> The most powerful circadian intervention. Set a consistent wake time 7 days per week — even if you go to bed late some nights, keeping the wake time consistent prevents major circadian drift.</li>
          </ul>
          <h3>The Indian Diet and Sleep Quality</h3>
          <p>Several common Indian dietary patterns affect sleep quality:</p>
          <ul>
            <li><strong>Late heavy dinners:</strong> Eating a large meal within 2–3 hours of sleep increases GI activity, core body temperature, and acid reflux — all of which impair sleep onset and quality. Ideally, finish your last major meal 2–3 hours before sleep.</li>
            <li><strong>Evening chai:</strong> A cup of chai at 6 PM contains approximately 40–70mg of caffeine. Given caffeine&apos;s 5–7 hour half-life, 35–50% of this caffeine is still active at midnight — potentially delaying sleep onset and reducing deep sleep. Cut caffeine after 2–3 PM for optimal sleep.</li>
            <li><strong>Tryptophan-rich pre-sleep foods:</strong> Warm milk (a traditional Indian pre-sleep drink) contains tryptophan — a precursor to serotonin and melatonin. This has a modest but real sleep-supporting effect. A small glass of warm milk 30–60 minutes before bed is a culturally familiar and evidence-consistent pre-sleep strategy.</li>
          </ul>

          <h2>Sleep and Training Performance: What the Research Shows</h2>
          <p>Beyond muscle building, sleep directly affects next-day training performance:</p>
          <table>
            <thead><tr><th>Sleep Duration</th><th>Effect on Training Performance</th><th>Source</th></tr></thead>
            <tbody>
              <tr><td>Less than 6 hours</td><td>Strength decreases 3–8%, reaction time slows, perceived exertion increases at same load</td><td>Reilly &amp; Piercy, 1994</td></tr>
              <tr><td>6–7 hours</td><td>Modest impairment — most people feel capable but performing suboptimally</td><td>Multiple sources</td></tr>
              <tr><td>7–9 hours</td><td>Optimal performance — baseline</td><td>AASM guidelines</td></tr>
              <tr><td>9–10 hours (extension)</td><td>Sprint speed +5%, shooting accuracy +9% (basketball athletes)</td><td>Mah et al., 2011</td></tr>
            </tbody>
          </table>
          <p>Use our <a href="/calculators/sleep" style={{ color: "var(--color-brand)" }}>Sleep Calculator</a> to find your optimal bedtime based on when you need to wake up — ensuring you complete full 90-minute sleep cycles and wake during light sleep rather than deep sleep.</p>

          <h2>Building Your Sleep Environment in India</h2>
          <ul>
            <li><strong>Temperature:</strong> Research identifies 18–20°C as optimal for sleep. In Indian summers where AC is available, setting it to 20–22°C significantly improves sleep quality. Without AC, use fans and breathable cotton bedding.</li>
            <li><strong>Darkness:</strong> Even small amounts of light exposure during sleep can impair melatonin secretion. Use blackout curtains or a sleep mask — particularly important in urban areas with street lighting.</li>
            <li><strong>Noise:</strong> India&apos;s urban environment is often noisy — traffic, construction, neighbours. Earplugs (₹50–₹200) or white noise apps can significantly reduce noise disruption.</li>
            <li><strong>Shared rooms:</strong> Many Indian families share bedrooms. Sleep schedule mismatches between family members are a significant sleep quality disruptor. Discussing sleep schedules and using eye masks and earplugs can help when schedules cannot be aligned.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Dattilo M et al. Sleep and muscle recovery: endocrinological and molecular basis for a new and promising hypothesis. <em>Med Hypotheses.</em> 2011;77(2):220-222.</li>
            <li>Van Cauter E et al. Age-related changes in slow wave sleep and REM sleep and relationship with growth hormone and cortisol levels in healthy men. <em>JAMA.</em> 2000;284(7):861-868.</li>
            <li>Leproult R, Van Cauter E. Effect of 1 week of sleep restriction on testosterone levels in young healthy men. <em>JAMA.</em> 2011;305(21):2173-2174.</li>
            <li>Spiegel K et al. Brief communication: Sleep curtailment in healthy young men is associated with decreased leptin levels. <em>Ann Intern Med.</em> 2004;141(11):846-850.</li>
            <li>Mah CD et al. The effects of sleep extension on the athletic performance of collegiate basketball players. <em>Sleep.</em> 2011;34(7):943-950.</li>
          </ol>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides & Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {[["😴 Sleep Calculator", "/calculators/sleep"], ["⚠️ Overtraining Signs", "/recovery/overtraining-signs"], ["🛌 Rest Days Guide", "/recovery/rest-days-explained"], ["💪 Protein Calculator", "/calculators/protein"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["📋 3-Day Workout Plan", "/workout-plans/3-day-full-body"]].map(([name, href]) => (
                <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>{name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
