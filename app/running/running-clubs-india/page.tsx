import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/running-clubs-india" },
  title: "Best Running Clubs in India — City Guide",
  description: "Find running clubs in Delhi, Mumbai, Bengaluru, Hyderabad, Pune and more Indian cities to train with a community.",
  keywords: ["running clubs India", "running groups near me India", "join running club India"],
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/running" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Running</Link> › Running Clubs India
      </div>
      <span className="tag" style={{ marginTop: "1rem", display: "inline-block" }}>Community</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Best Running Clubs in India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        Training with a group significantly improves consistency and motivation. Here&apos;s how to find a running community in your city.
      </p>

      <div className="seo-content">
        <h2>Why Join a Running Club</h2>
        <p>Research on exercise adherence consistently shows that social accountability is one of the strongest predictors of long-term consistency. Running clubs provide structured pacing groups, safety in numbers for early morning runs, and shared knowledge from more experienced runners.</p>

        <h2>How to Find a Running Club in Your City</h2>
        <ul>
          <li><strong>Strava Clubs:</strong> Search your city name on the Strava app — most active running groups maintain a Strava club for organising weekly runs</li>
          <li><strong>Facebook Groups:</strong> Search &quot;[Your City] Runners&quot; or &quot;[Your City] Running Club&quot; — most major Indian cities have active groups with thousands of members</li>
          <li><strong>Local running stores:</strong> Sports shoe stores in metro cities often host or know about weekly group runs and post schedules in-store</li>
          <li><strong>Park-based groups:</strong> Popular parks in Delhi (Lodhi Garden), Mumbai (Marine Drive, Bandra-Worli Sea Link), Bengaluru (Cubbon Park), and Hyderabad (Necklace Road) typically have informal running groups that meet at consistent times</li>
          <li><strong>Race organisers:</strong> Companies that organise city marathons (Procam, TCS World 10K, etc.) often maintain community pages linking to training groups</li>
        </ul>

        <h2>What to Look for in a Good Running Club</h2>
        <ul>
          <li>Multiple pace groups so beginners aren&apos;t left behind</li>
          <li>Consistent weekly schedule (most active clubs run 2-3 times per week)</li>
          <li>A mix of experience levels, not just competitive racers</li>
          <li>Safety-conscious routes, especially for early morning or evening runs</li>
        </ul>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/running/beginners-guide" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Beginner Running Guide</Link>
            <Link href="/running/best-time-to-run" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Best Time to Run</Link>
            <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
