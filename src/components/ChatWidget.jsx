import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CALENDLY_URL } from '../lib/constants.js'

const BOOK_LINE = `Want me to get you on a quick call? You can grab a time here: ${CALENDLY_URL}`

function getResponse(input) {
  const t = input.toLowerCase()

  if (/(price|pricing|cost|how much|expensive|charge|fee|\$)/.test(t)) {
    return `Our plans start at $497/month with no contracts. The AI Receptionist and Website Builder each have a Pro tier at $997/month, and you can bundle all three products for $997/month total. Want me to book you a quick call to go over which product fits best?`
  }

  if (/(how (does|do)|how it works|work|setup|set up|start|onboard)/.test(t)) {
    return `It's simple: we set everything up for you in about 48 hours. The AI Receptionist answers your calls and books appointments, Review Poacher watches your competitors' Google reviews and hands you their unhappy customers, and Website Builder gets you a custom site that ranks on Google. You just show up to a short onboarding call. ${BOOK_LINE}`
  }

  if (/(receptionist|call|phone|voicemail|answer)/.test(t)) {
    return `The AI Receptionist answers every call 24/7, sounds completely human, books appointments straight into your calendar, and texts every caller a follow-up. You'll never lose another job to voicemail. ${BOOK_LINE}`
  }

  if (/(review|poach|competitor|google)/.test(t)) {
    return `Review Poacher monitors your competitors' Google reviews every 4 hours. The moment someone leaves a 1 or 2-star review, you get an alert with their contact info and a ready-to-send outreach message. It's the fastest way to win customers who are already looking to switch. ${BOOK_LINE}`
  }

  if (/(website|site|web|seo|rank)/.test(t)) {
    return `We build you a custom, AI-powered website in 48 hours — designed to rank on Google, capture leads with a built-in chatbot, and make your phone ring. No templates, no DIY. ${BOOK_LINE}`
  }

  if (/(roof|hvac|plumb|landscap|clean|pest|electric|auto|repair|contractor|business)/.test(t)) {
    return `Perfect fit — LeadSavior is built specifically for local service businesses like yours. Most of our customers see results in the first month: more calls answered, leads from competitors' unhappy customers, and a website that actually generates jobs. ${BOOK_LINE}`
  }

  if (/(hi|hello|hey|sup|yo)\b/.test(t)) {
    return `Hey! I'm the LeadSavior AI assistant — the same chatbot that comes with every AI Receptionist plan. What kind of business do you run? I can show you exactly how we'd help.`
  }

  return `Great question! What kind of business do you run? That'll help me point you to the right product — whether it's never missing a call, winning your competitors' unhappy customers, or a website that generates leads while you sleep. ${BOOK_LINE}`
}

function linkify(text) {
  const parts = text.split(CALENDLY_URL)
  if (parts.length === 1) return text
  return parts.reduce((acc, part, i) => {
    acc.push(part)
    if (i < parts.length - 1) {
      acc.push(
        <a
          key={i}
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon underline underline-offset-2 hover:brightness-110"
        >
          calendly.com/david7803ktm
        </a>,
      )
    }
    return acc
  }, [])
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi! I'm the LeadSavior AI assistant. Ask me anything about our AI Receptionist, Review Poacher, or Website Builder — or just tell me what business you run.",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [messages, typing, open])

  const send = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || typing) return
    setMessages((m) => [...m, { from: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: getResponse(text) }])
      setTyping(false)
    }, 900 + Math.random() * 600)
  }

  return (
    <>
      {/* Floating bubble */}
      <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-2">
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="bg-ink-2 border border-teal/40 text-teal text-xs font-semibold px-3 py-1.5 rounded-md shadow-glow"
            >
              Try our AI
            </motion.span>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          className="w-14 h-14 rounded-full bg-teal text-ink flex items-center justify-center shadow-glow hover:brightness-110 transition-all"
        >
          {open ? (
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H9l-4.2 3.36A1 1 0 013 18.58V6z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-24 right-5 z-[70] w-[min(380px,calc(100vw-2.5rem))] bg-ink-2 border border-teal/25 rounded-xl shadow-glow-lg overflow-hidden flex flex-col"
            style={{ height: 'min(540px, calc(100vh - 130px))' }}
          >
            {/* Header */}
            <div className="px-5 py-4 bg-ink-3 border-b border-white/5">
              <p className="font-bold text-sm">LeadSavior AI — Ask me anything</p>
              <p className="text-[11px] text-muted mt-0.5">
                Powered by LeadSavior AI — included with every AI Receptionist plan.
              </p>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === 'bot'
                        ? 'bg-teal/12 border border-teal/20 text-white/90'
                        : 'bg-white/8 border border-white/10 text-white'
                    }`}
                  >
                    {m.from === 'bot' ? linkify(m.text) : m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-teal/10 border border-teal/20 rounded-xl px-4 py-3 flex gap-1.5">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot"
                        style={{ animationDelay: `${d * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input + pinned CTA */}
            <div className="border-t border-white/5 p-3 space-y-2.5 bg-ink-2">
              <form onSubmit={send} className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message…"
                  className="flex-1 bg-ink border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-muted/60 focus:outline-none focus:border-teal/50"
                />
                <button
                  type="submit"
                  className="bg-teal text-ink font-semibold text-sm px-4 rounded-md hover:brightness-110 transition-all disabled:opacity-40"
                  disabled={!input.trim() || typing}
                >
                  Send
                </button>
              </form>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-sm !py-2.5"
              >
                Book a Meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
