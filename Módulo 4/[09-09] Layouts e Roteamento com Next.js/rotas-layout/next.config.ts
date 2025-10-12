import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    swcMinify: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
export default nextConfig;
