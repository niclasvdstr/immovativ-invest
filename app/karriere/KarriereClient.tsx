'use client'
/* eslint-disable react/no-unescaped-entities */
import AnimateIn from '@/components/AnimateIn'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const positions = [
  {
    id: 'azubi',
    icon: '🎓',
    title: 'Ausbildung Immobilienkaufmann/-frau',
    type: 'Ausbildung',
    desc: 'Starte deine Karriere in der Immobilienbranche. Du lernst alles rund um Vermittlung, Beratung und Vermarktung — direkt am Markt, nicht nur aus Büchern.',
    tags: ['Vollzeit', 'Frankfurt', 'Ab Herbst'],
  },
  {
    id: 'backoffice',
    icon: '📋',
    title: 'Backoffice & Assistenz',
    type: 'Festanstellung',
    desc: 'Du sorgst dafür, dass im Hintergrund alles läuft: Terminkoordination, Kundenkommunikation, Dokumentenmanagement und Unterstützung des Maklerteams.',
    tags: ['Vollzeit / Teilzeit', 'Frankfurt', 'Ab sofort'],
  },
  {
    id: 'verkauf',
    icon: '🏡',
    title: 'Immobilienmakler (m/w/d)',
    type: 'Festanstellung',
    desc: 'Du berätst Käufer und Verkäufer, begleitest Transaktionen von der Bewertung bis zum Notartermin und baust dir deinen eigenen Kundenstamm auf.',
    tags: ['Vollzeit', 'Rhein-Main', 'Ab sofort'],
  },
  {
    id: 'akquisiteur',
    icon: '🤝',
    title: 'Akquisiteur / Vertrieb',
    type: 'Festanstellung',
    desc: 'Du gewinnst neue Aufträge und Eigentümer für unser Portfolio — über Netzwerk, Kaltakquise und gezielte Ansprache. Ergebnisse zählen, nicht Anwesenheit.',
    tags: ['Vollzeit', 'Rhein-Main', 'Ab sofort'],
  },
  {
    id: 'it',
    icon: '💻',
    title: 'IT / Web-Entwicklung',
    type: 'Freelance / Festanstellung',
    desc: 'Du entwickelst und pflegst unsere digitale Infrastruktur — von der Website bis zu internen Tools. Stack: Next.js, Tailwind, moderne Web-Technologien.',
    tags: ['Remote möglich', 'Flexibel', 'Nach Absprache'],
  },
  {
    id: 'socialmedia',
    icon: '📱',
    title: 'Social Media & Content',
    type: 'Freelance / Festanstellung',
    desc: 'Du verantwortest unsere Präsenz auf Instagram, LinkedIn & Co. — von der Content-Strategie über Reels bis zu Community Management. Kreativität trifft Immobilien.',
    tags: ['Remote möglich', 'Flexibel', 'Nach Absprache'],
  },
]

