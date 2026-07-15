import FadeIn from './FadeIn.jsx'
import { CALENDLY_URL } from '../lib/constants.js'

// TODO: Replace with Stripe Payment Link
// STRIPE_RECEPTIONIST_STARTER_URL = "https://buy.stripe.com/..."
// STRIPE_RECEPTIONIST_PRO_URL = "https://buy.stripe.com/..."
// STRIPE_REVIEW_POACHER_URL = "https://buy.stripe.com/..."
// STRIPE_WEBSITE_STARTER_URL = "https://buy.stripe.com/..."
// STRIPE_WEBSITE_PRO_URL = "https://buy.stripe.com/..."

const columns = [
  {
    product: 'AI Receptionist',
    plans: [
      {
        name: 'Starter',
        price: 497,
        features: [
          'AI chatbot on your website — captures leads 24/7',
          'Custom-trained on your services, pricing, and FAQs',
          'Live appointment booking into your calendar',
          'Answers missed calls 24/7',
          'Books appointments by phone',
          'Handles FAQs by voice',
          'Captures caller info and sends callback messages',
          'Call transcripts and recordings included',
        ],
      },
      {
        name: 'Pro',
        price: 997,
        popular: true,
        intro: 'Everything in Starter, plus:',
        features: [
          'Lead qualification — filters so you only speak with serious buyers',
          'Multi-service call routing — directs callers to the right service automatically',
          'CRM sync — every lead pushed into your CRM instantly',
          'SMS follow-up — auto-texts leads after every contact',
          'Review request automation — requests reviews after every completed job',
          'Automated re-engagement — follows up with cold leads automatically',
          'Multilingual support — serves Spanish-speaking customers',
          'Quarterly AI tune-up — we review and improve your setup every 3 months',
        ],
      },
    ],
  },
  {
    product: 'Review Poacher',
    plans: [
      {
        name: 'One plan',
        price: 497,
        features: [
          'Monitors unlimited competitor Google listings',
          'Checks for new bad reviews every 4 hours',
          'Instant alerts when a 1 or 2-star review appears',
          'Finds reviewer contact information automatically',
          'Generates personalized outreach messages ready to send',
          'Set it and forget it — fully automated',
        ],
      },
    ],
  },
  {
    product: 'Website Builder',
    plans: [
      {
        name: 'Starter',
        price: 497,
        features: [
          'Custom-designed website built around your brand',
          'Mobile-first, fast-loading on all devices',
          'Local SEO-ready from day one',
          'Contact and booking forms',
          'Google Maps embed',
          'Social media links',
        ],
      },
      {
        name: 'Pro',
        price: 997,
        popular: true,
        intro: 'Everything in Starter, plus:',
        features: [
          'Blog and content section — drives ongoing organic traffic',
          'Gallery and portfolio — showcase your work to win trust',
          'Full individual service pages — ranks better in local search',
          'Google Analytics — track visitors, sources, and conversions',
          'Speed optimization — fast load times on every device',
          'Priority support — direct line for edits and updates',
        ],
      },
    ],
  },
]

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col bg-ink-2 rounded-xl p-7 h-full ${
        plan.popular
          ? 'border border-teal/60 shadow-glow'
          : 'border border-white/5'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-ink text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-md whitespace-nowrap">
          Most Popular
        </span>
      )}
      <p className="text-sm font-semibold text-muted uppercase tracking-wider">{plan.name}</p>
      <p className="mt-3">
        <span className="text-4xl font-black">${plan.price}</span>
        <span className="text-muted text-sm">/mo</span>
      </p>
      {plan.intro && <p className="mt-4 text-sm font-semibold text-teal">{plan.intro}</p>}
      <ul className="mt-4 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-[13px] text-white/85 leading-relaxed">
            <svg className="w-4 h-4 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
              <path d="M5 10.5l3 3L15 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 text-sm ${plan.popular ? 'btn-primary' : 'btn-outline'}`}
      >
        Book a Meeting
      </a>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-ink-2/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted text-lg">No long-term contracts. Cancel anytime.</p>
        </FadeIn>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <FadeIn key={col.product} delay={i * 0.1} className="flex flex-col gap-8">
              <h3 className="text-xl font-bold text-center -mb-2">{col.product}</h3>
              {col.plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <p className="text-sm text-muted">
            All plans include a free onboarding call. Final pricing based on project scope.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
