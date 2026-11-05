import Image from "next/image";
import { PhotoBand } from "@/components/sections/PhotoBand";
import type { Project } from "@/content/projects";

/** The two photos under the headline. */
export function ProjectImages({ project }: { project: Project }) {
  return (
    <section id="scroll">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
            {project.heroImages.map((src) => (
              <div key={src} className="relative h-[38vw] overflow-hidden max-md:h-[90vw]">
                <Image
                  src={src}
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 767px) 95vw, (max-width: 991px) 45vw, 40vw"
                  className="scale-[1.01] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Centred "Introduction" paragraph. */
export function ProjectIntro({ project }: { project: Project }) {
  return (
    <section>
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="py-section">
            <div className="mx-auto flex max-w-[52rem] flex-col items-center text-center">
              <div className="mb-stack-md">
                <div className="text-eyebrow">Introduction</div>
              </div>
              <div>
                <div className="text-size-xlarge">{project.introduction}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Full-width photo band with a light tint. */
export function ProjectBanner({ project }: { project: Project }) {
  return <PhotoBand image={project.bannerImage} tinted />;
}

/** "What I did": the project's photos stacked on the left, the text pinned on the right. */
export function ProjectShowcase({ project }: { project: Project }) {
  return (
    <section className="bg-gradient-to-b from-ink/0 to-night">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="py-section">
            <div className="grid grid-cols-[50%_1fr] gap-16 max-lg:grid-cols-1 max-md:gap-12">
              <div className="grid grid-cols-1 gap-2">
                {project.showcaseImages.map((img) => (
                  <div key={img.src} className="relative w-full overflow-hidden">
                    {/* As on the original: photos 500px or wider fill the column (Webflow gives them
                        responsive versions), smaller files show at their own size. inline-block +
                        middle alignment keep the small gap under each photo. */}
                    <Image
                      src={img.src}
                      alt=""
                      width={img.width}
                      height={img.height}
                      sizes="(max-width: 991px) 100vw, 45vw"
                      className={`inline-block h-auto max-w-full scale-[1.03] align-middle ${img.width >= 500 ? "w-full" : ""}`}
                    />
                  </div>
                ))}
              </div>
              <div className="sticky top-0 mx-auto flex max-h-screen max-w-[26rem] flex-col justify-center max-lg:relative max-lg:-order-1">
                <div>
                  <div className="mb-stack-sm">
                    <div className="flex flex-col gap-10">
                      <h2 className="heading-small tracking-[-0.01rem]">What I did</h2>
                    </div>
                  </div>
                  <p className="text-size-regular">{project.whatIDid}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
