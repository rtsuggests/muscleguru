import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Running Clubs in India: Why and How to Join One";
const DESC = "Why running with a club helps consistency and performance, how to find a running club in your Indian city, and what to look for in a good one.";

export const metadata: Metadata = {
  alternates: { canonical: "/running/running-clubs-india" },
  title: "Running Clubs in India — How to Find One",
  description: DESC,
  keywords: ["running clubs India", "running group near me", "join running club India"],
};

const faqs = [
  { q: "Are running clubs free to join in India?", a: "Most community running clubs (like local chapters of larger groups) are free or ask for a small nominal contribution. Some specialised training groups run by certified coaches charge a monthly fee for structured coaching." },
  { q: "Do I need to be fast to join a running club?", a: "No. Most clubs run multiple pace groups so runners of different levels train together, and many actively welcome complete beginners." },
  { q: "How do running clubs help with performance?", a: "Group accountability improves consistency, which is the single biggest driver of running improvement. Clubs also often bring pacing knowledge, injury-prevention tips and race-day experience that's hard to build up alone." },
  { q: "What if there's no running club in my city?", a: "Online communities (WhatsApp and Strava groups tied to specific cities) are increasingly common even in smaller Indian cities, and some runners start their own informal group with 2–3 friends as a starting point." },
];

export default function RunningClubsIndiaPage() {
  return (
    <ArticleLayout
      title="Running Clubs in India"
      category="Running"
      categoryHref="/running"
      readTime="6 min"
      lastUpdated="September 2026"
      summary="Running with a club improves consistency through social accountability, and gives access to pacing knowledge and injury-prevention advice that's hard to build up training alone. Most Indian cities now have at least one free or low-cost running community, organised through WhatsApp groups, Strava clubs or in-person meetups."
      relatedArticles={[
        { title: "5K Training Plan for Beginners", href: "/running/5k-training-plan", time: "8 min" },
        { title: "10K Training Plan", href: "/running/10k-training-plan", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/running/running-clubs-india", description: DESC, dateModified: "2026-09-21" })}
      faqs={faqs}
    >
      <h2>Why Join a Running Club</h2>
      <p>Consistency is the single biggest driver of running improvement, and social accountability — knowing others are expecting you at a set time — is one of the most reliable ways to maintain it. Beyond motivation, clubs often bring collective experience: pacing strategies, injury-prevention habits, and race-day logistics that take years to learn training solo.</p>

      <h2>How to Find a Running Club in Your City</h2>
      <ul>
        <li><strong>Strava clubs</strong> — search your city name plus "running" in the Strava app to find active local groups</li>
        <li><strong>Instagram and WhatsApp</strong> — many city-specific running communities organise primarily through these, and are often easy to find by searching your city name plus "run club" or "running community"</li>
        <li><strong>Local running stores</strong> — sports shoe stores in larger cities sometimes host or know about weekly community runs</li>
        <li><strong>Race organisers</strong> — city marathon and 10K event pages often list affiliated training groups</li>
      </ul>

      <h2>What to Look for in a Good Running Club</h2>
      <ul>
        <li><strong>Multiple pace groups</strong> — so you're not forced to run faster or slower than is right for you</li>
        <li><strong>A regular, predictable schedule</strong> — consistency is easier when the meetup time and place don't change constantly</li>
        <li><strong>A welcoming attitude toward beginners</strong> — some groups skew heavily toward experienced runners, which can be discouraging if you're just starting out</li>
        <li><strong>Safe, well-lit routes</strong> — particularly relevant for early morning or evening runs</li>
      </ul>
    </ArticleLayout>
  );
}
