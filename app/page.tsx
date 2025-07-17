'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { scrollYProgress } = useScroll()

    // Enhanced parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const combinedY2 = useTransform(scrollYProgress, [0, 1], [0, -200])
    const combinedY3 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.9, 0.7, 0.5])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    // Smooth spring animations
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
    const x = useSpring(0, springConfig)
    const y = useSpring(0, springConfig)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 60000)

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            setMousePosition({
                x: (clientX / innerWidth - 0.5) * 2,
                y: (clientY / innerHeight - 0.5) * 2
            })
            x.set((clientX / innerWidth - 0.5) * 20)
            y.set((clientY / innerHeight - 0.5) * 20)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            clearInterval(timer)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [x, y])

    return (
        <div className="min-h-screen relative overflow-hidden premium-grid bg-ocean-primary">
            {/* Enhanced ambient background layers */}
            <div className="fixed inset-0 ambient-bg" />

            {/* Dynamic floating ambient elements */}
            <motion.div
                style={{
                    y: y1,
                    opacity,
                    x: mousePosition.x * 5,
                    scale
                }}
                className="fixed top-20 left-10 w-80 h-80 bg-gradient-to-br from-ocean-accent/20 to-ocean-card/30 rounded-full blur-3xl floating"
            />

            <motion.div
                style={{
                    y: combinedY2,
                    opacity,
                    x: mousePosition.x * -8,
                }}
                className="fixed bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-ocean-secondary/40 to-ocean-accent/20 rounded-full blur-3xl floating"
            />

            {/* Third element - scroll + mouse parallax */}
            <motion.div
                style={{
                    y: combinedY3,
                    opacity,
                    x: mousePosition.x * 4,
                }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-ocean-card/30 to-ocean-accent/20 rounded-full blur-3xl floating"
            />


            {/* Enhanced time indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="fixed top-6 right-6 z-50 glass-card px-5 py-2.5 rounded-xl"
            >
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-ocean-accent rounded-full breathe"></div>
                    <span className="text-ocean-text-muted font-mono text-sm">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
                </div>
            </motion.div>

            {/* Navigation hint */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="fixed top-6 left-6 z-50 glass-card px-4 py-2 rounded-xl"
            >
                <div className="flex items-center gap-2">
                    <img src="/Logo_svg.svg" alt="ForkedOcean" className="w-4 h-4" />
                    <span className="text-ocean-text-muted font-mono text-xs">ForkedOcean</span>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-10">
                <Hero />
                <CTA />
                <Footer />
            </div>
            {/* Scroll indicator */}
            <motion.div
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border border-ocean-accent/40 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-0.5 h-2 bg-ocean-text-muted/50 rounded-full mt-1.5"
                    />
                </motion.div>
            </motion.div>

            {/* Vercel Analytics and Speed Insights */}
            <Analytics />
            <SpeedInsights />
        </div>
    )
}