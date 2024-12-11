import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/ansiedad-caramelizada/',
  basePath: '/ansiedad-caramelizada',
}

export default nextConfig
