import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — MuscleGuru.in",
  description: "How MuscleGuru.in collects and uses your information.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <h1>Privacy Policy</h1>
      <div className="seo-content">
        <p>MuscleGuru.in does not store any personal data entered into our calculators. All calculations are performed client-side in your browser. We use standard analytics to understand site usage.</p>
      </div>
    </div>
  );
}
