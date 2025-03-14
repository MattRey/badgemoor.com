import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/why-use-us',
        destination: '/property-management',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#footer',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
