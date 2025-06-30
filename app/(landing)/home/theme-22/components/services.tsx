'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#2a0044' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black font-mono tracking-wider mb-6"
                style={{ color: '#FFD700', textShadow: '0 0 20px #FFD700' }}>
              {copy.services.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto font-mono font-medium"
               style={{ color: '#00BFFF' }}>
              {copy.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative border-4 p-8 font-mono transition-all duration-300 hover:scale-105"
                     style={{ 
                       backgroundColor: '#1a0033', 
                       borderColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                     }}>
                  
                  <div className="mb-8 text-center">
                    <div className="inline-block w-20 h-20 border-4 border-white flex items-center justify-center text-4xl"
                         style={{ 
                           backgroundColor: index % 4 === 0 ? '#32CD32' : index % 4 === 1 ? '#FF1493' : index % 4 === 2 ? '#00BFFF' : '#FFD700'
                         }}>
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black mb-6 tracking-wide text-center text-white">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed font-medium text-center"
                     style={{ color: '#00BFFF' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 