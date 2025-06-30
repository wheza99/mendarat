'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.testimonials.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.testimonials.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white/90 p-8 rounded-3xl border-2 border-dashed transition-all duration-500 group-hover:rotate-1 group-hover:bg-white" style={{ borderColor: '#8B8680' }}>
                  {/* Quote mark */}
                  <div className="absolute top-4 left-4">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M7,9 Q7,6 9,6 Q11,6 11,8 Q11,12 7,12 M16,9 Q16,6 18,6 Q20,6 20,8 Q20,12 16,12" 
                            fill="#87CEEB" />
                    </svg>
                  </div>

                  {/* Testimonial text */}
                  <div className="mb-6 pt-6">
                    <p className="text-lg leading-relaxed italic" style={{ color: '#36454F' }}>
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-dashed mr-4" style={{ borderColor: '#87CEEB' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <circle cx="12" cy="10" r="4" stroke="#8B8680" strokeWidth="2" fill="none" />
                        <path d="M6,18 Q12,16 18,18" stroke="#8B8680" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: '#36454F' }}>
                        {testimonial.author}
                      </p>
                      <p className="text-sm" style={{ color: '#8B8680' }}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Hand-drawn star rating */}
                  <div className="flex justify-center mt-6">
                    <svg width="120" height="20" viewBox="0 0 120 20">
                      {[...Array(5)].map((_, i) => (
                        <path
                          key={i}
                          d={`M${12 + i * 22},4 L${14 + i * 22},8 L${18 + i * 22},8 L${15 + i * 22},11 L${16 + i * 22},15 L${12 + i * 22},13 L${8 + i * 22},15 L${9 + i * 22},11 L${6 + i * 22},8 L${10 + i * 22},8 Z`}
                          fill="#87CEEB"
                          stroke="#36454F"
                          strokeWidth="1"
                        />
                      ))}
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