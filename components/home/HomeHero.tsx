import Image from "next/image";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ArrowLink } from "@/components/ui/ArrowLink";

const stripImages = [
  "/images/image151-1-e51f.jpg",
  "/images/image159-1-e52c.jpg",
  "/images/image102-1-e4ee.jpg",
  "/images/image157-1-e528.jpg",
  "/images/image122-1-e516.jpg",
  "/images/image117-1-e503.jpg",
];

/**
 * Intro headline, then a strip of square photos that slides right by a third of its
 * width while you scroll through the hero. Note the original centres the hero's
 * padded box, so this headline sits ~3.5vw further right than other sections' content.
 */
export function HomeHero() {
  return (
    <ScrollProgress
      as="section"
      trigger="[data-hero-trigger]"
      smoothing={80}
      className="relative flex w-full flex-col justify-between overflow-hidden"
    >
      <div className="flex flex-1 justify-center pt-20">
        <div className="page-padding">
          <div className="flex size-full justify-center">
            <div className="mx-auto w-full max-w-page">
              <div className="flex size-full flex-1 items-end justify-between pt-32 pb-24 max-md:pt-24 max-md:pb-16">
                <div className="flex max-w-[50rem] flex-col items-start max-lg:max-w-none max-md:gap-2">
                  <div className="mb-stack-lg">
                    <h1 className="heading-xlarge">
                      I’m Charlie. I’m building my portfolio by creating free websites for small businesses.
                    </h1>
                  </div>
                  <ArrowLink href="/contact" size="large">
                    Get a free website
                  </ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-[93vw] justify-end overflow-hidden max-lg:max-w-[100vw]">
        <div className="flex justify-end slide-strip">
          {stripImages.map((src) => (
            <div
              key={src}
              className="relative ml-2 size-[70vh] min-w-[70vh] overflow-hidden max-lg:size-[60vh] max-lg:min-w-[60vh] max-sm:size-[80vw] max-sm:min-w-[80vw]"
            >
              <Image src={src} alt="" fill priority sizes="70vh" className="scale-[1.01] object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll range for the strip: from one screen below the top to the end of the hero */}
      <div data-hero-trigger className="pointer-events-none absolute inset-0 mt-[100vh]" />
    </ScrollProgress>
  );
}
