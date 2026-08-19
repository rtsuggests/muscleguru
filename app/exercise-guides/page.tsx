import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Exercise Guides India — How to Lift Safely",
  description: "Learn how to squat correctly with perfect form. Step-by-step squat technique guide for Indian beginners covering foot placement, depth, breathing, common mistakes, and barbell progressions.",
  keywords: ["how to squat India", "squat technique beginners", "barbell squat form", "squat mistakes India", "squat depth guide"],
};

const schema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "How to Squat: Complete Technique Guide for Indian Gym Beginners",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  { q: "How deep should I squat?", a: "Evidence-based research by Bloomquist et al. (2013) published in the European Journal of Applied Physiology found that full-depth squats (thighs below parallel) produced significantly greater muscle growth in the quadriceps and glutes compared to partial squats. The goal for most people should be to squat until the hip crease drops below the top of the knee — commonly called 'breaking parallel.' Full depth also requires greater ankle mobility, hip flexibility, and core stability, so beginners may need several weeks of mobility work before achieving full depth comfortably. Squatting shallow to allow more weight is a common mistake that reduces the training stimulus significantly." },
  { q: "What should my knees do during a squat?", a: "Your knees should track in the same direction as your toes throughout the squat — they should neither collapse inward (knee valgus) nor bow excessively outward. A moderate outward tracking angle (roughly 15–30 degrees from straight ahead) is appropriate for most people. Knee valgus (knees caving inward) is one of the most common squat faults and is associated with increased ACL and meniscus injury risk. It is typically caused by weak glutes, tight hip adductors, or poor motor control. Actively 'pushing your knees out' or 'spreading the floor with your feet' is a useful cue for correcting valgus." },
  { q: "How wide should my squat stance be?", a: "Stance width is highly individual and depends on your hip anatomy — specifically the angle and depth of your hip socket (acetabulum) and femur. There is no single 'correct' stance. Most people find a stance slightly wider than shoulder-width, with toes pointed out 30–45 degrees, works well. Those with wider hips or shallower hip sockets often squat better with a wider stance; those with narrower hips or deeper hip sockets may prefer a closer stance. Experiment with different widths and toe angles over several sessions to find what allows you to hit depth comfortably without excessive forward lean or lower back rounding." },
  { q: "Is it bad if my knees go over my toes when squatting?", a: "No — this is one of the most persistent myths in fitness. A 1978 study by Ariel suggested that knees passing beyond the toes increased knee stress, but subsequent research has thoroughly refuted this as a universal concern. A 2003 study by Fry et al. found that while knee torque increases when knees pass the toes, restricting forward knee travel shifts stress to the hips and lower back — not a safer outcome. For most people with normal anatomy, allowing natural forward knee travel during squats is correct. The toes-over-knees myth has likely caused more hip and lower back injuries than it has prevented knee injuries." },
  { q: "Should I use a squat rack or machine for beginners?", a: "Beginners should start with a bodyweight squat or goblet squat (holding a dumbbell at chest level) before progressing to a barbell. The goblet squat is an excellent learning tool because the front-loaded weight naturally encourages an upright torso and proper depth. Once you can perform 3 sets of 10 goblet squats with 20–30 kg with perfect form, the barbell back squat is the logical next progression. Squat machines (hack squat, leg press) are valid complementary tools but do not develop the full-body stability, core strength, and proprioception that free weight squats build." },
  { q: "Why does my lower back hurt after squatting?", a: "Lower back pain after squatting is most commonly caused by butt wink — a rounding of the lower back (lumbar flexion) at the bottom of the squat. This compresses the lumbar discs and places high shear stress on the lower back. Butt wink typically results from limited ankle dorsiflexion (ankle mobility), tight hip flexors, going deeper than your mobility allows, or a squat stance that doesn't suit your hip anatomy. Solutions include improving ankle mobility (calf stretching, ankle circles), elevating your heels slightly on plates while mobility improves, adjusting stance width, and not squatting beyond your current mobility range. If pain persists, consult a physiotherapist." },
];

