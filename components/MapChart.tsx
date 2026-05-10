'use client'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { seoStaedte } from '@/lib/seo-staedte'

const GEO_URL = '/rhein-main-map.json'

const cityLatLng: Record<string, [number, number]> = {
  'usingen':             [8.538,  50.337],
  'neu-anspach':         [8.511,  50.317],
  'wehrheim':            [8.572,  50.298],
  'schmitten':           [8.447,  50.277],
  'bad-homburg':         [8.618,  50.227],
  'friedrichsdorf':      [8.638,  50.258],
  'oberursel':           [8.576,  50.201],
  'koenigstein':         [8.466,  50.182],
  'kronberg':            [8.512,  50.184],
  'bad-nauheim':         [8.738,  50.366],
  'butzbach':            [8.671,  50.435],
  'bad-vilbel':          [8.736,  50.179],
  'karben':              [8.771,  50.221],
  'friedberg':           [8.755,  50.334],
  'frankfurt':           [8.682,  50.110],
  'offenbach':           [8.762,  50.104],
  'neu-isenburg':        [8.694,  50.053],
  'dreieich':            [8.695,  49.990],
  'langen':              [8.666,  49.989],
  'hanau':               [8.921,  50.130],
  'maintal':             [8.836,  50.150],
  'moerfelden-walldorf': [8.555,  49.992],
  'ruesselsheim':        [8.415,  49.993],
  'hofheim':             [8.444,  50.087],
  'eschborn':            [8.572,  50.140],
  'kelkheim':            [8.453,  50.133],
  'bad-soden':           [8.494,  50.143],
  'bad-camberg':         [8.259,  50.302],
  'limburg':             [8.066,  50.387],
  'giessen':             [8.672,  50.572],
  'idstein':             [8.272,  50.216],
  'eltville':            [8.115,  50.026],
  'darmstadt':           [8.651,  49.872],
  'wiesbaden':           [8.239,  50.078],
  'mainz':               [8.271,  49.998],
}

const serviceDistricts = new Set([
  'Frankfurt am Main', 'Offenbach am Main', 'Hochtaunuskreis',
  'Wetteraukreis', 'Main-Taunus-Kreis', 'Wiesbaden',
  'Kreis Groß-Gerau', 'Landkreis Offenbach', 'Main-Kinzig-Kreis',
  'Darmstadt', 'Rheingau-Taunus-Kreis',
])

interface Props {
  hoveredSlug: string | null
  onHover: (slug: string | null) => void
}

export default function MapChart({ hoveredSlug, onHover }: Props) {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ center: [8.68, 50.12], scale: 13500 }}
      width={500}
      height={480}
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isService = serviceDistricts.has(geo.properties.name as string)
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isService ? '#e8f0fe' : '#edf2f7'}
                stroke={isService ? '#b8ccf8' : '#d1d9e0'}
                strokeWidth={isService ? 0.8 : 0.5}
                style={{
                  default: { outline: 'none' },
                  hover:   { outline: 'none', fill: isService ? '#d0e2fd' : '#e2e8f0' },
                  pressed: { outline: 'none' },
                }}
              />
            )
          })
        }
      </Geographies>

      {seoStaedte.map(stadt => {
        const coords = cityLatLng[stadt.slug]
        if (!coords) return null
        const isHovered = hoveredSlug === stadt.slug

        return (
          <Marker
            key={stadt.slug}
            coordinates={coords}
            onMouseEnter={() => onHover(stadt.slug)}
            onMouseLeave={() => onHover(null)}
            onClick={() => { window.location.href = `/immobilienmakler-${stadt.slug}` }}
            style={{ cursor: 'pointer' }}
          >
            {isHovered && (
              <circle r={9} fill="none" stroke="#2563EB" strokeWidth={1.5} opacity={0.4} />
            )}
            <circle
              r={isHovered ? 5 : 3.5}
              fill={isHovered ? '#2563EB' : '#16a34a'}
              stroke="white"
              strokeWidth={1.2}
              style={{ transition: 'r 0.15s ease, fill 0.15s ease' }}
            />
            {isHovered && (
              <>
                <rect
                  x={8} y={-9}
                  width={stadt.name.length * 5.6 + 10}
                  height={14}
                  rx={3}
                  fill="#0B1F3A"
                  opacity={0.88}
                />
                <text
                  x={13} y={1}
                  fontSize={8.5}
                  fontWeight={600}
                  fill="white"
                  style={{ pointerEvents: 'none' }}
                >
                  {stadt.name}
                </text>
              </>
            )}
          </Marker>
        )
      })}
    </ComposableMap>
  )
}
