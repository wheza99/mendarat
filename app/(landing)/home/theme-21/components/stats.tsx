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
            const increment = targetNumber / 50
            
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-black">
      {/* Brutalist Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(74, 85, 104, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 85, 104, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Industrial Side Elements */}
      <div className="absolute left-0 top-0 w-6 h-full" style={{ backgroundColor: '#4A5568' }}>
        <div className="flex flex-col justify-between h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full h-2 bg-black" />
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-0 w-6 h-full" style={{ backgroundColor: '#4A5568' }}>
        <div className="flex flex-col justify-between h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="w-full h-2 bg-black" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-wider">
                {copy.stats.title}
              </h2>
              {/* Industrial Underline */}
              <div className="absolute -bottom-2 left-0 w-full h-4" style={{ backgroundColor: '#FF6B35' }} />
            </div>
            <p className="text-xl max-w-3xl mx-auto text-white mt-8 font-medium" style={{ color: '#C7C5B8' }}>
              {copy.stats.subtitle}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Brutalist Card */}
                <div 
                  className="relative p-8 text-center border-4 transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#8B8680',
                    borderColor: '#4A5568'
                  }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4" style={{ borderColor: '#FF6B35' }} />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4" style={{ borderColor: '#FF6B35' }} />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4" style={{ borderColor: '#FF6B35' }} />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4" style={{ borderColor: '#FF6B35' }} />

                  {/* Number Display */}
                  <div className="mb-6">
                    <div className="relative">
                      <span className="text-5xl md:text-6xl font-black text-black">
                        {hasAnimated 
                          ? stat.number.includes('+') 
                            ? `${counts[index]}+`
                            : stat.number.includes('%')
                            ? `${counts[index]}%`
                            : counts[index]
                          : '0'
                        }
                      </span>
                      {/* Number Background */}
                      <div className="absolute inset-0 bg-black opacity-10" />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-black mb-4 tracking-wide uppercase">
                      {stat.label}
                    </h3>
                    {/* Industrial Line */}
                    <div className="w-full h-2" style={{ backgroundColor: '#FF6B35' }} />
                  </div>

                  {/* Industrial Elements */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-black transform rotate-45" />
                  <div className="absolute top-4 right-4 w-4 h-4 bg-black transform rotate-45" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Industrial Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center mt-20"
          >
            <div className="relative">
              <div className="w-40 h-12 bg-black border-4" style={{ borderColor: '#4A5568' }}>
                <div className="flex justify-between items-center h-full px-2">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-full"
                      style={{ backgroundColor: '#FF6B35' }}
                      animate={{ scaleY: [1, 0.5, 1] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Side attachments */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-black" />
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-4 h-8 bg-black" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 