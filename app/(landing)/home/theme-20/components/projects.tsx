'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Projects() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#36454F', fontFamily: 'serif' }}>
              {copy.projects.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#8B8680' }}>
              {copy.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-dashed transition-all duration-500 group-hover:rotate-1" style={{ borderColor: '#8B8680' }}>
                  {/* Project Image Area */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="100" height="100" viewBox="0 0 100 100">
                        <rect x="10" y="10" width="80" height="80" stroke="#8B8680" strokeWidth="2" fill="none" strokeDasharray="5,3" rx="10" />
                        <circle cx="50" cy="50" r="20" stroke="#87CEEB" strokeWidth="2" fill="none" />
                        <text x="50" y="55" textAnchor="middle" fontSize="12" fill="#36454F">IMG</text>
                      </svg>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 rounded-full text-sm font-bold border-2 border-dashed" style={{ 
                        backgroundColor: '#87CEEB', 
                        color: '#36454F',
                        borderColor: '#36454F'
                      }}>
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#36454F', fontFamily: 'serif' }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-lg leading-relaxed mb-6" style={{ color: '#8B8680' }}>
                      {project.description}
                    </p>

                    <div className="flex items-center">
                      <span className="font-semibold mr-3" style={{ color: '#36454F' }}>
                        Lihat Project
                      </span>
                      <svg width="30" height="20" viewBox="0 0 30 20">
                        <path d="M5,10 Q15,5 25,10 M20,6 Q25,10 20,14" stroke="#87CEEB" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
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