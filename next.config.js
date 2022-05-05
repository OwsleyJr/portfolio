/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.tuk.dev", "tuk-cdn.s3.amazonaws.com", "cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
