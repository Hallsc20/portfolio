import Image from "next/image";
import Link from "next/link";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { SlidingArrow } from "@/components/ui/Arrow";
import { Tag } from "@/components/ui/Tag";
import { getCategory, type Project } from "@/content/projects";

/** Large photo card used in the 2-column project grids (Home, Work, Category). */
export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const category = getCategory(project.category);
  return (
    <ScrollProgress className="relative">
      {category && (
        <div className="absolute top-12 left-12 z-[25] text-white max-md:left-10 max-sm:top-8 max-sm:left-6">
          <Tag href={`/category/${category.slug}`}>{category.name}</Tag>
        </div>
      )}
      <Link
        href={`/work/${project.slug}`}
        // inline-block (as on the original) leaves a text-descender gap below the card, and
        // min-h-full then stretches the card into it: 50vw + ~6px. Kept for an exact match.
        className="group relative z-20 inline-block h-[50vw] min-h-full w-full max-w-full overflow-hidden p-12 text-white max-md:h-[120vw] max-md:px-10 max-sm:px-6 max-sm:py-8"
      >
        <div className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 767px) 100vw, 50vw"
            className="parallax-card object-cover"
          />
          <div className="absolute inset-0 bg-ink/30" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-start justify-end gap-5 pr-6">
          <div className="absolute right-0 bottom-0 flex h-9 items-center justify-center max-lg:h-[1.875rem] max-md:h-6">
            <SlidingArrow size="lg" />
          </div>
          <div className="text-size-large font-medium">{project.name}</div>
        </div>
      </Link>
    </ScrollProgress>
  );
}
