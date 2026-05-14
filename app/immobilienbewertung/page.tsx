/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimateIn from '@/components/AnimateIn'
import FAQ from '@/components/FAQ'
import Wertrechner from '@/components/Wertrechner'

export const metadata: Metadata = {
  title: 'Immobilienbewertung Frankfurt – Kostenlose Wertermittlung | immovativInvest',
  description: 'Immobilienbewertung Frankfurt & Rhein-Main: Erfahren Sie den genauen Marktwert Ihrer Immobilie – kostenlos, persönlich vor Ort und ohne Verpflichtung. Jetzt Termin anfragen.',
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienbewertung' },
  openGraph: {
    title: 'Immobilienbewertung Frankfurt – Kostenlose Wertermittlung | immovativInvest',
    description: 'Kostenlose Immobilienbewertung in Frankfurt & Rhein-Main – marktgerecht, persönlich und unverbindlich. Jetzt anfragen.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/immobilienbewertung',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'Immobilienbewertung Frankfurt – immovativInvest' }],
  },
}

const faqItems = [
  {
    question: 'Was kostet eine Immobilienbewertung in Frankfurt?',
    answer: 'Bei immovativInvest ist die Immobilienbewertung vollständig kostenlos und unverbindlich. Wir kommen persönlich zu Ihnen und erstellen auf Basis aktueller Marktdaten und vergleichbarer Verkäufe in Ihrer Nachbarschaft eine fundierte Werteinschätzung – ohne versteckte Kosten.',
  },
  {
    question: 'Wie genau ist eine Online-Immobilienbewertung?',
    answer: 'Online-Rechner liefern eine grobe Orientierung – aber keine verlässliche Grundlage für den Verkauf. Sie berücksichtigen weder den tatsächlichen Zustand, noch Mikrolage, Grundrissqualität oder aktuelle Vergleichsverkäufe in Ihrer Straße. Eine persönliche Bewertung vor Ort ist deutlich präziser und damit wertvoller.',
  },
  {
    question: 'Wie lange dauert eine professionelle Immobilienbewertung?',
    answer: 'Das Erstgespräch vor Ort dauert ca. 60–90 Minuten. Wir besichtigen die Immobilie, stellen gezielt Fragen zu Zustand, Ausstattung und Besonderheiten und analysieren anschließend aktuelle Vergleichsdaten. Das schriftliche Ergebnis erhalten Sie innerhalb von 24–48 Stunden.',
  },
  {
    question: 'Welche Faktoren beeinflussen den Immobilienwert in Frankfurt?',
    answer: 'Die wichtigsten Wertfaktoren sind: Lage (Stadtteil, Mikrolage, Lärmbelastung), Wohnfläche und Grundstücksgröße, Baujahr und Energieklasse, Zustand und Renovierungsstand, Grundrissqualität, Ausstattung (Balkon, Stellplatz, Aufzug) sowie die aktuelle Nachfragesituation im Teilmarkt.',
  },
  {
    question: 'Bin ich nach der Bewertung zum Verkauf verpflichtet?',
    answer: 'Nein – absolut nicht. Unsere Bewertung ist zu 100 % unverbindlich. Viele Eigentümer lassen sich zunächst bewerten, um eine fundierte Entscheidungsgrundlage zu haben – und entscheiden sich dann erst für oder gegen einen Verkauf. Das ist vollkommen in Ordnung.',
  },
  {
    question: 'Was ist der Unterschied zwischen Verkehrswert und Angebotspreis?',
    answer: 'Der Verkehrswert (auch Marktwert) ist der objektivierte Wert einer Immobilie zu einem bestimmten Zeitpunkt – ermittelt nach standardisierten Methoden. Der Angebotspreis ist der Preis, den Sie am Markt erzielen möchten. Er kann vom Verkehrswert abweichen – nach oben bei sehr hoher Nachfrage, nach unten bei schnellem Verkaufswunsch. Wir beraten Sie, welcher Angebotspreis in Ihrer Situation optimal ist.',
  },
]

const steps = [
  {
    nr: '01',
    title: 'Anfrage & Terminvereinbarung',
    text: 'Sie kontaktieren uns – telefonisch, per WhatsApp oder über das Formular. Wir vereinbaren einen Termin zu einem Zeitpunkt, der Ihnen passt.',
  },
  {
    nr: '02',
    title: 'Besichtigung vor Ort',
    text: 'Wir kommen persönlich zu Ihrer Immobilie. In 60–90 Minuten erfassen wir alle wertrelevanten Merkmale – Zustand, Ausstattung, Lage, Besonderheiten.',
  },
  {
    nr: '03',
    title: 'Marktanalyse & Vergleichsdaten',
    text: 'Wir analysieren aktuelle Vergleichsverkäufe in Ihrer Nachbarschaft, Bodenrichtwerte und die aktuelle Nachfragesituation im Rhein-Main-Gebiet.',
  },
  {
    nr: '04',
    title: 'Fundierte Werteinschätzung',
    text: 'Sie erhalten eine detaillierte, marktgerechte Werteinschätzung mit Preisbandbreite – und eine ehrliche Einschätzung, was zum aktuellen Zeitpunkt realistisch erzielbar ist.',
  },
]

