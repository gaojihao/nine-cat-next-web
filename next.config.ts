import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    domains: ['static.e08trip.cn', 'qzs.qq.com', 'qzs.gdtimg.com'],
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination: 'https://e08trip.cn/api/:path*',
      },
    ];
  }
};

export default nextConfig;
