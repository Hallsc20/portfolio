// GitHub Pages can't resize images, so this serves each photo as it is,
// from the folder the site lives in on GitHub.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
