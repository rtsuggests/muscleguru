import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Supplement Tier List India — What's Worth It",
  description: "Complete beginner gym guide for Indians. What to expect, how to set up your first routine, gym etiquette, what to eat, and how to make real progress from day one.",
};

const schema = {
  "@context": "https://schema.org", "@type": "Article",
  "headline": "The Complete Beginner Gym Guide for Indians",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  { q: "How many days per week should a beginner go to the gym?", a: "Research supports 3 days per week as the optimal starting frequency for beginners. This provides sufficient training stimulus for rapid strength and muscle gains while allowing adequate recovery between sessions. Full-body routines performed 3 times per week (e.g. Monday/Wednesday/Friday) are consistently recommended by the NSCA and ACSM for beginners. Starting with more days — especially 5–6 — before building a base increases injury risk and burnout." },
  { q: "Should beginners use machines or free weights?", a: "Both are valid, and most beginner programmes use a combination. Machines provide a guided movement path that reduces injury risk while you learn and can be excellent for isolation exercises. Free weights (barbells, dumbbells) develop stabiliser muscles and more closely mimic natural movement patterns, but require more technique. A good beginner approach: start core compound movements (squat, press, row) with free weights under guidance, and use machines for supplemental exercises." },
  { q: "How long should a beginner workout be?", a: "Effective beginner workouts are typically 45–60 minutes in length, not including warm-up. Longer sessions are not better for beginners — diminishing returns set in as fatigue accumulates, form breaks down, and injury risk increases. Research supports that 3–4 working sets per exercise with appropriate rest periods can be completed comfortably in 45–60 minutes for a beginner's 4–6 exercise routine." },
  { q: "What should I eat before the gym as a beginner?", a: "Aim to eat a mixed meal containing protein and carbohydrates 1.5–2 hours before training. Examples: curd rice with dal, roti with egg bhurji, or oats with milk. The carbohydrates provide fuel for the workout; the protein supports muscle protein synthesis. If training first thing in the morning and cannot eat beforehand, a banana and a glass of milk 30 minutes before is a practical compromise. Avoid very heavy or high-fat meals immediately before training." },
  { q: "How soon will I see results at the gym?", a: "Beginners typically notice strength improvements within 2–3 weeks of consistent training — this initial phase is driven by neurological adaptations (the brain learning to recruit muscle fibres more efficiently) rather than muscle growth. Visible changes in muscle size and body composition typically become noticeable at 6–12 weeks with consistent training and proper nutrition. The first 3 months are often the period of fastest progress in a training career." },
  { q: "Is it normal to feel sore after gym workouts?", a: "Delayed Onset Muscle Soreness (DOMS) — the stiffness and tenderness that peaks 24–48 hours after exercise — is normal and expected, especially for beginners and after introducing new exercises. DOMS is caused by microscopic muscle damage that triggers the repair and adaptation response. It diminishes significantly after the first 2–4 weeks as the body adapts. DOMS is not a reliable indicator of workout quality — you can have an excellent muscle-building workout with minimal soreness." },
];

