import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AGB – Allgemeine Geschäftsbedingungen | immovativInvest',
  description: 'Allgemeine Geschäftsbedingungen der immovativInvest GbR für Maklerleistungen im Bereich Immobilienvermittlung.',
  alternates: { canonical: 'https://www.immovativ-invest.de/agb' },
  robots: { index: false, follow: false },
}

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <h1 className="text-3xl font-bold text-brand-anthrazit mb-2">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-brand-gray-warm text-sm mb-10">Stand: Mai 2025</p>

        <div className="space-y-8 text-brand-gray-warm text-sm leading-relaxed">

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Niclas van der Straeten &amp; Mazlum Selcuk GbR, geführt unter dem Namen immovativInvest, Hattsteiner Allee 51, 61250 Usingen (nachfolgend „Makler"), und dem jeweiligen Auftraggeber (nachfolgend „Auftraggeber") über die Vermittlung von Immobilien.
            </p>
            <p className="mt-3">
              Abweichende Bedingungen des Auftraggebers werden nur anerkannt, wenn der Makler diesen ausdrücklich schriftlich zustimmt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 2 Leistungen des Maklers</h2>
            <p>
              Der Makler erbringt Leistungen der Immobilienvermittlung. Dies umfasst insbesondere:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Bewertung und Marktwerteinschätzung der Immobilie</li>
              <li>Erstellung von Exposés und Vermarktungsmaterialien</li>
              <li>Insertion auf Immobilienportalen und eigenen Kanälen</li>
              <li>Durchführung und Organisation von Besichtigungen</li>
              <li>Bonitätsprüfung und Qualifizierung von Kaufinteressenten</li>
              <li>Verhandlungsführung zwischen Verkäufer und Käufer</li>
              <li>Begleitung bis zur notariellen Beurkundung</li>
            </ul>
            <p className="mt-3">
              Ein Anspruch auf Abschluss eines Kaufvertrages besteht nicht. Der Makler schuldet lediglich das Bemühen um eine Vermittlung, nicht den Erfolg.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 3 Maklervertrag und Auftragserteilung</h2>
            <p>
              Der Maklervertrag kommt durch schriftliche Vereinbarung (auch per E-Mail oder digitale Unterzeichnung) oder durch die Inanspruchnahme der Maklertätigkeit in Kenntnis der Provisionspflicht zustande.
            </p>
            <p className="mt-3">
              Der Auftraggeber versichert, dass er zur Beauftragung des Maklers berechtigt ist und ggf. alle erforderlichen Zustimmungen (z. B. Miteigentümer, Erbengemeinschaft) vorliegen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 4 Maklerprovision</h2>
            <p>
              Die Maklerprovision (Courtage) wird im Erfolgsfall – d. h. bei notarieller Beurkundung des vermittelten Kaufvertrages – fällig.
            </p>
            <p className="mt-3">
              Die Höhe der Courtage richtet sich nach der individuellen Vereinbarung im Maklervertrag. Sofern keine abweichende Vereinbarung getroffen wurde, gilt die im Exposé oder im Maklervertrag genannte Provision. Die Provision ist zzgl. der gesetzlichen Umsatzsteuer zu entrichten.
            </p>
            <p className="mt-3">
              Gemäß § 656c BGB werden Provisionen bei der Vermittlung von Kaufverträgen über Wohnimmobilien hälftig zwischen Käufer und Verkäufer geteilt, sofern beide Seiten einen Provisionsanspruch schulden. Näheres regelt der jeweilige Maklervertrag.
            </p>
            <p className="mt-3">
              Die Provision ist mit Abschluss des notariellen Kaufvertrages zur Zahlung fällig. Eine Rechnung wird zeitnah nach Beurkundung übersandt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 5 Pflichten des Auftraggebers</h2>
            <p>Der Auftraggeber verpflichtet sich:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Alle für die Vermarktung relevanten Unterlagen vollständig und korrekt zur Verfügung zu stellen (Grundbuchauszug, Energieausweis, Baupläne etc.)</li>
              <li>Den Makler unverzüglich zu informieren, wenn ein anderweitiger Verkauf oder eine Eigenvermarktung erfolgt</li>
              <li>Keine parallele Beauftragung anderer Makler ohne vorherige Mitteilung an den Makler, soweit ein Alleinauftrag vereinbart wurde</li>
              <li>Ihm bekannte Mängel der Immobilie vollständig und wahrheitsgemäß anzugeben</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 6 Alleinauftrag</h2>
            <p>
              Wird ein qualifizierter Alleinauftrag vereinbart, verpflichtet sich der Auftraggeber für die Dauer des Auftrags, die Immobilie ausschließlich über den Makler zu vermarkten und keine Parallelbeauftragungen vorzunehmen. Der Auftraggeber darf die Immobilie in diesem Zeitraum auch nicht selbst anbieten oder anderweitig inserieren.
            </p>
            <p className="mt-3">
              Verletzt der Auftraggeber diese Pflicht, ist er dem Makler zum Ersatz des entstandenen Schadens verpflichtet, mindestens jedoch zur Zahlung der vereinbarten Provision.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 7 Haftung</h2>
            <p>
              Der Makler haftet nicht für die Richtigkeit von Angaben Dritter (z. B. Eigentümer, Behörden, Gutachter), die er ohne eigene Prüfungspflicht weitergegeben hat, sofern er diese als Angaben Dritter kenntlich gemacht hat.
            </p>
            <p className="mt-3">
              Die Haftung des Maklers für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten verletzt wurden und kein Schaden an Leben, Körper oder Gesundheit vorliegt.
            </p>
            <p className="mt-3">
              Im Übrigen ist die Haftung des Maklers auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 8 Datenschutz</h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer <a href="/datenschutz" className="text-brand-green hover:underline">Datenschutzerklärung</a> und den geltenden datenschutzrechtlichen Bestimmungen (DSGVO, BDSG). Die Daten werden ausschließlich zur Erfüllung des Maklerauftrages verarbeitet und nicht ohne Einwilligung an unbefugte Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 9 Widerrufsrecht</h2>
            <p>
              Verbrauchern steht gemäß § 312g BGB i. V. m. Art. 246a EGBGB bei außerhalb von Geschäftsräumen geschlossenen Verträgen und Fernabsatzverträgen ein gesetzliches Widerrufsrecht zu. Dieses beträgt 14 Tage ab Vertragsschluss.
            </p>
            <p className="mt-3">
              Bitte beachten Sie: Haben Sie ausdrücklich verlangt, dass der Makler vor Ablauf der Widerrufsfrist mit der Ausführung der Dienstleistung beginnen soll, und kommt es zum Abschluss des Kaufvertrages innerhalb der Widerrufsfrist, erlischt das Widerrufsrecht gemäß § 356 Abs. 4 BGB und die volle Provision ist fällig.
            </p>
            <p className="mt-3 font-semibold text-brand-anthrazit">Widerrufsbelehrung:</p>
            <p className="mt-1">
              Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (immovativInvest, Hattsteiner Allee 51, 61250 Usingen, E-Mail: info@immovativ-invest.de) mittels einer eindeutigen Erklärung (z. B. per E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 10 Laufzeit und Kündigung</h2>
            <p>
              Der Maklerauftrag läuft für die im Maklervertrag vereinbarte Laufzeit. Wurde keine Laufzeit vereinbart, gilt eine Mindestlaufzeit von drei Monaten. Nach Ablauf der Mindestlaufzeit kann der Auftrag von beiden Seiten mit einer Frist von zwei Wochen zum Monatsende gekündigt werden.
            </p>
            <p className="mt-3">
              Kommt es nach Beendigung des Auftrags zum Abschluss eines Kaufvertrages mit einem Interessenten, dem der Makler die Immobilie während der Vertragslaufzeit nachgewiesen hat, bleibt der Provisionsanspruch bestehen (Nachweisprovision), sofern der Nachweis kausal für den Abschluss war.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 11 Salvatorische Klausel</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Anstelle der unwirksamen Bestimmung gilt eine wirksame Regelung als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 12 Gerichtsstand und anwendbares Recht</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist – soweit gesetzlich zulässig – der Sitz des Maklers.
            </p>
            <p className="mt-3">
              Für Verbraucher gilt der gesetzliche Gerichtsstand gemäß den anwendbaren Verbraucherschutzvorschriften.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-brand-anthrazit mb-3">§ 13 Streitbeilegung</h2>
            <p>
              Die EU-Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">https://ec.europa.eu/consumers/odr</a> erreichbar ist.
            </p>
            <p className="mt-3">
              Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div className="pt-4 border-t border-brand-gray-border">
            <p className="text-xs text-brand-gray-warm">
              immovativInvest · Niclas van der Straeten &amp; Mazlum Selcuk GbR · Hattsteiner Allee 51, 61250 Usingen · info@immovativ-invest.de
            </p>
          </div>

        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
