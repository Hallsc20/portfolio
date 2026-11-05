/**
 * Small "01" label that turns into a white dot while its `group` is hovered (the number
 * shrinks away, the dot pops in) — used on the Contact form questions.
 * Wrap the row in <MouseFollow target="[data-dot]"> to make it drift towards the mouse.
 */
export function NumberDot({ n }: { n: string }) {
  return (
    <div
      data-dot
      className="relative mt-[-0.2rem] mr-[1.9rem] flex items-center justify-center transition-[translate] duration-700 ease-out-cubic"
    >
      <div className="absolute inset-0 flex items-center justify-center text-[0.75rem] font-normal tracking-[2px] transition-transform duration-500 ease-out-back group-hover:scale-0">
        {n}
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative size-[0.6rem] min-h-[0.6rem] min-w-[0.6rem] scale-0 rounded-full bg-white transition-transform duration-250 ease-in-out group-hover:scale-100 group-hover:delay-100 group-hover:duration-500 group-hover:ease-out-back" />
      </div>
    </div>
  );
}
