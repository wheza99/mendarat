'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { copy } from '../copy'

export default function Hero() {
  const [scanlines, setScanlines] = useState(true)
  const [glitchText, setGlitchText] = useState('')
  
  const originalText = copy.hero.title
  const glitchChars = ['▓', '░', '▒', '█', '▄', '▀', '■', '□', '▪', '▫']
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        let glitched = ''
        for (let i = 0; i < originalText.length; i++) {
          if (Math.random() > 0.7) {
            glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)]
          } else {
            glitched += originalText[i]
          }
        }
        setGlitchText(glitched)
        setTimeout(() => setGlitchText(''), 100)
      }
    }, 2000)
    
    return () => clearInterval(glitchInterval)
  }, [])
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center" style={{ backgroundColor: '#1a0033' }}>
      {/* CRT Scanlines Effect */}
      {scanlines && (
        <div className="absolute inset-0 pointer-events-none z-20" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(50, 205, 50, 0.03) 2px,
            rgba(50, 205, 50, 0.03) 4px
          )`
        }} />
      )}
      
      {/* Pixel Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(50, 205, 50, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50, 205, 50, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Animated Pixel Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating 8-bit Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              backgroundColor: i % 4 === 0 ? '#32CD32' : i % 4 === 1 ? '#FF1493' : i % 4 === 2 ? '#00BFFF' : '#FFD700'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Arcade Border Elements */}
        <div className="absolute top-8 left-8 w-32 h-8 border-4" style={{ borderColor: '#32CD32' }}>
          <div className="w-full h-full grid grid-cols-8">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full"
                style={{ backgroundColor: '#32CD32' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-8 right-8 w-32 h-8 border-4" style={{ borderColor: '#FF1493' }}>
          <div className="w-full h-full grid grid-cols-8">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="h-full"
                style={{ backgroundColor: '#FF1493' }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              {/* 8-bit Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="inline-block px-6 py-3 border-4 text-black font-bold tracking-wider pixelated"
                     style={{ backgroundColor: '#32CD32', borderColor: '#228B22' }}>
                  <span className="text-sm font-mono">
                    {copy.hero.badge}
                  </span>
                </div>
              </motion.div>

              {/* Glitch Title */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-4 font-mono"
                    style={{ color: '#32CD32', textShadow: '0 0 20px #32CD32, 4px 4px 0px #228B22' }}>
                  {glitchText || copy.hero.title}
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono"
                    style={{ color: '#FF1493', textShadow: '0 0 15px #FF1493' }}>
                  {copy.hero.subtitle}
                </h2>
              </motion.div>

              {/* 8-bit Description Box */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-12"
              >
                <div className="relative border-4 p-6"
                     style={{ backgroundColor: '#000033', borderColor: '#00BFFF' }}>
                  <p className="text-lg md:text-xl leading-relaxed font-mono"
                     style={{ color: '#00BFFF' }}>
                    {copy.hero.description}
                  </p>
                  {/* Pixel Corner Decorations */}
                  <div className="absolute -top-2 -left-2 w-4 h-4" style={{ backgroundColor: '#FFD700' }} />
                  <div className="absolute -top-2 -right-2 w-4 h-4" style={{ backgroundColor: '#FFD700' }} />
                  <div className="absolute -bottom-2 -left-2 w-4 h-4" style={{ backgroundColor: '#FFD700' }} />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4" style={{ backgroundColor: '#FFD700' }} />
                </div>
              </motion.div>

              {/* Arcade Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-8 py-4 font-bold text-lg tracking-wide font-mono border-4 transition-all duration-200"
                  style={{ 
                    backgroundColor: '#FFD700', 
                    borderColor: '#FFA500',
                    color: '#1a0033',
                    boxShadow: '0 8px 0 #CC8400, 0 8px 20px rgba(255, 215, 0, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 12px 0 #CC8400, 0 12px 25px rgba(255, 215, 0, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 8px 0 #CC8400, 0 8px 20px rgba(255, 215, 0, 0.4)'
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>{copy.hero.primaryCta}</span>
                    <span className="text-xl">🕹️</span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-4 font-bold text-lg tracking-wide font-mono transition-all duration-200"
                  style={{ 
                    backgroundColor: 'transparent', 
                    borderColor: '#FF1493',
                    color: '#FF1493',
                    boxShadow: '0 0 20px rgba(255, 20, 147, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF1493'
                    e.currentTarget.style.color = '#1a0033'
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 20, 147, 0.6)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#FF1493'
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 20, 147, 0.3)'
                  }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>{copy.hero.secondaryCta}</span>
                    <span className="text-xl">🏆</span>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* 8-bit Visual Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="relative"
              >
                {/* Main Arcade Machine */}
                <div className="relative w-full h-96 border-8"
                     style={{ backgroundColor: '#000033', borderColor: '#32CD32' }}>
                  
                  {/* Screen */}
                  <div className="absolute top-4 left-4 right-4 h-48 border-4"
                       style={{ backgroundColor: '#1a0033', borderColor: '#00BFFF' }}>
                    
                    {/* Pixel Art Display */}
                    <div className="w-full h-full grid grid-cols-12 grid-rows-8 gap-1 p-2">
                      {[...Array(96)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-full h-full"
                          style={{
                            backgroundColor: 
                              i % 15 === 0 ? '#32CD32' :
                              i % 15 === 3 ? '#FF1493' :
                              i % 15 === 7 ? '#00BFFF' :
                              i % 15 === 11 ? '#FFD700' : 'transparent'
                          }}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.05
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Control Panel */}
                  <div className="absolute bottom-4 left-4 right-4 h-20 border-4"
                       style={{ backgroundColor: '#2a0044', borderColor: '#FF1493' }}>
                    
                    {/* Arcade Buttons */}
                    <div className="flex justify-center items-center h-full gap-4">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-8 h-8 rounded-full border-2"
                          style={{
                            backgroundColor: i % 3 === 0 ? '#32CD32' : i % 3 === 1 ? '#FF1493' : '#00BFFF',
                            borderColor: '#FFD700'
                          }}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Side Pixel Decorations */}
                  <div className="absolute -left-8 top-8 w-8 h-80 grid grid-rows-20">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-full h-full border"
                        style={{
                          backgroundColor: i % 2 === 0 ? '#32CD32' : '#FF1493',
                          borderColor: '#FFD700'
                        }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.05
                        }}
                      />
                    ))}
                  </div>

                  <div className="absolute -right-8 top-8 w-8 h-80 grid grid-rows-20">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-full h-full border"
                        style={{
                          backgroundColor: i % 2 === 0 ? '#00BFFF' : '#FFD700',
                          borderColor: '#FF1493'
                        }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.05
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Pixel Bar */}
      <div className="absolute bottom-0 left-0 w-full h-4">
        <div className="flex h-full">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-1 h-full"
              style={{
                backgroundColor: 
                  i % 4 === 0 ? '#32CD32' :
                  i % 4 === 1 ? '#FF1493' :
                  i % 4 === 2 ? '#00BFFF' : '#FFD700'
              }}
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.05
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 