'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Process() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.process.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.process.subtitle}
            </p>
          </motion.div>

          <div className="space-y-12">
            {copy.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <div className="text-2xl font-bold text-black">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-gray-900/70 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
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