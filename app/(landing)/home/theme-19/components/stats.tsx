'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Stats() {
  const [counts, setCounts] = useState(copy.stats.items.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          copy.stats.items.forEach((item, index) => {
            const targetNumber = parseInt(item.number.replace(/\D/g, ''))
            let currentNumber = 0
            const increment = targetNumber / 60
            
            const timer = setInterval(() => {
              currentNumber += increment
              if (currentNumber >= targetNumber) {
                currentNumber = targetNumber
                clearInterval(timer)
              }
              
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(currentNumber)
                return newCounts
              })
            }, 50)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Art Deco Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 215, 0, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(205, 127, 50, 0.3) 0%, transparent 50%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(255, 215, 0, 0.1) 60px,
              rgba(255, 215, 0, 0.1) 62px
            )
          `
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.stats.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.stats.subtitle}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Art Deco Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-yellow-400/20 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-yellow-400/50"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-yellow-400/50"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-yellow-400/50"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-yellow-400/50"></div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                      {hasAnimated 
                        ? stat.number.includes('+') 
                          ? `${counts[index]}+`
                          : stat.number.includes('%')
                          ? `${counts[index]}%`
                          : stat.number.includes('/')
                          ? stat.number
                          : counts[index]
                        : '0'
                      }
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'serif' }}>
                    {stat.label}
                  </h3>

                  {/* Art Deco Accent Line */}
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto relative">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-yellow-400 rotate-45"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-20 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rotate-45 relative">
                  <div className="absolute inset-1 bg-black rotate-45"></div>
                </div>
              </div>
              <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rotate-45"></div>
              <div className="absolute left-3/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-yellow-400 rotate-45"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 