export default function HowToSquatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> <span>›</span>
          <Link href="/exercise-guides" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Exercise Guides</Link> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>How to Squat</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span className="tag">Exercise Guide</span>
            <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>⏱ 12 min read</span>
            <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>📅 Updated January 2025</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
            How to Squat: Complete Technique Guide for Indian Gym Beginners
          </h1>
          <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Quick Answer</div>
            <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>
              Stand with feet slightly wider than shoulder-width, toes pointed 30–45° outward. Brace your core, push your knees out in line with toes, and sit down and back until your hip crease drops below your knee. Drive through your entire foot to stand. Keep your chest up and spine neutral throughout. Start with bodyweight, progress to goblet squat, then barbell back squat.
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.875rem", alignItems: "center", padding: "0.875rem", background: "var(--color-bg)", borderRadius: "0.75rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)", fontSize: "0.85rem", flexShrink: 0 }}>MG</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem" }}>MuscleGuru Editorial Team</div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-muted)" }}>Reviewed against NSCA, ACSM, and peer-reviewed exercise science literature</div>
            </div>
          </div>
        </div>

        <div className="seo-content">
          <h2>Why the Squat Is the Most Important Exercise You Can Learn</h2>
          <p>The squat is widely regarded by exercise scientists and strength coaches as the single most effective lower body exercise — and arguably the most valuable movement pattern in all of resistance training. It recruits more total muscle mass than virtually any other exercise, simultaneously developing the quadriceps, hamstrings, glutes, adductors, spinal erectors, core stabilisers, and even the upper back when performed with a barbell.</p>
          <p>Research by Escamilla (2001) in the journal <em>Medicine &amp; Science in Sports &amp; Exercise</em> confirmed that the squat produces higher levels of quadriceps and hamstring muscle activity than leg presses or leg extensions. A 2014 EMG study by Contreras et al. found that barbell back squats elicited the highest peak gluteus maximus activation of any exercise studied — exceeding hip thrusts, deadlifts, and lunges at comparable loads.</p>
          <p>Beyond muscle development, squatting is a fundamental human movement pattern — the same movement you use when sitting down and standing up, picking things off low shelves, and playing with children or grandchildren. Developing strength and mobility in the squat pattern directly improves quality of life and reduces injury risk in everyday activities.</p>
          <p>Despite its importance, the squat is also one of the most commonly performed incorrectly in Indian gyms. This guide covers everything you need to know — from the very first bodyweight squat to loaded barbell work — to build this pattern safely and effectively.</p>

          <h2>Muscles Worked in the Squat</h2>
          <p>Understanding which muscles the squat targets helps you appreciate why it deserves its place as the foundation of any lower body training programme:</p>
          <table>
            <thead><tr><th>Muscle Group</th><th>Role in Squat</th><th>Activation Level</th></tr></thead>
            <tbody>
              <tr><td>Quadriceps (front of thigh)</td><td>Primary mover — extends the knee during ascent</td><td>Very High</td></tr>
              <tr><td>Gluteus maximus (buttocks)</td><td>Primary mover — extends the hip during ascent</td><td>Very High</td></tr>
              <tr><td>Hamstrings (back of thigh)</td><td>Synergist — stabilises knee and assists hip extension</td><td>High</td></tr>
              <tr><td>Adductors (inner thigh)</td><td>Stabiliser — particularly in wider stances</td><td>High</td></tr>
              <tr><td>Spinal erectors (lower back)</td><td>Isometric stabiliser — maintains spine neutral</td><td>High</td></tr>
              <tr><td>Core (transverse abdominis, obliques)</td><td>Intra-abdominal pressure and trunk stability</td><td>Moderate–High</td></tr>
              <tr><td>Calves (gastrocnemius, soleus)</td><td>Stabiliser — ankle control during descent and ascent</td><td>Moderate</td></tr>
            </tbody>
          </table>

          <h2>Squat Progression: Where to Start</h2>
          <p>Before loading a barbell on your back, you must demonstrate competency at each preceding progression level. Rushing this process is the primary cause of squat-related injuries in beginners.</p>

          <h3>Stage 1: Bodyweight Squat (Weeks 1–2)</h3>
          <p>The bodyweight squat establishes the movement pattern, identifies mobility limitations, and builds the neural pathways required for effective loaded squatting. Perform 3 sets of 15–20 repetitions, focusing entirely on the movement quality rather than speed or depth initially.</p>
          <p><strong>Key coaching cues for the bodyweight squat:</strong></p>
          <ul>
            <li>Stand with feet slightly wider than shoulder-width, toes angled outward 30–45 degrees</li>
            <li>Take a deep breath into your belly (not your chest) and brace your core as if absorbing a punch</li>
            <li>Initiate the movement by simultaneously pushing your knees outward and sitting your hips back and down</li>
            <li>Keep your chest as upright as possible — do not allow the torso to collapse forward excessively</li>
            <li>Descend until your hip crease is at or below knee level (or as deep as mobility allows without lower back rounding)</li>
            <li>Drive through your entire foot — not just your toes or heels — to return to standing</li>
            <li>Exhale at the top of the movement</li>
          </ul>

          <h3>Stage 2: Goblet Squat (Weeks 2–6)</h3>
          <p>The goblet squat — holding a dumbbell or kettlebell vertically at chest level — is one of the most effective squat teaching tools available. The front-loaded weight counterbalances your bodyweight and naturally encourages a more upright torso, making it easier to achieve depth and maintain good position. It also teaches core bracing under load in a safer, more manageable format than the barbell.</p>
          <p>Begin with a dumbbell you can hold comfortably (10–20 kg) and progressively increase the weight over 4–6 weeks. When you can perform 3 sets of 10 repetitions with 30–40 kg with perfect form, you are ready to progress to the barbell.</p>

          <h3>Stage 3: Barbell Back Squat (6 weeks onward)</h3>
          <p>The barbell back squat is the pinnacle of squatting and allows the most progressive loading over time. It should be introduced only after demonstrating consistent technical proficiency in the goblet squat.</p>

          <h2>How to Perform the Barbell Back Squat: Step-by-Step</h2>
          <h3>Setup at the Rack</h3>
          <ol>
            <li><strong>Set bar height:</strong> Set the squat rack J-hooks so the bar rests approximately at the level of your upper chest (slightly below shoulder height). You should be able to walk under the bar, unrack it, take 2–3 steps back, and be in position without any awkward manoeuvring.</li>
            <li><strong>Bar position:</strong> For high-bar squats (the standard recommendation for most beginners), position the bar across your upper trapezius — on the muscular shelf created by your traps. The bar should rest on muscle, not on the bony protrusions of your cervical spine. Wrap your hands around the bar slightly wider than shoulder-width to create a stable shelf.</li>
            <li><strong>Grip and upper back tightness:</strong> Pull your elbows down and back to create tightness in your upper back. This creates a stable, rigid platform for the bar and prevents it from rolling or shifting during the movement. The tighter your upper back, the more stable the bar feels.</li>
          </ol>

          <h3>The Descent (Eccentric Phase)</h3>
          <ol>
            <li><strong>Unrack the bar:</strong> Take a full breath, brace your core hard, and drive your legs to lift the bar off the rack. Take 2–3 controlled steps back to your squatting position. Set your feet in your chosen stance.</li>
            <li><strong>Pre-squat breath:</strong> Take a deep diaphragmatic breath (your belly should expand, not just your chest). This creates intra-abdominal pressure that supports your spine. Hold this breath throughout the descent.</li>
            <li><strong>Initiate descent:</strong> Simultaneously push your knees outward and sit your hips back and down. Think of spreading the floor with your feet — this cue activates your hip external rotators and prevents knee valgus.</li>
            <li><strong>Maintain torso position:</strong> Your torso will naturally lean forward to some degree — this is normal and correct. Aim to keep it as upright as your mobility allows. Excessive forward lean (more than about 45 degrees from vertical) indicates limited ankle mobility or hip flexor tightness.</li>
            <li><strong>Achieve depth:</strong> Descend until your hip crease is at or below the level of the top of your knee (parallel or below). Pause briefly at the bottom.</li>
          </ol>

          <h3>The Ascent (Concentric Phase)</h3>
          <ol>
            <li><strong>Drive through the floor:</strong> Push your feet through the floor as if trying to leg-press the ground away from you. Drive your hips and shoulders upward at the same rate — do not let your hips shoot up faster than your shoulders (this causes the torso to tip forward, shifting stress to the lower back).</li>
            <li><strong>Continue pushing knees out:</strong> Maintain outward knee pressure throughout the ascent. The most common point for knee valgus to appear is the first quarter of the ascent when fatigue sets in.</li>
            <li><strong>Exhale at the top:</strong> Release your breath when you are past the hardest point of the lift (typically about halfway up). Some experienced lifters exhale at the top; others exhale during the ascent. Find what feels natural and consistent.</li>
            <li><strong>Re-rack safely:</strong> Walk forward to the rack with control, locate the J-hooks visually, and lower the bar onto them. Never dump the bar sideways or twist to re-rack.</li>
          </ol>

          <h2>Common Squat Mistakes and How to Fix Them</h2>
          <table>
            <thead><tr><th>Mistake</th><th>How to Identify It</th><th>Fix</th></tr></thead>
            <tbody>
              <tr><td>Knee valgus (knees caving in)</td><td>Knees drift inward during descent or ascent</td><td>Cue "push knees out"; strengthen glutes with hip abduction exercises</td></tr>
              <tr><td>Butt wink (lower back rounds at bottom)</td><td>Pelvis tucks under at the bottom of squat</td><td>Improve ankle mobility; don't squat below current mobility range; adjust stance</td></tr>
              <tr><td>Excessive forward lean</td><td>Torso falls forward, nearly parallel to floor</td><td>Improve ankle dorsiflexion; try heels elevated; practice goblet squat</td></tr>
              <tr><td>Hips shooting up first</td><td>Hips rise faster than shoulders on ascent</td><td>Cue "chest and hips rise together"; may indicate weak quads</td></tr>
              <tr><td>Not reaching depth</td><td>Squatting above parallel consistently</td><td>Work on hip and ankle mobility; use box squat as depth guide</td></tr>
              <tr><td>Bar drifting forward</td><td>Bar rolls toward neck during descent</td><td>Create more upper back tightness; pull elbows down harder</td></tr>
              <tr><td>Looking up excessively</td><td>Neck is hyperextended, chin high</td><td>Maintain neutral neck; gaze at a spot on the floor 2 metres ahead</td></tr>
            </tbody>
          </table>

          <h2>Mobility Requirements for a Good Squat</h2>
          <p>Many Indian adults — particularly those with desk jobs — have mobility limitations that directly impair squat quality. The three most common are:</p>

          <h3>Ankle Dorsiflexion (Most Common Limitation)</h3>
          <p>Ankle dorsiflexion — the ability to flex your foot toward your shin — is frequently limited in people who spend long hours sitting or wearing non-flat footwear. Limited dorsiflexion forces the heel to lift during the squat, causing the torso to tip forward and the lower back to round at depth.</p>
          <p><strong>Test:</strong> Kneel 10 cm from a wall and try to touch your knee to the wall while keeping your heel flat. If you cannot, you have limited ankle dorsiflexion.</p>
          <p><strong>Improve with:</strong> Calf stretching (standing calf stretch, seated towel stretch), ankle circles, and the wall ankle mobilisation drill daily for 4–6 weeks.</p>

          <h3>Hip Flexor Flexibility</h3>
          <p>Tight hip flexors (common in desk workers) limit the ability to achieve an upright torso during squats. Improve with: kneeling hip flexor stretches, pigeon pose, and couch stretch (rear foot elevated hip flexor stretch).</p>

          <h3>Thoracic Spine Mobility</h3>
          <p>Stiffness in the middle and upper back limits the ability to maintain an upright torso. Improve with: foam rolling the thoracic spine, thoracic extensions over a foam roller, and cat-cow stretches.</p>

          <h2>Squat Variations for Indian Gym-Goers</h2>
          <p>Once you have mastered the back squat, several valuable variations add training variety and target different aspects of leg development:</p>
          <ul>
            <li><strong>Front squat:</strong> Bar rests on front deltoids. Requires greater ankle mobility and quad dominance. More upright torso. Excellent for quad development.</li>
            <li><strong>Bulgarian split squat:</strong> Rear foot elevated on a bench. Highly effective for quad and glute development with lower spinal loading. Excellent for identifying leg strength asymmetries.</li>
            <li><strong>Box squat:</strong> Squat to a box or bench. Useful for learning to sit back, managing depth, and rehabilitating after lower body injuries.</li>
            <li><strong>Pause squat:</strong> Pause 2–3 seconds at the bottom. Eliminates the stretch-shortening cycle and develops strength at the most difficult position.</li>
            <li><strong>Hack squat (machine):</strong> Useful complement to barbell squatting. Allows higher quad loading with less spinal stress.</li>
          </ul>

          <h2>Squat Programming: Sets, Reps, and Progression</h2>
          <p>For beginners, the following progression scheme is evidence-based and widely used:</p>
          <table>
            <thead><tr><th>Training Phase</th><th>Sets × Reps</th><th>Load</th><th>Frequency</th><th>Progression</th></tr></thead>
            <tbody>
              <tr><td>Beginner (0–3 months)</td><td>3 × 8–10</td><td>Moderate (RPE 7–8)</td><td>3×/week</td><td>Add 2.5 kg each session</td></tr>
              <tr><td>Early intermediate (3–6 months)</td><td>4 × 6–8</td><td>Moderate-Heavy (RPE 8)</td><td>2×/week</td><td>Add 2.5 kg each week</td></tr>
              <tr><td>Intermediate (6+ months)</td><td>4–5 × 5–6</td><td>Heavy (RPE 8–9)</td><td>2×/week</td><td>Add 2.5 kg per 1–2 weeks</td></tr>
            </tbody>
          </table>
          <p>Use our <a href="/calculators/one-rep-max" style={{ color: "var(--color-brand)" }}>One Rep Max Calculator</a> to estimate your 1RM from a submaximal set, then programme your working weights at 70–80% of 1RM for hypertrophy or 80–90% for strength.</p>

          <h2>Safety Guidelines for Squatting in Indian Gyms</h2>
          <ul>
            <li><strong>Always use a spotter or safety bars:</strong> When squatting to failure or with near-maximal loads, use a spotter or set the safety bars at just below parallel so you can safely fail the lift by sitting onto them.</li>
            <li><strong>Warm up properly:</strong> Never load the bar to working weight without performing several warm-up sets. A typical warm-up sequence: bodyweight squat (10 reps), 40% of working weight (8 reps), 60% (5 reps), 80% (3 reps), then working sets.</li>
            <li><strong>Wear appropriate footwear:</strong> Flat-soled shoes (canvas shoes, dedicated weightlifting shoes) are appropriate for squatting. Cushioned running shoes allow the heel to compress and shift under load — a stability problem. Many Indian lifters successfully squat barefoot or in socks on a non-slip mat.</li>
            <li><strong>Do not squat through pain:</strong> Discomfort from muscle fatigue is normal; sharp or joint pain is not. Stop and assess if you experience knee, hip, or lower back pain during squatting.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Escamilla RF. Knee biomechanics of the dynamic squat exercise. <em>Med Sci Sports Exerc.</em> 2001;33(1):127-141.</li>
            <li>Bloomquist K et al. Effect of range of motion in heavy load squatting on muscle and tendon adaptations. <em>Eur J Appl Physiol.</em> 2013;113(8):2133-2142.</li>
            <li>Contreras B et al. A comparison of gluteus maximus, biceps femoris, and vastus lateralis EMG activity. <em>J Strength Cond Res.</em> 2015;29(4):1109-1116.</li>
            <li>Fry AC et al. Effect of knee position on hip and knee torques during the barbell squat. <em>J Strength Cond Res.</em> 2003;17(4):629-633.</li>
            <li>NSCA. <em>Essentials of Strength Training and Conditioning.</em> 4th ed. Human Kinetics, 2016.</li>
          </ol>

          <div className="disclaimer-box">
            <strong>⚠️ Disclaimer:</strong> This guide is for educational purposes. If you have existing knee, hip, or lower back injuries or conditions, consult a physiotherapist or sports medicine doctor before performing squats.
          </div>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides & Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {[
                ["🏋️ How to Deadlift", "/exercise-guides/how-to-deadlift"],
                ["💪 How to Bench Press", "/exercise-guides/how-to-bench-press"],
                ["🏆 One Rep Max Calc", "/calculators/one-rep-max"],
                ["📋 3-Day Workout Plan", "/workout-plans/3-day-full-body"],
                ["💪 Protein Calculator", "/calculators/protein"],
                ["🔝 Pull-Up Guide", "/exercise-guides/pull-up-guide"],
              ].map(([name, href]) => (
                <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>{name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
