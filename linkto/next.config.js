/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGitHubPages
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`
    : '',
  trailingSlash: true,
};

module.exports = nextConfig;
