'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.testimonials.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.testimonials.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="mb-6">
                    <span className="text-yellow-400 text-6xl leading-none">"</span>
                    <p className="text-gray-300 text-lg leading-relaxed mt-2" style={{ fontFamily: 'serif' }}>
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.author}</h4>
                      <p className="text-yellow-400 text-sm">{testimonial.position}</p>
                    </div>
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