export default function BeginnerGymGuidePage() {
  return (
    <ArticleLayout
      title="The Complete Beginner Gym Guide for Indians"
      category="Beginner Fitness"
      categoryHref="/beginner-fitness"
      readTime="12 min"
      lastUpdated="January 2025"
      summary="Start with 3 full-body sessions per week, focusing on compound movements (squat, deadlift, bench press, row, overhead press). Progressive overload — adding weight or reps over time — is the single most important principle. Eat enough protein (1.6g/kg body weight minimum), get 7–9 hours of sleep, and be consistent for at least 12 weeks before evaluating your progress."
      relatedCalculators={[
        { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Water Intake", href: "/calculators/water-intake", icon: "💧" },
      ]}
      relatedArticles={[
        { title: "How to Build a Beginner Workout Routine", href: "/beginner-fitness/workout-routine", time: "10 min" },
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
        { title: "Creatine Guide for Beginners", href: "/supplements/creatine-guide", time: "10 min" },
      ]}
      schema={schema}
    >
      <h2>Before You Start: Setting Realistic Expectations</h2>
      <p>Beginning a gym routine is one of the most impactful decisions you can make for your long-term health, strength, and body composition. Research consistently shows that regular resistance training improves metabolic health, reduces risk of type 2 diabetes and cardiovascular disease, enhances mental health, increases bone density, and supports healthy ageing.</p>
      <p>However, the fitness industry — particularly social media — creates unrealistic expectations about how quickly results arrive. Understanding the actual timeline helps you stay consistent through the early phases when progress can feel invisible.</p>
      <ul>
        <li><strong>Weeks 1–3:</strong> Neurological adaptations. Your nervous system is learning to recruit muscle fibres efficiently. Strength increases rapidly even without visible muscle growth.</li>
        <li><strong>Weeks 4–8:</strong> First muscle adaptations begin. Some changes become visible in body composition with consistent training and nutrition.</li>
        <li><strong>Weeks 8–12+:</strong> Meaningful, visible changes. With proper training and nutrition, most beginners see clear differences in strength, muscle definition, and body composition.</li>
      </ul>

      <h2>The Single Most Important Principle: Progressive Overload</h2>
      <p>Progressive overload — gradually increasing the demands placed on your muscles over time — is the most fundamental principle of effective resistance training. Without progressive overload, your body has no reason to adapt and grow stronger. With it, improvement is nearly guaranteed for beginners.</p>
      <p>Progressive overload can be achieved by:</p>
      <ul>
        <li>Adding weight to the bar or dumbbell (most common)</li>
        <li>Adding more repetitions at the same weight</li>
        <li>Adding more sets</li>
        <li>Reducing rest periods between sets</li>
        <li>Improving form and depth of movement</li>
      </ul>
      <p>A simple rule: every week or two, try to either add a small amount of weight or do one more rep than last time on your main exercises. Track this in a notebook or app.</p>

      <h2>The Best Beginner Programme: Full-Body 3×/Week</h2>
      <p>Research and decades of coaching experience strongly support full-body training 3 times per week as the optimal starting point. This approach trains each muscle group 3 times per week — research by Schoenfeld et al. (2016) found that higher training frequency (2–3× per week per muscle) consistently outperforms lower frequency for beginners in terms of strength and hypertrophy.</p>
      <p>A simple but effective beginner full-body template:</p>
      <table>
        <thead><tr><th>Exercise</th><th>Sets × Reps</th><th>Muscle Groups</th></tr></thead>
        <tbody>
          <tr><td>Squat (barbell or goblet)</td><td>3 × 8–10</td><td>Quads, glutes, hamstrings</td></tr>
          <tr><td>Bench Press or Push-up</td><td>3 × 8–10</td><td>Chest, shoulders, triceps</td></tr>
          <tr><td>Barbell / Dumbbell Row</td><td>3 × 8–10</td><td>Back, biceps</td></tr>
          <tr><td>Overhead Press</td><td>3 × 8–10</td><td>Shoulders, triceps</td></tr>
          <tr><td>Romanian Deadlift</td><td>3 × 8–10</td><td>Hamstrings, glutes, lower back</td></tr>
          <tr><td>Plank</td><td>3 × 30–45 sec</td><td>Core</td></tr>
        </tbody>
      </table>
      <p>Perform this routine 3 times per week with at least one rest day between sessions. As a beginner, add small weight increments (1–2.5 kg) to each lift each week.</p>

      <h2>The Five Most Important Exercises for Beginners</h2>
      <h3>1. The Squat</h3>
      <p>The squat is the single most effective lower body exercise. It trains the quadriceps, hamstrings, glutes, adductors, and core simultaneously. Beginners should start with bodyweight squats, progress to goblet squats (holding a dumbbell or kettlebell at the chest), and eventually learn the barbell back squat. Proper squat depth — thighs at least parallel to the floor — is important for full muscle development.</p>
      <h3>2. The Deadlift</h3>
      <p>The deadlift trains the entire posterior chain — hamstrings, glutes, lower back, traps, and forearms. It is also the exercise with which most people can eventually move the most weight. Beginners should start with a Romanian deadlift (RDL) or trap bar deadlift before progressing to conventional barbell deadlifts. Learning the hip hinge movement pattern is fundamental to safe, effective lifting.</p>
      <h3>3. The Bench Press</h3>
      <p>The bench press is the primary horizontal pushing exercise, training the pectorals, anterior deltoids, and triceps. Beginners without a bench can substitute dumbbell floor presses or elevated push-ups. Maintaining shoulder blade retraction and a slight arch in the lower back during bench press protects the shoulder joint.</p>
      <h3>4. The Barbell/Dumbbell Row</h3>
      <p>Horizontal pulling exercises train the often underdeveloped back muscles — rhomboids, mid-traps, lats, and biceps. Balancing pressing exercises with equal or greater pulling volume is important for shoulder health and postural balance. Bent-over rows, seated cable rows, or dumbbell rows are all effective.</p>
      <h3>5. The Overhead Press</h3>
      <p>The overhead press builds shoulder strength, upper back stability, and tricep development. It also trains core stability as you resist the tendency to lean back excessively. Start with dumbbells if barbell technique is challenging.</p>

      <h2>Indian Gym Etiquette: What You Need to Know</h2>
      <ul>
        <li><strong>Re-rack your weights</strong> after use — always return dumbbells and weight plates to their designated places</li>
        <li><strong>Wipe down equipment</strong> after use with a towel — particularly benches and handles</li>
        <li><strong>Don't occupy equipment while resting</strong> for extended periods during peak hours</li>
        <li><strong>Ask to work in</strong> — if someone is using a piece of equipment, politely ask if you can alternate sets</li>
        <li><strong>Limit phone use on the gym floor</strong> — especially avoid long calls while sitting on equipment</li>
        <li><strong>Avoid unsolicited advice</strong> — unless someone is about to hurt themselves, keep coaching to yourself unless asked</li>
      </ul>

      <h2>What to Eat as a Gym Beginner</h2>
      <p>Nutrition is at least 50% of your results. The most important nutritional priorities for a beginner:</p>
      <ul>
        <li><strong>Eat enough total calories:</strong> Calculate your TDEE and eat at maintenance (or a small surplus of 200–300 kcal if prioritising muscle gain; a deficit of 300–500 kcal if prioritising fat loss)</li>
        <li><strong>Hit your protein target:</strong> 1.6–2.0g per kg of body weight daily — distributed across 3–4 meals</li>
        <li><strong>Don't fear carbohydrates:</strong> Rice, roti, oats, and potatoes provide the fuel needed for effective training</li>
        <li><strong>Stay hydrated:</strong> Use our water intake calculator to find your daily target and carry a water bottle to the gym</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <FAQ items={faqs} />

      <h2>References</h2>
      <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
        <li>ACSM. <em>Position Stand: Progression Models in Resistance Training for Healthy Adults.</em> Med Sci Sports Exerc. 2009;41(3):687-708.</li>
        <li>Schoenfeld BJ et al. Effects of Resistance Training Frequency on Measures of Muscle Hypertrophy. <em>J Strength Cond Res.</em> 2016;30(7):1995-2003.</li>
        <li>Kraemer WJ, Ratamess NA. Fundamentals of resistance training. <em>Med Sci Sports Exerc.</em> 2004;36(4):674-688.</li>
        <li>Westcott WL. Resistance training is medicine. <em>Curr Sports Med Rep.</em> 2012;11(4):209-216.</li>
      </ol>
    </ArticleLayout>
  );
}
