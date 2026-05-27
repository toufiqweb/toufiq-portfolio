/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 7 days on the server (default is 60s)
    minimumCacheTTL: 604800,
    // Only generate sizes we actually need — avoids fetching oversized variants
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [32, 64, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
