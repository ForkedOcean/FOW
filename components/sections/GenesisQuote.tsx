'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const genesisQuotes = [
  {
    text: "In the depth of silence, waves speak.",
    source: "Genesis Log, Wave 0"
  },
  {
    text: "Every element whispers clarity. Every movement reflects intentionality.",
    source: "ForkedOcean Principle"
  },
  {
    text: "The interface is not what you see. It's what thinks through you.",
    source: "Mental Operating System, v1.0"
  },
  {
    text: "Consciousness does not observe the system. Consciousness IS the system.",
    source: "Terminal Wisdom, Entry 147"
  },
  {
    text: "Navigate not with your eyes, but with your inner compass.",
    source: "Symbol Navigation Guide"
  }
]

export default function GenesisQuote() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % genesisQuotes.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-4">
            Genesis Stream
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
        </motion.div>

        <div className="relative h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center items-center space-y-6"
            >
              <blockquote className="text-xl md:text-2xl font-light text-slate-200 italic leading-relaxed max-w-3xl">
                "{genesisQuotes[currentQuote].text}"
              </blockquote>
              <cite className="text-blue-400 font-mono text-sm">
                — {genesisQuotes[currentQuote].source}
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quote Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {genesisQuotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote ? 'bg-blue-400 w-8' : 'bg-slate-600 hover:bg-slate-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}