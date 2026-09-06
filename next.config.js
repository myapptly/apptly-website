/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'galaxy-prod.tlcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.galaxy.ai',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'myapptly.com',
          },
        ],
        destination: 'https://www.myapptly.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
