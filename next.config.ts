import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@phosphor-icons/react/dist/ssr', 'motion'],
  },
};

export default nextConfig;
