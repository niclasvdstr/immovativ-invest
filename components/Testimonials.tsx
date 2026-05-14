interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  propertyType?: string
  initials?: string
  avatarColor?: string
  timeAgo?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sabine M.',
    location: 'Frankfurt',
    rating: 5,
    text: 'Niclas hat sich von Anfang an richtig Zeit für uns genommen und alles super erklärt. Kein Fachjargon, einfach ehrlich und direkt. Die Wohnung war in knapp 5 Wochen verkauft – hätte ich nicht gedacht. Absolute Empfehlung!',
    propertyType: 'Eigentumswohnung',
    initials: 'SM',
    avatarColor: '#4285F4',
    timeAgo: 'vor 2 Wochen',
  },
  {
    name: 'Thomas K.',
    location: 'Bad Homburg',
    rating: 5,
    text: 'Mazlum war immer erreichbar, hat uns nie unter Druck gesetzt und wirklich mitgedacht. Man merkt, dass die beiden das nicht einfach nur als Job sehen. Verkauf lief reibungslos, Preis war mehr als zufriedenstellend.',
    propertyType: 'Einfamilienhaus',
    initials: 'TK',
    avatarColor: '#34A853',
    timeAgo: 'vor 1 Monat',
  },
  {
    name: 'Andrea & Klaus B.',
    location: 'Usingen',
    rating: 5,
    text: 'Wir hatten vorher schlechte Erfahrungen mit einem anderen Makler gemacht. Niclas und Mazlum waren das komplette Gegenteil – transparent, schnell und ohne versteckte Kosten. Unser Mehrfamilienhaus wurde zu einem top Preis verkauft.',
    propertyType: 'Mehrfamilienhaus',
    initials: 'AB',
    avatarColor: '#EA4335',
    timeAgo: 'vor 3 Wochen',
  },
]

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4" style={{ color: '#FBBC05' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

interface TestimonialsProps {
  items?: Testimonial[]
  title?: string
}

export default function Testimonials({ items = testimonials, title = 'Das sagen unsere Kunden.' }: TestimonialsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">{title}</h2>
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white border border-brand-gray-border rounded-2xl px-5 py-3.5 shadow-soft">
            <GoogleIcon />
            <div className="w-px h-8 bg-brand-gray-border" />
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-[18px] h-[18px]" style={{ color: '#FBBC05' }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-brand-anthrazit text-sm leading-none">4,9</span>
                <span className="text-brand-gray-warm text-xs leading-none">· 100+ Google-Bewertungen</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div key={t.name} className="bg-brand-cream rounded-2xl p-6 border border-brand-gray-border flex flex-col relative overflow-hidden">
              {/* Decorative quote mark */}
              <div className="absolute top-3 right-5 text-7xl font-serif leading-none select-none pointer-events-none" style={{ color: 'rgba(37,99,235,0.08)' }}>&ldquo;</div>

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Review text */}
              <p className="mt-3 text-brand-anthrazit leading-relaxed text-sm flex-1 relative z-10">
                &bdquo;{t.text}&ldquo;
              </p>

              {/* Author footer */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-brand-gray-border/60">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-brand-anthrazit text-sm leading-tight">{t.name}</div>
                  <div className="text-xs text-brand-gray-warm leading-tight truncate">{t.propertyType} · {t.location}</div>
                </div>
                <GoogleIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
