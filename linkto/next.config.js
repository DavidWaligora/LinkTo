/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static HTML export in Next.js 13+
    basePath: '/LinkTo', // ⚠️ replace with your GitHub repo name
  trailingSlash: true,
};
module.exports = nextConfig;
