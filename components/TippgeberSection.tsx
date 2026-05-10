import Image from 'next/image'

export default function TippgeberSection() {
  return (
    <section id="tippgeber" className="section-padding" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a4a 50%, #0f2027 100%)' }}>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Links – Formular */}
          <div className="bg-white rounded-3xl p-8 shadow-large">
            <h3 className="text-xl font-bold text-brand-anthrazit mb-6">Tipp einreichen</h3>
            <form className="space-y-5" action="#">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Vorname</label>
                  <input
                    type="text"
                    placeholder="Johannes"
                    className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Nachname</label>
                  <input
                    type="text"
                    placeholder="Müller"
                    className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">E-Mail</label>
                <input
                  type="email"
                  placeholder="beispiel@gmail.com"
                  className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Telefon</label>
                <div className="flex items-center border border-brand-gray-border rounded-xl overflow-hidden focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green transition-colors">
                  <span className="px-3 py-3 text-lg border-r border-brand-gray-border bg-brand-gray-light">🇩🇪</span>
                  <input
                    type="tel"
                    placeholder="Gib deine Telefonnummer ein"
                    className="flex-1 px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-anthrazit mb-3">Welcher Immobilientyp wird verkauft?</label>
                <div className="space-y-2.5">
                  {['Wohnung', 'Haus', 'Mehrfamilienhaus', 'Andere'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded-full border-2 border-brand-gray-border group-hover:border-brand-green transition-colors shrink-0 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-green opacity-0 group-hover:opacity-30 transition-opacity" />
                      </div>
                      <span className="text-sm text-brand-anthrazit">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white font-semibold rounded-xl px-6 py-4 text-sm transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
                style={{ background: '#16a34a' }}
              >
                <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tippgeber-Provision sichern →
              </button>
            </form>
          </div>

          {/* Rechts – Info */}
          <div className="text-white">
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

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
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
