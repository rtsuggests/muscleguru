import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://muscleguru.in";
  const lastMod = "2026-11-10";

  const calculators = ["bmi","tdee","protein","body-fat","macro","water-intake","one-rep-max","calorie-deficit","lean-body-mass","ffmi","ideal-weight","running-pace","heart-rate-zone","sleep","waist-hip-ratio","calories-burned","keto-macro","body-type","pregnancy-weight-gain","vo2-max","army-fitness","vegetarian-protein","intermittent-fasting","muscle-gain-rate","diabetes-bmi","idrs"];
  const runningArticles = ["beginners-guide","5k-training-plan","10k-training-plan","half-marathon-training","running-for-weight-loss","treadmill-vs-outdoor","running-injuries-prevention","breathing-while-running","how-to-run-faster","running-clubs-india","best-time-to-run"];
  const nutritionArticles = ["indian-protein-sources","how-much-protein","paneer-protein-guide","egg-protein-guide","7-day-meal-plan","calories-in-indian-foods"];
  const supplementArticles = ["creatine-guide","whey-protein-guide","supplement-tier-list","how-to-spot-fake-whey-protein-india"];
  const muscleGainArticles = ["push-pull-legs","muscle-gain-diet-india","how-muscle-grows","hostel-pg-muscle-gain-diet"];
  const weightLossArticles = ["calorie-deficit-explained","why-not-losing-weight","best-diet-fat-loss","why-indians-need-lower-bmi-cutoff"];
  const beginnerArticles = ["beginner-gym-guide","workout-routine","home-workout-guide"];
  const womenArticles = ["will-lifting-make-women-bulky","strength-training-guide","protein-needs-women","fitness-during-periods","pcos-exercise-guide","pcos-hypothyroid-indian-diet"];
  const exerciseGuides = ["how-to-squat","how-to-deadlift","how-to-bench-press","pull-up-guide","plank-guide","dumbbell-exercises"];
  const workoutPlans = ["3-day-full-body","4-day-upper-lower","hiit-beginner","skinny-guys-muscle"];
  const recoveryArticles = ["sleep-muscle-growth","overtraining-signs","rest-days-explained"];
  const indianDietArticles = ["high-protein-breakfast","pre-workout-meal","post-workout-meal","intermittent-fasting-india","100g-protein-vegetarian-diet-under-150","diabetes-diet-indian-vegetarian"];
  const defenceArticles = ["agniveer-height-weight-chest-chart","ssc-gd-capf-police-physical-test","nda-cds-medical-bmi-standards"];

  const makeUrls = (section: string, slugs: string[], priority = 0.8) =>
    slugs.map(slug => ({ url: `${base}/${section}/${slug}`, lastModified: lastMod, changeFrequency: "monthly" as const, priority }));

  return [
    { url: base, lastModified: lastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/calculators`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/calculators/fasting-nutrition`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/fasting`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/fasting/navratri-diet-plan`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/fasting/karva-chauth-fasting-guide`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.8 },
    ...makeUrls("calculators", calculators, 0.85),
    { url: `${base}/running`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.85 },
    ...makeUrls("running", runningArticles, 0.82),
    { url: `${base}/nutrition`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("nutrition", nutritionArticles),
    { url: `${base}/supplements`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("supplements", supplementArticles),
    { url: `${base}/muscle-gain`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("muscle-gain", muscleGainArticles),
    { url: `${base}/weight-loss`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("weight-loss", weightLossArticles),
    { url: `${base}/beginner-fitness`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("beginner-fitness", beginnerArticles),
    { url: `${base}/women`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("women", womenArticles),
    { url: `${base}/exercise-guides`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("exercise-guides", exerciseGuides),
    { url: `${base}/workout-plans`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("workout-plans", workoutPlans),
    { url: `${base}/recovery`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("recovery", recoveryArticles),
    { url: `${base}/indian-diet`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    ...makeUrls("indian-diet", indianDietArticles),
    { url: `${base}/defence`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    ...makeUrls("defence", defenceArticles, 0.88),
    { url: `${base}/about`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/editorial-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/medical-disclaimer`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-of-service`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/contact`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.4 },
  ];
}
