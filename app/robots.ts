import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://spm.rs/sitemap.xml',
    host: 'https://spm.rs',
  };
}
