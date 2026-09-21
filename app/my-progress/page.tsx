import type { Metadata } from "next";
import MyProgressClient from "./MyProgressClient";

export const metadata: Metadata = {
  alternates: { canonical: "/my-progress" },
  title: "My Progress — Saved Calculator Results",
  description: "View all your saved calculator results in one place. Track your BMI, TDEE, protein targets, and more over time.",
};

export default function Page() {
  return <MyProgressClient />;
}
