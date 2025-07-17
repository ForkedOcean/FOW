'use client'

import {useState, useEffect, useMemo} from 'react'
import { motion } from 'framer-motion'

export default function TerminalEntry() {
  const [, setCurrentCommand] = useState('')
  const [, setIsTyping] = useState(true)

  const commands = useMemo(() => [
    '> breathe',
    '> echo consciousness',
    '> navigate inward',
    '> reflect --depth=infinite',
    '> wave --generate'
  ], []) // Empty dependency array since it never changes

  useEffect(() => {
    let commandIndex = 0
    let charIndex = 0
    let timeoutId: NodeJS.Timeout

    const typeCommand = () => {
      if (charIndex < commands[commandIndex].length) {
        setCurrentCommand(commands[commandIndex].slice(0, charIndex + 1))
        charIndex++
        timeoutId = setTimeout(typeCommand, 100)
      } else {
        setIsTyping(false)
        timeoutId = setTimeout(() => {
          setIsTyping(true)
          charIndex = 0
          commandIndex = (commandIndex + 1) % commands.length
          setCurrentCommand('')
          timeoutId = setTimeout(typeCommand, 500)
        }, 3000)
      }
    }

    typeCommand()

    // Cleanup function to clear timeouts
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [commands])

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-4">
            Conscious Interface
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This is not a UI. It&#39;s a threshold to cognition.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black border border-gray-300 rounded-lg p-6 max-w-3xl mx-auto"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700">
            <div className="flex gap-2 ml-auto">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="space-y-2 font-mono text-sm">
            <div className="text-green-400">
            </div>
          </div>
          {/* Interactive Input */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 pt-6 border-t border-slate-700"
          >
            <div className="flex gap-4">
              <motion.button
                onClick={() => window.location.href = '/terminal'}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-2 px-4 border border-gray-400 rounded text-gray-700 font-mono text-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50"
              >
                Open Terminal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-blue-500 border border-blue-500 rounded text-white font-mono text-sm transition-all duration-300 hover:bg-blue-600"
              >
                Help
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}