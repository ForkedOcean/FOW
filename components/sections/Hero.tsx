'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Waves, Sparkles } from 'lucide-react'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-32 relative">
      <motion.div 
        style={{ y, opacity }}
        className="text-center space-y-16 max-w-7xl relative"
      >
        {/* Floating Logo with Enhanced Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.4, 0, 0.2, 1],
            type: "spring",
            stiffness: 120,
            damping: 25
          }}
          className="flex justify-center relative"
        >
          <div className="floating magnetic">
            <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
              <img 
                src="/Logo_svg.svg" 
                alt="ForkedOcean" 
                className="w-24 h-24 relative z-10"
              />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="space-y-8"
        >
          <div className="relative">
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight gradient-text leading-none"
            >
              ForkedOcean
            </motion.h1>
            
            {/* Subtitle with enhanced animation */}
            <motion.p 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="text-xl md:text-2xl lg:text-3xl font-light text-ocean-text-muted tracking-wide mt-6"
            >
              Your Ocean. Your Control.
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 1.2, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 rounded-3xl magnetic relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-accent/10 via-ocean-card/20 to-ocean-secondary/30"></div>
            
            <div className="relative z-10">
              <motion.blockquote 
                className="text-xl md:text-2xl lg:text-3xl text-ocean-text-primary leading-relaxed font-light mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                "The sea forks when thought begins."
              </motion.blockquote>
              
              <motion.cite 
                className="block text-ocean-text-muted font-mono text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                — Genesis Log, Wave 0
              </motion.cite>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.8, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="space-y-6 max-w-3xl mx-auto"
        >
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-ocean-text-muted leading-relaxed font-light"
          >
            A minimal, liquid, and deeply intelligent web presence for the ForkedOcean system.
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg text-ocean-text-muted/80 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            Not just a project — it's a thinking framework.
          </motion.p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 2.5, 
            ease: [0.4, 0, 0.2, 1] 
          }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group liquid-button px-10 py-3 rounded-xl font-mono text-ocean-text-primary text-base transition-all duration-500 flex items-center gap-3 magnetic"
          >
            Enter Ocean
            <motion.div
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group glass-card px-10 py-3 rounded-xl font-mono text-ocean-text-primary text-base transition-all duration-500 flex items-center gap-3 magnetic"
          >
            Genesis Log
            <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}