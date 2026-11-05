import { SmartLink } from "./SmartLink";

type Props = {
  href: string;
  children: React.ReactNode;
  /** `outline`: dark outline (category filters). `light`: white outline (on dark photos / sections). */
  variant?: "outline" | "light";
  /** The filter button for the page you're on. */
  current?: boolean;
  /** Open in a new tab (external booking links). */
  newTab?: boolean;
};

const base =
  "flex items-center justify-center rounded-full px-8 py-4 text-center text-[0.875rem] font-normal text-white transition-shadow duration-400 ease-out-cubic";

const variants = {
  outline: "shadow-[inset_0_0_0_1px_var(--color-line)] hover:shadow-[inset_0_0_0_2px_var(--color-slate)]",
  light: "shadow-[inset_0_0_0_1px_rgb(255_255_255/0.5)] hover:shadow-[inset_0_0_0_2px_#fff]",
};

const currentStyle = "cursor-default bg-line shadow-[inset_0_0_0_1px_var(--color-ink)]";

/** Pill-shaped outline button. */
export function Button({ href, children, variant = "outline", current = false, newTab = false }: Props) {
  return (
    <SmartLink
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener" : undefined}
      aria-current={current ? "page" : undefined}
      className={`${base} ${current ? currentStyle : variants[variant]}`}
    >
      {children}
    </SmartLink>
  );
}
