import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About MuscleGuru.in — Evidence-Based Fitness for India",
  description: "Learn about MuscleGuru.in — India's evidence-based fitness platform. Our mission, our approach, and why we built free tools for Indian gym-goers.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › About
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.4rem)", marginTop: "1.5rem", marginBottom: "1.5rem" }}>About MuscleGuru.in</h1>

      <div className="seo-content">
        <h2>Our Mission</h2>
        <p>MuscleGuru.in exists because most fitness content available online is built for Western bodies, Western foods, and Western climates. Indians deserve fitness tools and information built specifically for them — Indian-adapted BMI cutoffs, Indian protein sources, Indian race calendars, and guidance that accounts for India&apos;s heat, humidity, air quality, and food culture.</p>

        <h2>What We Offer</h2>
        <p>We provide 25+ free, science-backed fitness calculators covering body composition, nutrition, and performance — plus in-depth guides on running, strength training, nutrition, and recovery, all written for an Indian audience and reviewed against ICMR guidelines and peer-reviewed research.</p>

        <h2>Our Approach</h2>
        <p>Every calculator on this site uses formulas published in peer-reviewed research. Every article cites its sources. We do not make miracle claims, promote banned substances, or sell supplements we haven&apos;t independently evaluated. See our <Link href="/editorial-policy" style={{ color: "var(--color-brand-darker)" }}>Editorial Policy</Link> for our full content standards.</p>

        <h2>Who We Are</h2>
        <p>MuscleGuru.in is built and maintained by a small, independent team passionate about making evidence-based fitness information accessible to every Indian, regardless of gym experience or budget. All our tools remain completely free.</p>

        <h2>Get in Touch</h2>
        <p>Have a question, found an error, or want to collaborate? <Link href="/contact" style={{ color: "var(--color-brand-darker)" }}>Contact us here</Link>.</p>
      </div>
    </div>
  );
}
