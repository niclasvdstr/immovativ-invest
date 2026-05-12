import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum | immovativInvest',
  description: 'Impressum der immovativ Immobilien GmbH – Angaben gemäß § 5 TMG.',
  alternates: { canonical: 'https://www.immovativ-invest.de/impressum' },
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl font-bold text-brand-anthrazit mb-8">Impressum</h1>

        <div className="prose prose-sm text-brand-gray-warm space-y-6">

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              immovativ Immobilien GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ] Frankfurt am Main<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Vertreten durch</h2>
            <p>
              Niclas van der Straeten<br />
              Mazlum Selcuk
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Kontakt</h2>
            <p>
              Telefon: +49 151 29686979<br />
              E-Mail: info@immovativ-invest.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Handelsregister</h2>
            <p>
              Registergericht: Amtsgericht Frankfurt am Main<br />
              Registernummer: [HRB-Nummer eintragen]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [USt-IdNr. eintragen]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Immobilienmakler<br />
              Zuständige Aufsichtsbehörde: [Behörde eintragen]<br />
              Erlaubnis gemäß § 34c GewO
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
            <p>
              Niclas van der Straeten<br />
              [Anschrift wie oben]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
