import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Fitness Calculators India — 25 Tools",
  description: "25 free science-backed fitness calculators for Indian adults. BMI, TDEE, protein, VO2 max, army fitness, vegetarian protein, intermittent fasting, muscle gain rate, diabetes risk, keto, running pace, sleep and more.",
  keywords: ["fitness calculators India","free fitness calculator India","BMI calculator India","TDEE calculator India"],
};

const calculators = [
  { name:"BMI Calculator",desc:"Indian-adapted BMI with ICMR cutoffs. Instant health interpretation.",href:"/calculators/bmi",icon:"⚖️",tag:"Most Popular"},
  { name:"TDEE Calculator",desc:"Total Daily Energy Expenditure using Mifflin-St Jeor equation.",href:"/calculators/tdee",icon:"🔥",tag:"Essential"},
  { name:"Calories Burned",desc:"40+ activities including Surya Namaskar, cricket, yoga.",href:"/calculators/calories-burned",icon:"🏃",tag:"Popular"},
  { name:"Ideal Weight",desc:"4 validated formulas plus Indian-adapted BMI range.",href:"/calculators/ideal-weight",icon:"🎯",tag:"Popular"},
  { name:"Body Fat %",desc:"US Navy circumference method for accurate body fat estimation.",href:"/calculators/body-fat",icon:"📊",tag:"Popular"},
  { name:"Protein Calculator",desc:"Personalised daily protein target based on weight and goal.",href:"/calculators/protein",icon:"💪",tag:"Essential"},
  { name:"Sleep Calculator",desc:"Best bedtime or wake-up time based on 90-minute sleep cycles.",href:"/calculators/sleep",icon:"😴",tag:"Recovery"},
  { name:"Water Intake",desc:"Daily hydration needs adjusted for India's climate.",href:"/calculators/water-intake",icon:"💧",tag:"Health"},
  { name:"Calorie Deficit",desc:"Daily calorie target for fat loss with weekly timeline.",href:"/calculators/calorie-deficit",icon:"📉",tag:"Weight Loss"},
  { name:"Running Pace",desc:"Pace, race finish times (5K to marathon), and training zones.",href:"/calculators/running-pace",icon:"🏃",tag:"Running"},
  { name:"Heart Rate Zone",desc:"5 personalised zones using the Karvonen method.",href:"/calculators/heart-rate-zone",icon:"❤️",tag:"Cardio"},
  { name:"Macro Calculator",desc:"Daily protein, carbs and fat targets for any goal.",href:"/calculators/macro",icon:"🥗",tag:"Nutrition"},
  { name:"One Rep Max",desc:"Estimate your 1RM and get a full training percentage table.",href:"/calculators/one-rep-max",icon:"🏋️",tag:"Strength"},
  { name:"Waist-Hip Ratio",desc:"Indian-adapted risk thresholds. More accurate than BMI.",href:"/calculators/waist-hip-ratio",icon:"📐",tag:"Indian Health"},
  { name:"Keto Macro Calc",desc:"4 keto variants with Indian keto food guide.",href:"/calculators/keto-macro",icon:"🥑",tag:"Keto"},
  { name:"Body Type Quiz",desc:"7-question quiz — ecto, meso or endomorph with Indian diet advice.",href:"/calculators/body-type",icon:"🧬",tag:"Quiz"},
  { name:"Lean Body Mass",desc:"Boer, James and Hume formulas for accurate lean mass.",href:"/calculators/lean-body-mass",icon:"🫀",tag:"Advanced"},
  { name:"FFMI Calculator",desc:"Fat-Free Mass Index — the natural muscle ceiling measure.",href:"/calculators/ffmi",icon:"🏆",tag:"Advanced"},
  { name:"Pregnancy Weight",desc:"Trimester breakdown with Indian dietary guidance.",href:"/calculators/pregnancy-weight-gain",icon:"🤰",tag:"Women's Health"},
  { name:"VO2 Max Calc",desc:"3 validated field methods — Rockport Walk, Cooper Run, RHR.",href:"/calculators/vo2-max",icon:"🫁",tag:"Cardio Fitness"},
  { name:"Army Fitness Calc",desc:"NDA, CDS, Agniveer and SSB physical fitness standards.",href:"/calculators/army-fitness",icon:"🪖",tag:"Defence"},
  { name:"Vegetarian Protein",desc:"Full Indian veg protein food table with PDCAAS scores.",href:"/calculators/vegetarian-protein",icon:"🌱",tag:"Vegetarian"},
  { name:"IF Calculator",desc:"16:8, 18:6, 5:2 windows with Indian meal timing examples.",href:"/calculators/intermittent-fasting",icon:"⏰",tag:"Fat Loss"},
  { name:"Muscle Gain Rate",desc:"Realistic monthly and yearly muscle gain projections.",href:"/calculators/muscle-gain-rate",icon:"📈",tag:"Muscle Building"},
  { name:"Fasting Nutrition",desc:"Calorie & protein targets for Navratri, Ekadashi, Karva Chauth.",href:"/calculators/fasting-nutrition",icon:"🪔",tag:"Festival Fasting"},
  { name:"Diabetes Risk",desc:"Indian-adapted BMI + waist + lifestyle risk factors.",href:"/calculators/diabetes-bmi",icon:"🩸",tag:"Medical"},
];

