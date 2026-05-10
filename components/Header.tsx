'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface NavChild {
  label: string
  href: string
}

interface NavItem {
  label: string
  href?: string
  children?: NavChild[]
}

interface HeaderProps {
  navItems?: NavItem[]
  ctaLabel?: string
  ctaHref?: string
}

const NAV: NavItem[] = [
  { label: 'Immobilienmakler', href: '/immobilienmakler' },
  { label: 'Verkaufen', href: '/verkaufen' },
  {
    label: 'Leistungen',
    children: [
      { label: 'Leistungen', href: '/service' },
      { label: 'Immobilienangebote', href: '/immobilienangebote' },
      { label: 'Finanzierung', href: '/finanzierung' },
      { label: 'Beratung', href: '/beratung' },
      { label: 'Erbschaft', href: '/erbschaft' },
      { label: 'Zwangsversteigerungen', href: '/zwangsversteigerungen' },
      { label: 'Scheidung', href: '/scheidung' },
    ],
  },
  {
    label: 'Über uns',
    children: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Kontakt', href: '/kontakt' },
      { label: 'Karriere', href: '/karriere' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Referenzen', href: '/referenzen' },
]

export default function Header({
  navItems,
  ctaLabel = 'Kostenlose Immobilienbewertung',
  ctaHref = '#kontakt',
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const activeNav = navItems ?? NAV

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('#')) return false
    return pathname.startsWith(href)
  }

  const isGroupActive = (item: NavItem) => {
    if (item.href) return isActive(item.href)
    if (item.children) return item.children.some(c => isActive(c.href))
    return false
  }

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-brand-gray-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-18 md:h-20 gap-8">

          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center" aria-label="immovativInvest Startseite">
            <Image
              src="/logo-new.png"
              alt="immovativInvest Logo"
              width={160}
              height={32}
              className="h-7 md:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center" aria-label="Hauptnavigation">
            {activeNav.map((item) => {
              const active = isGroupActive(item)

              if (item.children) {
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className={`
                        relative flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap
                        ${active
                          ? 'text-brand-anthrazit bg-brand-gray-light'
                          : 'text-brand-gray-warm hover:text-brand-anthrazit hover:bg-brand-gray-light/70'
                        }
                      `}
                    >
                      {item.label}
                      <svg className="w-3.5 h-3.5 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-green rounded-full" />
                      )}
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-2xl shadow-large border border-brand-gray-border py-2 min-w-[180px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`
                              flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors
                              ${isActive(child.href)
                                ? 'text-brand-anthrazit bg-brand-gray-light'
                                : 'text-brand-gray-warm hover:text-brand-anthrazit hover:bg-brand-gray-light/60'
                              }
                            `}
                          >
                            {isActive(child.href) && <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`
                    relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200
                    ${active
                      ? 'text-brand-anthrazit bg-brand-gray-light'
                      : 'text-brand-gray-warm hover:text-brand-anthrazit hover:bg-brand-gray-light/70'
                    }
                  `}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-green rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-1.5 text-white text-sm font-semibold rounded-xl px-5 py-2.5 shadow-green hover:brightness-110 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Immobilienbewertung starten →
            </Link>
          </div>

          {/* Mobile: CTA klein + Burger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href={ctaHref}
              className="whitespace-nowrap inline-flex items-center text-white font-semibold rounded-xl px-3 py-2 text-xs shadow-green hover:brightness-110 transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
            >
              Gratis Bewertung
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-brand-anthrazit hover:bg-brand-gray-light transition-colors"
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isMenuOpen ? '600px' : '0' }}
      >
        <div className="border-t border-brand-gray-border bg-white px-4 py-4 space-y-1">
          {activeNav.map((item) => {
            const active = isGroupActive(item)

            if (item.children) {
              const isOpen = openMobileDropdown === item.label
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setOpenMobileDropdown(isOpen ? null : item.label)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${active ? 'text-brand-anthrazit bg-brand-gray-light' : 'text-brand-gray-warm hover:text-brand-anthrazit hover:bg-brand-gray-light/60'}
                    `}
                  >
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`
                            flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
                            ${isActive(child.href) ? 'text-brand-anthrazit bg-brand-gray-light' : 'text-brand-gray-warm hover:text-brand-anthrazit hover:bg-brand-gray-light/60'}
                          `}
                          onClick={() => { setIsMenuOpen(false); setOpenMobileDropdown(null) }}
                        >
                          {isActive(child.href) && <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />}
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${active ? 'text-brand-anthrazit bg-brand-gray-light' : 'text-brand-gray-warm hover:text-brand-anthrazit hover:bg-brand-gray-light/60'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {active && <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />}
                {item.label}
              </Link>
            )
          })}

          <div className="pt-3 pb-1">
            <Link
              href={ctaHref}
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-white font-semibold rounded-xl px-5 py-3 text-sm shadow-green hover:brightness-110 transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Kostenlose Immobilienbewertung
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
