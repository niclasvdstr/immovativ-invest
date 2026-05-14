/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Zwangsversteigerung Frankfurt – Beratung für Betroffene & Käufer | immovativInvest',
  description: 'Zwangsversteigerung in Frankfurt & Rhein-Main – als Betroffener oder Kaufinteressent: Wir begleiten Sie kompetent, diskret und mit echtem Marktüberblick.',
  alternates: { canonical: 'https://www.immovativ-invest.de/zwangsversteigerungen' },
  openGraph: {
    title: 'Zwangsversteigerung – Professionelle Begleitung | immovativInvest',
    description: 'Zwangsversteigerung als Betroffener oder Käufer? Wir begleiten Sie kompetent und diskret durch den gesamten Prozess.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/zwangsversteigerungen',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

export default function ZwangsversteigerungenPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Zwangsversteigerungen', item: 'https://www.immovativ-invest.de/zwangsversteigerungen' },
            ],
          }),
        }}
      />
      <Header ctaLabel="Kostenlose Beratung" ctaHref="#kontakt" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li><a href="/service" className="hover:text-brand-green transition-colors">Leistungen</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">Zwangsversteigerungen</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-4xl mx-auto relative text-left md:text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            🔨 Zwangsversteigerungen
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-brand-anthrazit">Zwangsversteigerung Frankfurt.</span><br />
            <span className="text-brand-green">Wir kennen beide Seiten.</span>
          </h1>
          <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-8">
            Ob du selbst betroffen bist oder gezielt nach einer Kaufgelegenheit suchst — wir begleiten dich mit Erfahrung, Diskretion und klarem Überblick durch den gesamten Prozess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
            <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
              Vertraulich beraten lassen →
            </Link>
            <CTAButton href="/verkaufen" variant="outline" size="md">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Bild + Intro */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">
                Schnelles Handeln ist entscheidend
              </h2>
              <div className="space-y-4 text-brand-gray-warm leading-relaxed text-sm">
                <p className="font-medium text-brand-anthrazit">
                  Eine Zwangsversteigerung ist ein gerichtliches Verfahren, bei dem eine Immobilie auf Antrag eines Gläubigers öffentlich versteigert wird, um ausstehende Schulden zu begleichen. In Frankfurt und dem Rhein-Main-Gebiet finden regelmäßig Versteigerungstermine am Amtsgericht statt. Betroffene sollten frühzeitig handeln — ein <a href="/" className="text-brand-green hover:underline">Immobilienverkauf vor dem Versteigerungstermin</a> erzielt fast immer höhere Erlöse.
                </p>
                <p>
                  Zwangsversteigerungen sind keine gewöhnlichen Immobilientransaktionen. Ob auf der Seite der Betroffenen oder als Käufer — der Prozess hat klare Spielregeln, enge Fristen und erhebliche finanzielle Konsequenzen für alle Beteiligten.
                </p>
                <p>
                  Wer als Betroffener früh handelt, hat oft noch die Möglichkeit, die Immobilie im Vorfeld zu verkaufen — mit deutlich besseren Erlösen als bei der Versteigerung. Wer als Käufer ohne Vorbereitung bietet, riskiert teure Überraschungen nach dem Zuschlag.
                </p>
                <p>
                  Wir kennen beide Seiten aus der Praxis und begleiten dich — diskret, schnell und mit echtem Marktüberblick.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: '⚡', title: 'Schnell', desc: 'Jede Woche zählt' },
                  { icon: '🔒', title: 'Diskret', desc: 'Absolut vertraulich' },
                  { icon: '🤝', title: 'Erfahren', desc: 'Marktkenntnis & Netzwerk' },
                  { icon: '💬', title: 'Persönlich', desc: 'Direkter Ansprechpartner' },
                ].map(item => (
                  <div key={item.title} className="bg-brand-cream rounded-2xl p-4 border border-brand-gray-border">
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="font-bold text-brand-anthrazit text-sm">{item.title}</div>
                    <div className="text-xs text-brand-gray-warm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden h-[460px]">
              <Image
                src="/mazlum-hochhaus.png"
                alt="Immobilienmakler bei Zwangsversteigerung"
                className="w-full h-full object-cover"
                width={800}
                height={460}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Zwei Seiten */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-brand-gray-border">
              <div className="text-4xl mb-4">🏠</div>
              <h2 className="text-2xl font-bold text-brand-anthrazit mb-4">Du bist betroffen?</h2>
              <p className="text-brand-gray-warm leading-relaxed mb-5 text-sm">
                Eine drohende Zwangsversteigerung ist eine der belastendsten Situationen, die es gibt. Dabei gibt es in vielen Fällen noch Handlungsspielraum — wenn man früh genug handelt. Ein Verkauf im Vorfeld ist fast immer wirtschaftlich besser als das Versteigerungsverfahren.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Schnelle, diskrete Marktbewertung',
                  'Vertraulicher Verkauf vor der Versteigerung',
                  'Kommunikation mit Gläubigern auf Wunsch',
                  'Zeitgewinn durch professionelles Vorgehen',
                  'Begleitung durch alle Schritte bis zum Abschluss',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-anthrazit font-medium">
                    <span className="text-brand-green font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#kontakt" className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-6 py-3 text-sm hover:bg-brand-green-dark transition-colors">
                Jetzt vertraulich beraten →
              </Link>
            </div>

            <div className="bg-brand-anthrazit rounded-3xl p-8 text-white">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4">Du suchst eine Gelegenheit?</h2>
              <p className="text-gray-300 leading-relaxed mb-5 text-sm">
                Zwangsversteigerungen bieten erfahrenen Käufern oft attraktive Einstiegspreise — aber auch versteckte Risiken. Wer ohne Vorbereitung bietet, kann teuer bezahlen. Wir haben den Marktüberblick und helfen dir, Chancen zu erkennen und Risiken realistisch einzuschätzen.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Zugang zu aktuellen Versteigerungsterminen',
                  'Realistische Einschätzung des Marktwerts',
                  'Risikoanalyse vor dem Gebot',
                  'Begleitung beim Bietverfahren',
                  'Nachbetreuung nach dem Zuschlag',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-200 font-medium">
                    <span className="text-brand-champagne font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton href="/verkaufen" variant="secondary" size="sm">
                Immobilienbewertung starten →
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Tipps für Betroffene */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              💡 Tipps für Betroffene
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was tun, wenn eine Zwangsversteigerung droht?</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
              Je früher du handelst, desto mehr Optionen hast du. Diese Schritte helfen dir, die Situation in den Griff zu bekommen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📞',
                title: 'Sofort das Gespräch suchen',
                desc: 'Viele Menschen hoffen, dass sich das Problem von selbst löst. Das tut es nicht. Je früher du mit Gläubigern, der Bank oder einem Berater sprichst, desto größer ist dein Handlungsspielraum. Schweigen ist in dieser Situation die schlechteste Strategie.',
              },
              {
                icon: '⏰',
                title: 'Fristen kennen',
                desc: 'Zwischen dem Antrag des Gläubigers und dem tatsächlichen Versteigerungstermin liegen oft Monate. Diese Zeit ist wertvoll — sie gibt dir die Möglichkeit, einen Verkauf zu organisieren und bessere Konditionen zu erzielen.',
              },
              {
                icon: '💰',
                title: 'Verkaufserlös vs. Versteigerungserlös',
                desc: 'Bei einer Zwangsversteigerung wird die Immobilie häufig für 60–80 % des tatsächlichen Werts verkauft. Ein regulärer Verkauf im Vorfeld erzielt in der Regel einen deutlich höheren Erlös — der Unterschied kann entscheiden, ob am Ende noch Schulden übrig bleiben.',
              },
              {
                icon: '🤝',
                title: 'Mit Gläubigern verhandeln',
                desc: 'Banken und Gläubiger sind oft bereit, einem Verkauf zuzustimmen, wenn sie erkennen, dass sie dabei mehr bekommen als bei einer Versteigerung. Wir können bei dieser Kommunikation unterstützen.',
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

      {/* CTA Banner */}
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Was ist deine Immobilie aktuell wert?</h2>
            <p className="text-white/70 text-sm">Kostenlose Wertermittlung — diskret, schnell und unverbindlich.</p>
          </div>
          <Link href="/verkaufen" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Immobilienbewertung starten →
          </Link>
        </div>
      </section>

      {/* Tipps für Käufer */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              💡 Tipps für Käufer
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was Bieter wissen müssen</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
              Zwangsversteigerungen sind keine normalen Kaufprozesse. Wer sich nicht vorbereitet, riskiert böse Überraschungen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Immobilie vor dem Termin prüfen',
                desc: 'Versuche immer, die Immobilie vorab zu besichtigen. Was du nicht sehen kannst, kann teuer werden. Mängel, die du erst nach dem Zuschlag entdeckst, gehen vollständig zu deinen Lasten — es gibt kein Gewährleistungsrecht.',
              },
              {
                icon: '📋',
                title: 'Gutachten des Gerichts lesen',
                desc: 'Das Amtsgericht beauftragt ein Verkehrswertgutachten — öffentlich einsehbar und mit wichtigen Informationen zum Zustand der Immobilie. Lies es sorgfältig. Es ist jedoch kein Ersatz für eine eigene Besichtigung.',
              },
              {
                icon: '💳',
                title: 'Sicherheitsleistung vorbereiten',
                desc: 'Beim Biettermin musst du in der Regel 10 % des Verkehrswerts als Sicherheitsleistung vorweisen — bar oder per Bankbürgschaft. Kartenzahlung ist nicht möglich. Bereite das rechtzeitig vor.',
              },
              {
                icon: '⚖️',
                title: 'Rechtliche Besonderheiten kennen',
                desc: 'Es gibt keine Rückgabe und keine Rücktrittsrechte. Eingetragene Lasten im Grundbuch — wie Wohnrechte oder Grundschulden — können auf den Käufer übergehen. Prüfe das Grundbuch vor dem Termin.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-brand-gray-border">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit mb-2">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm
        variant="makler"
        title="Jetzt vertraulich beraten lassen."
        subtitle="Kostenlos, diskret und ohne Verpflichtung — wir melden uns innerhalb von 24 Stunden."
      />

      {/* Blog-Ratgeber */}
      <section className="py-16 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit">Passende Ratgeber zum Thema</h2>
            <p className="text-brand-gray-warm mt-2 text-sm">Was du bei Zwangsversteigerungen wissen musst — als Betroffener und als Käufer</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              { slug: 'haus-verkaufen-trotz-kredit', badge: 'Spezialfall', badgeColor: 'bg-purple-600 text-white', category: 'Spezialfälle', title: 'Haus verkaufen trotz laufendem Kredit – so funktioniert es', readTime: '6 Min.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop' },
              { slug: 'erbengemeinschaft-immobilie-verkaufen', badge: 'Spezialfall', badgeColor: 'bg-purple-600 text-white', category: 'Spezialfälle', title: 'Erbengemeinschaft: Wie verkaufst du ein geerbtes Haus, wenn mehrere Erben beteiligt sind?', readTime: '9 Min.', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop' },
              { slug: 'kosten-immobilienverkauf-hessen', badge: 'Kosten', badgeColor: 'bg-blue-500 text-white', category: 'Recht & Steuern', title: 'Welche Kosten entstehen beim Immobilienverkauf in Hessen? Der vollständige Überblick', readTime: '7 Min.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop' },
            ] as const).map(article => (
              <a key={article.slug} href={`/blog/${article.slug}`} className="group bg-white border border-brand-gray-border rounded-2xl overflow-hidden hover:shadow-medium hover:border-brand-green/20 transition-all duration-300 flex flex-col">
                <div className="relative h-44 overflow-hidden">
                  <Image src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fill />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.badgeColor}`}>{article.badge}</span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-brand-anthrazit">{article.category}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-brand-anthrazit text-sm leading-snug mb-auto group-hover:text-brand-green transition-colors">{article.title}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-gray-border">
                    <span className="text-xs text-brand-green font-semibold">{article.category}</span>
                    <span className="text-xs text-brand-gray-warm bg-brand-gray-light px-2.5 py-1 rounded-full">{article.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
