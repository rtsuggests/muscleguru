import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Running Injuries Prevention India",
  description: "Prevent and treat shin splints, runner's knee, IT band syndrome, and plantar fasciitis.",
};

const relatedLinks = [
  ["Running Pace Calc", "/calculators/running-pace"],
  ["Heart Rate Zones", "/calculators/heart-rate-zone"],
  ["VO2 Max Calc", "/calculators/vo2-max"],
  ["10K Training Plan", "/running/10k-training-plan"],
  ["Half Marathon Plan", "/running/half-marathon-training"],
  ["Calories Burned", "/calculators/calories-burned"],
];

export default function Page() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:860,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)",display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link>
          <span>›</span>
          <Link href="/running" style={{color:"var(--color-muted)",textDecoration:"none"}}>Running</Link>
          <span>›</span>
          <span style={{color:"var(--color-dark)",fontWeight:500}}>Running Injuries Prevention India</span>
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"2.5rem 1rem 5rem"}}>
        <div style={{display:"flex",gap:"0.75rem",marginBottom:"1rem"}}>
          <span className="tag">Running</span>
          <span style={{fontSize:"0.82rem",color:"var(--color-muted)"}}>10 min read</span>
        </div>
        <h1 style={{fontSize:"clamp(1.6rem,4vw,2.5rem)",lineHeight:1.2,marginBottom:"1rem"}}>Running Injuries Prevention India</h1>
        <div style={{background:"var(--color-brand-light)",border:"1.5px solid #86efac",borderRadius:"0.875rem",padding:"1.125rem 1.375rem",marginBottom:"1.5rem"}}>
          <div style={{fontWeight:700,fontSize:"0.85rem",color:"var(--color-brand-dark)",marginBottom:"0.4rem",textTransform:"uppercase"}}>Quick Answer</div>
          <p style={{margin:0,fontSize:"0.975rem",color:"var(--color-dark)",lineHeight:1.65}}>Follow the 10% weekly mileage rule. Shin splints are the most common Indian running injury caused by concrete surfaces and rapid mileage increases.</p>
        </div>
        <div className="seo-content">
          <p>Prevent and treat shin splints, runner's knee, IT band syndrome, and plantar fasciitis.</p>
          <h2>Related Calculators and Guides</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(190px, 1fr))",gap:"0.75rem",marginTop:"1rem"}}>
            {relatedLinks.map(([n,h])=>(
              <Link key={h} href={h} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"var(--color-bg)",border:"1.5px solid var(--color-border)",borderRadius:"0.625rem",padding:"0.875rem 1rem",textDecoration:"none",fontWeight:600,fontSize:"0.85rem",color:"var(--color-dark)"}}>{n}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
