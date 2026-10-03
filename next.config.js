/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  async headers() {
    const headers = [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
    // Immutable long-term caching only in production builds — applying it in
    // dev can make the browser cache a chunk across hot-reloads.
    if (process.env.NODE_ENV === "production") {
      headers.push({
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      });
    }
    return headers;
  },
};

module.exports = nextConfig;
