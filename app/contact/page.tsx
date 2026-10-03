import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact MuscleGuru.in",
  description: "Get in touch with the MuscleGuru.in team for questions, corrections, feedback, or collaboration enquiries — we read and reply to every message.",
};

export default function Page() {
  return <ContactClient />;
}
