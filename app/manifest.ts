import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'immovativInvest',
    short_name: 'immovativInvest',
    description: 'Immobilienmakler Frankfurt & Rhein-Main – Immobilie verkaufen',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/logo-new.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
