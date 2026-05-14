/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
  title?: string
}

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const reviewSet0 = [
  {
    name: 'Sabine M.',
    location: 'Frankfurt',
    initials: 'SM',
    avatarColor: '#4285F4',
    text: 'Niclas hat sich von Anfang an richtig Zeit für uns genommen. Kein Fachjargon, einfach ehrlich und direkt. Die Wohnung war in knapp 5 Wochen verkauft – absolute Empfehlung!',
    propertyType: 'Eigentumswohnung',
    timeAgo: 'vor 2 Wochen',
  },
  {
    name: 'Thomas K.',
    location: 'Bad Homburg',
    initials: 'TK',
    avatarColor: '#34A853',
    text: 'Mazlum war immer erreichbar und hat uns nie unter Druck gesetzt. Man merkt, dass die beiden das nicht einfach nur als Job sehen. Preis war mehr als zufriedenstellend.',
    propertyType: 'Einfamilienhaus',
    timeAgo: 'vor 1 Monat',
  },
  {
    name: 'Andrea & Klaus B.',
    location: 'Usingen',
    initials: 'AB',
    avatarColor: '#EA4335',
    text: 'Nach schlechten Erfahrungen mit einem anderen Makler: Niclas und Mazlum waren das komplette Gegenteil — transparent, schnell und ohne versteckte Kosten.',
    propertyType: 'Mehrfamilienhaus',
    timeAgo: 'vor 3 Wochen',
  },
]

const reviewSet1 = [
  {
    name: 'Markus R.',
    location: 'Wiesbaden',
    initials: 'MR',
    avatarColor: '#9333ea',
    text: 'Vom ersten Gespräch bis zur Schlüsselübergabe wurde alles professionell und ehrlich abgewickelt. In nur 4 Wochen war alles durch. Sehr empfehlenswert!',
    propertyType: 'Doppelhaushälfte',
    timeAgo: 'vor 5 Tagen',
  },
  {
    name: 'Julia & Stefan F.',
    location: 'Kronberg',
    initials: 'JF',
    avatarColor: '#f59e0b',
    text: 'Wir waren anfangs skeptisch, aber immovativInvest hat uns wirklich positiv überrascht. Kompetente Beratung, schnelle Reaktionszeiten und ein top Verkaufspreis.',
    propertyType: 'Einfamilienhaus',
    timeAgo: 'vor 6 Wochen',
  },
  {
    name: 'Peter L.',
    location: 'Darmstadt',
    initials: 'PL',
    avatarColor: '#0ea5e9',
    text: 'Für unsere Kapitalanlage haben wir den idealen Käufer gefunden. Die Vermarktung war erstklassig und der erzielte Preis hat unsere Erwartungen übertroffen.',
    propertyType: 'Kapitalanlage',
    timeAgo: 'vor 2 Monaten',
  },
]

const reviewSet2 = [
  {
    name: 'Monika S.',
    location: 'Offenbach',
    initials: 'MS',
    avatarColor: '#10b981',
    text: 'Super unkompliziert und immer ehrlich. Niclas hat uns realistisch beraten statt unrealistische Preise zu versprechen. Am Ende alles genau wie besprochen.',
    propertyType: 'Eigentumswohnung',
    timeAgo: 'vor 1 Woche',
  },
  {
    name: 'Familie Brandt',
    location: 'Bad Vilbel',
    initials: 'FB',
    avatarColor: '#6366f1',
    text: 'Diskret, schnell und professionell. Die Familie war sehr glücklich mit dem Ablauf. Kein Druck, klare Kommunikation – genau das haben wir gebraucht.',
    propertyType: 'Reihenhaus',
    timeAgo: 'vor 3 Monaten',
  },
  {
    name: 'Rainer W.',
    location: 'Hanau',
    initials: 'RW',
    avatarColor: '#ef4444',
    text: 'Ich hatte ein schwieriges Grundstück zu verkaufen, das andere Makler abgelehnt hatten. immovativInvest hat es innerhalb von 6 Wochen erfolgreich vermarktet.',
    propertyType: 'Grundstück',
    timeAgo: 'vor 2 Wochen',
  },
]

