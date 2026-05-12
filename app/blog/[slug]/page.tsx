/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { articles, getArticleBySlug } from '@/lib/blog-articles'
import FAQ from '@/components/FAQ'
import { sharedFaqItems } from '@/lib/faq-items'
import CTAButton from '@/components/CTAButton'
import TippgeberSection from '@/components/TippgeberSection'

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | immovativInvest Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.immovativ-invest.de/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://www.immovativ-invest.de/blog/${article.slug}`,
      type: 'article',
      locale: 'de_DE',
      siteName: 'immovativInvest',
      images: [
        {
          url: article.img.startsWith('http') ? article.img : `https://www.immovativ-invest.de${article.img}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  }
}

const categoryLinks: Record<string, { href: string; label: string; desc: string }[]> = {
  'Spezialfälle': [
    { href: '/erbschaft', label: 'Erbschaftsimmobilie verkaufen', desc: 'Einfühlsame Begleitung beim Verkauf von Erbimmobilien' },
    { href: '/scheidung', label: 'Scheidungsimmobilie verkaufen', desc: 'Diskret und professionell – auch bei schwierigen Situationen' },
    { href: '/ankauf', label: 'Direktankauf anfragen', desc: 'Schnell, provisionsfrei und ohne Stress verkaufen' },
    { href: '/zwangsversteigerungen', label: 'Zwangsversteigerungen', desc: 'Professionelle Begleitung bei Zwangsversteigerungen' },
  ],
  'Finanzierung': [
    { href: '/finanzierung', label: 'Finanzierungsberatung', desc: 'Kostenlose Finanzierungsberatung für Käufer & Verkäufer' },
    { href: '/verkaufen', label: 'Immobilie verkaufen', desc: 'Jetzt kostenlose Bewertung anfragen' },
  ],
  'Bewertung': [
    { href: '/immobilienbewertung', label: 'Kostenlose Immobilienbewertung', desc: 'Erfahre den Marktwert deiner Immobilie – persönlich vor Ort, kostenlos & unverbindlich' },
    { href: '/immobilienmakler', label: 'Immobilienmakler Frankfurt', desc: 'Dein Partner für den erfolgreichen Immobilienverkauf' },
    { href: '/ankauf', label: 'Direktankauf anfragen', desc: 'Schnell und provisionsfrei – Angebot in 21 Tagen' },
  ],
  'Recht & Steuern': [
    { href: '/beratung', label: 'Immobilienberatung', desc: 'Persönliche Beratung zu Rechtsfragen rund um Immobilien' },
    { href: '/verkaufen', label: 'Immobilie verkaufen', desc: 'Mit Experten steueroptimiert verkaufen' },
  ],
  'Verkaufen': [
    { href: '/immobilienmakler', label: 'Immobilienmakler Frankfurt', desc: 'Professioneller Verkauf zum bestmöglichen Preis' },
    { href: '/verkaufen', label: 'Kostenlose Bewertung starten', desc: 'In 2 Minuten zur kostenlosen Immobilienbewertung' },
  ],
  'Markt': [
    { href: '/immobilienmakler', label: 'Immobilienmakler Frankfurt', desc: 'Aktuelle Marktkenntnis für deinen erfolgreichen Verkauf' },
    { href: '/immobilienbewertung', label: 'Kostenlose Immobilienbewertung', desc: 'Erfahre den aktuellen Marktwert deiner Immobilie – persönlich vor Ort' },
    { href: '/ankauf', label: 'Direktankauf anfragen', desc: 'Schnell und provisionsfrei verkaufen' },
  ],
  'Prozess': [
    { href: '/service', label: 'Unsere Leistungen', desc: 'Alle Leistungen von immovativInvest auf einen Blick' },
    { href: '/immobilienmakler', label: 'Immobilienmakler Frankfurt', desc: 'So begleiten wir dich durch den gesamten Verkaufsprozess' },
  ],
}

const navItems = [
  { label: 'Immobilienmakler', href: '/immobilienmakler' },
  { label: 'Verkaufen', href: '/verkaufen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

interface Section {
  heading: string | null
  id: string
  lines: string[]
}

function parseIntoSections(content: string): Section[] {
  const lines = content.trim().split('\n')
  const sections: Section[] = []
  let current: Section = { heading: null, id: 'intro', lines: [] }

  for (const line of lines) {
    if (line.trim().startsWith('## ')) {
      if (current.lines.some(l => l.trim())) sections.push(current)
      const heading = line.trim().replace('## ', '')
      const id = heading.toLowerCase().replace(/[^a-z0-9äöüß]+/g, '-').replace(/^-|-$/g, '')
      current = { heading, id, lines: [] }
    } else {
      current.lines.push(line)
    }
  }
  if (current.lines.some(l => l.trim()) || current.heading) sections.push(current)
  return sections
}

function renderBody(lines: string[]) {
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()
    if (!line) { i++; continue }

    // Table
    if (line.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }
      const rows = tableLines.filter(l => !l.match(/^\|[-:\s|]+\|$/))
      if (rows.length > 0) {
        const headers = rows[0].split('|').filter(Boolean).map(c => c.trim())
        const bodyRows = rows.slice(1)
        elements.push(
          <div key={`t${i}`} className="my-6 overflow-x-auto rounded-2xl border border-brand-gray-border">
            <table className="w-full text-sm min-w-[360px]">
              <thead>
                <tr className="bg-brand-anthrazit">
                  {headers.map((cell, j) => (
                    <th key={j} className="px-5 py-3 text-left text-white font-semibold text-xs uppercase tracking-wide">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => (
                  <tr key={ri} className={`border-t border-brand-gray-border ${ri % 2 === 0 ? 'bg-white' : 'bg-brand-gray-light/60'}`}>
                    {row.split('|').filter(Boolean).map((cell, j) => (
                      <td key={j}
                        className={`px-5 py-3 leading-relaxed ${j === 0 ? 'font-semibold text-brand-anthrazit' : 'text-brand-gray-warm'}`}
                        dangerouslySetInnerHTML={{ __html: cell.trim().replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-anthrazit font-semibold">$1</strong>') }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    }

    // List
    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2))
        i++
      }
      elements.push(
        <ul key={`ul${i}`} className="space-y-3 my-5">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-brand-gray-warm leading-relaxed text-[15px]"
                dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-anthrazit font-semibold">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Bold subheading
    if (line.startsWith('**') && line.endsWith('**') && line.length > 4 && !line.slice(2, -2).includes('**')) {
      elements.push(
        <h3 key={i} className="font-bold text-brand-anthrazit text-base mt-6 mb-2">
          {line.slice(2, -2)}
        </h3>
      )
      i++
      continue
    }

    // Paragraph
    elements.push(
      <p key={i} className="text-brand-gray-warm leading-[1.85] text-[15px] my-3"
        dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-anthrazit font-semibold">$1</strong>') }}
      />
    )
    i++
  }
  return elements
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = articles.filter(a => a.slug !== article.slug && a.category === article.category).slice(0, 2)
  const sections = parseIntoSections(article.content)
  const headingSections = sections.filter(s => s.heading)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: `https://www.immovativ-invest.de/blog/${article.slug}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: 'Niclas van der Straeten',
      url: 'https://www.immovativ-invest.de/ueber-uns',
    },
    publisher: {
      '@type': 'Organization',
      name: 'immovativInvest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.immovativ-invest.de/logo-new.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.immovativ-invest.de/blog/${article.slug}`,
    },
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.img.startsWith('http') ? article.img : `https://www.immovativ-invest.de${article.img}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
      jobTitle: article.authorRole,
      url: 'https://www.immovativ-invest.de/ueber-uns',
    },
    publisher: {
      '@type': 'Organization',
      name: 'immovativInvest',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.immovativ-invest.de/logo-new.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.immovativ-invest.de/blog/${article.slug}`,
    },
    url: `https://www.immovativ-invest.de/blog/${article.slug}`,
    inLanguage: 'de-DE',
    about: {
      '@type': 'Thing',
      name: article.category,
    },
  }

  return (
    <main className="min-h-screen bg-brand-gray-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Header ctaLabel="Kostenlose Immobilienbewertung" ctaHref="/verkaufen" />

      {/* Hero */}
      <div className="relative h-64 md:h-[380px] w-full">
        <Image src={article.img} alt={article.title} className="w-full h-full object-cover" fill priority />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-anthrazit/85 via-brand-anthrazit/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-6xl mx-auto w-full px-4 md:px-8 pb-8 md:pb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${article.badgeColor}`}>{article.badge}</span>
              <span className="text-xs text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">{article.category}</span>
              <span className="text-xs text-white/60">{article.readTime} Lesezeit</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight max-w-3xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Author bar */}
      <div className="bg-white border-b border-brand-gray-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={article.authorImg} alt={article.author}
              className="w-10 h-10 rounded-full object-cover border-2 border-brand-gray-border shrink-0"
              style={{ objectPosition: 'center 15%' }} width={40} height={40} />
            <div>
              <div className="text-sm font-semibold text-brand-anthrazit">{article.author}</div>
              <div className="text-xs text-brand-gray-warm">{article.date}</div>
            </div>
          </div>
          <a href="/blog" className="hidden md:inline-flex items-center gap-2 text-brand-green text-sm font-semibold hover:underline shrink-0">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zum Blog
          </a>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-brand-gray-border">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-brand-gray-warm">
            <li><a href="/" className="hover:text-brand-green transition-colors">Start</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li><a href="/blog" className="hover:text-brand-green transition-colors">Blog</a></li>
            <li><span className="text-gray-300">›</span></li>
            <li className="text-brand-anthrazit font-medium truncate max-w-[200px]">{article.title}</li>
          </ol>
        </div>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Start', item: 'https://www.immovativ-invest.de' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.immovativ-invest.de/blog' },
              { '@type': 'ListItem', position: 3, name: article.title, item: `https://www.immovativ-invest.de/blog/${article.slug}` },
            ],
          }),
        }}
      />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-start">

          {/* Article content */}
          <div className="space-y-5">

            {/* Intro (before first heading) */}
            {sections[0]?.heading === null && (
              <div className="bg-white rounded-3xl border border-brand-gray-border shadow-soft p-8">
                <div className="border-l-4 border-brand-green pl-5">
                  {renderBody(sections[0].lines)}
                </div>
              </div>
            )}

            {/* Section cards */}
            {headingSections.map((section, idx) => (
              <div key={section.id} id={section.id}
                className="bg-white rounded-3xl border border-brand-gray-border shadow-soft overflow-hidden scroll-mt-20">
                {/* Card header */}
                <div className="flex items-center gap-4 px-8 py-5 border-b border-brand-gray-border bg-brand-gray-light/50">
                  <div className="w-8 h-8 rounded-full bg-brand-green text-white text-xs font-bold flex items-center justify-center shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-brand-anthrazit leading-snug">
                    {section.heading}
                  </h2>
                </div>
                {/* Card body */}
                <div className="px-8 py-7">
                  {renderBody(section.lines)}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-brand-anthrazit rounded-3xl p-8 md:p-10 text-center">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/20 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Hast du Fragen zu deiner Immobilie?</h3>
              <p className="text-gray-400 text-sm mb-7 max-w-md mx-auto">Wir beraten dich kostenlos und unverbindlich – persönlich vor Ort im Rhein-Main-Gebiet.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <CTAButton href="/verkaufen" variant="primary" size="md">
                  Immobilienbewertung starten →
                </CTAButton>
                <a href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl px-7 py-4 text-sm transition-colors border border-white/15">
                  Kontakt aufnehmen
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">

              {/* TOC */}
              {headingSections.length > 0 && (
                <div className="bg-white rounded-3xl border border-brand-gray-border shadow-soft p-6">
                  <p className="text-xs font-bold text-brand-anthrazit uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-brand-green rounded-full inline-block" />
                    In diesem Artikel
                  </p>
                  <nav className="space-y-1">
                    {headingSections.map((s, idx) => (
                      <a key={idx} href={`#${s.id}`}
                        className="flex items-center gap-3 py-2 px-2 rounded-xl text-sm text-brand-gray-warm hover:text-brand-green hover:bg-brand-green/5 transition-all group">
                        <span className="w-6 h-6 rounded-full bg-brand-gray-light text-brand-anthrazit group-hover:bg-brand-green group-hover:text-white text-[11px] font-bold flex items-center justify-center shrink-0 transition-colors">
                          {idx + 1}
                        </span>
                        <span className="leading-snug line-clamp-2 text-xs">{s.heading}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Contact */}
              <div className="bg-brand-anthrazit rounded-3xl p-6 text-center">
                <Image src={article.authorImg} alt={article.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20 mx-auto mb-4"
                  style={{ objectPosition: 'center 15%' }} width={64} height={64} />
                <p className="text-white font-bold text-sm mb-1">{article.author}</p>
                <p className="text-gray-400 text-xs mb-5">{article.authorRole}</p>
                <CTAButton href="/verkaufen" variant="primary" size="sm">
                  Immobilienbewertung starten →
                </CTAButton>
              </div>

              {/* Article info */}
              <div className="bg-white rounded-3xl border border-brand-gray-border shadow-soft p-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-brand-gray-warm">
                  <div className="w-8 h-8 rounded-xl bg-brand-gray-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-brand-anthrazit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-warm">Lesezeit</div>
                    <div className="font-semibold text-brand-anthrazit text-sm">{article.readTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-gray-warm">
                  <div className="w-8 h-8 rounded-xl bg-brand-gray-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-brand-anthrazit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-warm">Kategorie</div>
                    <div className="font-semibold text-brand-anthrazit text-sm">{article.category}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-gray-warm">
                  <div className="w-8 h-8 rounded-xl bg-brand-gray-light flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-brand-anthrazit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-warm">Veröffentlicht</div>
                    <div className="font-semibold text-brand-anthrazit text-sm">{article.date}</div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      {/* Interne Verlinkung */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {(() => {
          const links = categoryLinks[article.category] ?? categoryLinks['Verkaufen']
          return (
            <div className="mt-16 pt-10 border-t border-brand-gray-border">
              <h3 className="text-xl font-bold text-brand-anthrazit mb-6">Das könnte dich auch interessieren</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {links.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-start gap-4 p-5 bg-brand-gray-light rounded-2xl border border-brand-gray-border hover:border-brand-green hover:bg-brand-green-50 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-xl bg-white border border-brand-gray-border flex items-center justify-center shrink-0 group-hover:border-brand-green transition-colors">
                      <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-anthrazit text-sm group-hover:text-brand-green transition-colors">{link.label}</div>
                      <div className="text-brand-gray-warm text-xs mt-0.5">{link.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )
        })()}
      </div>

      <TippgeberSection />

      <FAQ items={sharedFaqItems} />

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 px-4 md:px-8 bg-white border-t border-brand-gray-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-anthrazit mb-2">Weitere Artikel zum Thema</h2>
            <p className="text-brand-gray-warm text-sm mb-8">Mehr Wissen rund um {article.category}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(rel => (
                <a key={rel.slug} href={`/blog/${rel.slug}`}
                  className="group bg-white border border-brand-gray-border rounded-3xl overflow-hidden hover:shadow-medium hover:border-brand-green/20 transition-all duration-300 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={rel.img} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fill />
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${rel.badgeColor}`}>{rel.badge}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-xs text-brand-green font-semibold mb-2">{rel.category}</p>
                    <h3 className="font-bold text-brand-anthrazit leading-snug group-hover:text-brand-green transition-colors mb-auto">{rel.title}</h3>
                    <p className="text-xs text-brand-gray-warm mt-4">{rel.date} · {rel.readTime}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer variant="makler" />
    </main>
  )
}
