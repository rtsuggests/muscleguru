"use client";
import { useState } from "react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "7-Day High-Protein Indian Meal Plan for Fitness",
  "description": "Complete 7-day Indian meal plan for muscle gain and fat loss with vegetarian and non-vegetarian options.",
  "author": { "@type": "Organization", "name": "MuscleGuru Editorial Team" },
  "publisher": { "@type": "Organization", "name": "MuscleGuru.in" },
  "dateModified": "2025-01-01",
};

const faqs = [
  {
    q: "How much protein does this meal plan provide?",
    a: "The muscle gain version provides approximately 140–160g of protein per day for a 75–80kg individual — aligning with the evidence-based target of 1.8–2.0g per kg of body weight. The fat loss version provides approximately 130–150g of protein daily, with a calorie deficit of approximately 400–500 kcal below a typical TDEE of 2000–2200 kcal for moderately active Indian adults.",
  },
  {
    q: "Can I repeat the same meal plan every week?",
    a: "Yes. Repeating the same plan weekly for 4–8 weeks is actually beneficial — it simplifies grocery shopping, reduces meal prep time, and makes calorie tracking easier since you know exactly what each meal contains. Once you are comfortable with the structure, you can start swapping individual foods within the same macro targets for variety.",
  },
  {
    q: "What if I can't eat 5 meals per day?",
    a: "The meal plan can easily be condensed to 3 or 4 meals by combining the mid-morning snack with breakfast or skipping the evening snack. The most important meals to maintain are breakfast (breaks the overnight fast), lunch (largest calorie and protein meal), and dinner. Research suggests that as long as total daily protein and calorie targets are met, meal frequency is flexible.",
  },
  {
    q: "Is this meal plan suitable for office workers?",
    a: "Yes, with some adjustments. The mid-morning snack and pre-workout meal can be packed easily — boiled eggs, hung curd, fruit, and roasted chana are all portable. The lunch can be packed from home or ordered with protein-first priorities (dal, sabzi with paneer or chicken, roti/rice). The plan is specifically designed around foods readily available across India.",
  },
  {
    q: "How should I adjust the plan if I'm vegetarian?",
    a: "The vegetarian version is already included in this plan. All animal proteins (chicken, fish) are replaced with soya chunks, paneer, eggs (for lacto-ovo vegetarians), and additional dal or legume servings. Protein targets are met by ensuring soya chunks appear at least once daily, paneer twice, and dal at both lunch and dinner.",
  },
  {
    q: "Should I eat the same plan on rest days?",
    a: "On rest days, you can slightly reduce carbohydrate intake (by one roti or half a cup of rice) since glycogen demands are lower. Protein intake should remain the same on rest days — muscle protein synthesis continues for 24–48 hours after training, so adequate protein on rest days is important for recovery and growth. Total calories can be 100–200 kcal lower on rest days.",
  },
];