const reviewSet3 = [
  {
    name: 'Anna K.',
    location: 'Frankfurt-Sachsenhausen',
    initials: 'AK',
    avatarColor: '#8b5cf6',
    text: 'Absolut professionelle Abwicklung. Der Wert meiner Immobilie wurde realistisch eingeschätzt – nicht zu hoch, nicht zu niedrig. Verkauf lief reibungslos.',
    propertyType: 'Penthouse',
    timeAgo: 'vor 4 Tagen',
  },
  {
    name: 'Gerhard & Petra M.',
    location: 'Oberursel',
    initials: 'GM',
    avatarColor: '#f97316',
    text: 'Wir wurden von Anfang bis Ende begleitet. Besonders gut: Die Kommunikation war immer transparent und wir wussten stets, wo wir stehen.',
    propertyType: 'Einfamilienhaus',
    timeAgo: 'vor 5 Wochen',
  },
  {
    name: 'Lena T.',
    location: 'Hofheim',
    initials: 'LT',
    avatarColor: '#14b8a6',
    text: 'Beim Verkauf meiner Wohnung lief alles schneller als erwartet. Das Team ist jung, dynamisch und kennt den Markt wirklich gut.',
    propertyType: 'Eigentumswohnung',
    timeAgo: 'vor 1 Monat',
  },
]

const allReviewSets = [reviewSet0, reviewSet1, reviewSet2, reviewSet3]

export default function FAQ({ items, title = 'Häufig gestellte Fragen' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [reviewIndex, setReviewIndex] = useState(0)
  // Auto-select based on title hash for variety
  const reviewSetIndex = title ? title.length % 4 : 0
  const reviews = allReviewSets[reviewSetIndex]
  const review = reviews[reviewIndex]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-left md:text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">{title}</h2>
          <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg">Antworten auf die wichtigsten Fragen</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">

          {/* FAQ Accordion – 2/3 width */}
          <div className="lg:col-span-2 space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="border border-brand-gray-border rounded-2xl overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-gray-light transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-brand-anthrazit pr-4">{item.question}</span>
                  <span
                    className="shrink-0 w-7 h-7 bg-brand-green-50 rounded-xl flex items-center justify-center transition-transform duration-300"
                    style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }}
                  >
                    <svg className="w-4 h-4 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{ maxHeight: openIndex === index ? '400px' : '0' }}
                >
                  <div className="px-6 pb-5 text-brand-gray-warm leading-relaxed border-t border-brand-gray-border pt-4 text-sm">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Review Card – 1/3 width, sticky */}
          <div className="lg:sticky lg:top-28 space-y-4">
            {/* Google Rating */}
            <div className="bg-white border border-brand-gray-border rounded-2xl p-5 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <GoogleIcon />
                <span className="text-sm font-semibold text-brand-anthrazit">Google Bewertungen</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-brand-anthrazit">4,9</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5" style={{ color: '#FBBC05' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-xs text-brand-gray-warm">Basierend auf 100+ echten Bewertungen</p>
            </div>

            {/* Featured Review */}
            <div className="bg-brand-cream border border-brand-gray-border rounded-2xl p-5 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: review.avatarColor }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-anthrazit text-sm">{review.name}</div>
                    <div className="text-xs text-brand-gray-warm">{review.timeAgo}</div>
                  </div>
                </div>
                <GoogleIcon />
              </div>
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4" style={{ color: '#FBBC05' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-brand-gray-warm text-sm leading-relaxed mb-4">„{review.text}"</p>
              <div className="flex items-center justify-between pt-3 border-t border-brand-gray-border">
                <span className="text-xs text-brand-gray-warm">{review.propertyType} · {review.location}</span>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${i === reviewIndex ? 'bg-brand-green w-5' : 'bg-brand-gray-border'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
      {items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}
    </section>
  )
}
