import { CategoryBar } from "@/components/work/CategoryBar";
import { ProjectCard } from "@/components/work/ProjectCard";
import type { Project } from "@/content/projects";

type Props = {
  heading: string;
  projects: Project[];
  /** Highlighted filter button: "all" on /work, a category slug on category pages. */
  current?: string;
  /**
   * Space above the heading. `section` steps down on smaller screens (Home, Work);
   * `fixed` stays 9rem at every width (category pages) — as on the original.
   */
  top?: "section" | "fixed";
  /** `h1` when the listing is the page's main heading (category pages), otherwise `h2`. */
  headingLevel?: "h1" | "h2";
  id?: string;
};

/** Heading, category filter buttons and the 2-column grid of project cards. */
export function ProjectListing({ heading, projects, current, top = "section", id, headingLevel: Heading = "h2" }: Props) {
  return (
    <section id={id}>
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className={top === "section" ? "pt-section" : "pt-36"}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-14 max-lg:gap-12 max-md:gap-10 max-sm:gap-9">
                <div className="max-w-[30rem]">
                  <Heading className="heading-large tracking-[-0.01rem]">{heading}</Heading>
                </div>
                <CategoryBar current={current} />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-12 max-lg:pt-8 max-md:grid-cols-1 max-sm:pt-0">
                {projects.map((p, i) => (
                  // Category pages show their first cards straight away; load those first.
                  <ProjectCard key={p.slug} project={p} priority={top === "fixed" && i < 2} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
