/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import type { Immobilienart } from '@/lib/wertermittlung'

interface FormState {
  immobilienart: Immobilienart | ''
  plz: string
  wohnort: string
  zimmer: number
  wohnflaeche: string
  grundstuecksflaeche: string
  name: string
  email: string
  telefon: string
  dsgvo: boolean
  honeypot: string
}

const PROPERTY_TYPES: { type: Immobilienart; icon: string; label: string }[] = [
  { type: 'Wohnung', icon: '🏢', label: 'Wohnung' },
  { type: 'Einfamilienhaus', icon: '🏠', label: 'Einfamilienhaus' },
  { type: 'Mehrfamilienhaus', icon: '🏘️', label: 'Mehrfamilienhaus' },
  { type: 'Reihenhaus', icon: '🏡', label: 'Reihenhaus' },
  { type: 'Doppelhaushälfte', icon: '🏚️', label: 'Doppelhaushälfte' },
  { type: 'Grundstück', icon: '🌿', label: 'Grundstück' },
]

const ROOM_OPTIONS = [1, 2, 3, 4, 5, 6]

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-gray-warm">
          Schritt {current} von {total}
        </span>
        <span className="text-xs text-brand-gray-warm">{Math.round((current / total) * 100)} %</span>
      </div>
      <div className="h-1.5 bg-brand-gray-border rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-green rounded-full transition-all duration-500 ease-out"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  )
}

function InputField({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-anthrazit mb-1.5">
        {label}
        {required && <span className="text-brand-green ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1.5">{error}</p>}
    </div>
  )
}

function TextInput({
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <input
      {...props}
      className={`w-full border rounded-xl px-4 py-3 text-sm text-brand-anthrazit placeholder-brand-gray-warm focus:outline-none focus:ring-2 transition-colors ${
        error
          ? 'border-red-400 focus:ring-red-200'
          : 'border-brand-gray-border focus:border-brand-green focus:ring-brand-green/20'
      }`}
    />
  )
}

