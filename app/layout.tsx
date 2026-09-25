import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  };

const siteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "MuscleGuru.in", url: "https://muscleguru.in" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap" />
        <link id="mg-fonts" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@700;800&display=swap" media="print" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var l=document.getElementById('mg-fonts');if(!l)return;function a(){l.media='all';}if(l.sheet){a();}else{l.addEventListener('load',a);l.addEventListener('error',a);}})();` }} />
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
