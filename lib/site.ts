/**
 * Site-wide editorial settings.
 *
 * REVIEWER: set this ONLY to a real person who has actually reviewed the content.
 * When set, every article that uses ArticleLayout shows "Medically reviewed by ..."
 * and adds reviewedBy to its schema. Leave it null until you have a real reviewer —
 * the byline will then honestly say "Sources are listed at the end of this article".
 *
 * Example:
 *   export const REVIEWER = { name: "Dr. Jane Doe", credentials: "MBBS, MD (Sports Medicine)", url: "https://..." };
 */
export const REVIEWER: { name: string; credentials: string; url?: string } | null = null;

export const SITE_URL = "https://muscleguru.in";
export const PUBLISHER_NAME = "MuscleGuru.in";
