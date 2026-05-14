import Image from 'next/image'
import TippgeberKontaktForm from './TippgeberKontaktForm'

export default function TippgeberSection() {
  return (
    <section id="tippgeber" className="section-padding" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a4a 50%, #0f2027 100%)' }}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Links – Formular (auf Mobile: unten) */}
          <div className="bg-white rounded-3xl p-8 shadow-large order-2 lg:order-1">
            <h3 className="text-xl font-bold text-brand-anthrazit mb-6">Tipp einreichen</h3>
            <TippgeberKontaktForm />
          </div>

          {/* Rechts – Info (auf Mobile: oben) */}
          <div className="text-white order-1 lg:order-2">
            {/* Team-Avatare */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-3">
                <Image src="/niclas-portrait.png" alt="Niclas" className="w-14 h-14 rounded-full object-cover border-2 border-white shrink-0" style={{ objectPosition: 'center 15%' }} width={56} height={56} />
                <Image src="/mazlum-portrait.png" alt="Mazlum" className="w-14 h-14 rounded-full object-cover border-2 border-white shrink-0" style={{ objectPosition: 'center 20%' }} width={56} height={56} />
              </div>
              <div>
                <div className="font-bold text-white">Niclas & Mazlum</div>
                <div className="text-sm text-gray-400">Geschäftsführer von immovativ<span className="font-semibold">Invest</span></div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: '#16a34a' }}>
              <svg className="w-5 h-5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v2m0 8v2m-3-5h6m-5-3a2 2 0 104 0c0 1.1-.9 2-2 2" />
              </svg>
              <span className="text-white font-semibold text-sm">Tippgeberprovision</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Kennst du jemanden,<br />der verkaufen möchte?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              Ein Bekannter oder Kollege von dir möchte sein Haus verkaufen? Deine Nachbarn ziehen um und verkaufen ihre Eigentumswohnung?
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Ob Häuser, Wohnungen oder Mehrfamilienhäuser – gib uns einen Tipp und erhalte als Dankeschön eine Provision in Höhe von bis zu <strong className="text-white">10 %</strong> der Gesamtprovision, sollte es zu einem Deal kommen.
            </p>

            {/* Vorteile */}
            <ul className="space-y-4">
              {[
                'Bis zu 10 % der Innenbereitstellung für Dich als Tippgeber',
                'Schnelle Auszahlung nach Erhalt der Provision',
                'Rückruf innerhalb von 24 Stunden nach Erhalt Deines Tipps',
                'Vermarktung innerhalb von 6 Wochen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#16a34a' }}>
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
