"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getResultForSlug, formatSavedDate, type SavedResult } from "@/lib/savedResults";

interface SavedResultBannerProps {
  slug: string;
}

export default function SavedResultBanner({ slug }: SavedResultBannerProps) {
  const [saved, setSaved] = useState<SavedResult | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setSaved(getResultForSlug(slug));
  }, [slug]);

  if (!saved || dismissed) return null;

  return (
    <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "0.875rem 1.125rem", marginBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <span style={{ fontSize: "1.4rem" }}>{saved.icon}</span>
        <div>
          <div style={{ fontSize: "0.85rem", color: "var(--color-brand-darker)" }}>
            Welcome back! Your last {saved.calculator} result: <strong>{saved.headline}</strong> ({saved.label}) — {formatSavedDate(saved.savedAt)}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", flexShrink: 0 }}>
        <Link href="/my-progress" style={{ fontSize: "0.82rem", color: "var(--color-brand-darker)", fontWeight: 600, textDecoration: "underline" }}>View all progress</Link>
        <button onClick={() => setDismissed(true)} style={{ background: "none", border: "none", color: "var(--color-brand-darker)", cursor: "pointer", fontSize: "1rem", padding: 0, lineHeight: 1 }} aria-label="Dismiss">✕</button>
      </div>
    </div>
  );
}
