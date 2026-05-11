/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Immobilienfinanzierung – Wir helfen Ihnen | immovativInvest',
  description: 'Durch unser starkes Netzwerk an Finanzierungsberatern und Bankkontakten helfen wir Ihnen, die passende Finanzierung für Ihre Immobilie auf die Beine zu stellen.',
  alternates: { canonical: 'https://www.immovativ-invest.de/finanzierung' },
  openGraph: {
    title: 'Immobilienfinanzierung Frankfurt – Beratung & Vermittlung | immovativInvest',
    description: 'Passende Immobilienfinanzierung in Frankfurt finden – mit unserem Netzwerk aus Beratern und Banken schnell zum Kreditvertrag.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/finanzierung',
    images: [{ url: 'https://www.immovativ-invest.de/og-image.jpg', width: 1200, height: 630, alt: 'immovativInvest – Immobilienmakler Frankfurt' }],
  },
}

export default function FinanzierungPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Finanzierung', item: 'https://www.immovativ-invest.de/finanzierung' },
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
            <li className="text-brand-anthrazit font-medium">Finanzierung</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-20 pb-20 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-4xl mx-auto relative text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-semibold text-brand-anthrazit shadow-soft mb-6">
            💰 Finanzierung
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-anthrazit leading-tight mb-6">
            Die richtige Finanzierung<br />
            <span className="text-brand-green">macht den Unterschied.</span>
          </h1>
          <p className="text-brand-gray-warm text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Ob Erstkauf, Anschlussfinanzierung oder Investition — durch unser starkes Netzwerk begleiten wir dich von der ersten Frage bis zum unterzeichneten Kreditvertrag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/verkaufen" variant="primary" size="md">
              Immobilienbewertung starten →
            </CTAButton>
            <Link href="#kontakt" className="inline-flex items-center justify-center gap-2 bg-white border border-brand-gray-border text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-brand-cream transition-colors">
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Bild + Einleitung */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden h-[420px]">
              <Image
                src="/Niclas Schreibtisch.png"
                alt="Niclas bei der Finanzierungsberatung"
                className="w-full h-full object-cover"
                width={800}
                height={420}
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-anthrazit mb-5">
                Finanzierung ist mehr als ein Kredit
              </h2>
              <div className="space-y-4 text-brand-gray-warm leading-relaxed text-sm">
                <p>
                  Viele Menschen glauben, eine Immobilienfinanzierung sei einfach: Man geht zur Bank, stellt einen Antrag und bekommt ein Angebot. In der Realität ist es deutlich komplexer — die Unterschiede zwischen einem guten und einem schlechten Angebot können über die Laufzeit Zehntausende Euro ausmachen.
                </p>
                <p>
                  Die Zinshöhe ist nur ein Faktor. Genauso wichtig sind Tilgungsrate, Sondertilgungsrechte, Zinsbindungsdauer und ob die monatliche Rate wirklich zu deiner Lebenssituation passt — heute und in zehn Jahren.
                </p>
                <p>
                  Wir helfen dir, genau diese Fragen zu stellen und zu beantworten — bevor du unterschreibst.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: '🤝', title: 'Starkes Netzwerk', desc: 'Direkte Bankkontakte & unabhängige Berater' },
                  { icon: '⚡', title: 'Schnell vermittelt', desc: 'Kein langes Warten auf Rückruf' },
                  { icon: '🎯', title: 'Maßgeschneidert', desc: 'Passend zu deiner Lebenssituation' },
                  { icon: '✅', title: 'Kostenlos', desc: 'Keine Bearbeitungsgebühren für dich' },
                ].map(item => (
                  <div key={item.title} className="bg-brand-cream rounded-2xl p-4 border border-brand-gray-border">
                    <div className="text-xl mb-1">{item.icon}</div>
                    <div className="font-bold text-brand-anthrazit text-sm">{item.title}</div>
                    <div className="text-xs text-brand-gray-warm">{item.desc}</div>
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
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">Was du vor dem Bankgespräch wissen solltest</h2>
            <p className="text-brand-gray-warm max-w-2xl mx-auto text-sm leading-relaxed">
              Diese sechs Punkte machen den Unterschied zwischen einer durchschnittlichen und einer wirklich guten Finanzierung.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: '01',
                title: 'Eigenkapital realistisch einschätzen',
                desc: 'Faustregel: Mindestens 20 % des Kaufpreises sollten als Eigenkapital vorhanden sein — plus Kaufnebenkosten (Grunderwerbsteuer, Notar, Makler). Wer weniger mitbringt, zahlt höhere Zinsen oder bekommt schlicht keine Finanzierung.',
              },
              {
                num: '02',
                title: 'Mehrere Angebote einholen',
                desc: 'Niemals das erste Angebot annehmen. Schon 0,2 % Zinsunterschied können bei einer 400.000 €-Finanzierung über 20 Jahre mehr als 15.000 € ausmachen. Hol mindestens drei Vergleichsangebote ein — wir helfen dabei.',
              },
              {
                num: '03',
                title: 'Tilgungsrate klug wählen',
                desc: 'Viele wählen die minimale Tilgungsrate von 1 %, um monatlich wenig zu zahlen. Das ist ein teurer Fehler: Bei 1 % Tilgung läuft ein Kredit oft 50+ Jahre. Empfehlenswert sind 2–3 % Anfangstilgung.',
              },
              {
                num: '04',
                title: 'Sondertilgungsrechte sichern',
                desc: 'Achte darauf, dass der Vertrag Sondertilgungen erlaubt — idealerweise 5 % der Darlehenssumme pro Jahr ohne Vorfälligkeitsentschädigung. So kannst du bei guter Einkommenslage schneller tilgen.',
              },
              {
                num: '05',
                title: 'Zinsbindung sorgfältig wählen',
                desc: 'In Niedrigzinsphasen lohnen sich lange Zinsbindungen (15–20 Jahre), um sich günstige Konditionen langfristig zu sichern. Bei höheren Zinsen kann eine kürzere Bindung mit späterer Umschuldung besser sein.',
              },
              {
                num: '06',
                title: 'Förderungen nicht vergessen',
                desc: 'KfW-Darlehen, regionale Wohnraumförderprogramme, Baukindergeld oder Energieeffizienz-Boni — viele Förderungen werden nicht beantragt, weil Käufer sie schlicht nicht kennen. Wir behalten den Überblick.',
              },
            ].map(item => (
              <div key={item.num} className="bg-white rounded-2xl p-6 border border-brand-gray-border">
                <div className="text-3xl font-bold text-brand-green mb-3">{item.num}</div>
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
            <h2 className="text-2xl font-bold text-white mb-2">Weißt du, was deine Immobilie wert ist?</h2>
            <p className="text-gray-400 text-sm">Kostenlose Wertermittlung — unverbindlich und innerhalb von 24 Stunden.</p>
          </div>
          <CTAButton href="/verkaufen" variant="primary" size="md">
            Immobilienbewertung starten →
          </CTAButton>
        </div>
      </section>

      {/* Finanzierungsarten */}
      <section className="section-padding bg-white px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">Welche Finanzierungsform passt zu dir?</h2>
            <p className="text-brand-gray-warm text-sm max-w-xl mx-auto">
              Nicht jede Situation erfordert dieselbe Lösung. Wir erklären die häufigsten Modelle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🏠',
                title: 'Annuitätendarlehen',
                desc: 'Der Klassiker. Gleichbleibende monatliche Rate, bestehend aus Zins und Tilgung. Planungssicher, einfach zu verstehen. Für die meisten Käufer die beste Wahl.',
              },
              {
                icon: '🔄',
                title: 'Anschlussfinanzierung',
                desc: 'Läuft deine Zinsbindung aus? Dann ist jetzt der richtige Moment, Konditionen zu vergleichen. Häufig gibt es bei der Hausbank schlechtere Konditionen als am freien Markt.',
              },
              {
                icon: '📈',
                title: 'Kapitalanlage-Finanzierung',
                desc: 'Wer eine Immobilie als Investition kauft, kann Zinsen steuerlich absetzen. Hier lohnt es sich, Finanzierung und Steueroptimierung gemeinsam zu denken.',
              },
            ].map(item => (
              <div key={item.title} className="bg-brand-cream rounded-2xl p-6 border border-brand-gray-border text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-brand-anthrazit text-lg mb-2">{item.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="section-padding bg-brand-cream px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-4">So begleiten wir dich</h2>
            <p className="text-brand-gray-warm text-sm max-w-xl mx-auto">Von der ersten Frage bis zur Unterschrift — wir sind in jedem Schritt an deiner Seite.</p>
          </div>
          <div className="space-y-5">
            {[
              { step: '01', title: 'Erstkontakt & Bedarfsanalyse', desc: 'Du schilderst uns deine Situation: Was möchtest du kaufen? Wie viel Eigenkapital steht zur Verfügung? Wie hoch soll die monatliche Rate sein? Wir stellen die richtigen Fragen — ohne Papierkram.' },
              { step: '02', title: 'Netzwerk-Matching', desc: 'Basierend auf deiner Situation vermitteln wir dich an den passenden Finanzierungsberater aus unserem bewährten Netzwerk. Kein Call-Center, sondern ein persönlicher Ansprechpartner.' },
              { step: '03', title: 'Angebotsvergleich', desc: 'Dein Berater holt mehrere Angebote ein und erklärt dir die Unterschiede verständlich — Zinssätze, Konditionen, Laufzeiten. Du entscheidest informiert.' },
              { step: '04', title: 'Begleitung bis zum Abschluss', desc: 'Wir bleiben im Prozess, klären offene Fragen und stellen sicher, dass nichts übersehen wird — bis deine Finanzierung steht und du beruhigt unterschreiben kannst.' },
            ].map(item => (
              <div key={item.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-soft border border-brand-gray-border">
                <div className="text-3xl font-bold text-brand-green shrink-0 w-10">{item.step}</div>
                <div>
                  <h3 className="font-bold text-brand-anthrazit mb-1">{item.title}</h3>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{item.desc}</p>
                </div>
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
        title="Jetzt Finanzierungsberatung anfragen."
        subtitle="Kostenlos, unverbindlich und diskret – wir melden uns innerhalb von 24 Stunden."
      />

      {/* Blog-Ratgeber */}
      <section className="py-16 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit">Passende Ratgeber zum Thema</h2>
            <p className="text-brand-gray-warm mt-2 text-sm">Was du rund um Finanzierung und Kaufnebenkosten wissen solltest</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {([
              { slug: 'notarkosten-grundbuchkosten-hessen', badge: 'Kosten', badgeColor: 'bg-blue-500 text-white', category: 'Recht & Steuern', title: 'Notarkosten & Grundbuchkosten in Hessen: Was Käufer und Verkäufer zahlen', readTime: '6 Min.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop' },
              { slug: 'kosten-immobilienverkauf-hessen', badge: 'Kosten', badgeColor: 'bg-blue-500 text-white', category: 'Recht & Steuern', title: 'Welche Kosten entstehen beim Immobilienverkauf in Hessen? Der vollständige Überblick', readTime: '7 Min.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop' },
              { slug: 'dauer-notar-kaufpreiszahlung', badge: 'Prozess', badgeColor: 'bg-orange-500 text-white', category: 'Prozess', title: 'Wie lange dauert es vom Notartermin bis zur Kaufpreiszahlung?', readTime: '5 Min.', img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop' },
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
