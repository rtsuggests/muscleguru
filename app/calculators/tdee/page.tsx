import type { Metadata } from "next";
import TDEEClient from "./TDEEClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/tdee" },
  title: "TDEE Calculator India — Daily Calories",
  description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation, the most accurate formula for everyday calorie needs.",
};

export default function Page() {
  return <TDEEClient />;
}
