/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/book-online", destination: "/training", permanent: true },
      { source: "/meet-the-team", destination: "/team", permanent: true },
    ];
  },
};

export default nextConfig;
