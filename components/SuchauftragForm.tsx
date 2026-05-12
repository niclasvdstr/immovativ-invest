'use client'

import { useState } from 'react'
import ThankYouModal from './ThankYouModal'

export default function SuchauftragForm() {
  const [formData, setFormData] = useState({
    budget: '',
    objektart: '',
    kaufzweck: '',
    eigentuemer: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({ formType: 'suchauftrag', ...formData }),
      })
      if (!res.ok) throw new Error()
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
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all appearance-none"
          >
            <option value="">Bitte auswählen</option>
            <option>Bis 200.000 €</option>
            <option>200.000 – 350.000 €</option>
            <option>350.000 – 500.000 €</option>
            <option>500.000 – 750.000 €</option>
            <option>750.000 – 1.000.000 €</option>
            <option>Über 1.000.000 €</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Objektart</label>
          <div className="grid grid-cols-2 gap-2">
            {['Wohnung', 'Haus', 'Mehrfamilienhaus', 'Egal'].map((type) => (
              <label key={type} className={`flex items-center gap-1.5 cursor-pointer border rounded-xl px-2.5 py-2.5 transition-colors ${formData.objektart === type ? 'border-brand-green bg-brand-green-50' : 'border-brand-gray-border hover:border-brand-green'}`}>
                <input type="radio" name="objektart" value={type} checked={formData.objektart === type} onChange={handleChange} className="accent-brand-green shrink-0" />
                <span className="text-xs sm:text-sm text-brand-anthrazit leading-tight">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Was suchst du?</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { value: 'Fix & Flip', label: 'Fix & Flip', desc: 'Sanieren & verkaufen' },
              { value: 'Kapitalanlage', label: 'Kapitalanlage', desc: 'Kaufen & vermieten' },
              { value: 'Eigenbezug', label: 'Eigenbezug', desc: 'Selbst einziehen' },
            ].map((opt) => (
              <label key={opt.value} className={`flex flex-col gap-0.5 cursor-pointer border rounded-xl px-4 py-3 transition-colors ${formData.kaufzweck === opt.value ? 'border-brand-green bg-brand-green-50' : 'border-brand-gray-border hover:border-brand-green'}`}>
                <div className="flex items-center gap-2">
                  <input type="radio" name="kaufzweck" value={opt.value} checked={formData.kaufzweck === opt.value} onChange={handleChange} className="accent-brand-green" />
                  <span className="text-sm font-semibold text-brand-anthrazit">{opt.label}</span>
                </div>
                <span className="text-xs text-brand-gray-warm pl-5">{opt.desc}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Bist du schon Eigentümer/in?</label>
          <div className="flex gap-3">
            {['Ja', 'Nein'].map((opt) => (
              <label key={opt} className={`flex items-center gap-2 cursor-pointer border rounded-xl px-5 py-3 transition-colors flex-1 justify-center ${formData.eigentuemer === opt ? 'border-brand-green bg-brand-green-50' : 'border-brand-gray-border hover:border-brand-green'}`}>
                <input type="radio" name="eigentuemer" value={opt} checked={formData.eigentuemer === opt} onChange={handleChange} className="accent-brand-green" />
                <span className="text-sm text-brand-anthrazit font-medium">{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Name *</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Max Mustermann" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Telefon *</label>
            <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+49 151 000 000" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">E-Mail *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ihre@email.de" className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brand-anthrazit mb-2 uppercase tracking-wide">Nachricht (optional)</label>
          <textarea rows={3} name="message" value={formData.message} onChange={handleChange} placeholder="Weitere Wünsche oder Anmerkungen..." className="w-full px-4 py-3 border border-brand-gray-border rounded-xl text-brand-anthrazit placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none" />
        </div>

        {error && (
          <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            Fehler beim Senden. Bitte ruf uns an: <strong>0151 29686979</strong>
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-gradient text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
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
            'Suchauftrag absenden →'
          )}
        </button>
        <p className="text-xs text-brand-gray-warm text-center">
          Kostenlos & unverbindlich. Keine versteckten Kosten.
        </p>
      </form>
    </>
  )
}
