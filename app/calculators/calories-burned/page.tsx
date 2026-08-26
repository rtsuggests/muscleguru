import type { Metadata } from "next";
import CaloriesBurnedClient from "./CaloriesBurnedClient";

export const metadata: Metadata = {
  title: "Calories Burned Calculator India — 40+ Activities",
  description: "Calculate calories burned during 40+ activities including Surya Namaskar, cricket, and yoga.",
};

export default function Page() {
  return <CaloriesBurnedClient />;
}
