import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian Diet for Fitness — Pre & Post Workout Meals",
  description: "Complete Indian diet guides for fitness. High protein breakfast, pre-workout meals, post-workout nutrition, and intermittent fasting for Indians.",
  keywords: ["Indian diet fitness","Indian food gym","pre workout meal India","high protein Indian food"],
};

const articles = [
  { title:"High Protein Indian Breakfast — 20 Easy Recipes", desc:"20 high-protein Indian breakfast recipes for muscle gain and fat loss with macros per serving.", href:"/indian-diet/high-protein-breakfast", icon:"🍳" },
  { title:"Pre-Workout Meal India — What to Eat Before Training", desc:"Best Indian foods to eat before training for energy, performance, and muscle protection.", href:"/indian-diet/pre-workout-meal", icon:"⚡" },
  { title:"Post-Workout Meal India — Recovery Nutrition Guide", desc:"What to eat after training to maximise muscle repair and glycogen replenishment.", href:"/indian-diet/post-workout-meal", icon:"💪" },
  { title:"Intermittent Fasting India — The Complete Guide", desc:"How intermittent fasting works in the Indian context, cultural challenges, and meal timing.", href:"/indian-diet/intermittent-fasting-india", icon:"⏰" },
];

export default function IndianDietPage() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link>
          {" › "}<span style={{color:"var(--color-dark)",fontWeight:500}}>Indian Diet</span>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"3rem 1rem 5rem"}}>
        <div style={{textAlign:"center",marginBottom:"3rem"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>🥗</div>
          <h1 style={{fontSize:"clamp(1.75rem,4vw,2.75rem)",marginBottom:"0.75rem"}}>Indian Diet for Fitness</h1>
          <p style={{fontSize:"1.05rem",color:"var(--color-muted)",maxWidth:580,margin:"0 auto"}}>
            Evidence-based nutrition guides using Indian foods — dal, paneer, soya chunks, eggs, roti, and rice — to fuel your fitness goals.
          </p>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1rem",marginBottom:"3rem"}}>
          {articles.map(a=>(
            <Link key={a.href} href={a.href} style={{textDecoration:"none",display:"flex",flexDirection:"column",gap:"0.75rem",background:"#fff",border:"1.5px solid var(--color-border)",borderRadius:"1rem",padding:"1.5rem"}}>
              <span style={{fontSize:"2.5rem"}}>{a.icon}</span>
              <span style={{fontWeight:700,fontSize:"1rem",color:"var(--color-dark)",lineHeight:1.35}}>{a.title}</span>
              <span style={{fontSize:"0.875rem",color:"var(--color-muted)",lineHeight:1.6}}>{a.desc}</span>
              <span style={{color:"var(--color-brand-dark)",fontWeight:600,fontSize:"0.875rem",marginTop:"auto"}}>Read guide →</span>
            </Link>
          ))}
        </div>

        <div style={{background:"var(--color-bg)",borderRadius:"1rem",padding:"2rem",marginBottom:"2rem"}}>
          <h2 style={{marginBottom:"1.25rem"}}>Key Indian Protein Sources</h2>
          <div style={{overflowX:"auto"}}>
            <table>
              <thead><tr><th>Food</th><th>Protein per 100g</th><th>Type</th><th>Best Use</th></tr></thead>
              <tbody>
                {[
                  ["Soya chunks (dry)","52g","Vegan","Curries, sabzi — highest plant protein"],
                  ["Paneer","18g","Lacto-veg","Bhurji, curry, snack"],
                  ["Whole eggs","13g","Lacto-ovo","Breakfast, bhurji"],
                  ["Chana dal (cooked)","9g","Vegan","Dal, chaat"],
                  ["Hung curd / Greek yogurt","10g","Lacto-veg","Snack, smoothie"],
                  ["Rajma (cooked)","9g","Vegan","Rajma rice, chaat"],
                  ["Chicken breast","31g","Non-veg","Curry, grilled"],
                  ["Whey protein","24g/scoop","Lacto-veg","Post-workout shake"],
                ].map(([food,protein,type,use])=>(
                  <tr key={food}>
                    <td style={{fontWeight:600}}>{food}</td>
                    <td style={{color:"var(--color-brand-dark)",fontWeight:700}}>{protein}</td>
                    <td><span className="tag" style={{fontSize:"0.7rem"}}>{type}</span></td>
                    <td style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{background:"var(--color-bg)",borderRadius:"1rem",padding:"2rem"}}>
          <h2 style={{marginBottom:"1.25rem"}}>Useful Calculators</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"0.75rem"}}>
            {[["💪 Protein Calculator","/calculators/protein"],["🌱 Vegetarian Protein","/calculators/vegetarian-protein"],["⏰ IF Calculator","/calculators/intermittent-fasting"],["🔥 TDEE Calculator","/calculators/tdee"],["📉 Calorie Deficit","/calculators/calorie-deficit"],["🥗 Macro Calculator","/calculators/macro"]].map(([n,h])=>(
              <Link key={h} href={h} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"#fff",border:"1.5px solid var(--color-border)",borderRadius:"0.75rem",padding:"0.875rem 1rem",textDecoration:"none",fontWeight:600,fontSize:"0.875rem",color:"var(--color-dark)"}}>{n}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
