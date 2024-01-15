/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
};

module.exports = nextConfig;
