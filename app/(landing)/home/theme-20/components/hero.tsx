'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-cream overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#F5F5DC' }}>
      {/* Paper Texture Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(54, 69, 79, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 80% 80%, rgba(54, 69, 79, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(54, 69, 79, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px, 30px 30px, 100px 100px'
        }} />
      </div>

      {/* Hand-drawn Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Doodle */}
        <div className="absolute top-20 left-20">
          <motion.svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <path
              d="M20,60 Q40,20 60,60 Q80,100 100,60"
              stroke="#36454F"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="5,3"
            />
            <circle cx="60" cy="60" r="3" fill="#87CEEB" />
          </motion.svg>
        </div>

        {/* Bottom Right Sketch */}
        <div className="absolute bottom-20 right-20">
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <path
              d="M10,50 Q30,10 50,50 Q70,90 90,50"
              stroke="#8B8680"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="40" y="40" width="20" height="20"
              stroke="#36454F" strokeWidth="2"
              fill="none" rx="2"
            />
          </motion.svg>
        </div>

        {/* Floating Sketchy Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle
                cx="10"
                cy="10"
                r="8"
                stroke="#87CEEB"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3,2"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Interactive Pencil Cursor */}
      <motion.div
        className="absolute w-6 h-6 pointer-events-none z-20"
        style={{
          left: mousePosition.x * 0.05,
          top: mousePosition.y * 0.05,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
            fill="#36454F"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 border-2 border-dashed rounded-full" style={{ borderColor: '#36454F' }}>
              <span className="font-medium text-sm tracking-wide" style={{ color: '#36454F' }}>
                {copy.hero.badge}
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              <span className="block" style={{ color: '#36454F' }}>
                {copy.hero.title}
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-light mt-2" style={{ color: '#87CEEB', fontFamily: 'cursive' }}>
                {copy.hero.subtitle}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-dashed border-gray-400 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed" style={{ color: '#36454F' }}>
                {copy.hero.description}
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-bold text-lg rounded-2xl border-2 transition-all duration-300"
              style={{ 
                backgroundColor: '#36454F', 
                color: '#F5F5DC', 
                borderColor: '#36454F' 
              }}
            >
              <span className="flex items-center gap-2">
                <span>{copy.hero.primaryCta}</span>
                <span className="text-xl">✏️</span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-dashed font-bold text-lg rounded-2xl transition-all duration-300"
              style={{ 
                borderColor: '#36454F', 
                color: '#36454F' 
              }}
            >
              <span className="flex items-center gap-2">
                <span>{copy.hero.secondaryCta}</span>
                <span className="text-xl">🎨</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
              style={{ color: '#36454F' }}
            >
              <span className="text-sm font-medium mb-2 tracking-wide" style={{ fontFamily: 'cursive' }}>
                Scroll untuk melihat karya
              </span>
              <svg width="30" height="40" viewBox="0 0 30 40">
                <path
                  d="M15,5 Q15,15 15,25 M10,20 Q15,25 20,20"
                  stroke="#36454F"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="2,1"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 