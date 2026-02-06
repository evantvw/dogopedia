import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn4.thedogapi.com/**")],
  },
};
export default nextConfig;
