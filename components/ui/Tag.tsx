import Link from "next/link";

/** Small uppercase category label with an underline that brightens on hover. */
export function Tag({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-block border-b border-white/50 text-[0.7rem] font-medium uppercase tracking-[1px] transition-colors duration-400 ease-out-cubic hover:border-white"
    >
      {children}
    </Link>
  );
}
