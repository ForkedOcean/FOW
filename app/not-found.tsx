'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Terminal, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ocean-primary flex items-center justify-center px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-2xl"
      >
        {/* 404 Display */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-8xl md:text-9xl font-extralight text-ocean-accent">
            404
          </h1>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ocean-accent to-transparent mx-auto"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-light text-ocean-text-primary">
            Wave Not Found
          </h2>
          <p className="text-ocean-text-muted font-mono text-lg">
            This path leads to uncharted waters.
          </p>
        </motion.div>

        {/* Navigation Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group liquid-button px-8 py-3 rounded-xl font-mono text-ocean-text-primary text-base transition-all duration-500 flex items-center gap-3"
            >
              <Home size={16} />
              Return to Ocean
            </motion.button>
          </Link>
          
          <Link href="/terminal">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-card px-8 py-3 rounded-xl font-mono text-ocean-text-primary text-base transition-all duration-500 flex items-center gap-3"
            >
              <Terminal size={16} />
              Open Terminal
            </motion.button>
          </Link>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-8"
        >
          <button
            onClick={() => window.history.back()}
            className="text-ocean-text-muted hover:text-ocean-text-primary font-mono text-sm transition-colors duration-300 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={14} />
            Go back
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}