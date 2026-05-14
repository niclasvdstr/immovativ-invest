import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles, type Category } from '@/lib/blog-articles'

const categoryNav = [
  { label: 'Alle', href: '/blog' },
  { label: 'Markt', href: '/blog/kategorie/markt' },
  { label: 'Verkaufen', href: '/blog/kategorie/verkaufen' },
  { label: 'Bewertung', href: '/blog/kategorie/bewertung' },
  { label: 'Recht & Steuern', href: '/blog/kategorie/recht-steuern' },
  { label: 'Finanzierung', href: '/blog/kategorie/finanzierung' },
  { label: 'Prozess', href: '/blog/kategorie/prozess' },
  { label: 'Spezialfälle', href: '/blog/kategorie/spezialfaelle' },
]

const categoryMap: Record<string, { label: Category; title: string; description: string }> = {
  'markt': {
    label: 'Markt',
    title: 'Immobilienmarkt Frankfurt & Rhein-Main – Aktuelle Entwicklungen',
    description: 'Marktberichte, Preisentwicklungen und Analysen zum Immobilienmarkt im Rhein-Main-Gebiet – von Experten erklärt.',
  },
  'verkaufen': {
    label: 'Verkaufen',
    title: 'Immobilie verkaufen – Tipps & Ratgeber | immovativInvest',
    description: 'Alles rund um den Immobilienverkauf: Strategie, Preisfindung, Vermarktung und Abwicklung – praxisnahe Ratgeber vom Makler.',
  },
  'bewertung': {
    label: 'Bewertung',
    title: 'Immobilienbewertung – Wert ermitteln & verstehen | immovativInvest',
    description: 'So ermitteln Sie den Marktwert Ihrer Immobilie: Bewertungsmethoden, Wertfaktoren und typische Fehler – erklärt von Experten.',
  },
  'recht-steuern': {
    label: 'Recht & Steuern',
    title: 'Recht & Steuern beim Immobilienverkauf | immovativInvest',
    description: 'Spekulationssteuer, Grunderwerbsteuer, Erbrecht und mehr: Rechtliche und steuerliche Themen rund um Immobilien kompakt erklärt.',
  },
  'finanzierung': {
    label: 'Finanzierung',
    title: 'Immobilienfinanzierung – Ratgeber & Tipps | immovativInvest',
    description: 'Finanzierungsmodelle, Zinsentwicklung und Käuferqualifizierung: Alles zur Immobilienfinanzierung im Rhein-Main-Gebiet.',
  },
  'prozess': {
    label: 'Prozess',
    title: 'Immobilienverkauf Prozess – Schritt für Schritt | immovativInvest',
    description: 'Vom Erstgespräch bis zum Notartermin: So läuft ein professioneller Immobilienverkauf ab – transparent und verständlich erklärt.',
  },
  'spezialfaelle': {
    label: 'Spezialfälle',
    title: 'Sondersituationen beim Immobilienverkauf | immovativInvest',
    description: 'Erbschaft, Scheidung, Zwangsversteigerung, Vermietung: Sondersituationen beim Immobilienverkauf – Lösungen und Tipps vom Experten.',
  },
}

export function generateStaticParams() {
  return Object.keys(categoryMap).map(cat => ({ cat }))
}

export async function generateMetadata({ params }: { params: { cat: string } }): Promise<Metadata> {
  const data = categoryMap[params.cat]
  if (!data) return {}
  return {
    title: `${data.title} | Blog`,
    description: data.description,
    alternates: { canonical: `https://www.immovativ-invest.de/blog/kategorie/${params.cat}` },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://www.immovativ-invest.de/blog/kategorie/${params.cat}`,
      siteName: 'immovativInvest',
      locale: 'de_DE',
      type: 'website',
    },
  }
}

export default function CategoryPage({ params }: { params: { cat: string } }) {
  const data = categoryMap[params.cat]
  if (!data) notFound()

  const categoryArticles = articles.filter(a => a.category === data.label)

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.immovativ-invest.de' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.immovativ-invest.de/blog' },
              { '@type': 'ListItem', position: 3, name: data.label, item: `https://www.immovativ-invest.de/blog/kategorie/${params.cat}` },
            ],
          }),
        }}
      />

      <Header ctaLabel="Kostenlose Immobilienbewertung" ctaHref="/verkaufen" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><Link href="/" className="hover:text-brand-green transition-colors">Start</Link></li>
            <li><span className="text-gray-300">›</span></li>
            <li><Link href="/blog" className="hover:text-brand-green transition-colors">Blog</Link></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium">{data.label}</li>
          </ol>
        </div>
      </nav>

      {/* Kategorie-Navigation */}
      <section className="py-6 px-4 md:px-8 bg-white border-b border-brand-gray-border sticky top-20 z-10 shadow-soft">
        <div className="max-w-6xl mx-auto flex gap-2 overflow-x-auto justify-center">
          {categoryNav.map(cat => {
            const isActive = cat.href === `/blog/kategorie/${params.cat}`
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

      {/* Hero */}
      <section className="py-12 px-4 md:px-8 bg-brand-gray-light border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-green text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            {categoryArticles.length} Artikel
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-3">{data.label}</h1>
          <p className="text-brand-gray-warm text-base max-w-2xl">{data.description}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {categoryArticles.length === 0 ? (
            <p className="text-brand-gray-warm text-center py-16">Keine Artikel in dieser Kategorie gefunden.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map(article => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white border border-brand-gray-border rounded-3xl overflow-hidden hover:shadow-medium hover:border-brand-green/20 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fill
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.badgeColor}`}>{article.badge}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-brand-green font-semibold mb-2">{article.category}</p>
                    <h2 className="font-bold text-brand-anthrazit leading-snug group-hover:text-brand-green transition-colors mb-3 line-clamp-3">
                      {article.title}
                    </h2>
                    <p className="text-brand-gray-warm text-xs leading-relaxed mb-auto line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-brand-gray-border">
                      <Image
                        src={article.authorImg}
                        alt={article.author}
                        className="w-7 h-7 rounded-full object-cover shrink-0"
                        style={{ objectPosition: 'center 15%' }}
                        width={28}
                        height={28}
                      />
                      <div className="text-xs text-brand-gray-warm">
                        {article.date} · {article.readTime}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}>
        <div className="max-w-2xl mx-auto text-left md:text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Kostenlose Immobilienbewertung</h2>
          <p className="text-white/70 text-sm mb-6">Wir bewerten Ihre Immobilie persönlich vor Ort – kostenlos, unverbindlich und diskret.</p>
          <Link
            href="/verkaufen"
            className="inline-flex items-center gap-2 bg-white text-brand-anthrazit font-semibold rounded-xl px-7 py-3.5 hover:bg-gray-50 transition-colors whitespace-nowrap shrink-0"
          >
            Immobilienbewertung starten →
          </Link>
        </div>
      </section>

      <Footer variant="makler" />
    </main>
  )
}
