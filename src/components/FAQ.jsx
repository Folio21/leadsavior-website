import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const faqs = [
  {
    q: 'Do I need any technical knowledge to use LeadSavior?',
    a: 'No. We handle all setup for you. If you can use a smartphone, you can use LeadSavior. Most customers are fully set up within 48 hours.',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most customers are up and running within 48 hours of signing up. We do the heavy lifting — you just show up to the onboarding call.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No contracts. Everything is month-to-month. Cancel anytime with no cancellation fees or hassle.',
  },
  {
    q: 'Does the AI Receptionist really sound human?',
    a: "Yes. We use the most advanced conversational AI available. Most callers never realize they're talking to AI — and they don't need to.",
  },
  {
    q: 'What types of businesses is this for?',
    a: 'Any local service business — roofing, HVAC, plumbing, landscaping, cleaning, pest control, auto repair, electrical, and more. If you take phone calls and serve local customers, LeadSavior works for you.',
  },
  {
    q: 'What if I want all three products?',
    a: 'Get the bundle for $997/month and save $494/month versus buying individually. It also includes done-for-you onboarding and a monthly strategy call.',
  },
]

function Item({ faq, open, onToggle }) {
  return (
    <div className="border border-white/5 bg-ink-2 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[15px]">{faq.q}</span>
        <svg
          className={`w-4 h-4 text-teal shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
        >
          <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative py-24 sm:py-32 bg-ink-2/40">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.q} delay={i * 0.06} y={12}>
              <Item
                faq={faq}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
