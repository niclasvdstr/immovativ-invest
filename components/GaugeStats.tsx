'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    value: 96,
    label: 'Abschlüsse',
    description: 'Eine Garantie gibt es nicht! Dennoch schließen wir über 96% unserer Aufträge erfolgreich ab.',
    wide: false,
  },
  {
    value: 97,
    label: 'Kundenzufriedenheit',
    description: 'Über 100+ positive Bewertungen von zufriedenen Kunden sprechen für sich.',
    wide: false,
  },
  {
    value: 100,
    label: 'Transparenz',
    description: 'Du erhältst von uns jederzeit ehrliche und transparente Updates zum aktuellen Vermarktungsstand deiner Immobilie.',
    wide: true,
  },
]

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function GaugeCard({ value, label, description, wide, active }: {
  value: number; label: string; description: string; wide?: boolean; active: boolean
}) {
  const count = useCountUp(value, 1400, active)
  const pathLength = Math.PI * 65
  const dashOffset = pathLength * (1 - (active ? value : 0) / 100)

  const gauge = (
    <svg viewBox="0 0 160 95" className="w-full">
      <path
        d="M 15,85 A 65,65 0 0,1 145,85"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M 15,85 A 65,65 0 0,1 145,85"
        fill="none"
        stroke="#2563EB"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={`${pathLength} ${pathLength}`}
        strokeDashoffset={dashOffset}
        style={{ transition: active ? 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)' : 'none' }}
      />
      <text x="80" y="74" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">
        {`${count}%`}
      </text>
    </svg>
  )

  if (wide) {
    return (
      <div className="col-span-1 sm:col-span-2 bg-brand-anthrazit rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
        <div className="w-36 sm:w-44 shrink-0">{gauge}</div>
        <div className="text-center sm:text-left">
          <div className="font-bold text-xl mb-2">{label}</div>
          <div className="text-gray-400 text-sm leading-relaxed">{description}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-brand-anthrazit rounded-2xl p-6 text-white flex flex-col">
      <div className="w-full max-w-[140px] sm:max-w-[160px]">{gauge}</div>
      <div className="mt-2">
        <div className="font-bold text-base sm:text-lg mb-2">{label}</div>
        <div className="text-gray-400 text-sm leading-relaxed">{description}</div>
      </div>
    </div>
  )
}

export default function GaugeStats() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Links */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-anthrazit mb-6 leading-tight">
              immovativ<span className="font-black">Invest</span><br />in Zahlen gemessen.
            </h2>
            <p className="text-brand-gray-warm leading-relaxed mb-8 text-lg">
              Wir übernehmen nur Aufträge, die realistisch am Markt umsetzbar sind und wirtschaftlich sinnvoll für den Eigentümer sind. Genau dadurch entstehen unsere starken Ergebnisse.
            </p>
            <ul className="space-y-4 mb-10">
              {['+100 zufriedene Kunden', 'Schnelle Vermarktung', 'Klare und transparente Preise'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#16a34a' }}>
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-brand-anthrazit font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 btn-gradient text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Immobilienwert ermitteln
              </a>
              <a
                href="tel:+4915129686979"
                className="inline-flex items-center justify-center gap-2 bg-brand-anthrazit hover:bg-brand-anthrazit/90 text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Rechts – Gauges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map(stat => (
              <GaugeCard key={stat.label} {...stat} active={active} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
