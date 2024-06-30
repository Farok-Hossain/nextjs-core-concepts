/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },

  // jodi onek gula external image dorkar hoi tahole ai rules
  //   images: {
  //     remotePatterns: [
  //       {
  //         protocol: "https",
  //         hostname: "**",
  //       },
  //     ],
  //   },
};

module.exports = nextConfig;