export default function KarriereClient() {
  const [selected, setSelected] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Header ctaLabel="Jetzt bewerben" ctaHref="#bewerbung" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Karriere</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              🚀 Karriere bei immovativInvest
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Werde Teil<br />
              <span className="text-brand-green">unseres Teams.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-8">
              Wir wachsen — und suchen Menschen, die mit uns wachsen wollen. Ob Ausbildung, Quereinstieg oder Profi: Bei uns zählen Haltung, Einsatz und echte Ergebnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <a href="#stellen" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                Offene Stellen ansehen →
              </a>
              <a href="#bewerbung" className="inline-flex items-center justify-center gap-2 bg-white border border-brand-gray-border text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-cream transition-colors">
                Direkt bewerben
              </a>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Warum wir */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Warum immovativ<span className="font-black">Invest</span>?</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto">
              Wir sind kein Konzern. Wir sind ein Team, das liefert — und das erwartet auch von seinen Leuten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📈', title: 'Echte Entwicklung', desc: 'Kein Stillstand. Bei uns lernst du schnell, übernimmst früh Verantwortung und siehst direkt, was deine Arbeit bewirkt.' },
              { icon: '🤝', title: 'Kleines Team, großer Impact', desc: 'Kurze Wege, direkte Kommunikation, keine Konzernpolitik. Du wirst gehört und machst den Unterschied.' },
              { icon: '🏙️', title: 'Zukunftsbranche', desc: 'Immobilien bleiben relevant — und wir positionieren uns genau dort, wo die Branche sich hinbewegt: digital, direkt, datengetrieben.' },
              { icon: '💰', title: 'Leistung wird belohnt', desc: 'Faire Vergütung, Provision wo es passt, und Bonusmodelle für die, die liefern. Wir wissen, was gute Arbeit wert ist.' },
              { icon: '🎯', title: 'Klare Ziele', desc: 'Wir reden nicht um den heißen Brei. Du weißt, was von dir erwartet wird — und wir liefern, was wir versprechen.' },
              { icon: '🌍', title: 'Flexibilität', desc: 'Remote, hybrid, vor Ort — je nach Position. Wir vertrauen unseren Leuten und messen Ergebnisse, keine Stunden.' },
            ].map(item => (
              <div key={item.title} className="bg-brand-cream rounded-2xl p-6 border border-brand-gray-border">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit mb-2">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offene Stellen */}
      <section id="stellen" className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              📌 Offene Positionen
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Was wir suchen.</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto">
              Keine passende Stelle dabei? Schick uns trotzdem deine Initiativbewerbung — wir wachsen schnell.
            </p>
            </div>
          </AnimateIn>
          <div className="space-y-4">
            {positions.map(pos => (
              <div key={pos.id} className="bg-white rounded-2xl p-6 border border-brand-gray-border hover:shadow-medium transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="text-3xl shrink-0">{pos.icon}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-brand-anthrazit text-lg">{pos.title}</h3>
                      <span className="bg-brand-green/10 text-brand-green text-xs font-semibold px-3 py-1 rounded-full">{pos.type}</span>
                    </div>
                    <p className="text-brand-gray-warm text-sm leading-relaxed mb-3">{pos.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {pos.tags.map(tag => (
                        <span key={tag} className="bg-brand-cream text-brand-anthrazit text-xs font-medium px-3 py-1 rounded-full border border-brand-gray-border">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#bewerbung"
                    onClick={() => setSelected(pos.id)}
                    className="shrink-0 inline-flex items-center gap-2 bg-brand-anthrazit text-white font-semibold rounded-xl px-5 py-2.5 text-sm hover:bg-brand-green transition-colors"
                  >
                    Bewerben
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bewerbungsformular */}
      <section id="bewerbung" className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              ✉️ Bewerbung
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Jetzt bewerben</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-md md:mx-auto">
              Füll das Formular aus — wir melden uns innerhalb von 48 Stunden persönlich bei dir.
            </p>
            </div>
          </AnimateIn>

          {submitted ? (
            <div className="bg-brand-cream rounded-3xl p-12 border border-brand-gray-border text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-brand-anthrazit mb-3">Bewerbung erhalten!</h3>
              <p className="text-brand-gray-warm text-sm leading-relaxed">
                Vielen Dank für dein Interesse. Wir melden uns innerhalb von 48 Stunden bei dir.
              </p>
            </div>
          ) : (
            <div className="bg-brand-cream rounded-3xl border border-brand-gray-border p-8">
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                {/* Position */}
                <div>
                  <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Gewünschte Position *</label>
                  <select
                    required
                    value={selected}
                    onChange={e => setSelected(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Bitte auswählen</option>
                    {positions.map(p => (
                      <option key={p.id} value={p.id}>{p.title}</option>
                    ))}
                    <option value="initiativ">Initiativbewerbung</option>
                  </select>
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Vorname *</label>
                    <input required type="text" placeholder="Max" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Nachname *</label>
                    <input required type="text" placeholder="Mustermann" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Kontakt */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">E-Mail *</label>
                    <input required type="email" placeholder="max@email.de" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Telefon *</label>
                    <input required type="tel" placeholder="+49 151 000 000" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Erfahrung */}
                <div>
                  <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Erfahrung / Hintergrund</label>
                  <textarea rows={4} placeholder="Erzähl uns kurz von dir — Ausbildung, Berufserfahrung, was dich antreibt..." className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none" />
                </div>

                {/* Verfügbarkeit */}
                <div>
                  <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Frühestmöglicher Starttermin</label>
                  <input type="text" placeholder="z. B. sofort, September 2025 ..." className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
                </div>

                <button
                  type="submit"
                  className="block mx-auto bg-brand-green text-white font-semibold rounded-xl px-10 py-3.5 text-sm hover:bg-brand-green-dark transition-colors"
                >
                  Bewerbung absenden →
                </button>
                <p className="text-xs text-brand-gray-warm text-center">
                  Wir melden uns innerhalb von 48 Stunden. Diskret & vertraulich.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
