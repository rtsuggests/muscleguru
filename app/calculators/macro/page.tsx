import type { Metadata } from "next";
import MacroClient from "./MacroClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/macro" },
  title: "Macro Calculator — Protein, Carbs & Fat",
  description: "Calculate your daily protein, carbs and fat targets for any fitness goal, from fat loss to muscle gain, based on your calories and body weight.",
};

export default function Page() {
  return <MacroClient />;
}
