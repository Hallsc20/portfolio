import { MouseFollow } from "@/components/motion/MouseFollow";

const EMAIL = "charlie@lune-studio.co.uk";

/**
 * Footer. It sits underneath the page (sticky to the bottom of the screen, behind the
 * content), so scrolling to the end uncovers it. Below 992px it scrolls normally,
 * then becomes revealed again under 480px — exactly as the original does.
 */
export function Footer() {
  return (
    <footer className="sticky bottom-0 w-full overflow-hidden bg-night max-lg:relative max-sm:sticky">
      <div className="page-padding">
        <div className="mx-auto max-w-page">
          <div className="flex min-h-[85vh] flex-col justify-between gap-12 max-lg:min-h-[75vh] max-sm:min-h-[65vh]">
            <div className="flex flex-1 flex-col items-center justify-center gap-12 pt-24 pb-12 max-lg:gap-8 max-lg:py-16 max-md:order-first max-md:gap-7 max-md:pt-12 max-md:pb-0 max-sm:gap-6">
              <p className="text-eyebrow">Connect with me</p>
              {/* The original linked to a placeholder (example@template.com); fixed on request. */}
              <a href={`mailto:${EMAIL}?subject=Hello!`} className="text-email max-w-full text-center">
                <MouseFollow x={1.25} y={1.25}>{EMAIL}</MouseFollow>
              </a>
            </div>
            {/* The template's "Made with ❤️ for the webflow community" line and its empty
                Terms / Privacy links were removed on 2026-10-15. */}
            <div className="border-t border-line py-8 text-[0.875rem] font-light text-white/70 max-md:order-1 max-sm:pt-6 max-sm:pb-4">
              Charlie Halls © 2026
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
