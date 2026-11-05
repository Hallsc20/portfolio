import Link from "next/link";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Internal paths use Next.js <Link>; anything else (http, mailto, #) is a plain <a>. */
export function SmartLink({ href, ...rest }: Props) {
  if (href.startsWith("/")) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}
