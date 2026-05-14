/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTAButton from '@/components/CTAButton'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Referenzen – Erfolgreiche Immobilienverkäufe | immovativInvest',
  description: 'Echte Verkaufsergebnisse aus dem Rhein-Main-Gebiet. Wie wir für unsere Kunden mehr herausholen als erwartet – konkrete Zahlen, echte Geschichten.',
  alternates: { canonical: 'https://www.immovativ-invest.de/referenzen' },
  openGraph: {
    title: 'Referenzen – Erfolgreiche Immobilienverkäufe | immovativInvest',
    description: 'Echte Verkaufsergebnisse aus dem Rhein-Main-Gebiet.',
    url: 'https://www.immovativ-invest.de/referenzen',
    siteName: 'immovativInvest',
    locale: 'de_DE',
    type: 'website',
  },
}

const cases = [
  {
    id: 1,
    badge: 'Reihenhaus',
    accentColor: 'bg-blue-500',
    accentText: 'text-blue-400',
    city: 'Dreieich-Sprendlingen',
    mode: 'off-market',
    modeLabel: 'Off-Market',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Reihenhaus in Dreieich',
    headline: 'Familie W. – schnell verkauft, mehr als erwartet',
    what: '120 m² Reihenhaus · Baujahr 1987 · kleiner Garten · ruhige Seitenstraße',
    situation: 'Familie W. musste nach einem Jobangebot in München innerhalb von zwei Monaten verkaufen. Das Haus war gepflegt, aber seit Jahren nicht modernisiert. Der Zeitdruck machte ihr Sorgen – sie wollten keinen Ausverkauf.',
    how: 'Professionelles Homestaging, 11 qualifizierte Besichtigungen in einer Woche, 3 Angebote über Zielpreis. Notartermin 5 Wochen nach Erstkontakt.',
    goal: '480.000 €',
    result: '512.000 €',
    days: 18,
    delta: '+32.000 €',
    deltaPercent: '+6,7 %',
    quote: '„Ich hätte nicht gedacht, dass es so schnell und zu diesem Preis geht. Niclas hat uns wirklich den Stress genommen."',
    author: 'Familie W., Dreieich',
  },
  {
    id: 2,
    badge: 'Eigentumswohnung',
    accentColor: 'bg-brand-green',
    accentText: 'text-brand-green',
    city: 'Frankfurt-Sachsenhausen',
    mode: 'off-market',
    modeLabel: 'Off-Market',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Altbauwohnung Frankfurt',
    headline: 'Erbengemeinschaft – drei Geschwister, ein reibungsloser Abschluss',
    what: '78 m² Altbauwohnung · 3. OG mit Balkon · Nähe Schweizer Straße',
    situation: 'Drei Geschwister hatten die Wohnung ihrer Mutter geerbt. Unterschiedliche Vorstellungen, emotionale Belastung, keine Einigkeit über den Preis. Ich habe den Prozess moderiert und alle drei an einen Tisch gebracht.',
    how: 'Off-Market-Vorvermarktung im Käufernetzwerk, Käufer am Tag 3 gefunden, Notartermin in 4 Wochen. Keine einzige öffentliche Besichtigung nötig.',
    goal: '480.000 €',
    result: '495.000 €',
    days: 11,
    delta: '+15.000 €',
    deltaPercent: '+3,1 %',
    quote: '„Niclas hat nicht nur die Wohnung verkauft – er hat auch die Kommunikation zwischen uns gerettet."',
    author: 'K. B., Frankfurt',
  },
  {
    id: 3,
    badge: 'Einfamilienhaus',
    accentColor: 'bg-amber-500',
    accentText: 'text-amber-400',
    city: 'Darmstadt',
    mode: 'off-market',
    modeLabel: 'Off-Market',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Einfamilienhaus in Darmstadt',
    headline: 'Scheidungsimmobilie – diskret, schnell, über Zielpreis',
    what: '185 m² Einfamilienhaus · Baujahr 1978 · Garage · Grundstück 620 m²',
    situation: 'Herr M. befand sich in einem laufenden Scheidungsverfahren. Das Haus musste verkauft werden – möglichst still, ohne dass Nachbarn oder Kollegen davon erfuhren. Diskretion war das oberste Gebot.',
    how: 'Ausschließlich stille Vermarktung über unser Käufernetzwerk. Fünf vorqualifizierte Interessenten, zwei Angebote über Zielpreis, Zuschlag an lokales Paar.',
    goal: '680.000 €',
    result: '710.000 €',
    days: 24,
    delta: '+30.000 €',
    deltaPercent: '+4,4 %',
    quote: '„Kein Online-Inserat, keine Schilder, kein Lärm. Trotzdem der beste Preis, den ich mir hätte vorstellen können."',
    author: 'M. K., Darmstadt',
  },
  {
    id: 4,
    badge: 'Mehrfamilienhaus',
    accentColor: 'bg-purple-500',
    accentText: 'text-purple-400',
    city: 'Offenbach am Main',
    mode: 'off-market',
    modeLabel: 'Off-Market',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Mehrfamilienhaus in Offenbach',
    headline: 'Investorenprojekt – 6 Einheiten, off-market vermittelt',
    what: '6 Wohneinheiten · vollvermietet · Baujahr 1962 · 480 m² Wohnfläche',
    situation: 'Ein privater Vermieter wollte sein Mehrfamilienhaus nach 20 Jahren abgeben. Alle sechs Einheiten vermietet, solide Rendite, aber Instandhaltungsstau. Das Objekt sollte nie öffentlich erscheinen.',
    how: 'Direkte Ansprache von sechs vorgemerkten Investoren. Bieterverfahren unter drei Interessenten. Notartermin in 7 Wochen, vollständige Mieterübergabe koordiniert.',
    goal: '1.100.000 €',
    result: '1.240.000 €',
    days: 38,
    delta: '+140.000 €',
    deltaPercent: '+12,7 %',
    quote: '„Das Objekt war nie öffentlich – und trotzdem hatten wir fünf ernsthafte Kaufinteressenten. Das ist das Netzwerk."',
    author: 'R. S., Offenbach',
  },
  {
    id: 5,
    badge: 'Doppelhaushälfte',
    accentColor: 'bg-teal-500',
    accentText: 'text-teal-400',
    city: 'Bad Homburg v.d.Höhe',
    mode: 'market',
    modeLabel: 'Öffentlich inseriert',
    img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Doppelhaushälfte in Bad Homburg',
    headline: 'Ehepaar L. – Neustart nach dem Auszug der Kinder',
    what: '138 m² Doppelhaushälfte · Baujahr 2001 · Terrasse & Carport · ruhige Taunuslage',
    situation: 'Das Ehepaar L. wollte nach dem Auszug der Kinder in eine kleinere Wohnung umziehen. Das Haus war gut gepflegt, leicht renovierungsbedürftig – und sie wollten es richtig machen, ohne Stress und ohne Preisabschläge.',
    how: 'Professionelle Fotografie und 3D-Grundriss, Schaltung auf ImmoScout24 und Immowelt. In 6 Wochen 14 Besichtigungen, Zuschlag an Familie aus dem Rhein-Main-Gebiet über Zielpreis.',
    goal: '720.000 €',
    result: '735.000 €',
    days: 43,
    delta: '+15.000 €',
    deltaPercent: '+2,1 %',
    quote: '„Wir hatten keinerlei Ahnung, wie man so etwas angeht. Niclas hat alles geregelt – von den Fotos bis zum Notartermin."',
    author: 'Familie L., Bad Homburg',
  },
  {
    id: 6,
    badge: 'Einfamilienhaus',
    accentColor: 'bg-orange-500',
    accentText: 'text-orange-400',
    city: 'Usingen',
    mode: 'market',
    modeLabel: 'Öffentlich inseriert',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Einfamilienhaus in Usingen',
    headline: 'Rentnerpaar T. – Verkauf ohne Aufwand, mit vollem Ergebnis',
    what: '162 m² Einfamilienhaus · Baujahr 1993 · großer Garten · ruhige Wohnlage',
    situation: 'Familie T. wollte nach über 25 Jahren im eigenen Haus in eine altersgerechte Wohnung wechseln. Der Verkauf sollte entspannt laufen – kein Stress, keine endlosen Besichtigungen, ein seriöser Käufer.',
    how: 'Vollständige Unterlagenbeschaffung, professionelle Fotos, Inserat auf allen relevanten Portalen. Sieben qualifizierte Besichtigungen in 5 Wochen, Notartermin in Woche 8 – pünktlich und reibungslos.',
    goal: '450.000 €',
    result: '461.000 €',
    days: 51,
    delta: '+11.000 €',
    deltaPercent: '+2,4 %',
    quote: '„Wir haben nicht damit gerechnet, noch über unserer Preisvorstellung zu landen. Schön, wenn man positiv überrascht wird."',
    author: 'Familie T., Usingen',
  },
  {
    id: 7,
    badge: 'Reihenendhaus',
    accentColor: 'bg-cyan-500',
    accentText: 'text-cyan-400',
    city: 'Neu-Anspach',
    mode: 'market',
    modeLabel: 'Öffentlich inseriert',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Reihenendhaus in Neu-Anspach',
    headline: 'Frau H. – Alleinverkauf nach Erbschaft, klar strukturiert',
    what: '118 m² Reihenendhaus · Baujahr 1989 · Garten · Keller · ruhige Taunusgemeinde',
    situation: 'Frau H. hatte das Haus ihrer Eltern geerbt und lebte selbst in Frankfurt. Eine Eigennutzung kam nicht infrage – der Verkauf musste effizient laufen, ohne dass sie jeden Schritt selbst koordinieren musste.',
    how: 'Wir haben alle Unterlagen besorgt, den Energieausweis organisiert und das Objekt auf ImmoScout24 inseriert. Nach 6 Wochen und neun Besichtigungen stand der Käufer fest – ein junges Paar aus dem Hochtaunuskreis.',
    goal: '395.000 €',
    result: '405.000 €',
    days: 46,
    delta: '+10.000 €',
    deltaPercent: '+2,5 %',
    quote: '„Ich habe so gut wie gar nichts gemacht – und trotzdem lief alles perfekt. Genau das, was ich mir gewünscht hatte."',
    author: 'A. H., Neu-Anspach',
  },
  {
    id: 8,
    badge: 'Eigentumswohnung',
    accentColor: 'bg-rose-500',
    accentText: 'text-rose-400',
    city: 'Frankfurt-Bornheim',
    mode: 'market',
    modeLabel: 'Öffentlich inseriert',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&h=600&fit=crop&q=80',
    imgAlt: 'Eigentumswohnung Frankfurt-Bornheim',
    headline: 'Herr P. – Kapitalanlage sauber verkauft, Erlös reinvestiert',
    what: '67 m² Eigentumswohnung · Baujahr 1963 · vermietet · 2. OG · begehrte Bornheimer Lage',
    situation: 'Herr P. wollte seine vermietete Wohnung nach Jahren als Kapitalanlage verkaufen. Der laufende Mietvertrag und die notwendigen Käuferübergaben machten den Verkauf komplex – alles musste rechtssicher und transparent ablaufen.',
    how: 'Abstimmung mit dem Mieter, vollständige Dokumentation der Miethistorie, professionelles Exposé mit Renditenachweis. Gezieltes Inserat für Kapitalanleger auf ImmoScout24. In 40 Tagen war der Notartermin fix.',
    goal: '290.000 €',
    result: '298.000 €',
    days: 40,
    delta: '+8.000 €',
    deltaPercent: '+2,8 %',
    quote: '„Gerade bei einer vermieteten Wohnung gibt es viele Fallstricke. Niclas hat das alles souverän gemanagt."',
    author: 'J. P., Frankfurt',
  },
]

