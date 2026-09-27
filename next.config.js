/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // Bloqueio extra de indexação em nível de header, além do meta tag e do robots.txt.
    // Vale enquanto NOINDEX_ALL=true (staging, antes da Elaine aprovar/pagar).
    if (process.env.NOINDEX_ALL !== 'false') {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          ],
        },
      ];
    }
    return [];
  },
};

module.exports = nextConfig;
