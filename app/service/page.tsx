/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Unsere Services – Immobilien, Finanzierung & Beratung | immovativInvest',
  description: 'Von der Immobilienvermittlung über Finanzierung bis zur Beratung in besonderen Situationen — entdecken Sie alle Leistungen von immovativInvest.',
  alternates: { canonical: 'https://www.immovativ-invest.de/service' },
  openGraph: {
    title: 'Leistungen – Immobilienmakler Frankfurt Rhein-Main | immovativInvest',
    description: 'Alle Leistungen von immovativInvest: Immobilienvermittlung, Finanzierung, Beratung & mehr im Rhein-Main-Gebiet.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/service',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const services = [
  {
    icon: '🏡',
    title: 'Immobilienangebote',
    description: 'Aktuelle Immobilien im Rhein-Main-Gebiet — von der Eigentumswohnung bis zum Mehrfamilienhaus. Unser Portfolio wächst stetig durch unser starkes Netzwerk.',
    href: '/immobilienangebote',
    cta: 'Angebote ansehen',
  },
  {
    icon: '💰',
    title: 'Finanzierung',
    description: 'Durch unser Netzwerk aus erfahrenen Finanzierungsberatern und direkten Bankkontakten helfen wir dir, die passende Finanzierung schnell und unkompliziert auf die Beine zu stellen.',
    href: '/finanzierung',
    cta: 'Mehr erfahren',
  },
  {
    icon: '💬',
    title: 'Kostenlose Beratung',
    description: 'Ob Hausverkauf, Immobilienkauf oder Finanzierungsfragen — wir stehen für ein kostenloses, unverbindliches Gespräch zur Verfügung. Persönlich, ehrlich und ohne versteckte Agenda.',
    href: '/beratung',
    cta: 'Beratung anfragen',
  },
  {
    icon: '⚖️',
    title: 'Erbschaft',
    description: 'Eine geerbte Immobilie bringt viele Fragen mit sich. Wir begleiten dich diskret und einfühlsam — von der Marktbewertung über die Abstimmung mit Erbengemeinschaften bis zum Verkauf.',
    href: '/erbschaft',
    cta: 'Mehr erfahren',
  },
  {
    icon: '🔨',
    title: 'Zwangsversteigerungen',
    description: 'Ob als Betroffener oder als Kaufinteressent — wir kennen den Markt für Zwangsversteigerungen und begleiten dich mit Erfahrung, Überblick und dem nötigen Gespür für Chancen.',
    href: '/zwangsversteigerungen',
    cta: 'Mehr erfahren',
  },
  {
    icon: '💔',
    title: 'Scheidung',
    description: 'Eine Trennung ist emotional belastend genug. Wir übernehmen die Immobilienfrage — neutral gegenüber beiden Parteien, diskret nach außen und mit dem Ziel einer fairen Lösung.',
    href: '/scheidung',
    cta: 'Mehr erfahren',
  },
]

export default function ServicePage() {
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
              { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://www.immovativ-invest.de/service' },
            ],
          }),
        }}
      />
      <Header ctaLabel="Kostenlose Beratung" ctaHref="/beratung" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Leistungen</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-3xl mx-auto relative text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              ✦ Unsere Leistungen
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Alles aus einer Hand.<br />
              <span className="text-brand-green">Für jede Situation.</span>
            </h1>
            <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg leading-relaxed">
              Von der Immobilienvermittlung über Finanzierung bis zur Beratung in besonderen Lebenslagen — wir sind dein Partner in allen Immobilienfragen.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* Services Grid */}
      <section className="section-padding px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimateIn key={service.href} direction="up" delay={index * 100} className="flex flex-col">
              <div className="bg-brand-cream rounded-3xl p-8 border border-brand-gray-border hover:shadow-medium transition-all duration-200 flex flex-col flex-1">
                <div className="text-4xl mb-5">{service.icon}</div>
                <h2 className="text-xl font-bold text-brand-anthrazit mb-3">{service.title}</h2>
                <p className="text-brand-gray-warm text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm hover:gap-3 transition-all duration-200 group"
                >
                  {service.cta}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimateIn direction="up">
          <div className="bg-brand-cream border border-brand-gray-border rounded-3xl px-8 py-12 md:px-16 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="text-3xl mb-3">💬</div>
              <h2 className="text-2xl font-bold text-brand-anthrazit mb-2">Nicht sicher, was du brauchst?</h2>
              <p className="text-brand-gray-warm text-sm leading-relaxed">
                Kein Problem. Meld dich einfach — wir finden gemeinsam heraus, wie wir dir am besten helfen können.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/beratung"
                className="inline-flex items-center gap-2 btn-gradient text-white font-semibold rounded-xl px-5 py-3 sm:px-7 sm:py-3.5 transition-colors"
              >
                Kostenlose Erstberatung →
              </Link>
            </div>
          </div>
          </AnimateIn>
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
