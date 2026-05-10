interface Benefit {
  icon?: string
  title: string
  description?: string
}

interface BenefitCardsProps {
  benefits: Benefit[]
  layout?: 'grid' | 'list'
  columns?: 2 | 3
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

export default function BenefitCards({ benefits, layout = 'grid', columns = 3 }: BenefitCardsProps) {
  if (layout === 'list') {
    return (
      <ul className="space-y-3">
        {benefits.map((benefit) => (
          <li key={benefit.title} className="flex items-start gap-3">
            <CheckIcon />
            <div>
              <span className="font-semibold text-brand-anthrazit">{benefit.title}</span>
              {benefit.description && (
                <p className="text-brand-gray-warm text-sm mt-0.5">{benefit.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const colClass = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6`}>
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="bg-white border border-brand-gray-border rounded-2xl p-7 hover:border-brand-green/30 hover:shadow-soft transition-all duration-300 group"
        >
          {benefit.icon && (
            <div className="w-11 h-11 bg-brand-green-50 rounded-xl flex items-center justify-center mb-5">
              <span className="text-xl">{benefit.icon}</span>
            </div>
          )}
          <div className="flex items-start gap-3">
            {!benefit.icon && <CheckIcon />}
            <div>
              <h3 className="font-semibold text-brand-anthrazit mb-1.5">{benefit.title}</h3>
              {benefit.description && (
                <p className="text-brand-gray-warm text-sm leading-relaxed">{benefit.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
