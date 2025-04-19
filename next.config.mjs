/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Agregar las imagenes provenientes de google
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/**',
      }
    ],
  },
};

export default nextConfig;