const muscleGainPlan = [
  {
    day: "Monday",
    calories: 2700,
    protein: 155,
    carbs: 300,
    fat: 75,
    meals: [
      { time: "7:30 AM", name: "Breakfast", foods: ["4 whole eggs scrambled with vegetables", "2 whole wheat rotis", "1 glass full-fat milk (250ml)"], protein: 42, calories: 650 },
      { time: "10:30 AM", name: "Mid-Morning", foods: ["200g hung curd / Greek yogurt", "1 banana", "10 almonds"], protein: 22, calories: 330 },
      { time: "1:30 PM", name: "Lunch", foods: ["1.5 cups cooked rice", "1 cup chana dal", "100g paneer sabzi (dry)", "1 bowl cucumber-tomato salad"], protein: 42, calories: 750 },
      { time: "4:30 PM", name: "Pre-Workout", foods: ["50g dry soya chunks (boiled & spiced)", "1 medium banana"], protein: 28, calories: 295 },
      { time: "8:00 PM", name: "Dinner", foods: ["2 whole wheat rotis", "1 cup rajma curry", "100g low-fat paneer bhurji", "1 katori curd"], protein: 38, calories: 680 },
    ],
  },
  {
    day: "Tuesday",
    calories: 2680,
    protein: 158,
    carbs: 295,
    fat: 72,
    meals: [
      { time: "7:30 AM", name: "Breakfast", foods: ["Oats upma with 50g oats", "3 whole eggs omelette", "1 glass toned milk (250ml)"], protein: 38, calories: 620 },
      { time: "10:30 AM", name: "Mid-Morning", foods: ["200g low-fat curd with 1 tsp flaxseeds", "1 apple", "1 scoop whey protein (optional)"], protein: 28, calories: 310 },
      { time: "1:30 PM", name: "Lunch", foods: ["1.5 cups rice", "1 cup moong dal tadka", "100g soya chunks curry", "Salad"], protein: 46, calories: 740 },
      { time: "4:30 PM", name: "Pre-Workout", foods: ["3 boiled eggs", "1 orange"], protein: 20, calories: 250 },
      { time: "8:00 PM", name: "Dinner", foods: ["2 rotis", "1 cup kidney beans (rajma)", "100g paneer", "Sabzi"], protein: 40, calories: 720 },
    ],
  },
  {
    day: "Wednesday",
    calories: 2720,
    protein: 152,
    carbs: 305,
    fat: 74,
    meals: [
      { time: "7:30 AM", name: "Breakfast", foods: ["Besan chilla (2 large, made with 60g besan)", "200g hung curd", "1 glass milk"], protein: 40, calories: 640 },
      { time: "10:30 AM", name: "Mid-Morning", foods: ["Roasted chana 50g", "1 banana", "1 glass buttermilk (chaas)"], protein: 18, calories: 290 },
      { time: "1:30 PM", name: "Lunch", foods: ["1.5 cups rice", "1 cup dal makhani (low oil)", "100g paneer", "Salad"], protein: 44, calories: 760 },
      { time: "4:30 PM", name: "Pre-Workout", foods: ["50g soya chunks + 1 whole wheat bread slice", "Black coffee / green tea"], protein: 28, calories: 270 },
      { time: "8:00 PM", name: "Dinner", foods: ["2 rotis", "1 cup chana masala", "2 boiled eggs", "Sabzi + curd"], protein: 38, calories: 700 },
    ],
  },
  {
    day: "Thursday",
    calories: 2650,
    protein: 160,
    carbs: 290,
    fat: 70,
    meals: [
      { time: "7:30 AM", name: "Breakfast", foods: ["4 egg bhurji with veggies", "2 multigrain rotis", "1 glass milk"], protein: 42, calories: 660 },
      { time: "10:30 AM", name: "Mid-Morning", foods: ["200g Greek yogurt", "Mixed berries / pomegranate", "5 walnuts"], protein: 22, calories: 300 },
      { time: "1:30 PM", name: "Lunch", foods: ["Sweet potato (200g, boiled)", "100g paneer tikka (grilled)", "1 cup dal", "Salad"], protein: 46, calories: 720 },
      { time: "4:30 PM", name: "Pre-Workout", foods: ["Peanut butter sandwich (1 slice bread, 1 tbsp PB)", "1 glass milk"], protein: 18, calories: 300 },
      { time: "8:00 PM", name: "Dinner", foods: ["2 rotis", "100g soya chunks curry", "1 cup dal", "Curd"], protein: 44, calories: 680 },
    ],
  },
  {
    day: "Friday",
    calories: 2700,
    protein: 155,
    carbs: 300,
    fat: 75,
    meals: [
      { time: "7:30 AM", name: "Breakfast", foods: ["Moong dal cheela (3 medium)", "200g hung curd", "1 glass milk"], protein: 40, calories: 630 },
      { time: "10:30 AM", name: "Mid-Morning", foods: ["50g roasted makhana", "2 boiled eggs", "1 fruit"], protein: 20, calories: 280 },
      { time: "1:30 PM", name: "Lunch", foods: ["1.5 cups rice", "1 cup sambar", "100g tofu stir-fry", "Salad"], protein: 42, calories: 730 },
      { time: "4:30 PM", name: "Pre-Workout", foods: ["50g soya chunks", "1 banana", "Black coffee"], protein: 27, calories: 270 },
      { time: "8:00 PM", name: "Dinner", foods: ["2 rotis", "100g paneer curry", "1 cup lentil soup", "Sabzi"], protein: 40, calories: 720 },
    ],
  },
  {
    day: "Saturday",
    calories: 2750,
    protein: 155,
    carbs: 315,
    fat: 73,
    meals: [
      { time: "8:00 AM", name: "Breakfast", foods: ["Masala oats (50g oats)", "4 whole eggs", "1 glass milk"], protein: 44, calories: 680 },
      { time: "11:00 AM", name: "Mid-Morning", foods: ["200g hung curd", "Handful mixed nuts (30g)", "1 fruit"], protein: 24, calories: 360 },
      { time: "2:00 PM", name: "Lunch", foods: ["1.5 cups rice", "1 cup chole", "100g paneer", "Raita"], protein: 44, calories: 780 },
      { time: "5:00 PM", name: "Pre-Workout", foods: ["Protein smoothie: 250ml milk + 1 banana + 1 tbsp peanut butter"], protein: 20, calories: 320 },
      { time: "8:30 PM", name: "Dinner", foods: ["2 rotis", "1 cup dal", "100g soya curry", "Sabzi + curd"], protein: 40, calories: 680 },
    ],
  },
  {
    day: "Sunday",
    calories: 2680,
    protein: 148,
    carbs: 295,
    fat: 72,
    meals: [
      { time: "9:00 AM", name: "Brunch", foods: ["Paneer paratha (2, made with 100g paneer)", "200g curd", "Green chutney"], protein: 40, calories: 720 },
      { time: "1:00 PM", name: "Lunch", foods: ["1.5 cups rice", "1 cup mixed dal (panchmel)", "100g soya chunks", "Salad"], protein: 46, calories: 760 },
      { time: "4:30 PM", name: "Snack", foods: ["3 boiled eggs", "1 banana", "Green tea"], protein: 20, calories: 230 },
      { time: "8:00 PM", name: "Dinner", foods: ["2 rotis", "100g paneer butter masala (light)", "1 cup dal", "Curd"], protein: 42, calories: 730 },
    ],
  },
];

