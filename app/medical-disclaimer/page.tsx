import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MuscleGuru.in",
  description: "Read MuscleGuru.in's privacy policy. We are committed to protecting your privacy and being transparent about how data is handled.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Privacy Policy
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "2.5rem" }}>Last updated: January 2025</p>

      <div className="seo-content">
        <h2>Our Commitment to Privacy</h2>
        <p>MuscleGuru.in is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights regarding your personal information.</p>

        <h2>Data We Collect</h2>
        <h3>Calculator Inputs</h3>
        <p>All calculator inputs on MuscleGuru.in (weight, height, age, etc.) are processed entirely in your browser. We do not store, transmit, or retain any personal health data you enter into our calculators. No account is required, and no data is saved after you leave the page.</p>

        <h3>Analytics Data</h3>
        <p>We may use privacy-respecting analytics tools to understand how visitors use our site — such as which pages are popular and how long people spend reading articles. This data is aggregated and anonymised; it does not identify you personally.</p>

        <h3>Cookies</h3>
        <p>We may use essential cookies to ensure the website functions correctly, and analytics cookies (with your consent) to improve the site. We do not use tracking cookies for advertising profiling purposes.</p>

        <h2>Google AdSense</h2>
        <p>MuscleGuru.in may display advertisements via Google AdSense. Google may use cookies to serve ads based on your prior visits to this website or other websites. You can opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-brand)" }}>Google&apos;s Ad Settings</a>.</p>

        <h2>Third-Party Links</h2>
        <p>Our articles contain links to external websites including PubMed, NIH, WHO, and other research sources. We are not responsible for the privacy practices of these external sites.</p>

        <h2>Children&apos;s Privacy</h2>
        <p>MuscleGuru.in is intended for adults aged 18 and over. We do not knowingly collect personal information from children under 18. If you believe a child has provided personal information through our site, please contact us.</p>

        <h2>Your Rights</h2>
        <p>Since we do not collect or store personal health data from calculator use, there is no personal data to access, correct, or delete. For any queries about other data, contact us at the address below.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy periodically. The &quot;Last updated&quot; date at the top of this page indicates when it was last revised.</p>

        <h2>Contact</h2>
        <p>Privacy-related questions: <Link href="/contact" style={{ color: "var(--color-brand)" }}>Contact us here</Link>.</p>
      </div>
    </div>
  );
}
