/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Testimonials from '@/components/Testimonials'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Über uns – Niclas & Mazlum | immovativInvest',
  description: 'Lernen Sie die Geschäftsführer von immovativInvest kennen: Niclas van der Straeten und Mazlum Selcuk – Ihre persönlichen Ansprechpartner beim Immobilienverkauf in der Rhein-Main-Region.',
  alternates: { canonical: 'https://www.immovativ-invest.de/ueber-uns' },
  openGraph: {
    title: 'Über uns – Team immovativInvest Frankfurt | immovativInvest',
    description: 'Lernen Sie Niclas & Mazlum kennen – die Geschäftsführer von immovativInvest und Ihre persönlichen Ansprechpartner in der Rhein-Main-Region.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/ueber-uns',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

const navItems = [
  { label: 'Immobilienmakler', href: '/' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

export default function UeberUnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://www.immovativ-invest.de/ueber-uns#niclas',
                name: 'Niclas van der Straeten',
                jobTitle: 'Geschäftsführer & Immobilienmakler',
                description: 'Immobilienmakler in Frankfurt und dem Rhein-Main-Gebiet. Spezialisiert auf den Verkauf von Wohn- und Anlageimmobilien.',
                image: 'https://www.immovativ-invest.de/hero-niclas-2.png',
                url: 'https://www.immovativ-invest.de/ueber-uns',
                telephone: '+4915129686979',
                email: 'info@immovativ-invest.de',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Frankfurt am Main',
                  addressRegion: 'Hessen',
                  addressCountry: 'DE',
                },
                worksFor: {
                  '@type': 'RealEstateAgent',
                  name: 'immovativInvest',
                  url: 'https://www.immovativ-invest.de',
                },
                knowsAbout: ['Immobilienverkauf', 'Immobilienbewertung', 'Rhein-Main-Immobilienmarkt', 'Off-Market-Verkauf'],
                areaServed: 'Frankfurt am Main und Rhein-Main-Gebiet',
              },
              {
                '@type': 'Person',
                '@id': 'https://www.immovativ-invest.de/ueber-uns#mazlum',
                name: 'Mazlum Selcuk',
                jobTitle: 'Geschäftsführer & Immobilienmakler',
                description: 'Immobilienmakler in Frankfurt und dem Rhein-Main-Gebiet. Spezialisiert auf Kundenkommunikation, Besichtigungsmanagement und Verkaufsabwicklung.',
                image: 'https://www.immovativ-invest.de/mazlum.png',
                url: 'https://www.immovativ-invest.de/ueber-uns',
                telephone: '+4915129686979',
                email: 'info@immovativ-invest.de',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Frankfurt am Main',
                  addressRegion: 'Hessen',
                  addressCountry: 'DE',
                },
                worksFor: {
                  '@type': 'RealEstateAgent',
                  name: 'immovativInvest',
                  url: 'https://www.immovativ-invest.de',
                },
                knowsAbout: ['Immobilienverkauf', 'Besichtigungsmanagement', 'Kundenbetreuung', 'Rhein-Main-Immobilienmarkt'],
                areaServed: 'Frankfurt am Main und Rhein-Main-Gebiet',
              },
              {
                '@type': 'AboutPage',
                '@id': 'https://www.immovativ-invest.de/ueber-uns',
                url: 'https://www.immovativ-invest.de/ueber-uns',
                name: 'Über uns – Team immovativInvest',
                description: 'Niclas van der Straeten und Mazlum Selcuk sind die Gründer und Geschäftsführer von immovativInvest. Als Immobilienmakler im Rhein-Main-Gebiet begleiten sie Eigentümer beim professionellen Immobilienverkauf.',
                inLanguage: 'de-DE',
                isPartOf: { '@id': 'https://www.immovativ-invest.de/#website' },
                about: { '@id': 'https://www.immovativ-invest.de/#organization' },
              },
            ],
          }),
        }}
      />
      <Header
        ctaLabel="Kostenlose Immobilienbewertung"
        ctaHref="/verkaufen"
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Über uns</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-0 px-4 md:px-8">
        {/* Decorative blobs */}
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">

          {/* Top: centered text */}
          <AnimateIn direction="up">
          <div className="text-left max-w-3xl mx-auto mb-14">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-brand-anthrazit leading-tight mb-6">
              Dein Erfolg ist <span className="text-brand-green">unsere Mission.</span>
            </h1>
            <p className="text-brand-gray-warm text-lg leading-relaxed mb-8">
              Immobilienverkauf sollte ehrlich, persönlich und auf Augenhöhe sein.<br />Dafür haben wir immovativ<span className="font-black">Invest</span> gegründet.
            </p>
          </div>
          </AnimateIn>

          {/* Bottom: two portrait cards flush to section bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">

            {/* Niclas */}
            <AnimateIn direction="up" delay={0}>
            <div className="relative rounded-t-3xl overflow-hidden group">
              <Image
                src="/niclas-hochhaus.png"
                alt="Niclas van der Straeten"
                className="w-full h-64 md:h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                width={800}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-anthrazit via-brand-anthrazit/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Geschäftsführer & Gründer</div>
                <div className="text-white text-xl md:text-2xl font-bold">Niclas van der Straeten</div>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">Vermarktungsstrategie, Preisgestaltung & persönliche Kundenbetreuung</p>
              </div>
            </div>
            </AnimateIn>

            {/* Mazlum */}
            <AnimateIn direction="up" delay={150}>
            <div className="relative rounded-t-3xl overflow-hidden group">
              <Image
                src="/mazlum-hochhaus.png"
                alt="Mazlum Selcuk"
                className="w-full h-64 md:h-[400px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                width={800}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-anthrazit via-brand-anthrazit/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="text-white text-xs font-semibold uppercase tracking-widest mb-1">Geschäftsführer & Gründer</div>
                <div className="text-white text-xl md:text-2xl font-bold">Mazlum Selcuk</div>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">Prozesse, Netzwerk & reibungslose Abwicklung bis zur Schlüsselübergabe</p>
              </div>
            </div>
            </AnimateIn>

          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-brand-gray-border mt-0">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {[
              { value: '125+', label: 'Verkäufe' },
              { value: '4,9★', label: 'Google-Bewertung' },
              { value: '6 Wo.', label: 'Ø Vertragslaufzeit' },
              { value: '100%', label: 'Persönlich' },
            ].map((stat, i) => (
              <div key={stat.label} className={`py-5 px-4 text-center ${i < 2 ? 'border-b md:border-b-0' : ''} ${i % 2 === 0 ? 'border-r' : ''} md:border-r border-brand-gray-border last:border-r-0 md:last:border-r-0`}>
                <div className="text-xl md:text-2xl font-bold text-brand-anthrazit">{stat.value}</div>
                <div className="text-brand-gray-warm text-xs md:text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Niclas */}
      <section className="section-padding bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">

            {/* Foto – nimmt 2/5 */}
            <AnimateIn direction="up" className="lg:col-span-2">
              <div className="relative">
                <Image
                  src="/NiclasAlleine 2.png"
                  alt="Niclas van der Straeten"
                  className="w-full h-72 md:h-[580px] object-cover rounded-3xl shadow-large"
                  style={{ objectPosition: 'center top' }}
                  width={800}
                  height={580}
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-medium">
                  <div className="text-xs text-brand-gray-warm font-semibold uppercase tracking-wider mb-0.5">Geschäftsführer & Gründer</div>
                  <div className="text-brand-anthrazit font-bold text-base">Niclas van der Straeten</div>
                </div>
              </div>
            </AnimateIn>

            {/* Text – nimmt 3/5 */}
            <AnimateIn direction="up" delay={100} className="lg:col-span-3 lg:pl-6">
              <p className="text-brand-gray-warm text-base leading-relaxed mb-8">
                Niclas ist der Kopf hinter der Vermarktungsstrategie bei immovativ<span className="font-black">Invest</span>. Mit einem tiefen Verständnis für den Rhein-Main-Markt und einem ausgeprägten Gespür für Preisgestaltung begleitet er Eigentümer vom ersten Gespräch bis zum Notartermin — ohne unrealistische Versprechen, dafür mit echter Erfahrung.
              </p>

              {/* Zitat */}
              <blockquote className="border-l-4 border-brand-green pl-5 mb-8">
                <p className="text-brand-anthrazit text-lg font-medium leading-relaxed italic">
                  "Käufer gewinnt man durch gezielte und vorher strukturierte Vermarktung, nicht durch Zufall."
                </p>
              </blockquote>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '🏡 125+', label: 'Verkäufe' },
                  { value: '⭐ 4,9/5', label: 'Google-Bewertung' },
                  { value: '⏱️ Ø 6 Wo.', label: 'bis Abschluss' },
                  { value: '📍 Rhein-Main', label: 'Region' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white rounded-2xl px-5 py-4 shadow-soft border border-brand-gray-border">
                    <div className="text-2xl font-bold text-brand-anthrazit">{stat.value}</div>
                    <div className="text-xs text-brand-gray-warm mt-0.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <CTAButton href="/verkaufen" variant="primary" size="sm">
                Immobilienbewertung starten →
              </CTAButton>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* Mazlum */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">

            {/* Text – nimmt 3/5, links */}
            <AnimateIn direction="up" className="lg:col-span-3 lg:pr-6 order-2 lg:order-1">
              <p className="text-brand-gray-warm text-base leading-relaxed mb-8">
                Mazlum bringt das strukturelle Rückgrat in die Partnerschaft ein. Mit einem scharfen Blick für Prozesse und Kundenerlebnis stellt er sicher, dass jeder Verkauf reibungslos abläuft – von der Unterlagenbeschaffung bis zur Schlüsselübergabe. Sein tiefes Netzwerk im Rhein-Main-Raum ermöglicht es, Käufer oft schon vor dem ersten Portalinserat zu finden.
              </p>

              <blockquote className="border-l-4 border-brand-green pl-5 mb-8">
                <p className="text-brand-anthrazit text-lg font-medium leading-relaxed italic">
                  "Vertrauen wird jeden Tag neu verdient — durch transparente Kommunikation und Ergebnisse, nicht durch Versprechen."
                </p>
              </blockquote>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '🤝 Stark', label: 'Käufernetzwerk' },
                  { value: '📋 100%', label: 'Vollständige Abwicklung' },
                  { value: '🔒 Diskret', label: 'Vermarktung' },
                  { value: '📅 Mo–So', label: 'Erreichbar' },
                ].map(stat => (
                  <div key={stat.label} className="bg-brand-cream rounded-2xl px-5 py-4 shadow-soft border border-brand-gray-border">
                    <div className="text-2xl font-bold text-brand-anthrazit">{stat.value}</div>
                    <div className="text-xs text-brand-gray-warm mt-0.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <CTAButton href="/verkaufen" variant="primary" size="sm">
                Immobilienbewertung starten →
              </CTAButton>
            </AnimateIn>

            {/* Foto – nimmt 2/5, rechts */}
            <AnimateIn direction="up" delay={100} className="lg:col-span-2 order-1 lg:order-2">
              <div className="relative">
                <Image
                  src="/mazlum.png"
                  alt="Mazlum Selcuk"
                  className="w-full h-72 md:h-[580px] object-cover rounded-3xl shadow-large"
                  style={{ objectPosition: 'center top' }}
                  width={800}
                  height={580}
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-medium">
                  <div className="text-xs text-brand-gray-warm font-semibold uppercase tracking-wider mb-0.5">Geschäftsführer & Gründer</div>
                  <div className="text-brand-anthrazit font-bold text-base">Mazlum Selcuk</div>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* Sektion 1: Genug davon */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateIn direction="up" delay={0}>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green-50 rounded-3xl translate-x-3 translate-y-3" />
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop"
                  alt="Meeting"
                  className="relative w-full h-64 md:h-[480px] object-cover rounded-3xl shadow-large"
                  width={800}
                  height={480}
                />
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={150}>
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  Ehrlichkeit zuerst
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-6 leading-tight">
                  Genug davon!
                </h2>
                <div className="space-y-4 text-brand-gray-warm leading-relaxed">
                  <p>
                    Lass uns ehrlich sein… der Maklerberuf hat oft einen schlechten Ruf: „Wenig Arbeit, wenig Wissen, unpersönlich, überbezahlt." Wir verstehen, woher diese Vorurteile kommen.
                  </p>
                  <p>
                    Oftmals trifft man „den Immobilienmakler" nur einmal bei der Besichtigung — und dann wieder beim Notar. Dazwischen: Schweigen. Wir kennen diese Geschichten.
                  </p>
                  <p>
                    Und wir haben immovativ<span className="font-black">Invest</span> genau deshalb anders aufgebaut.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3 bg-brand-green-50 border border-brand-green-100 rounded-2xl px-5 py-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#16a34a' }}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-semibold text-brand-anthrazit text-sm">Wir machen es anders.</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Sektion 2: Wir brechen mit Klischees */}
      <section className="section-padding bg-brand-gray-light px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateIn direction="up" delay={0}>
              <div className="text-left">
                <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
                  Unser Anspruch
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-6 leading-tight">
                  Wir brechen mit allen<br />Makler-Klischees.
                </h2>
                <div className="space-y-4 text-brand-gray-warm leading-relaxed">
                  <p>
                    Du verdienst einen Service, der Dich von Anfang an abholt — der Dir volle Transparenz gibt, Dir die Arbeit abnimmt und am Ende das beste Ergebnis rausholt.
                  </p>
                  <p>
                    Bei uns trifft Marktexpertise auf echte Persönlichkeit. Wir sind keine anonyme Agentur — wir sind Niclas und Mazlum, zwei Menschen die Verantwortung für Deinen Verkauf übernehmen.
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {['Persönlicher Ansprechpartner – immer erreichbar', 'Vollständige Abwicklung von A bis Z', 'Transparente Kommunikation ohne Überraschungen'].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-anthrazit">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#16a34a' }}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={150}>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green-50 rounded-3xl -translate-x-3 translate-y-3" />
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Team immovativInvest"
                  className="relative w-full h-64 md:h-[480px] object-cover rounded-3xl shadow-large"
                  width={800}
                  height={480}
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Sektion 3: Wir sprechen Deine Sprache */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateIn direction="up" delay={0}>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-green-50 rounded-3xl translate-x-3 translate-y-3" />
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                  alt="Kommunikation"
                  className="relative w-full h-64 md:h-[480px] object-cover rounded-3xl shadow-large"
                  width={800}
                  height={480}
                />
              </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={150}>
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
                Direkte Kommunikation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-6 leading-tight">
                Wir sprechen<br />Deine Sprache.
              </h2>
              <div className="space-y-4 text-brand-gray-warm leading-relaxed">
                <p>
                  Offen, ehrlich, nahbar — ohne Floskeln und ohne Warteschleifen. Du erreichst uns direkt und bekommst regelmäßige Updates über Deinen Verkauf, ohne danach fragen zu müssen.
                </p>
                <p>
                  Kontaktiere uns so, wie es Dir am besten passt — per Anruf, WhatsApp oder E-Mail. Wir sind für Dich da.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-start gap-3">
                <a href="tel:+4915129686979" className="inline-flex items-center gap-2 btn-gradient text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Jetzt anrufen
                </a>
                <a href="https://wa.me/4915129686979" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Tippgeber */}
      <section id="tippgeber" className="section-padding" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a4a 50%, #0f2027 100%)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

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
                <button type="submit" className="w-full text-white font-semibold rounded-xl px-6 py-4 text-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap" style={{ background: '#16a34a' }}>
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
                Ein Bekannter oder Kollege möchte sein Haus verkaufen? Die Nachbarn ziehen um und verkaufen ihre Eigentumswohnung?
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Ob Häuser, Wohnungen oder Mehrfamilienhäuser – gib uns einen Tipp und erhalte als Dankeschön eine Provision von bis zu <strong className="text-white">10 %</strong> der Gesamtprovision.
              </p>
              <ul className="space-y-4">
                {[
                  'Bis zu 10 % der Innenprovision für dich',
                  'Schnelle Auszahlung nach Vertragsabschluss',
                  'Rückruf innerhalb von 24 Stunden',
                  'Gilt für Häuser, Wohnungen & Mehrfamilienhäuser',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#16a34a' }}>
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Kundenrezensionen */}
      <Testimonials title="Das sagen unsere Kunden über uns" />

      {/* Immobilienangebote Teaser */}
      <section className="section-padding px-4 md:px-8 bg-brand-gray-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse inline-block" />
              Demnächst verfügbar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-3">Unsere Immobilienangebote.</h2>
            <p className="text-brand-gray-warm text-sm max-w-md mx-auto">
              Ausgewählte Objekte aus Frankfurt & Rhein-Main — diskret, geprüft, direkt von uns vermittelt.
            </p>
          </div>

          {/* Placeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { type: 'Eigentumswohnung', location: 'Frankfurt · Sachsenhausen', size: 'ca. 95 m²', rooms: '3 Zimmer' },
              { type: 'Einfamilienhaus', location: 'Bad Homburg', size: 'ca. 180 m²', rooms: '5 Zimmer' },
              { type: 'Mehrfamilienhaus', location: 'Offenbach am Main', size: 'ca. 420 m²', rooms: '6 Einheiten' },
            ].map((obj) => (
              <div key={obj.type} className="bg-white rounded-2xl overflow-hidden border border-brand-gray-border shadow-soft">
                {/* Image placeholder */}
                <div className="relative h-44 bg-gradient-to-br from-brand-green-50 to-brand-cream flex items-center justify-center">
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-brand-gray-border">
                    <div className="text-xs font-semibold text-brand-anthrazit text-center">Bald verfügbar</div>
                  </div>
                  {/* House icon */}
                  <svg className="absolute bottom-4 right-4 w-10 h-10 text-brand-green/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                  </svg>
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold text-brand-green uppercase tracking-wide mb-1">{obj.type}</div>
                  <div className="font-bold text-brand-anthrazit text-sm mb-2">{obj.location}</div>
                  <div className="flex items-center gap-3 text-xs text-brand-gray-warm">
                    <span>{obj.size}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-gray-border inline-block" />
                    <span>{obj.rooms}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-brand-gray-border">
                    <div className="h-4 w-24 rounded bg-brand-gray-border/60 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-left md:text-center">
            <a
              href="/immobilienangebote"
              className="inline-flex items-center gap-2 bg-brand-anthrazit hover:bg-brand-anthrazit/90 text-white font-semibold rounded-xl px-8 py-4 text-sm transition-colors"
            >
              Alle Angebote ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <ContactForm
        variant="makler"
        title="Lern uns persönlich kennen."
        subtitle="Kostenlose Erstberatung – unverbindlich, diskret und schnell. Wir melden uns innerhalb von 24 Stunden."
      />

      <Footer variant="makler" />
    </main>
  )
}
