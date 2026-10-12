
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/GS-Portfolio",
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

