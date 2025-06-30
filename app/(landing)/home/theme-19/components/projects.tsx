'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Projects() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Art Deco Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              30deg,
              transparent,
              transparent 40px,
              rgba(255, 215, 0, 0.1) 40px,
              rgba(255, 215, 0, 0.1) 42px
            ),
            repeating-linear-gradient(
              -30deg,
              transparent,
              transparent 40px,
              rgba(205, 127, 50, 0.1) 40px,
              rgba(205, 127, 50, 0.1) 42px
            )
          `
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent" style={{ fontFamily: 'serif' }}>
              {copy.projects.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'serif' }}>
              {copy.projects.subtitle}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Art Deco Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl transform rotate-1 group-hover:rotate-3 transition-transform duration-500"></div>
                
                <div className="relative bg-gray-900/80 backdrop-blur-xl border border-yellow-400/30 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {project.category}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center cursor-pointer">
                        <span className="text-black text-2xl">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300" style={{ fontFamily: 'serif' }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6" style={{ fontFamily: 'serif' }}>
                      {project.description}
                    </p>

                    {/* Art Deco Button */}
                    <div className="flex items-center text-yellow-400 font-semibold cursor-pointer">
                      <span className="mr-3">Lihat Detail</span>
                      <span className="text-xl">♦</span>
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