const nonVegSubstitutions = [
  { day: "Monday", swap: "Replace 100g paneer at lunch with 150g grilled chicken breast (+13g protein, −80 kcal)" },
  { day: "Tuesday", swap: "Replace soya chunks curry with 200g fish curry (rohu/surmai) (+5g protein, similar calories)" },
  { day: "Wednesday", swap: "Replace paneer at dinner with 150g egg curry (3 eggs in gravy) (+2g protein)" },
  { day: "Thursday", swap: "Replace paneer tikka with 150g chicken tikka (+14g protein, −60 kcal)" },
  { day: "Friday", swap: "Replace tofu with 150g tuna (canned in water) (+18g protein, −30 kcal)" },
  { day: "Saturday", swap: "Replace paneer at lunch with 200g chicken breast curry (+22g protein, −100 kcal)" },
  { day: "Sunday", swap: "Replace paneer paratha with egg paratha (3 eggs) or add chicken at lunch" },
];

const shoppingList = {
  "Protein Sources (Veg)": ["Paneer — 700g", "Soya chunks — 350g (dry)", "Eggs — 2 dozen", "Hung curd / Greek yogurt — 1.4 kg", "Toned milk — 3.5 litres", "Chana dal — 400g", "Rajma — 300g", "Moong dal — 300g", "Chole (chickpeas) — 300g", "Tofu — 200g"],
  "Grains & Carbs": ["Whole wheat flour (atta) — 1 kg", "Rice (basmati or sona masoori) — 1 kg", "Oats — 400g", "Sweet potato — 400g", "Bananas — 7", "Mixed fruits for snacks"],
  "Vegetables": ["Onions, tomatoes, garlic, ginger — standard quantities", "Spinach / palak — 500g", "Capsicum, carrots, beans — 500g mixed", "Cucumber, tomatoes for salad — 500g"],
  "Fats & Nuts": ["Almonds — 100g", "Walnuts — 100g", "Peanut butter — 1 jar (200g)", "Flaxseeds — 100g", "Cooking oil (mustard/sunflower) — use sparingly"],
  "Extras": ["Green tea / black coffee", "Buttermilk / chaas", "Roasted chana — 200g", "Makhana — 100g", "Spices: haldi, jeera, dhania, red chilli, garam masala"],
};

