'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { seoStaedte } from '@/lib/seo-staedte'

const MapChart = dynamic(() => import('./MapChart'), {
  ssr: false,
  loading: () => <div className="w-full aspect-[500/480] bg-[#f0f4f8] animate-pulse" />,
})

const regionGroups = [
  'Hochtaunuskreis',
  'Wetteraukreis',
  'Frankfurt am Main',
  'Landkreis Offenbach',
  'Offenbach am Main',
  'Main-Kinzig-Kreis',
  'Kreis Groß-Gerau',
  'Main-Taunus-Kreis',
  'Landkreis Limburg-Weilburg',
  'Rheingau-Taunus-Kreis',
  'Darmstadt',
  'Wiesbaden',
  'Mainz',
  'Landkreis Gießen',
]

export default function RegionenKarte() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      {/* Left: City list */}
      <div className="space-y-5 max-h-[540px] overflow-y-auto pr-2 scrollbar-thin">
        {regionGroups.map(region => {
          const staedte = seoStaedte.filter(s => s.region === region)
          if (staedte.length === 0) return null
          return (
            <div key={region}>
              <p className="text-xs font-semibold text-brand-gray-warm uppercase tracking-widest mb-2.5">
                {region}
              </p>
              <div className="flex flex-wrap gap-2">
                {staedte.map(stadt => {
                  const isHovered = hoveredSlug === stadt.slug
                  return (
                    <a
                      key={stadt.slug}
                      href={`/immobilienmakler-${stadt.slug}`}
                      onMouseEnter={() => setHoveredSlug(stadt.slug)}
                      onMouseLeave={() => setHoveredSlug(null)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium border transition-all duration-150 ${
                        isHovered
                          ? 'bg-brand-green text-white border-brand-green shadow-sm scale-105'
                          : 'bg-white text-brand-anthrazit border-brand-gray-border hover:border-brand-green hover:text-brand-green'
                      }`}
                    >
                      <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {stadt.name}
                    </a>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Right: Geographic Map (client-only to avoid SSR hydration mismatch) */}
      <div className="relative rounded-3xl overflow-hidden border border-brand-gray-border shadow-medium bg-[#f8fafc]">
        <MapChart hoveredSlug={hoveredSlug} onHover={setHoveredSlug} />

        {/* District legend */}
        <div className="absolute bottom-3 left-3 flex items-center gap-4 text-xs text-brand-gray-warm bg-white/90 px-3 py-2 rounded-full border border-brand-gray-border backdrop-blur-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#e8f0fe] border border-[#b8ccf8] inline-block" />
            Servicegebiet
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] inline-block" />
            Stadt anklicken
          </span>
        </div>

        {/* Hover badge */}
        {hoveredSlug && (
          <div className="absolute bottom-3 right-3 text-xs font-semibold text-white bg-brand-green px-3 py-1.5 rounded-full shadow-sm">
            {seoStaedte.find(s => s.slug === hoveredSlug)?.name}
          </div>
        )}
      </div>
    </div>
  )
}
