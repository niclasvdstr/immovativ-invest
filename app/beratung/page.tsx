/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Kostenlose Immobilienberatung | immovativInvest',
  description: 'Wir beraten Sie kostenlos – egal ob Hausverkauf, Ankauf oder Finanzierung. Persönlich, diskret und ohne Verpflichtung.',
  alternates: { canonical: 'https://www.immovativ-invest.de/beratung' },
  openGraph: {
    title: 'Kostenlose Immobilienberatung Frankfurt & Rhein-Main | immovativInvest',
    description: 'Persönliche Immobilienberatung in Frankfurt & Rhein-Main – kostenlos, unverbindlich und ohne versteckte Agenda.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/beratung',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

export default function BeratungPage() {
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
              { '@type': 'ListItem', position: 2, name: 'Leistungen', item: 'https://www.immovativ-invest.de/service' },
              { '@type': 'ListItem', position: 3, name: 'Beratung', item: 'https://www.immovativ-invest.de/beratung' },
            ],
          }),
        }}
      />
      <Header ctaLabel="Jetzt Beratung anfragen" ctaHref="#kontakt" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li><a href="/service" className="hover:text-brand-green transition-colors">Leistungen</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Beratung</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <AnimateIn direction="up">
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            💬 Kostenlose Beratung
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
            Gute Beratung<br />
            <span className="text-brand-green">braucht keine Rechnung.</span>
          </h1>
          <p className="text-brand-gray-warm text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Immobilienentscheidungen sind komplex und oft emotional. Wir nehmen uns die Zeit, deine Situation wirklich zu verstehen — und geben dir eine ehrliche Einschätzung. Kostenlos, persönlich, ohne versteckte Agenda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="#kontakt" variant="primary" size="md">
              Beratung anfragen →
            </CTAButton>
            <CTAButton href="/verkaufen" variant="outline" size="md">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
        </AnimateIn>
      </section>

      {/* Bild + Einleitung */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimateIn direction="up" delay={0}>
            <div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">
                Die meisten Fehler entstehen vor der Entscheidung
              </h2>
              <div className="space-y-4 text-brand-gray-warm leading-relaxed text-sm">
                <p>
                  Ob Verkauf, Kauf oder Finanzierung — die häufigsten und teuersten Fehler passieren nicht aus Unwissenheit, sondern weil man im entscheidenden Moment keine neutrale Stimme zur Hand hatte. Jemanden, der die richtigen Fragen stellt.
                </p>
                <p>
                  Wann ist der richtige Zeitpunkt zum Verkauf? Ist dieser Kaufpreis wirklich fair? Reicht mein Eigenkapital aus? Diese Fragen lassen sich nur im Gespräch beantworten — nicht durch einen Online-Rechner.
                </p>
                <p>
                  Deshalb bieten wir kostenlose, unverbindliche Erstgespräche an. Nicht als Verkaufsstrategie, sondern weil wir überzeugt sind: Wer gut beraten wird, trifft bessere Entscheidungen.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { icon: '🎯', text: 'Ehrlich & direkt — auch wenn es unbequem ist' },
                  { icon: '🔒', text: 'Absolut vertraulich — keine Datenweitergabe' },
                  { icon: '⏰', text: 'Kein Zeitdruck — du entscheidest in deinem Tempo' },
                  { icon: '🤝', text: 'Auf Augenhöhe — verständlich, ohne Fachbegriffe' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-brand-anthrazit">
                    <span className="text-lg">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            </AnimateIn>
            <AnimateIn direction="up" delay={150}>
            <div className="rounded-3xl overflow-hidden h-[480px]">
              <Image
                src="/team-office.png"
                alt="Beratungsgespräch bei immovativInvest"
                className="w-full h-full object-cover"
                width={800}
                height={480}
                priority
              />
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Themen */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimateIn direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Womit können wir helfen?</h2>
            <p className="text-brand-gray-warm text-sm max-w-xl mx-auto">
              Kein Thema ist zu groß oder zu klein. Hier sind die häufigsten Fragen, mit denen Menschen zu uns kommen.
            </p>
          </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏡',
                title: 'Hausverkauf',
                items: [
                  'Wann ist der richtige Zeitpunkt zum Verkauf?',
                  'Wie ermittle ich den realistischen Marktwert?',
                  'Was kostet mich ein Verkauf wirklich?',
                  'Makler oder Privatverkauf — was ist besser?',
                  'Wie läuft ein Notartermin ab?',
                  'Was muss ich steuerlich beachten?',
                ],
              },
              {
                icon: '🔍',
                title: 'Immobilienkauf',
                items: [
                  'Wie erkenne ich einen fairen Preis?',
                  'Welche Unterlagen muss ich prüfen?',
                  'Was sind versteckte Kosten beim Kauf?',
                  'Wie schütze ich mich als Käufer?',
                  'Wann sollte ich ein Gutachten beauftragen?',
                  'Wie verhandelt man den Kaufpreis?',
                ],
              },
              {
                icon: '💰',
                title: 'Finanzierung',
                items: [
                  'Wie viel kann ich mir realistisch leisten?',
                  'Welche Finanzierungsform passt zu mir?',
                  'Wie vergleiche ich Bankangebote richtig?',
                  'Was ist bei der Anschlussfinanzierung zu beachten?',
                  'Welche Förderungen stehen mir zu?',
                  'Wie viel Eigenkapital brauche ich wirklich?',
                ],
              },
            ].map((item, index) => (
              <AnimateIn key={item.title} direction="up" delay={index * 120}>
              <div className="bg-white rounded-2xl p-6 border border-brand-gray-border">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit text-lg mb-4">{item.title}</h3>
                <ul className="space-y-2.5">
                  {item.items.map(q => (
                    <li key={q} className="flex items-start gap-2 text-sm text-brand-gray-warm">
                      <span className="text-brand-green font-bold shrink-0 mt-0.5">→</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-anthrazit px-4 md:px-8 py-14">
        <AnimateIn direction="fade">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Wie viel ist deine Immobilie wert?</h2>
            <p className="text-gray-400 text-sm">Kostenlose Wertermittlung — unverbindlich, schnell und ohne Verpflichtung.</p>
          </div>
          <CTAButton href="/verkaufen" variant="primary" size="md">
            Immobilienbewertung starten →
          </CTAButton>
        </div>
        </AnimateIn>
      </section>

      {/* Tipps */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              💡 Unsere Tipps
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">So bereitest du dich auf eine Beratung vor</h2>
            <p className="text-brand-gray-warm text-sm max-w-xl mx-auto">Je besser du vorbereitet bist, desto wertvoller wird das Gespräch für dich.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📋',
                title: 'Definieren Sie Ihr Ziel',
                desc: 'Was willst du am Ende des Gesprächs wissen oder entschieden haben? Ein klares Ziel hilft uns, die Beratung für dich so nützlich wie möglich zu machen. Du musst das Ziel nicht perfekt formulieren — nur ungefähr wissen, wohin.',
              },
              {
                icon: '📁',
                title: 'Relevante Unterlagen sammeln',
                desc: 'Beim Verkauf: Grundbuchauszug, Baupläne, Energieausweis. Beim Kauf: Exposé, Kaufpreisangebot. Bei der Finanzierung: Einkommensnachweise, bestehende Verbindlichkeiten. Nicht alles ist nötig — aber was vorhanden ist, hilft.',
              },
              {
                icon: '❓',
                title: 'Fragen notieren',
                desc: 'Schreib vor dem Gespräch auf, was dich beschäftigt — auch wenn es dir unwichtig erscheint. Oft sind es genau die kleinen Fragen, die den größten Einfluss auf die Entscheidung haben.',
              },
              {
                icon: '🚫',
                title: 'Keinen Druck aufbauen',
                desc: 'Es gibt keinen richtigen oder falschen Zeitpunkt für eine Beratung. Du musst noch nichts entschieden haben, um mit uns zu sprechen. Unsicherheit ist ein völlig legitimer Grund für ein erstes Gespräch.',
              },
            ].map(item => (
              <div key={item.title} className="bg-brand-cream rounded-2xl p-6 border border-brand-gray-border">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit mb-2">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Besondere Situationen */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Auch in besonderen Lebenslagen</h2>
            <p className="text-brand-gray-warm text-sm max-w-xl mx-auto">
              Manchmal ist eine Immobilienentscheidung mit schwierigen persönlichen Umständen verbunden. Gerade dann braucht man einen neutralen, erfahrenen Ansprechpartner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚖️', title: 'Erbschaft', desc: 'Du hast eine Immobilie geerbt und weißt nicht, was jetzt zu tun ist? Wir begleiten dich diskret und einfühlsam durch alle Optionen.', href: '/erbschaft' },
              { icon: '🔨', title: 'Zwangsversteigerung', desc: 'Eine drohende Zwangsversteigerung lässt sich oft noch abwenden. Je früher Sie handeln, desto mehr Handlungsspielraum bleibt.', href: '/zwangsversteigerungen' },
              { icon: '💔', title: 'Scheidung', desc: 'Bei einer Trennung mit gemeinsamer Immobilie brauchen Sie einen neutralen Partner. Wir sind für beide Seiten ansprechbar.', href: '/scheidung' },
            ].map(item => (
              <a
                key={item.title}
                href={item.href}
                className="bg-white rounded-2xl p-6 border border-brand-gray-border shadow-soft hover:shadow-medium transition-all group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit mb-2 group-hover:text-brand-green transition-colors">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-4 text-brand-green text-sm font-semibold">Mehr erfahren →</div>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/verkaufen" variant="primary" size="md">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      <ContactForm
        variant="makler"
        title="Jetzt kostenloses Beratungsgespräch buchen."
        subtitle="Wir melden uns innerhalb von 24 Stunden — telefonisch oder per WhatsApp."
      />

      <Footer variant="makler" />
    </main>
  )
}
