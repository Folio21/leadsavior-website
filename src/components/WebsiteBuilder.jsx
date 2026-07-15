import FadeIn from './FadeIn.jsx'

const features = [
  'Custom-built website for your specific business',
  'Built to rank on Google from day one',
  'Integrated contact forms and click-to-call',
  'AI chatbot included to capture leads 24/7',
  'Appointment booking built right in',
  'Mobile-optimized and fast-loading',
  'Ongoing updates and support included',
]

const stats = [
  { number: '23', caption: 'calls generated in the first month' },
  { number: '#3', caption: 'ranked on Google Maps in 6 weeks' },
  { number: '47', caption: 'chatbot leads captured' },
]

function Check() {
  return (
    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MiniStars() {
  return (
    <span className="inline-flex gap-[1px]">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className="w-2 h-2 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

/* Miniature mock site rendered inside the laptop frame */
function MockSite() {
  return (
    <div className="bg-[#031f24] text-[6px] leading-tight select-none pointer-events-none h-full overflow-hidden">
      {/* mock nav */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10">
        <span className="text-teal font-bold text-[7px]">SUMMIT ROOFING</span>
        <div className="flex gap-2 text-white/50">
          <span>Services</span><span>Gallery</span><span>Reviews</span><span>Contact</span>
        </div>
        <span className="bg-teal text-[#031f24] font-semibold px-1.5 py-0.5 rounded-sm">Call Now</span>
      </div>
      {/* mock hero */}
      <div className="relative px-3 pt-4 pb-3 bg-gradient-to-br from-[#052e33] to-[#031f24]">
        <p className="text-white font-extrabold text-[10px] leading-snug max-w-[60%]">
          Orlando’s Most Trusted Roofing Experts
        </p>
        <p className="text-white/50 mt-1 max-w-[55%]">
          Storm damage repair, inspections and full replacements — licensed and insured.
        </p>
        <div className="flex items-center gap-1 mt-1.5">
          <MiniStars />
          <span className="text-white/60">4.9 · 212 reviews</span>
        </div>
        <div className="flex gap-1 mt-2">
          <span className="bg-[#00ff88] text-[#031f24] font-semibold px-1.5 py-0.5 rounded-sm">Free Inspection</span>
          <span className="border border-teal/50 text-teal px-1.5 py-0.5 rounded-sm">Our Work</span>
        </div>
        {/* mock contact form */}
        <div className="absolute right-2 top-2 w-[32%] bg-[#02181a] border border-teal/20 rounded-sm p-1.5 space-y-1">
          <p className="text-white font-semibold text-[6.5px]">Get a Free Quote</p>
          <div className="h-1.5 bg-white/10 rounded-sm" />
          <div className="h-1.5 bg-white/10 rounded-sm" />
          <div className="h-3 bg-white/10 rounded-sm" />
          <div className="h-2 bg-teal rounded-sm" />
        </div>
      </div>
      {/* mock services row */}
      <div className="grid grid-cols-3 gap-1 px-3 py-2">
        {['Storm Damage', 'Replacements', 'Inspections'].map((s) => (
          <div key={s} className="bg-white/5 border-t border-teal/40 rounded-sm p-1">
            <p className="text-white/80 font-semibold">{s}</p>
            <div className="mt-0.5 h-1 bg-white/10 rounded-sm" />
            <div className="mt-0.5 h-1 w-2/3 bg-white/10 rounded-sm" />
          </div>
        ))}
      </div>
      {/* mock chat bubble */}
      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 rounded-full bg-teal shadow-[0_0_4px_rgba(0,212,170,0.8)]" />
    </div>
  )
}

export default function WebsiteBuilder() {
  return (
    <section id="website-builder" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Copy */}
        <FadeIn>
          <span className="section-label">Product 03 — Website Builder</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            A Professional Website That Works While You Sleep
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            We build your business a custom AI-powered website in 48 hours — designed to rank
            on Google, capture leads, and make your phone ring. No templates. No DIY. Done for
            you.
          </p>
          <ul className="mt-8 space-y-3.5">
            {features.map((f) => (
              <li key={f} className="flex gap-3 text-[15px] text-white/90 leading-relaxed">
                <Check />
                {f}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Laptop mockup + stats */}
        <FadeIn delay={0.15}>
          <div className="relative mx-auto max-w-[560px]">
            {/* laptop frame */}
            <div className="rounded-t-xl border border-white/15 border-b-0 bg-ink-3 p-2 pb-0 shadow-glow-lg">
              <div className="flex gap-1.5 px-1 pb-2">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <div className="relative aspect-[16/10] rounded-t-md overflow-hidden border border-white/10 border-b-0">
                <MockSite />
              </div>
            </div>
            <div className="h-3 rounded-b-xl bg-gradient-to-b from-ink-3 to-ink-2 border border-white/15 border-t-0" />
            <div className="mx-auto h-1.5 w-24 rounded-b-lg bg-ink-3/80" />

            <p className="mt-4 text-center text-xs text-muted">
              Built by LeadSavior AI in 48 hours for a roofing company in Orlando, FL.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <FadeIn key={s.caption} delay={i * 0.1} y={14}>
                  <div className="bg-ink-2 border border-white/5 border-t-2 border-t-teal rounded-lg p-5 text-center h-full">
                    <p className="text-3xl font-black text-white">{s.number}</p>
                    <p className="mt-1.5 text-xs text-muted leading-snug">{s.caption}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
