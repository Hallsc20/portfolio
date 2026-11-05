"use client";

import { useEffect, useState } from "react";

/**
 * The dots in the left margin of the "offer" timeline. The dot for the step that
 * crosses the middle of the screen becomes a tall outlined pill; clicking a dot
 * scrolls to its step.
 */
export function TimelineDots({ ids }: { ids: string[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight / 2;
      const hit = ids.find((id) => {
        const r = document.getElementById(id)?.getBoundingClientRect();
        return r && r.top <= mid && r.bottom >= mid;
      });
      setCurrent(hit ?? null);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return (
    <div className="sticky bottom-[12.5vh] -mb-[4.5rem] -ml-[7vw] flex h-[75vh] w-[7vw] flex-col items-center justify-center gap-2 self-end max-lg:mb-0 max-lg:-ml-12 max-md:hidden">
      {ids.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Step ${i + 1}`}
          aria-current={current === id ? "step" : undefined}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-3 rounded-full border-[0.15rem] border-white transition-[background-color,height] duration-[250ms,400ms] ease-[var(--ease-out-cubic),var(--ease-out-quad)] ${
            current === id ? "h-9 bg-transparent" : "h-3 bg-white"
          }`}
        />
      ))}
    </div>
  );
}
