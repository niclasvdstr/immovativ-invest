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
import NearbyStaedte from '@/components/NearbyStaedte'
import CityJsonLd from '@/components/CityJsonLd'
import TippgeberSection from '@/components/TippgeberSection'

export const metadata: Metadata = {
  title: 'Immobilienmakler Mörfelden-Walldorf | immovativInvest',
  description: 'Ihr Immobilienmakler in Mörfelden-Walldorf. Professioneller Verkauf, fundierte Bewertung und persönliche Beratung in der gut angebundenen Stadt im Herzen der Rhein-Main-Region. Kostenlose Erstberatung.',
  keywords: 'Immobilienmakler Mörfelden-Walldorf, Immobilien Mörfelden-Walldorf, Haus verkaufen Mörfelden, Wohnung verkaufen Walldorf, Immobilienbewertung Mörfelden-Walldorf, Makler Kreis Groß-Gerau',
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienmakler-moerfelden-walldorf' },
  openGraph: {
    title: 'Immobilienmakler Mörfelden-Walldorf | immovativInvest',
    description: 'Professioneller Immobilienverkauf in Mörfelden-Walldorf. Lokale Marktkenntnis, transparente Beratung, maximaler Verkaufspreis.',
    url: 'https://www.immovativ-invest.de/immobilienmakler-moerfelden-walldorf',
    siteName: 'immovativInvest',
    locale: 'de_DE',
    type: 'website',
  },
}

