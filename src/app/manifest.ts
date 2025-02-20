import { MetadataRoute } from 'next';
import { getTranslations } from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'fa';
  const t = await getTranslations({ locale, namespace: 'Manifest' });

  return {
    name: t('name') || "ommeabiha.info",
    short_name: "Omme Abiha",
    // description: t('description'),
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/common/logo/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/common/logo/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/common/logo/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/common/logo/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/common/logo/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/common/logo/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/svg+xml',
      },
      {
        src: '/common/logo/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/common/logo/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/x-icon',
      },
    ],
    prefer_related_applications: false,
    related_applications: [],
  };
}