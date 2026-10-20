/** @type {import('next').NextConfig} */
const nextConfig = {
async rewrites() {
    return [
      {
        source: '/barbearia',
        destination: 'https://lp-care-for-men-barbearia.vercel.app/barbearia',
      },
      {
        source: '/barbearia/:path*',
        destination: 'https://lp-care-for-men-barbearia.vercel.app/barbearia/:path*',
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

export default nextConfig
