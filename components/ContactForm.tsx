'use client'

import { useState } from 'react'
import CTAButton from './CTAButton'
import ThankYouModal from './ThankYouModal'

interface ContactFormProps {
  variant?: 'ankauf' | 'makler'
  title?: string
  subtitle?: string
}

export default function ContactForm({
  variant = 'ankauf',
  title = 'Jetzt unverbindlich anfragen',
  subtitle = 'Wir melden uns innerhalb von 24 Stunden bei dir.',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    livingArea: '',
    plotArea: '',
    zip: '',
    city: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: variant, ...formData }),
      })
      if (!res.ok) throw new Error('Fehler')
      setSubmitted(true)
      setShowModal(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
    {showModal && <ThankYouModal onClose={() => setShowModal(false)} />}
    <section id="kontakt" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">{title}</h2>
            <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg mb-8">{subtitle}</p>

            <ul className="space-y-4">
              {[
                { icon: '⚡', text: 'Rückmeldung innerhalb von 24 Stunden' },
                { icon: '🔒', text: 'Diskret und 100% kostenlos' },
                { icon: '🤝', text: 'Keine Verpflichtung, nur ein Gespräch' },
                { icon: '📍', text: 'Persönliche Betreuung vor Ort' },
              ].map(item => (
                <li key={item.text} className="flex items-center gap-2.5">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-brand-anthrazit font-medium text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Trust badge */}
            <div className="mt-10 bg-white rounded-2xl p-5 border border-brand-gray-border shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-brand-anthrazit text-sm">4,9 von 5 Sternen</span>
              </div>
              <p className="text-brand-gray-warm text-sm italic">
                &ldquo;Professionell, schnell und absolut vertrauenswürdig. So stellt man sich einen Immobilienpartner vor.&rdquo;
              </p>
              <p className="text-xs text-brand-gray-warm mt-2 font-medium">— Markus R., München</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-medium border border-brand-gray-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              {variant === 'ankauf' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Vorname *</label>
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="Max" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Nachname *</label>
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} placeholder="Mustermann" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Telefon *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+49 151 000 000" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">E-Mail *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="deine@email.de" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Objektart</label>
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all appearance-none">
                      <option value="">Bitte auswählen</option>
                      <option>Einfamilienhaus</option>
                      <option>Mehrfamilienhaus</option>
                      <option>Eigentumswohnung</option>
                      <option>Grundstück</option>
                      <option>Gewerbeimmobilie</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Wohnfläche (m²)</label>
                      <input type="number" name="livingArea" value={formData.livingArea} onChange={handleChange} placeholder="z.B. 120" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide whitespace-nowrap">Grundstück (m²)</label>
                      <input type="number" name="plotArea" value={formData.plotArea} onChange={handleChange} placeholder="z.B. 500" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">PLZ</label>
                      <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="60311" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Ort</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Frankfurt am Main" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-anthrazit mb-1.5">Dein Name *</label>
                      <input type="text" id="name" name="firstName" required value={formData.firstName} onChange={handleChange} placeholder="Max Mustermann" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-brand-anthrazit mb-1.5">Telefon *</label>
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+49 89 000 000" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-anthrazit mb-1.5">E-Mail-Adresse *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="deine@email.de" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-anthrazit mb-1.5">Wann bist du erreichbar?</label>
                    <select className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm bg-white appearance-none">
                      <option value="">Bitte auswählen</option>
                      <option>Morgens (8–12 Uhr)</option>
                      <option>Mittags (12–14 Uhr)</option>
                      <option>Nachmittags (14–18 Uhr)</option>
                      <option>Abends (18–20 Uhr)</option>
                      <option>Jederzeit</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-anthrazit mb-1.5">Deine Nachricht (optional)</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Was sind deine Erwartungen an den Verkauf?" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm resize-none" />
                  </div>
                </>
              )}

              {error && (
                <p className="text-red-500 text-sm text-center bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  Leider ist ein Fehler aufgetreten. Bitte ruf uns direkt an: <strong>0151 29686979</strong>
                </p>
              )}
              <CTAButton
                size="lg"
                fullWidth
                type="submit"
                className={loading ? 'opacity-75 cursor-not-allowed' : ''}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  variant === 'ankauf' ? 'Jetzt Angebot anfragen →' : 'Jetzt kostenlos beraten lassen →'
                )}
              </CTAButton>

              <p className="text-xs text-brand-gray-warm text-center">
                Mit dem Absenden stimmst du unserer{' '}
                <a href="/datenschutz" className="text-brand-green hover:underline">Datenschutzerklärung</a> zu.
                Keine Weitergabe deiner Daten an Dritte.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
