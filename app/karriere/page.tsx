import type { Metadata } from 'next'
import KarriereClient from './KarriereClient'

export const metadata: Metadata = {
  title: 'Karriere – Jobs & Ausbildung | immovativInvest',
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

export default function KarrierePage() {
  return <KarriereClient />
}
