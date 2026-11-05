import Image from "next/image";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Button } from "@/components/ui/Button";

type Props = {
  heading: string;
  body: React.ReactNode;
  button: { href: string; label: string; newTab?: boolean };
  image: string;
};

/**
 * Centred call-to-action over a darkened photo. The photo is pinned to the bottom of
 * the screen while the section passes and drifts slightly (parallax).
 */
export function ActionBanner({ heading, body, button, image }: Props) {
  return (
    <section className="relative flex flex-col justify-end text-white">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="py-section">
            <div className="relative z-10 flex flex-col items-center gap-14 py-24 text-center">
              <div className="flex max-w-[40rem] flex-col items-center gap-4">
                <h2 className="heading-large tracking-[-0.01rem]">{heading}</h2>
                <div className="w-full max-w-[32rem]">
                  <p className="text-size-regular">{body}</p>
                </div>
              </div>
              <Button href={button.href} variant="light" newTab={button.newTab}>
                {button.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end">
        <ScrollProgress className="sticky bottom-0 h-screen max-h-screen overflow-hidden">
          <div className="parallax-section absolute inset-0 flex items-center justify-center overflow-hidden">
            <Image src={image} alt="" fill sizes="100vw" className="scale-[1.01] object-cover" />
            <div className="absolute inset-0 bg-ink/75" />
          </div>
        </ScrollProgress>
      </div>
    </section>
  );
}
