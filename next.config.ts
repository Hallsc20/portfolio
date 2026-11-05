import type { NextConfig } from "next";

// Only set when building for GitHub Pages. The preview in Ship Studio doesn't use it.
const pagesBasePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig =
  pagesBasePath === undefined
    ? {}
    : {
        output: "export",
        basePath: pagesBasePath,
        env: { NEXT_PUBLIC_BASE_PATH: pagesBasePath },
        images: { loader: "custom", loaderFile: "./lib/image-loader.ts" },
      };

export default nextConfig;
