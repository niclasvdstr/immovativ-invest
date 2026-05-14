import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  variant?: 'ankauf' | 'makler' | 'landing'
}

export default function Footer({ variant = 'landing' }: FooterProps) {
  const navLinks = variant === 'ankauf'
    ? [
        { label: 'Vorteile', href: '#vorteile' },
        { label: "So funktioniert's", href: '#prozess' },
        { label: 'Ankaufsprofil', href: '#immobilien' },
        { label: 'Bewertungen', href: '#bewertungen' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Kontakt', href: '#kontakt' },
      ]
    : [
        { label: 'Start', href: '/' },
        { label: 'Immobilienbewertung', href: '/immobilienbewertung' },
        { label: 'Verkaufen', href: '/verkaufen' },
        { label: 'Leistungen', href: '/service' },
        { label: 'Über uns', href: '/ueber-uns' },
        { label: 'Blog', href: '/blog' },
        { label: 'Referenzen', href: '/referenzen' },
      ]

  return (
    <footer className="text-white" style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1e3a8a 50%, #0f2027 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">

        {/* Brand – zentriert oben */}
        <div className="flex flex-col items-start text-left mb-8 md:hidden">
          <Image src="/logo-banner-white.svg" alt="immovativInvest Logo" width={180} height={36} className="h-8 w-auto mb-4" />
          <p className="text-white/75 text-sm leading-relaxed mb-4">
            Wir verkaufen deine Immobilie zum bestmöglichen Preis – persönlich, diskret und ohne unnötige Wartezeiten.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4" style={{ color: '#ffa61c' }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/55 text-xs">4,9 / 5 · 100+ Bewertungen</span>
          </div>
        </div>

        {/* Trennlinie Mobile */}
        <div className="border-t border-white/10 mb-8 md:hidden" />

        {/* Desktop: 3-Spalten │ Mobile: 1-Spalte gestapelt */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-10">

          {/* Brand – Desktop */}
          <div className="flex flex-col items-start text-left">
            <Image src="/logo-banner-white.svg" alt="immovativInvest Logo" width={180} height={36} className="h-8 w-auto mb-4" />
            <p className="text-white/75 text-sm leading-relaxed max-w-[260px] mb-5">
              Wir verkaufen deine Immobilie zum bestmöglichen Preis – persönlich, diskret und ohne unnötige Wartezeiten.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5" style={{ color: '#ffa61c' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/55 text-xs">4,9 / 5 · 100+ Bewertungen</span>
            </div>
          </div>

          {/* Seiten – Desktop */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Seiten</h3>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/75 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt – Desktop */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+4915129686979" className="flex items-center gap-2.5 text-white/75 hover:text-white text-sm transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  +49 151 296 869 79
                </a>
              </li>
              <li>
                <a href="mailto:info@immovativ-invest.de" className="flex items-center gap-2.5 text-white/75 hover:text-white text-sm transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  info@immovativ-invest.de
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/75 text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                Frankfurt & Rhein-Main-Gebiet
              </li>
            </ul>
          </div>

        </div>

        {/* ── Mobile: Seiten oben, Kontakt darunter ── */}
        <div className="md:hidden space-y-8">

          {/* Seiten */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Seiten</h3>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/75 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+4915129686979" className="flex items-center gap-2.5 text-white/75 hover:text-white text-sm transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  +49 151 296 869 79
                </a>
              </li>
              <li>
                <a href="mailto:info@immovativ-invest.de" className="flex items-center gap-2.5 text-white/75 hover:text-white text-sm transition-colors">
                  <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  info@immovativ-invest.de
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/75 text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                Frankfurt & Rhein-Main-Gebiet
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col items-center md:flex-row md:justify-between gap-3 text-center md:text-left">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} immovativ<span className="font-black text-white/40">Invest</span> · Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/impressum" className="text-white/40 hover:text-white text-xs transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-white/40 hover:text-white text-xs transition-colors">Datenschutz</Link>
            <Link href="/agb" className="text-white/40 hover:text-white text-xs transition-colors">AGB</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
