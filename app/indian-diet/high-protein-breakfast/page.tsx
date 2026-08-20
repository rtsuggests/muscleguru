import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Protein Indian Breakfast — 20 Easy Recipes",
  description: "20 high protein Indian breakfast recipes for muscle gain and fat loss. Quick, easy recipes using common Indian ingredients with macros per serving.",
  keywords: ["high protein breakfast India", "Indian protein breakfast recipes", "protein breakfast India"],
};

export default function HighProteinBreakfastPage() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <h1>High Protein Indian Breakfast — 20 Easy Recipes</h1>
      <p>Starting your day with a high-protein breakfast is one of the most evidence-backed strategies for muscle gain, fat loss, and sustained energy throughout the morning. Research by Leidy et al. (2015) found that high-protein breakfasts (35g protein) significantly reduced hunger hormones and increased satiety compared to normal-protein breakfasts — reducing total daily calorie intake by an average of 400 kcal.</p>

      <h2>Why Protein at Breakfast Matters</h2>
      <p>Most Indians eat a carbohydrate-dominated breakfast — poha, idli, paratha, upma — which provides quick energy but limited satiety and almost no muscle-building stimulus. Adding a substantial protein source to your morning meal activates muscle protein synthesis early in the day and helps distribute your total protein intake more evenly across meals — a pattern research shows is more effective for muscle building than consuming most protein at dinner.</p>

      <h2>Top 20 High Protein Indian Breakfast Options</h2>
      <table>
        <thead><tr><th>Breakfast</th><th>Protein</th><th>Prep Time</th><th>Suitable For</th></tr></thead>
        <tbody>
          {[
            ["Egg bhurji (3 eggs) + 1 roti", "22g", "10 min", "Lacto-ovo veg, non-veg"],
            ["Paneer bhurji (100g) + 2 roti", "20g", "12 min", "Lacto vegetarian"],
            ["Soya keema bhurji + 1 roti", "28g", "15 min", "Vegan, lacto"],
            ["Greek yogurt / hung curd (200g) + fruit", "18g", "2 min", "All vegetarians"],
            ["Besan chilla (2 nos) + green chutney", "14g", "15 min", "Vegan"],
            ["Moong dal chilla (2 nos) + paneer filling", "22g", "20 min", "Lacto vegetarian"],
            ["Oats with milk + 2 boiled eggs", "24g", "10 min", "Lacto-ovo"],
            ["Tofu scramble + 1 multigrain roti", "18g", "12 min", "Vegan"],
            ["Rajma chaat (150g) + curd", "16g", "5 min (canned)", "All vegetarians"],
            ["Paneer paratha (100g paneer) + curd", "22g", "20 min", "Lacto vegetarian"],
            ["Whey protein smoothie + banana + milk", "30g", "3 min", "Lacto vegetarian"],
            ["Sprouts chaat (100g) + boiled egg", "18g", "5 min", "Lacto-ovo"],
            ["Curd rice with dal (150g curd)", "14g", "10 min", "Lacto vegetarian"],
            ["Poha with peanuts + 2 boiled eggs", "20g", "15 min", "Lacto-ovo"],
            ["Idli (3) with sambar + paneer chutney", "16g", "20 min", "Lacto vegetarian"],
            ["Akki roti with soya flour + curd", "18g", "20 min", "Lacto vegetarian"],
            ["Pesarattu (moong dal dosa) + peanut chutney", "14g", "20 min", "Vegan"],
            ["Dhokla (2 pieces) + green chutney + curd", "12g", "30 min (can prep)", "Lacto vegetarian"],
            ["Thepla (2) with methi + curd (150g)", "14g", "20 min", "Lacto vegetarian"],
            ["Uttapam with vegetables + sambar", "10g", "20 min", "Vegan"],
          ].map(([name, protein, time, type]) => (
            <tr key={name}><td style={{fontWeight:500}}>{name}</td><td style={{color:"var(--color-brand-dark)",fontWeight:700}}>{protein}</td><td>{time}</td><td style={{fontSize:"0.8rem",color:"var(--color-muted)"}}>{type}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>Tips to Maximise Morning Protein</h2>
      <ul>
        <li><strong>Add eggs or paneer to any existing breakfast:</strong> Poha with 2 boiled eggs on the side takes the same time and adds 12g of complete protein.</li>
        <li><strong>Use hung curd instead of regular curd:</strong> Hung curd has 2–3× the protein of regular curd and makes a satisfying side to any breakfast.</li>
        <li><strong>Besan and moong dal chillas are underrated:</strong> Quick to make, high in protein, and extremely versatile with fillings.</li>
        <li><strong>Prep the night before:</strong> Soak moong dal overnight for faster chilla preparation. Boil eggs the night before. Pre-make paneer bhurji filling.</li>
      </ul>

      <div className="disclaimer-box">
        <strong>Note:</strong> Protein values are approximate and vary based on exact ingredient quantities and preparation methods.
      </div>
    </div>
  );
}
