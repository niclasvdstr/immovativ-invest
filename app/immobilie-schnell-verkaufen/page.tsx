/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import AnimateIn from '@/components/AnimateIn'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Immobilie schnell verkaufen Frankfurt 2025 – In 4–6 Wochen | immovativInvest',
  description: 'Immobilie schnell verkaufen in Frankfurt? So geht es in 4–6 Wochen: die richtigen Schritte, welche Faktoren Geschwindigkeit bestimmen und wann ein Direktankauf sinnvoll ist.',
  keywords: ['Immobilie schnell verkaufen Frankfurt', 'Haus schnell verkaufen', 'schnell verkaufen Makler', 'Wohnung schnell verkaufen Frankfurt', 'Direktankauf Frankfurt'],
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilie-schnell-verkaufen' },
  openGraph: {
    title: 'Immobilie schnell verkaufen Frankfurt 2025 – In 4–6 Wochen',
    description: 'Wie verkauft man eine Immobilie schnell in Frankfurt? Die wichtigsten Faktoren, den richtigen Preis, Direktankauf vs. Maklerverkauf — komplett erklärt.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/immobilie-schnell-verkaufen',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Immobilie schnell verkaufen Frankfurt – immovativInvest' }],
  },
}

const faqItems = [
  {
    question: 'Wie schnell kann ich meine Immobilie in Frankfurt verkaufen?',
    answer: 'Bei professioneller Vermarktung dauert es in Frankfurt typischerweise 4–8 Wochen vom Erstgespräch bis zum unterschriebenen Kaufvertrag. Hinzu kommen 4–8 Wochen für die notarielle Abwicklung. In sehr gefragten Lagen (Sachsenhausen, Westend, Bornheim) geht es oft deutlich schneller.',
  },
  {
    question: 'Was ist der schnellste Weg, eine Immobilie zu verkaufen?',
    answer: 'Der schnellste Weg ist ein Direktankauf durch einen Investor oder ein Immobilienunternehmen — ohne öffentliche Vermarktung, oft innerhalb von 2–4 Wochen. Der Preisnachlass beträgt meist 10–20 % unter Marktwert. Für die meisten Verkäufer ist der Maklerverkauf die bessere Wahl: schnell und zum Bestpreis.',
  },
  {
    question: 'Wie setze ich den richtigen Preis für einen schnellen Verkauf?',
    answer: 'Der Schlüssel: Marktkonforme Preisfindung von Anfang an. Eine Überbewertung verzögert den Verkauf drastisch — Immobilien, die lange im Markt sind, gelten als "Ladenhüter" und werden mit Misstrauen betrachtet. Ein realistischer Preis erzeugt Dynamik und oft mehrere Interessenten gleichzeitig, was zu Verhandlungen über den Angebotspreis führen kann.',
  },
  {
    question: 'Welche Unterlagen brauche ich für einen schnellen Verkauf?',
    answer: 'Grundbuchauszug, aktueller Energieausweis, Grundrisse, Bau- und Bebauungspläne, Betriebskostenabrechnung (bei WEG), Mietvertrag (falls vermietet) und Wohnflächenberechnung. Wer diese Unterlagen bereits vollständig vorliegen hat, spart 1–3 Wochen im Vermarktungsprozess.',
  },
  {
    question: 'Kann ich meine Immobilie schnell verkaufen, ohne am Preis nachzugeben?',
    answer: 'Ja, das ist möglich — wenn der Angebotspreis von Anfang an marktgerecht ist. Ein guter Makler mit aktivem Käufernetzwerk kann vorqualifizierte Interessenten direkt ansprechen und innerhalb weniger Tage Besichtigungen organisieren. In gefragten Lagen entstehen oft mehrere konkurrierende Angebote.',
  },
  {
    question: 'Wann ist ein Direktankauf sinnvoll?',
    answer: 'Wenn Geschwindigkeit und Diskretion Vorrang vor dem Preis haben: z.B. bei Scheidung, Erbschaft, Liquiditätsbedarf oder wenn die Immobilie sanierungsbedürftig ist. Direktankäufer zahlen 10–20 % unter Marktwert — dafür geht es oft innerhalb von 2 Wochen.',
  },
]

export default function ImmobilieSchnellVerkaufenPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.immovativ-invest.de' },
                  { '@type': 'ListItem', position: 2, name: 'Immobilie schnell verkaufen', item: 'https://www.immovativ-invest.de/immobilie-schnell-verkaufen' },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqItems.map(item => ({
                  '@type': 'Question',
                  name: item.question,
                  acceptedAnswer: { '@type': 'Answer', text: item.answer },
                })),
              },
            ],
          }),
        }}
      />
      <Header ctaLabel="Schnell verkaufen starten" ctaHref="#kontakt" />

      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Immobilie schnell verkaufen</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              ⚡ Schnell verkaufen
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Immobilie schnell verkaufen<br />
              <span className="text-brand-green">in Frankfurt — so geht es.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-4">
              4–6 Wochen bis zum unterschriebenen Kaufvertrag — das ist mit dem richtigen Makler in Frankfurt realistisch. Hier findest du die konkrete Strategie, alle wichtigen Schritte und wann ein Direktankauf die bessere Alternative ist.
            </p>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto mb-8">
              Der häufigste Fehler beim schnellen Verkauf: Ein zu hoher Angebotspreis. Er kostet am Ende mehr Zeit als er spart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                Jetzt schnell verkaufen starten →
              </Link>
              <CTAButton href="/ankauf" variant="outline" size="md">
                Direktankauf anfragen →
              </CTAButton>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Quick Answer */}
      <section className="px-4 md:px-8 py-10 bg-brand-green/5 border-y border-brand-green/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-brand-green/30 p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <div className="shrink-0 bg-brand-green/10 rounded-xl p-3">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">Kurze Antwort</p>
                <p className="text-brand-anthrazit font-medium leading-relaxed">
                  Eine Immobilie in Frankfurt lässt sich mit einem professionellen Makler in 4–8 Wochen bis zum Kaufvertrag verkaufen. Der wichtigste Hebel: ein marktkonformer Angebotspreis von Anfang an. Wer zu hoch ansetzt, verliert oft Monate. Wer maximale Geschwindigkeit braucht (z.B. bei Erbschaft, Scheidung, Liquiditätsbedarf), kann über einen Direktankauf nachdenken — mit Preisabschlägen von 10–20 %.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phasen */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                📅 Der Zeitplan
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">So läuft ein schneller Immobilienverkauf ab.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Von der ersten Bewertung bis zur Schlüsselübergabe — realistisch und transparent.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  phase: 'Woche 1',
                  titel: 'Bewertung & Vorbereitung',
                  dauer: '3–5 Tage',
                  schritte: [
                    'Erstgespräch vor Ort und Besichtigung der Immobilie',
                    'Professionelle Wertermittlung auf Basis aktueller Vergleichsverkäufe',
                    'Beschaffung aller fehlenden Unterlagen (Grundbuchauszug, Energieausweis etc.)',
                    'Professionelle Fotografie und Grundrissaufbereitung',
                    'Erstellung des Exposés und Freigabe durch den Eigentümer',
                  ],
                  icon: '📊',
                  color: 'bg-blue-50 border-blue-200',
                },
                {
                  phase: 'Woche 1–3',
                  titel: 'Aktive Vermarktung',
                  dauer: '7–21 Tage',
                  schritte: [
                    'Veröffentlichung auf Immoscout24, Immowelt und weiteren Portalen',
                    'Direkte Ansprache vorqualifizierter Interessenten aus dem Käufernetzwerk',
                    'Koordination und Durchführung aller Besichtigungstermine',
                    'Interessenten-Qualifizierung: Finanzierungsnachweis und Kaufabsicht prüfen',
                    'Wöchentliche Statusberichte an den Verkäufer',
                  ],
                  icon: '🚀',
                  color: 'bg-green-50 border-green-200',
                },
                {
                  phase: 'Woche 3–5',
                  titel: 'Verhandlung & Abschluss',
                  dauer: '7–14 Tage',
                  schritte: [
                    'Preisverhandlung mit den besten Kaufinteressenten',
                    'Koordination mit dem Wunschnotar des Käufers oder Verkäufers',
                    'Vorbereitung aller Unterlagen für den Kaufvertragsentwurf',
                    'Abstimmung des Kaufvertragsentwurfs mit beiden Parteien',
                    'Notartermin und Unterzeichnung des Kaufvertrags',
                  ],
                  icon: '✍️',
                  color: 'bg-orange-50 border-orange-200',
                },
                {
                  phase: 'Woche 5–13',
                  titel: 'Notarielle Abwicklung',
                  dauer: '4–8 Wochen',
                  schritte: [
                    'Auflassungsvormerkung wird ins Grundbuch eingetragen',
                    'Käufer zahlt Grunderwerbsteuer (6 % in Hessen)',
                    'Kaufpreis wird auf Notaranderkonto oder direkt überwiesen',
                    'Eigentumsübertragung im Grundbuch',
                    'Schlüsselübergabe und Abschluss',
                  ],
                  icon: '🏛️',
                  color: 'bg-purple-50 border-purple-200',
                },
              ].map((item) => (
                <div key={item.phase} className={`rounded-2xl border p-6 ${item.color}`}>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="shrink-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <span className="text-xs font-bold text-brand-gray-warm uppercase tracking-wider">{item.phase}</span>
                          <h3 className="font-bold text-brand-anthrazit">{item.titel}</h3>
                        </div>
                      </div>
                      <span className="text-xs bg-white border border-brand-gray-border rounded-full px-3 py-1 font-medium text-brand-anthrazit">{item.dauer}</span>
                    </div>
                    <ul className="space-y-2 md:ml-4">
                      {item.schritte.map((schritt) => (
                        <li key={schritt} className="flex gap-2 items-start text-sm text-brand-gray-warm">
                          <span className="text-brand-green font-bold shrink-0 mt-0.5">✓</span>
                          {schritt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Geschwindigkeitsfaktoren */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was die Verkaufsgeschwindigkeit wirklich bestimmt.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Diese Faktoren entscheiden, ob deine Immobilie in 3 Wochen oder 6 Monaten verkauft ist.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { faktor: 'Angebotspreis', einfluss: 'Sehr hoch', erkl: 'Der Preisfaktor Nummer 1. Ein marktkonformer Preis erzeugt sofort Nachfrage. Eine Überbewertung um 10 % kann die Vermarktungsdauer verdreifachen — und am Ende zu einem niedrigeren Endpreis führen.', icon: '📊', farbe: 'text-red-500' },
                { faktor: 'Vermarktungsqualität', einfluss: 'Hoch', erkl: 'Professionelle Fotos, ein überzeugendes Exposé und die Platzierung auf den richtigen Portalen entscheiden, wie viele und wie schnell Interessenten reagieren.', icon: '📸', farbe: 'text-orange-500' },
                { faktor: 'Makler-Netzwerk', einfluss: 'Hoch', erkl: 'Ein Makler mit einer Liste vorqualifizierter Käufer kann noch vor Portalveröffentlichung Besichtigungen organisieren. Das ist der stärkste Hebel für Geschwindigkeit.', icon: '🤝', farbe: 'text-orange-500' },
                { faktor: 'Vollständige Unterlagen', einfluss: 'Mittel', erkl: 'Fehlende Unterlagen verzögern jeden Schritt: Exposé-Erstellung, Notartermin und Kaufvertrag. Wer alles parat hat, spart 2–4 Wochen.', icon: '📋', farbe: 'text-yellow-500' },
                { faktor: 'Lage der Immobilie', einfluss: 'Hoch', erkl: 'In Sachsenhausen, Westend oder Bornheim gibt es mehr Nachfrage als Angebot — Immobilien werden hier oft in Tagen besichtigt. In Randlagen kann es länger dauern.', icon: '📍', farbe: 'text-orange-500' },
                { faktor: 'Zustand der Immobilie', einfluss: 'Mittel', erkl: 'Renovierungsbedürftige Objekte brauchen oft mehr Zeit, weil Käufer Unsicherheit über Sanierungskosten haben. Kleine Aufwertungen (Schönheitsreparaturen, Staging) können die Vermarktungszeit deutlich reduzieren.', icon: '🏠', farbe: 'text-yellow-500' },
                { faktor: 'Jahreszeit', einfluss: 'Niedrig bis mittel', erkl: 'Frühling (März–Mai) und Herbst (September–Oktober) sind die aktivsten Zeiten auf dem Immobilienmarkt. Im Sommer und rund um Weihnachten ist die Nachfrage etwas geringer.', icon: '📅', farbe: 'text-blue-500' },
                { faktor: 'Flexibilität bei Übergabe', einfluss: 'Mittel', erkl: 'Wer einen flexiblen Übergabetermin anbieten kann, spricht mehr Käufer an — besonders Familien mit Schulkindern oder Menschen in laufenden Mietverhältnissen.', icon: '🗝️', farbe: 'text-yellow-500' },
              ].map((item) => (
                <div key={item.faktor} className="bg-white rounded-2xl border border-brand-gray-border p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-2 items-center">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="font-bold text-brand-anthrazit">{item.faktor}</h3>
                    </div>
                    <span className={`text-xs font-bold ${item.farbe} bg-opacity-10 rounded-full px-2.5 py-1 border border-current/20`}>Einfluss: {item.einfluss}</span>
                  </div>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{item.erkl}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Maklerverkauf vs Direktankauf */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Maklerverkauf oder Direktankauf — was passt zu dir?</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Beide Wege führen zum Ziel — aber mit sehr unterschiedlichen Ergebnissen.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Kriterium</th>
                    <th className="text-center px-5 py-4 font-semibold text-brand-champagne">Maklerverkauf</th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Direktankauf</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Geschwindigkeit', '✅ 4–8 Wochen bis Vertrag', '⚡ 1–3 Wochen'],
                    ['Erzielbarer Preis', '✅ Voller Marktwert oder mehr', '⚠️ 80–90 % des Marktwerts'],
                    ['Vermarktungsaufwand', '✅ Vollständig übernommen', '✅ Keine Vermarktung nötig'],
                    ['Besichtigungen', '✅ Professionell koordiniert', '✅ Keine Besichtigungen'],
                    ['Unsicherheit', '⚠️ Geringe Unsicherheit', '✅ Sehr sicher, Angebot fix'],
                    ['Für wen geeignet?', 'Alle Immobilien in Frankfurt', 'Erbschaft, Scheidung, Liquiditätsbedarf'],
                  ].map(([label, makler, direkt], idx) => (
                    <tr key={label} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-medium text-brand-anthrazit">{label}</td>
                      <td className="px-5 py-3.5 text-center">{makler}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{direkt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="#kontakt" className="flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-4 hover:bg-brand-green-dark transition-colors text-center">
                Maklerverkauf starten →
              </Link>
              <Link href="/ankauf" className="flex items-center justify-center gap-2 bg-brand-anthrazit text-white font-semibold rounded-xl px-7 py-4 hover:bg-brand-anthrazit/90 transition-colors text-center">
                Direktankauf anfragen →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Top-Fehler */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                ⚠️ Häufige Fehler
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Die 5 häufigsten Fehler beim schnellen Immobilienverkauf.</h2>
            </div>
            <div className="space-y-4">
              {[
                { nr: '1', titel: 'Den Angebotspreis zu hoch ansetzen', fehler: 'Viele Eigentümer überschätzen den Wert ihrer Immobilie — aus emotionalen Gründen oder weil sie sich an veralteten Preisen orientieren. Eine Immobilie, die zu teuer angeboten wird, bleibt lange im Markt und verliert dabei an Attraktivität. Am Ende wird sie oft mit Preisreduktionen verkauft — unterhalb des Werts, den sie von Anfang an hätte haben können.' },
                { nr: '2', titel: 'Schlechte oder fehlende Fotos verwenden', fehler: 'In einer Welt, in der Kaufentscheidungen im Internet beginnen, sind Fotos der erste Eindruck — und der entscheidende. Schlechte Smartphones-Fotos mit ungünstiger Beleuchtung und unaufgeräumten Räumen schrecken ab. Professionelle Fotografie ist keine Ausgabe, sondern eine Investition in Anfragenqualität und -quantität.' },
                { nr: '3', titel: 'Fehlende Unterlagen beim Notartermin', fehler: 'Wer zum Notartermin kommt und fehlende Unterlagen nachreichen muss, verzögert den Abschluss um Wochen. Das passiert häufiger als erwartet: fehlender Energieausweis, veralteter Grundbuchauszug, fehlende Teilungserklärung bei Eigentumswohnungen. Frühzeitig zusammenstellen spart wertvolle Zeit.' },
                { nr: '4', titel: 'Jeden Interessenten einlassen — ohne Qualifizierung', fehler: 'Nicht jeder, der eine Besichtigung vereinbart, hat echtes Kaufinteresse oder eine gesicherte Finanzierung. Qualifizierungsschritte (Finanzierungsnachweis, Auskunft über aktuelle Wohnsituation) reduzieren den Aufwand und vermeiden geplatzte Deals nach dem Notartermin.' },
                { nr: '5', titel: 'Emotional verhandeln statt sachlich', fehler: 'Wer selbst in der Immobilie gelebt hat, hat eine emotionale Bindung — und verhandelt deshalb schlechter. Käufer nutzen das. Ein Makler als neutraler Verhandlungsführer kann sachlich argumentieren, Gegenangebote bewerten und Deals abschließen, die Eigentümer im Direktgespräch nicht erreichen würden.' },
              ].map((item) => (
                <div key={item.nr} className="bg-white rounded-2xl border border-brand-gray-border p-6 flex gap-5">
                  <div className="shrink-0 w-10 h-10 bg-red-100 border border-red-200 rounded-xl flex items-center justify-center text-red-600 font-bold">{item.nr}</div>
                  <div>
                    <h3 className="font-bold text-brand-anthrazit mb-2">{item.titel}</h3>
                    <p className="text-brand-gray-warm text-sm leading-relaxed">{item.fehler}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Du willst schnell und zum Bestpreis verkaufen?</h2>
            <p className="text-white/70 text-sm">Erstgespräch vor Ort — kostenlos, ohne Verpflichtung, mit konkreter Strategie.</p>
          </div>
          <Link href="#kontakt" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Jetzt starten →
          </Link>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Häufige Fragen: Immobilie schnell verkaufen."
      />

      <ContactForm
        variant="makler"
        title="Schnell starten — kostenlos beraten lassen."
        subtitle="Wir kommen zu dir, bewerten die Immobilie und entwickeln gemeinsam die schnellste Strategie."
      />

      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-brand-anthrazit mb-6">Weitere nützliche Seiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/ankauf', label: 'Direktankauf', icon: '⚡' },
              { href: '/makler-oder-privatverkauf', label: 'Makler oder Privatverkauf?', icon: '⚖️' },
              { href: '/immobilienbewertung', label: 'Kostenlose Bewertung', icon: '📊' },
              { href: '/verkaufen', label: 'Immobilie verkaufen', icon: '🏠' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="flex items-center gap-3 bg-white border border-brand-gray-border rounded-xl px-4 py-3.5 text-sm font-medium text-brand-anthrazit hover:border-brand-green/40 hover:text-brand-green transition-all">
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
