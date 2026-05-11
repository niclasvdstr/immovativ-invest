/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Immobilien aus dem Erbfall – diskrete Begleitung | immovativInvest',
  description: 'Sie haben eine Immobilie geerbt? Wir begleiten Sie diskret, kompetent und einfühlsam – von der Bewertung bis zum Verkauf oder der Verwaltung.',
  alternates: { canonical: 'https://www.immovativ-invest.de/erbschaft' },
  openGraph: {
    title: 'Erbschaftsimmobilie verkaufen – diskret & kompetent | immovativInvest',
    description: 'Geerbte Immobilie verkaufen? Wir begleiten Sie einfühlsam durch Nachlass & Verkauf – von der Bewertung bis zum Abschluss.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/erbschaft',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

export default function ErbschaftPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Erbschaft', item: 'https://www.immovativ-invest.de/erbschaft' },
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
            <li className="text-brand-anthrazit font-medium">Erbschaft</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            ⚖️ Erbschaft
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
            Eine geerbte Immobilie.<br />
            <span className="text-brand-green">Wir begleiten dich einfühlsam.</span>
          </h1>
          <p className="text-brand-gray-warm text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Trauer und bürokratische Entscheidungen gleichzeitig — das überfordert viele Menschen. Wir nehmen dir die Immobilienfrage ab: diskret, erfahren und ohne Druck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-green-dark transition-colors">
              Kostenlose Beratung anfragen →
            </Link>
            <CTAButton href="/verkaufen" variant="outline" size="md">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Bild + Kontext */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden h-[460px]">
              <Image
                src="/team-photo.png"
                alt="Diskreter Ansprechpartner bei Erbschaft"
                className="w-full h-full object-cover"
                width={800}
                height={460}
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">
                Was eine Erbschaft wirklich bedeutet
              </h2>
              <div className="space-y-4 text-brand-gray-warm leading-relaxed text-sm">
                <p>
                  Eine geerbte Immobilie ist selten nur eine Immobilie. Sie ist oft das Elternhaus, in dem man aufgewachsen ist. Ein Ort mit Geschichte. Und gleichzeitig eine Frage, die beantwortet werden muss — oft unter Zeitdruck und inmitten von Trauer.
                </p>
                <p>
                  Hinzu kommen rechtliche Fristen, steuerliche Fragen, möglicherweise mehrere Erben mit unterschiedlichen Vorstellungen und eine Immobilie, die vielleicht seit Jahren nicht mehr modernisiert wurde.
                </p>
                <p>
                  Wir sind dafür da, dir genau in dieser Situation den Kopf freizuhalten — so schnell oder so langsam, wie du es brauchst.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { icon: '📊', title: 'Marktwertermittlung', desc: 'Fair und marktgerecht — als Grundlage für alle Entscheidungen.' },
                  { icon: '👥', title: 'Erbengemeinschaften', desc: 'Mehrere Erben, eine Immobilie — wir helfen, eine gemeinsame Lösung zu finden.' },
                  { icon: '⚡', title: 'Klare Struktur', desc: 'Je früher Klarheit besteht, desto weniger Belastung.' },
                  { icon: '🔒', title: 'Absolute Diskretion', desc: 'Deine Situation bleibt absolut vertraulich.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div>
                      <span className="font-bold text-brand-anthrazit text-sm">{item.title} — </span>
                      <span className="text-brand-gray-warm text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              💡 Unsere Tipps
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was Erben wissen sollten</h2>
            <p className="text-brand-gray-warm text-sm max-w-2xl mx-auto">
              Diese Hinweise helfen dir, die häufigsten Fehler zu vermeiden und die richtigen Entscheidungen im richtigen Moment zu treffen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '⏰',
                title: 'Fristen kennen und beachten',
                desc: 'Nach dem Erbfall hast du in Deutschland sechs Wochen Zeit, die Erbschaft auszuschlagen — bei Auslandserbschaften sogar sechs Monate. Wer eine Immobilie mit hohen Schulden erbt, sollte diese Frist kennen und nicht verstreichen lassen.',
              },
              {
                icon: '📋',
                title: 'Erbschein beantragen',
                desc: 'Um als Erbe gegenüber Behörden und Banken handlungsfähig zu sein, benötigst du in der Regel einen Erbschein. Diesen beantragst du beim zuständigen Nachlassgericht. Der Prozess dauert je nach Auslastung Wochen bis Monate — früh anfangen lohnt sich.',
              },
              {
                icon: '💸',
                title: 'Erbschaftsteuer prüfen',
                desc: 'Kinder erben bis zu 400.000 € steuerfrei pro Elternteil. Wurde die Immobilie vom Erblasser selbst bewohnt und wird sie vom Erben mindestens 10 Jahre selbst genutzt, kann die Steuer komplett entfallen. Eine steuerliche Erstberatung lohnt sich immer.',
              },
              {
                icon: '🏠',
                title: 'Zustand der Immobilie erfassen',
                desc: 'Bevor du Entscheidungen triffst, solltest du wissen, in welchem Zustand die Immobilie ist. Gibt es Mängel, einen laufenden Mietvertrag, ein eingetragenes Wohnrecht oder Hypotheken im Grundbuch? All das beeinflusst den Wert und die Optionen.',
              },
              {
                icon: '👥',
                title: 'Bei Erbengemeinschaft: früh kommunizieren',
                desc: 'Wenn mehrere Personen erben, braucht es Einigkeit für alle wesentlichen Entscheidungen. Wer früh das Gespräch sucht und offen über Vorstellungen spricht, verhindert Blockaden, die im schlimmsten Fall zu einem Teilungsversteigerungsverfahren führen.',
              },
              {
                icon: '🔍',
                title: 'Marktwert realistisch einschätzen lassen',
                desc: 'Sentimentale Werte und Marktwerte sind selten identisch. Lass die Immobilie unabhängig bewerten, bevor du Entscheidungen triffst — und bevor du Zahlen in der Erbengemeinschaft nennst. Eine falsche Ausgangsbasis führt zu unnötigen Konflikten.',
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

      {/* CTA Banner */}
      <section className="bg-brand-anthrazit px-4 md:px-8 py-14">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Weißt du, was die geerbte Immobilie wert ist?</h2>
            <p className="text-gray-400 text-sm">Kostenlose Wertermittlung — unverbindlich, diskret und ohne Verpflichtung.</p>
          </div>
          <CTAButton href="/verkaufen" variant="primary" size="md">
            Immobilienbewertung starten →
          </CTAButton>
        </div>
      </section>

      {/* Optionen */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Deine Optionen mit uns</h2>
            <p className="text-brand-gray-warm text-sm max-w-xl mx-auto">
              Es gibt keine Standardlösung. Wir zeigen dir alle Wege — ehrlich und ohne Druck.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏷️',
                title: 'Verkauf',
                desc: 'Wir vermarkten die Immobilie diskret und professionell — zum bestmöglichen Preis, im Tempo, das zu deiner Situation passt. Kein Druck, kein unnötiger Zeitverlust.',
              },
              {
                icon: '🏠',
                title: 'Vermietung',
                desc: 'Du möchtest die Immobilie behalten, aber nicht selbst einziehen? Wir unterstützen bei der Mietersuche und sorgen für einen reibungslosen Start des Mietverhältnisses.',
              },
              {
                icon: '💬',
                title: 'Erstberatung',
                desc: 'Du weißt noch nicht, was du willst? Das ist völlig normal. Sprich zunächst mit uns — unverbindlich, ohne Verpflichtung und mit einem klaren Überblick danach.',
              },
            ].map(item => (
              <div key={item.title} className="bg-brand-cream rounded-2xl p-6 border border-brand-gray-border text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit text-lg mb-2">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/verkaufen" variant="primary" size="md">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      <ContactForm
        variant="makler"
        title="Wir sind für dich da."
        subtitle="Kostenlose Erstberatung — diskret, einfühlsam und ohne Verpflichtung."
      />

      {/* Blog-Ratgeber */}
      <section className="py-16 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit">Passende Ratgeber zum Thema</h2>
            <p className="text-brand-gray-warm mt-2 text-sm">Alles, was du bei einem Erbfall wissen musst</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              { slug: 'erbengemeinschaft-immobilie-verkaufen', badge: 'Spezialfall', badgeColor: 'bg-purple-600 text-white', category: 'Spezialfälle', title: 'Erbengemeinschaft: Wie verkaufst du ein geerbtes Haus, wenn mehrere Erben beteiligt sind?', readTime: '9 Min.', img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=400&fit=crop' },
              { slug: 'immobilienverkauf-steuerfrei', badge: 'Steuern', badgeColor: 'bg-orange-500 text-white', category: 'Recht & Steuern', title: 'Wann ist der Verkauf einer Immobilie steuerfrei? Die drei Wege', readTime: '6 Min.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop' },
              { slug: 'spekulationsfrist-immobilien', badge: 'Steuern', badgeColor: 'bg-orange-500 text-white', category: 'Recht & Steuern', title: 'Spekulationsfrist bei Immobilien: Alles zur 10-Jahres-Regel', readTime: '7 Min.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop' },
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
