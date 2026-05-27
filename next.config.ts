import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react/dist/ssr', 'motion'],
  },
};

export default nextConfig;
