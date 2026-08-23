import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PCOS and Exercise Guide India — Evidence-Based",
  description: "Evidence-based exercise protocols for Indian women with PCOS. Which exercises help, which to avoid, and how much to do.",
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
          <span style={{color:"var(--color-dark)",fontWeight:500}}>PCOS and Exercise Guide India</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem"}}><span className="tag">Women&apos;s Fitness</span><span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>10 min read</span></div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1rem"}}>PCOS and Exercise Guide India — Evidence-Based</h1>
        <div style={{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.4rem",textTransform:"uppercase"}}>Quick Answer</div>
          <p style={{margin:0,fontSize:"0.975rem",color:"var(--color-dark)",lineHeight:1.65}}>Exercise is one of the most effective treatments for PCOS — improving insulin sensitivity, reducing androgen levels, and restoring menstrual regularity. Research shows that 150 minutes of moderate exercise per week significantly improves PCOS symptoms even without weight loss.</p>
        </div>
        <div className="seo-content">

          <h2>How Exercise Helps PCOS</h2>
          <p>PCOS (Polycystic Ovary Syndrome) affects an estimated 1 in 5 Indian women of reproductive age — one of the highest rates in the world. The primary mechanisms of PCOS are insulin resistance and elevated androgens (male hormones). Exercise directly addresses both: it improves insulin sensitivity (reducing insulin-driven androgen production) and reduces cortisol (which otherwise elevates androgens). Research by Harrison et al. found that 12 weeks of aerobic exercise improved menstrual frequency, reduced testosterone, and improved insulin sensitivity in women with PCOS — without any dietary intervention.</p>
          <h2>Best Exercise Types for PCOS</h2>
          <p>Aerobic exercise (150 min/week moderate intensity): the most evidence-supported intervention for PCOS. Brisk walking, cycling, swimming, and dance are accessible for most Indian women. Reduces insulin resistance and androgen levels. Resistance training (2-3 sessions/week): builds muscle mass which permanently improves insulin sensitivity and glucose disposal. Yoga: research by Nidhi et al. found that yoga practice significantly reduced testosterone, LH/FSH ratio, and fasting insulin in adolescent girls with PCOS after 12 weeks. HIIT (1 session/week): research by Patten et al. found HIIT superior to moderate continuous training for improving insulin sensitivity in PCOS — but limit to 1 session weekly as excessive high-intensity exercise can elevate cortisol and worsen symptoms.</p>
          <h2>Exercise Cautions for PCOS</h2>
          <p>Excessive exercise (over-training) can worsen PCOS by elevating cortisol — which increases androgen production and worsens insulin resistance. Signs of over-training with PCOS: worsening menstrual irregularity, increased acne, fatigue, mood deterioration. The target: 150-200 minutes of moderate exercise per week plus 2-3 strength sessions. Running for 60+ minutes daily, HIIT daily, or CrossFit-style training 5-6 days weekly is likely excessive for women with PCOS. Use our Calorie Deficit Calculator conservatively — aggressive calorie restriction combined with excessive exercise severely worsens PCOS outcomes.</p>
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
