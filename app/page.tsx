import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'Immobilie verkaufen – Direktankauf oder Makler | immovativInvest',
  description: 'Wählen Sie den richtigen Weg für Ihren Immobilienverkauf: Direktankauf für schnellen Abschluss oder Profi-Makler für maximale Rendite. Kostenlos & unverbindlich.',
  alternates: { canonical: 'https://www.immovativ-invest.de' },
  openGraph: {
    title: 'Immobilienmakler Frankfurt & Rhein-Main | immovativInvest',
    description: 'Professionell Immobilien verkaufen im Rhein-Main-Gebiet. Kostenlose Bewertung, persönliche Betreuung, nachgewiesene Ergebnisse.',
    url: 'https://www.immovativ-invest.de',
    siteName: 'immovativInvest',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: 'https://www.immovativ-invest.de/logo-new.png', width: 1200, height: 630 }],
  },
}

const Check = ({ light = false }: { light?: boolean }) => (
  <div
    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
    style={{ backgroundColor: light ? 'rgba(255,255,255,0.2)' : '#16a34a' }}
  >
    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>
)

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f0f2f5]">
      <h1 className="sr-only">Immobilienmakler Frankfurt & Rhein-Main – Immobilie verkaufen mit immovativInvest</h1>

      {/* ── HERO ── */}
      <section className="flex flex-col items-center px-4 pt-16 pb-24 relative" style={{ backgroundColor: '#f0f4ff' }}>


        {/* Headline */}
        <div className="text-center mb-10">
        </div>

        {/* Cards container */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4 items-stretch">

          {/* ── MAKLER – featured, large ── */}
          <AnimateIn direction="up" delay={0}>
          <Link
            href="/immobilienmakler"
            className="group relative flex-[3] flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white"
          >
            {/* Blue gradient header area */}
            <div className="relative h-48 md:h-56 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
              {/* Subtle glow */}
              <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 50%, #60a5fa, transparent 60%)' }} />

              {/* Niclas photo – full width of banner */}
              <Image
                src="/hero-niclas.png"
                alt="Niclas van der Straeten"
                className="absolute bottom-0 left-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
                fill
                priority
              />

              {/* Logo top-left */}
              <div className="absolute top-5 left-6">
                <Image src="/logo-new.png" alt="immovativInvest" width={130} height={26} className="h-6 w-auto brightness-0 invert opacity-90" />
              </div>
              {/* Empfohlen pill */}
              <div className="absolute top-5 right-5 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg" style={{ backgroundColor: '#2563EB' }}>
                ★ Empfohlen
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col flex-1 p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">Immobilienmakler</h2>
              <p className="text-brand-gray-warm text-sm mb-6 leading-relaxed">
                Professionelle Vermarktung für den höchstmöglichen Verkaufspreis — mit persönlicher Betreuung von Anfang bis Ende.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Kostenlose Immobilienbewertung',
                  'Marktgerechter Verkaufspreis',
                  'Professionelle Vermarktung',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-brand-anthrazit">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className="mt-auto flex items-center justify-center gap-2 text-white font-bold rounded-2xl px-6 py-4 text-sm transition-opacity group-hover:opacity-90 w-full"
                style={{ backgroundColor: '#2563EB' }}
              >
                Unsere Makler-Website →
              </div>
            </div>
          </Link>
          </AnimateIn>

          {/* ── ANKAUF – dark elegant ── */}
          <AnimateIn direction="up" delay={150}>
          <Link
            href="/ankauf"
            className="group relative flex-[2] flex flex-col rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)' }}
          >
            {/* Banner – same height as Makler image */}
            <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
              <Image
                src="/team-ankauf.png"
                alt="Mazlum Selcuk & Niclas van der Straeten"
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                fill
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.45))' }} />
              {/* Logo top-left */}
              <div className="absolute top-5 left-6">
                <Image src="/logo-new.png" alt="immovativInvest" width={130} height={26} className="h-6 w-auto brightness-0 invert opacity-90" />
              </div>
              {/* Badge top-right */}
              <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Provisionsfrei
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-7 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-2">Ankauf</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Wir kaufen Ihre Immobilie direkt — ohne Provision, ohne Stress, ohne monatelange Wartezeit.
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Angebot in Ø 21 Tagen',
                  'Keine Maklerprovision',
                  'Keine Besichtigungstouren',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                    <Check light />
                    {item}
                  </li>
                ))}
              </ul>

              <div
                className="flex items-center justify-center gap-2 text-white font-bold rounded-2xl px-6 py-4 text-sm w-full transition-opacity group-hover:opacity-90"
                style={{ backgroundColor: '#16a34a' }}
              >
                Direktankauf anfragen →
              </div>
            </div>
          </Link>
          </AnimateIn>

        </div>

      </section>

      {/* ── STATS BAR ── */}
      <section className="py-10 px-4 md:px-8 bg-brand-anthrazit">
        <AnimateIn direction="fade">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-white/10">
          {[
            { value: '500+', label: 'Verkaufte Immobilien' },
            { value: '4,9 ★', label: 'Kundenbewertung' },
            { value: '24h', label: 'Rückmeldung garantiert' },
          ].map(item => (
            <div key={item.label} className="text-center md:px-8">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-gray-400 text-xs">{item.label}</div>
            </div>
          ))}
        </div>
        </AnimateIn>
      </section>


    </main>
  )
}
