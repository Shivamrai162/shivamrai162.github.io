import type { Metadata } from "next";
import { WorkSamples } from "@/components/work-samples";
export const metadata: Metadata = {
  title: "Work Samples — Shivam Rai",
  description: "Selected data engineering, applied AI and finance automation work by Shivam Rai. Explore case studies, illustrative workflows and supporting material.",
  alternates: { canonical: "/work/" },
  openGraph: { title: "Work Samples — Shivam Rai", description: "The work behind the outcomes: data platforms, applied AI and practical automation.", url: "/work/" },
};
export default function WorkPage() { return <WorkSamples/>; }