const mealPrepTips = [
  { icon: "🍳", title: "Sunday Prep Session (60–90 minutes)", tip: "Boil 8–10 eggs for the week. Cook a large batch of chana dal and rajma. Prepare 200–300g soya chunks in advance. Portion and refrigerate hung curd. Chop vegetables for 3–4 days." },
  { icon: "🥡", title: "Pack Lunch the Night Before", tip: "Pack dal + rice or roti + sabzi in a tiffin box the evening before to save morning time. Add a boiled egg or paneer portion for protein. This prevents relying on high-calorie, low-protein office canteen food." },
  { icon: "📊", title: "Track for the First 2 Weeks", tip: "Use MyFitnessPal or a free Indian calorie tracking app for the first 2 weeks to ensure you are hitting protein targets. After building intuition, tracking can be reduced to occasional spot checks." },
  { icon: "🧂", title: "Reduce Cooking Oil Aggressively", tip: "Most Indian recipes use 3–4 tablespoons of oil. Cutting to 1–1.5 tablespoons saves 250–350 calories per dish without significantly changing the taste. Use a non-stick pan to make this practical." },
  { icon: "💧", title: "Stay Hydrated", tip: "Drink 500ml of water before each main meal — research shows this reduces calorie intake at the meal. Carry a 1-litre water bottle and aim to refill it 2–3 times daily." },
];

