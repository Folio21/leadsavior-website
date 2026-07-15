import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const leads = [
  {
    competitor: 'Sunshine Roofing LLC',
    reviewer: 'Jennifer M.',
    stars: 1,
    review: "They never showed up for the inspection and didn't even call to cancel. Complete waste of my time.",
    posted: '2 hours ago',
    hook: 'nobody should have to deal with a no-show without even a phone call',
  },
  {
    competitor: 'Quick Fix Roofing',
    reviewer: 'Robert T.',
    stars: 2,
    review: "Took 3 weeks longer than quoted and left a mess in my yard. Wouldn't recommend.",
    posted: '5 hours ago',
    hook: 'a job running weeks past the quote is exactly the kind of experience we built our on-time guarantee to prevent',
  },
  {
    competitor: 'All Star Roofing',
    reviewer: 'Patricia H.',
    stars: 1,
    review: 'Overcharged me and the leak came back after 2 months. Had to hire someone else to fix it.',
    posted: '1 day ago',
    hook: 'paying twice for the same repair is something no homeowner should go through',
  },
  {
    competitor: 'Central FL Roofing Co',
    reviewer: 'Marcus D.',
    stars: 2,
    review: 'Communication was terrible. Had to call 6 times just to get an update on my project.',
    posted: '2 days ago',
    hook: 'having to call six times for a simple update is the opposite of how this should work',
  },
]

const features = [
  'Monitors competitor Google reviews around the clock',
  'Instant alerts for 1 and 2-star reviews',
  'Finds reviewer contact information automatically',
  'Generates personalized outreach messages',
  'Set it and forget it — fully automated',
]

function Stars({ count }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} star review`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < count ? 'text-orange-400' : 'text-white/15'}`} viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  )
}

function Check() {
  return (
    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function outreachMessage(lead) {
  const firstName = lead.reviewer.split(' ')[0]
  return `Hi ${firstName},

I saw your review about ${lead.competitor} and I'm really sorry you had that experience — ${lead.hook}.

My name is David with Orlando Pro Roofing. We have a 4.9-star rating and a strict on-time guarantee. I'd love to make it right for you — I can have someone out this week for a free inspection, no strings attached.

Would that work for you?`
}

export default function ReviewPoacher() {
  const [selected, setSelected] = useState(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(outreachMessage(selected))
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="review-poacher" className="relative py-24 sm:py-32 bg-ink-2/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Lead feed demo — left on desktop */}
        <FadeIn delay={0.15} className="order-2 lg:order-1">
          <div className="rounded-xl bg-ink border border-white/10 overflow-hidden shadow-glow-lg">
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-ink-3/60">
              <span className="flex items-center gap-2 text-sm font-semibold text-red-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-dot" />
                LIVE
              </span>
              <p className="text-xs text-muted">Monitoring 12 competitors in your area</p>
            </div>
            <div className="p-4 space-y-3 max-h-[520px] overflow-y-auto">
              {leads.map((lead, i) => (
                <FadeIn key={lead.reviewer} delay={i * 0.1} y={16}>
                  <div className="bg-ink-2 border border-white/5 rounded-lg p-4 hover:border-teal/20 transition-colors">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs text-muted">
                        Competitor: <span className="text-white/80 font-medium">{lead.competitor}</span>
                      </p>
                      <p className="text-[11px] text-muted/70 shrink-0">{lead.posted}</p>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm font-semibold">{lead.reviewer}</span>
                      <Stars count={lead.stars} />
                    </div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">“{lead.review}”</p>
                    <button
                      onClick={() => { setSelected(lead); setCopied(false) }}
                      className="mt-3 text-xs font-semibold text-teal border border-teal/40 rounded-md px-3.5 py-2 hover:bg-teal/10 transition-colors"
                    >
                      Contact This Lead
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Copy — right on desktop */}
        <FadeIn className="order-1 lg:order-2">
          <span className="section-label">Product 02 — Review Poacher</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Steal Your Competitors’ Unhappy Customers
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Our AI monitors your competitors’ Google reviews every 4 hours. The moment someone
            leaves a 1 or 2-star review, we alert you with their contact info and a
            ready-to-send outreach message.
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
      </div>

      {/* Outreach modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg bg-ink-2 border border-teal/20 rounded-xl shadow-glow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">Personalized outreach — {selected.reviewer}</p>
                  <p className="text-xs text-muted mt-0.5">Generated by LeadSavior AI</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-muted hover:text-white transition-colors text-xl leading-none p-1"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
              <div className="px-6 py-5">
                <pre className="whitespace-pre-wrap font-sans text-sm text-white/85 leading-relaxed bg-ink border border-white/5 rounded-lg p-4">
{outreachMessage(selected)}
                </pre>
                <button onClick={copy} className="btn-primary w-full mt-4 text-sm">
                  {copied ? 'Copied to Clipboard' : 'Copy Message'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
