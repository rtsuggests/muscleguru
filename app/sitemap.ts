import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://muscleguru.in";
  const now = new Date();

  const calculators = ["bmi","tdee","protein","body-fat","macro","water-intake","one-rep-max","calorie-deficit","lean-body-mass","ffmi","ideal-weight","running-pace","heart-rate-zone","sleep","waist-hip-ratio","calories-burned","keto-macro","body-type","pregnancy-weight-gain","vo2-max","army-fitness","vegetarian-protein","intermittent-fasting","muscle-gain-rate","diabetes-bmi"];
  const runningArticles = ["beginners-guide","5k-training-plan","10k-training-plan","half-marathon-training","running-for-weight-loss","treadmill-vs-outdoor","running-injuries-prevention","breathing-while-running","how-to-run-faster","running-clubs-india","best-time-to-run"];
  const nutritionArticles = ["indian-protein-sources","how-much-protein","paneer-protein-guide","egg-protein-guide","7-day-meal-plan"];
  const supplementArticles = ["creatine-guide","whey-protein-guide","supplement-tier-list"];
  const muscleGainArticles = ["push-pull-legs","muscle-gain-diet-india","how-muscle-grows"];
  const weightLossArticles = ["calorie-deficit-explained","why-not-losing-weight","best-diet-fat-loss"];
  const beginnerArticles = ["beginner-gym-guide","workout-routine","home-workout-guide"];
  const womenArticles = ["will-lifting-make-women-bulky","strength-training-guide","protein-needs-women","fitness-during-periods","pcos-exercise-guide"];
  const exerciseGuides = ["how-to-squat","how-to-deadlift","how-to-bench-press","pull-up-guide","plank-guide","dumbbell-exercises"];
  const workoutPlans = ["3-day-full-body","4-day-upper-lower","hiit-beginner","skinny-guys-muscle","overweight-beginners","office-workers"];
  const recoveryArticles = ["sleep-muscle-growth","overtraining-signs","foam-rolling-guide","rest-days-explained"];
  const indianDietArticles = ["high-protein-breakfast","pre-workout-meal","post-workout-meal","intermittent-fasting-india"];

  const makeUrls = (section: string, slugs: string[], priority = 0.8) =>
    slugs.map(slug => ({ url: `${base}/${section}/${slug}`, lastModified: now, changeFrequency: "monthly" as const, priority }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    ...makeUrls("calculators", calculators, 0.85),
    { url: `${base}/running`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    ...makeUrls("running", runningArticles, 0.82),
    { url: `${base}/nutrition`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("nutrition", nutritionArticles),
    { url: `${base}/supplements`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("supplements", supplementArticles),
    { url: `${base}/muscle-gain`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("muscle-gain", muscleGainArticles),
    { url: `${base}/weight-loss`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("weight-loss", weightLossArticles),
    { url: `${base}/beginner-fitness`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("beginner-fitness", beginnerArticles),
    { url: `${base}/women`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("women", womenArticles),
    { url: `${base}/exercise-guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("exercise-guides", exerciseGuides),
    { url: `${base}/workout-plans`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("workout-plans", workoutPlans),
    { url: `${base}/recovery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("recovery", recoveryArticles),
    { url: `${base}/indian-diet`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("indian-diet", indianDietArticles),
    { url: `${base}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/editorial-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/medical-disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
