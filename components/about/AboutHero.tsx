import { ArrowLink } from "@/components/ui/ArrowLink";

/**
 * Intro on the left (stays in view on desktop), "My story" on the right; stacked below
 * 992px. The template's stock portrait was removed on 2026-10-15 until there's a real
 * photo. Copy uses only facts stated elsewhere on the site (homepage, project pages).
 */
export function AboutHero() {
  return (
    <section className="mb-16 bg-gradient-to-b from-ink/0 to-night max-lg:mb-0">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="grid grid-cols-2 gap-x-16 pt-40 pb-36 max-lg:grid-cols-1 max-lg:gap-y-16 max-lg:pb-24 max-md:pt-32 max-md:pb-16">
            <div className="self-start lg:sticky lg:top-32">
              <div className="mb-stack-md">
                <h1 className="heading-xlarge">Learning web development on real projects</h1>
              </div>
              <p className="text-size-large max-w-[30rem]">
                Hi, I&apos;m Charlie, a Web Development student at Leicester College and a Junior Developer Intern at
                Lune Studio.
              </p>
            </div>
            <div className="mx-auto flex w-full max-w-[30rem] flex-col gap-14 lg:pt-4 max-md:gap-10 max-sm:gap-8">
              <div className="text-eyebrow">My story</div>
              <div className="flex flex-col gap-6 max-md:gap-5">
                <h2 className="heading-medium tracking-[-0.01rem]">What I&apos;m working on right now</h2>
                <p className="text-size-regular">
                  I&apos;m studying Web Development at Leicester College. Alongside my course, I&apos;m a Junior
                  Developer Intern at{" "}
                  <a href="https://www.lune-studio.co.uk" className="underline-offset-4 hover:underline">
                    Lune Studio
                  </a>
                  , where I learn by working on real websites for real businesses.
                  <br />
                  <br />
                  To build my portfolio, I&apos;m making websites for small businesses free of charge. You only cover
                  hosting at cost. I take the lead on your site, and Lune Studio guides the project and reviews the
                  work before it goes live.
                  <br />
                  <br />
                  My practice projects so far are in Webflow: a film library you can filter by genre, built with
                  Webflow&apos;s CMS, and a template turned into a full website for a made-up therapy practice.
                </p>
                <div className="pt-4">
                  <ArrowLink href="/contact">Get a free website</ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
