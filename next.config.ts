import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  images: {

      remotePatterns: [
          {
              hostname: "res.cloudinary.com",
          },
          {
            hostname:"images.unsplash.com"
          },
          {
            hostname:"encrypted-tbn0.gstatic.com"
          }
      ],

  },
};

export default nextConfig;