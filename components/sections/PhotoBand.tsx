import Image from "next/image";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

/**
 * Full-width photo band: an empty 25rem spacer with the photo drifting behind it.
 * `tinted` adds the light dark overlay (project pages); the Work page's band has none.
 */
export function PhotoBand({ image, tinted = false }: { image: string; tinted?: boolean }) {
  return (
    <section className="relative overflow-hidden">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="py-section">
            <div className="min-h-[25rem]" />
          </div>
        </div>
      </div>
      <ScrollProgress className="absolute inset-0">
        <div className="parallax-section absolute inset-0 flex items-center justify-center overflow-hidden">
          <Image src={image} alt="" fill sizes="100vw" className="scale-[1.01] object-cover" />
          {tinted && <div className="absolute inset-0 bg-ink/30" />}
        </div>
      </ScrollProgress>
    </section>
  );
}
