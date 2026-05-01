import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
  
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'}/:path*`,
      },
    ];
  },
  
  // Ignorer les erreurs TypeScript pendant le build
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Ignorer les erreurs ESLint pendant le build
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;