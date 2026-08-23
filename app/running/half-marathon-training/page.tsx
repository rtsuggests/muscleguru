import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Half Marathon Training Plan India — 12 Weeks",
  description: "Free Half Marathon Training Plan India — 12 Weeks for Indian runners. Evidence-based programme with Indian climate tips and race calendar.",
  keywords: ["half marathon training plan India","21K training plan India","half marathon beginner India"],
};

export default function Page() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)",display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link><span>›</span>
          <Link href="/running" style={{color:"var(--color-muted)",textDecoration:"none"}}>Running</Link><span>›</span>
          <span style={{color:"var(--color-dark)",fontWeight:500}}>Half Marathon Training Plan India</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem",flexWrap:"wrap"}}>
          <span className="tag">Running</span>
          <span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>⏱ 12 min read</span>
        </div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1.5rem"}}>Half Marathon Training Plan India — 12 Weeks</h1>
        <div className="seo-content">
          <div style={{{{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}}}>
            <div style={{{{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.5rem",textTransform:"uppercase"}}}}>Programme Overview</div>
            <div style={{{{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(120px, 1fr))",gap:"0.75rem"}}}}>
              {[["Duration","12 weeks"],["Days/week","4 runs"],["Start","Can run 10K"],["Peak week","~43 km"],["Target","1:45–2:30"],["Taper","Weeks 11–12"]].map(([l,v])=>(
                <div key={{l}} style={{{{textAlign:"center"}}}}><div style={{{{fontWeight:800,fontSize:"0.9rem",color:"var(--color-brand-dark)"}}}}>{v}</div><div style={{{{fontSize:"0.72rem",color:"var(--color-muted)"}}}}>{l}</div></div>
              ))}
            </div>
          </div>
          <h2>12-Week Half Marathon Training Plan</h2>
          <div style={{{{overflowX:"auto"}}}}>
            <table>
              <thead><tr style={{{{background:"var(--color-brand-light)"}}}}><th>Week</th><th>Wed Quality</th><th>Sat Long Run</th><th>Total</th><th>Focus</th></tr></thead>
              <tbody>
                {[
                  [1,"4×800m intervals","10K easy","24K","Base"],
                  [2,"5K tempo","11K easy","27K","Aerobic base"],
                  [3,"5×800m intervals","13K easy","30K","Build"],
                  [4,"Easy runs only","10K easy","23K","Recovery"],
                  [5,"6K tempo","14K easy","33K","Long run build"],
                  [6,"6×800m","16K easy","35K","Speed & distance"],
                  [7,"7K tempo","18K easy","40K","Peak build"],
                  [8,"Easy runs only","13K easy","28K","Recovery"],
                  [9,"8K tempo","19K easy","42K","Race-specific"],
                  [10,"8×800m","20K easy","43K","Peak week"],
                  [11,"6K easy","16K easy","34K","Taper begins"],
                  [12,"3K easy","🏁 RACE DAY","12K+race","Race week"],
                ].map(([w,q,sat,total,focus])=>(
                  <tr key={{w}} style={{{{background:w===4||w===8?"#fffbeb":w===12?"#f0fdf4":"transparent"}}}}>
                    <td style={{{{fontWeight:700}}}}>Week {w}</td>
                    <td style={{{{color:"var(--color-brand-dark)",fontWeight:500}}}}>{q}</td>
                    <td style={{{{fontWeight:600}}}}>{sat}</td>
                    <td style={{{{fontWeight:700,color:"var(--color-brand-dark)"}}}}>{total}</td>
                    <td style={{{{fontSize:"0.8rem",color:"var(--color-muted)"}}}}>{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2>Long Run Rules</h2>
          <ul>
            <li><strong>Run genuinely easy:</strong> 60–90 sec/km slower than target race pace.</li>
            <li><strong>Never increase long run distance more than 3 km per week.</strong></li>
            <li><strong>Rest fully the day after your long run.</strong></li>
            <li><strong>Practice race nutrition from Week 7 onwards</strong> — dates, banana, or gel at halfway.</li>
          </ul>
          <h2>Related Calculators</h2>
          <div style={{{{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",gap:"0.75rem",marginTop:"1rem"}}}}>
            {[["🏃 Running Pace","/calculators/running-pace"],["❤️ Heart Rate Zones","/calculators/heart-rate-zone"],["💧 Water Intake","/calculators/water-intake"],["💪 Protein Calculator","/calculators/protein"],["🏅 10K Training Plan","/running/10k-training-plan"],["⚡ How to Run Faster","/running/how-to-run-faster"]].map(([n,h])=>(
              <Link key={{h}} href={{h}} style={{{{display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--color-bg)",border:"1.5px solid var(--color-border)",borderRadius:"0.625rem",padding:"0.875rem 1rem",textDecoration:"none",fontWeight:600,fontSize:"0.85rem",color:"var(--color-dark)"}}}}>{n}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
