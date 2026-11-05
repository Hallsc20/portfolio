import { Button } from "@/components/ui/Button";

export function AboutIntro() {
  return (
    <section className="relative overflow-hidden">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="py-section">
            <div className="text-statement mx-auto flex max-w-[50rem] flex-col items-center gap-14 text-center max-md:gap-12 max-sm:gap-10">
              <div className="flex flex-col gap-8">
                <div className="text-eyebrow">About me - Charlie Halls</div>
                <div>
                  I’m a Web Development student at Leicester College, gaining hands-on industry experience with Lune
                  Studio while developing my skills in professional website delivery.
                </div>
              </div>
              <Button href="/about" variant="light">
                Learn about me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
