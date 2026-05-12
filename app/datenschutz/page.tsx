import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | immovativInvest',
  description: 'Datenschutzerklärung der immovativ Immobilien GmbH gemäß DSGVO.',
  alternates: { canonical: 'https://www.immovativ-invest.de/datenschutz' },
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl font-bold text-brand-anthrazit mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-sm text-brand-gray-warm space-y-6">

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-brand-anthrazit mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">2. Verantwortliche Stelle</h2>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              immovativ Immobilien GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ] Frankfurt am Main<br />
              Telefon: +49 151 29686979<br />
              E-Mail: info@immovativ-invest.de
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold text-brand-anthrazit mb-1">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">4. Cookies</h2>
            <p>
              Diese Website verwendet keine Cookies, die für die Funktion der Website nicht erforderlich sind. Technisch notwendige Cookies werden eingesetzt, um die Grundfunktionen der Website zu gewährleisten.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">5. Analyse-Tools</h2>
            <p>
              Diese Website verwendet [ggf. Google Analytics / kein Tracking-Tool eintragen]. [Weitere Informationen zum eingesetzten Tool hier ergänzen.]
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">6. Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA gehostet. Wenn Sie unsere Website besuchen, erfasst Vercel automatisch Informationen, die Ihr Browser übermittelt. Details entnehmen Sie der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">vercel.com/legal/privacy-policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">7. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@immovativ-invest.de
            </p>
            <p>
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde in Hessen ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-anthrazit mb-2">8. Aktualität dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>

        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
