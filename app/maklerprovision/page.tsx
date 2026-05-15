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
  title: 'Maklerprovision Frankfurt 2025 – Kosten & Leistungen',
  description: 'Maklerprovision Frankfurt: Höhe, Aufteilung, was inklusive ist und wann die Provision fällig wird. Alle Fakten transparent, mit konkreten Zahlenbeispielen.',
  keywords: ['Maklerprovision', 'Maklerprovision Frankfurt', 'Maklergebühren', 'Provision Immobilienmakler', 'was kostet Makler', 'Maklerprovision Hessen'],
  alternates: { canonical: 'https://www.immovativ-invest.de/maklerprovision' },
  openGraph: {
    title: 'Maklerprovision 2025 – Was kostet was, was ist inklusive?',
    description: 'Alles zur Maklerprovision: Höhe in Frankfurt, Halbteilungsprinzip, was im Service enthalten ist und worauf du achten solltest.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/maklerprovision',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Maklerprovision Frankfurt – immovativInvest' }],
  },
}

const faqItems = [
  {
    question: 'Wie hoch ist die Maklerprovision in Frankfurt 2025?',
    answer: 'Die Maklerprovision in Frankfurt beträgt üblicherweise 5,95 % bis 7,14 % des Kaufpreises inkl. 19 % MwSt. Seit dem Gesetz von Dezember 2020 wird sie hälftig zwischen Käufer und Verkäufer geteilt – typischerweise je 3,57 % für beide Seiten.',
  },
  {
    question: 'Wer zahlt die Maklerprovision – Käufer oder Verkäufer?',
    answer: 'Seit dem 23. Dezember 2020 gilt das Halbteilungsprinzip: Wer den Makler beauftragt, zahlt mindestens die Hälfte der Provision. In der Praxis teilen Käufer und Verkäufer die Provision hälftig – je ca. 3,57 % inkl. MwSt. bei einer Gesamtprovision von 7,14 %.',
  },
  {
    question: 'Wann ist die Maklerprovision fällig?',
    answer: 'Die Maklerprovision wird erst nach erfolgreicher Beurkundung des Kaufvertrags beim Notar fällig. Es gibt keine Vorabzahlungspflicht. Ein seriöser Makler stellt keine Rechnung, bevor der Kaufvertrag unterschrieben ist.',
  },
  {
    question: 'Was ist in der Maklerprovision enthalten?',
    answer: 'Bei immovativInvest sind enthalten: professionelle Fotografie, vollständiges Exposé, Vermarktung auf allen Portalen, Besichtigungsmanagement, Käufer-Qualifizierung, Preisverhandlung, Notarkoordination und alle benötigten Unterlagen (Grundbuchauszug, Energieausweis etc.). Es gibt keine versteckten Zusatzkosten.',
  },
  {
    question: 'Gibt es Makler ohne Provision für den Verkäufer?',
    answer: 'Theoretisch kann ein Makler die volle Provision dem Käufer berechnen – dann zahlt der Verkäufer nichts. In der Praxis ist das seit 2020 bei Wohnimmobilien nicht mehr üblich, da das Gesetz Halbteilung vorschreibt wenn der Verkäufer Auftraggeber ist. Einzelne Makler bieten auch Festpreismodelle an.',
  },
  {
    question: 'Kann ich die Maklerprovision steuerlich absetzen?',
    answer: 'Als Privatperson beim Verkauf einer selbst genutzten Immobilie ist das in der Regel nicht möglich. Als Vermieter oder Investor kann die Provision als Werbungskosten abzugsfähig sein. Steuerberatung empfiehlt sich im Einzelfall.',
  },
  {
    question: 'Was passiert, wenn der Verkauf nicht zustande kommt?',
    answer: 'Kein Verkauf = keine Provision. Ein seriöser Makler arbeitet ausschließlich erfolgsbasiert. Du zahlst nichts, wenn kein Käufer gefunden wird und kein Kaufvertrag zustande kommt. Wer Vorauszahlungen verlangt, ist kein seriöser Makler.',
  },
  {
    question: 'Ist die Provision verhandelbar?',
    answer: 'Grundsätzlich ja, aber mit Vorsicht. Ein Makler, der sofort nachgibt, investiert am Ende weniger in die Vermarktung – was dich im Endpreis mehr kosten kann als die Provision selbst. Die Gesamtrechnung zählt: Provision + erzielter Verkaufspreis, nicht nur die Provision isoliert.',
  },
]

