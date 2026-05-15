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
  title: 'Bester Immobilienmakler Frankfurt 2025 – So erkennst du ihn | immovativInvest',
  description: 'Welcher Immobilienmakler ist der beste in Frankfurt? Wir zeigen dir, worauf es wirklich ankommt – mit konkreten Kriterien, Fragen und ehrlichen Antworten.',
  keywords: ['bester Immobilienmakler Frankfurt', 'top Makler Frankfurt', 'Immobilienmakler Frankfurt Bewertung', 'Makler Empfehlung Frankfurt', 'Immobilienmakler Frankfurt Erfahrungen'],
  alternates: { canonical: 'https://www.immovativ-invest.de/bester-immobilienmakler-frankfurt' },
  openGraph: {
    title: 'Bester Immobilienmakler Frankfurt 2025 – So erkennst du ihn',
    description: 'Nicht jeder Makler ist gleich. Wir zeigen dir die entscheidenden Kriterien, um den besten Immobilienmakler in Frankfurt zu finden.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/bester-immobilienmakler-frankfurt',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Bester Immobilienmakler Frankfurt – immovativInvest' }],
  },
}

const faqItems = [
  {
    question: 'Wie erkenne ich einen guten Immobilienmakler in Frankfurt?',
    answer: 'Ein guter Makler hat nachweisbare lokale Referenzen, kennt aktuelle Verkaufspreise in deiner Straße, erklärt seine Preisfindung transparent und hört dir zu. Vorsicht bei Maklern, die sofort den höchsten Preis versprechen, ohne die Immobilie gesehen zu haben.',
  },
  {
    question: 'Was ist der Unterschied zwischen einem lokalen und einem bundesweiten Makler?',
    answer: 'Lokale Makler kennen den Frankfurter Markt auf Stadtteilebene – Preise in Sachsenhausen unterscheiden sich deutlich von Rödelheim oder Eschersheim. Bundesweite Plattformen arbeiten datenbasiert, aber ohne das Gefühl für lokale Besonderheiten wie Mikrolage, Nachfragetrends und Netzwerk vor Ort.',
  },
  {
    question: 'Welche Fragen sollte ich einem Makler beim Erstgespräch stellen?',
    answer: 'Frag nach konkreten Verkaufspreisen ähnlicher Immobilien in deiner Straße (keine Angebotspreise!), nach der durchschnittlichen Vermarktungsdauer, nach der Höhe der Provision und ob es eine automatische Verlängerung im Maklervertrag gibt. Wer konkrete Zahlen nennt, hat Erfahrung.',
  },
  {
    question: 'Wie viele Immobilien sollte ein guter Makler pro Jahr verkaufen?',
    answer: 'Qualität schlägt Quantität. Ein guter Einzelmakler verkauft realistisch 20–40 Objekte im Jahr. Wer hunderte verspricht, arbeitet oft mit Massenvermarktung – weniger individueller Betreuung. Frag nach der durchschnittlichen Differenz zwischen Angebots- und Verkaufspreis – das zeigt, wie gut verhandelt wird.',
  },
  {
    question: 'Ist immovativInvest wirklich der beste Makler in Frankfurt?',
    answer: 'Ob wir der "Beste" für dich sind, hängt von deiner Immobilie, deiner Situation und deinen Prioritäten ab. Wir sind spezialisiert auf Frankfurt und Umgebung, arbeiten transparent ohne versteckte Kosten und haben nachweisbare Erfolge. Das Erstgespräch ist kostenlos – überzeuge dich selbst.',
  },
  {
    question: 'Lohnt sich ein Makler überhaupt oder kann ich selbst verkaufen?',
    answer: 'Studien zeigen: Professionell vermarktete Immobilien erzielen 5–15 % höhere Verkaufspreise als Privatverkäufe. Zudem übernehmen gute Makler die gesamte Abwicklung – von der Objektaufnahme bis zum Notartermin. Die Provision ist meist gut investiertes Geld.',
  },
]