export default function MealPlanClient() {
  const [activeDay, setActiveDay] = useState(0);
  const [goal, setGoal] = useState<"muscle" | "fatloss">("muscle");
  const [showShopping, setShowShopping] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plan = muscleGainPlan;
  const currentDay = plan[activeDay];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</a>
          <span>›</span>
          <a href="/nutrition" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Nutrition</a>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>7-Day Indian Meal Plan</span>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "2rem 1rem 5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span className="tag" style={{ marginBottom: "1rem", display: "inline-flex" }}>🇮🇳 Indian Diet</span>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", margin: "1rem 0 0.75rem", lineHeight: 1.2 }}>
            7-Day High-Protein Indian Meal Plan
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 600, margin: "0 auto 1.5rem" }}>
            Complete vegetarian meal plan for muscle gain and fat loss. Full macros, shopping list, and meal prep guide included. No supplements required.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.85rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>
            <span>✅ ~150g protein/day</span>
            <span>🥗 100% Indian foods</span>
            <span>📋 Shopping list included</span>
            <span>🔄 Non-veg swaps provided</span>
          </div>
        </div>

        {/* Goal toggle */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem", background: "var(--color-bg)", padding: "0.4rem", borderRadius: "0.75rem", maxWidth: 400, margin: "0 auto 2rem" }}>
          {(["muscle", "fatloss"] as const).map(g => (
            <button key={g} onClick={() => setGoal(g)}
              style={{ flex: 1, padding: "0.625rem 1rem", borderRadius: "0.5rem", border: "none", cursor: "pointer", fontWeight: 700, fontSize: "0.9rem", fontFamily: "var(--font-display)", background: goal === g ? "var(--color-brand)" : "transparent", color: goal === g ? "#fff" : "var(--color-muted)", transition: "all 0.15s" }}>
              {g === "muscle" ? "💪 Muscle Gain" : "📉 Fat Loss"}
            </button>
          ))}
        </div>

        {/* Calorie adjustment note for fat loss */}
        {goal === "fatloss" && (
          <div style={{ background: "#fffbeb", border: "1.5px solid #fcd34d", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.875rem", color: "#92400e", maxWidth: 700, margin: "0 auto 1.5rem" }}>
            <strong>📉 Fat Loss Adjustments:</strong> Reduce rice by ½ cup per meal (−90 kcal), use low-fat paneer instead of full-fat (−80 kcal), skip the mid-morning nuts (−100 kcal), and replace full-fat milk with toned milk (−50 kcal). This creates a deficit of approximately 400–500 kcal from the muscle gain plan — targeting 0.4–0.5 kg fat loss per week while keeping protein high.
          </div>
        )}

        {/* Day selector tabs */}
        <div style={{ display: "flex", gap: "0.4rem", overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "1.5rem", scrollbarWidth: "none" }}>
          {plan.map((day, i) => (
            <button key={i} onClick={() => setActiveDay(i)}
              style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", border: `1.5px solid ${activeDay === i ? "var(--color-brand)" : "var(--color-border)"}`, background: activeDay === i ? "var(--color-brand)" : "#fff", color: activeDay === i ? "#fff" : "var(--color-body)", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "var(--font-display)", flexShrink: 0, transition: "all 0.15s" }}>
              {day.day}
            </button>
          ))}
        </div>

        {/* Day macros summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
          {[
            { label: "Calories", value: goal === "fatloss" ? `~${currentDay.calories - 430}` : `~${currentDay.calories}`, unit: "kcal", color: "#7c3aed" },
            { label: "Protein", value: `~${currentDay.protein}`, unit: "g", color: "var(--color-brand-dark)" },
            { label: "Carbs", value: goal === "fatloss" ? `~${currentDay.carbs - 45}` : `~${currentDay.carbs}`, unit: "g", color: "#2563eb" },
            { label: "Fat", value: `~${currentDay.fat}`, unit: "g", color: "#d97706" },
          ].map(m => (
            <div key={m.label} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: m.color }}>{m.value}<span style={{ fontSize: "0.75rem", fontWeight: 600 }}>{m.unit}</span></div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", fontWeight: 500 }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Meals for the day */}
        <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
          {currentDay.meals.map((meal, i) => (
            <div key={i} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, textAlign: "center", minWidth: 68 }}>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", fontWeight: 600 }}>{meal.time}</div>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--color-brand-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0.35rem auto", fontSize: "1.25rem" }}>
                  {["🍳", "🥗", "🍛", "💪", "🌙"][i] || "🍽️"}
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--color-brand-dark)", fontWeight: 700 }}>{meal.protein}g P</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem", color: "var(--color-dark)" }}>{meal.name}</div>
                <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                  {meal.foods.map((food, j) => (
                    <li key={j} style={{ fontSize: "0.875rem", color: "var(--color-body)", marginBottom: "0.2rem", lineHeight: 1.5 }}>{food}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "0.5rem", fontSize: "0.78rem", color: "var(--color-muted)" }}>~{meal.calories} kcal · ~{meal.protein}g protein</div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-veg substitution */}
        <div style={{ background: "#fff7ed", border: "1.5px solid #fed7aa", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#c2410c", marginBottom: "0.4rem" }}>🍗 Non-Veg Swap for {currentDay.day}</div>
          <p style={{ fontSize: "0.875rem", color: "#7c2d12", margin: 0 }}>{nonVegSubstitutions[activeDay]?.swap}</p>
        </div>

        {/* Shopping list toggle */}
        <button onClick={() => setShowShopping(!showShopping)}
          style={{ width: "100%", padding: "0.875rem 1.25rem", background: "var(--color-brand)", color: "#fff", border: "none", borderRadius: "0.875rem", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-display)", cursor: "pointer", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
          🛒 {showShopping ? "Hide" : "Show"} Weekly Shopping List
        </button>

        {showShopping && (
          <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.5rem", marginBottom: "2rem", border: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "1.25rem" }}>🛒 Weekly Shopping List</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {Object.entries(shoppingList).map(([category, items]) => (
                <div key={category}>
                  <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-brand-dark)", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{category}</div>
                  {items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0", fontSize: "0.875rem", color: "var(--color-body)", borderBottom: "1px solid var(--color-border)" }}>
                      <span style={{ color: "var(--color-brand)", fontSize: "0.75rem" }}>◉</span>{item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Meal prep tips */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>⚡ Meal Prep Tips to Save Time</h2>
          <div style={{ display: "grid", gap: "0.875rem" }}>
            {mealPrepTips.map(tip => (
              <div key={tip.title} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.125rem 1.25rem", display: "flex", gap: "1rem" }}>
                <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{tip.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem" }}>{tip.title}</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.65 }}>{tip.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO article content */}
        <div className="seo-content">
          <h2>Why This Meal Plan Works: The Evidence Behind It</h2>
          <p>This 7-day meal plan is built around three evidence-based nutritional principles that research consistently identifies as the most important factors for both muscle gain and fat loss:</p>
          <ul>
            <li><strong>Adequate protein at every meal:</strong> Each meal contains a meaningful protein source. Research by Areta et al. (2013) showed that distributing protein across 4–5 meals of 25–40g each maximises muscle protein synthesis throughout the day — more effectively than consuming the same total in fewer, larger meals.</li>
            <li><strong>Energy balance appropriate to goal:</strong> The muscle gain version provides approximately 200–300 kcal above a typical TDEE for moderately active Indian adults. The fat loss version creates a deficit of 400–500 kcal — the range associated with optimal fat loss while minimising lean mass loss, per research by Helms et al. (2014).</li>
            <li><strong>Indian food culture compatibility:</strong> The plan uses dal, roti, rice, paneer, curd, and eggs — foods available at every Indian grocery store and kitchen. No imported superfoods, no expensive supplements, no impractical ingredients.</li>
          </ul>

          <h2>How to Adjust the Plan for Your Body Weight</h2>
          <p>This plan is designed around a 70–80 kg individual targeting approximately 140–160g of protein per day. To adjust for your body weight:</p>
          <table>
            <thead><tr><th>Body Weight</th><th>Target Protein</th><th>Adjustment from Base Plan</th></tr></thead>
            <tbody>
              <tr><td>55–60 kg</td><td>100–120g/day</td><td>Reduce paneer by 50g and soya chunks by 25g daily</td></tr>
              <tr><td>65–75 kg</td><td>125–150g/day</td><td>Use plan as written — this is the target range</td></tr>
              <tr><td>80–90 kg</td><td>160–180g/day</td><td>Add 1 extra egg at breakfast + 25g soya at pre-workout</td></tr>
              <tr><td>90+ kg</td><td>180–200g/day</td><td>Add whey protein shake (1 scoop) post-workout</td></tr>
            </tbody>
          </table>

          <h2>Protein Sources Used and Why</h2>
          <p>Every protein source in this plan was chosen based on three criteria: availability across India, protein density relative to calories, and cultural compatibility. Here is why each was selected:</p>
          <ul>
            <li><strong>Soya chunks:</strong> 52g protein per 100g dry weight — the highest protein density of any affordable Indian plant food. Available nationwide for ₹60–100 per 500g. Provides complete protein with a PDCAAS of 1.0.</li>
            <li><strong>Paneer:</strong> 18–20g protein per 100g. Culturally universal, easy to cook in minutes, high in casein for sustained amino acid release. Use low-fat for fat loss phases.</li>
            <li><strong>Eggs:</strong> 6g each, complete protein with DIAAS of 1.13 — among the highest of any food. Inexpensive, versatile, fast to prepare. Research by Devries et al. (2018) supports whole eggs (not just whites) for optimal muscle protein synthesis.</li>
            <li><strong>Dal and legumes:</strong> 7–9g per 100g cooked. While lower in protein density, dals are eaten in large quantities in Indian meals and contribute meaningfully to daily totals. They are also high in fibre, potassium, and B vitamins — important micronutrients for active individuals.</li>
            <li><strong>Hung curd / Greek yogurt:</strong> 9–10g per 100g. Probiotic-rich, highly satiating, and convenient for snacks. One of the easiest ways to add 15–20g of protein between meals.</li>
          </ul>

          <h2>Carbohydrates in This Plan: Rice, Roti, and Why They're Included</h2>
          <p>A common mistake in Indian fitness nutrition is eliminating rice and roti in pursuit of fat loss or muscle gain. This plan deliberately includes both for evidence-based reasons:</p>
          <p>Carbohydrates are the primary fuel for high-intensity resistance training through glycogen storage in muscles. Research by Burke et al. (2011) confirms that carbohydrate availability significantly impacts training performance and the metabolic response to exercise. Training without adequate carbohydrates leads to faster fatigue, reduced training volume, impaired protein synthesis, and slower recovery.</p>
          <p>The approach in this plan is portion management, not elimination. One to 1.5 cups of cooked rice (approximately 45–68g carbohydrates) and 2 rotis (approximately 40g carbohydrates) provide the fuel needed for effective training while staying within appropriate calorie targets.</p>

          <h2>The Role of Fat in This Meal Plan</h2>
          <p>Dietary fat provides approximately 70–75g per day in this plan — sufficient for hormonal health (testosterone, oestrogen, and other anabolic hormones are synthesised from cholesterol, which requires dietary fat), fat-soluble vitamin absorption (vitamins A, D, E, K), and cell membrane integrity.</p>
          <p>Fat sources are primarily from whole foods — eggs, paneer, nuts, and small amounts of cooking oil — rather than added fats. This is a deliberate choice: fat from whole food sources comes packaged with protein, micronutrients, and fibre, making it more nutrient-dense than added oils or ghee used for flavour.</p>

          <h2>Frequently Asked Questions</h2>
          <div style={{ marginTop: "0.5rem" }}>
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span style={{ fontSize: "1.2rem", color: "var(--color-brand)", flexShrink: 0, marginLeft: "0.75rem" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <div className="faq-answer">{item.a}</div>}
              </div>
            ))}
          </div>

          <h2>Related Tools</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem", marginTop: "1rem" }}>
            {[["💪 Protein Calculator", "/calculators/protein"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["🥗 Macro Calculator", "/calculators/macro"], ["📉 Calorie Deficit", "/calculators/calorie-deficit"]].map(([name, href]) => (
              <a key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</a>
            ))}
          </div>

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Areta JL et al. Timing and distribution of protein ingestion during prolonged recovery. <em>J Physiol.</em> 2013;591(9):2319-2331.</li>
            <li>Helms ER et al. A systematic review of dietary protein during caloric restriction. <em>Int J Sport Nutr Exerc Metab.</em> 2014;24(2):127-138.</li>
            <li>Burke LM et al. Carbohydrates for training and competition. <em>J Sports Sci.</em> 2011;29 Suppl 1:S17-27.</li>
            <li>Devries MC et al. Leucine, not total protein, content of a supplement is the primary determinant of muscle protein anabolic responses. <em>Am J Clin Nutr.</em> 2018;107(2):217-224.</li>
            <li>ICMR-NIN. <em>Nutritive Value of Indian Foods.</em> National Institute of Nutrition, Hyderabad, 2017.</li>
          </ol>
        </div>

        {/* Disclaimer */}
        <div className="disclaimer-box" style={{ marginTop: "2rem" }}>
          <strong>⚠️ Disclaimer:</strong> This meal plan is for educational purposes only. Calorie and macro values are approximate. Individual needs vary based on age, body weight, activity level, and health status. Consult a registered dietitian for personalised nutrition advice, especially if you have any underlying medical conditions.
        </div>

        {/* Author */}
        <div style={{ marginTop: "2rem", background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)", flexShrink: 0 }}>MG</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--color-dark)" }}>MuscleGuru Editorial Team</div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>Reviewed against peer-reviewed research and ICMR dietary guidelines. All nutritional values sourced from ICMR-NIN food composition tables.</div>
          </div>
        </div>
      </div>
    </>
  );
}
