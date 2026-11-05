import type { Project } from "@/content/projects";

/** Headline, then the Client / Service / Year strip. */
export function ProjectHero({ project }: { project: Project }) {
  const facts = [
    { label: "Client", value: project.client },
    { label: "Service", value: project.service },
    { label: "Year", value: project.year },
  ];
  return (
    <section>
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="pt-[4.5rem]">
            <div className="flex items-center justify-between pt-32 pb-40 max-md:py-24">
              <div className="max-w-[48rem]">
                <h1 className="heading-xlarge">{project.headline}</h1>
              </div>
            </div>
            {/* Row gap is a fixed 16px on the original (not rem), so it doesn't scale. */}
            <div className="grid grid-cols-3 gap-x-8 gap-y-[16px] max-lg:grid-cols-1">
              {facts.map((f) => (
                <div key={f.label} className="flex w-full flex-col gap-2 max-lg:gap-1 max-md:gap-0">
                  <div className="text-eyebrow">{f.label}</div>
                  <div className="mt-4 border-t border-line pt-8 pb-8 max-lg:pt-5 max-md:pt-4 max-sm:pt-3.5">
                    <div className="text-size-regular">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
