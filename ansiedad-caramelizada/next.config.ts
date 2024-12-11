import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'pagina_ansiedad' // Nombre exacto del repositorio

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  trailingSlash: true,
}

export default nextConfig