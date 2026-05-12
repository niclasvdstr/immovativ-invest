/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import Testimonials from '@/components/Testimonials'
import KontaktFormClient from '@/components/KontaktFormClient'
import TippgeberKontaktForm from '@/components/TippgeberKontaktForm'

export const metadata: Metadata = {
  title: 'Kontakt – immovativInvest',
  description: 'Kontaktieren Sie immovativInvest direkt – per Telefon, WhatsApp oder E-Mail. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  alternates: { canonical: 'https://www.immovativ-invest.de/kontakt' },
  openGraph: {
    title: 'Kontakt – Kostenlose Immobilienbewertung anfragen | immovativInvest',
    description: 'Kontaktieren Sie immovativInvest per Telefon, WhatsApp oder E-Mail. Rückmeldung innerhalb von 24 Stunden – kostenlos & unverbindlich.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/kontakt',
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

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header
        ctaLabel="Kostenlose Immobilienbewertung"
        ctaHref="/verkaufen"
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Kontakt</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-16 md:pt-28 md:pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Rückmeldung innerhalb von 24 Stunden
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-5">
            Sprich mit uns –<br className="hidden md:block" />
            <span className="text-brand-green"> persönlich & unkompliziert.</span>
          </h1>
          <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8">
            Ob Frage, Bewertung oder erstes Gespräch – wir sind für dich da.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#formular"
              className="inline-flex items-center justify-center gap-2 btn-gradient text-white font-semibold rounded-xl px-7 py-4 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Jetzt schreiben ↓
            </a>
            <a
              href="tel:+4915129686979"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-gray-light border border-brand-gray-border text-brand-anthrazit font-semibold rounded-xl px-7 py-4 transition-colors text-sm"
            >
              <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0151 29686979
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 px-4 md:px-8 bg-brand-gray-light border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <TrustBadges variant="row" />
        </div>
      </section>

      {/* Kontaktformular + Direktkontakt */}
      <section id="formular" className="section-padding bg-brand-gray-light">
        <div className="container-max">

          {/* Unified split card */}
          <div className="rounded-3xl overflow-hidden shadow-large border border-brand-gray-border grid grid-cols-1 lg:grid-cols-2">

            {/* Links – Formular (weiß) */}
            <div className="bg-white p-10 md:p-12">
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Nachricht schreiben
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2 leading-tight">
                Schreib uns.
              </h2>
              <p className="text-brand-gray-warm text-sm mb-8">
                Wir antworten innerhalb von 24 Stunden – diskret und unverbindlich.
              </p>

              <KontaktFormClient />
            </div>

            {/* Rechts – Direktkontakt (dunkel) */}
            <div className="bg-brand-anthrazit p-10 md:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Direktkontakt
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                  Lieber direkt sprechen?
                </h2>
                <p className="text-gray-400 text-sm mb-10">
                  Niclas und Mazlum sind persönlich für dich erreichbar.
                </p>

                {/* Team */}
                <div className="flex items-center gap-4 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex -space-x-3">
                    <Image src="/hero-niclas-2.png" alt="Niclas" className="w-12 h-12 rounded-full object-cover border-2 border-brand-anthrazit shrink-0" style={{ objectPosition: 'center 15%' }} width={48} height={48} />
                    <Image src="/team-photo.png" alt="Mazlum" className="w-12 h-12 rounded-full object-cover border-2 border-brand-anthrazit shrink-0" style={{ objectPosition: 'center 20%' }} width={48} height={48} />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Niclas & Mazlum</div>
                    <div className="text-xs text-gray-400">Geschäftsführer · immovativ<span className="font-black">Invest</span></div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2.5 h-2.5 bg-brand-green rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Kontakt-Kacheln */}
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+4915129686979"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-5 py-3.5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#2563EB' }}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Jetzt anrufen</div>
                      <div className="text-gray-400 text-xs">0151 29686979</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/4915129686979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-5 py-3.5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#25D366' }}>
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">WhatsApp</div>
                      <div className="text-gray-400 text-xs">Jetzt schreiben</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@immovativ-invest.de"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl px-5 py-3.5 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#e2e8f0' }}>
                      <svg className="w-4 h-4 text-brand-anthrazit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">E-Mail</div>
                      <div className="text-gray-400 text-xs">info@immovativ-invest.de</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom trust */}
              <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">4,9 von 5 · über 100 Bewertungen · kostenlos & unverbindlich</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust-Elemente */}
      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-y border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '125+', label: 'Verkaufte Immobilien' },
              { value: '4,9 ★', label: 'Kundenbewertung' },
              { value: '24h', label: 'Rückmeldung garantiert' },
              { value: '100%', label: 'Kostenlos & unverbindlich' },
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <div className="text-3xl font-bold text-brand-green">{item.value}</div>
                <div className="text-sm text-brand-gray-warm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tippgeber */}
      <section id="tippgeber" className="section-padding" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a4a 50%, #0f2027 100%)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Links – Formular */}
            <div className="bg-brand-gray-light rounded-3xl p-8 border border-brand-gray-border">
              <h3 className="text-xl font-bold text-brand-anthrazit mb-6">Tipp einreichen</h3>
              <TippgeberKontaktForm />
            </div>

            {/* Rechts – Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-3">
                  <Image src="/niclas-portrait.png" alt="Niclas" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-soft shrink-0" style={{ objectPosition: 'center 15%' }} width={56} height={56} />
                  <Image src="/mazlum-portrait.png" alt="Mazlum" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-soft shrink-0" style={{ objectPosition: 'center 20%' }} width={56} height={56} />
                </div>
                <div>
                  <div className="font-bold text-white">Niclas & Mazlum</div>
                  <div className="text-sm text-gray-400">Geschäftsführer von immovativ<span className="font-semibold">Invest</span></div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold mb-6" style={{ backgroundColor: '#16a34a' }}>
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white">Tippgeberprovision</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Kennst du jemanden,<br />der verkaufen möchte?
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Ein Bekannter oder Kollege möchte sein Haus verkaufen? Deine Nachbarn ziehen um und verkaufen ihre Eigentumswohnung?
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Gib uns einen Tipp und erhalte als Dankeschön eine Provision von bis zu <strong className="text-white">10 %</strong> der Gesamtprovision – sobald es zum Deal kommt.
              </p>

              <ul className="space-y-4">
                {[
                  'Bis zu 10 % der Gesamtprovision für dich als Tippgeber',
                  'Schnelle Auszahlung nach Erhalt der Provision',
                  'Rückmeldung innerhalb von 24 Stunden',
                  'Vermarktung innerhalb von 6 Wochen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#16a34a' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Testimonials />

      <Footer variant="makler" />
    </main>
  )
}
