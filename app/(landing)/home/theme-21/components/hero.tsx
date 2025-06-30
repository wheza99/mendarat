'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ backgroundColor: '#8B8680' }}>
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(26, 26, 26, 0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(26, 26, 26, 0.3) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Industrial Structural Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Industrial Beam */}
        <div className="absolute top-0 left-0 w-full h-4" style={{ backgroundColor: '#4A5568' }}>
          <div className="flex justify-between h-full">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-full bg-black" />
            ))}
          </div>
        </div>

        {/* Brutalist Geometric Shapes */}
        <motion.div
          className="absolute top-32 right-20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 bg-black transform rotate-45 relative">
            <div className="absolute inset-2 border-4" style={{ borderColor: '#FF6B35' }} />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-16 h-32 bg-black relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4" style={{ backgroundColor: '#FF6B35' }} />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-4" style={{ backgroundColor: '#FF6B35' }} />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-block px-6 py-3 bg-black text-white font-bold tracking-widest border-4" style={{ borderColor: '#FF6B35' }}>
                  <span className="text-sm">
                    {copy.hero.badge}
                  </span>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none text-black mb-4">
                  <div className="relative">
                    {copy.hero.title}
                    {/* Brutalist Underline */}
                    <div className="absolute -bottom-2 left-0 w-full h-3" style={{ backgroundColor: '#FF6B35' }} />
                  </div>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#4A5568' }}>
                  {copy.hero.subtitle}
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12"
              >
                <div className="relative bg-black p-6 border-4" style={{ borderColor: '#4A5568' }}>
                  <p className="text-lg md:text-xl leading-relaxed text-white font-medium">
                    {copy.hero.description}
                  </p>
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4" style={{ borderColor: '#FF6B35' }} />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4" style={{ borderColor: '#FF6B35' }} />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4" style={{ borderColor: '#FF6B35' }} />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4" style={{ borderColor: '#FF6B35' }} />
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-black text-white font-bold text-lg tracking-wide border-4 hover:bg-white hover:text-black transition-colors duration-300"
                  style={{ borderColor: '#FF6B35' }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>{copy.hero.primaryCta}</span>
                    <span className="text-xl">🔧</span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-4 border-black bg-transparent text-black font-bold text-lg tracking-wide hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>{copy.hero.secondaryCta}</span>
                    <span className="text-xl">🏭</span>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative"
              >
                {/* Main Industrial Structure */}
                <div className="relative w-full h-96 bg-black border-4" style={{ borderColor: '#4A5568' }}>
                  {/* Industrial Grid Pattern */}
                  <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="border-2"
                        style={{ borderColor: '#FF6B35' }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>

                  {/* Central Orange Element */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-20 h-20 border-8"
                      style={{ backgroundColor: '#FF6B35', borderColor: '#4A5568' }}
                      animate={{ rotate: [0, 90, 180, 270, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  {/* Corner Elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-white" />
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-white" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 