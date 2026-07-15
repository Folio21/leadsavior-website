import { useEffect, useState } from 'react'
import { CALENDLY_URL } from '../lib/constants.js'

const links = [
  { label: 'AI Receptionist', href: '/#receptionist' },
  { label: 'Review Poacher', href: '/#review-poacher' },
  { label: 'Website Builder', href: '/#website-builder' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/80 backdrop-blur-lg border-b border-teal/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="/" className="flex items-baseline gap-0.5 text-xl font-extrabold tracking-tight">
          <span className="text-white">LeadSavior</span>
          <span className="text-teal drop-shadow-[0_0_8px_rgba(0,212,170,0.8)]">.ai</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm !py-2.5 !px-5">
            Book a Meeting
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink/95 backdrop-blur-lg border-b border-teal/10 px-5 pb-6 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-white transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full"
            onClick={() => setOpen(false)}
          >
            Book a Meeting
          </a>
        </div>
      )}
    </header>
  )
}
