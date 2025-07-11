import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    // Ignore .md files to prevent Module not found errors
    config.module.rules.push({
      test: /\.md$/,
      use: 'ignore-loader'
    });
    
    return config;
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
