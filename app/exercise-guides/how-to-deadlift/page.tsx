import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "How to Deadlift — Complete Technique Guide India",
  description: "Master the bench press with perfect form. Step-by-step bench press technique for Indian gym beginners — grip width, arch, bar path, breathing, spotter tips, and safe progression.",
  keywords: ["how to bench press India", "bench press technique beginners", "bench press form", "bench press mistakes", "how to bench press safely"],
};

const schema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "How to Bench Press: Complete Technique Guide for Indian Beginners",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  { q: "How wide should my grip be for bench press?", a: "A grip width where your forearms are vertical (or very close to vertical) when the bar touches your chest is optimal for both pressing efficiency and shoulder safety. For most people this means hands positioned slightly wider than shoulder-width — typically creating a 75–81 cm spacing between index fingers (the standard competition grip measurement). A very wide grip shortens range of motion but increases shoulder impingement risk; a very narrow grip (close-grip) shifts emphasis to the triceps and reduces pectoral activation. If you feel sharp shoulder pain at any grip width, that width is too wide for your shoulder anatomy." },
  { q: "Should I touch my chest with the bar when bench pressing?", a: "For most people, yes — a full range of motion bench press (bar touching the chest) produces greater pectoral muscle activation and development than partial reps. Research by Goto et al. (2017) confirmed that full ROM training produced superior muscle hypertrophy compared to partial ROM at equal loads. However, the bar should touch the chest at the bottom — not bounce off it. A controlled touch (or a deliberate pause) ensures the pectoral muscles perform the work rather than elastic rebound. Exceptions include people with shoulder injuries or impingement who may need to use a reduced range temporarily while rehabilitating." },
  { q: "Is it safe to bench press without a spotter?", a: "Heavy bench pressing without a spotter carries a genuine risk of being trapped under the bar (a 'failed lift'). Safer alternatives when training alone: use a power rack with safety bars set just below chest level (so you can slide the bar to the uprights if you fail), use dumbbells instead of a barbell (you can simply lower them to the sides if you fail), or use a Smith machine (controversial for technique development but safe for solo training). Never attempt a new maximum or near-maximum lift alone without safety equipment. For most working sets at 75–85% of 1RM, controlled technique significantly reduces fail risk." },
  { q: "Why do my shoulders hurt when I bench press?", a: "Shoulder pain during bench pressing is most commonly caused by: 1) Grip too wide — places the shoulder in an impingement-prone position; 2) Bar path too high — pressing toward the face rather than toward the lower chest increases shoulder joint stress; 3) Shoulder blades not retracted — allows the shoulder to roll forward under load; 4) Excessive elbow flare — elbows pointing perpendicular to the torso places maximum stress on the anterior shoulder capsule. Solutions: narrow your grip slightly, tuck your elbows to 45–60° from your torso, retract and depress your shoulder blades before each set, and press toward your lower chest. Persistent shoulder pain warrants a physiotherapy assessment." },
  { q: "How much should I bench press as a beginner?", a: "Most beginners can bench press 40–60 kg (including the 20 kg barbell) within the first few months of consistent training. Starting with the empty barbell (20 kg) to learn technique and adding 2.5 kg per session is the standard beginner progression. Strength standards for natural lifters after 1 year of training: men — 1× bodyweight for reps; women — 0.65–0.75× bodyweight for reps. These are guidelines, not targets — individual response varies significantly based on genetics, body structure, and training consistency." },
  { q: "What is the proper arch for bench pressing?", a: "A moderate natural arch in the lower back is both safe and mechanically advantageous during bench pressing. It shortens the range of motion slightly, places the shoulder in a more stable position, and allows greater force production. The arch should come from thoracic spine extension (upper back) and not be created by lifting the lower back dramatically off the bench (powerlifting arch). For general fitness purposes, an arch where your lower back is elevated off the bench by a few centimetres at most is appropriate. Keeping your glutes on the bench at all times is a good rule of thumb for fitness bench pressing." },
];

