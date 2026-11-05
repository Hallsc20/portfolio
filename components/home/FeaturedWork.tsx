import { ProjectListing } from "@/components/work/ProjectListing";
import { getProject, homepageProjects } from "@/content/projects";

export function FeaturedWork() {
  const projects = homepageProjects.map(getProject).filter((p) => p !== undefined);
  return <ProjectListing heading="Explore some of my recent projects" projects={projects} />;
}
