/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'turbomac-1309372570.cos.ap-shanghai.myqcloud.com',
        port: '',
        pathname: '/**/**',
      },
      {
        protocol: 'https',
        hostname: 'turbomac.netlify.app',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = nextConfig
