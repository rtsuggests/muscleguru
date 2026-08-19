import type { Metadata } from "next";
import TDEEClient from "./TDEEClient";

export const metadata: Metadata = {
  title: "TDEE Calculator India — Total Daily Energy Expenditure",
  description: "Calculate your Total Daily Energy Expenditure (TDEE) free. Find out exactly how many calories you need per day based on your weight, height, age, and activity level.",
};

export default function TDEEPage() { return <TDEEClient />; }
