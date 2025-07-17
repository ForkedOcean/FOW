'use client'

import { motion } from 'framer-motion'

interface WaveBackgroundProps {
  timePhase: 'night' | 'dawn' | 'day' | 'dusk'
}

export default function WaveBackground({ timePhase }: WaveBackgroundProps) {
  const waveColors = {
    night: '#1e293b',
    dawn: '#1e40af', 
    day: '#475569',
    dusk: '#7c3aed'
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Multiple wave layers for depth */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            x: [0, -100, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            opacity: 0.1 - i * 0.02,
            transform: `translateY(${i * 100}px) scale(${1 + i * 0.2})`
          }}
        >
          <svg
            width="120%"
            height="120%" 
            viewBox="0 0 1200 800"
            className="absolute"
          >
            <motion.path
              d={`M0,400 Q300,${350 - i * 20} 600,400 T1200,400 V800 H0 V400`}
              fill={waveColors[timePhase]}
              animate={{
                d: [
                  `M0,400 Q300,${350 - i * 20} 600,400 T1200,400 V800 H0 V400`,
                  `M0,${420 + i * 10} Q300,${370 - i * 15} 600,${420 + i * 10} T1200,${420 + i * 10} V800 H0 V400`,
                  `M0,400 Q300,${350 - i * 20} 600,400 T1200,400 V800 H0 V400`
                ]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-slate-400 rounded-full opacity-30"
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%'
          }}
        />
      ))}
    </div>
  )
}