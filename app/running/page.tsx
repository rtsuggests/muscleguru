import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Running India — Training Plans, Speed & Injury Guides",
  description: "Complete running resource for Indian runners. 10K and half marathon training plans, speed development, injury prevention, breathing techniques, and treadmill vs outdoor guides.",
  keywords: ["running India","running training plan India","running tips India","how to run faster India"],
};

const articles = [
  {title:"Beginner's Guide to Running India",desc:"Start running from zero — gear, first steps, building to 5K, and staying safe in Indian conditions.",href:"/running/beginners-guide",icon:"🏃",tag:"Start Here",mins:"12 min"},
  {title:"5K Training Plan India",desc:"8-week programme to complete your first 5K with run-walk intervals and pace guidance.",href:"/running/5k-training-plan",icon:"🎯",tag:"Training Plan",mins:"10 min"},
  {title:"10K Training Plan India",desc:"8-week programme from 5K to 10K with intervals, tempo runs, and Indian climate strategies.",href:"/running/10k-training-plan",icon:"🏅",tag:"Training Plan",mins:"12 min"},
  {title:"Half Marathon Training Plan India",desc:"12-week programme from 10K to 21.1K. Peak week 43 km, built-in recovery weeks.",href:"/running/half-marathon-training",icon:"🏆",tag:"Training Plan",mins:"12 min"},
  {title:"Running for Weight Loss India",desc:"How much to run, what to eat, and the truth about compensatory eating for fat loss.",href:"/running/running-for-weight-loss",icon:"📉",tag:"Weight Loss",mins:"11 min"},
  {title:"Treadmill vs Outdoor Running India",desc:"Monsoon, pollution, AQI protocols, the 1% incline rule, and the hybrid approach.",href:"/running/treadmill-vs-outdoor",icon:"⚡",tag:"Comparison",mins:"10 min"},
  {title:"Running Injuries Prevention India",desc:"Shin splints, runner's knee, IT band, plantar fasciitis — causes, prevention, treatment.",href:"/running/running-injuries-prevention",icon:"🏥",tag:"Injury Prevention",mins:"12 min"},
  {title:"How to Breathe While Running",desc:"Nose vs mouth, rhythmic 3:2 pattern, side stitch fix, breathing in India's heat and pollution.",href:"/running/breathing-while-running",icon:"💨",tag:"Technique",mins:"10 min"},
  {title:"How to Run Faster",desc:"Interval training, tempo runs, cadence improvement, hill sprints, 6-week speed plan.",href:"/running/how-to-run-faster",icon:"⚡",tag:"Speed",mins:"12 min"},
  {title:"Best Running Clubs in India",desc:"Find running clubs in Delhi, Mumbai, Bengaluru, Hyderabad, Pune and more.",href:"/running/running-clubs-india",icon:"👥",tag:"Community",mins:"8 min"},
  {title:"Best Time to Run in India",desc:"Morning vs evening — AQI, heat, safety, and city-specific guidance for Indian runners.",href:"/running/best-time-to-run",icon:"⏰",tag:"India Guide",mins:"8 min"},
];

const calcs = [
  {name:"Running Pace Calculator",href:"/calculators/running-pace",icon:"🏃"},
  {name:"Heart Rate Zone Calculator",href:"/calculators/heart-rate-zone",icon:"❤️"},
  {name:"VO2 Max Calculator",href:"/calculators/vo2-max",icon:"🫁"},
  {name:"Calories Burned",href:"/calculators/calories-burned",icon:"🔥"},
  {name:"Army Fitness Calculator",href:"/calculators/army-fitness",icon:"🪖"},
  {name:"Water Intake Calculator",href:"/calculators/water-intake",icon:"💧"},
];

export default function RunningHubPage() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link>
          {" › "}<span style={{color:"var(--color-dark)",fontWeight:500}}>Running</span>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"3rem 1rem 5rem"}}>
        <div style={{textAlign:"center",marginBottom:"3rem"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>🏃</div>
          <h1 style={{fontSize:"clamp(1.75rem,4vw,2.75rem)",marginBottom:"0.75rem"}}>Running in India: Complete Resource Hub</h1>
          <p style={{fontSize:"1.05rem",color:"var(--color-muted)",maxWidth:640,margin:"0 auto 1.5rem"}}>Training plans, speed guides, injury prevention, breathing techniques, and India-specific advice for runners at every level.</p>
          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap",fontSize:"0.875rem",color:"var(--color-brand-dark)",fontWeight:500}}>
            <span>✅ Evidence-based</span><span>🇮🇳 India-specific</span><span>📱 Race calendars included</span>
          </div>
        </div>

        <div style={{background:"linear-gradient(135deg,var(--color-brand),var(--color-brand-dark))",borderRadius:"1.25rem",padding:"1.75rem 2rem",marginBottom:"2.5rem",color:"#fff"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"1.5rem",alignItems:"center",flexWrap:"wrap"}}>
            <div>
              <div style={{fontSize:"0.8rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.85,marginBottom:"0.4rem"}}>New Runner? Start Here</div>
              <div style={{fontSize:"1.25rem",fontWeight:800,marginBottom:"0.4rem"}}>Complete Beginner&apos;s Running Guide for India</div>
              <div style={{opacity:0.9,fontSize:"0.9rem"}}>Covers gear, your first run, building to 5K, Indian climate tips, and staying injury-free.</div>
            </div>
            <Link href="/running/beginners-guide" style={{background:"#fff",color:"var(--color-brand-dark)",padding:"0.75rem 1.5rem",borderRadius:"0.625rem",textDecoration:"none",fontWeight:700,fontSize:"0.9rem",whiteSpace:"nowrap"}}>Read Guide →</Link>
          </div>
        </div>

        <h2 style={{fontSize:"1.5rem",marginBottom:"1.25rem"}}>All Running Guides</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1rem",marginBottom:"3rem"}}>
          {articles.map(a=>(
            <Link key={a.href} href={a.href} style={{textDecoration:"none",display:"flex",flexDirection:"column",background:"#fff",border:"1.5px solid var(--color-border)",borderRadius:"1rem",padding:"1.375rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.875rem"}}>
                <span style={{fontSize:"2rem"}}>{a.icon}</span>
                <span className="tag" style={{fontSize:"0.72rem"}}>{a.tag}</span>
              </div>
              <div style={{fontWeight:700,fontSize:"1rem",marginBottom:"0.4rem",color:"var(--color-dark)",lineHeight:1.35}}>{a.title}</div>
              <p style={{fontSize:"0.85rem",color:"var(--color-muted)",lineHeight:1.6,flex:1,margin:0}}>{a.desc}</p>
              <div style={{marginTop:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"0.78rem",color:"var(--color-muted)"}}>⏱ {a.mins}</span>
                <span style={{fontSize:"0.85rem",color:"var(--color-brand-dark)",fontWeight:600}}>Read →</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{background:"var(--color-bg)",borderRadius:"1.25rem",padding:"2rem",marginBottom:"2rem"}}>
          <h2 style={{fontSize:"1.4rem",marginBottom:"1.25rem"}}>Running Calculators</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:"0.75rem"}}>
            {calcs.map(c=>(
              <Link key={c.href} href={c.href} style={{display:"flex",alignItems:"center",gap:"0.875rem",background:"#fff",border:"1.5px solid var(--color-border)",borderRadius:"0.875rem",padding:"1rem 1.125rem",textDecoration:"none"}}>
                <span style={{fontSize:"1.75rem"}}>{c.icon}</span>
                <span style={{fontWeight:700,fontSize:"0.9rem",color:"var(--color-dark)"}}>{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