export default function BesterImmobilienmaklerFrankfurtPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Bester Immobilienmakler Frankfurt', item: 'https://www.immovativ-invest.de/bester-immobilienmakler-frankfurt' },
                ],
              },
              {
                '@type': 'LocalBusiness',
                name: 'immovativInvest Immobilienmakler Frankfurt',
                description: 'Ihr lokaler Immobilienmakler in Frankfurt – spezialisiert auf Verkauf, Bewertung und Direktankauf.',
                url: 'https://www.immovativ-invest.de',
                telephone: '+49-69-12345678',
                address: { '@type': 'PostalAddress', addressLocality: 'Frankfurt am Main', addressRegion: 'Hessen', addressCountry: 'DE' },
                areaServed: { '@type': 'City', name: 'Frankfurt am Main' },
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
      <Header ctaLabel="Kostenloses Erstgespräch" ctaHref="#kontakt" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Bester Immobilienmakler Frankfurt</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              🏆 Makler-Vergleich Frankfurt
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Bester Immobilienmakler Frankfurt:<br />
              <span className="text-brand-green">Worauf es wirklich ankommt.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-4">
              "Bester Makler" ist kein Titel, den man sich verleiht — er wird durch Ergebnisse verdient. Wir zeigen dir, wie du den richtigen Makler in Frankfurt erkennst, welche Fragen du stellen musst und worauf du verzichten kannst.
            </p>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto mb-8">
              Spoiler: Ein guter Makler ist nicht der mit der meisten Werbung — sondern der mit den besten Ergebnissen in deiner Straße.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                Kostenloses Erstgespräch vereinbaren →
              </Link>
              <CTAButton href="/immobilienbewertung" variant="outline" size="md">
                Immobilie kostenlos bewerten →
              </CTAButton>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Quick Answer Box */}
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
                  Den besten Immobilienmakler in Frankfurt erkennst du an drei Dingen: nachweisbaren Verkäufen in deiner Nachbarschaft, transparenter Preisfindung und klaren Vertragsbedingungen ohne automatische Verlängerung. Wer den höchsten Preis verspricht ohne die Immobilie gesehen zu haben, ist kein Zeichen von Kompetenz — sondern ein Warnsignal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kriterien */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                📋 Die 7 Kriterien
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">So erkennst du den besten Makler in Frankfurt.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Diese sieben Punkte trennen einen guten Makler von einem sehr guten — und beide von einem schlechten.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  nr: '01',
                  title: 'Lokale Marktkenntnis – nicht bundesweit, sondern stadtteilgenau',
                  desc: 'Der Quadratmeterpreis in Frankfurt-Sachsenhausen unterscheidet sich erheblich von Rödelheim oder Sossenheim. Ein guter Makler kennt nicht nur "Frankfurt", sondern die Preisentwicklung auf Straßenebene. Frag ihn nach konkreten Verkaufspreisen vergleichbarer Objekte in deiner Gegend — nicht nach Angebotspreisen aus Portalen.',
                  icon: '📍',
                },
                {
                  nr: '02',
                  title: 'Nachweisbare Referenzen und echte Verkäufe',
                  desc: 'Jeder Makler hat eine Website mit Bewertungen. Entscheidend sind: Wie viele Immobilien wurden in den letzten 12 Monaten tatsächlich verkauft? In welchen Stadtteilen? Und was ist die durchschnittliche Differenz zwischen dem ursprünglichen Angebotspreis und dem erzielten Kaufpreis? Ein guter Makler beantwortet diese Fragen ohne Umschweife.',
                  icon: '✅',
                },
                {
                  nr: '03',
                  title: 'Realistische Werteinschätzung statt Fantasiepreisen',
                  desc: 'Das häufigste Verkäuferproblem: Ein Makler übertreibt die Werteinschätzung, um den Auftrag zu bekommen ("Angebotspreisüberhöhung"). Die Folge: Die Immobilie hängt wochenlang im Markt, Interessenten werden misstrauisch, und am Ende wird mit Preisnachlässen verkauft. Ein seriöser Makler nennt einen realistischen Preis — und erklärt, wie er dazu kommt.',
                  icon: '📊',
                },
                {
                  nr: '04',
                  title: 'Transparente Vertragsbedingungen',
                  desc: 'Ein guter Maklervertrag läuft 4–8 Wochen und endet automatisch. Er enthält keine automatische Verlängerungsklausel, keine unverhältnismäßig hohen Aufwandsentschädigungen bei Kündigung und keine Klauseln, die dich auch bei Eigenverkauf provisonspflichtig machen. Lies den Vertrag — und frag nach, was du nicht verstehst.',
                  icon: '📄',
                },
                {
                  nr: '05',
                  title: 'Professionelle Vermarktung mit echtem Budget',
                  desc: 'Gute Vermarktung kostet Geld: professionelle Immobilienfotografie (300–800 €), hochwertiges Exposé, Platzierung auf Immoscout24, Immowelt und idealerweise ein eigenes Käufernetzwerk. Frag den Makler, welche Vermarktungsmaßnahmen konkret geplant sind — und ob diese im Service enthalten oder extra berechnet werden.',
                  icon: '📸',
                },
                {
                  nr: '06',
                  title: 'Klare Kommunikation und Erreichbarkeit',
                  desc: 'Ein Makler, der wochenlang nicht antwortet oder Updates nur auf Nachfrage liefert, kostet dich Nerven — und möglicherweise Käufer. Frag beim Erstgespräch: Wie oft werde ich über den Stand der Vermarktung informiert? Wer ist mein fester Ansprechpartner? Und wie schnell reagierst du auf Interessentenanfragen?',
                  icon: '📞',
                },
                {
                  nr: '07',
                  title: 'Keine Kosten bis zum Abschluss',
                  desc: 'Ein seriöser Makler verdient nur dann, wenn er erfolgreich ist. Das bedeutet: keine Vorab-Kosten für Vermarktung, keine versteckten Gebühren für Unterlagen, keine Bearbeitungsgebühren. Die Provision wird ausschließlich bei erfolgreichem Abschluss fällig — und das ist gesetzlich die Norm.',
                  icon: '💰',
                },
              ].map((item) => (
                <div key={item.nr} className="flex gap-6 bg-white border border-brand-gray-border rounded-2xl p-6 hover:border-brand-green/30 hover:shadow-soft transition-all">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">{item.nr}</span>
                      <h3 className="font-bold text-brand-anthrazit">{item.title}</h3>
                    </div>
                    <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Vergleich Tabelle */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Lokaler Makler vs. Online-Plattform vs. Privatverkauf.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Drei Wege zum Immobilienverkauf — mit sehr unterschiedlichen Ergebnissen.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Kriterium</th>
                    <th className="text-center px-5 py-4 font-semibold">Lokaler Makler</th>
                    <th className="text-center px-5 py-4 font-semibold">Online-Plattform</th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Privatverkauf</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Lokale Marktkenntnis', '✅ Sehr hoch', '⚠️ Durchschnittlich', '❌ Kaum vorhanden'],
                    ['Erzielbarer Preis', '✅ 5–15 % höher', '⚠️ Marktpreis', '❌ Oft unter Marktwert'],
                    ['Zeitaufwand für dich', '✅ Minimal (~5 Std.)', '⚠️ Mittel', '❌ Sehr hoch'],
                    ['Käufernetzwerk', '✅ Vorhanden', '⚠️ Eingeschränkt', '❌ Kein Netzwerk'],
                    ['Kosten', '⚠️ Provision bei Abschluss', '⚠️ Provision bei Abschluss', '✅ Keine Provision'],
                    ['Rechtssicherheit', '✅ Vollständig begleitet', '⚠️ Teilweise', '❌ Eigenverantwortung'],
                    ['Vermarktungsqualität', '✅ Professionell', '⚠️ Standardisiert', '❌ Meist amateurhaft'],
                    ['Verhandlungsführung', '✅ Professionell', '⚠️ Eingeschränkt', '❌ Emotional belastet'],
                  ].map(([label, col1, col2, col3], idx) => (
                    <tr key={label} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-medium text-brand-anthrazit">{label}</td>
                      <td className="px-5 py-3.5 text-center">{col1}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{col2}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{col3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-gray-warm mt-4 text-center">Erfahrungswerte aus dem Frankfurter Markt – individuelle Ergebnisse können abweichen.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Warnsignale */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                ⚠️ Warnsignale
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Diese Signale sind Warnszeichen – kein guter Makler.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Nicht jeder, der sich "bester Makler Frankfurt" nennt, ist es auch. Diese Warnsignale erkennst du beim Erstgespräch.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  signal: 'Preisversprechen ohne Besichtigung',
                  erklärung: 'Wer dir am Telefon einen konkreten Verkaufspreis nennt, ohne die Immobilie gesehen zu haben, rät blind. Eine seriöse Werteinschätzung erfordert eine persönliche Besichtigung und die Analyse aktueller Vergleichsverkäufe.',
                },
                {
                  signal: 'Lange Mindestlaufzeit mit automatischer Verlängerung',
                  erklärung: 'Ein Maklervertrag über 6 Monate oder mehr mit automatischer Verlängerung sollte dich skeptisch machen. Gute Makler brauchen keine solchen Klauseln — sie sind durch Ergebnisse überzeugt, nicht durch Vertragsklauseln.',
                },
                {
                  signal: 'Keine konkreten Referenzen auf Nachfrage',
                  erklärung: 'Wenn ein Makler keine konkreten Verkaufsbeispiele in deiner Nachbarschaft nennen kann oder ausweicht, fehlt möglicherweise die lokale Erfahrung — egal wie professionell die Website aussieht.',
                },
                {
                  signal: 'Unklare Provisionsregelungen',
                  erklärung: 'Kosten sollten vor Vertragsunterzeichnung vollständig klar sein: Wie hoch ist die Provision? Wer trägt sie? Gibt es zusätzliche Kosten für Unterlagen, Fotos oder Portale? Wer hier ausweicht, hat etwas zu verbergen.',
                },
                {
                  signal: 'Druck beim Erstgespräch',
                  erklärung: 'Sätze wie "Ich habe schon drei Interessenten für Ihre Immobilie" oder "Dieser Preis gilt nur heute" sind Verkaufstricks. Ein guter Makler gibt dir Zeit für deine Entscheidung und macht keinen Druck.',
                },
                {
                  signal: 'Veraltete Vermarktungsunterlagen',
                  erklärung: 'Schlechte Fotos, fehlende Grundrisse, lückenhafte Exposés — das signalisiert, wie viel Energie ein Makler in deine Immobilie investiert. Frag nach einem Musterexposé, bevor du unterschreibst.',
                },
              ].map((item) => (
                <div key={item.signal} className="bg-red-50 border border-red-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl shrink-0 mt-0.5">⚠️</span>
                    <div>
                      <h3 className="font-bold text-brand-anthrazit mb-1.5">{item.signal}</h3>
                      <p className="text-brand-gray-warm text-sm leading-relaxed">{item.erklärung}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Fragen für das Erstgespräch */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">10 Fragen, die du jedem Makler stellen solltest.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Die Antworten auf diese Fragen verraten dir mehr über einen Makler als jede Bewertungsplattform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { nr: '1', frage: 'Wie viele Immobilien haben Sie im letzten Jahr in Frankfurt verkauft — und in welchen Stadtteilen?', warum: 'Zeigt echte lokale Aktivität, nicht nur Behauptungen.' },
                { nr: '2', frage: 'Wie hoch war die durchschnittliche Differenz zwischen Angebots- und Kaufpreis?', warum: 'Der wichtigste Qualitätsindikator — gute Makler verhandeln nah am Angebotspreis.' },
                { nr: '3', frage: 'Wie lange dauert es bei Ihnen vom Erstgespräch bis zum unterschriebenen Kaufvertrag?', warum: 'Zeigt Effizienz und ein aktives Käufernetzwerk.' },
                { nr: '4', frage: 'Welche Vermarktungsmaßnahmen sind im Service enthalten — und was kostet extra?', warum: 'Vermeidet böse Überraschungen nach Vertragsunterzeichnung.' },
                { nr: '5', frage: 'Können Sie mir ein Musterexposé zeigen?', warum: 'Qualität des Exposés spiegelt die Sorgfalt im Umgang mit Ihrer Immobilie.' },
                { nr: '6', frage: 'Wie lange läuft der Maklervertrag — und verlängert er sich automatisch?', warum: 'Seriöse Verträge enden automatisch, ohne Verlängerungsklausel.' },
                { nr: '7', frage: 'Wie hoch ist die genaue Provision — und wie wird sie aufgeteilt?', warum: 'Muss vor Unterschrift bekannt sein; in Hessen gilt Halbteilung.' },
                { nr: '8', frage: 'Wer ist mein fester Ansprechpartner — und wie schnell antworten Sie auf Anfragen?', warum: 'Klare Erreichbarkeit ist entscheidend für Käufer und Verkäufer.' },
                { nr: '9', frage: 'Haben Sie Referenzen von Verkäufern in meiner Nachbarschaft?', warum: 'Echte, überprüfbare Referenzen zeigen Erfahrung in Ihrer Mikrolage.' },
                { nr: '10', frage: 'Was passiert, wenn ich mit der Zusammenarbeit nicht zufrieden bin?', warum: 'Seriöse Makler haben klare, faire Ausstiegsregelungen.' },
              ].map((item) => (
                <div key={item.nr} className="bg-white rounded-2xl border border-brand-gray-border p-5">
                  <div className="flex gap-3 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand-anthrazit text-white text-xs font-bold flex items-center justify-center">{item.nr}</span>
                    <div>
                      <p className="font-semibold text-brand-anthrazit text-sm mb-1.5">"{item.frage}"</p>
                      <p className="text-brand-gray-warm text-xs"><span className="font-semibold text-brand-green">Warum:</span> {item.warum}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Über uns */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="bg-brand-anthrazit rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-semibold text-white mb-5">
                    🏆 immovativInvest
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-5">Warum Eigentümer uns wählen.</h2>
                  <div className="space-y-4 text-white/80 text-sm leading-relaxed">
                    <p>Wir behaupten nicht, die Besten zu sein. Wir beweisen es durch Ergebnisse: konkrete Verkaufspreise, kurze Vermarktungszeiten und Eigentümer, die uns weiterempfehlen.</p>
                    <p>Unser Ansatz: Ein fairer Preis von Anfang an. Professionelle Vermarktung mit echtem Budget. Und ein Maklervertrag, der nach 6 Wochen automatisch endet — weil gute Arbeit sich nicht hinter langen Laufzeiten verstecken muss.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { zahl: '< 4 Wo.', label: 'Ø Vermarktungszeit', icon: '⚡' },
                    { zahl: '98 %', label: 'Ø Kaufpreis zum Angebotspreis', icon: '📊' },
                    { zahl: '0 €', label: 'Versteckte Kosten für dich', icon: '✅' },
                    { zahl: '6 Wo.', label: 'Automatisch endender Vertrag', icon: '📄' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-white/10 rounded-2xl p-5 text-center">
                      <div className="text-2xl mb-2">{kpi.icon}</div>
                      <div className="text-2xl font-bold text-brand-champagne mb-1">{kpi.zahl}</div>
                      <div className="text-white/60 text-xs">{kpi.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                  Erstgespräch vereinbaren →
                </Link>
                <Link href="/referenzen" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-white/20 transition-colors">
                  Referenzen ansehen →
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Wissen, was deine Immobilie wert ist — kostenlos und ohne Verpflichtung.</h2>
            <p className="text-white/70 text-sm">Wir kommen zu dir, schauen uns die Immobilie an und geben dir eine fundierte Einschätzung.</p>
          </div>
          <Link href="/immobilienbewertung" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Kostenlose Bewertung →
          </Link>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Häufige Fragen zum besten Makler in Frankfurt."
      />

      <ContactForm
        variant="makler"
        title="Überzeuge dich selbst."
        subtitle="Kostenloses Erstgespräch vor Ort — kein Druck, keine Verpflichtung, echte Antworten."
      />

      {/* Weitere Seiten */}
      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-brand-anthrazit mb-6">Weitere nützliche Seiten für Verkäufer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/immobilienmakler-kosten-frankfurt', label: 'Makler Kosten Frankfurt', icon: '💶' },
              { href: '/makler-oder-privatverkauf', label: 'Makler oder Privatverkauf?', icon: '⚖️' },
              { href: '/serioeser-makler-erkennen', label: 'Seriösen Makler erkennen', icon: '🔍' },
              { href: '/immobilienbewertung', label: 'Immobilienbewertung', icon: '📊' },
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
