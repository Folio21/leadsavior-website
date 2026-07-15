import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function LegalLayout({ title, updated, children }) {
  useEffect(() => {
    document.title = `${title} — LeadSavior.ai`
    window.scrollTo(0, 0)
    return () => {
      document.title = 'LeadSavior.ai — AI-Powered Growth Tools for Local Service Businesses'
    }
  }, [title])

  return (
    <div className="min-h-screen bg-ink text-white overflow-x-hidden">
      <Nav />
      <main className="pt-[72px]">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
          <div className="mt-10 space-y-8 legal-prose">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export function Section({ heading, children }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white">{heading}</h2>
      <div className="mt-3 space-y-3 text-[15px] text-white/75 leading-relaxed">{children}</div>
    </section>
  )
}
