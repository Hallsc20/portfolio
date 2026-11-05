import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextProjects } from "@/components/project/NextProjects";
import { ProjectBanner, ProjectImages, ProjectIntro, ProjectShowcase } from "@/components/project/ProjectBody";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ActionBanner } from "@/components/sections/ActionBanner";
import { pageMeta } from "@/content/metadata";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? pageMeta(`${project.name} | Charlie Halls`) : {};
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return (
    <>
      <ProjectHero project={project} />
      <ProjectImages project={project} />
      <ProjectIntro project={project} />
      <ProjectBanner project={project} />
      <ProjectShowcase project={project} />
      <ActionBanner
        heading="Want a website like this for your business?"
        body="I'm building websites for small businesses free of charge, with Lune Studio overseeing every project."
        button={{ href: "https://cal.com/lune-studio/free-website", label: "Apply for a free website", newTab: true }}
        image="/images/image108-1.jpg"
      />
      <NextProjects currentSlug={project.slug} />
    </>
  );
}
