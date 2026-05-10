/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/immobilienbewertung',
        destination: '/verkaufen',
        permanent: true,
      },
      {
        source: '/makler',
        destination: '/immobilienmakler',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
