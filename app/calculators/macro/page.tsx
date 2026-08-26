import type { Metadata } from "next";
import MacroClient from "./MacroClient";

export const metadata: Metadata = {
  title: "Macro Calculator India — Protein, Carbs & Fat",
  description: "Calculate your daily protein, carbs and fat targets for any fitness goal.",
};

export default function Page() {
  return <MacroClient />;
}