const navItems = [
  { label: 'Immobilienmakler', href: '/immobilienmakler' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

const benefits = [
  {
    title: 'Lokale Marktkenntnis Mörfelden-Walldorf',
    description: 'Wir kennen beide Ortsteile Mörfelden und Walldorf in ihrer Eigenheit – von Wohnlagen über Infrastruktur bis hin zu den Besonderheiten des lokalen Markts im Kreis Groß-Gerau.',
  },
  {
    title: 'Flughafennähe als Standortvorteil',
    description: 'Die unmittelbare Nähe zum Flughafen Frankfurt und die hervorragende Verkehrsanbindung über die A5 sind starke Kaufargumente. Wir setzen diese gezielt in der Vermarktung ein.',
  },
  {
    title: 'Attraktives Preisniveau',
    description: 'Mörfelden-Walldorf bietet ein attraktives Preis-Leistungs-Verhältnis im Vergleich zu Frankfurt – bei gleichermaßen exzellenter Anbindung und Infrastruktur.',
  },
  {
    title: 'Starkes Käufernetzwerk',
    description: 'Unser Netzwerk aus Kaufinteressenten aus Frankfurt, dem Rhein-Main-Gebiet und international orientierten Käufern sorgt für schnelle Abschlüsse.',
  },
  {
    title: 'Professionelle Vermarktung',
    description: 'Hochwertige Fotos, ansprechende Exposés und zielgerichtete Online-Kampagnen stellen sicher, dass deine Immobilie die richtigen Interessenten erreicht.',
  },
  {
    title: 'Faire Provision – gesetzlich geregelt',
    description: 'Käufer und Verkäufer teilen die Provision fair – je 3,57 % inkl. MwSt. Bei Mehrfamilienhäusern übernimmt der Käufer die volle Provision.',
  },
]

const processSteps = [
  {
    number: 1,
    title: 'Kostenlose Bewertung',
    description: 'Wir bewerten deine Immobilie in Mörfelden-Walldorf kostenlos und unverbindlich – basierend auf aktuellen Marktdaten aus dem Kreis Groß-Gerau.',
  },
  {
    number: 2,
    title: 'Vermarktungsstrategie',
    description: 'Professionelle Fotos, zielgruppengerechtes Expose und gezielte Ansprache von Interessenten aus Frankfurt, dem Rhein-Main-Gebiet und internationalen Käufern.',
  },
  {
    number: 3,
    title: 'Besichtigungen & Verhandlung',
    description: 'Wir koordinieren alle Termine, qualifizieren Interessenten und verhandeln den bestmöglichen Preis in deinem Auftrag.',
  },
  {
    number: 4,
    title: 'Notartermin & Übergabe',
    description: 'Von der Kaufvertragsvorbereitung bis zur Schlüsselübergabe – wir begleiten dich durch die gesamte Abwicklung.',
  },
]

const faqItems = sharedFaqItems

export default function ImmobilienmaklerMoerfeldenWalldorf() {
  return (
    <>
      <CityJsonLd cityName="Mörfelden-Walldorf" slug="moerfelden-walldorf" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-brand-green">Start</a>
            <span className="mx-2">/</span>
            <a href="/immobilienmakler" className="hover:text-brand-green">Immobilienmakler</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Mörfelden-Walldorf</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-12 pb-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Immobilienmakler Mörfelden-Walldorf.
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Gut angebundene Stadt im Herzen der Rhein-Main-Region.
            </p>

            {/* Stars + Social Proof */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <span className="text-gray-700 font-medium">4,9 / 5 – über 35 erfolgreiche Verkäufe im Kreis Groß-Gerau</span>
            </div>

            {/* Checklist */}
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold text-lg">✓</span>
                Kostenlose Immobilienbewertung in Mörfelden-Walldorf
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold text-lg">✓</span>
                3,57 % Provision – fair zwischen Käufer & Verkäufer geteilt
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold text-lg">✓</span>
                Persönliche Beratung vor Ort in Mörfelden-Walldorf
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/verkaufen" variant="primary" size="lg">
                Immobilienbewertung starten →
              </CTAButton>
              <CTAButton href="/kontakt" variant="outline" size="lg">
                Beratungsgespräch vereinbaren
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Panel with Niclas Image */}
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Dein Ansprechpartner in Mörfelden-Walldorf
            </h2>
            <p className="text-gray-600 mb-4">
              Mörfelden-Walldorf hat eine Besonderheit, die in keiner anderen Stadt so ausgeprägt ist: die Flughafennähe. Piloten, Flugbegleiter, Lufthansa-Mitarbeiter, Logistiker – ein eigenes Käufer-Ökosystem, das andere Makler nicht erreichen.
            </p>
            <p className="text-gray-600 mb-6">
              Ich kenne beide Ortsteile und ihre Unterschiede: Mörfelden ist ruhiger und grüner, Walldorf gewerblich geprägter. Beide haben ihre eigene Nachfrage, und ich spreche sie jeweils gezielt an.
            </p>
            <CTAButton href="/kontakt" variant="primary" size="md">
              Jetzt Kontakt aufnehmen →
            </CTAButton>
          </div>
          <div className="flex justify-center">
            <Image src="/hero-niclas-2.png" alt="Niclas van der Straeten – Immobilienmakler Mörfelden-Walldorf" className="rounded-2xl shadow-lg max-h-96 object-cover" width={600} height={384} />
          </div>
        </div>
      </section>

      {/* Niclas über den Markt */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-anthrazit rounded-2xl p-8 md:p-10">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-wider mb-3">Niclas über den Markt</p>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4">„In Mörfelden-Walldorf habe ich Objekte an Käufer verkauft, die ich nie auf einem Immobilienportal gefunden hätte – Lufthansa-Personal, das nur unter sich kommuniziert. Das ist mein Netzwerk."</p>
            <p className="text-gray-400 text-sm leading-relaxed">Die Flughafen-Community ist ein einzigartiger Käufermarkt: informiert, liquid, oft mit konkreten Zeitdruck-Kaufentscheidungen. Ruhige Wohnlagen in Mörfelden und gut angebundene Objekte in Walldorf erzielen die stärksten Preise.</p>
          </div>
        </div>
      </section>

      {/* Trust Badges Row */}
      <TrustBadges />

      {/* Local Market Section */}
      <section className="py-14 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Der Immobilienmarkt in Mörfelden-Walldorf
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Aktuelle Kennzahlen für deine Verkaufsentscheidung
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">35.000</div>
              <div className="text-gray-600 text-sm">Einwohner</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">480.000 €</div>
              <div className="text-gray-600 text-sm">Ø Hauspreis</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">3.800 €</div>
              <div className="text-gray-600 text-sm">Ø m²-Preis</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">20 km</div>
              <div className="text-gray-600 text-sm">bis Frankfurt</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wohnlagen in Mörfelden-Walldorf</h3>
              <p className="text-gray-600 mb-3">
                Mörfelden-Walldorf vereint zwei unterschiedliche Ortsteile: Mörfelden mit ruhigen Wohnlagen und viel Grün sowie Walldorf mit guter Infrastruktur und Gewerbepräsenz. Beide bieten attraktive Immobilien für unterschiedliche Käufergruppen.
              </p>
              <p className="text-gray-600">
                Die direkte Nähe zum Flughafen Frankfurt und die A5-Anbindung machen die Stadt besonders interessant für international mobiles Fachpersonal und Investoren.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/moerfelden-markt.jpg" alt="Immobilienmarkt Mörfelden-Walldorf" className="rounded-xl shadow-md max-h-72 object-cover w-full" width={800} height={288} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefit Cards */}
      <BenefitCards benefits={benefits} />

      {/* Process Steps */}
      <ProcessSteps steps={processSteps} />

      {/* Trust Badges Stats */}
      <TrustBadges variant="stats" />

      {/* Personal Contact Section */}
      <section className="py-14 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Direkt erreichbar – für Mörfelden-Walldorf und Umgebung
            </h2>
            <p className="text-gray-600 mb-6">
              Hast du Fragen zum Verkauf deiner Immobilie in Mörfelden-Walldorf? Ich bin persönlich für dich da – per Telefon, WhatsApp oder vor Ort.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+4915129686979"
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-semibold text-gray-900">Telefon</div>
                  <div className="text-brand-green">+49 151 296 869 79</div>
                </div>
              </a>
              <a
                href="https://wa.me/4915129686979"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <div className="text-brand-green">Nachricht schreiben</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/niclas-hochhaus.png" alt="Niclas van der Straeten – Immobilienmakler Mörfelden-Walldorf" className="rounded-2xl shadow-lg max-h-96 object-cover" width={600} height={384} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-8 bg-brand-green">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">deine Immobilie in Mörfelden-Walldorf. Unser Einsatz. Ihr Erfolg.</h2>
          <p className="text-green-100 mb-6">Kostenlose Erstberatung und Bewertung – ganz ohne Verpflichtung.</p>
          <CTAButton href="/verkaufen" variant="secondary" size="lg">Immobilienbewertung starten →</CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <TippgeberSection />

      <FAQ items={faqItems} />

      {/* Contact Form */}
      <ContactForm
        variant="makler"
        title="Kostenlose Erstberatung in Mörfelden-Walldorf anfordern"
        subtitle="Unverbindlich, diskret und schnell. Wir melden uns innerhalb von 24 Stunden."
      />

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg py-3 px-4 flex justify-center md:hidden">
        <CTAButton href="/verkaufen" variant="primary" size="md">
          Immobilienbewertung starten →
        </CTAButton>
      </div>

      <NearbyStaedte currentSlug="moerfelden-walldorf" />
      <Footer variant="makler" />
    </>
  )
}
