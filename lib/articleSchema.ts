import { REVIEWER, SITE_URL, PUBLISHER_NAME } from "@/lib/site";

export function articleSchema(opts: {
  headline: string;
  path: string;
  description: string;
  dateModified: string; // ISO date, e.g. "2026-09-21"
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${opts.path}` },
    author: { "@type": "Organization", name: "MuscleGuru Editorial Team", url: `${SITE_URL}/about` },
    publisher: { "@type": "Organization", name: PUBLISHER_NAME, url: SITE_URL },
    datePublished: opts.datePublished ?? opts.dateModified,
    dateModified: opts.dateModified,
    inLanguage: "en-IN",
    ...(REVIEWER
      ? { reviewedBy: { "@type": "Person", name: REVIEWER.name, jobTitle: REVIEWER.credentials, ...(REVIEWER.url ? { url: REVIEWER.url } : {}) } }
      : {}),
  };
}
