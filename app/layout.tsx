import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#15803d" };

export const metadata: Metadata = {
  metadataBase: new URL("https://muscleguru.in"),
  title: { default: "MuscleGuru.in — India's Evidence-Based Fitness Platform", template: "%s | MuscleGuru.in" },
  description: "Free science-backed fitness calculators, workout plans, and nutrition guides for Indian adults. BMI, TDEE, protein, running plans and more.",
  keywords: ["fitness calculator India", "workout plan India", "BMI calculator India", "TDEE calculator India"],
  authors: [{ name: "MuscleGuru Editorial Team" }],
  creator: "MuscleGuru.in",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { type: "website", locale: "en_IN", url: "https://muscleguru.in", siteName: "MuscleGuru.in", title: "MuscleGuru.in — India's Evidence-Based Fitness Platform", description: "Free science-backed fitness calculators and guides for Indian adults." },
  alternates: { canonical: "https://muscleguru.in" },
};

const siteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "MuscleGuru.in", url: "https://muscleguru.in" };

function Header() {
  return (
    <header style={{ background: "#fff", borderBottom: "1.5px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
          <div style={{ width: 36, height: 36, borderRadius: "0.5rem", background: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontFamily: "Georgia, serif", fontSize: "1rem" }}>MG</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#111827", lineHeight: 1.1, fontFamily: "Georgia, serif" }}>
              MuscleGuru<span style={{ color: "#15803d" }}>.in</span>
            </div>
            <div style={{ fontSize: "0.65rem", color: "#4b5563", lineHeight: 1 }}>Evidence-Based Fitness for India</div>
          </div>
        </a>
        <nav style={{ display: "flex", gap: "0.25rem", alignItems: "center", flexWrap: "wrap" }}>
          {[["Calculators","/calculators"],["Running","/running"],["Workout Plans","/workout-plans"],["Indian Diet","/indian-diet"],["Women","/women"]].map(([label,href])=>(
            <a key={href} href={href} style={{ padding:"0.35rem 0.625rem",borderRadius:"0.375rem",textDecoration:"none",color:"#374151",fontSize:"0.82rem",fontWeight:500,whiteSpace:"nowrap" }}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#111827", color: "#9ca3af", padding: "3rem 1rem 2rem", marginTop: "auto" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff", marginBottom: "0.5rem", fontFamily: "Georgia, serif" }}>MuscleGuru.in</div>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>India&apos;s evidence-based fitness platform. Science-backed calculators, workout plans, and nutrition guides for Indian adults.</p>
          </div>
          {[
            { title:"Calculators", links:[["BMI Calculator","/calculators/bmi"],["TDEE Calculator","/calculators/tdee"],["Protein Calculator","/calculators/protein"],["Army Fitness","/calculators/army-fitness"],["All Calculators","/calculators"]] },
            { title:"Running", links:[["Beginner Guide","/running/beginners-guide"],["10K Training Plan","/running/10k-training-plan"],["Half Marathon Plan","/running/half-marathon-training"],["How to Run Faster","/running/how-to-run-faster"],["All Running Guides","/running"]] },
            { title:"More", links:[["Workout Plans","/workout-plans"],["Indian Diet","/indian-diet"],["Women's Fitness","/women"],["About Us","/about"],["Medical Disclaimer","/medical-disclaimer"]] },
          ].map(section=>(
            <div key={section.title}>
              <div style={{ fontWeight:700,color:"#fff",marginBottom:"0.75rem",fontSize:"0.875rem" }}>{section.title}</div>
              {section.links.map(([label,href])=>(
                <a key={href} href={href} style={{ display:"block",color:"#9ca3af",textDecoration:"none",fontSize:"0.82rem",marginBottom:"0.4rem",lineHeight:1.5 }}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop:"1px solid #374151",paddingTop:"1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.75rem" }}>
          <p style={{ margin:0,fontSize:"0.78rem" }}>© {new Date().getFullYear()} MuscleGuru.in · For informational purposes only · Not a substitute for medical advice</p>
          <div style={{ display:"flex",gap:"1rem",fontSize:"0.78rem" }}>
            <a href="/privacy-policy" style={{ color:"#9ca3af",textDecoration:"none" }}>Privacy</a>
            <a href="/editorial-policy" style={{ color:"#9ca3af",textDecoration:"none" }}>Editorial Policy</a>
            <a href="/contact" style={{ color:"#9ca3af",textDecoration:"none" }}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap" media="print" onLoad={"this.media='all'" as any} />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap" /></noscript>
        <style dangerouslySetInnerHTML={{ __html: `:root{--color-brand:#16a34a;--color-brand-dark:#15803d;--color-brand-darker:#166534;--color-brand-light:#f0fdf4;--color-dark:#111827;--color-body:#374151;--color-muted:#4b5563;--color-border:#e5e7eb;--color-bg:#f9fafb;--font-sans:'Inter',system-ui,-apple-system,sans-serif;--font-display:'Sora','Inter',system-ui,sans-serif;}*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{-webkit-text-size-adjust:100%;}body{font-family:var(--font-sans);color:#374151;background:#fff;line-height:1.6;min-height:100vh;display:flex;flex-direction:column;}img,video{max-width:100%;height:auto;}a{color:inherit;}` }} />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
