/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.io", "ipfs.infura.io", "ipfs.fleek.co", "luckyc00kies.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luckyc00kies.com",
      },
      {
        protocol: "https",
        hostname: "mintsquare.sfo3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

module.exports = nextConfig;
