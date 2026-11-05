import Image from "next/image";
import Link from "next/link";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { SlidingArrow } from "@/components/ui/Arrow";
import { Tag } from "@/components/ui/Tag";
import { getCategory, type Project } from "@/content/projects";

/**
 * Photo card in the horizontal rows: "Find another project…" (`large`) and the top of
 * the Work page (`small`). Below 992px the row scrolls sideways, so cards keep a
 * minimum width instead of shrinking.
 */
export function WorkCard({ project, size, priority = false }: { project: Project; size: "small" | "large"; priority?: boolean }) {
  const category = getCategory(project.category);
  const large = size === "large";
  return (
    <ScrollProgress className="relative">
      <Link
        href={`/work/${project.slug}`}
        className={`group relative flex max-w-full flex-col gap-6 p-8 text-white ${
          large
            ? "h-[39vw] max-lg:h-[80vw] max-lg:min-w-[80vw] max-sm:px-6"
            : "h-[26vw] max-lg:h-[50vw] max-lg:min-w-[50vw] max-sm:h-[85vw] max-sm:min-w-[85vw]"
        }`}
      >
        <div className="relative z-10 flex h-full flex-col items-start justify-end gap-5 pr-6">
          <div className={large ? "text-size-large" : "text-size-regular font-medium"}>{project.name}</div>
          <div
            className={`absolute right-0 bottom-0 flex items-center justify-center ${
              large ? "h-9 max-lg:h-[1.875rem] max-md:h-6" : "h-7"
            }`}
          >
            <SlidingArrow size="lg" />
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end overflow-hidden">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            priority={priority}
            sizes={large ? "(max-width: 991px) 80vw, 45vw" : "(max-width: 479px) 85vw, (max-width: 991px) 50vw, 30vw"}
            className="parallax-card object-cover"
          />
          <div className="absolute inset-0 bg-ink/30" />
        </div>
      </Link>
      {category && (
        <div className="absolute top-8 left-8 z-[25] text-white max-sm:top-7 max-sm:left-6">
          <Tag href={`/category/${category.slug}`}>{category.name}</Tag>
        </div>
      )}
    </ScrollProgress>
  );
}
