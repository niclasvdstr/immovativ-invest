'use client'

import { useState } from 'react'
import ThankYouModal from './ThankYouModal'

export default function KontaktFormClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    availability: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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
        body: JSON.stringify({ formType: 'kontakt', ...formData }),
      })
      if (!res.ok) throw new Error()
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Telefon *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+49 151 000 000"
            className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">E-Mail *</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="ihre@email.de"
          className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Wann bist du erreichbar?</label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm bg-white appearance-none"
        >
          <option value="">Bitte auswählen</option>
          <option>Morgens (8–12 Uhr)</option>
          <option>Mittags (12–14 Uhr)</option>
          <option>Nachmittags (14–18 Uhr)</option>
          <option>Abends (18–20 Uhr)</option>
          <option>Jederzeit</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-brand-anthrazit mb-1.5 uppercase tracking-wide">Nachricht (optional)</label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Was sind deine Erwartungen an den Verkauf?"
          className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all text-sm resize-none"
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Fehler beim Senden. Bitte ruf uns an: <strong>0151 29686979</strong>
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-gradient text-white font-semibold rounded-xl px-6 py-4 text-sm transition-colors duration-200 mt-2 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Wird gesendet...
          </>
        ) : (
          'Jetzt kostenlos beraten lassen →'
        )}
      </button>
      <p className="text-xs text-brand-gray-warm text-center pt-1">
        Mit dem Absenden stimmst du unserer{' '}
        <a href="/datenschutz" className="text-brand-green hover:underline">Datenschutzerklärung</a> zu.
      </p>
    </form>
    </>
  )
}
