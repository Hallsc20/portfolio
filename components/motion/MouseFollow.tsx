"use client";

import { useRef } from "react";

type Props = {
  /** The element whose area tracks the mouse (rendered as this tag). */
  as?: "div" | "span";
  className?: string;
  /** Maximum shift in rem, horizontally and vertically, at the element's edges. */
  x: number;
  y: number;
  /**
   * Move this descendant (CSS selector) instead of wrapping the children in a moving
   * span — for when the whole area tracks the mouse but only one piece drifts.
   */
  target?: string;
  /** Only follow at this width and up (the original limits some effects to desktop). */
  minWidth?: number;
  children: React.ReactNode;
};

/**
 * Content drifts slightly towards the mouse while it moves over the element, and
 * settles back to the centre when it leaves — the original's nav link, footer email
 * and numbered-dot "mouse over" effects.
 */
export function MouseFollow({ as: Tag = "span", className = "", x, y, target, minWidth = 0, children }: Props) {
  const inner = useRef<HTMLSpanElement>(null);

  const moving = (el: HTMLElement) =>
    (target ? el.querySelector<HTMLElement>(target) : inner.current) ?? null;

  const move = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < minWidth) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    moving(e.currentTarget)?.style.setProperty("translate", `${px * 2 * x}rem ${py * 2 * y}rem`);
  };
  const leave = (e: React.MouseEvent<HTMLElement>) => moving(e.currentTarget)?.style.setProperty("translate", "0 0");

  return (
    <Tag className={className} onMouseMove={move} onMouseLeave={leave}>
      {target ? (
        children
      ) : (
        <span ref={inner} className="block transition-[translate] duration-700 ease-out-cubic">
          {children}
        </span>
      )}
    </Tag>
  );
}