export default function ImmobilienbewertungPage() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Immobilienbewertung Frankfurt – so läuft es ab',
    description: 'In vier Schritten zur kostenlosen, fundierten Immobilienbewertung durch immovativInvest im Rhein-Main-Gebiet.',
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.immovativ-invest.de' },
      { '@type': 'ListItem', position: 2, name: 'Immobilienbewertung Frankfurt', item: 'https://www.immovativ-invest.de/immobilienbewertung' },
    ],
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Kostenlose Immobilienbewertung Frankfurt',
    description: 'Professionelle, kostenlose Immobilienbewertung in Frankfurt und dem Rhein-Main-Gebiet durch immovativInvest.',
    provider: {
      '@type': 'RealEstateAgent',
      '@id': 'https://www.immovativ-invest.de/#organization',
      name: 'immovativInvest',
    },
    areaServed: { '@type': 'City', name: 'Frankfurt am Main', addressCountry: 'DE' },
    offers: {
      '@type': 'Offer',
      description: 'Kostenlose Immobilienbewertung vor Ort',
      price: '0',
      priceCurrency: 'EUR',
    },
    url: 'https://www.immovativ-invest.de/immobilienbewertung',
  }

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      <Header ctaLabel="Kostenlose Bewertung anfragen" ctaHref="#bewertung" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Immobilienbewertung Frankfurt</li>
          </ol>
        </div>
      </nav>

      {/* Hero + Wertrechner */}
      <section id="bewertung" className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-16 pb-20 md:pt-24 md:pb-28 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-5xl mx-auto relative">
          <AnimateIn direction="up">
            <div className="text-left md:text-center mb-10">
              <div className="inline-flex items-center gap-3 bg-white border border-brand-gray-border rounded-2xl px-5 py-3 shadow-soft mb-5">
                <span style={{ color: '#ffa61c' }} className="text-xl tracking-wider shrink-0">★★★★★</span>
                <div className="text-left">
                  <div className="text-sm font-bold text-brand-anthrazit leading-tight">4,9 von 5</div>
                  <div className="text-xs text-brand-gray-warm font-normal leading-tight">100+ Bewertungen · kostenlos</div>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-4">
                Was ist deine Immobilie <span className="text-brand-green">wert?</span>
              </h1>
              <p className="text-brand-gray-warm text-lg max-w-xl mx-auto">
                Erhalte deine unverbindliche Wertspanne in 2 Minuten – kostenlos, diskret und ohne Verpflichtung.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <Wertrechner />
          </AnimateIn>
          <p className="text-center text-xs text-brand-gray-warm mt-5">
            🔒 Deine Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
          </p>
        </div>
      </section>

      {/* Trust-Bar */}
      <section className="py-8 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { emoji: '✅', value: '100 %', label: 'Kostenlos & unverbindlich' },
            { emoji: '🏠', value: '125+', label: 'Bewertungen durchgeführt' },
            { emoji: '⭐', value: '4,9', label: 'Kundenbewertung Google' },
            { emoji: '⚡', value: '24h', label: 'Ergebnis innerhalb von' },
          ].map(item => (
            <div key={item.label}>
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-white/60 text-xs">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* KI-Intro */}
      <section className="py-14 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-medium text-brand-anthrazit mb-4">
            Eine <strong>Immobilienbewertung</strong> ermittelt den aktuellen Marktwert einer Immobilie auf Basis von Lage, Zustand, Ausstattung und aktuellen Vergleichsverkäufen. Sie ist die Grundlage jeder fundierten Verkaufsentscheidung.
          </p>
          <div className="space-y-4 text-brand-gray-warm leading-relaxed text-sm md:text-base">
            <p>
              Als <a href="/" className="text-brand-green font-semibold hover:underline">Immobilienmakler in Frankfurt</a> und dem Rhein-Main-Gebiet führen wir Immobilienbewertungen persönlich vor Ort durch — kein Algorithmus, keine Online-Schätzung, sondern eine fundierte Einschätzung auf Basis echter Marktdaten und lokaler Expertise. Das ist der Unterschied zwischen einer Orientierungszahl und einem verlässlichen Wert, auf den Sie Ihre Entscheidung stützen können.
            </p>
            <p>
              Der Immobilienmarkt im Rhein-Main-Gebiet ist komplex: Preise variieren stark zwischen Stadtteilen, sogar zwischen einzelnen Straßen. Ein Einfamilienhaus in Kronberg erzielt andere Preise als ein vergleichbares Objekt in Kelkheim — selbst wenn Fläche und Baujahr identisch sind. Diese Nuancen kennen wir, weil wir täglich in diesem Markt aktiv sind.
            </p>
            <p>
              Nach der Bewertung entscheiden Sie in Ruhe: <a href="/verkaufen" className="text-brand-green font-semibold hover:underline">Maklervermarktung</a> für den höchstmöglichen Preis, <a href="/ankauf" className="text-brand-green font-semibold hover:underline">Direktankauf</a> für maximale Schnelligkeit — oder gar kein Verkauf, wenn der Zeitpunkt nicht stimmt. Wir beraten Sie ehrlich.
            </p>
          </div>
        </div>
      </section>

      {/* Was wir bewerten */}
      <section className="py-14 px-4 md:px-8 bg-[#f2f4f8]">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">Welche Immobilien wir bewerten.</h2>
            <p className="text-brand-gray-warm text-sm mb-10 max-w-2xl">Wir bewertet alle Immobilientypen im Rhein-Main-Gebiet — schnell, marktgerecht und kostenlos.</p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: '🏠', label: 'Einfamilienhäuser' },
              { icon: '🏘️', label: 'Doppel- & Reihenhäuser' },
              { icon: '🏢', label: 'Eigentumswohnungen' },
              { icon: '🏗️', label: 'Mehrfamilienhäuser' },
              { icon: '📦', label: 'Kapitalanlagen' },
              { icon: '🌿', label: 'Grundstücke' },
            ].map(item => (
              <AnimateIn key={item.label} direction="up">
                <div className="bg-white rounded-2xl p-3 sm:p-5 border border-gray-100 shadow-soft flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                  <span className="font-semibold text-brand-anthrazit text-xs sm:text-sm leading-tight">{item.label}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Wertfaktoren */}
      <section className="py-14 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">Was den Wert Ihrer Immobilie beeinflusst.</h2>
            <p className="text-brand-gray-warm text-sm mb-10 max-w-2xl">Diese Faktoren fließen in jede professionelle Immobilienbewertung ein.</p>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Lage & Mikrolage', text: 'Stadtteil, Straße, Lärmbelastung, Schulen, ÖPNV-Anbindung — Lage ist der wichtigste Einzelfaktor und macht oft 30–40 % des Wertes aus.' },
              { title: 'Zustand & Baujahr', text: 'Renovierungsstand, Dach, Heizung, Fenster, Leitungen — ein saniertes Haus aus 1970 erzielt deutlich mehr als ein unsaniertes aus 2000.' },
              { title: 'Energieeffizienz', text: 'Seit 2024 kalkulieren Käufer Sanierungskosten konsequent ein. Energieklasse A–C erzielt Premiumpreise, Klasse F–H führt zu Abschlägen.' },
              { title: 'Größe & Grundriss', text: 'Wohnfläche, Raumaufteilung, Homeoffice-Möglichkeit, Balkon — gut geschnittene Grundrisse sind messbar mehr wert.' },
              { title: 'Ausstattung', text: 'Tiefgaragenstellplatz, Aufzug, hochwertige Küche, Fußbodenheizung — Ausstattungsmerkmale können den Wert um 5–15 % verändern.' },
              { title: 'Marktlage zum Zeitpunkt', text: 'Angebot und Nachfrage zum Bewertungszeitpunkt sind entscheidend. Was vor zwei Jahren galt, stimmt heute möglicherweise nicht mehr.' },
            ].map(item => (
              <AnimateIn key={item.title} direction="up">
                <div className="border border-gray-100 rounded-2xl p-6 bg-[#f8f9ff]">
                  <h3 className="font-bold text-brand-anthrazit mb-2 text-base">{item.title}</h3>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14 px-4 md:px-8 bg-[#f2f4f8]">
        <div className="max-w-4xl mx-auto">
          <AnimateIn direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">So läuft die Bewertung ab.</h2>
            <p className="text-brand-gray-warm text-sm mb-10 max-w-xl">In vier einfachen Schritten zur fundierten Werteinschätzung — kostenlos, persönlich, ohne Stress.</p>
          </AnimateIn>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <AnimateIn key={step.nr} direction="up" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-soft flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-anthrazit flex items-center justify-center shrink-0 text-white font-bold text-sm">{step.nr}</div>
                  <div>
                    <h3 className="font-bold text-brand-anthrazit mb-1">{step.title}</h3>
                    <p className="text-brand-gray-warm text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Jetzt kostenlose Bewertung anfragen</h2>
          <p className="text-white/70 text-sm mb-8 leading-relaxed max-w-xl mx-auto">
            Erfahren Sie den genauen Marktwert Ihrer Immobilie — persönlich vor Ort, ohne Verpflichtung und ohne versteckte Kosten.
          </p>
          <Link
            href="#bewertung"
            className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0"
          >
            Bewertung starten →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} title="Häufige Fragen zur Immobilienbewertung" />

      <Footer />
    </main>
  )
}
