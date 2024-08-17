/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
          process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:5328/api/:path*" // Desarrollo - Flask local
            : "/api/", // Producción - Serverless Functions
      },
    ];
  },
};

module.exports = nextConfig;
