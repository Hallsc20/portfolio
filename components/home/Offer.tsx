import Image from "next/image";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { TimelineDots } from "./TimelineDots";

type Step = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
  link: { href: string; label: string };
  image?: string;
};

const steps: Step[] = [
  {
    id: "one",
    eyebrow: "The offer",
    heading: "I’ll build your website for free.",
    body: "I’m now looking to build my portfolio by creating websites for small businesses completely free of charge — clients only cover hosting at cost.",
    link: { href: "/contact", label: "Claim your free website" },
    image: "/images/image105-1-e4ef.jpg",
  },
  {
    id: "two",
    eyebrow: "SUPPORTED BY LUNE STUDIO",
    heading: "Real experience for me. Professional oversight for you.",
    body: (
      <>
        I&apos;m a Junior Developer Intern at <a href="https://www.lune-studio.co.uk">Lune Studio</a>, and the best way
        for me to learn is by working on real projects for real businesses.
        <br />
        <br />
        I&apos;ll take the lead on your website, while Lune Studio provides guidance throughout, reviews the work before
        launch and steps in wherever needed. <br />
        <br />
        You get a professional website at no design cost, while I gain the commercial experience needed to develop my
        skills.
      </>
    ),
    link: { href: "https://www.lune-studio.co.uk", label: "Learn about Lune Studio" },
    image: "/images/image156-1-e51d.jpg",
  },
  {
    id: "three",
    eyebrow: "LIMITED AVAILABILITY",
    heading: "I’m only taking on a small number of free projects.",
    body: (
      <>
        To make sure I can give each website the time and attention it deserves alongside college and my work with Lune
        Studio, I’m only accepting a limited number of free website projects.
        <br />
        <br />
        If you’re a small business and think I could help, get in touch while there are spaces available.
      </>
    ),
    link: { href: "/contact", label: "Apply for a free website" },
  },
];

/**
 * The three-step "offer" timeline: a sticky photo on the left, cards that rise and fade
 * through on the right, and dots in the left margin marking the current step.
 */
export function Offer() {
  return (
    <section className="mb-[4.5rem] bg-gradient-to-b from-[#141a1f00] to-night max-lg:mb-0">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="grid grid-cols-[auto_1fr_1fr] max-md:grid-cols-1">
            <TimelineDots ids={steps.map((s) => s.id)} />
            <div className="col-span-2 max-md:col-span-1">
              {steps.map((step, i) => (
                <ScrollProgress
                  key={step.id}
                  id={step.id}
                  startOffset={0.4}
                  smoothing={90}
                  className="grid min-h-[110vh] grid-cols-2 gap-[4.75rem] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-8 max-lg:pb-24 max-sm:gap-4 max-sm:pb-0"
                >
                  <div className="relative z-20 h-full flex-1 rounded-[9px]">
                    <div className="sticky top-0 flex h-screen rounded-2xl max-lg:h-auto">
                      <div
                        className={`relative flex w-full items-start justify-center rounded-2xl ${
                          i === steps.length - 1 ? "-mb-[4.5rem] max-lg:mb-0" : ""
                        }`}
                      >
                        {step.image && (
                          <ScrollProgress className="sticky top-[10.5vh] my-2 h-[79vh] max-h-[64rem] w-full overflow-hidden max-lg:h-[70vw] max-lg:w-[70%] max-md:h-[110vw] max-md:w-full">
                            <div className="absolute inset-0">
                              <Image src={step.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 70vw, 40vw" className="parallax-card object-cover" />
                            </div>
                          </ScrollProgress>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="scroll-rise-fade relative z-20 mx-auto mt-2 mb-auto flex min-h-[79vh] max-w-[27rem] flex-col items-start justify-center max-lg:min-h-[50vh] max-sm:justify-start max-sm:pb-16">
                    <div className="mb-stack-lg">
                      <div className="mb-stack-sm">
                        <div className="flex flex-col gap-10">
                          <div className="text-eyebrow">{step.eyebrow}</div>
                          <h2 className="heading-medium tracking-[-0.01rem]">{step.heading}</h2>
                        </div>
                      </div>
                      <div className="w-full max-w-[20rem]">
                        <p className="text-size-regular">{step.body}</p>
                      </div>
                    </div>
                    <ArrowLink href={step.link.href}>{step.link.label}</ArrowLink>
                  </div>
                </ScrollProgress>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
