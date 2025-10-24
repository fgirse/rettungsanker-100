import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ turbopack: {
    // ...
  },


  reactCompiler: true,
    env: {

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "Carlo2024",

    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "school",

  },

  experimental: {

    serverComponentsExternalPackages: ['@prisma/studio-core']

  },

  webpack: (config) => {

    // Handle Prisma Studio assets

    config.resolve.fallback = {

      ...config.resolve.fallback,

      fs: false,

    };

    return config;

  },

  images: {

    // Remote image patterns (recommended):

    remotePatterns: [

      {

        protocol: 'https',

        hostname: 'res.cloudinary.com',

        port: '',

        pathname: '/**',

      },

      {

        protocol: 'https',

        hostname: 'd1yei2z3i6k35z.cloudfront.net',

        port: '',

        pathname: '/**',

      },

      {

        protocol: 'https',

        hostname: 'img.clerk.com',

        port: '',

        pathname: '/**',

      },

    ],

  },

};

export default nextConfig;
