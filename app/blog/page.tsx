/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog – Immobilienthemen & Marktwissen | immovativInvest',
  description: 'Aktuelle Themen rund um Immobilien, Marktentwicklung, Verkaufstipps und Rechtliches – kompakt erklärt von immovativInvest.',
  alternates: { canonical: 'https://www.immovativ-invest.de/blog' },
  openGraph: {
    title: 'Blog – Immobilien-Ratgeber | immovativInvest',
    description: 'Tipps, Marktberichte und Expertenwissen rund um Immobilienverkauf, Bewertung und den Rhein-Main-Markt.',
    url: 'https://www.immovativ-invest.de/blog',
    siteName: 'immovativInvest',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://www.immovativ-invest.de/logo-new.png', width: 1200, height: 630 }],
  },
}

const navItems = [
  { label: 'Immobilienmakler', href: '/immobilienmakler' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.immovativ-invest.de' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.immovativ-invest.de/blog' },
            ],
          }),
        }}
      />

      <Header ctaLabel="Kostenlose Immobilienbewertung" ctaHref="/verkaufen" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Immobilienwissen auf den Punkt
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-5">
            Der immovativ<span className="font-black">Invest</span> <span className="text-brand-green">Blog.</span>
          </h1>
          <p className="text-brand-gray-warm text-lg max-w-xl mx-auto">
            Marktentwicklung, Verkaufstipps, Steuerrecht und mehr – verständlich erklärt von unseren Experten.
          </p>
        </div>
      </section>

      <BlogClient />

      <Footer variant="makler" />
    </main>
  )
}
