'use client'

import { motion } from 'framer-motion'
import { copy } from '../copy'

export default function Projects() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-wider mb-6">
              {copy.projects.title}
            </h2>
            <p className="text-xl max-w-4xl mx-auto text-white font-medium" style={{ color: '#C7C5B8' }}>
              {copy.projects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {copy.projects.items.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative border-8 hover:scale-105 transition-all duration-300"
                     style={{ backgroundColor: '#8B8680', borderColor: '#4A5568' }}>
                  
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="px-4 py-2 text-sm font-bold text-black tracking-wide" 
                            style={{ backgroundColor: '#FF6B35' }}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-black mb-4 tracking-wide">
                      {project.title}
                    </h3>
                    
                    <p className="text-black leading-relaxed font-medium mb-6">
                      {project.description}
                    </p>
                    
                    <div className="w-full h-1" style={{ backgroundColor: '#FF6B35' }} />
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