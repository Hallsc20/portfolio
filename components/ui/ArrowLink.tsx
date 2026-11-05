import { SlidingArrow } from "./Arrow";
import { SmartLink } from "./SmartLink";

type Props = {
  href: string;
  children: React.ReactNode;
  /** `large` is the hero version (bigger circle and text). */
  size?: "regular" | "large";
};

/** Dark round arrow button followed by text — "Get a free website", "Claim your free website", etc. */
export function ArrowLink({ href, children, size = "regular" }: Props) {
  const large = size === "large";
  return (
    <SmartLink
      href={href}
      className={`group flex max-w-full items-center ${large ? "text-[1.25rem] max-md:text-[1.125rem]" : ""}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-line pt-[2px] ${
          large ? "mr-[1.25rem] size-[3.25rem] max-md:mr-[1.125rem]" : "mr-4 size-[2.875rem]"
        }`}
      >
        <SlidingArrow />
      </span>
      <span className="relative z-10 flex flex-col leading-normal">{children}</span>
    </SmartLink>
  );
}
