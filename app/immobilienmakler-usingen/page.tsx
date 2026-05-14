/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TrustBadges from '@/components/TrustBadges'
import BenefitCards from '@/components/BenefitCards'
import Testimonials from '@/components/Testimonials'
import ProcessSteps from '@/components/ProcessSteps'
import FAQ from '@/components/FAQ'
import { sharedFaqItems } from '@/lib/faq-items'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import AnimateIn from '@/components/AnimateIn'
import NearbyStaedte from '@/components/NearbyStaedte'
import CityJsonLd from '@/components/CityJsonLd'
import TippgeberSection from '@/components/TippgeberSection'

export const metadata: Metadata = {
  title: 'Immobilienmakler Usingen – Immobilie verkaufen | immovativInvest',
  description: 'Immobilienmakler in Usingen & Hochtaunuskreis. Professioneller Immobilienverkauf mit marktgerechter Bewertung, persönlicher Betreuung & nur 6 Wochen Vertragslaufzeit. Kostenlose Erstberatung!',
  keywords: 'Immobilienmakler Usingen, Immobilien Usingen, Haus verkaufen Usingen, Wohnung verkaufen Usingen, Hochtaunuskreis Immobilien, Immobilienbewertung Usingen',
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienmakler-usingen' },
  openGraph: {
    title: 'Immobilienmakler Usingen – immovativInvest',
    description: 'Ihre Immobilie in Usingen professionell vermarkten. Kostenlose Bewertung, nur 6 Wochen Vertragslaufzeit, 4,9★ Bewertung.',
    type: 'website',
    url: 'https://www.immovativ-invest.de/immobilienmakler-usingen',
  },
}

