import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/terms-of-service" },
  title: "Terms of Service — MuscleGuru.in",
  description: "Terms and conditions for using MuscleGuru.in — please read before using our calculators and content.",
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Terms of Service
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Terms of Service</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "2.5rem" }}>Last updated: January 2025</p>

      <div className="seo-content">
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using MuscleGuru.in (&quot;the Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.</p>

        <h2>Use of the Site</h2>
        <p>MuscleGuru.in provides free fitness calculators, articles, and guides for informational and educational purposes. You may use the Site for personal, non-commercial purposes. You may not reproduce, redistribute, or republish our content without prior written permission.</p>

        <h2>No Medical Advice</h2>
        <p>Content on this Site does not constitute medical, dietary, or professional advice. See our full <Link href="/medical-disclaimer" style={{ color: "var(--color-brand-darker)" }}>Medical Disclaimer</Link> for details.</p>

        <h2>Accuracy of Information</h2>
        <p>While we strive for accuracy and review content against peer-reviewed research, we make no warranties about the completeness, reliability, or accuracy of any information on this Site. Any action you take based on information found on MuscleGuru.in is strictly at your own risk.</p>

        <h2>Third-Party Links and Advertising</h2>
        <p>MuscleGuru.in may contain links to third-party websites and may display advertisements served by third-party networks including Google AdSense. We are not responsible for the content, privacy practices, or accuracy of third-party sites. See our <Link href="/privacy-policy" style={{ color: "var(--color-brand-darker)" }}>Privacy Policy</Link> for information about how advertising cookies are used.</p>

        <h2>Intellectual Property</h2>
        <p>All content on MuscleGuru.in, including text, calculators, graphics, and logos, is the property of MuscleGuru.in unless otherwise stated, and is protected by applicable copyright and intellectual property laws.</p>

        <h2>Limitation of Liability</h2>
        <p>MuscleGuru.in and its contributors shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or reliance on any information provided.</p>

        <h2>Changes to These Terms</h2>
        <p>We may update these Terms of Service from time to time. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of India. Any disputes arising from use of this Site shall be subject to the jurisdiction of Indian courts.</p>

        <h2>Contact</h2>
        <p>Questions about these terms? <Link href="/contact" style={{ color: "var(--color-brand-darker)" }}>Contact us here</Link>.</p>
      </div>
    </div>
  );
}
