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
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255, 215, 0, 0.1) 20px,
              rgba(255, 215, 0, 0.1) 40px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(205, 127, 50, 0.1) 20px,
              rgba(205, 127, 50, 0.1) 40px
            )
          `
        }} />
      </div>

      {/* Geometric Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Art Deco Corner */}
        <div className="absolute top-0 left-0 w-96 h-96">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#CD7F32', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#FFD700', stopOpacity: 0.4 }} />
              </linearGradient>
            </defs>
            <path 
              d="M 0 0 L 200 0 L 180 20 L 160 40 L 140 60 L 120 80 L 100 100 L 80 120 L 60 140 L 40 160 L 20 180 L 0 200 Z" 
              fill="url(#goldGradient)" 
            />
            <path 
              d="M 0 0 L 100 0 L 90 10 L 80 20 L 70 30 L 60 40 L 50 50 L 40 60 L 30 70 L 20 80 L 10 90 L 0 100 Z" 
              fill="url(#goldGradient)" 
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Bottom Right Art Deco Corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rotate-180">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path 
              d="M 0 0 L 200 0 L 180 20 L 160 40 L 140 60 L 120 80 L 100 100 L 80 120 L 60 140 L 40 160 L 20 180 L 0 200 Z" 
              fill="url(#goldGradient)" 
            />
          </svg>
        </div>

        {/* Floating Gold Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Parallax Gold Accent */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-60"
        style={{
          left: mousePosition.x * 0.02,
          top: mousePosition.y * 0.02,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 15 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-400/30 rounded-full backdrop-blur-sm">
              <span className="text-yellow-400 font-medium text-sm tracking-wide">
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
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                {copy.hero.title}
              </span>
              <span className="block text-2xl md:text-4xl lg:text-5xl font-light text-yellow-100 mt-2" style={{ fontFamily: 'serif' }}>
                {copy.hero.subtitle}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'serif' }}
          >
            {copy.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg rounded-lg shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                <span>{copy.hero.primaryCta}</span>
                <span className="text-xl">→</span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span>{copy.hero.secondaryCta}</span>
                <span className="text-xl">♦</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Art Deco Decorative Line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="mt-16 flex justify-center"
          >
            <div className="w-96 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent relative">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rotate-45"></div>
              <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rotate-45"></div>
              <div className="absolute left-2/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-yellow-400"
        >
          <span className="text-sm font-medium mb-2 tracking-wide">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-yellow-400 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  )
} 