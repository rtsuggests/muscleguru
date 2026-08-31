"use client";
import { useState } from "react";
import Link from "next/link";
import { saveResult } from "@/lib/savedResults";

interface SaveResultButtonProps {
  calculator: string;
  slug: string;
  icon: string;
  headline: string;
  label: string;
}

export default function SaveResultButton({ calculator, slug, icon, headline, label }: SaveResultButtonProps) {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    saveResult({ calculator, slug, icon, headline, label });
    setSaved(true);
  }

  if (saved) {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.1rem", borderRadius: "0.625rem", border: "1.5px solid var(--color-brand-dark)", background: "var(--color-brand-light)", color: "var(--color-brand-darker)", fontWeight: 600, fontSize: "0.85rem" }}>
        <span>✓ Saved —</span>
        <Link href="/my-progress" style={{ color: "var(--color-brand-darker)", textDecoration: "underline" }}>view your progress</Link>
      </div>
    );
  }

  return (
    <button
      onClick={handleSave}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.6rem 1.1rem",
        borderRadius: "0.625rem",
        border: "1.5px solid var(--color-border)",
        background: "#fff",
        color: "var(--color-body)",
        fontWeight: 600,
        fontSize: "0.85rem",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      💾 Save this result
    </button>
  );
}
