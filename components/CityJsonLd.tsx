import { sharedFaqItems } from '@/lib/faq-items'

interface CityJsonLdProps {
  cityName: string
  slug: string
}

export default function CityJsonLd({ cityName, slug }: CityJsonLdProps) {
  const baseUrl = 'https://www.immovativ-invest.de'
  const pageUrl = `${baseUrl}/immobilienmakler-${slug}`

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Start',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Immobilienmakler',
        item: `${baseUrl}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityName,
        item: pageUrl,
      },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Immobilienmakler ${cityName}`,
    description: `Professioneller Immobilienverkauf in ${cityName} ohne Maklerprovision für Verkäufer. Kostenlose Immobilienbewertung und persönliche Beratung.`,
    provider: {
      '@type': 'RealEstateAgent',
      '@id': `${baseUrl}/#organization`,
      name: 'immovativInvest',
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      addressCountry: 'DE',
    },
    url: pageUrl,
    serviceType: 'Immobilienmakler',
    offers: {
      '@type': 'Offer',
      description: 'Kostenlose Immobilienbewertung und Verkaufsberatung',
      price: '0',
      priceCurrency: 'EUR',
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sharedFaqItems.slice(0, 5).map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  )
}
