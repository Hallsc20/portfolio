"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MenuButton, MobileMenu } from "@/components/layout/MobileMenu";
import { MouseFollow } from "@/components/motion/MouseFollow";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

/**
 * Top bar. As on the original it slides in after load and, on desktop, is only shown
 * while you're within the top 10% of a screen's height. Below 992px (both added after the
 * migration) the links are replaced by a menu button, and the bar also slides back in
 * whenever you scroll up.
 */
export function Navbar() {
  const [shown, setShown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    // Desktop: shown only near the top, as on the original. Below 992px (added after the
    // migration) it also slides back in whenever you scroll up, so the menu is in reach.
    const compact = window.matchMedia("(max-width: 991px)");
    let lastY = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      const nearTop = y <= window.innerHeight * 0.1;
      const delta = y - lastY;
      if (Math.abs(delta) < 4 && !nearTop) return; // ignore tiny jitters
      lastY = y;
      setShown(nearTop || (compact.matches && delta < 0));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div
        // While the menu is open the bar stays in view, above the menu panel, so its
        // button can close it.
        className={`fixed inset-x-0 top-0 bg-ink transition-transform duration-500 ease-out-quad ${
          menuOpen ? "z-[70] translate-y-0" : shown ? "z-50 translate-y-0 delay-200" : "z-50 -translate-y-full"
        }`}
      >
        <div className="page-padding">
          <div className="mx-auto max-w-page">
            <div className="grid h-20 grid-cols-2 max-lg:grid-cols-[1fr_auto]">
              <div className="flex items-center">
                <Link href="/" aria-label="Charlie Halls — home" className="flex w-[12.5rem] items-center pt-[0.15rem] pr-[0.2rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/logo.svg`} alt="charliehalls.portfolio" className="max-w-full" />
                </Link>
              </div>
              <nav className="-mr-[1.75rem] flex justify-end max-lg:hidden">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className="flex">
                    <MouseFollow as="span" x={0.875} y={0.5} className="flex items-center justify-center px-[1.75rem] py-4 text-[0.95rem]">
                      {l.label}
                    </MouseFollow>
                  </Link>
                ))}
              </nav>
              <div className="hidden items-center max-lg:flex">
                <MenuButton open={menuOpen} onClick={() => setMenuOpen((o) => !o)} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Outside the bar: the bar's slide animation would otherwise trap the full-screen panel inside it. */}
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
