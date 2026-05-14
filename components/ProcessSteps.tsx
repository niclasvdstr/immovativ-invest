interface Step {
  number: number
  title: string
  description: string
  icon?: string
}

interface ProcessStepsProps {
  steps: Step[]
  title?: string
  subtitle?: string
  accent?: 'green' | 'dark'
}

export default function ProcessSteps({
  steps,
  title = 'So einfach geht\'s',
  subtitle,
  accent = 'green',
}: ProcessStepsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-left md:text-center mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">{title}</h2>
          {subtitle && <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg md:max-w-2xl md:mx-auto">{subtitle}</p>}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: circle + connector line */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white text-base font-bold shrink-0 shadow-soft"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563EB 100%)' }}
                >
                  {step.icon ? <span className="text-xl">{step.icon}</span> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 bg-brand-gray-border flex-1 my-2" style={{ minHeight: '32px' }} />
                )}
              </div>

              {/* Right: content */}
              <div className={`flex-1 ${index < steps.length - 1 ? 'pb-8' : ''}`}>
                <h3 className="font-bold text-brand-anthrazit text-base mb-1 leading-snug">{step.title}</h3>
                <p className="text-brand-gray-warm text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: horizontal grid */}
        <div className="hidden md:block relative">
          {/* Connector line */}
          <div
            className="absolute top-10 h-0.5 bg-brand-gray-border"
            style={{
              width: `${((steps.length - 1) / steps.length) * 100}%`,
              left: `${100 / steps.length / 2}%`,
            }}
          />

          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
          >
            {steps.map((step) => (
              <div key={step.number} className="relative text-center group flex flex-col">
                {/* Icon box */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-5 bg-white border-2 border-brand-gray-border rounded-xl flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform duration-300">
                  {step.icon ? (
                    <span className="text-3xl">{step.icon}</span>
                  ) : (
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  )}
                </div>

                <div className="flex-1 bg-white border border-brand-gray-border rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-7 h-7 bg-brand-green-50 text-brand-green text-xs font-bold rounded-full mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-brand-anthrazit text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-gray-warm text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
