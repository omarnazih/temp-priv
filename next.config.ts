// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tell Next.js it’s hosted under /gallery
  basePath: '/gallery',

  // 2. Prevent automatic redirects on trailing slash mismatches (helpful in proxy setups)
  skipTrailingSlashRedirect: true,

  // 3. Ensure asset URLs use the correct prefix at runtime
  //    In development this is undefined so /_next/ works,
  //    in production you may host static assets via CDN or same path.
  assetPrefix: '',

  // 4. Optional: Rewrite static-asset requests if you see missing CSS/JS
  async rewrites() {
    return [
      {
        // Proxy Next.js’s _next files under the basePath
        source: '/gallery/_next/:path*',
        destination: '/_next/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
