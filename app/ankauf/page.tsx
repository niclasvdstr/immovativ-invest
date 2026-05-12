import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import BenefitCards from '@/components/BenefitCards'
import Testimonials from '@/components/Testimonials'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export const metadata: Metadata = {
  title: 'Immobilie direkt verkaufen – Schnell & Sicher | immovativInvest Ankauf',
  description: 'Immobilie direkt verkaufen ohne Makler. immovativInvest kauft Ihre Immobilie schnell, fair und diskret. Angebot in Ø 21 Tagen. Jetzt kostenlos anfragen!',
  alternates: { canonical: 'https://www.immovativ-invest.de/ankauf' },
  openGraph: {
    title: 'Immobilie direkt verkaufen – Schnell & Sicher | immovativInvest',
    description: 'Immobilie direkt verkaufen ohne Makler. Schnelles Angebot in Ø 21 Tagen – fair, diskret und ohne Provision.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/ankauf',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const benefits = [
  {
    icon: '⚡',
    title: 'Kein Maklerstress',
    description: 'Keine langen Vermarktungszeiten, keine Besichtigungstouren. Wir kaufen direkt.',
  },
  {
    icon: '⏱️',
    title: 'Schnelle Kaufentscheidung',
    description: 'Unverbindliches Angebot innerhalb von Ø 21 Tagen nach deiner Anfrage.',
  },
  {
    icon: '🔒',
    title: 'Diskrete Abwicklung',
    description: 'Kein öffentliches Inserat, keine fremden Personen im Haus – maximale Diskretion.',
  },
  {
    icon: '🏠',
    title: 'Keine Besichtigungstouren',
    description: 'Du musst deine Immobilie nicht für Fremde herrichten oder bereitstellen.',
  },
  {
    icon: '⚖️',
    title: 'Faire Bewertung',
    description: 'Wir ermitteln den Marktwert transparent und bieten einen fairen Kaufpreis.',
  },
  {
    icon: '📋',
    title: 'Keine versteckten Kosten',
    description: 'Keine Provision, keine Bearbeitungsgebühren, keine Überraschungen.',
  },
]

const processSteps = [
  {
    number: 1,
    icon: '📝',
    title: 'Immobilie einreichen',
    description: 'Füll unser kurzes Formular aus und beschreibe deine Immobilie. Dauert nur 3 Minuten.',
  },
  {
    number: 2,
    icon: '🔍',
    title: 'Bewertung erhalten',
    description: 'Unsere Experten analysieren deine Immobilie und erstellen eine kostenlose Marktbewertung.',
  },
  {
    number: 3,
    icon: '🏠',
    title: 'Besichtigungstermin vereinbaren',
    description: 'Wir vereinbaren einen diskreten Vor-Ort-Termin – flexibel, persönlich und ohne Stress.',
  },
  {
    number: 4,
    icon: '📄',
    title: 'Angebot erhalten',
    description: 'Du erhältst ein faires, unverbindliches Kaufangebot ohne Druck und ohne Verpflichtung.',
  },
  {
    number: 5,
    icon: '🤝',
    title: 'Sicher verkaufen',
    description: 'Nach deiner Zustimmung kümmern wir uns um alles – Notar, Übergabe und reibungsloser Abschluss.',
  },
]

const faqItems = [
  {
    question: 'Für welche Immobilien ist der Direktankauf geeignet?',
    answer: 'Wir kaufen nahezu alle Immobilientypen: Einfamilienhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Grundstücke und Gewerbeimmobilien in ganz Deutschland. Auch Immobilien mit Renovierungsbedarf oder besonderen Herausforderungen sind willkommen.',
  },
  {
    question: 'Wie schnell erhalte ich ein Angebot?',
    answer: 'Im Durchschnitt erhältst du innerhalb von 7 Werktagen eine erste Einschätzung und innerhalb von 21 Tagen ein verbindliches Kaufangebot. Bei dringendem Bedarf können wir den Prozess deutlich beschleunigen.',
  },
  {
    question: 'Kostet die Bewertung oder Anfrage etwas?',
    answer: 'Nein, unser gesamter Bewertungs- und Anfrageprozess ist für dich vollständig kostenlos und unverbindlich. Du gehst keinerlei Verpflichtung ein.',
  },
  {
    question: 'Muss ich Provisionen zahlen?',
    answer: 'Beim Direktankauf fallen für dich keine Maklergebühren oder Provisionen an. Wir tragen die Kosten für Bewertung, Notar und Abwicklung.',
  },
  {
    question: 'Was passiert, wenn ich das Angebot ablehne?',
    answer: 'Das Angebot ist vollständig unverbindlich. Wenn du es ablehnen möchtest, entstehen dir keinerlei Kosten oder Verpflichtungen. Du kannst jederzeit absagen.',
  },
  {
    question: 'Wie wird der Kaufpreis ermittelt?',
    answer: 'Wir analysieren aktuelle Marktdaten, Vergleichsobjekte in der Region, den Zustand und die Lage deiner Immobilie. So ermitteln wir einen fairen und transparenten Kaufpreis, den wir dir offen begründen.',
  },
]

const propertyTypes = [
  { icon: '🏠', label: 'Einfamilienhaus' },
  { icon: '🏢', label: 'Mehrfamilienhaus' },
  { icon: '🏙️', label: 'Eigentumswohnung' },
  { icon: '🏗️', label: 'Grundstück' },
  { icon: '🏭', label: 'Gewerbeimmobilie' },
  { icon: '🏡', label: 'Doppelhaushälfte' },
]

const navItems = [
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'So funktioniert\'s', href: '#prozess' },
  { label: 'Ankaufsprofil', href: '#immobilien' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function AnkaufPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Immobilienankauf', item: 'https://www.immovativ-invest.de/ankauf' },
            ],
          }),
        }}
      />
      <Header
        navItems={navItems}
        ctaLabel="Jetzt Angebot anfragen"
        ctaHref="#kontakt"
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Immobilienankauf</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 50%, #f5f7ff 100%)' }}>
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" style={{ backgroundColor: '#2563EB' }} />
        <div className="hidden md:block absolute bottom-0 left-0 w-80 h-80 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" style={{ backgroundColor: '#2563EB' }} />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up" delay={0}>
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border text-brand-anthrazit rounded-full px-4 py-2 text-sm font-semibold mb-6 shadow-soft">
                <svg className="w-4 h-4" style={{ color: '#2563EB' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Direktankauf – ohne Makler
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-anthrazit leading-tight mb-6">
                Immobilie direkt verkaufen.<br />
                <span style={{ color: '#2563EB' }}>Schnell, sicher, unkompliziert.</span>
              </h1>

              <div className="flex flex-col gap-4 mb-12 mt-12">
                {['Keine Provision', 'Angebot in 21 Tagen', 'Kostenlos & unverbindlich'].map(item => (
                  <span key={item} className="flex items-center gap-3 text-base text-brand-anthrazit font-medium">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#16a34a' }}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="#kontakt" size="lg">
                  Jetzt kostenlos anfragen →
                </CTAButton>
                <a
                  href="tel:+4915129686979"
                  className="inline-flex items-center justify-center font-semibold rounded-2xl border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all duration-200 px-6 py-3 text-sm sm:px-8 sm:py-4 sm:text-base md:text-lg"
                >
                  Jetzt anrufen
                </a>
              </div>
            </div>
            </AnimateIn>

            {/* Hero contact form */}
            <AnimateIn direction="up" delay={150}>
            <div className="bg-white rounded-3xl shadow-2xl border border-brand-gray-border p-8">
              <h3 className="text-xl font-bold text-brand-anthrazit mb-1">Jetzt kostenlos anfragen</h3>
              <p className="text-brand-gray-warm text-sm mb-6">Unverbindlich · Rückmeldung in 24h</p>

              <form className="space-y-4" action="#">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Vorname</label>
                    <input type="text" placeholder="Max" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Nachname</label>
                    <input type="text" placeholder="Mustermann" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Telefon</label>
                    <input type="tel" placeholder="+49 151 000 000" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">E-Mail</label>
                    <input type="email" placeholder="deine@email.de" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Objektart</label>
                  <select className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit text-sm bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none">
                    <option value="">Bitte auswählen</option>
                    <option>Einfamilienhaus</option>
                    <option>Mehrfamilienhaus</option>
                    <option>Eigentumswohnung</option>
                    <option>Grundstück</option>
                    <option>Gewerbeimmobilie</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Wohnfläche (m²)</label>
                    <input type="number" placeholder="z.B. 120" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Grundstücksfläche (m²)</label>
                    <input type="number" placeholder="z.B. 500" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">PLZ</label>
                    <input type="text" placeholder="60311" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Ort</label>
                    <input type="text" placeholder="Frankfurt am Main" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold rounded-2xl px-6 py-4 text-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
                >
                  Kostenlos anfragen →
                </button>
                <p className="text-xs text-brand-gray-warm text-center">
                  🔒 Deine Daten werden vertraulich behandelt.
                </p>
              </form>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 px-4 md:px-8 bg-brand-gray-light border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <TrustBadges variant="row" />
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">
              Deine Vorteile beim Direktankauf
            </h2>
            <p className="text-brand-gray-warm text-base md:text-lg max-w-lg mx-auto">
              Wir machen den Immobilienverkauf so einfach und stressfrei wie möglich – für dich.
            </p>
          </div>
          <BenefitCards benefits={benefits} layout="grid" columns={3} />
        </div>
      </section>

      {/* Before / After Slider */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
              Wie wir qualitativen Wohnraum schaffen.
            </h2>
            <p className="text-brand-gray-warm text-lg max-w-4xl mx-auto">
              Wir schaffen aus sanierungsbedürftigen Flächen modernen, lebenswerten Wohnraum.<br />Mit durchdachter Planung holen wir das volle Potenzial jeder Immobilie heraus.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <BeforeAfterSlider
              beforeSrc="/before-room.jpg"
              afterSrc="/after-room.jpg"
              beforeLabel="Vorher"
              afterLabel="Nachher"
            />
            <p className="text-center text-sm text-brand-gray-warm mt-4">
              ← Schieb den Regler, um Vorher und Nachher zu vergleichen →
            </p>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {[
                {
                  num: '01',
                  title: 'Komplette Oberflächensanierung.',
                  desc: 'Wände und Decke wurden geglättet, neu verputzt und in einem hellen, neutralen Ton gestrichen – keine Risse, Flecken oder Abplatzungen mehr.',
                },
                {
                  num: '02',
                  title: 'Boden hochwertig erneuert.',
                  desc: 'Der beschädigte, offene Boden wurde durch sauberes, durchgängiges Holzparkett ersetzt, was den Raum sofort wärmer und wertiger wirken lässt.',
                },
                {
                  num: '03',
                  title: 'Modernisierung der Details.',
                  desc: 'Türen, Zargen, Fußleisten und Steckdosen wurden vereinheitlicht und modernisiert (klare Linien, frische Lackierung, dunkle Akzente bei Beschlägen).',
                },
                {
                  num: '04',
                  title: 'Licht & Raumwirkung optimiert.',
                  desc: 'Der Raum wirkt jetzt heller und größer durch saubere Fensterbereiche, bessere Lichtführung und eine insgesamt minimalistische, aufgeräumte Gestaltung.',
                },
              ].map((card) => (
                <div
                  key={card.num}
                  className="bg-white border border-brand-gray-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 flex flex-col"
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl mb-4 shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
                    <span className="text-white text-xs font-bold">{card.num}</span>
                  </div>
                  <h3 className="font-bold text-brand-anthrazit text-base mb-2 leading-snug">{card.title}</h3>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <div id="prozess">
        <ProcessSteps
          steps={processSteps}
          title="In 5 Schritten zum Verkauf"
          subtitle="Unkompliziert, transparent und vollständig in deinem eigenen Tempo."
        />
      </div>

      {/* Tippgeber */}
      <section id="tippgeber" className="section-padding" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a4a 50%, #0f2027 100%)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Links – Formular */}
            <div className="bg-white rounded-3xl p-8 shadow-large">
              <h3 className="text-xl font-bold text-brand-anthrazit mb-6">Tipp einreichen</h3>
              <form className="space-y-5" action="#">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Vorname</label>
                    <input type="text" placeholder="Johannes" className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Nachname</label>
                    <input type="text" placeholder="Müller" className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">E-Mail</label>
                  <input type="email" placeholder="beispiel@gmail.com" className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Telefon</label>
                  <div className="flex items-center border border-brand-gray-border rounded-xl overflow-hidden focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green transition-colors">
                    <span className="px-3 py-3 text-lg border-r border-brand-gray-border bg-brand-gray-light">🇩🇪</span>
                    <input type="tel" placeholder="Gib deine Telefonnummer ein" className="flex-1 px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none bg-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-anthrazit mb-3">Welcher Immobilientyp wird verkauft?</label>
                  <div className="space-y-2.5">
                    {['Wohnung', 'Haus', 'Mehrfamilienhaus', 'Andere'].map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded-full border-2 border-brand-gray-border group-hover:border-brand-green transition-colors shrink-0 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-green opacity-0 group-hover:opacity-30 transition-opacity" />
                        </div>
                        <span className="text-sm text-brand-anthrazit">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="w-full text-white font-semibold rounded-xl px-6 py-4 text-sm transition-all duration-200 flex items-center justify-center gap-2" style={{ background: '#16a34a' }}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Tippgeber-Provision sichern →
                </button>
              </form>
            </div>

            {/* Rechts – Info */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex -space-x-3">
                  <Image src="/niclas-portrait.png" alt="Niclas" className="w-14 h-14 rounded-full object-cover border-2 border-white shrink-0" style={{ objectPosition: 'center 15%' }} width={56} height={56} />
                  <Image src="/mazlum-portrait.png" alt="Mazlum" className="w-14 h-14 rounded-full object-cover border-2 border-white shrink-0" style={{ objectPosition: 'center 20%' }} width={56} height={56} />
                </div>
                <div>
                  <div className="font-bold text-white">Niclas & Mazlum</div>
                  <div className="text-sm text-gray-400">Geschäftsführer von immovativ<span className="font-semibold">Invest</span></div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: '#16a34a' }}>
                <svg className="w-5 h-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v2m0 8v2m-3-5h6m-5-3a2 2 0 104 0c0 1.1-.9 2-2 2" />
                </svg>
                <span className="text-white font-semibold text-sm">Tippgeberprovision</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Kennst du jemanden,<br />der verkaufen möchte?
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                Ein Bekannter oder Kollege von dir möchte sein Haus verkaufen? Deine Nachbarn ziehen um und verkaufen ihre Eigentumswohnung?
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ob Häuser, Wohnungen oder Mehrfamilienhäuser – gib uns einen Tipp und erhalte als Dankeschön eine Provision in Höhe von bis zu <strong className="text-white">10 %</strong> der Gesamtprovision, sollte es zu einem Deal kommen.
              </p>

              <ul className="space-y-4">
                {[
                  'Bis zu 10 % der Innenbereitstellung für dich als Tippgeber',
                  'Schnelle Auszahlung nach Erhalt der Provision',
                  'Rückruf innerhalb von 24 Stunden nach Erhalt deines Tipps',
                  'Vermarktung innerhalb von 6 Wochen',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#16a34a' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Property types */}
      <section id="immobilien" className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
              Für welche Immobilien geeignet?
            </h2>
            <p className="text-brand-gray-warm text-lg mb-6">
              Wir kaufen nahezu alle Immobilientypen – auch mit Renovierungsbedarf.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Renovierungsbedürftig',
                'Sanierungsbedürftig',
                'Schlecht vermietet',
                'Leerstand',
                'Erbschaft oder Scheidung',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 shadow-soft">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#16a34a' }}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-brand-anthrazit">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {propertyTypes.map((type) => (
              <div
                key={type.label}
                className="bg-white rounded-2xl p-6 text-center shadow-soft border border-brand-gray-border hover:border-brand-green hover:shadow-medium transition-all duration-300 group cursor-default"
              >
                <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{type.icon}</span>
                <span className="font-semibold text-brand-anthrazit">{type.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center mb-6">
            <a
              href="/Ankaufsprofil.pdf"
              download
              className="inline-flex items-center gap-3 text-white font-bold rounded-2xl px-6 py-3.5 text-sm sm:px-10 sm:py-5 sm:text-base transition-opacity hover:opacity-90 shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Ankaufsprofil herunterladen
            </a>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section id="bewertungen">
        <Testimonials title="Eigentümer, die uns vertrauen" />
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1e3a8a 50%, #0f2027 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Bereit für ein unverbindliches Angebot?
          </h2>
          <p className="text-blue-200 mb-6">
            Kostenlos, diskret und ohne jede Verpflichtung.
          </p>
          <a href="#kontakt" className="inline-flex items-center justify-center font-semibold rounded-xl px-5 md:px-8 py-3.5 md:py-4 text-base md:text-lg bg-white text-brand-anthrazit hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200">
            Jetzt kostenlos anfragen →
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={faqItems} title="Häufige Fragen zum Direktankauf" />
      </section>

      {/* Contact Form */}
      <ContactForm
        variant="ankauf"
        title="Jetzt dein Angebot anfordern"
        subtitle="Füll das Formular aus – wir melden uns innerhalb von 24 Stunden bei dir."
      />

      {/* Sticky mobile CTA – appears after scrolling past hero */}
      <StickyMobileCTA href="#kontakt" label="Jetzt kostenlos anfragen →" />

      <Footer variant="ankauf" />
    </main>
  )
}
