import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer — MuscleGuru.in",
  description: "Important medical disclaimer for MuscleGuru.in calculators and content. Not a substitute for professional medical advice.",
};

export default function MedicalDisclaimerPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Medical Disclaimer
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Medical Disclaimer</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "2.5rem" }}>Last updated: January 2025</p>

      <div className="seo-content">
        <h2>Not Medical Advice</h2>
        <p>The content on MuscleGuru.in — including all calculators, articles, workout plans, and nutrition guides — is provided for general educational and informational purposes only. It is not intended to be, and should not be taken as, medical advice, diagnosis, or treatment.</p>

        <h2>Consult a Professional</h2>
        <p>Always consult a qualified physician, registered dietitian, or certified fitness professional before starting any new exercise programme, diet, or supplement regimen — particularly if you have any pre-existing medical condition, are pregnant, are recovering from injury, or are taking medication.</p>

        <h2>Calculator Results Are Estimates</h2>
        <p>All calculators on this site (BMI, TDEE, protein targets, body fat, etc.) use validated scientific formulas but provide estimates only. Individual results may vary based on factors these formulas cannot fully account for, including genetics, medical history, and body composition specifics. Do not use calculator results as the sole basis for medical decisions.</p>

        <h2>No Doctor-Patient Relationship</h2>
        <p>Using MuscleGuru.in, including any interaction with our calculators or content, does not create a doctor-patient or professional healthcare relationship between you and MuscleGuru.in or its contributors.</p>

        <h2>Emergency Situations</h2>
        <p>If you are experiencing a medical emergency, call your local emergency services immediately. Do not rely on this website for emergency medical guidance.</p>

        <h2>Individual Results Vary</h2>
        <p>Any results, timelines, or outcomes described in our articles (including muscle gain rates, weight loss expectations, or training adaptations) are based on published research averages. Individual results depend on genetics, adherence, starting point, and many other factors, and are not guaranteed.</p>

        <h2>Supplement Information</h2>
        <p>Any discussion of supplements on this site is for informational purposes only and is not a recommendation to use any specific product. Consult your doctor before starting any supplement, particularly if you have existing health conditions or take medication.</p>

        <h2>Questions</h2>
        <p>For questions about this disclaimer, <Link href="/contact" style={{ color: "var(--color-brand-darker)" }}>contact us here</Link>.</p>
      </div>
    </div>
  );
}
