import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { pageMeta } from "@/content/metadata";

export const metadata: Metadata = pageMeta("About | Charlie Halls");

// The template's sample services and job history were removed on 2026-10-15.
export default function AboutPage() {
  return <AboutHero />;
}
