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
  title: 'Seriösen Immobilienmakler erkennen – 12 Merkmale 2025',
  description: 'Wie erkenne ich einen seriösen Immobilienmakler? 12 konkrete Merkmale, typische Warnsignale und die richtigen Fragen für das Erstgespräch – damit du den Richtigen wählst.',
  keywords: ['seriösen Makler erkennen', 'seriöser Immobilienmakler', 'Makler Warnsignale', 'unseriöser Makler', 'Immobilienmakler prüfen Frankfurt'],
  alternates: { canonical: 'https://www.immovativ-invest.de/serioeser-makler-erkennen' },
  openGraph: {
    title: 'Seriösen Immobilienmakler erkennen – 12 Merkmale & Warnsignale 2025',
    description: 'Nicht jeder Makler ist seriös. Hier erfährst du, wie du einen guten von einem schlechten Makler unterscheidest — mit konkreten Fragen und Warnsignalen.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/serioeser-makler-erkennen',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Seriösen Immobilienmakler erkennen – immovativInvest' }],
  },
}

const faqItems = [
  {
    question: 'Woran erkenne ich einen seriösen Immobilienmakler?',
    answer: 'Ein seriöser Makler hat eine nachweisbare Zulassung (§ 34c GewO), nennt konkrete Referenzen in deiner Region, erklärt seine Wertermittlung transparent und hat klare, faire Vertragsbedingungen ohne automatische Verlängerung. Er drängt nicht und erklärt alle Kosten vorab.',
  },
  {
    question: 'Braucht ein Immobilienmakler in Deutschland eine Zulassung?',
    answer: 'Ja. Immobilienmakler benötigen eine Erlaubnis nach § 34c GewO (Gewerbeordnung). Diese wird von der zuständigen Gemeinde oder dem Amt ausgestellt. Zusätzlich sollten Makler Mitglied in einem Berufsverband wie dem IVD sein — das setzt Weiterbildung und Standesregeln voraus.',
  },
  {
    question: 'Was sind typische Warnsignale bei einem unseriösen Makler?',
    answer: 'Typische Warnsignale: Preisversprechen ohne Besichtigung, automatische Verlängerungsklauseln im Maklervertrag, Vorauskasse für Vermarktungsleistungen, fehlende oder ausweichende Antworten auf konkrete Referenzfragen, Druck beim Erstgespräch und unklare Provisionsregelungen.',
  },
  {
    question: 'Was ist ein qualifizierter Alleinauftrag und ist er seriös?',
    answer: 'Ein qualifizierter Alleinauftrag gibt dem Makler das exklusive Recht, die Immobilie zu vermarkten — auch ein Eigenverkauf löst die Provision aus. Das klingt hart, ist aber bei engagierten Maklern fair: Wer viel in Vermarktung investiert, braucht Planungssicherheit. Wichtig: Die Laufzeit sollte maximal 6–8 Wochen betragen und automatisch enden.',
  },
  {
    question: 'Kann ich Makler-Bewertungen im Internet vertrauen?',
    answer: 'Bedingt. Auf Google und Immoscout24 sind Bewertungen tendenziell positiv gefärbt — negative Erfahrungen werden seltener veröffentlicht. Verlass dich nicht allein auf Sterne. Frag nach persönlichen Referenzen, ruf ehemalige Kunden an (wenn der Makler das ermöglicht) und prüf, ob die Bewertungen spezifisch oder generisch klingen.',
  },
  {
    question: 'Was kostet eine Zusammenarbeit mit einem seriösen Makler?',
    answer: 'Gar nichts — bis zum Abschluss. Ein seriöser Makler verlangt keine Vorauszahlungen. Die Provision (in Frankfurt typischerweise 3,57 % für Verkäufer und 3,57 % für Käufer, je inkl. MwSt.) wird erst nach erfolgreicher Beurkundung beim Notar fällig. Alle Vermarktungskosten trägt der Makler.',
  },
]

