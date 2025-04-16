import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/_next/',
        '/static/',
        '/private/',
        '/admin/',
      ],
    },
    sitemap: 'https://activateai.com/sitemap.xml',
  };
} 