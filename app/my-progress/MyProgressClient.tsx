"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllResults, deleteResult, clearAllResults, formatSavedDate, type SavedResult } from "@/lib/savedResults";

export default function MyProgressClient() {
  const [results, setResults] = useState<SavedResult[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setResults(getAllResults().sort((a, b) => b.savedAt - a.savedAt));
    setLoaded(true);
  }, []);

  function handleDelete(slug: string) {
    deleteResult(slug);
    setResults(getAllResults().sort((a, b) => b.savedAt - a.savedAt));
  }

  function handleClearAll() {
    if (confirm("Remove all saved results? This cannot be undone.")) {
      clearAllResults();
      setResults([]);
    }
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › My Progress
      </div>

      <div style={{ textAlign: "center", marginBottom: "2.5rem", marginTop: "1.5rem" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>📊</div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>My Progress</h1>
        <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto" }}>
          All your saved calculator results, stored privately in your browser. No account needed — this data never leaves your device.
        </p>
      </div>

      {!loaded ? null : results.length === 0 ? (
        <div style={{ textAlign: "center", background: "var(--color-bg)", borderRadius: "1.25rem", padding: "3rem 2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🗂️</div>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.625rem" }}>No saved results yet</h2>
          <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem", maxWidth: 420, margin: "0 auto 1.5rem" }}>
            Use any calculator on MuscleGuru.in and click &quot;Save this result&quot; to start tracking your progress here.
          </p>
          <Link href="/calculators" className="btn-primary" style={{ display: "inline-flex", width: "auto", padding: "0.75rem 1.75rem", textDecoration: "none" }}>
            Browse Calculators
          </Link>
        </div>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.75rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--color-muted)" }}>{results.length} saved result{results.length === 1 ? "" : "s"}</span>
            <button onClick={handleClearAll} style={{ background: "none", border: "1.5px solid var(--color-border)", borderRadius: "0.5rem", padding: "0.4rem 0.875rem", fontSize: "0.82rem", color: "var(--color-muted)", cursor: "pointer" }}>
              Clear all
            </button>
          </div>

          <div style={{ display: "grid", gap: "0.875rem", marginBottom: "3rem" }}>
            {results.map(r => (
              <div key={r.slug} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.75rem" }}>{r.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-dark)" }}>{r.calculator}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>Saved {formatSavedDate(r.savedAt)}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "var(--color-brand-dark)" }}>{r.headline}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{r.label}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    <Link href={`/calculators/${r.slug}`} style={{ fontSize: "0.78rem", color: "var(--color-brand-darker)", fontWeight: 600, textDecoration: "none" }}>Recalculate →</Link>
                    <button onClick={() => handleDelete(r.slug)} style={{ background: "none", border: "none", color: "var(--color-muted)", fontSize: "0.78rem", cursor: "pointer", padding: 0, textAlign: "right" }}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <div style={{ background: "var(--color-bg)", borderRadius: "1rem", padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Explore More Calculators</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          {[["⚖️ BMI Calculator", "/calculators/bmi"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["💪 Protein Calculator", "/calculators/protein"], ["📉 Calorie Deficit", "/calculators/calorie-deficit"], ["🏃 Running Pace", "/calculators/running-pace"], ["😴 Sleep Calculator", "/calculators/sleep"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>

      <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", textAlign: "center", marginTop: "2rem" }}>
        🔒 Your saved results are stored only in this browser&apos;s local storage — we never see or store this data on our servers.
      </p>
    </div>
  );
}
