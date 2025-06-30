'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Process() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.process.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.process.subtitle}
            </p>
          </motion.div>

          <div className="space-y-16">
            {copy.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-12`}
              >
                {/* Step Content */}
                <div className="flex-1">
                  <div className="relative p-8 rounded-3xl border-2 border-dashed" style={{ 
                    backgroundColor: '#F5F5DC',
                    borderColor: '#8B8680'
                  }}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-dashed mr-4" style={{ 
                        backgroundColor: '#87CEEB',
                        borderColor: '#36454F'
                      }}>
                        <span className="font-bold text-lg" style={{ color: '#36454F' }}>
                          {step.number}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold" style={{ color: '#36454F', fontFamily: 'serif' }}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg leading-relaxed" style={{ color: '#8B8680' }}>
                      {step.description}
                    </p>

                    {/* Hand-drawn corner decoration */}
                    <div className="absolute top-2 right-2">
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M4,4 Q12,8 20,4 M4,20 Q12,16 20,20" stroke="#87CEEB" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                <div className="flex-shrink-0">
                  <svg width="80" height="80" viewBox="0 0 80 80" className={index % 2 === 0 ? '' : 'rotate-180'}>
                    <path
                      d="M10,40 Q40,20 70,40"
                      stroke="#87CEEB"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="5,3"
                    />
                    <circle cx="70" cy="40" r="4" fill="#87CEEB" />
                  </svg>
                </div>

                {/* Step Illustration */}
                <div className="flex-1 flex justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center border-2 border-dashed" style={{ borderColor: '#8B8680' }}>
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <rect x="10" y="10" width="60" height="60" stroke="#36454F" strokeWidth="2" fill="none" strokeDasharray="4,2" rx="10" />
                      <circle cx="40" cy="40" r="15" stroke="#87CEEB" strokeWidth="2" fill="none" />
                      <text x="40" y="45" textAnchor="middle" fontSize="12" fill="#36454F">STEP</text>
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