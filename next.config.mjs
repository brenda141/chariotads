/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes for static hosting
  trailingSlash: true,
  // Base path if needed, but here it seems root is fine
  // basePath: '',
};

export default nextConfig;
