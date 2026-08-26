import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy — MuscleGuru.in",
  description: "Our editorial standards and content review process.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <h1>Editorial Policy</h1>
      <div className="seo-content">
        <p>All content on MuscleGuru.in is reviewed against peer-reviewed scientific literature and established clinical guidelines including ICMR and WHO Asia-Pacific standards. We prioritise accuracy over sensationalism and clearly cite sources where claims are made.</p>
      </div>
    </div>
  );
}
