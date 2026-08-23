import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10K Training Plan India — 8-Week Programme",
  description: "Free 10K Training Plan India — 8-Week Programme for Indian runners. Evidence-based programme with Indian climate tips and race calendar.",
  keywords: ["10K training plan India","10km beginner India","how to run 10K India"],
};

export default function Page() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)",display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link><span>›</span>
          <Link href="/running" style={{color:"var(--color-muted)",textDecoration:"none"}}>Running</Link><span>›</span>
          <span style={{color:"var(--color-dark)",fontWeight:500}}>10K Training Plan India</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem",flexWrap:"wrap"}}>
          <span className="tag">Running</span>
          <span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>⏱ 12 min read</span>
        </div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1.5rem"}}>10K Training Plan India — 8-Week Programme</h1>
        <div className="seo-content">
          <div style={{{{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}}}>
            <div style={{{{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.4rem",textTransform:"uppercase"}}}}>Programme Overview</div>
            <div style={{{{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:"0.75rem"}}}}>
              {[["Duration","8 weeks"],["Days/week","3–4 runs"],["Start","Can run 5K"],["Goal","Finish 10K"],["Peak week","~19 km"],["Taper","Week 8"]].map(([l,v])=>(
                <div key={{l}} style={{{{textAlign:"center"}}}}><div style={{{{fontWeight:800,fontSize:"0.95rem",color:"var(--color-brand-dark)"}}}}>{v}</div><div style={{{{fontSize:"0.72rem",color:"var(--color-muted)"}}}}>{l}</div></div>
              ))}
            </div>
          </div>
          <h2>Why 10K Is the Perfect Distance for Indian Runners</h2>
          <p>The 10 kilometre race is the sweet spot of distance running — challenging enough to require genuine preparation, but accessible enough that any moderately fit adult can complete one within 2–4 months of structured training. Major Indian 10K events include the Bengaluru 10K Challenge (25,000+ participants), Airtel Delhi Half Marathon 10K, Hyderabad 10K, and dozens of city-level events.</p>
          <h2>The 8-Week Training Plan</h2>
          <div style={{{{overflowX:"auto"}}}}>
            <table>
              <thead><tr style={{{{background:"var(--color-brand-light)"}}}}><th>Week</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Sat (Long)</th><th>Total</th><th>Focus</th></tr></thead>
              <tbody>
                {[
                  [1,"3K easy","Cross-train 30 min","3K easy","4K easy","10K","Building habit"],
                  [2,"3.5K easy","Cross-train 35 min","3.5K easy","5K easy","12K","Aerobic base"],
                  [3,"4K easy","3K + 4×200m strides","4K easy","6K easy","14K","Introducing pace"],
                  [4,"4K easy","Cross-train 30 min","3K easy","5K easy","12K","Recovery week"],
                  [5,"5K easy","4K tempo","4K easy","7K easy","16K","Tempo work"],
                  [6,"5K easy","5×400m at pace","4K easy","8K easy","18K","Speed work"],
                  [7,"5K easy","5K tempo","4K easy","9K easy","19K","Peak week"],
                  [8,"4K easy","3K easy","2K easy","🏁 RACE DAY","9K+race","Taper & race"],
                ].map(([w,tue,wed,thu,sat,total,focus])=>(
                  <tr key={{w}} style={{{{background:w===4?"#fffbeb":w===8?"#f0fdf4":"transparent"}}}}>
                    <td style={{{{fontWeight:700}}}}>Week {w}</td><td>{tue}</td><td>{wed}</td><td>{thu}</td>
                    <td style={{{{fontWeight:600}}}}>{sat}</td><td style={{{{fontWeight:700,color:"var(--color-brand-dark)"}}}}>{total}</td>
                    <td style={{{{fontSize:"0.8rem",color:"var(--color-muted)"}}}}>{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Pacing Strategy for Race Day</h2>
          <p>Start 10–15 sec/km slower than planned (race adrenaline will make easy pace feel slow). Settle into target pace at km 4–7. Build in the final 2 km. Use our <Link href="/calculators/running-pace" style={{{{color:"var(--color-brand-darker)"}}}}>Running Pace Calculator</Link> to find your target pace and training zones.</p>
          <h2>Related Calculators</h2>
          <div style={{{{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",gap:"0.75rem",marginTop:"1rem"}}}}>
            {[["🏃 Running Pace","/calculators/running-pace"],["❤️ Heart Rate Zones","/calculators/heart-rate-zone"],["🔥 Calories Burned","/calculators/calories-burned"],["🫁 VO2 Max","/calculators/vo2-max"],["💧 Water Intake","/calculators/water-intake"],["🏆 Half Marathon Plan","/running/half-marathon-training"]].map(([n,h])=>(
              <Link key={{h}} href={{h}} style={{{{display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--color-bg)",border:"1.5px solid var(--color-border)",borderRadius:"0.625rem",padding:"0.875rem 1rem",textDecoration:"none",fontWeight:600,fontSize:"0.85rem",color:"var(--color-dark)"}}}}>{n}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