export default function MaklerprovisionPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Maklerprovision', item: 'https://www.immovativ-invest.de/maklerprovision' },
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
      <Header ctaLabel="Kostenlos beraten lassen" ctaHref="#kontakt" />

      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Maklerprovision</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              💶 Preistransparenz
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Maklerprovision Frankfurt 2025:<br />
              <span className="text-brand-green">Was kostet was — komplett erklärt.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-4">
              Wie hoch ist die Maklerprovision in Frankfurt? Wer zahlt was? Was ist im Service enthalten — und was nicht? Hier findest du alle Antworten: transparent, mit konkreten Zahlen und ohne Fachjargon.
            </p>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto mb-8">
              Kurz vorab: Bei uns gibt es keine versteckten Kosten. Alles, was du bezahlst, steht vor Vertragsunterzeichnung schwarz auf weiß.
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
                <p className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">Auf einen Blick</p>
                <p className="text-brand-anthrazit font-medium leading-relaxed">
                  Die Maklerprovision in Frankfurt beträgt typischerweise <strong>7,14 % des Kaufpreises inkl. MwSt.</strong>, hälftig geteilt zwischen Käufer und Verkäufer (je 3,57 %). Bei einem Kaufpreis von 500.000 € zahlt jede Seite ca. 17.850 €. Die Provision wird erst nach Notarbeurkundung fällig — keine Vorauszahlungen, kein Verkauf = keine Provision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provisions-Tabelle */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                📊 Konkrete Zahlen
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was kostet der Makler — konkret.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Maklerprovision 7,14 % inkl. MwSt., hälftig geteilt (§ 656c BGB). Gültig für Wohnimmobilien in Hessen.
              </p>
            </div>

            {/* Haupttabelle */}
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft mb-6">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Kaufpreis</th>
                    <th className="text-center px-5 py-4 font-semibold">Provision gesamt<br /><span className="text-white/60 font-normal text-xs">(7,14 % inkl. MwSt.)</span></th>
                    <th className="text-center px-5 py-4 font-semibold">Anteil Verkäufer<br /><span className="text-white/60 font-normal text-xs">(3,57 %)</span></th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Anteil Käufer<br /><span className="text-white/60 font-normal text-xs">(3,57 %)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['250.000 €', '17.850 €', '8.925 €', '8.925 €'],
                    ['300.000 €', '21.420 €', '10.710 €', '10.710 €'],
                    ['350.000 €', '24.990 €', '12.495 €', '12.495 €'],
                    ['400.000 €', '28.560 €', '14.280 €', '14.280 €'],
                    ['450.000 €', '32.130 €', '16.065 €', '16.065 €'],
                    ['500.000 €', '35.700 €', '17.850 €', '17.850 €'],
                    ['600.000 €', '42.840 €', '21.420 €', '21.420 €'],
                    ['700.000 €', '49.980 €', '24.990 €', '24.990 €'],
                    ['800.000 €', '57.120 €', '28.560 €', '28.560 €'],
                    ['1.000.000 €', '71.400 €', '35.700 €', '35.700 €'],
                    ['1.500.000 €', '107.100 €', '53.550 €', '53.550 €'],
                  ].map(([preis, gesamt, verkäufer, käufer], idx) => (
                    <tr key={preis} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-bold text-brand-anthrazit">{preis}</td>
                      <td className="px-5 py-3.5 text-center text-brand-gray-warm">{gesamt}</td>
                      <td className="px-5 py-3.5 text-center font-semibold text-brand-anthrazit">{verkäufer}</td>
                      <td className="px-5 py-3.5 text-center font-semibold text-brand-anthrazit">{käufer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-gray-warm text-center">Alle Werte sind Richtwerte. Die genaue Provision wird individuell vereinbart und vor Vertragsunterzeichnung schriftlich festgehalten.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Was ist enthalten */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was ist in der Provision enthalten — und was nicht.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Nicht jeder Makler leistet dasselbe. Hier siehst du, was bei uns im Service enthalten ist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Enthalten */}
              <div className="bg-white rounded-2xl border border-brand-green/30 p-6">
                <h3 className="font-bold text-brand-anthrazit text-lg mb-5 flex items-center gap-2">
                  <span className="text-2xl">✅</span> Bei immovativInvest inklusive
                </h3>
                <ul className="space-y-3">
                  {[
                    'Persönliche Wertermittlung vor Ort',
                    'Professionelle Immobilienfotografie',
                    'Vollständiges, hochwertiges Exposé (print + digital)',
                    'Vermarktung auf Immoscout24, Immowelt + weitere',
                    'Grundbuchauszug und Energieausweis-Beschaffung',
                    'Alle weiteren benötigten Unterlagen',
                    'Besichtigungsmanagement (Koordination & Durchführung)',
                    'Käufer-Qualifizierung mit Finanzierungsnachweis',
                    'Professionelle Preisverhandlung',
                    'Notarkoordination und Kaufvertragsprüfung',
                    'Begleitung bis zur Schlüsselübergabe',
                    'Fester Ansprechpartner, persönlich erreichbar',
                    'Wöchentliche Status-Updates ohne Nachfragen',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start text-sm text-brand-gray-warm">
                      <span className="text-brand-green font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nicht enthalten / externe Kosten */}
              <div className="bg-white rounded-2xl border border-brand-gray-border p-6">
                <h3 className="font-bold text-brand-anthrazit text-lg mb-5 flex items-center gap-2">
                  <span className="text-2xl">ℹ️</span> Separate Kosten (Käufer/externe Stellen)
                </h3>
                <ul className="space-y-3">
                  {[
                    { pos: 'Grunderwerbsteuer Hessen', wert: '6,0 % des Kaufpreises', wer: 'Käufer' },
                    { pos: 'Notargebühren', wert: 'ca. 1,0–1,5 % des Kaufpreises', wer: 'Käufer' },
                    { pos: 'Grundbucheintragung', wert: 'ca. 0,5 % des Kaufpreises', wer: 'Käufer' },
                    { pos: 'Maklerprovision Käufer', wert: '3,57 % inkl. MwSt.', wer: 'Käufer' },
                    { pos: 'Maklerprovision Verkäufer', wert: '3,57 % inkl. MwSt.', wer: 'Verkäufer' },
                    { pos: 'Ggf. Vorfälligkeitsentschädigung', wert: 'Je nach Darlehensvertrag', wer: 'Verkäufer' },
                    { pos: 'Ggf. Spekulationssteuer', wert: 'Je nach Haltedauer/Nutzung', wer: 'Verkäufer' },
                  ].map((item) => (
                    <li key={item.pos} className="flex items-start justify-between gap-3 text-sm py-2.5 border-b border-brand-gray-border last:border-0">
                      <div>
                        <span className="font-medium text-brand-anthrazit">{item.pos}</span>
                        <div className="text-xs text-brand-gray-warm mt-0.5">{item.wert}</div>
                      </div>
                      <span className="text-xs font-semibold shrink-0 bg-brand-gray-light border border-brand-gray-border rounded-full px-2 py-0.5">{item.wer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Käufer-Nebenkosten Summe */}
            <div className="bg-brand-anthrazit rounded-2xl p-5">
              <h3 className="font-bold text-white mb-3 text-base">Kaufnebenkosten-Überblick für Käufer in Hessen</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Grunderwerbsteuer', wert: '6,0 %', note: 'des Kaufpreises' },
                  { label: 'Notar & Grundbuch', wert: '1,5–2,0 %', note: 'des Kaufpreises' },
                  { label: 'Maklerprovision', wert: '3,57 %', note: 'inkl. MwSt.' },
                  { label: 'Gesamt Nebenkosten', wert: '11–12 %', note: 'als Richtwert' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-brand-champagne font-bold text-xl">{item.wert}</div>
                    <div className="text-white text-xs font-semibold mt-0.5">{item.label}</div>
                    <div className="text-white/50 text-xs">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Halbteilungsprinzip */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-5">
                  ⚖️ Gesetz seit 2020
                </div>
                <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">Das Halbteilungsprinzip: Was gilt seit 2020?</h2>
                <div className="space-y-4 text-brand-gray-warm text-sm leading-relaxed">
                  <p>Seit dem <strong className="text-brand-anthrazit">23. Dezember 2020</strong> regelt § 656c BGB die Maklerprovision bei Wohnimmobilien neu. Das Kernprinzip: <strong className="text-brand-anthrazit">Wer den Makler beauftragt, kann nicht mehr die volle Provision auf den Käufer abwälzen.</strong></p>
                  <p>In der Praxis bedeutet das: Wenn du als Verkäufer den Makler beauftragst, trägst du mindestens 50 % der Provision. Die andere Hälfte kann der Käufer erst dann zur Provision verpflichtet werden, wenn der Vertrag entsprechend ausgestaltet ist.</p>
                  <p>In Frankfurt und ganz Hessen ist die hälftige Teilung (je 3,57 % inkl. MwSt. bei einer Gesamtprovision von 7,14 %) der Standard. Das gilt ausschließlich für <strong className="text-brand-anthrazit">Wohnimmobilien</strong> (Ein-/Zweifamilienhäuser, Eigentumswohnungen).</p>
                  <p>Bei Gewerbeimmobilien und Mehrfamilienhäusern ist die Aufteilung frei verhandelbar.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-anthrazit rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-base mb-4">Regelung auf einen Blick</h3>
                  {[
                    { label: 'Gilt für', wert: 'Wohnimmobilien (§ 656a BGB)' },
                    { label: 'Gilt seit', wert: '23. Dezember 2020' },
                    { label: 'Grundprinzip', wert: 'Auftraggeber zahlt mind. 50 %' },
                    { label: 'Standard Frankfurt', wert: 'Je 3,57 % (7,14 % gesamt)' },
                    { label: 'Fälligkeit', wert: 'Nach Notarbeurkundung' },
                    { label: 'Vorauszahlung', wert: 'Nicht erlaubt bei Wohnimmobilien' },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                      <span className="text-white/60 text-sm">{row.label}</span>
                      <span className="font-semibold text-sm text-brand-champagne">{row.wert}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-brand-green/10 border border-brand-green/30 rounded-2xl p-5">
                  <div className="flex gap-3">
                    <span className="text-xl">💡</span>
                    <p className="text-brand-anthrazit text-sm leading-relaxed">
                      <strong>Wichtig:</strong> Das Gesetz schreibt die Halbteilung nicht vor — es verbietet nur die einseitige Abwälzung auf den Käufer. Vereinbaren Käufer und Verkäufer eine andere Aufteilung, ist das zulässig, solange der Verkäufer mindestens 50 % trägt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Provision vs. Mehrerlös */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Provision zahlen oder selbst verkaufen?</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Die Rechnung ist einfacher als gedacht — wenn man alle Faktoren berücksichtigt.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft mb-6">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Faktor</th>
                    <th className="text-center px-5 py-4 font-semibold text-green-300">Mit Makler</th>
                    <th className="text-center px-5 py-4 font-semibold rounded-tr-2xl">Privatverkauf</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Typischer Kaufpreis (500k Marktwert)', '500.000–510.000 €', '460.000–480.000 €'],
                    ['Provision (Verkäufer)', '–17.850 € (3,57 %)', '0 €'],
                    ['Fotos & Exposé', '0 € (enthalten)', '–500–1.000 €'],
                    ['Portale & Vermarktung', '0 € (enthalten)', '–300–1.200 €'],
                    ['Zeitaufwand (geschätzt)', '~5 Stunden total', '~80–120 Stunden'],
                    ['Rechtliche Risiken', 'Abgesichert', 'Eigenverantwortung'],
                    ['Nettobetrag (konservativ)', '~482.000 €', '~458.000 €'],
                    ['Vorteil Maklerverkauf', '+24.000 € im Schnitt', '–'],
                  ].map(([faktor, makler, privat], idx) => (
                    <tr key={faktor} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-medium text-brand-anthrazit">{faktor}</td>
                      <td className={`px-5 py-3.5 text-center font-medium ${idx === 7 ? 'text-brand-green font-bold' : ''}`}>{makler}</td>
                      <td className={`px-5 py-3.5 text-center ${idx === 7 ? 'text-brand-gray-warm' : 'text-brand-gray-warm'}`}>{privat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-brand-gray-warm text-center">Rechenbeispiel basierend auf Erfahrungswerten im Frankfurter Markt. Tatsächliche Ergebnisse hängen von Lage, Zustand und Marktlage ab.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Woran du einen seriösen Makler erkennst */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                🔍 Worauf achten?
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Provision vergleichen: Das ist wirklich wichtig.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Nicht nur die Höhe der Provision entscheidet — sondern was du dafür bekommst.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: '📋',
                  titel: 'Was ist inklusive?',
                  punkte: [
                    'Sind Fotos und Exposé enthalten?',
                    'Sind Portale und Vermarktung inklusive?',
                    'Wer beschafft Grundbuchauszug und Energieausweis?',
                    'Wer koordiniert den Notartermin?',
                  ],
                },
                {
                  icon: '📄',
                  titel: 'Was steht im Vertrag?',
                  punkte: [
                    'Keine automatische Verlängerungsklausel?',
                    'Klare Laufzeit (max. 8 Wochen)?',
                    'Provision nur bei Erfolg?',
                    'Eigenverkauf geregelt?',
                  ],
                },
                {
                  icon: '🤝',
                  titel: 'Welche Ergebnisse?',
                  punkte: [
                    'Konkrete Referenzen in deiner Region?',
                    'Durchschnittliche Vermarktungszeit?',
                    'Verhältnis Angebots- zu Kaufpreis?',
                    'Echte Bewertungen überprüfbar?',
                  ],
                },
              ].map((block) => (
                <div key={block.titel} className="bg-brand-cream rounded-2xl border border-brand-gray-border p-5">
                  <div className="text-3xl mb-3">{block.icon}</div>
                  <h3 className="font-bold text-brand-anthrazit mb-4">{block.titel}</h3>
                  <ul className="space-y-2">
                    {block.punkte.map((punkt) => (
                      <li key={punkt} className="flex gap-2 items-start text-sm text-brand-gray-warm">
                        <span className="text-brand-green shrink-0 mt-0.5">→</span>
                        {punkt}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-2xl font-bold text-white mb-2">Alle Kosten transparent — bevor du unterschreibst.</h2>
            <p className="text-white/70 text-sm">Kostenloses Erstgespräch — mit konkreten Zahlen, ehrlichen Antworten.</p>
          </div>
          <Link href="#kontakt" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Jetzt beraten lassen →
          </Link>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Häufige Fragen zur Maklerprovision."
      />

      <ContactForm
        variant="makler"
        title="Wir erklären dir alle Kosten — vor dem Erstgespräch."
        subtitle="Keine Überraschungen, keine versteckten Gebühren. Nur ehrliche Antworten."
      />

      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-brand-anthrazit mb-6">Das könnte dich auch interessieren</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/bester-immobilienmakler-frankfurt', label: 'Bester Makler Frankfurt', icon: '🏆' },
              { href: '/makler-oder-privatverkauf', label: 'Makler oder Privatverkauf?', icon: '⚖️' },
              { href: '/serioeser-makler-erkennen', label: 'Seriösen Makler erkennen', icon: '🔍' },
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
