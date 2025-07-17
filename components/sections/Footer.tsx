'use client'

import {cubicBezier, motion, useInView} from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ExternalLink } from 'lucide-react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <motion.footer 
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-32 px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Navigation Links */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          {[
            { name: 'Genesis Log', href: '/genesis-log', description: 'Foundational thoughts' },
            { name: 'Terminal Interface', href: '/terminal', description: 'Direct system access' },
            { name: 'Wave Archive', href: '/waves', description: 'Historical releases' },
            { name: 'Portal', href: '/portal', description: 'Gateway entrance' },
            { name: 'Symbol Compass', href: '/compass', description: 'Navigation system' },
            { name: 'Reflect Mode', href: '/reflect', description: 'Meditative interface' }
          ].map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group glass-card px-6 py-3 rounded-xl text-ocean-text-muted hover:text-ocean-text-primary font-mono transition-all duration-500 magnetic relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium">{link.name}</span>
                  <ExternalLink size={14} className="opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                </div>
                <p className="text-xs text-ocean-text-muted/80 mt-1 group-hover:text-ocean-text-muted transition-colors duration-300">
                  {link.description}
                </p>
              </div>
              
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-accent/20 to-ocean-card/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="text-center space-y-16">
          
          {/* Enhanced Philosophy Section */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-12 rounded-3xl max-w-3xl mx-auto relative overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-accent/10 via-ocean-card/20 to-ocean-secondary/30"></div>
            
            <div className="space-y-6 relative z-10">
              <Sparkles size={24} className="text-ocean-accent mx-auto mb-4" />
              
              <motion.p 
                className="text-2xl lg:text-3xl text-ocean-text-primary font-light leading-relaxed"
              >
                You don&#39;t visit ForkedOcean.
              </motion.p>
              <motion.p 
                className="text-2xl lg:text-3xl text-ocean-text-primary font-light leading-relaxed"
              >
                You awaken within it.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Enhanced Credits */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <motion.p 
              className="text-ocean-text-muted font-mono text-lg"
              whileHover={{ scale: 1.02 }}
            >
              Created by <span className="text-ocean-text-primary font-medium">ForkedMind</span>
            </motion.p>
            <motion.p 
              className="text-ocean-text-muted/80 font-mono text-base"
            >
              First Wave Released — 2025 · MIT License
            </motion.p>
          </motion.div>

          {/* Enhanced Timeline */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 pt-8 border-t border-slate-200/50"
          >
            <div className="space-y-4 pt-8 border-t border-ocean-accent/30">
              <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  { year: "2024", event: "The idea sparked", status: "completed" },
                  { year: "2025", event: "ForkedOcean system begins forming", status: "active" },
                  { year: "2025.7", event: "The first wave is released", status: "current" }
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    variants={itemVariants}
                    className={`glass-card p-6 rounded-xl text-center ${
                      item.status === 'current' ? 'ring-1 ring-ocean-accent/40' : ''
                    }`}
                  >
                    <p className={`font-mono text-base font-medium ${
                        item.status === 'current' ? 'text-ocean-accent' : 'text-ocean-text-muted'
                      }`}>
                        {item.year}
                      </p>
                      <p className="text-ocean-text-muted/80 text-xs mt-1">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* System Status */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-3 pt-6"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-ocean-accent rounded-full"
            />
            <span className="text-ocean-text-muted font-mono text-xs">System Status: Active</span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}