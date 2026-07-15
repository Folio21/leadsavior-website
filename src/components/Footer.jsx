import { CALENDLY_URL, CONTACT_EMAIL } from '../lib/constants.js'

const links = [
  { label: 'AI Receptionist', href: '#receptionist' },
  { label: 'Review Poacher', href: '#review-poacher' },
  { label: 'Website Builder', href: '#website-builder' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Book a Meeting', href: CALENDLY_URL, external: true },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xl font-extrabold tracking-tight">
              <span className="text-white">LeadSavior</span>
              <span className="text-teal">.ai</span>
            </p>
            <p className="mt-2 text-sm text-muted">
              AI-powered growth tools for local service businesses.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-teal hover:text-neon transition-colors">
            {CONTACT_EMAIL}
          </a>
          <p className="text-xs text-muted/70">© 2025 LeadSavior AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
