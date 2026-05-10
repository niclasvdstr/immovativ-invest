interface Badge {
  icon: React.ReactNode
  label: string
  value?: string
}

interface TrustBadgesProps {
  variant?: 'row' | 'stats'
}

const CheckIcon = () => (
  <svg className="w-5 h-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-5 h-5" style={{ color: '#ffa61c' }} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const stats = [
  { value: '125+', label: 'Verkäufer begleitet' },
  { value: 'Ø 60 Tage', label: 'Vermarktungszeit' },
  { value: '4,9/5', label: 'Kundenzufriedenheit' },
  { value: '100%', label: 'Kostenlose Erstberatung' },
]

const badges = [
  'Kostenlose Bewertung',
  'Diskrete Abwicklung',
  'Regionale Experten',
  'Schnelle Rückmeldung',
]

export default function TrustBadges({ variant = 'row' }: TrustBadgesProps) {
  if (variant === 'stats') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-soft border border-brand-gray-border">
            <div className="text-3xl font-bold text-brand-green mb-1">{stat.value}</div>
            <div className="text-sm text-brand-gray-warm font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
      {badges.map((badge) => (
        <div
          key={badge}
          className="flex items-center gap-2 bg-brand-green-50 border border-brand-green-100 text-brand-green rounded-full px-4 py-2 text-sm font-medium"
        >
          <CheckIcon />
          {badge}
        </div>
      ))}
      <div className="flex items-center gap-1.5 bg-brand-champagne-light/30 border border-brand-champagne/30 rounded-full px-4 py-2 text-sm font-medium text-brand-anthrazit">
        {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
        <span className="ml-1">4,9/5</span>
      </div>
    </div>
  )
}