export default function ReferenzenPage() {
  const offMarketCases = cases.filter(c => c.mode === 'off-market')
  const marketCases = cases.filter(c => c.mode === 'market')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.immovativ-invest.de' },
              { '@type': 'ListItem', position: 2, name: 'Referenzen', item: 'https://www.immovativ-invest.de/referenzen' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'immovativInvest',
            url: 'https://www.immovativ-invest.de',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              bestRating: '5',
              worstRating: '1',
              ratingCount: '100',
              reviewCount: '100',
            },
            review: cases.map(c => ({
              '@type': 'Review',
              reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
              author: { '@type': 'Person', name: c.author },
              reviewBody: c.quote.replace(/[„""]/g, ''),
            })),
          }),
        }}
      />
      <Header />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Referenzen</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 md:pt-24 md:pb-32 px-4 md:px-8">
        {/* Dekorative Elemente */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/6 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/4 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        {/* Subtile horizontale Linie als Trenner unten */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gray-border" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <AnimateIn direction="up" delay={0}>
            <div>
              {/* Social proof */}
              <div className="inline-flex items-center gap-2.5 mb-6">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                  ].map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Kunde"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shrink-0"
                      width={28}
                      height={28}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} style={{ color: '#ffa61c' }} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-brand-anthrazit leading-tight">
                    <span className="font-bold">4,9 von 5</span> · 100+ Bewertungen
                  </p>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
                Unsere Referenzen.<br />
                <span className="text-brand-green">Echte Ergebnisse.</span>
              </h1>

              <p className="text-brand-gray-warm text-sm sm:text-base leading-relaxed mb-8">
                Acht abgeschlossene Verkäufe – mit konkreten Zahlen, echten Situationen und realen Ergebnissen aus dem Rhein-Main-Gebiet. Kein Marketing-Hochglanz, keine runden Zahlen.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Alle Referenzen über dem Zielpreis abgeschlossen',
                  'Off-Market & öffentliche Vermarktung',
                  'Vermarktungszeit 2 bis 8 Wochen',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#16a34a' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-brand-anthrazit">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/verkaufen" size="lg">
                  Immobilienbewertung starten →
                </CTAButton>
                <CTAButton href="tel:+4915129686979" variant="outline" size="lg">
                  Jetzt anrufen
                </CTAButton>
              </div>
            </div>
            </AnimateIn>

            {/* Right – Ergebnisse auf einen Blick */}
            <AnimateIn direction="up" delay={150}>
            <div className="bg-brand-gray-light rounded-3xl border border-brand-gray-border overflow-hidden">
              <div className="bg-brand-anthrazit px-6 py-4 flex items-center justify-between">
                <span className="text-white text-sm font-bold">Ergebnisse auf einen Blick</span>
                <span className="text-gray-400 text-xs">Ausgewählte Referenzen</span>
              </div>
              <div className="divide-y divide-brand-gray-border">
                {[
                  { dot: 'bg-blue-500',   city: 'Dreieich',        type: 'Reihenhaus',        result: '512.000 €',   delta: '+6,7 %', mode: 'Off-Market' },
                  { dot: 'bg-brand-green',city: 'Frankfurt',        type: 'Eigentumswohnung',  result: '495.000 €',   delta: '+3,1 %', mode: 'Off-Market' },
                  { dot: 'bg-amber-500',  city: 'Darmstadt',        type: 'Einfamilienhaus',   result: '710.000 €',   delta: '+4,4 %', mode: 'Off-Market' },
                  { dot: 'bg-purple-500', city: 'Offenbach',        type: 'Mehrfamilienhaus',  result: '1.240.000 €', delta: '+12,7 %',mode: 'Off-Market' },
                  { dot: 'bg-teal-500',   city: 'Bad Homburg',      type: 'Doppelhaushälfte',  result: '735.000 €',   delta: '+2,1 %', mode: 'Inseriert' },
                  { dot: 'bg-orange-500', city: 'Usingen',          type: 'Einfamilienhaus',   result: '461.000 €',   delta: '+2,4 %', mode: 'Inseriert' },
                  { dot: 'bg-cyan-500',   city: 'Neu-Anspach',      type: 'Reihenendhaus',     result: '405.000 €',   delta: '+2,5 %', mode: 'Inseriert' },
                  { dot: 'bg-rose-500',   city: 'Frankfurt',        type: 'Eigentumswohnung',  result: '298.000 €',   delta: '+2,8 %', mode: 'Inseriert' },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-3 px-5 py-3.5 bg-white hover:bg-brand-gray-light/60 transition-colors">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${r.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-brand-anthrazit truncate">{r.city}</div>
                      <div className="text-xs text-brand-gray-warm">{r.type} · {r.mode}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold text-brand-anthrazit">{r.result}</div>
                      <div className="text-xs font-semibold text-brand-green">{r.delta}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 bg-brand-anthrazit/5 flex items-center justify-between">
                <span className="text-xs text-brand-gray-warm">Alle Referenzen über dem Zielpreis</span>
                <span className="flex items-center gap-1 text-xs font-bold text-brand-green">
                  100 %
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </span>
              </div>
            </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1d4ed8 100%)' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/10">
          {[
            { value: 'Ø 6 Wochen', label: 'bis zum Notartermin' },
            { value: 'Ø +3,9 %', label: 'über dem Zielpreis' },
            { value: '100 %', label: 'Referenzen über Zielpreis' },
            { value: '100 %', label: 'diskret & persönlich' },
          ].map(s => (
            <div key={s.label} className="text-center md:px-8">
              <div className="text-xl md:text-3xl font-bold text-white mb-1 whitespace-nowrap">{s.value}</div>
              <div className="text-gray-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Off-Market Cases */}
      <section className="pt-16 pb-8 px-4 md:px-8 bg-brand-gray-light">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimateIn direction="up">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2 bg-brand-anthrazit text-white text-xs font-bold px-4 py-2 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                Off-Market Verkäufe
              </div>
              <div className="h-px flex-1 bg-brand-gray-border" />
            </div>
            <p className="text-brand-gray-warm text-sm">Diskret – ohne öffentliches Inserat</p>
          </div>
          </AnimateIn>

          <div className="space-y-12">
            {offMarketCases.map((c, index) => (
              <AnimateIn key={c.id} direction="up" delay={index * 100}>
              <CaseCard c={c} idx={index} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Normal-Market Cases */}
      <section className="pt-8 pb-16 px-4 md:px-8 bg-brand-gray-light">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimateIn direction="up">
          <div className="mb-10 mt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center gap-2 bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-full shrink-0">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Öffentliche Vermarktung
              </div>
              <div className="h-px flex-1 bg-brand-gray-border" />
            </div>
            <p className="text-brand-gray-warm text-sm">Inseriert · 6–8 Wochen Vermarktungszeit</p>
          </div>
          </AnimateIn>

          <div className="space-y-12">
            {marketCases.map((c, index) => (
              <AnimateIn key={c.id} direction="up" delay={index * 100}>
              <CaseCard c={c} idx={index} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Niclas Statement */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/hero-niclas-2.png"
              alt="Niclas van der Straeten – Immobilienmakler Rhein-Main"
              className="rounded-3xl shadow-xl w-full max-h-[480px] object-cover object-top"
              width={800}
              height={480}
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">125+</div>
                <div className="text-xs text-brand-gray-warm">Verkäufe</div>
              </div>
              <div className="w-px h-10 bg-brand-gray-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-green">4,9 ★</div>
                <div className="text-xs text-brand-gray-warm">Bewertung</div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
              Niclas van der Straeten
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-5">
              Warum diese Zahlen kein Zufall sind.
            </h2>
            <p className="text-brand-gray-warm mb-4 leading-relaxed">
              Ich zeige dir diese Fälle nicht um anzugeben. Ich zeige sie dir, weil ich möchte, dass du verstehst: Ein gutes Ergebnis beim Immobilienverkauf ist kein Glück – es ist Vorbereitung, Timing und das richtige Netzwerk.
            </p>
            <p className="text-brand-gray-warm mb-4 leading-relaxed">
              Alle diese Situationen waren verschieden. Zeitdruck, Erbschaft, Scheidung, Kapitalanlage, Ruhestand – jede Geschichte hat ihre eigene Dynamik. Was alle gemeinsam hatten: Am Anfang wussten die Verkäufer nicht, was wirklich möglich ist.
            </p>
            <p className="text-brand-gray-warm mb-8 leading-relaxed">
              Ich möchte herausfinden, was in deiner Situation möglich ist. Ruf mich an oder schreibe mir – das Erstgespräch ist kostenlos und unverbindlich.
            </p>
            <CTAButton href="/verkaufen" variant="white" size="lg">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 60%, #16a34a 100%)' }}>
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Was ist deine Immobilie wert?
          </h2>
          <p className="text-green-100 mb-8 leading-relaxed">
            Kostenlose Ersteinschätzung – ich melde mich innerhalb von 24 Stunden persönlich bei dir.
          </p>
          <CTAButton href="/verkaufen" variant="secondary" size="lg">
            Immobilienbewertung starten →
          </CTAButton>
        </div>
      </section>

      <ContactForm
        variant="makler"
        title="Schreibe mir direkt"
        subtitle="Ich beantworte jede Anfrage persönlich – kein Callcenter, kein Assistent."
      />

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg py-3 px-4 flex justify-center md:hidden">
        <CTAButton href="/verkaufen" variant="white" size="md">
          Immobilienbewertung starten →
        </CTAButton>
      </div>

      <Footer variant="makler" />
    </>
  )
}

function CaseCard({ c, idx }: { c: typeof cases[number]; idx: number }) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-gray-border">

      {/* Image + Overlay */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={c.img}
          alt={c.imgAlt}
          className="w-full h-full object-cover"
          fill
        />
        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-anthrazit/90 via-brand-anthrazit/40 to-transparent" />

        {/* Top-left: badge + city */}
        <div className="absolute top-5 left-6 flex items-center gap-3">
          <span className={`${c.accentColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
            {c.badge}
          </span>
          <span className="text-white/80 text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
            {c.city}
          </span>
          <span className={`text-white text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full`}>
            {c.modeLabel}
          </span>
        </div>

        {/* Top-right: case number */}
        <div className="absolute top-5 right-6 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-sm">
          {c.id}
        </div>

        {/* Bottom: stats row */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 flex flex-wrap gap-6">
          <div>
            <div className="text-white/60 text-xs mb-0.5">Zielpreis</div>
            <div className="text-white font-semibold">{c.goal}</div>
          </div>
          <div className="flex items-center text-white/40">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </div>
          <div>
            <div className="text-white/60 text-xs mb-0.5">Verkaufspreis</div>
            <div className="text-white font-bold text-lg">{c.result}</div>
          </div>
          <div className="ml-auto text-right">
            <div className="text-white/60 text-xs mb-0.5">Mehrerlös</div>
            <div className="text-white font-bold">{c.delta} <span className="text-sm opacity-80">({c.deltaPercent})</span></div>
          </div>
          <div className="text-right">
            <div className="text-white/60 text-xs mb-0.5">Verkauft in</div>
            <div className="text-white font-bold">{c.days} Tagen</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">

        {/* Left column */}
        <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
          <h2 className="text-xl md:text-2xl font-bold text-brand-anthrazit mb-5 leading-snug">
            {c.headline}
          </h2>

          {/* Object details pill */}
          <div className="inline-flex items-center gap-2 bg-brand-gray-light rounded-xl px-4 py-2.5 mb-5">
            <svg className="w-4 h-4 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-brand-anthrazit text-sm font-medium">{c.what}</span>
          </div>

          <p className="text-xs font-bold text-brand-gray-warm uppercase tracking-wider mb-2">Die Ausgangssituation</p>
          <p className="text-brand-gray-warm text-sm leading-relaxed">{c.situation}</p>
        </div>

        {/* Right column */}
        <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
          {/* How we did it */}
          <div className="bg-brand-gray-light rounded-2xl p-5 mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-xs font-bold text-brand-anthrazit uppercase tracking-wider">Was wir gemacht haben</p>
            </div>
            <p className="text-brand-gray-warm text-sm leading-relaxed">{c.how}</p>
          </div>

          {/* Quote */}
          <div className="relative">
            <div className="absolute -top-2 -left-1 text-brand-green/20 text-6xl font-serif leading-none select-none">"</div>
            <blockquote className="pl-5 border-l-[3px] border-brand-green">
              <p className="text-brand-anthrazit text-sm italic leading-relaxed mb-3 relative z-10">{c.quote}</p>
              <cite className="not-italic text-xs font-semibold text-brand-gray-warm">{c.author}</cite>
            </blockquote>
          </div>
        </div>

      </div>
    </article>
  )
}
