import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Immobilienangebote – Frankfurt & Rhein-Main | immovativInvest',
  description: 'Ausgewählte Immobilienangebote aus Frankfurt & Rhein-Main – diskret, geprüft und direkt von immovativInvest vermittelt.',
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienangebote' },
  openGraph: {
    title: 'Aktuelle Immobilienangebote Frankfurt & Rhein-Main | immovativInvest',
    description: 'Ausgewählte Immobilien in Frankfurt & Rhein-Main – diskret geprüft und direkt von immovativInvest vermittelt.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/immobilienangebote',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

export default function ImmobilienangebotePage() {
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
            <li className="text-brand-anthrazit font-medium">Immobilienangebote</li>
          </ol>
        </div>
      </nav>

      {/* Angebote Grid */}
      <section className="section-padding bg-[#f2f4f8] px-4 md:px-8 pt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              <span className="w-2 h-2 bg-brand-green rounded-full" />
              Demnächst verfügbar
            </div>
            <h1 className="text-4xl font-bold text-brand-anthrazit mb-3">Unsere Immobilienangebote.</h1>
            <p className="text-brand-gray-warm text-base max-w-lg mx-auto">
              Ausgewählte Objekte aus Frankfurt & Rhein-Main — diskret, geprüft, direkt von uns vermittelt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { type: 'Eigentumswohnung', location: 'Frankfurt · Sachsenhausen', size: 'ca. 95 m²', rooms: '3 Zimmer' },
              { type: 'Einfamilienhaus', location: 'Bad Homburg', size: 'ca. 180 m²', rooms: '5 Zimmer' },
              { type: 'Mehrfamilienhaus', location: 'Offenbach am Main', size: 'ca. 420 m²', rooms: '6 Einheiten' },
              { type: 'Eigentumswohnung', location: 'Wiesbaden · Nordost', size: 'ca. 78 m²', rooms: '2 Zimmer' },
              { type: 'Einfamilienhaus', location: 'Kronberg im Taunus', size: 'ca. 210 m²', rooms: '6 Zimmer' },
              { type: 'Kapitalanlage', location: 'Frankfurt · Bornheim', size: 'ca. 55 m²', rooms: '2 Zimmer' },
            ].map(item => (
              <div key={item.location} className="bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100">
                <div className="relative h-48 bg-gradient-to-br from-brand-cream to-brand-gray-light flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1.5 text-xs font-semibold text-brand-anthrazit shadow-soft">
                    Bald verfügbar
                  </div>
                  <svg className="w-16 h-16 text-brand-gray-border" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                </div>
                <div className="p-5">
                  <p className="text-brand-green text-xs font-bold uppercase tracking-widest mb-1">{item.type}</p>
                  <h3 className="text-brand-anthrazit font-bold text-lg mb-1">{item.location}</h3>
                  <p className="text-brand-gray-warm text-sm mb-4">
                    {item.size} <span className="mx-1.5">·</span> {item.rooms}
                  </p>
                  <div className="h-2 bg-gray-100 rounded-full w-2/3" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Suchauftrag */}
      <section id="suchauftrag" className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-5">
              🔔 Suchauftrag
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Passende Immobilie gesucht?</h2>
            <p className="text-brand-gray-warm text-sm leading-relaxed max-w-md mx-auto">
              Hinterlegen Sie Ihren Suchauftrag — wir melden uns persönlich, sobald ein passendes Objekt verfügbar ist. Kostenlos & unverbindlich.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-brand-gray-border p-8 shadow-soft text-left">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-brand-gray-border">
              <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-brand-anthrazit text-base">Ihre Suchkriterien</h3>
                <p className="text-brand-gray-warm text-xs">Wir benachrichtigen Sie direkt bei einem passenden Angebot.</p>
              </div>
            </div>

            <form className="space-y-5" action="#">
              <div>
                <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Budget</label>
                <select className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all appearance-none">
                  <option value="">Bitte auswählen</option>
                  <option>Bis 200.000 €</option>
                  <option>200.000 – 350.000 €</option>
                  <option>350.000 – 500.000 €</option>
                  <option>500.000 – 750.000 €</option>
                  <option>750.000 – 1.000.000 €</option>
                  <option>Über 1.000.000 €</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Objektart</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Wohnung', 'Haus', 'Mehrfamilienhaus', 'Egal'].map((type) => (
                    <label key={type} className="flex items-center gap-1.5 cursor-pointer border border-brand-gray-border rounded-xl px-2.5 py-2.5 hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-brand-green-50">
                      <input type="radio" name="objektart" value={type} className="accent-brand-green shrink-0" />
                      <span className="text-xs sm:text-sm text-brand-anthrazit leading-tight">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Was suchst du?</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { value: 'fix-flip', label: 'Fix & Flip', desc: 'Sanieren & verkaufen' },
                    { value: 'kapitalanlage', label: 'Kapitalanlage', desc: 'Kaufen & vermieten' },
                    { value: 'eigenbezug', label: 'Eigenbezug', desc: 'Selbst einziehen' },
                  ].map((opt) => (
                    <label key={opt.value} className="flex flex-col gap-0.5 cursor-pointer border border-brand-gray-border rounded-xl px-4 py-3 hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-brand-green-50">
                      <div className="flex items-center gap-2">
                        <input type="radio" name="kaufzweck" value={opt.value} className="accent-brand-green" />
                        <span className="text-sm font-semibold text-brand-anthrazit">{opt.label}</span>
                      </div>
                      <span className="text-xs text-brand-gray-warm pl-5">{opt.desc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Bist du schon Eigentümer/in?</label>
                <div className="flex gap-3">
                  {['Ja', 'Nein'].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer border border-brand-gray-border rounded-xl px-5 py-3 hover:border-brand-green transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-brand-green-50 flex-1 justify-center">
                      <input type="radio" name="eigentuemer" value={opt} className="accent-brand-green" />
                      <span className="text-sm text-brand-anthrazit font-medium">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Name *</label>
                  <input type="text" placeholder="Max Mustermann" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Telefon *</label>
                  <input type="tel" placeholder="+49 151 000 000" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">E-Mail *</label>
                <input type="email" placeholder="ihre@email.de" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Nachricht (optional)</label>
                <textarea rows={3} placeholder="Weitere Wünsche oder Anmerkungen..." className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none" />
              </div>

              <button
                type="submit"
                className="w-full btn-gradient text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors flex items-center justify-center gap-2"
              >
                Suchauftrag absenden →
              </button>
              <p className="text-xs text-brand-gray-warm text-center">
                Kostenlos & unverbindlich. Keine versteckten Kosten.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
