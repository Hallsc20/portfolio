"use client";

import { useEffect, useRef } from "react";

type Props = {
  children?: React.ReactNode;
  as?: "div" | "section";
  className?: string;
  id?: string;
  /** Measure this descendant (CSS selector) instead of the element itself. */
  trigger?: string;
  /**
   * Shifts the start of the range: progress 0 is reached once `startOffset` × the
   * measured element's own height has entered at the bottom of the screen.
   */
  startOffset?: number;
  /** Webflow-style smoothing, 0–100 (higher = more lag behind the scroll). */
  smoothing?: number;
};

/**
 * Writes scroll progress to the CSS variable `--p` on this element, so it and its
 * children can animate with plain CSS, e.g. `translate: 0 calc(var(--p) * 14% - 7%)`.
 *
 * Progress runs 0 → 1 from "top of the measured element enters at the bottom of the
 * screen" to "its bottom leaves at the top" — the same range as Webflow's
 * "while scrolling in view" trigger that the original site uses.
 */
export function ScrollProgress({
  children,
  as: Tag = "div",
  className,
  id,
  trigger,
  startOffset = 0,
  smoothing = 50,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measured = (trigger && el.querySelector(trigger)) || el;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const follow = 1 - smoothing / 100;
    let current = -1;
    let goal = 0;
    let frame = 0;

    // Like Webflow, the goal is measured only when the page scrolls or resizes, from the
    // element's on-screen box (including any movement it has from its own animation);
    // between events the value just eases towards that goal. This matters for elements
    // that move themselves (e.g. drift-down) — the result depends on it, as on the original.
    const measure = () => {
      const r = measured.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh - startOffset * r.height; // measured top (from viewport top) at progress 0
      const range = start + r.height; // distance scrolled from progress 0 to 1
      goal = Math.min(1, Math.max(0, (start - r.top) / range));
    };

    const tick = () => {
      current = current < 0 || reduce.matches ? goal : current + (goal - current) * follow;
      if (Math.abs(goal - current) < 0.0005) current = goal;
      el.style.setProperty("--p", current.toFixed(4));
      frame = current === goal ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      measure();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    measure();
    tick();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [trigger, startOffset, smoothing]);

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
