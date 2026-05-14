import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum | immovativInvest',
  description: 'Impressum der immovativInvest GbR – Angaben gemäß § 5 TMG.',
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
              Niclas van der Straeten &amp; Mazlum Selcuk GbR<br />
              (geführt unter dem Namen: immovativInvest)<br />
              Hattsteiner Allee 51<br />
              61250 Usingen<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Gesellschafter</h2>
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
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              Wird nachgereicht
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Immobilienmakler<br />
              Zuständige Aufsichtsbehörde: Gewerbeamt der Stadt Usingen, Hochtaunuskreis<br />
              Erlaubnis gemäß § 34c GewO
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
            <p>
              Niclas van der Straeten<br />
              Hattsteiner Allee 51, 61250 Usingen
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
