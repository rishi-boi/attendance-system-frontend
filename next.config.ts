import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = "eval-source-map"; // Ideal for development
    } else {
      config.devtool = "source-map"; // Ideal for production
    }
    return config;
  },
};

export default nextConfig;