const benefits = [
  {
    icon: '📍',
    title: 'Lokale Marktkenntnis Usingen',
    description: 'Wir kennen den Immobilienmarkt im Hochtaunuskreis genau – Preise, Nachfrage und Besonderheiten in Usingen und Umgebung.',
  },
  {
    icon: '📊',
    title: 'Marktgerechte Bewertung',
    description: 'Fundierte Wertermittlung auf Basis aktueller Marktdaten aus Usingen und dem gesamten Taunus-Raum.',
  },
  {
    icon: '📣',
    title: 'Professionelle Vermarktung',
    description: 'Hochwertige Fotos, ansprechende Exposés und zielgerichtete Schaltung auf allen relevanten Portalen.',
  },
  {
    icon: '⏱️',
    title: 'Nur 6 Wochen Vertragslaufzeit',
    description: 'Keine langen Bindungen – wir überzeugen durch Leistung, nicht durch Vertragsdauer.',
  },
  {
    icon: '📂',
    title: 'Wir beschaffen alle Unterlagen',
    description: 'Grundbuchauszug, Energieausweis, Baupläne – wir kümmern uns um alle nötigen Dokumente.',
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
    description: 'In einem persönlichen Gespräch lernen wir deine Immobilie in Usingen und deine Ziele kennen.',
  },
  {
    number: 2,
    icon: '📋',
    title: 'Immobilienbewertung',
    description: 'Wir erstellen eine fundierte Marktpreisanalyse für Usingen und legen gemeinsam den optimalen Verkaufspreis fest.',
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

const stadtteilPreise = [
  { name: 'Kernstadt', preis: '3.500–5.000 €/m²', beschreibung: 'Historische Altstadt, gute Infrastruktur' },
  { name: 'Merzhausen', preis: '3.000–4.500 €/m²', beschreibung: 'Ruhige Ortsrandlage, Neubaugebiete' },
  { name: 'Eschbach', preis: '3.000–4.500 €/m²', beschreibung: 'Naturverbunden, Taunusnähe' },
  { name: 'Wilhelmsdorf', preis: '2.800–4.000 €/m²', beschreibung: 'Dörflicher Charakter, günstige Lagen' },
]

const niclasText = 'Usingen bietet echte Taunus-Lebensqualität zu Preisen, die in Frankfurt oder Bad Homburg längst nicht mehr realisierbar sind. Für Verkäufer ist das ein starkes Argument – ich spreche genau die Käufer an, die diesen Vorteil erkennen und bereit sind, einen fairen Preis zu zahlen.'

const navItems = [
  { label: 'Immobilienmakler', href: '/' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

export default function ImmobilienmaklerUsingenPage() {
  return (
    <main className="min-h-screen bg-white">
      <CityJsonLd cityName="Usingen" slug="usingen" />
      <Header
        ctaLabel="Kostenlose Bewertung"
        ctaHref="#kontakt"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-green-50 to-brand-cream pt-16 pb-20 md:pt-24 md:pb-32 px-4 md:px-8">
        <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-brand-green opacity-8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
            <div>
              {/* Breadcrumb SEO */}
              <div className="flex items-center gap-2 text-sm text-brand-gray-warm mb-4">
                <a href="/" className="hover:text-brand-green transition-colors">Start</a>
                <span>›</span>
                <a href="/" className="hover:text-brand-green transition-colors">Immobilienmakler</a>
                <span>›</span>
                <span className="text-brand-anthrazit font-medium">Usingen</span>
              </div>

              {/* Social Proof */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="flex -space-x-2.5">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                  ].map((src, i) => (
                    <Image key={i} src={src} alt="Kunde" className="w-9 h-9 rounded-full border-2 border-white object-cover shrink-0" width={36} height={36} />
                  ))}
                </div>
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

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-anthrazit leading-tight mb-6">
                Immobilienmakler
                <span className="text-brand-green"> Usingen.</span>
              </h1>

              <p className="text-brand-gray-warm text-lg leading-relaxed mb-8">
                Dein Immobilienexperte für Usingen und den Hochtaunuskreis. Wir vermarkten deine Immobilie professionell und erzielen den bestmöglichen Preis – mit persönlicher Betreuung von Anfang bis Ende.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  'Lokale Expertise im Hochtaunuskreis',
                  'Nur 6 Wochen Vertragslaufzeit',
                  'Kostenlose & unverbindliche Erstberatung',
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
            </div>
            </AnimateIn>

            {/* Feature panel */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-large border border-brand-gray-border">
              <div className="relative">
                <Image src="/hero-niclas-2.png" alt="Niclas van der Straeten – Immobilienmakler Usingen" className="w-full h-64 object-cover" width={800} height={256} style={{ objectPosition: 'center 15%' }} priority />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-anthrazit/80 to-transparent px-5 py-4 flex justify-end">
                  <div className="text-right">
                    <div className="text-white text-sm font-semibold">Niclas van der Straeten</div>
                    <div className="text-gray-300 text-xs">Dein Ansprechpartner in Usingen</div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-xl font-bold text-brand-anthrazit mb-5">Was du bekommst:</h2>
                <ul className="space-y-4">
                  {[
                    { icon: '📸', title: 'Professionelle Fotos', desc: 'Hochwertige Immobilienfotografie inklusive' },
                    { icon: '🌐', title: 'Portal-Schaltungen', desc: 'Präsenz auf ImmoScout24, Immowelt & Co.' },
                    { icon: '📱', title: 'Social Media Vermarktung', desc: 'Gezielte Reichweite auf Instagram & Facebook' },
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

      {/* Niclas über den Markt */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateIn direction="up">
          <div className="bg-brand-anthrazit rounded-2xl p-8 md:p-10">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-wider mb-3">Niclas über den Markt</p>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4">„Usingen ist der Markt für Käufer, die Platz vor Prestige stellen. Diese Käufer sind verlässlich, entscheidungsfreudig und oft schneller beim Notar als Stadtmarkt-Käufer."</p>
            <p className="text-gray-400 text-sm leading-relaxed">Einfamilienhäuser mit großen Grundstücken und ältere Bestandsimmobilien mit Modernisierungspotenzial sind die stärksten Produktkategorien in Usingen. Die Nähe zur A5 macht den Ort für Fernpendler interessant.</p>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-10 px-4 md:px-8 bg-brand-gray-light border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <TrustBadges variant="row" />
        </div>
      </section>

      {/* Lokaler Markt Usingen */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="up">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Immobilienmarkt Usingen
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-6 leading-tight">
                Usingen – attraktiver<br />
                <span className="text-brand-green">Wohnstandort im Taunus.</span>
              </h2>

              <p className="text-brand-gray-warm leading-relaxed mb-5">
                Usingen liegt im Hochtaunuskreis und verbindet Taunusnatur mit kurzen Wegen in die Metropolregion Frankfurt. Die Stadt gilt als familienfreundlich, ruhig und dennoch gut angebunden – Eigenschaften, die den Immobilienmarkt hier nachhaltig stabil halten.
              </p>
              <p className="text-brand-gray-warm leading-relaxed mb-8">
                Als lokaler Immobilienmakler kennen wir die typische Käufernachfrage, die Preisunterschiede zwischen den Stadtteilen und die aktuellen Markttrends – und nutzen dieses Wissen gezielt für deinen Verkaufserfolg.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Ø Hauspreis', value: '580.000 €', sub: 'Einfamilienhaus Usingen' },
                  { label: 'Ø m²-Preis', value: '3.800 €', sub: 'Eigentumswohnung' },
                  { label: 'Entfernung Frankfurt', value: '35 km', sub: 'A5 / B275' },
                  { label: 'Einwohner', value: '~15.000', sub: 'Stadt Usingen' },
                ].map(stat => (
                  <div key={stat.label} className="bg-brand-gray-light rounded-2xl p-4 border border-brand-gray-border">
                    <div className="text-xl font-bold text-brand-green mb-0.5">{stat.value}</div>
                    <div className="text-xs font-semibold text-brand-anthrazit">{stat.label}</div>
                    <div className="text-xs text-brand-gray-warm">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            </AnimateIn>

            <div className="relative">
              <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" alt="Immobilien Usingen Hochtaunuskreis" className="w-full h-auto rounded-3xl shadow-large object-cover" width={800} height={600} />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-medium border border-brand-gray-border px-5 py-4">
                <div className="text-2xl font-bold text-brand-green">+18%</div>
                <div className="text-xs text-brand-gray-warm">Ø Wertsteigerung<br />der letzten 10 Jahre</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stadtteile & Preise */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <AnimateIn direction="up">
          <div className="text-left md:text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-anthrazit mb-3">
              Immobilienpreise nach <span className="text-brand-green">Stadtteil in Usingen.</span>
            </h2>
            <p className="text-brand-gray-warm max-w-2xl mx-auto">
              Je nach Lage variieren die Preise erheblich – wir kennen jede Mikrolage und erzielen für dich den optimalen Preis.
            </p>
          </div>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stadtteilPreise.map(st => (
              <div key={st.name} className="bg-white rounded-2xl p-5 border border-brand-gray-border shadow-soft">
                <div className="text-sm font-semibold text-brand-anthrazit mb-1">{st.name}</div>
                <div className="text-xl font-bold text-brand-green mb-1">{st.preis}</div>
                <div className="text-xs text-brand-gray-warm">{st.beschreibung}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vorteile" className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <AnimateIn direction="up">
          <div className="text-left md:text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-4">
              <span className="text-brand-green">Deine Vorteile</span> mit immovativ<span className="font-black">Invest</span> in Usingen.
            </h2>
            <p className="text-brand-gray-warm text-lg max-w-2xl mx-auto">
              Lokale Expertise kombiniert mit professioneller Vermarktung – für den bestmöglichen Verkaufspreis deiner Immobilie in Usingen.
            </p>
          </div>
          </AnimateIn>
          <BenefitCards benefits={benefits} layout="grid" columns={3} />
        </div>
      </section>

      {/* Prozess */}
      <ProcessSteps
        steps={processSteps}
        title="In 4 Schritten zum Verkauf in Usingen"
        subtitle="Unkompliziert, transparent und vollständig in deinem eigenen Tempo."
      />

      {/* Stats */}
      <section className="section-padding bg-brand-gray-light">
        <div className="container-max">
          <TrustBadges variant="stats" />
        </div>
      </section>

      {/* Niclas-Tipp */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="container-max">
          <div className="bg-brand-gray-light border-l-4 border-brand-green rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-5">
              <Image src="/hero-niclas-2.png" alt="Niclas van der Straeten" className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-white shadow-sm" width={56} height={56} style={{ objectPosition: 'center 15%' }} />
              <div>
                <p className="text-brand-anthrazit text-lg leading-relaxed italic mb-3">"{niclasText}"</p>
                <div className="text-sm font-semibold text-brand-anthrazit">Niclas van der Straeten</div>
                <div className="text-xs text-brand-gray-warm">Dein Immobilienmakler in Usingen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Persönlich sprechen */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-anthrazit mb-6 leading-tight">
                Du möchtest deine Immobilie<br />in Usingen verkaufen?
              </h2>
              <p className="text-brand-gray-warm leading-relaxed mb-4 text-lg">
                Sprich jetzt direkt mit Niclas – kostenlos, unverbindlich und auf Augenhöhe.
              </p>
              <p className="text-brand-gray-warm leading-relaxed mb-10">
                Erreichbar von <strong className="text-brand-anthrazit">Montag–Sonntag zwischen 08:00–20:00 Uhr</strong>.
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

            <div className="relative">
              <Image src="/niclas-hochhaus.png" alt="Niclas van der Straeten – Immobilienmakler Usingen" className="w-full h-[480px] object-cover rounded-3xl shadow-large" width={800} height={480} style={{ objectPosition: 'center 20%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="bewertungen">
        <Testimonials title="Eigentümer aus der Region, die uns vertrauen" />
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Deine Immobilie in Usingen. Dein Erfolg.
          </h2>
          <p className="text-green-100 mb-6">
            Kostenlose Erstberatung und Bewertung – ganz ohne Verpflichtung.
          </p>
          <CTAButton href="/verkaufen" variant="white" size="lg">
            Immobilienbewertung starten →
          </CTAButton>
        </div>
      </section>

      <TippgeberSection />

      {/* FAQ */}
      <section id="faq">
        <FAQ items={faqItems} title="Häufige Fragen – Immobilienmakler Usingen." />
      </section>

      {/* Contact Form */}
      <ContactForm
        variant="makler"
        title="Kostenlose Erstberatung in Usingen anfordern."
        subtitle="Unverbindlich, diskret und schnell. Wir melden uns innerhalb von 24 Stunden."
      />

      {/* Sticky mobile CTA */}
      <div className="sticky-cta md:hidden">
        <CTAButton href="#kontakt" fullWidth size="lg">
          Kostenlose Erstberatung →
        </CTAButton>
      </div>

      <NearbyStaedte currentSlug="usingen" />

      <Footer variant="makler" />
    </main>
  )
}