export default function Wertrechner() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [form, setForm] = useState<FormState>({
    immobilienart: '',
    plz: '',
    wohnort: '',
    zimmer: 3,
    wohnflaeche: '',
    grundstuecksflaeche: '',
    name: '',
    email: '',
    telefon: '',
    dsgvo: false,
    honeypot: '',
  })

  const TOTAL_STEPS = 4
  const isLandOnly = form.immobilienart === 'Grundstück'
  const showLand = ['Einfamilienhaus', 'Mehrfamilienhaus', 'Reihenhaus', 'Doppelhaushälfte', 'Grundstück'].includes(
    form.immobilienart
  )

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(s: number): boolean {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (s === 1 && !form.immobilienart) {
      e.immobilienart = 'Bitte wählen Sie eine Immobilienart aus.'
    }
    if (s === 2) {
      if (!/^\d{5}$/.test(form.plz)) e.plz = 'Gültige PLZ eingeben (5 Ziffern).'
      if (!form.wohnort.trim()) e.wohnort = 'Bitte geben Sie Ihren Wohnort ein.'
    }
    if (s === 3) {
      if (!isLandOnly && (isNaN(Number(form.wohnflaeche)) || Number(form.wohnflaeche) < 10)) {
        e.wohnflaeche = 'Gültige Wohnfläche eingeben (min. 10 m²).'
      }
      if (showLand && (isNaN(Number(form.grundstuecksflaeche)) || Number(form.grundstuecksflaeche) < 1)) {
        e.grundstuecksflaeche = 'Bitte geben Sie die Grundstücksfläche ein.'
      }
    }
    if (s === 4) {
      if (!form.name.trim()) e.name = 'Bitte geben Sie Ihren Namen ein.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Gültige E-Mail-Adresse eingeben.'
      if (!form.dsgvo) e.dsgvo = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function next() {
    if (validate(step)) setStep((s) => s + 1)
  }

  async function submit() {
    if (!validate(4)) return
    if (form.honeypot) return // Spam-Schutz
    setLoading(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/wertermittlung', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStep(5)
      } else {
        setSubmitError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
      }
    } catch {
      setSubmitError('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    } finally {
      setLoading(false)
    }
  }

  // ── Success Screen ────────────────────────────────────────────
  if (step === 5) {
    return (
      <div className="bg-white rounded-2xl shadow-large border border-brand-gray-border p-10 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-brand-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-3">Wertermittlung wird erstellt!</h2>
        <p className="text-brand-gray-warm mb-8 max-w-sm mx-auto leading-relaxed">
          Vielen Dank, <strong className="text-brand-anthrazit">{form.name}</strong>! Ihre kostenlose Wertermittlung
          wurde erstellt und wird in Kürze an{' '}
          <strong className="text-brand-anthrazit">{form.email}</strong> gesendet.
        </p>

        <div className="bg-brand-gray-light rounded-2xl p-5 mb-8 text-left">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-gray-warm mb-3">
            Ihre Anfrage im Überblick
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-brand-gray-warm">Immobilienart:</span>{' '}
              <span className="font-semibold text-brand-anthrazit">{form.immobilienart}</span>
            </div>
            <div>
              <span className="text-brand-gray-warm">Ort:</span>{' '}
              <span className="font-semibold text-brand-anthrazit">
                {form.plz} {form.wohnort}
              </span>
            </div>
            {!isLandOnly && (
              <div>
                <span className="text-brand-gray-warm">Wohnfläche:</span>{' '}
                <span className="font-semibold text-brand-anthrazit">{form.wohnflaeche} m²</span>
              </div>
            )}
            {!isLandOnly && (
              <div>
                <span className="text-brand-gray-warm">Zimmer:</span>{' '}
                <span className="font-semibold text-brand-anthrazit">{form.zimmer === 6 ? '6+' : form.zimmer}</span>
              </div>
            )}
            {form.grundstuecksflaeche && (
              <div>
                <span className="text-brand-gray-warm">Grundstück:</span>{' '}
                <span className="font-semibold text-brand-anthrazit">{form.grundstuecksflaeche} m²</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center gap-2 btn-gradient text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors"
          >
            Persönliches Gespräch vereinbaren →
          </a>
          <a
            href="https://wa.me/4915129686979"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp schreiben
          </a>
        </div>

        <p className="text-xs text-brand-gray-warm mt-6">
          Unser Team meldet sich innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
      </div>
    )
  }

  // ── Wizard ────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-2xl shadow-large border border-brand-gray-border p-7 md:p-10 w-full">
      <ProgressBar current={step} total={TOTAL_STEPS} />

      {/* Step 1 – Immobilienart */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">
            Welche Art von Immobilie?
          </h2>
          <p className="text-brand-gray-warm text-sm mb-7">
            Wählen Sie die Art Ihrer Immobilie aus – die Auswahl beeinflusst die Berechnung.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {PROPERTY_TYPES.map(({ type, icon, label }) => (
              <button
                key={type}
                onClick={() => {
                  set('immobilienart', type)
                  setTimeout(next, 120)
                }}
                className={`flex flex-col items-center gap-2.5 p-5 rounded-2xl border-2 transition-all duration-200 hover:border-brand-green hover:shadow-soft text-center cursor-pointer ${
                  form.immobilienart === type
                    ? 'border-brand-green bg-brand-green-50'
                    : 'border-brand-gray-border bg-white'
                }`}
              >
                <span className="text-3xl">{icon}</span>
                <span
                  className={`font-semibold text-sm leading-tight ${
                    form.immobilienart === type ? 'text-brand-green' : 'text-brand-anthrazit'
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>
          {errors.immobilienart && (
            <p className="text-red-500 text-sm">{errors.immobilienart}</p>
          )}
        </div>
      )}

      {/* Step 2 – Lage */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">
            Wo liegt die Immobilie?
          </h2>
          <p className="text-brand-gray-warm text-sm mb-7">
            Die Lage ist der wichtigste Einflussfaktor auf den Immobilienwert.
          </p>
          <div className="space-y-5 mb-8">
            <InputField label="Postleitzahl" error={errors.plz} required>
              <TextInput
                type="text"
                inputMode="numeric"
                maxLength={5}
                placeholder="z. B. 60313"
                value={form.plz}
                onChange={(e) => set('plz', e.target.value.replace(/\D/g, ''))}
                error={errors.plz}
              />
            </InputField>
            <InputField label="Wohnort / Stadt" error={errors.wohnort} required>
              <TextInput
                type="text"
                placeholder="z. B. Frankfurt am Main"
                value={form.wohnort}
                onChange={(e) => set('wohnort', e.target.value)}
                error={errors.wohnort}
              />
            </InputField>
          </div>
        </div>
      )}

      {/* Step 3 – Details */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">
            Details zur Immobilie
          </h2>
          <p className="text-brand-gray-warm text-sm mb-7">
            Je genauer Ihre Angaben, desto präziser unsere Schätzung.
          </p>
          <div className="space-y-7 mb-8">
            {!isLandOnly && (
              <div>
                <label className="block text-sm font-semibold text-brand-anthrazit mb-3">
                  Zimmeranzahl <span className="text-brand-green">*</span>
                </label>
                <div className="flex gap-2 flex-wrap">
                  {ROOM_OPTIONS.map((n) => (
                    <button
                      key={n}
                      onClick={() => set('zimmer', n)}
                      className={`w-12 h-12 rounded-xl border-2 font-bold text-sm transition-all ${
                        form.zimmer === n
                          ? 'border-brand-green bg-brand-green text-white'
                          : 'border-brand-gray-border text-brand-anthrazit hover:border-brand-green'
                      }`}
                    >
                      {n === 6 ? '6+' : n}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!isLandOnly && (
              <InputField label="Wohnfläche in m²" error={errors.wohnflaeche} required>
                <TextInput
                  type="number"
                  inputMode="numeric"
                  min="10"
                  max="2000"
                  placeholder="z. B. 120"
                  value={form.wohnflaeche}
                  onChange={(e) => set('wohnflaeche', e.target.value)}
                  error={errors.wohnflaeche}
                />
              </InputField>
            )}

            {showLand && (
              <InputField
                label={isLandOnly ? 'Grundstücksfläche in m²' : 'Grundstücksfläche in m² (optional)'}
                error={errors.grundstuecksflaeche}
                required={isLandOnly}
              >
                <TextInput
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="100000"
                  placeholder="z. B. 500"
                  value={form.grundstuecksflaeche}
                  onChange={(e) => set('grundstuecksflaeche', e.target.value)}
                  error={errors.grundstuecksflaeche}
                />
              </InputField>
            )}
          </div>
        </div>
      )}

      {/* Step 4 – Kontakt */}
      {step === 4 && (
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-anthrazit mb-2">
            Wohin senden wir die Bewertung?
          </h2>
          <p className="text-brand-gray-warm text-sm mb-7">
            Sie erhalten Ihre unverbindliche Wertspanne kostenlos per E-Mail.
          </p>
          <div className="space-y-5 mb-6">
            {/* Honeypot – unsichtbar für Menschen, fängt Bots */}
            <input
              type="text"
              name="website"
              value={form.honeypot}
              onChange={(e) => set('honeypot', e.target.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
            />

            <InputField label="Ihr Name" error={errors.name} required>
              <TextInput
                type="text"
                autoComplete="name"
                placeholder="Max Mustermann"
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                error={errors.name}
              />
            </InputField>

            <InputField label="E-Mail-Adresse" error={errors.email} required>
              <TextInput
                type="email"
                autoComplete="email"
                placeholder="max@beispiel.de"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                error={errors.email}
              />
            </InputField>

            <InputField label="Telefonnummer" error={errors.telefon}>
              <TextInput
                type="tel"
                autoComplete="tel"
                placeholder="+49 151 12345678 (optional)"
                value={form.telefon}
                onChange={(e) => set('telefon', e.target.value)}
              />
            </InputField>

            {/* DSGVO Checkbox */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={form.dsgvo}
                    onChange={(e) => set('dsgvo', e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      form.dsgvo ? 'bg-brand-green border-brand-green' : 'border-brand-gray-border bg-white group-hover:border-brand-green'
                    }`}
                  >
                    {form.dsgvo && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-xs text-brand-gray-warm leading-relaxed">
                  Ich stimme zu, dass meine Angaben zur Erstellung der kostenlosen Wertermittlung und zur
                  Kontaktaufnahme durch immovativ<span className="font-black">Invest</span> verwendet werden dürfen.{' '}
                  <a href="#" className="text-brand-green underline">
                    Datenschutzerklärung lesen
                  </a>{' '}
                  <span className="text-brand-green">*</span>
                </span>
              </label>
              {errors.dsgvo && <p className="text-red-500 text-xs mt-1.5 ml-8">{errors.dsgvo}</p>}
            </div>
          </div>

          <div className="bg-brand-green-50 border border-brand-green-100 rounded-xl p-4 mb-6">
            <p className="text-xs text-brand-gray-warm leading-relaxed">
              <strong className="text-brand-anthrazit">Hinweis:</strong> Die Wertermittlung ist eine
              unverbindliche Ersteinschätzung auf Basis von Marktdaten und kein offizielles Gutachten.
              Die tatsächlichen Marktpreise können abweichen.
            </p>
          </div>

          {submitError && (
            <p className="text-red-500 text-sm mb-4">{submitError}</p>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4 mt-2">
        {step > 1 ? (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex items-center gap-2 text-brand-gray-warm hover:text-brand-anthrazit font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Zurück
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            onClick={next}
            className="ml-auto flex items-center gap-2 btn-gradient text-white font-semibold rounded-xl px-8 py-3.5 text-sm transition-colors"
          >
            Weiter
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={loading}
            className="ml-auto flex items-center gap-2 btn-gradient disabled:opacity-60 text-white font-semibold rounded-xl px-8 py-3.5 text-sm transition-colors"
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Wird berechnet…
              </>
            ) : (
              <>
                Wert kostenlos ermitteln
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
