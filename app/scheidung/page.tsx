/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Immobilienverkauf bei Scheidung – neutral & diskret | immovativInvest',
  description: 'Eine Trennung ist belastend genug. Wir begleiten Sie beim Immobilienverkauf im Scheidungsfall — neutral, diskret und mit fairer Lösung für beide Seiten.',
  alternates: { canonical: 'https://www.immovativ-invest.de/scheidung' },
  openGraph: {
    title: 'Scheidungsimmobilie verkaufen – diskret & professionell | immovativInvest',
    description: 'Immobilienverkauf bei Scheidung – neutral, fair und diskret. Wir finden eine Lösung, die für beide Seiten funktioniert.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/scheidung',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

export default function ScheidungPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Scheidung', item: 'https://www.immovativ-invest.de/scheidung' },
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
            <li className="text-brand-anthrazit font-medium">Scheidung</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-4xl mx-auto relative text-left md:text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            💔 Scheidung
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
            Immobilien bei Scheidung.<br />
            <span className="text-brand-green">Neutral, fair und diskret.</span>
          </h1>
          <p className="text-brand-gray-warm text-lg md:max-w-2xl md:mx-auto leading-relaxed mb-8">
            Eine Trennung ist emotional belastend genug. Wir übernehmen die Immobilienfrage — neutral gegenüber beiden Parteien und mit dem Ziel einer Lösung, die für alle funktioniert.
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

      {/* Bild + Verständnis */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden h-[460px]">
              <Image
                src="/mazlum-portrait.png"
                alt="Neutraler Ansprechpartner bei Scheidung"
                className="w-full h-full object-cover"
                width={800}
                height={460}
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">
                Die Immobilie ist oft das schwierigste Kapitel
              </h2>
              <div className="space-y-4 text-brand-gray-warm leading-relaxed text-sm">
                <p className="font-medium text-brand-anthrazit">
                  Bei einer Scheidung mit gemeinsamer Immobilie gibt es drei mögliche Wege: gemeinsamer Verkauf, Auskauf einer Partei oder Teilungsversteigerung. Eine <a href="/beratung" className="text-brand-green hover:underline">neutrale Beratung</a> durch einen erfahrenen Immobilienmakler hilft, die sachlich beste Entscheidung zu treffen — unabhängig von der emotionalen Lage.
                </p>
                <p>
                  Bei einer Scheidung ist die gemeinsame Immobilie häufig das komplexeste und emotionalste Thema. Wer bekommt das Haus? Wer muss ausziehen? Wie wird der Wert aufgeteilt? Wer bezahlt weiterhin die Kreditrate?
                </p>
                <p>
                  Wir sind kein Anwalt und ersetzen keine rechtliche Beratung. Aber wir sind ein neutraler, erfahrener Partner, der die Immobilienfrage professionell und ohne Parteinahme löst — und damit Raum schafft für das Wesentliche.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { icon: '⚖️', title: 'Neutrale Bewertung', desc: 'Marktwert objektiv ermittelt — keine Partei bevorzugt.' },
                  { icon: '🤝', title: 'Kommunikation mit beiden Seiten', desc: 'Getrennt oder gemeinsam — wie es am sinnvollsten ist.' },
                  { icon: '⚡', title: 'Schneller Abschluss', desc: 'Wenn gewünscht — für alle Beteiligten das Beste.' },
                  { icon: '🔒', title: 'Maximale Diskretion', desc: 'Dein privates Umfeld muss nichts wissen.' },
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
          <div className="text-left md:text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-4">
              💡 Unsere Tipps
            </div>
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was du in dieser Situation wissen solltest</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-2xl md:mx-auto">
              Diese Hinweise helfen dir, mit einem kühlen Kopf zu entscheiden — auch wenn die Lage emotional belastend ist.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🧠',
                title: 'Emotion und Entscheidung trennen',
                desc: 'Das ist leichter gesagt als getan — aber entscheidend. Finanzielle Entscheidungen sollten nicht von emotionalen Positionen abhängen. Frag dich bei jeder Forderung: Was ist sachlich sinnvoll, was ist emotional motiviert?',
              },
              {
                icon: '⚖️',
                title: 'Rechtliche Beratung frühzeitig',
                desc: 'Ein Fachanwalt für Familienrecht ist bei einer Scheidung mit gemeinsamer Immobilie unerlässlich. Er klärt Zugewinnausgleich, Eigentumsanteile und Verpflichtungen gegenüber der Bank. Rechtliche und immobilienrelevante Beratung sollten parallel laufen.',
              },
              {
                icon: '💳',
                title: 'Wer zahlt den Kredit weiter?',
                desc: 'Solange eine gemeinsame Immobilie existiert, laufen oft gemeinsame Kreditverpflichtungen weiter. Wer auszieht, haftet trotzdem weiter. Klärt frühzeitig, wie die Kosten bis zum Abschluss aufgeteilt werden.',
              },
              {
                icon: '🏠',
                title: 'Bleiben oder verkaufen — sachlich abwägen',
                desc: 'Manchmal ist der Wunsch, im Haus zu bleiben, verständlich — aber finanziell nicht tragbar. Ein Verkauf kann langfristig mehr Stabilität bringen als ein Auskauf, der alle finanziellen Reserven aufbraucht. Rechnet beide Szenarien durch.',
              },
              {
                icon: '👶',
                title: 'Kinder in die Planung einbeziehen',
                desc: 'Wenn Kinder betroffen sind, spielen Schulweg, Freunde und gewohnte Umgebung eine wichtige Rolle. Das ist ein legitimer Faktor bei der Entscheidung — aber Kinder sollten nicht zum Argument in finanziellen Verhandlungen werden.',
              },
              {
                icon: '🔍',
                title: 'Marktwert unabhängig bestimmen lassen',
                desc: 'Jede Partei hat in der Regel eine andere Vorstellung vom Wert der Immobilie. Eine unabhängige Marktbewertung schafft eine neutrale Grundlage und verhindert endlose Diskussionen über den Ausgangspunkt.',
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
      <section className="px-4 md:px-8 py-14" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Was ist die gemeinsame Immobilie wert?</h2>
            <p className="text-white/70 text-sm">Kostenlose Wertermittlung als neutrale Grundlage für beide Parteien.</p>
          </div>
          <Link href="/verkaufen" className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0">
            Immobilienbewertung starten →
          </Link>
        </div>
      </section>

      {/* Optionen */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-left md:text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Mögliche Wege mit uns</h2>
            <p className="text-brand-gray-warm text-sm md:max-w-xl md:mx-auto">
              Es gibt keine Einheitslösung. Wir zeigen dir alle Optionen — und begleiten dich bei dem Weg, den du wählst.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏷️',
                title: 'Gemeinsamer Verkauf',
                desc: 'Beide Parteien einigen sich auf einen Verkauf. Der Erlös wird nach Vereinbarung aufgeteilt. Wir übernehmen die komplette Vermarktung — neutral, professionell und diskret.',
              },
              {
                icon: '🏠',
                title: 'Eine Partei übernimmt',
                desc: 'Eine Seite kauft die andere aus. Wir ermitteln den fairen Marktwert und begleiten bei der Finanzierung des Ausgleichsbetrags — ohne Partei zu ergreifen.',
              },
              {
                icon: '📋',
                title: 'Beratung & Analyse',
                desc: 'Noch keine Einigkeit? Wir analysieren die Situation neutral und zeigen auf, welche Option wirtschaftlich sinnvoll ist. Keine Empfehlung ohne solide Datenbasis.',
              },
            ].map(item => (
              <div key={item.title} className="bg-brand-cream rounded-2xl p-6 border border-brand-gray-border text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit text-lg mb-2">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-left md:text-center">
            <CTAButton href="/verkaufen" variant="primary" size="md">
              Immobilienbewertung starten →
            </CTAButton>
          </div>
        </div>
      </section>

      <ContactForm
        variant="makler"
        title="Vertrauliches Erstgespräch anfragen."
        subtitle="Kostenlos, diskret und ohne Verpflichtung — für beide Parteien offen."
      />

      {/* Blog-Ratgeber */}
      <section className="py-16 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit">Passende Ratgeber zum Thema</h2>
            <p className="text-brand-gray-warm mt-2 text-sm">Was du beim Immobilienverkauf nach einer Trennung wissen musst</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              { slug: 'haus-verkaufen-nach-scheidung', badge: 'Spezialfall', badgeColor: 'bg-purple-600 text-white', category: 'Spezialfälle', title: 'Haus verkaufen nach der Scheidung: Was Eigentümer im Rhein-Main-Gebiet wissen müssen', readTime: '8 Min.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop' },
              { slug: 'haus-verkaufen-trotz-kredit', badge: 'Spezialfall', badgeColor: 'bg-purple-600 text-white', category: 'Spezialfälle', title: 'Haus verkaufen trotz laufendem Kredit – so funktioniert es', readTime: '6 Min.', img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop' },
              { slug: 'steuern-beim-immobilienverkauf', badge: 'Steuern', badgeColor: 'bg-orange-500 text-white', category: 'Recht & Steuern', title: 'Welche Steuern fallen beim Immobilienverkauf an? Der Überblick für Hessen', readTime: '8 Min.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop' },
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
