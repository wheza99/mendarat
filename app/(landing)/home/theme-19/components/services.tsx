'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 25% 25%,
              rgba(255, 215, 0, 0.1) 0deg,
              transparent 30deg,
              rgba(205, 127, 50, 0.1) 60deg,
              transparent 90deg
            ),
            repeating-conic-gradient(
              from 0deg at 75% 75%,
              rgba(205, 127, 50, 0.1) 0deg,
              transparent 30deg,
              rgba(255, 215, 0, 0.1) 60deg,
              transparent 90deg
            )
          `
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.services.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
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
                {/* Art Deco Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/5 to-yellow-400/10 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
                
                <div className="relative bg-gray-900/70 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Corner Decorations */}
                  <div className="absolute top-4 left-4">
                    <div className="w-6 h-6 border-l-2 border-t-2 border-yellow-400/60 relative">
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 border-r-2 border-t-2 border-yellow-400/60 relative">
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center text-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300" style={{ fontFamily: 'serif' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: 'serif' }}>
                    {service.description}
                  </p>

                  {/* Art Deco Button */}
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center text-yellow-400 font-semibold cursor-pointer group/btn"
                  >
                    <span className="mr-3">Pelajari Lebih Lanjut</span>
                    <div className="w-8 h-px bg-gradient-to-r from-yellow-400 to-transparent relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    </div>
                  </motion.div>

                  {/* Bottom Corner Decorations */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-6 h-6 border-l-2 border-b-2 border-yellow-400/60 relative">
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-6 h-6 border-r-2 border-b-2 border-yellow-400/60 relative">
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rotate-45"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center mt-20"
          >
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 