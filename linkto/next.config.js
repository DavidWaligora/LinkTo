/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // enables static export with next build
  trailingSlash: true,         // helps with GitHub Pages routing
  basePath: process.env.GITHUB_PAGES === 'true' 
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1]}`  // repo name as base path
    : '',
};

module.exports = nextConfig;
