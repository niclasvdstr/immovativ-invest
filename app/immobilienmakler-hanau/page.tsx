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
  title: 'Immobilienmakler Hanau | immovativInvest',
  description: 'Ihr Immobilienmakler in Hanau. Professioneller Verkauf, fundierte Bewertung und persönliche Beratung in der wachsenden Brüder-Grimm-Stadt im Main-Kinzig-Kreis. Kostenlose Erstberatung.',
  keywords: 'Immobilienmakler Hanau, Immobilien Hanau, Haus verkaufen Hanau, Wohnung verkaufen Hanau, Immobilienbewertung Hanau, Makler Hanau Main-Kinzig-Kreis, Makler Hanau Steinheim',
  alternates: { canonical: 'https://www.immovativ-invest.de/immobilienmakler-hanau' },
  openGraph: {
    title: 'Immobilienmakler Hanau | immovativInvest',
    description: 'Professioneller Immobilienverkauf in Hanau. Lokale Marktkenntnis, transparente Beratung, maximaler Verkaufspreis.',
    url: 'https://www.immovativ-invest.de/immobilienmakler-hanau',
    siteName: 'immovativInvest',
    locale: 'de_DE',
    type: 'website',
  },
}

const navItems = [
  { label: 'Immobilienmakler', href: '/' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

const benefits = [
  {
    title: 'Lokale Marktkenntnis Hanau',
    description: 'Wir kennen die Stadtteile Steinheim, Großauheim, Kesselstadt, Wolfgang und Lamboy genau – und wissen, welche Lagen in Hanau besonders gefragt sind.',
  },
  {
    title: 'Günstiger Einstieg in die Rhein-Main-Region',
    description: 'Hanau bietet einen der attraktivsten Einstiegspreise im Rhein-Main-Gebiet. Wir vermarkten diesen Vorteil gezielt an Kaufinteressenten aus Frankfurt und der Region.',
  },
  {
    title: 'Gute Bahnanbindung als Verkaufsargument',
    description: 'Die direkte Bahnverbindung nach Frankfurt macht Hanau für Pendler besonders interessant. Dieses Alleinstellungsmerkmal nutzen wir aktiv in deiner Vermarktung.',
  },
  {
    title: 'Schnelle Verkaufsabwicklung',
    description: 'Durch unser Käufernetzwerk aus der gesamten Rhein-Main-Region erzielen wir schnelle Abschlüsse zu attraktiven Preisen.',
  },
  {
    title: 'Professionelle Aufbereitung',
    description: 'Hochwertige Fotos, ansprechende Exposés und eine zielgerichtete Online-Vermarktung setzen deine Immobilie in Hanau perfekt in Szene.',
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
    description: 'Wir bewerten deine Immobilie in Hanau kostenlos und unverbindlich – basierend auf aktuellen Transaktionsdaten aus dem Main-Kinzig-Kreis.',
  },
  {
    number: 2,
    title: 'Vermarktungsstrategie',
    description: 'Professionelle Fotos, Grundrissaufbereitung, Expose-Erstellung und gezielte Ansprache von Interessenten aus Frankfurt und dem Umland.',
  },
  {
    number: 3,
    title: 'Besichtigungen & Verhandlung',
    description: 'Wir übernehmen alle Besichtigungen, prüfen Kaufinteressenten und verhandeln den bestmöglichen Preis für deine Immobilie.',
  },
  {
    number: 4,
    title: 'Notartermin & Übergabe',
    description: 'Wir begleiten dich bis zur Schlüsselübergabe – inklusive Kaufvertragsvorbereitung und Notartermin.',
  },
]

const faqItems = sharedFaqItems

export default function ImmobilienmaklerHanau() {
  return (
    <>
      <CityJsonLd cityName="Hanau" slug="hanau" />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <nav className="text-sm text-gray-500">
            <a href="/" className="hover:text-brand-green">Start</a>
            <span className="mx-2">/</span>
            <a href="/" className="hover:text-brand-green">Immobilienmakler</a>
            <span className="mx-2">/</span>
            <span className="text-gray-800 font-medium">Hanau</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-12 pb-10 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimateIn direction="up">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Immobilienmakler Hanau.
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Wachsende Großstadt mit günstigem Einstieg in die Rhein-Main-Region.
            </p>

            {/* Stars + Social Proof */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex text-yellow-400 text-lg">★★★★★</div>
              <span className="text-gray-700 font-medium">4,9 / 5 – über 40 erfolgreiche Verkäufe im Main-Kinzig-Kreis</span>
            </div>

            {/* Checklist */}
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold text-lg">✓</span>
                Kostenlose Immobilienbewertung in Hanau
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold text-lg">✓</span>
                3,57 % Provision – fair zwischen Käufer & Verkäufer geteilt
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-brand-green font-bold text-lg">✓</span>
                Persönliche Beratung vor Ort in Hanau
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/verkaufen" variant="white" size="lg">
                Immobilienbewertung starten →
              </CTAButton>
              <CTAButton href="/kontakt" variant="outline" size="lg">
                Beratungsgespräch vereinbaren
              </CTAButton>
            </div>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* Feature Panel with Niclas Image */}
      <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Dein Ansprechpartner in Hanau
            </h2>
            <p className="text-gray-600 mb-4">
              Hanau wächst – und das spürbar. Die Brüder-Grimm-Stadt zieht immer mehr Familien aus dem Frankfurter Raum an, die mehr Fläche für weniger Geld wollen. Steinheim am Main, Kesselstadt und Großauheim haben dabei jeweils ihre eigene Anziehungskraft.
            </p>
            <p className="text-gray-600 mb-6">
              Ich habe in Hanau mehrere Objekte verkauft und kenne die unterschiedlichen Preisrealitäten der Stadtteile. Das Käuferprofil hier ist sehr klar: Berufstätige, die per Bahn nach Frankfurt pendeln wollen und mit dem Rücken zur Provinz nichts anfangen können.
            </p>
            <CTAButton href="/kontakt" variant="white" size="md">
              Jetzt Kontakt aufnehmen →
            </CTAButton>
          </div>
          <div className="flex justify-center">
            <Image src="/hero-niclas-2.png" alt="Niclas van der Straeten – Immobilienmakler Hanau" className="rounded-2xl shadow-lg max-h-96 object-cover" width={600} height={384} />
          </div>
        </div>
      </section>

      {/* Niclas über den Markt */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateIn direction="up">
          <div className="bg-brand-anthrazit rounded-2xl p-8 md:p-10">
            <p className="text-brand-green text-sm font-semibold uppercase tracking-wider mb-3">Niclas über den Markt</p>
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-4">„Hanau ist der günstigste Einstieg ins Rhein-Main-Gebiet – das wissen die Käufer, und das treibt die Nachfrage. Für Verkäufer ist das eine gute Ausgangslage."</p>
            <p className="text-gray-400 text-sm leading-relaxed">Steinheim am Main mit seiner direkten Mainlage ist der begehrteste Stadtteil, gefolgt von Kesselstadt. Die Bahnverbindung nach Frankfurt (30 Min.) ist das stärkste Verkaufsargument. Objekte in S-Bahn-Nähe erzielen in Hanau die höchsten Preise.</p>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* Trust Badges Row */}
      <TrustBadges />

      {/* Local Market Section */}
      <section className="py-14 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-left md:text-center">
            Der Immobilienmarkt in Hanau
          </h2>
          <p className="text-gray-500 text-left md:text-center mb-10">
            Aktuelle Kennzahlen für deine Verkaufsentscheidung
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">100.000</div>
              <div className="text-gray-600 text-sm">Einwohner</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">420.000 €</div>
              <div className="text-gray-600 text-sm">Ø Hauspreis</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">3.300 €</div>
              <div className="text-gray-600 text-sm">Ø m²-Preis</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-brand-green mb-1">25 km</div>
              <div className="text-gray-600 text-sm">bis Frankfurt</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wohnlagen in Hanau</h3>
              <p className="text-gray-600 mb-3">
                Hanau bietet eine Vielzahl attraktiver Wohnlagen: Das ruhige Steinheim am Main mit Einfamilienhäusern, das aufstrebende Kesselstadt, das grüne Wolfgang und das familienfreundliche Großauheim.
              </p>
              <p className="text-gray-600">
                Der günstige Einstiegspreis im Vergleich zu Frankfurt und die gute Bahnanbindung machen Hanau zu einem gefragten Zuzugsstandort. Als Verkäufer profitieren du von dieser stabilen und wachsenden Nachfrage.
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/hanau-markt.jpg" alt="Immobilienmarkt Hanau" className="rounded-xl shadow-md max-h-72 object-cover w-full" width={800} height={288} />
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
              Direkt erreichbar – für Hanau und Umgebung
            </h2>
            <p className="text-gray-600 mb-6">
              Hast du Fragen zum Verkauf deiner Immobilie in Hanau? Ich bin persönlich für dich da – per Telefon, WhatsApp oder vor Ort.
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
            <Image src="/niclas-hochhaus.png" alt="Niclas van der Straeten – Immobilienmakler Hanau" className="rounded-2xl shadow-lg max-h-96 object-cover" width={600} height={384} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 60%, #16a34a 100%)' }}>
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Deine Immobilie in Hanau. Dein Erfolg.</h2>
          <p className="text-green-100 mb-6">Kostenlose Erstberatung und Bewertung – ganz ohne Verpflichtung.</p>
          <CTAButton href="/verkaufen" variant="white" size="lg">Immobilienbewertung starten →</CTAButton>
        </div>
      </section>

      {/* FAQ */}
      <TippgeberSection />

      <FAQ items={faqItems} />

      {/* Contact Form */}
      <ContactForm
        variant="makler"
        title="Kostenlose Erstberatung in Hanau anfordern."
        subtitle="Unverbindlich, diskret und schnell. Wir melden uns innerhalb von 24 Stunden."
      />

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg py-3 px-4 flex justify-center md:hidden">
        <CTAButton href="/verkaufen" variant="white" size="md">
          Immobilienbewertung starten →
        </CTAButton>
      </div>

      <NearbyStaedte currentSlug="hanau" />
      <Footer variant="makler" />
    </>
  )
}
