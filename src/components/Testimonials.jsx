import FadeIn from './FadeIn.jsx'

const testimonials = [
  {
    initials: 'MT',
    name: 'Mike T.',
    company: 'Orlando Roofing Co.',
    quote:
      "The AI Receptionist answered 47 calls last month while I was on jobs. I didn't miss a single one. My revenue is up 30% since the first month.",
  },
  {
    initials: 'SK',
    name: 'Sarah K.',
    company: 'K&K HVAC Services',
    quote:
      "Review Poacher is insane. I got a lead from a competitor's bad review, called them the same day, and closed a $4,800 job. Paid for 9 months right there.",
  },
  {
    initials: 'CR',
    name: 'Carlos R.',
    company: 'Pro Plumbing FL',
    quote:
      'They built my website in two days and within 6 weeks I was ranking on Google Maps. I get 3-4 calls a week just from the website now. Best money I\'ve spent.',
  },
]

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="w-4 h-4 text-neon" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Real results from real service businesses
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="h-full bg-ink-2 border border-white/5 rounded-xl p-8 flex flex-col hover:border-teal/20 transition-colors">
                <Stars />
                <p className="mt-5 text-white/85 leading-relaxed flex-1">“{t.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-teal/15 border border-teal/30 flex items-center justify-center text-teal font-bold text-sm">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted">{t.company}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
