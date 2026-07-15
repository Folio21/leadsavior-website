import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Receptionist from './components/Receptionist.jsx'
import ReviewPoacher from './components/ReviewPoacher.jsx'
import WebsiteBuilder from './components/WebsiteBuilder.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'

export default function App() {
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
      <ChatWidget />
    </div>
  )
}
