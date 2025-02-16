import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    // Disable server-side rendering for specific components
    styledComponents: true,
  },
};

export default nextConfig;
