/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import BenefitCards from '@/components/BenefitCards'
import Testimonials from '@/components/Testimonials'
import GaugeStats from '@/components/GaugeStats'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import { sharedFaqItems } from '@/lib/faq-items'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import AnimateIn, { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { seoStaedte } from '@/lib/seo-staedte'
import TippgeberSection from '@/components/TippgeberSection'

export const metadata: Metadata = {
  title: 'Immobilienmakler – Professionell verkaufen | immovativInvest',
  description: 'Mit dem Immobilienmakler-Service von immovativInvest erzielen Sie den bestmöglichen Preis für Ihre Immobilie. Marktgerechte Bewertung, professionelle Vermarktung, persönliche Betreuung.',
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienmakler' },
  openGraph: {
    title: 'Immobilienmakler Frankfurt – Professionell verkaufen | immovativInvest',
    description: 'Mit immovativInvest den besten Preis für Ihre Immobilie erzielen – marktgerechte Bewertung, professionelle Vermarktung, persönliche Betreuung.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/immobilienmakler',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const benefits = [
  {
    icon: '📊',
    title: 'Marktgerechte Bewertung',
    description: 'Wir ermitteln den optimalen Verkaufspreis auf Basis aktueller Marktdaten und regionaler Expertise.',
  },
  {
    icon: '📣',
    title: 'Professionelle Vermarktung',
    description: 'Professionelle Fotos, ansprechende Exposés und zielgerichtete Schaltung auf allen relevanten Portalen.',
  },
  {
    icon: '👥',
    title: 'Qualifizierte Käufer',
    description: 'Wir prüfen alle Interessenten sorgfältig – du erhältst nur ernsthafte Kaufanfragen.',
  },
  {
    icon: '⏱️',
    title: 'Nur 6 Wochen Vertragslaufzeit',
    description: 'Keine langen Bindungen – wir überzeugen durch Leistung, nicht durch Vertragsdauer.',
  },
  {
    icon: '📂',
    title: 'Wir beschaffen alle Unterlagen',
    description: 'Grundbuchauszug, Energieausweis, Baupläne – wir kümmern uns um alle nötigen Dokumente für den Verkauf.',
  },
  {
    icon: '🔑',
    title: 'Vollständige Abwicklung',
    description: 'Von der Bewertung über den Kaufvertrag bis zur Schlüsselübergabe – wir übernehmen alles.',
  },
]

const processSteps = [
  {
    number: 1,
    icon: '💬',
    title: 'Kostenlose Erstberatung',
    description: 'In einem persönlichen Gespräch lernen wir deine Immobilie und deine Ziele kennen.',
  },
  {
    number: 2,
    icon: '📋',
    title: 'Immobilienbewertung',
    description: 'Wir erstellen eine fundierte Marktpreisanalyse und legen gemeinsam den optimalen Verkaufspreis fest.',
  },
  {
    number: 3,
    icon: '🚀',
    title: 'Vermarktungsstrategie',
    description: 'Professionelle Präsentation, gezielte Vermarktung und Besichtigungen mit qualifizierten Interessenten.',
  },
  {
    number: 4,
    icon: '🏆',
    title: 'Verkauf zum besten Preis',
    description: 'Wir verhandeln für dich und begleiten dich bis zur erfolgreichen Vertragsunterzeichnung.',
  },
]

const faqItems = sharedFaqItems

const navItems = [
  { label: 'Immobilienmakler', href: '/immobilienmakler' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

const whyUs = [
  { icon: '📍', title: 'Regionale Expertise', description: 'Tiefes Marktwissen in deiner Region – wir kennen die lokalen Preise und Käufer.' },
  { icon: '🌐', title: 'Digitale Vermarktung', description: 'Präsenz auf allen führenden Immobilienportalen plus unser eigenes Käufernetzwerk.' },
  { icon: '🏅', title: 'Nachgewiesene Erfolge', description: 'Über 500 erfolgreich verkaufte Immobilien sprechen für unsere Kompetenz.' },
  { icon: '⭐', title: '4,9/5 Bewertung', description: 'Außerordentliche Kundenzufriedenheit, bestätigt durch über 230 echte Bewertungen.' },
]

export default function ImmobilienmaklerPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Immobilienmakler', item: 'https://www.immovativ-invest.de/immobilienmakler' },
            ],
          }),
        }}
      />
      <Header
        ctaLabel="Kostenlose Immobilienbewertung"
        ctaHref="#kontakt"
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Immobilienmakler</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-10 pb-14 md:pt-24 md:pb-32 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <AnimateIn direction="up" delay={0}>
              {/* Social Proof */}
              <div className="inline-flex items-center gap-3 mb-6">
                {/* Avatare mit Stockfotos */}
                <div className="flex -space-x-2.5">
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
                      className="w-9 h-9 rounded-full border-2 border-white object-cover shrink-0"
                      width={36}
                      height={36}
                    />
                  ))}
                </div>
                {/* Sterne + Text */}
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} style={{ color: '#ffa61c' }} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-brand-anthrazit">
                    <span className="font-bold">4,9 von 5</span> Sternen (+100 Bewertungen)
                  </p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
                Immobilienmakler<br />
                <span className="text-brand-green">Frankfurt & Umgebung.</span>
              </h1>

              <p className="text-brand-gray-warm text-base leading-relaxed mb-2">
                Wir verkaufen Deine Immobilie zum bestmöglichen Preis.<br />
                Persönlich. Diskret. Ohne unnötige Wartezeiten.<br />
                Mit echten Ergebnissen — nicht mit leeren Versprechen.
              </p>

              {/* Bullet Points vertikal */}
              <ul className="space-y-4 mt-8 mb-8 md:mt-14 md:mb-14">
                {[
                  'Nur 6 Wochen Vertragslaufzeit',
                  'Über 100+ positive Bewertungen',
                  'Rechtliche Absicherung beim Verkauf',
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
                <CTAButton href="#kontakt" size="lg">
                  Kostenlose Erstberatung →
                </CTAButton>
                <CTAButton href="tel:+4915129686979" variant="outline" size="lg">
                  Jetzt anrufen
                </CTAButton>
              </div>
            </AnimateIn>

            {/* Feature panel */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-large border border-brand-gray-border">
              {/* Niclas Bild oben */}
              <div className="relative">
                <Image
                  src="/hero-niclas-2.png"
                  alt="Niclas van der Straeten"
                  className="w-full h-48 md:h-64 object-cover" style={{ objectPosition: 'center 15%' }}
                  width={800}
                  height={256}
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-anthrazit/80 to-transparent px-5 py-4 flex justify-end">
                  <div className="text-right">
                    <div className="text-white text-sm font-semibold">Niclas van der Straeten</div>
                    <div className="text-gray-300 text-xs">Dein Ansprechpartner</div>
                  </div>
                </div>
              </div>
              {/* Liste unten */}
              <div className="p-8">
                <h2 className="text-xl font-bold text-brand-anthrazit mb-5">Was du erhältst:</h2>
                <ul className="space-y-4">
                  {[
                    { icon: '📸', title: 'Professionelle Fotos', desc: 'Hochwertige Immobilienfotografie inklusive' },
                    { icon: '🌐', title: 'Portal-Schaltungen', desc: 'Präsenz auf allen führenden Portalen' },
                    { icon: '📱', title: 'Social Media Vermarktung', desc: 'Gezielte Reichweite auf Instagram, Facebook & Co.' },
                    { icon: '📋', title: 'Notarkoordination', desc: 'Vollständige Abwicklung bis zur Übergabe' },
                  ].map(item => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="text-2xl shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-brand-anthrazit text-sm">{item.title}</div>
                        <div className="text-brand-gray-warm text-sm">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 px-4 md:px-8 bg-brand-gray-light border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <AnimateIn direction="fade">
            <TrustBadges variant="row" />
          </AnimateIn>
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="section-padding bg-white">
        <div className="container-max">
          <AnimateIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
                <span className="text-brand-green">Deine Vorteile</span> mit immovativ<span className="font-black">Invest</span> als Makler.
              </h2>
              <p className="text-brand-gray-warm text-lg max-w-2xl mx-auto">
                Wir setzen alles daran, den bestmöglichen Preis für deine Immobilie zu erzielen – mit Erfahrung, Technologie und persönlichem Einsatz.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn direction="up" delay={100}>
            <BenefitCards benefits={benefits} layout="grid" columns={3} />
          </AnimateIn>
        </div>
      </section>

      {/* Warum jetzt verkaufen */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <AnimateIn direction="up">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Markteinschätzung
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-12">
            Warum jetzt ein <span className="text-brand-green">guter Zeitpunkt</span><br className="hidden md:block" /> für den Verkauf ist.
          </h2>

          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Links */}
            <AnimateIn direction="up" delay={0}>
            <div>
              {/* Autor-Badge */}
              <div className="flex items-center gap-4 mb-8 bg-white rounded-2xl px-5 py-4 border border-brand-gray-border shadow-soft w-fit">
                <Image
                  src="/hero-niclas-2.png"
                  alt="Niclas van der Straeten"
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                  style={{ objectPosition: 'center 15%' }}
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-bold text-brand-anthrazit text-sm">Niclas van der Straeten</div>
                  <div className="text-xs text-brand-gray-warm">Geschäftsführer · immovativ<span className="font-semibold">Invest</span></div>
                </div>
              </div>

              {/* Info-Punkte */}
              <ul className="space-y-5">
                {[
                  'Obwohl die Immobilienpreise in jüngster Zeit gefallen sind, haben sie in den letzten zehn Jahren bis Anfang 2022 stark angenommen. Viele Eigentümer können immer noch erhebliche Gewinne erzielen.',
                  'Der Immobilienmarkt kann weiter schwanken. Ein aktueller Verkauf schützt vor künftigen Preissenkungen und ermöglicht eine strategische Reinvestition.',
                  'Der Verkaufspreis, den Du mit Deiner Immobilie erzielen kannst, dürfte heute immer noch deutlich höher liegen als noch vor einigen Jahren.',
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-brand-gray-border">
                    <div className="w-8 h-8 rounded-xl bg-brand-green-50 border border-brand-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-brand-gray-warm leading-relaxed text-sm">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
            </AnimateIn>

            {/* Rechts – Bild */}
            <AnimateIn direction="up" delay={150}>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Immobilie verkaufen"
                className="w-full h-auto rounded-3xl shadow-large object-cover"
                width={800}
                height={600}
              />
              {/* Floating stat */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-medium border border-brand-gray-border px-5 py-4">
                <div className="text-2xl font-bold text-brand-green">+18%</div>
                <div className="text-xs text-brand-gray-warm">Ø Wertsteigerung<br/>der letzten 10 Jahre</div>
              </div>
            </div>
            </AnimateIn>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-8 border-t border-brand-gray-border flex items-center justify-between">
            <p className="text-brand-gray-warm text-sm">Kostenlos & unverbindlich — ohne Verpflichtung.</p>
            <CTAButton href="/verkaufen" variant="outline" size="sm">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <AnimateIn direction="up">
            <TrustBadges variant="stats" />
          </AnimateIn>
        </div>
      </section>

      {/* Verkaufsprozess */}
      <section id="prozess" className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

            {/* Links – Titel + Foto */}
            <AnimateIn direction="up" delay={0}>
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Unser Prozess
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
                Der Verkaufsprozess.
              </h2>
              <p className="text-brand-gray-warm leading-relaxed mb-8">
                Jede Immobilie und Situation ist einzigartig, doch sie durchläuft grundsätzlich die gleichen Stationen – von der Marktpreiseinschätzung bis zum erfolgreichen Abschluss beim Notar.
              </p>
              <Image
                src="/team-photo.png"
                alt="immovativInvest Team"
                className="w-full h-96 object-cover rounded-2xl shadow-medium"
                style={{ objectPosition: 'center 30%' }}
                width={800}
                height={384}
              />
            </div>
            </AnimateIn>

            {/* Rechts – Schritte */}
            <AnimateIn direction="up" delay={150}>
            <div className="space-y-4">
              {[
                {
                  num: '1',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: 'Kennenlernen',
                  desc: 'Im ersten Schritt telefonieren wir, besprechen die Eckdaten deiner Immobilie und klären alle Fragen zur Zusammenarbeit.',
                  highlight: false,
                },
                {
                  num: '2',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ),
                  title: 'Begutachtung',
                  desc: 'Wir lernen uns persönlich kennen und begutachten die Immobilie. Du erhältst eine präzise Verkaufspreiseinschätzung und kannst in Ruhe entscheiden.',
                  highlight: false,
                },
                {
                  num: '3',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Vorbereitung',
                  desc: 'Wir besorgen alle relevanten Unterlagen, beauftragen einen zertifizierten Vermesser sowie professionelle Fotografen und Videografen.',
                  highlight: false,
                },
                {
                  num: '4',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  ),
                  title: 'Vermarktung',
                  desc: 'Wir stellen Deine Immobilie potenziellen Käufern vor – von diskret bis weitreichend – um kaufbereite Interessenten zu gewinnen.',
                  highlight: false,
                },
                {
                  num: '5',
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: 'Deal-Time',
                  desc: 'Wir erzielen den besten Preis, erstellen den Kaufvertrag und begleiten Dich zum Notartermin für die endgültige Unterschrift.',
                  highlight: true,
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className={`rounded-2xl p-6 flex gap-5 items-start ${step.highlight ? 'bg-brand-green text-white' : 'bg-brand-anthrazit text-white'}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${step.highlight ? 'bg-white/15 border-white/20' : 'bg-white/10 border-white/10'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${step.highlight ? 'text-green-200' : 'text-gray-400'}`}>Schritt {step.num}</div>
                    <h3 className="text-lg font-bold mb-1.5">{step.title}</h3>
                    <p className={`text-sm leading-relaxed ${step.highlight ? 'text-green-100' : 'text-gray-300'}`}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <TippgeberSection />

      <AnimateIn direction="up">
        <GaugeStats />
      </AnimateIn>

      {/* Wieso immovativ<span className="font-black">Invest</span> */}
      <section id="warum" className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Links – Foto */}
            <AnimateIn direction="up" delay={0}>
              <div className="relative">
                <Image
                  src="/mazlum.png"
                  alt="Mazlum Selcuk – immovativInvest"
                  className="w-full h-72 md:h-[580px] object-cover rounded-3xl shadow-large"
                  style={{ objectPosition: 'center top' }}
                  width={800}
                  height={580}
                />
              </div>
            </AnimateIn>

            {/* Rechts – Text */}
            <AnimateIn direction="up" delay={150}>
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wieso immovativ<span className="font-black">Invest</span>?
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-10 leading-tight">
                Wieso immovativ<span className="font-black">Invest</span>&#8203;?
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-brand-anthrazit mb-2">Falsche Versprechen in der Branche…</h3>
                  <p className="text-brand-gray-warm leading-relaxed">
                    immovativ<strong className="text-brand-anthrazit font-semibold">Invest</strong> wurde gegründet, weil viele Eigentümer heute mit Bewertungen konfrontiert sind, die zwar schnell erstellt werden, aber oft an Tiefe und Verlässlichkeit fehlen. Verkaufsprozesse beginnen nicht selten ohne klare Strategie, mit unrealistischen Preisvorstellungen oder ohne fundierte Einschätzung der tatsächlichen Nachfrage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-brand-anthrazit mb-2">Wieso wir anders arbeiten…</h3>
                  <p className="text-brand-gray-warm leading-relaxed">
                    Wir verfolgen bewusst einen anderen Ansatz: Entscheidungen basieren nicht auf Bauchgefühl, sondern auf geprüften Bewertungsverfahren, aktuellen Marktdaten und fundierter regionaler Erfahrung. Das schafft Klarheit für Eigentümer und sorgt für einen stabilen, nachvollziehbaren Verkaufsprozess.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <CTAButton href="/verkaufen" variant="primary" size="sm">
                  Immobilienbewertung starten →
                </CTAButton>
              </div>
            </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* Persönlich sprechen */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Links – Text + Buttons */}
            <AnimateIn direction="up" delay={0}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-6 leading-tight">
                Du möchtest persönlich sprechen?
              </h2>
              <p className="text-brand-gray-warm leading-relaxed mb-4 text-lg">
                Egal was Du gerne wissen möchtest, schreib uns oder ruf uns an. Wir helfen Dir sehr gerne weiter.
              </p>
              <p className="text-brand-gray-warm leading-relaxed mb-10">
                Du erreichst uns von <strong className="text-brand-anthrazit">Montag–Sonntag zwischen 08:00–20:00 Uhr</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+4915129686979"
                  className="inline-flex items-center justify-center gap-3 btn-gradient text-white font-semibold rounded-xl px-7 py-4 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen
                </a>
                <a
                  href="https://wa.me/4915129686979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold rounded-xl px-7 py-4 transition-colors text-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
            </AnimateIn>

            {/* Rechts – Foto */}
            <AnimateIn direction="up" delay={150}>
              <div className="relative">
                <Image
                  src="/NiclasAlleine 2.png"
                  alt="Niclas van der Straeten"
                  className="w-full h-64 md:h-[480px] object-cover rounded-3xl shadow-large"
                  style={{ objectPosition: 'center top' }}
                  width={800}
                  height={480}
                />
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1e3a8a 50%, #0f2027 100%)' }}>
        <AnimateIn direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Deine Immobilie. Unser Einsatz. Dein Erfolg.
            </h2>
            <p className="text-blue-200 mb-6">
              Kostenlose Erstberatung und Bewertung – ganz ohne Verpflichtung.
            </p>
            <a href="#kontakt" className="inline-flex items-center justify-center whitespace-nowrap font-semibold rounded-xl px-8 py-4 text-lg bg-white text-brand-anthrazit hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200">
              Jetzt kostenlos beraten lassen →
            </a>
          </div>
        </AnimateIn>
      </section>

      {/* Regionen */}
      <section className="py-14 px-4 md:px-8 bg-brand-gray-light">
        <div className="container-max">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-3.5 py-1.5 text-xs font-semibold mb-3">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Unser Servicegebiet
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit leading-tight">
                Dein Makler in der <span className="text-brand-green">Rhein-Main-Region.</span>
              </h2>
            </div>
            <div className="flex items-center gap-6 md:gap-10 shrink-0">
              {[['35+', 'Städte'], ['14', 'Regionen'], ['500+', 'Verkäufe']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-xl font-bold text-brand-anthrazit">{val}</div>
                  <div className="text-xs text-brand-gray-warm uppercase tracking-wide font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Region grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              'Hochtaunuskreis',
              'Wetteraukreis',
              'Frankfurt am Main',
              'Landkreis Offenbach',
              'Offenbach am Main',
              'Main-Kinzig-Kreis',
              'Kreis Groß-Gerau',
              'Main-Taunus-Kreis',
              'Landkreis Limburg-Weilburg',
              'Rheingau-Taunus-Kreis',
              'Darmstadt',
              'Wiesbaden',
              'Mainz',
              'Landkreis Gießen',
            ].map(region => {
              const staedte = seoStaedte.filter(s => s.region === region)
              if (staedte.length === 0) return null
              return (
                <div key={region} className="bg-white rounded-2xl p-4 border border-brand-gray-border shadow-soft">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-brand-green shrink-0" />
                    <span className="text-xs font-bold text-brand-anthrazit uppercase tracking-wide">{region}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {staedte.map(stadt => (
                      <a
                        key={stadt.slug}
                        href={`/immobilienmakler-${stadt.slug}`}
                        className="inline-block rounded-full px-2.5 py-1 text-xs font-medium text-brand-anthrazit bg-brand-gray-light hover:bg-brand-green hover:text-white transition-all duration-150"
                      >
                        {stadt.name}
                      </a>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl px-6 py-4 border border-brand-gray-border shadow-soft">
            <p className="text-brand-gray-warm text-sm">Deine Stadt nicht dabei? Wir sind auch darüber hinaus für dich tätig.</p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-white font-semibold rounded-xl px-5 py-2.5 text-sm transition-all whitespace-nowrap hover:-translate-y-0.5 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
            >
              Jetzt Kontakt aufnehmen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <FAQ items={faqItems} title="Häufige Fragen zum Makler-Service" />
      </section>

      {/* Contact Form */}
      <ContactForm
        variant="makler"
        title="Kostenlose Erstberatung anfordern"
        subtitle="Unverbindlich, diskret und schnell. Wir melden uns innerhalb von 24 Stunden."
      />

      {/* Sticky mobile CTA – appears after scrolling past hero */}
      <StickyMobileCTA href="#kontakt" label="Kostenlose Erstberatung →" />

      <Footer variant="makler" />
    </main>
  )
}
