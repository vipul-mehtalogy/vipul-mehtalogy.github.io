import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static HTML export
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://mehtalogy.in',
  },
  assetPrefix: "",
  basePath: "",
};

export default nextConfig;
