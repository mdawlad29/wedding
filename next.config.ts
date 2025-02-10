// @ts-check
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "dev-agent.localbet.xyz",
        pathname: "**",
      },
    ],

    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    unoptimized: false,
    loader: "custom",
    // path: "/",
    loaderFile: "./loader.ts",
  },
  output: "standalone",
  distDir: ".next",
};

export default nextConfig;