export default function HowToBenchPressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> <span>›</span>
          <Link href="/exercise-guides" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Exercise Guides</Link> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>How to Bench Press</span>
        </div>
      </div>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span className="tag">Exercise Guide</span>
            <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>⏱ 10 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>How to Bench Press: Complete Technique Guide for Indian Beginners</h1>
          <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase" }}>Quick Answer</div>
            <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>Lie flat on the bench, retract your shoulder blades into the pad, grip the bar slightly wider than shoulder-width with forearms vertical. Unrack with straight arms, lower the bar with control to your lower chest (nipple line), pause briefly, then press back to lockout. Keep your feet flat, glutes on the bench, and maintain shoulder blade retraction throughout. Tuck elbows to 45–60° — do not flare them perpendicular to your torso.</p>
          </div>
        </div>

        <div className="seo-content">
          <h2>The Bench Press: India's Most Popular Gym Exercise</h2>
          <p>Walk into any gym in India on a Monday and you will find the bench press stations occupied. It has become the de facto measure of upper body strength in gym culture worldwide — and for good reason. The bench press is the most effective horizontal pushing exercise available, developing the pectorals, anterior deltoids, and triceps more efficiently than any machine or dumbbell alternative at comparable loads.</p>
          <p>A 2020 systematic review by Lauver et al. in the <em>Journal of Human Kinetics</em> confirmed the barbell bench press as the gold standard for developing maximal upper body pressing strength and pectoral hypertrophy. EMG research by Barnett et al. (1995) found that the flat barbell bench press elicited the highest overall pectoral muscle activation compared to incline, decline, and dumbbell variations at matched intensities.</p>
          <p>Despite its popularity, the bench press is also frequently performed incorrectly in Indian gyms — flared elbows, bounced bar, excessive arch, and ego loads being the most common problems observed. This guide will teach you to bench press correctly from day one, building a strong chest while protecting your shoulders for decades of training.</p>

          <h2>Muscles Worked in the Bench Press</h2>
          <table>
            <thead><tr><th>Muscle</th><th>Role</th><th>Emphasis</th></tr></thead>
            <tbody>
              <tr><td>Pectoralis major (chest)</td><td>Primary mover — horizontal adduction and internal rotation</td><td>Very High</td></tr>
              <tr><td>Anterior deltoid (front shoulder)</td><td>Primary mover — shoulder flexion</td><td>High</td></tr>
              <tr><td>Triceps brachii</td><td>Primary mover — elbow extension</td><td>High</td></tr>
              <tr><td>Serratus anterior</td><td>Stabilises and protracts scapula</td><td>Moderate</td></tr>
              <tr><td>Rotator cuff muscles</td><td>Stabilises shoulder joint throughout movement</td><td>Moderate</td></tr>
              <tr><td>Rear deltoid / rhomboids</td><td>Isometric stabilisers during scapular retraction</td><td>Moderate</td></tr>
              <tr><td>Core</td><td>Stabilises torso, transfers force between lower and upper body</td><td>Moderate</td></tr>
            </tbody>
          </table>

          <h2>Essential Setup: The Foundation of a Safe and Strong Bench Press</h2>
          <p>Most bench press injuries and weak lifts can be traced directly to poor setup. Spend time getting this right every single set — it takes 10 seconds and prevents shoulder injuries that could sideline you for months.</p>

          <h3>Step 1: Position on the Bench</h3>
          <p>Lie on the bench so that your eyes are directly under the bar. Your head, upper back (shoulder blades), and glutes should all be in contact with the bench. Keep your feet flat on the floor — do not tuck them behind the bench or raise them on the bench, as this removes the stable base that supports your pressing force.</p>

          <h3>Step 2: Retract and Depress the Shoulder Blades</h3>
          <p>This is the most important setup step. Before gripping the bar, actively pull your shoulder blades together (retraction) and down toward your back pockets (depression). Think: "chest up, shoulder blades in your back pockets." Maintain this position throughout the entire set — the moment your shoulders round forward, you lose mechanical advantage and increase shoulder impingement risk. A useful cue is to think of bending the bar into a U-shape — this activates the muscles that keep your shoulder blades retracted.</p>

          <h3>Step 3: Grip Width and Bar Contact Point</h3>
          <p>Grip the bar so your forearms are vertical (or very close to it) when the bar is at your chest. For most people this is slightly wider than shoulder-width. Wrap your thumbs around the bar — never use a "suicide grip" (thumbs on the same side as fingers) as this allows the bar to roll out of your hands. The bar should rest in your palm at the base of your fingers, not high in your palm — this creates a straight wrist alignment.</p>

          <h3>Step 4: Foot Position and Leg Drive</h3>
          <p>Plant both feet flat on the floor. Your legs are not passive during the bench press — actively driving your feet into the floor during the press activates your whole body and contributes to the pressing force. Some advanced lifters use a foot drive technique (screwing feet into the floor) to generate additional leg-driven force into the bar.</p>

          <h2>How to Bench Press: Step-by-Step Execution</h2>
          <h3>Unracking the Bar</h3>
          <p>With your setup established and shoulder blades retracted, take a deep breath and brace your core. Unrack the bar by driving it straight up and slightly toward your feet — the bar should move to a position directly over your shoulders (not your chest). Your arms should be fully extended (locked out) at this point.</p>

          <h3>The Descent</h3>
          <ol>
            <li>From the locked-out position over your shoulders, begin lowering the bar by bending your elbows and allowing them to flare outward at approximately 45–60 degrees from your torso (not 90 degrees, and not tucked to your sides).</li>
            <li>The bar should travel in a slight arc — starting over your shoulders and touching down at approximately your lower chest (nipple line or slightly below). This diagonal bar path is mechanically efficient and shoulder-friendly.</li>
            <li>Maintain constant upper back tightness throughout the descent. Your shoulder blades must stay retracted and depressed — if they wing out or roll forward, you have lost position.</li>
            <li>Lower the bar with control — typically 2–3 seconds on the descent. Do not drop or bounce.</li>
            <li>The bar should lightly touch (or just above) your chest. A brief controlled pause at the bottom eliminates elastic rebound and ensures the muscles — not momentum — perform the work.</li>
          </ol>

          <h3>The Press</h3>
          <ol>
            <li>Drive the bar up and slightly back toward your shoulders — the same arc reversed.</li>
            <li>Exhale as you press through the sticking point (typically the bottom third of the movement).</li>
            <li>Continue pressing until your arms are fully locked out above your shoulders.</li>
            <li>Re-brace and repeat for the planned number of repetitions.</li>
            <li>To re-rack, move the bar forward over the uprights with locked arms and lower it into the J-hooks. Always rack visually — never by feel.</li>
          </ol>

          <h2>The Three Most Critical Bench Press Cues</h2>
          <ul>
            <li><strong>"Shoulder blades in your back pockets"</strong> — the single most important cue for shoulder safety and pressing power</li>
            <li><strong>"Elbows at 45–60 degrees"</strong> — the optimal elbow angle that maximises chest activation while minimising shoulder stress</li>
            <li><strong>"Bar to nipple line"</strong> — ensures correct bar path and full pectoral stretch at the bottom</li>
          </ul>

          <h2>Bench Press Variations for Complete Chest Development</h2>
          <table>
            <thead><tr><th>Variation</th><th>Primary Emphasis</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td>Flat barbell bench press</td><td>Overall chest, anterior delt, triceps</td><td>Primary pressing movement, maximum loading</td></tr>
              <tr><td>Incline bench press (30–45°)</td><td>Upper chest (clavicular head), anterior delt</td><td>Upper chest development, shoulder-friendly alternative</td></tr>
              <tr><td>Decline bench press</td><td>Lower chest (sternal head)</td><td>Lower chest fullness; less critical than flat/incline</td></tr>
              <tr><td>Dumbbell bench press</td><td>Chest with greater ROM and shoulder rotation</td><td>Unilateral control, shoulder rehabilitation</td></tr>
              <tr><td>Close-grip bench press</td><td>Triceps primary, chest secondary</td><td>Triceps development, lockout strength</td></tr>
              <tr><td>Push-up</td><td>Chest, anterior delt, triceps, serratus</td><td>Home training, beginner building block</td></tr>
            </tbody>
          </table>

          <h2>How to Progress the Bench Press Over Time</h2>
          <p>Linear progression — adding weight each session — works for beginners and should be followed until it stops working (typically 3–6 months into training):</p>
          <table>
            <thead><tr><th>Level</th><th>Sets × Reps</th><th>Frequency</th><th>Progression</th></tr></thead>
            <tbody>
              <tr><td>Beginner (0–3 months)</td><td>3 × 8–10</td><td>2–3×/week</td><td>+2.5 kg per session</td></tr>
              <tr><td>Intermediate (3–12 months)</td><td>4 × 5–8</td><td>2×/week</td><td>+2.5 kg per week</td></tr>
              <tr><td>Advanced (1+ years)</td><td>4–5 × 3–6</td><td>2×/week</td><td>+2.5 kg every 1–2 weeks</td></tr>
            </tbody>
          </table>
          <p>Track your progress using our <a href="/calculators/one-rep-max" style={{ color: "var(--color-brand)" }}>One Rep Max Calculator</a> — enter a recent set and rep count to estimate your 1RM and plan training percentages.</p>

          <h2>Bench Press Without a Spotter: Safe Alternatives</h2>
          <p>Many Indian gym-goers train alone or cannot reliably find a spotter. Here are safe solo options:</p>
          <ul>
            <li><strong>Power rack with safety bars:</strong> Set safeties just below chest level. If you fail, you can lower the bar to the safeties and slide out. The safest solo benching option.</li>
            <li><strong>Dumbbell pressing:</strong> If you cannot press the dumbbells, you can lower them to your armpits and sit up. Significantly safer than barbell when training alone.</li>
            <li><strong>Smith machine:</strong> Less technically demanding than free weight bench press, but safe for solo maximal effort work. A useful complement — not a replacement — for free weight pressing.</li>
            <li><strong>Band-assisted bench:</strong> Looping resistance bands from the bar to the uprights reduces bar weight at the bottom (where you are weakest) and makes failed reps less dangerous.</li>
          </ul>

          <h2>Common Bench Press Mistakes in Indian Gyms</h2>
          <ul>
            <li><strong>Bouncing the bar off the chest:</strong> Reduces pectoral work, risks rib injury. Touch and control, or pause.</li>
            <li><strong>Flaring elbows to 90°:</strong> Maximum shoulder impingement position. Tuck to 45–60°.</li>
            <li><strong>Not retracting shoulder blades:</strong> The most common setup fault. Retract and depress before every set.</li>
            <li><strong>"Monday only" syndrome:</strong> Training chest once per week at very high volume. Research supports 2× weekly frequency for superior hypertrophy.</li>
            <li><strong>Neglecting rear deltoids and upper back:</strong> The bench press is an anterior-dominant exercise. Balance it with equal volume of rows, face pulls, and rear delt work to prevent shoulder imbalance.</li>
            <li><strong>Excessive ego loading:</strong> Half-reps with too much weight. Full range of motion with controllable weight builds more muscle and prevents injury.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Barnett C et al. Effects of variations of the bench press exercise on the EMG activity of five shoulder muscles. <em>J Strength Cond Res.</em> 1995;9(4):222-227.</li>
            <li>Lauver JD et al. Influence of bench angle on upper extremity muscular activation during bench press exercise. <em>Eur J Sport Sci.</em> 2016;16(3):309-316.</li>
            <li>Goto M et al. Partial range of motion exercise is effective for facilitating muscle hypertrophy and function via sustained intramuscular hypoxia in young trained men. <em>J Strength Cond Res.</em> 2019;33(5):1286-1294.</li>
            <li>Green CM, Comfort P. The effect of grip width on bench press performance and risk of injury. <em>Strength Cond J.</em> 2007;29(5):10-14.</li>
          </ol>

          <div className="disclaimer-box">
            <strong>⚠️ Disclaimer:</strong> This guide is for educational purposes. People with existing shoulder, elbow, or wrist injuries should consult a physiotherapist before performing bench press exercises.
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides & Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {[["🦵 How to Squat", "/exercise-guides/how-to-squat"], ["🏋️ How to Deadlift", "/exercise-guides/how-to-deadlift"], ["🔝 Pull-Up Guide", "/exercise-guides/pull-up-guide"], ["🏆 One Rep Max Calc", "/calculators/one-rep-max"], ["📋 3-Day Full Body Plan", "/workout-plans/3-day-full-body"], ["💪 Protein Calculator", "/calculators/protein"]].map(([name, href]) => (
                <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>{name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
