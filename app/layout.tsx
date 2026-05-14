import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'immovativInvest – Immobilie verkaufen: Direktankauf & Makler',
    template: '%s | immovativInvest',
  },
  description: 'Verkaufen Sie Ihre Immobilie schnell, sicher und diskret. immovativInvest bietet Ihnen zwei Wege: Direktankauf oder professionelle Maklervermarktung – kostenlos & unverbindlich.',
  keywords: ['Immobilie verkaufen', 'Direktankauf', 'Immobilienmakler', 'Immobilienbewertung', 'Haus verkaufen', 'Wohnung verkaufen'],
  icons: {
    icon: '/logo-new.png',
    apple: '/logo-new.png',
    shortcut: '/logo-new.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'immovativInvest',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'immovativInvest – Immobilie verkaufen im Rhein-Main-Gebiet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.immovativ-invest.de/#website',
      url: 'https://www.immovativ-invest.de',
      name: 'immovativInvest',
      description: 'Immobilienmakler und Direktankauf im Rhein-Main-Gebiet',
      inLanguage: 'de-DE',
      publisher: {
        '@id': 'https://www.immovativ-invest.de/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.immovativ-invest.de/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': ['LocalBusiness', 'RealEstateAgent'],
      '@id': 'https://www.immovativ-invest.de/#organization',
      name: 'immovativInvest',
      legalName: 'Niclas van der Straeten & Mazlum Selcuk GbR',
      url: 'https://www.immovativ-invest.de',
      logo: 'https://www.immovativ-invest.de/logo-new.png',
      image: 'https://www.immovativ-invest.de/logo-new.png',
      description:
        'Immobilienmakler im Rhein-Main-Gebiet. Professioneller Immobilienverkauf – persönlich, diskret und zum bestmöglichen Preis.',
      telephone: '+4915129686979',
      email: 'info@immovativ-invest.de',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hattsteiner Allee 51',
        postalCode: '61250',
        addressLocality: 'Usingen',
        addressRegion: 'Hessen',
        addressCountry: 'DE',
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 50.1109,
          longitude: 8.6821,
        },
        geoRadius: '60000',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '100',
      },
      priceRange: '€€',
      openingHours: 'Mo-Su 08:00-20:00',
      founder: {
        '@type': 'Person',
        name: 'Niclas van der Straeten',
        jobTitle: 'Geschäftsführer',
        worksFor: { '@id': 'https://www.immovativ-invest.de/#organization' },
      },
      sameAs: [
        'https://www.instagram.com/immovativ.de',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
