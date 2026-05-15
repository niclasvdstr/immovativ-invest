/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Wertrechner from '@/components/Wertrechner'

export const metadata: Metadata = {
  title: 'Immobilie verkaufen Frankfurt – Was Sie wissen müssen | immovativInvest',
  description: 'Immobilie verkaufen in Frankfurt & Rhein-Main: Typische Fehler, rechtliche Fallstricke und wie Sie den bestmöglichen Preis erzielen. Kostenlose Erstberatung.',
  alternates: { canonical: 'https://www.immovativ-invest.de/verkaufen' },
  openGraph: {
    title: 'Immobilie verkaufen Frankfurt – Was Sie wirklich wissen müssen | immovativInvest',
    description: 'Zu hoher Startpreis, fehlende Unterlagen, rechtliche Unsicherheiten – die häufigsten Fehler beim Immobilienverkauf und wie Sie sie vermeiden.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/verkaufen',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const problems = [
  {
    icon: '📉',
    title: 'Zu hoher Startpreis – die Immobilie verbrennt',
    desc: 'Der häufigste und teuerste Fehler: Ein zu hoher Angebotspreis schreckt Käufer ab. Die Immobilie liegt wochenlang online, Interessenten fragen sich warum – und bieten weniger als sie sonst täten. Am Ende wird die Immobilie deutlich unter Marktwert verkauft, weil der erste Eindruck verbrannt ist.',
  },
  {
    icon: '⚖️',
    title: 'Rechtliche Unsicherheiten & falsche Angaben',
    desc: 'Fehlende Baugenehmigungen, nicht eingetragene Anbauten, falsche Wohnflächenangaben im Exposé – solche Fehler können nach dem Verkauf zu Schadensersatzforderungen führen. Käufer, die nach dem Notartermin Mängel entdecken, haben Rechte. Verkäufer auch – wenn sie richtig beraten wurden.',
  },
  {
    icon: '📁',
    title: 'Unterlagenbeschaffung kostet Wochen',
    desc: 'Energieausweis, aktueller Grundbuchauszug, Teilungserklärung, Baupläne, Protokolle der Eigentümerversammlung – ohne diese Dokumente läuft kein Notartermin. Die Beschaffung bei Ämtern und Hausverwaltungen dauert oft 4–8 Wochen. Wer nicht vorbereitet ist, verliert wertvolle Zeit und Käufer.',
  },
  {
    icon: '🚪',
    title: 'Besichtigungstourismus ohne Ergebnis',
    desc: 'Wer jeden Interessenten zur Besichtigung einlädt, verliert Zeit und Nerven. Ohne Käuferqualifizierung kommen Neugierige, Mieter auf der Suche nach Eindrücken und Interessenten ohne Finanzierung. Professionelle Vermarktung filtert echte Käufer im Vorfeld.',
  },
  {
    icon: '💬',
    title: 'Emotionale Verhandlungsführung',
    desc: 'Das eigene Heim ist kein neutrales Handelsobjekt. Wer selbst verhandelt, reagiert auf Kritik emotional, macht Zugeständnisse aus Unsicherheit oder lehnt faire Angebote aus Enttäuschung ab. Erfahrene Makler verhandeln sachlich – und erzielen nachweislich bessere Preise.',
  },
  {
    icon: '📢',
    title: 'Falsche oder fehlende Vermarktung',
    desc: 'Ein Smartphone-Foto und ein kurzer Text auf einem Portal reichen nicht. Professionelle Fotos, ein überzeugendes Exposé und die Präsenz auf den richtigen Plattformen machen den Unterschied zwischen einem mittelmäßigen und einem sehr guten Verkaufspreis.',
  },
]

const tips = [
  {
    nr: '01',
    title: 'Den richtigen Preis kennen – bevor Sie inserieren',
    desc: 'Der Angebotspreis ist die wichtigste Entscheidung beim Verkauf. Zu hoch bedeutet Leerstand und Preisverfall. Zu niedrig bedeutet verschenktes Geld. Eine fundierte Wertermittlung auf Basis echter Vergleichsverkäufe in Ihrer Nachbarschaft ist die Grundlage für alles.',
  },
  {
    nr: '02',
    title: 'Alle Unterlagen vor dem Start zusammenstellen',
    desc: 'Starten Sie die Dokumentenrecherche frühzeitig: Grundbuchauszug, Energieausweis, Baupläne, ggf. Teilungserklärung und WEG-Protokolle. Wer gut vorbereitet ist, kann innerhalb von Wochen statt Monaten verkaufen.',
  },
  {
    nr: '03',
    title: 'Präsentation ist kein Luxus',
    desc: 'Käufer entscheiden oft innerhalb von Sekunden, ob sie eine Immobilie anfragen. Professionelle Fotos, ein klares Exposé und eine durchdachte Beschreibung machen den Unterschied – nicht nur beim Preis, sondern auch bei der Qualität der Interessenten.',
  },
  {
    nr: '04',
    title: 'Käufer qualifizieren, bevor Sie besichtigen',
    desc: 'Vor jeder Besichtigung sollten Finanzierungsstatus und Kaufabsicht geklärt sein. Das spart Zeit und Nerven – und schützt Ihre Privatsphäre. Ein guter Makler übernimmt diese Qualifizierung diskret und professionell.',
  },
]

export default function VerkaufenPage() {
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
      <Header ctaLabel="Kostenlose Wertermittlung" ctaHref="/immobilienbewertung" />

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

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
              <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
                🏡 Immobilie verkaufen
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-brand-anthrazit">Fehler beim Immobilienverkauf.</span><br />
                <span className="text-brand-green">Was Sie vorher wissen sollten.</span>
              </h1>
              <p className="text-brand-gray-warm text-lg leading-relaxed mb-8 max-w-xl">
                Die meisten Fehler beim Immobilienverkauf sind vermeidbar — wenn man sie kennt. Wir zeigen Ihnen, worauf es ankommt und wie Sie den bestmöglichen Preis erzielen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/immobilienbewertung"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-xl px-7 py-3.5 transition-all hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
                >
                  Jetzt Wert ermitteln →
                </Link>
                <a
                  href="tel:+4915129686979"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-brand-gray-border text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-cream transition-colors"
                >
                  📞 Direkt anrufen
                </a>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={150}>
              <div className="rounded-3xl overflow-hidden h-[420px] shadow-large">
                <Image
                  src="/Niclas Schreibtisch.png"
                  alt="Niclas van der Straeten beim Immobilienberatungsgespräch – Immobilienmakler Frankfurt immovativInvest"
                  className="w-full h-full object-cover"
                  width={800}
                  height={420}
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Probleme Section */}
      <section className="section-padding px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                ⚠️ Häufige Fehler beim Verkauf
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
                Was beim Immobilienverkauf<br />wirklich schiefgehen kann.
              </h2>
              <p className="text-brand-gray-warm max-w-2xl mx-auto text-sm leading-relaxed">
                Viele Eigentümer unterschätzen die Komplexität eines Immobilienverkaufs. Diese Fehler kosten oft Zehntausende Euro — oder den gesamten Deal.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <AnimateIn key={p.title} direction="up" delay={i * 80}>
                <div className="flex gap-4 bg-white border border-brand-gray-border rounded-2xl p-6 hover:shadow-soft transition-shadow">
                  <div className="text-3xl shrink-0 mt-0.5">{p.icon}</div>
                  <div>
                    <h3 className="font-bold text-brand-anthrazit mb-2 text-base">{p.title}</h3>
                    <p className="text-brand-gray-warm text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bild + Intro Text */}
      <section className="section-padding px-4 md:px-8 bg-brand-cream border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
              <div className="rounded-3xl overflow-hidden h-[460px] shadow-large">
                <Image
                  src="/mazlum-hochhaus.png"
                  alt="Mazlum Selcuk, Immobilienexperte Rhein-Main-Region – immovativInvest Frankfurt"
                  className="w-full h-full object-cover"
                  width={800}
                  height={460}
                />
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={150}>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">
                Der Immobilienmarkt im Rhein-Main-Gebiet ist komplex.
              </h2>
              <div className="space-y-4 text-brand-gray-warm text-sm leading-relaxed">
                <p className="font-medium text-brand-anthrazit">
                  Frankfurt und das Rhein-Main-Gebiet gehören zu den dynamischsten Immobilienmärkten Deutschlands. Preise variieren stark zwischen Stadtteilen, zwischen einzelnen Straßen – und zwischen gut und schlecht vermarkteten Immobilien.
                </p>
                <p>
                  Ein Einfamilienhaus in Kronberg erzielt andere Preise als ein vergleichbares Objekt in Kelkheim — selbst bei gleicher Fläche und gleichem Baujahr. Wer diese Nuancen nicht kennt, setzt den falschen Preis an.
                </p>
                <p>
                  Käufer sind heute gut informiert. Sie kennen den Markt, vergleichen online und erkennen sofort, ob eine Immobilie überbewertet ist. Nur wer mit dem richtigen Preis startet, erzielt am Ende das beste Ergebnis.
                </p>
                <p>
                  Wir sind täglich in diesem Markt aktiv — kennen aktuelle Vergleichsverkäufe in Ihrer Nachbarschaft und wissen, welche Käufer gerade suchen.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Tipps Section */}
      <section className="section-padding px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 rounded-full px-4 py-2 text-sm font-semibold text-brand-green mb-4">
                💡 Unsere Empfehlungen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
                Was wirklich den Unterschied macht.
              </h2>
              <p className="text-brand-gray-warm max-w-2xl mx-auto text-sm leading-relaxed">
                Diese vier Punkte entscheiden über Erfolg oder Misserfolg beim Immobilienverkauf — unabhängig davon, ob Sie mit Makler oder privat verkaufen.
              </p>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <AnimateIn key={tip.nr} direction="up" delay={i * 100}>
                <div className="bg-brand-cream rounded-2xl p-7 border border-brand-gray-border">
                  <div className="text-3xl font-bold text-brand-green mb-3">{tip.nr}</div>
                  <h3 className="font-bold text-brand-anthrazit mb-2">{tip.title}</h3>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wertrechner Section */}
      <section className="section-padding px-4 md:px-8 bg-[#f0f4ff] border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
                🏷️ Schritt 1: Marktwert kennen
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
                Was ist Ihre Immobilie wert?
              </h2>
              <p className="text-brand-gray-warm max-w-xl mx-auto text-sm leading-relaxed">
                Der erste Schritt jedes erfolgreichen Verkaufs ist eine realistische Wertermittlung. Starten Sie jetzt — kostenlos, unverbindlich und in 2 Minuten.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <Wertrechner />
          </AnimateIn>
          <p className="text-center text-xs text-brand-gray-warm mt-5">
            🔒 Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </div>
      </section>

      {/* Direktkontakt – Niclas */}
      <section className="py-20 px-4 md:px-8 bg-white border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Persönlicher Kontakt
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
              Lieber direkt sprechen?
            </h2>
            <p className="text-brand-gray-warm text-lg mx-auto max-w-lg">
              Wir stehen Ihnen persönlich zur Verfügung – per Anruf, WhatsApp oder E-Mail.
            </p>
          </div>

          <AnimateIn direction="up">
            <div className="bg-brand-gray-light border border-brand-gray-border rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative shrink-0">
                  <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden ring-4 ring-brand-green/30">
                    <Image
                      src="/niclas-hochhaus.png"
                      alt="Niclas van der Straeten, Immobilienmakler Frankfurt – Ihr persönlicher Ansprechpartner bei immovativInvest"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 12%' }}
                      width={208}
                      height={208}
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    ✓ Verfügbar
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-brand-anthrazit mb-1">Niclas van der Straeten</h3>
                  <p className="text-brand-gray-warm text-sm mb-8">Immobilienmakler · immovativ<span className="font-black">Invest</span> · Rhein-Main-Gebiet</p>
                  <div className="flex flex-col sm:flex-row gap-3 text-left">
                    <a href="tel:+4915129686979" className="flex items-center gap-3 bg-white hover:bg-brand-gray-light border border-brand-gray-border rounded-xl px-5 py-3.5 transition-colors duration-200">
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
                    <a href="https://wa.me/4915129686979" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white hover:bg-brand-gray-light border border-brand-gray-border rounded-xl px-5 py-3.5 transition-colors duration-200">
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
                    <a href="mailto:info@immovativ-invest.de" className="flex items-center gap-3 bg-white hover:bg-brand-gray-light border border-brand-gray-border rounded-xl px-5 py-3.5 transition-colors duration-200">
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
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-4xl mx-auto">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  { '@type': 'Question', name: 'Wie lange dauert ein Immobilienverkauf in Frankfurt?', acceptedAnswer: { '@type': 'Answer', text: 'Mit guter Vorbereitung dauert ein Immobilienverkauf in Frankfurt 6–10 Wochen von der ersten Vermarktung bis zum Notartermin. Die durchschnittliche Vermarktungszeit bei immovativInvest liegt bei 6 Wochen. Häufige Verzögerungsursachen: fehlende Unterlagen, überhöhter Angebotspreis, Finanzierungsprobleme beim Käufer.' } },
                  { '@type': 'Question', name: 'Was kostet ein Immobilienmakler beim Verkauf?', acceptedAnswer: { '@type': 'Answer', text: 'In Hessen teilen Käufer und Verkäufer die Provision nach dem Halbteilungsprinzip (§ 656c BGB). Die ortsübliche Gesamtprovision im Rhein-Main-Gebiet beträgt ca. 5,95 % inkl. MwSt. – je zur Hälfte: ca. 2,975 % für den Verkäufer und ca. 2,975 % für den Käufer. Provision fällt ausschließlich im Erfolgsfall nach dem Notartermin an.' } },
                  { '@type': 'Question', name: 'Welche Unterlagen brauche ich für den Immobilienverkauf?', acceptedAnswer: { '@type': 'Answer', text: 'Pflichtdokumente: aktueller Grundbuchauszug, gültiger Energieausweis, Lageplan, Grundrisse, Baupläne, bei Eigentumswohnungen zusätzlich Teilungserklärung, Protokolle der letzten 3 WEG-Versammlungen, Wirtschaftsplan und Hausgeldabrechnungen. Fehlende Dokumente können einen Verkauf um 4–8 Wochen verzögern.' } },
                  { '@type': 'Question', name: 'Wie wird der Verkaufspreis meiner Immobilie ermittelt?', acceptedAnswer: { '@type': 'Answer', text: 'Eine fundierte Wertermittlung basiert auf dem Vergleichswertverfahren (reale Transaktionen vergleichbarer Objekte), Lage und Mikrolage, Zustand, Ausstattung und aktueller Marktnachfrage. Automatisierte Online-Bewertungen weichen oft stark vom Marktwert ab. Wir ermitteln den Wert persönlich vor Ort – kostenlos und unverbindlich.' } },
                  { '@type': 'Question', name: 'Muss ich Steuern auf den Verkaufserlös zahlen?', acceptedAnswer: { '@type': 'Answer', text: 'Wer die Immobilie selbst bewohnt hat oder länger als 10 Jahre besitzt, zahlt keine Spekulationssteuer. Wer eine vermietete Immobilie innerhalb von 10 Jahren nach Kauf verkauft, zahlt auf den Gewinn Einkommensteuer (bis zu 45 %). Bei Erbschaft beginnt die 10-Jahresfrist mit dem Kaufdatum des Erblassers.' } },
                ],
              }),
            }}
          />
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit">Häufige Fragen zum Immobilienverkauf</h2>
            <p className="text-brand-gray-warm mt-2 text-sm">Antworten auf die wichtigsten Fragen – direkt und ohne Umwege</p>
          </div>
          <div className="divide-y divide-brand-gray-border border border-brand-gray-border rounded-3xl overflow-hidden bg-white">
            {[
              { q: 'Wie lange dauert ein Immobilienverkauf in Frankfurt?', a: 'Mit guter Vorbereitung dauert ein Immobilienverkauf in Frankfurt 6–10 Wochen von der ersten Vermarktung bis zum Notartermin. Die durchschnittliche Vermarktungszeit bei immovativInvest liegt bei 6 Wochen. Häufige Verzögerungsursachen: fehlende Unterlagen, überhöhter Angebotspreis, Finanzierungsprobleme beim Käufer.' },
              { q: 'Was kostet ein Immobilienmakler beim Verkauf?', a: 'In Hessen teilen Käufer und Verkäufer die Provision nach dem Halbteilungsprinzip (§ 656c BGB). Die ortsübliche Gesamtprovision im Rhein-Main-Gebiet beträgt ca. 5,95 % inkl. MwSt. – je zur Hälfte: ca. 2,975 % für den Verkäufer und ca. 2,975 % für den Käufer. Provision fällt ausschließlich im Erfolgsfall nach dem Notartermin an.' },
              { q: 'Welche Unterlagen brauche ich für den Immobilienverkauf?', a: 'Pflichtdokumente: aktueller Grundbuchauszug, gültiger Energieausweis, Lageplan, Grundrisse, Baupläne, bei Eigentumswohnungen zusätzlich Teilungserklärung, Protokolle der letzten 3 WEG-Versammlungen, Wirtschaftsplan und Hausgeldabrechnungen. Fehlende Dokumente können einen Verkauf um 4–8 Wochen verzögern.' },
              { q: 'Wie wird der Verkaufspreis meiner Immobilie ermittelt?', a: 'Eine fundierte Wertermittlung basiert auf dem Vergleichswertverfahren (reale Transaktionen vergleichbarer Objekte), Lage und Mikrolage, Zustand, Ausstattung und aktueller Marktnachfrage. Automatisierte Online-Bewertungen weichen oft stark vom Marktwert ab. Wir ermitteln den Wert persönlich vor Ort – kostenlos und unverbindlich.' },
              { q: 'Muss ich Steuern auf den Verkaufserlös zahlen?', a: 'Wer die Immobilie selbst bewohnt hat oder länger als 10 Jahre besitzt, zahlt keine Spekulationssteuer. Wer eine vermietete Immobilie innerhalb von 10 Jahren nach Kauf verkauft, zahlt auf den Gewinn Einkommensteuer (bis zu 45 %). Bei Erbschaft beginnt die 10-Jahresfrist mit dem Kaufdatum des Erblassers.' },
            ].map((item, idx) => (
              <details key={idx} className="group px-7 py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-semibold text-brand-anthrazit text-sm leading-snug">{item.q}</span>
                  <span className="shrink-0 w-6 h-6 bg-brand-green/10 rounded-full flex items-center justify-center transition-transform group-open:rotate-45">
                    <svg className="w-3.5 h-3.5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-brand-gray-warm text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
