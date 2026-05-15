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
  title: 'Immobilienmakler Kosten Frankfurt 2025 – Alle Fakten',
  description: 'Was kostet ein Immobilienmakler in Frankfurt? Provision, Halbteilung, versteckte Kosten – alle Fakten zur Maklerprovision in Hessen erklärt.',
  keywords: ['Immobilienmakler Kosten Frankfurt', 'Maklerprovision Frankfurt', 'Makler Provision Hessen', 'Maklergebühren Frankfurt', 'Provision Immobilienmakler'],
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienmakler-kosten-frankfurt' },
  openGraph: {
    title: 'Immobilienmakler Kosten Frankfurt 2025 – Was kostet ein Makler wirklich?',
    description: 'Maklerprovision in Frankfurt und Hessen: Wer zahlt was? Wie wird aufgeteilt? Was ist enthalten — und was nicht? Alle Fakten transparent erklärt.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/immobilienmakler-kosten-frankfurt',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Immobilienmakler Kosten Frankfurt – immovativInvest' }],
  },
}

const faqItems = [
  {
    question: 'Wie hoch ist die Maklerprovision in Frankfurt?',
    answer: 'Die Maklerprovision in Frankfurt (Hessen) beträgt üblicherweise 5,95 % bis 7,14 % des Kaufpreises inkl. MwSt. Seit dem Gesetz von 2020 wird sie in der Regel hälftig zwischen Käufer und Verkäufer geteilt – also typischerweise je 3,57 % für beide Seiten.',
  },
  {
    question: 'Muss ich als Verkäufer Provision zahlen?',
    answer: 'Seit Dezember 2020 gilt in Deutschland das Halbteilungsprinzip: Wer den Makler beauftragt, zahlt mindestens die Hälfte der Provision. In der Praxis bedeutet das: Wenn du als Verkäufer den Makler beauftragst, trägst du mindestens 50 % – oft 3,57 % des Kaufpreises inkl. MwSt.',
  },
  {
    question: 'Gibt es versteckte Kosten beim Makler?',
    answer: 'Bei einem seriösen Makler nicht. Professionelle Fotos, Energieausweis-Beschaffung, Grundbuchauszug und Portalgebühren sollten im Service enthalten sein. Frag vor Vertragsunterzeichnung explizit, was inklusive ist – und lass dir das schriftlich bestätigen.',
  },
  {
    question: 'Kann ich die Maklerprovision als Verkäufer steuerlich absetzen?',
    answer: 'Als Privatperson, die eine selbst genutzte Immobilie verkauft, ist das in der Regel nicht möglich. Als Vermieter oder bei Gewerbeobjekten kann die Maklerprovision als Werbungskosten oder Betriebsausgabe absetzbar sein. Steuerberatung empfiehlt sich im Einzelfall.',
  },
  {
    question: 'Wann muss die Provision bezahlt werden?',
    answer: 'Die Maklerprovision wird erst nach erfolgreicher Beurkundung beim Notar fällig – also wenn der Kaufvertrag unterschrieben ist. Es gibt keine Vorabzahlungspflicht. Wer Vorkasse verlangt, handelt unseriös.',
  },
  {
    question: 'Was bekomme ich für die Provision?',
    answer: 'Ein guter Makler übernimmt: Wertermittlung, professionelle Fotografie, Exposé-Erstellung, Portalsyndizierung, Besichtigungsmanagement, Käufer-Qualifizierung, Preisverhandlung, Koordination mit Notar und vollständige Abwicklung bis zur Schlüsselübergabe. Das spart dir ca. 80–120 Stunden Eigenaufwand.',
  },
]

export default function ImmobilienmaklerKostenFrankfurtPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Immobilienmakler Kosten Frankfurt', item: 'https://www.immovativ-invest.de/immobilienmakler-kosten-frankfurt' },
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
      <Header ctaLabel="Kostenloses Erstgespräch" ctaHref="#kontakt" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Immobilienmakler Kosten Frankfurt</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              💶 Maklerprovision Frankfurt
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Was kostet ein Immobilienmakler<br />
              <span className="text-brand-green">in Frankfurt wirklich?</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-4">
              Provision, Halbteilung, versteckte Kosten — alles, was du zur Maklerprovision in Frankfurt und Hessen wissen musst. Transparent erklärt, mit konkreten Zahlenbeispielen.
            </p>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto mb-8">
              Spoiler: Gut investierte Provision zahlt sich aus. Studien zeigen: Maklerverkäufe erzielen im Schnitt 5–15 % höhere Preise als Privatverkäufe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                Kostenloses Erstgespräch →
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
                  Die Maklerprovision in Frankfurt beträgt typischerweise 5,95–7,14 % des Kaufpreises (inkl. MwSt.) und wird seit 2020 hälftig zwischen Käufer und Verkäufer geteilt. Bei einem Kaufpreis von 500.000 € zahlt jede Seite ca. 17.850 €. Bei einem seriösen Makler sind keine weiteren Kosten für dich als Verkäufer vorgesehen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zahlenbeispiele */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                🔢 Konkrete Zahlen
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Maklerprovision in Frankfurt: konkrete Beispiele.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Provision von 7,14 % (inkl. MwSt.), hälftig geteilt nach dem Halbteilungsprinzip (je 3,57 %).
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Kaufpreis</th>
                    <th className="text-center px-5 py-4 font-semibold">Provision gesamt (7,14 %)</th>
                    <th className="text-center px-5 py-4 font-semibold">Anteil Verkäufer (3,57 %)</th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Anteil Käufer (3,57 %)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['300.000 €', '21.420 €', '10.710 €', '10.710 €'],
                    ['400.000 €', '28.560 €', '14.280 €', '14.280 €'],
                    ['500.000 €', '35.700 €', '17.850 €', '17.850 €'],
                    ['650.000 €', '46.410 €', '23.205 €', '23.205 €'],
                    ['800.000 €', '57.120 €', '28.560 €', '28.560 €'],
                    ['1.000.000 €', '71.400 €', '35.700 €', '35.700 €'],
                  ].map(([preis, gesamt, verkäufer, käufer], idx) => (
                    <tr key={preis} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-semibold text-brand-anthrazit">{preis}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{gesamt}</td>
                      <td className="px-5 py-3.5 text-center font-medium text-brand-anthrazit">{verkäufer}</td>
                      <td className="px-5 py-3.5 text-center font-medium text-brand-anthrazit">{käufer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-gray-warm mt-3 text-center">Alle Beträge sind Richtwerte. Die genaue Höhe wird individuell vereinbart und vor Vertragsunterzeichnung transparent kommuniziert.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Was ist enthalten */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was bekomme ich für die Provision?</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Eine gute Provision ist eine Investition — keine Ausgabe. Das steckt bei uns im Service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: '📊',
                  title: 'Professionelle Wertermittlung',
                  desc: 'Keine Online-Schätzung, sondern eine fundierte Bewertung vor Ort — auf Basis aktueller Vergleichsverkäufe, Lage und Zustand der Immobilie. Inkludiert, ohne Aufpreis.',
                },
                {
                  icon: '📸',
                  title: 'Professionelle Immobilienfotografie',
                  desc: 'Hochwertige Fotos sind der stärkste Hebel für Anfragen und Preis. Wir beauftragen professionelle Fotografen — auf unsere Kosten, nicht auf deine.',
                },
                {
                  icon: '📋',
                  title: 'Hochwertiges Exposé',
                  desc: 'Ein durchdachtes Exposé mit präzisen Texten, Grundrissen, Lagekarte und allen relevanten Informationen — print-ready und digital.',
                },
                {
                  icon: '🌐',
                  title: 'Vermarktung auf allen Portalen',
                  desc: 'Immoscout24, Immowelt und weiteren Kanälen — inklusive Premium-Platzierung. Dazu unser eigenes Käufernetzwerk mit vorqualifizierten Interessenten.',
                },
                {
                  icon: '👥',
                  title: 'Besichtigungsmanagement',
                  desc: 'Wir organisieren und führen alle Besichtigungen — ohne Aufwand für dich. Du musst nicht selbst anwesend sein, wenn du das nicht möchtest.',
                },
                {
                  icon: '🔍',
                  title: 'Käufer-Qualifizierung',
                  desc: 'Nur ernsthafte Käufer mit Finanzierungsnachweis kommen in die engere Auswahl. Das spart Zeit und verhindert geplatzte Finanzierungen.',
                },
                {
                  icon: '💬',
                  title: 'Preisverhandlung',
                  desc: 'Professionelle Verhandlungsführung — mit Abstand zur Immobilie. Wir haben kein emotionales Verhältnis zu dem Objekt, das uns beim Verhandeln bremsen würde.',
                },
                {
                  icon: '📄',
                  title: 'Notarkoordination bis zur Übergabe',
                  desc: 'Vom Kaufvertragsentwurf über die Notarterminabstimmung bis zur Schlüsselübergabe — wir begleiten dich durch den gesamten Abschluss.',
                },
                {
                  icon: '🗂️',
                  title: 'Alle Unterlagen inklusive',
                  desc: 'Grundbuchauszug, Energieausweis, Teilungserklärung, Flurkarte — wir beschaffen alle benötigten Unterlagen. Das ist bei uns im Service enthalten.',
                },
                {
                  icon: '📞',
                  title: 'Fester Ansprechpartner',
                  desc: 'Kein Call-Center, kein ständig wechselndes Team. Du hast einen festen Ansprechpartner, der deine Immobilie und deine Situation kennt.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-brand-gray-border p-5 flex gap-4">
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-brand-anthrazit mb-1.5">{item.title}</h3>
                    <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Gesetze / Halbteilung */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-5">
                  ⚖️ Rechtliche Grundlagen
                </div>
                <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">Das Halbteilungsprinzip seit 2020.</h2>
                <div className="space-y-4 text-brand-gray-warm text-sm leading-relaxed">
                  <p>
                    Seit dem <strong className="text-brand-anthrazit">23. Dezember 2020</strong> gilt in Deutschland ein einheitliches Gesetz zur Maklerprovision bei Wohnimmobilien (§ 656a–656d BGB): Der Besteller-Grundsatz in neuer Form.
                  </p>
                  <p>
                    Die entscheidende Regel: <strong className="text-brand-anthrazit">Wer den Makler beauftragt, zahlt mindestens die Hälfte.</strong> Das heißt: Wenn ein Verkäufer den Makler exklusiv beauftragt, kann er nicht mehr die volle Provision auf den Käufer abwälzen.
                  </p>
                  <p>
                    In der Praxis wird die Provision seither meist hälftig geteilt — je Hälfte für Käufer und Verkäufer. In Frankfurt sind das typischerweise je 3,57 % inkl. MwSt. (bei einer Gesamtprovision von 7,14 %).
                  </p>
                  <p>
                    Wichtig: Das Gesetz gilt nur für Wohnimmobilien (Ein- und Zweifamilienhäuser, Eigentumswohnungen). Bei Gewerbeimmobilien und Mehrfamilienhäusern sind freie Vereinbarungen möglich.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-anthrazit rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Provisionsverteilung auf einen Blick</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Wohnimmobilien (seit 2020)', value: 'Halbteilung Pflicht', color: 'text-brand-champagne' },
                      { label: 'Gewerbeimmobilien', value: 'Frei verhandelbar', color: 'text-white/70' },
                      { label: 'Übliche Provision Frankfurt', value: '5,95–7,14 % inkl. MwSt.', color: 'text-brand-champagne' },
                      { label: 'Anteil Verkäufer', value: 'Ca. 3,57 % inkl. MwSt.', color: 'text-white/90' },
                      { label: 'Anteil Käufer', value: 'Ca. 3,57 % inkl. MwSt.', color: 'text-white/90' },
                      { label: 'Wann fällig?', value: 'Nach Notarbeurkundung', color: 'text-white/90' },
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                        <span className="text-white/60 text-sm">{row.label}</span>
                        <span className={`font-semibold text-sm ${row.color}`}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-green/10 border border-brand-green/30 rounded-2xl p-5">
                  <div className="flex gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h3 className="font-bold text-brand-anthrazit mb-1.5">Unser Versprechen</h3>
                      <p className="text-brand-gray-warm text-sm leading-relaxed">
                        Bei immovativInvest gibt es keine versteckten Kosten. Die genaue Provisionshöhe wird vor Vertragsunterzeichnung schriftlich festgehalten. Alle Unterlagen, Fotos und Vermarktungsmaßnahmen sind im Service enthalten — ohne Aufpreis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Vergleich: Provision vs. Mehrerlös */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Ist die Provision eine Ausgabe oder eine Investition?</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Die Rechnung ist eindeutig — wenn du den richtigen Makler wählst.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Szenario</th>
                    <th className="text-center px-5 py-4 font-semibold">Kaufpreis</th>
                    <th className="text-center px-5 py-4 font-semibold">Provision (3,57 %)</th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Netto für dich</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Privatverkauf (500.000 € Marktwert)', '470.000 € (–6 %)', '0 €', '470.000 €'],
                    ['Maklerverkauf (500.000 € Marktwert)', '500.000 €', '–17.850 €', '482.150 €'],
                    ['Maklerverkauf (510.000 € erzielt)', '510.000 €', '–18.207 €', '491.793 €'],
                  ].map(([szenario, preis, provision, netto], idx) => (
                    <tr key={szenario} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-medium text-brand-anthrazit">{szenario}</td>
                      <td className="px-5 py-3.5 text-center">{preis}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{provision}</td>
                      <td className={`px-5 py-3.5 text-center font-bold ${idx === 0 ? 'text-red-500' : 'text-brand-green'}`}>{netto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-gray-warm mt-3 text-center">Rechenbeispiel zur Veranschaulichung. Tatsächliche Ergebnisse hängen von Immobilie, Lage und Marktlage ab.</p>
            <div className="mt-6 bg-brand-green/10 border border-brand-green/30 rounded-2xl p-5">
              <p className="text-brand-anthrazit text-sm leading-relaxed">
                <strong>Fazit:</strong> Selbst wenn ein Makler "nur" den Marktwert erzielt, liegt der Nettobetrag nach Provision oft höher als beim Privatverkauf — weil Privatverkäufe häufig unter Marktwert abgeschlossen werden. Wer besonders gut verhandelt, erzielt sogar deutlich mehr.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Was ist deine Immobilie wirklich wert?</h2>
            <p className="text-white/70 text-sm">Kostenlose Wertermittlung — persönlich vor Ort, ohne Verpflichtung.</p>
          </div>
          <Link href="/immobilienbewertung" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Kostenlose Bewertung →
          </Link>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Häufige Fragen zur Maklerprovision in Frankfurt."
      />

      <ContactForm
        variant="makler"
        title="Kostenlos beraten lassen."
        subtitle="Wir erklären dir alle Kosten transparent — bevor du unterschreibst."
      />

      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-brand-anthrazit mb-6">Weitere nützliche Seiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/bester-immobilienmakler-frankfurt', label: 'Bester Makler Frankfurt', icon: '🏆' },
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
