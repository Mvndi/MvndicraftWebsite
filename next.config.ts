import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, 
  },
  async redirects() {
    return [
      {
        source: '/guides/:path*',
        destination: 'https://wiki.mvndicraft.net/guides/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
