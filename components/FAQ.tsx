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

export default function FAQ({ items, title = 'Häufig gestellte Fragen' }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">{title}</h2>
          <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg">Antworten auf die wichtigsten Fragen</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
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
                <div className="px-6 pb-5 text-brand-gray-warm leading-relaxed border-t border-brand-gray-border pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
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
