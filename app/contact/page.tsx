import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact MuscleGuru.in",
  description: "Get in touch with the MuscleGuru.in team — questions, corrections, feedback, or collaboration enquiries.",
};

export default function ContactPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Contact
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", marginTop: "1.5rem", marginBottom: "1rem" }}>Contact Us</h1>
      <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: 600 }}>
        We&apos;d love to hear from you — whether it&apos;s a question about a calculator, a correction to an article, or a collaboration enquiry.
      </p>

      <div style={{ display: "grid", gap: "1rem", marginBottom: "2.5rem" }}>
        <div style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem" }}>
          <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>📧 General Enquiries</div>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", margin: 0 }}>For questions about our calculators, articles, or general feedback, email us at <a href="mailto:hello@muscleguru.in" style={{ color: "var(--color-brand-darker)" }}>hello@muscleguru.in</a></p>
        </div>
        <div style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem" }}>
          <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>📝 Corrections & Editorial Feedback</div>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", margin: 0 }}>Found an error or outdated information? Email <a href="mailto:editorial@muscleguru.in" style={{ color: "var(--color-brand-darker)" }}>editorial@muscleguru.in</a> — we take accuracy seriously and review every report.</p>
        </div>
        <div style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem" }}>
          <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>🤝 Partnerships & Collaboration</div>
          <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", margin: 0 }}>Interested in partnering with MuscleGuru.in? Reach out at <a href="mailto:partnerships@muscleguru.in" style={{ color: "var(--color-brand-darker)" }}>partnerships@muscleguru.in</a></p>
        </div>
      </div>

      <div className="seo-content">
        <h2>Response Time</h2>
        <p>We aim to respond to all enquiries within 3-5 business days. For urgent corrections affecting health or safety information, please mark your email as urgent in the subject line.</p>
        <h2>Before You Write In</h2>
        <p>Many common questions are answered in our <Link href="/editorial-policy" style={{ color: "var(--color-brand-darker)" }}>Editorial Policy</Link> and <Link href="/medical-disclaimer" style={{ color: "var(--color-brand-darker)" }}>Medical Disclaimer</Link>. For calculator-specific questions, check the FAQ section on the relevant calculator page first.</p>
      </div>
    </div>
  );
}
