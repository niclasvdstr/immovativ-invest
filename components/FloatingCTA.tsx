'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FloatingCTA() {
  const pathname = usePathname()
  const [footerVisible, setFooterVisible] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    const footer = document.querySelector('footer')
    if (footer) {
      const obs = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { threshold: 0.01, rootMargin: '120px 0px 0px 0px' }
      )
      obs.observe(footer)
      observers.push(obs)
    }

    const hero = document.querySelector('section')
    if (hero) {
      const obs = new IntersectionObserver(
        ([entry]) => setHeroVisible(entry.isIntersecting),
        { threshold: 0.01 }
      )
      obs.observe(hero)
      observers.push(obs)
    }

    return () => observers.forEach(o => o.disconnect())
  }, [pathname])

  if (pathname === '/' || pathname === '/immobilienbewertung') return null
  if (footerVisible) return null
  if (pathname === '/ankauf' && heroVisible) return null

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="bg-white rounded-2xl shadow-xl border border-brand-gray-border p-4 w-60">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#2563EB' }}>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <p className="text-brand-anthrazit font-bold text-sm leading-snug">
            Wie viel ist Deine<br />Immobilie wert?
          </p>
        </div>

        <Link
          href="/immobilienbewertung"
          className="flex items-center justify-center gap-2 text-white font-semibold text-xs rounded-xl px-3 py-2.5 transition-colors w-full"
          style={{ backgroundColor: '#16a34a' }}
        >
          Kostenlos bewerten →
        </Link>
      </div>
    </div>
  )
}
