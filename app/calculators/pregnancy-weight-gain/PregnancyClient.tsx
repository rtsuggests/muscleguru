import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://muscleguru.in";
  const now = new Date();

  const calculators = [
    "bmi", "tdee", "protein", "body-fat", "macro",
    "water-intake", "one-rep-max", "calorie-deficit",
    "lean-body-mass", "ffmi", "ideal-weight",
    "running-pace", "heart-rate-zone", "sleep",
    "waist-hip-ratio", "calories-burned", "keto-macro",
    "body-type", "pregnancy-weight-gain",
  ];

  const nutritionArticles = [
    "indian-protein-sources", "how-much-protein",
    "paneer-protein-guide", "egg-protein-guide", "7-day-meal-plan",
  ];

  const supplementArticles = [
    "creatine-guide", "whey-protein-guide", "supplement-tier-list",
  ];

  const muscleGainArticles = [
    "push-pull-legs", "muscle-gain-diet-india", "how-muscle-grows",
  ];

  const weightLossArticles = [
    "calorie-deficit-explained", "why-not-losing-weight", "best-diet-fat-loss",
  ];

  const beginnerArticles = [
    "beginner-gym-guide", "workout-routine", "home-workout-guide",
  ];

  const womenArticles = [
    "will-lifting-make-women-bulky",
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },

    ...calculators.map(slug => ({
      url: `${base}/calculators/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),

    { url: `${base}/nutrition`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...nutritionArticles.map(slug => ({
      url: `${base}/nutrition/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${base}/supplements`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...supplementArticles.map(slug => ({
      url: `${base}/supplements/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${base}/muscle-gain`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...muscleGainArticles.map(slug => ({
      url: `${base}/muscle-gain/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${base}/weight-loss`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...weightLossArticles.map(slug => ({
      url: `${base}/weight-loss/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${base}/beginner-fitness`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...beginnerArticles.map(slug => ({
      url: `${base}/beginner-fitness/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${base}/women`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...womenArticles.map(slug => ({
      url: `${base}/women/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/editorial-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/medical-disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
