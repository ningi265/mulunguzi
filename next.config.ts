import { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable linting during builds
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com", // Add your trusted image domain here
    ],
  },

  // Ensure you're not using static export if you have SSR or API routes
  output: 'standalone', // Use standalone output for serverless deployment
};

export default nextConfig;
