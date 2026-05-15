import type { Metadata } from 'next'
import KarriereClient from './KarriereClient'

export const metadata: Metadata = {
  title: 'Jobs als Immobilienmakler Frankfurt – Jetzt bewerben',
  description: 'Werde Teil des immovativInvest-Teams. Offene Stellen in Immobilien, Backoffice, IT und Social Media im Rhein-Main-Gebiet.',
  alternates: { canonical: 'https://www.immovativ-invest.de/karriere' },
  openGraph: {
    title: 'Jobs bei immovativInvest – Immobilienmakler werden | immovativInvest',
    description: 'Starte deine Karriere im Immobilienbereich. Offene Stellen bei immovativInvest im Rhein-Main-Gebiet – jetzt bewerben!',
    type: 'website',
    url: 'https://www.immovativ-invest.de/karriere',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Immobilienmakler (m/w/d)',
  description: 'Als Immobilienmakler bei immovativInvest betreust du Kunden im Rhein-Main-Gebiet beim Kauf und Verkauf von Immobilien. Vollständige Einarbeitung, fixes Gehalt + Provision, Homeoffice möglich.',
  hiringOrganization: {
    '@type': 'Organization',
    name: 'immovativInvest',
    sameAs: 'https://www.immovativ-invest.de',
    logo: 'https://www.immovativ-invest.de/logo-new.png',
  },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hattsteiner Allee 51',
      addressLocality: 'Usingen',
      postalCode: '61250',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
  },
  employmentType: 'FULL_TIME',
  datePosted: '2026-01-01',
  validThrough: '2026-12-31',
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: { '@type': 'QuantitativeValue', minValue: 2500, maxValue: 6000, unitText: 'MONTH' },
  },
}

export default function KarrierePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }} />
      <KarriereClient />
    </>
  )
}
