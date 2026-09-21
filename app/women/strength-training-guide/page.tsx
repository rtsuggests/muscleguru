import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/women/strength-training-guide" },
  title: "Strength Training Guide for Women India",
  description: "Complete beginner strength training guide for Indian women. 3-day programme, exercise selection, and progression system.",
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
          <span style={{color:"var(--color-dark)",fontWeight:500}}>Strength Training Guide for Women India</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem"}}><span className="tag">Women&apos;s Fitness</span><span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>10 min read</span></div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1rem"}}>Strength Training Guide for Women India</h1>
        <div style={{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.4rem",textTransform:"uppercase"}}>Quick Answer</div>
          <p style={{margin:0,fontSize:"0.975rem",color:"var(--color-dark)",lineHeight:1.65}}>Start with 3 days per week of full-body resistance training. Focus on compound movements — squats, deadlifts, rows, and presses. Progressive overload (adding weight or reps over time) is the key driver of results.</p>
        </div>
        <div className="seo-content">

          <h2>Why Indian Women Should Prioritise Strength Training</h2>
          <p>India has one of the world's highest rates of osteoporosis and sarcopenia in women — conditions directly linked to inadequate muscle mass and bone density. Research by the ICMR found that Indian women have significantly lower bone density than their Western counterparts, making strength training a critical health intervention beyond aesthetics. A 3-day strength training programme builds the muscular and skeletal foundation that protects Indian women throughout their lives.</p>
          <h2>3-Day Beginner Programme for Indian Women</h2>
          <p>Train Monday, Wednesday, and Friday. Each session: warm-up 5 min, main workout 35-40 min, cool-down 5 min. Week 1-4: goblet squat 3x10, Romanian deadlift 3x10, dumbbell row 3x10/arm, push-up or incline push-up 3x10, plank 3x30 sec. Add weight or reps every 1-2 weeks when current weights feel manageable for all sets with good form.</p>
          <h2>Progressive Overload: The Key Principle</h2>
          <p>Progressive overload means consistently increasing the training stimulus over time. The simplest method: when you can complete all prescribed sets and reps with good form, increase weight by 1-2 kg on upper body exercises or 2-4 kg on lower body exercises. Track every session in a notebook. Without progressive overload, results plateau quickly regardless of how consistently you train.</p>
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
