// Shared localStorage utility for "Save My Results" feature
// No login required — results persist per-browser only

export interface SavedResult {
  calculator: string;      // e.g. "BMI"
  slug: string;             // e.g. "bmi" — matches /calculators/[slug]
  icon: string;              // e.g. "⚖️"
  headline: string;          // e.g. "23.4"
  label: string;             // e.g. "Normal Weight"
  savedAt: number;           // timestamp
}

const STORAGE_KEY = "muscleguru_saved_results";

export function saveResult(result: Omit<SavedResult, "savedAt">): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getAllResults();
    // Remove any previous save for this same calculator, keep only latest
    const filtered = existing.filter(r => r.slug !== result.slug);
    const updated = [...filtered, { ...result, savedAt: Date.now() }];
    // Keep most recent 20 max
    const trimmed = updated.sort((a, b) => b.savedAt - a.savedAt).slice(0, 20);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // localStorage unavailable (private browsing etc) — fail silently
  }
}

export function getAllResults(): SavedResult[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function getResultForSlug(slug: string): SavedResult | null {
  const all = getAllResults();
  return all.find(r => r.slug === slug) || null;
}

export function deleteResult(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    const existing = getAllResults();
    const filtered = existing.filter(r => r.slug !== slug);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch {
    // fail silently
  }
}

export function clearAllResults(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // fail silently
  }
}

export function formatSavedDate(timestamp: number): string {
  const now = Date.now();
  const diffMs = now - timestamp;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  const diffWeeks = Math.floor(diffDays / 7);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins} min${diffMins === 1 ? "" : "s"} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks === 1 ? "" : "s"} ago`;
  return new Date(timestamp).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}
