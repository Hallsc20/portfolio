import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectListing } from "@/components/work/ProjectListing";
import { pageMeta } from "@/content/metadata";
import { categories, getCategory, getProject } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).slug);
  return category ? pageMeta(`${category.name} | Charlie Halls`) : {};
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  const projects = category.projects.map(getProject).filter((p) => p !== undefined);
  return (
    <ProjectListing
      heading={`${category.name} projects`}
      headingLevel="h1"
      projects={projects}
      current={category.slug}
      top="fixed"
    />
  );
}
