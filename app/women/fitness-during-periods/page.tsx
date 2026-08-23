import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fitness During Periods — Exercise Guide India",
  description: "How to train during your menstrual cycle for Indian women — what to do, what to modify, and what to avoid.",
};

export default function Page() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)",display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link>
          <span>›</span>
          <Link href="/women" style={{color:"var(--color-muted)",textDecoration:"none"}}>Women</Link>
          <span>›</span>
          <span style={{color:"var(--color-dark)",fontWeight:500}}>Fitness During Periods</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem"}}><span className="tag">Women&apos;s Fitness</span><span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>10 min read</span></div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1rem"}}>Fitness During Periods — Exercise Guide India</h1>
        <div style={{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.4rem",textTransform:"uppercase"}}>Quick Answer</div>
          <p style={{margin:0,fontSize:"0.975rem",color:"var(--color-dark)",lineHeight:1.65}}>Exercise during periods is safe and beneficial for most women. Light to moderate exercise reduces cramping, bloating, and mood symptoms. You do not need to rest completely unless you have dysmenorrhoea (severe period pain) or endometriosis.</p>
        </div>
        <div className="seo-content">

          <h2>The Menstrual Cycle and Exercise Performance</h2>
          <p>Hormonal fluctuations across the menstrual cycle affect exercise performance and recovery. Phase 1 (menstruation, days 1-5): oestrogen and progesterone are lowest — energy may be lower, but moderate exercise is beneficial. Phase 2 (follicular, days 6-13): rising oestrogen improves strength, power, and mood — this is your best phase for high-intensity training. Phase 3 (ovulation, day 14): peak oestrogen and strength — ideal for personal bests and heavy lifting. Phase 4 (luteal, days 15-28): rising progesterone causes higher perceived exertion — reduce intensity, focus on technique.</p>
          <h2>What to Modify During Periods</h2>
          <p>Most women can train normally during periods. Practical adjustments: reduce intensity if experiencing cramping (walk instead of run, lighter weights); focus on lower-body exercises if bloating makes core work uncomfortable; stay well hydrated as fluid retention is common; increase protein intake slightly (0.2g/kg more) as protein breakdown is elevated during menstruation; prioritise sleep as recovery is slightly impaired. Inverted yoga poses (headstands, shoulderstands) are traditionally avoided during menstruation in many Indian yoga traditions — this is a personal choice, not a medical necessity.</p>
          <h2>Exercise That Reduces Period Symptoms</h2>
          <p>Research by Daley (2008) found that moderate aerobic exercise significantly reduced primary dysmenorrhoea (period pain) compared to no exercise. Best exercises during periods: brisk walking (reduces cramping through prostaglandin metabolism), yoga and stretching (child's pose, pigeon pose reduce lower back and abdominal cramp), light swimming, and cycling. Avoid very high-intensity sessions (HIIT, heavy lifting) on the first 1-2 days if experiencing severe symptoms.</p>
          <div className="disclaimer-box">
            <strong>Medical Disclaimer:</strong> This article is for educational purposes only. Women with specific medical conditions including PCOS, endometriosis, or pregnancy should consult their gynaecologist or doctor before starting a new exercise programme.
          </div>
          <div style={{marginTop:"2rem",paddingTop:"1.5rem",borderTop:"1.5px solid var(--color-border)"}}>
            <h2 style={{fontSize:"1.25rem",marginBottom:"1rem"}}>Related Calculators and Guides</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",gap:"0.75rem"}}>
              {[["Protein Calculator","/calculators/protein"],["BMI Calculator","/calculators/bmi"],["TDEE Calculator","/calculators/tdee"],["Pregnancy Weight","/calculators/pregnancy-weight-gain"],["Waist-Hip Ratio","/calculators/waist-hip-ratio"],["Sleep Calculator","/calculators/sleep"]].map(([n,h])=>(
                <Link key={h} href={h} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--color-bg)",border:"1.5px solid var(--color-border)",borderRadius:"0.625rem",padding:"0.875rem 1rem",textDecoration:"none",fontWeight:600,fontSize:"0.85rem",color:"var(--color-dark)"}}>{n}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
