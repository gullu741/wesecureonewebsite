import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let basePath = '';

if (isGithubActions) {
  // Trim off the GitHub organization name to just get the repo name
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'wesecureonewebsite';
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  basePath: isGithubActions ? basePath : undefined,
  assetPrefix: isGithubActions ? `${basePath}/` : undefined,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'export',
  transpilePackages: ['motion'],
};

export default nextConfig;
