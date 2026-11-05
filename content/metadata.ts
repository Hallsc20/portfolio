import type { Metadata } from "next";

/** Browser-tab title, also used as the title in link previews. */
export function pageMeta(title: string): Metadata {
  return {
    title,
    openGraph: { title },
    twitter: { title },
  };
}
