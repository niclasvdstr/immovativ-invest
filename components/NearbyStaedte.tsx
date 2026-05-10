import { getNachbarn } from '@/lib/seo-staedte'

interface NearbyStaedteProps {
  currentSlug: string
}

export default function NearbyStaedte({ currentSlug }: NearbyStaedteProps) {
  const nachbarn = getNachbarn(currentSlug)
  if (nachbarn.length === 0) return null

  return (
    <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-t border-brand-gray-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-brand-gray-warm uppercase tracking-wide mb-4">
          Auch in benachbarten Städten tätig
        </p>
        <div className="flex flex-wrap gap-3">
          {nachbarn.map((stadt) => (
            <a
              key={stadt.slug}
              href={`/immobilienmakler-${stadt.slug}`}
              className="inline-flex items-center gap-2 bg-white border border-brand-gray-border rounded-full px-4 py-2 text-sm font-medium text-brand-anthrazit hover:border-brand-green hover:text-brand-green transition-colors shadow-soft"
            >
              <svg className="w-3.5 h-3.5 text-brand-green shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Immobilienmakler {stadt.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
