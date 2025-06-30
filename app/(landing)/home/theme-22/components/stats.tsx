'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Stats() {
  const [counts, setCounts] = useState(copy.stats.items.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const [achievementSound, setAchievementSound] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setAchievementSound(true)
          
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
            }, 30)
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ backgroundColor: '#000033' }}>
      {/* Pixel Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 20, 147, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 20, 147, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Achievement Notification */}
      {achievementSound && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 border-4 font-mono font-bold"
          style={{ backgroundColor: '#FFD700', borderColor: '#FFA500', color: '#1a0033' }}
        >
          🏆 ACHIEVEMENT UNLOCKED! 🏆
        </motion.div>
      )}

      {/* Floating Pixel Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 4 === 0 ? '#32CD32' : i % 4 === 1 ? '#FF1493' : i % 4 === 2 ? '#00BFFF' : '#FFD700'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
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
            <div className="relative inline-block mb-8">
              <h2 className="text-4xl md:text-6xl font-black font-mono tracking-wider mb-6"
                  style={{ color: '#32CD32', textShadow: '0 0 20px #32CD32, 4px 4px 0px #228B22' }}>
                {copy.stats.title}
              </h2>
              {/* Pixel Underline */}
              <div className="absolute -bottom-2 left-0 w-full h-4 flex">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 h-full"
                    style={{ backgroundColor: i % 2 === 0 ? '#FFD700' : '#FF1493' }}
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
            <p className="text-xl max-w-3xl mx-auto font-mono font-medium"
               style={{ color: '#00BFFF' }}>
              {copy.stats.subtitle}
            </p>
          </motion.div>

          {/* Stats Arcade Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Arcade Card */}
                <div 
                  className="relative p-8 text-center border-4 font-mono transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#1a0033',
                    borderColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                  }}
                >
                  {/* Achievement Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 border-2 flex items-center justify-center"
                         style={{ 
                           backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700',
                           borderColor: '#1a0033'
                         }}>
                      <span className="text-xs font-bold" style={{ color: '#1a0033' }}>
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Pixel Corner Decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4" 
                       style={{ backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700' }} />
                  <div className="absolute top-2 right-2 w-4 h-4" 
                       style={{ backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700' }} />
                  <div className="absolute bottom-2 left-2 w-4 h-4" 
                       style={{ backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700' }} />
                  <div className="absolute bottom-2 right-2 w-4 h-4" 
                       style={{ backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700' }} />

                  {/* Number Display */}
                  <div className="mb-6">
                    <motion.div
                      className="relative"
                      animate={{ 
                        textShadow: hasAnimated ? [
                          '0 0 5px currentColor',
                          '0 0 20px currentColor',
                          '0 0 5px currentColor'
                        ] : '0 0 5px currentColor'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-5xl md:text-6xl font-black"
                            style={{ 
                              color: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                            }}>
                        {hasAnimated 
                          ? stat.number.includes('+') 
                            ? `${counts[index]}+`
                            : stat.number.includes('%')
                            ? `${counts[index]}%`
                            : counts[index]
                          : '0'
                        }
                      </span>
                    </motion.div>
                  </div>

                  {/* Label */}
                  <div className="relative">
                    <h3 className="text-lg font-bold mb-4 tracking-wide uppercase"
                        style={{ color: '#FFFFFF' }}>
                      {stat.label}
                    </h3>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-3 border-2 border-white">
                      <motion.div
                        className="h-full"
                        style={{ 
                          backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: hasAnimated ? '100%' : 0 }}
                        transition={{ duration: 2, delay: index * 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{ 
                      backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700',
                      boxShadow: `0 0 30px ${index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'}`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Arcade Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex justify-center mt-20"
          >
            <div className="relative">
              {/* Main Console */}
              <div className="w-60 h-16 border-4"
                   style={{ backgroundColor: '#1a0033', borderColor: '#32CD32' }}>
                <div className="flex justify-between items-center h-full px-4">
                  {/* Arcade Buttons */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-6 border-2"
                      style={{
                        backgroundColor: i % 4 === 0 ? '#32CD32' : i % 4 === 1 ? '#FF1493' : i % 4 === 2 ? '#00BFFF' : '#FFD700',
                        borderColor: '#FFFFFF'
                      }}
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
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
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-12 grid grid-rows-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full h-full border"
                    style={{
                      backgroundColor: i % 3 === 0 ? '#FF1493' : i % 3 === 1 ? '#00BFFF' : '#FFD700',
                      borderColor: '#32CD32'
                    }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
              
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-12 grid grid-rows-3">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-full h-full border"
                    style={{
                      backgroundColor: i % 3 === 0 ? '#32CD32' : i % 3 === 1 ? '#FF1493' : '#00BFFF',
                      borderColor: '#FFD700'
                    }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 