'use client'

import { useState } from 'react'
import ThankYouModal from './ThankYouModal'

const propertyTypes = ['Wohnung', 'Haus', 'Mehrfamilienhaus', 'Andere']

export default function TippgeberKontaktForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        body: JSON.stringify({ formType: 'tippgeber', ...formData }),
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Vorname</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Johannes"
            className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Nachname</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Müller"
            className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">E-Mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="beispiel@gmail.com"
          className="w-full border border-brand-gray-border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-anthrazit mb-1.5">Telefon</label>
        <div className="flex items-center border border-brand-gray-border rounded-xl overflow-hidden focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green transition-colors">
          <span className="px-3 py-3 text-lg border-r border-brand-gray-border bg-brand-gray-light">🇩🇪</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Gib deine Telefonnummer ein"
            className="flex-1 px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none bg-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-brand-anthrazit mb-3">Welcher Immobilientyp wird verkauft?</label>
        <div className="space-y-2.5">
          {propertyTypes.map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="propertyType"
                value={type}
                checked={formData.propertyType === type}
                onChange={() => setFormData(prev => ({ ...prev, propertyType: type }))}
                className="w-4 h-4 accent-brand-green cursor-pointer"
              />
              <span className="text-sm text-brand-anthrazit">{type}</span>
            </label>
          ))}
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          Fehler beim Senden. Bitte ruf uns an: <strong>0151 29686979</strong>
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-gradient text-white font-semibold rounded-xl px-6 py-4 text-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
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
          <>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tippgeber-Provision sichern →
          </>
        )}
      </button>
    </form>
    </>
  )
}
