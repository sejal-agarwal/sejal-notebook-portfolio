import type { NextConfig } from "next";

// Production URL of the separate `ux-laws` Vercel project. Can be overridden
// with the UX_LAWS_URL env var.
const UX_LAWS_URL = (process.env.UX_LAWS_URL ?? "https://ux-laws-two.vercel.app").replace(/\/$/, "");

const nextConfig: NextConfig = {
  async rewrites() {
    if (!UX_LAWS_URL) return [];
    // ux-laws uses basePath: "/ux-laws", so the path is kept as-is.
    return [
      { source: "/ux-laws", destination: `${UX_LAWS_URL}/ux-laws` },
      { source: "/ux-laws/:path*", destination: `${UX_LAWS_URL}/ux-laws/:path*` },
    ];
  },
};

export default nextConfig;
