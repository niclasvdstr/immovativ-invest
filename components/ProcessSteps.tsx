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
        <div className="text-center mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-anthrazit mb-4">{title}</h2>
          {subtitle && <p className="text-brand-gray-warm text-sm sm:text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 h-0.5 bg-brand-gray-border" style={{ width: `${((steps.length - 1) / steps.length) * 100}%`, left: `${100 / steps.length / 2}%` }} />

          <div className="grid grid-cols-1 gap-8" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}>
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center group flex flex-col">
                {/* Step number circle */}
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
