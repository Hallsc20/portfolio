import type { Metadata } from "next";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { ProjectListing } from "@/components/work/ProjectListing";
import { WorksHero } from "@/components/work/WorksHero";
import { pageMeta } from "@/content/metadata";
import { projects } from "@/content/projects";

export const metadata: Metadata = pageMeta("Work | Charlie Halls");

export default function WorkPage() {
  return (
    <>
      <WorksHero />
      <PhotoBand image="/images/image108-1.jpg" />
      <ProjectListing id="scroll" heading="All my projects" projects={projects} current="all" />
    </>
  );
}
