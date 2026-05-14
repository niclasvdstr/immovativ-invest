'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { articles } from '@/lib/blog-articles'
import AnimateIn from '@/components/AnimateIn'

const categories: { label: string; href: string }[] = [
  { label: 'Alle', href: '/blog' },
  { label: 'Markt', href: '/blog/kategorie/markt' },
  { label: 'Verkaufen', href: '/blog/kategorie/verkaufen' },
  { label: 'Bewertung', href: '/blog/kategorie/bewertung' },
  { label: 'Recht & Steuern', href: '/blog/kategorie/recht-steuern' },
  { label: 'Finanzierung', href: '/blog/kategorie/finanzierung' },
  { label: 'Prozess', href: '/blog/kategorie/prozess' },
  { label: 'Spezialfälle', href: '/blog/kategorie/spezialfaelle' },
]

export default function BlogClient() {
  const pathname = usePathname()

  const sorted = [...articles].sort((a, b) => {
    const parseDate = (d: string) => {
      const parts = d.split(' ')
      const day = parseInt(parts[0].replace('.', ''))
      const month = parts[1]
      const year = parseInt(parts[2])
      const months: Record<string, number> = { Januar: 0, Februar: 1, März: 2, April: 3, Mai: 4, Juni: 5, Juli: 6, August: 7, September: 8, Oktober: 9, November: 10, Dezember: 11 }
      return new Date(year, months[month] ?? 0, day)
    }
    return parseDate(b.date).getTime() - parseDate(a.date).getTime()
  })

  const featured = sorted[0]
  const grid = sorted.slice(1)

  return (
    <>
      {/* Kategorie-Navigation */}
      <section className="py-6 px-4 md:px-8 bg-white border-b border-brand-gray-border sticky top-0 z-10 shadow-soft">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto justify-center">
          {categories.map(cat => {
            const isActive = pathname === cat.href
            return (
              <a
                key={cat.href}
                href={cat.href}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 ${
                  isActive
                    ? 'bg-brand-green text-white'
                    : 'bg-brand-gray-light text-brand-anthrazit hover:bg-brand-green-50 hover:text-brand-green border border-brand-gray-border'
                }`}
              >
                {cat.label}
              </a>
            )
          })}
        </div>
      </section>

      {sorted.length === 0 ? (
        <section className="py-24 text-center text-brand-gray-warm">
          Keine Artikel in dieser Kategorie.
        </section>
      ) : (
        <>
          {/* Featured */}
          <section className="section-padding bg-white">
            <div className="container-max">
              <AnimateIn direction="up">
              <a
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-brand-anthrazit rounded-3xl overflow-hidden hover:shadow-large transition-shadow duration-300"
              >
                <div className="relative h-64 lg:h-full min-h-[320px] overflow-hidden">
                  <Image
                    src={featured.img}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    fill
                    priority
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${featured.badgeColor}`}>{featured.badge}</span>
                    <span className="text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">{featured.category}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-brand-green transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image src={featured.authorImg} alt={featured.author} className="w-9 h-9 rounded-full object-cover border-2 border-white/20" style={{ objectPosition: 'center 15%' }} width={36} height={36} />
                      <div>
                        <div className="text-white text-xs font-semibold">{featured.author}</div>
                        <div className="text-gray-400 text-xs">{featured.date} · {featured.readTime}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold rounded-xl px-5 py-2.5 text-sm">
                      Lesen
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
              </AnimateIn>
            </div>
          </section>

          {/* Grid */}
          {grid.length > 0 && (
            <section className="pb-20 px-4 md:px-8 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {grid.map((article, index) => (
                    <AnimateIn key={article.slug} direction="up" delay={index * 60}>
                    <a
                      href={`/blog/${article.slug}`}
                      className="group bg-white border border-brand-gray-border rounded-2xl overflow-hidden hover:shadow-medium hover:border-brand-green/20 transition-all duration-300 flex flex-col"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fill />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.badgeColor}`}>{article.badge}</span>
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-brand-anthrazit">{article.category}</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-bold text-brand-anthrazit text-base leading-snug mb-3 group-hover:text-brand-green transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-brand-gray-warm text-sm leading-relaxed mb-5 flex-1">{article.excerpt}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-brand-gray-border">
                          <div className="flex items-center gap-2">
                            <Image src={article.authorImg} alt={article.author} className="w-7 h-7 rounded-full object-cover" style={{ objectPosition: 'center 15%' }} width={28} height={28} />
                            <div>
                              <div className="text-xs font-semibold text-brand-anthrazit">{article.author.split(' ')[0]}</div>
                              <div className="text-xs text-brand-gray-warm">{article.date}</div>
                            </div>
                          </div>
                          <span className="text-xs text-brand-gray-warm bg-brand-gray-light px-2.5 py-1 rounded-full">{article.readTime}</span>
                        </div>
                      </div>
                    </a>
                    </AnimateIn>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  )
}
