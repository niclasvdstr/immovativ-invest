/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import Wertrechner from '@/components/Wertrechner'

export const metadata: Metadata = {
  title: 'Kostenlose Immobilienbewertung – Marktpreis ermitteln | immovativInvest',
  description: 'Erhalten Sie eine kostenlose, fundierte Immobilienbewertung von immovativInvest. Marktgerechter Verkaufspreis, regionale Expertise, persönliche Beratung – unverbindlich und diskret.',
  alternates: { canonical: 'https://www.immovativ-invest.de/verkaufen' },
  openGraph: {
    title: 'Immobilie verkaufen Frankfurt – Kostenlose Bewertung | immovativInvest',
    description: 'Immobilie in Frankfurt verkaufen? Jetzt kostenlose Immobilienbewertung anfordern – marktgerecht, persönlich & unverbindlich.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/verkaufen',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const navItems = [
  { label: 'Immobilienmakler', href: '/immobilienmakler' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

export default function ImmobilienbewertungPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Immobilie verkaufen', item: 'https://www.immovativ-invest.de/verkaufen' },
            ],
          }),
        }}
      />
      <Header
        ctaLabel="Kostenlose Immobilienbewertung"
        ctaHref="#kontakt"
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Immobilie verkaufen</li>
          </ol>
        </div>
      </nav>

      {/* Hero – Wertrechner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-16 pb-20 md:pt-24 md:pb-28 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-5xl mx-auto relative">

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-5">
              <span style={{ color: '#ffa61c' }}>★★★★★</span>
              <span>4,9 von 5 · über 100 Bewertungen · 100% kostenlos</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-4 whitespace-nowrap">
              Was ist deine Immobilie <span className="text-brand-green">wert?</span>
            </h1>
            <p className="text-brand-gray-warm text-lg max-w-xl mx-auto">
              Erhalte deine unverbindliche Wertspanne in 2 Minuten – kostenlos, diskret und ohne Verpflichtung.
            </p>
          </div>

          <Wertrechner />

          <p className="text-center text-xs text-brand-gray-warm mt-5">
            🔒 Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 px-4 md:px-8 bg-brand-gray-light border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <TrustBadges variant="row" />
        </div>
      </section>

      {/* 3 Trust-Punkte */}
      <section className="py-14 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: '🔒',
                title: 'Diskret & vertraulich',
                desc: 'Deine Daten und Unterlagen werden vertraulich behandelt. Keine Weitergabe an Dritte.',
              },
              {
                icon: '⚡',
                title: 'Rückmeldung in 24h',
                desc: 'Nach deiner Anfrage melden wir uns innerhalb von 24 Stunden persönlich bei dir.',
              },
              {
                icon: '🤝',
                title: 'Kostenlos & unverbindlich',
                desc: 'Die Bewertung ist vollständig kostenlos und verpflichtet dich zu absolut nichts.',
              },
            ].map(item => (
              <div key={item.title} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-brand-green-50 rounded-2xl flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-brand-anthrazit">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direktkontakt – Niclas */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">

          {/* Headline */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Persönlicher Kontakt
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
              Lieber direkt sprechen?
            </h2>
            <p className="text-brand-gray-warm text-lg mx-auto whitespace-nowrap">
              Wir stehen dir persönlich zur Verfügung – per Anruf, WhatsApp oder E-Mail.
            </p>
          </div>

          {/* Card */}
          <div className="bg-brand-gray-light border border-brand-gray-border rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-10">

              {/* Foto + Badge */}
              <div className="relative shrink-0">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden ring-4 ring-brand-green/30">
                  <Image
                    src="/niclas-hochhaus.png"
                    alt="Niclas van der Straeten"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 12%' }}
                    width={208}
                    height={208}
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  ✓ Verfügbar
                </div>
              </div>

              {/* Info + Buttons */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-brand-anthrazit mb-1">Niclas van der Straeten</h3>
                <p className="text-brand-gray-warm text-sm mb-8">Immobilienmakler · immovativ<span className="font-black">Invest</span> · Rhein-Main-Gebiet</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+4915129686979"
                    className="flex items-center gap-3 bg-white hover:bg-brand-gray-light border border-brand-gray-border rounded-xl px-5 py-3.5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#2563EB' }}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-brand-anthrazit font-semibold text-sm">Anrufen</div>
                      <div className="text-brand-gray-warm text-xs">0151 29686979</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/4915129686979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white hover:bg-brand-gray-light border border-brand-gray-border rounded-xl px-5 py-3.5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#25D366' }}>
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-brand-anthrazit font-semibold text-sm">WhatsApp</div>
                      <div className="text-brand-gray-warm text-xs">Jetzt schreiben</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@immovativ-invest.de"
                    className="flex items-center gap-3 bg-white hover:bg-brand-gray-light border border-brand-gray-border rounded-xl px-5 py-3.5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#e2e8f0' }}>
                      <svg className="w-4 h-4 text-brand-anthrazit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-brand-anthrazit font-semibold text-sm">E-Mail</div>
                      <div className="text-brand-gray-warm text-xs">info@immovativ-invest.de</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
