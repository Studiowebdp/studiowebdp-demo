// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Blocca l'indicizzazione della demo sui motori di ricerca
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive, nosnippet',
          },
        ],
      },
    ];
  },
};

export default nextConfig;