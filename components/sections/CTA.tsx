'use client'

import {cubicBezier, motion, useInView} from 'framer-motion'
import { useRef } from 'react'
import { Terminal, ArrowRight } from 'lucide-react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: cubicBezier(0.4, 0, 0.2, 1)
      }
    }
  }


  return (
    <section ref={ref} className="py-32 px-8 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto space-y-16"
      >

        {/* Mac Terminal Interface */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-ocean-primary rounded-lg border border-ocean-accent/50 overflow-hidden shadow-2xl terminal-glow">

            {/* Terminal Header */}
            <div className="bg-ocean-secondary px-4 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-ocean-text-muted text-sm">Terminal</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-3 font-mono text-sm">
              <div className="text-ocean-accent">
                <p>Welcome to ForkedOcean Mental Operating System</p>
                <p>Type 'help' for available commands</p>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-ocean-text-primary">user@forkedocean:~$</span>
                <span className="text-ocean-text-primary ml-2">breathe --depth=infinite</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-ocean-text-primary"
                >
                  █
                </motion.span>
              </div>

              <div className="text-ocean-accent space-y-1 pl-0">
                <p>→ Consciousness stream initialized</p>
                <p>→ Mental state: Reflective</p>
                <p>→ Ocean depth: ∞</p>
                <p>→ Breathing pattern: Synchronized</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-ocean-card text-ocean-text-primary rounded-lg font-mono text-sm transition-all duration-300 flex items-center gap-2 hover:bg-ocean-accent border border-ocean-accent/50"
          >
            Enter Terminal
            <Terminal size={16} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-ocean-secondary text-ocean-text-primary border border-ocean-accent/50 rounded-lg font-mono text-sm transition-all duration-300 flex items-center gap-2 hover:bg-ocean-card"
          >
            Genesis Log
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}