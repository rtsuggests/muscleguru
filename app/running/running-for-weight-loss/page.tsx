import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  alternates: { canonical: "/running/running-for-weight-loss" },
  title: "Running for Weight Loss India — How Much to Run",
  description: "Evidence-based guide to running for weight loss in India. How much running you need, optimal pace, combining diet with running, and realistic fat loss expectations.",
  keywords: ["running for weight loss India","jogging weight loss India","running diet plan India"],
};
export default function Page() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)",display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link><span>›</span>
          <Link href="/running" style={{color:"var(--color-muted)",textDecoration:"none"}}>Running</Link><span>›</span>
          <span style={{color:"var(--color-dark)",fontWeight:500}}>Running for Weight Loss</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem"}}><span className="tag">Weight Loss</span><span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>⏱ 11 min read</span></div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1rem"}}>Running for Weight Loss India: How Much to Run and What to Eat</h1>
        <div style={{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.4rem",textTransform:"uppercase"}}>Key Principle</div>
          <p style={{margin:0,fontSize:"0.975rem",color:"var(--color-dark)",lineHeight:1.65}}>Running contributes to fat loss through calorie expenditure. Combined with a moderate dietary deficit, 150–200 minutes of running per week accelerates fat loss significantly. Running alone without dietary changes typically produces modest results because most people compensate by eating more.</p>
        </div>
        <div className="seo-content">
          <h2>How Many Calories Does Running Burn?</h2>
          <table>
            <thead><tr><th>Runner Weight</th><th>Pace</th><th>30 min</th><th>45 min</th><th>60 min</th></tr></thead>
            <tbody>
              {[[55,"7 min/km",260,390,519],[70,"7 min/km",330,495,660],[70,"6 min/km",385,578,770],[85,"7 min/km",400,600,800]].map(([w,p,t30,t45,t60])=>(
                <tr key={String(w)+String(p)}><td>{w} kg</td><td>{p}</td><td>{t30}</td><td>{t45}</td><td style={{fontWeight:700,color:"var(--color-brand-dark)"}}>{t60}</td></tr>
              ))}
            </tbody>
          </table>
          <p>Use our <Link href="/calculators/calories-burned" style={{color:"var(--color-brand-darker)"}}>Calories Burned Calculator</Link> for exact figures. Then use our <Link href="/calculators/calorie-deficit" style={{color:"var(--color-brand-darker)"}}>Calorie Deficit Calculator</Link> to set your dietary target.</p>
          <h2>Optimal Weekly Running Schedule for Fat Loss</h2>
          <table>
            <thead><tr><th>Day</th><th>Running</th><th>Diet Focus</th></tr></thead>
            <tbody>
              {[["Monday","35 min easy run","Normal calorie target, high protein"],["Tuesday","Rest or 30 min walk","Reduce carbs slightly (−1 roti)"],["Wednesday","25 min HIIT","Pre-run: banana. Post-run: protein meal"],["Thursday","40 min easy run","Normal calorie target"],["Friday","Rest","Reduce carbs slightly"],["Saturday","50–60 min long run","Carb meal 90 min before"],["Sunday","Complete rest","Recovery nutrition"]].map(([d,r,diet])=>(
                <tr key={d}><td style={{fontWeight:600}}>{d}</td><td>{r}</td><td style={{fontSize:"0.85rem",color:"var(--color-muted)"}}>{diet}</td></tr>
              ))}
            </tbody>
          </table>
          <h2>Realistic Expectations</h2>
          <ul>
            <li><strong>Running alone (no diet changes):</strong> 0.1–0.2 kg/week at best</li>
            <li><strong>Running + moderate calorie deficit:</strong> 0.4–0.6 kg/week</li>
            <li><strong>Month 1:</strong> 1–2 kg fat loss (may not show on scale due to water changes)</li>
            <li><strong>Month 3:</strong> 4–6 kg fat loss with visible waist circumference reduction</li>
          </ul>
          <div style={{marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",gap:"0.75rem"}}>
            {[["📉 Calorie Deficit","/calculators/calorie-deficit"],["🔥 TDEE Calculator","/calculators/tdee"],["🔥 Calories Burned","/calculators/calories-burned"],["💪 Protein Calculator","/calculators/protein"],["⚖️ BMI Calculator","/calculators/bmi"],["📐 Waist-Hip Ratio","/calculators/waist-hip-ratio"]].map(([n,h])=>(
              <Link key={h} href={h} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--color-bg)",border:"1.5px solid var(--color-border)",borderRadius:"0.625rem",padding:"0.875rem 1rem",textDecoration:"none",fontWeight:600,fontSize:"0.85rem",color:"var(--color-dark)"}}>{n}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
