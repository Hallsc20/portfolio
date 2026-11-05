import { Button } from "@/components/ui/Button";
import { WorkCard } from "@/components/work/WorkCard";
import { getProject, newestProjects } from "@/content/projects";

/** "Find another project…": the two newest projects, other than this one. */
export function NextProjects({ currentSlug }: { currentSlug: string }) {
  const next = newestProjects
    .filter((slug) => slug !== currentSlug)
    .slice(0, 2)
    .map(getProject)
    .filter((p) => p !== undefined);
  return (
    <section>
      <div className="py-section">
        <div className="flex flex-col gap-12">
          <div className="page-padding">
            <div className="mx-auto max-w-page">
              <div className="flex flex-1 items-end justify-between max-lg:max-w-[40rem] max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-8">
                <div className="max-w-[25rem]">
                  <h2 className="heading-large tracking-[-0.01rem]">Find another project...</h2>
                </div>
                <Button href="/work">View all projects</Button>
              </div>
            </div>
          </div>
          {/* Content column between two 7vw gutters; below 992px it runs edge to edge and scrolls sideways. */}
          <div className="grid grid-cols-[minmax(7vw,1fr)_minmax(auto,94rem)_minmax(7vw,1fr)] max-lg:grid-cols-[minmax(3rem,1fr)_minmax(auto,94rem)_minmax(3rem,1fr)] max-md:grid-cols-[minmax(1.5rem,1fr)_minmax(auto,94rem)_minmax(1.5rem,1fr)]">
            <div className="col-start-2 max-lg:col-span-3 max-lg:col-start-1 max-lg:overflow-auto max-lg:pl-12 max-md:pl-6">
              {/* Plain 1fr columns (not grid-cols-2's minmax(0,1fr)) so they grow to fit the
                  cards' minimum width below 992px and the row scrolls, as on the original. */}
              <div className="grid grid-cols-[1fr_1fr] gap-[0.5em]">
                {next.map((p) => (
                  <WorkCard key={p.slug} project={p} size="large" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
