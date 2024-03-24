export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: 'https://newsaroundwolrd.com/sitemap.xml',
  };
}
