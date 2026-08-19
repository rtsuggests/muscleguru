import type { Metadata } from "next";
import BodyFatClient from "./BodyFatClient";
export const metadata: Metadata = {
  title: "Body Fat Percentage Calculator — Free Online Tool",
  description: "Estimate your body fat percentage using the US Navy method and BMI method. Understand what your body fat means and how to improve your body composition.",
};
export default function BodyFatPage() { return <BodyFatClient />; }
