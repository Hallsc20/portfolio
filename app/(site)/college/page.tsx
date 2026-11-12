import type { Metadata } from "next";
import { CollegeContent } from "@/components/college/CollegeContent";
import { Coursework } from "@/components/college/Coursework";
import { pageMeta } from "@/content/metadata";

export const metadata: Metadata = pageMeta("College | Charlie Halls");

export default function CollegePage() {
  return (
    <>
      <CollegeContent />
      <Coursework />
    </>
  );
}
