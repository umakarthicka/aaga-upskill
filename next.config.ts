import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aaga-upskill",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
