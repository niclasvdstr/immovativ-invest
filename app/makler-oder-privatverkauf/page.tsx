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
  title: 'Makler oder Privatverkauf? Ehrlicher Vergleich 2025',
  description: 'Makler beauftragen oder selbst verkaufen? Wir vergleichen Aufwand, Preis, Risiken und Zeitersparnis – ehrlich und ohne Eigenwerbung.',
  keywords: ['Makler oder Privatverkauf', 'Immobilie selbst verkaufen', 'ohne Makler verkaufen Frankfurt', 'Privatverkauf Immobilie', 'Makler vs Privatverkauf'],
  alternates: { canonical: 'https://www.immovativ-invest.de/makler-oder-privatverkauf' },
  openGraph: {
    title: 'Makler oder Privatverkauf? Der ehrliche Vergleich 2025',
    description: 'Soll ich einen Makler beauftragen oder meine Immobilie selbst verkaufen? Der ehrliche, vollständige Vergleich mit allen Vor- und Nachteilen.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/makler-oder-privatverkauf',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Makler oder Privatverkauf – immovativInvest Frankfurt' }],
  },
}

const faqItems = [
  {
    question: 'Kann ich meine Immobilie wirklich selbst verkaufen?',
    answer: 'Ja, technisch ist das möglich. Du brauchst keinen Makler — aber du brauchst Zeit, Kenntnisse und Nervenstärke. Wer schon mal verkauft hat, weiß: Die Koordination von Besichtigungen, die Qualifizierung von Kaufinteressenten und die Verhandlungsführung kosten mehr als erwartet.',
  },
  {
    question: 'Wie viel Geld spare ich ohne Makler?',
    answer: 'Du sparst deinen Anteil der Maklerprovision — in Frankfurt ca. 3,57 % inkl. MwSt. Bei 500.000 € Kaufpreis sind das ca. 17.850 €. Allerdings zeigen Studien, dass Privatverkäufer im Schnitt 5–10 % unter Marktwert verkaufen. Unter dem Strich ist der Vorteil oft negativ.',
  },
  {
    question: 'Wie lange dauert ein Privatverkauf im Vergleich zum Maklerverkauf?',
    answer: 'Privatverkäufe dauern im Schnitt 2–3x länger als professionelle Maklerverkäufe. Ein gut aufgestellter Makler hat Käufer vorqualifiziert, kennt die Marktlage und schafft es oft, innerhalb von 4–6 Wochen einen abschlussreifen Käufer zu finden.',
  },
  {
    question: 'Was sind die größten Risiken beim Privatverkauf?',
    answer: 'Die häufigsten Risiken: Falsche Preiseinschätzung (zu hoch oder zu niedrig), unseriöse Kaufinteressenten, rechtliche Fehler beim Kaufvertrag, fehlende Unterlagen beim Notartermin und emotionale Verhandlungen, die Abschlüsse platzen lassen.',
  },
  {
    question: 'Wann lohnt sich ein Privatverkauf tatsächlich?',
    answer: 'Ein Privatverkauf kann sich lohnen, wenn du bereits einen konkreten Käufer aus dem Bekanntenkreis hast, wenn die Immobilie sehr gefragt und einfach zu vermarkten ist, oder wenn du die nötige Zeit und Erfahrung mitbringst. Ansonsten rechnet sich die Provision eines guten Maklers fast immer.',
  },
  {
    question: 'Was passiert, wenn ich den Kaufpreis falsch einschätze?',
    answer: 'Zu hoher Preis: Die Immobilie verweilt im Markt, wird als "Ladenhüter" wahrgenommen und muss mit Preisreduktionen angeboten werden — was Misstrauen erzeugt. Zu niedriger Preis: Du verschenkst Geld, das du nie zurückbekommst. Eine professionelle Wertermittlung ist die wichtigste Basis.',
  },
]

export default function MaklerOderPrivatverkaufPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Makler oder Privatverkauf', item: 'https://www.immovativ-invest.de/makler-oder-privatverkauf' },
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
      <Header ctaLabel="Kostenlose Beratung" ctaHref="#kontakt" />

      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Makler oder Privatverkauf?</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              ⚖️ Ehrlicher Vergleich
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Makler oder Privatverkauf?<br />
              <span className="text-brand-green">Der ehrliche Vergleich.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-4">
              Wir sind selbst Makler — und trotzdem zeigen wir dir hier, wann ein Privatverkauf sinnvoll ist und wann nicht. Denn die richtige Entscheidung hängt von deiner Situation ab, nicht von unserer Provision.
            </p>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto mb-8">
              Spoiler: In den meisten Fällen rechnet sich ein guter Makler — auch nach Abzug der Provision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                Kostenlos beraten lassen →
              </Link>
              <CTAButton href="/immobilienbewertung" variant="outline" size="md">
                Immobilie kostenlos bewerten →
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
                  Makler lohnen sich in fast allen Fällen: Sie erzielen im Schnitt 5–15 % höhere Kaufpreise, reduzieren deinen Eigenaufwand auf 4–5 Stunden und vermeiden häufige rechtliche Fehler beim Verkauf. Ein Privatverkauf lohnt sich nur, wenn du bereits einen konkreten Käufer hast oder nachweislich die nötige Zeit und Erfahrung mitbringst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hauptvergleich */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Der direkte Vergleich: Makler vs. Privatverkauf.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Alle relevanten Faktoren — ehrlich bewertet, ohne Schönfärberei.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Faktor</th>
                    <th className="text-center px-5 py-4 font-semibold text-brand-champagne">Mit Makler</th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Privatverkauf</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Erzielbarer Kaufpreis', '✅ 5–15 % über Privatverkauf', '❌ Oft 5–10 % unter Marktwert'],
                    ['Dein Zeitaufwand', '✅ Ca. 4–5 Stunden gesamt', '❌ 80–150 Stunden realistisch'],
                    ['Vermarktungsdauer', '✅ Ø 3–6 Wochen', '❌ Ø 3–6 Monate'],
                    ['Professionelle Fotos', '✅ Enthalten', '❌ Eigenaufwand / Kosten'],
                    ['Reichweite', '✅ Alle Portale + Netzwerk', '⚠️ Nur Portale (kostenpflichtig)'],
                    ['Käufer-Qualifizierung', '✅ Finanzierungscheck', '❌ Eigenverantwortung'],
                    ['Preisverhandlung', '✅ Professionell & emotional distanziert', '❌ Emotional belastet'],
                    ['Rechtssicherheit', '✅ Vollständig begleitet', '❌ Eigenverantwortung'],
                    ['Notarkoordination', '✅ Übernommen', '❌ Selbst organisieren'],
                    ['Kosten für dich', '⚠️ Ca. 3,57 % Provision', '✅ Keine Maklerkosten'],
                    ['Kosten gesamt (real)', '✅ Netto meist besser', '❌ Günstig auf dem Papier'],
                    ['Risiko geplatzter Deals', '✅ Gering (vorqualifiziert)', '❌ Hoch (ungeprüfte Käufer)'],
                  ].map(([faktor, makler, privat], idx) => (
                    <tr key={faktor} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-medium text-brand-anthrazit">{faktor}</td>
                      <td className="px-5 py-3.5 text-center">{makler}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{privat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Wann lohnt sich was */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Wann ist welcher Weg der richtige?</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto">
                Nicht jeder Verkauf ist gleich. Hier findest du, welcher Ansatz zu deiner Situation passt.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-brand-green/30 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">🏆</span>
                  <h3 className="text-xl font-bold text-brand-anthrazit">Ein Makler lohnt sich, wenn…</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'du keinen konkreten Käufer in der Hinterhand hast',
                    'du wenig Zeit für Besichtigungen, Verhandlungen und Koordination hast',
                    'du keine Erfahrung mit Immobilienverkäufen hast',
                    'der bestmögliche Verkaufspreis wichtig ist',
                    'du in einer gefragten Lage verkaufst (Makler-Netzwerk optimal nutzbar)',
                    'du keine Lust auf emotionale Verhandlungen mit Fremden hast',
                    'du rechtliche Sicherheit und vollständige Abwicklung willst',
                    'die Immobilie besondere Verkaufsargumente hat, die gezielt kommuniziert werden sollten',
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-2 items-start text-sm text-brand-gray-warm">
                      <span className="text-brand-green font-bold shrink-0 mt-0.5">✓</span>
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-brand-gray-border p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">🤔</span>
                  <h3 className="text-xl font-bold text-brand-anthrazit">Ein Privatverkauf kann sich lohnen, wenn…</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'du bereits einen konkreten Käufer kennst (Verwandte, Bekannte)',
                    'die Immobilie extrem gefragt und leicht zu vermarkten ist',
                    'du selbst Erfahrung im Immobilienverkauf hast',
                    'du viel Zeit und Energie investieren kannst und willst',
                    'du alle nötigen Unterlagen bereits vorliegen hast',
                    'du bereit bist, rechtliche Risiken eigenverantwortlich zu tragen',
                    'die Immobilie keine komplexen Besonderheiten hat (kein Erbbaurecht, keine Belastungen)',
                  ].map((punkt) => (
                    <li key={punkt} className="flex gap-2 items-start text-sm text-brand-gray-warm">
                      <span className="text-brand-gray-warm shrink-0 mt-0.5">–</span>
                      {punkt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Was kostet Privatverkauf wirklich */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                💸 Versteckte Kosten
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was ein Privatverkauf wirklich kostet.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                "Ohne Makler" heißt nicht "ohne Kosten". Diese Punkte übersehen viele Privatverkäufer.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: '⏰',
                  title: 'Deine Zeit — der größte Kostenfaktor',
                  desc: 'Schätz realistisch: Wertermittlung (5 Std.), Exposé erstellen (8 Std.), Portale einrichten (3 Std.), Anfragen beantworten (10+ Std.), Besichtigungen (15+ Std.), Verhandlungen (5 Std.), Notarkoordination (5 Std.) = ca. 50–100 Stunden. Bei einem Stundensatz von 50 € entspricht das 2.500–5.000 € Opportunitätskosten.',
                  kosten: 'Wert: 2.500–5.000 €',
                },
                {
                  icon: '📸',
                  title: 'Professionelle Fotografie',
                  desc: 'Schlechte Fotos kosten dich Interessenten — und damit Geld. Professionelle Immobilienfotografen kosten 300–800 €. Smartphone-Fotos führen messbar zu weniger Anfragen und niedrigeren Angeboten.',
                  kosten: 'Kosten: 300–800 €',
                },
                {
                  icon: '🌐',
                  title: 'Portalgebühren',
                  desc: 'Immoscout24 berechnet für private Inserate ab 79,90 € pro Monat — ein Premium-Inserat kostet 199–399 €. Bei einer Vermarktungszeit von 3 Monaten kommen schnell 300–1.200 € zusammen.',
                  kosten: 'Kosten: 300–1.200 €',
                },
                {
                  icon: '📋',
                  title: 'Energieausweis',
                  desc: 'Seit 2014 ist der Energieausweis beim Verkauf Pflicht. Er muss bereits bei Besichtigungen vorgelegt werden. Ein Verbrauchsausweis kostet 50–100 €, ein Bedarfsausweis 300–500 €.',
                  kosten: 'Kosten: 50–500 €',
                },
                {
                  icon: '⚖️',
                  title: 'Rechtliche Risiken',
                  desc: 'Fehler im Kaufvertrag, unvollständige Unterlagen, nicht offengelegte Mängel — all das kann zu Schadensersatzforderungen führen. Ein Anwalt für Vorprüfung kostet 200–500 €; im Streitfall deutlich mehr.',
                  kosten: 'Risiko: potenziell hoch',
                },
                {
                  icon: '📉',
                  title: 'Preisunterschied durch fehlende Verhandlungserfahrung',
                  desc: 'Das ist der meist unterschätzte Kostenfaktor. Wer emotional mit seiner Immobilie verbunden ist, verhandelt schlechter. Studien zeigen: Privatverkäufer erzielen im Schnitt 5–10 % weniger als Maklerverkäufe — bei 500.000 € sind das 25.000–50.000 €.',
                  kosten: 'Verlust: 25.000–50.000 €',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-brand-gray-border rounded-2xl p-5">
                  <div className="flex gap-3 items-start mb-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <h3 className="font-bold text-brand-anthrazit">{item.title}</h3>
                  </div>
                  <p className="text-brand-gray-warm text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-xs font-semibold text-red-700">{item.kosten}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Rechenbeispiel */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Rechenbeispiel: 500.000 € Immobilie in Frankfurt.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-brand-gray-border p-6">
                <h3 className="font-bold text-brand-anthrazit text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏠</span> Privatverkauf
                </h3>
                <div className="space-y-2 text-sm">
                  {([
                    ['Realistischer Verkaufspreis', '470.000 € (–6 % Ø)', true],
                    ['Fotografie', '–500 €', false],
                    ['Portalgebühren (3 Monate)', '–600 €', false],
                    ['Energieausweis', '–200 €', false],
                    ['Eigene Zeitkosten (~80 Stunden)', '–4.000 €', false],
                    ['Maklerkosten', '0 €', false],
                  ] as [string, string, boolean][]).map(([label, wert, bold]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-brand-gray-border last:border-0">
                      <span className="text-brand-gray-warm">{label}</span>
                      <span className={bold ? 'font-semibold text-brand-anthrazit' : 'text-brand-anthrazit'}>{wert}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-3 mt-2 bg-red-50 rounded-xl px-3">
                    <span className="font-bold text-brand-anthrazit">Nettobetrag</span>
                    <span className="font-bold text-red-600 text-lg">ca. 464.700 €</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-brand-green/30 p-6">
                <h3 className="font-bold text-brand-anthrazit text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">🏆</span> Mit Makler
                </h3>
                <div className="space-y-2 text-sm">
                  {([
                    ['Erzielter Verkaufspreis (Ø)', '505.000 € (+1 %)', true],
                    ['Fotografie', '0 € (enthalten)', false],
                    ['Portalgebühren', '0 € (enthalten)', false],
                    ['Energieausweis', '0 € (enthalten)', false],
                    ['Eigene Zeitkosten (~5 Stunden)', '–250 €', false],
                    ['Maklerprovision (3,57 %)', '–18.029 €', false],
                  ] as [string, string, boolean][]).map(([label, wert, bold]) => (
                    <div key={label} className="flex justify-between py-2 border-b border-brand-gray-border last:border-0">
                      <span className="text-brand-gray-warm">{label}</span>
                      <span className={bold ? 'font-semibold text-brand-anthrazit' : 'text-brand-anthrazit'}>{wert}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-3 mt-2 bg-brand-green/10 rounded-xl px-3">
                    <span className="font-bold text-brand-anthrazit">Nettobetrag</span>
                    <span className="font-bold text-brand-green text-lg">ca. 486.721 €</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-brand-anthrazit rounded-2xl p-5 text-center">
              <p className="text-white font-semibold text-lg">Differenz zugunsten des Maklerverkaufs: <span className="text-brand-champagne text-2xl ml-2">+22.021 €</span></p>
              <p className="text-white/60 text-xs mt-1">Rechenbeispiel basierend auf Erfahrungswerten. Individuelle Ergebnisse können abweichen.</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Lass uns gemeinsam entscheiden, was für dich sinnvoll ist.</h2>
            <p className="text-white/70 text-sm">Kostenlose Erstberatung — ohne Druck, ohne Verpflichtung.</p>
          </div>
          <Link href="#kontakt" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Jetzt beraten lassen →
          </Link>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Häufige Fragen: Makler oder selbst verkaufen?"
      />

      <ContactForm
        variant="makler"
        title="Wir beraten dich ehrlich."
        subtitle="Auch wenn du dich für einen Privatverkauf entscheidest — wir helfen dir, die richtige Entscheidung zu treffen."
      />

      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-brand-anthrazit mb-6">Weitere nützliche Seiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/bester-immobilienmakler-frankfurt', label: 'Bester Makler Frankfurt', icon: '🏆' },
              { href: '/immobilienmakler-kosten-frankfurt', label: 'Makler Kosten Frankfurt', icon: '💶' },
              { href: '/immobilie-schnell-verkaufen', label: 'Immobilie schnell verkaufen', icon: '⚡' },
              { href: '/immobilienbewertung', label: 'Kostenlose Bewertung', icon: '📊' },
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
