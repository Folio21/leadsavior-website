import { useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Problem from '../components/Problem.jsx'
import Receptionist from '../components/Receptionist.jsx'
import ReviewPoacher from '../components/ReviewPoacher.jsx'
import WebsiteBuilder from '../components/WebsiteBuilder.jsx'
import Pricing from '../components/Pricing.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  useEffect(() => {
    // Support arriving from legal pages with a hash target (e.g. /#pricing)
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) el.scrollIntoView()
    }
  }, [])

  return (
    <div className="min-h-screen bg-ink text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Receptionist />
        <ReviewPoacher />
        <WebsiteBuilder />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