export default function CalculatorsPage() {
  return (
    <>
      <div style={{background:"var(--color-bg)",borderBottom:"1px solid var(--color-border)",padding:"0.6rem 1rem"}}>
        <div style={{maxWidth:1100,margin:"0 auto",fontSize:"0.82rem",color:"var(--color-muted)"}}>
          <Link href="/" style={{color:"var(--color-muted)",textDecoration:"none"}}>Home</Link>
          {" › "}<span style={{color:"var(--color-dark)",fontWeight:500}}>Fitness Calculators</span>
        </div>
      </div>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"3rem 1rem 5rem"}}>
        <div style={{textAlign:"center",marginBottom:"3rem"}}>
          <h1 style={{fontSize:"clamp(1.75rem,4vw,2.75rem)",marginBottom:"0.75rem"}}>Free Fitness Calculators for India</h1>
          <p style={{fontSize:"1.05rem",color:"var(--color-muted)",maxWidth:640,margin:"0 auto 1.5rem"}}>
            25 science-backed tools covering body composition, nutrition, exercise, cardio fitness, army training, diabetes risk, and more. All free. All formulas explained. Indian context built in.
          </p>
          <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap",fontSize:"0.875rem",color:"var(--color-brand-dark)",fontWeight:500}}>
            <span>✅ Instant results</span><span>📱 Mobile-friendly</span><span>🔬 Peer-reviewed formulas</span><span>🇮🇳 Indian-adapted cutoffs</span>
          </div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"1rem",marginBottom:"3rem"}}>
          {calculators.map((c,i)=>(
            <Link key={c.href} href={c.href} style={{textDecoration:"none",display:"flex",flexDirection:"column",background:"#fff",border:"1.5px solid var(--color-border)",borderRadius:"1rem",padding:"1.375rem",transition:"box-shadow 0.2s"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"}}>
                <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
                  <div style={{width:44,height:44,borderRadius:"0.625rem",background:"var(--color-brand-light)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5rem"}}>{c.icon}</div>
                  <span style={{background:"#f3f4f6",color:"var(--color-muted)",fontSize:"0.72rem",fontWeight:600,padding:"0.2rem 0.6rem",borderRadius:"9999px"}}>#{i+1}</span>
                </div>
                <span className="tag" style={{fontSize:"0.72rem"}}>{c.tag}</span>
              </div>
              <div style={{fontWeight:700,fontSize:"1rem",marginBottom:"0.4rem",color:"var(--color-dark)"}}>{c.name}</div>
              <p style={{fontSize:"0.875rem",color:"var(--color-muted)",lineHeight:1.6,flex:1,margin:0}}>{c.desc}</p>
              <div style={{marginTop:"1rem",textAlign:"right"}}>
                <span style={{fontSize:"0.85rem",color:"var(--color-brand-dark)",fontWeight:600}}>Calculate →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="disclaimer-box">
          <strong>⚠️ Important:</strong> All calculators provide estimates based on validated scientific formulas for educational purposes only. Results do not replace professional medical, dietary, or fitness advice.
        </div>
      </div>
    </>
  );
}
