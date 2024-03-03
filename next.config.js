const withOffline = require('next-offline')

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
}

module.exports = withOffline(nextConfig)
