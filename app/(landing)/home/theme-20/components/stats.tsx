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
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      {/* Paper Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(54, 69, 79, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(54, 69, 79, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.stats.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
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
                {/* Sketchy Card */}
                <div 
                  className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border-2 border-dashed transition-all duration-300 hover:bg-white/90"
                  style={{ borderColor: '#8B8680' }}
                >
                  {/* Hand-drawn corner doodles */}
                  <div className="absolute top-2 left-2">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M2,2 Q8,6 14,2" stroke="#87CEEB" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute top-2 right-2">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="6" stroke="#87CEEB" strokeWidth="2" fill="none" strokeDasharray="2,1" />
                    </svg>
                  </div>

                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold" style={{ color: '#36454F' }}>
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
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#36454F', fontFamily: 'serif' }}>
                    {stat.label}
                  </h3>

                  {/* Hand-drawn underline */}
                  <motion.svg
                    width="60"
                    height="8"
                    viewBox="0 0 60 8"
                    className="mx-auto"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <path
                      d="M5,4 Q30,2 55,4"
                      stroke="#87CEEB"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Doodle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center mt-16"
          >
            <svg width="120" height="60" viewBox="0 0 120 60">
              <path
                d="M10,30 Q30,10 50,30 Q70,50 90,30 Q110,10 120,30"
                stroke="#8B8680"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="3,2"
              />
              <circle cx="30" cy="30" r="3" fill="#87CEEB" />
              <circle cx="90" cy="30" r="3" fill="#87CEEB" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 