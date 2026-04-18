import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const hasProjectBasePath = isGitHubActions && repoName.length > 0;
const basePath = hasProjectBasePath ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: hasProjectBasePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config: any) => {
    config.module?.rules?.push({
      test: /\.bib$/,
      type: "asset/source",
    });
    return config;
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
