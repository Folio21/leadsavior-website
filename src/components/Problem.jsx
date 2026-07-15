import FadeIn from './FadeIn.jsx'

const pains = [
  {
    title: 'Calls go to voicemail while you’re on the job',
    body: 'Every missed call is a customer who dials the next company on the list — and never calls you back.',
    accent: 'bg-red-500',
  },
  {
    title: 'Unhappy customers leave your competitor — and nobody calls them',
    body: 'Ready-to-switch customers post 1-star reviews every day, and they end up hiring someone who never even had to compete for them.',
    accent: 'bg-orange-500',
  },
  {
    title: 'You have no website, or one that hasn’t been updated in years',
    body: 'Customers judge you in seconds. An outdated site — or no site at all — sends them straight to the competition.',
    accent: 'bg-red-400',
  },
]

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Every day you’re losing customers you don’t even know about
          </h2>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.12}>
              <div className="relative h-full bg-ink-2 border border-white/5 rounded-lg p-8 overflow-hidden hover:border-white/10 transition-colors">
                <span className={`absolute left-0 top-0 h-full w-[3px] ${p.accent} opacity-80`} />
                <h3 className="text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
