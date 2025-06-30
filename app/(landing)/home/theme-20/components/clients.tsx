'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Clients() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.clients.title}
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.clients.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {copy.clients.logos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-square bg-white/80 rounded-2xl p-6 flex items-center justify-center border-2 border-dashed transition-all duration-300 group-hover:rotate-3 group-hover:bg-white" style={{ borderColor: '#8B8680' }}>
                  {/* Sketch logo placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <svg width="60" height="40" viewBox="0 0 60 40">
                      <rect x="5" y="5" width="50" height="30" stroke="#8B8680" strokeWidth="2" fill="none" strokeDasharray="3,2" rx="8" />
                      <text x="30" y="22" textAnchor="middle" fontSize="10" fill="#36454F" fontWeight="bold">
                        {client.name}
                      </text>
                    </svg>
                  </div>

                  {/* Corner doodles */}
                  <div className="absolute top-1 left-1">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <circle cx="6" cy="6" r="4" stroke="#87CEEB" strokeWidth="1" fill="none" />
                    </svg>
                  </div>
                  <div className="absolute bottom-1 right-1">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path d="M2,6 Q6,2 10,6" stroke="#87CEEB" strokeWidth="1" fill="none" />
                    </svg>
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