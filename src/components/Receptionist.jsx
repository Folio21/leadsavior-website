import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from './FadeIn.jsx'

const transcript = [
  { from: 'caller', text: "Hi, I'm looking to get a roof inspection done. Is this the right number?" },
  { from: 'ai', text: "Hi there! Yes, you've reached Orlando Pro Roofing. I'm here to help 24/7. Are you looking for a free inspection estimate?" },
  { from: 'caller', text: 'Yeah, my roof took some damage from the last storm.' },
  { from: 'ai', text: "I'm sorry to hear that — storm damage is exactly what we specialize in. I can get you scheduled with one of our inspectors as early as tomorrow morning. What's your address?" },
  { from: 'caller', text: '4521 Magnolia Drive, Orlando.' },
  { from: 'ai', text: "Perfect. And what's the best number to send your confirmation text to?" },
  { from: 'caller', text: 'This one, (407) 555-0192.' },
  { from: 'ai', text: "Got it. You're booked for tomorrow at 9 AM. You'll get a text confirmation in just a minute. Is there anything else I can help you with?" },
  { from: 'caller', text: "No that's perfect, thank you!" },
  { from: 'ai', text: 'Our pleasure! See you tomorrow. Have a great night.' },
]

const features = [
  'Answers calls 24/7 in your business’s voice',
  'Books appointments automatically',
  'Handles FAQs about your services and pricing',
  'Sends follow-up texts to every caller',
  'AI chat widget included on your website — captures leads around the clock',
  'Setup in 48 hours, works for any service business',
]

function Check() {
  return (
    <svg className="w-5 h-5 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Receptionist() {
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(0)
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)
  const timers = useRef([])

  const play = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
    setVisible(0)
    setPlaying(true)
    let t = 400
    transcript.forEach((_, i) => {
      timers.current.push(setTimeout(() => setTyping(true), t))
      t += 900 + Math.min(transcript[i].text.length * 8, 1100)
      timers.current.push(
        setTimeout(() => {
          setTyping(false)
          setVisible(i + 1)
          if (i === transcript.length - 1) setPlaying(false)
        }, t),
      )
      t += 350
    })
  }

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [visible, typing])

  return (
    <section id="receptionist" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Copy */}
        <FadeIn>
          <span className="section-label">Product 01 — AI Receptionist</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Never Miss a Call. Never Lose a Customer.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Your AI receptionist answers every call 24/7, sounds completely human, books
            appointments into your calendar, handles FAQs, and chats with visitors on your
            website — all while you’re on the job.
          </p>
          <ul className="mt-8 space-y-3.5">
            {features.map((f) => (
              <li key={f} className="flex gap-3 text-[15px] leading-relaxed">
                <Check />
                <span className={f.includes('chat widget') ? 'font-semibold text-white' : 'text-white/90'}>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-l-2 border-teal pl-4 py-1 text-sm text-muted leading-relaxed">
            The chat widget in the bottom-right corner of this website is the exact same
            chatbot included with every AI Receptionist subscription. Try it now.
          </div>
        </FadeIn>

        {/* Phone demo */}
        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-[400px]">
            <div className="rounded-[2rem] bg-ink-2 border border-white/10 shadow-glow-lg overflow-hidden">
              {/* phone header */}
              <div className="px-5 py-4 bg-ink-3 border-b border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">[Your Business] AI Receptionist</p>
                  <p className="text-xs text-muted mt-0.5">Incoming call — live transcript</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-neon font-medium">
                  <span className="w-2 h-2 rounded-full bg-neon animate-pulse-dot" />
                  Connected
                </span>
              </div>

              {/* transcript */}
              <div ref={scrollRef} className="h-[380px] overflow-y-auto px-4 py-5 space-y-3 scroll-smooth">
                {visible === 0 && !playing && (
                  <div className="h-full flex items-center justify-center">
                    <button onClick={play} className="btn-primary text-sm">
                      &#9654;&nbsp; Play Sample Call
                    </button>
                  </div>
                )}
                <AnimatePresence>
                  {transcript.slice(0, visible).map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${m.from === 'ai' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                          m.from === 'ai'
                            ? 'bg-teal/15 border border-teal/25 text-white'
                            : 'bg-white/5 border border-white/10 text-white/85'
                        }`}
                      >
                        <p className={`text-[10px] uppercase tracking-wider mb-1 ${m.from === 'ai' ? 'text-teal' : 'text-muted'}`}>
                          {m.from === 'ai' ? 'AI Receptionist' : 'Caller'}
                        </p>
                        {m.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {typing && (
                  <div className={`flex ${transcript[visible]?.from === 'ai' ? 'justify-end' : 'justify-start'}`}>
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex gap-1.5">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-muted animate-pulse-dot"
                          style={{ animationDelay: `${d * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* footer / replay */}
              {visible === transcript.length && (
                <div className="px-4 pb-4">
                  <button onClick={play} className="w-full btn-outline text-xs !py-2">
                    Replay Call
                  </button>
                </div>
              )}
            </div>

            <div className="mt-5 border-l-[3px] border-teal bg-ink-2 rounded-r-md px-4 py-3 text-sm font-medium text-white/90">
              Appointment booked automatically — no human needed
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
