"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Order and numbering follow the template's own (hidden) menu.
const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Round button with two offset lines; the lines cross into an X while the menu is open. */
export function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="phone-menu"
      aria-label={open ? "Close menu" : "Open menu"}
      className="relative z-[70] hidden size-12 cursor-pointer items-center justify-center rounded-full bg-line max-lg:flex"
    >
      <span className="flex flex-col gap-2">
        <span
          className={`block h-[0.1rem] w-[1.2rem] bg-white transition-transform duration-500 ease-out-quad ${
            open ? "translate-y-[0.3rem] rotate-45" : "-translate-x-[0.25rem]"
          }`}
        />
        <span
          className={`block h-[0.1rem] w-[1.2rem] bg-white transition-transform duration-500 ease-out-quad ${
            open ? "-translate-y-[0.3rem] -rotate-45" : "translate-x-[0.25rem]"
          }`}
        />
      </span>
    </button>
  );
}

/**
 * Tablet / phone menu (below 992px): a dark panel slides in from the right over a dimmed
 * page. Closes with the button, a tap outside, the Escape key, or choosing a page.
 */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const firstLink = useRef<HTMLAnchorElement>(null);

  // While open: Escape closes, the page behind doesn't scroll, focus moves into the menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    firstLink.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = overflow;
    };
  }, [open, onClose]);

  // Close if the window is widened past the tablet size while open.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 992px)");
    const onChange = () => wide.matches && onClose();
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, [onClose]);

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-shade/70 transition-opacity duration-500 ease-out-quad ${open ? "opacity-100" : "opacity-0"}`}
      />
      <nav
        id="phone-menu"
        aria-label="Menu"
        inert={!open}
        className={`absolute inset-y-0 right-0 flex w-[80vw] flex-col overflow-auto bg-panel px-16 pt-28 pb-13 transition-transform duration-500 ease-out-quad max-md:w-[75vw] max-md:px-12 max-sm:w-screen max-sm:px-8 max-sm:pb-16 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start gap-8">
          <div className="w-full border-b border-line pb-5">
            <div className="text-size-small">Navigation</div>
          </div>
          <ul className="flex w-full flex-col">
            {links.map((l, i) => {
              const current = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    ref={i === 0 ? firstLink : undefined}
                    href={l.href}
                    onClick={onClose}
                    aria-current={current ? "page" : undefined}
                    className="group flex items-center py-3 pl-2 text-[3rem] font-medium max-md:text-[2rem]"
                  >
                    <span className="mr-[1.9rem] w-6 text-[0.75rem] font-normal tracking-[2px]">
                      {current ? <span className="block size-[0.6rem] rounded-full bg-white" /> : `0${i + 1}`}
                    </span>
                    <span className="transition-opacity duration-400 ease-out-cubic group-hover:opacity-70">{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
