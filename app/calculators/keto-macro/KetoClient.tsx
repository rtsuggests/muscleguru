import type { Metadata } from "next";
import BodyTypeClient from "./BodyTypeClient";
export const metadata: Metadata = {
  title: "Body Type Calculator — Ectomorph, Mesomorph or Endomorph?",
  description: "Find your body type (somatotype) — ectomorph, mesomorph, or endomorph — and get personalised training and nutrition recommendations based on your natural build.",
};
export default function BodyTypePage() { return <BodyTypeClient />; }
