import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Served at mekark.com/turnkey-peb via a rewrite on the main site.
  basePath: "/turnkey-peb",
  assetPrefix: "/turnkey-peb",
  async redirects() {
    return [
      {
        // Bare domain (e.g. turnkeypeb.mekark.com) -> the app's base path.
        source: "/",
        destination: "/turnkey-peb",
        basePath: false,
        permanent: false,
      },
    ];
  },
  images: {
    // Finer small steps so phone images can be served close to their displayed size.
    deviceSizes: [400, 480, 560, 640, 680, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Next 16 only serves listed qualities (default [75]); without this every quality prop is rounded to 75.
    qualities: [60, 65, 70, 75],
  },
};

export default nextConfig;
