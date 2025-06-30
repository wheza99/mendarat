'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#C7C5B8' }}>
      {/* Brutalist Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      {/* Industrial Corner Elements */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-black border-r-8 border-b-8" style={{ borderColor: '#4A5568' }} />
      <div className="absolute top-0 right-0 w-20 h-20 bg-black border-l-8 border-b-8" style={{ borderColor: '#4A5568' }} />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-black border-r-8 border-t-8" style={{ borderColor: '#4A5568' }} />
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-black border-l-8 border-t-8" style={{ borderColor: '#4A5568' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-wider mb-6">
              {copy.services.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-black font-medium">
              {copy.services.subtitle}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-black p-8 border-8 hover:scale-105 transition-all duration-300"
                     style={{ borderColor: '#4A5568' }}>
                  
                  {/* Corner Industrial Elements */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-8" style={{ borderColor: '#FF6B35' }}>
                    <div className="w-full h-full bg-black" />
                  </div>
                  <div className="absolute top-0 right-0 w-12 h-12 border-8" style={{ borderColor: '#FF6B35' }}>
                    <div className="w-full h-full bg-black" />
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center text-4xl">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-white mb-6 tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <div className="relative">
                    <p className="text-white leading-relaxed font-medium" style={{ color: '#C7C5B8' }}>
                      {service.description}
                    </p>
                    {/* Industrial Line */}
                    <div className="mt-6 w-full h-1" style={{ backgroundColor: '#FF6B35' }} />
                  </div>

                  {/* Industrial Pattern */}
                  <div className="absolute bottom-4 right-4">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-white opacity-30"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Industrial Elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute top-4 left-4 w-8 h-8 border-4" style={{ borderColor: '#FF6B35' }} />
                    <div className="absolute top-4 right-4 w-8 h-8 border-4" style={{ borderColor: '#FF6B35' }} />
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-4" style={{ borderColor: '#FF6B35' }} />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-4" style={{ borderColor: '#FF6B35' }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Industrial Element */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center mt-20"
          >
            <div className="relative">
              {/* Main Structure */}
              <div className="w-80 h-16 bg-black border-8" style={{ borderColor: '#4A5568' }}>
                <div className="flex justify-between items-center h-full px-4">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-8"
                      style={{ backgroundColor: i % 2 === 0 ? '#FF6B35' : '#8B8680' }}
                      animate={{ scaleY: [1, 0.3, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Side Connectors */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-black border-4" style={{ borderColor: '#4A5568' }}>
                <div className="w-full h-full border-2" style={{ borderColor: '#FF6B35' }} />
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-12 bg-black border-4" style={{ borderColor: '#4A5568' }}>
                <div className="w-full h-full border-2" style={{ borderColor: '#FF6B35' }} />
              </div>

              {/* Top/Bottom Connectors */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-8 bg-black border-4" style={{ borderColor: '#4A5568' }} />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-8 bg-black border-4" style={{ borderColor: '#4A5568' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 