/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.media-amazon.com',
      },
      {
        protocol: 'https',
        hostname: '**.media-imdb.com',
      },
    ],
  },
};

module.exports = nextConfig;
