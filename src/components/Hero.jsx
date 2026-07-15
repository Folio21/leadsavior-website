import { motion } from 'framer-motion'
import { CALENDLY_URL } from '../lib/constants.js'

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 137.5) % 100}%`,
  top: `${(i * 61.8 + 13) % 100}%`,
  size: 2 + (i % 4),
  duration: 10 + (i % 7) * 2,
  delay: (i % 9) * -1.7,
}))

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-teal/10 blur-[160px]" />
        <div className="absolute bottom-0 left-[-200px] w-[600px] h-[600px] rounded-full bg-neon/5 blur-[140px]" />
        <div className="absolute top-1/3 right-[-150px] w-[500px] h-[500px] rounded-full bg-teal/5 blur-[120px]" />
      </div>

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-teal/40 animate-float"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              boxShadow: '0 0 8px rgba(0,212,170,0.6)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-neon border border-neon/30 rounded-md px-4 py-1.5 mb-8 bg-neon/5">
            AI-Powered Growth Tools for Local Service Businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
        >
          Your Competitors Are Stealing Your Customers.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-neon">
            Take Them Back.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed"
        >
          LeadSavior gives local service businesses three AI-powered weapons to never miss a
          call, poach unhappy customers from the competition, and get a professional website
          that works while you sleep.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base w-full sm:w-auto"
          >
            Book a Meeting
          </a>
          <a href="#receptionist" className="btn-outline text-base w-full sm:w-auto">
            See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  )
}
