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

  const colClass = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-4 md:gap-6`}>
      {benefits.map((benefit) => (
        <div
          key={benefit.title}
          className="bg-white border border-brand-gray-border rounded-2xl p-5 md:p-7 hover:border-brand-green/30 hover:shadow-soft transition-all duration-300 group flex gap-4 items-start md:block"
        >
          {benefit.icon && (
            <div className="w-10 h-10 md:w-11 md:h-11 bg-brand-green-50 rounded-xl flex items-center justify-center shrink-0 md:mb-5">
              <span className="text-lg md:text-xl">{benefit.icon}</span>
            </div>
          )}
          <div className={`${!benefit.icon ? 'flex items-start gap-3' : ''} flex-1 min-w-0`}>
            {!benefit.icon && <CheckIcon />}
            <div>
              <h3 className="font-semibold text-brand-anthrazit text-sm md:text-base mb-1 leading-snug">{benefit.title}</h3>
              {benefit.description && (
                <p className="text-brand-gray-warm text-xs md:text-sm leading-relaxed">{benefit.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
