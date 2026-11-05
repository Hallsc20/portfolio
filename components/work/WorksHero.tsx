import { WorkCard } from "@/components/work/WorkCard";
import { getProject, newestProjects } from "@/content/projects";

/** Top of the Work page: the two newest projects as small cards, then the big headline. */
export function WorksHero() {
  const newest = newestProjects.slice(0, 2).map(getProject).filter((p) => p !== undefined);
  return (
    <section>
      <div className="flex min-h-screen flex-col justify-between pb-24 max-lg:min-h-[93vh] max-lg:gap-16 max-sm:gap-12">
        <div className="grid grid-cols-[minmax(7vw,1fr)_minmax(auto,94rem)_minmax(7vw,1fr)] max-lg:grid-cols-[minmax(3rem,1fr)_minmax(auto,94rem)_minmax(3rem,1fr)] max-md:grid-cols-[minmax(1.5rem,1fr)_minmax(auto,94rem)_minmax(1.5rem,1fr)]">
          <div className="col-start-2 max-lg:col-span-3 max-lg:col-start-1 max-lg:overflow-auto max-lg:pl-12 max-md:pl-6">
            {/* Plain 1fr columns so the cards' minimum width makes the row scroll below 992px. */}
            <div className="grid grid-flow-col grid-cols-[1fr_1fr_1fr] gap-2 pt-20 pb-32 max-lg:pb-4">
              {newest.map((p) => (
                <WorkCard key={p.slug} project={p} size="small" priority />
              ))}
            </div>
          </div>
        </div>
        <div className="page-padding">
          <div className="mx-auto max-w-page">
            <div className="flex flex-1 items-end justify-between max-lg:max-w-[40rem] max-md:flex-col max-md:items-start max-md:justify-start max-md:gap-8">
              <div className="max-w-[45rem]">
                <h1 className="heading-xlarge">Deep dive into my recent projects</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
