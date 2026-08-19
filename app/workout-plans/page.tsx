import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Workout Plans India — Gym & Home Programmes",
  description: "The best 3-day full body workout plan for Indian beginners. Complete programme with exercises, sets, reps, progression method, and Indian diet recommendations. Start training today.",
  keywords: ["3 day workout plan India", "full body workout beginners India", "gym workout plan India", "beginner workout plan", "3 day gym programme India"],
};

const faqs = [
  { q: "How many days a week should a beginner train?", a: "Research consistently supports 3 days per week as optimal for most beginners. A 2016 meta-analysis by Ralston et al. found that training frequency of 2–3 times per week per muscle group produced superior hypertrophy compared to once-weekly training. Full body training 3 days per week achieves this frequency naturally — every major muscle group is trained at every session. More is not better for beginners: adequate recovery between sessions is where muscle protein synthesis occurs and adaptations are realised." },
  { q: "Is this programme suitable for Indian vegetarians?", a: "Absolutely. The nutrition guidelines are designed with the Indian vegetarian diet in mind. Meeting the protein target of 1.6–2.0g/kg bodyweight on a vegetarian diet requires deliberate effort but is entirely achievable. Key sources: soya chunks (52g protein per 100g dry), paneer (18g/100g), eggs for lacto-ovo vegetarians, hung curd (10g/100g), dal combinations (8–9g/cup cooked), and whole milk (8g/250ml). Calculate your personalised protein target using our Protein Calculator." },
  { q: "How long should each workout session take?", a: "This programme is designed to be completed in 45–55 minutes including warm-up and cool-down. The 9 main exercises performed with adequate rest (90 seconds between sets of 3 sets each) take approximately 35–40 minutes. Add 5 minutes of warm-up (light cardio + mobility) and 5 minutes of cool-down stretching. If sessions consistently take longer than 60 minutes, reduce rest periods slightly or remove one accessory exercise. Workout quality beats workout length." },
  { q: "What should I eat before and after training?", a: "Pre-workout (1–2 hours before): a meal containing carbohydrates and protein — rice and dal, roti with paneer, or oats with milk. This provides glycogen for training and amino acids for muscle protein synthesis. Post-workout (within 2 hours): prioritise protein — 30–40g from any source (whey shake, paneer, eggs, soya chunks) alongside carbohydrates for glycogen replenishment. Our 7-Day Indian Meal Plan includes specific pre and post-workout meal recommendations built around common Indian foods." },
  { q: "Can I do cardio on rest days?", a: "Light to moderate cardio on rest days (walking, cycling, swimming at easy intensity) is beneficial and does not impair recovery from resistance training. Research by Schoenfeld et al. supports concurrent training (cardio + weights) without significant interference when cardio intensity is kept moderate and sessions are separated. 20–30 minutes of brisk walking on rest days supports cardiovascular health and active recovery without detracting from your strength training adaptations." },
  { q: "When should I progress to a more advanced programme?", a: "Progress to an intermediate programme (like the 4-day upper-lower split) when you can no longer add weight to your main lifts every week — typically after 3–6 months of consistent beginner training. Signs you are ready to progress: linear weight progression has stalled for 2–3 consecutive weeks despite proper sleep and nutrition, you can perform all prescribed sets with good form and feel the weight is manageable, and you have a solid foundation of technique in the main compound lifts." },
];

const workoutA = [
  { ex: "Barbell or Goblet Squat", sets: "3", reps: "8–10", rest: "90 sec", notes: "Primary lower body push movement. Focus on depth and control." },
  { ex: "Barbell Bench Press or Dumbbell Press", sets: "3", reps: "8–10", rest: "90 sec", notes: "Primary horizontal push. Shoulder blades retracted throughout." },
  { ex: "Barbell Row or Dumbbell Row", sets: "3", reps: "8–10", rest: "90 sec", notes: "Primary horizontal pull. Drive elbow back, squeeze mid-back." },
  { ex: "Romanian Deadlift", sets: "3", reps: "10–12", rest: "90 sec", notes: "Hip hinge, hamstring stretch, controlled throughout." },
  { ex: "Overhead Press (DB or BB)", sets: "3", reps: "8–10", rest: "90 sec", notes: "Vertical push. Core braced, do not hyperextend lower back." },
  { ex: "Lat Pulldown or Assisted Pull-Up", sets: "3", reps: "10–12", rest: "60 sec", notes: "Vertical pull. Elbows drive down and back." },
  { ex: "Dumbbell Lunges", sets: "2", reps: "10/leg", rest: "60 sec", notes: "Unilateral lower body. Step forward, knee to floor." },
  { ex: "Plank", sets: "3", reps: "30–45 sec", rest: "30 sec", notes: "Core finisher. Perfect form only — stop when hips sag." },
];

