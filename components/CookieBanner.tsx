'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

const GA_ID = 'G-Z9VKLBRWHE'

export default function CookieBanner() {
  const [consent, setConsent] = useState<boolean | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent')
    if (stored === null) {
      setVisible(true)
    } else {
      setConsent(stored === 'true')
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setConsent(true)
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'false')
    setConsent(false)
    setVisible(false)
  }

  return (
    <>
      {/* Google Analytics – nur bei Zustimmung */}
      {consent === true && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Cookie-Banner */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl" style={{ background: '#1a1a2e' }}>
          <div className="max-w-5xl mx-auto px-4 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-white text-sm font-semibold mb-1">🍪 Wir verwenden Cookies</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Wir nutzen Google Analytics, um zu verstehen wie Besucher unsere Website nutzen.
                Die Daten werden anonymisiert verarbeitet. Mehr dazu in unserer{' '}
                <a href="/datenschutz" className="underline text-blue-400 hover:text-blue-300">Datenschutzerklärung</a>.
              </p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-xs font-semibold text-gray-400 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-white transition-colors"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-xs font-semibold text-white rounded-lg transition-colors"
                style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
