import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stale ~/package-lock.json makes Turbopack infer the home dir as the
  // workspace root, breaking module resolution for @tailwindcss/oxide.
  // Pin the root to this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
