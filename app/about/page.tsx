import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy — MuscleGuru.in",
  description: "Read MuscleGuru.in's editorial policy, content review process, and standards for evidence-based health and fitness content.",
};

export default function EditorialPolicyPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Editorial Policy
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Editorial Policy</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "2.5rem" }}>Last updated: January 2025</p>

      <div className="seo-content">
        <h2>Our Commitment to Evidence-Based Content</h2>
        <p>MuscleGuru.in is committed to publishing health and fitness information that is accurate, balanced, and grounded in peer-reviewed scientific evidence. This editorial policy describes the standards we hold all content to, and the processes we use to maintain them.</p>

        <h2>Content Creation Process</h2>
        <p>All content published on MuscleGuru.in follows this creation and review process:</p>
        <ol>
          <li><strong>Research phase:</strong> Writers review current peer-reviewed literature from databases including PubMed, MEDLINE, Cochrane Library, and Google Scholar before writing.</li>
          <li><strong>Drafting:</strong> Content is written using accurate, appropriately cautious language that reflects the strength of available evidence.</li>
          <li><strong>Fact-checking:</strong> All claims are verified against cited sources before publication.</li>
          <li><strong>Review:</strong> Content is reviewed against ICMR, WHO, and international sports nutrition guidelines (ISSN, ACSM, BDA).</li>
          <li><strong>Disclaimer placement:</strong> All health-related content is accompanied by appropriate medical disclaimers.</li>
          <li><strong>Regular updates:</strong> Articles are reviewed and updated when new significant evidence emerges.</li>
        </ol>

        <h2>Types of Sources We Use</h2>
        <p>We prioritise primary sources and established health institutions:</p>
        <ul>
          <li>Peer-reviewed journals indexed in PubMed and MEDLINE</li>
          <li>World Health Organization (WHO) guidelines</li>
          <li>Indian Council of Medical Research (ICMR) recommendations</li>
          <li>National Institutes of Health (NIH)</li>
          <li>American College of Sports Medicine (ACSM)</li>
          <li>International Society of Sports Nutrition (ISSN)</li>
          <li>Harvard T.H. Chan School of Public Health</li>
          <li>Mayo Clinic and other major academic medical centres</li>
          <li>Examine.com for supplement research summaries</li>
        </ul>

        <h2>Language Standards</h2>
        <p>We require writers to use language that accurately reflects the certainty level of the evidence:</p>
        <ul>
          <li>✅ <strong>Acceptable:</strong> &quot;Research suggests,&quot; &quot;evidence indicates,&quot; &quot;may support,&quot; &quot;associated with,&quot; &quot;can contribute to&quot;</li>
          <li>❌ <strong>Not acceptable:</strong> &quot;Scientifically proven,&quot; &quot;guaranteed,&quot; &quot;will cause,&quot; &quot;cures,&quot; &quot;the science is clear that&quot; (without qualification)</li>
        </ul>

        <h2>What We Do Not Publish</h2>
        <ul>
          <li>Content making disease treatment or cure claims</li>
          <li>Information promoting anabolic steroids, SARMs, or banned substances</li>
          <li>Exaggerated transformation claims or before/after marketing</li>
          <li>Fabricated research citations or invented statistics</li>
          <li>Paid promotional content presented as editorial opinion</li>
          <li>Content targeting vulnerable populations with dangerous advice</li>
        </ul>

        <h2>Corrections Policy</h2>
        <p>If factual errors are identified in our content, we will correct them promptly and note the correction at the bottom of the affected article. We take editorial accuracy seriously and welcome readers pointing out errors via our <Link href="/contact" style={{ color: "var(--color-brand)" }}>Contact page</Link>.</p>

        <h2>Advertising and Sponsorship</h2>
        <p>Any advertising on MuscleGuru.in is clearly labelled as such. We do not allow advertisers to influence editorial content. Supplement or product recommendations in editorial content are based solely on scientific evidence, not commercial relationships.</p>

        <h2>Contact Our Editorial Team</h2>
        <p>Editorial feedback, corrections, and collaboration enquiries: <Link href="/contact" style={{ color: "var(--color-brand)" }}>Contact us here</Link>.</p>
      </div>
    </div>
  );
}
