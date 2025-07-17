'use client'

import { motion } from 'framer-motion'
import { Circle, Triangle, Square, Hexagon } from 'lucide-react'

const symbols = [
  { 
    icon: Circle, 
    name: 'Origin', 
    description: 'Return to source consciousness',
    position: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
  },
  { 
    icon: Triangle, 
    name: 'Order', 
    description: 'Structure and clarity',
    position: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2'
  },
  { 
    icon: Square, 
    name: 'Chaos', 
    description: 'Creative turbulence',
    position: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
  },
  { 
    icon: Hexagon, 
    name: 'Echo', 
    description: 'Reflective resonance',
    position: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
  }
]

export default function SymbolCompass() {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-4">
            Symbol Compass
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Navigate between Order, Chaos, Origin, and Echo.
          </p>
        </motion.div>

        {/* Compass Container */}
        <div className="relative w-80 h-80 mx-auto">
          {/* Center Circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Symbol Points */}
          {symbols.map((symbol, index) => {
            const Icon = symbol.icon
            return (
              <motion.div
                key={symbol.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className={`absolute ${symbol.position} group cursor-pointer`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-slate-900/60 border border-slate-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-950/20"
                >
                  <Icon className="text-slate-400 group-hover:text-blue-300 transition-colors duration-300" size={24} />
                </motion.div>
                
                {/* Symbol Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-lg p-3 min-w-max"
                >
                  <p className="font-mono text-sm text-slate-200 font-medium">{symbol.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{symbol.description}</p>
                </motion.div>
              </motion.div>
            )
          })}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
            <motion.circle
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
              viewport={{ once: true }}
              cx="160"
              cy="160"
              r="120"
              fill="none"
              stroke="rgb(71, 85, 105)"
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-slate-500 font-mono text-sm mt-12"
        >
          Hover symbols to reveal their essence
        </motion.p>
      </div>
    </section>
  )
}