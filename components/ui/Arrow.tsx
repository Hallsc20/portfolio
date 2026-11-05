function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`size-full ${className}`}>
      <path
        d="M13.1722 12L8.22217 7.04999L9.63617 5.63599L16.0002 12L9.63617 18.364L8.22217 16.95L13.1722 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * The original's sliding arrow: two chevrons in a 1-chevron-wide clip. When the
 * nearest `group` is hovered both slide right by one width (500ms, outQuint), so the
 * visible chevron exits and the hidden one slides in after it.
 */
export function SlidingArrow({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "size-[1.25rem]" : "size-4";
  const arrow = `${box} shrink-0 transition-transform duration-500 ease-out-quint group-hover:translate-x-full`;
  return (
    <span className="flex w-4 items-center justify-end overflow-hidden">
      <span className={arrow}>
        <Chevron />
      </span>
      <span className={arrow}>
        <Chevron />
      </span>
    </span>
  );
}
