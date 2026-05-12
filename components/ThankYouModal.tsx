'use client'

import { useEffect } from 'react'

interface ThankYouModalProps {
  onClose: () => void
}

export default function ThankYouModal({ onClose }: ThankYouModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl p-8 sm:p-12 max-w-md w-full text-center shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Checkmark */}
        <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Titel */}
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-anthrazit mb-3">
          Vielen Dank für dein Vertrauen!
        </h2>

        {/* Text */}
        <p className="text-brand-gray-warm leading-relaxed mb-2">
          Wir haben deine Anfrage erhalten und melden uns <strong className="text-brand-anthrazit">innerhalb von 24 Stunden</strong> persönlich bei dir.
        </p>
        <p className="text-brand-gray-warm text-sm leading-relaxed mb-8">
          Dein Anliegen ist bei uns in guten Händen. 🤝
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full btn-gradient text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors"
        >
          Alles klar, danke! →
        </button>

        {/* Niclas & Mazlum */}
        <p className="text-xs text-brand-gray-warm mt-4">
          Niclas & Mazlum · immovativ<strong>Invest</strong>
        </p>
      </div>
    </div>
  )
}
