/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "192.168.1.129:3000",
        "saranglukis.netlify.app",
      ],
    },
  },
};

module.exports = nextConfig;
