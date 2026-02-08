import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://cdn4.thedogapi.com/**"),
      new URL("https://storage.googleapis.com/**"),
    ],
  },
};
export default nextConfig;