export default function ThreeDayFullBodyPage() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> <span>›</span>
          <Link href="/workout-plans" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Workout Plans</Link> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>3-Day Full Body Plan</span>
        </div>
      </div>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Beginner</span><span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>⏱ 12 min read</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>📅 Updated January 2025</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>3-Day Full Body Workout Plan for Indian Beginners</h1>

        <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.25rem", marginBottom: "2rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.75rem", textTransform: "uppercase" }}>Programme Overview</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
            {[["Duration", "12 weeks"], ["Days/Week", "3 (Mon/Wed/Fri)"], ["Session Length", "45–55 min"], ["Level", "Beginner"], ["Goal", "Strength + Muscle"], ["Equipment", "Barbell + Dumbbells"]].map(([label, val]) => (
              <div key={label} style={{ background: "#fff", borderRadius: "0.5rem", padding: "0.75rem", textAlign: "center" }}>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "var(--color-brand-dark)" }}>{val}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="seo-content">
          <h2>Why Full Body Training Is Best for Indian Beginners</h2>
          <p>The debate about training split vs full body training has been studied extensively by exercise scientists. For beginners, the evidence overwhelmingly supports full body training performed 3 days per week over body-part splits (chest day, back day, leg day) that dominate most Indian gyms.</p>
          <p>Research by Schoenfeld et al. (2016) in the <em>Journal of Strength and Conditioning Research</em> demonstrated that training each muscle group twice or three times per week produced significantly greater hypertrophy than once-weekly training with equal total weekly volume. A 3-day full body programme trains each muscle group 3 times per week — optimal frequency for beginners whose nervous systems are rapidly adapting to training stimuli.</p>
          <p>The body-part split approach — prevalent in Indian gym culture largely due to the influence of bodybuilding magazines and influencers — is an advanced technique designed for experienced lifters with high training volumes. For a beginner who trains chest on Monday, that muscle receives stimulus only once per week. A full body programme trains the same muscle 3 times per week — tripling the adaptation stimulus for no additional gym time.</p>
          <p>Additionally, full body training is more forgiving of missed sessions. If you miss a Wednesday session in a body-part split, you miss an entire muscle group for the week. In a full body programme, you simply resume at the next session with no lasting impact on your programme structure.</p>

          <h2>The Programme: Full Body A (Performed Monday, Wednesday, Friday)</h2>
          <p>This programme uses a single workout structure performed 3 times per week. While the exercises remain consistent, the progressive overload comes from adding weight systematically — a method called <em>double progression</em>: first increase reps to the top of the target range, then increase weight and return to the bottom of the range.</p>

          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table>
              <thead>
                <tr><th>#</th><th>Exercise</th><th>Sets</th><th>Reps</th><th>Rest</th><th>Coaching Notes</th></tr>
              </thead>
              <tbody>
                {workoutA.map((ex, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td style={{ fontWeight: 600 }}>{ex.ex}</td>
                    <td>{ex.sets}</td>
                    <td>{ex.reps}</td>
                    <td>{ex.rest}</td>
                    <td style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{ex.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>The Double Progression Method: How to Add Weight Over Time</h2>
          <p>Progressive overload — consistently increasing the demand placed on the muscles over time — is the fundamental driver of muscle growth and strength gains. Without progressive overload, training produces an initial adaptation and then plateaus indefinitely.</p>
          <p>Double progression works as follows:</p>
          <ol>
            <li>Choose a starting weight where you can complete 3 sets of 8 reps with good form but the last 2 reps of the third set feel challenging.</li>
            <li>Each session, attempt to add reps. When you can complete 3 sets of 10 reps with that weight across 2 consecutive sessions, add weight (typically 2.5 kg for upper body, 5 kg for lower body) and return to 8 reps.</li>
            <li>Continue this cycle. For most beginners, weight increases occur every 1–2 weeks on upper body exercises and every 1–2 weeks on lower body exercises.</li>
          </ol>
          <p>Track every session in a notebook or phone app. Record the weight, sets, and reps for every exercise. This data is what tells you when to progress and prevents stagnation.</p>
          <p>Use our <a href="/calculators/one-rep-max" style={{ color: "var(--color-brand)" }}>One Rep Max Calculator</a> to estimate your theoretical 1RM from any working set — useful for tracking long-term strength progress.</p>

          <h2>Warm-Up Protocol</h2>
          <p>Never begin working sets without a proper warm-up. A structured warm-up takes 8–10 minutes and significantly reduces injury risk while improving performance:</p>
          <ol>
            <li><strong>General warm-up (5 min):</strong> 5 minutes of light cardio — treadmill walk, stationary bike, or skipping rope. Elevates core temperature and increases blood flow to working muscles.</li>
            <li><strong>Dynamic mobility (3 min):</strong> Hip circles (10 each side), leg swings (10 each direction), arm circles, shoulder dislocations with a band or towel, bodyweight squats (10 reps).</li>
            <li><strong>Exercise-specific warm-up sets:</strong> Before each main compound exercise, perform 2 warm-up sets: 50% of working weight × 8 reps, then 75% × 4 reps. These are not counted toward your working sets.</li>
          </ol>

          <h2>12-Week Progression Plan</h2>
          <table>
            <thead><tr><th>Phase</th><th>Weeks</th><th>Focus</th><th>RPE Target</th><th>Volume Adjustment</th></tr></thead>
            <tbody>
              <tr><td>Foundation</td><td>1–4</td><td>Technique mastery, movement patterns</td><td>6–7 out of 10</td><td>3 sets as programmed</td></tr>
              <tr><td>Development</td><td>5–8</td><td>Progressive overload, first strength gains</td><td>7–8 out of 10</td><td>Add sets to 4 on main lifts</td></tr>
              <tr><td>Intensification</td><td>9–12</td><td>Heavier loads, consolidate gains</td><td>8–9 out of 10</td><td>4 sets, reduce reps to 6–8 on main lifts</td></tr>
            </tbody>
          </table>

          <h2>Nutrition for This Programme</h2>
          <p>Training without adequate nutrition is like building a house without materials. For this programme to produce results, nutrition must support the training stimulus:</p>
          <h3>Calorie Target</h3>
          <p>Calculate your TDEE using our <a href="/calculators/tdee" style={{ color: "var(--color-brand)" }}>TDEE Calculator</a>. For muscle gain (recommended for most beginners), eat at TDEE or 200–300 kcal above. For simultaneous fat loss and muscle gain (body recomposition — possible for beginners), eat at TDEE with high protein.</p>
          <h3>Protein Target</h3>
          <p>1.6–2.0g per kg of body weight daily. A 70 kg person needs 112–140g of protein per day. Use our <a href="/calculators/protein" style={{ color: "var(--color-brand)" }}>Protein Calculator</a> for your personalised target. Distribute across 4–5 meals for optimal muscle protein synthesis.</p>
          <h3>Indian Vegetarian Protein Sources for This Programme</h3>
          <table>
            <thead><tr><th>Food</th><th>Serving</th><th>Protein</th><th>Meal Integration</th></tr></thead>
            <tbody>
              <tr><td>Soya chunks (dry)</td><td>50g</td><td>26g</td><td>Lunch curry or snack</td></tr>
              <tr><td>Paneer</td><td>100g</td><td>18g</td><td>Sabzi, bhurji, tikka</td></tr>
              <tr><td>Whole eggs</td><td>3 eggs</td><td>18g</td><td>Breakfast, post-workout</td></tr>
              <tr><td>Hung curd</td><td>200g</td><td>20g</td><td>Snack, raita</td></tr>
              <tr><td>Dal (cooked)</td><td>1 cup</td><td>9g</td><td>Lunch, dinner</td></tr>
              <tr><td>Full-fat milk</td><td>500ml</td><td>16g</td><td>With oats, post-workout</td></tr>
            </tbody>
          </table>

          <h2>Rest Days: What to Do</h2>
          <p>Three rest days per week on this programme (Tuesday, Thursday, Saturday/Sunday) are not wasted days — they are when the adaptations from your training sessions are realised. Muscle protein synthesis peaks 24–48 hours after training, meaning your muscles are literally growing on your rest days.</p>
          <p>On rest days: prioritise sleep (7–9 hours), maintain protein intake, stay hydrated, and consider light activity like walking or yoga. Avoid high-intensity cardio on consecutive days with heavy training days. Read our <a href="/recovery/rest-days-explained" style={{ color: "var(--color-brand)" }}>complete guide to rest days</a> for the evidence on optimising recovery.</p>

          <h2>Common Beginner Mistakes to Avoid</h2>
          <ul>
            <li><strong>Skipping leg day:</strong> On a full body programme, you cannot selectively skip lower body. Squats and Romanian deadlifts are non-negotiable — they drive the most total muscle growth and hormonal response of any exercises.</li>
            <li><strong>Adding exercises indiscriminately:</strong> This programme is designed as a complete unit. Adding 10 more exercises "because more is better" increases recovery demand without proportional benefit. Trust the programme.</li>
            <li><strong>Not tracking weights:</strong> Without a training log, you cannot know whether you are progressing. Every session, write down every exercise, set, rep, and weight.</li>
            <li><strong>Inconsistent sleep:</strong> Sleep is when muscle is built. Chronically sleeping 5–6 hours while training hard produces minimal results. Prioritise 7–9 hours. Our <a href="/calculators/sleep" style={{ color: "var(--color-brand)" }}>Sleep Calculator</a> can help optimise your sleep timing.</li>
            <li><strong>Expecting fast results:</strong> Significant visible physique changes take 3–6 months of consistent training and nutrition. Strength gains — which are objective and measurable — come faster (often within 2–4 weeks). Focus on performance metrics initially.</li>
          </ul>

          <h2>When to Move to the Next Programme</h2>
          <p>You are ready to progress from this beginner full body programme to the <a href="/workout-plans/4-day-upper-lower" style={{ color: "var(--color-brand)" }}>4-day upper-lower split</a> when:</p>
          <ul>
            <li>You have completed 10–12 weeks of consistent training with this programme</li>
            <li>Linear weight progression has stalled on your main lifts (cannot add weight for 2–3 consecutive weeks despite adequate sleep and nutrition)</li>
            <li>You feel the 3-day programme is not providing sufficient challenge</li>
            <li>Your technique on all main lifts is solid and consistent</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Schoenfeld BJ et al. Effects of resistance training frequency on measures of muscle hypertrophy: a systematic review and meta-analysis. <em>Sports Med.</em> 2016;46(11):1689-1697.</li>
            <li>Ralston GW et al. The effect of weekly set volume on strength gain: a meta-analysis. <em>Sports Med.</em> 2017;47(12):2585-2601.</li>
            <li>Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. <em>Br J Sports Med.</em> 2018;52(6):376-384.</li>
            <li>NSCA. <em>Essentials of Strength Training and Conditioning.</em> 4th ed. Human Kinetics, 2016.</li>
          </ol>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides & Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {[["🔁 4-Day Upper-Lower Split", "/workout-plans/4-day-upper-lower"], ["🦵 How to Squat", "/exercise-guides/how-to-squat"], ["🏋️ How to Deadlift", "/exercise-guides/how-to-deadlift"], ["🏆 One Rep Max Calc", "/calculators/one-rep-max"], ["💪 Protein Calculator", "/calculators/protein"], ["🔥 TDEE Calculator", "/calculators/tdee"]].map(([name, href]) => (
                <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>{name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
