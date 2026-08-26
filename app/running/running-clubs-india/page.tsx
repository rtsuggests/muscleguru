import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Running Clubs in India — City Guide",
  description: "Find running clubs in Delhi, Mumbai, Bengaluru, Hyderabad, Pune and more.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Community</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Best Running Clubs in India</h1>
      <div className="seo-content">
        <p>Joining a running club provides structured training, accountability, and community. Most major Indian cities have active running groups that welcome all levels — search Facebook groups, Strava clubs, or local running store bulletin boards for groups in your city.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/running/beginners-guide" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Beginner Running Guide</Link>
        </div>
      </div>
    </div>
  );
}
