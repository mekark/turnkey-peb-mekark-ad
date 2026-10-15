import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Finer small steps so phone images can be served close to their displayed size.
    deviceSizes: [400, 480, 560, 640, 680, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
