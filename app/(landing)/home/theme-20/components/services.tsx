'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Services() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Sketch Paper Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(54, 69, 79, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(139, 134, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px, 40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.services.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.services.subtitle}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div 
                  className="relative p-8 rounded-3xl border-2 border-dashed transition-all duration-500 group-hover:bg-cream/50"
                  style={{ 
                    borderColor: '#8B8680',
                    backgroundColor: '#F5F5DC'
                  }}
                >
                  {/* Sketchy Corner Elements */}
                  <div className="absolute top-3 left-3">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path d="M3,3 L17,3 M3,3 L3,17" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="absolute top-3 right-3">
                    <svg width="20" height="20" viewBox="0 0 20 20">
                      <path d="M17,3 L3,3 M17,3 L17,17" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-2 border-dashed group-hover:rotate-3 transition-transform duration-300" style={{ 
                      backgroundColor: '#87CEEB', 
                      borderColor: '#36454F'
                    }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#36454F', fontFamily: 'serif' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#8B8680' }}>
                    {service.description}
                  </p>

                  {/* Hand-drawn arrow */}
                  <div className="flex items-center">
                    <span className="font-semibold mr-3" style={{ color: '#36454F' }}>
                      Pelajari Lebih
                    </span>
                    <motion.svg
                      width="40"
                      height="20"
                      viewBox="0 0 40 20"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        d="M5,10 Q20,5 35,10 M30,6 Q35,10 30,14"
                        stroke="#87CEEB"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 