export default function SerioeserMaklerErkennenPage() {
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
                  { '@type': 'ListItem', position: 2, name: 'Seriösen Makler erkennen', item: 'https://www.immovativ-invest.de/serioeser-makler-erkennen' },
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

      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Seriösen Makler erkennen</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-white to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
          <div className="max-w-4xl mx-auto relative text-left md:text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
              🔍 Makler-Check
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
              Seriösen Immobilienmakler erkennen:<br />
              <span className="text-brand-green">12 Merkmale, 8 Warnsignale.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-4">
              In Deutschland kann sich jeder "Immobilienmakler" nennen — eine gesetzlich geschützte Berufsbezeichnung gibt es nicht. Das macht die Auswahl schwer. Hier erfährst du, wie du seriöse von unseriösen Maklern unterscheidest — mit konkreten Merkmalen, echten Warnsignalen und den richtigen Fragen.
            </p>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto mb-8">
              Spoiler: Wer die richtigen Fragen stellt, erkennt einen guten Makler im ersten Gespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                Erstgespräch vereinbaren →
              </Link>
              <CTAButton href="/bester-immobilienmakler-frankfurt" variant="outline" size="md">
                Bester Makler Frankfurt →
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
                  Einen seriösen Makler erkennst du an drei Dingen: Er hat eine nachweisbare Zulassung (§ 34c GewO), erklärt seine Werteinschätzung transparent mit Vergleichsdaten und hat faire Vertragsbedingungen ohne automatische Verlängerungsklauseln. Das wichtigste Warnsignal: Ein Makler, der den höchsten Preis verspricht, ohne die Immobilie gesehen zu haben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Merkmale */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                ✅ Die 12 Merkmale
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">12 Merkmale eines seriösen Immobilienmaklers.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Diese Eigenschaften sollte jeder gute Makler mitbringen — ohne Ausnahme.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  nr: '01',
                  titel: 'Nachweisbare Zulassung nach § 34c GewO',
                  desc: 'Immobilienmakler benötigen in Deutschland eine gewerbliche Erlaubnis nach § 34c Gewerbeordnung. Diese setzt einen einwandfreien Leumund, geordnete wirtschaftliche Verhältnisse und ggf. eine Berufshaftpflichtversicherung voraus. Frag nach der Erlaubnisbehörde und prüfe im Zweifel nach.',
                },
                {
                  nr: '02',
                  titel: 'Transparente Wertermittlung mit Vergleichsdaten',
                  desc: 'Eine seriöse Werteinschätzung nennt konkrete Vergleichsverkäufe in der unmittelbaren Nachbarschaft, begründet Zu- und Abschläge und basiert auf einer persönlichen Besichtigung. Keine fundierten Vergleichsdaten = keine fundierte Werteinschätzung.',
                },
                {
                  nr: '03',
                  titel: 'Klare, faire Vertragsbedingungen',
                  desc: 'Ein seriöser Maklervertrag hat eine klare Laufzeit (4–8 Wochen), endet automatisch, enthält keine automatische Verlängerungsklausel und regelt Eigentümer-Eigenverkauf und Provisionspflichten unmissverständlich.',
                },
                {
                  nr: '04',
                  titel: 'Keine Vorauszahlungen',
                  desc: 'Ein seriöser Makler verdient ausschließlich bei Erfolg. Keine Vorauszahlung für Fotos, Portale oder Unterlagen. Alle Vermarktungskosten trägt der Makler — die Provision ist das einzige Entgelt und wird erst nach Notarbeurkundung fällig.',
                },
                {
                  nr: '05',
                  titel: 'Konkrete lokale Referenzen',
                  desc: 'Wer in Frankfurt vermittelt, sollte nachweisbare Verkäufe in Frankfurt vorweisen können — nicht in Hamburg oder Köln. Noch besser: Referenzen in deinem Stadtteil, mit Zeitrahmen und erzieltem Preis (oder zumindest einem Musterexposé).',
                },
                {
                  nr: '06',
                  titel: 'Professionelle Vermarktungsunterlagen',
                  desc: 'Musterexposé, professionelle Fotografie, durchdachte Beschreibungstexte — das ist der Standard, nicht die Ausnahme. Ein Makler, der dir kein Musterexposé zeigen kann, hat entweder keines — oder ist nicht bereit, in deine Immobilie zu investieren.',
                },
                {
                  nr: '07',
                  titel: 'Verständliche Erklärungen ohne Fachjargon',
                  desc: 'Ein guter Makler erklärt dir den Prozess so, dass du ihn vollständig verstehst — ohne dich mit Begriffen zu überwältigen. Wer alles verkompliziert oder ausweicht, möchte vielleicht nicht, dass du genau verstehst, was vereinbart wird.',
                },
                {
                  nr: '08',
                  titel: 'Fester persönlicher Ansprechpartner',
                  desc: 'Bei einem seriösen Makler weißt du, wer deine Immobilie bearbeitet. Kein anonymes Call-Center, kein ständig wechselndes Team. Frag beim Erstgespräch: Wer begleitet meinen Verkauf persönlich — und wie erreiche ich diese Person direkt?',
                },
                {
                  nr: '09',
                  titel: 'Schnelle und zuverlässige Kommunikation',
                  desc: 'Wie schnell antwortet der Makler auf deine Anfragen? Und wie schnell reagiert er auf Kaufinteressenten? Beides ist entscheidend. Langsame Reaktionszeiten kosten Käufer — und damit bares Geld.',
                },
                {
                  nr: '10',
                  titel: 'Mitgliedschaft in einem Berufsverband',
                  desc: 'Verbände wie IVD (Immobilienverband Deutschland), RDM oder BVI setzen Standesregeln, Fortbildungspflichten und Verhaltenskodizes voraus. Nicht zwingend — aber ein Qualitätssignal.',
                },
                {
                  nr: '11',
                  titel: 'Keine emotionalen Verkaufstricks',
                  desc: 'Kein Zeitdruck ("Angebot gilt nur heute"), keine übertriebenen Versprechungen ("Ich habe schon drei Käufer"), keine Beschönigungen des Marktes. Ein guter Makler redet mit dir auf Augenhöhe — auch wenn die Wahrheit unbequem ist.',
                },
                {
                  nr: '12',
                  titel: 'Klare Regelung für den Misserfolgsfall',
                  desc: 'Was passiert, wenn der Makler die Immobilie nicht verkauft? Was kostet das? Wie kannst du aus dem Vertrag? Ein seriöser Makler hat darauf klare, faire Antworten — und versteckt sich nicht hinter komplizierten Klauseln.',
                },
              ].map((item) => (
                <div key={item.nr} className="bg-white border border-brand-gray-border rounded-2xl p-5 hover:border-brand-green/30 hover:shadow-soft transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">{item.nr}</span>
                    <h3 className="font-bold text-brand-anthrazit text-sm">{item.titel}</h3>
                  </div>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Warnsignale */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 text-sm font-semibold text-red-700 mb-4">
                🚨 Warnsignale
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">8 Warnsignale, die du sofort erkennen solltest.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Diese Signale sind Gründe, den Makler nicht zu beauftragen — egal wie überzeugend der erste Eindruck ist.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  nr: '1',
                  signal: 'Preisversprechen ohne Besichtigung',
                  erkl: 'Wer dir am Telefon oder per E-Mail einen konkreten Kaufpreis für deine Immobilie nennt, ohne sie gesehen zu haben, rät blind. Eine seriöse Werteinschätzung erfordert eine persönliche Besichtigung, aktuelle Vergleichsdaten und die Bewertung individueller Besonderheiten. Alles andere ist Kaffeesatzleserei — oder bewusste Überhöhung, um deinen Auftrag zu bekommen.',
                },
                {
                  nr: '2',
                  signal: 'Automatische Verlängerungsklausel im Maklervertrag',
                  erkl: 'Ein Maklervertrag mit automatischer Verlängerung ("verlängert sich automatisch um X Wochen, falls nicht 2 Wochen vor Ablauf schriftlich gekündigt") sollte ein Warnsignal sein. Gute Makler brauchen solche Klauseln nicht — sie überzeugen durch Ergebnisse.',
                },
                {
                  nr: '3',
                  signal: 'Vorauskasse für Vermarktungsleistungen',
                  erkl: 'Kein seriöser Makler verlangt Vorabzahlungen für Fotografie, Portale, Energieausweis oder Unterlagen. Wer das verlangt, lagert sein eigenes Geschäftsrisiko auf dich aus — das ist kein partnerschaftliches Verhältnis.',
                },
                {
                  nr: '4',
                  signal: 'Ausweichende Antworten auf Referenzfragen',
                  erkl: 'Wenn du nach konkreten Verkäufen in deiner Nachbarschaft fragst und der Makler ausweicht, allgemein redet oder auf "Datenschutz" verweist, ohne zumindest Eckdaten zu nennen — fehlt entweder die Erfahrung oder die Bereitschaft zur Transparenz.',
                },
                {
                  nr: '5',
                  signal: 'Zeitdruck und Verknappungsrhetorik',
                  erkl: 'Sätze wie "Ich habe schon drei Interessenten für Ihre Wohnung" vor der Bewerbung oder "Dieses Angebot gilt nur bis Ende der Woche" sind klassische Verkaufstricks. Ein guter Makler gibt dir Zeit für deine Entscheidung.',
                },
                {
                  nr: '6',
                  signal: 'Kein Impressum oder unklare Unternehmensangaben',
                  erkl: 'Jede gewerbliche Website in Deutschland benötigt ein vollständiges Impressum mit Firmennamen, Anschrift, Handelsregisternummer (falls GmbH) und der Erlaubnisbehörde nach § 34c GewO. Fehlen diese Angaben — Finger weg.',
                },
                {
                  nr: '7',
                  signal: 'Schlechte oder fehlende Vermarktungsbeispiele',
                  erkl: 'Wenn ein Makler dir kein Musterexposé oder Beispiel-Fotos zeigen kann oder will, zeigt das, welche Priorität er auf Vermarktungsqualität legt. Das Exposé ist oft das erste, was ein potenzieller Käufer sieht — schlechte Qualität kostet Anfragen und Preis.',
                },
                {
                  nr: '8',
                  signal: 'Fehlende Berufshaftpflichtversicherung',
                  erkl: 'Makler haften für Fehler — z.B. fehlerhafte Angaben zur Wohnfläche, nicht offengelegte Mängel oder Fehler bei der Objektbeschreibung. Eine Berufshaftpflicht schützt dich im Schadenfall. Frag explizit danach.',
                },
              ].map((item) => (
                <div key={item.nr} className="bg-white border border-red-200 rounded-2xl p-5">
                  <div className="flex gap-4 items-start">
                    <div className="shrink-0 w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold text-sm">{item.nr}</div>
                    <div>
                      <h3 className="font-bold text-brand-anthrazit mb-2 flex items-center gap-2">
                        <span className="text-red-500">⚠️</span> {item.signal}
                      </h3>
                      <p className="text-brand-gray-warm text-sm leading-relaxed">{item.erkl}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Checkliste für Erstgespräch */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit mb-4">
                📋 Checkliste
              </div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Deine Checkliste für das Erstgespräch.</h2>
              <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
                Drucke diese Liste aus oder speichere sie — und gehe jede Frage durch, bevor du unterschreibst.
              </p>
            </div>
            <div className="bg-brand-cream rounded-2xl border border-brand-gray-border p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { frage: 'Hat der Makler eine Zulassung nach § 34c GewO?', kategorie: 'Zulassung' },
                  { frage: 'Gehört er einem Berufsverband an (z.B. IVD)?', kategorie: 'Zulassung' },
                  { frage: 'Gibt es eine Berufshaftpflichtversicherung?', kategorie: 'Absicherung' },
                  { frage: 'Kann er konkrete Referenzverkäufe in meiner Gegend nennen?', kategorie: 'Erfahrung' },
                  { frage: 'Wie lange dauert die Vermarktung bei ihm im Schnitt?', kategorie: 'Erfahrung' },
                  { frage: 'Erklärt er seine Werteinschätzung mit Vergleichsdaten?', kategorie: 'Transparenz' },
                  { frage: 'Kann ich ein Musterexposé sehen?', kategorie: 'Qualität' },
                  { frage: 'Ist die genaue Provision vor Vertragsunterzeichnung bekannt?', kategorie: 'Kosten' },
                  { frage: 'Gibt es keine automatische Verlängerungsklausel im Vertrag?', kategorie: 'Vertrag' },
                  { frage: 'Enden alle Kosten, wenn kein Verkauf zustande kommt?', kategorie: 'Vertrag' },
                  { frage: 'Wer ist mein fester Ansprechpartner?', kategorie: 'Betreuung' },
                  { frage: 'Wie schnell antwortet er auf Anfragen?', kategorie: 'Betreuung' },
                  { frage: 'Was passiert, wenn ich mit der Zusammenarbeit nicht zufrieden bin?', kategorie: 'Austritt' },
                  { frage: 'Sind alle versprochenen Leistungen schriftlich im Vertrag?', kategorie: 'Absicherung' },
                ].map((item) => (
                  <div key={item.frage} className="flex gap-3 items-start bg-white rounded-xl border border-brand-gray-border p-4">
                    <div className="shrink-0 w-5 h-5 border-2 border-brand-gray-border rounded mt-0.5" />
                    <div>
                      <p className="text-brand-anthrazit text-sm font-medium leading-snug">{item.frage}</p>
                      <span className="text-xs text-brand-green font-semibold mt-1 block">{item.kategorie}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Vergleich: Seriös vs. Unseriös */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Seriöser Makler vs. unseriöser Makler — auf einen Blick.</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-brand-gray-border shadow-soft">
              <table className="w-full bg-white text-sm">
                <thead>
                  <tr className="bg-brand-anthrazit text-white">
                    <th className="text-left px-5 py-4 font-semibold rounded-tl-2xl">Aspekt</th>
                    <th className="text-center px-5 py-4 font-semibold text-green-300">✅ Seriöser Makler</th>
                    <th className="text-center px-5 py-4 font-semibold text-red-300 rounded-tr-2xl">❌ Unseriöser Makler</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Werteinschätzung', 'Nach Besichtigung, mit Vergleichsdaten', 'Am Telefon, ohne Besichtigung'],
                    ['Vertragslaufzeit', '4–8 Wochen, endet automatisch', 'Lange Laufzeit + Verlängerungsklausel'],
                    ['Vorabkosten', 'Keine — Provision nur bei Erfolg', 'Vorauszahlung für Fotos, Portale etc.'],
                    ['Referenzen', 'Konkret, regional, nachweisbar', 'Vage oder ausweichend'],
                    ['Kommunikation', 'Klar, ehrlich, ohne Zeitdruck', 'Drängerisch, Verknappungsrhetorik'],
                    ['Ansprechpartner', 'Fester Kontakt, direkt erreichbar', 'Wechselnde Ansprechpartner'],
                    ['Vermarktungsqualität', 'Professionelle Fotos, hochwertiges Exposé', 'Schlechte Fotos, Standardtext'],
                    ['Bei Misserfolg', 'Klare, faire Austrittsregelung', 'Versteckte Kosten, Kündigungsgebühren'],
                  ].map(([aspekt, serioes, unserioess], idx) => (
                    <tr key={aspekt} className={idx % 2 === 0 ? 'bg-white' : 'bg-brand-cream/40'}>
                      <td className="px-5 py-3.5 font-medium text-brand-anthrazit">{aspekt}</td>
                      <td className="px-5 py-3.5 text-center text-green-700 font-medium">{serioes}</td>
                      <td className="px-5 py-3.5 text-center text-red-600">{unserioess}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Über uns / Transparenz-Versprechen */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <div className="bg-brand-anthrazit rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm font-semibold text-white mb-5">
                    🔍 Unser Transparenzversprechen
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-5">Wir erfüllen alle 12 Merkmale — nachweisbar.</h2>
                  <div className="space-y-4 text-white/80 text-sm leading-relaxed">
                    <p>Wir schreiben diese Seite, weil wir wissen: Es gibt Makler in Frankfurt, die Eigentümer enttäuschen. Überhöhte Preisversprechen, schlechte Vermarktung, lange Verträge ohne Ergebnisse.</p>
                    <p>Unser Ansatz ist einfach: Wir arbeiten auf Augenhöhe, erklären jeden Schritt transparent und lassen die Ergebnisse für uns sprechen. Unser Vertrag läuft 6 Wochen und endet automatisch — weil wir keine langen Laufzeiten brauchen, um zu überzeugen.</p>
                  </div>
                  <div className="mt-6">
                    <Link href="#kontakt" className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
                      Überzeuge dich selbst →
                    </Link>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { merkmal: 'Zulassung nach § 34c GewO', status: true },
                    { merkmal: 'Wertermittlung nur nach persönlicher Besichtigung', status: true },
                    { merkmal: 'Klarer Vertrag, automatisch endend nach 6 Wochen', status: true },
                    { merkmal: 'Keine Vorauszahlungen — Provision nur bei Erfolg', status: true },
                    { merkmal: 'Professionelle Fotografie inklusive', status: true },
                    { merkmal: 'Alle Unterlagen inklusive (Grundbuch, Energieausweis)', status: true },
                    { merkmal: 'Fester Ansprechpartner, persönlich erreichbar', status: true },
                    { merkmal: 'Regelmäßige Statusberichte ohne Nachfragen', status: true },
                  ].map((item) => (
                    <div key={item.merkmal} className="flex gap-3 items-center bg-white/10 rounded-xl px-4 py-3">
                      <span className={`text-lg shrink-0 ${item.status ? 'text-green-400' : 'text-red-400'}`}>{item.status ? '✓' : '✗'}</span>
                      <span className="text-white text-sm">{item.merkmal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Stell uns auf den Prüfstand — im kostenlosen Erstgespräch.</h2>
            <p className="text-white/70 text-sm">Alle Fragen aus der Checkliste beantworte ich dir persönlich. Ohne Druck, ohne Schönfärberei.</p>
          </div>
          <Link href="#kontakt" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Erstgespräch vereinbaren →
          </Link>
        </div>
      </section>

      <FAQ
        items={faqItems}
        title="Häufige Fragen: Seriösen Makler erkennen."
      />

      <ContactForm
        variant="makler"
        title="Stelle mir alle Fragen aus der Checkliste."
        subtitle="Kostenloses Erstgespräch — kein Druck, keine Verpflichtung, ehrliche Antworten."
      />

      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-brand-anthrazit mb-6">Weitere nützliche Seiten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/bester-immobilienmakler-frankfurt', label: 'Bester Makler Frankfurt', icon: '🏆' },
              { href: '/immobilienmakler-kosten-frankfurt', label: 'Makler Kosten Frankfurt', icon: '💶' },
              { href: '/makler-oder-privatverkauf', label: 'Makler oder Privatverkauf?', icon: '⚖️' },
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
